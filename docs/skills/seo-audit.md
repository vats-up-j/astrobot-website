# Skill: SEO Audit

Scan every page for SEO issues and produce a ranked fix list.

## When to trigger
- CMO agent runs pre-push review
- User asks about SEO, rankings, or Google indexing
- After adding new pages (verify they're SEO-ready)
- Monthly maintenance check

## Steps

1. **Scan all pages** — Read every `.astro` file in `src/pages/`. For each page check:

   **Title tag**:
   - Exists and is unique across pages
   - Under 60 characters
   - Contains primary keyword for the page
   - Includes brand name ("| HoroTalk" suffix pattern)

   **Meta description**:
   - `description` prop is passed to Layout
   - Under 160 characters
   - Contains primary keyword
   - Is compelling (not just a repeat of the title)

   **Heading hierarchy**:
   - Exactly one `<h1>` per page
   - H1 matches the page's target keyword
   - H2s used for sections, H3s for subsections — no skipped levels

   **Internal links**:
   - Page links to at least one other HoroTalk page
   - No broken internal links (href targets exist as pages)
   - Key pages (Panchang, Rashi Calculator) are linked from content pages

   **Images**:
   - All `<img>` tags have `alt` attributes
   - Images are reasonably sized (check file size in `public/`)

2. **Check technical SEO files**:
   - `public/sitemap.xml` exists? (If not, flag as critical)
   - `public/robots.txt` exists? (If not, flag as critical)
   - OG meta tags in Layout.astro? (`og:title`, `og:description`, `og:image`)

3. **Output format**:
   ```
   ## SEO Audit — [date]

   ### Critical (fix immediately)
   - [issue]: [file] — [fix]

   ### Important (fix soon)
   - [issue]: [file] — [fix]

   ### Nice to have
   - [issue]: [file] — [fix]

   ### Pages audited: X | Issues found: Y
   ```
