import React from 'react';
import './Education.css';

const Experience = () => {
  return (
    <section id="experience" className="education">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          <div className="timeline-item glass">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>MERN Stack</h3>
              <h4>Better Tomorrow</h4>
              <span className="date">2025</span>
              <p>
                Gained hands-on experience in full-stack development and learned to build end to end web application with REST APIs and secure backend integration.
              </p>
              <br/>
              <p>
                <strong>Tech Stack:</strong> MongoDB, Express.js, React.js, Node.js, JavaScript, REST API, Git & GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
