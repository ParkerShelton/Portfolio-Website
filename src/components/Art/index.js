import React, { useState, useEffect } from 'react';
import './Art.css';
import ArtSkills from '../Skills/ArtSkills';

const Art = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Temporary image placeholders (URLs that can be replaced later)
  const carouselImages = [
    'https://via.placeholder.com/800x400/425061/ffffff?text=Artwork+1',
    'https://via.placeholder.com/800x400/425061/ffffff?text=Artwork+2',
    'https://via.placeholder.com/800x400/425061/ffffff?text=Artwork+3',
    'https://via.placeholder.com/800x400/425061/ffffff?text=Artwork+4'
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
    <section id="art-section" className="art-section">
      <div className="art-container">
        <h2 className="art-title">Art</h2>
        
        {/* Added subtitle and ArtSkills component right under the title */}
        <h3 className="art-subtitle">Relevant Skills:</h3>
        <ArtSkills showTitle={false} className="art-skills" />
        
        <div className="art-content">
          <p>
            My artistic practice spans various mediums and styles, from traditional painting and drawing
            to digital illustration and mixed media. I approach each piece with a focus on expression,
            composition, and technical craftsmanship.
          </p>
          <p>
            I find inspiration in natural forms, urban environments, and the intersection of organic and
            geometric elements. My work often explores themes of texture, light, and narrative, creating
            pieces that invite viewers to discover their own interpretations and connections.
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
                <img src={image} alt={`Artwork ${index + 1}`} />
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

export default Art;
