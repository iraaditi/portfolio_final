import React from 'react';
import { FaCertificate, FaAward } from 'react-icons/fa';
import { SiOracle, SiNvidia } from 'react-icons/si';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Oracle Certified Professional: Java SE 17 Developer',
      issuer: 'Oracle',
      date: 'Aug 2025',
      icon: <SiOracle />,
      description: 'Validated advanced Java programming skills, including OOP, functional programming, streams, modules, and exception handling.'
    },
    {
      title: 'NVIDIA DLI Certificate – Fundamentals of Deep Learning',
      issuer: 'NVIDIA Deep Learning Institute',
      date: 'Mar 2024',
      icon: <SiNvidia />,
      description: 'Completed NVIDIA Deep Learning Institute training on neural networks, optimization techniques, and deep learning applications with hands-on labs.'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card card slide-up">
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
              </div>
              <div className="cert-badge">
                <FaAward />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
