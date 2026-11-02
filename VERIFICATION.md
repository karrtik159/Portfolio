# Verification

- `npm run build`: passed (Vite 6.4.4).
- Local preview: HTTP 200 at `/Portfolio/`.
- Edge browser checks at 320, 768, 1024, and 1440px: document width equals viewport width; one h1; no broken loaded images.
- Desktop and mobile screenshots visually reviewed.
- Native project disclosure: keyboard focus and Enter expansion passed.
- Reduced motion: scroll behavior `auto`, transition duration `0s`.
- Forced project image error: readable fallback and retry control appear; retry loads successfully.
- Browser runtime exceptions during checks: none.

Project screenshots are real: ReferU.AI and Dog Coloring Books were captured from their public websites; Emotion Detection uses the original screenshot in this repository. Contributions retain the scope described in the existing portfolio. Current employment, availability, and résumé contents retain the supplied repository data and need owner review before public launch.

Run locally with `npm run dev`. The existing GitHub Pages base `/Portfolio/` is preserved. No production deployment was performed.

## AI builder revision � 29 October 2026

- Rebuilt after AI content updates: `npm run build` passed.
- Edge checks repeated at 320, 768, 1024, and 1440px: no horizontal overflow; all four project articles present; AI hero and senior role present; loaded images valid.
- Native ContextFlow disclosure opens with keyboard Enter. Reduced-motion computed values remain `auto` scrolling and `0s` transitions. No runtime exceptions captured.
- Visually reviewed desktop, mobile, and featured architecture screenshots.
- Career claims checked against the supplied r�sum�, ContextFlow implementation status checked against its GitHub README. Facts and source limits recorded in AI-PORTFOLIO-FACTS.md.
- Full supplied PDF was not copied into public assets; existing external r�sum� link retained.

## Project skill-tag layout correction

- Replaced implicit image-spanning grid rows with a separate project copy column. Skill labels no longer stretch to match the screenshot height.
- Added visible contribution and implementation summaries beside the tools for all existing project cards.
- Edge checks at 320, 768, 1024, and 1440px: no horizontal overflow; all three Dog Coloring Books tags remain 27px tall; keyboard disclosure opens; no runtime exceptions captured.
- Desktop and mobile project screenshots visually reviewed. Production build passed.

## AI skill-to-project evidence navigation

- Six visible capability groups and 13 project/role evidence links added ahead of selected work; hero and primary navigation link to the skills index.
- Project AI tool labels link back to the corresponding capability evidence.
- Edge checks at 320, 768, 1024, and 1440px: document width equals viewport width; all internal anchor targets exist; skill tags remain compact (32px desktop, 44px mobile).
- Keyboard Enter on the agents evidence link reaches ContextFlow; its CrewAI link returns to the agents evidence row. ContextFlow’s disclosure still opens with Enter.
- Reduced-motion mode used for deterministic navigation checks. No browser runtime exceptions captured. Desktop and mobile skill-index screenshots visually reviewed.
- Production build and `git diff --check` pass.
- Reference analysis and presentation decisions recorded in REFERENCE-ANALYSIS.md.

## Interactive AI skill selection

- Added shared local selection state for capability groups and all 28 individual tools.
- Tool-level evidence is explicit in `src/toolEvidence.js`: tools within the same group do not automatically inherit the same projects.
- Selecting a skill updates a live evidence panel, marks related project/experience articles, and inserts the exact implementation explanation into matching cards. All four projects remain visible.
- Hero capability links and project tool buttons use the same selection state. Clear selection restores the complete default view.
- Controls expose pressed state; the result count is announced through a polite live region. Mobile selection brings the result into view and focuses its heading; reduced-motion preferences are respected.
- Browser checks: all 28 tool mappings match their expected evidence and highlighted targets; keyboard selection passes; project tool selection passes; clearing passes; all internal anchors resolve; no runtime exceptions captured.
- Styled-page checks at 320, 768, 1024 and 1440px show no horizontal overflow. Selected result appears in view on mobile. Desktop/mobile screenshots visually inspected.
- Production build passes. Preview server restarted after detecting a stale empty stylesheet transform; checks repeated successfully with styles loaded.
