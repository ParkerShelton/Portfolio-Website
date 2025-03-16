import React, { useEffect } from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Move background at 40% of the scroll speed
      const parallaxY = scrollY * 0.4;
      document.documentElement.style.setProperty('--parallax-y', `${parallaxY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="parallax-background"></div>;
};

export default ParallaxBackground;
