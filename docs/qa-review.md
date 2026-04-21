# QA Agent — Functional Testing

This agent activates after any feature is built or modified. Its job is to verify things actually WORK — not just build, not just look right, but function correctly when a real user interacts with them.

---

## When to trigger
- After building or modifying ANY interactive feature
- Before every push (after CMO and Tech Lead, before final push)
- When the user reports something is broken
- After the daily pipeline runs (verify fresh data appears)

---

## Page-by-page functional tests

### Homepage (`/`)
- [ ] All 12 zodiac signs render in the grid with correct symbols
- [ ] Clicking each sign updates the guidance card (different text per sign)
- [ ] Guidance card shows sign name + "Today's Light" heading
- [ ] Success probability is a number between 60-95%
- [ ] Switching to HI: all hero text, guidance, and labels switch to Hindi
- [ ] Switching back to EN: everything reverts cleanly
- [ ] Date display updates to Hindi format in HI mode
- [ ] WhatsApp CTA button links to `wa.me/919999999999` (or current number)
- [ ] "Need Deeper Clarity" section renders below the zodiac panel
- [ ] Scroll animation on the WhatsApp CTA section works

### Panchang (`/panchang`)
- [ ] Tithi, Nakshatra, Yoga, Karana, Var all display (not empty or "undefined")
- [ ] Date shown matches today (or yesterday if pipeline ran at night UTC)
- [ ] Switching to HI: all Panchang values switch to Hindi
- [ ] All five Panchang cards render with icons
- [ ] WhatsApp CTA at bottom links correctly

### Rashi Calculator (`/rashi-calculator`)
- [ ] Input field accepts text and responds to Enter key
- [ ] "Find" button triggers the lookup
- [ ] Empty input shows error message
- [ ] Test known names return correct Rashis:
  - "Arjun" → Aries (Mesha) — starts with A
  - "Rahul" → Libra (Tula) — starts with Ra
  - "Jatan" → Capricorn (Makara) — starts with Ja
  - "Sunita" → Aquarius (Kumbha) — starts with Su
  - "Maya" → Leo (Simha) — starts with Ma
  - "Deepak" → Cancer (Karka) — starts with De
  - "Kavita" → Gemini (Mithuna) — starts with Ka
  - "Priya" → Virgo (Kanya) — starts with Pa/Pr → P maps to Virgo
- [ ] Hindi name input works (e.g., "राहुल" → Libra)
- [ ] Result card shows: symbol, name, element, ruler, lucky number, lucky color, compatible signs, traits
- [ ] Result card scrolls into view smoothly
- [ ] WhatsApp CTA at bottom of result card links correctly
- [ ] Unrecognized input shows helpful error (not a crash)

### Navigation (all pages)
- [ ] Header logo links to homepage
- [ ] All nav links (Panchang, Rashi, Features, Pricing) navigate correctly
- [ ] Active page is highlighted in saffron in the nav
- [ ] Mobile hamburger menu opens and shows all nav links
- [ ] Footer links (Privacy, Terms, Contact) navigate correctly
- [ ] WhatsApp button in header links correctly
- [ ] EN/HI toggle buttons switch visual state (active button is white/saffron)

### Inner pages (Features, Pricing, About, Contact, Privacy, Terms)
- [ ] Each page loads without errors
- [ ] Breadcrumb "Home" link works
- [ ] No broken links (all `href` values point to existing pages)
- [ ] Contact form renders (even if submission isn't wired up)
- [ ] Pricing cards display with correct tiers and prices

---

## Data integrity tests

### Daily horoscope JSON (`src/data/daily-horoscope.json`)
- [ ] File exists and is valid JSON
- [ ] `date` field is a valid YYYY-MM-DD string
- [ ] `panchang` has all 5 fields: tithi, nakshatra, yoga, karana, var
- [ ] Each panchang field has both `en` and `hi` values (non-empty strings)
- [ ] `signs` array has exactly 12 entries
- [ ] Each sign has: `id` (matches known sign IDs), `guidance.en`, `guidance.hi`, `probability`
- [ ] All probabilities are numbers between 60 and 95
- [ ] No two signs have identical guidance text (template variation is working)

---

## Cross-cutting checks
- [ ] No JavaScript errors in browser console on ANY page
- [ ] No 404 errors for resources (images, fonts, CSS, JS)
- [ ] All pages accessible via direct URL (not just via navigation)
- [ ] Browser back button works correctly after navigating between pages

---

## Review output format

```
## QA Review — [date]

### Functional tests
- Pages tested: X/9
- Tests passed: Y/Z
- Failures: [list of specific failures with reproduction steps]

### Data integrity
- JSON valid: YES/NO
- JSON date: [date] — CURRENT/STALE
- All 12 signs present: YES/NO

### Cross-cutting
- Console errors: NONE / [list]
- Broken resources: NONE / [list]

### Verdict: ALL CLEAR / BLOCKING ISSUES FOUND
[Details of what must be fixed]
```
