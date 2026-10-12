import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {DiPython, DiDocker, DiDatabase} from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiRedis,
  SiOpencv
} from "react-icons/si";
import {
  FaBrain,
  FaProjectDiagram,
  FaChartLine,
  FaRobot,
  FaShareAlt
} from "react-icons/fa";

const iconMap = {
  python: DiPython,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  huggingface: FaRobot,
  langchain: FaProjectDiagram,
  fastapi: SiFastapi,
  docker: DiDocker,
  neo4j: FaShareAlt,
  redis: SiRedis,
  mlflow: FaChartLine,
  opencv: SiOpencv,
  sql: DiDatabase,
  default: FaBrain
};

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, i) => {
          const Icon = iconMap[skill.iconName] || iconMap.default;
          return (
            <li
              key={`${skill.skillName}-${i}`}
              className="software-skill-inline"
              title={skill.skillName}
            >
              <Icon size="2.75rem" aria-hidden="true" />
              <p>{skill.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
