import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info glass">
            <h3>Contact Information</h3>
            <p className="contact-desc">
              Feel free to reach out to me for any questions or opportunities!
            </p>
            
            <div className="info-item">
              <div className="icon-wrapper">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <a href="mailto:viswajothi.r202aiml@sece.ac.in">viswajothi.r202aiml@sece.ac.in</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <FaPhoneAlt />
              </div>
              <div className="info-content">
                <h4>Phone</h4>
                <a href="tel:+919345554361">+91 9345554361</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Tamil Nadu, India</p>
              </div>
            </div>
            
            {/* The resume file should be placed in public folder. Name it resume.pdf later */}
            <div className="resume-download">
              <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
            </div>
          </div>

          <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
