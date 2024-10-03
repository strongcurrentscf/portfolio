import { createElement } from "react";
import { Resend } from "resend";
import { renderToStaticMarkup } from "react-dom/server";
import { ContactFormEmail } from "email";
import dotenv from "dotenv";

dotenv.config(); // Make sure to load environment variables

// Validation function
const validateString = (value, maxLength) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

// Netlify serverless function
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { senderEmail, message } = JSON.parse(event.body);

  // Simple server-side validation
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
      reply_to: senderEmail,
      html: emailHtml, // Pass the rendered HTML
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully", data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
}
