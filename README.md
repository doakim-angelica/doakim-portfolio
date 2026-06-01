# DOA KIM — Design System

A design system for **DOA KIM**, a personal marketing portfolio. The aesthetic is **premium, editorial, agency-grade**: a near-black canvas, a single confident teal accent, large editorial typography, and generous negative space. Bilingual (Korean / English) throughout.

> This is a greenfield brand. There was no existing codebase or Figma file to recreate — the system was authored from the creative brief by a senior designer. Where a real product later exists, this README + tokens should be the source of truth.

---

## Brand at a glance

| | |
|---|---|
| **Name** | DOA KIM (도아 킴) |
| **What it is** | Personal marketing / creative portfolio, single-page site |
| **Voice** | Confident, restrained, editorial. A practitioner, not a brochure. |
| **Accent** | Teal `#00BBA9` — the only chromatic color in the system |
| **Canvas** | Near-black `#0F0F14`, soft-white text |
| **Type** | Pretendard Variable (KO + Latin, weights 100–900) |
| **Layout** | Responsive single page, sticky nav, mobile → PC |
| **Languages** | Korean / English toggle (persistent) |

---

## Sources provided

- `uploads/PretendardVariable.woff2` — the variable webfont (copied to `fonts/`).
- `uploads/pretendard.css`, `uploads/pretendard-subset.css` — upstream @font-face declarations that reference per-weight files (`./woff2/Pretendard-*.woff2`) which were **not** uploaded. We instead use the single **variable** file at `fonts/PretendardVariable.woff2` with `font-weight: 100 900`, which covers every weight in one request. Pretendard is OFL-licensed (Kil Hyung-jin / orioncactus).

No codebase, screenshots, Figma, or slide decks were provided.

---

## CONTENT FUNDAMENTALS

How DOA KIM writes. The portfolio is bilingual; copy must hold up in both Korean and English.

**Voice & person.** First person, but sparing — "I design brands that earn attention," not "DOA helps clients leverage synergies." Lets the work speak. Addresses the reader directly as *you* only in CTAs ("Let's talk", "See the work"). Avoids agency buzzwords (leverage, synergy, ecosystem, disrupt).

**Tone.** Calm confidence. Editorial, like a design monograph or a well-art-directed magazine. Statements, not slogans. Comfortable with a single strong sentence on a screen surrounded by space.

**Casing.**
- Eyebrows / labels / nav: **UPPERCASE** with wide tracking (`--ls-eyebrow`, 0.22em). E.g. `SELECTED WORK`, `ABOUT`, `오늘의 작업`.
- Headlines & display: **Sentence case**, never Title Case. "Brand systems that travel." not "Brand Systems That Travel."
- Body: sentence case, normal punctuation.

**Bilingual rules.**
- Korean is set in the same Pretendard family — no font switch needed.
- When both languages appear together (e.g. a name block), English is the quiet, smaller layer and Korean is primary, or vice-versa depending on audience. Keep one visually dominant.
- The toggle is **KO / EN** (uppercase, slash-separated), persisted to `localStorage`. Default to the visitor's expectation — here, EN-first with KO one tap away.
- Don't machine-translate tone. Korean copy is allowed to be terser; English a touch more lyrical.

**Numbers & meta.** Years, indices, and stats use tabular/mono figures (`.ds-num`). Project index numbers like `01 — 06`. Years as `2019 → 2026`. An em-dash or arrow (`—`, `→`) is the connective tissue, not commas.

**Emoji.** Never. Not in nav, not in body, not in CTAs. The teal accent and typography carry all emphasis.

**Punctuation flourishes.** Em-dash (`—`) for editorial asides. Arrow (`→`) for forward motion / links. Middle dot (`·`) to separate inline meta (`Seoul · 2026`). No exclamation points.

**Examples**
- Eyebrow: `SELECTED WORK · 선택된 작업`
- Hero: `Brand systems that travel. / 멀리 가는 브랜드를 만듭니다.`
- CTA: `Start a project →`
- Meta line: `Identity · Art direction · Seoul, 2026`
- Stat: `06 selected projects` / `12 yrs practice`

---

## VISUAL FOUNDATIONS

**Overall feel.** A dark gallery wall. The work and the type are lit; everything else recedes. Restraint is the brand — one accent, lots of black, confident scale jumps.

**Color.**
- Canvas is `--bg-0` `#0F0F14`, a near-black with the faintest cool cast. Surfaces step up through `--bg-1…4` rather than using arbitrary grays.
- **Teal `#00BBA9` is the only color.** Used for eyebrows, links, key UI, focus rings, and the occasional single hero accent — never as a fill behind large areas, never as a gradient.
- Text is **soft white `#F4F4F6`**, never pure `#fff`; secondary `#ABABB6`; tertiary/meta `#71717F`.
- **No gradients anywhere.** Depth comes from value steps, hairlines, and shadow — not color blends. The one permitted exception is *protection scrims* over imagery (transparent-black, achromatic).
- Status colors exist (`--positive/--warning/--danger`) but are rare; this is a portfolio, not a dashboard.

**Typography.** Pretendard Variable across the whole system. Editorial scale: huge bold display (`--t-display`, up to 7.5rem) set tight (`-0.03em`), against light/regular body at relaxed line height (1.7). Eyebrows are tiny, uppercase, wide-tracked teal. The big contrast between display and body *is* the visual style — avoid mid-size noise.

**Spacing & rhythm.** 8pt base (with 4pt half-steps). Sections breathe: vertical rhythm reaches `--sp-11` (192px) on PC, compressing on mobile. Generous gutters (`--gutter`, clamps 20→64px). White space is a design element, not leftover.

**Backgrounds.** Flat near-black. No textures, no patterns, no noise, no gradients. Imagery (project thumbnails, portraits) provides the only "texture." Full-bleed image sections are used for hero project showcases; otherwise content sits in a centered `--container` (1240px) column.

**Imagery treatment.** Cool / neutral, high-contrast, editorial. Images may be lightly desaturated to sit in the dark palette; a subtle teal-tinted hover or a black protection scrim is acceptable. Avoid warm Instagram filters. Treat photos as gallery prints — framed by space, occasionally hairline-bordered.

**Cards.** Surface `--bg-2`, a `--line-2` hairline border, `--r-lg` (16px) radius, `--sh-2` shadow. On hover the border brightens to `--line-3` and the card lifts (`--sh-3`) with a faint upward translate. No colored left-border accents, no heavy fills.

**Corner radii.** Restrained and editorial. Cards/media `--r-lg` (16px); buttons/fields `--r-sm`–`--r-md` (8–12px); chips, avatars, and toggles are full pills (`--r-pill`). Display imagery can go square-cornered for a more gallery feel.

**Borders & dividers.** Hairlines are white at low alpha (`--line-1/2/3`) so they read on any surface. Section dividers are often a single 1px line spanning the container — quiet, structural.

**Shadows / elevation.** On dark, elevation is communicated by *deeper* shadow plus a hairline top edge, not lighter fills. Four-step shadow scale (`--sh-1…4`). Used sparingly — most of the page is flat, with elevation reserved for cards, menus, and the sticky nav on scroll.

**Transparency & blur.** The sticky nav uses a translucent `--bg-0` with `backdrop-filter: blur()` once the page scrolls. Menus and overlays use blur + a `--line-2` border. Blur is functional (layering UI over content), never decorative.

**Focus & accessibility.** Teal focus ring `--ring` (3px `--accent-glow`) on keyboard focus. Hit targets ≥ 44px. Text contrast holds against `--bg-0`.

**Motion.** Subtle and purposeful. Standard easing is `--ease-out` (cubic-bezier(0.22,1,0.36,1)) — quick out, soft settle. Durations 140 / 240 / 480ms. Entrances are short fades + small upward transl(8–16px), often staggered for lists. **No bounces, no springy overshoot, no parallax gimmicks.** Reduced-motion is respected.

**Hover states.** Links: teal text or an underline that wipes in. Buttons: see component states below. Cards: border brightens + lift. Images: subtle scale (1.03) under `overflow:hidden`, or a scrim fade.

**Press states.** Buttons darken to `--accent-press` (filled) / surface deepens (ghost) and nudge down ~1px. No scale-shrink on the whole element beyond this micro-nudge.

**Layout rules.** Sticky top nav (fixed). Centered `--container` column with fluid gutters. Full-bleed sections break out for hero imagery. Single-column on mobile; multi-column grids (2–3up) for work on PC. The language toggle and a single primary CTA live persistently in the nav.

---

## Index — what's in this system

**Foundations**
- `colors_and_type.css` — all design tokens (color, type scale, spacing, radius, shadow, motion, layout) + semantic helper classes (`.ds-display`, `.ds-h1`, `.ds-eyebrow`, `.ds-body`, …).
- `fonts/PretendardVariable.woff2` — the variable webfont.

**Docs**
- `README.md` — this file: brand context, content + visual foundations, iconography, manifest.
- `SKILL.md` — Agent-Skill wrapper so this system is usable from Claude Code.

**Production site** (root)
- `index.html` — the live DOA KIM portfolio: hero, about + timeline, skills (3D-tilt), selected works (2×2 + modal), all-projects archive (filterable), brands, contact. Bilingual KO/EN, dark/light themes, scroll-reveal + parallax motion, fully responsive. Logic in `portfolio.js`, seed content in `portfolio-data.js`.
- `admin.html` — password-protected, no-backend content manager (default password `doakim2026`). Edits selected works, the all-projects archive, brand pills, and the password; "Save & Apply" writes to `localStorage` and the portfolio reads it instantly.

**Previews** (`preview/`) — small HTML cards that populate the Design System tab: color palettes, type specimens, spacing/radius/shadow tokens, buttons, fields, cards, nav, badges, logo.

**Assets** (`assets/`) — logo lockups and brand marks.

**UI kit** (`ui_kits/portfolio/`) — high-fidelity, interactive recreation of the DOA KIM portfolio site (hero, work grid, about, contact, sticky nav with KO/EN toggle), built from reusable JSX components. See its own `README.md`.

---

## ICONOGRAPHY

No icon assets were provided with the brief, and an editorial portfolio leans hard on type and space rather than icons — so the system is deliberately **icon-light**.

**Logo / marks** (`assets/`)
- `logo-wordmark.svg` — `DOA KIM` set in Pretendard ExtraBold (800) with a single teal dot terminating the mark. The dot is the brand's one recurring graphic device.
- `logo-monogram.svg` — `DK` in a hairline-bordered rounded square with the teal dot, for avatars / favicons / tight spaces.
- Both are typographic. There is no abstract symbol/glyph — the wordmark *is* the logo.

**The teal dot.** The recurring brand device. A small `--accent` circle used to terminate the logo, mark "available" status, and punctuate. Use it once per context, never as decoration.

**UI icons — Lucide (CDN).** For functional UI glyphs (arrow, menu, close, external-link, mail, arrow-up-right) the kit uses **[Lucide](https://lucide.dev)** via CDN — a thin, consistent 1.5–2px stroke set that matches the restrained editorial tone. This is a **substitution**: no icon set was specified in the brief. If DOA KIM has a preferred set, swap the CDN import in `ui_kits/portfolio/index.html`.
  - Load: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
  - Stroke width pinned to **1.75**, color inherits `currentColor` (usually `--fg-2` or `--accent`).
  - Icons stay small and quiet — they never compete with type. The forward arrow `→` (a real character, not an icon) is preferred for links.

**Emoji.** Never used, anywhere.

**Unicode as iconography.** A small, deliberate set carries most of the "iconographic" weight: `→` (forward / links), `—` (editorial aside), `·` (inline meta separator), `↗` for external. These are set in Pretendard so they match surrounding text exactly.
