import { createElement } from "react";
import { Resend } from "resend";
import { renderToStaticMarkup } from "react-dom/server";
import { Handler, HandlerEvent } from "@netlify/functions";

import dotenv from "dotenv";
import { ContactFormEmail } from "email";

dotenv.config(); // Make sure to load environment variables

// Define the type for validateString function
const validateString = (value: unknown, maxLength: number): boolean => {
  if (typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

// Initialize Resend with the API key from the environment variables
const resend = new Resend(process.env.RESEND_API_KEY as string);

// Netlify serverless function handler
export const handler: Handler = async (event: HandlerEvent) => {
  // Allow only POST method
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  // Parse request body
  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON body" }, error),
    };
  }

  const { senderEmail, message } = body;

  // Validate the inputs
  if (!validateString(senderEmail, 500)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid sender email" }),
    };
  }

  if (!validateString(message, 5000)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid message" }),
    };
  }

  // Render React email component to HTML
  const emailHtml = renderToStaticMarkup(
    createElement(ContactFormEmail, { message, senderEmail })
  );

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "cfrancis1989@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      html: emailHtml, // Pass the rendered HTML
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully", data }),
    };
  } catch (error: unknown) {
    // Log the error for debugging
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
