// src/App.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection'; 
import SectionNavigation from './components/SectionNavigation';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ChatBot from './components/ChatBot';
const SocialLinks = () => (
  <div className="fixed left-8 bottom-0 z-50 hidden md:block">
    <div 
      className="flex flex-col gap-6 items-center after:content-[''] 
                 after:w-px after:h-24 after:bg-gray-400"
    >
      <motion.a
        whileHover={{ y: -2 }}
        href="https://github.com/Ady-6720"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-accent-jedi transition-colors"
      >
        <Github className="w-6 h-6" />
      </motion.a>
      <motion.a
        whileHover={{ y: -2 }}
        href="https://www.linkedin.com/in/am6720/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-accent-jedi transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </motion.a>
      <motion.a
        whileHover={{ y: -2 }}
        href="mailto:aditya.malode@gmail.com"
        className="text-gray-400 hover:text-accent-jedi transition-colors"
      >
        <Mail className="w-6 h-6" />
      </motion.a>
    </div>
  </div>
);

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-primary-dark text-white">
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <AboutSection/>
      {/* Experience Section */}
      <ExperienceSection/>

      {/* Projects Section */}
      <ProjectsSection/>

      
      

      {/* Contact Section */}
       <ContactSection/>
      <SectionNavigation />
      {/* Social Links (left side) */}
      <SocialLinks />
      <ChatBot />
    </div>
  );
}

export default App;
