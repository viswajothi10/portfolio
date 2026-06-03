import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Viswajothi R</h1>
          <h3 className="title">AI/ML Enthusiast & Full Stack Developer</h3>
          <p className="description">
            A passionate B.E. CSE (AIML) student at Sri Eshwar College of Engineering. 
            I build dynamic web applications and craft AI/ML solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:viswajothi.r202aiml@sece.ac.in" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="blob"></div>
          <img src="/profile.jpg" alt="Viswajothi R" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
