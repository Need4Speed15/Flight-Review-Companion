# Airline, weather, IFR, ramp and dangerous-goods expansion

Prepared 2026-10-29. Output: `expansion-airline-weather.json` (325) and `expansion-emergencies.json` (65). No main database edits were made. Existing-card changes are supplied separately in `revisions-airline-weather.json` (5), preserving IDs.

## Coverage

- Ground/ramp 75: marshalling, towing, pushback handoffs, ingestion/propeller/rotor hazards, FOD, parking, servicing, electrical/oxygen/fuel hazards and weather interruptions.
- Dangerous goods 100: recognition, passenger exceptions versus cargo authorization, lithium batteries, mobility aids, dry ice, personal articles, classification, acceptance, pilot notification, loading/segregation, training and incident response. Definitions and numerical passenger exceptions are tied to the applicable regulation. Most cards address actions rather than table memorization.
- Part 121 50: checklists, cabin information, safety equipment, maintenance-program interfaces, training approvals, operations familiarization, charts, equipment interchange, release reassessment and reporting.
- IFR 50: advanced procedure capability/authorization, chart and navigator discrepancies, PRM, departure constraints, weather deviations, clearances and instrument/automation failures.
- Weather 50: observation limitations, product timing, uncertainty, vertical structure, icing/radar/satellite interpretation and changing-route decisions.
- Emergencies 65: forced-landing reach/energy/configuration, partial power, fuel/engine/fire indications, control and equipment failures, emergency coordination, evacuation and rescue. Aircraft-specific checklists control every immediate-action sequence; no universal throttle/mixture/fuel-switch recipe was introduced.

## Primary references consulted

- FAA AC 00-34B (2024), Aircraft Ground Handling, Servicing, and Marshalling: https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf . Supersedes 00-34A. This is guidance, not a new independent regulatory mandate.
- NASA ASRS CALLBACK 538, Ramp Safety Concerns: https://asrs.arc.nasa.gov/publications/callback/cb_538.html . Used as supporting hazard examples; the cards principally cite the FAA ground-handling AC.
- FAA PackSafe: https://www.faa.gov/hazmat/packsafe . Explicitly distinguishes FAA dangerous-goods safety rules from TSA security screening.
- Current eCFR 49 CFR 175.10, 175.30, 175.33, 175.75, 175.78; 172.101, 172.704; 171.15 and 171.16. Individual card links lead to sections. Passenger rules are not cargo permissions.
- FAA OperateSafe: https://www.faa.gov/hazmat/air_carriers . Carrier dangerous-goods program and OpSpec A055 requirements.
- FAA AC 120-80B, Firefighting of General and High-Energy In-Flight Fires: https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-80B.pdf . Source for battery overheating, cooling/monitoring, and aircraft-specific crew response.
- eCFR Part 121 individual sections linked by card. Specific checks of 121.315, .353, .354, .435, .453, .545, .549, .569 and .705 corrected draft source/subject mismatches. In particular .435 is operations familiarization, .569 is equipment interchange, and .549 contains charts and flashlight duties.
- FAA AIM current HTML, chapter 5 sections 2–4, chapter 4 section 4, chapter 7 section 3. TCAS operational responses cite the AIM rather than equipment-installation requirements.
- FAA Instrument Flying Handbook: https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook . Source for manual control, instrument cross-check and avionics failure applications.
- FAA Aviation Weather Handbook **FAA-H-8083-28B**: https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf . Current FAA product and theory reference. Existing AC00-6B references are historical and should be labeled accordingly in the source catalog; the current handbook should be the preferred link for weather verification.
- FAA Airplane Flying Handbook, chapter 18 Emergency Procedures: https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook . Chapter PDF exceeds the web tool's response-size limit; official chapter index is available. General decision guidance is supported; aircraft-specific switches, speeds, configuration and BRS envelope must be checked in the actual AFM/POH.

## Repetition and source audit

Reviewed existing weather/IFR/Part121 question lists and assigned existing emergency cards. Existing cards were not deleted or renumbered. Five proposed existing-card revisions separate duplicated interval/definition questions from distinct applications:

- IFR037 vs AW022: replace the repeated VOR interval with a failed dual-VOR check scenario.
- IFR039 vs AW019: replace the repeated 24-month interval with post-maintenance static-system testing.
- IFR040 vs AW020: replace the repeated transponder interval with data-correspondence testing after installation/maintenance.
- IFR115 vs IFR030: replace repeated VDP definition/use with a late-visual-reference decision.
- IFR144 vs WX015: replace repeated cold-air altitude error with correction/ATC coordination.

No assigned baseline questions were identified as obscure trivia requiring deletion. Some basic definitions are necessary foundations; manufacturer-specific Part121 cards remain clearly labeled in the existing bank. New additions avoid universal aircraft emergency action sequences and differentiate authorization, capability, equipment status and pilot judgment.

Local validation: exact requested counts; no duplicate IDs or normalized exact questions against the baseline 915; all additions have nonempty question, answer, source and HTTPS sourceUrl. Parent integration must also compare against the other expansion batches for cross-batch overlap and run final browser checks. These checks do not constitute aircraft-specific training or an official syllabus/proficiency endorsement.
