import React from 'react';
import './Skills.css';

function ArtSkills({ showTitle = true, className = "" }) {
  const skillsContent = (
    <div className={`skills-container ${className}`}>
      <div className="skill-category">
        <h3>Traditional Art</h3>
        <ul>
          <li>Drawing</li>
          <li>Painting</li>
          <li>Illustration</li>
          <li>Color Theory</li>
          <li>Composition</li>
        </ul>
      </div>
      
      <div className="skill-category">
        <h3>Digital Art</h3>
        <ul>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Procreate</li>
          <li>Digital Painting</li>
          <li>Vector Art</li>
        </ul>
      </div>
      
      <div className="skill-category">
        <h3>Concepts & Techniques</h3>
        <ul>
          <li>Perspective</li>
          <li>Anatomy</li>
          <li>Lighting</li>
          <li>Character Design</li>
          <li>Environment Design</li>
        </ul>
      </div>
    </div>
  );

  // Return with or without section wrapper based on showTitle prop
  return showTitle ? (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      {skillsContent}
    </section>
  ) : skillsContent;
}

export default ArtSkills;
