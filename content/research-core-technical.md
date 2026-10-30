# Core technical expansion review — October 29, 2026

Canonical deliverables: `expansion-core-technical.json` (310 cards) and `expansion-human-night.json` (60 cards). All rows carry stable IDs, a source title with chapter/section, and an HTTPS fact-check URL. The existing cards.js was read to identify assigned-category coverage; source was not edited by this content worker.

## Coverage and counts

- Systems: SYS-021–100, 80. Piston induction, ignition, cooling, lubrication, fuel delivery, controls, gear/brakes, electrical architecture, instruments, and avionics integration. Turboprop-specific engine/propeller operating detail was left to the new turboprop category.
- Aerodynamics: AD-051–100, 50. Stability/control applications, airflow and surface contamination, stall/spin distinctions, energy management, takeoff/landing technique, and commercial maneuvers.
- Performance: PF-041–075, 35. Distinct loading calculations and accounting errors, climb gradients, declared distances, chart assumptions, landing energy, and fuel/range interpretation.
- Navigation: NAV-021–075, 55. Coordinate/unit/time errors, pilotage and route management, radio-navigation interpretation, and GPS operational checks.
- Communications: COM-021–060, 40. Transponder phraseology, clearance interpretation, handoffs, emergency/fuel communication, and practical requests/reports.
- Airspace/charts/airports: AS-051–100, 50. Boundary interpretation, airport information, signs/markings/lighting, surface protections, and arrival planning.
- Human factors: HF-021–060, 40. Oxygen physiology and equipment, medication/illness decisions, sleep quality, vision/scanning, and stress/noise effects.
- Night: NGT-021–040, 20. Darkness-specific departure, route, weather, taxi, airport identification, passenger briefing, and landing decisions.

## Primary references consulted and mapped

- FAA PHAK publication index and its current chapter organization: https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak
- FAA Airplane Flying Handbook publication index and current chapter organization: https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook
- FAA AIM radio communication: https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html
- FAA AIM airport operations: https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html
- FAA AIM airport signs/markings: https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html
- FAA AIM airport lighting: https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html
- FAA AIM navigation aids: https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html
- FAA AIM RNAV/PBN: https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html
- FAA AIM controlled airspace: https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html
- FAA AIM fitness for flight: https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html
- FAA CAMI Fatigue in Aviation: https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Fatigue_Aviation.pdf
- FAA CAMI Hypoxia: https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/hypoxia.pdf
- FAA CAMI Pilot Vision: https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Pilot_Vision.pdf
- FAA Chart Supplement: https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/
- FAA AME pharmaceuticals reference: https://www.faa.gov/ame_guide/pharm

The web check covered publication availability, chapter organization, and rendered AIM/CAMI text/excerpts. It was not a page-by-page re-reading of every full handbook PDF. Handbook links intentionally lead to the official index; source text names the chapter and subject. For installed equipment, generic principles are deliberately separated from the aircraft-specific POH/AFM procedure. Source labels were individually corrected where a broad initial grouping crossed chapters (e.g. instruments vs electrical systems, LAHSO vs radio technique, transponders vs radio technique).

## Repetition and trivia review

All assigned legacy questions were read; their original counts/IDs are retained for root integration. No removal is recommended purely because two questions address related subject matter. Examples retained as different learning objectives: Vx/Vy vs gradient/rate; clearway vs stopway; Class D vs Class E dashed boundaries; eights-on-pylons pivotal altitude vs its wind application. None is an exact question duplicate. A lexical similarity scan across these 370 additions and the 915-card baseline found only related pairs, not verbatim duplicates.

Specific new-content changes made during review:

- SYS-097 changed from stuck-microphone troubleshooting to squelch function because COM already addresses microphone blockage.
- SYS-100 changed from another manual-supplement question to autopilot preflight verification, avoiding repetition of legacy SYS-020.
- NGT-033 and NGT-034 replaced two additional flashlight questions because legacy NGT-012 already covers extra lighting equipment. Replacements address night taxi stopping distance and weather trends.
- COM-056 LAHSO now points to AIM airport operations; COM-021–023 point to transponder operation.
- Medical cards avoid individualized clearance advice, invented waiting periods, or medication half-life shortcuts.

Application cards ask for a meaningful decision or interpretation, not just a change of aircraft name around one repeated answer. Examples include loading removal directions, route-entry uncertainty, runway-light failure, fuel-call priority, unexpected fuel loss after tank selection, and coordinate-format verification. Detailed aircraft values, arbitrary numerical tolerances, and historical trivia were excluded. Generic systems answers explicitly defer equipment-specific switches, timing, limitations, and abnormal procedures to the applicable manual.

Validation passed: 310 +60 counts, all 370 IDs unique, all normalized questions unique within the deliverables, and all required source fields present. Root must run the combined cross-category audit after integrating all workers’ additions, since concurrent new-category content can introduce overlaps not present in the baseline.

## Independent-review changes completed

An independent worker read all 310 +60 and identified cross-batch overlap risks. Replaced nine objectives while preserving their IDs and category counts: SYS-033 now cold-oil viscosity; SYS-046 carburetor accelerator pump; SYS-058 differential ailerons; PF-056 cruise-climb tradeoff; NAV-034 visual handrails; AS-080 LAHSO available distance; HF-031 cannula capability; HF-054 physiological visual dimming under load; NGT-021 windscreen glare. These replace overlaps with oil-loss emergencies, ramp fuel-settling/control-lock/oxygen handling, numerical IFR-gradient examples, Coriolis explanation, and a second night-departure briefing. Shadow-as-position and helipad-as-runway questions were removed as low value. AD-057 now specifies true airspeed so its air-density variable is unambiguous. SYS-081–090 explicitly cite PHAK chapter 8; electrical and landing-gear questions cite chapter 7. Canonical JSON incorporates all of these changes.
