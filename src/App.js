import React from 'react';
import './App.css';
import '../src/fonts/fonts.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Developing from './components/Developing';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  return (
    <div className="App">
      <ParallaxBackground />
      <Header />
      
      <main>
        <Hero />
        <Developing />

        <section id="about" className="about">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm Sophie, a passionate web developer and designer with a keen eye for detail and a 
                love for creating intuitive, user-friendly digital experiences. With a background in both 
                design and development, I bring a unique perspective to every project.
              </p>
              <p>
                I focus on delivering clean, efficient code while maintaining beautiful aesthetics.
                When I'm not coding, you can find me exploring new design trends, sketching ideas, 
                or enjoying the outdoors for fresh inspiration.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2 className="section-title">My Projects</h2>
          <div className="project-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <div className="project-image"></div>
              <h3>E-Commerce Platform</h3>
              <p>A fully responsive e-commerce website with product filtering, shopping cart, and secure checkout features.</p>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
                <a href="#" className="project-link">Source Code</a>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="project-card">
              <div className="project-image"></div>
              <h3>Recipe Finder App</h3>
              <p>An interactive application that allows users to search for recipes based on ingredients they have at home.</p>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
                <a href="#" className="project-link">Source Code</a>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="project-card">
              <div className="project-image"></div>
              <h3>Photography Portfolio</h3>
              <p>A sleek, minimalist portfolio site for a professional photographer with image galleries and contact form.</p>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
                <a href="#" className="project-link">Source Code</a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3 & Sass</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Design</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Figma & Adobe XD</li>
                <li>Visual Studio Code</li>
                <li>UI/UX Design</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
        </section>

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
                <p>sophie@example.com</p>
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
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Sophie Westfall. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
