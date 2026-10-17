import React, {useContext} from "react";
import "./Focus.scss";
import {focusSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import classNames from "classnames";
import {useSelection} from "../../hooks/useSelection";

export default function Focus() {
  const {isDark} = useContext(StyleContext);
  const items = focusSection.items || [];
  const initial = items.reduce(
    (found, item, i) => (item.status === "current" ? i : found),
    0
  );
  const {index, select, onKeyDown, tabsRef} = useSelection(items.length, initial);

  if (!focusSection.display) return null;

  const active = items[index];

  return (
    <section
      className={classNames("focus-section", {"dark-mode": isDark})}
      id="focus"
      aria-labelledby="focus-heading"
    >
      <h1 id="focus-heading" className="section-title focus-heading">
        {focusSection.title}
      </h1>
      <p className="focus-subtitle">{focusSection.subtitle}</p>
      {focusSection.now && (
        <p className="focus-now">
          <span className="focus-now-label">{focusSection.now.label}</span>
          {focusSection.now.text}
        </p>
      )}
      <div className="focus-reader">
        <div
          className="focus-tabs"
          role="tablist"
          aria-label="Career arc"
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
        >
          {items.map((item, i) => (
            <button
              key={`${item.phase}-${item.era}`}
              ref={node => {
                tabsRef.current[i] = node;
              }}
              id={`focus-tab-${i}`}
              className={classNames("focus-tab", item.status)}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-controls="focus-panel"
              tabIndex={i === index ? 0 : -1}
              onClick={() => select(i)}
            >
              <span className="focus-tab-era">{item.era}</span>
              <span className="focus-tab-phase">{item.phase}</span>
            </button>
          ))}
        </div>
        {active ? (
          <div
            className="focus-chapter"
            role="tabpanel"
            id="focus-panel"
            aria-labelledby={`focus-tab-${index}`}
          >
            <div key={`${active.phase}-${active.era}`} className="focus-chapter-body">
              <h2 className="focus-title">{active.title}</h2>
              <p className="focus-text">{active.text}</p>
            </div>
          </div>
        ) : null}
      </div>
      {focusSection.curiosity?.length > 0 && (
        <ul className="focus-curiosity">
          {focusSection.curiosity.map(item => (
            <li key={item.title}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span className="focus-curiosity-title">{item.title}</span>
                <span className="focus-curiosity-note">{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
