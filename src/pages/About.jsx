import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about-glass"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">About Me</h2>
      <p>
        I'm <span className="accent">Vaishnav vernekar</span>.<br />
        A passionate Full stack web developer who loves crafting beautiful and functional digital experiences.
      </p>
      <ul className="about-skills">
        <li><b>Frameworks:</b> React,Expressjs Vite</li>
        <li><b>Languages:</b> JavaScript, HTML5, CSS3,Nodejs,Java,c,c++</li>
        <li><b>Styling:</b> CSS3, Tailwind, Styled-Components,Bootstrap</li>
        <li><b>Databases:</b> Mongodb,Mysql</li>
        <li><b>Tooling:</b> Git, Figma, Framer Motion</li>
        <li><b>Soft Skills:</b> Communication, Collaboration, Continuous Learning</li>
      </ul>
      <div className="about-extra">
        <h4 style={{ color: "#a5b4fc", marginTop: "1.5rem" }}>Fun Facts</h4>
        <ul style={{ color: "#d1d5db", fontSize: "1.01rem", marginTop: "0.6rem" }}>
          <li>🌍 I love exploring new tech and frameworks.</li>
          <li>🎵 Coding playlists fuel my productivity.</li>
          <li>☕ Coffee and good code go hand in hand!</li>
        </ul>
      </div>
    </motion.div>
  );
}