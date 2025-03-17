import React from 'react';
import './Skills.css';

function ModelingSkills({ showTitle = true, className = "" }) {
  const skillsContent = (
    <div className={`skills-container ${className}`}>
      <div className="skill-category">
        <h3>3D Modeling</h3>
        <ul>
          <li>Blender</li>
          <li>Maya</li>
          <li>ZBrush</li>
          <li>Topology</li>
          <li>Hard Surface Modeling</li>
        </ul>
      </div>
      
      <div className="skill-category">
        <h3>Rendering & Materials</h3>
        <ul>
          <li>PBR Texturing</li>
          <li>Substance Painter</li>
          <li>Lighting</li>
          <li>Cycles & Eevee</li>
          <li>Arnold Renderer</li>
        </ul>
      </div>
      
      <div className="skill-category">
        <h3>Workflow & Tools</h3>
        <ul>
          <li>UV Mapping</li>
          <li>Rigging</li>
          <li>Animation Basics</li>
          <li>3D Printing Prep</li>
          <li>Version Control</li>
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

export default ModelingSkills;
