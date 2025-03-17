import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, success: false, message: '' });

    try {
      // Replace with your actual API Gateway URL from the SAM deployment output
      const API_ENDPOINT = 'https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/contact';
      
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: `There was a problem sending your message. Please try again later.`
      });
      console.error(error);
    }
  };

  return (
    <div className="page-container">
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        {status.submitted && (
          <div className={`message-alert ${status.success ? 'success' : 'error'}`}>
            {status.message}
          </div>
        )}
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                disabled={status.submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                disabled={status.submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.submitting}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-button"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
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
