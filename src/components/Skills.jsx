import React from 'react';
import { 
  SiJavascript, SiPython, SiCplusplus, SiC, SiTypescript, SiHtml5, SiCss3,
  SiReact, SiNodedotjs, SiNextdotjs, SiExpress, SiRedux, SiTailwindcss,
  SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiGithub, SiPostman, SiFigma
} from 'react-icons/si';
import { FaAws, FaDatabase, FaCode } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'HTML', icon: <SiHtml5 /> },
        { name: 'CSS', icon: <SiCss3 /> }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: <SiReact /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'VS Code', icon: <FaCode /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Figma', icon: <SiFigma /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category slide-up">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="coursework-section">
          <h3 className="section-subtitle">Relevant Coursework</h3>
          <div className="coursework-grid">
            <span className="tag">Software Engineering</span>
            <span className="tag">Software Architecture</span>
            <span className="tag">Information Theory and Coding</span>
            <span className="tag">Database Management Systems</span>
            <span className="tag">Data Structures and Algorithms</span>
            <span className="tag">Operating Systems</span>
            <span className="tag">Computer Organization and Architecture</span>
            <span className="tag">Computer Networks</span>
            <span className="tag">Object Oriented Programming</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
