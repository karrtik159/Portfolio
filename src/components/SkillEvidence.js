import React from "react";
import {skillEvidence} from "../skillEvidence";
import {useSkillSelection} from "../contexts/SkillSelectionContext";
import {ArrowRight} from "./PortfolioIcons";
export default function SkillEvidence() {
  const {selection, label, examples, selectGroup, selectTool, clear} =
    useSkillSelection();
  const projectIds = [
    "contextflow",
    "referu-ai",
    "emotion-detection",
    "dog-coloring-books"
  ];
  const projectCount = examples.filter(e =>
    projectIds.includes(e.target)
  ).length;
  return (
    <section
      className="skill-evidence"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="section-kicker mono">
        <span>01 / AI SKILLS IN ACTION</span>
        <span>SELECT A SKILL. SEE THE WORK.</span>
      </div>
      <div className="section-heading">
        <h2 id="skills-title">
          What I use.
          <br />
          <em>What I build with it.</em>
        </h2>
        <p>
          Choose a capability or an individual tool.
          <br />
          Related projects light up with the exact implementation.
        </p>
      </div>
      <div className="skill-explorer">
        <div className="skill-controls" aria-label="AI skills">
          {skillEvidence.map(skill => (
            <div
              className="skill-control-group"
              id={`skill-${skill.id}`}
              key={skill.id}
            >
              <button
                type="button"
                className="skill-category"
                aria-controls="skill-result"
                aria-pressed={
                  selection?.groupId === skill.id && !selection?.tool
                }
                onClick={() => selectGroup(skill.id)}
              >
                <span className="mono accent">{skill.number}</span>
                <span>{skill.title}</span>
              </button>
              <div className="skill-tool-controls">
                {skill.tools.map(tool => (
                  <button
                    type="button"
                    key={tool}
                    aria-controls="skill-result"
                    aria-pressed={selection?.tool === tool}
                    onClick={() => selectTool(tool)}
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skill-result-column">
          <div className="skill-selection-result" id="skill-result">
            <div className="skill-result-heading">
              <span className="mono accent">
                {selection ? "SELECTED SKILL" : "EXPLORE THE CONNECTIONS"}
              </span>
              {
                <button
                  disabled={!selection}
                  type="button"
                  className="clear-skill"
                  onClick={clear}
                >
                  Clear selection ×
                </button>
              }
            </div>
            <h3 id="skill-result-title" tabIndex={-1}>
              {selection ? label : "A skill is only the start."}
            </h3>
            <p className="skill-result-intro">
              {selection
                ? "Here is what I built with it. Follow a link to inspect the related project or experience."
                : "Select any skill on the left to see the projects, implementation details, and production work behind it."}
            </p>
            <p
              className="selection-status mono"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {selection
                ? `${label}: ${projectCount} related ${
                    projectCount === 1 ? "project" : "projects"
                  } and ${examples.length - projectCount} experience ${
                    examples.length - projectCount === 1 ? "entry" : "entries"
                  }. All projects remain visible.`
                : "No skill selected. All projects are visible."}
            </p>
            {selection ? (
              <ul className="selected-evidence-list">
                {examples.map(example => (
                  <li key={example.target}>
                    <a href={`#${example.target}`}>
                      {example.project}
                      <ArrowRight />
                    </a>
                    <p>{example.built}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="skill-explorer-hint">
                <span className="mono">TRY A CONNECTION</span>
                <button type="button" onClick={() => selectTool("CrewAI")}>
                  CrewAI → ContextFlow <ArrowRight />
                </button>
                <button type="button" onClick={() => selectTool("Gemini API")}>
                  Gemini API → Dog Coloring Books <ArrowRight />
                </button>
              </div>
            )}
            {selection && projectCount > 0 && (
              <a className="text-link" href={`#${examples[0].target}`}>
                Explore related work <ArrowRight />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
