import React, { useState, useEffect } from 'react';
import './Developing.css';

const Developing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Temporary image placeholders (URLs that can be replaced later)
  const carouselImages = [
    'https://via.placeholder.com/800x400/425061/ffffff?text=Development+Project+1',
    'https://via.placeholder.com/800x400/425061/ffffff?text=Development+Project+2',
    'https://via.placeholder.com/800x400/425061/ffffff?text=Development+Project+3',
    'https://via.placeholder.com/800x400/425061/ffffff?text=Development+Project+4'
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
    <section id="developing" className="developing-section">
      <div className="developing-container">
        <h2 className="developing-title">Developing</h2>
        <div className="developing-content">
          <p>
            With a passion for clean code and innovative solutions, I specialize in building 
            responsive web applications and interactive user experiences. My development 
            philosophy centers on creating software that is not only functional but also 
            intuitive and accessible.
          </p>
          <p>
            I enjoy working with modern frameworks and libraries, continuously exploring 
            new technologies to enhance my skill set. Whether it's front-end design, 
            back-end architecture, or full-stack integration, I approach each project 
            with attention to detail and a commitment to quality.
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
                <img src={image} alt={`Project ${index + 1}`} />
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

export default Developing;
