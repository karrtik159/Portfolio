# Reference analysis and skill-to-project design

Reviewed 29 October 2026.

## Reference

[Lakshay Baheti’s portfolio](https://www.lakshaybaheti.com/) was inspected directly in Edge, including its landing and Hiring views. The web retrieval tool could not access it; direct HTTPS retrieval and browser inspection succeeded.

Observed structure:

- The landing view names the developer and role, gives a short professional introduction, and displays a compact stack immediately below it.
- Four visitor paths are visible: Hiring, Developer, Collaborate, and Explore.
- Selecting Hiring opens a recruiter-facing view with Stack, Career, Reach out, Projects, Architecture, Impact, How I work, and About me navigation. The inspected initial Hiring screen leads with the career timeline and contact links.
- Dark surfaces, a blue accent, sans-serif headings, small stack labels, and rounded visitor controls create a different visual language from this portfolio’s editorial paper-and-vermilion direction.

The useful patterns are immediate stack visibility, clear navigation for recruiter questions, and distinct architecture/impact evidence. The reference’s branding, content, and adaptive interface were not copied. Its skill and project views are separate; our requested improvement is explicit linkage between them.

## Implemented contract

- Keep the existing editorial tokens and AI builder positioning.
- Add AI skills to the primary navigation and six capability links directly in the hero.
- Place a visible skill-to-work index before selected projects. Each of six rows pairs named tools with project or role links and a concrete implementation statement.
- Link AI tool labels on project cards back to the appropriate evidence row. Native anchors work with mouse, keyboard, and direct URLs; essential evidence is never hidden behind animation or visitor-mode selection.
- Keep actual project screenshots, architecture details, contact states, and project disclosures.
- Keep employer-reported outcomes attached to the relevant role; do not attribute them to ContextFlow or client projects. Describe ContextFlow RAGAS as scaffolding and planned retrieval metrics accurately.
- Desktop uses paired capability/evidence columns. Mobile stacks capability above proof. Tool links have 44px touch targets on mobile. Reduced-motion behavior is preserved.

## Source boundaries

The reference informs presentation only. Skill and career claims come from [the existing facts review](AI-PORTFOLIO-FACTS.md), the supplied résumé, ContextFlow’s public README, and existing project descriptions. Skills with no named project evidence are not assigned to an invented project.

Implementation data lives in `src/skillEvidence.js`; the same mapping powers the evidence index and project tool links.
