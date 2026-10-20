import React, {useContext} from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import classNames from "classnames";
import {greeting, practiceSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import AiStackLayers from "../../assets/images/ai-stack-layers.svg?react";

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
            <h1 className="greeting-brand">{greeting.title}</h1>
            <p className="greeting-text-p">{greeting.subTitle}</p>
            {greeting.snapshot && greeting.snapshot.length > 0 ? (
              <p className="snapshot-line">
                {greeting.snapshot.map(row => row.value).join(". ")}
              </p>
            ) : null}
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
              {(practiceSection.items || []).map((item, i) => (
                <a key={item.name} href={`#role-tab-${i}`}>
                  {item.name}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </section>
    </>
  );
}
