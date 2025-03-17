import React from 'react';

function Contact() {
  return (
    <div className="page-container">
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>parker@example.com</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Boston, MA</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
