import React from 'react';
import Hero from '../components/Hero';
import Developing from '../components/Developing';

function Home() {
  return (
    <>
      <Hero />
      <Developing />

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
    </>
  );
}

export default Home;
