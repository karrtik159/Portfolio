import React from "react";
import {Fade} from "react-reveal";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) return null;

  return (
    <section className="main skills-section" id="skills">
      <Fade bottom duration={500} distance="16px" fraction={0.05}>
        <div>
          <h1 className="skills-heading section-title">
            {skillsSection.title}
          </h1>
          <p className="skills-text-subtitle">{skillsSection.subTitle}</p>
          <SoftwareSkill />
          <div className="skill-groups">
            {skillsSection.skillGroups.map(group => (
              <div className="skill-group" key={group.name}>
                <h2 className="skill-group-name">{group.name}</h2>
                <ul className="skill-group-items">
                  {group.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}
