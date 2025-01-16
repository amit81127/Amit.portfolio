import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg" alt="Logo" className="logo-image" />
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-item">Home</a>
            </li>
            <li>
              <a href="#about" className="nav-item">About</a>
            </li>
            <li>
              <a href="#skills" className="nav-item">Skills</a>
            </li>
            <li>
              <a href="#projects" className="nav-item">Projects</a>
            </li>
            <li>
              <a href="#feedback" className="nav-item">Feedback</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
