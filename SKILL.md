---
name: doakim-design
description: Use this skill to generate well-branded interfaces and assets for DOA KIM — a premium, editorial personal marketing portfolio (teal #00BBA9 on near-black #0F0F14, Pretendard, bilingual KO/EN) — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and a full portfolio implementation to build from.
user-invocable: true
---

Read the `README.md` file within this skill first, then explore the other available files.

**Foundations**
- `colors_and_type.css` — all design tokens (color ramps, teal accent + variants, type scale, spacing, radius, shadow, motion) plus semantic helper classes. Import this, or copy the `:root` variables.
- `fonts/PretendardVariable.woff2` — the brand webfont (KO + Latin, weights 100–900). Copy it out and `@font-face` it with `font-weight: 100 900;`.
- `assets/` — `logo-wordmark.svg`, `logo-monogram.svg`.

**Reference implementation**
- `index.html` + `portfolio.js` + `portfolio-data.js` — the production single-page portfolio (hero, about, skills, selected works, archive, brands, contact) with KO/EN toggle, dark/light themes, scroll reveals, parallax, 3D-tilt skill cards, and a project modal.
- `admin.html` — a no-backend, password-protected content manager that drives the portfolio via `localStorage`.
- `ui_kits/portfolio/` — modular JSX recreation of the same site for component-level reuse.
- `preview/` — small specimen cards (color, type, spacing, components) shown in the Design System tab.

**How to use**
If creating visual artifacts (slides, mocks, throwaway prototypes), copy the assets and tokens out and produce static HTML files for the user to view. If working on production code, copy the assets and follow the rules in `README.md` (CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAPHY) to become an expert in the brand.

Hard rules: teal `#00BBA9` is the only color; near-black canvas; soft-white text (never pure `#fff` in the system, though the portfolio brief uses `#FFFFFF` for headings); **no gradients** except achromatic protection scrims over imagery; **no emoji**; sentence-case headlines; uppercase wide-tracked eyebrows; Pretendard everywhere for KO+EN; motion is cinematic, never bouncy, and respects `prefers-reduced-motion`.

If the user invokes this skill without other guidance, ask what they want to build, ask a few focused questions, then act as an expert designer who outputs HTML artifacts **or** production code depending on the need.
