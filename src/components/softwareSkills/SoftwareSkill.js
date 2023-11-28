import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {
  DiDatabase,
  DiDjango,
  // DiFirebase,
  DiPython,
  DiDocker,
  // DiReact,
  // DiZend
} from "react-icons/di";
import { FaRProject } from "react-icons/fa6";
import { SiTensorflow,SiPytorch,SiPowerbi } from "react-icons/si";
 
export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
          <li>
            <picture>
              <DiPython size="3rem" />
              <DiDjango size="3rem" />
              <DiDatabase size="3rem" />
              <SiTensorflow size="3rem" />
              <SiPytorch size="3rem" />
              <SiPowerbi size="3rem" />
              <FaRProject size="3rem" />
              <DiDocker size="3rem" />

            </picture>
          </li>
        </ul>
      </div>
    </div>
  );
}
