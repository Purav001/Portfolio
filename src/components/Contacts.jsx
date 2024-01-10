import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contacts = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  console.log(import.meta.env.VITE_PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setSending(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          setSending(false);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-5"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="mb-4 text-2xl text-center">Send me an email!</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md p-4 bg-gray-100 rounded-md"
      >
        <div>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full p-2 mb-4 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full p-2 mb-4 rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            className="w-full p-2 mb-4 rounded-md"
            placeholder="What would you like to ask me?"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          value="Send"
          className="w-full py-2 text-white transition duration-300 bg-[#7c7cb3] hover:bg-[#5b5bae] rounded-lg"
          disabled={sending}
        >
          {sending ? "Sending Message..." : "Send"}
        </button>
        {sent && <p className="mt-2 text-green-500">Sent with succes!</p>}
        {error && (
          <p className="mt-2 text-red-500">Error sending message. Try later!</p>
        )}
      </form>
    </motion.div>
  );
};

export default Contacts;
