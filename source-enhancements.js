/* Load after cards.js. Stable IDs and original citations are preserved. */
(() => {
  'use strict';
  if (window.FLIGHT_REVIEW_SOURCE_ENHANCEMENTS) return;
  const cards = window.FLIGHT_REVIEW_CARDS;
  const categories = window.FLIGHT_REVIEW_CATEGORIES;
  if (!Array.isArray(cards) || !Array.isArray(categories)) return;
  const reviewDate = '2026-10-29';
  const phakRoot = 'https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/';
  const phakChapters = {
    1: 'chapter-1-introduction-flying', 2: 'chapter-2-aeronautical-decision-making',
    3: 'chapter-3-aircraft-construction', 4: 'chapter-4-principles-flight',
    5: 'chapter-5-aerodynamics-flight', 6: 'chapter-6-flight-controls',
    7: 'chapter-7-aircraft-systems', 8: 'chapter-8-flight-instruments',
    9: 'chapter-9-flight-manuals-and-other-documents', 10: 'chapter-10-weight-and-balance',
    11: 'chapter-11-aircraft-performance', 12: 'chapter-12-weather-theory',
    13: 'chapter-13-aviation-weather-services', 14: 'chapter-14-airport-operations',
    15: 'chapter-15-airspace', 16: 'chapter-16-navigation', 17: 'chapter-17-aeromedical-factors'
  };
  const phak = chapter => phakRoot + phakChapters[chapter];
  const afh = chapter => 'https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/' + String(chapter + 1).padStart(2, '0') + '_afh_ch' + chapter + '.pdf';
  const aim = (chapter, section) => `https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap${chapter}_section_${section}.html`;

  // Only the citation text drives inference. A question's keywords alone do not
  // justify changing its source. Already-specific URLs are left intact.
  function improvedReference(card) {
    const url = card.sourceUrl || '';
    const source = card.source || '';
    const part = url.match(/ecfr\.gov\/current\/title-14\/.*\/part-(\d+)\/?$/);
    if (part) {
      const sections = [...new Set((source.match(/\b\d{1,3}\.\d+\b/g) || []).filter(s => s.split('.')[0] === part[1]))];
      if (sections.length) return { url: 'https://www.ecfr.gov/current/title-14/section-' + sections[0], additional: sections.slice(1).map(s => ({ title: '14 CFR ' + s, url: 'https://www.ecfr.gov/current/title-14/section-' + s })) };
    }
    const isHandbookRoot = /faa\.gov\/regulations_policies\/handbooks_manuals\/aviation\/?$/.test(url);
    const isPhakRoot = /\/aviation\/phak\/?$/.test(url);
    const isAfhRoot = /\/aviation\/airplane_handbook\/?$/.test(url);
    if (isHandbookRoot || isPhakRoot || isAfhRoot) {
      const chapter = source.match(/(?:chapter|ch\.)\s*(\d+)/i);
      if (chapter) {
        const n = Number(chapter[1]);
        if (/PHAK|Pilot.?s Handbook of Aeronautical Knowledge/i.test(source) && phakChapters[n]) return { url: phak(n), edition: 'FAA-H-8083-25C; chapter ' + n };
        if (/Airplane Flying Handbook|\bAFH\b/i.test(source) && n >= 1 && n <= 18) return { url: afh(n), edition: 'FAA-H-8083-3C; chapter ' + n };
      }
      if (isAfhRoot || /Airplane Flying Handbook/.test(source) || (isHandbookRoot && /performance maneuvers/i.test(source))) {
        const topics = [[/jet.powered|jet airplanes/i,16],[/turboprop/i,15],[/emergenc/i,18],[/night/i,11],[/performance maneuvers|chandelle|steep turn|lazy eight|pylons|steep spiral/i,10],[/approach|landing/i,9],[/ground reference/i,7],[/takeoff/i,6],[/upset|spin|stall/i,5],[/energy management/i,4]];
        for (const [pattern, n] of topics) if (pattern.test(source)) return { url: afh(n), edition: 'FAA-H-8083-3C; chapter ' + n };
      }
      if (isHandbookRoot && /Instrument navigation/i.test(source)) return { url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook' };
      if (!isAfhRoot && !/Airplane Flying Handbook|\bAFH\b|Instrument (?:Flying|Procedures) Handbook|Risk Management Handbook/i.test(source)) {
        const topics = [[/weight.and.balance|loading|moment index|CG limits/i,10],[/performance|density altitude/i,11],[/aircraft systems/i,7],[/flight instruments/i,8],[/flight controls/i,6],[/aerodynamic|load factor/i,5],[/aeromedical|physiology/i,17],[/navigation|dead reckoning|pilotage/i,16],[/airport operations/i,14],[/airspace/i,15],[/weather theory/i,12],[/weather services/i,13],[/decision.making|hazardous attitudes/i,2]];
        for (const [pattern, n] of topics) if (pattern.test(source)) return { url: phak(n), edition: 'FAA-H-8083-25C; chapter ' + n };
      }
      if (isHandbookRoot && /Instrument Flying Handbook/i.test(source)) return { url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook' };
      if (isHandbookRoot && /Instrument Procedures Handbook/i.test(source)) return { url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook' };
    }
    if (/\/aim_html\/?$/.test(url)) {
      const explicit = source.match(/\b([1-8])-([1-6])(?:-\d+)?\b/);
      if (explicit) return { url: aim(explicit[1], explicit[2]) };
      const topics = [[/airport markings|airport signs|runway markings|taxiway signs|holding position/i,2,3],[/airport lighting|approach lights|PAPI|VASI/i,2,1],[/wake turbulence/i,7,4],[/weather services|METAR|TAF|PIREP|AIRMET|SIGMET/i,7,1],[/radio communications|radio phraseology|call signs/i,4,2],[/ATC clearance|clearance limits/i,4,4],[/departure procedure/i,5,2],[/holding procedure|holding pattern/i,5,3],[/approach procedure|approach clearance|missed approach|circling|procedure turn/i,5,4]];
      for (const [pattern, ch, sec] of topics) if (pattern.test(source)) return { url: aim(ch, sec) };
    }
    return null;
  }

  function editionFor(card) {
    const source = card.source || '';
    if (/ecfr\.gov/.test(card.sourceUrl)) return 'eCFR live text; check current effective date';
    if (/aim_html/.test(card.sourceUrl)) return 'FAA AIM online; check current effective date';
    const publication = source.match(/FAA-H-\d+-\d+[A-Z]?/i);
    if (publication) return publication[0];
    if (/PHAK|Pilot.?s Handbook of Aeronautical Knowledge/.test(source)) return 'FAA-H-8083-25C';
    if (/Airplane Flying Handbook/.test(source)) return 'FAA-H-8083-3C';
    if (/Rev\.?\s*8|CTLS LSA AOI/.test(source)) return 'CTLS AOI Rev. 8 (2009 archive); aircraft applicability unverified';
    return 'Edition not recorded; confirm at source';
  }

  let updatedLinks = 0;
  for (const card of cards) {
    const improved = improvedReference(card);
    if (improved && improved.url !== card.sourceUrl) {
      card.sourceOriginalUrl = card.sourceUrl;
      card.sourceUrl = improved.url;
      if (improved.additional?.length) card.additionalSourceLinks = improved.additional;
      updatedLinks++;
    }
    card.sourceMetadata = {
      edition: improved?.edition || editionFor(card),
      reviewedAt: null,
      verificationStatus: 'Individual answer review date not recorded',
      ...(improved ? { linkUpdatedAt: reviewDate } : {})
    };
  }

  categories.push({ id: 'practical-scenarios', name: 'Practical Scenarios', description: 'Read a sign, interpret weather, work a calculation, and make a decision using supplied training examples.' });
  const scenarios = [
    {
      id: 'PRACTICE-001', question: 'At a towered airport, you are told “Runway 18, taxi via Bravo, hold short Runway 18.” You approach two solid and two dashed yellow lines, solid lines nearest you, beside a red 18–36 sign. What do you do?',
      answer: 'Stop with every part of the aircraft before the holding-position marking. The red sign identifies the runway; the solid side marks where to hold. A taxi instruction is not runway-entry permission. Obtain the appropriate explicit clearance before crossing.',
      source: 'FAA AIM 2-3-5 and 2-3-8 — Holding Position Markings and Mandatory Instruction Signs', sourceUrl: aim(2,3), image: 'assets/practice/holding-position.svg', imageAlt: 'Training diagram: aircraft approaches the solid side of four yellow holding lines. A red runway sign reads 18–36. Runway is beyond the dashed side.'
    },
    {
      id: 'PRACTICE-002', question: 'Your taxi clearance is via Alpha, then Bravo. At a junction, a black sign with a yellow A sits beside a yellow sign with a black left arrow and B. What does each sign tell you?',
      answer: 'The black A location sign identifies your present taxiway, Alpha. The yellow direction sign points left toward Bravo. Match the turn to your clearance and airport diagram. Direction signs do not authorize entry onto a runway or a different route.',
      source: 'FAA AIM 2-3-9 and 2-3-10 — Location Signs and Direction Signs', sourceUrl: aim(2,3), image: 'assets/practice/taxiway-signs.svg', imageAlt: 'Training signs: yellow left arrow and B on yellow direction panel, next to a yellow-bordered black location panel marked A.'
    },
    {
      id: 'PRACTICE-003', question: 'Decode this fictional observation: METAR KZZZ 291755Z 22012G20KT 3SM -RA BKN015 OVC030 18/16 A2992. What are the ceiling, visibility, wind, and precipitation?',
      answer: 'Ceiling: 1,500 ft AGL, the lowest broken layer. Visibility: 3 statute miles. Wind: from 220° true at 12 kt, gusting 20 kt. Precipitation: light rain. This is an observation at 1755Z on the 29th, not a forecast; review changing conditions before using it in a flight decision.',
      source: 'NOAA Aviation Weather Center — METAR decoding, Data Help', sourceUrl: 'https://aviationweather.gov/help/data/#metar', image: 'assets/practice/metar.svg', imageAlt: 'Fictional METAR KZZZ 291755Z, wind 22012G20KT, visibility 3SM, light rain, BKN015 and OVC030, temperature/dewpoint 18/16, altimeter A2992.'
    },
    {
      id: 'PRACTICE-004', question: 'This fictional TAF reads: TAF KZZZ 291730Z 2918/3018 22010KT P6SM SCT030 FM292000 24015G25KT 3SM RA BKN012. For arrival at 2030Z on the 29th, which conditions apply?',
      answer: 'Use the FM292000 group: from 2000Z on the 29th, wind 240° true at 15 kt gusting 25, visibility 3 SM, rain, and a broken ceiling at 1,200 ft AGL. The FM group replaces the earlier prevailing conditions; do not carry forward the earlier scattered clouds or P6SM visibility.',
      source: 'NOAA Aviation Weather Center — TAF decoding and FM groups, Data Help', sourceUrl: 'https://aviationweather.gov/help/data/#taf', image: 'assets/practice/taf-timeline.svg', imageAlt: 'Fictional TAF timeline shows initial conditions beginning 1800Z and a new FM group beginning 2000Z. Arrival at 2030Z falls after the change.'
    },
    {
      id: 'PRACTICE-005', question: 'For a fictional loading exercise, use: aircraft plus fuel 1,600 lb at arm 40 in; front occupants 300 lb at 37 in; rear occupants 200 lb at 73 in; baggage 50 lb at 95 in. Example limits are 2,300 lb and CG 41–47 in at this weight. What are the loaded weight and CG, and do they meet those two limits?',
      answer: 'Loaded weight is 2,150 lb. Moments are 64,000 + 11,100 + 14,600 + 4,750 = 94,450 lb-in. CG = 94,450 ÷ 2,150 = 43.93 in aft of datum. Both supplied limits are met. This example already includes fuel in the first line; actual aircraft loading also requires all applicable compartment, fuel, and operating limits.',
      steps: ['Multiply each weight by its arm to find its moment.', 'Add weights (2,150 lb) and moments (94,450 lb-in).', 'Divide total moment by total weight: 43.93 in.', 'Compare weight and CG against the supplied envelope.'],
      source: 'FAA-H-8083-25C, PHAK chapter 10 — Computational Method; original fictional exercise data', sourceUrl: phak(10), image: 'assets/practice/loading-table.svg', imageAlt: 'Fictional loading table: aircraft plus fuel 1600 lb at 40 in; front 300 at 37; rear 200 at 73; baggage 50 at 95. Limits 2300 lb and CG 41–47 in.'
    },
    {
      id: 'PRACTICE-006', question: 'A fictional airplane weighs 2,000 lb with CG at 45.0 in. You move an already-loaded 40 lb bag from arm 100 in to arm 70 in. What is the new CG, and does total weight change?',
      answer: 'Moment changes by 40 × (70 − 100) = −1,200 lb-in. CG moves −1,200 ÷ 2,000 = −0.6 in, so the new CG is 44.4 in. It moves forward; total weight stays 2,000 lb. Check the new compartment and CG limits before accepting the move.',
      steps: ['Arm change: 70 − 100 = −30 in.', 'Moment change: 40 × −30 = −1,200 lb-in.', 'CG change: −1,200 ÷ 2,000 = −0.6 in.', 'New CG: 45.0 − 0.6 = 44.4 in.'],
      source: 'FAA-H-8083-25C, PHAK chapter 10 — Shifting Weight; original fictional exercise data', sourceUrl: phak(10), image: 'assets/practice/baggage-shift.svg', imageAlt: 'Fictional baggage shift: a 40 lb bag moves forward from arm 100 in to arm 70 in. Total aircraft weight 2000 lb and original CG 45.0 in.'
    },
    {
      id: 'PRACTICE-007', question: 'A fictional 180 NM leg has groundspeed 120 kt and fuel flow 8 US gal/hour. You start the leg with 22 usable gallons and choose a 6-gallon arrival reserve for this exercise. What are flight time, trip fuel, arrival fuel, and fuel above that reserve?',
      answer: 'Time = 180 ÷ 120 = 1.5 hours (90 minutes). Trip fuel = 1.5 × 8 = 12 gallons. Arrival fuel = 22 − 12 = 10 gallons, or 4 gallons above the chosen 6-gallon reserve. The exercise reserve is a planning input, not a universal legal reserve; real planning includes applicable rules and allowances for delays or changing conditions.',
      steps: ['Distance ÷ groundspeed = 1.5 hours.', 'Hours × fuel flow = 12 gallons.', 'Usable fuel − trip fuel = 10 gallons.', 'Arrival fuel − selected reserve = 4 gallons.'],
      source: 'FAA-H-8083-25C, PHAK chapter 16 — Time, Speed, Distance and Fuel Consumption; original fictional exercise data', sourceUrl: phak(16), image: 'assets/practice/leg-fuel.svg', imageAlt: 'Fictional route leg: 180 NM at 120 kt, fuel flow 8 US gallons per hour, starting usable fuel 22 gallons, selected arrival reserve 6 gallons.'
    },
    {
      id: 'PRACTICE-008', question: 'A fictional table gives takeoff distance over a 50 ft obstacle: 1,400 ft at density altitude 2,000 ft and 1,800 ft at 4,000 ft. This exercise permits linear interpolation. At 3,000 ft density altitude, add a chosen 25% planning margin. How does the result compare with 2,100 ft of available runway?',
      answer: 'At the midpoint, interpolate to 1,600 ft. Add the chosen 25%: 1,600 × 1.25 = 2,000 ft, leaving only 100 ft against the supplied 2,100 ft. This arithmetic alone is not a takeoff decision: the example assumes identical weight, wind, surface, configuration, and technique. Use the actual approved data, obstacles, conditions, and applicable margins.',
      steps: ['3,000 ft is halfway between the two table rows.', '1,400 + 0.5 × (1,800 − 1,400) = 1,600 ft.', '1,600 × 1.25 = 2,000 ft.', '2,100 − 2,000 = 100 ft remaining.'],
      source: 'FAA-H-8083-25C, PHAK chapter 11 — Performance Charts and Interpolation; original fictional exercise data and chosen margin', sourceUrl: phak(11), image: 'assets/practice/performance-table.svg', imageAlt: 'Fictional table: density altitude 2000 ft gives takeoff distance 1400 ft; 4000 ft gives 1800 ft. Evaluate 3000 ft, add chosen 25 percent margin, compare with runway length 2100 ft.'
    },
    {
      id: 'PRACTICE-009', question: 'On this fictional LNAV approach, the minimum altitude before STEP is 1,300 ft MSL; after STEP, MDA is 900 ft MSL. You are still one mile before STEP and an advisory glidepath would take you below 1,300 ft. May you follow it down now?',
      answer: 'No. Honor the 1,300 ft restriction until passing STEP; advisory vertical guidance does not cancel a stepdown restriction when using LNAV/MDA minima. After STEP, observe the 900 ft MDA and all other approach requirements. A real briefing must also cover course, fix identification, visibility, missed approach point, and missed approach instructions.',
      source: 'FAA AIM 5-4-5 — IAP altitude restrictions and advisory vertical descent angle; fictional schematic only', sourceUrl: aim(5,4), image: 'assets/practice/approach-stepdown.svg', imageAlt: 'Training-only LNAV profile: aircraft one mile before STEP must remain at or above 1300 ft MSL until STEP, then 900 ft MSL MDA applies toward MAP. Not to scale or for navigation.'
    },
    {
      id: 'PRACTICE-010', question: 'For a Part 91 airplane IFR flight to an airport with a published standard instrument approach, ETA is 2000Z. The forecast is ceiling 3,000 ft AGL and visibility 5 SM at ETA, but ceiling 1,800 ft AGL from 2030–2100Z. Does the “1-2-3” exception let you omit an alternate?',
      answer: 'No. The exception requires the forecast ceiling to remain at least 2,000 ft above airport elevation and visibility at least 3 SM throughout the hour before through the hour after ETA. The 1,800 ft ceiling within that window fails the ceiling test, so an alternate is required. Favorable weather exactly at ETA is not enough.',
      source: '14 CFR 91.169(b)(1)–(2)(i) — IFR flight plan alternate-airport exception; fictional forecast timeline', sourceUrl: 'https://www.ecfr.gov/current/title-14/section-91.169', image: 'assets/practice/alternate-window.svg', imageAlt: 'Fictional alternate-planning window from 1900Z to 2100Z around 2000Z ETA. Ceiling 3000 ft at ETA falls to 1800 ft at 2030Z, inside the required window; visibility stays 5 SM.'
    }
  ];
  for (const card of scenarios) {
    card.category = 'practical-scenarios';
    card.sourceMetadata = {
      edition: /aviationweather\.gov/.test(card.sourceUrl) ? 'NOAA AWC online data guide' : editionFor(card),
      reviewedAt: reviewDate,
      verificationStatus: ['PRACTICE-007', 'PRACTICE-008'].includes(card.id)
        ? 'Original exercise and arithmetic reviewed; FAA chapter reference provided'
        : 'Primary reference checked; original training example and arithmetic reviewed'
    };
    cards.push(card);
  }
  if (Array.isArray(window.FLIGHT_REVIEW_SOURCES) && !window.FLIGHT_REVIEW_SOURCES.some(source => source.url === 'https://aviationweather.gov/help/data/')) {
    window.FLIGHT_REVIEW_SOURCES.push({ title: 'NOAA Aviation Weather Center — Data Help', url: 'https://aviationweather.gov/help/data/', note: 'Official METAR and TAF decoding reference. Practice reports in this library are fictional, not weather for flight planning.' });
  }
  window.FLIGHT_REVIEW_SOURCE_ENHANCEMENTS = Object.freeze({ date: reviewDate, updatedLinks, addedCards: scenarios.length, category: 'practical-scenarios' });
})();
