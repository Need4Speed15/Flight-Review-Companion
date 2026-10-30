# New operational categories — 29 October 2026

Canonical additions: `expansion-new-operations.json` (370 cards) and `expansion-risk-mountain.json` (70 cards). All have stable IDs, category, question, answer, source title/topic, and HTTPS source URL.

## Coverage

- Part 135: 150 cards, P135-001–150. Applicability, lawful operational control, manuals, qualification records, loading, operational rules, crew composition, equipment, weather, fuel, performance, fatigue, checks/training, maintenance, and dangerous-goods/HAA applicability.
- International/oceanic: 120 cards, INTL-001–120. State/regional publications, permissions, crew preparation, independent long-range navigation, CPDLC/ADS-C/HF, PBCS, flight-planning and diversion resources, master document/coordinate checks, procedural separation, monitoring, contingencies, and rescue.
- Turboprop: 100 cards, TP-001–100. Architecture, torque/temperature, controls, governing, feathering and NTS, beta/reverse, starting, checks, operating profiles, engine-out control/performance, power limits, protection, trend monitoring, and ground hazards. These are principles, not a type-specific checklist.
- Risk: 40 additions, RM-021–060. Distinct decision mechanisms, concrete controls, uncertainty, communication, interruption management, debriefing, and practical application.
- Mountain: 30 additions, MTN-021–050. Ridge-height versus valley weather, wind and wave cues, terrain identification, escape/performance decisions, airfield assessment, light/visibility, altitude physiology, and survival preparation.

## Primary sources checked

- Current [14 CFR Part 135](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-135), eCFR showing currency through 27 October 2026. Regulatory cards link to individual sections. Checked individual excerpts for key numeric rules including 135.99, .101, .105, .243, .245, .247, .267, .293, .297, .223, .225, and .181. Cross-checked section headings for equipment, maintenance, operational information, and training references; corrected draft mappings such as 135.97, .145, .154, .183, .331, .439, and .443.
- [FAA AC 91-70D](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf), dated 3 April 2025: chapters 2–7 and definitions. This is guidance, not a universal clearance or standalone regulation. Exact contingency offsets, reporting thresholds, regional boundaries, and authorization numbers are intentionally not taught from memory as universal values. Current regional AIPs/NOTAMs and approvals control.
- [ICAO NAT Doc 007, V.2026-1](https://www.icao.int/sites/default/files/EURNAT/Documents/EUR%20and%20Nat%20Docs/NAT%20Documents/NAT%20Documents/NAT%20Doc%20007/NAT-Doc-007-EN-Edition-V.2026-1-Amd-0.pdf), applicable 19 March 2026, and [Transport Canada AC 700-063 Issue 04](https://tc.canada.ca/en/aviation/reference-centre/advisory-circulars/advisory-circular-ac-no-700-063), effective 25 August 2026, used to check that regional authorizations and procedures evolve. Canadian special-authorization conditions are not represented as U.S. rules.
- [FAA Airplane Flying Handbook, chapter 15](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf), listed on the FAA's current handbook page. The web extractor cannot render the 12 MB chapter in full; source discovery/excerpts confirmed turbine starts, power limiting, beta/governing, and takeoff-profile discussion. Generic system principles also checked against FAA AMT Powerplant propeller material, manufacturer PT6 free-turbine descriptions, and the FAA NTS case below. Aircraft-specific numerical limits are deliberately omitted.
- [FAA Lessons Learned: Fairchild SA227](https://www.faa.gov/lessons_learned/small_airplane/accidents/C-FFZN) and [Transport Canada NTS safety alert](https://tc.canada.ca/en/aviation/reference-centre/civil-aviation-safety-alerts/issue-02-negative-torque-sensing-system-nts-civil-aviation-safety-alerts-casa-no-2014-04): NTS drag reduction must not be confused with full automatic feathering.
- [FAA Risk Management Handbook, FAA-H-8083-2A](https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf), listed by FAA as its risk-management handbook.
- [FAA Tips on Mountain Flying](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf), published 1999 and still listed by FAA. Used for enduring principles, not its dated illustrative horsepower, experience, or weather thresholds. Modern AFM, weather, legal requirements, and local training control actual operation.

## Review and limits

Read existing category/questions before authoring and tested normalized new questions against the existing database: no exact matches. New subjects intentionally avoid another round of PAVE/IMSAFE/DECIDE acronym questions, ordinary VFR navigation definitions, Part 121 dispatch-rule copies, and turbine hot/hung-start definitions already present.

Reviewed existing RM-001–020 and MTN-001–020: their topics are relevant and no obscure historical or component-trivia questions warrant removal. New cards extend those foundations with different mechanisms and decisions. Some application cards intentionally use a previously introduced principle in a new operational context; the combined semantic audit should check that the context actually changes the learning objective.

Self-review corrected wrong section labels and removed eight late Part 135 scenario variants that repeated earlier learning objectives. Count checks: 150/120/100 and 40/30. Card-specific legal thresholds include qualification and applicable exceptions; no claim that flashcards alone confer operational approval, mountain qualification, or aircraft-type proficiency.

Independent review corrected P135-022 operational control to 135.77, P135-141 wet-runway landing to 135.385, and narrowed P135-149 to HAA preflight risk analysis under 135.617. These corrections are in the canonical JSON.

A further semantic review replaced six repeated or meta-training cards without changing counts: INTL-015 (unsafe airborne alignment), INTL-069 (RNP alert-setting consistency), INTL-117 (GNE classification is not a tolerance), INTL-118 (ECON/LRC versus fixed Mach), TP-064 (unfeathering accumulator), and TP-099 (blade angle versus aerodynamic angle of attack). Each replacement has a precise FAA section/topic reference; the two propeller replacements use FAA AFH chapter 13 and AMT Powerplant chapter 7 respectively.
