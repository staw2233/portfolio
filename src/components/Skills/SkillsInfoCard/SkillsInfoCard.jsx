import React from "react";
import "./SkillsInfoCard.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <TransitionGroup className="skills-info-content">
        {skills.map((item, index) => (
          <CSSTransition key={`skill_${index}`} timeout={500} classNames="fade">
            <React.Fragment>
              <div className="skill-info">
                <p>{item.skill}</p>
                <p className="percentage">{item.percentage}</p>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress"
                  style={{ width: item.percentage }}
                />
              </div>
            </React.Fragment>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default SkillsInfoCard;
