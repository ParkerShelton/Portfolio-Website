import React from 'react';
import './Skills.css';

function Skills({ showTitle = true, className = "" }) {
  const skillsContent = (
    <div className={`skills-container ${className}`}>
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
  );

  // Return with or without section wrapper based on showTitle prop
  return showTitle ? (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      {skillsContent}
    </section>
  ) : skillsContent;
}

export default Skills;
