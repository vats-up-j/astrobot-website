/**
 * Horoscope guidance templates for daily generation.
 * Uses a parametric approach: sentence patterns + house/planet data
 * to create unique, astronomically-grounded daily readings.
 */

// ── Sign metadata ──────────────────────────────────────────────
export const signMeta = [
  { id: 'aries',       en: 'Mesha',      hi: 'मेष' },
  { id: 'taurus',      en: 'Vrishabha',  hi: 'वृषभ' },
  { id: 'gemini',      en: 'Mithuna',    hi: 'मिथुन' },
  { id: 'cancer',      en: 'Karka',      hi: 'कर्क' },
  { id: 'leo',         en: 'Simha',      hi: 'सिंह' },
  { id: 'virgo',       en: 'Kanya',      hi: 'कन्या' },
  { id: 'libra',       en: 'Tula',       hi: 'तुला' },
  { id: 'scorpio',     en: 'Vrishchika', hi: 'वृश्चिक' },
  { id: 'sagittarius', en: 'Dhanu',      hi: 'धनु' },
  { id: 'capricorn',   en: 'Makara',     hi: 'मकर' },
  { id: 'aquarius',    en: 'Kumbha',     hi: 'कुंभ' },
  { id: 'pisces',      en: 'Meena',      hi: 'मीन' },
];

// ── House themes (what each house governs) ─────────────────────
export const houseThemes = {
  1:  { en: 'self-expression and personal energy',          hi: 'आत्म-अभिव्यक्ति और व्यक्तिगत ऊर्जा' },
  2:  { en: 'finances and family bonds',                    hi: 'वित्त और पारिवारिक संबंध' },
  3:  { en: 'communication and short journeys',             hi: 'संचार और छोटी यात्राएं' },
  4:  { en: 'home life and emotional well-being',           hi: 'गृह जीवन और भावनात्मक कल्याण' },
  5:  { en: 'creativity, romance, and learning',            hi: 'रचनात्मकता, प्रेम और शिक्षा' },
  6:  { en: 'health, routine, and overcoming obstacles',    hi: 'स्वास्थ्य, दिनचर्या और बाधाओं पर विजय' },
  7:  { en: 'partnerships and relationships',               hi: 'साझेदारी और रिश्ते' },
  8:  { en: 'transformation and deep change',               hi: 'परिवर्तन और गहरा बदलाव' },
  9:  { en: 'fortune, higher learning, and long journeys',  hi: 'भाग्य, उच्च शिक्षा और लंबी यात्राएं' },
  10: { en: 'career and public reputation',                 hi: 'करियर और सार्वजनिक प्रतिष्ठा' },
  11: { en: 'gains, friendships, and aspirations',          hi: 'लाभ, मित्रता और आकांक्षाएं' },
  12: { en: 'introspection, spirituality, and rest',        hi: 'आत्मनिरीक्षण, आध्यात्मिकता और विश्राम' },
};

// ── Planet names ───────────────────────────────────────────────
export const planetNames = {
  sun:     { en: 'Sun',     hi: 'सूर्य' },
  moon:    { en: 'Moon',    hi: 'चंद्रमा' },
  mars:    { en: 'Mars',    hi: 'मंगल' },
  mercury: { en: 'Mercury', hi: 'बुध' },
  jupiter: { en: 'Jupiter', hi: 'बृहस्पति' },
  venus:   { en: 'Venus',   hi: 'शुक्र' },
  saturn:  { en: 'Saturn',  hi: 'शनि' },
  rahu:    { en: 'Rahu',    hi: 'राहु' },
  ketu:    { en: 'Ketu',    hi: 'केतु' },
};

// Benefic / malefic classification for scoring
export const planetNature = {
  sun: 'neutral', moon: 'benefic', mars: 'malefic', mercury: 'neutral',
  jupiter: 'benefic', venus: 'benefic', saturn: 'malefic', rahu: 'malefic', ketu: 'malefic',
};

// Houses where a planet gives good results (simplified digbala / moolatrikona logic)
export const beneficHouses = [1, 2, 4, 5, 7, 9, 10, 11];
export const maleficHouses = [3, 6, 8, 12];

// ── Opening sentence patterns (Moon transit focus) ─────────────
// {name} = sign name, {house} = house number, {theme} = house theme
export const openings = [
  {
    en: 'Today the Moon illuminates your {house} house, {name}. Expect a focus on {theme}.',
    hi: 'आज चंद्रमा आपके {house} भाव को प्रकाशित कर रहा है, {name}। {theme} पर ध्यान केंद्रित रहेगा।'
  },
  {
    en: 'With the Moon transiting your {house} house, {theme} takes center stage today, {name}.',
    hi: '{name}, चंद्रमा आपके {house} भाव में गोचर कर रहा है — आज {theme} केंद्र में रहेगा।'
  },
  {
    en: '{name}, the lunar energy today highlights {theme} as the Moon moves through your {house} house.',
    hi: '{name}, चंद्र ऊर्जा आज {theme} को उजागर करती है जब चंद्रमा आपके {house} भाव से गुजर रहा है।'
  },
  {
    en: 'The Moon\'s presence in your {house} house stirs {theme} for you today, {name}.',
    hi: 'आपके {house} भाव में चंद्रमा की उपस्थिति आज {theme} को प्रेरित करती है, {name}।'
  },
];

// ── Middle sentences (dominant planet influence) ────────────────
// {planet} = planet name, {house} = house number, {theme} = house theme
export const influences = {
  benefic: [
    {
      en: '{planet}\'s supportive presence in your {house} house brings opportunities in {theme}.',
      hi: 'आपके {house} भाव में {planet} की अनुकूल उपस्थिति {theme} में अवसर लाती है।'
    },
    {
      en: '{planet} blesses your {house} house, enhancing {theme} with positive energy.',
      hi: '{planet} आपके {house} भाव को आशीर्वाद देता है, {theme} को सकारात्मक ऊर्जा से बढ़ाता है।'
    },
    {
      en: 'The grace of {planet} in your {house} house supports growth in {theme}.',
      hi: 'आपके {house} भाव में {planet} की कृपा {theme} में विकास का समर्थन करती है।'
    },
  ],
  malefic: [
    {
      en: '{planet} in your {house} house calls for patience regarding {theme}.',
      hi: 'आपके {house} भाव में {planet} {theme} के संबंध में धैर्य की मांग करता है।'
    },
    {
      en: '{planet}\'s transit through your {house} house tests your resolve in {theme}.',
      hi: 'आपके {house} भाव से {planet} का गोचर {theme} में आपके संकल्प की परीक्षा लेता है।'
    },
    {
      en: 'Be mindful of {planet}\'s influence on your {house} house — {theme} requires extra care today.',
      hi: 'आपके {house} भाव पर {planet} के प्रभाव के प्रति सचेत रहें — {theme} को आज अतिरिक्त ध्यान की आवश्यकता है।'
    },
  ],
  neutral: [
    {
      en: '{planet} steadily moves through your {house} house, keeping {theme} in balance.',
      hi: '{planet} आपके {house} भाव से स्थिर गति से गुजर रहा है, {theme} में संतुलन बनाए रखता है।'
    },
    {
      en: '{planet}\'s energy in your {house} house brings measured progress in {theme}.',
      hi: 'आपके {house} भाव में {planet} की ऊर्जा {theme} में संतुलित प्रगति लाती है।'
    },
    {
      en: 'With {planet} in your {house} house, a steady approach to {theme} serves you well.',
      hi: 'आपके {house} भाव में {planet} के साथ, {theme} के प्रति स्थिर दृष्टिकोण आपके लिए अच्छा रहेगा।'
    },
  ],
};

// ── Closing advice sentences ───────────────────────────────────
export const advice = {
  positive: [
    { en: 'Trust your instincts and make the most of this favorable energy.',
      hi: 'अपनी प्रवृत्ति पर भरोसा करें और इस अनुकूल ऊर्जा का अधिकतम लाभ उठाएं।' },
    { en: 'A good day to take initiative — the stars support bold moves.',
      hi: 'पहल करने का अच्छा दिन — ग्रह साहसिक कदमों का समर्थन करते हैं।' },
    { en: 'Channel this positive energy into your most important goals.',
      hi: 'इस सकारात्मक ऊर्जा को अपने सबसे महत्वपूर्ण लक्ष्यों में लगाएं।' },
    { en: 'Favorable alignments make this a productive day for decisive action.',
      hi: 'अनुकूल ग्रह स्थिति इसे निर्णायक कार्रवाई के लिए उत्पादक दिन बनाती है।' },
  ],
  mixed: [
    { en: 'Balance ambition with caution — weigh your options carefully today.',
      hi: 'महत्वाकांक्षा और सावधानी में संतुलन बनाएं — आज अपने विकल्पों को ध्यान से तौलें।' },
    { en: 'A day of mixed energies — focus on what you can control.',
      hi: 'मिश्रित ऊर्जा का दिन — जो आपके नियंत्रण में है उस पर ध्यान दें।' },
    { en: 'Stay adaptable — the day brings both opportunities and small challenges.',
      hi: 'अनुकूल बने रहें — दिन अवसर और छोटी चुनौतियां दोनों लाता है।' },
    { en: 'Patience and flexibility will be your greatest strengths today.',
      hi: 'धैर्य और लचीलापन आज आपकी सबसे बड़ी ताकत होगी।' },
  ],
  challenging: [
    { en: 'Take things slow and avoid major decisions if possible.',
      hi: 'चीजों को धीरे लें और यदि संभव हो तो बड़े निर्णयों से बचें।' },
    { en: 'A day for reflection rather than action — conserve your energy.',
      hi: 'कार्रवाई के बजाय चिंतन का दिन — अपनी ऊर्जा बचाएं।' },
    { en: 'Challenges today are temporary — maintain your composure and inner strength.',
      hi: 'आज की चुनौतियां अस्थायी हैं — अपनी शांति और आंतरिक शक्ति बनाए रखें।' },
    { en: 'Navigate obstacles with patience — smoother days are ahead.',
      hi: 'धैर्य के साथ बाधाओं को पार करें — आगे बेहतर दिन हैं।' },
  ],
};

// ── Panchang names ─────────────────────────────────────────────
export const tithiNames = [
  { en: 'Pratipada',    hi: 'प्रतिपदा' },
  { en: 'Dwitiya',      hi: 'द्वितीया' },
  { en: 'Tritiya',      hi: 'तृतीया' },
  { en: 'Chaturthi',    hi: 'चतुर्थी' },
  { en: 'Panchami',     hi: 'पंचमी' },
  { en: 'Shashthi',     hi: 'षष्ठी' },
  { en: 'Saptami',      hi: 'सप्तमी' },
  { en: 'Ashtami',      hi: 'अष्टमी' },
  { en: 'Navami',       hi: 'नवमी' },
  { en: 'Dashami',      hi: 'दशमी' },
  { en: 'Ekadashi',     hi: 'एकादशी' },
  { en: 'Dwadashi',     hi: 'द्वादशी' },
  { en: 'Trayodashi',   hi: 'त्रयोदशी' },
  { en: 'Chaturdashi',  hi: 'चतुर्दशी' },
  { en: 'Purnima',      hi: 'पूर्णिमा' },
  { en: 'Pratipada',    hi: 'प्रतिपदा' },
  { en: 'Dwitiya',      hi: 'द्वितीया' },
  { en: 'Tritiya',      hi: 'तृतीया' },
  { en: 'Chaturthi',    hi: 'चतुर्थी' },
  { en: 'Panchami',     hi: 'पंचमी' },
  { en: 'Shashthi',     hi: 'षष्ठी' },
  { en: 'Saptami',      hi: 'सप्तमी' },
  { en: 'Ashtami',      hi: 'अष्टमी' },
  { en: 'Navami',       hi: 'नवमी' },
  { en: 'Dashami',      hi: 'दशमी' },
  { en: 'Ekadashi',     hi: 'एकादशी' },
  { en: 'Dwadashi',     hi: 'द्वादशी' },
  { en: 'Trayodashi',   hi: 'त्रयोदशी' },
  { en: 'Chaturdashi',  hi: 'चतुर्दशी' },
  { en: 'Amavasya',     hi: 'अमावस्या' },
];

export const pakshaNames = {
  shukla: { en: 'Shukla', hi: 'शुक्ल' },
  krishna: { en: 'Krishna', hi: 'कृष्ण' },
};

export const nakshatraNames = [
  { en: 'Ashwini',       hi: 'अश्विनी' },
  { en: 'Bharani',       hi: 'भरणी' },
  { en: 'Krittika',      hi: 'कृत्तिका' },
  { en: 'Rohini',        hi: 'रोहिणी' },
  { en: 'Mrigashira',    hi: 'मृगशिरा' },
  { en: 'Ardra',         hi: 'आर्द्रा' },
  { en: 'Punarvasu',     hi: 'पुनर्वसु' },
  { en: 'Pushya',        hi: 'पुष्य' },
  { en: 'Ashlesha',      hi: 'आश्लेषा' },
  { en: 'Magha',         hi: 'मघा' },
  { en: 'Purva Phalguni',hi: 'पूर्व फाल्गुनी' },
  { en: 'Uttara Phalguni',hi:'उत्तर फाल्गुनी' },
  { en: 'Hasta',         hi: 'हस्त' },
  { en: 'Chitra',        hi: 'चित्रा' },
  { en: 'Swati',         hi: 'स्वाती' },
  { en: 'Vishakha',      hi: 'विशाखा' },
  { en: 'Anuradha',      hi: 'अनुराधा' },
  { en: 'Jyeshtha',      hi: 'ज्येष्ठा' },
  { en: 'Moola',         hi: 'मूल' },
  { en: 'Purva Ashadha', hi: 'पूर्वाषाढ़ा' },
  { en: 'Uttara Ashadha',hi: 'उत्तराषाढ़ा' },
  { en: 'Shravana',      hi: 'श्रवण' },
  { en: 'Dhanishta',     hi: 'धनिष्ठा' },
  { en: 'Shatabhisha',   hi: 'शतभिषा' },
  { en: 'Purva Bhadrapada', hi: 'पूर्व भाद्रपद' },
  { en: 'Uttara Bhadrapada',hi:'उत्तर भाद्रपद' },
  { en: 'Revati',        hi: 'रेवती' },
];

export const yogaNames = [
  { en: 'Vishkumbha', hi: 'विष्कम्भ' }, { en: 'Priti',      hi: 'प्रीति' },
  { en: 'Ayushman',   hi: 'आयुष्मान' }, { en: 'Saubhagya',  hi: 'सौभाग्य' },
  { en: 'Shobhana',   hi: 'शोभन' },    { en: 'Atiganda',   hi: 'अतिगण्ड' },
  { en: 'Sukarma',    hi: 'सुकर्मा' },  { en: 'Dhriti',     hi: 'धृति' },
  { en: 'Shula',      hi: 'शूल' },      { en: 'Ganda',      hi: 'गण्ड' },
  { en: 'Vriddhi',    hi: 'वृद्धि' },   { en: 'Dhruva',     hi: 'ध्रुव' },
  { en: 'Vyaghata',   hi: 'व्याघात' },  { en: 'Harshana',   hi: 'हर्षण' },
  { en: 'Vajra',      hi: 'वज्र' },     { en: 'Siddhi',     hi: 'सिद्धि' },
  { en: 'Vyatipata',  hi: 'व्यतीपात' }, { en: 'Variyana',   hi: 'वरीयान' },
  { en: 'Parigha',    hi: 'परिघ' },     { en: 'Shiva',      hi: 'शिव' },
  { en: 'Siddha',     hi: 'सिद्ध' },    { en: 'Sadhya',     hi: 'साध्य' },
  { en: 'Shubha',     hi: 'शुभ' },      { en: 'Shukla',     hi: 'शुक्ल' },
  { en: 'Brahma',     hi: 'ब्रह्म' },   { en: 'Indra',      hi: 'इन्द्र' },
  { en: 'Vaidhriti',  hi: 'वैधृति' },
];

export const karanaNames = [
  { en: 'Bava',     hi: 'बव' },     { en: 'Balava',   hi: 'बालव' },
  { en: 'Kaulava',  hi: 'कौलव' },   { en: 'Taitila',  hi: 'तैतिल' },
  { en: 'Garaja',   hi: 'गरज' },    { en: 'Vanija',   hi: 'वणिज' },
  { en: 'Vishti',   hi: 'विष्टि' },  { en: 'Shakuni',  hi: 'शकुनि' },
  { en: 'Chatushpada', hi: 'चतुष्पद' }, { en: 'Nagava', hi: 'नाग' },
  { en: 'Kimstughna',  hi: 'किंस्तुघ्न' },
];

export const varNames = [
  { en: 'Sunday',    hi: 'रविवार' },
  { en: 'Monday',    hi: 'सोमवार' },
  { en: 'Tuesday',   hi: 'मंगलवार' },
  { en: 'Wednesday', hi: 'बुधवार' },
  { en: 'Thursday',  hi: 'गुरुवार' },
  { en: 'Friday',    hi: 'शुक्रवार' },
  { en: 'Saturday',  hi: 'शनिवार' },
];

// ── Helper: fill template variables ────────────────────────────
export function fillTemplate(template, vars) {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replaceAll(`{${key}}`, value);
  }
  return result;
}

// ── Main guidance builder ──────────────────────────────────────
/**
 * Build a guidance paragraph for a sign.
 * @param {string} lang - 'en' or 'hi'
 * @param {string} signName - localized sign name
 * @param {number} moonHouse - Moon's house from this sign (1-12)
 * @param {object} dominantPlanet - { name, house, nature } of most impactful planet
 * @param {string} tone - 'positive' | 'mixed' | 'challenging'
 * @param {number} seed - day-based seed for variant selection
 */
export function buildGuidance(lang, signName, moonHouse, dominantPlanet, tone, seed) {
  // Select opening variant
  const openingIdx = seed % openings.length;
  const opening = fillTemplate(openings[openingIdx][lang], {
    name: signName,
    house: String(moonHouse),
    theme: houseThemes[moonHouse][lang],
  });

  // Select influence variant
  const infList = influences[dominantPlanet.nature];
  const infIdx = (seed + moonHouse) % infList.length;
  const influence = fillTemplate(infList[infIdx][lang], {
    planet: dominantPlanet.name[lang],
    house: String(dominantPlanet.house),
    theme: houseThemes[dominantPlanet.house][lang],
  });

  // Select advice variant
  const advList = advice[tone];
  const advIdx = (seed + dominantPlanet.house) % advList.length;
  const adv = advList[advIdx][lang];

  return `${opening} ${influence} ${adv}`;
}
