import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Chezz',
      date: 'Apr 2025',
      description: 'Implemented a high-performance chess AI with Min-max algorithm and alpha-beta pruning, using custom evaluation function with material advantage and positional heuristics.',
      tech: ['React', 'Web Workers', 'JavaScript', 'Chess AI'],
      features: [
        'Generated a traversable search tree, serialized data from Web Worker to main thread for dynamic visualization',
        'Concurrent processing by offloading AI engine to Web Worker, preventing main-thread blocking and maintaining UI fluidity during intensive computations through asynchronous message passing'
      ],
      github: 'https://github.com/iraaditi/chess-visualizer',
      demo: 'https://chezz.onrender.com/',
      image: `${import.meta.env.BASE_URL}Screenshot 2025-12-11 225347.png`
    },
    {
      title: 'Segmenta: AI Finance Manager',
      date: 'Jan 2025',
      description: 'Developed a full-stack analytics and management platform using Next.js and Convex, enabling users to track shared expenses, manage groups, and settle balances seamlessly.',
      tech: ['Next.js', 'Convex', 'Gemini API', 'Clerk', 'Vercel'],
      features: [
        'Engineered an AI-driven feature using Google\'s Gemini API to generate personalized spending insights, delivered via asynchronous email jobs managed by Inngest',
        'Serverless infrastructure (Vercel and Convex), integrating Clerk for secure, token-based user authentication and session management'
      ],
      github: 'https://github.com/iraaditi/Segmenta',
      demo: 'https://segmenta-flax.vercel.app/',
      image: `${import.meta.env.BASE_URL}Screenshot 2025-12-11 225407.png`
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card slide-up">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='250' fill='%23141b2d'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' fill='%2364ffda' text-anchor='middle' dy='.3em'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
