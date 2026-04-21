# Skill: Mobile Check

Review all pages for mobile responsiveness issues. Indian audience is 85%+ mobile.

## When to trigger
- CMO agent's pre-push review
- After creating or modifying any page
- User reports a mobile layout issue

## Steps

1. **Scan all pages** — For each `.astro` file in `src/pages/`, check:

   **Layout issues**:
   - Any `fixed width` values that could overflow on 375px? (Look for `w-[>400px]`, `min-w-`, large `max-w-` on containers)
   - Are grids properly responsive? (`grid-cols-X` should have mobile breakpoint: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`)
   - Do flex containers wrap on mobile? (`flex-col` on mobile, `md:flex-row` on desktop)
   - Is text readable? (No `text-[6px]` or extremely small sizes on mobile)

   **Touch targets**:
   - All clickable elements at least 44x44px on mobile
   - Buttons have enough padding (`py-3 px-6` minimum)
   - Links in navigation are spaced enough to not accidentally tap the wrong one

   **Content**:
   - Long text doesn't overflow horizontally
   - Tables (if any) are scrollable or stack on mobile
   - Images don't exceed viewport width (`max-w-full` or responsive classes)

   **Critical elements**:
   - WhatsApp CTA is reachable without excessive scrolling
   - Header is usable on mobile (hamburger menu works, logo visible)
   - Forms (Rashi Calculator input) are full-width on mobile

2. **Check responsive patterns used**:
   - `hidden md:block` / `md:hidden` for desktop/mobile visibility
   - `text-sm sm:text-base` for text scaling
   - `px-4 sm:px-6 lg:px-8` for padding scaling
   - `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` for grid scaling

3. **Output format**:
   ```
   ## Mobile Check — [date]

   ### Issues (fix required)
   - [page]: [issue] — [fix]

   ### Warnings (monitor)
   - [page]: [potential issue]

   ### All clear
   - [pages with no issues]

   Pages checked: X | Issues: Y
   ```
