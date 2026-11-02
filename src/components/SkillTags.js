import React from "react";
import {skillTargets} from "../skillEvidence";
import {useSkillSelection} from "../contexts/SkillSelectionContext";
export default function SkillTags({tools}) {
  const {selection, selectTool} = useSkillSelection();
  return (
    <div className="tags">
      {tools.map(tool =>
        skillTargets[tool] ? (
          <button
            key={tool}
            type="button"
            aria-pressed={selection?.tool === tool}
            onClick={() => selectTool(tool)}
            aria-label={`${tool}: highlight related work and show what I built`}
          >
            {tool}
            <span aria-hidden="true"> ↗</span>
          </button>
        ) : (
          <span key={tool}>{tool}</span>
        )
      )}
    </div>
  );
}
