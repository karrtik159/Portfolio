import React, {useContext} from "react";
import "./HowIWork.scss";
import {howIWorkSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import classNames from "classnames";

export default function HowIWork() {
  const {isDark} = useContext(StyleContext);

  if (!howIWorkSection.display) return null;

  return (
    <section
      className={classNames("how-i-work-section", {"dark-mode": isDark})}
      id="principles"
      aria-labelledby="how-i-work-heading"
    >
      <h1 id="how-i-work-heading" className="section-title how-i-work-heading">
        {howIWorkSection.title}
      </h1>
      {howIWorkSection.subtitle ? (
        <p className="how-i-work-subtitle">{howIWorkSection.subtitle}</p>
      ) : null}
      <ol className="principles-panel">
        {howIWorkSection.principles.map((item, index) => (
          <li
            className="principle-row"
            key={item.id}
            style={{"--principle-i": index}}
          >
            <span className="principle-id" aria-hidden="true">
              {item.id}
            </span>
            <p className="principle-text">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
