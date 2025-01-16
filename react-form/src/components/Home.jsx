import React from "react";
import "./Home.css";
// Replace with your profile image URL or import it.

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left Side: Text Content */}
        <div className="home-text">
          <h1 className="home-title">Amit Kumar Prasad</h1>
          <p className="home-description">MERN Full Stack Developer</p>
          <p className="home-more-info">
            Passionate about building efficient, scalable web applications using the latest technologies. Constantly exploring new trends in tech to create innovative solutions.
          </p>
          <a href="#about" className="home-btn">
            Learn More About Me
          </a>
        </div>

        {/* Right Side: Interactive Image */}
        <div className="home-image-container">
          <img
            src="https://i.postimg.cc/cCkDHCS3/Whats-App-Image-2024-10-10-at-20-23-19-c85b6958.jpg" // Replace with actual profile image URL
            alt="Profile"
            className="home-image"
          />
          <div className="image-overlay">
            <p className="overlay-text">Hello! 👋</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
