// Tool-level evidence is intentionally narrower than capability-level evidence.
// Do not infer that every tool in a capability was used on every linked project.
export const toolEvidence = {
  LangChain: [
    {
      target: "referu-ai",
      project: "ReferU.AI",
      built:
        "Built LangChain retrieval workflows behind the legal discovery and conversational AI services."
    }
  ],
  Neo4j: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Used a Neo4j knowledge graph for relationship-aware retrieval alongside pgvector semantic search."
    }
  ],
  pgvector: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Used PostgreSQL pgvector for semantic retrieval and vector-backed user memory alongside Neo4j."
    }
  ],
  "Reciprocal Rank Fusion": [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Combined graph and vector retrieval rankings with Reciprocal Rank Fusion."
    }
  ],
  CrewAI: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Built role-based Support and Memory crews, separated from the real-time voice transport layer."
    }
  ],
  LiveKit: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Built a separate voice worker for real-time audio, turn detection, and interruption handling; it calls the FastAPI RAG endpoint over HTTP."
    }
  ],
  Mem0: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Added persistent user memory that extracts entities and preferences from conversations, backed by graph and vector stores."
    }
  ],
  RAGAS: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Scaffolded answer-level RAG evaluation with fixture cases, alongside separately implemented retrieval metrics (recall@k, MRR, nDCG). No completed benchmark result is claimed yet."
    }
  ],
  LangSmith: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Added execution tracing for inspecting agent and retrieval workflows with LangSmith / OpenTelemetry."
    }
  ],
  Langfuse: [
    {
      target: "senior-ai-engineer",
      project: "Kmphitech · production monitoring",
      built:
        "Used live Langfuse monitoring in the production AI microservice deployment work. The reported service uptime was 99.5%."
    }
  ],
  MLflow: [
    {
      target: "senior-ai-engineer",
      project: "Kmphitech · experiment tracking",
      built:
        "Standardized experiment tracking and model versioning with MLflow and Weights & Biases across 20+ experiments for reproducibility and auditability."
    }
  ],
  "Weights & Biases": [
    {
      target: "senior-ai-engineer",
      project: "Kmphitech · experiment tracking",
      built:
        "Standardized experiment tracking and model versioning alongside MLflow across 20+ experiments."
    }
  ],
  PyTorch: [
    {
      target: "emotion-detection",
      project: "Emotion Detection",
      built:
        "Implemented and compared CNN emotion-recognition models with PyTorch on the EMOTIC dataset."
    }
  ],
  OpenCV: [
    {
      target: "emotion-detection",
      project: "Emotion Detection",
      built:
        "Used OpenCV image processing in the facial emotion-recognition application and its interactive web interface."
    }
  ],
  VGG19: [
    {
      target: "emotion-detection",
      project: "Emotion Detection",
      built:
        "Compared VGG19 with AlexNet for emotion recognition on the EMOTIC dataset."
    }
  ],
  AlexNet: [
    {
      target: "emotion-detection",
      project: "Emotion Detection",
      built:
        "Compared AlexNet with VGG19 for emotion recognition on the EMOTIC dataset."
    }
  ],
  Detectron2: [
    {
      target: "freelance-ai-engineer",
      project: "Freelance · aerial vehicle detection",
      built:
        "Fine-tuned Detectron2 Faster R-CNN on COWC aerial imagery after annotating 2K+ tiles, reaching 85% mAP@0.5."
    }
  ],
  DBSCAN: [
    {
      target: "freelance-ai-engineer",
      project: "Freelance · LiDAR segmentation",
      built:
        "Tuned DBSCAN clustering to segment 3D LiDAR scenes containing 1M+ points and isolate objects."
    }
  ],
  "Gemini API": [
    {
      target: "dog-coloring-books",
      project: "Dog Coloring Books",
      built:
        "Integrated Gemini image generation and photo processing to turn dog photos into printable coloring-book pages, connected to commerce and fulfillment."
    }
  ],
  Transformers: [
    {
      target: "ai-intern",
      project: "Aukture · body measurement",
      built:
        "Trained transformer-based body-measurement prediction models for virtual try-on, with ±2 cm mean error reported in the résumé."
    }
  ],
  "Diffusion models": [
    {
      target: "ai-intern",
      project: "Aukture · virtual try-on",
      built:
        "Integrated diffusion models to improve the visual realism of generated try-on results."
    }
  ],
  Python: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Built the Python FastAPI backend and isolated voice-worker services."
    },
    {
      target: "referu-ai",
      project: "ReferU.AI",
      built: "Built Python retrieval and API services for legal discovery."
    }
  ],
  FastAPI: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Built the asynchronous API backend used by the isolated LiveKit worker to query RAG and agent workflows."
    },
    {
      target: "referu-ai",
      project: "ReferU.AI",
      built:
        "Built API services that expose retrieval and conversational AI workflows."
    }
  ],
  Docker: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Provided a Docker Compose deployment path for backend, voice worker, and data services."
    },
    {
      target: "referu-ai",
      project: "ReferU.AI",
      built: "Containerized Python API and retrieval services."
    },
    {
      target: "senior-ai-engineer",
      project: "Kmphitech · AI services",
      built:
        "Productionized 6 Docker-based AI microservices with backend and DevOps teams."
    }
  ],
  GCP: [
    {
      target: "senior-ai-engineer",
      project: "Kmphitech · deployment platform",
      built:
        "Ran production FastAPI and PostgreSQL services on GCP and KVM virtual servers, provisioned with Terraform and served behind Cloudflare DNS."
    }
  ],
  Terraform: [
    {
      target: "senior-ai-engineer",
      project: "Kmphitech · deployment platform",
      built:
        "Provisioned GCP and KVM server infrastructure with Terraform, connected to a CI/CD pipeline that tests, deploys and restarts services."
    }
  ],
  "CI/CD": [
    {
      target: "senior-ai-engineer",
      project: "Kmphitech · deployment platform",
      built:
        "Built a CI/CD pipeline that tests, deploys and restarts Dockerised FastAPI services on GCP and KVM servers."
    },
    {
      target: "senior-ai-engineer",
      project: "Kmphitech · AI services",
      built:
        "Automated delivery for 6 production AI microservices alongside backend and DevOps teams, with auto-scaling and monitoring."
    }
  ],
  PostgreSQL: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built:
        "Used PostgreSQL for relational persistence and pgvector semantic retrieval with an async SQLAlchemy data layer."
    },
    {
      target: "referu-ai",
      project: "ReferU.AI",
      built: "Built PostgreSQL data access behind legal discovery services."
    }
  ],
  Redis: [
    {
      target: "contextflow",
      project: "ContextFlow",
      built: "Used Redis for session state and short-term conversation context."
    }
  ],
  Celery: [
    {
      target: "experience",
      project: "Kmphitech · background processing",
      built:
        "Designed asynchronous service workflows with FastAPI, Redis, and Celery for background processing, as described in the existing portfolio."
    }
  ]
};
