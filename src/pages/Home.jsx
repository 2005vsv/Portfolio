import React from "react";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0f172a] text-white">
      {/* Main animated content */}
      <motion.main
        className="home-fullpage max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Hero Section */}
        <section className="hero-section flex flex-col-reverse lg:flex-row items-center gap-8">
          <motion.img
            className="profile-img-hero w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
            src="/myimage.jpg"
            alt="profile"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          />
          <div className="hero-text text-center lg:text-left space-y-4">
            <motion.h1
              className="home-title text-3xl sm:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Hi, I'm <span className="accent text-indigo-400">Vaishnav Vernekar</span>
            </motion.h1>
            <motion.h2
              className="home-role text-xl sm:text-2xl text-gray-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              Full Stack Web Developer
            </motion.h2>
            <motion.p
              className="home-desc text-base sm:text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              I am a Full Stack Web Developer with a strong foundation in computer science, currently pursuing my degree at KLS Gogte Institute of Technology. I have hands-on experience developing full-stack applications using the MERN stack. My projects showcase my ability to implement secure, responsive user interfaces and manage databases effectively. I am passionate about learning and applying new technologies to solve real-world problems.
            </motion.p>
            <motion.div
              className="home-socials flex justify-center lg:justify-start gap-4 text-xl text-indigo-400 mt-4"
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
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        <motion.section
          className="highlights-section mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-gray-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="highlight space-y-2">
            <i className="fa-solid fa-code accent text-indigo-400 text-2xl"></i>
            <p>1+ years coding experience</p>
          </div>
          <div className="highlight space-y-2">
            <i className="fa-solid fa-rocket accent text-indigo-400 text-2xl"></i>
            <p>5+ completed projects</p>
          </div>
          <div className="highlight space-y-2">
            <i className="fa-solid fa-certificate accent text-indigo-400 text-2xl"></i>
            <p>React, JS, CSS Certified</p>
          </div>
          <div className="highlight space-y-2">
            <i className="fa-solid fa-location-dot accent text-indigo-400 text-2xl"></i>
            <p>Gangavathi</p>
          </div>
        </motion.section>

        {/* What I Love */}
        <motion.section
          className="whatilove-section mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <h3 className="section-mini-title text-xl font-semibold text-indigo-400 mb-4">What I Love</h3>
          <ul className="home-interests grid sm:grid-cols-2 gap-4 text-gray-400">
            <li><i className="fa-solid fa-palette accent text-indigo-400 mr-2"></i> Crafting pixel-perfect UIs</li>
            <li><i className="fa-solid fa-bolt accent text-indigo-400 mr-2"></i> Smooth, delightful animations</li>
            <li><i className="fa-solid fa-mobile-screen-button accent text-indigo-400 mr-2"></i> Mobile-first web apps</li>
            <li><i className="fa-solid fa-users accent text-indigo-400 mr-2"></i> Collaboration & learning</li>
          </ul>
        </motion.section>

        {/* Skills */}
        <motion.section
          className="skills-section mt-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <h3 className="section-mini-title text-xl font-semibold text-indigo-400 mb-4">Skills</h3>
          <div className="skills-list space-y-2 text-gray-300">
            <p><span className="skills-label font-semibold">Languages:</span> JavaScript, HTML5, CSS3, Node.js, Java, C, C++</p>
            <p><span className="skills-label font-semibold">Frameworks:</span> React, Redux, Vite, Express.js</p>
            <p><span className="skills-label font-semibold">Databases:</span> MongoDB, MySQL</p>
            <p><span className="skills-label font-semibold">Styling:</span> Tailwind, Bootstrap</p>
            <p><span className="skills-label font-semibold">Tools:</span> Git, GitHub, Figma, Jira, VSCode</p>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="cta-section mt-12 bg-indigo-600 text-white py-6 px-4 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7 }}
        >
          <i className="fa-solid fa-star accent text-white text-xl mb-2"></i>
          <p className="text-lg font-semibold">
            Open to Internships & Full-time Opportunities!
          </p>
          <p className="text-sm">Connect with me if you have an exciting project or role in mind.</p>
        </motion.section>
      </motion.main>

      
    </div>
  );
}
