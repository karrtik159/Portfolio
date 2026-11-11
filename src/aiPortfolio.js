export const capabilities = [
  [
    "01",
    "Retrieval & agent systems",
    "Agentic, Graph, and Hybrid RAG; multi-agent orchestration; persistent memory; and real-time voice agents.",
    ["LangChain", "CrewAI", "Neo4j", "pgvector", "Mem0", "LiveKit"]
  ],
  [
    "02",
    "Evaluation & observability",
    "Compare response quality, retrieval accuracy, latency, and cost. Use measured outcomes to choose models and retrieval configurations.",
    ["RAGAS", "LangSmith", "Langfuse", "MLflow", "Weights & Biases"]
  ],
  [
    "03",
    "Computer vision & deep learning",
    "Object detection, real-time video inference, transformer-based prediction, diffusion models, and 3D point-cloud segmentation.",
    ["PyTorch", "TensorFlow", "OpenCV", "Detectron2", "DBSCAN"]
  ],
  [
    "04",
    "Production AI infrastructure",
    "Terraform-provisioned GCP and KVM servers, Dockerised FastAPI and PostgreSQL services behind Cloudflare DNS, and CI/CD pipelines that test, deploy and restart services.",
    ["GCP", "Terraform", "Docker", "CI/CD", "FastAPI", "PostgreSQL", "Redis"]
  ]
];
export const experience = [
  {
    id: "senior-ai-engineer",
    date: "MAY 2025 — PRESENT",
    role: "Senior AI/ML Engineer",
    company: "Kmphitech LLP · Promoted",
    description:
      "Architecting retrieval systems and the evaluation and infrastructure that keep them useful in production.",
    highlights: [
      "Led the company's own LLM products from research to prototype to production, owning retrieval layers, tool integrations, evaluation benchmarks, and observability pipelines.",
      "Improved retrieval relevance by 25% across 8 configurations on a knowledge graph of 50K+ entities, measured with precision@k and recall@k.",
      "Evaluated 5+ models for response quality, retrieval accuracy, latency, and cost; reduced inference spend by 30%.",
      "Productionized 6 AI microservices with Docker, CI/CD, and auto-scaling alongside backend and DevOps teams, sustaining 99.5% uptime with Langfuse monitoring.",
      "Built and ran the production deployment for GetSetBook: Terraform-provisioned GCP and KVM virtual servers, Dockerised FastAPI and PostgreSQL services behind Cloudflare DNS, and a CI/CD pipeline that tests, deploys and restarts services. Integrated Stripe payments and Elastic Email.",
      "Standardized MLflow and Weights & Biases tracking across 20+ experiments; mentored 3 engineers, reducing ramp-up from 4 to 2 weeks."
    ]
  },
  {
    id: "ai-ml-engineer",
    date: "MAY 2024 — MAY 2025",
    role: "AI/ML Engineer",
    company: "Kmphitech LLP",
    description:
      "Built real-time computer vision and applied language models to production tasks.",
    highlights: [
      "Built the core classification, extraction, and retrieval modules behind the company's first-generation AI products, served as FastAPI microservices in Docker.",
      "Vehicle detection across 8 camera streams at 25+ FPS and 92% mAP, with occupancy alerts delivered to dashboards.",
      "Applied zero-shot and few-shot prompting across 4 NLP tasks, reducing retraining cycles by 50% without accuracy loss."
    ]
  },
  {
    id: "ai-intern",
    date: "JAN — MAR 2024",
    role: "AI Engineer Intern",
    company: "Aukture Technologies Pvt. Ltd",
    description: "Computer vision and generative modeling for virtual try-on.",
    highlights: [
      "Reduced image preprocessing time by 25% using augmentation and parallel processing.",
      "Trained transformer-based body-measurement and posture models (±2 cm mean error) and integrated diffusion models for visual realism."
    ]
  },
  {
    id: "freelance-ai-engineer",
    date: "MAY — DEC 2023",
    role: "Freelance AI/ML Engineer",
    company: "Independent Consultant",
    description:
      "Delivered detection, point-cloud, and model-optimization projects for clients.",
    highlights: [
      "Fine-tuned Detectron2 on COWC aerial imagery to 85% mAP@0.5, with 2K+ annotated image tiles.",
      "Segmented LiDAR scenes containing 1M+ points using DBSCAN. Pruned detection models to reduce size by 40% and inference time by 30%, with under 1% mAP loss."
    ]
  },
  {
    id: "research-intern",
    date: "JAN — MAY 2023",
    role: "Research Intern · Emotion Recognition",
    company: "Ganpat University",
    description:
      "Deep learning research on facial emotion recognition with the EMOTIC dataset.",
    highlights: [
      "Raised emotion-recognition accuracy by 15% by extending the EMOTIC dataset to 26 emotion classes and tuning the models.",
      "Benchmarked AlexNet and VGG19 with transfer learning, using RMSprop, Adam, and SGD, on 25K+ images."
    ]
  }
];
