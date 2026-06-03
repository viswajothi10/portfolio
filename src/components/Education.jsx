import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="timeline">

          <div className="timeline-item glass">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>B.E. CSE (AIML)</h3>
              <h4>Sri Eshwar College of Engineering</h4>
              <span className="date">2024 - 2028 | CGPA: 8.2</span>
              <p>Focusing on Artificial Intelligence and Machine Learning, Data Structures, and Algorithms.</p>
            </div>
          </div>

          <div className="timeline-item glass">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Higher Secondary (HSC)</h3>
              <h4>R G Matric</h4>
              <span className="date">2023 - 2024 | 76.1%</span>
            </div>
          </div>

          <div className="timeline-item glass">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Secondary School (SSLC)</h3>
              <h4>R G Matric</h4>
              <span className="date">2021 - 2022 | 82.4%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
