import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contact';

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
            {isAboutPage ? (
              <Link to="/" className="contact-me-btn">HOME</Link>
            ) : (
              <Link to="/about" className="contact-me-btn">ABOUT ME</Link>
            )}
            
            {isContactPage ? (
              <Link to="/" className="contact-me-btn">HOME</Link>
            ) : (
              <Link to="/contact" className="contact-me-btn">CONTACT ME</Link>
            )}
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
          
          {isAboutPage ? (
            <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
          ) : (
            <Link to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>ABOUT ME</Link>
          )}
          
          {isContactPage ? (
            <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
          ) : (
            <Link to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>CONTACT ME</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
