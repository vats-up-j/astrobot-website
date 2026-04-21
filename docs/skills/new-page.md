# Skill: New Page

Scaffold a new page that follows the design system with zero guesswork.

## When to trigger
- User says "create a page", "add a page", "new page for..."
- Strategy agent approves a new page idea

## Steps

1. **Strategy check** — Before writing any code, read `docs/strategy.md` and evaluate:
   - Who is this page for? (Sita or Karan persona)
   - What search query does it target?
   - How does it lead to WhatsApp?
   - Score: Traffic + Conversion + Effort + Differentiation

2. **Scaffold the page** — Create `src/pages/{slug}.astro` using this template:
   - Import `Layout` from `../layouts/Layout.astro`
   - Set unique `<title>` (under 60 chars) and `description`
   - Page header section: gradient background, breadcrumb, h1, subtitle
   - Main content section
   - WhatsApp CTA section at bottom
   - All following patterns from `docs/design.md`

3. **Add navigation** — If the page is important enough for the main nav, add it to the `navLinks` array in `src/components/Header.astro`. Keep nav to max 5 items. Lower-priority pages go in footer only.

4. **Bilingual support** — If the page has dynamic content or the EN/HI toggle is relevant, add a `<script>` block that listens for the `lang-change` custom event.

5. **SEO** — Ensure the page has:
   - Unique, keyword-rich `<title>`
   - Descriptive `description` prop passed to Layout
   - One `<h1>` tag matching the page topic
   - Internal links to related pages (Panchang, Rashi Calculator, etc.)

6. **Build test** — Run `npm run build` and verify the page appears in the build output.
