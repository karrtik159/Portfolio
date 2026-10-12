import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  practiceSection,
  howIWorkSection,
  focusSection,
  workExperiences,
  skillsSection,
  openSource,
  bigProjects,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewFocus = focusSection.display;
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewProjects = bigProjects.display;
  const viewAchievement = achievementSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="#greeting" className="logo">
          <span className="logo-name">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {practiceSection.display && (
            <li>
              <a href="#practice">Practice</a>
            </li>
          )}
          {howIWorkSection.display && (
            <li>
              <a href="#principles">Principles</a>
            </li>
          )}
          {viewFocus && (
            <li>
              <a href="#focus">Focus</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Certifications</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
