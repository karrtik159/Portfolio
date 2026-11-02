import React, {useEffect, useId} from "react";
import {clientProducts} from "../clientProducts";
import {useSelection} from "../hooks/useSelection";
import {ArrowUpRight} from "./PortfolioIcons";
import ProjectSkillEvidence from "./ProjectSkillEvidence";
import {useSkillSelection} from "../contexts/SkillSelectionContext";
const appAnchor = product =>
  product.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-$/, "");

export default function ProductionApps() {
  const prefix = useId();
  const {selection, match} = useSkillSelection();
  const {index, select, onKeyDown, tabsRef} = useSelection(
    clientProducts.length
  );
  const product = clientProducts[index];
  useEffect(() => {
    const revealApp = () => {
      const target = window.location.hash.slice(1);
      const next = clientProducts.findIndex(item => appAnchor(item) === target);
      if (next < 0) return;
      select(next);
      requestAnimationFrame(() => {
        document
          .getElementById(`${prefix}-panel-${next}`)
          ?.scrollIntoView({block: "nearest"});
      });
    };
    revealApp();
    window.addEventListener("hashchange", revealApp);
    return () => window.removeEventListener("hashchange", revealApp);
  }, [prefix, select]);

  return (
    <div className="production-apps" id="production-apps">
      <h4 id={`${prefix}-heading`}>Production Apps</h4>
      <p className="production-apps-intro">
        Client products I contributed to at Kmphitech LLP.
      </p>
      <div className="production-apps-reader">
        <div
          className="production-apps-tabs"
          role="tablist"
          aria-labelledby={`${prefix}-heading`}
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
        >
          {clientProducts.map((item, i) => (
            <button
              key={item.name}
              ref={node => {
                tabsRef.current[i] = node;
              }}
              id={appAnchor(item)}
              data-related={
                selection ? match(appAnchor(item)).length > 0 : undefined
              }
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-controls={`${prefix}-panel-${i}`}
              tabIndex={i === index ? 0 : -1}
              onClick={() => select(i)}
            >
              {item.name}
            </button>
          ))}
        </div>
        {clientProducts.map((item, i) => (
          <div
            className="production-apps-panel"
            key={item.name}
            id={`${prefix}-panel-${i}`}
            role="tabpanel"
            aria-labelledby={appAnchor(item)}
            hidden={i !== index}
            tabIndex={0}
          >
            {i === index && (
              <>
                <h5>{product.name}</h5>
                {product.url && (
                  <a
                    className="production-apps-link"
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.domain} <ArrowUpRight />
                  </a>
                )}
                <p>{product.text}</p>
                <ProjectSkillEvidence target={appAnchor(product)} />
                <div
                  className="production-apps-skills mono"
                  aria-label="Technologies used"
                >
                  {product.skills.map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
