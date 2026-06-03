import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Derm',
      description: 'Smart Derm is an AI-powered skin cancer prediction system designed to detect and classify skin lesions from images using deep learning. Built with a Convolutional Neural Network (CNN) trained on the HAM10000 dataset, the system analyzes uploaded skin lesion images to predict whether the lesion is benign or malignant.',
      tags: ['Python', 'CNN', 'Machine Learning', 'AI']
    },
    {
      title: 'AccessLens (2026)',
      description: 'Built an AI-powered assistive navigation system for visually impaired individuals using Python, OpenCV, YOLOv8, and Machine Learning. Designed and implemented a real-time computer vision pipeline for obstacle detection, object recognition, and distance estimation using webcam input. Integrated pyttsx3 for voice-based alerts and guidance, enabling safe navigation through audio feedback. Optimized detection performance for improved accuracy, reduced latency, and enhanced accessibility in real-world environments.',
      tags: ['Python', 'OpenCV', 'YOLOv8', 'Machine Learning', 'Computer Vision']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
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
