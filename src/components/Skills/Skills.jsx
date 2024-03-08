import React from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data.js";
import SkillCard from "./SkillCard/SkillCard.jsx";
import { useState } from "react";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard.jsx";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skill-container">
      <h5>Proficiency In Programming</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
