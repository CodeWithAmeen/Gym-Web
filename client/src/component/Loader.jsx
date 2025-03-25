import React from 'react';
import './CSS/Loader.css'; // Ensure this file exists

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <img src="/images/Loader.gif" alt="Loading..." className="loader-gif" />
        <p className="loading-text">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loader;
