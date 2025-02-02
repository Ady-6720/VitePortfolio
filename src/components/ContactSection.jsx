// src/components/ContactSection.jsx

import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Animation variants for the two columns.
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with your email service here (e.g., Kinde)
    alert("Your message has been sent!");
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-wide">Contact</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={leftColumnVariants}
            className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6 leading-relaxed">
              I’m open to discussing new projects, ideas, or opportunities. Reach out via any of the methods below.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-bold text-indigo-400">Email:</span>{" "}
                <a
                  href="mailto:aditya.malode01@gmail.com"
                  className="hover:underline"
                >
                  aditya.malode01@gmail.com
                </a>
              </li>
              <li>
                <span className="font-bold text-indigo-400">Phone:</span>{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (762) 310-9430
                </a>
              </li>
              <li>
                <span className="font-bold text-indigo-400">Location:</span> Athens, GA, USA
              </li>
              <li>
                <span className="font-bold text-indigo-400">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/am6720/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/am6720
                </a>
              </li>
              <li>
                <span className="font-bold text-indigo-400">GitHub:</span>{" "}
                <a
                  href="https://github.com/Ady-6720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/Ady-6720
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rightColumnVariants}
            className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-indigo-400 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-indigo-400 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-indigo-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded text-white font-bold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
