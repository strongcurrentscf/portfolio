import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { SectionHeading, SubmitBtn } from "components";
import { useSectionInView } from "hooks";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact" });

  const [senderEmail, setSenderEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setPending(true);

    try {
      const response = await axios.post("/.netlify/functions/sendEmail", {
        senderEmail,
        message,
      });

      if (response.status === 200) {
        toast.success("Email sent successfully!");
        setSenderEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.error("An error occurred while sending the email.");
      console.log(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28 pt-[5rem] dark:text-gray-100"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-gray-400">
        Please contact me directly at{" "}
        <a
          className="underline dark:text-gray-200"
          href="mailto:cfrancis1989@gmail.com"
        >
          cfrancis1989@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="w-[95%] sm:w-full mt-10 flex flex-col dark:text-gray-100 mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder-gray-500 dark:placeholder-gray-400"
          name="senderEmail"
          type="email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-xl border border-gray-300 dark:border-gray-600 p-4 bg-gray-50 dark:bg-gray-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder-gray-500 dark:placeholder-gray-400"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={pending} />
      </form>
    </motion.section>
  );
}
