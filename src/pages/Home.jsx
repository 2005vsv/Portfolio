import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="home-fullpage"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <motion.img
          className="profile-img-hero"
          src='myimage.jpg'
          alt="profile"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        />
        <div className="hero-text">
          <motion.h1
            className="home-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I'm <span className="accent">Vaishnav vernekar</span>
          </motion.h1>
          <motion.h2
            className="home-role"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            Full Stack Web Developer
          </motion.h2>
          <motion.p
            className="home-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
             I am a Full Stack Web Developer with a strong foundation in computer science, currently pursuing my degree at KLS Gogte Institute 
Of Technology. I have hands-on experience developing full-stack applications using the MERN stack. My projects showcase my 
ability to implement secure, responsive user interfaces and manage databases effectively. I am passionate about learning and 
applying new technologies to solve real-world problems
          </motion.p>
          <motion.div
            className="home-socials"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a href="https://github.com/2005vsv" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vaishnav-vernekar-845077288/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:your@email.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Highlights/Quick Stats */}
      <motion.section
        className="highlights-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="highlight">
          <i className="fa-solid fa-code accent"></i>
          <span>
            1+ years coding experience
          </span>
        </div>
        <div className="highlight">
          <i className="fa-solid fa-rocket accent"></i>
          <span>
            5+ completed projects
          </span>
        </div>
        <div className="highlight">
          <i className="fa-solid fa-certificate accent"></i>
          <span>
            React, JS, CSS Certified
          </span>
        </div>
        <div className="highlight">
          <i className="fa-solid fa-location-dot accent"></i>
          <span>
            Gangavathi
          </span>
        </div>
      </motion.section>

      {/* What I Love Section */}
      <motion.section
        className="whatilove-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <h3 className="section-mini-title">What I Love</h3>
        <ul className="home-interests">
          <li>
            <i className="fa-solid fa-palette accent"></i> Crafting pixel-perfect UIs
          </li>
          <li>
            <i className="fa-solid fa-bolt accent"></i> Smooth, delightful animations
          </li>
          <li>
            <i className="fa-solid fa-mobile-screen-button accent"></i> Mobile-first web apps
          </li>
          <li>
            <i className="fa-solid fa-users accent"></i> Collaboration & learning
          </li>
        </ul>
      </motion.section>

      {/* Skills Overview */}
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <h3 className="section-mini-title">Skills</h3>
        <div className="skills-list">
          <div>
            <span className="skills-label">Languages:</span> JavaScript, HTML5, CSS3,Nodejs,Java,c,c++
          </div>
          <div>
            <span className="skills-label">Frameworks:</span> React, Redux, Vite,Expressjs
          </div>
          <div>
            <span className="skills-label">Databases:</span> Mongodb,Mysql
          </div>
          <div>
            <span className="skills-label">Styling:</span> Tailwind, Bootstrap
          </div>
          <div>
            <span className="skills-label">Tools:</span> Git,Github, Figma, jira,vscode
          </div>
        </div>
      </motion.section>

      {/* Call to Action / Open for Opportunities */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7 }}
      >
        <i className="fa-solid fa-star accent"></i>
        <span>
          <b>Open to do Internships & full-time opportunities!</b><br />
          Connect with me if you have an exciting project or role in mind.
        </span>
      </motion.section>
    </motion.div>
  );
}