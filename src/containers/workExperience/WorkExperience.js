import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  if (!workExperiences.display) return null;

  return (
    <div id="experience" className={isDark ? "dark-mode" : null}>
      <Fade bottom duration={500} distance="16px" fraction={0.05}>
        <div className="experience-container" id="workExperience">
          <h1 className="experience-heading section-title">Experience</h1>
          <div className="experience-timeline">
            {workExperiences.experience.map((card, i) => (
              <article
                key={`${card.company}-${card.role}-${i}`}
                className="experience-item"
              >
                <div className="experience-marker" aria-hidden="true" />
                <div className="experience-content">
                  <div className="experience-side">
                    <div className="experience-meta">
                      <img
                        className="experience-logo"
                        src={card.companylogo}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width="48"
                        height="48"
                      />
                      <div>
                        <h2 className="experience-role">{card.role}</h2>
                        <p className="experience-company">{card.company}</p>
                        <p className="experience-date">{card.date}</p>
                      </div>
                    </div>
                    <p className="experience-desc">{card.desc}</p>
                  </div>
                  {card.descBullets && card.descBullets.length > 0 && (
                    <ul className="experience-bullets">
                      {card.descBullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
