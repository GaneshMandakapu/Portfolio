import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center p-6 bg-white shadow-md"
    >
      <div className="text-2xl font-bold">GANESH.</div>
      <nav className="space-x-6">
        <a href="#home" className="hover:text-pink-500 transition">Home</a>
        <a href="#about" className="hover:text-pink-500 transition">About Me</a>
        <a href="#services" className="hover:text-pink-500 transition">Services</a>
        <a href="#work" className="hover:text-pink-500 transition">My Work</a>
        <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
      </nav>
    </motion.header>
  );
};

export default Header;