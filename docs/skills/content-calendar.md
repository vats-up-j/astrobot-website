# Skill: Content Calendar

Plan what content to create and when, aligned with search trends, festivals, and business goals.

## When to trigger
- Strategy agent is planning the roadmap
- User asks "what should we publish?", "content plan", "what's the schedule?"
- Monthly planning session
- After keyword-opportunities skill surfaces new targets

## Steps

1. **Audit current content** — List all existing pages and their target keywords:
   ```
   Page                  | Target keyword              | Status
   /                     | vedic astrology whatsapp    | Live
   /panchang             | aaj ka panchang             | Live
   /rashi-calculator     | mera rashi kya hai          | Live
   /features             | ai astrology features       | Live
   /pricing              | astrology consultation price| Live
   /horoscope/[sign]     | [sign] rashifal today       | NOT BUILT
   /blog/*               | long-tail queries           | NOT BUILT
   /kundli-matching      | kundli matching online      | NOT BUILT
   ```

2. **Identify time-sensitive opportunities** — Content tied to dates:

   **Weekly recurring** (publish every week):
   - Weekly rashifal summary (if blog exists)
   - Social content from daily horoscopes (via social-content skill)

   **Monthly**:
   - Purnima/Amavasya special guidance
   - Monthly sign predictions blog posts

   **Seasonal/Festival** (plan 2-4 weeks ahead):
   - Navratri dates + muhurat (Sep-Oct)
   - Diwali muhurat + puja timing (Oct-Nov)
   - Makar Sankranti (Jan)
   - Maha Shivaratri (Feb-Mar)
   - Holi (Mar)
   - Akshaya Tritiya (Apr-May)
   - Raksha Bandhan (Aug)
   - Ganesh Chaturthi (Aug-Sep)
   - Karva Chauth (Oct)
   Create festival pages 3-4 weeks before the event to capture early search traffic.

   **Annual**:
   - "Saturn transit [year] effects on all signs"
   - "Jupiter transit [year] predictions"
   - "Year [year] rashifal for [sign]"
   Create these in December for the upcoming year.

3. **Prioritize using Strategy framework** — Score each content piece:
   - Traffic potential (seasonal spike vs. evergreen)
   - Conversion potential (how naturally does it lead to WhatsApp?)
   - Effort (blog post vs. interactive tool vs. new page)
   - Timeliness (is there a deadline?)

4. **Create the calendar** — Output a 4-week plan:

   ```
   ## Content Calendar — [Month Year]

   ### Week 1 (dates)
   - [ ] [Content piece] — Type: [blog/page/social] — Keyword: [target]
   - [ ] [Content piece]

   ### Week 2 (dates)
   - [ ] [Content piece]

   ### Week 3 (dates)
   - [ ] [Content piece]

   ### Week 4 (dates)
   - [ ] [Content piece]

   ### Upcoming festivals to prepare for
   - [Festival] on [date] — Create page by [deadline]

   ### Evergreen backlog (no deadline)
   - [Content piece] — Priority: HIGH/MED/LOW
   ```

5. **Track completion** — Update the calendar as items are built. Carry over unfinished items to the next month.
