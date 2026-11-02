import React, {useState} from "react";
import {ArrowUpRight, ArrowRight, Plus} from "./PortfolioIcons";
import SkillTags from "./SkillTags";
import {useSkillSelection} from "../contexts/SkillSelectionContext";
import ProjectSkillEvidence from "./ProjectSkillEvidence";
function ProjectImage({project}) {
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  return (
    <div className={`project-image ${status}`} aria-busy={status === "loading"}>
      {status === "loading" && (
        <span className="image-status" role="status">
          Loading project preview…
        </span>
      )}
      {status === "error" ? (
        <div className="image-status">
          <p>Preview couldn’t load.</p>
          <button
            onClick={() => {
              setStatus("loading");
              setAttempt(attempt + 1);
            }}
          >
            Try again <ArrowRight />
          </button>
          <a href={project.url} target="_blank" rel="noreferrer">
            Visit the project <ArrowUpRight />
          </a>
        </div>
      ) : (
        <img
          key={attempt}
          src={`${import.meta.env.BASE_URL}projects/${project.image}${
            attempt ? `?retry=${attempt}` : ""
          }`}
          alt={`${project.name} website screenshot`}
          width="1440"
          height="1000"
          loading="lazy"
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
}
export default function ProjectCard({project}) {
  const {selection, match} = useSkillSelection();
  return (
    <article
      id={project.anchor}
      data-related={selection ? match(project.anchor).length > 0 : undefined}
      className={`project ${project.layout === "wide" ? "project-wide" : ""}`}
    >
      <div className="project-preview">
        <ProjectImage project={project} />
        <a
          className="visit-project"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.name} (opens in a new tab)`}
        >
          <ArrowUpRight />
        </a>
      </div>
      <div className="project-copy">
        <div className="project-meta mono">
          <span>
            {project.id} / {project.category}
          </span>
          <span>
            {project.id === "03" ? "INDEPENDENT PROJECT" : "CLIENT WORK"}
          </span>
        </div>
        <div className="project-title">
          <h3>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          </h3>
          <ArrowUpRight />
        </div>
        <ProjectSkillEvidence target={project.anchor} />
        <p className="project-description">{project.description}</p>
        <div className="project-contribution">
          <span className="mono accent">
            MY CONTRIBUTION / {project.contribution}
          </span>
          <p>{project.engineering}</p>
        </div>
        <div className="project-tools">
          <span className="mono tools-label">
            TOOLS USED · SELECT TO HIGHLIGHT RELATED WORK
          </span>
          <SkillTags tools={project.stack} />
        </div>
        <details>
          <summary>
            Behind the build <Plus />
          </summary>
          <div className="project-detail">
            <p className="mono accent">{project.contribution}</p>
            <p>{project.detail}</p>
            <h4>Implementation</h4>
            <p>{project.engineering}</p>
            <small>{project.note}</small>
          </div>
        </details>
      </div>
    </article>
  );
}
