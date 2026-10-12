import React, {useContext} from "react";
import "./Practice.scss";
import {practiceSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import classNames from "classnames";

export default function Practice() {
  const {isDark} = useContext(StyleContext);

  if (!practiceSection.display) return null;

  return (
    <section
      className={classNames("practice-section", {"dark-mode": isDark})}
      id="practice"
    >
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
    </section>
  );
}
