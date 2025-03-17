import React from 'react';

function About() {
  return (
    <div className="page-container">
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Parker Shelton, a passionate web developer and designer with a keen eye for detail and a 
              love for creating intuitive, user-friendly digital experiences. With a background in both 
              design and development, I bring a unique perspective to every project.
            </p>
            <p>
              I focus on delivering clean, efficient code while maintaining beautiful aesthetics.
              When I'm not coding, you can find me exploring new design trends, sketching ideas, 
              or enjoying the outdoors for fresh inspiration.
            </p>
            <p>
              My journey in web development began several years ago and has evolved through various technologies
              and frameworks. I'm particularly passionate about creating accessible, responsive designs that 
              work beautifully across all devices.
            </p>
            <p>
              I believe in continuous learning and staying current with emerging technologies. This mindset allows
              me to leverage the best tools for each project and deliver solutions that are both innovative and reliable.
            </p>
          </div>
        </div>
      </section>
      
      <section className="skills-section">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-area">
          <div className="skills-category">
            <h3>Development</h3>
            <p>
              I'm proficient in modern web technologies including React, JavaScript (ES6+), HTML5, and CSS3.
              My backend experience includes working with Node.js, Express, and various database systems.
              I prioritize writing clean, maintainable code with attention to performance and security.
            </p>
          </div>
          
          <div className="skills-category">
            <h3>Design</h3>
            <p>
              With strong skills in UI/UX design, I create interfaces that are both beautiful and functional.
              I use tools like Figma and Adobe Suite to craft visually appealing layouts that enhance user experience.
              My approach combines aesthetic principles with practical usability considerations.
            </p>
          </div>
          
          <div className="skills-category">
            <h3>Project Management</h3>
            <p>
              I have experience managing projects from conception to completion, working with teams of various sizes.
              My organizational skills help ensure that projects stay on track and meet deadlines.
              I'm comfortable adapting to changing requirements and finding efficient solutions to challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
