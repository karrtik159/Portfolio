import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {useSelection} from "../../hooks/useSelection";

function ProductReader({products, idPrefix}) {
  const {index, select, onKeyDown, tabsRef} = useSelection(products.length, 0);
  const product = products[index];
  if (!product) return null;

  return (
    <div className="product-reader">
      <p className="product-reader-label">Client products</p>
      <div
        className="product-tabs"
        role="tablist"
        aria-label="Client products"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
      >
        {products.map((item, i) => (
          <button
            key={item.name}
            ref={node => {
              tabsRef.current[i] = node;
            }}
            id={`${idPrefix}-tab-${i}`}
            className="product-tab"
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={i === index ? 0 : -1}
            onClick={() => select(i)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div
        className="product-panel"
        role="tabpanel"
        id={`${idPrefix}-panel`}
        aria-labelledby={`${idPrefix}-tab-${index}`}
      >
        <div key={product.name}>
          <p className="experience-product-name">{product.name}</p>
          {product.url ? (
            <a
              className="experience-product-link"
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product.domain || "Visit"}
            </a>
          ) : null}
          <p className="experience-product-text">{product.text}</p>
          {product.points && product.points.length > 0 && (
            <ul className="experience-product-points">
              {product.points.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  if (!workExperiences.display) return null;

  return (
    <div id="experience" className={isDark ? "dark-mode" : null}>
      <Fade bottom duration={500} distance="16px" fraction={0.05}>
        <div className="experience-container" id="workExperience">
          <h1 className="experience-heading section-title">Experience</h1>
          <div className="experience-timeline">
            {workExperiences.experience.map((card, i) => (
              <article
                key={`${card.company}-${card.role}-${i}`}
                className="experience-item"
              >
                <div className="experience-marker" aria-hidden="true" />
                <div className="experience-content">
                  <div className="experience-side">
                    <div className="experience-meta">
                      <img
                        className="experience-logo"
                        src={card.companylogo}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width="48"
                        height="48"
                      />
                      <div>
                        <h2 className="experience-role">{card.role}</h2>
                        <p className="experience-company">{card.company}</p>
                        <p className="experience-date">{card.date}</p>
                      </div>
                    </div>
                    <p className="experience-desc">{card.desc}</p>
                  </div>
                  <div className="experience-main">
                    {card.descBullets && card.descBullets.length > 0 && (
                      <ul className="experience-bullets">
                        {card.descBullets.map((bullet, j) => (
                          <li key={j}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {card.products && card.products.length > 0 && (
                      <ProductReader
                        products={card.products}
                        idPrefix={`product-${i}`}
                      />
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
