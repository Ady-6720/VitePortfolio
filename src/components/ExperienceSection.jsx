// src/components/ExperienceSection.jsx

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Data Analyst",
    company: "University of Georgia",
    period: "Nov 2024 – Present",
    location: "Athens, GA, USA",
    responsibilities: [
      <>
        Developed and automated ETL pipelines using Python and Pandas, streamlining data integration and improving accessibility by{" "}
        <span className="text-indigo-400 font-bold">40%</span>.
      </>,
      <>
        Created Power BI and Tableau dashboards for real-time analytics, reducing decision-making time by{" "}
        <span className="text-indigo-400 font-bold">15%</span>.
      </>,
      <>
        Refactored complex SQL queries for a 1TB database, cutting execution times by{" "}
        <span className="text-indigo-400 font-bold">25%</span>.
      </>,
      <>Leveraged AWS RDS for secure data storage, ensuring high availability with a multi-AZ setup.</>,
    ],
    skills: ["Python", "Pandas", "Power BI", "Tableau", "SQL", "AWS RDS"],
  },
  {
    title: "Full Stack Developer",
    company: "University of Georgia",
    period: "Aug 2024 – Nov 2024",
    location: "Athens, GA, USA",
    responsibilities: [
      <>
        Designed and deployed a React.js and Redux project-tracking application, boosting efficiency by{" "}
        <span className="text-indigo-400 font-bold">35%</span>.
      </>,
      <>
        Engineered a normalized PostgreSQL database with indexing and partitioning, reducing latency by{" "}
        <span className="text-indigo-400 font-bold">40%</span>.
      </>,
      <>Secured backend APIs using Node.js, Express.js, and JWT authentication, ensuring data integrity.</>,
      <>Deployed the application via Docker containers on AWS EC2, establishing a scalable deployment pipeline.</>,
    ],
    skills: ["React.js", "Redux", "PostgreSQL", "Node.js", "Express.js", "Docker", "AWS EC2"],
  },
  {
    title: "Software Engineer",
    company: "GrunTech Solutions",
    period: "May 2022 – Aug 2023",
    location: "Nashik, Maharashtra, India | On-site",
    responsibilities: [
      <>Built a Batch Management System using Java/JavaFX, handling 300K+ client records with zero downtime.</>,
      <>
        Automated CI/CD pipelines via Jenkins and deployed services using Docker and Kubernetes, reducing release cycles by{" "}
        <span className="text-indigo-400 font-bold">25%</span>.
      </>,
      <>Migrated legacy systems to AWS, implementing RDS and S3 for improved scalability and reliability.</>,
      <>
        Enhanced application performance by{" "}
        <span className="text-indigo-400 font-bold">30%</span> via advanced multithreading and efficient use of ExecutorService in Java.
      </>,
    ],
    skills: ["Java", "JavaFX", "SQL", "AWS RDS", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Technophilia Pvt. Ltd.",
    period: "Jan 2022 – Apr 2022",
    location: "India | Remote",
    responsibilities: [
      <>
        Developed interactive and responsive UI components using React.js, enhancing website performance and user experience.
      </>,
      <>
        Utilized JavaScript and AJAX for dynamic content loading, resulting in faster page load times.
      </>,
      <>
        Integrated SQL databases for efficient data retrieval, ensuring seamless data presentation on the front end.
      </>,
    ],
    skills: ["React.js", "JavaScript", "AJAX", "SQL"],
  },
  {
    title: "Machine Learning Summer Intern",
    company: "Technophilia Pvt. Ltd.",
    period: "Jul 2021 – Aug 2021",
    location: "Mumbai, Maharashtra, India",
    responsibilities: [
      <>
        Learned foundational Machine Learning concepts, gaining hands-on experience with Pandas, NumPy, and Tkinter.
      </>,
      <>
        Completed a training project on Disease Prediction Using Supervised Learning, applying ML algorithms for healthcare insights.
      </>,
      <>
        Acquired a certificate in Machine Learning through practical applications and theoretical understanding.
      </>,
    ],
    skills: ["Machine Learning", "Pandas", "NumPy", "Tkinter"],
  },
];

// Animation variant for timeline items
const timelineItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-8 bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-left">Experience</h2>
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line in center of the left column */}
          <div className="absolute top-0 bottom-0 left-[115px] w-px bg-indigo-500" />
          {/* Timeline items */}
          <motion.div>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-[100px_30px_1fr] items-start py-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={timelineItemVariants}
              >
                {/* Left column: Period (time started and ended) */}
                <div className="text-right pr-2">
                  <p className="text-sm text-gray-400 tracking-wide">{exp.period}</p>
                </div>
                {/* Center column: Timeline dot */}
                <div className="flex justify-center items-center">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full border-2 border-gray-900" />
                </div>
                {/* Right column: Experience card */}
                <div className="ml-2">
                  <div className="max-w-3xl bg-gray-800 p-3 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold tracking-wide">{exp.title}</h3>
                    <p className="text-indigo-400">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-1">{exp.location}</p>
                    <ul className="list-disc list-inside leading-relaxed">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm">{resp}</li>
                      ))}
                    </ul>
                    <div className="mt-1">
                      <span className="font-semibold">Skills:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-indigo-600 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
