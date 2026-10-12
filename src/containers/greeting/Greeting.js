import React, {useContext} from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import classNames from "classnames";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) return null;

  return (
    <>
      <section
        className={classNames("greet-main", {"dark-mode": isDark})}
        id="greeting"
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className="greeting-brand">{greeting.title}</h1>
            <p className="greeting-text-p">{greeting.subTitle}</p>
            <div className="button-greeting-div">
              <Button text="Contact" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="Resume"
                  newTab
                  href={greeting.resumeLink}
                  className="button-ghost"
                />
              )}
            </div>
            <SocialMedia />
          </div>
          <nav className="practice-poster" aria-label="Practices">
            <a href="#practice">Applied engineer</a>
            <a href="#practice">Concept implementation</a>
            <a href="#practice">AI curator</a>
          </nav>
        </div>
      </section>
      <section
        className={classNames("snapshot-strip", {"dark-mode": isDark})}
        aria-label="Resume snapshot"
      >
        <dl>
          {greeting.snapshot.map(row => (
            <div className="snapshot-item" key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
