import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "/assets/public/work-1.png",
      github: "https://github.com/yourusername/ecommerce",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Modern task management application with real-time updates",
      image: "/assets/public/work-2.png",
      github: "https://github.com/yourusername/task-manager",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Framer Motion",
      image: "/assets/public/work-3.png",
      github: "https://github.com/ganeshbalaraju/portfolio",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application",
      image: "/assets/public/work-4.png",
      github: "https://github.com/yourusername/weather-app",
      live: "#"
    },
    {
      title: "Coming Soon",
      description: "An exciting AI-powered application currently in development",
      image: "/assets/public/work-3.png",
      github: "#",
      live: "#",
      isComingSoon: true
    },
    {
      title: "Coming Soon",
      description: "A revolutionary blockchain project in the works",
      image: "/assets/public/work-4.png",
      github: "#",
      live: "#",
      isComingSoon: true
    }
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4"
        >
          My Latest Works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-center mb-8 md:mb-12"
        >
          Here are some of my recent projects
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`bg-gray-50 rounded-lg overflow-hidden shadow-lg ${project.isComingSoon ? 'opacity-70' : ''}`}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-48 object-cover ${project.isComingSoon ? 'filter blur-[2px]' : ''}`}
                />
                {project.isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black text-white px-4 py-2 rounded-full text-sm">Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors text-center text-sm"
                  >
                    View on GitHub
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors text-center text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;