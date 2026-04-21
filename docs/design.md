# HoroTalk Design System — Single Source of Truth

This document is the authoritative reference for all visual, brand, and copy decisions. Every page, component, and piece of content must conform to this system. When in doubt, default to what's defined here.

---

## Brand Identity

**Name**: HoroTalk
**Tagline**: Your Personal Vedic Guruji on WhatsApp
**Persona**: "Guruji" — a wise elder pandit. Speaks with gravitas and warmth. Uses destiny language. Grounded in real astronomy. Feels like consulting a trusted family astrologer, not a chatbot.
**Audience**: Indian adults (25-45), primarily Hindi-speaking, mobile-first, familiar with Vedic astrology concepts (Rashi, Kundli, Panchang), looking for guidance on career, relationships, health decisions.

### Tone spectrum
- Authoritative █████████░ (speaks from wisdom, not opinion)
- Warm ████████░░ (caring elder, not corporate)
- Spiritual ████████░░ (rooted in tradition, not woo-woo)
- Modern ██████░░░░ (powered by AI but doesn't flaunt it)

### Guruji voice examples
**Good** (on-brand):
- "Your kundli reveals a powerful alignment of creative and intellectual forces. This is the chart of someone destined for meaningful expression."
- "Beta, your Saturn Mahadasha is not a punishment — it is a period of deep learning. The rewards will come."
- "The stars suggest patience this month. Let the planetary energies settle before making your move."

**Bad** (off-brand):
- "Your chart reflects a vibrant personality" (too generic, no gravitas)
- "Based on our AI analysis, we recommend..." (too corporate)
- "You will definitely get promoted this year!" (prediction, not guidance)

### Brand name rendering
Always: `Horo<span class="text-saffron">Talk</span>` — the "Talk" is always saffron.
Never: "Horo Talk" (with space), "horotalk" (all lowercase in headlines), "HOROTALK" (all caps).

### Logo
File: `/public/logo.png` — Gold cosmic eye inside a chat bubble on dark background.
Usage: `<img src="/logo.png" alt="HoroTalk" class="w-9 h-9 rounded-lg" />`
Context: Always paired with the text brand name. Never used alone without text.
Do NOT stretch, recolor, or crop the logo.

---

## Color Palette

### Primary colors
| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Saffron | `#FF9933` | `text-saffron`, `bg-saffron` | Primary accent, CTAs, active states, brand highlight |
| Charcoal | `#2D2D2D` | `text-charcoal`, `bg-charcoal` | Headings, body text, dark elements |
| Cream | `#FCF9F2` | `text-cream`, `bg-cream` | Body background, soft surfaces |

### Supporting colors
| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| WhatsApp Green | `#25D366` | `bg-[#25D366]` | WhatsApp buttons ONLY — never for other CTAs |
| Primary Light | `#FFF5E6` | `bg-primary-light` | Page header gradients, light tints |
| Border | `#E5E0D8` | `border-border` | Card borders, dividers |
| Text Light | `#7A7570` | `text-text-light` | Secondary text, descriptions |

### Opacity patterns
- Subtle backgrounds: `bg-saffron/10`, `bg-charcoal/5`
- Muted text: `text-charcoal/60`, `text-charcoal/40`
- Borders: `border-charcoal/10`, `border-saffron/30`

---

## Typography

**Font family**: Montserrat (Google Fonts), weights 300–700
**Fallback**: `ui-sans-serif, system-ui, sans-serif`

### Scale
| Element | Desktop | Mobile | Weight | Class |
|---------|---------|--------|--------|-------|
| Hero H1 | 48px | 32px | 700 | `text-4xl sm:text-5xl lg:text-[48px] font-bold` |
| Page H1 | 48px | 30px | 700 | `text-3xl md:text-5xl font-bold` |
| Section H2 | 36px | 24px | 700 | `text-2xl md:text-3xl font-bold` |
| Card H3 | 20px | 18px | 600 | `text-lg sm:text-xl font-semibold` |
| Body | 16px | 14px | 400 | `text-sm sm:text-base` |
| Small / Labels | 12px | 10px | 700 | `text-[10px] sm:text-[12px] font-bold uppercase tracking-widest` |

---

## Component Library

### Page header (used on all inner pages)
```html
<section class="bg-gradient-to-br from-white via-primary-light to-white py-16 md:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p class="text-sm text-text-light mb-2">
      <a href="/" class="hover:text-saffron">Home</a> &rsaquo; Page Name
    </p>
    <h1 class="text-3xl md:text-5xl font-bold leading-tight">Page Title</h1>
    <p class="mt-4 text-text-light text-lg max-w-2xl">Subtitle text.</p>
  </div>
</section>
```

### Content card
```html
<div class="bg-white rounded-2xl p-6 shadow-lg shadow-charcoal/5 border border-charcoal/5">
  <!-- content -->
</div>
```

### Feature/info card with icon
```html
<div class="bg-white rounded-2xl p-6 shadow-lg shadow-charcoal/5 border border-charcoal/5">
  <div class="flex items-center gap-3 mb-3">
    <div class="w-10 h-10 bg-saffron/10 rounded-full flex items-center justify-center">
      <!-- SVG icon in text-saffron -->
    </div>
    <div class="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Label</div>
  </div>
  <div class="text-lg font-bold text-charcoal">Value</div>
</div>
```

### Info callout (saffron left border)
```html
<div class="bg-cream rounded-2xl p-5 border-l-4 border-saffron">
  <p class="text-sm text-charcoal/70 leading-relaxed">Message text.</p>
</div>
```

### WhatsApp CTA button
```html
<a href="https://wa.me/919999999999?text=Hi%20HoroTalk"
   target="_blank" rel="noopener noreferrer"
   class="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#25D366]/90 transition-all shadow-xl shadow-[#25D366]/20 active:scale-95 flex items-center justify-center gap-2">
  <!-- WhatsApp SVG icon -->
  <span>CTA Text</span>
</a>
```

### Zodiac sign circle
```html
<div class="w-10 h-10 rounded-full border-[1.5px] border-saffron/30 flex items-center justify-center">
  <span class="text-base text-saffron/40">♈</span>
</div>
<!-- Active state: border-saffron bg-saffron/10 text-saffron -->
```

---

## Copywriting Rules

### English (website)
- Lead with benefits, not features ("Get clarity on your career" not "AI-powered astrology chat")
- Use "you/your" — speak directly to the reader
- Reference Vedic concepts by their Sanskrit names with English in parentheses: "Kundli (birth chart)"
- Keep sentences short. Max 25 words.
- Every page must answer: "Why should I go to WhatsApp right now?"
- Use Guruji-style gravitas in astrology content: "Your chart reveals..." not "Your chart shows..."
- Use destiny/blessing language: "destined for", "the stars align", "a period of deep growth"

### Hindi (website + bot)
- Use conversational Hindi, not formal/Sanskritic Hindi
- Mix Hindi-English naturally as Indian users do ("आपकी personalized reading")
- Devanagari script for Hindi content
- Guruji's Hindi voice: warm, elder-like, uses "beta" and "aapka" (respectful)
- Example: "Beta, aapki kundli mein bahut shakti hai. Aayiye, main aapko samjhata hoon."

### WhatsApp bot copy (Guruji voice)
- First message: "Namaste! Main hoon aapka Guruji, HoroTalk ka Vedic Jyotish sahayak. Aapki kundli padh kar aapko sahi margdarshan dunga."
- Speaks in first person as Guruji
- Uses respectful address: "aap", never "tu" or "tum"
- Mixes Hindi-English naturally for metro users, pure Hindi for tier 2-3
- Never says "I am an AI" upfront — positions as "Vedic Jyotish sahayak" (Vedic astrology assistant)
- After delivering a report: teases the next insight to drive upsell

### CTA copy patterns
- Primary: Action + Benefit ("Get Personalized Analysis", "Find Your Rashi")
- WhatsApp: Always include the WhatsApp icon SVG before text
- Urgency (soft): "Today's reading", not "Limited time offer"
- Never: ALL CAPS CTAs, exclamation marks, "Click here"

### Astrology content guidelines
- Always specify "Vedic" when referring to the sidereal system
- Never make medical, legal, or financial claims
- Use "guidance" not "prediction"; "probability" not "guarantee"
- Reference real astronomy: "Based on today's planetary positions" not "the stars say"
- Include entertainment disclaimer on all reading pages

---

## Spacing & Layout

- Max content width: `max-w-7xl` (1280px)
- Page padding: `px-4 sm:px-6 lg:px-8` (inner pages) or `px-4 sm:px-12` (homepage)
- Section spacing: `py-12 md:py-16` (standard) or `py-16 md:py-20` (page headers)
- Card gaps: `gap-4` (tight grid) or `gap-8` (loose grid)
- Mobile-first: base styles are mobile, scale up with `sm:`, `md:`, `lg:`

---

## Do NOT

- Use any color outside the palette defined above
- Use any font other than Montserrat
- Create buttons that aren't rounded (`rounded-full` for CTAs, `rounded-xl` for form buttons)
- Make WhatsApp buttons any color other than `#25D366`
- Use stock photos or generic illustrations
- Add animations that slow down page load
- Use `!important` or inline styles
- Create pages without a WhatsApp CTA
- Write horoscope content that makes definitive predictions
