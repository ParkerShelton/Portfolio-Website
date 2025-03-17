import React from 'react';
import './WorkInProgress.css';

function WorkInProgress() {
  return (
    <div className="wip-content">
      <div className="wip-container">
        <h1 className="wip-title">Work In Progress</h1>
        <div className="wip-icon">
          <span className="gear">⚙️</span>
          <span className="tool">🔧</span>
        </div>
        <p className="wip-message">
          This page is currently under construction.
          <br />
          Please check back soon for exciting updates!
        </p>
      </div>
    </div>
  );
}

export default WorkInProgress;
