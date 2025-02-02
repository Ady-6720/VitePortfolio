// src/components/HeroSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Code2, Briefcase, Mail, User, ChevronDown } from 'lucide-react';

/* ==================================
   ============ DATA ARRAYS ==========
   ================================== */
// Updated skills list with Java and AWS.
const majorSkills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'AWS', icon: '☁️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Docker', icon: '🐋' },
  { name: 'GraphQL', icon: '📊' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Next.js', icon: '▲' },
  { name: 'PostgreSQL', icon: '🐘' },
];

const navLinks = [
  { icon: Home, title: 'Home', href: '#home' },
  { icon: Code2, title: 'Projects', href: '#projects' },
  { icon: Briefcase, title: 'Experience', href: '#experience' },
  { icon: User, title: 'About', href: '#about' },
  { icon: Mail, title: 'Contact', href: '#contact' },
];

const summary = [
  'Passionate Full Stack Developer proficient in a balanced mix of technologies including Java, AWS, Node.js, React, Python, and more.',
  'Dedicated to building exceptional digital experiences without overemphasizing any single platform or language.',
];

/* ==================================
   ========== FRAMER MOTION ==========
   ================================== */
// Container for staggered children animations.
const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const summaryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const summaryLineVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const typewriterContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const typewriterWordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ==================================
   ======= REUSABLE COMPONENTS =======
   ================================== */
// SkillPill displays each technology as a pill.
const SkillPill = ({ skill }) => (
  <div className="flex items-center gap-2 bg-accent-jedi/10 px-6 py-3 rounded-full whitespace-nowrap">
    <span className="text-xl">{skill.icon}</span>
    <span className="text-base text-gray-300 font-medium">{skill.name}</span>
  </div>
);

// HorizontalSkills creates a continuous scrolling (marquee) effect.
const HorizontalSkills = () => {
  const repeatedSkills = [...majorSkills, ...majorSkills];
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="inline-flex gap-4 py-6 whitespace-nowrap w-max"
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {repeatedSkills.map((skill, index) => (
          <SkillPill key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

// NavLink for navigation menu items.
const NavLink = ({ icon: Icon, title, href }) => (
  <motion.a
    href={href}
    whileHover={{ width: '130px' }}
    whileTap={{ scale: 0.95 }}
    className="relative flex items-center justify-start w-[70px] h-[50px] bg-accent-jedi/90 rounded-lg px-4 overflow-hidden hover:bg-accent-jedi transition-all duration-300 group"
  >
    <span className="text-white absolute left-5 z-10">
      <Icon size={28} />
    </span>
    <span className="text-white text-sm font-medium absolute left-14 opacity-0 group-hover:opacity-100 whitespace-nowrap transform translate-x-5 group-hover:translate-x-0 transition-all duration-300">
      {title}
    </span>
  </motion.a>
);

// TypewriterText animates text word-by-word.
const TypewriterText = ({ text }) => {
  const words = text.split(' ');
  return (
    <motion.div
      variants={typewriterContainerVariants}
      initial="hidden"
      animate="visible"
      className="inline-flex flex-wrap justify-center gap-2"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={typewriterWordVariants}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

/* ==================================
   ========== MAIN HERO ==============
   ================================== */
const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full h-screen snap-start relative flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Falling Stars Animation */}
      <div className="falling-stars">
        <div className="falling-star" style={{ top: "10%", left: "5%", animationDelay: "0s" }}></div>
        <div className="falling-star" style={{ top: "20%", left: "15%", animationDelay: "5s" }}></div>
        <div className="falling-star" style={{ top: "30%", left: "25%", animationDelay: "10s" }}></div>
        <div className="falling-star" style={{ top: "40%", left: "35%", animationDelay: "15s" }}></div>
        <div className="falling-star" style={{ top: "50%", left: "45%", animationDelay: "20s" }}></div>
        <div className="falling-star" style={{ top: "60%", left: "55%", animationDelay: "25s" }}></div>
        <div className="falling-star" style={{ top: "70%", left: "65%", animationDelay: "30s" }}></div>
        <div className="falling-star" style={{ top: "80%", left: "75%", animationDelay: "35s" }}></div>
      </div>

      {/* Static Stars Animation */}
      <div className="static-stars">
        <div className="static-star" style={{ top: "5%", left: "50%" }}></div>
        <div className="static-star" style={{ top: "15%", left: "80%" }}></div>
        <div className="static-star" style={{ top: "25%", left: "30%" }}></div>
        <div className="static-star" style={{ top: "65%", left: "10%" }}></div>
        <div className="static-star" style={{ top: "85%", left: "90%" }}></div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center px-4 relative z-10"
      >
        {/* Name Title */}
        <motion.h1 variants={fadeUpVariants} className="hero-title mb-4">
          Aditya Malode
        </motion.h1>

        {/* Role / Subtitle */}
        <motion.div variants={fadeUpVariants}>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            <TypewriterText text="Full Stack Developer | Java, AWS, Node.js, React, Python" />
          </p>
        </motion.div>

        {/* Summary */}
        <motion.div
          variants={summaryContainerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 max-w-2xl"
        >
          {summary.map((line, index) => (
            <motion.p key={index} variants={summaryLineVariants} className="text-lg leading-relaxed text-gray-300">
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Skills Marquee */}
        <motion.div variants={fadeUpVariants} className="mb-12 w-full">
          <HorizontalSkills />
        </motion.div>

        {/* Navigation Menu */}
        <motion.div
          variants={fadeUpVariants}
          className="flex justify-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg shadow-black/5"
        >
          {navLinks.map((link, idx) => (
            <NavLink key={idx} {...link} />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-white/60"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
