import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // React Icons
import SkillCard from './SkillCard';
import skillsData from '../data/skills';  // Import skills data

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-carousel">
        <div className="skills-container">
          {skillsData.map((skill) => {
            let SkillIcon;
            // Dynamically assign icon based on skill data
            switch (skill.icon) {
              case 'fab fa-react':
                SkillIcon = <FaReact />;
                break;
              case 'fab fa-node-js':
                SkillIcon = <FaNodeJs />;
                break;
              case 'fas fa-database':
                SkillIcon = <FaDatabase />;
                break;
              case 'fab fa-js':
                SkillIcon = <FaJs />;
                break;
              case 'fab fa-html5':
                SkillIcon = <FaHtml5 />;
                break;
              case 'fab fa-css3-alt':
                SkillIcon = <FaCss3Alt />;
                break;
              default:
                SkillIcon = null;
                break;
            }

            return <SkillCard key={skill.id} icon={SkillIcon} skillName={skill.skillName} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
