import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

function App() {
  return (
    <Router>
      <nav className="navbar-glass">
        <div className="navbar-brand">Vaishnav vernekar</div>
        <div className="navbar-links">
          {navLinks.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) =>
                "navbar-link" + (isActive ? " navbar-link-active" : "")
              }
              end={l.path === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="main-content">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <footer className="footer-glass">
        © {new Date().getFullYear()} Vaishnav vernekar • Built with React
      </footer>
    </Router>
  );
}

export default App;