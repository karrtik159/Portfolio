import React, {useContext} from "react";
import "./Practice.scss";
import {practiceSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import classNames from "classnames";
import {ReactComponent as AiWorkflowLoop} from "../../assets/images/ai-workflow-loop.svg";
import {ReactComponent as AiPipelineFlow} from "../../assets/images/ai-pipeline-flow.svg";

const diagrams = {
  workflow: AiWorkflowLoop,
  pipeline: AiPipelineFlow
};

export default function Practice() {
  const {isDark} = useContext(StyleContext);

  if (!practiceSection.display) return null;

  const flow = practiceSection.flow;
  const Diagram =
    flow && flow.diagram && diagrams[flow.diagram]
      ? diagrams[flow.diagram]
      : AiWorkflowLoop;

  return (
    <section
      className={classNames("practice-section", {"dark-mode": isDark})}
      id="practice"
    >
      {practiceSection.cliPrompt ? (
        <p className="cli-prompt">{practiceSection.cliPrompt}</p>
      ) : null}
      <h1 className="section-title practice-heading">{practiceSection.title}</h1>
      <p className="practice-subtitle">{practiceSection.subtitle}</p>
      <div className="practice-list">
        {practiceSection.items.map(item => (
          <article className="practice-row" key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      {flow ? (
        <div className="practice-arch" aria-label="System workflow">
          <div className="practice-arch-head">
            {flow.title ? (
              <h2 className="practice-arch-title">{flow.title}</h2>
            ) : null}
          </div>
          <div className="practice-arch-diagram">
            <Diagram
              className="practice-arch-graphic"
              aria-hidden="true"
              focusable="false"
            />
          </div>
          {flow.caption ? (
            <p className="practice-arch-caption">{flow.caption}</p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
