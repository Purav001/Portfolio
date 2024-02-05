import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextSpan from "../utils/textSpan";
import { motion } from "framer-motion";
import mail from "../images/Mail.png";

const EmailForm = () => {
  const name = "Let's get in touch!".split("");

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
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center mt-14 mx-5 w-[1000px]">
        <div>
          <div className="mb-2 text-3xl font-bold text-center md:text-4xl lg:text-6xl text-v">
            {name.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </div>
          <p className="my-2 text-sm text-center md:my-2 lg:my-5 md:text-md lg:text-lg text-neutral-800">
            Leave your details and a short message below
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full p-4 bg-gray-100 rounded-lg shadow-lg md:gap-2"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:gap-4">
            <div className="flex flex-col w-full">
              <label className="font-medium">Full name</label>
              <input
                type="text"
                name="user_name"
                className="w-full p-5 mb-2 rounded-lg md:h-14 placeholder:text-sm placeholder:italic focus:outline-v"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full p-5 mb-2 rounded-lg md:h-14 placeholder:text-sm placeholder:italic focus:outline-v"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full">
              <label className="font-medium">Message</label>
              <textarea
                name="message"
                className="w-full p-5 mb-3 font-light rounded-lg md:h-48 placeholder:text-sm placeholder:italic focus:outline-v "
                placeholder="What would you like to ask me?"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="w-full py-2 text-xl font-semibold text-white transition duration-200 border-b-4 rounded-lg bg-v hover:bg-vBtnHover border-vBtnHover hover:border-v"
              disabled={sending}
            >
              {sending ? "Sending Message..." : "Send Message"}
            </button>
            {sent && <p className="mt-2 text-green-500">Sent with succes!</p>}
            {error && (
              <p className="mt-2 text-red-500">
                Error sending message. Try later!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
