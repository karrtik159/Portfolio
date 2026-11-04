import React from "react";
import {ArrowUpRight, ArrowDown} from "./components/PortfolioIcons";
import ContextFlowProject from "./components/ContextFlowProject";
import SkillEvidence from "./components/SkillEvidence";
import IndependentProject from "./components/IndependentProject";
import PortfolioContact from "./components/PortfolioContact";
import ProductionApps from "./components/ProductionApps";
import {capabilities, experience} from "./aiPortfolio";
import {projects} from "./projects";
import "./App.scss";
import {
  SkillSelectionProvider,
  useSkillSelection
} from "./contexts/SkillSelectionContext";
import ProjectSkillEvidence from "./components/ProjectSkillEvidence";
const resume =
  "https://drive.google.com/file/d/1qJqU2EjBgP7D9UTdWRa-WaGlCSv-TTVq/view?usp=sharing";
function Portfolio() {
  const {selection, label, examples, selectGroup, clear, match} =
    useSkillSelection();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="page-shell">
        <header className="header">
          <a href="#" className="wordmark" aria-label="Karrtik Baheti home">
            kb<span>.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#skills">AI skills</a>
            <a href="#work">
              Work <span>02</span>
            </a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href={`${import.meta.env.BASE_URL}learning/`}>Learning</a>
            <a className="nav-contact" href="#contact">
              Let’s talk <ArrowUpRight />
            </a>
          </nav>
        </header>
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-top mono">
              <span>KARRTIK BAHETI / AI BUILDER</span>
              <span className="availability">
                <i /> OPEN TO OPPORTUNITIES
              </span>
            </div>
            <h1 id="hero-title">
              AI, built for
              <br />
              the <em>real world.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                I’m a Senior AI/ML Engineer building production RAG systems,
                agents, and computer vision. From retrieval and evaluation to
                the infrastructure that keeps it all running.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#work">
                  Explore selected work <ArrowDown />
                </a>
                <a
                  className="text-link"
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé <ArrowUpRight />
                </a>
              </div>
            </div>
            <nav className="hero-skill-index" aria-label="Explore my AI skills">
              <span className="mono">MY AI TOOLKIT</span>
              <div>
                <a href="#skills" onClick={() => selectGroup("hybrid-rag")}>
                  RAG & knowledge systems ↗
                </a>
                <a href="#skills" onClick={() => selectGroup("ai-agents")}>
                  Agents & voice ↗
                </a>
                <a href="#skills" onClick={() => selectGroup("llm-evaluation")}>
                  LLM evaluation ↗
                </a>
                <a
                  href="#skills"
                  onClick={() => selectGroup("computer-vision")}
                >
                  Computer vision ↗
                </a>
                <a href="#skills" onClick={() => selectGroup("generative-ai")}>
                  Generative AI ↗
                </a>
                <a href="#skills" onClick={() => selectGroup("production-ai")}>
                  Production AI ↗
                </a>
              </div>
            </nav>
            <div
              className="outcomes"
              aria-label="Production AI outcomes from my experience at Kmphitech"
            >
              <div>
                <strong>
                  25<span>%</span>
                </strong>
                <p>Higher retrieval relevance</p>
                <small>50K+ entity knowledge graph</small>
              </div>
              <div>
                <strong>
                  30<span>%</span>
                </strong>
                <p>Lower inference spend</p>
                <small>Evaluation across 5+ models</small>
              </div>
              <div>
                <strong>6</strong>
                <p>AI microservices shipped</p>
                <small>Docker · CI/CD · auto-scaling</small>
              </div>
              <div>
                <strong>
                  99.5<span>%</span>
                </strong>
                <p>Production uptime</p>
                <small>With backend & DevOps teams</small>
              </div>
            </div>
            <div className="hero-foot mono">
              <span>BASED IN SURAT, INDIA ↗</span>
              <span>RETRIEVE. REASON. EVALUATE. SHIP.</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </section>
          <SkillEvidence />
          <section id="work" className="work">
            <div className="section-kicker mono">
              <span>02 / SELECTED WORK</span>
              <span>AGENTS, RETRIEVAL & APPLIED AI</span>
            </div>
            <div className="section-heading">
              <h2 tabIndex={-1} id="work-title">
                AI systems in practice<span className="accent">.</span>
              </h2>
              <p>
                Independent builds and open-source architecture.
                <br />
                Explore client products under my Kmphitech experience.
              </p>
            </div>
            {selection && (
              <div className="work-selection-summary">
                <p>
                  <span className="mono accent">SELECTED / {label}</span>
                  <span>
                    {
                      examples.filter(e =>
                        ["contextflow", "emotion-detection"].includes(e.target)
                      ).length
                    }{" "}
                    related projects highlighted · all projects remain visible
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    clear();
                    document
                      .getElementById("work-title")
                      ?.focus({preventScroll: true});
                  }}
                >
                  Clear selection ×
                </button>
              </div>
            )}
            <div className="work-grid">
              <ContextFlowProject />
              {projects
                .filter(project => project.anchor === "emotion-detection")
                .map(project => (
                  <IndependentProject key={project.id} project={project} />
                ))}
            </div>
            <a className="client-work-direction" href="#production-apps">
              <span>
                <span className="mono accent">CLIENT WORK / KMPHITECH LLP</span>
                <strong>Explore the apps I helped ship.</strong>
                <span>
                  Eight production apps across AI, commerce, and computer
                  vision.
                </span>
              </span>
              <ArrowUpRight />
            </a>
            <div className="work-footer">
              <span className="mono">MORE EXPLORATIONS, OUT IN THE OPEN</span>
              <a
                className="text-link"
                href="https://github.com/karrtik159"
                target="_blank"
                rel="noreferrer"
              >
                Find me on GitHub <ArrowUpRight />
              </a>
            </div>
          </section>
          <section id="about" className="about">
            <div className="section-kicker mono">
              <span>03 / APPROACH & CAPABILITIES</span>
              <span>CURIOUS BY DEFAULT. PRECISE BY PRACTICE.</span>
            </div>
            <div className="about-grid">
              <div>
                <h2>
                  From models
                  <br />
                  to <em>production.</em>
                </h2>
                <p className="about-intro">
                  I’m Karrtik, an AI builder with 3+ years developing production
                  LLM systems, retrieval pipelines, and computer vision.
                </p>
                <p>
                  I work across the full AI lifecycle: preparing data, building
                  models and agent workflows, comparing quality and cost, and
                  deploying services with monitoring. I care about what a system
                  can retrieve, how it reasons, and whether the evidence
                  supports putting it into production.
                </p>
                <a
                  className="text-link"
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  A little more about me <ArrowUpRight />
                </a>
              </div>
              <div className="capabilities">
                {capabilities.map(([n, title, description, tags]) => (
                  <div className="capability" key={n}>
                    <span className="mono accent">{n}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <div className="capability-tags mono">
                        {tags.join(" / ")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="experience" className="experience">
            <div className="section-kicker mono">
              <span>04 / EXPERIENCE</span>
              <span>LEARNING BY MAKING. GROWING BY SHIPPING.</span>
            </div>
            <div className="experience-grid">
              <div>
                <h2>
                  Building AI.
                  <br />
                  Shipping impact<span className="accent">.</span>
                </h2>
                <p>
                  Retrieval, evaluation, computer vision, and MLOps.
                  <br />
                  Measured in production.
                </p>
                <a
                  className="text-link"
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  View full résumé <ArrowUpRight />
                </a>
              </div>
              <div className="timeline">
                {experience.map(
                  ({id, date, role, company, description, highlights}) => (
                    <article
                      id={id}
                      className="experience-item"
                      data-related={
                        selection ? match(id).length > 0 : undefined
                      }
                      key={`${company}-${date}`}
                    >
                      <span className="mono">{date}</span>
                      <h3>{role}</h3>
                      <div className="company">{company}</div>
                      <ProjectSkillEvidence target={id} />
                      <p>{description}</p>
                      <ul>
                        {highlights.map(highlight => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      {id === "senior-ai-engineer" && <ProductionApps />}
                    </article>
                  )
                )}
                <div className="education-note">
                  <span className="mono accent">FOUNDATIONS</span>
                  <h3>Computer Engineering · Artificial Intelligence</h3>
                  <p>
                    U.V. Patel College of Engineering, Ganpat University ·
                    2019–2023 · CGPA 8.66 / 10
                  </p>
                  <p>
                    DeepLearning.AI: Neural Networks and Deep Learning ·
                    TensorFlow: Advanced Techniques
                  </p>
                </div>
              </div>
            </div>
          </section>
          <PortfolioContact />
        </main>
        <footer>
          <a className="wordmark" href="#">
            kb<span>.</span>
          </a>
          <span className="mono">
            © {new Date().getFullYear()} KARRTIK BAHETI
          </span>
          <div>
            <a
              href="https://github.com/karrtik159"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight />
            </a>
            <a
              href="https://www.linkedin.com/in/karrtik-baheti"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight />
            </a>
            <a href={`${import.meta.env.BASE_URL}learning/`}>Learning</a>
            <a href="#">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default function App() {
  return (
    <SkillSelectionProvider>
      <Portfolio />
    </SkillSelectionProvider>
  );
}
