import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_elbnosp",
        "template_nwxwdkm",
        form.current,
        "FqmfdQNRcKVLFFon_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      className="contact-glass max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title text-3xl font-bold text-center mb-8 text-white">Contact</h2>

      {sent ? (
        <div className="contact-sent text-green-400 text-center text-lg">
          Thank you! I'll be in touch soon.
        </div>
      ) : (
        <form
          ref={form}
          className="contact-form flex flex-col gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="bg-transparent border border-gray-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="bg-transparent border border-gray-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows={4}
            className="bg-transparent border border-gray-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
          >
            Send
          </button>
        </form>
      )}
    </motion.div>
  );
}
