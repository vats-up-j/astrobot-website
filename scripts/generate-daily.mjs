#!/usr/bin/env node
/**
 * Daily horoscope generation script.
 * Computes real planetary positions using astronomia, then generates
 * bilingual (EN/HI) guidance text from templates.
 *
 * Usage: node scripts/generate-daily.mjs
 * Output: src/data/daily-horoscope.json
 */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Astronomia imports
import julian from 'astronomia/julian';
import pp from 'astronomia/planetposition';
import solar from 'astronomia/solar';
import moonposition from 'astronomia/moonposition';
import base from 'astronomia/base';
import data from 'astronomia/data';

const { CalendarGregorian } = julian;
const { Planet } = pp;

// Template imports
import {
  signMeta, planetNames, planetNature,
  beneficHouses, maleficHouses,
  tithiNames, pakshaNames, nakshatraNames, yogaNames, karanaNames, varNames,
  buildGuidance,
} from './templates.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '..', 'src', 'data', 'daily-horoscope.json');

// ── 1. Date setup ──────────────────────────────────────────────
const now = new Date();
const year = now.getUTCFullYear();
const month = now.getUTCMonth() + 1;
const day = now.getUTCDate();
const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

// Julian Day at noon UTC
const cal = new CalendarGregorian(year, month, day + 0.5);
const jde = cal.toJD();
const T = base.J2000Century(jde);

console.log(`Generating horoscope for ${dateStr} (JDE: ${jde.toFixed(2)})`);

// ── 2. Planetary positions (tropical, geocentric) ──────────────
const DEG = 180 / Math.PI;

// Sun — already geocentric from solar module
const sunTropical = ((solar.apparentLongitude(T) * DEG) % 360 + 360) % 360;

// Moon — already geocentric
const moonPos = moonposition.position(jde);
const moonTropical = ((moonPos.lon * DEG) % 360 + 360) % 360;

// Planets — convert heliocentric to geocentric
const earth = new Planet(data.vsop87Bearth);
const earthPos = earth.position(jde);

function helioToGeo(planetObj) {
  const pos = planetObj.position(jde);
  // Convert spherical to cartesian, subtract Earth, convert back
  const px = Math.cos(pos.lat) * Math.cos(pos.lon) * pos.range;
  const py = Math.cos(pos.lat) * Math.sin(pos.lon) * pos.range;
  const ex = Math.cos(earthPos.lat) * Math.cos(earthPos.lon) * earthPos.range;
  const ey = Math.cos(earthPos.lat) * Math.sin(earthPos.lon) * earthPos.range;
  const lon = ((Math.atan2(py - ey, px - ex) * DEG) % 360 + 360) % 360;
  return lon;
}

const planetObjects = {
  mercury: new Planet(data.vsop87Bmercury),
  venus:   new Planet(data.vsop87Bvenus),
  mars:    new Planet(data.vsop87Bmars),
  jupiter: new Planet(data.vsop87Bjupiter),
  saturn:  new Planet(data.vsop87Bsaturn),
};

const tropicalPositions = { sun: sunTropical, moon: moonTropical };
for (const [name, obj] of Object.entries(planetObjects)) {
  tropicalPositions[name] = helioToGeo(obj);
}

// ── 3. Apply Lahiri ayanamsa (tropical → sidereal) ────────────
// Approximate Lahiri ayanamsa: ~23.85° at J2000, increasing ~50.3"/year
const decimalYear = year + (month - 1) / 12 + (day - 1) / 365.25;
const ayanamsa = 23.85 + (decimalYear - 2000) * 0.01397;

function toSidereal(tropicalDeg) {
  return ((tropicalDeg - ayanamsa) % 360 + 360) % 360;
}

const sidereal = {};
for (const [name, deg] of Object.entries(tropicalPositions)) {
  sidereal[name] = toSidereal(deg);
}

// Rahu (mean ascending node) — standard formula
const rahuTropical = ((125.04452 - 1934.136261 * (T)) % 360 + 360) % 360;
sidereal.rahu = toSidereal(rahuTropical);
sidereal.ketu = (sidereal.rahu + 180) % 360;

// Determine Rashi index (0-11) for each body
function getRashi(siderealDeg) {
  return Math.floor(siderealDeg / 30);
}

const rashis = {};
for (const [name, deg] of Object.entries(sidereal)) {
  rashis[name] = getRashi(deg);
}

console.log('Sidereal positions (degrees):');
for (const [name, deg] of Object.entries(sidereal)) {
  console.log(`  ${name}: ${deg.toFixed(2)}° (${signMeta[getRashi(deg)].en})`);
}

// ── 4. Compute Panchang ────────────────────────────────────────
// Tithi: based on Moon-Sun elongation (tropical, since it's relative)
const elongation = ((moonTropical - sunTropical) % 360 + 360) % 360;
const tithiIndex = Math.floor(elongation / 12);
const paksha = tithiIndex < 15 ? 'shukla' : 'krishna';
const tithiInPaksha = tithiIndex % 15;
const tithiName = tithiNames[tithiIndex];

// Nakshatra: based on sidereal Moon longitude
const nakshatraIndex = Math.floor(sidereal.moon / (360 / 27));
const nakshatraName = nakshatraNames[nakshatraIndex];

// Yoga: (sidereal Sun + sidereal Moon) / (360/27)
const yogaSum = (sidereal.sun + sidereal.moon) % 360;
const yogaIndex = Math.floor(yogaSum / (360 / 27));
const yogaName = yogaNames[yogaIndex];

// Karana: half-tithi
const karanaRaw = Math.floor(elongation / 6);
let karanaIndex;
if (karanaRaw === 0) karanaIndex = 10; // Kimstughna (fixed)
else if (karanaRaw >= 57) karanaIndex = 7 + (karanaRaw - 57); // Shakuni, Chatushpada, Nagava
else karanaIndex = (karanaRaw - 1) % 7; // Rotating: Bava through Vishti
const karanaName = karanaNames[karanaIndex];

// Var (day of week)
const varIndex = now.getUTCDay();
const varName = varNames[varIndex];

const panchang = {
  tithi: {
    en: `${pakshaNames[paksha].en} ${tithiName.en}`,
    hi: `${pakshaNames[paksha].hi} ${tithiName.hi}`,
  },
  nakshatra: { en: nakshatraName.en, hi: nakshatraName.hi },
  yoga: { en: yogaName.en, hi: yogaName.hi },
  karana: { en: karanaName.en, hi: karanaName.hi },
  var: { en: varName.en, hi: varName.hi },
};

console.log(`Panchang: ${panchang.tithi.en}, ${panchang.nakshatra.en}, ${panchang.yoga.en}`);

// ── 5. Generate guidance for each sign ─────────────────────────
// Day-based seed for template variant selection (changes daily)
const daySeed = year * 10000 + month * 100 + day;

// For each sign, determine house positions and generate text
const signsOutput = signMeta.map((sign, signIdx) => {
  // Moon's house from this sign (1-based)
  const moonHouse = ((rashis.moon - signIdx + 12) % 12) + 1;

  // Compute house positions for all planets from this sign
  const planetHouses = {};
  for (const planet of ['sun', 'mars', 'mercury', 'jupiter', 'venus', 'saturn', 'rahu', 'ketu']) {
    planetHouses[planet] = ((rashis[planet] - signIdx + 12) % 12) + 1;
  }

  // Find the "dominant" planet influence (prioritize slow, impactful planets)
  // Priority: Jupiter > Saturn > Mars > Venus > Mercury > Sun
  const priorityOrder = ['jupiter', 'saturn', 'mars', 'venus', 'mercury', 'sun'];
  let dominant = null;
  let dominantScore = -1;

  for (const p of priorityOrder) {
    const house = planetHouses[p];
    const nature = planetNature[p];
    // Score: impactful houses (1,4,5,7,9,10) get higher priority
    const impactful = [1, 4, 5, 7, 9, 10].includes(house);
    const score = impactful ? 2 : 1;
    if (score > dominantScore || (score === dominantScore && priorityOrder.indexOf(p) < priorityOrder.indexOf(dominant?.planet))) {
      dominantScore = score;
      let effectiveNature = nature;
      // Malefic planets in 3,6,11 give good results (viparita logic)
      if (nature === 'malefic' && [3, 6, 11].includes(house)) effectiveNature = 'benefic';
      // Benefic planets in 6,8,12 give mixed results
      if (nature === 'benefic' && [6, 8, 12].includes(house)) effectiveNature = 'neutral';

      dominant = {
        planet: p,
        house,
        nature: effectiveNature,
        name: planetNames[p],
      };
    }
  }

  // Overall score: count benefic vs malefic influences in key houses
  let beneficCount = 0;
  let maleficCount = 0;
  for (const p of Object.keys(planetHouses)) {
    const house = planetHouses[p];
    const nature = planetNature[p];
    if (nature === 'benefic' && beneficHouses.includes(house)) beneficCount++;
    if (nature === 'malefic' && maleficHouses.includes(house)) maleficCount++;
    // Malefic in upachaya (3,6,10,11) is good
    if (nature === 'malefic' && [3, 6, 10, 11].includes(house)) beneficCount++;
  }

  let tone = 'mixed';
  if (beneficCount >= maleficCount + 2) tone = 'positive';
  else if (maleficCount >= beneficCount + 2) tone = 'challenging';

  // Probability: 60-95 range based on benefic/malefic balance
  const rawProb = 75 + (beneficCount - maleficCount) * 4;
  const probability = Math.max(60, Math.min(95, rawProb));

  // Generate guidance text
  const guidanceEn = buildGuidance('en', sign.en, moonHouse, dominant, tone, daySeed + signIdx);
  const guidanceHi = buildGuidance('hi', sign.hi, moonHouse, dominant, tone, daySeed + signIdx);

  // ── Category ratings (1-5) based on house placements ──
  // Career: 10th house strength
  // Love: 7th house strength
  // Health: 6th house strength (inverted - malefics here are good)
  // Finance: 2nd house strength
  function houseScore(targetHouse) {
    let score = 3; // baseline
    for (const [p, h] of Object.entries(planetHouses)) {
      if (h === targetHouse) {
        const n = planetNature[p];
        if (n === 'benefic') score += 1;
        else if (n === 'malefic') score -= 0.5;
      }
      // Aspect: planets in 7th from target house aspect it
      const aspectHouse = ((targetHouse + 6 - 1) % 12) + 1;
      if (h === aspectHouse) {
        const n = planetNature[p];
        if (n === 'benefic') score += 0.5;
        else if (n === 'malefic') score -= 0.3;
      }
    }
    // Moon in the target house boosts it
    if (moonHouse === targetHouse) score += 0.5;
    return Math.max(1, Math.min(5, Math.round(score)));
  }

  // Health: for 6th house, malefics are GOOD (they fight disease)
  function healthScore() {
    let score = 3;
    const h6 = 6;
    for (const [p, h] of Object.entries(planetHouses)) {
      if (h === h6) {
        const n = planetNature[p];
        if (n === 'malefic') score += 0.5; // malefics in 6th fight enemies/disease
        else if (n === 'benefic') score -= 0.3;
      }
      if (h === 1) { // planets in 1st house affect health directly
        const n = planetNature[p];
        if (n === 'benefic') score += 0.5;
        else if (n === 'malefic') score -= 0.5;
      }
    }
    if (moonHouse === 1 || moonHouse === 4) score += 0.5; // Moon in 1st or 4th good for wellbeing
    return Math.max(1, Math.min(5, Math.round(score)));
  }

  const ratings = {
    career: houseScore(10),
    love: houseScore(7),
    health: healthScore(),
    finance: houseScore(2),
  };

  // ── Lucky color: legitimately derived from sign's ruling planet ──
  const signRulers = ['Mars','Venus','Mercury','Moon','Sun','Mercury','Venus','Mars','Jupiter','Saturn','Saturn','Jupiter'];
  const colorMap = {
    Sun: { en: 'Gold', hi: 'सुनहरा' }, Moon: { en: 'White', hi: 'सफेद' },
    Mars: { en: 'Red', hi: 'लाल' }, Mercury: { en: 'Green', hi: 'हरा' },
    Jupiter: { en: 'Yellow', hi: 'पीला' }, Venus: { en: 'Pink', hi: 'गुलाबी' },
    Saturn: { en: 'Blue', hi: 'नीला' },
  };
  const ruler = signRulers[signIdx];
  const luckyColor = colorMap[ruler] || { en: 'White', hi: 'सफेद' };

  return {
    id: sign.id,
    guidance: { en: guidanceEn, hi: guidanceHi },
    probability,
    ratings,
    luckyColor,
  };
});

// ── 6. Write output JSON ───────────────────────────────────────
const output = {
  date: dateStr,
  panchang,
  signs: signsOutput,
};

writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8');
console.log(`\nWritten to ${OUTPUT_PATH}`);
console.log('Done!');
