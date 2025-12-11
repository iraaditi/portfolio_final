import React from 'react';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: 'Vellore Institute of Technology - AP',
      degree: 'B.Tech',
      field: 'Computer Science',
      score: 'CGPA: 9.66',
      duration: 'Sept. 2023 – Present',
      location: 'Andhra Pradesh, India',
      icon: <FaUniversity />
    },
    {
      institution: 'VJ International School - Lodhipur',
      degree: 'Class XII (CBSE)',
      score: 'Percentage: 87.6%',
      duration: 'March 2022',
      location: 'India',
      icon: <FaSchool />
    },
    {
      institution: 'St.Xavier\'s School - Sahibganj',
      degree: 'Class X (ICSE)',
      score: 'Percentage: 92.6%',
      duration: 'March 2020',
      location: 'India',
      icon: <FaSchool />
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item slide-up">
              <div className="education-icon">
                {edu.icon}
              </div>
              <div className="education-content card">
                <div className="education-header">
                  <div>
                    <h3>{edu.institution}</h3>
                    <p className="degree">{edu.degree} {edu.field && `- ${edu.field}`}</p>
                  </div>
                  <div className="education-meta">
                    <span className="duration">{edu.duration}</span>
                    <span className="location">{edu.location}</span>
                  </div>
                </div>
                <p className="score gradient-text">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
