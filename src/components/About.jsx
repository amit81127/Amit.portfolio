import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7WF9edCU-Twlza-oH0jK9NES1CNFGjY3BQ&s" 
            alt="About Me" 
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hello! I’m <strong>Amit Kumar Prasad</strong>, a dedicated and
            passionate <strong>MERN stack developer</strong>. Currently, I’m
            pursuing a degree in <strong>Computer Science</strong> while
            specializing in creating efficient, scalable, and user-focused web
            applications.
          </p>
          <p className="about-description">
            With a strong foundation in front-end and back-end development, I’m
            driven by a passion for crafting modern solutions that simplify
            complex problems. My technical skills are complemented by my
            curiosity for exploring the latest industry trends.
          </p>
          <p className="about-description">
            Let’s collaborate to build powerful, seamless, and innovative
            applications tailored for real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
