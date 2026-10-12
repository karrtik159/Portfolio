import React, {useContext} from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import classNames from "classnames";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {ReactComponent as AiStackLayers} from "../../assets/images/ai-stack-layers.svg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) return null;

  const layers = greeting.stackLayers || [];

  return (
    <>
      <section
        className={classNames("greet-main", {"dark-mode": isDark})}
        id="greeting"
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            {greeting.cliPrompt ? (
              <p className="cli-prompt greeting-cli">{greeting.cliPrompt}</p>
            ) : null}
            <h1 className="greeting-brand">{greeting.title}</h1>
            <p className="greeting-text-p">{greeting.subTitle}</p>
            <div className="button-greeting-div">
              <Button text="Projects" href="#projects" />
              <Button
                text="Contact"
                href="#contact"
                className="button-ghost"
              />
            </div>
            {greeting.resumeLink ? (
              <a
                className="greeting-resume-link"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            ) : null}
            <SocialMedia />
          </div>
          <aside className="greeting-aside">
            <div
              className="system-stack system-stack-svg"
              role="img"
              aria-label={
                layers.length > 0
                  ? `System layers: ${layers.join(", ")}`
                  : "AI systems layered stack"
              }
            >
              <AiStackLayers
                className="system-stack-graphic"
                aria-hidden="true"
                focusable="false"
              />
            </div>
            <nav className="practice-poster" aria-label="Practices">
              <a href="#practice">Applied engineer</a>
              <a href="#practice">Concept implementation</a>
              <a href="#practice">AI curator</a>
            </nav>
          </aside>
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
