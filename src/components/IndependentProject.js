import React from "react";
import {ArrowUpRight} from "./PortfolioIcons";
import SkillTags from "./SkillTags";
import ProjectSkillEvidence from "./ProjectSkillEvidence";
import {useSkillSelection} from "../contexts/SkillSelectionContext";

export default function IndependentProject({project}) {
  const {selection, match} = useSkillSelection();
  return (
    <article
      id={project.anchor}
      className="independent-project"
      data-related={selection ? match(project.anchor).length > 0 : undefined}
    >
      <div>
        <span className="mono accent">02 / INDEPENDENT EXPLORATION</span>
        <h3>
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.name} <ArrowUpRight />
          </a>
        </h3>
        <p>{project.description}</p>
      </div>
      <div>
        <p>{project.engineering}</p>
        <ProjectSkillEvidence target={project.anchor} />
        <SkillTags tools={project.stack} />
        <a
          className="text-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub <ArrowUpRight />
        </a>
      </div>
    </article>
  );
}
