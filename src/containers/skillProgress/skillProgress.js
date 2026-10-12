import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={900} distance="20px">
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading section-title">Proficiency</h1>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {width: exp.progressPercentage};
            return (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
