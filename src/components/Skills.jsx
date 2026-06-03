import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['C', 'C++ (Beginner)', 'Python', 'Java (Basic)']
    },
    {
      title: 'Core Concepts',
      skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)']
    },
    {
      title: 'Web & Database',
      skills: ['HTML', 'CSS', 'React', 'MySQL (Basics)']
    },
    {
      title: 'Data Science & Analysis',
      skills: ['Matplotlib', 'Pandas', 'NumPy']
    },
    {
      title: 'Tools',
      skills: ['VSCode', 'Canva', 'PowerPoint', 'GitHub', 'Git']
    }
  ];

  const codingProfiles = [
    { platform: 'LeetCode', stats: 'Solved 76 problems', link: '#' },
    { platform: 'Skill Rack', stats: '900+ problems | 7+ certs | 200+ Bronzes', link: '#' },
    { platform: 'HackerRank', stats: 'Solved 35 problems', link: '#' }
  ];

  const achievements = [
    'Won 3rd prize in NIRMAVORA hackathon',
    'Top 10 teams at "KRIYA" Paper Presentation (2025)',
    'Shortlisted for KANAM\'26 Hackathon'
  ];

  const certifications = [
    'Completion of C training | IIT BOMBAY 2024',
    'Introduction to C | Great Learning 2024',
    'Completion of C++ training | IIT BOMBAY 2024',
    'Zoho Young Creators | ZOHO 2025',
    'Python Basics | Hackerrank 2025'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Achievements</h2>
        
        <div className="skills-layout">
          <div className="skills-column">
            <h3 className="column-title">Technical Skills</h3>
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-category glass">
                  <h4>{category.title}</h4>
                  <ul className="skill-list">
                    {category.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-column">
            <h3 className="column-title">Coding Profiles</h3>
            <div className="profiles-container">
              {codingProfiles.map((profile, index) => (
                <a key={index} href={profile.link} className="profile-card glass" target="_blank" rel="noreferrer">
                  <h4>{profile.platform}</h4>
                  <p>{profile.stats}</p>
                </a>
              ))}
            </div>

            <h3 className="column-title mt-2">Achievements</h3>
            <div className="achievements-card glass">
              <ul className="achievement-list">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <h3 className="column-title mt-2">Certifications</h3>
            <div className="achievements-card glass">
              <ul className="achievement-list cert-list">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
