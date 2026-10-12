import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) return null;

  return (
    <Fade bottom duration={500} distance="16px" fraction={0.05}>
      <div className={isDark ? "main dark-mode" : "main"} id="projects">
        <h1 className="projects-heading section-title">{bigProjects.title}</h1>
        <p className={isDark ? "dark-mode project-subtitle" : "project-subtitle"}>
          {bigProjects.subtitle}
        </p>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => (
            <article
              key={i}
              className={
                i === 0
                  ? "project-feature"
                  : isDark
                  ? "project-card project-card-dark"
                  : "project-card project-card-light"
              }
            >
              {project.image ? (
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="card-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : null}
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  {project.projectName}
                </h5>
                <p
                  className={
                    isDark ? "dark-mode card-subtitle" : "card-subtitle"
                  }
                >
                  {project.projectDesc}
                </p>
                {project.footerLink ? (
                  <div className="project-card-footer">
                    {project.footerLink.map((link, idx) => (
                      <span
                        key={idx}
                        className={
                          isDark ? "dark-mode project-tag" : "project-tag"
                        }
                        onClick={() => openUrlInNewTab(link.url)}
                        onKeyDown={e => {
                          if (e.key === "Enter") openUrlInNewTab(link.url);
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        {link.name}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Fade>
  );
}
