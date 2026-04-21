# Skill: Optimize Page

Analyze a specific page for conversion rate optimization.

## When to trigger
- CMO agent flags conversion issues
- User says "this page isn't converting", "optimize [page]", "improve [page]"
- After a page has been live for a while with low results

## Steps

1. **Read the page** — Open and read the full `.astro` file for the target page.

2. **Above-the-fold audit** (mobile, 375px viewport):
   - Is the value proposition visible without scrolling?
   - Is there a WhatsApp CTA visible without scrolling?
   - Is the page purpose instantly clear (< 3 seconds)?
   - Is the headline benefit-focused (not feature-focused)?

3. **CTA analysis**:
   - How many taps from page load to WhatsApp? (Target: 1-2)
   - Is the CTA text action-oriented? ("Get Your Reading" > "Learn More")
   - Is the WhatsApp button visually dominant? (Green, large, centered)
   - Are there multiple CTAs for different intent levels? (Soft: "Learn more" + Hard: "Chat now")
   - Does the WhatsApp `text=` parameter pre-fill a relevant message?

4. **Content flow audit**:
   - Does the page follow: Hook → Value → Proof → CTA?
   - Is there a clear reason to go to WhatsApp? (e.g., "This is generic. For YOUR chart...")
   - Are there trust signals? (Real astronomy, Vedic references, precision claims)
   - Is the content scannable? (Short paragraphs, headers, bullet points)

5. **Friction check**:
   - Any form fields that aren't strictly necessary?
   - Any confusing navigation or dead ends?
   - Any content that might make the user leave (walls of text, jargon)?
   - Does the page load fast? (No large images, minimal JS)

6. **Output format**:
   ```
   ## Page Optimization — [page name]

   ### Current state
   [Brief description of what the page does now]

   ### Issues found
   1. [Issue] — Impact: HIGH/MED/LOW — Fix: [specific change]

   ### Recommended changes
   [Ordered list of specific copy/layout/CTA changes]
   ```
