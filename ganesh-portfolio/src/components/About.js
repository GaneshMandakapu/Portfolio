import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10"
        >
          <img src="/assets/profile_photo.jpeg" alt="Ganesh" className="w-64 h-64 rounded-lg shadow-lg" />
          <div className="text-left">
            <p className="mb-4">
              I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>Languages: HTML, CSS, JS</div>
              <div>Web: React, Angular</div>
              <div>UI: Figma, Sketch</div>
              <div>Education: B.Tech Computer Science</div>
              <div>Projects: 30+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;