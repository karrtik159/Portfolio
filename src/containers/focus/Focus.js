import React, {useContext} from "react";
import "./Focus.scss";
import {focusSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import classNames from "classnames";

export default function Focus() {
  const {isDark} = useContext(StyleContext);

  if (!focusSection.display) return null;

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
      <ol className="focus-rail">
        {focusSection.items.map((item, index) => (
          <li
            key={`${item.phase}-${item.era}`}
            className={classNames("focus-node", item.status)}
          >
            <div className="focus-track" aria-hidden="true">
              <span className="focus-dot" />
              {index < focusSection.items.length - 1 && (
                <span className="focus-segment" />
              )}
            </div>
            <div className="focus-body">
              <p className="focus-era">{item.era}</p>
              <p className="focus-phase">{item.phase}</p>
              <h2 className="focus-title">{item.title}</h2>
              <p className="focus-text">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
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
