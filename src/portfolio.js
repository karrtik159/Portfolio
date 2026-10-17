/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

const splashScreen = {
  enabled: false,
  animation: null,
  duration: 0
};

const illustration = {
  animated: false
};

const greeting = {
  username: "Karrtik Baheti",
  title: "Karrtik Baheti",
  cliPrompt: "$ whoami",
  subTitle:
    "Senior AI/ML engineer shipping production RAG, agents, and the eval that keeps them grounded.",
  resumeLink:
    "https://drive.google.com/file/d/19VQ-2pt2qmtOSjJUUATaFny9GVZRp-V_/view?usp=sharing",
  stackLayers: [
    "Applications",
    "AI Systems",
    "Data and Knowledge",
    "Infrastructure"
  ],
  // Flat stack diagram (CRA: require(...).default for <img>; Greeting inlines via ReactComponent)
  stackSvg: require("./assets/images/ai-stack-layers.svg").default,
  snapshot: [
    {label: "Current", value: "Senior AI/ML Engineer, Kmphitech LLP"},
    {label: "Experience", value: "2+ years in production AI"},
    {label: "Based in", value: "Surat, India · open to opportunities"}
  ],
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/karrtik159",
  linkedin: "https://www.linkedin.com/in/karrtik-baheti",
  gmail: "karrtikbaheti159@gmail.com",
  display: true
};

const practiceSection = {
  title: "Practice",
  cliPrompt: "$ cat practice.md",
  subtitle: "Three kinds of work, on the same systems.",
  items: [
    {
      name: "Applied engineer",
      text: "Ship model behavior into a product. At Kmphitech that means agentic, graph, and hybrid RAG, scores for quality, latency, and cost, and the services that keep them running."
    },
    {
      name: "Concept implementation",
      text: "Take a method that exists as a paper or a demo and make it hold up. ContextFlow is the public example: hybrid graph-vector retrieval, CrewAI agents, and memory, with RAGAS in the loop."
    },
    {
      name: "AI curator",
      text: "Decide what a system is allowed to know. That is model choice, source selection, prompt patterns, and which eval cases stay in the set. Mentoring on retrieval is the same job."
    }
  ],
  flow: {
    title: "How systems move",
    // "workflow" | "pipeline" — Practice maps these to SVG ReactComponents
    diagram: "workflow",
    caption:
      "Collect grounded sources, understand them, reason with RAG and agents, deliver into product — then improve from eval.",
    workflowSvg: require("./assets/images/ai-workflow-loop.svg").default,
    pipelineSvg: require("./assets/images/ai-pipeline-flow.svg").default
  },
  display: true
};

const howIWorkSection = {
  title: "How I work",
  cliPrompt: "$ cat principles",
  subtitle: "Defaults I keep when shipping retrieval systems.",
  principles: [
    {
      id: "01",
      text: "Ground retrieval before you trust the answer. Sources and fusion configs beat prompt theater."
    },
    {
      id: "02",
      text: "Eval is a loop, not a launch checkbox. Quality, latency, and cost decide what ships."
    },
    {
      id: "03",
      text: "Curation is engineering. What a system is allowed to know is a design choice, not a dump."
    },
    {
      id: "04",
      text: "Prefer boring deploy paths. Notebooks become services with Docker, CI, and monitoring before demos do."
    }
  ],
  display: true
};

const focusSection = {
  title: "Focus",
  subtitle:
    "One throughline: how the work learned to ship, retrieve, evaluate - and what I am digging into now.",
  now: {
    label: "Now",
    text:
      "Decision models in AI DevOps - typed judgments for CI, alerts, and agent guardrails, kept beside rules rather than above them."
  },
  items: [
    {
      era: "2019 - 2023",
      phase: "Foundations",
      title: "ML, deep learning, systems",
      text: "Computer Engineering (AI). Neural Networks and TensorFlow specializations. Train first, then learn to ship.",
      status: "past"
    },
    {
      era: "2022 - 2024",
      phase: "Vision & product",
      title: "Perception into services",
      text: "Emotion detection, virtual try-on, parking vision. Transformers, diffusion, FastAPI, Docker - notebooks became APIs.",
      status: "past"
    },
    {
      era: "2024",
      phase: "Retrieval",
      title: "Agents, graphs, grounding",
      text: "Agentic, graph, and hybrid RAG on a production knowledge graph. Precision@k and recall@k drove the configs.",
      status: "past"
    },
    {
      era: "2024 - Present",
      phase: "Evaluation",
      title: "Quality, cost, curation",
      text: "LLM eval for response quality, retrieval, latency, and cost. Mentoring on prompts, sources, and what stays in the set.",
      status: "current"
    },
    {
      era: "Exploring",
      phase: "DevOps judgment",
      title: "System One-style decisions",
      text: "Where fast structured models help pipelines - and where deterministic policy must still own deploy and page.",
      status: "current"
    }
  ],
  curiosity: [
    {
      title: "System One + Jev",
      note: "Typed decisions, not chat",
      url: "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    },
    {
      title: "Shadow before automate",
      note: "Log judgment next to rules",
      url: "https://jevlist.ai/knowledge/jev-devops-decisions"
    },
    {
      title: "Retriever cost vs quality",
      note: "Hybrid search still needs a pick",
      url: "https://www.kapa.ai/blog/company-knowledge-bench"
    }
  ],
  display: true
};

const skillsSection = {
  title: "Skills",
  subTitle:
    "Hiring-scan groups from the resume stack: GenAI, models, retrieval, and how it ships.",
  skillGroups: [
    {
      name: "LLM / GenAI",
      items: [
        "LangChain",
        "CrewAI",
        "Agentic / Graph / Hybrid RAG",
        "Prompt engineering",
        "LiveKit",
        "Mem0",
        "RAGAS",
        "LangSmith"
      ]
    },
    {
      name: "Models & CV",
      items: [
        "PyTorch",
        "TensorFlow",
        "Hugging Face Transformers",
        "OpenCV",
        "scikit-learn",
        "Diffusion models",
        "Zero-shot / few-shot"
      ]
    },
    {
      name: "Data & retrieval",
      items: [
        "Neo4j",
        "pgvector",
        "Knowledge graphs",
        "Reciprocal rank fusion",
        "Precision@k / Recall@k",
        "MySQL",
        "MongoDB",
        "Feature engineering"
      ]
    },
    {
      name: "Ship / MLOps",
      items: [
        "Python",
        "FastAPI",
        "Docker",
        "CI/CD",
        "Celery",
        "Redis",
        "MLflow",
        "Microservices"
      ]
    }
  ],
  softwareSkills: [
    {skillName: "Python", iconName: "python"},
    {skillName: "PyTorch", iconName: "pytorch"},
    {skillName: "LangChain", iconName: "langchain"},
    {skillName: "CrewAI", iconName: "crewai"},
    {skillName: "FastAPI", iconName: "fastapi"},
    {skillName: "Docker", iconName: "docker"},
    {skillName: "Neo4j", iconName: "neo4j"},
    {skillName: "LiveKit", iconName: "livekit"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "U.V. Patel College of Engineering, Ganpat University",
      logo: require("./assets/images/logo_2020.webp"),
      subHeader: "Bachelor of Computer Engineering (Artificial Intelligence)",
      duration: "June 2019 - May 2023",
      desc: "CGPA: 8.66 / 10",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [
    {Stack: "LLM & RAG Systems", progressPercentage: "90%"},
    {Stack: "Python", progressPercentage: "92%"},
    {Stack: "MLOps & Deployment", progressPercentage: "85%"},
    {Stack: "Computer Vision", progressPercentage: "78%"},
    {Stack: "Evaluation & Observability", progressPercentage: "82%"},
    {Stack: "Prompt Engineering", progressPercentage: "88%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior AI/ML Engineer",
      company: "Kmphitech LLP",
      companylogo: require("./assets/images/kmphitech.svg").default,
      date: "May 2025 - Present",
      desc: "Surat, India. Production LLM systems, agentic RAG, and MLOps.",
      descBullets: [
        "Delivered agentic, graph, and hybrid RAG on a production knowledge graph; retrieval relevance +25% on precision@k and recall@k.",
        "Ran eval for response quality, retrieval accuracy, latency, and cost to choose models and configs.",
        "Curated prompts, graph sources, and review practice for junior engineers on retrieval.",
        "Productionized with Docker, CI/CD, scaling, and live monitoring."
      ]
    },
    {
      role: "AI/ML Engineer",
      company: "Kmphitech LLP",
      companylogo: require("./assets/images/kmphitech.svg").default,
      date: "May 2024 - Present",
      desc: "Core ML products and the first production AI services.",
      descBullets: [
        "Built classification, extraction, and retrieval modules for the first generation of AI products.",
        "Shipped real-time parking-lot vehicle detection with alerting dashboards.",
        "Served models through FastAPI and Docker; used zero-shot and few-shot prompts to skip retrains."
      ]
    },
    {
      role: "AI Engineer Intern",
      company: "Aukture Technologies Pvt. Ltd",
      companylogo: require("./assets/images/aukture.webp"),
      date: "Jan 2024 - Mar 2024",
      desc: "Remote. Virtual try-on and body measurement.",
      descBullets: [
        "Cut virtual try-on preprocessing time by 25%.",
        "Built transformer models for body measurement; diffusion for visual realism."
      ]
    },
    {
      role: "Freelancer AI/ML Engineer",
      company: "Freelancer.com",
      companylogo: require("./assets/images/freelancer.svg").default,
      date: "Jan 2023 - Dec 2023",
      desc: "Freelance AI/ML projects for clients worldwide.",
      descBullets: [
        "Delivered custom ML models, data pipelines, and AI features for client products.",
        "Scoped requirements, shipped end-to-end solutions, and iterated from client feedback."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "One production system in focus, then an earlier vision study.",
  projects: [
    {
      image: require("./assets/images/contextflow.svg").default,
      projectName: "ContextFlow",
      featured: true,
      outcome:
        "Open-source real-time voice AI with hybrid graph-vector RAG, agent crews, and eval in the loop.",
      projectDesc:
        "FastAPI + CrewAI + LiveKit. Neo4j and pgvector fused with reciprocal rank fusion; Mem0 for memory. Quality checked with RAGAS and LangSmith.",
      tech: ["Hybrid Graph-Vector RAG", "Neo4j + pgvector + RRF", "CrewAI", "LiveKit"],
      metrics: [
        {
          label: "Retrieval relevance",
          value: "+25% precision@k / recall@k"
        },
        {
          label: "Stack",
          value: "Graph + vector + RRF"
        },
        {
          label: "Eval loop",
          value: "RAGAS · LangSmith"
        }
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/karrtik159"
        }
      ]
    },
    {
      image: require("./assets/images/face-detection.webp"),
      projectName: "Emotion Detection",
      outcome:
        "Architecture comparison study for emotion recognition on a public affective dataset.",
      projectDesc:
        "Compared VGG19 and AlexNet on the EMOTIC dataset. Early work in computer vision and affective computing. No published accuracy claim beyond the comparison itself.",
      tech: ["VGG19", "AlexNet", "EMOTIC", "Flask"],
      metrics: [
        {
          label: "Architectures",
          value: "VGG19 vs AlexNet"
        },
        {
          label: "Dataset",
          value: "EMOTIC"
        }
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/karrtik159/Flask_Face_detection"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: "Certifications",
  subtitle: "Deep learning credentials, plus a state hackathon final.",
  achievementsCards: [
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "Issued by DeepLearning.AI",
      image: require("./assets/images/coursera-nn.webp"),
      imageAlt: "DeepLearning.AI Neural Networks certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/records/CBQCAVPMU9ZN"
        }
      ]
    },
    {
      title: "TensorFlow: Advanced Techniques",
      subtitle: "Issued by DeepLearning.AI",
      image: require("./assets/images/certificate-1.webp"),
      imageAlt: "DeepLearning.AI TensorFlow certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1q-9GiyCr37LHgyTWCCew2me4P5eX6FKU/view?usp=sharing"
        }
      ]
    },
    {
      title: "Gujarat SSIP Hackathon Finalists",
      subtitle: "Azadi ka Amrit Mahotsav Hackathon-2022",
      image: require("./assets/images/ssip-hackathon.svg").default,
      imageAlt: "SSIP Hackathon certificate",
      footerLink: []
    }
  ],
  display: true
};

const contactInfo = {
  title: "Contact",
  subtitle:
    "Open to applied AI roles. Best reach is email for retrieval, agents, and evaluation work.",
  statusLine: "status: systems online · eval loop ready",
  email_address: "karrtikbaheti159@gmail.com"
};

const twitterDetails = {
  userName: "KarrtikB",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  practiceSection,
  howIWorkSection,
  focusSection,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable
};
