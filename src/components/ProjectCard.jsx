import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ name, description, link, image }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={`${name} Screenshot`} className="project-image" />
      </div>
      <div className="project-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-btn">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
