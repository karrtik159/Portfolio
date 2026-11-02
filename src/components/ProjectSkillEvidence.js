import React from "react";
import {useSkillSelection} from "../contexts/SkillSelectionContext";
export default function ProjectSkillEvidence({target}) {
  const {selection, label, match} = useSkillSelection();
  const examples = match(target);
  if (!selection || !examples.length) return null;
  return (
    <div className="project-skill-evidence">
      <span className="mono accent">RELATED WORK / {label}</span>
      {examples.map(example => (
        <p key={example.project}>{example.built}</p>
      ))}
    </div>
  );
}
