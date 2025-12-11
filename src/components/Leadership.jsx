import React from 'react';
import { FaTrophy, FaUsers, FaCalendar, FaMicrophone } from 'react-icons/fa';
import './Leadership.css';

const Leadership = () => {
  const achievements = [
    {
      title: 'Team Lead – Skill Builders',
      organization: 'Computer Society of India, VIT-AP',
      duration: 'Nov 2024 – May 2025',
      icon: <FaUsers />,
      description: 'Led a team of 600 members, organizing technical events and mentored peers in front-end development.'
    },
    {
      title: 'Finalist – Google Dev Sprint 2k25',
      organization: 'Hackathon',
      duration: '2025',
      icon: <FaTrophy />,
      description: 'Finalist in Google Dev Sprint 2k25 hackathon with more than 500 participants.'
    },
    {
      title: 'Organizer – Polyversity Week',
      organization: 'IDS, Bharat Blockchain Yatra, VIT-AP University',
      duration: '2024',
      icon: <FaCalendar />,
      description: 'Organized Polyversity Week in collaboration with Information Data Systems (IDS), Bharat Blockchain Yatra, and VIT-AP University, engaging over 500 participants.'
    },
    {
      title: 'Head of Internal Affairs',
      organization: 'English Literary Association, VIT-AP',
      duration: 'Nov 2024 – May 2025',
      icon: <FaMicrophone />,
      description: 'Led internal coordination and communications; also contributed as an admin team member organizing and managing various literary events.'
    }
  ];

  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <h2 className="section-title">Leadership & Extracurricular</h2>
        
        <div className="leadership-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card card slide-up">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="achievement-org">{achievement.organization}</p>
                <p className="achievement-duration">{achievement.duration}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
