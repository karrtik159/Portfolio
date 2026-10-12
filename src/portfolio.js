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
  subTitle:
    "I turn model concepts into production systems and curate the knowledge those systems use.",
  resumeLink:
    "https://drive.google.com/file/d/19VQ-2pt2qmtOSjJUUATaFny9GVZRp-V_/view?usp=sharing",
  snapshot: [
    {label: "Current", value: "Senior AI/ML Engineer, Kmphitech LLP"},
    {label: "Experience", value: "2+ years in production AI"},
    {label: "Practice", value: "Applied engineer, concept implementation, AI curator"},
    {label: "Focus", value: "Agentic, graph, and hybrid RAG"},
    {label: "Education", value: "B.E. Computer Engineering (AI), 8.66 CGPA"},
    {label: "Based in", value: "Surat, India"}
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
  display: true
};

const signalSection = {
  title: "Signals",
  subtitle:
    "Recent research I use to judge retrieval, evaluation, and agent cost.",
  items: [
    {
      date: "2 Oct 2026",
      title: "Company knowledge still breaks retrieval",
      text: "Kapa's Company Knowledge Bench scored plain hybrid search at 0.41. A reranker lifted that to 0.50. Their own agentic retriever reached 0.65 in about five seconds. Kapa built every retriever in the test. I still treat the retriever as a cost and quality choice.",
      source: "Kapa",
      url: "https://www.kapa.ai/blog/company-knowledge-bench"
    },
    {
      date: "10 Oct 2026",
      title: "Golden eval sets go stale",
      text: "A Two Set AI write-up quotes Ofer Mendelevitch on production RAG. He points to UMBRELA, reference-free retrieval scoring from Jimmy Lin's lab. When documents change every week, a fixed answer key cannot keep up.",
      source: "Two Set AI",
      url: "https://www.twosetai.com/insights/evaluate-rag-without-golden-answers/"
    },
    {
      date: "8 Oct 2026",
      title: "Agentic search is not cheap yet",
      text: "Exa's ATLAS benchmark found no system under $1 that got half the rows right on wide research tasks. Their best reported run needed $8.92 and 18 minutes for 0.66 row F1. I scope agents to questions that justify that cost.",
      source: "Exa",
      url: "https://exa.ai/blog/atlas-benchmark"
    }
  ],
  display: true
};

const skillsSection = {
  title: "Skills",
  subTitle: "The tools I use to implement a concept and keep it in production.",
  skillGroups: [
    {
      name: "Applied systems",
      items: [
        "LangChain",
        "CrewAI",
        "FastAPI",
        "Docker",
        "CI/CD",
        "Celery",
        "Redis"
      ]
    },
    {
      name: "Retrieval",
      items: [
        "Agentic RAG",
        "Graph RAG",
        "Hybrid RAG",
        "Vector databases",
        "Knowledge graphs",
        "Neo4j"
      ]
    },
    {
      name: "Evaluation and curation",
      items: [
        "RAGAS",
        "Langfuse",
        "Prompt engineering",
        "MLflow",
        "Weights & Biases"
      ]
    },
    {
      name: "Models and languages",
      items: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "Hugging Face",
        "OpenCV",
        "SQL"
      ]
    }
  ],
  softwareSkills: [
    {skillName: "Python", iconName: "python"},
    {skillName: "PyTorch", iconName: "pytorch"},
    {skillName: "TensorFlow", iconName: "tensorflow"},
    {skillName: "Hugging Face", iconName: "huggingface"},
    {skillName: "LangChain", iconName: "langchain"},
    {skillName: "FastAPI", iconName: "fastapi"},
    {skillName: "Docker", iconName: "docker"},
    {skillName: "Neo4j", iconName: "neo4j"},
    {skillName: "Redis", iconName: "redis"},
    {skillName: "MLflow", iconName: "mlflow"},
    {skillName: "OpenCV", iconName: "opencv"},
    {skillName: "SQL", iconName: "sql"}
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
      date: "May 2024 - Present",
      desc: "Surat, India. Production LLM systems, agentic RAG, and MLOps.",
      descBullets: [
        "Designed and delivered agentic, graph, and hybrid RAG pipelines on a production knowledge graph. Retrieval relevance improved 25% on precision@k and recall@k.",
        "Built evaluation for response quality, retrieval accuracy, latency, and cost, then used those scores to choose models.",
        "Curated prompts, graph sources, and review practice for junior engineers working on retrieval.",
        "Productionized the components with Docker, CI/CD, scaling, and live monitoring."
      ]
    },
    {
      role: "AI/ML Engineer",
      company: "Kmphitech LLP",
      companylogo: require("./assets/images/kmphitech.svg").default,
      date: "Promoted from",
      desc: "Core ML products and the first production AI services.",
      descBullets: [
        "Built classification, extraction, and retrieval modules for the first generation of AI products.",
        "Shipped a real-time computer vision system for parking-lot vehicle detection, with alerting dashboards.",
        "Served models through FastAPI and Docker.",
        "Used zero-shot and few-shot prompts so a task did not need a new training run each time."
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
        "Built transformer models for body measurement and used diffusion models for visual realism."
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
  subtitle: "A production voice system, then an earlier vision study.",
  projects: [
    {
      image: require("./assets/images/contextflow.svg").default,
      projectName: "ContextFlow",
      projectDesc:
        "Open-source real-time voice AI. Hybrid graph-vector RAG with Neo4j, pgvector, and reciprocal rank fusion, CrewAI agents, and Mem0 memory. Evaluated with RAGAS and LangSmith.",
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
      projectDesc:
        "Compared VGG19 and AlexNet on the EMOTIC dataset for emotion detection. Early work in computer vision and affective computing.",
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
    "Open to applied AI roles and work on retrieval, agents, and evaluation.",
  number: "+91-98256-56802",
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
  signalSection,
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
