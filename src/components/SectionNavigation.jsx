// src/components/SectionNavigation.jsx

import React, { useEffect, useRef, useState } from 'react';
import { Home, Briefcase, Code, User, Mail } from 'lucide-react';

const allSections = [
  { name: 'Home', id: 'home', icon: <Home size={24} /> },
  { name: 'Experience', id: 'experience', icon: <Briefcase size={24} /> },
  { name: 'Projects', id: 'projects', icon: <Code size={24} /> },
  { name: 'About', id: 'about', icon: <User size={24} /> },
  { name: 'Contact', id: 'contact', icon: <Mail size={24} /> },
];

const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const hideTimerRef = useRef(null);

  // Use IntersectionObserver to detect which section is in view.
  useEffect(() => {
    // Include the 'hero' section along with others.
    const sectionIds = ['hero', ...allSections.map(s => s.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Auto-pop: show sidebar if mouse is near the right edge.
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX > window.innerWidth - 50) {
        showSidebar();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const showSidebar = () => {
    setIsSidebarVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setIsSidebarVisible(false);
    }, 5000);
  };

  const handleMouseEnter = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setIsSidebarVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimerRef.current = setTimeout(() => {
      setIsSidebarVisible(false);
    }, 5000);
  };

  // Smoothly scroll to the section when clicked.
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // **Hide the sidebar entirely when the active section is "hero".**
  if (activeSection === 'hero') {
    return null;
  }

  return (
    <nav
      className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 transition-transform duration-500 ${
        isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center p-2 bg-white/20 backdrop-blur-md rounded-2xl border border-gray-200/10 shadow-lg">
        {allSections.map((section) => (
          <label
            key={section.id}
            htmlFor={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative w-16 h-16 p-4 ease-in-out duration-300 border-solid border-black/10 group flex items-center justify-center text-black rounded-xl cursor-pointer ${
              activeSection === section.id ? 'shadow-lg border border-indigo-500' : ''
            }`}
          >
            <input
              type="radio"
              name="path"
              id={section.id}
              className="hidden"
              checked={activeSection === section.id}
              readOnly
            />
            <div className="transition-transform duration-300 group-hover:scale-125">
              {section.icon}
            </div>
          </label>
        ))}
      </div>
    </nav>
  );
};

export default SectionNavigation;
