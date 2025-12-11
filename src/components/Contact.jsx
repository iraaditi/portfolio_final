import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">Let's Talk</h2>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="contact-grid">
            <div className="contact-card card slide-up">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <a href="mailto:ira.23bce7197@vitapstudent.ac.in">
                ira.23bce7197@vitapstudent.ac.in
              </a>
            </div>

            <div className="contact-card card slide-up">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <a href="tel:+919142184830">
                +91 9142184830
              </a>
            </div>
          </div>

          <div className="contact-social">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a 
                href="https://github.com/iraaditi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/iraaditi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ira Aditi. Built with React & passion.</p>
      </footer>
    </section>
  );
};

export default Contact;
