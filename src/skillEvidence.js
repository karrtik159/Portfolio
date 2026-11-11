export const skillEvidence = [
  {
    id: "hybrid-rag",
    number: "01",
    title: "RAG & knowledge systems",
    tools: ["LangChain", "Neo4j", "pgvector", "Reciprocal Rank Fusion"],
    examples: [
      {
        target: "contextflow",
        project: "ContextFlow",
        built:
          "Combined graph relationships and semantic retrieval with Reciprocal Rank Fusion."
      },
      {
        target: "referu-ai",
        project: "ReferU.AI",
        built: "Retrieval and conversational AI services for legal discovery."
      },
      {
        target: "senior-ai-engineer",
        project: "Kmphitech · production RAG",
        built:
          "25% higher retrieval relevance across 8 configurations on a 50K+ entity graph."
      }
    ]
  },
  {
    id: "ai-agents",
    number: "02",
    title: "Agents, voice & memory",
    tools: ["CrewAI", "LiveKit", "Mem0"],
    examples: [
      {
        target: "contextflow",
        project: "ContextFlow",
        built:
          "Role-based agent crews, real-time voice and turn detection, and persistent user memory. Separate voice and reasoning processes communicate over HTTP."
      }
    ]
  },
  {
    id: "llm-evaluation",
    number: "03",
    title: "LLM evaluation & observability",
    tools: ["RAGAS", "LangSmith", "Langfuse", "MLflow", "Weights & Biases"],
    examples: [
      {
        target: "senior-ai-engineer",
        project: "Kmphitech · evaluation & MLOps",
        built:
          "Compared 5+ models on quality, retrieval, latency, and cost; reduced inference spend by 30%. Tracked 20+ experiments."
      },
      {
        target: "contextflow",
        project: "ContextFlow",
        built:
          "RAGAS answer-level evaluation scaffolding and LangSmith execution tracing. Retrieval metrics are planned."
      }
    ]
  },
  {
    id: "computer-vision",
    number: "04",
    title: "Computer vision & deep learning",
    tools: ["PyTorch", "OpenCV", "VGG19", "AlexNet", "Detectron2", "DBSCAN"],
    examples: [
      {
        target: "emotion-detection",
        project: "Emotion Detection",
        built:
          "Compared VGG19 and AlexNet on EMOTIC, with OpenCV image processing and an interactive Flask application."
      },
      {
        target: "ai-ml-engineer",
        project: "Kmphitech · vehicle detection",
        built:
          "Real-time parking detection across 8 camera streams at 25+ FPS and 92% mAP."
      },
      {
        target: "freelance-ai-engineer",
        project: "Freelance · aerial imagery & LiDAR",
        built:
          "Detectron2 on COWC at 85% mAP@0.5; DBSCAN segmentation of LiDAR scenes with 1M+ points."
      }
    ]
  },
  {
    id: "generative-ai",
    number: "05",
    title: "Generative AI & imaging",
    tools: ["Gemini API", "Transformers", "Diffusion models"],
    examples: [
      {
        target: "dog-coloring-books",
        project: "Dog Coloring Books",
        built:
          "Connected photo processing and Gemini image generation to payments and automated print fulfillment."
      },
      {
        target: "ai-intern",
        project: "Aukture · virtual try-on",
        built:
          "Transformer-based body measurement and diffusion-model integration; preprocessing time reduced by 25%."
      }
    ]
  },
  {
    id: "production-ai",
    number: "06",
    title: "Production AI engineering",
    tools: [
      "Python",
      "FastAPI",
      "Docker",
      "CI/CD",
      "GCP",
      "Terraform",
      "PostgreSQL",
      "Redis",
      "Celery"
    ],
    examples: [
      {
        target: "contextflow",
        project: "ContextFlow",
        built:
          "Async FastAPI backend with a separate LiveKit worker, PostgreSQL, and Redis sessions."
      },
      {
        target: "senior-ai-engineer",
        project: "Kmphitech · AI services",
        built:
          "Shipped 6 AI microservices with Docker, CI/CD, and auto-scaling alongside backend and DevOps teams; sustained 99.5% uptime. Ran GetSetBook's Terraform-provisioned GCP and KVM servers behind Cloudflare DNS."
      }
    ]
  }
];
export const skillTargets = Object.fromEntries(
  skillEvidence.flatMap(skill => skill.tools.map(tool => [tool, skill.id]))
);
