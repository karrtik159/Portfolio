import React, {useContext, useEffect} from "react";
import "./Practice.scss";
import {practiceSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import classNames from "classnames";
import {useSelection} from "../../hooks/useSelection";

export default function Practice() {
  const {isDark} = useContext(StyleContext);
  const items = practiceSection.items || [];
  const steps = (practiceSection.flow && practiceSection.flow.steps) || [];
  const roles = useSelection(items.length, 0);
  const trace = useSelection(steps.length, 0);

  useEffect(() => {
    const syncRole = () => {
      const match = window.location.hash.match(/^#role-tab-(\d+)$/);
      if (!match) return;
      roles.select(Number(match[1]));
    };
    syncRole();
    window.addEventListener("hashchange", syncRole);
    return () => window.removeEventListener("hashchange", syncRole);
  }, [items.length, roles.select]);

  if (!practiceSection.display) return null;

  const role = items[roles.index];
  const step = steps[trace.index];
  const flow = practiceSection.flow;

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
      <div className="role-reader">
        <div
          className="role-tabs"
          role="tablist"
          aria-label="Kinds of work"
          aria-orientation="vertical"
          onKeyDown={roles.onKeyDown}
        >
          {items.map((item, i) => (
            <button
              key={item.name}
              ref={node => {
                roles.tabsRef.current[i] = node;
              }}
              id={`role-tab-${i}`}
              className="role-tab"
              type="button"
              role="tab"
              aria-selected={i === roles.index}
              aria-controls="role-panel"
              tabIndex={i === roles.index ? 0 : -1}
              onClick={() => roles.select(i)}
            >
              {item.name}
            </button>
          ))}
        </div>
        {role ? (
          <div
            className="role-panel"
            role="tabpanel"
            id="role-panel"
            aria-labelledby={`role-tab-${roles.index}`}
          >
            <p key={role.name}>{role.text}</p>
          </div>
        ) : null}
      </div>
      {flow && steps.length > 0 ? (
        <div className="practice-trace">
          <h2 className="practice-trace-title">{flow.title}</h2>
          {flow.caption ? (
            <p className="practice-trace-caption">{flow.caption}</p>
          ) : null}
          <div
            className="trace-steps"
            role="tablist"
            aria-label="System loop"
            aria-orientation="horizontal"
            onKeyDown={trace.onKeyDown}
          >
            {steps.map((item, i) => (
              <button
                key={item.name}
                ref={node => {
                  trace.tabsRef.current[i] = node;
                }}
                id={`trace-tab-${i}`}
                className="trace-step"
                type="button"
                role="tab"
                aria-selected={i === trace.index}
                aria-controls="trace-panel"
                tabIndex={i === trace.index ? 0 : -1}
                onClick={() => trace.select(i)}
              >
                {item.name}
              </button>
            ))}
          </div>
          {step ? (
            <div
              className="trace-panel"
              role="tabpanel"
              id="trace-panel"
              aria-labelledby={`trace-tab-${trace.index}`}
            >
              <p key={step.name}>{step.text}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
