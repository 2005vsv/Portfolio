import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about-glass max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title text-3xl font-bold text-center mb-6">About Me</h2>

      <p className="text-lg text-gray-300 text-center leading-relaxed mb-6">
        I'm <span className="accent font-semibold text-indigo-400">Vaishnav Vernekar</span>.<br />
        A passionate Full Stack Web Developer who loves crafting beautiful and functional digital experiences.
      </p>

      <ul className="about-skills grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200 text-base">
        <li><b>Frameworks:</b> React, Express.js, Vite</li>
        <li><b>Languages:</b> JavaScript, HTML5, CSS3, Node.js, Java, C, C++</li>
        <li><b>Styling:</b> CSS3, Tailwind, Styled-Components, Bootstrap</li>
        <li><b>Databases:</b> MongoDB, MySQL</li>
        <li><b>Tooling:</b> Git, Figma, Framer Motion</li>
        <li><b>Soft Skills:</b> Communication, Collaboration, Continuous Learning</li>
      </ul>

      <div className="about-extra mt-10">
        <h4 className="text-indigo-300 text-xl font-semibold mb-2">Fun Facts</h4>
        <ul className="text-gray-400 text-base space-y-2">
          <li>🌍 I love exploring new tech and frameworks.</li>
          <li>🎵 Coding playlists fuel my productivity.</li>
          <li>☕ Coffee and good code go hand in hand!</li>
        </ul>
      </div>
    </motion.div>
  );
}
