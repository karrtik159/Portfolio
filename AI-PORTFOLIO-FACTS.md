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

## Existing work and education

ReferU.AI, Dog Coloring Books and Emotion Detection are existing portfolio projects. They do not appear in the supplied résumé. Preserve their existing contribution scope and provenance; do not assign résumé employment or freelance metrics to them. [Sources: existing portfolio](H:/Trainning/Projects/Portfolio_Bugs/Portfolio/src/portfolio.js), [current project cards](H:/Trainning/Projects/Portfolio_Bugs/Portfolio/src/App.js).

The résumé lists a Bachelor of Computer Engineering (Artificial Intelligence), U.V. Patel College of Engineering, Ganpat University, June 2019–May 2023, CGPA 8.66/10; and DeepLearning.AI certifications in Neural Networks and Deep Learning and TensorFlow: Advanced Techniques. [Source: résumé, Education and Certifications](C:/Users/PC/Downloads/Baheti_Karrtik_AI_ML_Engineer.pdf).
