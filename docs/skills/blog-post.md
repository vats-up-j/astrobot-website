# Skill: Blog Post

Create an SEO-optimized blog post targeting a specific keyword.

## When to trigger
- User says "write a blog post", "create an article about..."
- Strategy agent identifies a content opportunity
- Keyword opportunities skill surfaces a target query

## Steps

1. **Setup content collection** (first time only) — If `src/content/blog/` doesn't exist:
   - Create `src/content/` directory
   - Create `src/content/blog/` directory
   - Create `src/content.config.ts` defining the blog collection schema (title, description, date, tags, lang)
   - Create `src/pages/blog/index.astro` (blog listing page)
   - Create `src/pages/blog/[slug].astro` (blog post template)
   - Both pages must use Layout and match design system

2. **Keyword research** — Before writing, identify:
   - Primary keyword (what the post ranks for)
   - Related keywords (include naturally in the text)
   - Search intent (informational, navigational, transactional)
   - Existing competition (are top results from big sites or weak pages?)

3. **Write the post** — Create `src/content/blog/{slug}.md`:
   ```markdown
   ---
   title: "SEO Title (under 60 chars)"
   description: "Meta description (under 160 chars)"
   date: "YYYY-MM-DD"
   tags: ["vedic-astrology", "relevant-tag"]
   ---
   ```
   - H1 matches the primary keyword naturally
   - 800-1500 words for informational posts
   - Use H2s and H3s with related keywords
   - Short paragraphs (3-4 sentences max)
   - Include internal links to HoroTalk tools (Rashi Calculator, Panchang)
   - End with WhatsApp CTA: "Want personalized guidance? Chat with HoroTalk on WhatsApp"

4. **Hindi version** (optional) — If targeting Hindi speakers, create a parallel post in Hindi or add bilingual sections.

5. **Build and verify** — `npm run build`, check the post renders correctly, verify internal links work.
