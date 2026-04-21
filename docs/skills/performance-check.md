# Skill: Performance Check

Audit site performance — image sizes, bundle weight, and load speed factors.

## When to trigger
- Tech Lead agent's post-build review
- After adding images or new dependencies
- User reports slow loading
- Monthly maintenance

## Steps

1. **Image audit** — Check all files in `public/`:
   ```
   Find all image files and their sizes
   ```
   - Flag any image over 200KB
   - Recommend: convert PNG → WebP, compress JPEG to 80% quality
   - Logo.png is currently 1.2MB — this is the #1 performance fix needed
   - Suggest creating optimized versions: `logo.webp` (< 50KB) with PNG fallback

2. **Build output audit** — Check `dist/` after a build:
   - Total size of all HTML files
   - Total size of CSS bundle (should be < 50KB after Tailwind purge)
   - Total size of JS bundle (should be < 50KB)
   - Any unexpected large files?

3. **Dependency weight** — Check impact of npm packages:
   - `astronomia` is ~5MB but only used in build scripts, not shipped to browser — OK
   - Any new dependency that ships to client? Flag it.
   - Run: `ls -la node_modules/ | wc -l` to track total dependency count

4. **Font loading** — Check Layout.astro:
   - Google Fonts loaded with `display=swap`? (Prevents invisible text)
   - Only needed weights loaded? (Currently 300-700, could trim if not all used)
   - `preconnect` hints present for fonts.googleapis.com?

5. **Third-party scripts** — Check for external script loads:
   - No analytics scripts (Cloudflare Web Analytics is injected at edge, no script needed)
   - No external widgets, chat bubbles, or tracking pixels
   - Any `<script src="https://...">` tags? Flag them.

6. **Performance budget check** against baselines in `docs/tech-lead.md`:
   | Metric | Target | Actual |
   |--------|--------|--------|
   | Largest image | < 200KB | ? |
   | Total JS shipped | < 50KB | ? |
   | Build time | < 3s | ? |
   | npm dependencies | < 5 | ? |

7. **Output format**:
   ```
   ## Performance Check — [date]

   ### Critical (blocking)
   - [issue] — Impact: [size/time] — Fix: [action]

   ### Improvements
   - [issue] — Potential saving: [size/time]

   ### Budget status
   [table with target vs actual]
   ```
