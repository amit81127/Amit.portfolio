// SocialIcons.jsx
import React from 'react';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://twitter.com/amit" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/amit" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/amit" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
