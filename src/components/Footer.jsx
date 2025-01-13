import React from "react";
import {  FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Amit Kumar Prasad. All rights reserved.</p>
        <div className="social-icons">
          
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/amit-kumar-prasad-55a070275/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/amit81127" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
