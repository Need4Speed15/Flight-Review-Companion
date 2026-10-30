# Source references and practical exercises — 2026-10-29

The post-content overlay `source-enhancements.js` loads after `cards.js`. It preserves existing card IDs, wording, and original citation labels. It adds ten original practice cards with ten SVG diagrams, producing **2,245 cards in 25 categories**. The source directory also gains the NOAA Aviation Weather Center decoding guide.

## Citation changes

The overlay improves **737 existing links**: 195 eCFR section links, 85 AIM section links, 303 PHAK chapter links, 152 Airplane Flying Handbook chapter links, and two links from the general handbook index to the Instrument Flying Handbook.

- eCFR links use section numbers already present in the citation. The first section becomes the main link; other cited sections are retained in `additionalSourceLinks`. No section-bearing Part 61 or Part 91 root citations remain after loading the overlay.
- Explicit FAA handbook chapters and AIM paragraph references resolve to the corresponding chapter or section. A limited set of unmistakable topic labels also resolves to a relevant chapter; ambiguous citations retain their original link.
- `sourceOriginalUrl` preserves the prior URL whenever the overlay changes it.
- A more direct link is an improvement in traceability, **not a new substantive audit of the existing answer**. All 2,235 existing cards receive `reviewedAt: null` and “Individual answer review date not recorded.” The previous project-wide audit is not presented as an invented per-card review date.

The chapter directory and edition labels were checked against the FAA's [PHAK directory](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) and [Airplane Flying Handbook directory](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook). PHAK references identify FAA-H-8083-25C; AFH references identify FAA-H-8083-3C. eCFR and AIM links are live references with a reminder to check the current effective date. Unidentified editions remain explicitly unrecorded.

## New exercises

All diagrams are original vector drawings labeled TRAINING ONLY. Numerical examples, weather station KZZZ, clearances, and approach geometry are fictional. No diagram is an operational chart. Each answer includes enough information to work without its image; every image has alternative text and SVG title/description.

| ID | Skill exercised | Reference |
| --- | --- | --- |
| PRACTICE-001 | Stop on the correct side of runway holding markings | [AIM 2-3](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html) |
| PRACTICE-002 | Distinguish taxiway location from direction signs | [AIM 2-3](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html) |
| PRACTICE-003 | Decode a synthetic METAR | [NOAA AWC METAR guide](https://aviationweather.gov/help/data/#metar) |
| PRACTICE-004 | Apply a TAF FM group at an arrival time | [NOAA AWC TAF guide](https://aviationweather.gov/help/data/#taf) |
| PRACTICE-005 | Calculate loaded weight and CG | [PHAK chapter 10](https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/chapter-10-weight-and-balance) |
| PRACTICE-006 | Calculate CG movement after shifting baggage | [PHAK chapter 10](https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/chapter-10-weight-and-balance) |
| PRACTICE-007 | Calculate time, trip fuel, arrival fuel, and margin | [PHAK chapter 16](https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/chapter-16-navigation) |
| PRACTICE-008 | Interpolate supplied performance data and apply a chosen margin | [PHAK chapter 11](https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/chapter-11-aircraft-performance) |
| PRACTICE-009 | Honor an LNAV stepdown restriction despite advisory vertical guidance | [AIM 5-4-5](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html) |
| PRACTICE-010 | Apply the full Part 91 alternate-planning forecast window | [14 CFR 91.169(b)](https://www.ecfr.gov/current/title-14/section-91.169) |

The ten new exercises have an actual author-review date of 2026-10-29. Their metadata distinguishes primary-reference checks from the two original arithmetic exercises whose FAA chapter reference was provided without extracting the chapter PDF. The web reader could open those chapter landing pages, but their large PDFs exceeded its content limit; no claim of full-PDF inspection is made.

## Validation and integration contract

- `node --check source-enhancements.js` passes.
- Loading the base content and overlay yields 2,245 unique IDs and questions, 25 categories, and metadata on all 2,245 cards. Ten referenced SVG files exist and render successfully.
- Calculation checks: loaded CG 94,450 / 2,150 = 43.9302326 in; baggage shift −0.6 in to 44.4 in; leg 1.5 hours / 12 gallons / 10 gallons on arrival / 4 gallons above the chosen reserve; interpolated distance 1,600 ft × 1.25 = 2,000 ft, leaving 100 ft.
- All ten SVGs were rasterized together and visually inspected for clipped text, misleading labels, and overlap. Full questions, answers, and alt text remain necessary on small screens.
- The overlay is idempotent and exposes `window.FLIGHT_REVIEW_SOURCE_ENHANCEMENTS` with `date`, `updatedLinks`, `addedCards`, and `category`.
- Cards use existing fields plus `image` (relative SVG path), `imageAlt`, optional `steps` (string array), and `sourceMetadata` (`edition`, `reviewedAt`, `verificationStatus`, and optional `linkUpdatedAt`). Preserve those fields when generating hosted JSON, and copy `assets/practice` to the public asset root.

This update checks new example wording and arithmetic and improves existing references. It does not claim that every existing regulatory or aircraft-specific answer was newly verified, nor that the fictional examples authorize an actual flight.
