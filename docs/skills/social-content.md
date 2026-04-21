# Skill: Social Content

Generate shareable social media content from today's horoscope data.

## When to trigger
- User says "create social content", "whatsapp forwards", "instagram posts"
- Strategy agent identifies social sharing as a growth lever
- Daily/weekly content planning

## Steps

1. **Read today's data** — Import `src/data/daily-horoscope.json`, extract date, panchang, and all 12 sign guidance.

2. **Generate WhatsApp forwards** — Create shareable text messages (one per sign):
   ```
   ✨ [Sign emoji] [Sign name] — Today's Light

   [Guidance text - shortened to 2 sentences max]

   Success probability: [X]%

   📱 Get your full personalized reading:
   https://wa.me/919999999999?text=Hi%20HoroTalk

   — HoroTalk | Your Vedic Edge
   ```
   Create both EN and HI versions.

3. **Generate daily summary post** (for Instagram/Twitter):
   ```
   🌟 Today's Panchang
   📅 [Date]
   🌙 Tithi: [tithi]
   ⭐ Nakshatra: [nakshatra]
   🧘 Yoga: [yoga]

   Top signs today:
   🏆 [Highest probability sign] — [probability]%
   🥈 [2nd highest] — [probability]%
   🥉 [3rd highest] — [probability]%

   Find your sign's reading 👉 [website URL]
   #VedicAstrology #Rashifal #HoroTalk #AajKaRashifal
   ```

4. **Generate Hindi daily summary**:
   Same format as above but in Hindi with Hindi hashtags:
   `#राशिफल #ज्योतिष #आजकाराशिफल #HoroTalk`

5. **Output all content** in a copy-pasteable format, clearly separated by platform and language.

6. **Remind user**: "Share these in astrology WhatsApp groups and on Instagram Stories. Each share drives traffic back to the site."
