// src/components/SocialLinks.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Facebook } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/am6720/', icon: <Linkedin size={24} /> },
  { name: 'GitHub', url: 'https://github.com/Ady-6720', icon: <Github size={24} /> },
  { name: 'Email', url: 'mailto:aditya.malode@gmail.com', icon: <Facebook size={24} /> },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-gray-300 hover:text-indigo-500 transition-colors"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
