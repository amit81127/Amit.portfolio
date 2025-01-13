import React from "react";
import "./SkillCard.css";

const SkillCard = ({ icon, skillName }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {icon}
      </div>
      <p className="skill-name">{skillName}</p>
    </div>
  );
};

export default SkillCard;