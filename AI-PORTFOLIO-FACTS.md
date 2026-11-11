# AI portfolio facts and source boundaries

Last reviewed 11 November 2026. Source-backed content for the portfolio and CV. Résumé outcomes are author-reported; they have not been independently reproduced.

**Upkeep rule:** this file holds current facts and open items only. When an open item is resolved, update the fact and delete the item. Do not keep history here; git has it.

## Sources

- Latest résumé: `C:/Users/Karrtik/Downloads/Baheti_Karrtik_AI_ML_Engineer.pdf` (31 Oct 2026). CV source v2: `Karrtik_Baheti_Resume.tex` (git-ignored).
- Older résumés: `E:/College/Resumes/Karrtik_Baheti_AI_ML.pdf` (Dec 2025), `E:/College/Resumes/Karrtik_DA_ML.pdf` (Apr 2024).
- Certificates: `E:/College/Certificates`.
- ContextFlow: [repository](https://github.com/karrtik159/ContextFlow) and local clone `D:/Projects/Personal/OpenAI_Clone_exp/ContextFlow`.
- Owner statements in conversation, marked "owner-stated".

## Experience

| Role                                               | Dates             | Facts                                                                                                                                                                                                                                                                                                                                         | Source                       |
| -------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Senior AI/ML Engineer, Kmphitech LLP, Surat        | May 2025–Present  | Led proprietary LLM products from research to production; Agentic/Graph/Hybrid RAG over 50K+ graph entities, +25% relevance (precision@k, recall@k) across 8 configurations; 5+ models evaluated, −30% inference spend; 6 AI microservices, 99.5% uptime, Langfuse; 20+ experiments in MLflow / W&B; mentored 3 engineers, ramp-up 4→2 weeks. | Résumés (Oct 2026, Dec 2025) |
| (same role) GetSetBook deployment                  | —                 | Kmphitech project GetSetBook: GCP and KVM 4 / KVM 8 virtual servers, Terraform, Dockerised FastAPI and PostgreSQL, Cloudflare DNS, Elastic Email, Stripe, CI/CD that tests, deploys and restarts services.                                                                                                                                    | Owner-stated, 11 Nov 2026    |
| AI/ML Engineer, Kmphitech LLP                      | May 2024–May 2025 | Core classification, extraction and retrieval modules for first-generation AI products; parking vehicle detection, 8 streams, 25+ FPS, 92% mAP (IoU threshold unstated); prompting on 4 NLP tasks, −50% retraining cycles.                                                                                                                    | Résumés (Oct 2026, Dec 2025) |
| AI Engineer Intern, Aukture Technologies Pvt. Ltd. | Jan–Mar 2024      | −25% preprocessing time; transformer body-measurement and posture models, ±2 cm mean error; diffusion models for realism.                                                                                                                                                                                                                     | Résumés                      |
| Freelance AI/ML Engineer                           | May–Dec 2023      | 5.0 rating, 100% completion; Detectron2 Faster R-CNN on COWC, 85% mAP@0.5, 2K+ tiles; DBSCAN on 1M+ point LiDAR scenes; pruning −40% size, −30% inference, <1% mAP loss.                                                                                                                                                                      | Résumé (Oct 2026)            |
| Research Intern, Ganpat University                 | Jan–May 2023      | EMOTIC extended to 26 classes, +15% accuracy; AlexNet/VGG19 transfer learning on 25K+ images.                                                                                                                                                                                                                                                 | Résumés (Apr 2024, Dec 2025) |

## ContextFlow

- Open-source voice agent: Neo4j + pgvector hybrid retrieval with Reciprocal Rank Fusion, CrewAI, Mem0, FastAPI, LiveKit worker calling `POST /api/v1/rag/query` over HTTP (isolates OpenTelemetry dependencies), Redis, Pydantic V2, Docker Compose.
- Evaluation: RAGAS answer-level scaffold; retrieval metrics (recall@k, precision@k, MRR, nDCG) over a golden set with unanswerable queries (`app/evals/`). No benchmark results exist yet.
- Security: tool-less synthesizer agent closes a stored prompt-injection → exfiltration path (`agents/crews/support_crew.py`); per-tenant rate limiting (`app/core/rate_limit.py`); token revocation after password change; GitHub Actions CI.

## Education and certificates

- B.E. Computer Engineering (Artificial Intelligence), U.V. Patel College of Engineering, Ganpat University, Jun 2019–May 2023, CGPA 8.66/10. Ranked 2nd in the AI department (owner-stated).
- Finalist, Gujarat SSIP Azadi ka Amrit Mahotsav Hackathon 2022 (owner-stated; no certificate on file), Pension Classification (ML + React/Django reports).
- Command and Control Centre, Gandhinagar, 2022: Power BI + ML dashboard on student dropout and migration.
- TensorFlow: Advanced Techniques Specialization, 4 courses, 31 Aug 2025: [verify](https://coursera.org/verify/specialization/8679J70FQKWW).
- Improving Deep Neural Networks, 16 Jul 2024: [verify](https://coursera.org/verify/5CDNFC3LYJP2).
- Neural Networks and Deep Learning, 4 Jan 2024: [verify](https://coursera.org/verify/CBQCAVPMU9ZN).

## Guardrails

- Do not transfer Kmphitech metrics (25%, 30%, 50K+, 99.5%) to ContextFlow or to ReferU.AI, Dog Coloring Books or Emotion Detection.
- The two Deep Learning certificates are courses 1–2 of 5; never call the specialization complete.
- Do not use the Apr 2024 résumé's college-project percentages (40%, 30%, 25%, 15%); they have no baseline.
- Any ContextFlow architecture graphic is an illustration, not a screenshot.

## Open items

Delete each line once resolved.

- ContextFlow security and metrics work is on `fix/rag-tenant-scoping`, not `main`, and 11 commits are unpushed. Merge before deploying the portfolio.
- GetSetBook deployment: which GCP services, which CI/CD tool, and whether restarts are health-checked.
- Wood/bark LiDAR: one résumé dates it Aug 2022 as a project, another lists it under freelance work.
- Production metrics still missing: p95 latency, requests/day, deploy time.
