// src/components/ProjectsSection.jsx

import React from 'react';

const projects = [

    {
        title: "MindBridge – Neurodiversity Support App (SDE)",
        skills: ["Swift", "Firebase", "GraphQL", "WebSocket", "Core Data"],
        details: (
          <>
            <p>
              <strong className="text-indigo-400">Developed</strong> a scalable iOS application using <strong className="text-indigo-400">Swift</strong> and <strong className="text-indigo-400">Firebase</strong>, integrating <strong className="text-indigo-400">GraphQL</strong> for real‑time data synchronization.
            </p>
            <p>
              <strong className="text-indigo-400">Engineered</strong> a live forum feature utilizing <strong className="text-indigo-400">WebSocket</strong> for low‑latency interactions.
            </p>
            <p>
              <strong className="text-indigo-400">Implemented</strong> persistent local storage with <strong className="text-indigo-400">Core Data</strong> to support offline functionality.
            </p>
          </>
        ),
      },
  {
    
    // Highest complexity / best project on top.
    title: "Distributed File System (SDE)",
    skills: ["Java", "gRPC", "PostgreSQL", "Concurrency", "Fault Tolerance"],
    details: (
      <>
        <p>
          <strong className="text-indigo-400">Refactored</strong> a legacy Java file system into a distributed architecture leveraging <strong className="text-indigo-400">gRPC</strong> for efficient inter-node communication.
        </p>
        <p>
          <strong className="text-indigo-400">Implemented</strong> robust fault tolerance via data replication and managed metadata using <strong className="text-indigo-400">PostgreSQL</strong>.
        </p>
        <p>
          <strong className="text-indigo-400">Optimized</strong> concurrent processing by fine-tuning Java thread management through systematic benchmarking.
        </p>
      </>
    ),
  },
  
  {
    title: "SecureFS – Encrypted File System (SDE)",
    skills: ["Java", "AES", "Multi-threading", "SQLite", "RBAC"],
    details: (
      <>
        <p>
          <strong className="text-indigo-400">Enhanced</strong> a Java file system by integrating <strong className="text-indigo-400">AES</strong> encryption to secure file data.
        </p>
        <p>
          <strong className="text-indigo-400">Optimized</strong> multi-threaded file I/O and implemented <strong className="text-indigo-400">role‑based access control (RBAC)</strong> for data security.
        </p>
        <p>
          <strong className="text-indigo-400">Leveraged</strong> <strong className="text-indigo-400">SQLite</strong> for lightweight metadata management and auditing.
        </p>
      </>
    ),
  },
  {
    title: "E-Commerce Backend (SDE)",
    skills: ["Java Spring Boot", "MySQL", "RESTful APIs", "JWT"],
    details: (
      <>
        <p>
          <strong className="text-indigo-400">Designed</strong> a microservices-based backend using <strong className="text-indigo-400">Spring Boot</strong> and <strong className="text-indigo-400">MySQL</strong> for robust product and order management.
        </p>
        <p>
          <strong className="text-indigo-400">Developed</strong> secure RESTful APIs with <strong className="text-indigo-400">JWT</strong> for user authentication and cart operations.
        </p>
        <p>
          <strong className="text-indigo-400">Optimized</strong> SQL queries to minimize latency and maximize throughput.
        </p>
      </>
    ),
  },
  {
    title: "SocialSentiment – Twitter Analysis (Hybrid)",
    skills: ["Python", "Tweepy", "MySQL", "NLTK", "Flask", "AWS EC2"],
    details: (
      <>
        <p>
          <strong className="text-indigo-400">Implemented</strong> a tweet ingestion pipeline using <strong className="text-indigo-400">Tweepy</strong> and stored data in <strong className="text-indigo-400">MySQL</strong> for analysis.
        </p>
        <p>
          <strong className="text-indigo-400">Applied</strong> natural language processing with <strong className="text-indigo-400">NLTK</strong> to extract sentiment metrics.
        </p>
        <p>
          <strong className="text-indigo-400">Developed</strong> a Flask dashboard for real‑time trend visualization, deployed on <strong className="text-indigo-400">AWS EC2</strong>.
        </p>
      </>
    ),
  },
  {
    title: "SalesInsight – Retail Analytics (Data)",
    skills: ["Python", "Pandas", "SQL", "Jupyter", "Matplotlib"],
    details: (
      <>
        <p>
          <strong className="text-indigo-400">Engineered</strong> data pipelines using <strong className="text-indigo-400">Pandas</strong> and <strong className="text-indigo-400">SQL</strong> to analyze retail sales trends.
        </p>
        <p>
          <strong className="text-indigo-400">Automated</strong> reporting workflows via <strong className="text-indigo-400">Jupyter Notebooks</strong>.
        </p>
        <p>
          <strong className="text-indigo-400">Visualized</strong> performance trends with <strong className="text-indigo-400">Matplotlib</strong>.
        </p>
      </>
    ),
  },
  {
    title: "HealthTrack – Fitness Analytics (Data)",
    skills: ["Python", "SQL", "Scikit-learn", "Tableau", "Airflow"],
    details: (
      <>
        <p>
          <strong className="text-indigo-400">Developed</strong> an end-to-end analytics pipeline in <strong className="text-indigo-400">Python</strong> for wearable device data.
        </p>
        <p>
          <strong className="text-indigo-400">Trained</strong> clustering models with <strong className="text-indigo-400">Scikit-learn</strong> to segment activity profiles.
        </p>
        <p>
          <strong className="text-indigo-400">Visualized</strong> insights using <strong className="text-indigo-400">Tableau</strong> and orchestrated workflows with <strong className="text-indigo-400">Airflow</strong>.
        </p>
      </>
    ),
  },
  {
    title: "WeatherNow – REST API Integration (Hybrid)",
    skills: ["Python", "Flask", "PostgreSQL", "Requests", "SQLAlchemy"],
    details: (
      <>
        <p>
          <strong className="text-indigo-400">Engineered</strong> a Python/Flask application to retrieve real‑time weather data via public APIs.
        </p>
        <p>
          <strong className="text-indigo-400">Archived</strong> historical weather data in <strong className="text-indigo-400">PostgreSQL</strong> for analysis.
        </p>
        <p>
          <strong className="text-indigo-400">Utilized</strong> the <strong className="text-indigo-400">Requests</strong> library alongside <strong className="text-indigo-400">SQLAlchemy</strong> for efficient data management.
        </p>
      </>
    ),
  },
  {
    title: "TaskFlow – CLI Task Manager (SDE)",
    skills: ["Java", "SQLite", "CLI", "CRUD", "Git"],
    details: (
      <>
        <p>
          <strong className="text-indigo-400">Developed</strong> a command-line task manager in <strong className="text-indigo-400">Java</strong>.
        </p>
        <p>
          <strong className="text-indigo-400">Implemented</strong> full CRUD operations with persistent storage using <strong className="text-indigo-400">SQLite</strong>.
        </p>
        <p>
          <strong className="text-indigo-400">Enforced</strong> priority-based sorting while maintaining code quality via <strong className="text-indigo-400">Git</strong>.
        </p>
      </>
    ),
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center tracking-wide">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500 cursor-pointer"
            >
              {/* Always visible part: Title and Skills */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 tracking-wide text-left">
                  {project.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-indigo-600 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Expandable details revealed on hover */}
              <div className="p-4 border-t border-gray-700 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-80">
                <div className="text-left text-sm leading-relaxed space-y-2">
                  {project.details}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
