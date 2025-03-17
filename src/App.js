import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import '../src/fonts/fonts.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WorkInProgress from './pages/WorkInProgress';
import './pages/PageStyles.css';

// Wrapper component to conditionally render components
function AppContent() {
  const location = useLocation();
  const [showWip, setShowWip] = useState(true);
  
  // Determine if we should show the WIP overlay
  // Only show on root path (/) and not on /home or other routes
  const showWipOverlay = showWip && (location.pathname === '/');
  
  // Show header and footer only if we're not on the explicit WIP route
  const isWipRoute = location.pathname === '/wip';
  
  // Handle manual URL change to hide WIP overlay
  useEffect(() => {
    // If URL changes, check if we should hide WIP
    if (location.pathname !== '/' && location.pathname !== '/wip') {
      setShowWip(false);
    }
  }, [location.pathname]);
  
  return (
    <div className="App">
      {!isWipRoute && <Header />}
      
      <main>
        {/* Regular routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> {/* Add explicit /home route */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wip" element={<WorkInProgress />} />
        </Routes>
        
        {/* WIP overlay on home page */}
        {showWipOverlay && (
          <div className="wip-overlay">
            <WorkInProgress />
          </div>
        )}
      </main>
      
      {!isWipRoute && (
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Parker Shelton. All Rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
