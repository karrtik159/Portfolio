import React, {createContext, useContext, useState} from "react";
import {skillEvidence, skillTargets} from "../skillEvidence";
import {toolEvidence} from "../toolEvidence";
const SkillSelectionContext = createContext(null);
export function SkillSelectionProvider({children}) {
  const [selection, setSelection] = useState(null);
  const group = skillEvidence.find(skill => skill.id === selection?.groupId);
  const label = selection?.tool || group?.title || "";
  const examples = selection?.tool
    ? toolEvidence[selection.tool] || []
    : group?.examples || [];
  function revealResultOnMobile() {
    if (window.matchMedia("(max-width: 767px)").matches)
      requestAnimationFrame(() => {
        document
          .getElementById("skill-result-title")
          ?.focus({preventScroll: true});
        document
          .getElementById("skill-result")
          ?.scrollIntoView({block: "start", behavior: "auto"});
      });
  }
  const selectGroup = groupId => {
    setSelection({groupId});
    revealResultOnMobile();
  };
  const selectTool = tool => {
    setSelection({groupId: skillTargets[tool], tool});
    revealResultOnMobile();
  };
  const clear = () => setSelection(null);
  const match = target => examples.filter(example => example.target === target);
  return (
    <SkillSelectionContext.Provider
      value={{
        selection,
        group,
        label,
        examples,
        selectGroup,
        selectTool,
        clear,
        match
      }}
    >
      {children}
    </SkillSelectionContext.Provider>
  );
}
export function useSkillSelection() {
  return useContext(SkillSelectionContext);
}
