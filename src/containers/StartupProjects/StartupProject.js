import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import classNames from "classnames";

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

        <div className="projects-rail">
          {bigProjects.projects.map((project, i) => {
            const featured = Boolean(project.featured) || i === 0;
            return (
              <article
                key={i}
                className={classNames("project-row", {
                  "project-row-dark": isDark,
                  "project-row-featured": featured
                })}
                style={{"--project-i": i}}
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
                  {featured ? (
                    <p className="project-kicker">Featured system</p>
                  ) : null}
                  <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                    {project.projectName}
                  </h5>
                  {project.outcome ? (
                    <p className="project-outcome">{project.outcome}</p>
                  ) : null}
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {project.projectDesc}
                  </p>
                  {project.tech && project.tech.length > 0 ? (
                    <ul className="project-tech" aria-label="Technologies">
                      {project.tech.map(chip => (
                        <li key={chip}>{chip}</li>
                      ))}
                    </ul>
                  ) : null}
                  {project.metrics && project.metrics.length > 0 ? (
                    <dl className="project-metrics">
                      {project.metrics.map(metric => (
                        <div className="project-metric" key={metric.label}>
                          <dt>{metric.label}</dt>
                          <dd>{metric.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
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
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
