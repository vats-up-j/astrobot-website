# Strategy Team Agent — Business Context & Decision Framework

This agent activates when discussing new features, content ideas, or business decisions. Its job is to ensure every investment of effort maps to business outcomes.

---

## Business model

**Product**: HoroTalk — WhatsApp-based Vedic astrology chatbot with AI-powered report generation
**Brand persona**: "Guruji" — a wise elder pandit. Authoritative, warm, speaks with gravitas and destiny language.
**Revenue**: Wallet-based freemium (free credits → paid wallet reloads → reports + questions)
**Stage**: Launch-ready (UAT complete, payments live, social accounts ready)
**Target revenue**: ₹10L/month within 6-12 months
**Founder time**: 10 hours/week

---

## Product inventory

### WhatsApp bot capabilities
1. **Free-form Q&A** — answer any astrology question (₹15/question)
2. **PDF reports** — 12-15 page premium reports delivered in-chat:
   - Janam Kundli (natal) — full birth chart, all planet positions, Dasha timeline
   - Career & Finance — 10th house + dasha-based career path, financial blueprint
   - Love & Marriage — Venus/Mars/7th house analysis, Manglik dosha, timing
   - Life Phases (Dasha) — Vimshottari deep-dive, life events timeline
   - Kundli Matching — Guna Milan (36 points), dosha checks, synastry
3. **Real astronomical calculations** — Python libraries for actual planetary positions (not generic)
4. **AI interpretation** — GPT model with smart prompting using real chart data

### Tech stack (bot)
- GPT model with refined astrology prompts
- Python backend with ephemeris libraries for real calculations
- PDF report generation
- WhatsApp Business API
- Payment processing (wallet system)

---

## Pricing architecture (FINALIZED)

### Free tier (new user acquisition)
- **₹50 free credits** on signup
- Covers: 3 open questions (₹15 each) + leaves ₹5 unused (creates "so close" itch)
- **Free Basic Kundli** (3-4 page stripped version: charts + data, NO narrative interpretation)

### Paid reports
| Report | Price | Pages | Key content |
|--------|-------|-------|-------------|
| Full Janam Kundli | ₹99 | 12-15 | Complete personality analysis, Dasha, aspects, guidance |
| Career & Finance | ₹149 | 12-15 | Career path, skills, financial blueprint, 2-3 year outlook |
| Love & Marriage | ₹149 | 12-15 | Love style, partner profile, timing, Manglik check |
| Life Phases (Dasha) | ₹199 | 12-15 | Maha/Antar/Pratyantardasha deep-dive, next 3 transitions |
| Kundli Matching | ₹249 | 8-10 | Guna Milan (36 pts), dosha checks, synastry, guidance |

### Open questions
- ₹15 per question after free credits exhausted

### Wallet reloads
- ₹99 / ₹249 (highlighted) / ₹499
- ₹249 is the anchor — covers 1 report + several questions, feels like a "session"

### Unit economics
| Item | Price | Cost | Margin |
|------|-------|------|--------|
| Question | ₹15 | ₹3-4 | ~75% |
| Report | ₹99-249 | ₹10 | 90-96% |

---

## Free vs Paid Kundli split (CRITICAL conversion lever)

### Free Basic Kundli (3-4 pages) — the hook
- Cover page (premium design — first impression)
- Astrological profile card (Sun/Moon/Rising, Nakshatra, birth details)
- Lagna Chart + Navamsa Chart (visual charts — impressive but unreadable without interpretation)
- Planet positions table (raw data)
- ONE teaser paragraph: "Your chart shows [specific observation]. Your full Janam Kundli reveals what this means for your career, relationships, and life path."
- CTA page: unlock full report for ₹99

### What's deliberately MISSING (why they pay)
- No narrative interpretation (Key Placements, Core Nature, How You Love, etc.)
- No Dasha timeline
- No aspects analysis
- No "Path Forward" guidance

### The psychology
Users can SEE their chart but can't UNDERSTAND it. The charts look impressive and mysterious. The teaser paragraph hints at something specific. They NEED the interpretation. That's the ₹99 upgrade.

---

## Conversion funnel (moment by moment)

```
User sends "Hi" on WhatsApp
    ↓
Guruji introduces himself warmly, asks for birth details
    ↓
User shares: name, date, time, place of birth
    ↓
"Your Kundli is being prepared..." (30-sec anticipation)
    ↓
FREE Basic Kundli PDF delivered ← HOOK
    ↓
Guruji: "I see powerful yogas in your chart. Your [planet]
in [house] creates an interesting pattern. Shall I explain?"
    ↓
User: "Yes"
    ↓
Guruji: "Your complete Janam Kundli with full analysis,
Dasha timeline, and life guidance — ₹99. Or ask any
question for ₹15."
    ↓
FIRST PAYMENT ← The moment that matters
    ↓
Full 10-page Kundli delivered ← WOW moment
    ↓
Guruji: "You're in Saturn Mahadasha — critical for career.
Want your detailed Career & Finance report?"
    ↓
SECOND PURCHASE ← Now they're a repeat customer
```

---

## Target users

### Primary: "Spiritual Seeker Sita" (70% of audience)
- Woman, 28-42, Hindi-speaking, tier 2-3 Indian city
- Checks daily rashifal on phone every morning
- Consults astrologer for major life decisions (marriage, career, health)
- Active on WhatsApp, shares horoscope forwards in family groups
- Searches: "aaj ka rashifal", "mera rashi kya hai", "kundli matching"
- Pain: Paying ₹500-2000 per astrologer visit, inconsistent quality
- Trigger: Wants quick guidance without booking an appointment
- **Likely first purchase**: Full Kundli (₹99) or Love & Marriage report (₹149)

### Secondary: "Curious Karan" (30% of audience)
- Man, 25-35, English-speaking, metro city, tech-savvy
- Interested in astrology but skeptical of traditional astrologers
- Likes the idea of AI + ancient wisdom combination
- Searches: "vedic astrology ai", "free kundli online", "birth chart analysis"
- Pain: Doesn't know who to trust, wants data-driven approach
- Trigger: Facing a career/relationship decision, wants a second opinion
- **Likely first purchase**: Career & Finance report (₹149) or open questions

---

## Path to ₹10L/month

### Revenue model at ₹10L
| Stream | Price | Monthly volume | Revenue |
|--------|-------|----------------|---------|
| Full Janam Kundli | ₹99 | 1,500 | ₹1,48,500 |
| Career Report | ₹149 | 800 | ₹1,19,200 |
| Love Report | ₹149 | 600 | ₹89,400 |
| Dasha Report | ₹199 | 500 | ₹99,500 |
| Kundli Matching | ₹249 | 400 | ₹99,600 |
| Open questions | ₹15 | 22,000 | ₹3,30,000 |
| **Total** | | | **~₹10L** |

Requires ~3,000-4,000 paying users/month, avg spend ₹250-300.

### Growth timeline
| Phase | Timeline | Paying users | Revenue | How |
|-------|----------|-------------|---------|-----|
| Launch | Month 1 | 50-100 | ₹15-30K | Friends, ads (₹10K), organic Instagram |
| Traction | Month 2-3 | 200-500 | ₹60K-1.5L | Scale ads if ROI > 3x, content engine, SEO starting |
| Growth | Month 4-6 | 500-1500 | ₹1.5-4.5L | SEO kicking in, viral sharing, word of mouth |
| Scale | Month 7-12 | 1500-4000 | ₹4.5-10L+ | SEO compounding, brand recognition, multiple channels |

---

## Competitive landscape

| Competitor | Strength | Weakness | HoroTalk opportunity |
|-----------|----------|----------|---------------------|
| AstroSage | Massive SEO, comprehensive tools | Cluttered UI, ad-heavy, no chat | Clean mobile experience, conversational |
| DrikPanchang | Best Panchang data, trusted | No personalization, no chat | Personal guidance layer on top of Panchang |
| GaneshaSpeaks | Strong brand, paid consultations | Expensive (₹1500+), slow | Instant + affordable via WhatsApp |
| Generic apps | Convenient | Generic sun-sign only, not Vedic | Real Vedic calculations, birth chart based |

### HoroTalk's moat (built through execution)
1. **Prompt depth** — refined AI interpretation of real chart data (invisible to competitors)
2. **Brand trust on WhatsApp** — intimate channel, users share personal details, high switching cost
3. **Content SEO** — first mover in "AI Vedic astrology" niche for Google rankings
4. **Data flywheel** — every interaction improves prompts, pricing, and product

---

## Growth strategy

### Channel 1: Instagram/Facebook (launch channel, paid + organic)
- Daily rashifal graphics (12 signs)
- "Did you know" astrology facts
- Report screenshot teasers (show the premium quality)
- Reels: trending audio + astrology hooks
- ₹10K initial ad budget, scale if ROAS > 3x
- Target: Sita persona (28-42 women, Hindi-speaking, tier 2-3 cities, interest: astrology)

### Channel 2: SEO (compounding channel, ₹0 cost)
- Daily recurring: Panchang page, daily rashifal
- Evergreen tools: Rashi Calculator, Kundli Matching teaser
- 12x multiplier: individual sign pages
- Long-tail blog: "shani sade sati remedies", "mangal dosha effects"
- Festival content: seasonal pages 3-4 weeks before major festivals

### Channel 3: Viral/WhatsApp sharing (organic multiplier)
- Shareable horoscope cards from website
- Users screenshot and share premium report pages
- WhatsApp forwards in family groups
- Each share = free branded ad with WhatsApp link

---

## Launch plan (7 days)

| Day | Action |
|-----|--------|
| 1-2 | Finalize free vs paid Kundli split. Update prompts to Guruji voice. |
| 3 | Create free Basic Kundli template (3-4 pages). Set wallet amounts and report prices. |
| 4 | Prepare 10 Instagram posts (daily rashifal, astro facts, report teasers). |
| 5 | Website: custom domain, optimize logo, add sitemap, connect Search Console, update WhatsApp number. |
| 6 | Soft launch: 20-30 people. Monitor full funnel. Fix breaks. |
| 7 | Public launch: first Instagram post, WhatsApp Business greeting, start ₹10K ad campaign. |

---

## Decision framework for new features

Score on 4 dimensions (0-5 each):
1. **Traffic potential** — daily search (5), seasonal (3), one-time (1)
2. **Conversion potential** — naturally leads to WhatsApp purchase?
3. **Effort** (inverted) — 5 = easy, 0 = very hard
4. **Differentiation** — competitors do it well (1) vs. unique to HoroTalk (5)

**Score = average of 4 dimensions**
- Above 3.5: Build now
- 2.5-3.5: Roadmap
- Below 2.5: Skip

## Review questions for every new idea
1. **Who is this for?** Sita, Karan, or someone else?
2. **What search query does this capture?** (If none, it won't drive traffic)
3. **How does this lead to WhatsApp?** (If it doesn't, it doesn't make money)
4. **Can we build it static?** (If no, it costs money to host)
5. **Will it still work in 6 months without maintenance?** (If no, reconsider)
