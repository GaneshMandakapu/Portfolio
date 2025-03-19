import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-pink-100 to-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-10">I’d love to hear from you! Please fill out the form below.</p>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg mx-auto space-y-6"
        >
          <input type="text" placeholder="Enter your name" className="w-full p-4 border rounded-lg" />
          <input type="email" placeholder="Enter your email" className="w-full p-4 border rounded-lg" />
          <textarea placeholder="Enter your message" className="w-full p-4 border rounded-lg h-32"></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-black text-white px-6 py-3 rounded-full"
          >
            Submit Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;