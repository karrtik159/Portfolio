# Portfolio design contract

Purpose: let a recruiter scan selected work, understand the implementation contribution, and reach the AI builder. Primary action: inspect a project; secondary: email or open the résumé.

Direction: editorial index, warm paper, black ink, vermilion accent. Wide left-aligned type, fine rules, numbered sections, large real website captures. Inspiration catalogue: https://www.hoverstat.es/ and https://www.awwwards.com/websites/portfolio/. Reference patterns: typographic hierarchy, image-led work indexes, compact navigation. No copied branding, hidden-on-scroll content, gradients, decorative dashboards, or invented metrics.

Content: preserve Karrtik Baheti’s identity, actual AI/ML experience and project contributions from src/portfolio.js. Frontend capabilities refer to this React implementation; do not claim ownership of client website design. Screenshots show public product interfaces; contribution notes identify the actual work.

Tokens before implementation:

- Color: paper #f5f3ee, surface #ebe8e1, ink #242620, muted #686961, line #d6d5cc, accent #b94027, accent hover #96311d, white #ffffff.
- Typography: Outfit display, IBM Plex Sans body, IBM Plex Mono metadata; self-hosted installed font files. Display fluid 48–100px; section 36–56px; card 28–36px; body 16–20px; metadata 11–12px.
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Maximum content width 1280px.
- Radius: 0 for layout and images, 4px controls, pill for status and tags.
- Motion: 160ms color/transform feedback only; no entrance animations. Reduced motion disables transitions and smooth scrolling.

Desktop: compact masthead, asymmetric two-column hero, oversized two-line headline, work index with a featured ContextFlow architecture overview and a compact independent Emotion Detection entry, two-column capabilities and experience. Mobile below 768px: visible wrapping navigation, single-column hero and projects, stacked section labels, full-width previews, 48px minimum controls. Check 320, 768, 1024, 1440px.

States: hover changes text/underline and arrow position; keyboard focus uses a high-contrast 2px outline with offset. Native details/summary exposes implementation notes with expanded semantics. Image slots reserve aspect ratio, show loading text until loaded, and expose retry plus external site fallback on error. Email copy has success/error live feedback. Email and résumé links always work independently of copying. No fake contact submission or gated content.

Verification: production build, real screenshot inspection, responsive overflow and link checks, keyboard interaction and reduced-motion checks where browser tools are available.

## Interactive selection update

The skill evidence index now supports choosing a capability or individual tool. A shared React context synchronizes the result panel, project tool controls, and related work outlines. Each selected tool has an explicit implementation mapping rather than inheriting every example in its broader category. Selection is reversible with Clear selection; all projects remain visible. On small screens, choosing a skill reveals and focuses the result heading. Desktop retains a sticky result panel beside the controls. Selected controls use `aria-pressed`, results use a polite live status, and highlights include written implementation evidence as well as the accent outline.

## Client work placement

ContextFlow remains the featured independent build. Emotion Detection uses a compact two-column text entry, stacked below 768px. Client products appear once in the Production Apps selector under Kmphitech, reached through a text link from Selected Work. Preserve paper, ink, vermilion, fine rules, and existing typography. Desktop gives the experience content more width; narrow screens stack the app detail below a two-column tab list. Required states: selected tab, keyboard focus, skill match, direct app hash, and external link when a URL exists. Keep all eight app names visible. Reject repeated client screenshot cards and duplicate client case studies.
