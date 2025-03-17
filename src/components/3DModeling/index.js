import React, { useState, useEffect } from 'react';
import './3DModeling.css';
import ModelingSkills from '../Skills/ModelingSkills';

const ThreeDModeling = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Temporary image placeholders (URLs that can be replaced later)
  const carouselImages = [
    'https://via.placeholder.com/800x400/425061/ffffff?text=3D+Model+1',
    'https://via.placeholder.com/800x400/425061/ffffff?text=3D+Model+2',
    'https://via.placeholder.com/800x400/425061/ffffff?text=3D+Model+3',
    'https://via.placeholder.com/800x400/425061/ffffff?text=3D+Render+4'
  ];
  
  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);
  
  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="modeling-section" className="modeling-section">
      <div className="modeling-container">
        <h2 className="modeling-title">3D Modeling</h2>
        
        {/* Added subtitle and ModelingSkills component right under the title */}
        <h3 className="modeling-subtitle">Relevant Skills:</h3>
        <ModelingSkills showTitle={false} className="modeling-skills" />
        
        <div className="modeling-content">
          <p>
            I create detailed and realistic 3D models for various applications, from architectural 
            visualization to character design. My approach combines technical precision with artistic 
            sensibility, ensuring that each model is not only accurate but also visually compelling.
          </p>
          <p>
            I work with industry-standard software and stay current with the latest techniques 
            and technologies. Whether it's hard-surface modeling, organic shapes, or complex scenes, 
            I deliver high-quality assets optimized for their intended use.
          </p>
        </div>
        
        {/* Image Carousel */}
        <div className="carousel-container">
          <div className="carousel">
            {carouselImages.map((image, index) => (
              <div 
                key={index} 
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image} alt={`Model ${index + 1}`} />
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button className="carousel-arrow prev" onClick={goToPrevSlide}>&#10094;</button>
          <button className="carousel-arrow next" onClick={goToNextSlide}>&#10095;</button>
          
          {/* Indicator dots */}
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDModeling;
