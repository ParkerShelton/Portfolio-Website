import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>PARKER SHELTON</h1>
        </div>
        
        {/* Desktop Links - hidden on mobile */}
        <div className="desktop-links">
          <div className="logo-links-container">
            <a href="#home" className="logo-link">Developing</a>
            <span className="separator">|</span>
            <a href="#home" className="logo-link">3D Modeling</a>
            <span className="separator">|</span>
            <a href="#home" className="logo-link">Art</a>
          </div>
          <div className="button-group">
            <a href="#about" className="contact-me-btn">ABOUT ME</a>
            <a href="#contact" className="contact-me-btn">CONTACT ME</a>
          </div>
        </div>
        
        {/* Mobile hamburger icon - only shown on mobile */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* Mobile menu dropdown - only shown when hamburger is clicked */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="mobile-link">Developing</a>
          <a href="#home" className="mobile-link">3D Modeling</a>
          <a href="#home" className="mobile-link">Art</a>
          <div className="mobile-divider"></div>
          <a href="#about" className="mobile-link">ABOUT ME</a>
          <a href="#contact" className="mobile-link">CONTACT ME</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
