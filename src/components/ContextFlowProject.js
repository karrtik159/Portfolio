import React from "react";
import SkillTags from "./SkillTags";
import {useSkillSelection} from "../contexts/SkillSelectionContext";
import ProjectSkillEvidence from "./ProjectSkillEvidence";
import {ArrowUpRight, Plus} from "./PortfolioIcons";
export default function ContextFlowProject() {
  const {selection, match} = useSkillSelection();
  return (
    <article
      data-related={selection ? match("contextflow").length > 0 : undefined}
      id="contextflow"
      className="project featured contextflow"
    >
      <div
        className="system-overview"
        aria-label="ContextFlow architecture overview"
      >
        <div className="system-top mono">
          <span>CONTEXTFLOW / SYSTEM OVERVIEW</span>
          <span>OPEN SOURCE · 2025</span>
        </div>
        <div className="system-heading">
          <span className="system-symbol" aria-hidden="true">
            ↗
          </span>
          <p>
            Voice. Knowledge.
            <br />
            <em>Context that stays.</em>
          </p>
        </div>
        <ol className="system-flow">
          <li>
            <span className="mono">01 / VOICE</span>
            <strong>LiveKit</strong>
            <small>Real-time conversation</small>
          </li>
          <li>
            <span className="mono">02 / ORCHESTRATION</span>
            <strong>FastAPI + CrewAI</strong>
            <small>Role-based agent crews</small>
          </li>
          <li>
            <span className="mono">03 / RETRIEVAL</span>
            <strong>Neo4j + pgvector</strong>
            <small>Graph + vector · rank fusion</small>
          </li>
          <li>
            <span className="mono">04 / MEMORY</span>
            <strong>Mem0</strong>
            <small>Long-term user context</small>
          </li>
        </ol>
        <div className="system-bottom mono">
          <span>QUALITY LOOP / RAGAS + LANGSMITH</span>
          <span>ARCHITECTURE OVERVIEW · NOT A LIVE DEMO</span>
        </div>
      </div>
      <div className="project-meta mono">
        <span>01 / VOICE AGENTS & HYBRID RAG</span>
        <span>INDEPENDENT · OPEN SOURCE</span>
      </div>
      <div className="project-title">
        <h3>
          <a
            href="https://github.com/karrtik159/ContextFlow"
            target="_blank"
            rel="noreferrer"
          >
            ContextFlow
          </a>
        </h3>
        <a
          className="text-link"
          href="https://github.com/karrtik159/ContextFlow"
          target="_blank"
          rel="noreferrer"
        >
          Explore the source <ArrowUpRight />
        </a>
      </div>
      <p className="project-description">
        A real-time voice AI agent combining graph-vector retrieval, multi-agent
        orchestration, and persistent user memory.
      </p>
      <ProjectSkillEvidence target="contextflow" />
      <SkillTags
        tools={[
          "FastAPI",
          "CrewAI",
          "LiveKit",
          "Neo4j",
          "pgvector",
          "Mem0",
          "RAGAS"
        ]}
      />
      <div className="implementation-grid">
        <div>
          <h4>Retrieval that connects the dots</h4>
          <p>
            Neo4j knowledge graphs and pgvector semantic search, combined with
            Reciprocal Rank Fusion to bring relationships and similarity into
            the same retrieval pipeline.
          </p>
        </div>
        <div>
          <h4>Separation that holds up</h4>
          <p>
            The LiveKit voice worker runs separately from the FastAPI / CrewAI
            backend and queries it over HTTP, isolating conflicting
            OpenTelemetry dependencies.
          </p>
        </div>
      </div>
      <details>
        <summary>
          Architecture & evaluation notes <Plus />
        </summary>
        <div className="project-detail">
          <h4>Voice, reasoning, and memory</h4>
          <p>
            LiveKit handles voice and turn detection. CrewAI coordinates
            role-based crews. Mem0 retains long-term user context using graph
            and vector storage; Redis supports sessions.
          </p>
          <h4>Evaluation status</h4>
          <p>
            RAGAS answer-level evaluation is scaffolded with fixture cases.
            Retrieval metrics are planned once retrieved contexts are exposed
            for evaluation. LangSmith / OpenTelemetry provide execution tracing.
          </p>
          <small>
            Technical details verified against the public repository README.
            This overview describes the architecture; it does not claim
            benchmark results for ContextFlow.
          </small>
        </div>
      </details>
    </article>
  );
}
