import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <motion.div
      className="contact-glass"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Contact</h2>
      {sent ? (
        <div className="contact-sent">Thank you! I'll be in touch soon.</div>
      ) : (
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message..." required rows={4} />
          <button type="submit">Send</button>
        </form>
      )}
      <div className="contact-links">
        <a href="mailto:your@email.com">
          <i className="fa-solid fa-envelope"></i> Email
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
      </div>
      <div className="contact-extra" style={{ marginTop: "1.5rem", color: "#a5b4fc" }}>
        <i className="fa-solid fa-download"></i> <a href="/your-resume.pdf" style={{ color: "#a5b4fc" }} download>Download Resume</a>
      </div>
    </motion.div>
  );
}