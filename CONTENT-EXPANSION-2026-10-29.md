# Coverage expansion and repetition review — October 29, 2026

## Result

2,235 cards in 24 categories: 1,320 additions to the 915-card bank. All 24 agreed category targets are enforced by `content/targets.json` and `content/build-database.cjs`. Every card has an answer, a named source, and an HTTPS fact-check link. New regulatory references generally lead to individual sections; handbook references identify the chapter/topic when the official index is the stable destination.

| Category | Final cards |
| --- | ---: |
| Part 121 Ops | 250 |
| Flight Review Requirements | 20 |
| Pilot Qualifications & Documents | 40 |
| Part 91 Operating Rules | 100 |
| Airworthiness & Aircraft Documents | 60 |
| Aircraft Systems & Avionics | 100 |
| Airspace, Charts & Airports | 100 |
| Weather | 150 |
| Navigation & Cross-Country Planning | 75 |
| Communications & ATC | 60 |
| Performance, Weight & Balance | 75 |
| Aerodynamics & Maneuvers | 100 |
| Aeromedical & Human Factors | 60 |
| Decision-Making & Risk | 60 |
| Night Operations | 40 |
| Mountain & High-Altitude Operations | 50 |
| Emergencies & Abnormals | 75 |
| Flight Design CTLS | 75 |
| Instrument / IFR Refresher | 200 |
| Part 135 / Charter Operations | 150 |
| International & Oceanic Operations | 120 |
| Turboprop & Propeller Operations | 100 |
| Ground Operations & Ramp Safety | 75 |
| Dangerous Goods & Cargo Safety | 100 |

## Editorial approach

Reviewed coverage and question/answer objectives across the original categories and additions. Kept useful foundations, then added operational applications, mechanisms, distinctions, and decision points. Avoided component-count trivia, aircraft-specific numerical procedures without the applicable manual, and numerous scenarios that merely change names or numbers around the same answer.

Preserved all legacy IDs. Eleven older cards were rewritten rather than deleted: FR005/009, AW021/022, CT001/002, IFR037/039/040/115/144. Their replacements separate debrief/preparation objectives, inspection substance/recordkeeping, aircraft-document applicability, failed-check decisions, post-maintenance testing, and instrument-approach applications.

Independent cross-batch review identified and replaced repeated objectives involving false glideslopes, minimum fuel, airline line checks, spare batteries, checklist reliance, engine identification, oceanic coordinate/master-document checks, physiological illusions, night departure planning, and several system/ramp overlaps. It also replaced low-value navigation-shadow and helipad questions. The relevant research notes document specific IDs and final replacements.

Automated checks reject duplicate normalized questions and IDs. Additional lexical question and answer similarity candidate lists support human review. Similar wording is retained when the learning objectives differ: Class C versus Class D, magenta versus blue chart boundaries, cold versus warm fronts, clearways versus stopways, CPDLC versus ADS-C, and flight time versus duty time. These are useful distinctions rather than interchangeable answers. Automated similarity is not a proof that every conceivable semantic overlap has been eliminated.

## Research and source checks

Primary references include current eCFR Parts 21, 39, 43, 61, 91, 117, 121 and 135; 49 CFR dangerous-goods rules; FAA AIM, PHAK, Airplane Flying Handbook, Instrument Flying Handbook and Aviation Weather Handbook 28B; FAA ACs 61-98E, 91-70D, 00-34B, 120-71B and 120-80B; ICAO/NAT publications; NASA ASRS and manufacturer safety publications.

Source-fit review corrected section mappings for several Part 135 and Part 121 topics, distinguished equipment-installation rules from operational response guidance, corrected instruments/radio/airport handbook chapters, and separated passenger dangerous-goods exceptions from cargo authorization. Regional oceanic requirements are not taught as one permanent universal rule. Generic turbine principles are not presented as a specific aircraft's approved checklist.

Read `content/research-*.md` and `content/review-cross-batch-airline-weather.md` for reference URLs, coverage, corrections and remaining limits. Full handbook PDFs were not all re-read page by page; available current official text, chapter organization, excerpts and targeted source checks support this editorial review. The bank is not an FAA-approved syllabus or a guarantee of proficiency.

CTLS additions use the manufacturer-hosted archived AF04300005 Rev.8 AOI. The earlier local PDF was no longer present. Current serial applicability, installed equipment, revisions, supplements and placards were not independently established. Existing numerical archive discrepancies remain identified. Use the actual aircraft's current documents for operation.

## Data and application validation

`node content/build-database.cjs` checks all category totals, 2,235 unique stable IDs, normalized question uniqueness, valid categories, complete source fields and HTTPS URLs, and unfinished-content markers. It regenerates `cards.js` and `dist/cards.js` from the canonical content files and records counts in `content/qa-summary.json`. JavaScript syntax and deployment-file parity are checked separately. URL syntax validation is not a claim that every external publisher will always keep a link available.

The original study, bookmark, removal-flag, backup, resume and Custom Study code remains unchanged. Categories and maximum selections are derived from the database. Browser interaction and visual checks accompany publication; the final handoff reports their result.
