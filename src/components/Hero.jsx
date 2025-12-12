import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { firebaseStorageUrls, getImageUrl } from '../config/firebaseStorage';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="animated-bg"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-grid">
          <div className="hero-text slide-in-left">
            <p className="greeting">Hello, I'm</p>
            <h1 className="hero-name">
              <span className="gradient-text">Ira Aditi</span>
            </h1>
            <h2 className="hero-subtitle">pursuing B.Tech in CSE at VIT-AP with a current CGPA of 9.66</h2>
            <p className="hero-description">
              Aspiring Computer Science student & a Full-Stack Developer, passionate about building innovative
              web applications using React, Next.js, and other modern technologies.
              Team Lead at Skill Builders & upcoming Summer Intern at Marvell Technologies.
            </p>
            
            <div className="social-links">
              <a 
                href="https://github.com/iraaditi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/iraaditi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:ira.23bce7197@vitapstudent.ac.in"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="btn-group">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="btn btn-primary"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn"
              >
                Let's Talk
              </button>
            </div>
          </div>

          <div className="hero-image-container slide-in-right">
            <div className="hero-image">
              <img 
                src={getImageUrl(firebaseStorageUrls.profileImage, `${import.meta.env.BASE_URL}profile.jpeg`)} 
                alt="Ira Aditi"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg width="300" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="300" height="300" fill="%23141b2d"/%3E%3Ccircle cx="150" cy="120" r="50" fill="%2364ffda"/%3E%3Cpath d="M 100 200 Q 150 180 200 200 L 200 300 L 100 300 Z" fill="%2364ffda"/%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
