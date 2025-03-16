import React, { useEffect, useRef } from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!backgroundRef.current) return;
      
      const scrollY = window.scrollY;
      // Move background at 30% of the scroll speed (slower and more subtle)
      const parallaxY = scrollY * 0.3;
      
      // Apply the transform to the ::before pseudo-element through a custom property
      backgroundRef.current.style.setProperty('--parallax-y', `${parallaxY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="parallax-background" ref={backgroundRef}></div>;
};

export default ParallaxBackground;
