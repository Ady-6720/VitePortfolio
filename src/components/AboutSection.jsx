// src/components/AboutSection.jsx

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 tracking-wide">About Me</h2>
        <p className="mb-4 leading-relaxed text-left">
          With over <strong className="text-indigo-400">4 years of diverse experience</strong> in the tech industry, I have built robust solutions spanning data analytics, full‑stack development, and system engineering. Currently, I work as a <strong className="text-indigo-400">Data Analyst</strong> at the University of Georgia—designing and automating ETL pipelines to streamline data integration and unlock actionable insights.
        </p>
        <p className="mb-4 leading-relaxed text-left">
          My approach goes beyond writing code; it's about crafting solutions that solve real problems. I consistently apply my strong <strong className="text-indigo-400">communication</strong>, <strong className="text-indigo-400">collaboration</strong>, <strong className="text-indigo-400">adaptability</strong>, and <strong className="text-indigo-400">problem-solving</strong> skills to bridge the gap between innovative technology and practical business needs.
        </p>
        <p className="leading-relaxed text-left">
          I’m passionate about refining processes, challenging conventional approaches, and exploring new technologies to drive meaningful change. Every project is a chance to learn, innovate, and deliver tangible impact.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
