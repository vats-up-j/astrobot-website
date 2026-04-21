# HoroTalk — Project Instructions

## What this is

HoroTalk is a landing site for a WhatsApp-based Vedic astrology chatbot targeting Indian users. The site's job is to drive organic search traffic and convert visitors into WhatsApp subscribers. Zero budget, solo founder, everything must stay on free tiers.

**Repo**: `vats-up-j/astrobot-website` | **Hosting**: Cloudflare Pages (free) | **Framework**: Astro 6 + Tailwind 4

---

## Agent System — Automatic Triggers

This project has four advisory agents and twelve operational skills. Agents activate AUTOMATICALLY based on context — do NOT wait for the user to ask. Agents invoke skills as needed.

### CMO Agent (Brand & Conversion)
**Reference**: Read `docs/cmo-review.md` and `docs/design.md`
**Triggers**:
- Before ANY commit or push — run the full CMO review checklist
- When writing or editing any user-facing text (headlines, CTAs, descriptions)
- When creating or modifying any page layout or component
- When adding images or visual elements

**Available skills**: `seo-audit`, `mobile-check`, `optimize-page`

**Action**: Check brand consistency, copy quality, conversion optimization, and mobile-first design. Invoke `mobile-check` on layout changes. Invoke `seo-audit` when pages are added/modified. Invoke `optimize-page` when reviewing conversion. Flag issues BEFORE committing. Output the review format defined in `docs/cmo-review.md`.

### Strategy Team Agent (Business Alignment)
**Reference**: Read `docs/strategy.md`
**Triggers**:
- When the user proposes a NEW feature, page, or content idea
- When prioritizing what to build next
- When the user asks "should we...", "what if we...", or "what's next?"
- When creating any new page — verify it maps to a search query and conversion path

**Available skills**: `keyword-opportunities`, `competitive-scan`, `content-calendar`

**Action**: Score ideas using the decision framework. Invoke `keyword-opportunities` when planning content. Invoke `competitive-scan` when evaluating differentiation. Invoke `content-calendar` when planning what to publish and when. Identify which persona the idea serves. Confirm it leads to WhatsApp. Push back on ideas scoring below 2.5.

### Tech Lead Agent (Sustainability & Automation)
**Reference**: Read `docs/tech-lead.md`
**Triggers**:
- After building ANY feature — run the post-build review
- When adding npm dependencies
- When modifying the daily pipeline (scripts/, .github/workflows/)
- When the user asks to deploy or push
- When anything seems like it would need manual ongoing maintenance

**Available skills**: `build-and-deploy`, `performance-check`, `pipeline-health`

**Action**: Invoke `build-and-deploy` for any push. Invoke `performance-check` after adding images or dependencies. Invoke `pipeline-health` if daily content seems stale. Flag technical debt. Output the review format from `docs/tech-lead.md`.

### QA Agent (Functional Testing)
**Reference**: Read `docs/qa-review.md`
**Triggers**:
- After building or modifying ANY interactive feature
- Before every push (final gate — after CMO and Tech Lead pass)
- When the user reports something is broken
- After daily pipeline runs — verify fresh data renders correctly

**Action**: Test that features actually WORK — click buttons, enter names, switch languages, verify data. Run the page-by-page functional tests and data integrity checks from `docs/qa-review.md`. This is NOT about how it looks or whether it builds — it's about whether a real user would encounter a bug.

### Design System Agent (Visual Consistency)
**Reference**: Read `docs/design.md`
**Triggers**:
- When creating ANY new page or component
- When modifying existing pages
- When choosing colors, fonts, spacing, or layout patterns

**Available skills**: `new-page`, `blog-post`

**Action**: Enforce the design system. Invoke `new-page` skill when scaffolding pages. Invoke `blog-post` when creating articles. Use ONLY the defined color palette, typography, and component patterns. Never invent new patterns.

---

## Skills Reference

Skills are reusable workflows stored in `docs/skills/`. Agents invoke them automatically, or the user can request them directly. Each skill has its own trigger conditions, steps, and output format.

### Build & Ship
| Skill | File | Used by | Triggers when |
|-------|------|---------|---------------|
| **build-and-deploy** | `docs/skills/build-and-deploy.md` | Tech Lead | User says "push", "deploy", "ship it" |
| **new-page** | `docs/skills/new-page.md` | Design System | User says "create a page", "add a page" |
| **blog-post** | `docs/skills/blog-post.md` | Design System | User says "write a blog post", "create an article" |

### SEO & Traffic
| Skill | File | Used by | Triggers when |
|-------|------|---------|---------------|
| **seo-audit** | `docs/skills/seo-audit.md` | CMO | Pre-push review, after adding pages, monthly |
| **keyword-opportunities** | `docs/skills/keyword-opportunities.md` | Strategy | Planning content roadmap, "what should we build?" |
| **sitemap-and-schema** | `docs/skills/sitemap-and-schema.md` | Tech Lead + CMO | After adding pages, SEO audit flags missing files |

### Optimize
| Skill | File | Used by | Triggers when |
|-------|------|---------|---------------|
| **optimize-page** | `docs/skills/optimize-page.md` | CMO | "This page isn't converting", "optimize [page]" |
| **mobile-check** | `docs/skills/mobile-check.md` | CMO | After layout changes, pre-push review |
| **performance-check** | `docs/skills/performance-check.md` | Tech Lead | After adding images/deps, monthly |

### Operations & Marketing
| Skill | File | Used by | Triggers when |
|-------|------|---------|---------------|
| **pipeline-health** | `docs/skills/pipeline-health.md` | Tech Lead | "Is pipeline working?", stale content, weekly |
| **social-content** | `docs/skills/social-content.md` | Strategy + CMO | "Create social content", daily/weekly marketing |
| **competitive-scan** | `docs/skills/competitive-scan.md` | Strategy | "What are competitors doing?", monthly planning |
| **content-calendar** | `docs/skills/content-calendar.md` | Strategy | "What should we publish?", monthly planning |

---

## Multi-Agent Review on Push

When the user wants to commit and push, follow `docs/skills/build-and-deploy.md` which orchestrates:
1. **Tech Lead**: `build-and-deploy` + `performance-check` + `pipeline-health`
2. **CMO**: `seo-audit` + `mobile-check` + brand/copy review from `docs/cmo-review.md`
3. **QA**: Functional tests from `docs/qa-review.md` on all changed pages
4. **Strategy**: Does this change serve the business? Check against `docs/strategy.md`

Only push after all agents pass. Fix flagged issues first.

---

## Tech Stack

- **Framework**: Astro 6 (static site generator, SSG mode only — no SSR)
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite`
- **Hosting**: Cloudflare Pages (free tier, auto-deploys on push to `main`)
- **Daily pipeline**: GitHub Actions runs `scripts/generate-daily.mjs` at 03:30 IST
- **Astronomy**: `astronomia` npm package for planetary calculations
- **No backend, no database, no server runtime**

## Architecture

```
src/
  layouts/Layout.astro        — master layout
  components/Header.astro     — sticky header with logo, EN/HI toggle, nav
  components/Footer.astro     — minimal footer
  styles/global.css           — Tailwind theme
  pages/                      — all pages (index, panchang, rashi-calculator, features, pricing, about, contact, privacy, terms)
  data/daily-horoscope.json   — generated daily by pipeline (DO NOT edit manually)
scripts/
  generate-daily.mjs          — planetary computation + guidance generation
  templates.mjs               — bilingual text templates
docs/
  design.md                   — SINGLE SOURCE OF TRUTH for visual design
  cmo-review.md               — CMO agent review criteria
  strategy.md                 — business strategy and decision framework
  tech-lead.md                — technical sustainability criteria
  qa-review.md                — QA agent functional test criteria
  skills/                     — 14 operational skill runbooks
    build-and-deploy.md       — safe deploy workflow
    new-page.md               — page scaffolding
    blog-post.md              — blog post creation
    seo-audit.md              — SEO issue scanner
    keyword-opportunities.md  — content gap finder
    sitemap-and-schema.md     — technical SEO setup
    optimize-page.md          — conversion optimizer
    mobile-check.md           — mobile responsiveness audit
    performance-check.md      — speed and size audit
    pipeline-health.md        — daily pipeline monitor
    social-content.md         — social media content generator
    competitive-scan.md       — competitor analysis
    content-calendar.md       — content planning and scheduling
.github/workflows/
  daily-build.yml             — daily cron for horoscope refresh
```

## Quality Rules

1. `npm run build` must pass with zero errors before any push
2. Test changed pages in browser + mobile viewport (375px)
3. Verify EN/HI language toggle works on affected pages
4. No console errors in browser dev tools
5. Every page uses `Layout.astro` and has a WhatsApp CTA
6. Always `git pull --rebase` before pushing (daily bot also commits to main)
7. All user-facing text supports bilingual where the page has a toggle
8. Follow `docs/design.md` for ALL visual decisions — no exceptions
