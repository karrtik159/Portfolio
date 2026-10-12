import React, {useContext} from "react";
import "./Signals.scss";
import {signalSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import classNames from "classnames";

export default function Signals() {
  const {isDark} = useContext(StyleContext);

  if (!signalSection.display) return null;

  return (
    <section
      className={classNames("signals-section", {"dark-mode": isDark})}
      id="signals"
    >
      <h1 className="section-title signals-heading">{signalSection.title}</h1>
      <p className="signals-subtitle">{signalSection.subtitle}</p>
      <div className="signals-list">
        {signalSection.items.map(item => (
          <article className="signal-row" key={item.title}>
            <time dateTime={item.date}>{item.date}</time>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.source}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
