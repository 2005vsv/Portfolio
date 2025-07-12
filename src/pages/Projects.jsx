import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Food Delivery App",
    desc: "A full-stack food delivery application with modern UI/UX, real-time tracking, and integrated payment gateway.",
    img: "https://maticz.com/assets/images/fooddelivery/food-delivery-applications.webp",
    link: "https://fooddelivery-lmzi.vercel.app/",
  },
  {
    name: "NotesApp",
    desc: "A minimal, responsive note-taking app with cloud sync and offline support, built for productivity.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNdZJBN1jY7A8lwJ3AMyevS5OnQCSWSWEAlw&s",
    link: "https://titannotesapp.netlify.app/",
  },
  {
    name: "Ecommerce App",
    desc: "A sleek eCommerce mobile app featuring product search, secure checkout, and real-time inventory management.",
    img: "https://unblast.com/wp-content/uploads/2020/05/Furniture-E-commerce-App-Template-1.jpg",
    link: "https://saleskart.vercel.app/",
  },
  {
    name: "MovieApp",
    desc: "A movie listing and streaming platform with search, filtering, reviews, and watchlist functionality.",
    img: "https://www.lifewire.com/thmb/UCtkl39x4XpiNlwUB9chXwP8jgU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/youtube-app-fre-movies-0e0c7249ec954f5a88b1980b1e8b70a1.png",
    link: "https://netmovies5.netlify.app/",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="projects-glass p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="projects-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.div
            className="project-card-glass bg-white/20 backdrop-blur-lg p-4 rounded-2xl shadow-lg text-center"
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.15 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 #4f46e5bb",
              y: -8,
            }}
          >
            <img
              src={p.img}
              alt={p.name}
              className="project-img rounded-xl h-48 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-200 mt-2 mb-4">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link inline-block px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
