/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import stackSvg from "./assets/images/ai-stack-layers.svg";
import workflowSvg from "./assets/images/ai-workflow-loop.svg";
import pipelineSvg from "./assets/images/ai-pipeline-flow.svg";
import logo2020 from "./assets/images/logo_2020.webp";
import kmphitechLogo from "./assets/images/kmphitech.svg";
import auktureLogo from "./assets/images/aukture.webp";
import freelancerLogo from "./assets/images/freelancer.svg";
import contextflowImg from "./assets/images/contextflow.svg";
import faceDetectionImg from "./assets/images/face-detection.webp";
import courseraNnImg from "./assets/images/coursera-nn.webp";
import certificate1Img from "./assets/images/certificate-1.webp";
import ssipHackathonImg from "./assets/images/ssip-hackathon.svg";

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
    "AI/ML engineer shipping production RAG, agents, and the eval that keeps them grounded.",
  resumeLink:
    "https://drive.google.com/file/d/19VQ-2pt2qmtOSjJUUATaFny9GVZRp-V_/view?usp=sharing",
  stackLayers: [
    "Applications",
    "AI Systems",
    "Data and Knowledge",
    "Infrastructure"
  ],
  // Flat stack diagram
  stackSvg: stackSvg,
  snapshot: [
    {label: "Current", value: "AI/ML Engineer, Kmphitech LLP"},
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
    // "workflow" | "pipeline" - Practice maps these to SVG ReactComponents
    diagram: "workflow",
    caption:
      "Collect grounded sources, understand them, reason with RAG and agents, deliver into product, then improve from eval.",
    steps: [
      {
        name: "Collect",
        text: "Start with the records the product is allowed to search: graph nodes, documents, and the fields that belong in the set."
      },
      {
        name: "Understand",
        text: "Choose the model, the sources, and the prompt pattern. What the system is allowed to know is a design choice."
      },
      {
        name: "Reason",
        text: "Hybrid graph-vector retrieval, agent crews, and memory. Fusion configs do more than another prompt pass."
      },
      {
        name: "Deliver",
        text: "The loop has to land in a service. FastAPI, Docker, CI, and monitoring come before the demo does."
      },
      {
        name: "Improve",
        text: "Quality, latency, and cost decide the next config. The loop returns to the sources, not to a launch checkbox."
      }
    ],
    workflowSvg: workflowSvg,
    pipelineSvg: pipelineSvg
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
      logo: logo2020,
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
      role: "AI/ML Engineer",
      company: "Kmphitech LLP",
      companylogo: kmphitechLogo,
      date: "May 2024 - Present",
      location: "Surat, India",

      desc:
        "Building and deploying production AI systems, computer vision models, and scalable backend services.",

      descBullets: [
        "Architected and deployed retrieval and conversational AI systems powering multiple client-facing applications.",
        "Built real-time vehicle detection and computer vision pipelines with low-latency streaming inference.",
        "Designed asynchronous task workflows using FastAPI, Redis, and Celery for background processing jobs.",
        "Containerized production microservices with Docker, automated CI/CD pipelines, and health monitoring."
      ],

      skills: [
        "Python",
        "FastAPI",
        "PyTorch",
        "OpenCV",
        "LangChain",
        "Docker",
        "PostgreSQL",
        "Redis",
        "Celery",
        "CI/CD"
      ],

      products: [
        {
          name: "ReferU.AI",
          domain: "referu.ai",
          url: "https://www.referu.ai/",
          text:
            "Legal discovery platform designed to connect people with attorneys whose experience aligns with their legal matters.",
          skills: [
            "Python",
            "FastAPI",
            "LangChain",
            "PostgreSQL",
            "REST APIs",
            "Docker"
          ]
        },
        {
          name: "Runsheet.AI",
          domain: "",
          url: "",
          text:
            "Document intelligence workspace combining conversational retrieval and chart-based summaries of uploaded files.",
          skills: [
            "Python",
            "FastAPI",
            "LangChain",
            "Document AI",
            "Data Visualization",
            "Docker"
          ]
        },
        {
          name: "VolleyConnect",
          domain: "seay-group.com/our-apps",
          url: "https://seay-group.com/our-apps",
          text:
            "Sports platform with web administration and mobile apps for volleyball clubs, tryouts, camps, and clinics.",
          skills: [
            "Python",
            "FastAPI",
            "React",
            "REST APIs",
            "PostgreSQL",
            "Docker"
          ]
        },
        {
          name: "TASK!",
          domain: "taskapp.pro",
          url: "https://www.taskapp.pro/",
          text:
            "On-demand local task marketplace connecting users with local workers, featuring Stripe payment processing and background job queues.",
          skills: [
            "Python",
            "FastAPI",
            "Stripe",
            "PostgreSQL",
            "Redis",
            "Celery",
            "Docker"
          ]
        },
        {
          name: "Dog Coloring Books",
          domain: "dogcoloringbooks.com",
          url: "https://dogcoloringbooks.com/",
          text:
            "E-commerce generative AI service that transforms dog photos into printable coloring book pages with print-on-demand fulfillment.",
          skills: [
            "Python",
            "Gemini API",
            "Image Processing",
            "Stripe",
            "Lulu API",
            "Automation"
          ]
        },
        {
          name: "UBUN.ONE",
          domain: "ubun.one",
          url: "https://ubun.one/",
          text:
            "Privacy-focused conversational AI workspace supporting ephemeral and persistent conversation sessions.",
          skills: [
            "Python",
            "FastAPI",
            "LLMs",
            "Session Management",
            "REST APIs"
          ]
        },
        {
          name: "ParkPal",
          domain: "",
          url: "",
          text:
            "Real-time parking occupancy detection system combining a quantized object-detection model, RTSP camera streams, and a live dashboard.",
          skills: [
            "Python",
            "OpenCV",
            "YOLO",
            "Computer Vision",
            "Model Quantization",
            "RTSP",
            "Docker"
          ]
        },
        {
          name: "Autism Victory",
          domain: "",
          url: "",
          text:
            "Intelligent educational scheme discovery tool helping families and educators identify relevant programs and resources.",
          skills: [
            "Python",
            "FastAPI",
            "Semantic Search",
            "Document Processing",
            "Recommendation Systems"
          ]
        }
      ]
    },

    {
      role: "AI Engineer Intern",
      company: "Aukture Technologies Pvt. Ltd",
      companylogo: auktureLogo,
      date: "Jan 2024 - Mar 2024",
      location: "Remote",

      desc:
        "Worked on AI-driven virtual try-on and body-measurement workflows, combining computer vision, transformer-based methods, and generative modeling.",

      highlights: [
        "Reduced virtual try-on preprocessing time by 25%.",
        "Worked with transformer-based approaches for body measurement.",
        "Explored diffusion models to improve visual realism in generated results."
      ],

      descBullets: [
        "Optimized preprocessing workflows to reduce turnaround time for virtual try-on tasks.",
        "Contributed to transformer-based body-measurement approaches and image-related modeling workflows.",
        "Explored diffusion-based techniques for improving visual output quality."
      ],

      skills: [
        "Python",
        "Computer Vision",
        "Transformers",
        "Diffusion Models",
        "Image Processing",
        "Model Optimization"
      ]
    },

    {
      role: "Freelance AI/ML Engineer",
      company: "Freelancer.com",
      companylogo: freelancerLogo,
      date: "Jan 2023 - Dec 2023",
      location: "Remote · International Clients",

      desc:
        "Delivered client-focused AI/ML solutions, from understanding requirements and preparing data to model development, API integration, and project delivery.",

      highlights: [
        "Worked across multiple AI/ML problem types and client requirements.",
        "Built custom models, data pipelines, and application-level AI features.",
        "Managed technical discussions, solution scoping, implementation, and feedback-driven iteration."
      ],

      descBullets: [
        "Translated client requirements into practical ML solutions and implementation plans.",
        "Developed data preparation workflows, trained models, and integrated AI functionality into applications.",
        "Worked on end-to-end delivery, troubleshooting, and iterative improvements based on client feedback.",
        "Built an early foundation in independent problem-solving, technical communication, and delivery ownership."
      ],

      skills: [
        "Python",
        "Machine Learning",
        "Data Processing",
        "Model Development",
        "API Integration",
        "Client Communication",
        "Solution Design"
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
  subtitle: "Featured projects and open-source systems.",
  projects: [
    {
      image: contextflowImg,
      projectName: "ContextFlow",
      projectDesc:
        "Open-source real-time voice AI assistant with graph-vector retrieval, multi-agent coordination, and persistent conversation memory.",
      tech: [
        "Python",
        "FastAPI",
        "LiveKit",
        "CrewAI",
        "Neo4j",
        "pgvector",
        "LangSmith",
        "Docker"
      ],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/karrtik159"
        }
      ]
    },
    {
      image: faceDetectionImg,
      projectName: "Emotion Detection",
      projectDesc:
        "Computer vision application comparing deep CNN architectures (VGG19 and AlexNet) for facial emotion recognition on the EMOTIC dataset, deployed with an interactive web interface.",
      tech: [
        "Python",
        "PyTorch",
        "OpenCV",
        "VGG19",
        "AlexNet",
        "Flask",
        "NumPy"
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
      image: courseraNnImg,
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
      image: certificate1Img,
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
      image: ssipHackathonImg,
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
