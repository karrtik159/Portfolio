# AI portfolio facts and source boundaries

Reviewed 29 October 2026. This note records source-backed content for the portfolio. Résumé outcomes are author-reported claims; this review did not independently reproduce the benchmarks.

## Primary sources

- [Supplied résumé, page 1](C:/Users/PC/Downloads/Baheti_Karrtik_AI_ML_Engineer.pdf).
- [ContextFlow repository and README](https://github.com/karrtik159/ContextFlow). Repository details below reflect the README inspected during this portfolio update.
- [Existing portfolio content](H:/Trainning/Projects/Portfolio_Bugs/Portfolio/src/portfolio.js) and [current project cards](H:/Trainning/Projects/Portfolio_Bugs/Portfolio/src/App.js).

## Identity and experience

Karrtik Baheti's résumé describes him as a Senior AI/ML Engineer with 3+ years of experience building LLM systems, Agentic / Graph / Hybrid RAG pipelines and MLOps infrastructure. It reports 6+ AI services serving 10K+ monthly queries across fintech and computer vision. The experience total and “Present” employment status are the résumé's statements, not a fresh employment verification. [Source: résumé, Summary and Experience](C:/Users/PC/Downloads/Baheti_Karrtik_AI_ML_Engineer.pdf).

| Role                                               | Dates              | Source-backed outcomes                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Senior AI/ML Engineer, Kmphitech LLP, Surat        | May 2025–Present   | RAG pipelines over 50K+ graph entities; 25% retrieval relevance improvement measured with precision@k and recall@k across 8 configurations; evaluation of 5+ models and 30% lower inference spend; 6 production AI microservices with 99.5% uptime and Langfuse monitoring; 20+ experiments tracked with MLflow and Weights & Biases; mentored 3 engineers, reducing ramp-up from 4 to 2 weeks. |
| AI/ML Engineer, Kmphitech LLP                      | May 2024–May 2025  | Parking vehicle detection across 8 camera streams at 25+ FPS and 92% mAP; prompting across 4 NLP tasks reduced retraining cycles by 50% without reported accuracy loss.                                                                                                                                                                                                                         |
| AI Engineer Intern, Aukture Technologies Pvt. Ltd. | January–March 2024 | Virtual try-on preprocessing time reduced by 25%; transformer-based body-measurement prediction with ±2 cm mean error; diffusion model integration for visual realism.                                                                                                                                                                                                                          |
| Freelance AI/ML Engineer                           | May–December 2023  | Résumé reports 5.0 client rating and 100% completion; Detectron2 / Faster R-CNN on COWC reached 85% mAP@0.5 after annotation of 2K+ tiles; DBSCAN segmentation of LiDAR scenes with 1M+ points; pruning reduced model size by 40% and inference time by 30% with under 1% mAP loss.                                                                                                             |

All role dates and outcomes in this table come from [résumé page 1, Experience](C:/Users/PC/Downloads/Baheti_Karrtik_AI_ML_Engineer.pdf). Keep the evaluation contexts distinct: the résumé does not specify the IoU threshold for the parking system's 92% mAP, whereas the freelance COWC result explicitly uses mAP@0.5.

## ContextFlow

The résumé dates ContextFlow to 2025 and describes an open-source real-time voice agent combining Neo4j and pgvector hybrid retrieval, Reciprocal Rank Fusion, CrewAI orchestration, Mem0 memory, FastAPI, LiveKit and RAGAS. Its duplicated project bullet describes a single project and should appear once. [Source: résumé, Projects](C:/Users/PC/Downloads/Baheti_Karrtik_AI_ML_Engineer.pdf).

The README describes a separate LiveKit voice-worker process calling `POST /api/v1/rag/query` over HTTP, isolating conflicting OpenTelemetry dependencies. It also documents Redis and Pydantic V2. Its RAGAS support is an answer-level evaluation scaffold; retrieval metrics are planned. Describe this as evaluation scaffolding, without implying a complete benchmark suite or established retrieval performance. [Source: ContextFlow README](https://github.com/karrtik159/ContextFlow#readme).

The résumé's employment metrics are not attributed to ContextFlow. Do not transfer the 25% retrieval improvement, 30% cost reduction, 50K+ graph entities or production uptime to this project. No verified ContextFlow demo screenshot was supplied by the README review; any architecture graphic must be labeled as an illustration. [Sources: résumé Experience and Projects](C:/Users/PC/Downloads/Baheti_Karrtik_AI_ML_Engineer.pdf), [ContextFlow README](https://github.com/karrtik159/ContextFlow#readme).

## Additions, 11 November 2026

- **Deployment platform (owner-stated, 11 Nov 2026):** GCP and KVM 4 / KVM 8 virtual servers, Terraform, Dockerised FastAPI and PostgreSQL, Cloudflare DNS, Elastic Email, Stripe, and a CI/CD pipeline that tests, deploys and restarts services. Placed under the Kmphitech Senior role; the owner has not yet confirmed the employer, the GCP services or the CI tool.
- **Product ownership and first-generation modules:** from the Dec 2025 résumé (`E:/College/Resumes/Karrtik_Baheti_AI_ML.pdf`): led proprietary LLM products from research to production; built core classification, extraction and retrieval modules.
- **Research internship, Ganpat University, Jan–May 2023:** from `E:/College/Resumes/Karrtik_DA_ML.pdf`: 15% emotion-recognition accuracy gain, EMOTIC extended to 26 classes; AlexNet/VGG19 on 25K+ images from the Dec 2025 résumé.
- **ContextFlow hardening and retrieval metrics:** checked in source on branch `fix/rag-tenant-scoping` (`agents/crews/support_crew.py`, `app/core/rate_limit.py`, `app/evals/retrieval_metrics.py`). **Not on `main` as of 11 Nov 2026**; merge before publishing these claims. No benchmark results exist yet.
- **Certificates (verified from the certificate images in `E:/College/Certificates`, 11 Nov 2026):**
  - TensorFlow: Advanced Techniques Specialization, all 4 courses, DeepLearning.AI via Coursera, 31 Aug 2025: [verify](https://coursera.org/verify/specialization/8679J70FQKWW).
  - Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization, 16 Jul 2024: [verify](https://coursera.org/verify/5CDNFC3LYJP2).
  - Neural Networks and Deep Learning, 4 Jan 2024: [verify](https://coursera.org/verify/CBQCAVPMU9ZN).
  - These are courses 1–2 of the 5-course Deep Learning Specialization; do not describe the full specialization as complete.
  - Google: Foundations: Data, Data, Everywhere (Jan 2022, ID TBA6JM9XW32P) is left off the AI-focused CV and portfolio as an entry-level data-analytics course.

- **College achievements (owner-stated, 11 Nov 2026):** ranked 2nd in batch; SSIP hackathon (recorded as "Gujarat SSIP Hackathon Finalists, Azadi ka Amrit Mahotsav Hackathon-2022" in `src/portfolio.js`; Pension Classification, Oct 2022, per `E:/College/Resumes/Karrtik_DA_ML.pdf`); Command and Control Centre, Gandhinagar, Dropout/Migration Power BI dashboard (Aug 2022, same résumé). No certificate for the rank or the hackathon was found in `E:/College/Certificates`. The DA résumé's percentage claims for these projects (40%, 30%, 25%, 15%) have no stated baseline and are not used.

## Existing work and education

ReferU.AI, Dog Coloring Books and Emotion Detection are existing portfolio projects. They do not appear in the supplied résumé. Preserve their existing contribution scope and provenance; do not assign résumé employment or freelance metrics to them. [Sources: existing portfolio](H:/Trainning/Projects/Portfolio_Bugs/Portfolio/src/portfolio.js), [current project cards](H:/Trainning/Projects/Portfolio_Bugs/Portfolio/src/App.js).

The résumé lists a Bachelor of Computer Engineering (Artificial Intelligence), U.V. Patel College of Engineering, Ganpat University, June 2019–May 2023, CGPA 8.66/10; and DeepLearning.AI certifications in Neural Networks and Deep Learning and TensorFlow: Advanced Techniques. [Source: résumé, Education and Certifications](C:/Users/PC/Downloads/Baheti_Karrtik_AI_ML_Engineer.pdf).
