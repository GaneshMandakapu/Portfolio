import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const workImages = [
    { src: "/assets/public/work-1.png", alt: "Work Example 1", title: "Web Development", description: "Creating responsive and modern web applications" },
    { src: "/assets/public/work-2.png", alt: "Work Example 2", title: "UI/UX Design", description: "Designing intuitive user interfaces" },
    { src: "/assets/public/work-3.png", alt: "Work Example 3", title: "Frontend Development", description: "Building interactive user experiences" },
    { src: "/assets/public/work-4.png", alt: "Work Example 4", title: "Backend Integration", description: "Seamless integration of frontend with backend services" }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Services
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {workImages.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={service.src} 
                alt={service.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;