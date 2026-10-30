/* Curated study content. Keep IDs stable so saved bookmarks survive reordering. */
window.FLIGHT_REVIEW_CATEGORIES = [
  { id: 'part-121', name: 'Part 121 Ops', description: 'Airline dispatch, crew rules, jet systems, high-speed flight, and transport-airplane operations. Carrier SOPs and aircraft manuals control.', supplemental: true },
  { id: 'flight-review', name: 'Flight Review Requirements', description: 'Timing, content, endorsements, alternatives, and what satisfactory completion means.' },
  { id: 'pilot-docs', name: 'Pilot Qualifications & Documents', description: 'Privileges, personal documents, medical pathways, logging, and recent experience.' },
  { id: 'part-91', name: 'Part 91 Operating Rules', description: 'The everyday rules a pilot must be ready to find, explain, and apply.' },
  { id: 'airworthiness', name: 'Airworthiness & Aircraft Documents', description: 'Inspections, ADs, inoperative equipment, maintenance, and PIC responsibility.' },
  { id: 'systems', name: 'Aircraft Systems & Avionics', description: 'How aircraft systems work, how failures present, and how avionics support safe flight.' },
  { id: 'airspace', name: 'Airspace, Charts & Airports', description: 'Entry rules, weather minima, airport signs, runway safety, and special-use airspace.' },
  { id: 'weather', name: 'Weather', description: 'Reports, forecasts, hazards, density altitude, and practical go/no-go interpretation.' },
  { id: 'navigation', name: 'Navigation & Cross-Country Planning', description: 'Pilotage, dead reckoning, course calculations, diversions, and practical VFR planning.' },
  { id: 'communications', name: 'Communications & ATC', description: 'Clear radio work, ATC services, readbacks, light signals, and communication contingencies.' },
  { id: 'performance', name: 'Performance, Weight & Balance', description: 'Loading, margins, runway factors, and disciplined use of aircraft performance data.' },
  { id: 'aerodynamics', name: 'Aerodynamics & Maneuvers', description: 'Energy, stalls, load factor, slow flight, landings, and loss-of-control prevention.' },
  { id: 'human-factors', name: 'Aeromedical & Human Factors', description: 'Physiology, vision, illness, medication, fatigue, and recognition of pilot impairment.' },
  { id: 'adm', name: 'Decision-Making & Risk', description: 'Personal minimums, PAVE, IMSAFE, scenario thinking, and automation management.' },
  { id: 'night', name: 'Night Operations', description: 'Night vision, illusions, lighting, planning, terrain awareness, and night emergencies.' },
  { id: 'mountain', name: 'Mountain & High-Altitude Operations', description: 'Terrain, wind, density altitude, oxygen, route selection, and mountain escape planning.' },
  { id: 'emergencies', name: 'Emergencies & Abnormals', description: 'Priorities and sound decisions for failures, fires, IMC, diversions, and lost comms.' },
  { id: 'ctls', name: 'Flight Design CTLS', description: 'Handbook-derived limits, systems, performance, controls, and aircraft-specific cautions.' },
  { id: 'ifr', name: 'Instrument / IFR Refresher', description: 'Currency, planning, clearances, procedures, systems, and IFR risk management.', supplemental: true }
];

window.FLIGHT_REVIEW_SOURCES = [
  { title: 'Airbus Safety First — Fuel Leak Management in Flight', url: 'https://safetyfirst.airbus.com/fuel-leak-management-in-flight/', note: 'Manufacturer case studies and fuel-monitoring principles; use the specific aircraft’s approved procedures.' },
  { title: 'Airbus Safety First — Unreliable Airspeed at Takeoff', url: 'https://safetyfirst.airbus.com/unreliable-airspeed-at-takeoff/', note: 'Takeoff monitoring and common-cause air-data failures.' },
  { title: 'Airbus Safety First — Takeoff Surveillance & Monitoring Functions', url: 'https://safetyfirst.airbus.com/takeoff-surveillance-monitoring-functions/', note: 'Additional takeoff safety nets on equipped aircraft; capabilities vary by system standard.' },
  { title: 'Airbus Safety First — Thrust Reverser Selection is a Decision to Stop', url: 'https://safetyfirst.airbus.com/thrust-reverser-selection-is-a-decision-to-stop/', note: 'Airbus-specific landing guidance; the applicable aircraft manuals and SOPs control.' },
  { title: 'Airbus Safety First — Take Care of Your Brakes', url: 'https://safetyfirst.airbus.com/take-care-of-your-brakes/', note: 'Carbon brake oxidation, deceleration choices, and cooling principles.' },
  { title: 'Airbus Safety First — Preventing Tailstrike During Go-around Near the Ground', url: 'https://safetyfirst.airbus.com/preventing-tailstrike-during-go-around-near-the-ground/', note: 'Manufacturer guidance; configuration timing and sidestick procedures are aircraft-specific.' },
  { title: 'Airbus — Runway Overrun Prevention System and Runway Safety Suite', url: 'https://www.airbus.com/en/newsroom/stories/2022-10-safety-innovation-5-runway-overrun-prevention-system-rops-and-runway', note: 'Approach and on-ground warning functions on equipped aircraft.' },
  { title: '14 CFR Part 121', url: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-121', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: '14 CFR Part 119', url: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-119', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: '14 CFR Part 117', url: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-117', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'FAA AC 120-71B — SOPs and Pilot Monitoring', url: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-71B.pdf', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'FAA AC 91-79B — Aircraft Landing Performance and Runway Excursion Mitigation', url: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-79B_FAA.pdf', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'NASA Glenn — Turbofan Engines', url: 'https://www.grc.nasa.gov/WWW/k-12/VirtualAero/BottleRocket/airplane/turbfan.html', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'FAA — Turbofan Engine Malfunction Recognition and Response', url: 'https://www.faa.gov/sites/faa.gov/files/aircraft/air_cert/design_approvals/engine_prop/engine_malf_report.pdf', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'FAA Airplane Flying Handbook — Transition to Jet-Powered Airplanes', url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: '14 CFR Part 1 — Definitions and Abbreviations', url: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-A/part-1', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'FAA AC 25-13 — Reduced and Derated Takeoff Thrust', url: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_25-13.pdf', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: '14 CFR Part 25 — Transport Category Airplanes', url: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-25', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'Airbus — Getting to Grips with the Cost Index (principles)', url: 'https://ansperformance.eu/library/airbus-cost-index.pdf', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'FAA Lessons Learned — Pressurization, Helios 522', url: 'https://www.faa.gov/lessons_learned/transport_airplane/accidents/HCY522', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'Honeywell Aerospace — Auxiliary Power Units', url: 'https://www.honeywellaerospace.com/us/en/products-and-services/products/power-and-propulsion/auxiliary-power-units', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'Safran — Ram Air Turbine', url: 'https://www.safran-group.com/products-services/ram-air-turbine', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: 'FAA AC 120-125 — MEL, NEF Program, and CDL', url: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-125.pdf', note: 'Part 121 Ops study reference. Apply current regulations, carrier authorizations, and aircraft manuals.' },
  { title: '14 CFR § 61.56 — Flight review', url: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.56', note: 'Current flight-review requirements and alternatives.' },
  { title: '14 CFR § 61.57 — Recent flight experience', url: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.57', note: 'Passenger-carrying and instrument recent-experience rules.' },
  { title: 'FAA AC 61-98E', url: 'https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1043281', note: 'Current FAA guidance for flight reviews and IPCs; issued Oct. 30, 2024.' },
  { title: 'FAA Airman Certification Standards', url: 'https://www.faa.gov/training_testing/testing/acs', note: 'Current Private Pilot—Airplane and Instrument Rating—Airplane ACS.' },
  { title: 'FAA handbooks and manuals', url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation', note: 'PHAK, Airplane Flying Handbook, Instrument Flying Handbook, Instrument Procedures Handbook, and Risk Management Handbook.' },
  { title: 'FAA-H-8083-28B — Aviation Weather Handbook', url: 'https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/faa-h-8083-28b-aviation-weather-handbook', note: 'Current FAA reference for weather theory, hazards, observations, forecasts, and aviation weather tools; published April 2026.' },
  { title: 'FAA Aeronautical Information Manual', url: 'https://www.faa.gov/air_traffic/publications/atpubs/aim_html/', note: 'Current operating guidance, weather, airspace, and airport operations.' },
  { title: 'Flight Design CTLS LSA AOI, AF 043 00005 Rev. 8 (2009 archive)', url: 'https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf', note: 'Archived manufacturer reference. Serial-number applicability and current supplements are not verified. Current aircraft documents, weight-and-balance record, and placards control.' },
  { title: 'PilotsCafe Airplane IFR Quick-Review Study Guide', url: 'https://www.pilotscafe.com/', note: 'Supplemental orientation only; regulatory claims were reconciled with current primary sources.' },
  { title: 'FAA Instrument Procedures Handbook', url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook', note: 'FAA pilot reference for departures, en route operations, arrivals, approaches, and instrument emergencies.' },
  { title: 'FAA digital-Terminal Procedures Publication', url: 'https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dtpp/', note: 'Current approach, departure, arrival, airport-diagram, minima, legend, and general-information products.' },
  { title: 'FAA Order 8260.3G — TERPS', url: 'https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.current/documentNumber/8260.3', note: 'Active FAA criteria for terminal instrument-procedure design and obstacle evaluation.' },
  { title: 'FAA-H-8083-25C — Pilot’s Handbook of Aeronautical Knowledge', url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak', note: 'Current FAA reference for aircraft systems, navigation, aeromedical factors, and foundational pilot knowledge.' },
  { title: 'FAA-H-8083-3C — Airplane Flying Handbook', url: 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook', note: 'Current FAA reference for airplane operations, including night flight.' },
  { title: 'FAA Tips on Mountain Flying', url: 'https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf', note: 'FAA guidance for mountain weather, terrain, performance, route selection, and operating technique.' }
];

const S = {
  fuelLeak: ['Airbus Safety First — Fuel Leak Management in Flight', 'https://safetyfirst.airbus.com/fuel-leak-management-in-flight/'],
  airspeedTakeoff: ['Airbus Safety First — Unreliable Airspeed at Takeoff', 'https://safetyfirst.airbus.com/unreliable-airspeed-at-takeoff/'],
  takeoffMonitor: ['Airbus Safety First — Takeoff Surveillance & Monitoring Functions', 'https://safetyfirst.airbus.com/takeoff-surveillance-monitoring-functions/'],
  reverseStop: ['Airbus Safety First — Thrust Reverser Selection is a Decision to Stop', 'https://safetyfirst.airbus.com/thrust-reverser-selection-is-a-decision-to-stop/'],
  brakeCare: ['Airbus Safety First — Take Care of Your Brakes', 'https://safetyfirst.airbus.com/take-care-of-your-brakes/'],
  tailstrike: ['Airbus Safety First — Preventing Tailstrike During Go-around Near the Ground', 'https://safetyfirst.airbus.com/preventing-tailstrike-during-go-around-near-the-ground/'],
  rops: ['Airbus — Runway Overrun Prevention System and Runway Safety Suite', 'https://www.airbus.com/en/newsroom/stories/2022-10-safety-innovation-5-runway-overrun-prevention-system-rops-and-runway'],
  p121: ['14 CFR Part 121', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-121'],
  p119: ['14 CFR Part 119', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-119'],
  p117: ['14 CFR Part 117', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-117'],
  sop: ['FAA AC 120-71B — SOPs and Pilot Monitoring', 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-71B.pdf'],
  landing: ['FAA AC 91-79B — Aircraft Landing Performance and Runway Excursion Mitigation', 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-79B_FAA.pdf'],
  nasa: ['NASA Glenn — Turbofan Engines', 'https://www.grc.nasa.gov/WWW/k-12/VirtualAero/BottleRocket/airplane/turbfan.html'],
  engmalf: ['FAA — Turbofan Engine Malfunction Recognition and Response', 'https://www.faa.gov/sites/faa.gov/files/aircraft/air_cert/design_approvals/engine_prop/engine_malf_report.pdf'],
  jet: ['FAA Airplane Flying Handbook — Transition to Jet-Powered Airplanes', 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook'],
  aero: ['FAA PHAK — Aerodynamics of Flight', 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak'],
  p1: ['14 CFR Part 1 — Definitions and Abbreviations', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-A/part-1'],
  takeoff: ['FAA AC 25-13 — Reduced and Derated Takeoff Thrust', 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_25-13.pdf'],
  p25: ['14 CFR Part 25 — Transport Category Airplanes', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-25'],
  phakwb: ['FAA PHAK — Weight and Balance', 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak'],
  airbusci: ['Airbus — Getting to Grips with the Cost Index (principles)', 'https://ansperformance.eu/library/airbus-cost-index.pdf'],
  press: ['FAA Lessons Learned — Pressurization, Helios 522', 'https://www.faa.gov/lessons_learned/transport_airplane/accidents/HCY522'],
  amt: ['Honeywell Aerospace — Auxiliary Power Units', 'https://www.honeywellaerospace.com/us/en/products-and-services/products/power-and-propulsion/auxiliary-power-units'],
  airbusr: ['Safran — Ram Air Turbine', 'https://www.safran-group.com/products-services/ram-air-turbine'],
  cdl: ['FAA AC 120-125 — MEL, NEF Program, and CDL', 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-125.pdf'],
  fr: ['14 CFR 61.56', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.56'],
  rec: ['14 CFR 61.57', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.57'],
  p61: ['14 CFR Part 61', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61'],
  p91: ['14 CFR Part 91', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91'],
  p43: ['14 CFR Part 43', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-43'],
  p21: ['14 CFR Part 21', 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-21'],
  ac: ['FAA AC 61-98E', 'https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1043281'],
  acs: ['FAA Airman Certification Standards', 'https://www.faa.gov/training_testing/testing/acs'],
  aim: ['FAA Aeronautical Information Manual', 'https://www.faa.gov/air_traffic/publications/atpubs/aim_html/'],
  hand: ['FAA Aviation Handbooks', 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation'],
  wx: ['FAA-H-8083-28B Aviation Weather Handbook', 'https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/faa-h-8083-28b-aviation-weather-handbook'],
  wings: ['FAA WINGS Pilot Proficiency Program', 'https://www.faasafety.gov/WINGS/pub/learn_more.aspx'],
  ct: ['CTLS AOI AF 043 00005 Rev. 8 (archived; current aircraft documents control)', 'https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf'],
  iph: ['FAA Instrument Procedures Handbook', 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook'],
  dtpp: ['FAA digital-Terminal Procedures Publication', 'https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dtpp/'],
  terps: ['FAA Order 8260.3G — TERPS', 'https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.current/documentNumber/8260.3'],
  phak: ['FAA-H-8083-25C — Pilot’s Handbook of Aeronautical Knowledge', 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak'],
  afh: ['FAA-H-8083-3C — Airplane Flying Handbook', 'https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook'],
  mtn: ['FAA Tips on Mountain Flying', 'https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf']
};
const C = (id, category, question, answer, sourceKey, detail = '') => ({ id, category, question, answer, source: detail ? `${S[sourceKey][0]}, ${detail}` : S[sourceKey][0], sourceUrl: S[sourceKey][1] });
// New airline regulatory cards link directly to the cited section.
const R = (id, section, question, answer) => ({ ...C(id, 'part-121', question, answer, section.startsWith('117.') ? 'p117' : 'p121', `§ ${section}`), sourceUrl: `https://www.ecfr.gov/current/title-14/section-${section}` });

window.FLIGHT_REVIEW_CARDS = [
  C('FR-001','flight-review','What is the regulatory minimum content of a flight review?','At least 1 hour of ground training and 1 hour of flight training. Ground must review current Part 91 operating and flight rules; flight covers maneuvers and procedures the instructor considers necessary to show safe exercise of certificate privileges. The minimum is not an automatic endorsement.','fr','§ 61.56(a)'),
  C('FR-002','flight-review','Is a flight review a pass/fail practical test?','No. It is proficiency-based training. The instructor endorses satisfactory completion only after the pilot demonstrates safe exercise of privileges; more than the regulatory two-hour minimum may be appropriate.','ac','chs. 2–3'),
  C('FR-003','flight-review','How is the 24-calendar-month flight-review window measured?','To act as PIC, you must have completed a qualifying review or alternative since the beginning of the 24th calendar month before the month of the flight. Calendar months—not 730 days—control.','fr','§ 61.56(c)'),
  C('FR-004','flight-review','What records show satisfactory completion of a flight review?','A logbook endorsement from the authorized instructor who conducted the review. Flight time alone, or merely attending ground discussion, is not enough.','fr','§ 61.56(c)(2)'),
  C('FR-005','flight-review','Can an instructor decline to endorse a review after the minimum time?','Yes. The instructor decides which maneuvers and procedures are necessary and endorses only satisfactory completion. Continue training and receive the endorsement when proficiency is demonstrated.','fr','§ 61.56(a),(c)'),
  C('FR-006','flight-review','Name a common test or check that can substitute for a flight review within the same period.','A qualifying pilot proficiency check or practical test for a certificate, rating, or operating privilege can satisfy the requirement. Confirm the exact event meets § 61.56(d).','fr','§ 61.56(d)'),
  C('FR-007','flight-review','How can FAA WINGS affect the flight-review requirement?','Satisfactory completion of one or more phases of an FAA-sponsored pilot proficiency program within the applicable period removes the need for a separate flight review under § 61.56(e). Keep the completion record.','fr','§ 61.56(e)'),
  C('FR-008','flight-review','May a flight review be combined with passenger or instrument recent-experience work?','Yes, at the instructor’s discretion, but every applicable requirement must independently be met and logged. Combining events does not erase differences among flight review, passenger currency, and instrument currency or an IPC.','fr','§ 61.56(h)'),
  C('FR-009','flight-review','Does completing a flight review automatically make a pilot proficient for every intended flight?','No. Currency is a legal threshold; proficiency is the capability and judgment appropriate to the aircraft, conditions, and mission. Use the review to identify gaps and set follow-on training.','ac','ch. 2'),
  C('FR-010','flight-review','What should you bring to make a flight review useful and aircraft-specific?','Bring pilot and medical qualification documents, logbook, aircraft documents and checklists, current charts/data, and honest goals. Discuss recent experience, aircraft systems, planned operations, and risk areas with the instructor beforehand.','ac','chs. 2–3'),
  C('FR-011','flight-review','Must a pilot complete a separate flight review in every category and class held?','No. One qualifying flight review in an aircraft for which the pilot is rated satisfies the general § 61.56 requirement. It does not establish proficiency in every aircraft, so additional transition or recurrent training may still be essential.','fr','§ 61.56(c)'),
  C('FR-012','flight-review','What flight-training substitution is available to a glider pilot during a flight review?','A glider pilot may substitute at least three instructional flights in a glider, each including a flight to traffic-pattern altitude, for the one hour of flight training otherwise required. The ground-training requirement still applies unless another exception does.','fr','§ 61.56(b)'),
  C('FR-013','flight-review','When is a student pilot exempt from the flight-review requirement?','While undergoing training for a certificate and holding the current solo-flight endorsement required by § 61.87. The exemption does not replace the student’s required training, endorsements, limitations, or instructor supervision.','fr','§ 61.56(g)'),
  C('FR-014','flight-review','When may a flight instructor omit the one hour of flight-review ground training?','A flight instructor may omit that hour if, within the applicable 24-calendar-month period, the instructor met the recent-experience requirements for a flight instructor certificate or reinstated instructor privileges through an approved flight instructor refresher course as specified in § 61.56(f).','fr','§ 61.56(f)'),
  C('FR-015','flight-review','Can a flight simulator or flight training device be used for a flight review?','Yes, but only in accordance with an approved course conducted by a Part 142 certificated training center, and the device must represent an aircraft or set of aircraft for which the pilot is rated. Ordinary unsupervised simulator use does not qualify.','fr','§ 61.56(i)'),
  C('FR-016','flight-review','What additional requirement applies when a flight review uses a simulator not approved for landings?','The pilot must separately meet the applicable takeoff-and-landing recent-experience requirements of § 61.57(a) or (b). Simulator completion does not create landing currency unless the device and course satisfy the rule.','fr','§ 61.56(i)(2)'),
  C('FR-017','flight-review','Can a practical test involving flight-instructor privileges satisfy the flight-review requirement?','Yes, when completed within the applicable period and listed in § 61.56(d), including tests for issuance or an added flight-instructor rating and specified tests for recent experience or reinstatement of instructor privileges. Verify the particular event qualifies.','fr','§ 61.56(d)(2)'),
  C('FR-018','flight-review','What should be recorded if the pilot receives flight-review training but is not yet endorsed for satisfactory completion?','The instructor should record and endorse the training given as required by § 61.51. The pilot has not completed the flight review until the separate satisfactory-completion endorsement is issued; additional training can then address the remaining areas.','p61','§§ 61.51(h), 61.56(c)'),
  C('FR-019','flight-review','Does the required Part 91 ground review mean only reciting regulations from memory?','No. The review must cover current general operating and flight rules, and FAA guidance encourages scenario-based application to the pilot’s operations. The instructor may use discussion, planning, references, and knowledge checks to confirm practical understanding.','ac','chs. 2–3'),
  C('FR-020','flight-review','May a pilot with an expired flight review act as PIC merely to fly to the review?','No. The pilot may not act as PIC until a qualifying review or alternative is completed. Arrange a legal training flight with a qualified instructor or another lawful means of repositioning; insurance and aircraft requirements also need consideration.','fr','§ 61.56(c)'),

  C('PD-001','pilot-docs','What personal documents must a pilot generally have when exercising certificate privileges?','A pilot certificate, photo identification, and the medical qualification or other authority required for that operation. The exact combination depends on privileges and whether BasicMed or sport-pilot rules apply.','p61','§§ 61.3, 61.23'),
  C('PD-002','pilot-docs','Who is responsible for deciding whether a pilot is fit and legally qualified for a flight?','The pilot in command. Certificates and currency are only part of the decision; illness, medication, fatigue, stress, recent experience, endorsements, and aircraft-specific competence also matter.','p91','§§ 91.3, 91.17'),
  C('PD-003','pilot-docs','What must a pilot log to show required training and aeronautical experience?','The date, total or lesson time, departure and arrival or simulator identification as applicable, aircraft type and identification, and the experience or training details required by § 61.51. Instructor training entries require the instructor’s endorsement.','p61','§ 61.51'),
  C('PD-004','pilot-docs','What is the basic recent-experience rule for carrying passengers by day?','Within the preceding 90 days, make at least three takeoffs and three landings as sole manipulator in the same category and class, and type if required. Tailwheel landings must be to a full stop.','rec','§ 61.57(a)'),
  C('PD-005','pilot-docs','What extra landing requirement applies to carrying passengers at night?','Within the preceding 90 days, make three takeoffs and three landings to a full stop during the period from 1 hour after sunset to 1 hour before sunrise, in the same category and class and type if required.','rec','§ 61.57(b)'),
  C('PD-006','pilot-docs','Does being passenger-current prove you are ready for a gusty, short-runway CTLS flight?','No. Three landings satisfy a narrow legal rule. Proficiency for wind, runway, aircraft, recency, and personal condition needs a separate, conservative judgment—and often practice with an instructor.','ac','ch. 2'),
  C('PD-007','pilot-docs','What is the difference between a rating and an endorsement?','A rating appears on a certificate and defines broad privileges. An endorsement is a logbook record documenting specific training, authorization, or knowledge; examples include flight review completion and complex or tailwheel training when applicable.','p61','§§ 61.31, 61.56'),
  C('PD-008','pilot-docs','May a private pilot share operating expenses with passengers?','Only the pro rata share of allowable expenses—fuel, oil, airport expenditures, or rental fees—and only when the pilot pays at least an equal proportional share. A common purpose and other compensation rules also matter.','p61','§ 61.113(c)'),
  C('PD-009','pilot-docs','When should a pilot revisit certificate limitations before acting as PIC?','Whenever changing aircraft, operating category, medical pathway, compensation, night/IFR plans, or carrying passengers. Read the certificate and applicable regulations rather than relying on memory or another pilot’s interpretation.','p61','Parts 61 and 91'),
  C('PD-010','pilot-docs','What is the safe response to uncertainty about BasicMed, a medical certificate, or sport-pilot medical eligibility?','Do not launch on assumptions. Check current § 61.23 and applicable FAA guidance, then resolve personal eligibility with an appropriate aviation medical or legal professional when needed.','p61','§ 61.23'),
  C('PD-011','pilot-docs','Does a modern FAA pilot certificate expire on a fixed date?','Generally no. Pilot certificates, including student pilot certificates issued after April 1, 2016, are issued without an expiration date unless the certificate itself has one. Privileges still depend on ratings, endorsements, medical qualification, currency, and any limitations.','p61','§ 61.19'),
  C('PD-012','pilot-docs','Who may require a pilot to present certificates and identification for inspection?','The FAA Administrator, an authorized NTSB representative, a Federal, State, or local law-enforcement officer, or an authorized TSA representative may request the documents listed in § 61.3(l), including photo identification and applicable medical documentation.','p61','§ 61.3(l)'),
  C('PD-013','pilot-docs','What happens if a certificate holder changes permanent mailing address?','The holder may not exercise pilot, flight-instructor, or ground-instructor certificate privileges after 30 days from the change unless the FAA Airman Certification Branch has been notified as specified in § 61.60.','p61','§ 61.60'),
  C('PD-014','pilot-docs','How long does a third-class medical support private-pilot operations?','If the pilot was under 40 on the examination date, through the end of the 60th month after the exam month; if 40 or older, through the end of the 24th month. The class held and operation conducted determine the applicable duration.','p61','§ 61.23(d)'),
  C('PD-015','pilot-docs','May a pilot fly while knowingly affected by a disqualifying medical condition or treatment?','No. A required crewmember must not operate when the person knows or has reason to know that a condition, medication, or treatment makes the person unable to meet the applicable medical standard or safely operate under an alternative medical pathway.','p61','§ 61.53'),
  C('PD-016','pilot-docs','What are the recurring medical-document intervals under BasicMed?','The required medical education course must have been completed within the preceding 24 calendar months, and the comprehensive medical examination within the preceding 48 calendar months. The pilot must also meet the other eligibility, documentation, aircraft, and operating limitations.','p61','§§ 61.23(c)(3), 61.113(i); Part 68'),
  C('PD-017','pilot-docs','How do category, class, and type ratings differ?','Category is a broad aircraft grouping such as airplane; class is a subdivision such as single-engine land; and a type rating is required for specified large, turbojet-powered, or other aircraft designated by the FAA. The certificate and operation determine which ratings are required.','p61','§§ 61.5, 61.31'),
  C('PD-018','pilot-docs','When is a high-performance-airplane endorsement generally required?','Before acting as PIC of an airplane with an engine of more than 200 horsepower, unless an applicable grandfather provision applies. The pilot must receive and log ground and flight training from an authorized instructor and receive the required endorsement.','p61','§ 61.31(f)'),
  C('PD-019','pilot-docs','What training is generally required before acting as PIC of a complex airplane?','Normally, log ground and flight training and receive an instructor endorsement before acting as PIC, unless an exception applies. A complex airplane has flaps, retractable landing gear, and a controllable-pitch propeller or qualifying integrated engine/propeller controls. A complex seaplane does not need retractable gear.','p61','§ 61.31(e)'),
  C('PD-020','pilot-docs','What is generally required before acting as PIC of a tailwheel airplane?','An authorized instructor must provide and log training in normal and crosswind takeoffs and landings, wheel landings unless the manufacturer prohibits them, and go-around procedures, followed by a proficiency endorsement—unless the regulatory prior-experience exception applies.','p61','§ 61.31(i)'),
  C('PD-021','pilot-docs','Why are “acting as PIC” and “logging PIC time” not always the same?','Acting as PIC means holding final authority and responsibility for the operation and requires all applicable qualifications. Logging PIC time follows the separate rules in § 61.51 and can be permitted in situations where the pilot is not the acting PIC, such as qualifying sole-manipulator time.','p61','§§ 1.1, 61.51'),
  C('PD-022','pilot-docs','When may a rated pilot log PIC time as sole manipulator of the controls?','When the pilot is the sole manipulator for flight time during which the pilot is rated or has privileges for that aircraft. Logging permission does not by itself authorize the pilot to act as PIC without required medical qualification, endorsements, currency, and operating authority.','p61','§ 61.51(e)'),
  C('PD-023','pilot-docs','What basic qualifications must a safety pilot have during simulated instrument flight?','The safety pilot must hold at least a private pilot certificate with category and class ratings appropriate to the aircraft and meet the requirements to serve as a required crewmember. PIC responsibility, logging, medical qualification, and agreed duties must be resolved before flight.','p61','§§ 61.3, 91.109(c)'),
  C('PD-024','pilot-docs','Must every flight be entered in a pilot logbook?','No. Under § 61.51, a pilot must document the aeronautical training and experience used to meet certificate, rating, flight-review, or recent-experience requirements. Other time may be logged, but any entry made must be accurate and meet applicable content rules.','p61','§ 61.51(a),(b)'),
  C('PD-025','pilot-docs','How may a pilot regain passenger takeoff-and-landing currency with an instructor aboard?','Section 61.57 permits training limited to regaining the day or night takeoff-and-landing experience when the authorized instructor and pilot are the sole occupants and the pilot meets all other PIC requirements. Brief who acts as PIC and log the qualifying landings accurately.','rec','§ 61.57(e)(5)'),

  C('P91-001','part-91','What information must you check before a flight?','All available information about the flight. Check runway lengths and takeoff/landing performance for every flight. For IFR flights or flights beyond the airport vicinity, also check weather, fuel, alternatives, and known ATC delays.','p91','§ 91.103'),
  C('P91-002','part-91','What is the day-VFR fuel reserve for an airplane?','Enough fuel to reach the first point of intended landing and then fly at normal cruising speed for at least 30 minutes. Night VFR requires at least 45 minutes. Use larger practical reserves when risk warrants.','p91','§ 91.151'),
  C('P91-003','part-91','What is the basic IFR fuel planning rule for an airplane?','Enough to reach the first intended landing, then the alternate when one is required, and then fly for 45 minutes at normal cruise. This is a legal minimum, not necessarily a wise dispatch target.','p91','§ 91.167'),
  C('P91-004','part-91','Who has final authority and responsibility for operation of the aircraft?','The pilot in command. In an in-flight emergency requiring immediate action, the PIC may deviate from Part 91 to the extent required and must provide a written report if the Administrator requests one.','p91','§ 91.3'),
  C('P91-005','part-91','What is the general minimum safe altitude rule away from takeoff and landing?','Except for takeoff or landing, stay high enough for an emergency landing without undue hazard. Over congested areas: 1,000 feet above the highest obstacle within 2,000 feet horizontally. Elsewhere: normally 500 feet above the surface; over open water or sparsely populated areas, remain at least 500 feet from any person, vessel, vehicle, or structure.','p91','§ 91.119'),
  C('P91-006','part-91','What is the usual speed limit below 10,000 feet MSL?','250 KIAS, unless the FAA authorizes otherwise or the aircraft’s minimum safe speed is higher. Separate 200-KIAS limits apply near Class C/D primary airports, beneath Class B, and in VFR corridors through Class B.','p91','§ 91.117'),
  C('P91-007','part-91','What should you do before entering a TFR area?','Obtain current TFR/NOTAM information, understand the dimensions, times, and exceptions, and comply with any ATC requirements. A chart alone cannot show a newly issued temporary restriction.','aim','NOTAMs and TFRs'),
  C('P91-008','part-91','When does the portable-electronic-device rule apply?','Section 91.21 covers air-carrier aircraft and other U.S.-registered civil aircraft operating IFR. It permits listed devices and other devices determined not to interfere. For a non-air-carrier aircraft, the PIC or operator may make that determination.','p91','§ 91.21'),
  C('P91-009','part-91','What right-of-way principle applies to an aircraft in distress?','An aircraft in distress has right-of-way over all other air traffic. Other rules address converging, overtaking, approach, and category priorities; right-of-way never excuses collision risk.','p91','§ 91.113'),
  C('P91-010','part-91','What is the PIC’s obligation after receiving an ATC clearance under VFR or IFR?','Do not deviate unless an amended clearance is obtained, an emergency exists, or deviation responds to a traffic alert and collision avoidance resolution advisory as permitted. Clarify any clearance you cannot safely accept.','p91','§ 91.123'),
  C('P91-011','part-91','What does § 91.9 require regarding aircraft operating limitations?','Operate in accordance with the approved flight manual or other approved manual material, markings, and placards. The current required manual or approved material must be available in the aircraft.','p91','§ 91.9'),
  C('P91-012','part-91','What conduct toward a crewmember does § 91.11 prohibit?','No person may assault, threaten, intimidate, or interfere with a crewmember performing duties aboard an aircraft being operated.','p91','§ 91.11'),
  C('P91-013','part-91','What is the careless-or-reckless prohibition in § 91.13?','No person may operate an aircraft in a careless or reckless manner that endangers another person’s life or property. The rule also covers careless or reckless operation on airport surfaces used by aircraft for air commerce.','p91','§ 91.13'),
  C('P91-014','part-91','May a pilot drop an object from an aircraft?','Only when reasonable precautions are taken to prevent injury or property damage. The PIC may not allow an object to be dropped if doing so creates a hazard.','p91','§ 91.15'),
  C('P91-015','part-91','What alcohol and drug limits apply to a flight crewmember?','Do not act or attempt to act as a crewmember within 8 hours after drinking alcohol, while under its influence, with a blood or breath alcohol concentration of 0.04 or greater, or while using a drug that affects faculties contrary to safety.','p91','§ 91.17'),
  C('P91-016','part-91','What does Part 91 say about carrying illegal drugs aboard a civil aircraft?','A person may not operate a civil aircraft within the United States with knowledge that narcotic drugs, marijuana, depressant or stimulant drugs, or specified controlled substances are carried aboard, unless authorized by a federal or state agency.','p91','§ 91.19'),
  C('P91-017','part-91','When must required flight crewmembers remain at their stations and use restraints?','During takeoff, landing, and en route, each required crewmember must remain at the assigned station except for operational duties or physiological needs and keep the safety belt fastened. Shoulder harnesses must be fastened during takeoff and landing when installed and compatible with required duties.','p91','§ 91.105'),
  C('P91-018','part-91','What passenger restraint actions must the PIC take before movement, takeoff, and landing?','Before takeoff, brief each person on fastening and unfastening the safety belt and installed shoulder harness. Before surface movement, takeoff, and landing, notify everyone to fasten them; occupants generally must use an approved seat or berth and be properly secured during those phases.','p91','§ 91.107'),
  C('P91-019','part-91','What is required for simulated instrument flight in an airplane?','The other control seat must be occupied by an appropriately qualified safety pilot with adequate forward and side vision, or supplemented by a competent observer, and the airplane must have functioning dual controls except for the limited throwover-control exception.','p91','§ 91.109(c)'),
  C('P91-020','part-91','When is formation flight permitted?','Only by prior arrangement with the PIC of every aircraft in the formation, and never so close as to create a collision hazard. An aircraft carrying passengers for hire may not be flown in formation.','p91','§ 91.111'),
  C('P91-021','part-91','Who has right-of-way when same-category aircraft converge at approximately the same altitude?','The aircraft to the other’s right has right-of-way. The other aircraft must give way and may not pass over, under, or ahead unless well clear.','p91','§ 91.113(d)'),
  C('P91-022','part-91','What must pilots do when aircraft approach each other head-on or nearly head-on?','Each pilot must alter course to the right. Continue to see and avoid rather than assuming the other aircraft will maneuver correctly.','p91','§ 91.113(e)'),
  C('P91-023','part-91','Which aircraft has right-of-way during an overtaking situation?','The aircraft being overtaken has right-of-way. The overtaking aircraft must alter course to the right and pass well clear.','p91','§ 91.113(f)'),
  C('P91-024','part-91','How does right-of-way work for aircraft landing at the same airport?','Aircraft on final or landing have right-of-way over aircraft in flight or on the surface. Of multiple aircraft approaching to land, the lower aircraft has right-of-way, but it may not cut in front of or overtake an aircraft established on final.','p91','§ 91.113(g)'),
  C('P91-025','part-91','How does aircraft category affect right-of-way when different categories converge?','A balloon has priority over every other category; a glider over powered aircraft; an airship over other powered aircraft except aircraft towing or refueling; and an aircraft towing or refueling has priority over other powered aircraft. Distress always takes precedence.','p91','§ 91.113(d)'),
  C('P91-026','part-91','What is the basic right-of-way rule for an aircraft operating on water?','Keep clear of vessels and avoid impeding their navigation. On crossing courses, the craft to the other’s right has right-of-way; head-on, both turn right; when overtaking, the overtaken craft has right-of-way.','p91','§ 91.115'),
  C('P91-027','part-91','What altimeter setting is used below 18,000 feet MSL?','Use the current reported setting of a station along the route within 100 NM. If none is available, use an appropriate available station; a no-radio aircraft uses the departure elevation or an appropriate setting obtained before departure.','p91','§ 91.121(a)(1)'),
  C('P91-028','part-91','What altimeter setting is used at or above 18,000 feet MSL?','Set 29.92 inches Hg. Remember that low pressure can raise the lowest usable flight level above FL180, so use the current ATC-assigned or published usable level.','p91','§ 91.121(a)(2)'),
  C('P91-029','part-91','What do the principal ATC light-gun signals mean?','In flight: steady green means cleared to land, flashing green return for landing, steady red give way and circle, flashing red airport unsafe, and alternating red/green exercise extreme caution. On the surface: steady green clears takeoff, flashing green clears taxi, steady red means stop, and flashing red means taxi clear of the runway.','p91','§ 91.125'),
  C('P91-030','part-91','What traffic-pattern turn direction applies at a nontowered Class G airport?','Airplanes make left turns unless approved markings or light signals indicate right traffic. Helicopters and powered parachutes must avoid the flow of fixed-wing aircraft.','p91','§ 91.126(b)'),
  C('P91-031','part-91','What clearances are required for runway and taxi operations at an airport with an operating tower?','A pilot may not taxi onto a runway, take off, or land without an appropriate ATC clearance. A clearance to cross one runway does not authorize crossing another; hold-short instructions must be read back and followed.','p91','§ 91.129(i)'),
  C('P91-032','part-91','When do controlled-surface-area ceiling and visibility rules prevent ordinary VFR airport operations?','For ordinary VFR in controlled airport surface airspace, do not fly beneath a ceiling lower than 1,000 feet. Takeoff, landing, or pattern entry normally requires at least 3 SM reported ground visibility; if none is reported, use flight visibility. Special VFR has separate rules.','p91','§ 91.155(c)-(d)'),
  C('P91-033','part-91','What are the basic weather and clearance requirements for Special VFR?','Below 10,000 feet MSL in the airport’s designated controlled surface airspace: obtain an ATC clearance, stay clear of clouds, and normally maintain at least 1 SM flight visibility. Takeoff and landing also require 1 SM ground visibility, or flight visibility if ground visibility is not reported. Helicopters have separate exceptions.','p91','§ 91.157'),
  C('P91-034','part-91','What additional requirement applies to Special VFR in an airplane at night?','Between sunset and sunrise, the person receiving the clearance must meet the applicable Part 61 requirements for instrument flight, and the airplane must be equipped for IFR under § 91.205(d).','p91','§ 91.157(b)(4)'),
  C('P91-035','part-91','Which VFR cruising altitudes apply more than 3,000 feet above the surface?','When level cruising below 18,000 feet MSL, magnetic courses 0° through 179° use odd thousands plus 500 feet; courses 180° through 359° use even thousands plus 500 feet, unless otherwise authorized by ATC.','p91','§ 91.159'),
  C('P91-036','part-91','What equipment does § 91.205 require for day VFR in a standard-category powered aircraft?','Required items include an airspeed indicator, altimeter, magnetic direction indicator, engine gauges appropriate to the installation, fuel quantity for each tank, and a landing-gear indicator if retractable, plus applicable anticollision lights, restraints, ELT, and overwater equipment. Always apply the aircraft’s certification basis and equipment list.','p91','§ 91.205(b)'),
  C('P91-037','part-91','How often must a required emergency locator transmitter be inspected?','Within 12 calendar months after the preceding inspection. The inspection covers installation, battery corrosion, control and crash-sensor operation, and a sufficient radiated signal from the antenna.','p91','§ 91.207(d)'),
  C('P91-038','part-91','When must an ELT battery be replaced or recharged?','After more than 1 cumulative hour of transmitter use or when 50 percent of its useful life—or useful charge life for a rechargeable battery—has expired. Record and mark the new expiration date as required.','p91','§ 91.207(c)'),
  C('P91-039','part-91','When must aircraft position and anticollision lights be used?','Position lights are required from sunset to sunrise. If the aircraft has an anticollision-light system, it must be operated unless the PIC determines that turning it off is safer because of operating conditions.','p91','§ 91.209'),
  C('P91-040','part-91','When is crew oxygen required above 12,500 through 14,000 feet?','At cabin pressure altitudes above 12,500 feet through 14,000 feet inclusive, required minimum flight crew must use oxygen for the portion exceeding 30 minutes. Exactly 12,500 feet does not trigger this requirement.','p91','§ 91.211(a)(1)'),
  C('P91-041','part-91','What oxygen rules apply above 14,000 and 15,000 feet cabin pressure altitude?','Above 14,000 feet, the required minimum flight crew must use supplemental oxygen for the entire time at that altitude. Above 15,000 feet, every occupant must be provided supplemental oxygen.','p91','§ 91.211(a)(2)-(3)'),
  C('P91-042','part-91','When must an operable installed transponder be used?','In the airspace specified by § 91.215 and throughout controlled airspace, operate the transponder—including Mode C if installed—on the appropriate or assigned code unless ATC directs otherwise for safety.','p91','§ 91.215(c)'),
  C('P91-043','part-91','When should installed ADS-B Out equipment transmit?','An aircraft equipped with ADS-B Out must normally operate it in transmit mode at all times, not only inside rule airspace, unless an applicable exception or ATC authorization permits otherwise.','p91','§ 91.225(f)'),
  C('P91-044','part-91','Where does § 91.303 prohibit aerobatic flight?','Over congested areas or open-air assemblies; within Class B, C, D, or E airport surface areas; within 4 NM of a Federal airway centerline; below 1,500 feet AGL; or with less than 3 statute miles visibility.','p91','§ 91.303'),
  C('P91-045','part-91','When are parachutes generally required for intentional steep or unusual maneuvers with a passenger?','Unless a regulatory exception applies, every occupant must wear an approved parachute before an intentional maneuver exceeds 60° of bank or 30° nose-up or nose-down while carrying a person other than a crewmember.','p91','§ 91.307(c)-(d)'),
  C('P91-046','part-91','What must be arranged before towing a glider or unpowered ultralight vehicle?','The tow pilot must be qualified, the aircraft and tow hitch authorized, and the towline strength compliant. The pilots must agree on course, signals, airspeeds, and emergencies, and the tower or Flight Service must be notified when required in controlled airport surface airspace.','p91','§ 91.309'),
  C('P91-047','part-91','What core limitations apply to an aircraft with an experimental certificate?','Operate only for the certificate’s purpose and within assigned test-area limits until controllability and safe characteristics are shown. Unless specifically authorized, avoid densely populated areas and congested airways, use day VFR, advise passengers of the experimental nature, and notify ATC when receiving its services.','p91','§ 91.319'),
  C('P91-048','part-91','What operating duties apply to a special light-sport aircraft such as an S-LSA CTLS?','Operate it according to its operating instructions and required equipment list, maintain it under the applicable light-sport rules and accepted procedures, and advise every person carried that it has a special airworthiness certificate and does not meet standard-category airworthiness requirements.','p91','§ 91.327'),
  C('P91-049','part-91','What should a pilot do when barometric pressure may exceed 31.00 inches Hg?','Check for and comply with the special operating requirements in the applicable NOTAM. Section 91.144 prohibits beginning or conducting a flight contrary to those published high-pressure procedures.','p91','§ 91.144'),
  C('P91-050','part-91','How does § 91.145 control flight near aerial demonstrations or major sporting events?','The FAA may establish a TFR by NOTAM to protect people and property, maintain safety and efficiency, or prevent unsafe congestion. Fly within it only according to the published authorizations, terms, and conditions or with specific ATC or waiver authorization.','p91','§ 91.145'),

  C('AW-001','airworthiness','What aircraft documents are commonly remembered as ARROW?','Airworthiness certificate, Registration, Radio station license when internationally required, Operating limitations, and Weight-and-balance information. Verify the exact documents and their applicability for the aircraft and operation.','p91','§§ 91.9, 91.203'),
  C('AW-002','airworthiness','Who is primarily responsible for maintaining an aircraft in airworthy condition?','The owner or operator is primarily responsible for maintenance and inspections; the PIC must still determine the aircraft is in condition for safe flight before operation.','p91','§§ 91.7, 91.403'),
  C('AW-003','airworthiness','What makes an aircraft airworthy?','It must conform to its approved or applicable configuration and be in a condition for safe operation. For an LSA, use the aircraft’s operating instructions, equipment records, safety directives, supplements, and placards as applicable.','p91','§§ 91.7, 91.327'),
  C('AW-004','airworthiness','What is the annual-inspection interval for an aircraft operated under the standard Part 91 rule?','Within the preceding 12 calendar months, unless an approved progressive program or another applicable rule provides otherwise. A 100-hour inspection may also apply depending on how the aircraft is used.','p91','§ 91.409'),
  C('AW-005','airworthiness','When is a 100-hour inspection generally required?','For an aircraft carrying persons for hire or used to give flight instruction for hire when the instructor provides the aircraft, subject to the details and exceptions in § 91.409(b). It may be exceeded by up to 10 hours only to reach an inspection location, with that time counted forward.','p91','§ 91.409(b)'),
  C('AW-006','airworthiness','Can a pilot ignore an Airworthiness Directive because the aircraft just passed annual?','No. Applicable ADs are mandatory unless the AD itself provides an alternative. Confirm status, recurring actions, and compliance records independently of the annual date.','p91','§ 91.403(a)'),
  C('AW-007','airworthiness','What should a pilot do when equipment is inoperative before flight?','Use § 91.213 and the aircraft’s applicable MEL, KOEL, equipment list, operating limitations, certification basis, ADs, and placards. Remove or deactivate and placard only when permitted; make maintenance records when required.','p91','§ 91.213'),
  C('AW-008','airworthiness','May a private pilot perform preventive maintenance?','A qualifying pilot may perform preventive maintenance on an aircraft owned or operated by that pilot when allowed by § 43.3 and Appendix A. The task must actually be listed as preventive maintenance and be properly recorded.','p43','§ 43.3(g), Part 43 App. A'),
  C('AW-009','airworthiness','What checks are required after maintenance that may appreciably change flight characteristics?','Before carrying anyone other than crewmembers, an appropriately rated pilot holding at least a private certificate must make and log an operational check flight. No check flight is needed if ground tests and inspection conclusively show the work did not appreciably change flight characteristics or substantially affect in-flight operation.','p91','§ 91.407(b)'),
  C('AW-010','airworthiness','Why must CTLS equipment and weight records be treated as aircraft-specific?','Installed avionics, parachute, propeller, supplements, repairs, and loading data can differ by serial number and configuration. Use the current equipment list and weighing record for the actual aircraft—not a generic internet example.','ct','§ 6.4, pp. 6-9–6-10'),
  C('AW-011','airworthiness','Where must the airworthiness certificate be carried and displayed?','The aircraft must carry an appropriate current airworthiness certificate, displayed at the cabin or cockpit entrance so it is legible to passengers or crew. The aircraft must also carry an effective registration document permitted by § 91.203.','p91','§ 91.203(a),(b)'),
  C('AW-012','airworthiness','What counts as operating limitations that must be followed under § 91.9?','Applicable limitations include those in the approved AFM or POH, markings and placards, and other limitations prescribed by the certificating authority. Supplements and special operating limitations may be part of the controlling package for a particular aircraft.','p91','§ 91.9'),
  C('AW-013','airworthiness','What must the PIC do if an aircraft becomes unairworthy in flight?','Discontinue the flight when the unairworthy mechanical, electrical, or structural condition occurs. The PIC then uses judgment and emergency authority as necessary to obtain the safest practical outcome.','p91','§ 91.7(b)'),
  C('AW-014','airworthiness','What must occur before operating an aircraft after maintenance or alteration?','A person authorized by § 43.7 must approve it for return to service, and the required maintenance-record entry under § 43.9 or § 43.11 must be made. A pilot preflight does not replace those approvals.','p91','§ 91.407(a)'),
  C('AW-015','airworthiness','What basic information belongs in a maintenance or preventive-maintenance record entry?','A description or acceptable reference for the work, the completion date, and the name, signature, certificate number, and kind of certificate held by the person approving the work for return to service, as applicable under Part 43.','p43','§ 43.9'),
  C('AW-016','airworthiness','How long are routine maintenance records normally retained?','Records of maintenance, preventive maintenance, alterations, and required inspections under § 91.417(a)(1) are retained until the work is repeated or superseded, or for one year after completion. Other status records have longer retention rules.','p91','§ 91.417(b)(1)'),
  C('AW-017','airworthiness','Which maintenance records generally stay with the aircraft when it is sold?','The status records listed in § 91.417(a)(2)—including total time, life-limited parts, required-overhaul status, inspection status, AD status, and specified major-alteration forms—must be retained and transferred with the aircraft.','p91','§ 91.417(a)(2),(b)(2)'),
  C('AW-018','airworthiness','What details should the aircraft records show for an applicable Airworthiness Directive?','The current status, method of compliance, AD number and revision date, and—when the AD requires recurring action—the time and date the next action is due. A note saying only “ADs checked” is not the complete status record contemplated by § 91.417.','p91','§ 91.417(a)(2)(v)'),
  C('AW-019','airworthiness','When is the 24-calendar-month altimeter and static-system inspection required?','For operating an airplane or helicopter in controlled airspace under IFR, each static-pressure system, altimeter, and automatic pressure-altitude reporting system must have passed the required tests within the preceding 24 calendar months, with additional tests after specified work.','p91','§ 91.411'),
  C('AW-020','airworthiness','When must an ATC transponder be tested before use?','Within the preceding 24 calendar months before using it. Additional testing is required after installation or maintenance that could introduce a data-correspondence error. Section 91.413 applies to transponder use, even when the airspace does not require a transponder.','p91','§ 91.413'),
  C('AW-021','airworthiness','What recurring inspection and battery rules apply to an emergency locator transmitter?','An installed ELT generally must be inspected within the preceding 12 calendar months. Its battery must be replaced or recharged after more than one cumulative hour of use or when 50 percent of useful life—or rechargeable useful charge life—has expired, subject to § 91.207.','p91','§ 91.207'),
  C('AW-022','airworthiness','When must VOR equipment be operationally checked for IFR use?','A person may not operate under IFR using VOR navigation unless the equipment has been checked within the preceding 30 days and found within the permitted bearing error, with the date, place, error, and signer recorded as required.','p91','§ 91.171'),
  C('AW-023','airworthiness','Can any mechanic sign both a 100-hour inspection and an annual inspection?','A properly rated mechanic may perform and approve a 100-hour inspection, but an annual generally requires a mechanic with inspection authorization, an appropriately rated repair station, or the manufacturer. A 100-hour counts as an annual only when performed and recorded by an authorized person as an annual.','p43','§ 43.7; 14 CFR 91.409'),
  C('AW-024','airworthiness','What is a progressive inspection program?','An FAA-authorized program that divides inspection work into scheduled segments while providing a complete inspection within each 12 calendar months. It requires an approved framework, qualified supervision, records, current technical data, and continuous airworthy status.','p91','§ 91.409(d)'),
  C('AW-025','airworthiness','What is a special flight permit commonly used for?','It may authorize a specific flight of an aircraft that does not currently meet applicable airworthiness requirements but is capable of safe flight, such as repositioning for repairs. The FAA-issued permit’s conditions and limitations control; it is not a blanket waiver.','p21','§ 21.197'),
  C('AW-026','airworthiness','Without an MEL, what findings are necessary before deferring inoperative equipment under § 91.213(d)?','First confirm the aircraft is eligible to use § 91.213(d). The failed item must not be required by its VFR-day certification rules, applicable equipment list or KOEL, operating rules, or an AD. Properly remove or deactivate and placard it, make required records, and determine it is not a hazard. An S-LSA must also meet § 91.327 and its operating instructions.','p91','§ 91.213(d)'),
  C('AW-027','airworthiness','Does placing an “INOPERATIVE” placard on failed equipment by itself make the aircraft legal to fly?','No. The item must first be eligible for deferral, then removed or deactivated and placarded using the procedures and authorized persons required by § 91.213. Maintenance entries are required when maintenance is performed, and safety must be evaluated.','p91','§ 91.213(d)'),
  C('AW-028','airworthiness','Does the familiar § 91.205 day-VFR equipment list automatically define every aircraft’s requirements?','No. Section 91.205 is written for powered civil aircraft with standard U.S. airworthiness certificates. Certification basis, operating limitations, equipment lists, ADs, and rules for special-category aircraft such as S-LSA may impose different or additional requirements.','p91','§§ 91.205, 91.327'),
  C('AW-029','airworthiness','What equipment does § 91.205 add for night VFR beyond the applicable day-VFR equipment?','Approved position and anticollision lights, an adequate electrical-energy source, and accessible spare fuses when the aircraft uses replaceable fuses; an electric landing light is additionally required when operated for hire. Apply aircraft-specific requirements and permitted exceptions.','p91','§ 91.205(c)'),
  C('AW-030','airworthiness','What happens to equipment legally deferred under § 91.213(d) at the next required inspection?','The owner or operator must have the inoperative item repaired, replaced, removed, or inspected at that inspection. Deferral is controlled maintenance status, not permission to ignore the discrepancy indefinitely.','p91','§ 91.405(c)'),

  C('AS-001','airspace','What must be established before entering Class B airspace?','An explicit ATC clearance. Hearing your call sign is not the same as hearing “cleared into the Class Bravo.” Confirm pilot, aircraft, equipment, and cloud-clearance requirements too.','p91','§ 91.131'),
  C('AS-002','airspace','What communication is needed before entering Class C airspace?','Two-way radio communication with the ATC facility providing air traffic services before entry and maintained while inside. The controller response must include your aircraft identification.','p91','§ 91.130'),
  C('AS-003','airspace','What communication is needed before entering Class D airspace?','Two-way radio communication with the control tower before entry and maintained while inside. If the response omits your aircraft identification, communication is not established for entry.','p91','§ 91.129'),
  C('AS-004','airspace','What are the familiar basic VFR minima in Class C, D, and E below 10,000 feet MSL?','3 statute miles visibility and cloud clearance of 500 feet below, 1,000 feet above, and 2,000 feet horizontal. Check the full table because airspace, altitude, day/night, and aircraft can change the rule.','p91','§ 91.155'),
  C('AS-005','airspace','What is the basic Class G daytime minimum at or below 1,200 feet AGL for an airplane?','1 statute mile visibility and clear of clouds. At night and in other Class G altitude bands, different minima apply—use the current § 91.155 table.','p91','§ 91.155'),
  C('AS-006','airspace','What does a segmented circle help a pilot determine?','Traffic-pattern direction and landing/runway information when installed, using wind indicators and traffic-pattern indicators. It does not replace observing traffic, windsocks, NOTAMs, or radio calls.','aim','Airport operations'),
  C('AS-007','airspace','What does a runway holding-position marking mean when approaching a runway?','Two solid and two dashed yellow lines. From the taxiway side, stop before the solid lines unless cleared to cross or enter when a clearance is required. Read back runway hold-short instructions.','aim','Airport markings'),
  C('AS-008','airspace','What is a reliable runway-incursion defense before taxi?','Brief the airport diagram, expected route, hotspots, and hold-short points; keep the diagram available; use sterile-cockpit discipline; write down complex clearances; and stop to clarify uncertainty.','aim','Runway safety'),
  C('AS-009','airspace','Does ATC traffic information transfer collision-avoidance responsibility?','No. When weather permits, pilots must see and avoid. Scan outside, make predictable position reports where appropriate, use lights, and never let an electronic traffic display replace visual clearing.','p91','§ 91.113(b)'),
  C('AS-010','airspace','How should a pilot treat special-use airspace shown on a chart?','Identify its type, vertical/lateral limits, times, and controlling agency. Prohibited and restricted areas have legal entry constraints; warning, MOA, alert, and controlled-firing areas call for different risk and coordination decisions.','aim','Airspace chapter'),
  C('AS-011','airspace','What are the normal vertical limits of Class A airspace?','Generally from 18,000 feet MSL up to and including FL600, including specified offshore airspace. Class A is not specifically depicted on ordinary aeronautical charts.','aim','AIM 3-2-2'),
  C('AS-012','airspace','What operating rule applies inside Class A airspace?','Unless otherwise authorized, every operation must be conducted under IFR with the required clearance, pilot qualifications, and equipment. VFR flight is not permitted merely because the weather is clear.','aim','AIM 3-2-2'),
  C('AS-013','airspace','Why should a pilot not assume every Class B area has the same shape or ceiling?','Each Class B area is individually tailored around a major airport to contain its instrument procedures. Many resemble an upside-down wedding cake, but the actual floors, shelves, and ceiling must be read from the current chart.','aim','AIM 3-2-3'),
  C('AS-014','airspace','Who may act as PIC inside Class B airspace?','Generally a private pilot or higher, or a recreational, sport, or student pilot who has met the applicable training and endorsement requirements. Twelve named primary Class B airports require at least a private pilot certificate for takeoff or landing.','aim','AIM 3-2-3'),
  C('AS-015','airspace','What is the Mode C veil around most primary Class B airports?','Airspace within 30 NM of a listed primary airport, from the surface to 10,000 feet MSL, where an operable altitude-reporting transponder and ADS-B Out are generally required unless an exception or ATC-authorized deviation applies.','aim','AIM 3-2-3'),
  C('AS-016','airspace','What is the usual shape and size of Class C airspace?','It is individually tailored but commonly has a 5-NM-radius core from the surface to 4,000 feet above airport elevation and a 10-NM-radius shelf beginning no lower than 1,200 feet AGL and extending to that same top. Read the chart for actual dimensions.','aim','AIM 3-2-4'),
  C('AS-017','airspace','What services does a participating VFR aircraft receive in Class C airspace?','After two-way communication and radar contact, ATC sequences VFR aircraft to the primary airport, provides Class C services, and separates VFR aircraft from IFR aircraft. Pilots still retain see-and-avoid, terrain, wake, and weather responsibilities.','aim','AIM 3-2-4'),
  C('AS-018','airspace','What happens to part-time Class D airspace when its tower closes?','The surface area changes to Class E or Class G as published in the Chart Supplement. Class D is generally surface to 2,500 feet above airport elevation while active, but its actual dimensions and schedule are charted or published.','aim','AIM 3-2-5'),
  C('AS-019','airspace','What is Class E airspace?','Controlled airspace that is neither Class A, B, C, nor D and is designated for terminal, transition, airway, en route, or offshore purposes. VFR entry normally requires no clearance or radio contact, but weather and equipment rules still apply.','aim','AIM 3-2-6'),
  C('AS-020','airspace','What is a Class E surface area for an airport?','Class E controlled airspace beginning at the surface and configured to contain instrument procedures where suitable weather reporting and communication to the runway surface exist. It may also replace part-time Class C or D when the tower is closed.','aim','AIM 3-2-6'),
  C('AS-021','airspace','What is a Class E surface-area extension?','Controlled airspace beginning at the surface that protects portions of instrument procedures extending beyond a Class B, C, D, or E surface area. It does not by itself create a VFR communication requirement.','aim','AIM 3-2-6'),
  C('AS-022','airspace','What does a shaded magenta vignette indicate on a sectional chart?','Class E airspace begins at 700 feet AGL on the faded side of the boundary. It is a transition area, not a Class E surface area, and remains effective continuously.','aim','AIM 3-2-6'),
  C('AS-023','airspace','What does a shaded blue vignette indicate on a sectional chart?','Class E airspace begins at 1,200 feet AGL on the faded side of the boundary. Do not confuse the vignette with a surface area or assume the floor without checking which side of the boundary applies.','aim','AIM 3-2-6'),
  C('AS-024','airspace','Where does Class E exist when it has not been designated at a lower altitude?','Generally from 14,500 feet MSL up to but not including 18,000 feet MSL, subject to stated geographic and terrain exclusions. Airspace above FL600 is also Class E.','aim','AIM 3-2-6'),
  C('AS-025','airspace','What does Class G airspace mean operationally?','It is uncontrolled airspace—ATC does not provide the same controlled-airspace separation structure there. VFR pilots still must comply with visibility, cloud-clearance, minimum-altitude, right-of-way, and airport-operation rules.','aim','AIM 3-3'),
  C('AS-026','airspace','What are the basic VFR minima in Class E at or above 10,000 feet MSL?','5 statute miles visibility, 1,000 feet below clouds, 1,000 feet above, and 1 statute mile horizontal. These larger margins reflect higher speeds and closure rates.','aim','AIM 3-1-4'),
  C('AS-027','airspace','What are the basic airplane VFR minima in Class G at night at or below 1,200 feet AGL?','Normally 3 statute miles visibility and cloud clearance of 500 feet below, 1,000 feet above, and 2,000 feet horizontal. The narrow airport-traffic-pattern exception in § 91.155(b) has additional conditions.','aim','AIM 3-1-4'),
  C('AS-028','airspace','What is a prohibited area?','Defined airspace in which aircraft flight is prohibited for security or national-welfare reasons. It is regulatory airspace established under Part 73 and depicted on aeronautical charts.','aim','AIM 3-4-2'),
  C('AS-029','airspace','What is a restricted area?','Regulatory airspace containing unusual, often invisible hazards such as artillery, aerial gunnery, or missiles. Entry while active requires authorization from the using or controlling agency; check times, altitudes, status, and NOTAMs.','aim','AIM 3-4-3'),
  C('AS-030','airspace','What is a warning area?','Airspace beginning 3 NM outward from the U.S. coast that contains activity potentially hazardous to nonparticipating aircraft. It may lie over domestic or international waters and warns rather than automatically prohibits entry.','aim','AIM 3-4-4'),
  C('AS-031','airspace','What is a military operations area, and may a VFR pilot enter one?','An MOA separates specified military training from IFR traffic. VFR entry is not prohibited, but activity may include high-speed, abrupt maneuvers; obtain current status, use extreme caution, and contact the controlling agency for advisories before entering an active MOA.','aim','AIM 3-4-5'),
  C('AS-032','airspace','What is an alert area?','Charted airspace with a high volume of pilot training or unusual aerial activity. All participants remain subject to the regulations, and both participating and transiting pilots share collision-avoidance responsibility.','aim','AIM 3-4-6'),
  C('AS-033','airspace','Why are controlled firing areas not charted?','Potentially hazardous activity is suspended immediately when a spotter, radar, or ground lookout detects an approaching aircraft, so a nonparticipating pilot should not need to alter course around the area.','aim','AIM 3-4-7'),
  C('AS-034','airspace','What is a national security area?','Defined airspace over locations requiring increased security and protection of ground facilities. Pilots are normally requested to avoid it voluntarily, but flight may be temporarily prohibited by regulation and NOTAM.','aim','AIM 3-4-8'),
  C('AS-035','airspace','How can a pilot obtain the current status of special-use airspace?','Contact the using or controlling agency shown in the chart margin, check applicable ARTCC and airspace NOTAMs, and use the FAA SUA planning information. Published hours alone do not guarantee that an area is active or inactive now.','aim','AIM 3-4-9'),
  C('AS-036','airspace','What is a terminal radar service area?','A charted area where participating VFR pilots can receive enhanced radar services. Participation is generally voluntary and a TRSA does not change the underlying airspace class, so comply with the Class B, C, D, E, or G rules actually in effect.','aim','AIM 3-5-6'),
  C('AS-037','airspace','What is the difference between an IR and a VR military training route?','IR routes are flown under IFR regardless of weather; VR routes are flown under VFR with the special visibility and ceiling requirements stated in the AIM. Both can support low-altitude, high-speed military operations.','aim','AIM 3-5-2'),
  C('AS-038','airspace','What do three versus four digits in a military training route identifier indicate?','A four-digit IR or VR route has no segment above 1,500 feet AGL. A three-digit route has one or more segments above 1,500 feet AGL. Route width can extend several miles from the charted centerline.','aim','AIM 3-5-2'),
  C('AS-039','airspace','How should a pilot identify and avoid conflicts with parachute-jump operations?','Review sectional symbols, the Chart Supplement, NOTAMs, and ATC or Flight Service information; monitor the appropriate frequency near an active site. Jump pilots normally announce position, altitude, and approximate start and completion times, but see-and-avoid remains essential.','aim','AIM 3-5-4'),
  C('AS-040','airspace','How do VFR flyways, corridors, and transition routes differ?','A flyway is a planning path intended to avoid Class B and needs no Class B clearance. A corridor is defined airspace through Class B where no ATC clearance or communication is required. A transition route is a specific published course; communication is required where it crosses controlled surface airspace and a clearance is required for any Class B portion.','aim','AIM 3-5-5'),
  C('AS-041','airspace','What should a pilot understand about an SATR or SFRA?','Special Air Traffic Rules and Special Flight Rules Areas impose location-specific procedures beyond the ordinary airspace-class rules. Review the governing regulation, current chart, NOTAMs, required training, flight-plan, communication, and equipment provisions before entry.','aim','AIM 3-5-7'),
  C('AS-042','airspace','Why must a pilot verify a chart’s effective date even when using a familiar route?','Airspace, frequencies, obstacles, airports, and procedures change. Use a current chart and Chart Supplement and check NOTAMs for changes between publication cycles; an old chart image or saved screenshot is not reliable navigation data.','aim','FAA Chart User’s Guide'),
  C('AS-043','airspace','What does a sectional chart’s Maximum Elevation Figure represent?','The highest charted terrain or obstacle elevation in a 30-minute latitude-by-30-minute longitude quadrangle, adjusted for possible error and rounded up to the next 100 feet. It is not a guaranteed obstacle-clearance altitude and does not account for every operational factor.','aim','FAA Chart User’s Guide'),
  C('AS-044','airspace','What do blue and magenta airport symbols generally indicate on a sectional?','Airports with operating control towers are shown in blue; other airports are generally shown in magenta. Confirm tower hours and airport details in the Chart Supplement because part-time status can change the applicable procedures and airspace.','aim','FAA Chart User’s Guide'),
  C('AS-045','airspace','How are runway designation numbers determined?','Use the whole number nearest one-tenth of the runway centerline’s magnetic azimuth in the direction of approach. Parallel runways add L, C, or R; magnetic variation can eventually require a runway-number change.','aim','AIM 2-3-3'),
  C('AS-046','airspace','What operations are permitted on pavement before a displaced threshold?','It is unavailable for landing from that direction, but normally may be used for takeoff in either direction and for landing rollout from the opposite direction. White arrows lead to the relocated landing threshold; verify declared distances and NOTAMs.','aim','AIM 2-3-3'),
  C('AS-047','airspace','What do yellow chevrons on pavement mean?','The blast-pad, stopway, or other pavement is unusable for landing, takeoff, and taxiing. Do not confuse it with displaced-threshold pavement marked by white arrows, which permits specified operations.','aim','AIM 2-3-3'),
  C('AS-048','airspace','How do the principal airport sign colors differ?','Red with white lettering is a mandatory instruction. Black with yellow lettering and a yellow border identifies the taxiway or runway you are on. Yellow with black lettering and an arrow gives direction or destination information.','aim','AIM 2-3-7 through 2-3-11'),
  C('AS-049','airspace','What colors identify common runway and taxiway lights?','Runway edge lights are normally white, changing to yellow in the caution zone on an instrument runway; runway-end lights show red toward the runway and green toward the approach. Taxiway edge lights are blue and taxiway centerline lights are green.','aim','AIM 2-1-4 and 2-1-10'),
  C('AS-050','airspace','How do PAPI or VASI colors indicate approach path?','For the common four-light PAPI, two white and two red means on path; more white means high and more red means low. A standard two-bar VASI shows red over white on path, white over white high, and red over red low. Use the system only within its published coverage and remain aligned with the runway.','aim','AIM 2-1-2'),

  C('WX-001','weather','What is the difference between a METAR and a TAF?','A METAR is an observation of conditions at an airport; a TAF is a forecast for a defined area around an airport over its valid period. Compare multiple reports and forecasts rather than treating either as a route-wide picture.','wx','Weather products'),
  C('WX-002','weather','What does a rapidly falling altimeter setting often suggest?','Approaching lower pressure and potentially worsening weather. Trend pressure with radar, satellite, winds, ceilings, forecasts, and pilot reports instead of using it as a stand-alone go/no-go signal.','wx','Pressure systems'),
  C('WX-003','weather','Why is a close temperature–dew point spread important?','It signals air near saturation, increasing the likelihood of fog, low cloud, or precipitation when further cooling or moisture occurs. Terrain, wind, time of day, and frontal movement shape what happens next.','wx','Moisture and stability'),
  C('WX-004','weather','What is the safest default strategy for a thunderstorm cell?','Avoid it by a wide margin and never try to fly beneath the anvil or through a gap based only on onboard weather. Hazardous turbulence, hail, lightning, wind shear, and outflow can extend beyond visible precipitation.','aim','Hazardous weather'),
  C('WX-005','weather','Why can datalink weather be dangerous when used tactically?','Displayed radar is delayed by collection, processing, transmission, and display. It is strategic information for avoidance—not a real-time picture for threading between cells. Check the product age and trend.','aim','Datalink weather'),
  C('WX-006','weather','What conditions raise carburetor-icing risk?','Moist air and certain temperature ranges, including conditions well above freezing, especially at reduced power. Know aircraft indications and follow the CTLS/Rotax procedures and checklist for the installed configuration.','hand','Aircraft systems'),
  C('WX-007','weather','How does a temperature inversion affect stability and visibility?','It is stable and suppresses vertical mixing, often trapping haze, smoke, or moisture below it. Smooth air may coexist with poor visibility, while wind shear or turbulence can occur near the boundary.','wx','Atmospheric stability'),
  C('WX-008','weather','What is a practical preflight icing question for a VFR-only CTLS?','Could visible moisture and temperatures aloft create an icing encounter anywhere along the route or escape path? Because flight into icing and IMC are prohibited by the cited AOI, avoid the exposure rather than plan to manage it.','ct','§ 2.6, p. 2-4'),
  C('WX-009','weather','Why are gust spread and crosswind trend more useful than a single wind value?','They reveal variability and workload. Compare runway geometry, demonstrated crosswind information, surface friction, obstacles, personal minimums, and trends—not just the latest steady wind.','wx','Surface wind'),
  C('WX-010','weather','What makes a weather briefing “complete” for decision-making?','Current observations, forecasts, winds aloft, hazards, NOTAMs/TFRs, alternate plans, and trends for departure, route, destination, and escape options—then an honest comparison with aircraft capability and personal minimums.','p91','§ 91.103'),
  C('WX-011','weather','What values define standard sea-level atmosphere for common aviation calculations?','Pressure of 29.92 inches Hg and temperature of 15°C. In the lower atmosphere, standard temperature decreases about 2°C per 1,000 feet; actual conditions often differ, which changes density and performance.','wx','Atmospheric structure'),
  C('WX-012','weather','What is pressure altitude?','The altitude indicated when the altimeter is set to 29.92 inches Hg. It is a reference used with temperature to determine density altitude and aircraft performance.','wx','Pressure and altitude'),
  C('WX-013','weather','What conditions increase density altitude?','Low pressure, high temperature, and higher elevation increase density altitude; humidity adds a smaller effect. Expect less engine power and propeller thrust, longer takeoff, and weaker climb. At the same indicated airspeed, true airspeed is higher.','wx','Density altitude'),
  C('WX-014','weather','What does “high to low, look out below” warn about?','Flying from higher pressure toward lower pressure without updating the altimeter makes true altitude lower than indicated. Obtain current settings and maintain extra terrain and obstacle awareness.','wx','Altimeter errors'),
  C('WX-015','weather','How does colder-than-standard air affect true altitude?','True altitude is lower than indicated because pressure levels are compressed in cold air. The error grows with height above the reporting station and temperature departure, making cold-temperature corrections important where published.','wx','Temperature effects on altitude'),
  C('WX-016','weather','What does a stronger pressure gradient usually mean for wind?','Closely spaced pressure contours indicate a larger pressure-gradient force and generally stronger wind. Terrain, friction, stability, and altitude still determine the wind actually encountered.','wx','Pressure systems and wind'),
  C('WX-017','weather','How does the Coriolis force affect large-scale wind in the Northern Hemisphere?','It deflects moving air to the right. The effect increases with wind speed and latitude and is negligible at the equator; it changes direction rather than initiating the airflow.','wx','Forces affecting wind'),
  C('WX-018','weather','Why does surface wind cross isobars toward lower pressure?','Surface friction slows the wind and weakens Coriolis deflection, allowing the pressure-gradient force to turn flow inward toward lower pressure. Aloft, wind is more nearly parallel to height contours.','wx','Surface wind'),
  C('WX-019','weather','What drives sea breezes and land breezes?','Land changes temperature faster than water. Daytime heating favors onshore sea-breeze flow; nighttime cooling can favor an offshore land breeze. The boundary may shift wind and trigger convergence or convection.','wx','Local wind circulations'),
  C('WX-020','weather','When are valley and mountain breezes most likely?','Daytime heating favors upslope and up-valley flow; nighttime cooling favors downslope and down-valley drainage. Terrain channeling can strengthen or redirect the circulation.','wx','Terrain-driven winds'),
  C('WX-021','weather','What determines whether a displaced parcel is stable or unstable?','Compare how the parcel cools or warms with the surrounding environmental temperature change. If it stays warmer and more buoyant, instability favors continued vertical motion; if cooler, stability resists it.','wx','Atmospheric stability'),
  C('WX-022','weather','What weather is commonly associated with stable air?','Stratiform clouds, smooth air, steady precipitation, haze or fog, and poorer visibility from limited vertical mixing. Stable does not mean hazard-free; icing and low ceilings can be widespread.','wx','Stable air'),
  C('WX-023','weather','What weather is commonly associated with unstable air?','Cumuliform clouds, showery precipitation, turbulence, gusty winds, and generally better visibility between showers. Sufficient moisture and lift can turn instability into deep convection.','wx','Unstable air'),
  C('WX-024','weather','Why can a temperature inversion mark a wind-shear layer?','Stable air suppresses mixing, so wind speed or direction may differ sharply across the inversion. Expect possible turbulence near the boundary even when air within the layer is smooth.','wx','Inversions and wind shear'),
  C('WX-025','weather','How are relative humidity, temperature, and dew point connected?','Relative humidity rises as air cools toward its dew point without losing moisture. A narrowing temperature–dew point spread signals increasing saturation risk, but local lift, terrain, wind, and time trends determine whether cloud or fog forms.','wx','Atmospheric moisture'),
  C('WX-026','weather','What basic process creates most clouds?','Moist air is cooled to saturation, usually by rising and expanding, so water vapor condenses or deposits onto tiny particles. Continued lift, moisture supply, temperature, and stability determine cloud depth and character.','wx','Cloud formation'),
  C('WX-027','weather','What are the principal ways air is lifted?','Convection, terrain or orographic lift, convergence, and frontal lift. Several mechanisms can act together, so connect the visible clouds to the larger wind, terrain, and pressure pattern.','wx','Lifting mechanisms'),
  C('WX-028','weather','How can orographic lift change weather across a ridge?','Air forced upslope cools and may form cloud or precipitation on the windward side. Descending lee-side air warms and dries, but may also produce strong downdrafts, waves, rotors, and turbulence.','wx','Orographic effects'),
  C('WX-029','weather','What do cumuliform and stratiform clouds suggest about vertical motion?','Cumuliform clouds signal localized, stronger vertical currents and instability. Stratiform clouds reflect broader, gentler lift and stability; either type can contain icing, turbulence, and reduced visibility.','wx','Cloud forms'),
  C('WX-030','weather','How can surface temperature and dew point roughly estimate a convective cloud base?','Divide the Celsius temperature–dew point spread by about 2.5 and multiply by 1,000 feet for an approximate AGL base. It is only a planning estimate and does not replace observations or forecasts.','wx','Cloud-base estimation'),
  C('WX-031','weather','What cloud layer defines a reported ceiling?','The height AGL of the lowest broken or overcast layer, or vertical visibility into an obscuration. Few, scattered, and clear conditions do not constitute a ceiling.','aim','METAR sky condition'),
  C('WX-032','weather','What does vertical visibility mean in a weather report?','The observer or sensor cannot determine a distinct cloud base because an obscuration extends upward; VV gives the height visible into it. Treat low VV as a ceiling and a sign of severely restricted visual reference.','aim','METAR sky condition'),
  C('WX-033','weather','What conditions favor radiation fog?','Clear or mostly clear skies, moist air near the surface, light wind, and strong nighttime cooling over land. It often forms late at night or near sunrise and may dissipate after heating, unless cloud or weak sun delays improvement.','wx','Fog'),
  C('WX-034','weather','What conditions favor advection fog?','Moist air moving over a colder surface. Unlike radiation fog, moderate wind can sustain and deepen it, and it may persist through daytime while the air-surface temperature contrast remains.','wx','Fog'),
  C('WX-035','weather','How does upslope fog form?','Moist air is pushed up rising terrain, expands, and cools to saturation. It can cover a broad slope and persist as long as upslope flow continues, even without nighttime cooling.','wx','Fog'),
  C('WX-036','weather','How does steam fog form?','Cold air moves over warmer water, adding moisture to the lowest layer until saturation occurs. It can create shallow but locally dense fog and may contribute to icing in very cold conditions.','wx','Fog'),
  C('WX-037','weather','How can precipitation produce fog or very low cloud?','Rain falling into cooler or drier air evaporates, adding moisture while cooling the layer toward saturation. This often occurs ahead of warm fronts and can lower ceilings and visibility before surface precipitation becomes heavy.','wx','Fog and precipitation'),
  C('WX-038','weather','What is an air mass?','A large body of air with relatively uniform temperature and moisture characteristics acquired over its source region. Its modification over new terrain or water helps explain changing stability, cloud, and visibility.','wx','Air masses'),
  C('WX-039','weather','What weather pattern commonly accompanies a cold front?','A relatively narrow zone of lift with shifting, often gusty winds; showery precipitation or thunderstorms when unstable; turbulence; and improving visibility behind the front, though exact weather depends on moisture and speed.','wx','Fronts'),
  C('WX-040','weather','What weather pattern commonly accompanies a warm front?','Widespread layered cloud and precipitation may spread far ahead of the surface front, with ceilings and visibility lowering progressively. Freezing precipitation is possible when warm air overruns a shallow subfreezing layer.','wx','Fronts'),
  C('WX-041','weather','Why can a stationary front create a prolonged weather problem?','Neither air mass displaces the other, so cloud, precipitation, low ceilings, or convection can persist or redevelop over the same area. Small frontal movement can still shift local conditions substantially.','wx','Fronts'),
  C('WX-042','weather','What is an occluded front?','A faster cold front overtakes a warm front, lifting the warm air from the surface. The mature system can combine widespread cloud and precipitation with embedded convection, icing, turbulence, and complex wind shifts.','wx','Fronts'),
  C('WX-043','weather','Why is a dryline important to pilots?','It is a sharp moisture boundary rather than a conventional temperature front. Strong convergence and unstable moist air can focus rapid thunderstorm development, sometimes with little advance visual warning.','wx','Moisture boundaries'),
  C('WX-044','weather','What observations may signal that a front is passing?','A wind shift, pressure tendency reversal, temperature or dew point change, changing cloud and precipitation, and visibility trend. Do not identify a front from a single element; compare stations and time history.','wx','Frontal passage'),
  C('WX-045','weather','How do surface winds generally circulate around pressure systems in the Northern Hemisphere?','Counterclockwise and inward around lows; clockwise and outward around highs. Terrain and fronts distort the pattern, and winds aloft behave differently because friction is weaker.','wx','Pressure systems'),
  C('WX-046','weather','What produces mechanical turbulence?','Wind disturbed by terrain, buildings, trees, and surface roughness. It strengthens with wind speed and instability and can extend well downwind of the obstruction, especially near ridges and airport structures.','wx','Turbulence'),
  C('WX-047','weather','What produces thermal turbulence?','Uneven surface heating creates rising thermals and compensating sinking air. It is often strongest over dark or dry surfaces during sunny afternoons and can cause abrupt vertical motion near the ground.','wx','Turbulence'),
  C('WX-048','weather','What is clear-air turbulence?','Turbulence in cloudless regions, normally above 15,000 feet and often near strong wind shear along jet-stream boundaries. It may also occur near cirrus or lenticular clouds, so forecasts, wind analysis, and PIREPs are especially important.','wx','Clear-air turbulence'),
  C('WX-049','weather','What conditions support a mountain-wave system?','Strong wind crossing a ridge, increasing wind with height, and a stable layer near ridge level. Waves can extend far downwind and produce severe turbulence, strong vertical currents, and rotors.','wx','Mountain waves'),
  C('WX-050','weather','Where is rotor turbulence found in a mountain-wave pattern?','Typically beneath the wave on the lee side, near and below ridge level. Rotors can be violent even when a smooth lenticular cloud marks the wave above.','wx','Mountain waves'),
  C('WX-051','weather','What does a standing lenticular cloud indicate?','Strong, organized wave motion in stable air. The cloud may appear stationary while air flows through it; expect significant winds and possible severe turbulence or downdrafts nearby.','wx','Mountain-wave clouds'),
  C('WX-052','weather','Why is mountain obscuration more than a ceiling problem?','Clouds can hide ridges, passes, and rising terrain while wind produces turbulence and downdrafts. A route that looks open from the valley may close rapidly ahead with no safe turn-around room.','wx','Mountain obscuration'),
  C('WX-053','weather','Why can lee-side downdrafts overwhelm climb performance?','Descending air may exceed the aircraft’s climb capability while groundspeed toward terrain is high. Pitching slower may only reduce margin; turn toward lower terrain or escape early instead of trying to outclimb the air.','wx','Terrain-induced wind'),
  C('WX-054','weather','What makes a ridge crossing plan conservative?','Cross with adequate terrain clearance, favorable wind and cloud margins, and an escape path—often approaching at an angle rather than committing perpendicular to the ridge. Reassess using actual winds, downdrafts, and groundspeed before crossing.','wx','Mountain flying weather'),
  C('WX-055','weather','How should a useful turbulence PIREP be described?','Report location, time, altitude, aircraft type, intensity, duration or frequency, and whether it occurred in cloud. Intensity depends partly on aircraft response, so aircraft type makes the report more meaningful.','aim','Turbulence PIREPs'),
  C('WX-056','weather','What is low-level wind shear?','A rapid change in wind speed or direction over a short distance near the surface. It can abruptly change airspeed, lift, climb path, and control requirements during takeoff or landing.','wx','Wind shear'),
  C('WX-057','weather','Why is a microburst especially dangerous on approach or departure?','Its compact downdraft and spreading outflow can produce a headwind increase, strong sink, then a tailwind loss of airspeed in seconds—often below the altitude needed to recover.','aim','Microbursts'),
  C('WX-058','weather','What is the priority after encountering a microburst or severe wind shear?','Apply the aircraft’s published wind-shear escape guidance immediately, maximize appropriate performance, avoid configuration changes that reduce lift unless directed, and accept altitude or airspeed deviations needed to escape. Prevention and early go-around are far safer.','aim','Microbursts'),
  C('WX-059','weather','What is a gust front?','The leading edge of thunderstorm outflow. It may travel far from the rain shaft and cause sudden wind shifts, gusts, turbulence, blowing dust, and low-level wind shear at an otherwise clear airport.','wx','Convective outflow'),
  C('WX-060','weather','What belongs in a wind-shear PIREP?','Location, time, altitude, aircraft type, the gain or loss of airspeed, vertical-speed change, and the altitude range over which it occurred. Prompt reports help ATC warn following aircraft.','aim','Wind-shear PIREPs'),
  C('WX-061','weather','What three ingredients are required for thunderstorm development?','Sufficient moisture, an unstable lapse rate, and a lifting mechanism. Removing any one limits development; strong shear can organize storms and increase their duration and severity.','wx','Convection'),
  C('WX-062','weather','What are the three stages of an ordinary thunderstorm cell?','Cumulus, mature, and dissipating. A multicell or organized system contains cells at different stages, so one weakening portion does not mean the complex is safe.','wx','Thunderstorm life cycle'),
  C('WX-063','weather','What dominates the cumulus stage of a thunderstorm?','Updrafts. Growing towers can develop rapidly, and severe turbulence or icing may already exist before precipitation reaches the ground.','wx','Thunderstorm life cycle'),
  C('WX-064','weather','What marks the mature stage of a thunderstorm?','Precipitation reaches the surface and downdrafts coexist with strong updrafts. This is typically the most hazardous stage, with lightning, hail, turbulence, wind shear, and possible tornadoes.','wx','Thunderstorm life cycle'),
  C('WX-065','weather','Is a dissipating thunderstorm safe to approach?','No. Downdrafts dominate, but lightning, heavy precipitation, turbulence, gust fronts, and wind shear can continue after the visible tower weakens. Maintain avoidance until the entire hazard has passed.','wx','Thunderstorm life cycle'),
  C('WX-066','weather','How far can lightning extend from a thunderstorm?','Well beyond the rain shaft and even outside the apparent cloud boundary. Blue sky overhead does not prove safety when an active cell or anvil is nearby.','wx','Thunderstorm hazards'),
  C('WX-067','weather','Why is hail possible outside the visible rain core?','Strong updrafts can carry hail high into the storm and winds can eject it beneath or beyond the anvil. Hail may occur in clear air near a powerful cell and at temperatures above freezing.','wx','Thunderstorm hazards'),
  C('WX-068','weather','What does a tornado or funnel-cloud report imply for flight planning?','A violently rotating convective environment with extreme wind, debris, turbulence, and rapid change. Avoid the entire storm system and its outflow by a very large margin; do not use visual maneuvering to investigate it.','wx','Severe convection'),
  C('WX-069','weather','Why is flying beneath a thunderstorm anvil unsafe?','The anvil can contain lightning, turbulence, icing, and hail falling far from the core. It also hides the vertical structure and movement of the storm.','aim','Thunderstorm flying'),
  C('WX-070','weather','What minimum thunderstorm separation does the AIM recommend for severe or intense cells?','Circumnavigate any storm identified as severe, or giving an intense radar echo, by at least 20 nautical miles. Use more distance downwind of the anvil and whenever motion, visibility, terrain, or escape options are uncertain.','aim','Thunderstorm flying'),
  C('WX-071','weather','When may a pilot consider flying between two intense or extreme radar echoes?','The echoes should be separated by at least 40 nautical miles—and that is not an assurance of safety. Growth, movement, anvil hazards, radar limitations, terrain, and escape options may make the gap unusable.','aim','Thunderstorm flying'),
  C('WX-072','weather','Why should a pilot never try to fly beneath a thunderstorm?','Extreme turbulence, hail, lightning, heavy precipitation, downdrafts, and gust-front wind shear can exist below the cloud even with apparent forward visibility. Terrain clearance and escape options can disappear instantly.','aim','Thunderstorm flying'),
  C('WX-073','weather','Why are embedded or nighttime thunderstorms especially hazardous?','Their boundaries and spacing cannot be judged visually, and layered cloud may hide growth or anvil structure. Use forecasts, advisories, lightning and radar trends for strategic avoidance—not close tactical navigation.','wx','Convective hazards'),
  C('WX-074','weather','What is attenuation on airborne weather radar?','Heavy precipitation absorbs or scatters radar energy so little returns from weather beyond it, creating a misleading dark area or “shadow.” Treat a strong cell with weak returns behind it as blocked information, not a safe corridor.','wx','Weather radar'),
  C('WX-075','weather','Why is antenna tilt management essential on airborne weather radar?','Too low a tilt fills the display with ground returns; too high can overscan hazardous precipitation. Scan multiple tilt settings and ranges, understand stabilization, and never use a single picture to pick through cells.','wx','Weather radar'),
  C('WX-076','weather','What two ingredients are generally needed for structural icing?','Visible liquid moisture and an aircraft surface at or below freezing. Supercooled droplets can remain liquid below 0°C and freeze on impact; icing intensity depends on droplet size, liquid-water content, temperature, and exposure.','wx','Aircraft icing'),
  C('WX-077','weather','What conditions favor rime ice, and what does it look like?','Small supercooled droplets freeze rapidly, trapping air and forming a rough, opaque deposit, often along leading edges. Its roughness can seriously degrade lift and increase drag.','wx','Aircraft icing'),
  C('WX-078','weather','What conditions favor clear or glaze ice, and why is it dangerous?','Larger supercooled droplets spread before freezing, producing dense, hard ice that is often lumpy and translucent rather than perfectly clear. It can form horns or run back beyond protected surfaces; its shape and aerodynamic distortion are more important than its transparency.','wx','Aircraft icing'),
  C('WX-079','weather','What is mixed ice?','A combination of clear and rime characteristics created by varying droplet sizes and freezing rates. The irregular accumulation can form rapidly and is difficult to predict from appearance alone.','wx','Aircraft icing'),
  C('WX-080','weather','Why are supercooled large droplets especially threatening?','They can strike and flow beyond normal leading-edge protection before freezing, causing rapid runback ice and control or tailplane problems. Freezing drizzle and freezing rain are key warning signs.','wx','Supercooled large droplets'),
  C('WX-081','weather','What temperature structure produces freezing rain?','Snow melts in an above-freezing layer aloft, then falls through a shallow subfreezing layer and remains liquid until impact. It signals supercooled large droplets and potentially severe icing—avoid the area.','wx','Freezing precipitation'),
  C('WX-082','weather','Why is freezing drizzle hazardous even without heavy precipitation?','Its small supercooled drops can be hard to see yet accumulate quickly, including beyond protected areas. It often occurs in shallow cloud and can indicate supercooled large-droplet conditions.','wx','Freezing precipitation'),
  C('WX-083','weather','What can ice pellets reveal about the temperature profile aloft?','They often mean snow melted in a warm layer, then refroze in a deeper subfreezing layer before reaching the surface. Freezing rain may exist nearby where the cold layer is shallower.','wx','Winter precipitation'),
  C('WX-084','weather','Why must even thin frost be removed before takeoff?','Frost roughens the aerodynamic surface, disrupts smooth airflow, reduces maximum lift, and increases drag and stall speed. A wing that looks only lightly frosted is not aerodynamically clean.','wx','Ground icing'),
  C('WX-085','weather','What is induction icing other than carburetor ice?','Ice can block an engine air inlet, filter, or alternate-air path when supercooled moisture freezes on impact. Know the installed induction system, indications, alternate-air procedure, and aircraft checklist.','wx','Engine icing'),
  C('WX-086','weather','What do the standard trace, light, moderate, and severe icing intensities mean operationally?','Trace is perceptible and slightly exceeds sublimation; consider leaving before it worsens. Light may require occasional ice-protection use, and prolonged flight can become a problem. Moderate requires frequent protection use and leaving the condition as soon as possible. Severe overwhelms ice protection, may collect beyond protected areas, and requires immediate exit.','aim','Inflight icing terms'),
  C('WX-087','weather','What is the difference between anti-ice and deice equipment?','Anti-ice is intended to prevent or delay ice formation; deice equipment removes accumulation after it forms. Neither makes all icing safe, and operation must follow the aircraft’s approved procedures and limitations.','wx','Ice protection'),
  C('WX-088','weather','What details make an icing PIREP useful?','Location, time, altitude, aircraft type, temperature, cloud conditions, icing type and intensity, and whether accumulation continued or protection was effective. Report both unexpected icing and a forecast icing area found ice-free.','aim','Icing PIREPs'),
  C('WX-089','weather','How should freezing-level and icing graphics be used together?','Freezing levels show where temperature supports icing, not where moisture exists. Combine them with clouds, precipitation, Current and Forecast Icing Products, PIREPs, fronts, terrain, and an escape altitude or route.','wx','Icing forecasts'),
  C('WX-090','weather','What is the normal sequence of information in a METAR?','Report type, station, time, modifier, wind, visibility, RVR when present, weather, sky condition, temperature/dew point, altimeter, and remarks. Missing elements are omitted rather than filled with placeholders.','aim','METAR format'),
  C('WX-091','weather','What is a SPECI?','An unscheduled surface observation issued when specified significant weather changes occur, such as important shifts in visibility, ceiling, wind, thunderstorms, or other criteria. It may replace the picture formed by the latest routine METAR.','aim','Surface observations'),
  C('WX-092','weather','How is a wind group such as 22015G25KT decoded?','Wind is from 220° true at 15 knots with gusts to 25 knots. VRB means variable direction; calm is 00000KT, and a separate variation group may show the directional range.','aim','METAR wind'),
  C('WX-093','weather','How do prevailing visibility and runway visual range differ?','Prevailing visibility represents the greatest distance seen through at least half the horizon circle; RVR is a runway-specific instrument value describing how far a pilot should see runway markings or lights.','aim','METAR visibility and RVR'),
  C('WX-094','weather','How are intensity and proximity shown in a METAR weather group?','For precipitation, a minus sign means light, no sign means moderate, and a plus means heavy. VC means a reported phenomenon is in the vicinity—generally 5 to 10 statute miles from the airport—and is not combined with an intensity sign. Read the complete group, such as -TSRA or VCTS.','aim','METAR weather groups'),
  C('WX-095','weather','What sky coverage do FEW, SCT, BKN, and OVC represent?','FEW is 1–2 eighths, SCT 3–4, BKN 5–7, and OVC 8 eighths. Layer heights are hundreds of feet AGL; the lowest BKN or OVC layer defines the ceiling.','aim','METAR sky condition'),
  C('WX-096','weather','How are temperature, dew point, and altimeter encoded in a U.S. METAR?','Temperature and dew point are whole degrees Celsius separated by a slash, with M indicating below zero; A followed by four digits gives inches Hg without the decimal, so A2992 means 29.92.','aim','METAR temperature and altimeter'),
  C('WX-097','weather','How do FM, TEMPO, and PROB groups differ in a TAF?','FM begins a new prevailing forecast at a specified time; TEMPO describes temporary fluctuations during a stated period. U.S. National Weather Service TAFs use PROB30 for a 30-percent chance of specified conditions; some international and military TAFs may also use PROB40. Read every group against the issue and valid times.','aim','TAF change groups'),
  C('WX-098','weather','What information should a complete PIREP contain?','Report type, location, time, altitude, aircraft type, and relevant sky, weather, visibility, temperature, wind, turbulence, icing, and remarks. Urgent hazards use UUA; routine reports use UA.','aim','PIREP elements'),
  C('WX-099','weather','How do AIRMETs, SIGMETs, Convective SIGMETs, and CWAs differ?','AIRMETs cover specified widespread hazards—such as IFR, mountain obscuration, moderate icing or turbulence, nonconvective low-level wind shear, and strong surface winds—that especially affect light aircraft; over the CONUS they are displayed graphically. SIGMETs cover specified serious nonconvective hazards, Convective SIGMETs cover significant convection, and CWAs are short-term ARTCC-area advisories.','aim','Inflight aviation weather advisories'),
  C('WX-100','weather','What does the Graphical Forecasts for Aviation tool provide?','A combined view of observations, warnings, and forecasts for clouds, ceilings/visibility, precipitation, thunderstorms, wind, turbulence, and icing. Animate time and inspect altitude layers; a single screenshot is not a complete briefing.','aim','Graphical Forecasts for Aviation'),

  C('PF-001','performance','How does high density altitude affect performance?','It reduces available engine power and propeller thrust, lengthens takeoff, and reduces climb. At the same indicated airspeed, true airspeed is higher; lift at the same indicated airspeed and angle of attack is approximately unchanged.','hand','Aircraft performance'),
  C('PF-002','performance','Why is “book distance plus runway remaining” not enough margin?','Published data depend on defined technique and assumptions. Surface, slope, wind, temperature, weight, obstacles, engine condition, and pilot technique can all worsen performance. Apply a conservative buffer and an abort point.','hand','Takeoff performance'),
  C('PF-003','performance','How does an aft CG usually affect stability and stall recovery?','It reduces longitudinal stability and can make stall/spin recovery more difficult, even though it may reduce trim drag. Never trade controllability margin for a perceived performance benefit.','hand','Weight and balance'),
  C('PF-004','performance','How does a forward CG usually affect takeoff and landing?','It increases stability but may require more elevator force, lengthen takeoff, reduce climb, and make flare authority limiting. Stay within both weight and CG envelopes for the entire flight.','hand','Weight and balance'),
  C('PF-005','performance','A bag fits by volume. Is that enough to load it?','No. Weigh it, include its arm, respect compartment and total limits, and calculate loaded CG. In the CTLS, use the current aircraft weighing record and the AOI’s side and total baggage limits.','ct','§ 2.4, p. 2-2'),
  C('PF-006','performance','Why calculate landing weight and CG, not only takeoff loading?','Fuel burn changes mass and can shift CG depending on tank location and loading. Confirm the aircraft remains within its envelope at takeoff, en route, and landing conditions.','hand','Weight and balance'),
  C('PF-007','performance','What does a headwind do to takeoff distance, and why be cautious?','A headwind generally reduces ground distance, but variable or gusty wind, obstacles, gradient, and the risk of loss near liftoff demand margin. Use the handbook method and do not count on an optimistic gust.','hand','Takeoff performance'),
  C('PF-008','performance','What should a pilot do when actual acceleration is worse than planned?','Abort while adequate runway remains. Predetermine a clear checkpoint based on aircraft-specific performance, runway, and conditions; do not let continuation bias turn poor acceleration into a low-energy departure.','hand','Takeoff risk management'),
  C('PF-009','performance','Why can grass, contamination, or an uphill slope change a go decision?','They increase rolling resistance or reduce acceleration and may make handbook baseline data inapplicable. Use applicable aircraft guidance, conservative corrections, and a larger reserve—or wait for better conditions.','hand','Takeoff and landing performance'),
  C('PF-010','performance','What is the right way to use a performance chart?','Match every input and condition, interpolate conservatively, preserve units, note whether the result is ground roll or obstacle distance, and add operational margin. If assumptions do not match, do not present the number as exact.','hand','Performance charts'),
  C('PF-011','performance','What broad performance penalties come with operating at a higher weight?','Higher weight generally raises takeoff, approach, landing, and stall speeds; lengthens takeoff and landing distances; reduces climb performance, ceiling, range, and maneuverability; and increases structural loads. Use the aircraft’s actual performance data rather than a generic correction.','hand','PHAK Ch. 10, Effects of Weight'),
  C('PF-012','performance','How do useful load and payload differ?','Useful load is maximum allowable gross weight minus basic empty weight. It includes occupants, baggage, usable fuel, and any operating fluids excluded from that aircraft’s empty-weight definition. Payload is occupants and cargo/baggage, excluding fuel. Do not count oil twice if basic empty weight already includes it.','hand','PHAK Ch. 10, Weight-and-balance terms'),
  C('PF-013','performance','What is included in basic empty weight?','Standard empty weight plus installed optional and special equipment. Standard empty weight includes the airframe, engine, permanently installed operating equipment, fixed ballast, hydraulic fluid, unusable fuel, and full engine oil under the GAMA definition. Use the definition and record for the specific aircraft.','hand','PHAK Ch. 10, Weight-and-balance terms'),
  C('PF-014','performance','What is a moment in a weight-and-balance calculation?','Moment is weight multiplied by arm, commonly expressed in pound-inches. The sign of the arm matters; add all item moments algebraically to obtain total moment.','hand','PHAK Ch. 10, Principles of Weight and Balance'),
  C('PF-015','performance','How is the loaded center of gravity calculated from weights and moments?','Divide total moment by total weight, using consistent units and the manufacturer’s datum and sign convention. Then confirm the result is inside the approved envelope at the applicable weight.','hand','PHAK Ch. 10, Principles of Weight and Balance'),
  C('PF-016','performance','What are the datum and arm in a loading calculation?','The datum is the manufacturer-selected reference plane from which distances are measured. An item’s arm is its horizontal distance from that datum; it is normally positive aft of the datum and negative forward, unless the aircraft data specify another convention.','hand','PHAK Ch. 10, Weight-and-balance terms'),
  C('PF-017','performance','Why do some loading worksheets use a moment index?','A moment index is the actual moment divided by a stated constant, such as 100 or 1,000, to keep numbers manageable. Every entry must use the same scale, and the final value must be interpreted with the chart’s stated units.','hand','PHAK Ch. 10, Moment index'),
  C('PF-018','performance','Why must the actual aircraft weight-and-balance record be used instead of a generic POH example?','Installed equipment, repairs, alterations, and reweighing can change empty weight and CG. The current aircraft record and equipment list provide the starting values; a sample loading problem may not represent that airplane.','hand','PHAK Ch. 10, Weight-and-balance control'),
  C('PF-019','performance','What are signs and consequences of lateral loading imbalance?','A lateral imbalance may produce a wing-heavy tendency that requires continuous control or trim. That correction increases drag and fatigue, and fuel mismanagement can worsen it. Follow any lateral limits and fuel-use procedures in the aircraft documents.','hand','PHAK Ch. 10, Lateral balance'),
  C('PF-020','performance','When should actual occupant and baggage weights be used?','Use actual weights whenever available, especially when loading is near a limit. Assumed or standard weights can hide an exceedance; include clothing, flight bags, child seats, and every other carried item according to the aircraft procedure.','hand','PHAK Ch. 10, Loading determination'),
  C('PF-021','performance','Why is reducing fuel to carry more payload not just a weight-and-balance decision?','It may solve a weight limit but reduce range and reserve. Recalculate takeoff and landing loading, trip fuel, required and personal reserves, alternate options, and CG throughout the flight before accepting the trade.','hand','PHAK Ch. 10, Weight changes'),
  C('PF-022','performance','How do takeoff ground roll and takeoff distance over an obstacle differ?','Ground roll ends at liftoff. Obstacle distance continues until the airplane reaches the chart’s stated height, commonly 50 feet. A runway may be long enough for the roll yet provide inadequate distance or climb margin over an obstacle.','hand','PHAK Ch. 11, Takeoff performance'),
  C('PF-023','performance','How do landing ground roll and total landing distance differ?','Total landing distance begins at the chart’s stated threshold height and includes the airborne transition plus rollout; ground roll begins at touchdown. Know which value a chart supplies before comparing it with landing distance available.','hand','PHAK Ch. 11, Landing performance'),
  C('PF-024','performance','Why is pressure altitude commonly an input to performance charts?','It standardizes atmospheric pressure by referencing the altitude indicated with 29.92 inches Hg set. Combined with outside-air temperature, it lets the chart account for nonstandard density and its effect on performance.','hand','PHAK Ch. 11, Atmospheric effects'),
  C('PF-025','performance','What should a pilot do when temperature or pressure falls between performance-chart lines?','Interpolate only as the handbook permits, keep units and axes straight, and bias conservatively when precision is limited. Do not extrapolate beyond the chart or invent accuracy the manufacturer did not publish.','hand','PHAK Ch. 11, Performance charts'),
  C('PF-026','performance','How does high humidity affect aircraft performance?','Water vapor displaces denser dry air, so humid air is less dense and performance is reduced. The effect is usually smaller than temperature and pressure effects but can matter when margins are already thin. Use manufacturer data if humidity corrections are provided.','hand','PHAK Ch. 11, Humidity'),
  C('PF-027','performance','Why can even a modest tailwind have a large runway-performance effect?','A tailwind increases groundspeed for the required airspeed, increasing takeoff and landing distance. The penalty is not safely estimated by subtracting the headwind benefit; use the POH/AFM correction and observe any demonstrated or limiting tailwind value.','hand','PHAK Ch. 11, Wind effect'),
  C('PF-028','performance','How does runway slope affect takeoff and landing performance?','An upslope generally lengthens takeoff and can shorten landing roll; a downslope generally does the opposite. Wind, obstacles, surface condition, and aircraft-specific chart corrections must be considered together rather than choosing direction from slope alone.','hand','PHAK Ch. 11, Runway slope'),
  C('PF-029','performance','Why are dry, paved-runway numbers unsafe to apply unchanged to wet, soft, or contaminated surfaces?','Those surfaces can reduce acceleration, braking, and directional control, while standing water adds hydroplaning risk. Use applicable manufacturer corrections or other approved guidance; if none exists, the dry-pavement result is not a reliable prediction.','hand','PHAK Ch. 11, Runway surface'),
  C('PF-030','performance','What is the practical difference between Vx and Vy?','Vx gives the greatest altitude gain per unit of horizontal distance and is used for obstacle clearance when appropriate. Vy gives the greatest altitude gain per unit of time. Their values vary with conditions and must come from the current aircraft data.','hand','PHAK Ch. 11, Climb performance'),
  C('PF-031','performance','How does higher weight affect a power-off glide in still air?','For the same configuration, the best-glide angle and still-air distance are approximately unchanged, but the heavier airplane must fly faster and descends faster, reaching the ground sooner. Use the published speed and procedure for the actual weight when provided.','hand','PHAK Ch. 11, Glide performance'),
  C('PF-032','performance','How does wind change glide range over the ground?','A headwind reduces ground distance and a tailwind increases it even though the aerodynamic glide through the air is unchanged. Choose landing options early and use aircraft guidance for any recommended speed adjustment rather than chasing a fixed groundspeed.','hand','PHAK Ch. 11, Glide performance'),
  C('PF-033','performance','What is the difference between maximum range and maximum endurance?','Maximum range covers the greatest distance for the fuel used; maximum endurance remains airborne for the greatest time. They generally occur at different speeds and power settings, and wind changes the best strategy for distance over the ground.','hand','PHAK Ch. 11, Range and endurance'),
  C('PF-034','performance','Why does normally aspirated engine performance decrease with altitude?','As air density falls, less oxygen mass enters the engine at a given throttle setting, so maximum power available decreases unless induction is boosted. Propeller thrust and wing performance are also affected by density; consult the aircraft charts.','hand','PHAK Ch. 11, Powerplant performance'),
  C('PF-035','performance','How do service ceiling and absolute ceiling differ?','Service ceiling is the altitude where the aircraft’s maximum rate of climb has fallen to a specified small value stated for that aircraft category. Absolute ceiling is where maximum climb rate reaches zero. Neither should be treated as a routine operating target.','hand','PHAK Ch. 11, Ceiling'),
  C('PF-036','performance','What is the danger of extending a performance-chart trend beyond its published boundary?','Outside the tested or approved range, the relationship may no longer be linear and limiting factors may change. Extrapolation can produce a plausible but unsupported number; remain within chart limits or obtain approved data.','hand','PHAK Ch. 11, Chart interpretation'),
  C('PF-037','performance','How can improper mixture control hurt takeoff and climb performance at high density altitude?','An excessively rich mixture can prevent the engine from producing available power at altitude. Lean only in accordance with the POH/AFM and engine instructions before takeoff; an incorrect leaning technique can also damage the engine or reduce power.','hand','PHAK Ch. 11, Density-altitude operations'),
  C('PF-038','performance','Why must configuration match the performance chart exactly?','Flap setting, cowl flaps, gear position, propeller setting, and use of short-field technique change drag, lift, power, and acceleration. A number for another configuration does not predict the planned operation.','hand','PHAK Ch. 11, Performance-chart conditions'),
  C('PF-039','performance','How can the CG shift from moving one item be estimated?','The CG shift equals the item’s weight multiplied by the distance it is moved, divided by total aircraft weight. Keep the sign and units consistent, then verify the resulting point with the approved loading method.','hand','PHAK Ch. 10, Weight shifting'),
  C('PF-040','performance','Which loading points may need checking besides takeoff weight and CG?','As applicable, check ramp weight, takeoff weight, landing weight, zero-fuel or compartment limits, and CG at the most critical fuel states. A point inside the envelope at engine start does not prove the entire flight remains legal and controllable.','hand','PHAK Ch. 10, Loading envelope'),

  C('AD-001','aerodynamics','What causes an aerodynamic stall?','Exceeding the wing’s critical angle of attack—not a particular airspeed. A stall can occur at any attitude or airspeed when angle of attack becomes critical.','hand','Aerodynamics of flight'),
  C('AD-002','aerodynamics','How does load factor affect stall speed?','Stall speed increases with the square root of load factor. In a level 60° bank turn the load factor is about 2 G, so stall speed is about 1.41 times the one-G value.','hand','Load factors'),
  C('AD-003','aerodynamics','Does maneuvering speed guarantee protection from structural damage?','No. At the appropriate weight, VA addresses specific design maneuver loads, including a single abrupt pitch input. It does not protect against repeated or reversing inputs, simultaneous inputs in several axes, all gusts, or other limits. Use the aircraft’s weight-adjusted guidance and smooth controls.','hand','Flight controls and loads'),
  C('AD-004','aerodynamics','What is the first priority in stall recovery?','Reduce angle of attack. Then manage power, roll/yaw, and configuration per the aircraft procedure while minimizing altitude loss and preventing a secondary stall.','acs','Private Pilot—Airplane ACS'),
  C('AD-005','aerodynamics','Why is uncoordinated flight dangerous near a stall?','Yaw makes the wings reach critical angle of attack differently and can initiate a spin. Base-to-final overshoot corrections with inside rudder and opposite aileron are a classic trap; go around instead.','hand','Stalls and spins'),
  C('AD-006','aerodynamics','What is the purpose of slow-flight practice?','To recognize and precisely control the airplane near the low-speed edge of the envelope, using coordinated flight, energy awareness, and prompt correction—not to normalize extended operation at the stall warning.','acs','Private Pilot—Airplane ACS'),
  C('AD-007','aerodynamics','What changes in a steep turn if altitude and airspeed are held constant?','Load factor and required lift increase. The pilot needs more angle of attack and power, stall speed rises, and attention must stay outside as well as on performance.','hand','Performance maneuvers'),
  C('AD-008','aerodynamics','What is the safest response to an unstable final approach?','Go around early. A go-around is a normal maneuver, not a failure; trying to salvage excessive speed, sink, drift, or poor alignment compresses margins near the ground.','acs','Approaches and landings'),
  C('AD-009','aerodynamics','How should a crosswind landing be controlled near touchdown?','Use drift correction to keep the longitudinal axis aligned with the runway and prevent sideways motion, then maintain directional control through rollout. Apply the aircraft’s approved technique and limits.','hand','Crosswind approach and landing'),
  C('AD-010','aerodynamics','What is the energy-management question to ask throughout the pattern?','Do I have the right altitude, airspeed, configuration, and alignment—with room to correct? If not, choose an early, deliberate correction or go-around instead of allowing energy errors to compound.','acs','Risk management'),
  C('AD-011','aerodynamics','In steady, unaccelerated, straight-and-level flight, how do the four forces relate?','Lift equals weight and thrust equals drag. The forces need not remain equal during a climb, descent, turn, or acceleration; their vector sums determine how the airplane’s motion changes.','hand','PHAK Ch. 4, Four forces of flight'),
  C('AD-012','aerodynamics','What variables determine the lift produced by a wing?','Lift depends on air density, the square of true airspeed, wing area, and coefficient of lift. The coefficient changes primarily with angle of attack and airfoil configuration; the pilot manages several of these factors indirectly.','hand','PHAK Ch. 4, Lift equation'),
  C('AD-013','aerodynamics','How are relative wind and angle of attack defined?','Relative wind is the airflow opposite the wing’s flightpath through the air. Angle of attack is the angle between the wing’s chord line and that relative wind—not the angle between the chord and the horizon.','hand','PHAK Ch. 5, Angle of attack'),
  C('AD-014','aerodynamics','How do camber-changing flaps affect lift and drag?','Extending flaps generally increases wing camber and both lift and drag, allowing lower speeds and steeper approaches. Stall speed usually decreases, but pitching moment and maximum-lift behavior are aircraft-specific; observe the approved speeds and limitations.','hand','PHAK Ch. 6, Flaps'),
  C('AD-015','aerodynamics','What is parasite drag, and how does it change with airspeed?','Parasite drag includes form, interference, and skin-friction drag and rises rapidly as airspeed increases—approximately with the square of speed in the normal subsonic range. It dominates the high-speed side of the total-drag curve.','hand','PHAK Ch. 5, Parasite drag'),
  C('AD-016','aerodynamics','What is induced drag, and when is it greatest?','Induced drag is a byproduct of producing lift and is greatest at high angle of attack and low airspeed. It decreases as speed increases for a given weight and configuration, dominating the low-speed side of the drag curve.','hand','PHAK Ch. 5, Induced drag'),
  C('AD-017','aerodynamics','What is significant about the angle of attack for maximum lift-to-drag ratio?','At maximum L/D, total drag is minimum for the lift required. In a power-off glide it corresponds approximately to the best still-air glide angle, but it is not the same as minimum sink and can change with configuration.','hand','PHAK Ch. 5, Lift-to-drag ratio'),
  C('AD-018','aerodynamics','What aerodynamic changes occur in ground effect?','Near the surface, wingtip-vortex and downwash effects decrease, reducing induced drag and the angle of attack needed for a given lift. The airplane may lift off before it can climb or may float during landing, so correct speed control remains essential.','hand','PHAK Ch. 5, Ground effect'),
  C('AD-019','aerodynamics','When are wingtip vortices strongest?','They are strongest behind an aircraft that is heavy, clean, and slow because it must operate at a high angle of attack to produce lift. Vortices begin with lift and normally sink and drift with the wind.','aim','Wake turbulence'),
  C('AD-020','aerodynamics','What is the basic wake-turbulence avoidance strategy behind a larger departing or landing aircraft?','Stay at or above its flightpath and avoid the area below and downwind of the vortices. For departure, lift off before its rotation point and climb above its path when feasible; for landing, remain above its approach and touch down beyond its touchdown point. Adjust for wind and accept delay when needed.','aim','Wake-turbulence avoidance'),
  C('AD-021','aerodynamics','What causes adverse yaw during roll entry?','The down-going aileron usually increases lift and induced drag on the rising wing, yawing the nose opposite the intended turn. Coordinated rudder and properly designed aileron systems counter the effect.','hand','PHAK Ch. 6, Adverse yaw'),
  C('AD-022','aerodynamics','What does the inclinometer ball indicate in a turn?','It indicates lateral acceleration and coordination, not bank angle. Ball centered is coordinated; ball to the inside indicates a slip and ball to the outside a skid. Use coordinated control inputs rather than chasing the instrument alone.','hand','AFH Ch. 3, Coordinated flight'),
  C('AD-023','aerodynamics','Which effects create the common left-turning tendency in a single-engine propeller airplane?','Engine and propeller rotation can create torque reaction, spiraling slipstream, asymmetric blade effect or P-factor, and gyroscopic precession. Their strength varies with power, airspeed, angle of attack, and aircraft design.','hand','PHAK Ch. 5, Left-turning tendencies'),
  C('AD-024','aerodynamics','When is P-factor most pronounced?','Asymmetric propeller loading becomes most pronounced at high power, high angle of attack, and low airspeed, when the descending blade produces more thrust than the ascending blade. The resulting yaw direction depends on propeller rotation.','hand','PHAK Ch. 5, P-factor'),
  C('AD-025','aerodynamics','What do positive, neutral, and negative static stability describe?','They describe the airplane’s initial tendency after a disturbance: return toward equilibrium, remain displaced, or move farther away. Static stability addresses the first response, not how the motion changes over time.','hand','PHAK Ch. 5, Static stability'),
  C('AD-026','aerodynamics','What does dynamic stability describe?','It describes how oscillations change with time after a disturbance. Positive dynamic stability means they diminish, neutral means they persist at constant amplitude, and negative means they grow.','hand','PHAK Ch. 5, Dynamic stability'),
  C('AD-027','aerodynamics','How does moving the CG aft affect pitch stability?','It generally reduces longitudinal stability and can make stall or spin recovery harder. Static stability depends on CG relative to the airplane’s neutral point and the combined wing, tail, and fuselage forces—not simply a fixed center of lift.','hand','PHAK Ch. 5, Longitudinal stability'),
  C('AD-028','aerodynamics','How does wing dihedral contribute to lateral stability?','In a sideslip, dihedral helps the lower wing meet the relative wind at a more effective angle and produce a restoring rolling tendency. Sweepback, keel effect, and wing placement can also contribute.','hand','PHAK Ch. 5, Lateral stability'),
  C('AD-029','aerodynamics','Why does a level turn require more total lift than straight-and-level flight?','Banking tilts the lift vector, leaving only part of it vertical. To hold altitude, the pilot must increase total lift, which raises load factor, required angle of attack or speed, induced drag, and stall speed.','hand','PHAK Ch. 5, Forces in turns'),
  C('AD-030','aerodynamics','How do airspeed and bank angle affect turn radius and rate?','At a given bank, higher true airspeed increases turn radius and reduces turn rate. At a given airspeed, more bank decreases radius and increases rate, while also increasing load factor in a level turn.','hand','PHAK Ch. 5, Turns'),
  C('AD-031','aerodynamics','What is the difference between a slip and a skid?','Both are uncoordinated. In a slip, the bank is excessive for the turn rate and the airplane moves toward the lowered wing; in a skid, turn rate is excessive for the bank and the airplane moves outward. A skid near a stall is especially hazardous.','hand','AFH Ch. 3, Slips and skids'),
  C('AD-032','aerodynamics','Why is a cross-controlled base-to-final correction especially dangerous?','Using inside rudder and opposite aileron to tighten the turn creates a skid and can trigger a stall/spin near the ground. If the turn cannot be completed safely with coordinated controls, go around.','hand','AFH Ch. 5, Cross-control stall'),
  C('AD-033','aerodynamics','What is an accelerated stall?','A stall occurring above the normal one-G stall speed because increased load factor requires more lift and angle of attack. It can occur in steep turns, abrupt pull-ups, or other accelerated flight at any attitude.','hand','AFH Ch. 5, Accelerated stalls'),
  C('AD-034','aerodynamics','What causes a secondary stall during recovery?','The pilot reduces angle of attack enough to unstall the wing, then pulls too aggressively and exceeds the critical angle again. Recover by reducing angle of attack once more and making a smooth return to the desired flightpath.','hand','AFH Ch. 5, Secondary stalls'),
  C('AD-035','aerodynamics','What two aerodynamic conditions are required for a spin?','A stall plus yaw that develops into autorotation. A stall by itself is not a spin. Recovery must break the stall and stop the rotation using the aircraft’s published procedure.','hand','AFH Ch. 5, Spins'),
  C('AD-036','aerodynamics','Where should you get spin-recovery instructions?','From the current aircraft POH/AFM and qualified instruction. Generic recovery mnemonics may not match the CTLS procedure. Intentional spins must not be attempted unless the aircraft and operation are approved for them.','hand','AFH Ch. 5, Spin recovery'),
  C('AD-037','aerodynamics','How can a steep spiral be distinguished from a spin?','A spiral normally has an unstalled wing, rapidly increasing airspeed, load factor, and descent rate. A spin is stalled and autorotating with comparatively lower airspeed. Recovery inputs differ, so identify the condition and follow the aircraft procedure.','hand','AFH Ch. 5, Spiral dive versus spin'),
  C('AD-038','aerodynamics','Why must a pilot respond to aerodynamic stall cues even if no warning device activates?','Horns, lights, or angle-of-attack displays can fail or be affected by configuration. Buffeting, reduced control effectiveness, sight picture, control feel, and increasing angle of attack are independent cues; reduce angle of attack at the first indication.','hand','AFH Ch. 5, Stall recognition'),
  C('AD-039','aerodynamics','Why can retracting flaps too quickly during a go-around be hazardous?','Abrupt retraction reduces lift and may cause sink or a stall while close to the ground. Apply power, control pitch and yaw, establish a positive climb, and retract flaps incrementally according to the POH/AFM.','hand','AFH Ch. 9, Go-arounds'),
  C('AD-040','aerodynamics','What is an elevator-trim stall risk during a go-around?','Strong nose-up trim from the approach can produce an excessive pitch-up when power is applied. Anticipate the control force, hold a safe attitude, retrim while maintaining control, and follow the aircraft go-around procedure.','hand','AFH Ch. 5, Elevator trim stalls'),
  C('AD-041','aerodynamics','How does slow flight change control response and workload?','At high angle of attack and low airspeed, controls feel less effective, induced drag is high, power changes produce pronounced pitch and yaw effects, and small errors can approach a stall. Use coordinated inputs and manage pitch and power together.','hand','AFH Ch. 3, Slow flight'),
  C('AD-042','aerodynamics','How should wind correction vary while flying a rectangular course?','Crab each straight leg as needed to hold the desired ground track. In the turns, vary bank so changes in groundspeed do not distort the corners: use a steeper bank where groundspeed is higher and a shallower bank where it is lower.','hand','AFH Ch. 7, Rectangular course'),
  C('AD-043','aerodynamics','Where is the steepest bank normally required during turns around a point?','When heading directly downwind, where groundspeed is greatest—not necessarily when geographically downwind of the point. Reduce bank toward the upwind heading to maintain a constant ground-track radius.','hand','AFH Ch. 7, Turns around a point'),
  C('AD-044','aerodynamics','What is the purpose of S-turns across a road?','To develop recognition and correction for wind drift while making coordinated, semicircular ground tracks of equal radius on opposite sides of a reference line. Bank varies continuously with groundspeed and position.','hand','AFH Ch. 7, S-turns across a road'),
  C('AD-045','aerodynamics','What commonly causes altitude loss or gain in a steep turn?','Failure to coordinate bank, pitch, power, and visual reference as load factor changes. Establish the planned bank smoothly, add the required back pressure and power, trim only as appropriate, and lead rollout by roughly half the bank angle.','hand','AFH Ch. 10, Steep turns'),
  C('AD-046','aerodynamics','What is the objective of a chandelle?','A maximum-performance climbing 180-degree turn that ends with wings level at approximately minimum controllable airspeed. It develops coordinated control, planning, and energy management; it is not a competition to reach an unsafe pitch attitude.','hand','AFH Ch. 10, Chandelles'),
  C('AD-047','aerodynamics','What is the objective of a lazy eight?','A smooth, coordinated maneuver in which pitch and bank continuously change through two symmetrical 180-degree turns. The goal is precise timing, coordination, and energy control—not abrupt control movement or a fixed maximum-bank turn.','hand','AFH Ch. 10, Lazy eights'),
  C('AD-048','aerodynamics','How do a forward slip and a sideslip serve different purposes?','A forward slip increases descent rate without a large airspeed increase while maintaining the desired ground track. A sideslip aligns the longitudinal axis with the runway while canceling crosswind drift. Both require aircraft-approved technique and limitations.','hand','AFH Ch. 9, Slips'),
  C('AD-049','aerodynamics','What is the safe response to a severe bounced or porpoising landing?','Go around. Repeated or increasing pitch oscillations can damage the nose gear or propeller; do not force the airplane onto the runway. Apply power, establish the proper attitude, manage configuration, and climb away per the POH/AFM.','hand','AFH Ch. 9, Landing errors'),
  C('AD-050','aerodynamics','Why can excess airspeed produce both ballooning and wheelbarrowing during landing?','Excess energy can make the airplane climb when the pilot raises pitch in the flare. Trying to hold it down with forward pressure can put excessive weight on the nosewheel while the main wheels remain light. Stabilize early or go around instead of forcing touchdown.','hand','AFH Ch. 9, Landing errors'),

  C('RM-001','adm','What does the PAVE checklist assess?','Pilot, Aircraft, enVironment, and External pressures. Use it before flight and whenever conditions change; the categories interact, so several small risks can combine into an unacceptable situation.','hand','Risk Management Handbook'),
  C('RM-002','adm','What does IMSAFE stand for?','Illness, Medication, Stress, Alcohol, Fatigue, and Emotion. Check each honestly before flying; good nutrition and hydration matter too.','hand','Aeromedical factors'),
  C('RM-003','adm','How does the 3P model structure a decision?','Perceive the circumstances, Process their impact, and Perform the best course of action. Repeat the cycle as the flight changes.','hand','Risk Management Handbook'),
  C('RM-004','adm','Why set personal minimums before the day of flight?','Predetermined limits reduce the influence of schedule pressure, sunk cost, passengers, and optimism. They should reflect recent experience, aircraft, terrain, weather, and available alternatives.','hand','Risk Management Handbook'),
  C('RM-005','adm','What is “get-there-itis,” and what breaks it?','It is continuation driven by the destination or schedule despite rising risk. Use explicit diversion triggers, time/fuel gates, alternates, and permission to land short or cancel.','hand','Hazardous attitudes'),
  C('RM-006','adm','What is a practical response to an automation surprise?','Reduce workload: fly a safe attitude and path, verify modes and data, simplify or disconnect automation if needed, and communicate. Do not troubleshoot at the expense of aircraft control.','hand','Single-pilot resource management'),
  C('RM-007','adm','How should several “yellow” risks affect the decision?','Treat them as cumulative, not independent. A tired pilot, marginal wind, unfamiliar avionics, and a short runway may create a red overall picture even if each item alone seems manageable.','hand','Risk Management Handbook'),
  C('RM-008','adm','What makes an alternate genuinely useful?','It is reachable with fuel reserve, has acceptable weather/runway/services, fits aircraft and pilot capability, and is selected early enough to use. A name on the plan is not an escape option unless it works.','hand','Flight planning risk'),
  C('RM-009','adm','A passenger is late and weather is deteriorating. What should the PIC say?','State the operational limit and choose the safe option without apology: delay, reroute, land short, or cancel. External pressure belongs in the risk assessment but never sets the safety standard.','hand','External pressures'),
  C('RM-010','adm','Why brief “what would make me stop?” before engine start?','Specific triggers—wind, ceiling, fuel, system indication, runway checkpoint—turn vague concern into an executable decision and reduce plan-continuation bias.','hand','Risk Management Handbook'),
  C('RM-011','adm','How does the DECIDE model guide aeronautical decisions?','Detect that a change has occurred, Estimate the need to react, Choose a desired outcome, Identify actions, Do the action, and Evaluate its effect. Continue the cycle as conditions evolve.','hand','Risk Management Handbook'),
  C('RM-012','adm','What are the five hazardous attitudes and their antidotes?','Anti-authority—follow the rules; impulsivity—not so fast, think first; invulnerability—it could happen to me; macho—taking chances is foolish; resignation—I am not helpless. Recognize the thought pattern before acting.','hand','Pilot’s Handbook of Aeronautical Knowledge, ch. 2'),
  C('RM-013','adm','What does the 5P check evaluate during a flight?','Plan, Plane, Pilot, Passengers, and Programming. Revisit all five at natural decision points because a safe preflight plan can become unsafe after weather, equipment, workload, or passenger needs change.','hand','Risk Management Handbook'),
  C('RM-014','adm','What is confirmation bias in the cockpit?','It is favoring information that supports the desired plan while discounting evidence against it. Deliberately ask what would disprove the plan, seek contrary weather or performance evidence, and invite challenge from passengers or ATC.','hand','Risk Management Handbook'),
  C('RM-015','adm','How should a pilot respond to task saturation?','Protect aircraft control, pause nonessential tasks, use automation only when it reduces workload, ask ATC for delay or vectors, and simplify the plan. Missed calls, fixation, and falling behind are cues to act early.','hand','Single-pilot resource management'),
  C('RM-016','adm','What is normalization of deviance?','It is gradually accepting a risky shortcut because previous violations had no bad outcome. Compare practice with the regulation, checklist, limitations, and original safety margin—not with what happened to work last time.','hand','Risk Management Handbook'),
  C('RM-017','adm','What is residual risk?','The risk remaining after controls are applied. Reassess whether it is acceptable before proceeding; adding a control does not automatically make the flight safe, and changed conditions can make the remaining risk unacceptable.','hand','Risk Management Handbook'),
  C('RM-018','adm','Why identify the most time-critical risk before departure?','The fastest-developing hazard often controls the decision. Knowing which cue demands immediate action—fuel, ice, visibility, terrain, or a system limit—prevents lower-priority troubleshooting from consuming the available margin.','hand','Risk management and workload'),
  C('RM-019','adm','How can a pre-mortem improve a go/no-go decision?','Assume the flight ended badly and list plausible reasons. Then remove or control those threats, choose escape options, or cancel. This exposes hidden assumptions without waiting for the situation to deteriorate.','hand','Risk Management Handbook'),
  C('RM-020','adm','What is a sound response to startle or surprise in flight?','Maintain control, stabilize the aircraft, take a deliberate breath, verify what actually changed, then use the checklist and available resources. Avoid an immediate large control or configuration change based on the first impression alone.','hand','Risk Management Handbook'),

  C('EM-001','emergencies','What is the universal first sequence in an abnormal event?','Aviate, navigate, communicate. Maintain control and a survivable flight path, move toward a safe outcome, then communicate as time and workload permit. Use the aircraft checklist when able.','hand','Emergency procedures'),
  C('EM-002','emergencies','After an engine failure, what should guide the first actions?','Aircraft control and an appropriate glide/landing plan come first. Complete only time-critical memory items you truly know, then use the current checklist. Do not become head-down while options disappear.','hand','Emergency approaches and landings'),
  C('EM-003','emergencies','What is the key distinction between an engine fire on the ground and in flight?','The environment, escape options, and checklist differ. In either case, stop the source as the aircraft procedure directs, protect occupants, and avoid improvising a generic checklist for the CTLS.','hand','Fire emergencies'),
  C('EM-004','emergencies','What should you do after an alternator or electrical-system indication?','Fly the aircraft, confirm the indication, reduce load and follow the aircraft checklist. Decide early whether to land before battery endurance, avionics, lighting, or flap capability becomes critical.','hand','Electrical failures'),
  C('EM-005','emergencies','A VFR pilot enters cloud unexpectedly. What is the immediate strategy?','Control attitude and airspeed on instruments, avoid abrupt inputs, engage suitable automation if trained, and seek ATC help. Execute the simplest safe exit consistent with terrain and capability; declare an emergency when needed.','aim','VFR into IMC'),
  C('EM-006','emergencies','What are practical lost procedures?','Climb when safe for visibility/radio coverage, communicate, confess uncertainty, comply with help, and conserve. Use all available navigation while maintaining terrain and fuel awareness.','aim','Navigation emergencies'),
  C('EM-007','emergencies','When should a pilot declare an emergency?','Whenever priority, assistance, or deviation is needed to protect safety. Do not delay over fear of paperwork; clearly state the nature of the problem, position, altitude, intentions, fuel, and people aboard as workload permits.','aim','Emergency services'),
  C('EM-008','emergencies','What does § 91.3 permit in an in-flight emergency?','The PIC may deviate from Part 91 to the extent required to meet the emergency. That authority supports judgment; it does not eliminate the need to keep deviations proportionate and explain them if requested.','p91','§ 91.3(b),(c)'),
  C('EM-009','emergencies','Why decide on a diversion before fuel or weather becomes critical?','Early diversion preserves airports, daylight, fuel, and workload capacity. Waiting converts choices into necessities and can leave the pilot managing multiple emergencies at once.','hand','Diversion planning'),
  C('EM-010','emergencies','What survival planning belongs in a routine cross-country preflight?','Consider terrain, weather, clothing, water, signaling, restraint use, emergency contacts, and how quickly help could find occupants. File or share a flight plan/itinerary and carry gear for the actual exposure.','hand','Emergency and survival equipment'),

  C('CT-001','ctls','Are the archived CTLS stall-speed conversions consistent?','No. Some knots and km/h entries disagree. Use the current aircraft’s confirmed stall speeds, airspeed basis, weight, and flap configuration.','ct','§ 2.1, p. 2-1'),
  C('CT-002','ctls','Can you resolve the AOI’s maneuvering-speed discrepancy by memorizing one value?','No. Its table and warning differ. Confirm VA and weight guidance in the current aircraft documents and placards.','ct','§§ 2.1–2.2, pp. 2-1–2-2'),
  C('CT-003','ctls','What flap-extension speed limits does this AOI list?','100 kt CAS for 0°, 80 kt CAS for 15°, and 62 kt CAS for 30° or 35°. Observe the setting-specific limit and the aircraft’s current placards.','ct','§ 2.1, p. 2-1'),
  C('CT-004','ctls','Why must CTLS airspeed units be checked carefully?','The archived AOI has conflicting rough-air unit conversions. Confirm the current aircraft’s IAS/CAS limits and VNE; do not resolve them by guessing.','ct','§ 2.1, p. 2-1'),
  C('CT-005','ctls','What crosswind values are demonstrated in this AOI?','16 kt with flaps 0° and 11 kt with flaps 35°. “Demonstrated” is not a personal target; runway condition, gusts, technique, and pilot proficiency still control the go/no-go decision.','ct','§ 2.1, p. 2-1'),
  C('CT-006','ctls','What loading limits does the cited AOI give?','MTOW is listed as 1,320 lb, with 260 lb per seat and baggage limits of 55 lb per side/110 lb total. The sample empty-weight units conflict; use the actual weighing record.','ct','§ 2.4, p. 2-2'),
  C('CT-007','ctls','What engine power and RPM limits are listed for the Rotax 912 ULS installation?','Maximum takeoff power is 100 hp at 5,800 rpm for no more than 5 minutes; maximum continuous is 95 hp at 5,500 rpm. Minimum takeoff RPM for the fixed-pitch propeller is 4,800.','ct','§ 2.5, p. 2-3'),
  C('CT-008','ctls','What oil operating limits and cautions deserve special attention?','The AOI lists 50°C minimum, 140°C maximum, and 90–110°C recommended oil temperature; normal oil pressure is 29–73 psi. It calls for suitable automotive engine oil, not aviation oil, and defers viscosity details to the current Rotax manual.','ct','§ 2.5, p. 2-3'),
  C('CT-009','ctls','What fuel capacity and approved fuel types does this AOI state?','Total capacity 34 gal in two 17-gal wing tanks; usable fuel 32 gal. It lists premium automotive unleaded meeting ASTM D4814, minimum AKI 91, or 100LL, while warning that leaded avgas has maintenance consequences. Verify current Rotax and aircraft guidance.','ct','§ 2.5, p. 2-3'),
  C('CT-010','ctls','Which operations are prohibited by the cited CTLS AOI?','Aerobatics, flight in IMC, flight into icing, and turns steeper than 60° bank. The AOI allows day or night visual flight conditions, subject to the actual aircraft’s equipment, operating category, supplements, and regulations.','ct','§ 2.6, p. 2-4'),
  C('CT-011','ctls','What wind caution appears in the CTLS limitations section?','Flight is not recommended in strong, gusty winds or when ground wind exceeds 24 kt. Compare this recommendation with crosswind component, runway, gust spread, aircraft condition, and personal minimums.','ct','§ 2.6, p. 2-4'),
  C('CT-012','ctls','What baseline takeoff data are printed for MTOW at sea-level standard conditions?','With 15° flaps: 820 ft ground roll and 1,500 ft to clear 50 ft, with a 47 kt CAS takeoff speed. The AOI warns that elevation, temperature, propeller, condition, and technique can produce considerable differences; add reserve.','ct','§ 5.1, p. 5-1'),
  C('CT-013','ctls','What best-glide information does this AOI provide?','It gives an approximate 8.5:1 glide ratio. With −6° flaps, best-glide speed is 78 kt at 1,320 lb, 69 kt at 1,100 lb, and 64 kt at 880 lb. Wind and turbulence change achievable ground distance.','ct','§ 5.7, p. 5-11'),
  C('CT-014','ctls','How is fuel delivered from the CTLS wing tanks?','The AOI describes gravity feed from both wing tanks through separate lines that join, then through filtration, shutoff, gascolator, and the engine-driven pump to both carburetors, with excess fuel returning to the gascolator. Drain the low point as the current checklist directs.','ct','§ 7.2.3, pp. 7-6–7-7'),
  C('CT-015','ctls','Why does the CTLS AOI warn pilots to verify both fuel caps are secured?','A missing cap can cause major fuel loss in flight through suction at the filler opening. The same section explains the coupled venting and cautions about low-fuel uncoordinated flight; use the current checklist and visual fuel verification.','ct','§ 7.2.3, p. 7-6'),
  C('CT-016','ctls','What electrical-system baseline does this AOI describe?','A 12-volt, 7-Ah lead-gel battery charged by a 250-watt engine-integrated DC alternator, with a common power bus and separate avionics grounding. Installed equipment can differ, so confirm the actual diagram and supplements.','ct','§ 7.2.4, p. 7-8'),
  C('CT-017','ctls','How do the CTLS flaps operate, and what positions are listed?','A geared electric motor moves both flaps symmetrically through the mixer. Selectable positions are −6°, 0°, 15°, 30°, and 35°. A blinking indication means the flaps are moving; a continuously blinking indication calls for reduced airspeed and troubleshooting per the AOI.','ct','§ 7.3.7, p. 7-16'),
  C('CT-018','ctls','What does the AOI say about emergency checklist use?','Even experienced pilots should work from cockpit checklists so important items are not missed, and should know the amplified procedures before flight. Memorize only approved immediate priorities; use the current aircraft checklist when time permits.','ct','§ 3.1, p. 3-1'),
  C('CT-019','ctls','Why does the AOI emphasize route selection for the CTLS?','It notes that light-sport engines are not Part 33-certified aviation engines and says the route should permit an emergency landing after engine failure without difficulty. Build reachable landing options into every phase of flight.','ct','§ 1.1, p. 1-1'),
  C('CT-020','ctls','What minimum equipment does this AOI list?','An airspeed indicator reading to at least 200 knots, altimeter with barometric window, four-point harness for each seat, calibrated magnetic compass, CHT, oil temperature, oil pressure, RPM indication, and the aircraft documents required by national regulations. Installed-aircraft requirements still control.','ct','§ 1.8, p. 1-7'),
  C('CT-021','ctls','Why must the installed propeller manual be identified before flight or maintenance?','The AOI lists several approved fixed, ground-adjustable, and variable-pitch propellers, each with its own operating and maintenance instructions. Performance, RPM technique, inspections, and limitations can differ by installation.','ct','§ 1.7, p. 1-6'),
  C('CT-022','ctls','What control-movement warning accompanies the CTLS load-factor limits?','The AOI lists +4g and -2g, but allows full control movement only up to maneuvering speed. Above VA, it limits control-surface deflection to one-third of maximum; turbulence and multiple inputs still require conservative handling.','ct','§ 2.2, p. 2-2'),
  C('CT-023','ctls','What tire pressure does this AOI specify?','28 psi, or 2 bar, for both main-gear tires and the nose-wheel tire. Confirm the current aircraft documents and tire installation before servicing.','ct','§ 2.3, p. 2-2'),
  C('CT-024','ctls','What must you confirm about the CTLS recovery-system deployment limit?','Use the installed system manual and current aircraft documents. The archived AOI’s deployment-speed units conflict, so its quoted number is not a verified limit. Deployment requires time and altitude; follow the current emergency procedure.','ct','§ 3.6, p. 3-6'),
  C('CT-025','ctls','What engine-failure altitude cautions appear in this AOI?','Do not attempt a restart below 300 feet AGL, do not attempt to return to the airfield after an immediate post-takeoff failure below 750 feet, and avoid turns below 150 feet because of altitude loss. Conditions may demand an even more conservative plan.','ct','§ 3.7, p. 3-7'),
  C('CT-026','ctls','What does the AOI have the pilot verify before an engine restart attempt?','Altitude and time must permit it; verify the fuel valve open, fuel available, and both ignitions on. A stopped or slowly windmilling propeller may require the starter because the Rotax ignition becomes active only above roughly 1,200 propeller RPM. Keep flying the aircraft.','ct','§ 3.7, p. 3-7'),
  C('CT-027','ctls','What is the AOI response to a carburetor or engine-compartment fire?','Close the fuel valve immediately, use full throttle to consume fuel in the system, switch ignition off, remove the key, verify the valve closed, slip to keep flames away, descend, and make an emergency landing. Use the current checklist and evacuate after landing.','ct','§ 3.8, p. 3-8'),
  C('CT-028','ctls','How does the AOI distinguish loss of coolant from immediate engine failure?','Cylinder heads are liquid-cooled while the cylinders are air-cooled. Reduce power enough to keep cylinder-head temperature below 150°C, use 0°-15° flaps if needed to support a lower speed, and proceed to a suitable airfield; land sooner if temperature cannot be controlled.','ct','§ 3.9, p. 3-9'),
  C('CT-029','ctls','Why does the AOI treat loss of oil as especially urgent?','Hot oil can ignite on the exhaust system and lubrication loss threatens the engine. The AOI calls for an emergency landing as soon as possible, using the applicable current checklist.','ct','§ 3.10, p. 3-9'),
  C('CT-030','ctls','What approach speeds does the AOI recommend after a flap-control failure?','The aircraft can be landed in any flap position, but the AOI recommends 54 knots with 0° flaps and 64 knots with -6° flaps. Negative flaps raise stall speed and landing distance, so favor a longer runway and follow the reset/manual-control procedure in the current checklist.','ct','§ 3.11, p. 3-10'),
  C('CT-031','ctls','What does this AOI recommend after a complete Dynon EMS failure?','Because engine parameters can no longer be monitored, keep engine loading moderate; the AOI describes approximately 100 knots in cruise with negative flaps. Stop towing operations and use installed-equipment guidance and the current checklist.','ct','§ 3.12, p. 3-11'),
  C('CT-032','ctls','How extensive is the AOI daily preflight requirement?','Even if the aircraft flew during the previous 24 hours, thoroughly inspect it before the first flight of the day, including removing the engine cowling. Ensure ignition and master are off before working around the propeller.','ct','§ 4.2, p. 4-5'),
  C('CT-033','ctls','How does the AOI say to check Rotax oil quantity?','Slowly turn the propeller only in its normal direction until the oil-system gurgle is clearly heard, then check between dipstick limits. For an extended trip, the AOI recommends at least midway between the marks and warns against overfilling.','ct','§ 4.2, p. 4-5'),
  C('CT-034','ctls','What should happen if the composite propeller or spinner is damaged?','Do not continue using a damaged full-composite propeller or spinner; even small damage can affect the load-carrying structure and grow quickly. Have it inspected by a qualified technician under the applicable propeller guidance.','ct','§ 4.2, p. 4-5'),
  C('CT-035','ctls','What CTLS-specific items belong in the passenger briefing?','Along with restraints and doors, explain the ballistic-recovery handle, fire extinguisher, and ELT remote so a passenger can respond if the pilot is incapacitated. Tighten the lap belt first, then the shoulder straps.','ct','§ 4.3, p. 4-6'),
  C('CT-036','ctls','What starter-duty limits does this AOI give?','Limit each starter activation to 10 seconds and allow about two minutes of cooling between attempts. During choke operation the throttle must be fully aft; after start, reduce choke gradually as the engine runs smoothly.','ct','§ 4.4, p. 4-7'),
  C('CT-037','ctls','What oil indications are required immediately after start?','Oil pressure must begin indicating within 10 seconds or the engine must be stopped immediately. Do not increase RPM until pressure exceeds 2 bar, about 28 psi, and warm the engine until oil reaches at least 50°C or 122°F.','ct','§ 4.4, p. 4-7'),
  C('CT-038','ctls','How does this AOI choose between 15° and 0° flaps for takeoff?','It describes 15° as normal for short runways and 0° as more efficient on hard-surface runways, also reducing workload for closed-pattern operations. Use the performance data, actual surface, obstacles, wind, weight, and current checklist.','ct','§ 4.8, p. 4-11'),
  C('CT-039','ctls','What fixed-pitch takeoff RPM check does the AOI call for?','After full throttle is applied, indicated RPM should be about 4,800; only then is correct takeoff power available. The value does not apply to variable-pitch installations, so know the installed propeller and its supplement.','ct','§ 4.8, p. 4-11'),
  C('CT-040','ctls','When and how does the AOI recommend retracting takeoff flaps?','Wait until at least 150 feet and a safe condition. Above 67 knots, retract from 15° to 0° and climb near 73 knots; only after accelerating further should -6° be selected for a climb near 78 knots. Never move toward negative flaps near the ground because lift drops and the aircraft may sink.','ct','§ 4.8, pp. 4-11–4-12'),
  C('CT-041','ctls','What cruise RPM guidance does this AOI provide?','Normal cruise uses -6° flaps. About 4,800 RPM gives efficient cruise, while the greatest range is described near 4,300 RPM; higher RPM increases speed at much greater fuel consumption. Observe the 5,500-RPM continuous limit and installed-propeller guidance.','ct','§ 4.9, p. 4-13'),
  C('CT-042','ctls','How should carburetor heat be used according to the AOI?','Use it when carburetor icing is a risk and leave it on long enough to remove accumulated ice. Do not leave it on continuously because mixture enrichment can foul plugs, and never use it during takeoff or climb because it reduces engine performance.','ct','§ 4.9, p. 4-13'),
  C('CT-043','ctls','How should CTLS fuel quantity and imbalance be monitored in flight?','Cross-check fuel flow or totalizer data with the wing-root sight tubes, which read correctly only with wings level. A slight slip can empty tanks unevenly; the AOI suggests briefly raising the fuller-tank wing in a gentle slip, then returning level and rechecking after fuel settles.','ct','§ 4.9, pp. 4-13–4-14'),
  C('CT-044','ctls','What low-speed turning caution does this AOI give?','The CTLS loses altitude rapidly in tight turns at low speed. The AOI says turns steeper than 30° bank should not be flown below 54 knots; keep turns coordinated and preserve a larger margin near the ground.','ct','§ 4.10, p. 4-14'),
  C('CT-045','ctls','What CTLS cues warn that a stall is approaching?','The AOI describes sluggishness about the vertical axis and controls becoming soft roughly 3 knots above stall. Near the stall, aileron effectiveness is greatly reduced; release aft pressure to reduce angle of attack and use coordinated rudder and stabilizer control.','ct','§ 4.11, p. 4-15'),
  C('CT-046','ctls','What does the AOI emphasize for a stable CTLS landing approach?','Establish configuration and speed early; late flap changes and excess speed can create demanding dynamic conditions. The AOI recommends some approach power, about 10%–20%, and says to go around whenever the approach is doubtful.','ct','§ 4.12, p. 4-15'),
  C('CT-047','ctls','What CTLS technique does the AOI recommend for a crosswind landing?','Use a somewhat higher approach speed, consider 15° or 0° flaps, lower the upwind wing with aileron, and hold runway alignment with rudder. Demonstrated crosswind values are not guarantees because turbulence, surface, gusts, and proficiency can impose lower limits.','ct','§ 4.12, pp. 4-15–4-16'),
  C('CT-048','ctls','When does the AOI recommend using 35° flaps for landing?','For very short runways under favorable wind—no crosswind, light wind, and low gusts—and only with appropriate CTLS-specific training. The drag increase permits short landings but speed can decay rapidly in the flare; if the flare is high, apply full power and go around.','ct','§ 4.12, p. 4-16'),
  C('CT-049','ctls','Does setting the CTLS parking brake eliminate the need for chocks?','No. The parking brake traps hydraulic pressure, but temperature changes can reduce that pressure. The AOI explicitly warns that chocks are still needed when the aircraft is parked.','ct','§ 7.2.5, p. 7-11'),
  C('CT-050','ctls','What recurring aircraft inspections does this AOI identify?','A one-time 25-hour engine inspection for a new or overhauled engine, a 100-hour or annual inspection at least yearly, and a 200-hour inspection at every other 100-hour event. Current manufacturer instructions, engine and propeller TBOs, and applicable regulatory inspections still control.','ct','§ 8.5, p. 8-5'),

  C('IFR-001','ifr','Does this IFR refresher or a flight review restore instrument currency?','No. Study does not create currency, and a § 61.56 flight review is distinct from § 61.57 instrument recent experience and an IPC. Each requirement must be separately met and logged.','rec','§ 61.57(c),(d)'),
  C('IFR-002','ifr','What recent instrument experience is generally required for an airplane?','Within the six calendar months preceding the month of flight: six instrument approaches, holding procedures and tasks, and intercepting and tracking courses using navigational electronic systems, performed and logged under qualifying conditions or in qualifying devices.','rec','§ 61.57(c)'),
  C('IFR-003','ifr','When is an instrument proficiency check required to regain currency?','If instrument recent-experience requirements have not been met for more than six calendar months, currency may be reestablished only by an IPC. The IPC must cover the applicable ACS areas of operation.','rec','§ 61.57(d)'),
  C('IFR-004','ifr','Who may give an IPC?','An examiner, authorized instructor, certain authorized military or company check pilots, or another person approved by the Administrator, within the aircraft/device conditions listed in § 61.57(d).','rec','§ 61.57(d)(2),(3)'),
  C('IFR-005','ifr','What reports and forecasts drive an IFR departure decision?','Ceilings/visibility, winds, freezing level and icing, convection, turbulence, PIREPs, NOTAMs, departure options, terrain, and trends. Legal takeoff may still be unwise without a return or takeoff-alternate plan.','aim','Preflight and weather'),
  C('IFR-006','ifr','When is a destination alternate generally not required under the familiar 1-2-3 rule?','For an airplane, the destination must have an authorized published instrument approach, and appropriate reports or forecasts must indicate at least a 2,000-foot ceiling above airport elevation and 3 SM visibility throughout the period from 1 hour before to 1 hour after ETA.','p91','§ 91.169(c)'),
  C('IFR-007','ifr','How are alternate minima determined?','Use published alternate minima and approach availability; if none are specified, the standard rule generally requires 600-2 for a precision approach or 800-2 for a nonprecision approach. Confirm current procedure notes, equipment, and forecast.','p91','§ 91.169(c)'),
  C('IFR-008','ifr','What should a pilot do after receiving an amended IFR clearance that creates doubt?','Maintain control, write it down, read back key elements, and ask for clarification or “unable” before accepting a clearance that exceeds aircraft, fuel, weather, equipment, or pilot capability.','aim','ATC clearances'),
  C('IFR-009','ifr','What are the core elements of a stabilized instrument approach?','Correct course and configuration, appropriate speed and descent, small corrections, verified navigation and minima, required callouts, and a predefined missed-approach trigger. If unstable, go missed.','acs','Instrument Rating—Airplane ACS'),
  C('IFR-010','ifr','May a pilot descend below DA or MDA simply because the runway is reported in sight by someone else?','No. The aircraft must be continuously in a position for normal descent, required flight visibility must exist, and at least one specified visual reference must be distinctly visible and identifiable, subject to the approach-light exception.','p91','§ 91.175(c)'),
  C('IFR-011','ifr','What is the first task after an unexpected avionics or automation failure in IMC?','Maintain aircraft control and a safe flight path. Cross-check independent instruments, simplify modes, use standby capability, communicate, and execute the applicable checklist and contingency before troubleshooting deeply.','acs','Instrument systems and emergencies'),
  C('IFR-012','ifr','How should a pilot brief a hold?','Confirm fix, inbound course, turn direction, leg time or distance, altitude, speed, expected further clearance, entry, and wind correction. Then monitor position and fuel instead of letting the hold become an automation exercise.','aim','Holding procedures'),
  C('IFR-013','ifr','What is the practical priority during lost communications in IMC?','Fly the aircraft and, when possible, seek a safe VMC landing. If continued IFR is necessary, apply § 91.185 route and altitude rules and clearance-limit timing carefully; brief the exact scenario rather than relying on a slogan.','p91','§ 91.185'),
  C('IFR-014','ifr','Why are fatigue and spatial disorientation paired risks in single-pilot IFR?','Fatigue weakens scan, mode awareness, and judgment; reduced visual cues increase vestibular illusions. Use strict personal minimums, disciplined instrument cross-check, workload reduction, and an early exit plan.','hand','Instrument Flying Handbook'),
  C('IFR-015','ifr','What does the CRAFT mnemonic capture in a typical IFR clearance?','Clearance limit, Route, Altitude, departure Frequency, and Transponder code. It is a copying aid—not a substitute for checking the complete clearance, departure instructions, and any hold-for-release or void time.','aim','IFR clearances'),
  C('IFR-016','ifr','What should you do if an IFR clearance is unclear or beyond your capability?','Ask ATC to repeat or explain it, or say “unable” and request an alternative. Read back route, altitude, runway-hold, and other safety-critical items; accepting a clearance does not make an unsafe operation safe.','aim','ATC clearances and pilot responsibility'),
  C('IFR-017','ifr','What does a “climb via” clearance authorize?','Follow the cleared SID lateral path and comply with its published altitude and speed restrictions, climbing to the altitude authorized by ATC. Verify the exact clearance and chart because amended restrictions still control.','aim','Departure procedures'),
  C('IFR-018','ifr','What does a “descend via” clearance authorize?','Follow the cleared STAR lateral path and descend at pilot discretion while complying with published altitude and speed restrictions, except where ATC amends them. Confirm the arrival, transition, runway, and bottom altitude.','aim','Arrival procedures'),
  C('IFR-019','ifr','How do an ODP and a SID differ?','An obstacle departure procedure is designed primarily to provide obstacle clearance; a SID is designed primarily for efficient traffic flow and may also contain obstacle requirements. Review all departure information and advise ATC if you cannot accept a SID.','aim','Departure procedures'),
  C('IFR-020','ifr','What assumptions underlie the standard IFR departure climb gradient?','Unless otherwise specified, obstacle-clearance design assumes crossing the departure end at least 35 feet above its elevation, climbing to 400 feet above it before the initial turn, and maintaining at least 200 feet per NM to the minimum IFR altitude.','aim','Departure procedures'),
  C('IFR-021','ifr','How do you convert a published climb gradient to a climb rate?','Required feet per minute equals feet per nautical mile multiplied by groundspeed in knots, divided by 60. For example, 300 ft/NM at 90 knots requires 450 ft/min; add margin for wind and performance variation.','aim','Departure climb planning'),
  C('IFR-022','ifr','What protection does an MEA provide on an airway segment?','The minimum en route altitude provides required obstacle clearance and normally assures acceptable navigation-signal coverage along the segment. Other published minimum altitudes can serve different purposes, so identify the label before using it.','aim','En route altitudes'),
  C('IFR-023','ifr','How does a MOCA differ from an MEA?','A minimum obstruction clearance altitude provides obstacle clearance for the full segment, but conventional VOR signal coverage is assured only within 22 NM of the facility. Do not treat it as interchangeable with the MEA without checking navigation capability.','aim','En route altitudes'),
  C('IFR-024','ifr','What are MCA and MRA used for?','A minimum crossing altitude is the lowest altitude at which a fix must be crossed to satisfy the next segment’s requirements. A minimum reception altitude is the lowest altitude at which the fix can be reliably identified.','aim','En route altitudes'),
  C('IFR-025','ifr','What should an unpublished holding clearance tell you?','Direction from the fix, the holding fix, holding radial/course/bearing or route, leg length when applicable, left turns if nonstandard, and an expect-further-clearance time. Ask immediately about any missing or ambiguous element.','aim','Holding procedures'),
  C('IFR-026','ifr','What are the standard timed legs in a holding pattern?','At or below 14,000 feet MSL, fly a 1-minute inbound leg; above 14,000 feet, 1½ minutes. Adjust outbound timing for wind so the inbound timing is achieved, unless distance legs or ATC instructions apply.','aim','Holding procedures'),
  C('IFR-027','ifr','What are the standard maximum holding speeds?','Normally: 200 KIAS through 6,000 feet MSL; 230 KIAS above 6,000 through 14,000; and 265 KIAS above 14,000. Follow charted exceptions. With advance notice, be at or below holding speed at least 3 minutes before the fix; otherwise slow promptly.','aim','Holding procedures'),
  C('IFR-028','ifr','When should you not perform a procedure turn or hold-in-lieu course reversal?','Do not perform it when the chart says NoPT, when receiving radar vectors to final, when cleared for a straight-in approach, or when established on a route that specifies NoPT. If the clearance and chart seem inconsistent, ask ATC.','aim','Course reversals'),
  C('IFR-029','ifr','What is the operational difference between DA and MDA?','At decision altitude, initiate the missed approach if the requirements to continue are not met; do not plan to level there. At minimum descent altitude, do not descend below it until the requirements are met, and start the missed approach no later than the MAP.','p91','§ 91.175'),
  C('IFR-030','ifr','What does a visual descent point provide?','A VDP is a defined point from which a normal descent from MDA to the runway may begin when the required visual references exist. It does not authorize descent below MDA, and passing it may make a normal landing increasingly unlikely.','aim','Instrument approach procedures'),
  C('IFR-031','ifr','How is aircraft approach category determined, and when might higher minima be needed?','It is based on VREF at maximum certificated landing weight, or 1.3 VSO if VREF is not specified. If maneuvering faster than the category limit, use the minimums for the higher speed category.','aim','Instrument approach procedures'),
  C('IFR-032','ifr','What is the key risk-control rule while circling to land?','Remain within the protected area for the category and keep the required airport environment in sight while maintaining MDA until positioned for a normal descent. If visual reference is lost, begin the missed approach with a turn toward the landing runway, then intercept the published missed course.','aim','Circling approaches'),
  C('IFR-033','ifr','How does a contact approach differ from a visual approach?','A contact approach must be requested by the pilot, requires at least 1 mile flight visibility, clear of clouds, and a reasonable expectation of continuing visually. A visual approach is ATC-authorized when the airport or identified preceding aircraft is in sight; neither erases IFR cancellation responsibility.','aim','Visual and contact approaches'),
  C('IFR-034','ifr','What GPS checks belong in IFR preflight planning?','Confirm the installed equipment is approved for the intended operation, the navigation database and procedure are appropriate, required satellite integrity or service will be available, and relevant GPS, WAAS, airport, and procedure NOTAMs have been reviewed.','aim','Area navigation and GPS'),
  C('IFR-035','ifr','Are LPV, LNAV/VNAV, and LNAV minima interchangeable?','No. They are different minima lines with different guidance and equipment requirements. LPV supplies angular lateral and vertical guidance but is classified as an approach with vertical guidance, not a precision approach; use only the line the system and crew are authorized to fly.','aim','RNAV approach procedures'),
  C('IFR-036','ifr','What mode checks prevent an automation surprise on an RNAV approach?','Verify the correct navigation source, active leg and waypoint sequence, approach activation, CDI scaling, altitude constraints, and annunciated lateral and vertical modes. If indications do not match the clearance and chart, stop the descent and resolve the mismatch.','acs','Navigation systems and instrument approaches'),
  C('IFR-037','ifr','How current must a VOR operational check be for IFR use?','Within the preceding 30 days. Typical tolerances are ±4° for a VOT or designated ground checkpoint, ±6° for an airborne checkpoint, and no more than 4° difference between dual independent VORs; record the date, place, error, and signature.','p91','§ 91.171'),
  C('IFR-038','ifr','What additional instruments and equipment does § 91.205 require for IFR flight?','In addition to applicable VFR equipment: suitable two-way communications and navigation equipment, rate-of-turn indication subject to listed exceptions, slip-skid indicator, sensitive altimeter, clock with hours/minutes/seconds, adequate electrical source, attitude indicator, and direction indicator.','p91','§ 91.205(d)'),
  C('IFR-039','ifr','How recent must the altimeter and static-system tests be for IFR flight in controlled airspace?','They must have been tested and inspected within the preceding 24 calendar months, subject to the rule’s installation and maintenance provisions. Confirm the aircraft records, not just the panel stickers.','p91','§ 91.411'),
  C('IFR-040','ifr','When must a transponder be tested before use?','Within the preceding 24 calendar months under § 91.413, even if the airspace does not require it. Specified installation or maintenance work can require additional testing.','p91','§§ 91.413, 91.215'),
  C('IFR-041','ifr','Do published takeoff minimums in § 91.175 automatically apply to every Part 91 airplane?','The federal takeoff-minimum rule in § 91.175(f) applies to the listed commercial and program operations, not ordinary personal Part 91 flights. That distinction is not a safety endorsement: use ODPs, performance limits, personal minimums, and a viable departure emergency plan.','p91','§ 91.175(f)'),
  C('IFR-042','ifr','How far may approach lights alone permit descent below DA or MDA?','If all other landing conditions are met, approach lights alone permit descent to 100 feet above touchdown-zone elevation. Below that, you need the red terminating/side-row bars or another qualifying runway reference listed in § 91.175(c)(3).','p91','§ 91.175(c)(3)'),
  C('IFR-043','ifr','When must a pilot immediately execute the missed approach?','At the missed-approach point or DA/DH when the required visual-reference and visibility conditions are not met, whenever an identifiable part of the airport is not distinctly visible during circling, or whenever safe continuation becomes doubtful.','p91','§ 91.175(e)'),
  C('IFR-044','ifr','What route and altitude apply after two-way radio failure in IMC?','In VFR conditions, continue VFR and land as soon as practicable. Otherwise use the assigned route; if being vectored, go directly to the fix/route/airway specified; then use an expected route or, if none, the filed route. For each segment, use the highest of assigned, minimum IFR, or expected altitude.','p91','§ 91.185(c)'),
  C('IFR-045','ifr','What authorization is required to operate IFR in controlled airspace?','An IFR flight plan must be filed and an appropriate ATC clearance received. Filing alone is not a clearance, and a clearance does not waive weather, equipment, performance, or pilot-qualification requirements.','p91','§ 91.173'),
  C('IFR-046','ifr','What does a clearance void time mean?','You must be airborne before the void time or obtain a new ATC departure release. If not departing, contact ATC by its specified notification time; that time will not be more than 30 minutes after the void time. Do not treat 30 minutes as permission to delay contacting ATC.','aim','Departure release and clearance void times'),
  C('IFR-047','ifr','How does a release time differ from a clearance void time?','A release time is the earliest time an aircraft may depart under its IFR clearance. A void time is the latest time the clearance remains valid. Read back both and keep the aircraft on the ground outside that window unless ATC amends it.','aim','Departure release procedures'),
  C('IFR-048','ifr','What does “hold for release” require?','Do not depart until ATC issues a release. The route and altitude portion of a clearance may already be available, but the hold-for-release restriction still prevents takeoff under that IFR clearance.','aim','Departure release procedures'),
  C('IFR-049','ifr','Does an ATC clearance guarantee terrain or regulatory compliance?','No. A clearance authorizes movement under specified traffic conditions; it does not authorize violation of a rule or unsafe operation. The PIC must request an amendment when a clearance cannot be accepted safely or legally.','aim','AIM 4-4-1'),
  C('IFR-050','ifr','What IFR cruising altitudes apply in level flight below 18,000 feet MSL?','In controlled airspace, fly the altitude ATC assigns. In uncontrolled airspace, use an odd-thousand-foot MSL altitude on magnetic courses 0° through 179° and an even-thousand-foot altitude on courses 180° through 359°, subject to minimum IFR altitudes.','p91','§ 91.179'),
  C('IFR-051','ifr','What minimum altitude applies to IFR flight when no published minimum exists?','Except during takeoff or landing, at least 2,000 feet above the highest obstacle within 4 NM in designated mountainous areas, or 1,000 feet above the highest obstacle within 4 NM elsewhere.','p91','§ 91.177(a)'),
  C('IFR-052','ifr','Which position reports are required in nonradar IFR operations?','Report the time and altitude when passing each designated compulsory reporting point, or the points ATC requests, plus any other information ATC requires. Radar contact normally changes routine reporting requirements, not all reporting duties.','p91','§ 91.183(a); AIM position reporting'),
  C('IFR-053','ifr','What conditions must an IFR pilot report to ATC even in radar contact?','Report unforecast weather encountered and any other information relating to flight safety. The AIM also lists compulsory reports such as vacating an altitude, inability to maintain climb or descent, missed approach, and navigation or communications failures.','p91','§ 91.183(b); AIM 5-3-3'),
  C('IFR-054','ifr','What must be reported after a navigation, approach, or communication equipment malfunction in IFR flight?','Report the failure to ATC as soon as practical, including aircraft identification, affected equipment, degree of impairment, and the nature and extent of assistance desired. Then use the applicable checklist and revised clearance.','p91','§ 91.187'),
  C('IFR-055','ifr','When may an IFR flight plan be canceled in the air?','When operating in VFR conditions outside Class A airspace and the pilot can continue under VFR. State “cancel IFR” explicitly; changing to an advisory frequency or saying the airport is in sight does not itself cancel IFR.','aim','Canceling IFR'),
  C('IFR-056','ifr','What is the practical danger of canceling IFR before landing at a non-towered airport?','ATC separation and IFR traffic protection end, while weather, terrain, traffic, and airspace risks remain. Cancel only when VFR can be maintained and the traffic picture and landing are secure; otherwise cancel after landing through the published method.','iph','Approaches to airports without operating control towers'),
  C('IFR-057','ifr','When is an alternate required if the destination has no published instrument approach?','For an airplane, an alternate is normally required because the no-alternate exception requires an authorized published instrument approach at the destination. Plan a safe, legal visual arrival if there is no usable destination approach.','p91','§ 91.169(a),(b)'),
  C('IFR-058','ifr','How is a no-instrument-approach airport evaluated as an alternate?','The forecast must permit descent from the MEA, approach, and landing under basic VFR. The familiar 800-2 value is not the test for an alternate with no published instrument approach.','p91','§ 91.169(c)(2)'),
  C('IFR-059','ifr','Why should IFR fuel planning exceed the legal minimum?','The § 91.167 calculation may not cover vectors, holds, missed approaches, stronger winds, runway changes, or an unavailable approach. Set a decision fuel that preserves a real alternate and reserve before options narrow.','p91','§ 91.167'),
  C('IFR-060','ifr','What does a TAF describe, and why does that matter for alternate planning?','A TAF forecasts conditions within the terminal area around one airport for stated times; it is not an area forecast for the whole route. Check valid time groups, amendments, probability or temporary groups, and nearby observations and trends.','aim','Aviation weather reports and forecasts'),
  C('IFR-061','ifr','Why must the exact planned arrival time be compared with a TAF?','Alternate and destination rules use specified time windows, while TAF conditions change at forecast group times. Convert the ETA correctly, account for delays, and evaluate the controlling group rather than relying on the first line.','p91','§ 91.169; preflight planning'),
  C('IFR-062','ifr','What should be verified when filing an IFR equipment code or capability?','File only navigation, surveillance, and performance capabilities that are installed, operative, approved, and usable by the crew. Incorrect capability information can produce an unusable route or separation plan.','aim','Domestic and ICAO flight plans'),
  C('IFR-063','ifr','What is a preferred IFR route?','A route established to move traffic efficiently between busy terminals. It may be expected or assigned, but current charts, NOTAMs, aircraft capability, weather, and the actual ATC clearance still control.','aim','Preferred IFR routes'),
  C('IFR-064','ifr','What must be checked when a SID includes runway and en route transitions?','Confirm the charted runway transition, common route, en route transition, initial altitude, top altitude, navigation requirements, and every restriction match the clearance and the loaded procedure.','iph','Departure procedures'),
  C('IFR-065','ifr','What does the absence of a published ODP tell a pilot?','It may mean a diverse departure assessment found standard obstacle clearance possible, or that no IFR departure procedure was developed; it does not prove every direction, technique, or aircraft performance is safe. Review takeoff-minima and obstacle information.','iph','Departure procedure planning'),
  C('IFR-066','ifr','What is a Diverse Vector Area?','A DVA is defined airspace in which ATC may provide radar vectors during an uninterrupted climb from the departure runway while obstacle clearance is assured under specified design criteria. The pilot must meet any charted climb gradient or restrictions.','iph','Diverse Vector Areas'),
  C('IFR-067','ifr','What is a visual climb over airport procedure?','A VCOA lets a pilot climb in visual conditions over the airport to a published altitude before proceeding on the instrument departure. It must be requested before takeoff and requires remaining clear of clouds with specified visibility.','iph','Visual climb over airport'),
  C('IFR-068','ifr','Are obstacle departure procedures assigned automatically by ATC?','Normally no. A pilot may fly an ODP without a specific ATC clearance unless an alternate instruction conflicts, but should tell ATC when intending to use it. ATC may assign an ODP when necessary.','aim','Obstacle departure procedures'),
  C('IFR-069','ifr','Where can a textual obstacle departure procedure be found?','In the TPP takeoff-minimums and obstacle-departure-procedures section for the airport; some complex ODPs are charted separately. Review both the airport listing and any chart before takeoff.','dtpp','Takeoff minima and ODP section'),
  C('IFR-070','ifr','When may a pilot begin a turn before the departure end of runway?','Only when the procedure or ATC instruction specifically requires or permits it and safe clearance is assured. Standard departure design assumes no turn before reaching the DER and at least 400 feet above DER elevation before the initial turn.','iph','Departure obstacle clearance'),
  C('IFR-071','ifr','What should a pilot consider before accepting radar vectors immediately after takeoff?','Confirm the aircraft can meet the required climb, the vector is consistent with any published departure restriction, and navigation and communications are ready. If a vector would compromise safety or performance, say “unable.”','aim','Departure procedures and radar vectors'),
  C('IFR-072','ifr','What is the obstacle-clearance purpose of a published departure climb gradient?','It identifies a minimum climb performance needed along the stated path to remain within the procedure’s obstacle-clearance design. Convert it for expected groundspeed and confirm the airplane can sustain it under actual conditions.','terps','Departure procedure criteria'),
  C('IFR-073','ifr','Why plan an engine or system failure before an IMC takeoff?','A published departure assumes normal required performance; it does not create a safe return after every failure. Brief a minimum control altitude, runway or off-airport options, return approaches, terrain, and when continuing is safer than turning back.','iph','IFR departure planning'),
  C('IFR-074','ifr','What does a changeover point on an airway indicate?','It is the point at which primary navigation guidance should change from the facility behind the aircraft to the facility ahead. A charted changeover point displaces the switch from the segment midpoint.','aim','VOR changeover points'),
  C('IFR-075','ifr','If no changeover point is charted between two VORs, where is the normal change made?','At the midpoint of the airway segment, unless signal reception, a charted course change, or ATC instruction requires another point. Verify identification and usable signal before relying on the next facility.','aim','VOR changeover points'),
  C('IFR-076','ifr','What is an OROCA on an IFR en route chart?','An off-route obstruction-clearance altitude provides obstacle clearance within a chart quadrangle—generally 1,000 feet in nonmountainous areas and 2,000 feet in designated mountainous areas. It does not assure navigation, communication, radar coverage, or controlled airspace.','aim','IFR en route charts'),
  C('IFR-077','ifr','What does a maximum authorized altitude protect against?','An MAA is the highest usable altitude for an airway, route segment, or procedure at which adequate navigation reception is assured without unacceptable interference. Do not confuse it with an aircraft performance limit.','aim','En route altitudes'),
  C('IFR-078','ifr','How does a minimum safe altitude on an approach chart differ from an en route MEA?','An MSA provides emergency obstacle clearance—normally within 25 NM of the named facility or waypoint—but does not necessarily assure navigation or communication coverage. It is not a substitute for a cleared route altitude.','dtpp','Instrument approach chart plan view'),
  C('IFR-079','ifr','What is a terminal arrival area?','A TAA uses RNAV waypoints and sectors to provide a transition from en route structure to an approach, with published minimum altitudes that permit descent when cleared and established in the applicable sector. Observe sector boundaries and stepdowns.','aim','Terminal arrival areas'),
  C('IFR-080','ifr','May a pilot use a controller’s MVA or MIA as a self-selected IFR altitude?','No. Minimum vectoring and minimum IFR altitudes are ATC tools and may not be charted for pilot navigation. Until ATC assigns an altitude and provides the applicable service, comply with published or regulatory minimums.','aim','Radar vectoring altitudes'),
  C('IFR-081','ifr','Why can DME indicate more than the horizontal distance to a station?','DME measures slant-range distance. The difference is greatest high and close to the station; directly above it, the indication is approximately the aircraft’s height above the station in nautical miles.','aim','Distance measuring equipment'),
  C('IFR-082','ifr','What should a pilot expect in the cone of confusion over a VOR?','Course indications may become unreliable or fluctuate as the aircraft passes nearly overhead. Maintain the intended heading, identify station passage with the available cues, and intercept the outbound course after indications stabilize.','hand','Instrument navigation'),
  C('IFR-083','ifr','What are the basic components of a conventional ILS?','The localizer supplies lateral guidance, the glideslope supplies vertical guidance, and marker beacons or approved substitutes help identify fixes; approach lighting and runway visual aids support the transition to landing.','aim','Instrument landing system'),
  C('IFR-084','ifr','Why should an ILS glideslope normally be intercepted from below?','False glideslope courses can exist above the normal path. Intercepting the published glideslope from below at the charted altitude helps assure the correct signal and protects stepdown and obstacle-clearance requirements.','aim','Instrument landing system'),
  C('IFR-085','ifr','What happens to localizer sensing on a published back-course approach?','Without automatic back-course processing, normal CDI corrections are reversed because the aircraft is using the back side of the localizer signal. Verify the avionics mode and chart; do not use an associated glideslope unless specifically authorized.','hand','Localizer back-course approaches'),
  C('IFR-086','ifr','May GPS or DME substitute for every component of an ILS?','No. Approved RNAV may substitute for some fixes or DME, subject to equipment authorization and procedure notes, but it does not replace the final localizer or glideslope course for an ILS approach.','aim','Suitable RNAV substitution'),
  C('IFR-087','ifr','What does SUSP or waypoint-sequencing suspension mean on an IFR GPS?','Automatic sequencing has stopped, commonly at a hold, missed-approach point, or manually selected state. The pilot must understand the reason and resume sequencing at the correct time; blindly pressing the button can activate the wrong leg.','hand','GPS operation'),
  C('IFR-088','ifr','What is RAIM and when is it especially important?','Receiver autonomous integrity monitoring checks GPS signal consistency and warns when integrity is inadequate. For non-WAAS IFR GPS equipment, predict availability when required and have a plan for loss of integrity.','aim','GPS integrity monitoring'),
  C('IFR-089','ifr','Does WAAS eliminate all preflight satellite-navigation checks?','No. WAAS improves accuracy, integrity, and availability, but pilots must still check equipment approval, database and procedure currency, NOTAMs, outages or interference, and the availability of the service needed for the planned minima.','aim','Wide Area Augmentation System'),
  C('IFR-090','ifr','What should a pilot do after suspected GPS jamming or spoofing?','Cross-check independent navigation and raw data, reject implausible position or time changes, notify ATC, and use another approved navigation source or request assistance. Do not allow an apparently normal moving map to override conflicting evidence.','aim','GPS interference mitigation'),
  C('IFR-091','ifr','When may a suitable RNAV system substitute for a conventional NAVAID or fix?','Only when the installed system is approved, operational, and used within FAA substitution guidance and any procedure restrictions. Monitor or use the conventional aid when required; substitution does not authorize flying an unavailable final approach course.','aim','Suitable RNAV systems'),
  C('IFR-092','ifr','Why must an instrument procedure be loaded from the approved navigation database?','Database coding preserves the authorized waypoint sequence, path terminators, courses, and constraints. For an RNAV approach, do not construct the procedure by manually entering coordinates or substituting a visually similar waypoint.','aim','RNAV procedure databases'),
  C('IFR-093','ifr','What does an LP minima line provide?','Localizer performance minima provide angular lateral guidance from WAAS but no approved vertical guidance. Fly it as a nonprecision approach to an MDA unless the chart and avionics present another authorized minima line.','aim','RNAV approach minima'),
  C('IFR-094','ifr','Can advisory vertical guidance such as +V authorize descent to a DA?','No. Advisory guidance may help stabilize a descent, but it does not change the published LNAV MDA, stepdown fixes, or missed-approach point. The published minima line and restrictions remain controlling.','aim','Advisory vertical guidance'),
  C('IFR-095','ifr','Why can temperature matter on a barometric VNAV approach?','Baro-VNAV computes vertical guidance from pressure altitude, so temperatures outside published limits can invalidate the vertical path or require restrictions and corrections. Observe chart notes and use only approved equipment and procedures.','aim','Barometric VNAV'),
  C('IFR-096','ifr','What is the key preflight question for an RNAV approach with several minima lines?','Which line can this aircraft, installation, service status, and crew legally and reliably use today? Brief the fallback minima before the approach so a downgrade does not create rushed decisions.','iph','RNAV approach planning'),
  C('IFR-097','ifr','Are the recommended parallel, teardrop, and direct holding entries regulatory boundaries?','No. They are recommended entry methods that help remain in protected airspace. The pilot remains responsible for an entry and wind correction that keep the aircraft within the holding pattern’s protected area.','aim','Holding pattern entries'),
  C('IFR-098','ifr','When does outbound timing begin in a standard hold?','Over or abeam the fix, whichever occurs later. If the abeam position cannot be determined, begin timing when the outbound turn is completed. Adjust subsequent outbound timing to achieve the proper inbound leg.','aim','Holding procedures'),
  C('IFR-099','ifr','How is wind correction commonly applied in a hold?','Correct the inbound leg to track the inbound course, then use approximately triple that drift correction on the outbound leg as a starting technique. Adjust timing and heading from actual results while remaining within protected airspace.','hand','Holding wind correction'),
  C('IFR-100','ifr','What operational purpose does an expect-further-clearance time serve?','It tells the pilot when ATC expects to issue clearance beyond the hold and is vital for fuel planning and lost-communications timing. It is not itself authorization to leave the hold while communications are working.','aim','Holding clearances'),
  C('IFR-101','ifr','What should a pilot do when nearing a clearance limit without further clearance?','Request further clearance early. With advance notice of holding, reduce to holding speed at least 3 minutes before the fix. If no pattern or instructions are available at the limit, use a standard hold on the arrival course and request clarification; lost communications requires § 91.185.','aim','AIM 4-4-3'),
  C('IFR-102','ifr','May a pilot reject a SID or STAR?','Yes. Advise ATC when unable or unwilling to accept it and request another clearance. The pilot must possess at least the textual description or chart and have the navigation capability required to accept the procedure.','aim','DP and STAR procedures'),
  C('IFR-103','ifr','Does a “descend via” clearance authorize descent below the published bottom altitude?','No. It authorizes descent on the cleared STAR while meeting published restrictions, but not below the published or assigned bottom altitude. An ATC amendment replaces only the restriction it clearly changes.','aim','Descend via clearances'),
  C('IFR-104','ifr','What does “descend at pilot’s discretion” allow?','The pilot may choose when to begin descent and the rate, and may temporarily level at an intermediate altitude. After vacating an altitude, the pilot may not return to it without an ATC clearance.','aim','Pilot’s discretion descents'),
  C('IFR-105','ifr','Why must a terminal procedure’s effective dates and NOTAMs be checked?','d-TPP products change on publication cycles and can receive interim changes, amendments, or cancellations. A saved chart can look normal while being obsolete, so verify currency and applicable NOTAMs before use.','dtpp','Publication cycle and change notices'),
  C('IFR-106','ifr','What belongs in an instrument approach briefing?','Procedure and runway, navigation source, frequencies, course and fixes, altitudes and stepdowns, DA or MDA, visibility, timing or distance to MAP, lighting, missed approach, notes, aircraft configuration, and threats.','iph','Approach briefing'),
  C('IFR-107','ifr','What is a feeder route on an instrument approach chart?','A published route from a fix or NAVAID to an initial approach fix, with a course, distance, and minimum altitude. When cleared for the approach on that route, comply with its published constraints.','dtpp','Approach chart plan view'),
  C('IFR-108','ifr','What is the purpose of the initial approach segment?','It transitions the aircraft from the en route environment to the approach, provides course guidance and obstacle clearance, and positions the aircraft for the intermediate segment. It commonly begins at an IAF.','terps','Initial approach segment'),
  C('IFR-109','ifr','What is the purpose of the intermediate approach segment?','It aligns and configures the aircraft for final approach while allowing speed and altitude adjustment. It begins at the intermediate fix or point and ends at the final approach fix or point.','terps','Intermediate approach segment'),
  C('IFR-110','ifr','What is the purpose of the final approach segment?','It provides the defined path from the final approach fix or point toward the runway, airport, or missed-approach point with published minima based on navigation and obstacle criteria.','terps','Final approach segment'),
  C('IFR-111','ifr','Where does missed-approach obstacle protection begin?','At the published missed-approach point, assuming the missed approach is initiated at DA or MAP and at or above the applicable minimum altitude. An early or late go-around can place the aircraft outside the designed surface.','aim','Missed approach procedures'),
  C('IFR-112','ifr','How are an IAF, IF, and FAF used on an approach?','The initial approach fix starts an initial segment, the intermediate fix starts the intermediate segment, and the final approach fix or point starts final. Some procedures combine functions or identify them differently, so use the charted symbols and coding.','dtpp','Instrument approach chart legend'),
  C('IFR-113','ifr','What does the lightning-bolt symbol on an ILS profile identify?','It marks the glideslope intercept point at the published minimum intercept altitude. Intercepting there while established on the localizer supports the designed vertical path and obstacle clearance.','dtpp','Instrument approach chart legend'),
  C('IFR-114','ifr','How is a nonprecision final approach fix commonly depicted?','A Maltese-cross symbol identifies the FAF on many nonprecision approaches. On procedures without a FAF, the final segment may begin at another defined point; brief the actual chart rather than relying on one symbol.','dtpp','Instrument approach chart legend'),
  C('IFR-115','ifr','How is a visual descent point shown and used?','A V-shaped symbol in the profile view marks a published VDP. It is advisory for beginning a normal visual descent from MDA after required visual references exist; it is neither the MAP nor authority to descend early.','dtpp','Instrument approach chart legend'),
  C('IFR-116','ifr','Where is the final approach point on a precision approach?','At the point on the final approach course where the published glideslope or glidepath intercepts the minimum intercept altitude shown on the chart. An aircraft intercepting the signal elsewhere does not move the procedure’s defined final approach point.','iph','Precision approach procedures'),
  C('IFR-117','ifr','May a pilot ignore a stepdown fix after intercepting advisory vertical guidance?','No. Stepdown fixes and their minimum altitudes remain mandatory unless the published procedure and authorized vertical-guidance minima provide otherwise. Advisory guidance cannot erase a charted altitude restriction.','aim','Instrument approach procedures'),
  C('IFR-118','ifr','What is a continuous descent final approach?','A CDFA is a constant-angle descent on a nonprecision approach from an appropriate altitude toward a point near the runway. It can improve stability, but published stepdowns, MDA, visibility, and the MAP still apply.','iph','Nonprecision approaches'),
  C('IFR-119','ifr','When may timing identify the missed-approach point?','Only when the procedure publishes a time table and the required groundspeed basis can be used. Start timing at the charted FAF; significant wind or speed error makes timing less reliable, so cross-check all available fix information.','dtpp','Approach timing table'),
  C('IFR-120','ifr','Does a visual approach cancel an IFR clearance?','No. The flight remains IFR until canceled or the flight plan is closed. The pilot must maintain visual contact with the airport or preceding aircraft as applicable and comply with ATC instructions and wake-turbulence responsibility.','aim','Visual approaches'),
  C('IFR-121','ifr','Who may initiate a contact approach?','Only the pilot may request it; ATC cannot initiate one. The pilot needs at least 1 statute mile flight visibility, must remain clear of clouds, and must reasonably expect to continue to the destination under those conditions.','aim','Contact approaches'),
  C('IFR-122','ifr','What is a side-step maneuver?','A visual maneuver to a parallel runway 1,200 feet or less from the approach runway, using the published side-step minima. Start promptly when the runway environment is visible; remain at or above side-step MDA until § 91.175 permits a normal descent to land.','aim','Side-step maneuvers'),
  C('IFR-123','ifr','What is the difference between straight-in minima and a straight-in landing?','Straight-in minima are published when alignment and descent criteria are met. A pilot may make a straight-in landing from an approach with only circling minima when the runway is suitable and § 91.175 is met, but the circling minima still govern.','aim','Straight-in and circling minima'),
  C('IFR-124','ifr','Does “cleared approach” always authorize a charted course reversal?','The clearance authorizes the published procedure, including a required course reversal, unless the aircraft is on a NoPT route, receives radar vectors to final, or ATC clears it for a straight-in approach. Resolve any ambiguity before the fix.','aim','Procedure turns'),
  C('IFR-125','ifr','Why might an approach publish only circling minima even when the final course points toward a runway?','The final course alignment, descent gradient, runway environment, or other procedure criteria may not support straight-in minima. Do not invent lower straight-in minima; use the published circling line and land only when a normal descent is possible.','terps','Straight-in alignment criteria'),
  C('IFR-126','ifr','What does “Circling NA” mean on an approach chart?','Circling is not authorized for the runway, direction, category, or conditions specified in the note. It may reflect obstacles, airspace, visibility, or maneuvering limitations; use another authorized runway or approach.','dtpp','Approach chart notes'),
  C('IFR-127','ifr','What does the inverse “C” symbol next to circling minima indicate?','Expanded circling-approach maneuvering areas were used in developing those minima. The protected radius varies with approach category and altitude, but the pilot must still remain within the applicable protected area.','dtpp','Approach chart legend'),
  C('IFR-128','ifr','What indicated speeds define airplane approach categories?','A is less than 91 knots; B is 91–120; C is 121–140; D is 141–165; E is 166 knots or more. The category basis is VREF or 1.3 VSO at maximum certificated landing weight, but faster maneuvering requires higher-category minima.','aim','Aircraft approach categories'),
  C('IFR-129','ifr','For an ordinary Part 91 approach, is reported RVR the same as flight visibility?','No. RVR is a reported runway value; flight visibility is what the pilot sees from the cockpit. Section 91.175 requires the prescribed flight visibility to descend below DA/MDA and land. Use published RVR minima and authorized conversions correctly; special authorizations and other operating rules may add requirements.','p91','§ 91.175; approach visibility'),
  C('IFR-130','ifr','How do approach lights help during the transition from instruments?','They provide alignment, roll, and distance cues toward the runway environment. They do not by themselves guarantee adequate flight visibility or a safe landing, and the § 91.175 limit on descent using lights alone still applies.','aim','Approach light systems'),
  C('IFR-131','ifr','What should be done when an approach-light, runway-light, or navigation component is inoperative?','Check NOTAMs and the TPP inoperative-components table or chart notes, then apply any required visibility or minima increase. Confirm the remaining visual references support the planned operation; do not improvise a credit.','dtpp','Inoperative components table'),
  C('IFR-132','ifr','Which runway references can support descent below DA or MDA?','Section 91.175 lists the threshold or its markings or lights, runway-end identifier lights, visual glide-slope indicator, touchdown zone or its markings or lights, runway or its markings or lights, and specified approach-light references. The selected reference must be distinctly visible and identifiable.','p91','§ 91.175(c)(3)'),
  C('IFR-133','ifr','Is there a general Part 91 prohibition on beginning an approach when reported weather is below minima?','Ordinary Part 91 operations are not subject to the commercial approach-ban provisions, but the pilot still may not descend below DA or MDA unless every § 91.175(c) condition is met. Safety, fuel, and missed-approach planning remain controlling.','p91','§ 91.175'),
  C('IFR-134','ifr','What is the first lateral task when executing a published missed approach?','Follow the charted missed-approach instructions from the proper point while climbing as required. Unless an immediate turn is published, continue on the approach course before beginning the specified turn; advise ATC as soon as practical.','aim','Missed approach procedures'),
  C('IFR-135','ifr','How should an early missed approach be flown before reaching the MAP?','Begin climbing, but normally continue along the final approach course to the MAP before executing the published missed approach unless ATC issues alternate instructions. Turning early may leave protected airspace.','aim','Early missed approaches'),
  C('IFR-136','ifr','Why is a go-around after passing the MAP or descending below minima a special case?','The published missed approach may not provide obstacle or traffic protection from that position. Maintain control, climb toward safe airspace, consider the landing-runway environment and obstacles, and coordinate with ATC immediately.','aim','Balked landing considerations'),
  C('IFR-137','ifr','What should be briefed about the missed-approach holding fix?','The initial heading or course, climb altitude, navigation source, fix identification, hold direction and inbound course, entry, minimum altitude, and any nonstandard speed or leg limit. Set up as much as practical before final approach.','iph','Missed approach briefing'),
  C('IFR-138','ifr','What climb performance is assumed for a standard missed approach?','At least 200 feet per nautical mile unless a higher gradient is published. Because the required feet per minute rises with groundspeed, calculate performance before the approach and consider wind, configuration, and aircraft condition.','aim','AIM 5-4-21'),
  C('IFR-139','ifr','What is the safest initial action if visual reference is lost while circling?','Begin the missed approach with an initial climbing turn toward the landing runway, then continue the turn to intercept and fly the published missed-approach course. This helps remain within the circling and missed-approach protected areas.','aim','Circling missed approach'),
  C('IFR-140','ifr','What is an airport surveillance radar approach?','An ASR approach provides controller headings and range information to guide the aircraft to a runway; altitude guidance is advisory based on published minimums. The pilot controls descent and must execute the missed approach at the instructed point if required.','aim','Radar approaches'),
  C('IFR-141','ifr','What additional guidance does a precision approach radar approach provide?','A PAR controller supplies precise azimuth and glidepath guidance with course and descent corrections through final approach. The pilot must promptly follow or question instructions and execute the directed missed approach if communications or guidance is lost.','aim','Radar approaches'),
  C('IFR-142','ifr','What are no-gyro vectors, and how are turns made?','ATC gives turn direction and says when to stop when heading information is unreliable. Use standard-rate turns unless otherwise instructed; on final approach, use half-standard-rate turns.','aim','No-gyro radar vectors'),
  C('IFR-143','ifr','Why must an altimeter setting’s source and age be checked for an approach?','Procedure minima assume an authorized setting from the named or permitted source. A remote setting may require a charted altitude adjustment or restriction, and a stale or wrong setting directly changes obstacle clearance and indicated height.','dtpp','Approach chart notes and minima'),
  C('IFR-144','ifr','How does very cold temperature affect true altitude?','True altitude is lower than indicated when the air is colder than standard. Apply required cold-temperature corrections under current FAA guidance and chart notes, while still flying ATC-assigned altitudes unless coordinated as required.','aim','Cold temperature altitude correction'),
  C('IFR-145','ifr','What indications suggest a blocked static system in a conventional panel?','The altimeter freezes, the vertical-speed indicator trends to zero, and the airspeed indication becomes unreliable—typically reading low in a climb and high in a descent. Use the approved alternate-static procedure and aircraft checklist.','hand','Pitot-static system failures'),
  C('IFR-146','ifr','What indications can result from a blocked pitot inlet and drain hole?','The airspeed indicator can behave like an altimeter, increasing in a climb and decreasing in a descent, while static instruments remain normal. Use attitude, power, known performance, and the aircraft checklist.','hand','Pitot-static system failures'),
  C('IFR-147','ifr','How should a pilot handle a suspected attitude-indicator failure in IMC?','Cross-check supporting instruments before deciding which indication failed, maintain a known attitude and power, cover or disregard the failed display, reduce workload, notify ATC, and use standby instruments or automation only if their sources are reliable.','hand','Partial-panel flight'),
  C('IFR-148','ifr','What makes an electrical-system failure especially serious in IFR flight?','It can progressively remove communications, navigation, lighting, pitot heat, displays, and even engine support depending on the aircraft. Shed loads per checklist, preserve essential power, tell ATC, and divert before battery endurance is exhausted.','hand','Instrument emergencies'),
  C('IFR-149','ifr','After lost communications, when do you leave a clearance limit and begin the approach?','If the limit is a fix from which an approach begins, start descent or approach as close as possible to the EFC time; without one, use ETA based on the filed or ATC-amended ETE. If the limit is not such a fix, leave at EFC—or on arrival if none—then proceed to an approach fix and begin as close as possible to that ETA.','p91','§ 91.185(c)(3)'),
  C('IFR-150','ifr','What authority and communication duties apply in an IFR emergency?','The PIC may deviate from rules or clearances to the extent required by the emergency, should declare the emergency and state needs early, and must notify ATC of a clearance deviation as soon as possible. A written report is required only if requested.','p91','§§ 91.3, 91.123'),

  C('SYS-001','systems','What happens during the four strokes of a typical reciprocating aircraft engine?','Intake draws the fuel-air charge into the cylinder, compression raises its pressure, power follows ignition and expansion, and exhaust expels the burned gases. The crankshaft completes two revolutions for one four-stroke cycle.','phak','ch. 7, reciprocating engines'),
  C('SYS-002','systems','What indications commonly suggest carburetor ice?','In a fixed-pitch-propeller airplane, an unexplained RPM decrease; with a constant-speed propeller, a drop in manifold pressure. Roughness may follow. Apply carburetor heat according to the aircraft procedure and expect an initial further power loss.','phak','ch. 7, induction systems'),
  C('SYS-003','systems','What is the purpose of the mixture control?','It adjusts the fuel-to-air ratio as air density and power setting change. Use the POH procedure for leaning, enrichment, takeoff, climb, descent, and engine cooling; an excessively rich or lean mixture can reduce power or damage the engine.','phak','ch. 7, fuel-air mixture'),
  C('SYS-004','systems','What is detonation?','An uncontrolled, explosive combustion of the remaining fuel-air charge after normal ignition. High temperature, excessive manifold pressure, low-octane fuel, or an overly lean mixture can promote it; reduce power and follow the POH response.','phak','ch. 7, abnormal combustion'),
  C('SYS-005','systems','How does preignition differ from detonation?','Preignition begins when a hot spot ignites the mixture before the spark event; detonation is abnormal explosive burning after ignition begins. Either can rapidly overheat and damage a cylinder and may occur together.','phak','ch. 7, abnormal combustion'),
  C('SYS-006','systems','Why can vapor lock interrupt fuel flow?','Fuel vaporizes in a line or component, and the fuel pump may be unable to move the vapor effectively. Heat, altitude, and fuel volatility contribute; prevention and recovery depend on the aircraft’s fuel-system design and POH.','phak','ch. 7, fuel systems'),
  C('SYS-007','systems','Why can some engines keep running after an electrical failure?','Many piston engines have self-powered ignition independent of the aircraft battery and alternator. Others depend on electrical fuel pumps, ignition, or engine controls. Check the installed engine and backup power; do not assume every engine will keep running.','phak','ch. 7, ignition systems'),
  C('SYS-008','systems','What is the difference between an ammeter and a loadmeter?','An ammeter may show current flowing to or from the battery, while a loadmeter shows alternator or generator output as a percentage or current value. Interpret the installed instrument using the POH and normal indications.','phak','ch. 7, electrical systems'),
  C('SYS-009','systems','What indications may reveal an alternator or generator failure?','A low-voltage or charging warning, abnormal ammeter or loadmeter indication, and progressive loss of electrical equipment. Confirm with the checklist, reduce nonessential load, and plan around finite battery endurance.','phak','ch. 7, electrical systems'),
  C('SYS-010','systems','Why is estimated battery endurance not a guaranteed time?','Battery age, temperature, state of charge, equipment load, wiring condition, and failure type all change endurance. Shed loads early and preserve essential equipment instead of waiting for displays to go dark.','phak','ch. 7, electrical systems'),
  C('SYS-011','systems','Which instruments use pitot pressure and which use static pressure?','The airspeed indicator compares pitot and static pressure. The altimeter and vertical-speed indicator use static pressure only. Know the locations, drains, heat, and alternate-static procedure for the specific aircraft.','phak','ch. 8, flight instruments'),
  C('SYS-012','systems','What two gyroscopic properties support traditional flight instruments?','Rigidity in space allows a spinning gyro to resist changes to its plane, while precession causes an applied force to appear about 90 degrees later in the direction of rotation. Instrument design uses and compensates for these effects.','phak','ch. 8, gyroscopic instruments'),
  C('SYS-013','systems','What does an attitude and heading reference system provide?','An AHRS uses solid-state sensors to calculate attitude and heading information for electronic displays. It can remove dependence on spinning vacuum gyros, but sensor, power, magnetic, or data failures can still produce invalid indications.','phak','ch. 8, electronic flight displays'),
  C('SYS-014','systems','What information does an air data computer derive?','Using pitot-static and temperature inputs, an ADC can calculate values such as pressure altitude, vertical speed, indicated and true airspeed, and outside-air temperature. One bad input may affect several displayed values simultaneously.','phak','ch. 8, electronic flight displays'),
  C('SYS-015','systems','What is the relationship among a transponder, Mode C altitude, and an altitude encoder?','The transponder replies to surveillance interrogations; Mode C reporting includes pressure altitude supplied by an encoder or air-data system. The reported pressure altitude is corrected by ATC systems rather than set directly from the pilot’s altimeter setting.','aim','ATC surveillance systems'),
  C('SYS-016','systems','How do ADS-B Out and ADS-B In differ?','ADS-B Out broadcasts the aircraft’s identity, position, altitude, velocity, and other data when required and properly configured. ADS-B In receives traffic and information services when compatible equipment and coverage are available; it is not a collision-avoidance guarantee.','aim','ADS-B services'),
  C('SYS-017','systems','What does an electric pitch-trim system do, and why can a runaway be dangerous?','It moves the trim surface or stabilizer to relieve control force. Uncommanded motion can rapidly create extreme pitch force; oppose it, disconnect or disable the system by the approved method, and follow the aircraft checklist.','phak','ch. 6, trim systems'),
  C('SYS-018','systems','Should a tripped circuit breaker automatically be reset?','No. A trip can indicate an overload or short and resetting may create heat or fire. Follow the POH or checklist; reset only when the procedure and operational need support it, generally no more than once unless specifically directed.','phak','ch. 7, electrical protection'),
  C('SYS-019','systems','Why must fuel-selector operation be aircraft-specific?','Tank layout, selector positions, return flow, pumps, unusable fuel, and crossfeed arrangements differ. Select and verify positions using the POH and checklist; an apparently logical selection can interrupt fuel in another design.','phak','ch. 7, fuel systems'),
  C('SYS-020','systems','Why is the POH the controlling systems reference for a particular airplane?','Generic handbooks explain principles, but the approved flight manual, supplements, placards, and checklists define the installed system, limitations, approved procedures, and failure responses for that aircraft.','p91','§ 91.9'),

  C('HF-001','human-factors','What is hypoxic hypoxia?','A shortage of usable oxygen reaching body tissues because oxygen pressure is inadequate, commonly at altitude. Judgment and vision can degrade before the pilot recognizes the problem; use oxygen, descend, and ventilate as appropriate.','phak','ch. 17, hypoxia'),
  C('HF-002','human-factors','Why is self-detection of hypoxia unreliable?','Symptoms vary by person and can include euphoria and impaired judgment, so the organ deciding whether something is wrong is itself impaired. Treat unexplained headache, confusion, poor coordination, or color-vision change at altitude as urgent.','phak','ch. 17, hypoxia'),
  C('HF-003','human-factors','How can hyperventilation resemble hypoxia?','Overbreathing lowers carbon dioxide and may cause dizziness, tingling, visual disturbance, or unconsciousness—symptoms that overlap hypoxia. Maintain aircraft control, slow breathing, use oxygen if available, and descend when the cause is uncertain.','phak','ch. 17, hyperventilation'),
  C('HF-004','human-factors','Why is carbon-monoxide exposure especially dangerous in flight?','Carbon monoxide is colorless and odorless and binds to hemoglobin far more readily than oxygen. Headache, drowsiness, dizziness, or nausea may be mistaken for fatigue; shut off the suspected heater, ventilate, use oxygen, and land promptly.','phak','ch. 17, carbon monoxide'),
  C('HF-005','human-factors','Why can flying with sinus or ear congestion cause severe pain or injury?','Blocked passages prevent pressure equalization as cabin pressure changes. Descent is often worse because trapped gas must compress. Avoid flying with significant congestion and do not rely on medication without aeromedical guidance.','phak','ch. 17, ear and sinus block'),
  C('HF-006','human-factors','What causes decompression sickness after altitude exposure?','Reduced pressure allows dissolved nitrogen to form bubbles in tissues and blood. Joint pain, skin symptoms, breathing difficulty, or neurologic changes require oxygen, descent, landing, and prompt medical evaluation.','phak','ch. 17, decompression sickness'),
  C('HF-007','human-factors','How does dehydration affect pilot performance?','It can produce fatigue, headache, dizziness, slowed thinking, and reduced tolerance to heat or altitude. Hydrate before and during flight while planning sensible breaks rather than avoiding fluids to reduce stops.','phak','ch. 17, dehydration'),
  C('HF-008','human-factors','Why is fatigue more than simply feeling sleepy?','Fatigue slows reaction, narrows attention, weakens memory and judgment, and increases fixation and errors. Caffeine or motivation may mask symptoms temporarily but does not restore the performance of adequate sleep.','phak','ch. 17, fatigue'),
  C('HF-009','human-factors','How can stress change cockpit performance?','Moderate arousal may focus attention, but excessive stress can narrow perception, rush decisions, impair working memory, and increase muscle tension. Reduce workload, use written procedures, communicate, and choose an early exit.','phak','ch. 17, stress'),
  C('HF-010','human-factors','Why is an over-the-counter medication not automatically safe for flight?','The illness, the drug, dosage, side effects, and interactions can all impair performance. Labels such as “non-drowsy” do not establish FAA acceptability; consult current FAA guidance and an aviation medical professional when uncertain.','phak','ch. 17, medication'),
  C('HF-011','human-factors','How can alcohol impair a pilot after blood alcohol has fallen?','A hangover can leave dehydration, fatigue, headache, slowed reaction, and poor judgment after measurable alcohol declines. Regulatory minimums do not establish fitness; allow a conservative interval and do not fly impaired.','phak','ch. 17, alcohol'),
  C('HF-012','human-factors','How do rods and cones divide visual work?','Cones provide sharp, color vision in the center of sight and work best in bright light. Rods are more sensitive in dim light and concentrated away from the center, but provide poorer detail and no color discrimination.','phak','ch. 17, vision'),
  C('HF-013','human-factors','What is empty-field myopia?','Without a distinct distant object, the eyes may focus at a relatively short resting distance, making distant traffic harder to detect. Use systematic scanning and deliberately refocus on actual objects at varying ranges.','phak','ch. 17, visual scanning'),
  C('HF-014','human-factors','What causes spatial disorientation?','The visual, vestibular, and proprioceptive systems can provide conflicting or misleading motion cues, especially without a visible horizon. Trust and cross-check the flight instruments rather than bodily sensation.','phak','ch. 17, spatial disorientation'),
  C('HF-015','human-factors','What are “the leans”?','A slow bank may go unnoticed; when the aircraft is corrected, the pilot can feel a bank in the opposite direction and lean toward the original turn. Maintain the instrument-indicated attitude until the false sensation fades.','phak','ch. 17, vestibular illusions'),
  C('HF-016','human-factors','What is the Coriolis illusion?','Moving the head during a prolonged turn stimulates multiple semicircular canals and can create a powerful tumbling sensation. Minimize abrupt head movement in instrument conditions and rely on the instruments.','phak','ch. 17, vestibular illusions'),
  C('HF-017','human-factors','What is a somatogravic illusion?','Rapid acceleration can feel like pitching up and may prompt a dangerous nose-down correction; deceleration can feel like pitching down. It is especially hazardous during dark-night or low-visibility takeoff and go-around.','phak','ch. 17, vestibular illusions'),
  C('HF-018','human-factors','What is flicker vertigo?','Light pulsing at certain frequencies—such as sunlight through a propeller—can cause disorientation, nausea, or rarely a seizure. Change RPM or heading, block the flashing source, and land if symptoms persist.','phak','ch. 17, flicker vertigo'),
  C('HF-019','human-factors','What helps manage motion sickness without compromising safety?','Use fresh air, look at a stable external reference when conditions permit, minimize unnecessary head movement, and transfer duties if needed. Evaluate any medication before flight because many common remedies are sedating.','phak','ch. 17, motion sickness'),
  C('HF-020','human-factors','How long should a pilot wait to fly after scuba diving?','For flight up to 8,000 feet MSL, FAA guidance recommends at least 12 hours after a dive not requiring controlled ascent and 24 hours after one that did. Wait at least 24 hours after any scuba dive before flying above 8,000 feet.','phak','ch. 17, decompression after scuba diving'),

  C('NAV-001','navigation','How are true course, magnetic course, and compass heading related?','Begin with the desired true course, correct for magnetic variation to obtain magnetic course, apply wind correction to obtain magnetic heading, and correct for compass deviation to obtain compass heading. Use a consistent sign convention.','phak','ch. 16, navigation computations'),
  C('NAV-002','navigation','What is magnetic variation?','The angular difference between true north and magnetic north at a location. Isogonic lines depict it on charts; apply current charted variation when converting between true and magnetic directions.','phak','ch. 16, magnetic variation'),
  C('NAV-003','navigation','What is compass deviation?','Error caused by magnetic fields within the aircraft. It varies with heading and equipment configuration and is corrected using the aircraft’s current compass-deviation card, not the sectional-chart variation.','phak','ch. 8, magnetic compass'),
  C('NAV-004','navigation','What does a wind-correction angle accomplish?','It points the airplane into the wind enough that the resulting ground track follows the desired course. Heading and course are equal only when wind produces no cross-track drift.','phak','ch. 16, wind correction'),
  C('NAV-005','navigation','How are groundspeed and time en route connected?','Time in hours equals distance divided by groundspeed. Recompute with actual checkpoint times and groundspeed; a small headwind error becomes a meaningful fuel error on a long leg.','phak','ch. 16, time-speed-distance'),
  C('NAV-006','navigation','What is the one-in-60 rule?','After traveling 60 NM, being 1 NM off course represents about 1° of track error. It provides a quick estimate of track error and the intercept angle needed to regain course.','phak','ch. 16, navigation estimates'),
  C('NAV-007','navigation','What is pilotage?','Navigation by reference to visible landmarks and their relationship to a chart. Choose distinctive, verifiable features and maintain awareness of terrain, airspace, and alternatives rather than following a single uncertain landmark.','phak','ch. 16, pilotage'),
  C('NAV-008','navigation','What is dead reckoning?','Navigation based on a known position advanced by heading, airspeed, time, and forecast wind. It remains useful when electronic or visual navigation is degraded, but must be updated with actual observations.','phak','ch. 16, dead reckoning'),
  C('NAV-009','navigation','What makes a useful visual checkpoint?','It is prominent, charted, unambiguous from the planned altitude, spaced often enough to verify progress, and away from hazards. Intersections of major linear features are generally easier to identify than isolated small objects.','phak','ch. 16, cross-country planning'),
  C('NAV-010','navigation','Why should a course line be examined beyond simply measuring heading and distance?','It reveals terrain, obstacles, airspace, airports, frequencies, checkpoints, special-use areas, chart gaps, and diversion choices. A direct line may be legal yet create poor options or unnecessary risk.','phak','ch. 16, cross-country planning'),
  C('NAV-011','navigation','How should a VFR cruising altitude be selected for a cross-country?','After satisfying § 91.119 and airspace constraints, consider terrain, obstacles, winds, clouds, visibility, glide options, aircraft performance, and the hemispheric rule when it applies. The highest practical altitude is not always best.','p91','§§ 91.119, 91.159'),
  C('NAV-012','navigation','What is the difference between course, heading, and track?','Course is the intended path over the ground, heading is where the nose points, and track is the path actually made over the ground. Wind can make all three different.','phak','ch. 16, navigation terms'),
  C('NAV-013','navigation','What compass errors occur during acceleration and turns?','In the Northern Hemisphere, acceleration on east or west headings indicates a turn toward north and deceleration toward south; turns from northerly headings lag, while turns from southerly headings lead. Latitude and bank affect the error.','phak','ch. 8, magnetic compass errors'),
  C('NAV-014','navigation','What safety service does a VFR flight plan provide?','It gives flight service a route, timing, and aircraft information for search-and-rescue response if the plan becomes overdue. ATC does not automatically open or close it; the pilot must do both.','aim','VFR flight plans'),
  C('NAV-015','navigation','Does VFR flight following replace a VFR flight plan?','No. Flight following provides workload-permitting radar traffic advisories and related assistance; a VFR flight plan supports search and rescue. Either service can be interrupted or unavailable, so maintain independent navigation and collision avoidance.','aim','Radar traffic information service'),
  C('NAV-016','navigation','What should be recalculated during a diversion?','Turn point, magnetic heading, distance, time, fuel, terrain and obstacle clearance, airspace, weather, runway suitability, and communications. Stabilize the airplane first and use a simple estimate before refining it.','acs','Private Pilot—Airplane ACS, diversion'),
  C('NAV-017','navigation','Why should electronic navigation be cross-checked against outside and raw information?','Wrong waypoint selection, stale data, GPS interference, sensor error, or mode confusion can present a precise-looking wrong answer. Compare route, distance, bearing, terrain, and chart position at every major change.','phak','ch. 16, electronic navigation'),
  C('NAV-018','navigation','What hazard can a GPS “direct-to” route introduce?','It may cross terrain, obstacles, restricted or special-use airspace, weather, or areas with poor landing options that an airway or planned route avoided. Validate the entire line before accepting it.','phak','ch. 16, GPS navigation'),
  C('NAV-019','navigation','Why should a pilot preserve a non-GPS navigation strategy?','Satellite interference, database problems, equipment failure, or power loss can remove GPS guidance. Maintain chart orientation, pilotage or dead-reckoning capability, usable frequencies, and enough fuel to change the plan.','aim','GPS interference and navigation resilience'),
  C('NAV-020','navigation','How should checkpoint updates change the remaining plan?','Use actual time, groundspeed, fuel burn, and weather to revise ETA, reserve, and diversion options. Do not keep an optimistic original estimate after repeated checkpoints show a consistent shortfall.','acs','Private Pilot—Airplane ACS, navigation systems and radar services'),

  C('COM-001','communications','What belongs in a clear initial radio call?','The facility name, full aircraft identification, position when relevant, altitude, request or intentions, and pertinent information such as the current ATIS code. Organize the call before transmitting and omit unnecessary words.','aim','AIM 4-2, radio communications'),
  C('COM-002','communications','Why should a pilot listen before transmitting?','The desired information may already be on the frequency, another exchange may be in progress, and transmitting over it can block both calls. Pause after changing frequency and build a mental picture before keying the microphone.','aim','AIM 4-2-2'),
  C('COM-003','communications','When may an aircraft call sign be abbreviated?','Only after the controlling facility first abbreviates it, and then use that same form. Return to the full call sign when changing facilities or whenever similar call signs could create confusion.','aim','Aircraft call signs'),
  C('COM-004','communications','What should a pilot do after hearing a clearance intended for a similar call sign?','Do not act on it. Use the full call sign, advise ATC of the similarity, and verify every instruction that could be ambiguous. Correct an erroneous readback or response immediately.','aim','Similar sounding call signs'),
  C('COM-005','communications','Which ATC items deserve a complete readback?','Runway assignments, runway entry or crossing, hold-short instructions, headings, altitudes, and other safety-critical restrictions. Include the aircraft call sign so the controller knows which aircraft accepted the instruction.','aim','Pilot acknowledgment and readback'),
  C('COM-006','communications','What does a hold-short instruction require?','Stop before the specified runway, taxiway, or point and remain there until an explicit clearance permits movement. Read the instruction back verbatim with the call sign; never infer permission from another clearance.','aim','Runway safety phraseology'),
  C('COM-007','communications','What does “line up and wait” authorize?','Enter the assigned runway and align for takeoff, but do not begin the takeoff roll. Maintain situational awareness, verify the runway, and ask ATC if waiting becomes unexpectedly long or conditions change.','aim','Runway operations phraseology'),
  C('COM-008','communications','Does a taxi clearance authorize crossing every runway along the route?','No. A specific clearance is required to cross each runway, and instructions to taxi to a runway do not authorize entering or crossing it. Stop and ask whenever the clearance or route is uncertain.','aim','Taxi and runway crossing procedures'),
  C('COM-009','communications','What is the proper response when an ATC instruction is unsafe or cannot be performed?','Say “unable,” briefly state the limiting reason when useful, and request an alternative. A prompt, clear response is safer than silence, delayed noncompliance, or accepting an instruction the aircraft or pilot cannot execute.','aim','Pilot responsibility upon clearance'),
  C('COM-010','communications','How do “roger” and “wilco” differ?','“Roger” means the last transmission was received; it does not mean yes or that an instruction will be followed. “Wilco” means the message was received, understood, and will be complied with. Neither replaces a required readback.','aim','Pilot/Controller Glossary'),
  C('COM-011','communications','What does ATC mean by “standby”?','The controller has received the call and will return when workload permits. It is not an approval or denial. Continue safely, monitor the frequency, and call again if urgency or elapsed time requires it.','aim','Pilot/Controller Glossary'),
  C('COM-012','communications','What should a pilot say when a transmission is not understood?','Request “say again,” specify the missed portion if known, or ask ATC to verify. Never fill a gap with an assumption; plain language is appropriate whenever standard phraseology does not produce understanding.','aim','Radio communication technique'),
  C('COM-013','communications','How should pilots use a CTAF at a non-towered airport?','Monitor early, make concise position and intention reports at recommended points, use the correct airport name, and listen for conflicts. Radio calls supplement—not replace—visual scanning and right-of-way responsibility.','aim','Traffic advisory practices'),
  C('COM-014','communications','Why should pilots avoid the call “any traffic in the area, please advise”?','It can create frequency congestion and does not replace standard self-announced position reports. State the aircraft’s location and intentions clearly, then listen and look for traffic.','aim','Self-announce position and intentions'),
  C('COM-015','communications','When should a pilot report “traffic in sight”?','Only after positively identifying the specific traffic ATC called. The report does not by itself authorize a course change or transfer collision-avoidance responsibility; follow the clearance and advise immediately if visual contact is lost.','aim','Traffic advisories'),
  C('COM-016','communications','How should an ATIS code be used on initial contact?','Report the current code so the controller knows the broadcast was received. Still listen for amended runway, weather, NOTAM, or instruction information because ATIS does not freeze airport conditions.','aim','Automatic Terminal Information Service'),
  C('COM-017','communications','When should “Mayday” or “Pan-Pan” be used?','Use Mayday for grave and imminent danger requiring immediate assistance; use Pan-Pan for an urgent condition concerning safety that is not immediately life-threatening. Plainly stating the problem and help needed is more important than perfect wording.','aim','Emergency communications'),
  C('COM-018','communications','What is the primary purpose of 121.5 MHz?','It is the international aeronautical emergency frequency, monitored by many ATC and aircraft stations. Use it for distress, urgency, or to reestablish contact when appropriate, while maintaining aircraft control.','aim','Emergency frequencies'),
  C('COM-019','communications','What do transponder codes 7500, 7600, and 7700 indicate?','7500 indicates unlawful interference, 7600 radio-communication failure, and 7700 a general emergency. Select the appropriate code when needed unless ATC has assigned another response, and avoid accidental selection.','aim','Transponder operation'),
  C('COM-020','communications','What should a VFR pilot do after losing two-way radio near a towered airport?','Troubleshoot both transmitter and receiver, use 7600 when appropriate, remain outside or above the surface area until traffic direction and flow are known, then watch for light signals and maintain visual contact with the tower and other traffic.','aim','AIM 4-2-13'),

  C('NGT-001','night','Which different time periods are commonly called “night” in the regulations?','The general definition of night is the interval from the end of evening civil twilight to the beginning of morning civil twilight. Position-light operation generally uses sunset to sunrise, while passenger landing currency uses 1 hour after sunset to 1 hour before sunrise.','p91','§§ 1.1, 61.57(b), 91.209'),
  C('NGT-002','night','How long can full dark adaptation take?','Approximately 30 minutes under favorable conditions. Even brief exposure to bright white light can substantially reduce adaptation, so protect night vision before and during flight.','afh','ch. 11, night vision'),
  C('NGT-003','night','Why is red cockpit lighting not ideal for every task?','Red light preserves rod adaptation but can make red markings disappear, distort colors, and reduce detail. Use the lowest practical lighting that permits accurate chart and instrument interpretation, with white light available when color matters.','afh','ch. 11, cockpit lighting'),
  C('NGT-004','night','How can altitude affect night vision before obvious hypoxia appears?','The retina is highly oxygen-sensitive, so night vision may degrade at relatively modest altitudes before other symptoms are recognized. Use conservative oxygen practices, avoid smoking and carbon monoxide, and increase margins.','phak','ch. 17, night vision and hypoxia'),
  C('NGT-005','night','What is the black-hole approach illusion?','Over dark, featureless terrain with few peripheral cues, a pilot may perceive the aircraft as too high and fly a dangerously low approach. Use a published glidepath or visual glide-slope indicator and disciplined altitude-distance checks.','afh','ch. 11, night illusions'),
  C('NGT-006','night','What is a false-horizon illusion?','Sloping clouds, scattered ground lights, or an obscured natural horizon can be mistaken for level. Cross-check the attitude instruments and do not align the aircraft with an uncertain visual reference.','afh','ch. 11, night illusions'),
  C('NGT-007','night','What is autokinesis?','A stationary light stared at against a dark background may appear to move. Shift the gaze, use peripheral references, and cross-check instruments and other lights before maneuvering in response.','phak','ch. 17, visual illusions'),
  C('NGT-008','night','How can runway width distort the perceived approach path?','A narrower-than-familiar runway can make the aircraft appear higher, encouraging a low approach; a wider runway can make it appear lower, encouraging a high approach. Trust the proper glidepath indications.','afh','ch. 11, runway illusions'),
  C('NGT-009','night','How can runway slope create an approach illusion?','An upsloping runway can create the impression of being too high and lead to a low approach; a downsloping runway can suggest being too low and lead to a high approach. Brief slope and use objective glidepath cues.','afh','ch. 11, runway illusions'),
  C('NGT-010','night','Why can haze be especially deceptive at night?','Lights may appear farther away or dimmer, while a sloping visibility layer can hide terrain and remove the horizon. Treat unclear visibility conservatively and verify position, altitude, and weather with instruments and reports.','afh','ch. 11, night visibility'),
  C('NGT-011','night','How should airport and approach-light brightness be used at night?','Select an intensity that provides useful cues without glare or loss of dark adaptation. Pilot-controlled lighting may require a specific number of microphone clicks; verify the frequency and activation window before arrival.','aim','Airport lighting'),
  C('NGT-012','night','What extra lighting equipment belongs in a night preflight kit?','At least one reliable flashlight within reach, preferably a backup and spare batteries, with a white-light capability for color and inspection. Test lighting without destroying night adaptation or creating loose-object hazards.','afh','ch. 11, night preflight'),
  C('NGT-013','night','Why should cockpit lighting be set before taxi?','Finding switches or correcting glare during takeoff increases workload and can destroy outside vision. Set instrument, map, and display brightness low enough for outside scanning while keeping every required indication readable.','afh','ch. 11, cockpit preparation'),
  C('NGT-014','night','Why can exterior lights be harmful in cloud, haze, or precipitation?','Landing lights, strobes, or beacons can reflect into the cockpit and create glare, vertigo, or obscured forward vision. Use the aircraft checklist and adjust nonrequired lighting when reflections interfere.','afh','ch. 11, exterior lighting'),
  C('NGT-015','night','How should a VFR night route differ from the shortest daytime route?','Favor higher terrain clearance, well-lighted landmarks, airports, populated corridors, reliable weather, and better forced-landing options. Avoid featureless or rising terrain that eliminates a visible horizon and escape choices.','afh','ch. 11, night cross-country planning'),
  C('NGT-016','night','Why should the departure path be briefed especially carefully at night?','The visual horizon and terrain may disappear immediately after liftoff. Verify runway, initial heading, safe altitude, obstacles, and instrument scan before takeoff, then transition deliberately to attitude instruments when outside cues are weak.','afh','ch. 11, night takeoff'),
  C('NGT-017','night','What should guide forced-landing site selection at night?','Maintain best glide and control, use known terrain, roads, airports, charts, moonlight, and available lights while recognizing that an illuminated area can contain wires or obstacles. Commit early enough to stabilize the approach.','afh','ch. 18, emergency approach and landing'),
  C('NGT-018','night','How should a pilot prepare for a landing-light failure?','Practice and brief a no-light landing with an instructor, know whether runway lighting and other aircraft lights are available, and avoid fixating on the failed light. Use normal attitude and glidepath cues and go around if the landing cannot be judged safely.','afh','ch. 11, night landings'),
  C('NGT-019','night','Why is a night takeoff over an unlighted area an instrument-like maneuver?','Acceleration and climb can remove nearly all external attitude cues, and somatogravic illusion may encourage a nose-low response. Establish the planned attitude, power, and airspeed by reference to the instruments.','afh','ch. 11, night takeoff'),
  C('NGT-020','night','What deserves special attention during a night go-around?','Apply power and control pitch with instruments, manage trim and configuration in sequence, remain oriented to runway and terrain, and avoid turning toward dark or rising terrain before reaching the briefed safe altitude.','afh','ch. 11, night go-around'),

  C('MTN-001','mountain','Why is specialized mountain-flight training strongly recommended?','Mountain operations combine terrain, wind, density altitude, navigation, and limited escape space in ways difficult to learn from reading alone. Train with an experienced mountain instructor in the aircraft and region you intend to fly.','mtn','Preparation and training'),
  C('MTN-002','mountain','What makes a conservative mountain route?','It follows terrain with multiple escape paths, suitable passes, adequate clearance, manageable winds, airports or landing areas, reliable weather information, and fuel for rerouting. The shortest straight line is rarely the best criterion.','mtn','Route selection'),
  C('MTN-003','mountain','Why should ridge-crossing altitude be reached well before the ridge?','Arriving level provides time to judge wind, groundspeed, turbulence, cloud clearance, and actual terrain margin without depending on a last-minute climb whose performance may be reduced by altitude or downdraft.','mtn','Ridge crossing'),
  C('MTN-004','mountain','How should a pilot identify the true low point of a mountain pass?','Use current charts, GPS terrain only as a supplement, and the shape of converging ridgelines. A nearer saddle can hide higher terrain behind it; confirm the route and maintain room to turn away.','mtn','Pass identification'),
  C('MTN-005','mountain','What is the key to avoiding entrapment in a narrowing canyon?','Maintain continuous awareness of turn radius and an exit toward lower terrain. Establish a personal turn-around point before the canyon becomes too narrow, steep, obscured, or downdraft-filled to reverse course.','mtn','Canyon operations'),
  C('MTN-006','mountain','How can groundspeed reveal mountain-wind risk?','An unexpectedly high groundspeed toward a ridge or up a valley can indicate a strong tailwind that will become a headwind after escape or reversal. Compare groundspeed in both directions before losing turning room.','mtn','Wind assessment'),
  C('MTN-007','mountain','Why should a pilot avoid flying directly over the center of a narrow valley?','The center can leave less lateral room for a turn. Positioning with a safe offset may preserve turning space toward the broader portion, but terrain, wind, traffic, and local procedures must determine the exact track.','mtn','Valley operations'),
  C('MTN-008','mountain','How does runway slope affect mountain-airport operations?','Upslope reduces takeoff acceleration and lengthens takeoff roll, but generally helps landing deceleration. Downslope does the reverse. Evaluate slope together with wind, obstacles, surface, density altitude, and aircraft performance.','mtn','Mountain airport operations'),
  C('MTN-009','mountain','Why can a mountain runway effectively be one-way?','Slope, terrain, obstacles, wind patterns, or lack of go-around space may make one direction the only practical arrival and the opposite direction the only departure. Brief commitment and abort points before operating.','mtn','Mountain airport operations'),
  C('MTN-010','mountain','Why is a go-around decision more restrictive at some mountain airports?','Rising terrain, downdrafts, runway slope, and limited maneuvering room may remove the normal escape path after a certain point. Determine the latest safe go-around or reject point before the approach.','mtn','Approach planning'),
  C('MTN-011','mountain','How should high density altitude change the loading decision?','Reduce weight enough to create a demonstrated takeoff and climb margin for the actual runway, slope, temperature, wind, and terrain. A calculation that merely clears the book requirement leaves little protection against variation.','mtn','Aircraft performance'),
  C('MTN-012','mountain','Why is indicated airspeed still the primary speed reference at high elevation?','Stall and handling relationships remain tied mainly to indicated airspeed, while true airspeed and groundspeed are higher for the same indication. The higher groundspeed enlarges turn radius and takeoff and landing distance over the ground.','phak','ch. 11, density altitude'),
  C('MTN-013','mountain','What does a cloud cap over a ridge imply operationally?','The pass or ridge may be obscured and strong upslope flow, turbulence, icing, or downdrafts may exist nearby. Do not enter a pass based on glimpses through cloud; retain a VFR escape route.','mtn','Mountain weather assessment'),
  C('MTN-014','mountain','Why should valley and pass weather be checked from more than one location?','Conditions can differ sharply across a ridge and change faster than a distant airport report suggests. Combine forecasts, nearby observations, cameras, PIREPs, winds aloft, and actual visual cues.','mtn','Weather planning'),
  C('MTN-015','mountain','How should limited radio and radar coverage affect a mountain flight?','Expect shadowing and dead zones, obtain services before entering them, know relay and emergency frequencies, file a flight plan or tracking arrangement, and carry independent navigation and survival resources.','mtn','Communications and flight following'),
  C('MTN-016','mountain','What should a mountain survival kit be matched to?','Terrain, season, temperature, occupants, remoteness, and expected rescue time. Include accessible signaling, shelter, warmth, water, first aid, and communication equipment—not gear buried where a damaged aircraft makes it unreachable.','mtn','Survival planning'),
  C('MTN-017','mountain','Why should fuel reserves be larger in mountainous terrain?','Headwinds, turbulence, pass closures, altitude changes, sparse airports, and long reroutes can consume fuel quickly. Preserve enough fuel to retreat or reach a genuinely usable alternate before entering a constrained route.','mtn','Fuel and alternate planning'),
  C('MTN-018','mountain','How can sun angle affect mountain navigation?','Low sun, shadow, glare, and rapidly changing contrast can hide ridges, wires, snow-covered terrain, and cloud boundaries. Plan direction and timing, use sunglasses appropriately, and avoid continuing when terrain definition is lost.','mtn','Visibility and terrain recognition'),
  C('MTN-019','mountain','Why is turning radius critical in mountain operations?','Radius grows with the square of true airspeed for a given bank, and true airspeed is higher at altitude for the same indicated speed. Slow only within safe margins, avoid steep low-altitude turns, and preserve space before entering a canyon.','phak','chs. 5 and 11, turn performance'),
  C('MTN-020','mountain','What is the most important commitment rule for a mountain pass or canyon?','Never continue beyond the point where a safe turn toward lower terrain is no longer assured unless the route ahead is positively identified, open, and within conservative aircraft and weather margins. Turn around early, not at the last opening.','mtn','Escape planning'),

  C('P121-001','part-121','What kinds of operations does Part 121 govern?','U.S. air-carrier domestic, flag, and supplemental operations within its applicability rules. It adds carrier-specific requirements beyond ordinary Part 91 flying.','p121','§ 121.1'),
  C('P121-002','part-121','What do an airline’s operations specifications authorize?','They define the carrier’s approved operations and associated conditions, such as aircraft, airports, approaches, and special authorizations. A pilot cannot assume another carrier’s approvals apply.','p119','§ 119.49'),
  C('P121-003','part-121','Why must airline pilots use their own carrier’s operating manuals?','The carrier must maintain manuals covering its operations and personnel duties. Use the current manual and aircraft procedures for that operator, not another airline’s practices.','p121','§§ 121.133–121.137'),
  C('P121-004','part-121','In domestic operations, who shares responsibility for dispatch release?','The PIC and aircraft dispatcher jointly handle preflight planning, delay, and dispatch release. The certificate holder remains responsible for operational control.','p121','§ 121.533'),
  C('P121-005','part-121','What does an airline dispatcher do after a domestic flight departs?','Monitor its progress, provide safety information, and cancel or redispatch it if the dispatcher or PIC believes it cannot safely continue as released.','p121','§ 121.533(c)'),
  C('P121-006','part-121','How does operational control differ in supplemental operations?','The PIC and director of operations share responsibility for initiating, continuing, diverting, and terminating flights. The director may delegate functions, but not responsibility.','p121','§ 121.537'),
  C('P121-007','part-121','What emergency authority does a domestic or flag airline captain have?','When immediate action is required, the PIC may take necessary action and deviate from prescribed procedures, methods, weather minima, or rules as needed for safety. Follow notification and reporting requirements.','p121','§ 121.557'),
  C('P121-008','part-121','Can a large Part 121 airplane operate with just one pilot?','No. Its minimum pilot crew is two, including a PIC and SIC; the approved airplane and operation may require additional crewmembers.','p121','§ 121.385'),
  C('P121-009','part-121','What certificates must a Part 121 first officer normally hold?','An ATP certificate and the appropriate aircraft type rating. A restricted-privileges ATP can qualify for eligible SIC service; a § 61.55 SIC-only type rating is insufficient.','p121','§ 121.436(b); § 61.167'),
  C('P121-010','part-121','What extra experience is normally required to become a Part 121 captain?','An unrestricted ATP, the appropriate type rating, and 1,000 hours in the qualifying experience categories in § 121.436. Specific military credits and grandfather provisions exist.','p121','§ 121.436(a), (c)–(e)'),
  C('P121-011','part-121','What is operating experience after airline training?','Supervised operational experience in the assigned airplane and duty position, with required cycles and consolidation as applicable. Passing a simulator check alone does not complete every line qualification.','p121','§ 121.434'),
  C('P121-012','part-121','What recent takeoffs and landings does § 121.439 require?','Normally three takeoffs and landings within the preceding 90 days in the airplane type. An approved Level B or higher full flight simulator may be used; authorized deviations may apply.','p121','§ 121.439'),
  C('P121-013','part-121','Is regaining airline landing recency simply three unsupervised landings?','No. After recency lapses, § 121.439 requires check-pilot supervision and specified maneuvers, including a simulated critical-engine failure takeoff, an ILS landing, and a full-stop landing.','p121','§ 121.439(b)'),
  C('P121-014','part-121','How often is a captain’s line check normally required under § 121.440?','Within the preceding 12 calendar months. It evaluates PIC duties on a representative operational flight; an approved alternative qualification program may use its authorized checking structure.','p121','§ 121.440; Subpart Y'),
  C('P121-015','part-121','How does an airline proficiency check differ from a line check?','A proficiency check evaluates required maneuvers and procedures, often in a simulator. A line check evaluates operational PIC performance. Their requirements are separate.','p121','§§ 121.440–121.441'),
  C('P121-016','part-121','What is an Advanced Qualification Program, or AQP?','An FAA-approved alternative training and qualification system using proficiency-based curricula, crew performance, and data analysis. It is not permission to skip qualification requirements.','p121','Subpart Y'),
  C('P121-017','part-121','Which phases trigger the airline sterile-flight-deck rule?','Taxi, takeoff, landing, and other operations below 10,000 feet except cruise flight. During these phases, restrict duties and conversation to safe operation.','p121','§ 121.542'),
  C('P121-018','part-121','Does sterile flight deck prevent cabin crew from reporting a safety problem?','No. Safety-related communication is appropriate. The restriction targets nonessential duties and distracting activity, not urgent cabin or aircraft information.','p121','§ 121.542'),
  C('P121-019','part-121','What monitoring duty does Part 121 assign the non-flying pilot?','A pilot seated at the controls who is not flying must perform pilot-monitoring duties under the carrier’s manual. That pilot is an active safety barrier, not an observer.','p121','§ 121.544'),
  C('P121-020','part-121','Who signs a domestic or flag dispatch release?','The PIC and authorized aircraft dispatcher, after each determines the flight can be made safely. Electronic or delegated signing arrangements must follow the rule and approved procedures.','p121','§ 121.663'),
  C('P121-021','part-121','What basic information belongs in an airline dispatch release?','Aircraft and trip identification, departure/intermediate/destination/alternate airports, operation type, minimum fuel, and applicable ETOPS diversion time. Required latest weather accompanies the release.','p121','§ 121.687'),
  C('P121-022','part-121','What does an airline load manifest document?','Aircraft loading and weight information, including load distribution and evidence that applicable weight and CG limits are met. Use the carrier’s approved loading system and required entries.','p121','§ 121.693'),
  C('P121-023','part-121','What weather is required to dispatch IFR toward an airline destination?','Appropriate reports or forecasts must indicate conditions at or above authorized minima at ETA, unless an applicable regulatory exception or authorization applies.','p121','§ 121.613'),
  C('P121-024','part-121','When can a domestic airline flight normally omit a destination alternate?','When the applicable reports/forecasts show at least a 2,000-foot ceiling above the airport and 3-mile visibility from one hour before through one hour after ETA, under § 121.619.','p121','§ 121.619'),
  C('P121-025','part-121','What if both the domestic destination and first alternate have marginal forecasts?','Designate at least one additional alternate. Apply the carrier’s interpretation and procedures for marginal conditions; § 121.619 does not provide one universal numerical definition.','p121','§ 121.619(a)'),
  C('P121-026','part-121','Do standard Part 91 alternate minima automatically apply to an airline?','No. Use the alternate minima in the carrier’s operations specifications and applicable Part 121 rules. ETOPS alternate requirements also need separate consideration.','p121','§ 121.625'),
  C('P121-027','part-121','When does an airline need a takeoff alternate?','When departure weather is below the carrier’s landing minima for that airport. List a qualifying takeoff alternate in the dispatch or flight release.','p121','§ 121.617'),
  C('P121-028','part-121','How close must a twin-engine airplane’s takeoff alternate be?','Within one hour at normal cruising speed in still air with one engine inoperative. Its weather must meet the carrier’s operations specifications.','p121','§ 121.617(a)(1)'),
  C('P121-029','part-121','Can an en-route airline alternate be changed?','Yes, if the replacement meets applicable authorization, weather, fuel-range, and other release requirements. Coordinate through the carrier’s operational-control system and record the amendment.','p121','§ 121.631'),
  C('P121-030','part-121','What is the usual domestic airline transport-jet fuel minimum?','Fuel to the destination, then the most distant required alternate, then 45 minutes at normal cruising fuel consumption. Account for required planning factors and approved authorizations.','p121','§ 121.639'),
  C('P121-031','part-121','Why is the domestic fuel rule not a universal international jet-fuel formula?','Flag and supplemental operations can use different rules. Section 121.645 includes destination fuel, a 10-percent-time allowance, alternate fuel, and a specified holding reserve for covered flights, unless otherwise authorized.','p121','§ 121.645'),
  C('P121-032','part-121','What factors must airline fuel calculations consider beyond route distance?','Forecast wind and weather, anticipated traffic delays, an approach and possible missed approach, and other conditions that may delay landing or increase fuel use.','p121','§ 121.647'),
  C('P121-033','part-121','What is the normal Part 121 approach-weather gate at a U.S. airport?','Unless an applicable exception applies, do not pass the FAF—or start final when no FAF exists—without an approved-source report showing at least the required visibility.','p121','§ 121.651(b)'),
  C('P121-034','part-121','What if visibility falls below minima after an airline legally starts final approach?','The approach may continue to DA/DH or MDA under § 121.651(c). Descending below minima and landing still require the applicable visibility, visual references, and landing-position conditions.','p121','§ 121.651(c)'),
  C('P121-035','part-121','Does an ATC takeoff clearance waive airline takeoff-weather minima?','No. Reported conditions must meet the carrier’s authorized takeoff minima, or the applicable Part 91/97 minima if its operations specifications do not specify them.','p121','§ 121.651(a)'),
  C('P121-036','part-121','What does the airline term high-minimums captain mean?','A PIC with insufficient qualifying PIC time in type may have increased landing minima under § 121.652. Apply its adjustments, limits, and credits using carrier procedures.','p121','§ 121.652'),
  C('P121-037','part-121','What is ETOPS approval intended to address?','Operations beyond specified diversion-time thresholds need appropriate airplane and operator approval, including route, maintenance, alternate, and fuel provisions. It is broader than an engine-reliability label.','p121','§ 121.161; Appendix P'),
  C('P121-038','part-121','What must ETOPS alternate planning cover?','Enough suitable listed alternates to stay within authorized diversion time, with required weather over the possible-use window and field conditions allowing a safe landing.','p121','§ 121.624'),
  C('P121-039','part-121','What is drift-down planning in a transport jet?','Planning the one-engine-inoperative descent or level-off path against terrain and obstacles using approved net performance data. Cruise altitude alone does not prove engine-out route clearance.','p121','§ 121.191'),
  C('P121-040','part-121','Why can takeoff weight be limited below the jet’s structural maximum?','Runway accelerate-stop/takeoff distances, obstacle clearance, climb performance, temperature, elevation, wind, and configuration can impose a lower performance-limited weight.','p121','§ 121.189'),
  C('P121-041','part-121','What is the basic 60-percent dispatch landing rule for turbine airplanes?','Under the usual § 121.195(b) conditions, the AFM landing distance from the specified 50-foot point must fit within 60 percent of effective runway length. Exceptions and additional rules apply.','p121','§ 121.195(b)'),
  C('P121-042','part-121','What does the usual 115-percent wet-runway dispatch provision mean for turbojets?','Unless approved shorter data apply, required wet/slippery-runway length is at least 115 percent of the dry dispatch requirement. It is not simply 15 percent added to an unfactored landing roll.','p121','§ 121.195(d)'),
  C('P121-043','part-121','Is dispatch landing-distance compliance enough for an airline arrival?','No. Reassess actual arrival conditions and landing performance under the carrier’s approved procedures. Weather, runway condition, aircraft status, and approach execution can change after dispatch.','landing','AC 91-79B, landing performance assessment'),
  C('P121-044','part-121','What authorizes airline takeoff with an inoperative installed item?','An approved MEL, operations-specification authority, available discrepancy information, and compliance with all applicable MEL conditions and limitations. A placard alone is insufficient.','p121','§ 121.628'),
  C('P121-045','part-121','Does MEL dispatch relief automatically tell pilots how to handle an in-flight failure?','No. For an en-route failure, use approved abnormal/emergency procedures and § 121.627. Do not treat a dispatch allowance as an airborne checklist.','p121','§§ 121.627–121.628'),
  C('P121-046','part-121','What must happen before an airline aircraft returns to operation after maintenance?','A required airworthiness or maintenance-log release must be prepared under the carrier’s approved system, with the required certification by an authorized person.','p121','§ 121.709'),
  C('P121-047','part-121','What mechanical problems must an airline captain record?','Mechanical irregularities occurring during flight must be entered in the maintenance log at the end of the flight. Before the next flight, review the status of preceding irregularities.','p121','§ 121.563'),
  C('P121-048','part-121','Does ground anti-icing fluid guarantee a clean airplane until takeoff?','No. Holdover time is an estimate, not a guarantee. Changing precipitation and fluid effectiveness require reassessment and the carrier’s prescribed checks or retreatment.','p121','§ 121.629'),
  C('P121-049','part-121','When does an airline holdover time begin?','When the final application of deicing/anti-icing fluid begins. Use the approved program’s tables, weather criteria, and inspection procedures; do not start the clock after spraying ends.','p121','§ 121.629(c)(3)'),
  C('P121-050','part-121','May an airline depart with snow or ice on critical surfaces?','Generally no. Follow the clean-aircraft rule and approved ground program; only specifically authorized exceptions, such as certain underwing frost, can apply.','p121','§ 121.629'),
  C('P121-051','part-121','Does Part 117 apply automatically to every all-cargo airline flight?','No. It applies to covered Part 121 passenger operations and associated flights. All-cargo operators may elect Part 117 as allowed; otherwise applicable Part 121 flight/rest rules govern.','p117','§ 117.1'),
  C('P121-052','part-121','Can a Part 117 pilot accept a legal schedule while too fatigued to fly safely?','No. Report rested and fit, affirm fitness before flight, and report unsafe fatigue. The carrier may not assign or continue duties contrary to the fitness rule.','p117','§ 117.5'),
  C('P121-053','part-121','What is the basic Part 117 pre-duty rest requirement?','At least 10 consecutive hours immediately before reserve or a flight duty period, providing at least 8 uninterrupted hours of sleep opportunity. Notify the carrier if that opportunity is unavailable.','p117','§ 117.25(e)–(f)'),
  C('P121-054','part-121','What recurring time free from duty does Part 117 require?','Before reserve or a flight duty period, normally at least 30 consecutive hours free from all duty within the previous 168 consecutive hours. Other rest provisions may also apply.','p117','§ 117.25(b)'),
  C('P121-055','part-121','Why is an airline pilot’s flight-duty-period limit not one fixed daily number?','It depends on the applicable rule/table, report time, number of segments, acclimation, crew augmentation, and rest facilities. Flight time and flight duty period are different limits.','p117','§§ 117.3, 117.11–117.17'),
  C('P121-056','part-121','What should the pilot flying and pilot monitoring agree before a departure?','Who controls the airplane, handles radios and checklists, monitors flightpath and modes, and calls deviations; include reject and engine-failure duties.','sop','Crew task allocation'),
  C('P121-057','part-121','Why do airline crews call out flight-mode-annunciator changes?','To confirm what the automation actually commands and detect unintended modes before the flightpath diverges. A selected button does not prove engagement.','sop','Automation management and monitoring'),
  C('P121-058','part-121','Why should both pilots verify a critical FMS route change?','A wrong runway, waypoint, or constraint can produce a precisely flown error. Cross-check the change against the clearance and chart before execution.','sop','Flightpath management'),
  C('P121-059','part-121','What should happen when a transport-jet approach misses the carrier’s stabilization criteria?','Use the published callouts and go-around policy. Stabilization gates and tolerances come from the carrier’s procedures; they are not one universal Part 121 number.','sop','Stabilized approaches'),
  C('P121-060','part-121','What is bypass ratio in a turbofan?','The mass airflow around the engine core divided by the airflow through the core.','nasa','Turbofan airflow'),
  C('P121-061','part-121','Why are high-bypass turbofans common on airliners?','They efficiently produce thrust by accelerating a large mass of air through a smaller velocity change.','nasa','Propulsive efficiency'),
  C('P121-062','part-121','What do N1 and N2 normally indicate on a two-spool turbofan?','N1 is low-pressure spool speed, usually including the fan; N2 is high-pressure spool speed. Both are typically displayed as percentages.','phak','ch. 7, turbine-engine instruments'),
  C('P121-063','part-121','What does engine pressure ratio, or EPR, indicate?','A ratio of specified engine exhaust pressure to inlet pressure, used as a thrust-setting parameter on some engines.','phak','ch. 7, EPR'),
  C('P121-064','part-121','What is a hot start in a turbine engine?','A start in which gas temperature exceeds its limit. Monitor temperature and follow the type-specific start-abort procedure.','phak','ch. 7, hot starts'),
  C('P121-065','part-121','What is a hung start?','After light-off, the engine fails to accelerate to normal idle. Follow the aircraft procedure rather than extending starter operation indefinitely.','phak','ch. 7, hung starts'),
  C('P121-066','part-121','How can a compressor stall or surge appear to an airline crew?','Bangs, vibration, temperature rise, and unstable or reduced engine indications. Maintain control and use the aircraft’s recognition and response procedures.','engmalf','Compressor stall/surge'),
  C('P121-067','part-121','Why does an idle jet engine need time to produce go-around thrust?','Its rotating assemblies must accelerate. Anticipate spool-up and use the approved thrust and approach procedures.','jet','ch. 16, engine response'),
  C('P121-068','part-121','What is bleed air on a conventional airliner?','Compressed air extracted from an engine compressor, often used for pneumatic systems, pressurization, and anti-ice. Some designs use different architectures.','phak','ch. 7, turbine and pressurization systems'),
  C('P121-069','part-121','What does a FADEC normally manage?','Electronic engine fuel scheduling and other engine-control functions. Its protections, power supplies, and pilot responsibilities depend on the installation.','phak','ch. 7, full-authority digital engine control'),
  C('P121-070','part-121','Why use wing sweep on a subsonic airliner?','It delays compressibility effects at high flight speeds, improving high-speed capability at the cost of low-speed and handling tradeoffs.','aero','ch. 5, swept wings'),
  C('P121-071','part-121','What is critical Mach number?','The lowest aircraft Mach number at which airflow somewhere on the airplane first reaches the speed of sound.','aero','ch. 5, compressibility'),
  C('P121-072','part-121','What causes Mach tuck?','Compressibility can shift the wing’s center of pressure aft and create a nose-down pitching tendency. Stay within the airplane’s limits.','aero','ch. 5, Mach tuck'),
  C('P121-073','part-121','How do VMO and MMO differ on a jet?','VMO is the maximum operating airspeed; MMO is the maximum operating Mach number. Observe whichever limit is reached first.','aero','ch. 5, high-speed flight'),
  C('P121-074','part-121','What is the narrow high-altitude buffet margin sometimes called coffin corner?','The reduced gap between low-speed and high-speed buffet boundaries. Weight, load factor, and turbulence can further reduce that margin.','aero','ch. 5, buffet boundaries'),
  C('P121-075','part-121','Why can banking at high altitude quickly consume a jet’s buffet margin?','The increased lift demand raises load factor and moves operation closer to buffet boundaries. Respect the approved maneuver margins.','aero','ch. 5, high-altitude maneuvering'),
  C('P121-076','part-121','What is Dutch roll?','A coupled yawing and rolling oscillation, often prominent in swept-wing airplanes. Damping depends on the design and operating conditions.','aero','ch. 5, dynamic stability'),
  C('P121-077','part-121','What does a yaw damper do on many transport jets?','Automatically applies rudder corrections to damp yaw oscillations. It does not remove the need for correct pilot technique or system-limit compliance.','aero','ch. 5, directional stability'),
  C('P121-078','part-121','What does V1 mean for an airline rejected takeoff?','It is the maximum speed for initiating the first stopping action within accelerate-stop performance, and also relates to engine-failure continuation capability. Decide before reaching it.','p1','§ 1.2, V1 definition'),
  C('P121-079','part-121','What does VR tell an airline crew?','The scheduled rotation speed. Rotate using the approved technique; VR is not the same as liftoff speed.','p1','§ 1.2, VR'),
  C('P121-080','part-121','What is V2 used for in transport-airplane takeoff planning?','It is takeoff safety speed, associated with required engine-out takeoff performance. Follow the AFM’s prescribed target speeds and procedures.','p1','§ 1.2, V2; Part 25 takeoff performance'),
  C('P121-081','part-121','What is a balanced field in takeoff performance?','A condition where accelerate-stop distance and the applicable engine-out accelerate-go distance are equal. Not every takeoff uses a balanced solution.','jet','ch. 16, takeoff performance'),
  C('P121-082','part-121','Why is a high-speed rejected takeoff especially demanding in a jet?','Brakes must absorb large kinetic energy, which rises with speed squared. Use the operator’s reject policy and approved stopping technique.','jet','ch. 16, rejected takeoff'),
  C('P121-083','part-121','Why is a reduced-thrust takeoff not simply using any lower thrust setting?','It must use an approved method and performance calculation within applicable conditions and limits. Assumed-temperature and fixed-derate methods are not interchangeable.','takeoff','AC 25-13, reduced thrust'),
  C('P121-084','part-121','What is maximum brake-energy speed intended to protect against?','A rejected takeoff can exceed brake energy capability even when runway length is adequate. Use the applicable certified performance limits.','p25','§§ 25.109, 25.735'),
  C('P121-085','part-121','Why must airlines check runway condition when calculating takeoff speeds?','Water or contamination can change acceleration, stopping capability, and allowable weight or V1. Use approved data for the actual condition.','p121','§ 121.189'),
  C('P121-086','part-121','What is an engine-out acceleration altitude used for?','It defines where the approved engine-out profile transitions toward acceleration and flap retraction while maintaining required obstacle clearance.','p25','§§ 25.111, 25.115; approved AFM profile'),
  C('P121-087','part-121','Why does an engine-out escape route sometimes differ from the SID?','The SID may assume normal performance. The operator’s engine-out path must satisfy the airplane’s reduced climb and obstacle requirements.','p121','§ 121.189; operator engine-out analysis'),
  C('P121-088','part-121','What is maximum zero-fuel weight on an airliner?','The maximum permitted weight excluding usable fuel. It protects structural loading limits and is separate from maximum takeoff weight.','phakwb','ch. 10, aircraft weight limits'),
  C('P121-089','part-121','What is a step climb during airline cruise?','A climb to a higher cruise level as weight decreases and conditions permit. Check performance, buffet margin, ATC clearance, and operational constraints.','jet','ch. 16, high-altitude cruise'),
  C('P121-090','part-121','What is cost index in an airline FMS?','A parameter balancing time-related operating cost against fuel cost to generate an economic speed schedule. It does not override limits or ATC instructions.','airbusci','Cost-index principles'),
  C('P121-091','part-121','What does an airliner’s outflow valve normally control?','Cabin pressure by regulating air leaving the fuselage. Opening it generally raises cabin altitude if inflow remains unchanged.','press','Pressurization control'),
  C('P121-092','part-121','How do cabin altitude and pressure differential differ?','Cabin altitude describes cabin pressure as an equivalent atmospheric altitude. Differential is cabin pressure minus outside pressure.','phak','ch. 7, pressurization indications'),
  C('P121-093','part-121','Why must depressurization fuel planning consider a lower diversion altitude?','After descent, fuel consumption and groundspeed may change substantially. ETOPS fuel planning includes applicable decompression and engine-failure scenarios.','p121','§ 121.646'),
  C('P121-094','part-121','What does an auxiliary power unit provide on many airliners?','Electrical power and often pneumatic air for ground operation and starting. In-flight availability and limits depend on the installation.','amt','Aircraft gas-turbine engines, APUs'),
  C('P121-095','part-121','What is a ram air turbine used for on equipped jets?','It uses airflow to supply emergency hydraulic and/or electrical power. Its output and deployment conditions are aircraft-specific.','airbusr','Emergency power generation'),
  C('P121-096','part-121','Why do transport jets use multiple hydraulic systems?','To preserve essential functions after failures. Shared components and fluid loss can still create common vulnerabilities; follow system-specific procedures.','phak','ch. 7, hydraulic systems'),
  C('P121-097','part-121','What is a configuration deviation list, or CDL?','Approved provisions for operation with specified external parts missing, often with performance penalties. It is different from MEL relief for inoperative equipment.','cdl','AC 120-125, MEL/CDL distinction'),
  C('P121-098','part-121','What do ground spoilers contribute after touchdown?','They reduce wing lift, put more weight on the wheels, and improve braking effectiveness. Deployment logic and checking are type-specific.','jet','ch. 16, landing'),
  C('P121-099','part-121','What is the purpose of transport-airplane antiskid braking?','To modulate brake pressure and prevent excessive wheel slip. It cannot restore dry-runway friction or eliminate hydroplaning risk.','p25','§ 25.735, braking systems'),
  C('P121-100','part-121','Why must an airline crew consider brake cooling after a rejected takeoff?','Brake heat can remain hazardous after stopping. Use approved cooling, inspection, and emergency guidance before another takeoff or ground handling.','p25','§ 25.735; AFM brake-energy procedures'),

  R('P121-101','121.391','What is the basic flight-attendant minimum for a 180-passenger-seat airliner?','Four: two for the first 100 seats, plus one for each additional 50 seats or fraction. An evacuation demonstration or the operations specifications may require more.'),
  R('P121-102','121.391','Does a lightly booked airline flight automatically need fewer flight attendants?','No. The basic requirement uses the airplane’s passenger seating capacity, not the number of tickets sold. Apply the approved configuration and operations specifications.'),
  R('P121-103','121.391','How can an evacuation demonstration increase an airline’s required cabin crew?','If the carrier demonstrates evacuation with extra flight attendants, the rule carries that additional staffing into the applicable seating configurations. Use the minimum stated in its operations specifications.'),
  R('P121-104','121.391','Where should required flight attendants be positioned for takeoff and landing?','As near as practicable to required floor-level exits and distributed to assist evacuation effectively. During taxi, remain secured at duty stations except for safety duties.'),
  R('P121-105','121.393','Can all cabin crew leave during a stop while airline passengers remain aboard?','No. Reduced staffing has conditions: engines shut down, a floor-level exit open, and at least half the normally required flight attendants, rounded down but never below one. Authorized qualified substitutes may be used.'),
  R('P121-106','121.397','Why must airline emergency duties account for an incapacitated crewmember?','The carrier must assign realistic emergency and evacuation functions for each airplane type and model, including foreseeable crew incapacitation. Those assignments belong in its manual.'),
  R('P121-107','121.417','How often must airline crewmembers perform the recurring emergency drills in § 121.417(c)(2)?','During initial training and once each 24 calendar months during recurrent training. Required drills include exit operation, extinguishers, oxygen equipment, and applicable flotation and ditching tasks.'),
  R('P121-108','121.573','When must an airline complete the extended-overwater passenger briefing?','Before takeoff if the flight goes directly over water; otherwise before reaching the overwater portion. Include flotation equipment and a demonstration of donning and inflating a life preserver.'),
  R('P121-109','121.571','What extra briefing does a passenger who needs evacuation assistance receive?','An individual briefing on suitable exits, when to move, and how to assist without pain or further injury. A specified same-aircraft continuing-leg exception can apply when the crew has the necessary information.'),
  R('P121-110','121.589','What baggage check is required before closing all passenger doors for pushback or taxi?','At least one required crewmember must verify that each article of baggage is properly stowed. Cabin baggage must comply with the carrier’s approved program.'),
  R('P121-111','121.589','Why does approved under-seat baggage stowage require restraint?','The seat must prevent baggage from sliding forward; an aisle seat also needs protection against baggage sliding into the aisle under the specified crash forces.'),
  R('P121-112','121.585','Is being at least 15 years old enough to qualify for an airline exit seat?','No. The occupant must also meet the applicable physical, comprehension, communication, and other suitability criteria and be able to perform the exit-assistance functions.'),
  R('P121-113','121.585','What if an exit-seat passenger does not want to perform emergency exit duties?','The passenger should identify that preference to the crew so the carrier can reseat them. Willingness matters even when the passenger otherwise meets the selection criteria.'),
  R('P121-114','121.577','What must happen to airline tray tables and service carts before taxi?','Tray tables and serving carts must be secured in their stowed positions. The rule also prohibits carrier-furnished food, beverages, and tableware at passenger seats during surface movement, takeoff, and landing.'),
  R('P121-115','121.575','May an airline passenger drink alcohol they brought aboard?','Only if the operating carrier serves that beverage to the passenger. Carrying a beverage aboard does not authorize self-service drinking.'),
  R('P121-116','121.575','May an airline board someone who appears intoxicated?','No. The carrier may not allow that person to board, and may not serve alcohol to someone aboard who appears intoxicated.'),
  R('P121-117','121.306','Who determines whether a non-exempt passenger electronic device may be used on an airline flight?','The operating Part 119 certificate holder must determine that the device will not interfere with the aircraft’s navigation or communication systems. Follow that carrier’s device policy.'),
  R('P121-118','121.547','Does a captain’s invitation alone authorize any visitor to occupy the airline flight deck?','No. Admission must fit the rule’s eligible categories and required permissions, plus applicable security procedures. The captain’s permission alone is not blanket authorization.'),
  R('P121-119','121.587','What is the general rule for an airline’s lockable flight-deck door while carrying passengers?','Keep it closed and locked during operation. Authorized access and egress must follow the operator’s FAA-approved opening, closing, and locking procedures.'),
  R('P121-120','121.543','When may a required airline flight crewmember leave the assigned duty station?','For aircraft operating duties, physiological needs, or a rest period with the required qualified relief. Otherwise remain at the station with the seat belt fastened.'),

  R('P121-121','121.333','What makes an airline flightcrew oxygen mask quick-donning under § 121.333?','It can be fitted, secured, sealed, and supplying demand oxygen with one hand within five seconds. It must also accommodate glasses and permit immediate crew communication.'),
  R('P121-122','121.333','On a typical large Part 121 airliner above FL410, is quick-donning oxygen equipment alone enough?','No. At least one pilot at the controls must wear and use the oxygen mask. The quick-donning exception for that airplane category only extends through FL410.'),
  R('P121-123','121.333','Who must preflight each flight crewmember’s oxygen equipment before takeoff?','Each flight crewmember personally checks their own equipment for function, fit, connection, and adequate supply and pressure.'),
  R('P121-124','121.337','What breathing-gas duration does airline protective breathing equipment have to provide?','Fifteen minutes at a pressure altitude of 8,000 feet for flight-deck duty and for crewmembers fighting an in-flight fire. This is a certification requirement, not permission to delay landing.'),
  R('P121-125','121.337','What must airline smoke-protection equipment allow besides breathing?','It must preserve usable vision, accommodate corrective glasses, and permit the required radio and interphone communications. Oxygen supply alone does not meet all PBE requirements.'),
  R('P121-126','121.803','Which airline passenger airplanes need an emergency medical kit as well as first-aid kits?','Those for which a flight attendant is required must carry an approved emergency medical kit. Approved first-aid kits are required on passenger-carrying airplanes under this section.'),
  R('P121-127','121.803','When does § 121.803 require an automated external defibrillator aboard?','On passenger-carrying airplanes that require a flight attendant and have a maximum payload capacity above 7,500 pounds. Use the carrier’s training and medical-event procedures.'),
  R('P121-128','121.805','How often must airline flight attendants receive recurring AED and CPR performance drills?','At least once every 24 months. Training also covers medical-event coordination and the location and intended operation of emergency medical equipment.'),
  R('P121-129','121.339','Why might enough life-raft rated seats for everyone still be insufficient for extended-overwater dispatch?','The raft arrangement must also accommodate loss of a largest-capacity raft, using the permitted excess capacity or additional rafts. Apply the rule and any authorized deviation.'),
  R('P121-130','121.359','When must the CVR run on a large turbine-powered Part 121 airplane?','Continuously from the start of the pre-engine-start checklist for flight through completion of the final checklist at flight termination. Follow the carrier’s approved recorder procedures.'),

  R('P121-131','121.593','When can a domestic flight continue from an intermediate airport without fresh dispatch authority?','Only under the stated exception: the airport was in the original release and the airplane remains there no more than one hour. Otherwise the dispatcher must specifically authorize the flight.'),
  R('P121-132','121.595','What intermediate-stop delay requires redispatch in flag operations?','More than six hours on the ground at an intermediate airport. A dispatcher must specifically authorize the flight under the applicable dispatch rules.'),
  R('P121-133','121.597','What intermediate-stop delay requires a new supplemental flight release?','More than six hours on the ground. Supplemental operations use their authorized operational-control and flight-release system.'),
  R('P121-134','121.663','Can a dispatcher delegate the authority to dispatch by letting someone else sign the release?','No. The dispatcher may delegate signing authority for a particular release, but may not delegate the authority to dispatch.'),
  R('P121-135','121.601','What airport and navigation-facility information must the dispatcher supply before a domestic or flag flight?','All available current reports or information about airport conditions and navigation-facility irregularities that may affect safety. A weather package alone is not the entire dispatch briefing.'),
  R('P121-136','121.565','After an engine failure in a twin-engine airliner, how is the diversion airport selected under § 121.565?','Land at the nearest suitable airport in time where a safe landing can be made. Nearest by mileage and the original destination are not automatically the correct choices.'),
  R('P121-137','121.565','What limited engine-failure diversion exception exists for airplanes with three or more engines?','With only one engine failed or shut down to prevent damage, the PIC may choose another airport after reasonably determining it is as safe as the nearest suitable option, considering all listed factors.'),
  R('P121-138','121.565','When must an airline crew report an in-flight engine shutdown?','As soon as practicable to the appropriate communication facility, then keep it informed of flight progress. Apply the separate written-report requirement when selecting another airport under the rule.'),
  R('P121-139','121.557','What if a dispatcher knows of an immediate emergency but cannot reach the captain?','The dispatcher must declare an emergency and take the action considered necessary. When communication is available, advise the PIC, ascertain the decision, and have it recorded.'),
  R('P121-140','121.557','When are written deviation reports due after domestic or flag emergency authority is exercised?','Send the report through the operations manager to the FAA. The dispatcher’s deadline is 10 days after the emergency; the PIC’s is 10 days after returning to home base.'),
  R('P121-141','121.308','What warning protection does an airline lavatory smoke detector provide?','It must give the specified flight-deck or cabin warning so the appropriate crewmember can readily detect the fire indication. Apply the airplane-category provisions of the rule.'),
  R('P121-142','121.561','What must a Part 121 captain do after encountering a hazard important to other flights?','Notify an appropriate ground station as soon as practicable about the hazardous weather or ground-facility/navigation-aid irregularity. Do not keep safety-critical information solely within the cockpit.'),
  R('P121-143','121.551','What must a domestic or flag carrier do when it knows airport or runway conditions are hazardous?','Restrict or suspend operations until the hazardous conditions are corrected. Schedule pressure does not override the carrier’s obligation.'),
  R('P121-144','121.607','Can a domestic airline dispatch over an approved route with required communication or navigation facilities unavailable?','The required facilities must be in satisfactory operating condition. The rule provides a specific equivalent-facilities exception for certain flag routes outside the United States, not a general domestic waiver.'),
  R('P121-145','121.319','Why does a large turbojet’s crew interphone distinguish normal and emergency calls?','The required alerting system must let recipients identify whether a call is normal or an emergency, enabling flight and cabin crews to recognize urgent coordination needs.'),

  R('P121-146','121.418','What is airline differences training intended to cover?','The ground subjects and applicable maneuvers or procedures needed for variations within an airplane type, matched to the assigned duties. A common type designation does not eliminate required differences training.'),
  R('P121-147','121.427','Does recurrent airline training include crew coordination skills?','Yes. Recurrent ground training includes CRM for crewmembers and dispatcher resource management for dispatchers. Approved line-oriented simulator training may satisfy portions of flightcrew CRM.'),
  R('P121-148','121.423','What handling situations are included in airline extended-envelope training?','Manual slow flight, unreliable airspeed, instrument departures and arrivals, upset recovery, and bounced-landing recovery. The section also requires hands-on full-stall and, if equipped, stick-pusher recovery experience.'),
  R('P121-149','121.423','Do bounced-landing recovery and the other extended-envelope tasks have the same recurrent interval?','No. Section 121.423 specifies 36 calendar months for bounced-landing recovery and 24 for the other listed tasks, full-stall recovery, and applicable stick-pusher experience. Follow any approved alternative program requirements.'),
  R('P121-150','121.424','Where must the required airline windshear maneuvers and procedures be practiced?','In a full flight simulator specifically authorized for those maneuvers and procedures. An ordinary desktop simulator does not satisfy that requirement.'),
  R('P121-151','121.443','What local knowledge must an airline captain have for the route and airports?','Current seasonal weather, terrain, navigation and communications, safe levels, procedures, airport layout, and notices affecting the operation, with adequate knowledge and ability to use that information.'),
  R('P121-152','121.445','What makes an airport a special airport for airline captain qualification?','The FAA may designate it because of terrain, obstructions, or complex arrival or departure procedures. Special qualification is distinct from ordinary airport familiarity.'),
  R('P121-153','121.445','How can a captain meet the usual special-airport qualification without a recent visit?','By qualifying with FAA-acceptable pictorial means within the preceding 12 calendar months. A qualifying entry by the PIC or SIC within that period is another method; a specified weather exception also exists.'),
  R('P121-154','121.438','What basic experience rule prevents pairing two inexperienced pilots in an airline type?','At least one pilot must have 75 hours of line operating flight time as PIC or SIC in that type. Only an authorized operations-specification deviation permits the listed exceptions.'),
  R('P121-155','121.438','When must the captain handle takeoff and landing with a low-time first officer?','If the SIC has under 100 hours as Part 121 SIC in type and the PIC is not an appropriately qualified check pilot, the PIC must fly the listed situations, including special airports and specified adverse conditions.'),
  R('P121-156','121.463','What operating familiarization is normally part of an airline dispatcher’s initial qualification?','At least five hours observing flight operations in the applicable airplane group. The rule permits specified takeoff/landing substitutions down to 2½ hours and an initial-introduction provision.'),
  R('P121-157','121.401','How does the adjacent-month rule credit an airline recurrent check or training event?','Completion in the calendar month immediately before or after the required month is credited to the required month. Apply this only to events covered by the rule and the approved program.'),
  R('P121-158','121.683','What qualification records must an airline keep current for crews and dispatchers?','Records showing applicable checks, qualifications, training, medical examinations, and flight, duty, and rest compliance. Being on the schedule does not itself prove qualification.'),
  R('P121-159','121.695','How long must a domestic or flag carrier retain the required load-manifest, release, and flight-plan copies?','At least three months. The PIC must also carry the specified copies or permitted manifest information to the destination.'),
  R('P121-160','121.392','Must an extra airline flight attendant beyond the legal minimum still be qualified?','Yes. Anyone the carrier identifies as a flight attendant must meet the applicable training and qualification requirements, including staff above the minimum.'),

  R('P121-161','117.23','What cumulative flight-time limits apply under Part 117?','100 hours in any 672 consecutive hours and 1,000 hours in any 365 consecutive calendar days. These are separate from flight-duty-period limits.'),
  R('P121-162','117.23','What cumulative flight-duty-period limits apply under Part 117?','60 FDP hours in any 168 consecutive hours and 190 FDP hours in any 672 consecutive hours. A legal single-day assignment can still exceed a cumulative limit.'),
  R('P121-163','117.23','Does flying for another operator disappear from a Part 117 cumulative calculation?','No. The rule includes flying on behalf of any certificate holder or Part 91K program manager during the applicable periods. Account for covered flying beyond the current airline.'),
  R('P121-164','117.3','Is airline-required deadheading a rest period?','No. Required deadhead transportation is duty, not rest; it is not a flight segment for the Table B segment count.'),
  R('P121-165','117.21','Does airport standby count toward an airline pilot’s FDP?','Yes. All airport/standby reserve time is part of the flight duty period under Part 117.'),
  R('P121-166','117.21','What is Part 117’s maximum short-call reserve availability period?','14 hours. Separate combined reserve-plus-FDP limits and required rest must also be satisfied.'),
  R('P121-167','117.21','For unaugmented operations, what caps combined short-call reserve and FDP time?','The lesser of the applicable Table B FDP limit plus four hours or 16 hours, measured from the start of reserve availability.'),
  R('P121-168','117.3','How does Part 117 define long-call reserve?','The crewmember is notified of the FDP assignment before beginning the required rest period that precedes it.'),
  R('P121-169','117.3','When is a flightcrew member acclimated under Part 117?','After being in a theater for 72 hours or receiving at least 36 consecutive hours free from duty.'),
  R('P121-170','117.3','What hours define Part 117’s window of circadian low?','0200 through 0559 during a physiological night. Use the rule’s acclimation and physiological-night definitions when applying limits.'),
  R('P121-171','117.25','Can a carrier assign reserve or duty during a pilot’s required Part 117 rest?','No. Neither the carrier nor the crewmember may assign or accept that reserve or duty during the required rest period.'),
  R('P121-172','117.15','What minimum sleep opportunity is needed for Part 117 split-duty credit?','At least three hours in suitable ground accommodation, within 2200–0500 local time. All the section’s additional conditions must also be met.'),
  R('P121-173','117.15','Can an unplanned long airport sit automatically become split-duty rest credit?','No. The qualifying opportunity must be scheduled before the FDP begins, occur after the first segment, and meet the accommodation and timing rules. Combined FDP and the opportunity may not exceed 14 hours.'),
  R('P121-174','117.25','When does Part 117 require 56 consecutive hours of rest after returning home?','After travel exceeding 60° longitude during an FDP or series of FDPs while away from home base for more than 168 hours. The rest must include three physiological nights based on local time.'),
  R('P121-175','117.3','What makes a flightcrew augmented under Part 117?','More than the type-certificate minimum crew, with qualified replacements permitting in-flight rest. An extra passenger pilot alone is insufficient.'),

  C('P121-176','part-121','How can comparing fuel remaining plus fuel used with departure fuel reveal a leak?','A growing unexplained shortfall can indicate fuel leaving the aircraft without being accounted for as engine fuel used. Reconcile the indications and follow the approved fuel-leak procedure.','fuelLeak','Fuel quantity consistency checks'),
  C('P121-177','part-121','Should an airline crew automatically crossfeed to correct an unexplained fuel imbalance?','No. An imbalance can indicate a leak; crossfeeding without identifying the cause can worsen fuel loss. Use the aircraft’s diagnostic and fuel-leak procedures before corrective transfer.','fuelLeak','Leak identification before balancing'),
  C('P121-178','part-121','Why can a jet fuel leak occur without unusually high indicated engine fuel flow?','A leak upstream of fuel metering may not be counted by the engine fuel-flow indication. Tank quantity and total-fuel checks can reveal losses that flow indications miss.','fuelLeak','Leaks upstream of the metering valve'),
  C('P121-179','part-121','Do automatic fuel-leak alerts replace periodic manual airline fuel checks?','No. Alerts are additional safety nets. Regular manual comparisons can detect a developing leak before an automatic threshold is reached.','fuelLeak','Regular fuel monitoring'),
  C('P121-180','part-121','Why must both airline pilots monitor airspeed indications throughout the takeoff roll?','A discrepancy can reveal blocked air-data probes early enough to apply the approved reject policy. A single satisfactory callout does not replace continued monitoring.','airspeedTakeoff','Takeoff-roll monitoring'),
  C('P121-181','part-121','Why do multiple pitot probes not guarantee reliable jet airspeed after aircraft storage?','Common exposure can obstruct several probes, and protective covers can be left installed. Independent channels do not eliminate common-cause errors.','airspeedTakeoff','Probe obstruction and covers'),
  C('P121-182','part-121','What preflight lesson comes from takeoffs with pitot covers still fitted?','Several people can miss the same condition. Inspect probes and verify cover removal under the approved return-to-service and walkaround procedures; do not rely solely on someone else’s inspection.','airspeedTakeoff','Missed inspection opportunities'),
  C('P121-183','part-121','What takeoff-speed ordering does Airbus takeoff surveillance check?','V1 must not exceed VR, and VR must not exceed V2. This consistency check is one safeguard; valid speeds still require the correct performance calculation.','takeoffMonitor','TOS1 speed consistency'),
  C('P121-184','part-121','Why must airline takeoff data be revisited after a runway change?','The previous speeds and performance may belong to another runway. Recalculate or revalidate using the new runway, actual entry point, conditions, and approved procedures.','takeoffMonitor','Runway-change data checks'),
  C('P121-185','part-121','Does the absence of an Airbus takeoff-surveillance alert prove the takeoff calculation is correct?','No. Surveillance is an additional safety net with defined checks. It does not replace crew verification of weight, runway, configuration, weather, and performance inputs.','takeoffMonitor','Surveillance limitations'),
  C('P121-186','part-121','What does Airbus TOS2 compare before takeoff on equipped aircraft?','An expected liftoff distance calculated from the entered performance data with the available runway length. Its capability depends on the aircraft’s installed system standard.','takeoffMonitor','Liftoff-distance check'),
  C('P121-187','part-121','Under the Airbus guidance cited here, what does selecting reverse thrust commit the crew to?','A full-stop landing. Do not initiate a go-around after reverse selection; follow the aircraft’s current manuals and operator procedures.','reverseStop','Full-stop commitment'),
  C('P121-188','part-121','When does the cited Airbus landing guidance call for selecting thrust reversers?','Immediately after landing-gear touchdown, not before. Correct timing supports reliable deployment and prompt deceleration.','reverseStop','Reverser selection timing'),
  C('P121-189','part-121','What thrust risk can arise from an attempted go-around after reverse selection?','A reverser may remain deployed or take time to stow, leaving an engine at idle and creating asymmetric thrust. This is one reason the cited Airbus SOP requires a full stop.','reverseStop','Asymmetric thrust case study'),
  C('P121-190','part-121','How can prolonged high temperatures damage carbon brakes?','Heat exposure promotes thermal oxidation, which degrades carbon brake material. Follow approved temperature, cooling, inspection, and maintenance guidance.','brakeCare','Carbon thermal oxidation'),
  C('P121-191','part-121','Why can forcing an early runway exit increase airline brake wear?','Strong manual braking to reach an earlier exit can raise brake temperature and wear. Use appropriate deceleration and a suitable exit under the carrier’s procedures.','brakeCare','Runway-exit selection'),
  C('P121-192','part-121','What benefit can installed brake-cooling fans provide after landing?','They reduce the time brakes remain hot, helping limit thermal oxidation. Their use and any takeoff temperature criteria remain aircraft-specific.','brakeCare','Brake fans'),
  C('P121-193','part-121','Why is excessive rotation dangerous during a jet go-around close to the ground?','A rapid nose-up input can cause a tailstrike before the aircraft has enough energy to climb. Use the approved pitch technique and monitor pitch closely.','tailstrike','Pitch-rate control'),
  C('P121-194','part-121','What configuration risk does Airbus highlight during a go-around very near the ground?','Premature flap or gear retraction can undermine the maneuver. Follow the type-specific sequence and wait until safely established in the go-around trajectory as instructed.','tailstrike','Configuration changes near the ground'),
  C('P121-195','part-121','On Airbus sidestick designs described in the cited article, why can simultaneous pilot inputs worsen a near-ground event?','Inputs can be added rather than one simply overriding the other. Use an explicit control transfer and the specified sidestick-priority procedure; only one pilot should control the aircraft.','tailstrike','Dual-input risk'),
  C('P121-196','part-121','What does Airbus ROPS assess during an approach on equipped aircraft?','It compares the aircraft’s energy and predicted stopping needs with runway availability and warns of an overrun risk. It supports the crew’s landing or go-around decision.','rops','Approach warning function'),
  C('P121-197','part-121','How does the on-ground Airbus runway-overrun protection function differ from its approach warning?','Once on the ground, it focuses on stopping or minimizing runway-end speed and can warn the crew to use maximum available deceleration. Follow the installed system’s procedures.','rops','On-ground protection function'),
  R('P121-198','121.308','What protects an airline lavatory waste receptacle if a fire starts inside it?','A built-in extinguisher designed to discharge automatically into the receptacle. A smoke detector warns of fire but does not itself extinguish it.'),
  R('P121-199','121.319','Must the airline crew interphone be independent of the public-address system?','Yes, in operation, although listed shared items such as handsets, microphones, and selectors are permitted. Crew coordination must not depend entirely on the passenger announcement function.'),
  R('P121-200','117.13','How does lack of acclimation change the unaugmented Part 117 FDP table limit?','Reduce the Table B maximum by 30 minutes and use local time in the theater where the pilot was last acclimated. Check the other applicable limits as well.')
];
// BEGIN REVIEWED EXPANSION 2026-10-29
window.FLIGHT_REVIEW_CATEGORIES.push(...[
  {
    "id": "part-135",
    "name": "Part 135 / Charter Operations",
    "description": "Charter operational control, pilot qualifications, checking, weather, fuel, performance, and duty rules.",
    "supplemental": true
  },
  {
    "id": "international-oceanic",
    "name": "International & Oceanic Operations",
    "description": "Cross-border preparation, oceanic navigation, data link, communications, contingencies, and regional procedures.",
    "supplemental": true
  },
  {
    "id": "turboprop",
    "name": "Turboprop & Propeller Operations",
    "description": "Turbine and propeller systems, power management, limitations, performance, and abnormal operations.",
    "supplemental": true
  },
  {
    "id": "ground-ramp",
    "name": "Ground Operations & Ramp Safety",
    "description": "Pushback, towing, marshalling, servicing, ground communication, and aircraft movement hazards."
  },
  {
    "id": "dangerous-goods",
    "name": "Dangerous Goods & Cargo Safety",
    "description": "Hazard recognition, batteries, cargo acceptance, notifications, restrictions, and emergency response.",
    "supplemental": true
  }
]);
window.FLIGHT_REVIEW_SOURCES.push(...[
  {
    "title": "14 CFR Part 135",
    "url": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-135",
    "note": "Expansion reference. Each card cites its specific rule, chapter, or operating topic; aircraft and operator authorizations control."
  },
  {
    "title": "FAA Aviation Weather Handbook 28B",
    "url": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf",
    "note": "Expansion reference. Each card cites its specific rule, chapter, or operating topic; aircraft and operator authorizations control."
  },
  {
    "title": "FAA Dangerous Goods: Air Carriers",
    "url": "https://www.faa.gov/hazmat/air_carriers",
    "note": "Expansion reference. Each card cites its specific rule, chapter, or operating topic; aircraft and operator authorizations control."
  },
  {
    "title": "49 CFR Hazardous Materials Regulations",
    "url": "https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C",
    "note": "Expansion reference. Each card cites its specific rule, chapter, or operating topic; aircraft and operator authorizations control."
  },
  {
    "title": "ICAO North Atlantic Documents",
    "url": "https://www.icao.int/EURNAT/Pages/EUR-and-NAT-Document.aspx",
    "note": "Expansion reference. Each card cites its specific rule, chapter, or operating topic; aircraft and operator authorizations control."
  },
  {
    "title": "NASA ASRS Ramp Safety Concerns",
    "url": "https://asrs.arc.nasa.gov/publications/callback/cb_538.html",
    "note": "Expansion reference. Each card cites its specific rule, chapter, or operating topic; aircraft and operator authorizations control."
  }
]);
for (const change of [
  {
    "id": "IFR-037",
    "question": "Two independent VOR systems disagree by 6° on a dual-system check. Does that satisfy the dual-VOR IFR check method?",
    "answer": "No. The maximum permissible difference for that method is 4°. Resolve the discrepancy or use a different authorized check method before relying on the systems for IFR navigation.",
    "source": "14 CFR 91.171(c)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.171"
  },
  {
    "id": "IFR-039",
    "question": "If the static-pressure system is opened for maintenance, is a still-current 24-month test enough by itself for IFR flight?",
    "answer": "No. Opening and closing the system generally triggers the specified post-maintenance test, except for the rule’s listed drain and alternate-static-valve provisions. Verify the maintenance release and required testing.",
    "source": "14 CFR 91.411(a)(2)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.411"
  },
  {
    "id": "IFR-040",
    "question": "What extra transponder check may be needed after installation or maintenance that can introduce data-correspondence error?",
    "answer": "The integrated system must be tested as specified by the rule to verify correct correspondence of the reported altitude information. A current routine inspection date alone does not cover every maintenance event.",
    "source": "14 CFR 91.413(b)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.413"
  },
  {
    "id": "IFR-115",
    "question": "You pass the visual descent point still without sufficient visual references. Should you start down to catch the runway?",
    "answer": "No. Remain at or above MDA until all descent conditions are met, and do not force an unstable descent after the normal visual descent opportunity has passed. Execute the missed approach as required.",
    "source": "FAA AIM 5-4-5 — Visual descent points; 14 CFR 91.175",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-144",
    "question": "A cold-temperature correction makes a charted segment altitude higher than the ATC assignment. What should you do?",
    "answer": "Apply the published cold-temperature procedure and coordinate affected assigned altitudes with ATC as required. Do not silently climb into another aircraft’s protected airspace or omit a required correction to avoid asking.",
    "source": "FAA AIM 7-3 — Cold Temperature Barometric Altimeter Errors",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap7_section_3.html"
  },
  {
    "id": "IFR-006",
    "source": "14 CFR § 91.169(b), destination-alternate exception (airplanes)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/section-91.169"
  },
  {
    "id": "IFR-102",
    "question": "What should a pilot do if unable to accept an assigned SID or STAR?",
    "answer": "Tell ATC and request an amended clearance. Accept only procedures you can fly with the required equipment and procedure information. A STAR requires the approved chart; an RNAV STAR also must be retrievable by name from the navigation database and match the chart. Do not substitute a remembered or manually improvised route.",
    "source": "FAA AIM 5-2-9 (departure procedures), 5-4-1 (STARs)",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-121",
    "question": "What must be available at the destination for ATC to authorize a contact approach?",
    "answer": "The airport must have a published and functioning standard or special instrument approach, and reported ground visibility must be at least 1 statute mile. The pilot must request the contact approach, meet the separate flight-visibility and cloud-clearance conditions, and receive ATC authorization. The pilot remains responsible for obstruction clearance.",
    "source": "FAA AIM 5-4-25, contact approaches",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-128",
    "answer": "A: below 91 knots; B: 91 to below 121; C: 121 to below 141; D: 141 to below 166; E: 166 or more. The category basis is VREF, if specified, or 1.3 VSO, at maximum certificated landing weight. If it is necessary to maneuver faster than the category's upper speed limit, use the appropriate higher-category minima.",
    "source": "FAA AIM 5-4-7, aircraft approach categories",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "CT-026",
    "answer": "Keep flying the aircraft and attempt a restart only if altitude and time permit. The archived AOI calls for checking fuel availability, fuel-valve position, and both ignitions. A slowly windmilling propeller may not produce ignition; follow the current aircraft and engine restart procedure rather than assuming windmilling guarantees a restart."
  },
  {
    "id": "CT-033",
    "answer": "With ignition and master off, follow the current aircraft and Rotax safety procedure before touching the propeller; treat it as capable of starting. The archived AOI calls for slowly turning the propeller only in its normal direction until an oil-system gurgle is heard, then checking the dipstick. Keep the oil within the specified limits and do not overfill."
  },
  {
    "id": "FR-005",
    "question": "What should a flight-review debrief produce besides an endorsement?",
    "answer": "Specific strengths, gaps, practice goals, and a realistic continuing-proficiency plan. Agree on what training or conditions should precede more demanding flights.",
    "source": "FAA AC 61-98E, flight-review planning and postflight discussion",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_61-98E.pdf"
  },
  {
    "id": "FR-009",
    "question": "How can the applicable FAA Airman Certification Standards help prepare for a flight review?",
    "answer": "Use their knowledge, risk-management, and skill elements to identify weak areas and build realistic scenarios with the instructor. They are a preparation resource; the flight review remains proficiency training rather than a new practical test.",
    "source": "FAA AC 61-98E, flight-review content and preparation",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_61-98E.pdf"
  },
  {
    "id": "AW-021",
    "question": "Does an ELT self-test light alone establish that its required inspection is complete?",
    "answer": "No. The inspection also addresses proper installation, battery corrosion, controls and crash-sensor operation, and sufficient radiated antenna signal. Verify a compliant inspection record, not merely an illuminated test indicator.",
    "source": "14 CFR 91.207(d)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.207"
  },
  {
    "id": "AW-022",
    "question": "What record must be made after the VOR operational check used for IFR eligibility?",
    "answer": "Enter the date, place, bearing error, and signature in the aircraft log or another record. Additional information applies to the repair-station radiated-signal method. A remembered successful check without the required record is insufficient.",
    "source": "14 CFR 91.171(d)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.171"
  },
  {
    "id": "CT-001",
    "question": "What must match before using this archived CTLS AOI for your aircraft?",
    "answer": "The aircraft model, serial applicability, installed engine, propeller, recovery system, equipment, and applicable revisions or supplements. Resolve conflicts using the aircraft's current authorized documents and manufacturer support before relying on an archived limit.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), revision status and §§1.1,1.6–1.7",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-002",
    "question": "Why should a CTLS control-rigging discrepancy ground the airplane rather than be trimmed away?",
    "answer": "Rigging affects correct control travel, mixing, and handling. Have qualified personnel resolve it to the maintenance specifications; trim is not a substitute for correct rigging.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), §8.7 p.8-7",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  }
]) Object.assign(window.FLIGHT_REVIEW_CARDS.find(c => c.id === change.id), change);
window.FLIGHT_REVIEW_CARDS.push(...[
  {
    "id": "RAMP-001",
    "category": "ground-ramp",
    "question": "What should a pilot do if the marshaller disappears from view during parking?",
    "answer": "Stop and reestablish positive guidance before moving. Do not guess the signal or the remaining clearance.",
    "source": "FAA AC 00-34B — Marshalling",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-002",
    "category": "ground-ramp",
    "question": "Does following a marshaller transfer collision responsibility away from the flightcrew?",
    "answer": "No. Continue monitoring clearance and stop whenever safety is uncertain; guidance is an aid, not a guarantee.",
    "source": "FAA AC 00-34B — Marshalling",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-003",
    "category": "ground-ramp",
    "question": "Why should one person be designated to direct aircraft movement?",
    "answer": "Conflicting signals can cause contradictory actions. Agree who controls the movement and how anyone can signal an immediate stop.",
    "source": "FAA AC 00-34B — Ground coordination",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-004",
    "category": "ground-ramp",
    "question": "Why are illuminated wands useful during night marshalling?",
    "answer": "They make the signal easier to recognize. They do not remove the need for a visible marshaller, adequate lighting, and agreed signals.",
    "source": "FAA AC 00-34B — Marshalling",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-005",
    "category": "ground-ramp",
    "question": "A wing walker gives a stop signal while the lead marshaller signals forward. What should happen?",
    "answer": "Stop. Resolve the conflict and verify clearance before resuming; an apparent obstacle takes priority over continuing.",
    "source": "FAA AC 00-34B — Ground coordination",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-006",
    "category": "ground-ramp",
    "question": "What information belongs in a towing briefing?",
    "answer": "Route, aircraft configuration, steering limits, brake responsibilities, communication, personnel positions, and the stop or emergency plan.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-007",
    "category": "ground-ramp",
    "question": "Why must the towbar match the airplane and tug?",
    "answer": "Attachment geometry and load capability vary. An incompatible towbar can damage the nose gear or disconnect under load.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-008",
    "category": "ground-ramp",
    "question": "What should happen after a towbar shear pin breaks?",
    "answer": "Stop, secure the airplane, and obtain the prescribed inspection and equipment replacement. Do not simply fit another pin and continue.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-009",
    "category": "ground-ramp",
    "question": "Why do aircraft have maximum nosewheel towing angles?",
    "answer": "Exceeding them can damage steering or landing-gear components, even if the airplane appears to tow normally afterward.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-010",
    "category": "ground-ramp",
    "question": "Who should occupy the brake position during a tow when required?",
    "answer": "A trained, authorized person familiar with that airplane's brakes, communication, and emergency procedures.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-011",
    "category": "ground-ramp",
    "question": "Why should brake availability be checked before towing?",
    "answer": "Some brake systems need electrical or hydraulic support and have limited reserve pressure. Establish usable stopping capability first.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-012",
    "category": "ground-ramp",
    "question": "When should the flightcrew release brakes for pushback?",
    "answer": "Only after the coordinated command and confirmation that the tug and ground team are ready, using the operator's procedure.",
    "source": "FAA AC 00-34B — Pushback",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-013",
    "category": "ground-ramp",
    "question": "What should happen if tug-to-cockpit communication fails during pushback?",
    "answer": "Stop the movement safely and restore communication or use an agreed approved backup before continuing.",
    "source": "FAA AC 00-34B — Pushback",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-014",
    "category": "ground-ramp",
    "question": "Why must ground crews remain clear of towbar travel?",
    "answer": "Turning and tension changes can sweep or crush personnel between the tug, towbar, and nose gear.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-015",
    "category": "ground-ramp",
    "question": "Does clearance to push mean every vehicle will yield?",
    "answer": "No. Monitor the actual path and stop for vehicles, pedestrians, or equipment that enter the protected area.",
    "source": "FAA AC 00-34B — Pushback",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-016",
    "category": "ground-ramp",
    "question": "Why should the crew verify the parking brake is set before tug disconnection?",
    "answer": "Otherwise the aircraft can roll as the tug or chocks are removed. Use positive communication rather than assumptions.",
    "source": "FAA AC 00-34B — Pushback",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-017",
    "category": "ground-ramp",
    "question": "What is the purpose of a steering bypass pin on airplanes that require one?",
    "answer": "It places the steering system in the required towing condition. Installation, removal, and cockpit indications are type-specific.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-018",
    "category": "ground-ramp",
    "question": "Why must removal of a steering bypass pin be positively confirmed?",
    "answer": "A pin left installed may disable normal steering. Confirm configuration through the prescribed ground-to-flightcrew handoff.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-019",
    "category": "ground-ramp",
    "question": "What should pilots verify before applying taxi thrust after pushback?",
    "answer": "Ground personnel and equipment are clear, the tug is disconnected, required pins are removed, and the agreed all-clear has been received.",
    "source": "FAA AC 00-34B — Departure coordination",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-020",
    "category": "ground-ramp",
    "question": "Why can a small increase in jet thrust create a large ramp hazard?",
    "answer": "Exhaust can injure people, move equipment, and damage other aircraft. Use approved low-thrust techniques and consider what is behind the airplane.",
    "source": "FAA AC 00-34B — Jet blast",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-021",
    "category": "ground-ramp",
    "question": "What is an engine ingestion zone?",
    "answer": "The hazardous area ahead of and around a running turbine inlet where airflow can draw in people or objects. Its extent is aircraft- and power-dependent.",
    "source": "FAA AC 00-34B — Safety hazards",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-022",
    "category": "ground-ramp",
    "question": "Does a stationary propeller guarantee an aircraft is safe to approach?",
    "answer": "No. Prevent unexpected starting and approach only under established procedures. Treat the propeller area as hazardous.",
    "source": "FAA AC 00-34B — Propeller safety",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-023",
    "category": "ground-ramp",
    "question": "Why are loose hats, scarves, and unsecured tools dangerous near engines?",
    "answer": "They can be drawn into an inlet or propeller, strike people, or become foreign objects on the ramp.",
    "source": "FAA AC 00-34B — Safety hazards",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-024",
    "category": "ground-ramp",
    "question": "How should passengers be escorted near a propeller airplane?",
    "answer": "Use a designated safe route under crew supervision, clear of propellers and other aircraft hazards; do not allow unguided shortcuts.",
    "source": "FAA AC 00-34B — Passenger protection",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-025",
    "category": "ground-ramp",
    "question": "Why is a running helicopter hazardous beyond its visible rotor disc?",
    "answer": "Rotor wash, poor visibility, changing blade clearance, and the tail rotor create hazards outside the obvious boarding area.",
    "source": "FAA AC 00-34B — Rotorcraft ground hazards",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-026",
    "category": "ground-ramp",
    "question": "What should a pilot do if the planned taxi path places people in jet blast?",
    "answer": "Wait, request ground coordination, change the movement plan, or use a tug as appropriate. Do not rely on people to outrun the exhaust.",
    "source": "FAA AC 00-34B — Jet blast",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-027",
    "category": "ground-ramp",
    "question": "Why should a person crossing a noisy ramp avoid headphones unrelated to hearing protection?",
    "answer": "Distraction and masked warnings reduce hazard detection. Use approved protective equipment while preserving situational awareness.",
    "source": "FAA AC 00-34B — Noise and awareness",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-028",
    "category": "ground-ramp",
    "question": "What does hearing protection accomplish on the ramp?",
    "answer": "It reduces hazardous noise exposure. It must be combined with visual awareness and an effective communication method.",
    "source": "FAA AC 00-34B — Noise",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-029",
    "category": "ground-ramp",
    "question": "Why can an anti-collision beacon being off be insufficient evidence that an engine is safe?",
    "answer": "Lights can fail or procedures can be misunderstood. Verify engine status and authorization rather than using one cue alone.",
    "source": "FAA AC 00-34B — Engine safety",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-030",
    "category": "ground-ramp",
    "question": "Why should ground personnel avoid passing between a moving aircraft and fixed equipment?",
    "answer": "The space can close rapidly and aircraft clearance is difficult to judge. Stay outside the movement envelope.",
    "source": "FAA AC 00-34B — Collision prevention",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-031",
    "category": "ground-ramp",
    "question": "What is foreign object debris on an aircraft ramp?",
    "answer": "Loose material that could damage aircraft or injure people, including hardware, packaging, stones, and broken equipment.",
    "source": "FAA AC 00-34B — FOD",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-032",
    "category": "ground-ramp",
    "question": "What should happen to a dropped tool near an aircraft inlet?",
    "answer": "Stop the relevant operation, account for the tool, and inspect or retrieve it safely before the engine is operated.",
    "source": "FAA AC 00-34B — FOD",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-033",
    "category": "ground-ramp",
    "question": "Why should cones and chocks be accounted for before departure?",
    "answer": "They can damage tires or engines, obstruct movement, or be blown into personnel and equipment.",
    "source": "FAA AC 00-34B — Parking and FOD",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-034",
    "category": "ground-ramp",
    "question": "How should loose baggage straps be handled around loading equipment?",
    "answer": "Secure them and keep them clear of moving machinery and aircraft controls; snagging can pull a person or item into equipment.",
    "source": "FAA AC 00-34B — Ground servicing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-035",
    "category": "ground-ramp",
    "question": "Why is a tail-clearance check needed during a sharp ramp turn?",
    "answer": "The tail and wings sweep different paths than the nosewheel. Nose clearance alone does not establish whole-aircraft clearance.",
    "source": "FAA AC 00-34B — Ground movement",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-036",
    "category": "ground-ramp",
    "question": "What should be done if wingtip clearance cannot be judged from the cockpit?",
    "answer": "Stop and obtain suitable assistance or another safe route. Do not use guesswork to squeeze through.",
    "source": "FAA AC 00-34B — Ground movement",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-037",
    "category": "ground-ramp",
    "question": "Why should a parked aircraft be secured before occupants disembark?",
    "answer": "Uncommanded rolling or wind movement can injure occupants and ground personnel. Apply the approved brake, chock, or tiedown procedure.",
    "source": "FAA AC 00-34B — Parking",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-038",
    "category": "ground-ramp",
    "question": "Can a parking brake always replace chocks during servicing?",
    "answer": "No. Brake condition, pressure loss, cooling requirements, and local procedures matter. Use the aircraft's prescribed securing method.",
    "source": "FAA AC 00-34B — Parking",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-039",
    "category": "ground-ramp",
    "question": "Why is chock removal near hot brakes a special concern?",
    "answer": "Heat and potential tire or wheel failure can endanger personnel. Follow the aircraft's hot-brake stand-off and handling procedure.",
    "source": "FAA AC 00-34B — Heat hazards",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-040",
    "category": "ground-ramp",
    "question": "How should a small airplane be tied down for strong winds?",
    "answer": "Use the aircraft's designated attachment points and approved technique; secure controls as instructed and inspect the anchors and ropes.",
    "source": "FAA AC 00-34B — Aircraft tiedown",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-041",
    "category": "ground-ramp",
    "question": "Why should a flight-control lock be included in the departure configuration check?",
    "answer": "A lock left installed can prevent control movement. Remove it and verify the required full control travel.",
    "source": "FAA AC 00-34B — Parking configuration",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-042",
    "category": "ground-ramp",
    "question": "What should happen after a ground vehicle contacts an aircraft?",
    "answer": "Stop, report the contact, and obtain the required inspection before flight, even when no damage is obvious.",
    "source": "FAA AC 00-34B — Damage reporting",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-043",
    "category": "ground-ramp",
    "question": "Why should a ramp worker report a new fluid leak before the flightcrew leaves?",
    "answer": "It permits identification and maintenance assessment before the next operation rather than allowing an unnoticed defect to carry forward.",
    "source": "FAA AC 00-34B — Post-arrival inspection",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-044",
    "category": "ground-ramp",
    "question": "Why can cabin stairs or a jet bridge damage an aircraft during servicing?",
    "answer": "Aircraft height can change with passenger, cargo, fuel, or suspension changes. Maintain the prescribed clearances and monitoring.",
    "source": "FAA AC 00-34B — Servicing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-045",
    "category": "ground-ramp",
    "question": "What should be checked before connecting ground electrical power?",
    "answer": "Correct equipment compatibility, cable and connector condition, and the aircraft's connection sequence and electrical indications.",
    "source": "FAA AC 00-34B — External power",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-046",
    "category": "ground-ramp",
    "question": "Why should ground-service cables and hoses be protected from vehicle traffic?",
    "answer": "Crushing or dragging them can cause leaks, electrical hazards, and damage to aircraft connections.",
    "source": "FAA AC 00-34B — Servicing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-047",
    "category": "ground-ramp",
    "question": "What should happen before disconnecting an external power unit?",
    "answer": "Coordinate with the flightcrew and confirm the aircraft is ready for the loss of external power using the approved sequence.",
    "source": "FAA AC 00-34B — External power",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-048",
    "category": "ground-ramp",
    "question": "Why is oxygen servicing kept away from oil and grease?",
    "answer": "Oxygen strongly supports combustion, and petroleum contamination can create a serious fire hazard. Use clean approved equipment and trained personnel.",
    "source": "FAA AC 00-34B — Oxygen servicing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-049",
    "category": "ground-ramp",
    "question": "Why should only the specified oxygen type and servicing method be used?",
    "answer": "Aircraft oxygen systems have particular purity, compatibility, pressure, and contamination requirements. Other compressed gases are not substitutes.",
    "source": "FAA AC 00-34B — Oxygen servicing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-050",
    "category": "ground-ramp",
    "question": "Why are oxygen cylinders secured during transport and servicing?",
    "answer": "A damaged valve can release high-pressure gas violently. Prevent rolling, impact, heat exposure, and unauthorized handling.",
    "source": "FAA AC 00-34B — Oxygen servicing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-051",
    "category": "ground-ramp",
    "question": "What must be agreed before a fuel truck starts servicing an airplane?",
    "answer": "Aircraft identity, fuel type and grade, quantity, additives if required, and the authorized servicing procedure.",
    "source": "FAA AC 00-34B — Fueling",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-052",
    "category": "ground-ramp",
    "question": "Does a familiar fuel-truck color prove it contains the correct fuel?",
    "answer": "No. Verify labeling, requested fuel, and the aircraft's placard or documentation. Paint conventions alone are insufficient.",
    "source": "FAA AC 00-34B — Fuel identification",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-053",
    "category": "ground-ramp",
    "question": "What should a pilot do after discovering the wrong fuel may have been loaded?",
    "answer": "Do not start the engine or depart. Stop servicing and obtain maintenance guidance to identify and correct the contamination.",
    "source": "FAA AC 00-34B — Fueling errors",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-054",
    "category": "ground-ramp",
    "question": "Why is a fueling receipt worth checking before departure?",
    "answer": "It helps catch wrong aircraft, grade, quantity, or unit errors before the engine runs and the airplane leaves.",
    "source": "FAA AC 00-34B — Fuel verification",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-055",
    "category": "ground-ramp",
    "question": "What is the safety purpose of bonding during fueling?",
    "answer": "It equalizes electrical potential between connected equipment and the aircraft to reduce static-spark risk. Follow the approved connection sequence.",
    "source": "FAA AC 00-34B — Fueling static electricity",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-056",
    "category": "ground-ramp",
    "question": "Is bonding the same as placing the aircraft at earth potential?",
    "answer": "No. Bonding equalizes potential between objects; grounding connects to earth. Use the procedure required for the actual fueling system.",
    "source": "FAA AC 00-34B — Fueling static electricity",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-057",
    "category": "ground-ramp",
    "question": "What should happen if fuel spills during servicing?",
    "answer": "Stop fueling, control ignition sources, protect people, and initiate the airport or operator spill response. Resume only when authorized.",
    "source": "FAA AC 00-34B — Fuel spills",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-058",
    "category": "ground-ramp",
    "question": "Why should a fueling vehicle retain a clear escape path?",
    "answer": "It may need to be moved promptly during a spill or fire. Do not trap it with other equipment.",
    "source": "FAA AC 00-34B — Fueling vehicle placement",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-059",
    "category": "ground-ramp",
    "question": "Why should aircraft fuel be checked for water after deliveries and storage?",
    "answer": "Water can enter through contamination or condensation and interrupt fuel supply. Use the applicable sampling and documented inspection procedures.",
    "source": "FAA AC 00-34B — Fuel contamination",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-060",
    "category": "ground-ramp",
    "question": "What can cloudy turbine fuel suggest?",
    "answer": "Suspended water or other contamination. Stop and investigate through the approved fuel-quality process rather than assuming it is normal.",
    "source": "FAA AC 00-34B — Fuel contamination",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-061",
    "category": "ground-ramp",
    "question": "Why may an immediate post-fueling sample miss water?",
    "answer": "Fuel agitation can suspend water and contaminants. Allow the specified settling time and follow the aircraft's sampling procedure.",
    "source": "FAA AC 00-34B — Fuel sampling",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-062",
    "category": "ground-ramp",
    "question": "Why must ladders or hoses not rest on unsupported wing areas?",
    "answer": "They can dent structure or damage trailing edges and control surfaces. Use approved access and protected support locations.",
    "source": "FAA AC 00-34B — Overwing fueling",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-063",
    "category": "ground-ramp",
    "question": "Why must a fuel nozzle not be wedged open unattended?",
    "answer": "The operator may lose control of flow or miss overflow and other hazards. Attend fueling and use the approved shutoff system.",
    "source": "FAA AC 00-34B — Fueling",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-064",
    "category": "ground-ramp",
    "question": "What final exterior check follows completion of fueling?",
    "answer": "Verify caps and panels are secure, no leaks are present, and hoses, bonding leads, and equipment are removed before aircraft movement.",
    "source": "FAA AC 00-34B — Fueling completion",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-065",
    "category": "ground-ramp",
    "question": "How should thunderstorms affect ramp servicing?",
    "answer": "Follow airport and operator lightning procedures, including suspension and evacuation thresholds. A departure deadline does not justify exposure.",
    "source": "FAA AC 00-34B — Weather hazards",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-066",
    "category": "ground-ramp",
    "question": "Why does wet or icy pavement change pushback planning?",
    "answer": "Reduced traction can affect tug control and aircraft stopping. Reassess equipment, route, speed, and whether the movement should occur.",
    "source": "FAA AC 00-34B — Ground movement",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-067",
    "category": "ground-ramp",
    "question": "Why can strong wind make an open aircraft door dangerous?",
    "answer": "It may move violently, injure personnel, or damage hinges and structure. Observe aircraft wind limits and securing procedures.",
    "source": "FAA AC 00-34B — Weather hazards",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-068",
    "category": "ground-ramp",
    "question": "What should a crew do when blowing dust obscures ground personnel?",
    "answer": "Stop or delay the operation until reliable guidance and safe clearance can be maintained.",
    "source": "FAA AC 00-34B — Visibility",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-069",
    "category": "ground-ramp",
    "question": "Why should baggage loaders and catering vehicles approach an aircraft cautiously?",
    "answer": "Limited sight lines and changing aircraft height create collision risk. Use trained operators, the prescribed approach, and spotting assistance where needed.",
    "source": "FAA AC 00-34B — Service vehicles",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-070",
    "category": "ground-ramp",
    "question": "Why are high-visibility clothing and approved footwear important on the ramp?",
    "answer": "They improve detection and reduce slips or injuries, but do not substitute for separation from aircraft and moving equipment.",
    "source": "FAA AC 00-34B — PPE",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-071",
    "category": "ground-ramp",
    "question": "What should happen if a ramp operation uses an unfamiliar signal?",
    "answer": "Stop and clarify using an agreed communication method before acting. Never infer a safety-critical instruction from an ambiguous gesture.",
    "source": "FAA AC 00-34B — Marshalling",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-072",
    "category": "ground-ramp",
    "question": "Why must ground crews brief a change in towing route?",
    "answer": "A new route can change clearances, traffic conflicts, surface condition, and stopping options. Update the whole team before proceeding.",
    "source": "FAA AC 00-34B — Towing",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-073",
    "category": "ground-ramp",
    "question": "What is the purpose of an independent observer during a highly focused ramp task?",
    "answer": "The observer watches for approaching traffic or other hazards that the task-focused worker may not detect.",
    "source": "FAA AC 00-34B — Overwatch",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-074",
    "category": "ground-ramp",
    "question": "Why should a rushed turnaround include an explicit final all-clear?",
    "answer": "Different teams can finish at different times. Confirm that doors, panels, people, equipment, and servicing connections are ready before movement.",
    "source": "FAA AC 00-34B — Turnaround coordination",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "RAMP-075",
    "category": "ground-ramp",
    "question": "What should a pilot do after receiving a ramp instruction that conflicts with safe clearance?",
    "answer": "Stop and resolve it with the appropriate controller, ramp coordinator, or ground crew. An instruction does not make a collision safe.",
    "source": "FAA AC 00-34B — Ground coordination",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf"
  },
  {
    "id": "DG-001",
    "category": "dangerous-goods",
    "question": "Why can an ordinary household product be dangerous aboard an aircraft?",
    "answer": "Pressure, temperature, vibration, or accidental activation can cause leakage, fire, toxic fumes, or other hazards. Product familiarity does not establish transport permission.",
    "source": "FAA PackSafe",
    "sourceUrl": "https://www.faa.gov/hazmat/packsafe"
  },
  {
    "id": "DG-002",
    "category": "dangerous-goods",
    "question": "Does passing TSA screening prove an item complies with dangerous-goods rules?",
    "answer": "No. Security screening and hazardous-materials safety rules are separate. Both sets of restrictions must be satisfied.",
    "source": "FAA PackSafe",
    "sourceUrl": "https://www.faa.gov/hazmat/packsafe"
  },
  {
    "id": "DG-003",
    "category": "dangerous-goods",
    "question": "Why should a passenger ask about an item missing from the PackSafe chart?",
    "answer": "The chart lists common examples, not every regulated article. An unlisted item is not automatically permitted.",
    "source": "FAA PackSafe",
    "sourceUrl": "https://www.faa.gov/hazmat/packsafe"
  },
  {
    "id": "DG-004",
    "category": "dangerous-goods",
    "question": "Can an airline impose stricter baggage restrictions than a general federal exception?",
    "answer": "Yes. Check the operating airline's policy and route requirements as well as the applicable safety rules.",
    "source": "FAA PackSafe",
    "sourceUrl": "https://www.faa.gov/hazmat/packsafe"
  },
  {
    "id": "DG-005",
    "category": "dangerous-goods",
    "question": "What is the first step when a passenger reveals an unfamiliar chemical in a bag?",
    "answer": "Identify the exact product and obtain the carrier's trained dangerous-goods assessment before acceptance. Do not guess from the trade name.",
    "source": "FAA PackSafe",
    "sourceUrl": "https://www.faa.gov/hazmat/packsafe"
  },
  {
    "id": "DG-006",
    "category": "dangerous-goods",
    "question": "Why should staff ask about batteries when a bag is gate-checked?",
    "answer": "Articles acceptable in the cabin may be forbidden in checked baggage. Identify and remove prohibited spare batteries and devices before loading.",
    "source": "FAA PackSafe",
    "sourceUrl": "https://www.faa.gov/hazmat/packsafe"
  },
  {
    "id": "DG-007",
    "category": "dangerous-goods",
    "question": "What does undeclared dangerous goods mean?",
    "answer": "Regulated material offered without the required identification, declaration, or other compliance. Ordinary packaging can conceal a regulated hazard.",
    "source": "FAA PackSafe",
    "sourceUrl": "https://www.faa.gov/hazmat/packsafe"
  },
  {
    "id": "DG-008",
    "category": "dangerous-goods",
    "question": "Why can a consumer label saying flammable be operationally important?",
    "answer": "It is a cue to investigate a possible hazardous material. Acceptance depends on transport classification and exceptions, not solely the consumer warning.",
    "source": "FAA PackSafe",
    "sourceUrl": "https://www.faa.gov/hazmat/packsafe"
  },
  {
    "id": "DG-009",
    "category": "dangerous-goods",
    "question": "Where must spare lithium batteries normally travel under the passenger exception?",
    "answer": "In carry-on baggage, protected against short circuits. They may not be placed in checked baggage.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-010",
    "category": "dangerous-goods",
    "question": "Are portable power banks treated as installed-device batteries for baggage purposes?",
    "answer": "No. They are treated as spare batteries and must meet the carry-on and protection requirements.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-011",
    "category": "dangerous-goods",
    "question": "How should exposed spare-battery terminals be protected for flight?",
    "answer": "Use original packaging, individual protective bags or cases, or insulated terminals that prevent contact with conductive objects.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-012",
    "category": "dangerous-goods",
    "question": "Why should coins and keys not share a pocket with unprotected spare batteries?",
    "answer": "They can bridge terminals and create a short circuit, heating, or fire.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-013",
    "category": "dangerous-goods",
    "question": "What is the usual lithium-ion energy limit for ordinary passenger electronic devices and spares?",
    "answer": "Up to 100 Wh under the exception's conditions. Larger batteries need a specific applicable provision and any required airline approval.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-014",
    "category": "dangerous-goods",
    "question": "What passenger allowance can apply to spare lithium-ion batteries above 100 Wh through 160 Wh?",
    "answer": "With airline approval, no more than two individually protected spares per person, in carry-on baggage. Verify the full applicable conditions.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-015",
    "category": "dangerous-goods",
    "question": "May an ordinary passenger carry a 200 Wh power bank using the standard personal-electronics exception?",
    "answer": "No. It exceeds that exception's maximum. Do not accept it merely because it fits inside the cabin bag.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-016",
    "category": "dangerous-goods",
    "question": "How is a battery's watt-hour rating calculated from volts and amp-hours?",
    "answer": "Multiply nominal volts by amp-hours. Convert milliamp-hours to amp-hours first; obtain reliable manufacturer information when markings are unclear.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-017",
    "category": "dangerous-goods",
    "question": "Why should a checked battery-powered device be fully switched off?",
    "answer": "Sleep or hibernation is insufficient protection against heat generation. Protect it from accidental activation and damage under the applicable exception.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-018",
    "category": "dangerous-goods",
    "question": "Does a battery meeting UN 38.3 tests eliminate the need to inspect its condition before travel?",
    "answer": "No. The tests address the battery type’s transport qualification, not damage, recall status, terminal protection, or compliance of the particular battery offered.",
    "source": "49 CFR 175.10(a)(18)",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-019",
    "category": "dangerous-goods",
    "question": "Can a damaged or safety-recalled lithium battery use the ordinary baggage exception?",
    "answer": "Not when it is likely to produce dangerous heat, fire, or a short circuit. Apply the specific prohibition and carrier guidance.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-020",
    "category": "dangerous-goods",
    "question": "What must happen to an e-cigarette before boarding?",
    "answer": "Carry it on the person or in carry-on baggage, prevent accidental activation, and comply with battery limits; it is not checked baggage.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-021",
    "category": "dangerous-goods",
    "question": "May an e-cigarette be recharged aboard the aircraft?",
    "answer": "No. The passenger exception prohibits recharging the device or its batteries aboard.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-022",
    "category": "dangerous-goods",
    "question": "Why must smart baggage battery removability be checked before accepting it into the hold?",
    "answer": "A battery outside the small built-in exception must be removed and carried under the spare-battery rules. A nonremovable battery may make the bag unacceptable.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-023",
    "category": "dangerous-goods",
    "question": "Are all battery-powered mobility aids governed by ordinary laptop battery limits?",
    "answer": "No. Mobility aids have their own provisions for approval, isolation, protection, and battery removal or retention. Use the specific applicable paragraph.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-024",
    "category": "dangerous-goods",
    "question": "Why must mobility-aid batteries be protected against accidental operation?",
    "answer": "Movement or a short circuit can damage the aid and aircraft or cause a fire. Follow the battery-type-specific procedure.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-025",
    "category": "dangerous-goods",
    "question": "What information should a traveler provide when arranging a battery-powered mobility aid?",
    "answer": "Battery type, rating, removability, and safe isolation or handling instructions, so the airline can apply the correct provision.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-026",
    "category": "dangerous-goods",
    "question": "May a fuel-powered camping stove be accepted just because its tank is empty?",
    "answer": "Not automatically. Residual liquid or vapor remains hazardous; acceptance requires the applicable drained, cleaned, and purged conditions and carrier approval where specified.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-027",
    "category": "dangerous-goods",
    "question": "What is the passenger dry-ice quantity limit under the usual baggage exception?",
    "answer": "Up to 2.5 kg per person with airline approval, in packaging that permits carbon-dioxide release, subject to the applicable marking conditions.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-028",
    "category": "dangerous-goods",
    "question": "Why must dry-ice packaging vent gas?",
    "answer": "Dry ice sublimates into carbon dioxide. A sealed container can pressurize, and released gas must be considered in aircraft ventilation and loading.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-029",
    "category": "dangerous-goods",
    "question": "What dry-ice information belongs on an applicable checked package?",
    "answer": "Identify dry ice or solid carbon dioxide and the net dry-ice mass, or indicate that the mass is 2.5 kg or less, as the rule permits.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-030",
    "category": "dangerous-goods",
    "question": "May a passenger carry fireworks under the normal personal-item exception?",
    "answer": "No. Fireworks are not made acceptable by placing them in checked baggage or labeling them as souvenirs.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-031",
    "category": "dangerous-goods",
    "question": "What is the usual passenger-baggage restriction on alcoholic beverages above 70 percent alcohol by volume?",
    "answer": "They are forbidden under the passenger exception. Retail packaging does not make them acceptable.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-032",
    "category": "dangerous-goods",
    "question": "What quantity limit applies to beverages above 24 through 70 percent alcohol by volume?",
    "answer": "Unopened retail packaging of no more than five liters each, with a total of five liters per person, under the exception.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-033",
    "category": "dangerous-goods",
    "question": "Are beverages at or below 24 percent alcohol subject to that dangerous-goods quantity limit?",
    "answer": "No, not that alcohol-specific limit. Baggage, security, customs, and carrier restrictions may still apply.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-034",
    "category": "dangerous-goods",
    "question": "Does permission to transport an alcoholic beverage authorize drinking it in flight?",
    "answer": "No. Transport and onboard consumption are different rules; follow the carrier's service requirements.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-035",
    "category": "dangerous-goods",
    "question": "What total limit normally applies to permitted personal medicinal and toiletry hazardous articles?",
    "answer": "Two kilograms or two liters per person in aggregate, with each container no larger than 0.5 kg or 500 mL, subject to the paragraph's conditions.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-036",
    "category": "dangerous-goods",
    "question": "Why must permitted aerosol release valves be protected?",
    "answer": "To prevent accidental discharge during handling or flight. A missing cap can defeat an otherwise applicable exception.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-037",
    "category": "dangerous-goods",
    "question": "Can a passenger pack extra fuel cartridges for a butane curling iron under its personal-item exception?",
    "answer": "No. The exception for the permitted device does not permit its gas refills.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-038",
    "category": "dangerous-goods",
    "question": "Why is a self-inflating life jacket not automatically forbidden as compressed gas?",
    "answer": "A specific passenger exception permits qualifying devices and cartridges under conditions, including operator approval. Apply the exact allowance rather than a blanket gas rule.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-039",
    "category": "dangerous-goods",
    "question": "Why does sporting ammunition require a separate baggage assessment?",
    "answer": "Only qualifying securely boxed small-arms ammunition has a passenger exception, with checked-baggage, quantity, and personal-use conditions. Other explosives do not inherit that allowance.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-040",
    "category": "dangerous-goods",
    "question": "May ammunition be accepted loose in a bag under the passenger exception?",
    "answer": "No. It must be securely packaged as required; loose cartridges do not meet the standard.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-041",
    "category": "dangerous-goods",
    "question": "Why are oxygen cylinders different from approved portable oxygen concentrators?",
    "answer": "They present different hazards and regulatory conditions. A concentrator allowance does not authorize a passenger's compressed-oxygen cylinder.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-042",
    "category": "dangerous-goods",
    "question": "What should be checked before accepting a gas-powered personal appliance?",
    "answer": "The exact device exception, fuel type, quantity, activation protection, permitted baggage location, and approval requirements.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-043",
    "category": "dangerous-goods",
    "question": "Why should the rule's most appropriate article description be selected?",
    "answer": "Different exceptions have different conditions. Selecting a convenient but incorrect description can bypass the controls for the actual hazard.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-044",
    "category": "dangerous-goods",
    "question": "Can separated or misrouted passenger baggage ignore dangerous-goods conditions?",
    "answer": "No. The applicable passenger-baggage exception can continue to apply, but its conditions and carrier incident-reporting obligations remain relevant.",
    "source": "49 CFR 175.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.10"
  },
  {
    "id": "DG-045",
    "category": "dangerous-goods",
    "question": "What does a proper shipping name identify in a dangerous-goods shipment?",
    "answer": "The regulatory description used in transport documentation and marking. A marketing name alone is not a substitute.",
    "source": "49 CFR 172.101",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.101"
  },
  {
    "id": "DG-046",
    "category": "dangerous-goods",
    "question": "What is the purpose of a UN or NA identification number?",
    "answer": "It identifies a regulated substance or article entry and helps responders and handlers associate the shipment with the correct hazard information.",
    "source": "49 CFR 172.101",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.101"
  },
  {
    "id": "DG-047",
    "category": "dangerous-goods",
    "question": "What does a packing group indicate when one is assigned?",
    "answer": "The relative degree of danger for packaging purposes: I high, II medium, and III low. Not every material has a packing group.",
    "source": "49 CFR 172.101",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.101"
  },
  {
    "id": "DG-048",
    "category": "dangerous-goods",
    "question": "What does a subsidiary hazard label communicate?",
    "answer": "An additional regulated hazard beyond the primary class. Handling and segregation must account for all applicable hazards.",
    "source": "49 CFR 172.101",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.101"
  },
  {
    "id": "DG-049",
    "category": "dangerous-goods",
    "question": "Does a Cargo Aircraft Only label allow the package aboard a passenger flight?",
    "answer": "No. It identifies cargo-aircraft-only restrictions; passenger carriage requires an applicable authorization, not a convenient empty hold.",
    "source": "49 CFR 172.101",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.101"
  },
  {
    "id": "DG-050",
    "category": "dangerous-goods",
    "question": "Why must the hazardous-materials table's aircraft quantity limits be checked?",
    "answer": "A material permitted by another transport mode may be forbidden or limited aboard passenger or cargo aircraft.",
    "source": "49 CFR 172.101",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.101"
  },
  {
    "id": "DG-051",
    "category": "dangerous-goods",
    "question": "What is an excepted-quantity marking intended to communicate?",
    "answer": "That a qualifying small quantity uses a specific regulatory exception. It is not an unrestricted exemption from all transport requirements.",
    "source": "49 CFR 173.4a — Excepted quantities",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-173.4a"
  },
  {
    "id": "DG-052",
    "category": "dangerous-goods",
    "question": "Why must a shipper's description be checked against the actual contents?",
    "answer": "Incorrect identification can lead to unsuitable packaging, wrong emergency actions, and incompatible loading. Trained acceptance checks must resolve discrepancies.",
    "source": "49 CFR 172.101",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.101"
  },
  {
    "id": "DG-053",
    "category": "dangerous-goods",
    "question": "What should airline acceptance personnel check before accepting regulated cargo?",
    "answer": "Required documents, package condition, marking, labeling, and other applicable acceptance requirements. Use the operator's trained process.",
    "source": "49 CFR 175.30",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.30"
  },
  {
    "id": "DG-054",
    "category": "dangerous-goods",
    "question": "May a visibly leaking dangerous-goods package be accepted for flight?",
    "answer": "No. Stop acceptance and initiate the approved isolation and response procedure; do not conceal the leak with outer packaging.",
    "source": "49 CFR 175.30",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.30"
  },
  {
    "id": "DG-055",
    "category": "dangerous-goods",
    "question": "Does the shipper's certification eliminate the carrier's acceptance inspection?",
    "answer": "No. The carrier retains its applicable inspection and acceptance obligations.",
    "source": "49 CFR 175.30",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.30"
  },
  {
    "id": "DG-056",
    "category": "dangerous-goods",
    "question": "What should happen when a hazard label is unreadable or missing?",
    "answer": "Hold the shipment for trained assessment and correction before acceptance. Do not infer the classification from similar packages.",
    "source": "49 CFR 175.30",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.30"
  },
  {
    "id": "DG-057",
    "category": "dangerous-goods",
    "question": "Can a damaged outer package be loaded because the inner container looks intact?",
    "answer": "Not without the required assessment and compliance. Damage can compromise containment and obscure evidence of leakage.",
    "source": "49 CFR 175.30",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.30"
  },
  {
    "id": "DG-058",
    "category": "dangerous-goods",
    "question": "Why should overpack markings and labels remain identifiable?",
    "answer": "An overpack must communicate the hazards when the required inner markings are not visible. Concealed labels undermine handling and emergency information.",
    "source": "49 CFR 175.30",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.30"
  },
  {
    "id": "DG-059",
    "category": "dangerous-goods",
    "question": "What should a crew do when cargo paperwork and package labels disagree?",
    "answer": "Have the discrepancy resolved through qualified personnel before transport. Neither the label nor the paperwork should be guessed correct.",
    "source": "49 CFR 175.30",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.30"
  },
  {
    "id": "DG-060",
    "category": "dangerous-goods",
    "question": "What is the purpose of dangerous-goods information provided to the pilot in command?",
    "answer": "To identify the material and its onboard location so the crew can manage the flight and communicate effectively during an emergency.",
    "source": "49 CFR 175.33",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.33"
  },
  {
    "id": "DG-061",
    "category": "dangerous-goods",
    "question": "Why must last-minute cargo changes be reflected in the pilot's dangerous-goods information?",
    "answer": "An accurate initial notice becomes misleading if packages move, are removed, or are added. Reconcile the final load and notification.",
    "source": "49 CFR 175.33",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.33"
  },
  {
    "id": "DG-062",
    "category": "dangerous-goods",
    "question": "Why does package location matter during a cargo emergency?",
    "answer": "It helps identify affected compartments, select appropriate procedures, and inform responders about access and hazards.",
    "source": "49 CFR 175.33",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.33"
  },
  {
    "id": "DG-063",
    "category": "dangerous-goods",
    "question": "What should a captain do if required dangerous-goods notification has not been received?",
    "answer": "Resolve the missing information through the operator's process before departure; do not assume another person has checked it.",
    "source": "49 CFR 175.33",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.33"
  },
  {
    "id": "DG-064",
    "category": "dangerous-goods",
    "question": "What should ATC receive during an airborne emergency involving carried dangerous goods when circumstances permit?",
    "answer": "Information sufficient to alert responders, including the relevant goods and location as available. Aircraft control and immediate emergency actions take priority.",
    "source": "49 CFR 175.33",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.33"
  },
  {
    "id": "DG-065",
    "category": "dangerous-goods",
    "question": "Why should the ground organization retain accessible shipment information?",
    "answer": "Emergency responders may need it promptly if the aircraft cannot communicate or documents aboard are unavailable.",
    "source": "49 CFR 175.33",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.33"
  },
  {
    "id": "DG-066",
    "category": "dangerous-goods",
    "question": "What is the danger of a generic statement that dangerous goods are aboard?",
    "answer": "It omits the identity, quantity, and location needed for an informed response. Use the required detailed notification.",
    "source": "49 CFR 175.33",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.33"
  },
  {
    "id": "DG-067",
    "category": "dangerous-goods",
    "question": "Why must dangerous-goods packages be secured against movement?",
    "answer": "Shifting can damage packaging and cause leakage, and may violate required orientation or separation from other cargo.",
    "source": "49 CFR 175.75 and 175.78",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.78"
  },
  {
    "id": "DG-068",
    "category": "dangerous-goods",
    "question": "Why are incompatible dangerous goods separated during loading?",
    "answer": "Leakage or damage could bring incompatible materials together and cause fire, heat, gas, or another dangerous reaction.",
    "source": "49 CFR 175.75 and 175.78",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.78"
  },
  {
    "id": "DG-069",
    "category": "dangerous-goods",
    "question": "Can every hazardous material be placed in any available cargo compartment?",
    "answer": "No. Accessibility, quantity, aircraft type, compartment, and segregation requirements govern the permitted position.",
    "source": "49 CFR 175.75 and 175.78",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.78"
  },
  {
    "id": "DG-070",
    "category": "dangerous-goods",
    "question": "Why must package orientation arrows be respected?",
    "answer": "They communicate the required upright position for qualifying liquid packages. Incorrect orientation can increase leakage risk.",
    "source": "49 CFR 175.75 and 175.78",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.78"
  },
  {
    "id": "DG-071",
    "category": "dangerous-goods",
    "question": "What should happen if dangerous goods are discovered in a compartment not authorized for them?",
    "answer": "Stop and correct the loading under the operator's trained procedure before departure.",
    "source": "49 CFR 175.75 and 175.78",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.78"
  },
  {
    "id": "DG-072",
    "category": "dangerous-goods",
    "question": "Why should heavy cargo not be allowed to crush hazardous packages?",
    "answer": "Containment can fail even when the package was originally compliant. Protect packages and use the prescribed stowage and restraint.",
    "source": "49 CFR 175.75 and 175.78",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.78"
  },
  {
    "id": "DG-073",
    "category": "dangerous-goods",
    "question": "What should be verified after unloading a leaking dangerous-goods shipment?",
    "answer": "Inspect the affected aircraft and equipment for contamination or damage and complete the required response before reuse.",
    "source": "49 CFR 175.75 and 175.78",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-175.78"
  },
  {
    "id": "DG-074",
    "category": "dangerous-goods",
    "question": "What is function-specific dangerous-goods training?",
    "answer": "Training for the transport duties an employee actually performs, such as acceptance, loading, documentation, or flightcrew notification.",
    "source": "49 CFR 172.704",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.704"
  },
  {
    "id": "DG-075",
    "category": "dangerous-goods",
    "question": "Does general awareness training alone qualify a person for every hazmat task?",
    "answer": "No. Function-specific, safety, security, and other applicable training must match the duties performed.",
    "source": "49 CFR 172.704",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.704"
  },
  {
    "id": "DG-076",
    "category": "dangerous-goods",
    "question": "Why must dangerous-goods training records be maintained?",
    "answer": "They demonstrate what training was provided, when, and by whom, and support verification that personnel are qualified for assigned functions.",
    "source": "49 CFR 172.704",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.704"
  },
  {
    "id": "DG-077",
    "category": "dangerous-goods",
    "question": "What should an employee do when asked to perform an unfamiliar hazmat task?",
    "answer": "Stop and obtain qualified assistance or required training. A supervisor's request does not create competence or authorization.",
    "source": "49 CFR 172.704",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.704"
  },
  {
    "id": "DG-078",
    "category": "dangerous-goods",
    "question": "Why does a no-carry airline still need dangerous-goods recognition procedures?",
    "answer": "Prohibited or undeclared material can still be offered in baggage or freight. Staff must recognize, reject, and respond correctly.",
    "source": "49 CFR 172.704",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-172.704"
  },
  {
    "id": "DG-079",
    "category": "dangerous-goods",
    "question": "How should procedures change when a carrier begins accepting dangerous-goods cargo?",
    "answer": "Obtain the required authorizations and trained personnel before acceptance; passenger exceptions do not establish a cargo program.",
    "source": "FAA OperateSafe — Air carrier dangerous-goods approval and OpSpec A055",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-080",
    "category": "dangerous-goods",
    "question": "Why should a suspected hazardous-materials release be reported promptly?",
    "answer": "Qualified responders need early warning, and specified events trigger immediate and written regulatory reports. Follow the operator's reporting chain without delaying urgent protection.",
    "source": "49 CFR 171.15 and 171.16",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-171.15"
  },
  {
    "id": "DG-081",
    "category": "dangerous-goods",
    "question": "Does a spill have to injure someone before it matters?",
    "answer": "No. Fire, leakage, contamination, undeclared shipments, and other events can require action or reporting even without injury.",
    "source": "49 CFR 171.15 and 171.16",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-171.15"
  },
  {
    "id": "DG-082",
    "category": "dangerous-goods",
    "question": "What information is useful in an initial dangerous-goods incident report?",
    "answer": "Location, aircraft or shipment identity, material if known, visible effects, exposure, and actions taken. Describe observations without inventing a chemical identity.",
    "source": "49 CFR 171.15 and 171.16",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-171.15"
  },
  {
    "id": "DG-083",
    "category": "dangerous-goods",
    "question": "Why should leaking packages and affected baggage not be handled casually?",
    "answer": "Contact can spread contamination and expose personnel. Isolate the area and obtain trained emergency-response assistance.",
    "source": "49 CFR 171.15 and 171.16",
    "sourceUrl": "https://www.ecfr.gov/current/title-49/section-171.15"
  },
  {
    "id": "DG-084",
    "category": "dangerous-goods",
    "question": "Why should responders be told when lithium batteries may be involved?",
    "answer": "Battery thermal runaway can continue or recur and requires appropriate cooling and containment procedures. Follow the aircraft's approved response.",
    "source": "FAA AC 120-80B — Lithium battery fire response",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-80B.pdf"
  },
  {
    "id": "DG-085",
    "category": "dangerous-goods",
    "question": "What should passengers do when a device becomes unusually hot or starts smoking?",
    "answer": "Notify the cabin crew immediately and stop using it. Do not hide it in a bag, seat pocket, or lavatory.",
    "source": "FAA AC 120-80B — Lithium battery fire response",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-80B.pdf"
  },
  {
    "id": "DG-086",
    "category": "dangerous-goods",
    "question": "Why is a device trapped in a powered seat mechanism hazardous?",
    "answer": "Moving the seat can crush the battery and initiate a fire. Notify the crew and avoid moving the mechanism until the approved procedure is followed.",
    "source": "FAA AC 120-80B — Lithium battery fire response",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-80B.pdf"
  },
  {
    "id": "DG-087",
    "category": "dangerous-goods",
    "question": "Why is extinguishing visible flames not necessarily the end of a lithium-battery event?",
    "answer": "Heat can propagate to other cells and reignition can occur. Continued monitoring and the approved cooling procedure remain necessary.",
    "source": "FAA AC 120-80B — Lithium battery fire response",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-80B.pdf"
  },
  {
    "id": "DG-088",
    "category": "dangerous-goods",
    "question": "Can a battery fire containment bag replace the aircraft's firefighting checklist?",
    "answer": "No. Use only approved equipment as directed; a bag does not eliminate heat, smoke, or the need for monitoring.",
    "source": "FAA AC 120-80B — Lithium battery fire response",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-80B.pdf"
  },
  {
    "id": "DG-089",
    "category": "dangerous-goods",
    "question": "Why should a crew avoid moving an actively burning battery device without guidance?",
    "answer": "Handling can cause burns, spread fire, or worsen battery damage. Follow the trained aircraft procedure and protect occupants first.",
    "source": "FAA AC 120-80B — Lithium battery fire response",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-80B.pdf"
  },
  {
    "id": "DG-090",
    "category": "dangerous-goods",
    "question": "Does a passenger-baggage exception authorize carriage of the same material as commercial cargo?",
    "answer": "No. Cargo acceptance requires its own classification, packaging, documentation, training, and operator authority.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-091",
    "category": "dangerous-goods",
    "question": "Why is an empty chemical drum not necessarily harmless cargo?",
    "answer": "Residue and vapors may remain regulated and hazardous. Assess it under the applicable empty-packaging provisions.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-092",
    "category": "dangerous-goods",
    "question": "What should an airline do with a shipment offered as laboratory samples?",
    "answer": "Have qualified staff determine classification and packaging requirements. The informal description does not establish that the samples are nonhazardous.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-093",
    "category": "dangerous-goods",
    "question": "Why should a repair shipment containing an installed fire extinguisher be assessed for dangerous goods?",
    "answer": "Aircraft parts can contain compressed gas, batteries, or other regulated contents. A maintenance purpose does not waive transport requirements.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-094",
    "category": "dangerous-goods",
    "question": "What is the acceptance concern with an oxygen generator shipped as an aircraft spare?",
    "answer": "It may present a serious oxidizing and heat-generating hazard and has specific transport restrictions. Refer it to qualified specialists rather than treating it as an empty cylinder.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-095",
    "category": "dangerous-goods",
    "question": "Why can a wet, stained, or odorous package warrant stopping loading?",
    "answer": "It may indicate leakage or undeclared hazardous contents. Keep personnel clear and invoke the operator's inspection and response process.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-096",
    "category": "dangerous-goods",
    "question": "Why should baggage personnel ask about a large quantity of loose consumer batteries?",
    "answer": "The personal-use exception and short-circuit protections may not apply to a commercial shipment disguised as baggage.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-097",
    "category": "dangerous-goods",
    "question": "What must be coordinated before transporting dry ice in multiple cargo packages?",
    "answer": "Total quantity, ventilation, permitted loading, package compliance, and flightcrew information as required. Individual package compliance alone may not establish safe carriage.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-098",
    "category": "dangerous-goods",
    "question": "Why must a pilot avoid inventing a neutralization method for an unknown chemical spill?",
    "answer": "Wrong chemicals or water can worsen the reaction. Use the approved emergency guidance and trained responders.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-099",
    "category": "dangerous-goods",
    "question": "What is a strong final dangerous-goods cross-check before departure?",
    "answer": "Match accepted packages, authorized loading positions, quantities, and the final pilot notification, resolving discrepancies before the flight begins.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "DG-100",
    "category": "dangerous-goods",
    "question": "Why should dangerous-goods rules be checked for the actual route and operator?",
    "answer": "State variations, carrier restrictions, and approvals can differ. A shipment accepted elsewhere is not automatically acceptable on this flight.",
    "source": "FAA OperateSafe for Air Carriers",
    "sourceUrl": "https://www.faa.gov/hazmat/air_carriers"
  },
  {
    "id": "P121-201",
    "category": "part-121",
    "question": "Why must an airline cockpit checklist be approved for the aircraft type?",
    "answer": "It must address the required safety checks and emergencies for that type, rather than rely on a generic checklist or memory alone.",
    "source": "14 CFR 121.315",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.315"
  },
  {
    "id": "P121-202",
    "category": "part-121",
    "question": "How should a crew resume a checklist interrupted by an ATC call?",
    "answer": "Use the carrier's interruption and restart technique, positively establishing the last completed item. Do not assume the other pilot finished it.",
    "source": "FAA AC 120-71B — SOP checklist interruption and resumption",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-71B.pdf"
  },
  {
    "id": "P121-203",
    "category": "part-121",
    "question": "Why must an airline crew verify passenger-information signs before taxi?",
    "answer": "Required signs communicate restraint and smoking restrictions. A verbal reminder does not automatically cure an inoperative required system.",
    "source": "14 CFR 121.317",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.317"
  },
  {
    "id": "P121-204",
    "category": "part-121",
    "question": "How should a crew address a report of lavatory smoke-detector tampering?",
    "answer": "Treat it as a safety and compliance issue, notify the appropriate crew, and follow the carrier's response and reporting procedures.",
    "source": "14 CFR 121.317",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.317"
  },
  {
    "id": "P121-205",
    "category": "part-121",
    "question": "Why does an airliner's public-address system need prompt accessibility?",
    "answer": "Crew must be able to communicate essential instructions to passengers during normal and emergency operation.",
    "source": "14 CFR 121.318",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.318"
  },
  {
    "id": "P121-206",
    "category": "part-121",
    "question": "What should happen when a required passenger announcement cannot be heard in part of the cabin?",
    "answer": "Identify the failure and apply the approved maintenance or abnormal procedure before relying on the system for safety instructions.",
    "source": "14 CFR 121.318",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.318"
  },
  {
    "id": "P121-207",
    "category": "part-121",
    "question": "Why is icing approval not permission to ignore abnormal accretion on propellers or wings?",
    "answer": "Required ice protection must be operated correctly, and conditions beyond capability require the approved escape or diversion response.",
    "source": "14 CFR 121.321",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.321"
  },
  {
    "id": "P121-208",
    "category": "part-121",
    "question": "Why should flight-data-recorder discrepancies be treated as aircraft status items?",
    "answer": "The applicable recorder installation and operation are required equipment matters; dispatch relief must come from approved provisions.",
    "source": "14 CFR 121.344",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.344"
  },
  {
    "id": "P121-209",
    "category": "part-121",
    "question": "What drives airline survival-equipment requirements over uninhabited terrain?",
    "answer": "The operation, route environment, and operations specifications determine the needed signaling and survival equipment. A normal domestic route assumption may be inadequate.",
    "source": "14 CFR 121.353",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.353"
  },
  {
    "id": "P121-210",
    "category": "part-121",
    "question": "Why should a carrier match survival kits to the route's climate?",
    "answer": "Equipment useful in one environment may not support survival after a remote landing in another. Apply the route-specific required provisions.",
    "source": "14 CFR 121.353",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.353"
  },
  {
    "id": "P121-211",
    "category": "part-121",
    "question": "Does a terrain-awareness display authorize descending below cleared or published altitudes?",
    "answer": "No. It supports awareness and warning; it is not a substitute for instrument procedures, clearance compliance, or approved escape guidance.",
    "source": "14 CFR 121.354",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.354"
  },
  {
    "id": "P121-212",
    "category": "part-121",
    "question": "What governs an airline crew's response to a terrain warning?",
    "answer": "The aircraft's approved warning-response procedure and carrier training. Diagnose only as directed without delaying a required escape maneuver.",
    "source": "Honeywell — Performance Assessment of Pilot Response to EGPWS, response to an EGPWS alert activation; applicable AFM",
    "sourceUrl": "https://aerospace.honeywell.com/content/dam/aerobt/en/documents/landing-pages/user-documentation/hon-aero-performance-assessment-of-pilot-response-to-egpws.pdf"
  },
  {
    "id": "P121-213",
    "category": "part-121",
    "question": "Does visual acquisition of traffic automatically cancel a TCAS resolution advisory?",
    "answer": "No. Follow the approved collision-avoidance response and ATC coordination procedure; visual identification can be incomplete or wrong.",
    "source": "FAA AIM 4-4-16 — Traffic Alert and Collision Avoidance System",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_4.html"
  },
  {
    "id": "P121-214",
    "category": "part-121",
    "question": "Why must crews know the difference between a traffic advisory and a resolution advisory?",
    "answer": "A traffic advisory promotes traffic awareness, while a resolution advisory commands or limits vertical maneuvering under the approved system procedure.",
    "source": "FAA AIM 4-4-16 — Traffic Alert and Collision Avoidance System",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_4.html"
  },
  {
    "id": "P121-215",
    "category": "part-121",
    "question": "What should an airline crew verify about windshear equipment before using its protection in planning?",
    "answer": "Applicable required equipment status and system limitations. Detection aids do not justify entering known hazardous windshear.",
    "source": "14 CFR 121.358",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.358"
  },
  {
    "id": "P121-216",
    "category": "part-121",
    "question": "Why must airline maintenance and flight operations coordinate deferred defects?",
    "answer": "The carrier's maintenance organization and operating crews have different responsibilities that must produce one accurate, compliant aircraft status.",
    "source": "14 CFR 121.365",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.365"
  },
  {
    "id": "P121-217",
    "category": "part-121",
    "question": "Why are airline maintenance procedures documented rather than improvised at the gate?",
    "answer": "The required manual defines methods, responsibilities, inspections, and records. Time pressure does not authorize an unofficial substitute.",
    "source": "14 CFR 121.369",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.369"
  },
  {
    "id": "P121-218",
    "category": "part-121",
    "question": "What is the purpose of an airline's continuing-analysis and surveillance system?",
    "answer": "To monitor maintenance-program performance and effectiveness and correct deficiencies. Repeated defects need systematic follow-up, not only individual repairs.",
    "source": "14 CFR 121.373",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.373"
  },
  {
    "id": "P121-219",
    "category": "part-121",
    "question": "Why must airline maintenance personnel receive training for their assigned work?",
    "answer": "The carrier must provide a program that keeps personnel competent for applicable duties, procedures, and equipment.",
    "source": "14 CFR 121.375",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.375"
  },
  {
    "id": "P121-220",
    "category": "part-121",
    "question": "Can a pilot assume any airline employee is authorized to release maintenance work?",
    "answer": "No. Maintenance and release authority depend on the applicable qualifications and carrier authorization, not job familiarity or seniority.",
    "source": "14 CFR 121.379",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.379"
  },
  {
    "id": "P121-221",
    "category": "part-121",
    "question": "Why should an airline crew resolve an ambiguous maintenance-record entry before accepting the airplane?",
    "answer": "The record must support a clear airworthiness status; an unclear entry may conceal an incomplete action, inspection, or limitation.",
    "source": "14 CFR 121.380",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.380"
  },
  {
    "id": "P121-222",
    "category": "part-121",
    "question": "May a cabin occupant leave a seatback reclined for takeoff because the flight is short?",
    "answer": "No. Passenger seatbacks must be upright for takeoff and landing except the rule’s specifically allowed circumstances. Apply the actual approved seating and operator procedures.",
    "source": "14 CFR 121.311(e)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.311"
  },
  {
    "id": "P121-223",
    "category": "part-121",
    "question": "When might an airline aircraft require a flight engineer in addition to pilots?",
    "answer": "When the airplane's type certification and applicable rule require that position. A two-pilot assumption does not apply to every design.",
    "source": "14 CFR 121.387",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.387"
  },
  {
    "id": "P121-224",
    "category": "part-121",
    "question": "How does airline transition training differ from upgrade training?",
    "answer": "Transition qualifies a crewmember for another airplane type in the applicable group and position; upgrade prepares an already qualified crewmember for a higher duty position.",
    "source": "14 CFR 121.400",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.400"
  },
  {
    "id": "P121-225",
    "category": "part-121",
    "question": "Can an airline informally shorten an approved training curriculum?",
    "answer": "No. Program changes and applicable reductions need the required FAA approval. Strong past performance alone does not authorize a shortcut.",
    "source": "14 CFR 121.405",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.405"
  },
  {
    "id": "P121-226",
    "category": "part-121",
    "question": "Why must a simulator be approved for the specific airline training task?",
    "answer": "A device's general realism does not establish that its qualification and approval cover the required maneuver or check.",
    "source": "14 CFR 121.407",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.407"
  },
  {
    "id": "P121-227",
    "category": "part-121",
    "question": "What is the benefit of line-oriented flight training for an airline crew?",
    "answer": "It practices realistic operational sequences and crew coordination in an approved simulator environment, connecting individual skills to line decisions.",
    "source": "14 CFR 121.409",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.409"
  },
  {
    "id": "P121-228",
    "category": "part-121",
    "question": "Why does an airline instructor need more than aircraft handling proficiency?",
    "answer": "Instructor training must develop the ability to teach, demonstrate, evaluate, and correct performance safely in the approved program.",
    "source": "14 CFR 121.413",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.413"
  },
  {
    "id": "P121-229",
    "category": "part-121",
    "question": "What performance-analysis skills should initial airline ground training develop for weight and balance?",
    "answer": "Pilots must be able to apply the airplane’s loading limits and operational performance data to the assigned operation, including relevant runway and environmental factors, rather than only recall the structural maximum weight.",
    "source": "14 CFR 121.419 — Pilots initial ground training",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.419"
  },
  {
    "id": "P121-230",
    "category": "part-121",
    "question": "What operational purpose does captain leadership and mentoring training serve?",
    "answer": "It develops command, communication, and mentoring skills that help the crew maintain safe standards and manage differing experience levels.",
    "source": "14 CFR 121.420",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.420"
  },
  {
    "id": "P121-231",
    "category": "part-121",
    "question": "Why must cabin-crew training match the actual airplane configuration?",
    "answer": "Exits, emergency equipment, seating, and evacuation duties differ. Qualification on another configuration does not establish knowledge of this one.",
    "source": "14 CFR 121.421",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.421"
  },
  {
    "id": "P121-232",
    "category": "part-121",
    "question": "Why does dispatcher training include airplane performance and limitations?",
    "answer": "Release decisions depend on runway, route, fuel, and equipment constraints. Dispatch cannot be based solely on weather and scheduling.",
    "source": "14 CFR 121.422",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.422"
  },
  {
    "id": "P121-233",
    "category": "part-121",
    "question": "What does consolidation of airline operating experience seek to accomplish?",
    "answer": "It reinforces recently learned type-specific skills through required line flying within the applicable period, subject to authorized alternatives.",
    "source": "14 CFR 121.434",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.434"
  },
  {
    "id": "P121-234",
    "category": "part-121",
    "question": "What operations familiarization is required for covered newly hired airline pilots before operating experience?",
    "answer": "At least two operating cycles observed from the flight-deck observer seat with an operational headset, unless an approved deviation applies. Apply the section’s applicability provisions.",
    "source": "14 CFR 121.435",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.435"
  },
  {
    "id": "P121-235",
    "category": "part-121",
    "question": "A pilot flies two airline airplane types. Does a proficiency check in one automatically establish checking eligibility for both?",
    "answer": "No. Apply the type-specific check requirements and any authorized alternative program provisions. A current check date in one type does not by itself establish qualification in the other.",
    "source": "14 CFR 121.441",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.441"
  },
  {
    "id": "P121-236",
    "category": "part-121",
    "question": "Why must a flight engineer retain type-specific recent competence?",
    "answer": "The position has its own experience or checking requirements. Pilot qualifications alone do not establish current flight-engineer qualification.",
    "source": "14 CFR 121.453",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.453"
  },
  {
    "id": "P121-237",
    "category": "part-121",
    "question": "Why must an airline provide operational notices to relevant employees promptly?",
    "answer": "Changes to equipment, procedures, facilities, or hazards affect decisions before the next manual revision. Personnel need current operational information.",
    "source": "14 CFR 121.539",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.539"
  },
  {
    "id": "P121-238",
    "category": "part-121",
    "question": "Who must ensure adequate navigation and approach charts are aboard an airline flight?",
    "answer": "The PIC must ensure appropriate charts containing adequate navigation-aid and instrument-approach information are aboard for each flight.",
    "source": "14 CFR 121.549(a)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.549"
  },
  {
    "id": "P121-239",
    "category": "part-121",
    "question": "May an unqualified flight-deck observer manipulate airline aircraft controls as a courtesy?",
    "answer": "No. Manipulation is restricted to the persons and circumstances the rule authorizes. Cockpit access is not control authority.",
    "source": "14 CFR 121.545",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.545"
  },
  {
    "id": "P121-240",
    "category": "part-121",
    "question": "Does each airline crewmember need a usable flashlight available on a daylight flight?",
    "answer": "Yes. Each crewmember must have a flashlight in good working order readily available on each flight; unexpected darkness or smoke can make it essential.",
    "source": "14 CFR 121.549(b)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.549"
  },
  {
    "id": "P121-241",
    "category": "part-121",
    "question": "Does an airline's approval for an airport authorize every route into it?",
    "answer": "No. Domestic and flag flights must comply with approved routes and limitations, except for the rule's authorized circumstances.",
    "source": "14 CFR 121.555",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.555"
  },
  {
    "id": "P121-242",
    "category": "part-121",
    "question": "Why should an airline approach keep specified IFR minimum altitudes until descent is authorized?",
    "answer": "A visual impression or apparent shortcut does not provide the terrain and obstacle protection built into the applicable altitude requirements.",
    "source": "14 CFR 121.567",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.567"
  },
  {
    "id": "P121-243",
    "category": "part-121",
    "question": "Why can aircraft interchange between airlines require additional familiarization?",
    "answer": "The agreement must address approved procedures, personnel training, route qualifications, and potentially hazardous cockpit differences. Similar paint or model names do not establish interchangeable procedures.",
    "source": "14 CFR 121.569",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.569"
  },
  {
    "id": "P121-244",
    "category": "part-121",
    "question": "Why must a passenger's portable oxygen concentrator be assessed before airline use?",
    "answer": "It must satisfy applicable device, stowage, battery, and use conditions. Personal medical need alone does not establish aircraft compatibility.",
    "source": "14 CFR 121.574",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.574"
  },
  {
    "id": "P121-245",
    "category": "part-121",
    "question": "Does carrying authorized nonpassenger personnel on a cargo flight make all passenger rules irrelevant?",
    "answer": "No. Only specified exceptions apply, with conditions and briefing requirements. Identify the person's status and the actual relief permitted.",
    "source": "14 CFR 121.583",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.583"
  },
  {
    "id": "P121-246",
    "category": "part-121",
    "question": "Why should a delayed airline flight reassess destination forecast timing?",
    "answer": "The forecast must support the revised estimated arrival under the applicable rule and authorizations. An earlier release package may no longer match the flight.",
    "source": "14 CFR 121.613",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.613"
  },
  {
    "id": "P121-247",
    "category": "part-121",
    "question": "Why should a supplemental crew distinguish its alternate rule from the domestic airline rule?",
    "answer": "The applicable operational category has its own alternate provisions. Familiar domestic practices are not automatic supplemental authority.",
    "source": "14 CFR 121.623",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.623"
  },
  {
    "id": "P121-248",
    "category": "part-121",
    "question": "Why must a supplemental release amendment be coordinated and recorded?",
    "answer": "A changed destination or alternate must meet the applicable weather, fuel, and release conditions through the authorized operational-control system.",
    "source": "14 CFR 121.637",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.637"
  },
  {
    "id": "P121-249",
    "category": "part-121",
    "question": "Who is responsible for accurate airline load-manifest preparation and signing?",
    "answer": "The certificate holder must ensure preparation and signing by authorized qualified personnel under its approved system. The crew must use the resulting accurate loading information.",
    "source": "14 CFR 121.665",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.665"
  },
  {
    "id": "P121-250",
    "category": "part-121",
    "question": "Why should crews report recurring minor mechanical interruptions rather than normalize them?",
    "answer": "The carrier uses required reports and maintenance analysis to detect trends. A recurring discrepancy can signal a larger safety problem.",
    "source": "14 CFR 121.705",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-121.705"
  },
  {
    "id": "IFR-151",
    "category": "ifr",
    "question": "What does RNAV (RNP) in an approach title signal to a pilot?",
    "answer": "An RNP authorization-required procedure with specific aircraft, operator, and training requirements. Ordinary IFR GPS approval is insufficient.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-152",
    "category": "ifr",
    "question": "Why must an RF leg be checked against the installed navigator's approval?",
    "answer": "A radius-to-fix path requires supported functionality and the applicable procedure authorization. A displayed curved line does not prove approval.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-153",
    "category": "ifr",
    "question": "Can a pilot manually build missing approach waypoints to replace an unavailable database procedure?",
    "answer": "No. Do not substitute a manually constructed approach for the required current, retrievable approved procedure.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-154",
    "category": "ifr",
    "question": "What should be checked when a navigator downgrades from LPV to LNAV before final?",
    "answer": "Available authorized minima, required equipment, weather, and a stable rebriefed plan. Do not continue using the original LPV DA.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-155",
    "category": "ifr",
    "question": "Why should approach availability be checked independently of the destination METAR?",
    "answer": "Navigation outages, satellite limitations, database issues, and procedural NOTAMs can make an otherwise weather-suitable approach unavailable.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-156",
    "category": "ifr",
    "question": "What should a pilot do when cleared direct to a waypoint that is not a permitted approach entry?",
    "answer": "Clarify the clearance and preserve obstacle protection. A direct clearance does not authorize skipping required altitude or segment conditions.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-157",
    "category": "ifr",
    "question": "Why are vectors to final and selecting vectors-to-final in a navigator separate decisions?",
    "answer": "The ATC clearance and the navigator's sequencing behavior must agree. Some selections remove fixes needed for subsequent clearance changes.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-158",
    "category": "ifr",
    "question": "What should be checked before accepting a shortened approach intercept?",
    "answer": "Distance to configure, intercept geometry, altitude, required fixes, and navigator sequencing. Decline if it prevents a stabilized legal approach.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-159",
    "category": "ifr",
    "question": "What does an approach's equipment note control?",
    "answer": "The equipment or capability necessary to fly the procedure or a particular minima line. The chart title alone is not a complete equipment assessment.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-160",
    "category": "ifr",
    "question": "Why should a charted localizer frequency be identified rather than merely tuned?",
    "answer": "Identification confirms the intended operating facility and reduces the risk of following the wrong or unreliable signal.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-161",
    "category": "ifr",
    "question": "Why should a pilot check the charted localizer service-volume limits before tracking an extended final?",
    "answer": "Useful signal coverage is not unlimited. Outside the authorized service volume, apparent guidance may not provide the protection expected; use approved routing and guidance within its limits.",
    "source": "FAA AIM 1-1-9 — Instrument Landing System",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "IFR-162",
    "category": "ifr",
    "question": "What should a pilot do if the final approach course shown in the navigator disagrees with the chart?",
    "answer": "Resolve the discrepancy before using the guidance. Check procedure version, runway, transitions, and equipment state rather than choosing the preferred display.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-163",
    "category": "ifr",
    "question": "What is the operational meaning of a charted visual segment being unavailable or restricted?",
    "answer": "Do not assume normal visual descent protection from the instrument segment. Review notes, visibility, lighting, and the approved landing plan.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-164",
    "category": "ifr",
    "question": "Why should a circling restriction be checked for runway and sector rather than only category?",
    "answer": "Terrain, obstacles, or noise restrictions may prohibit a direction or area even when the aircraft's category has published minima.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-165",
    "category": "ifr",
    "question": "What should a pilot verify when an approach requires radar?",
    "answer": "That the required radar service is available for the applicable part of the procedure. The label is an operating requirement, not merely a suggestion.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-166",
    "category": "ifr",
    "question": "Why should an alternate approach be briefed before arriving in deteriorating weather?",
    "answer": "It reduces workload if the planned navigation service, runway, or minima become unavailable. Preserve fuel and authorization for the backup.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-167",
    "category": "ifr",
    "question": "What does a PRM approach require beyond an ordinary parallel ILS?",
    "answer": "Applicable training, briefing, equipment, and monitoring procedures. Follow the Attention All Users page and published breakout requirements.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-168",
    "category": "ifr",
    "question": "How should a PRM breakout instruction be treated?",
    "answer": "Respond promptly under the prescribed procedure; it differs from a routine published missed approach and is intended to avoid adjacent traffic.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-169",
    "category": "ifr",
    "question": "Why can an aircraft with excellent climb performance still be unsuitable for a particular missed approach?",
    "answer": "The required navigation capability, climb gradient, speed, and obstacle assumptions must all be satisfied, not only engine power.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-170",
    "category": "ifr",
    "question": "What should be done if the missed-approach climb gradient cannot be met at the planned weight?",
    "answer": "Choose another authorized minima line or procedure, reduce weight, or change the plan before starting the approach. Do not discover the limitation at DA.",
    "source": "FAA AIM, chapter 5 section 4",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-171",
    "category": "ifr",
    "question": "What should a pilot check when a departure has a climb gradient only to a specified altitude?",
    "answer": "Meet the specified gradient through that altitude, then use the remaining published and cleared requirements. Do not assume the special gradient ends at an arbitrary height.",
    "source": "FAA AIM, departure and en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-172",
    "category": "ifr",
    "question": "Why can a tailwind make an obstacle departure harder despite improving groundspeed?",
    "answer": "More distance is covered per minute, so a given climb rate produces fewer feet per nautical mile. Check the required gradient using actual groundspeed.",
    "source": "FAA AIM, departure and en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-173",
    "category": "ifr",
    "question": "What should a pilot do if a clearance assigns a departure runway different from the loaded procedure?",
    "answer": "Reconcile the clearance, chart, performance, and navigator before takeoff. A correct procedure for another runway can be unsafe.",
    "source": "FAA AIM, departure and en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-174",
    "category": "ifr",
    "question": "Why should a departure briefing include a return-to-land option?",
    "answer": "Low departure weather, high weight, and approach availability may prevent an immediate return. Identify a practical failure plan before entering IMC.",
    "source": "FAA AIM, departure and en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-175",
    "category": "ifr",
    "question": "What should a pilot verify when ATC assigns an altitude below a published departure restriction?",
    "answer": "Clarify whether the clearance changes the procedure and ensure obstacle protection. Do not silently discard an unresolved restriction.",
    "source": "FAA AIM, departure and en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-176",
    "category": "ifr",
    "question": "Can a departure obstacle note about a close-in obstacle be ignored because a climb gradient is published?",
    "answer": "No. Review all notes and account for obstacles near the departure end; a gradient alone may not address every listed exposure.",
    "source": "FAA AIM, departure and en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-177",
    "category": "ifr",
    "question": "Why should a pilot avoid head-down programming while rolling for an IFR departure?",
    "answer": "Runway alignment, clearances, control, and traffic need attention. Stop or delay departure to complete unresolved programming.",
    "source": "FAA AIM, departure and en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-178",
    "category": "ifr",
    "question": "What should be checked before accepting a departure requiring an immediate turn?",
    "answer": "Aircraft performance, bank and speed limits, turn altitude, navigation capability, and terrain. State unable if the clearance cannot be met safely.",
    "source": "FAA AIM, departure and en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-179",
    "category": "ifr",
    "question": "Why can an IFR clearance received on the ground still require coordination before takeoff?",
    "answer": "Release, void-time, and clearance conditions may restrict when departure is authorized. Read the full clearance rather than assuming immediate release.",
    "source": "FAA AIM, departure and en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-180",
    "category": "ifr",
    "question": "How does a departure climb-in-visual-conditions instruction change a pilot’s responsibilities?",
    "answer": "Accept only when the specified visual conditions, terrain clearance, aircraft capability, and ATC conditions can be maintained. It is not an instruction to enter cloud below protected IFR altitudes.",
    "source": "FAA AIM 5-2 — Climb in visual conditions",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_2.html"
  },
  {
    "id": "IFR-181",
    "category": "ifr",
    "question": "What does cruise in an IFR altitude clearance permit?",
    "answer": "Operation within the authorized altitude block up to the stated altitude and descent under the applicable conditions. Once reporting leaving an altitude, do not return without clearance.",
    "source": "FAA AIM, en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html"
  },
  {
    "id": "IFR-182",
    "category": "ifr",
    "question": "How does a block-altitude clearance differ from clearance to a single level?",
    "answer": "It authorizes operations within the specified altitude range. Stay within its limits and comply with any additional conditions.",
    "source": "FAA AIM, en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html"
  },
  {
    "id": "IFR-183",
    "category": "ifr",
    "question": "What should a pilot do if an assigned hold exceeds the aircraft's usable fuel margin?",
    "answer": "Advise ATC promptly, state the limitation, and arrange another clearance or diversion before reserves become critical.",
    "source": "FAA AIM, en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html"
  },
  {
    "id": "IFR-184",
    "category": "ifr",
    "question": "Why should a pilot check holding-leg units before loading a hold?",
    "answer": "A clearance may specify time or distance, and a wrong entry changes the protected path. Confirm units, direction, and fix.",
    "source": "FAA AIM, en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html"
  },
  {
    "id": "IFR-185",
    "category": "ifr",
    "question": "What should a pilot do when the clearance and database hold direction disagree?",
    "answer": "Follow the clarified ATC clearance using supported navigation and protected geometry; do not assume the database is the assigned hold.",
    "source": "FAA AIM, en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html"
  },
  {
    "id": "IFR-186",
    "category": "ifr",
    "question": "Why can a direct clearance across an airway change terrain considerations?",
    "answer": "Published airway protection does not automatically extend to every off-airway direct segment. Confirm the cleared altitude is appropriate and query concerns.",
    "source": "FAA AIM, en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html"
  },
  {
    "id": "IFR-187",
    "category": "ifr",
    "question": "What should be done if a turn to an assigned heading would enter severe weather?",
    "answer": "Advise ATC immediately and request or exercise the appropriate deviation authority. An assigned heading does not remove the pilot's safety responsibility.",
    "source": "FAA AIM, en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html"
  },
  {
    "id": "IFR-188",
    "category": "ifr",
    "question": "Why should an IFR pilot request a weather deviation early?",
    "answer": "It preserves routing and separation options before the hazard forces an urgent turn. Specify the needed direction and distance when possible.",
    "source": "FAA AIM, en route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html"
  },
  {
    "id": "IFR-189",
    "category": "ifr",
    "question": "How does maintain until established constrain descent when cleared for an approach?",
    "answer": "Keep the assigned altitude until established on the cleared published route or segment as specified, then follow the clearance and applicable published altitudes. A visible magenta line alone does not establish authorization to descend.",
    "source": "FAA AIM 5-4-6 — Approach Clearance",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html"
  },
  {
    "id": "IFR-190",
    "category": "ifr",
    "question": "Does an expected altitude stated in an IFR clearance authorize climbing to it when the stated time arrives?",
    "answer": "No. An expect instruction is planning information, not a clearance to change altitude. Obtain an actual clearance unless an applicable lost-communications rule governs.",
    "source": "FAA AIM 5-3 — En route procedures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_3.html"
  },
  {
    "id": "IFR-191",
    "category": "ifr",
    "question": "Why should an instrument cross-check use independent sources after a display disagreement?",
    "answer": "Several indications can share one failed sensor. Identify source independence before voting for the majority display.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "IFR-192",
    "category": "ifr",
    "question": "What should a pilot do when the standby attitude source disagrees with the primary display?",
    "answer": "Maintain control with verified references, compare independent information, and use the aircraft's failure-identification procedure rather than chasing both displays.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "IFR-193",
    "category": "ifr",
    "question": "Why must pitot heat status be checked before an icing exposure?",
    "answer": "A failed or unpowered heating system can allow airspeed corruption before visible airframe icing becomes obvious. Follow the approved operating procedure.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "IFR-194",
    "category": "ifr",
    "question": "Why should an IFR pilot practice flying with the flight director removed?",
    "answer": "Misleading or unavailable guidance must not eliminate basic instrument control. Practice with an instructor in an appropriate training environment.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "IFR-195",
    "category": "ifr",
    "question": "How can an autopilot mask deteriorating performance in icing?",
    "answer": "It may trim or change attitude while maintaining a selected target, delaying recognition of increasing drag or reduced margins. Monitor performance and follow the icing procedure.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "IFR-196",
    "category": "ifr",
    "question": "What should a pilot do after an unexpected autopilot disconnect in IMC?",
    "answer": "Take positive manual control, establish a safe attitude and power, then identify the cause and reduce workload with ATC assistance as needed.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "IFR-197",
    "category": "ifr",
    "question": "Why should a navigator's active leg be checked after a missed approach starts?",
    "answer": "The displayed course may still reference the final segment or suspended sequencing. Verify the intended missed-approach path before following it.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "IFR-198",
    "category": "ifr",
    "question": "Why is a timer not a substitute for identifying the correct final approach fix?",
    "answer": "Timing assumptions depend on the correct starting point and groundspeed. An early start can produce an early, unprotected descent or missed approach.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "IFR-199",
    "category": "ifr",
    "question": "Why should a pilot brief avionics failure before single-pilot IFR departure?",
    "answer": "It creates a usable plan for reduced equipment, routing, and landing while workload is low, rather than improvising after the failure.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "IFR-200",
    "category": "ifr",
    "question": "What should an IFR pilot do if workload prevents a safe checklist or approach briefing?",
    "answer": "Ask for delay, vectors, a hold, or another clearance while keeping control. Preserve a stable setup before committing to the next phase.",
    "source": "FAA Instrument Flying Handbook",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_flying_handbook"
  },
  {
    "id": "WX-101",
    "category": "weather",
    "question": "Why does an automated weather station sometimes miss a nearby thunderstorm affecting the route?",
    "answer": "It samples a limited location and its sensors have detection limits. Combine observations with radar, satellite, advisories, and pilot reports.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-102",
    "category": "weather",
    "question": "How should a pilot interpret a METAR ending with a dollar sign?",
    "answer": "It indicates the automated system needs maintenance. Assess the reported elements and obtain additional information rather than assuming every value is invalid.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-103",
    "category": "weather",
    "question": "What does AUTO tell you about a METAR?",
    "answer": "The report is fully automated without human augmentation. Understand sensor coverage and limitations when evaluating nearby weather.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-104",
    "category": "weather",
    "question": "Why can missing weather groups in an automated report be important?",
    "answer": "A sensor or observation element may be unavailable. An absent value is not evidence of favorable conditions.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-105",
    "category": "weather",
    "question": "What does CAVOK in an international observation summarize?",
    "answer": "Specified good visibility, no significant weather, and no operationally significant cloud under the reporting criteria. It is not simply another spelling of clear skies.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-106",
    "category": "weather",
    "question": "What does a variable wind direction group add to a METAR?",
    "answer": "It gives the directional range observed when the reporting criteria are met, helping identify changing crosswind exposure.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-107",
    "category": "weather",
    "question": "Why should a pilot check true versus magnetic reference when comparing weather wind with a runway?",
    "answer": "Coded METAR wind uses true direction, while runway numbers generally reflect magnetic direction. Convert consistently before calculating a precise component; spoken airport wind may use a different reference.",
    "source": "FAA-H-8083-28B — Surface observations",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-108",
    "category": "weather",
    "question": "What should a pilot infer from a rapid visibility drop at successive stations along the route?",
    "answer": "The deterioration may be moving or expanding. Reassess timing and escape options instead of relying on the destination's last good report.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-109",
    "category": "weather",
    "question": "Why can an airport's reported ceiling be unsuitable for a nearby ridge route?",
    "answer": "Ceilings reference the reporting airport, while terrain elevations and local cloud differ. Evaluate terrain clearance along the actual route.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-110",
    "category": "weather",
    "question": "How does a forecast valid time differ from its issue time?",
    "answer": "Issue time says when the forecast was produced; valid time says when the conditions apply. Both matter to currency and flight timing.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-111",
    "category": "weather",
    "question": "Why should a weather briefing be refreshed after a long ground delay?",
    "answer": "The relevant forecast period, hazards, and observations may have changed. Reevaluate departure, route, destination, and alternates for the new schedule.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-112",
    "category": "weather",
    "question": "What does an amended TAF signal for planning?",
    "answer": "The forecaster has revised the forecast. Review the changed conditions and timing rather than continuing with a saved earlier version.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-113",
    "category": "weather",
    "question": "Why is a forecast probability not a guarantee that a hazard will stay absent?",
    "answer": "A lower probability still permits occurrence, and consequences may be severe. Plan an acceptable escape if the event develops.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-114",
    "category": "weather",
    "question": "What does a surface analysis show that a single airport report cannot?",
    "answer": "The larger pressure, frontal, and air-mass pattern helps explain weather movement and development beyond one observation point.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-115",
    "category": "weather",
    "question": "Why should forecast fronts not be treated as precise lines at the forecast hour?",
    "answer": "Position and timing contain uncertainty, and hazardous weather can extend away from the boundary. Build time and route margins.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-116",
    "category": "weather",
    "question": "What does a trough depict on a weather analysis?",
    "answer": "An elongated region of relatively low pressure, often associated with convergence and changing weather. Its effects depend on moisture and stability.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-117",
    "category": "weather",
    "question": "How can a ridge of high pressure still present flying hazards?",
    "answer": "Stagnant air, fog, haze, inversions, or terrain winds may coexist with high pressure. Check actual visibility and vertical structure.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-118",
    "category": "weather",
    "question": "Why should winds aloft be checked at more than the cruise altitude?",
    "answer": "Departure, descent, turbulence, icing escape, and diversions may use other layers. One altitude can hide a strong shear or unfavorable return wind.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-119",
    "category": "weather",
    "question": "What does a large temperature change with a small altitude change suggest?",
    "answer": "A strong lapse-rate change or inversion may alter stability, cloud, icing, and wind shear. Examine the full vertical profile.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-120",
    "category": "weather",
    "question": "Why is wet-bulb temperature useful when assessing winter precipitation?",
    "answer": "It represents cooling by evaporation toward saturation. A dry layer can cool as precipitation falls, changing whether rain, snow, or freezing conditions develop.",
    "source": "FAA-H-8083-28B — Atmospheric moisture and precipitation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-121",
    "category": "weather",
    "question": "How can a warm layer aloft change a winter precipitation decision?",
    "answer": "Melting precipitation followed by a subfreezing layer can create freezing rain or ice pellets. Surface temperature alone does not establish safe conditions.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-122",
    "category": "weather",
    "question": "Why should icing escape plans consider terrain as well as warmer air?",
    "answer": "A descent may enter terrain or lower cloud, and a climb may be beyond performance. Choose an escape that is both meteorologically and operationally usable.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-123",
    "category": "weather",
    "question": "Why can a high-altitude jet encounter engine icing with little airframe ice?",
    "answer": "Ice crystals can affect the engine while other visible cues are limited. Follow type-specific guidance and avoid the hazardous convective environment.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-124",
    "category": "weather",
    "question": "Why can cold-soaked fuel support ice formation on a wing when ambient air is above freezing?",
    "answer": "The wing skin can remain below freezing and freeze moisture. Use the approved contamination inspection and removal procedure.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-125",
    "category": "weather",
    "question": "Why does freezing fog deserve an aircraft contamination check?",
    "answer": "Supercooled droplets can freeze on exposed surfaces even without snowfall. Do not equate light precipitation with a clean aircraft.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-126",
    "category": "weather",
    "question": "What is virga, and why is it operationally relevant?",
    "answer": "Precipitation evaporating before reaching the surface can accompany strong downdrafts and gusty outflow. A dry surface does not imply smooth air below it.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-127",
    "category": "weather",
    "question": "Why can a dry microburst be difficult to recognize visually?",
    "answer": "Little or no rain reaches the surface, although strong descending air and outflow remain. Use warnings, reports, and conservative avoidance.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-128",
    "category": "weather",
    "question": "Why can an outflow boundary create a hazard away from the parent storm?",
    "answer": "It can shift and accelerate surface wind, produce turbulence, and trigger new convection. Track boundary movement as well as storm cores.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-129",
    "category": "weather",
    "question": "What does rapid vertical cloud growth tell a pilot watching a planned VFR route?",
    "answer": "Convective conditions are developing. Reassess promptly before cloud, turbulence, or precipitation closes the escape options.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-130",
    "category": "weather",
    "question": "Why can several weak cells combine into a more hazardous line?",
    "answer": "New development and interacting outflows can close gaps and create stronger wind or turbulence. A gap assessment must account for evolution.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-131",
    "category": "weather",
    "question": "Why does airborne radar show precipitation more reliably than clear-air turbulence?",
    "answer": "Radar reflectivity depends on suitable particles. Severe motion without strong precipitation may produce little useful return.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-132",
    "category": "weather",
    "question": "How can radar beam height cause distant low-level precipitation to be missed?",
    "answer": "The beam rises relative to the earth and can pass above shallow weather at long range. A weak or absent distant return does not establish that the lower flightpath is clear.",
    "source": "FAA-H-8083-28B — Weather radar limitations",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-133",
    "category": "weather",
    "question": "Why can snow and dry hail appear weaker on weather radar than liquid rain?",
    "answer": "Different particles reflect radar energy differently. Reflectivity color alone does not establish the full hazard severity.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-134",
    "category": "weather",
    "question": "Why is radar range selection part of strategic weather planning?",
    "answer": "A short range can hide the larger system and escape routes; a long range can obscure local detail. Use a useful combination of views.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-135",
    "category": "weather",
    "question": "What should a pilot consider when satellite imagery shows cold cloud tops?",
    "answer": "High cloud may indicate deep convection, but imagery alone does not establish turbulence, precipitation, or the safety of a gap below.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-136",
    "category": "weather",
    "question": "Why can infrared satellite imagery be misleading for low fog at night?",
    "answer": "Small temperature contrast between cloud and ground can make low cloud difficult to distinguish. Use appropriate products and surface observations.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-137",
    "category": "weather",
    "question": "What is the value of visible satellite imagery for a daytime VFR route?",
    "answer": "It shows cloud patterns and development, but cannot by itself give precise cloud bases or prove that the route beneath is VFR.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-138",
    "category": "weather",
    "question": "Why should an icing forecast be compared with recent pilot reports?",
    "answer": "Reports provide actual sampled conditions and aircraft responses, while forecasts provide broader coverage. Consider report time, altitude, position, and aircraft type.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-139",
    "category": "weather",
    "question": "Does an absence of PIREPs prove that a forecast hazard did not occur?",
    "answer": "No. Few aircraft may have sampled the area or reported. Treat lack of reports as missing evidence, not proof of safety.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-140",
    "category": "weather",
    "question": "Why can a light-airplane turbulence report differ from an airliner's experience?",
    "answer": "Aircraft response depends on size, speed, configuration, and loading. Read the aircraft type and intensity description before applying the report.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-141",
    "category": "weather",
    "question": "What should a pilot do when actual conditions are materially worse than forecast?",
    "answer": "Make an early safe change, obtain updated information, and report useful observations. The forecast does not justify continuing into an unsafe situation.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-142",
    "category": "weather",
    "question": "Why should alternate weather be monitored during flight rather than only before departure?",
    "answer": "A backup airport can deteriorate or become unavailable. Preserve a current usable alternative and the fuel to reach it.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-143",
    "category": "weather",
    "question": "Why should a coastal fog forecast include wind direction and sea-surface effects?",
    "answer": "Moisture transport and cold surfaces can sustain or move fog despite daytime heating inland.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-144",
    "category": "weather",
    "question": "Why can snow-covered terrain promote persistent cold and low cloud?",
    "answer": "High reflectivity and weak surface heating can limit warming and mixing. Improvement may be slower than on nearby bare ground.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-145",
    "category": "weather",
    "question": "How can smoke affect a flight even when the ceiling is unlimited?",
    "answer": "Visibility and terrain contrast can be poor, and smoke layers may conceal obstacles. Evaluate the visual environment and escape options.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-146",
    "category": "weather",
    "question": "Why should volcanic ash be avoided even when it resembles ordinary haze?",
    "answer": "Ash can abrade surfaces, contaminate systems, and damage engines. Use advisories and approved avoidance procedures rather than visual identification alone.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-147",
    "category": "weather",
    "question": "Why are weather hazards not bounded by state or forecast-product borders?",
    "answer": "Atmospheric systems cross administrative boundaries. Combine adjacent products and observations for the complete route.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-148",
    "category": "weather",
    "question": "What should a weather plan say about the latest safe diversion decision?",
    "answer": "Identify observable triggers and fuel or terrain commitment points before the flight. A usable early option may disappear if the decision is delayed.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-149",
    "category": "weather",
    "question": "Why should a pilot compare forecast timing uncertainty with fuel endurance?",
    "answer": "A forecast improvement arriving late may consume the available holding or diversion margin. Plan for a credible delay, not only the best timing.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "WX-150",
    "category": "weather",
    "question": "What makes a postflight weather review useful?",
    "answer": "Compare the forecast, actual observations, and decisions to identify recurring interpretation errors and improve future planning rather than merely judging whether the flight succeeded.",
    "source": "FAA-H-8083-28B Aviation Weather Handbook",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  {
    "id": "SYS-021",
    "category": "systems",
    "question": "What does a piston-engine primer do during starting?",
    "answer": "It delivers extra fuel for starting, often directly to the induction ports. Use the specified amount and lock it afterward; an unsecured primer can cause unintended fuel flow.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Starting system",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-022",
    "category": "systems",
    "question": "A fuel-injected piston engine has no carburetor. Is induction icing impossible?",
    "answer": "No. Ice can obstruct an air inlet or filter. Use the approved alternate-air procedure and distinguish inlet blockage from carburetor icing.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Fuel injection and induction",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-023",
    "category": "systems",
    "question": "What is the purpose of an engine alternate-air inlet?",
    "answer": "It supplies induction air when the normal inlet is blocked. Depending on the installation, alternate air may be warmer or unfiltered and can change available power.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Induction systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-024",
    "category": "systems",
    "question": "Why can a fuel-injected engine still be difficult to start when hot?",
    "answer": "Heat can vaporize fuel in parts of the injection system. Apply the aircraft-specific hot-start procedure instead of repeatedly adding fuel or improvising throttle positions.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Fuel injection",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-025",
    "category": "systems",
    "question": "What does a turbocharger wastegate regulate?",
    "answer": "It controls how much exhaust bypasses the turbine, thereby regulating turbocharger speed and compressor output. Pilot actions and limits depend on whether control is manual or automatic.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Turbocharging",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-026",
    "category": "systems",
    "question": "How does turbo-normalizing differ conceptually from turbo-supercharging?",
    "answer": "Turbo-normalizing maintains approximately sea-level manifold pressure to altitude; other boosted systems may produce pressure above sea-level atmospheric pressure. Use the installed engine’s approved limits.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Turbocharging",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-027",
    "category": "systems",
    "question": "What is a turbocharged engine’s critical altitude?",
    "answer": "The highest altitude at which the specified manifold pressure or rated power can be maintained under stated conditions. Above it, available power begins to decrease despite full permitted boost.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Turbocharging",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-028",
    "category": "systems",
    "question": "Why is an intercooler useful on a turbocharged piston engine?",
    "answer": "Compression heats the induction air. Cooling that air increases its density and helps reduce engine temperature and detonation risk within the approved operating limits.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Turbocharging",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-029",
    "category": "systems",
    "question": "Why must a turbocharged piston pilot avoid rapid, excessive throttle advancement?",
    "answer": "Manifold pressure can exceed limits, especially in systems without automatic protection. Move controls and monitor engine indications as specified by the POH.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Turbocharging",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-030",
    "category": "systems",
    "question": "What do engine cooling baffles accomplish?",
    "answer": "They direct cooling air around the cylinders and other hot components. Missing seals or damaged baffles can produce overheating even when outside air is cool.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Cooling systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-031",
    "category": "systems",
    "question": "How do cowl flaps influence engine cooling and drag?",
    "answer": "Opening them generally increases cooling airflow and drag. Set them according to the engine temperature limits and the aircraft’s climb, cruise, and descent procedures.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Cooling systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-032",
    "category": "systems",
    "question": "Why is exhaust-gas temperature not the same measurement as cylinder-head temperature?",
    "answer": "EGT measures exhaust gas conditions; CHT reflects cylinder-head temperature. They serve different monitoring purposes, so a normal EGT does not establish that the cylinder is cool enough.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Engine instruments",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-033",
    "category": "systems",
    "question": "What effect can very cold oil have on a piston-engine lubrication system?",
    "answer": "High viscosity can produce high indicated pressure while restricting effective circulation. Observe the POH warm-up and temperature requirements before high power; pressure alone does not establish that the engine is ready.",
    "source": "FAA PHAK, chapter 7, Oil Systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-034",
    "category": "systems",
    "question": "Why can oil quantity change depending on when it is checked?",
    "answer": "Oil can remain distributed through the engine after operation and return to the sump over time. Use the POH’s checking conditions and do not automatically fill above the approved level.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Lubrication systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-035",
    "category": "systems",
    "question": "What is the purpose of an oil cooler?",
    "answer": "It transfers heat from engine oil to cooling air or another cooling medium. A blockage or airflow problem can raise oil temperature without an immediate loss of oil quantity.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Lubrication systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-036",
    "category": "systems",
    "question": "During a magneto check, one ignition selection produces excessive roughness. What does that mean?",
    "answer": "The engine may have a problem in that ignition circuit, its plugs, or associated components. Use the approved diagnostic procedure; unresolved excessive roughness is not acceptable merely because both ignitions run smoothly together.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Ignition systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-037",
    "category": "systems",
    "question": "Why can a magneto-equipped propeller remain dangerous with the master switch off?",
    "answer": "Magnetos generate their own ignition power. Treat the propeller as live; a defective grounding circuit or switch can permit ignition when the propeller is moved.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Ignition systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-038",
    "category": "systems",
    "question": "What does a broken magneto P-lead generally prevent?",
    "answer": "It can prevent grounding that magneto to stop its ignition. The engine may continue firing despite the ignition switch position, creating a serious propeller-handling hazard.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Ignition systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-039",
    "category": "systems",
    "question": "Why can extended low-power ground operation foul spark plugs?",
    "answer": "Deposits can accumulate when combustion temperatures are low, particularly with an unsuitable mixture setting. Use the approved ground-leaning and clearing procedure rather than prolonged high-power experimentation.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Ignition systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-040",
    "category": "systems",
    "question": "What does an impulse coupling help a magneto accomplish during starting?",
    "answer": "It provides a stronger, appropriately delayed spark at low cranking speed. Starting-system details vary; hand-propping requires specific training and precautions.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Ignition systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-041",
    "category": "systems",
    "question": "Why must a starter be disengaged after the engine starts?",
    "answer": "Continued engagement can damage the starter or its drive and may create an electrical or fire hazard. Confirm disengagement using the aircraft’s indications and checklist.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Starting system",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-042",
    "category": "systems",
    "question": "What is the difference between fuel exhaustion and fuel starvation?",
    "answer": "Exhaustion means insufficient usable fuel remains; starvation means fuel is not reaching the engine even though usable fuel may still be aboard. The distinction helps identify prevention and recovery actions.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-043",
    "category": "systems",
    "question": "An engine loses power shortly after a tank change. What system detail deserves immediate attention?",
    "answer": "The selected tank, selector detent, usable quantity, and any required pump operation. Maintain control and use the checklist; do not move the selector repeatedly without verifying each position.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel selectors",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-044",
    "category": "systems",
    "question": "Why can a blocked fuel-tank vent cause power loss?",
    "answer": "As fuel is consumed, replacement air may be unable to enter, reducing tank pressure and restricting delivery. Tank venting is essential even when substantial fuel remains.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel vents",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-045",
    "category": "systems",
    "question": "What is a fuel strainer or gascolator intended to collect?",
    "answer": "Water and sediment at a low point in the fuel system. Drain and inspect the specified sampling points using the POH, since one clean sample does not prove every tank is uncontaminated.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel contamination",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-046",
    "category": "systems",
    "question": "What does an accelerator pump do in a carburetor that is equipped with one?",
    "answer": "It briefly supplies extra fuel during rapid throttle opening to prevent a temporary lean hesitation. The mechanism and starting technique are installation-specific; do not pump the throttle as a universal priming method.",
    "source": "FAA-H-8083-32B, AMT Handbook — Powerplant, chapter 2, Fuel and Fuel Metering Systems — Accelerator Pump",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/04_amtp_ch2.pdf"
  },
  {
    "id": "SYS-047",
    "category": "systems",
    "question": "A fuel sample is uniformly clear. Does that prove it is uncontaminated aviation gasoline?",
    "answer": "No. Clear water or the wrong fuel can be mistaken for a good sample. Check color, odor, separation, and the approved sampling method, without relying on color alone.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel quality",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-048",
    "category": "systems",
    "question": "Why must fuel grade be confirmed from approved aircraft information?",
    "answer": "An unsuitable grade or fuel type can cause engine damage or failure. The familiar appearance of a filler cap, nozzle, or fuel truck is not adequate confirmation.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel grades",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-049",
    "category": "systems",
    "question": "How do a fuel-transfer pump and an engine-feed pump differ?",
    "answer": "A transfer pump moves fuel between tanks; a feed or boost pump supports delivery to the engine. Their switches are not interchangeable, and an incorrect sequence can leave the engine without fuel.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel pumps",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-050",
    "category": "systems",
    "question": "Why does a fuel return line matter when choosing a tank?",
    "answer": "Some systems return excess fuel to a specified tank. Incorrect selection or tank management may cause overflow, imbalance, or loss of usable fuel despite normal engine operation.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel return systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-051",
    "category": "systems",
    "question": "Why is unusable fuel excluded from flight-planning endurance?",
    "answer": "It cannot be relied upon for engine operation under the conditions defining the aircraft’s approved usable quantity. Total tank capacity is therefore not the same as usable flight fuel.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel quantity",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-052",
    "category": "systems",
    "question": "What does gravity feed depend on besides fuel being present?",
    "answer": "Adequate head pressure, proper venting, an unobstructed path, and approved aircraft attitude and configuration. Gravity feed does not make tank selection or vent checks unnecessary.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel delivery",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-053",
    "category": "systems",
    "question": "Why may an electric boost pump be needed during takeoff or landing on some piston airplanes?",
    "answer": "It may provide backup pressure or suppress vapor formation during critical phases. Other aircraft require different use, so follow the actual pump procedure rather than a universal habit.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Fuel pumps",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-054",
    "category": "systems",
    "question": "Why does full fuel in one wing not necessarily make fuel available from the other wing?",
    "answer": "Separate tanks and feed paths can isolate the supply. Understand crossfeed, selector, and transfer limitations instead of assuming fuel automatically balances or feeds both sides.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Tank arrangements",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-055",
    "category": "systems",
    "question": "How can a stuck-open cabin heat valve become more than a comfort problem?",
    "answer": "Depending on the design, it can admit excessive heat or fumes. Use the aircraft procedure and treat suspected exhaust contamination as a potential carbon-monoxide hazard.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Cabin heating",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-056",
    "category": "systems",
    "question": "Why must cabin heater exhaust shrouds and heat exchangers remain sound?",
    "answer": "A crack can let exhaust gases enter ventilation air. A comfortable cabin temperature does not establish that the air is safe to breathe.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Cabin heating",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-057",
    "category": "systems",
    "question": "What is the difference between a control trim tab and a balance tab?",
    "answer": "A trim tab establishes a control-force equilibrium; a balance tab helps reduce the force needed to move a control surface. The installed control arrangement determines their motion and effect.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Flight controls",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-058",
    "category": "systems",
    "question": "What does differential aileron travel accomplish?",
    "answer": "The upward-deflecting aileron travels farther than the downward-deflecting one, helping reduce adverse yaw. It reduces the yawing tendency but does not eliminate the need for coordinated rudder.",
    "source": "FAA PHAK, chapter 6, Flight Controls — Differential Ailerons",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-059",
    "category": "systems",
    "question": "What does a full-and-correct flight-control check confirm?",
    "answer": "Both adequate travel and correct direction. Free movement alone cannot reveal reversed connections or an incorrectly installed control system after maintenance.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Flight controls",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-060",
    "category": "systems",
    "question": "Why should a pilot avoid holding an electric flap motor against its travel stop?",
    "answer": "It can overload or overheat the motor unless the system is designed to stop itself. Use the approved switch operation and confirm the actual flap position.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Flap systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-061",
    "category": "systems",
    "question": "What is asymmetric flap extension?",
    "answer": "Different flap positions on the two wings, which can create a strong rolling tendency. Follow the aircraft’s response procedure and do not assume continued cycling will correct it.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Flap systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-062",
    "category": "systems",
    "question": "Why can a flap-position indicator disagree with the expected aerodynamic effect?",
    "answer": "The indication may reflect a sensor, actuator, or commanded position rather than every surface’s actual condition. Compare aircraft behavior and use the abnormal procedure when indications conflict.",
    "source": "FAA PHAK, chapter 6, Flight Controls; chapter 7, Aircraft Systems, Flap systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-063",
    "category": "systems",
    "question": "What does a landing-gear down indication actually need to establish?",
    "answer": "That the gear is in the required safe position, typically down and locked. Interpret lights and warnings with the POH; a lever in DOWN is only a command.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Landing gear",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-064",
    "category": "systems",
    "question": "Why should an abnormal gear indication be handled before entering a rushed final approach?",
    "answer": "Troubleshooting and emergency extension require time, altitude, fuel, and task sharing. Stabilize the flight and follow the checklist instead of repeatedly moving the selector near the ground.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Landing gear",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-065",
    "category": "systems",
    "question": "Can an emergency gear-extension system be assumed to allow gear retraction afterward?",
    "answer": "No. Manual, free-fall, pneumatic, and other systems have different limitations and reset requirements. Treat the emergency-extension instructions as aircraft-specific.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Landing gear",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-066",
    "category": "systems",
    "question": "What is the purpose of a nosewheel shimmy damper?",
    "answer": "It damps rapid nosewheel oscillation. Persistent shimmy may indicate tire, linkage, bearing, or damper defects and warrants maintenance evaluation.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Landing gear",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-067",
    "category": "systems",
    "question": "Why must wheel brakes not be used as a substitute for the correct parking and securing procedure?",
    "answer": "Parking-brake capacity and reliability vary, and hot brakes or changing conditions can create problems. Use approved chocks, tie-downs, and parking instructions.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Brakes",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-068",
    "category": "systems",
    "question": "What does a spongy hydraulic brake pedal suggest?",
    "answer": "Air, fluid loss, or another hydraulic problem may reduce effective braking. Verify against the aircraft procedure and do not depart assuming pumping the pedal is a permanent fix.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Brakes",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-069",
    "category": "systems",
    "question": "Why does excessive brake use during taxi deserve attention before departure?",
    "answer": "It can create heat and wear and may indicate too much taxi power or a dragging brake. Use approved taxi technique and inspect abnormal heat, odor, or resistance.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Brakes",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-070",
    "category": "systems",
    "question": "How does a hydraulic accumulator help a system?",
    "answer": "It stores pressurized fluid energy to smooth demand or provide limited reserve operation. Its capacity is finite and does not make a failed pump unimportant.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Hydraulic systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-071",
    "category": "systems",
    "question": "What does an aircraft electrical bus do?",
    "answer": "It distributes electrical power to connected circuits. Different buses can have different sources and priorities, so one powered display does not prove all essential buses are energized.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Electrical systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-072",
    "category": "systems",
    "question": "Why is an essential bus useful after a generating-system failure?",
    "answer": "It supplies selected critical loads while allowing less important loads to be removed. Which equipment remains powered depends on the installation and switch positions.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Electrical systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-073",
    "category": "systems",
    "question": "What does a voltage regulator control?",
    "answer": "Generator or alternator output to maintain the specified electrical-system voltage. Regulator faults can produce overvoltage or inadequate charging.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Electrical systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-074",
    "category": "systems",
    "question": "Why does an overvoltage warning require the approved checklist?",
    "answer": "Excessive voltage can damage equipment and batteries. The protective system may disconnect a generating source; do not defeat that protection or repeatedly reset it without authorization.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Electrical systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-075",
    "category": "systems",
    "question": "What is the role of an electrical contactor?",
    "answer": "It uses a control circuit to connect or disconnect a higher-current circuit, such as battery or starter power. A switch position does not prove the contactor actually changed state.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Electrical systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-076",
    "category": "systems",
    "question": "Why can turning the master switch off fail to depower every installed device?",
    "answer": "Some equipment has a direct battery feed or its own battery. Know independently powered ignition, emergency equipment, and avionics before assuming the airplane is electrically isolated.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Electrical systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-077",
    "category": "systems",
    "question": "Why must external power match the aircraft’s approved voltage and polarity?",
    "answer": "A mismatch can damage electrical equipment or create a fire hazard. Use the approved connector and procedure rather than assuming any available ground supply is suitable.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Electrical systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-078",
    "category": "systems",
    "question": "What distinguishes a fuse from a resettable circuit breaker?",
    "answer": "Both protect against excessive current, but a fuse must be replaced after opening. Neither is an operational switch unless the aircraft design and procedures permit that use.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Circuit protection",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-079",
    "category": "systems",
    "question": "Why can an electrical burning odor matter before a circuit breaker trips?",
    "answer": "Heating or arcing can develop without enough current to operate protection promptly. Recognize the symptoms and apply the smoke or electrical-fire procedure.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Electrical faults",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-080",
    "category": "systems",
    "question": "Why should avionics electrical load be considered before adding portable equipment?",
    "answer": "Converters, chargers, wiring, and outlets have ratings. An outlet that accepts a plug does not establish that the combined load is permitted or that emergency battery endurance is unchanged.",
    "source": "FAA PHAK, chapter 7, Aircraft Systems, Electrical loads",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-081",
    "category": "systems",
    "question": "What does a vacuum-system suction gauge help a pilot monitor?",
    "answer": "Whether the system is producing the suction needed by its instruments. A normal gauge does not guarantee that an individual gyro is accurate.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Vacuum instruments",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-082",
    "category": "systems",
    "question": "Why might only some instruments fail after a vacuum-pump failure?",
    "answer": "Instrument power sources differ. Identify vacuum-driven and electric instruments in that aircraft and use genuinely independent indications.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Instrument power",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-083",
    "category": "systems",
    "question": "Why is a compass unreliable during significant bank or acceleration?",
    "answer": "Its magnetic element is affected by dip and acceleration forces. Establish appropriate stable flight before using it to check heading.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Magnetic compass",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-084",
    "category": "systems",
    "question": "What does the altimeter’s barometric setting change?",
    "answer": "The reference pressure used to display altitude. It does not change ambient pressure or correct every temperature-related difference between indicated and true altitude.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Altimeter",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-085",
    "category": "systems",
    "question": "Why is a vertical-speed indication normally delayed after a pitch change?",
    "answer": "A conventional VSI relies on a calibrated pressure leak, so it takes time to stabilize. Control attitude and cross-check altitude rather than chasing the lagging needle.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Vertical speed indicator",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-086",
    "category": "systems",
    "question": "How does an instantaneous VSI reduce normal instrument lag?",
    "answer": "Additional sensing responds promptly to vertical acceleration while the pressure system supplies the steady vertical-speed indication. It still needs cross-checking.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Vertical speed indicator",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-087",
    "category": "systems",
    "question": "Why may an alternate static source change displayed altitude and airspeed?",
    "answer": "Cabin pressure can differ from outside static pressure. Apply the published corrections and procedure rather than assuming the alternate source is identical.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Alternate static source",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-088",
    "category": "systems",
    "question": "What is position error in a pitot-static installation?",
    "answer": "Error caused by local airflow around the pressure openings. It varies with configuration and speed and is accounted for in the aircraft’s calibration information.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Pitot-static errors",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-089",
    "category": "systems",
    "question": "Why should a glass-panel reversion switch be practiced before an actual failure?",
    "answer": "It may move essential information to another display, but layout and available functions can change. Familiarity reduces confusion without assuming every failure has the same reversion behavior.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Electronic flight displays",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-090",
    "category": "systems",
    "question": "What can an electronic display’s red X or invalid-data flag mean?",
    "answer": "The displayed quantity is unavailable or unreliable, possibly because of a sensor, data, or power failure. Use the approved failure procedure and independent references.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — Electronic flight displays",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-091",
    "category": "systems",
    "question": "Why is autopilot engagement not proof that the airplane is properly trimmed?",
    "answer": "Some systems compensate temporarily or command trim themselves, while others have limited authority. Monitor trim and control forces and follow the approved engagement checks.",
    "source": "FAA PHAK, chapter 6, Flight Controls — autopilots, Autopilots",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-092",
    "category": "systems",
    "question": "What should be established before using an unfamiliar autopilot mode?",
    "answer": "What it controls, its source and target, how capture occurs, and how to disconnect. Verify the annunciated mode and aircraft response rather than the button press alone.",
    "source": "FAA PHAK, chapter 6, Flight Controls — autopilots, Autopilots",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-093",
    "category": "systems",
    "question": "Why must an autopilot minimum-use altitude be known?",
    "answer": "Below its approved height or phase-of-flight limit, there may be insufficient recovery margin after malfunction. Approach authorization does not imply permission to use it through touchdown.",
    "source": "FAA PHAK, chapter 6, Flight Controls — autopilots, Autopilot limitations",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-094",
    "category": "systems",
    "question": "A GPS shows a course but the CDI follows something else. What should be checked?",
    "answer": "The selected navigation source, display coupling, active leg, and mode annunciation. A valid GPS route does not guarantee the indicator or autopilot is following it.",
    "source": "FAA PHAK, chapter 8, Electronic Flight Displays; FAA AIM, chapter 1, navigation-system use",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "SYS-095",
    "category": "systems",
    "question": "Why should installed standby instruments be checked during preflight?",
    "answer": "They may have separate switches, batteries, limits, or alignment needs. A standby label does not guarantee independence, readiness, or unlimited endurance.",
    "source": "FAA PHAK, chapter 8, Flight Instruments — standby and electronic instruments",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "SYS-096",
    "category": "systems",
    "question": "What does a radio audio-panel transmit selection control?",
    "answer": "Which communication radio sends the microphone signal. Receiving ATC on one radio does not guarantee the microphone is selected to transmit on it.",
    "source": "FAA AIM 4-2-2, Radio Technique; installed audio-panel operating instructions",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "SYS-097",
    "category": "systems",
    "question": "What does a communication radio’s squelch control do?",
    "answer": "It suppresses background receiver noise below a selected threshold. An unsuitable setting can hide weak calls; adjust it using the radio’s operating instructions rather than assuming silence means no transmissions.",
    "source": "FAA AIM 4-2-2, Radio Technique; installed radio operating instructions",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "SYS-098",
    "category": "systems",
    "question": "Why can a portable traffic display omit nearby aircraft?",
    "answer": "Coverage, equipment compatibility, antenna masking, filtering, and unequipped aircraft can all leave targets absent. Continue an outside scan and never infer empty airspace from an empty screen.",
    "source": "FAA AIM 4-5, Surveillance Systems — traffic information limitations",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_5.html"
  },
  {
    "id": "SYS-099",
    "category": "systems",
    "question": "What does database currency fail to prove about an installed navigation system?",
    "answer": "That the correct database, region, active procedure, source, or aircraft approval is in use. Verify each relevant item before relying on the guidance.",
    "source": "FAA PHAK, chapter 8, Electronic Flight Displays; FAA AIM, chapter 1, navigation-system use",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "SYS-100",
    "category": "systems",
    "question": "What does an autopilot preflight check help a pilot verify?",
    "answer": "The required engagement, indications, control response, and disconnect functions under the aircraft’s approved procedure. A successful self-test does not remove the need to monitor the flightpath after engagement.",
    "source": "FAA PHAK chapter 6, Autopilot; applicable AFM/POH autopilot supplement",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-051",
    "category": "aerodynamics",
    "question": "Why must stability and controllability be considered together?",
    "answer": "A very stable airplane resists disturbances but may require larger control forces to change attitude. Controllability is the ability to command the necessary changes; neither permits operation outside the loading envelope.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Stability and control",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-052",
    "category": "aerodynamics",
    "question": "What do the longitudinal, lateral, and vertical axes describe?",
    "answer": "Roll occurs about the longitudinal axis, pitch about the lateral axis, and yaw about the vertical axis. Understanding the axes helps identify which control action corrects a disturbance.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Axes of motion",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-053",
    "category": "aerodynamics",
    "question": "How does wing downwash affect the tailplane?",
    "answer": "The wing changes the airflow direction reaching the tail. Changes in wing lift, flap setting, or power can therefore change tail force and the pitch trim required.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Downwash and pitching moments",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-054",
    "category": "aerodynamics",
    "question": "Why is washout built into some wings?",
    "answer": "The wingtip has a lower geometric angle of attack than the root, helping the root stall first and preserving aileron effectiveness longer. It does not guarantee control in a fully developed stall.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Wing design",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-055",
    "category": "aerodynamics",
    "question": "How can a small amount of frost harm a wing without adding much weight?",
    "answer": "It changes surface smoothness and airflow separation, reducing maximum lift and increasing drag. The aerodynamic penalty can be serious despite negligible added mass.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Surface contamination",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-056",
    "category": "aerodynamics",
    "question": "What makes airflow separation different from ordinary airflow deflection?",
    "answer": "Separated flow no longer follows the surface smoothly, changing pressure distribution and drag. Increasing angle of attack beyond the critical value produces widespread separation and loss of useful lift.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Boundary layer",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-057",
    "category": "aerodynamics",
    "question": "Why can the same true airspeed require different angles of attack in different flight conditions?",
    "answer": "Weight, load factor, air density, configuration, and required lift can change. True airspeed alone does not identify the wing’s angle of attack or stall margin.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Lift equation",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-058",
    "category": "aerodynamics",
    "question": "What is a stall strip intended to accomplish?",
    "answer": "It promotes predictable initial separation at a chosen wing location, improving stall behavior or warning. It is an engineered feature and must not be altered or removed casually.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Stall characteristics",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-059",
    "category": "aerodynamics",
    "question": "Why do some airplanes pitch differently when power is changed?",
    "answer": "Thrust-line location, propeller slipstream, downwash, and trim affect pitching moments. Anticipate the installed aircraft’s response while setting attitude, power, and trim.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Power effects",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-060",
    "category": "aerodynamics",
    "question": "Why can reducing power require right-rudder pressure to be relaxed?",
    "answer": "Propeller-induced yawing effects can decrease with power. Continue coordinating the airplane rather than retaining a fixed rudder position from the climb.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Propeller effects",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-061",
    "category": "aerodynamics",
    "question": "How does lowering a wing with aileron differ from stopping a yaw with rudder?",
    "answer": "Aileron primarily changes roll; rudder primarily changes yaw. Because motion is coupled, coordinated inputs are needed, but substituting large rudder for bank can create a skid.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Control coordination",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-062",
    "category": "aerodynamics",
    "question": "Why can turbulence trigger a stall without a deliberate pitch increase?",
    "answer": "A gust can abruptly change the relative wind and angle of attack or increase load factor. Maintain appropriate margins and the aircraft’s recommended turbulence technique.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Gust loading",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-063",
    "category": "aerodynamics",
    "question": "Why is the visual nose attitude an unreliable standalone stall indicator?",
    "answer": "The flightpath may be climbing, descending, or turning. Angle of attack is measured relative to airflow, so the wing can stall with the nose below the horizon.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Stall recognition",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-064",
    "category": "aerodynamics",
    "question": "What is the purpose of practicing stalls at an adequate recovery altitude?",
    "answer": "Recovery consumes altitude, especially with delayed recognition or an improper response. Choose a training altitude and area that permit recovery safely above applicable minimums.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Stall training",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-065",
    "category": "aerodynamics",
    "question": "Why should a pilot avoid fixating on the altimeter during an impending stall recovery?",
    "answer": "Trying to prevent any altitude loss can maintain excessive angle of attack. Reduce angle of attack, manage power and coordination, and accept the altitude needed for a controlled recovery.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Stall recovery",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-066",
    "category": "aerodynamics",
    "question": "What is the difference between a wing dropping and a commanded turn near the stall?",
    "answer": "A wing drop may indicate asymmetric separation rather than a normal roll response. Apply the aircraft’s stall-recovery procedure instead of treating it as ordinary bank control.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Asymmetric stall",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-067",
    "category": "aerodynamics",
    "question": "Why does spin training require aircraft approval and qualified instruction?",
    "answer": "Spin behavior and recovery depend on design, loading, configuration, and technique. An aerobatic-looking airplane or prior stall practice does not establish spin authorization.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Spin limitations",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-068",
    "category": "aerodynamics",
    "question": "What does autorotation mean in an airplane spin?",
    "answer": "The wings are stalled unequally, producing a self-sustaining rolling and yawing motion. Recovery requires removing the conditions sustaining the spin using the approved procedure.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Spin aerodynamics",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-069",
    "category": "aerodynamics",
    "question": "Why can applying excessive power during a developed spin be inappropriate?",
    "answer": "Propeller effects and design-specific behavior can intensify rotation or complicate recovery. Follow the aircraft’s prescribed spin power setting rather than assuming more power always helps.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Spin recovery",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-070",
    "category": "aerodynamics",
    "question": "Why can a steep descending spiral rapidly approach structural limits?",
    "answer": "Airspeed rises while the turn can tighten. An abrupt pullout adds substantial load; use the aircraft’s upset-recovery sequence and manage bank, power, and speed.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Spiral recovery",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-071",
    "category": "aerodynamics",
    "question": "What does the power-required curve explain about slow flight?",
    "answer": "Below the speed for minimum required power, flying slower requires more power to maintain altitude. Small speed losses can produce a larger sink unless recognized and corrected.",
    "source": "FAA Airplane Flying Handbook, chapters 4–5, Energy Management and Upset Prevention, Region of reversed command",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-072",
    "category": "aerodynamics",
    "question": "How does a shallow climb at low airspeed differ energetically from accelerating level flight?",
    "answer": "Climbing increases potential energy while acceleration increases kinetic energy. Available excess power must support the chosen combination; demanding both can exceed aircraft capability.",
    "source": "FAA Airplane Flying Handbook, chapters 4–5, Energy Management and Upset Prevention, Energy management",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-073",
    "category": "aerodynamics",
    "question": "What does total mechanical energy mean for an airplane?",
    "answer": "The combination of energy from height and speed. Pitch can trade between them, while thrust adds energy and drag removes it.",
    "source": "FAA Airplane Flying Handbook, chapters 4–5, Energy Management and Upset Prevention, Energy management",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-074",
    "category": "aerodynamics",
    "question": "An airplane is high and fast on final. Why is merely lowering the nose a poor correction?",
    "answer": "It trades height into more speed and can increase the energy problem. Use approved drag and power management early or go around when stabilization cannot be achieved.",
    "source": "FAA Airplane Flying Handbook, chapters 4–5, Energy Management and Upset Prevention, Approach energy",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-075",
    "category": "aerodynamics",
    "question": "Why can an airplane climb briefly after liftoff despite lacking sustainable climb performance?",
    "answer": "It may exchange excess speed for height or benefit from ground effect. Once speed decays or ground effect ends, insufficient excess power becomes apparent.",
    "source": "FAA Airplane Flying Handbook, chapters 4–5, Energy Management and Upset Prevention, Takeoff energy",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-076",
    "category": "aerodynamics",
    "question": "Why must rotation be based on the approved technique rather than trying to lift off as early as possible?",
    "answer": "Premature rotation can add drag and leave inadequate control or stall margin. Apply the POH rotation cues and accelerate to the required climb condition.",
    "source": "FAA Airplane Flying Handbook, chapter 6, Takeoffs and Departure Climbs, Takeoff technique",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-077",
    "category": "aerodynamics",
    "question": "What is the purpose of a soft-field takeoff’s early liftoff technique?",
    "answer": "To reduce wheel drag, then accelerate in ground effect to the approved climb speed. Early liftoff is not permission to climb away below a safe speed.",
    "source": "FAA Airplane Flying Handbook, chapter 6, Takeoffs and Departure Climbs, Soft-field takeoffs",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-078",
    "category": "aerodynamics",
    "question": "Why is elevator back pressure maintained appropriately during a soft-field landing rollout?",
    "answer": "It helps keep weight off the nosewheel as speed decreases. Use the aircraft-specific technique while preserving steering and preventing an excessive pitch attitude.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Soft-Field Landings",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-079",
    "category": "aerodynamics",
    "question": "Why should a short-field landing be planned around a touchdown zone?",
    "answer": "Stopping distance depends on where the airplane actually touches down at the correct speed. A long float can consume the margin even if the runway initially appeared sufficient.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Short-field landings",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-080",
    "category": "aerodynamics",
    "question": "How does a forward slip dissipate energy?",
    "answer": "The cross-controlled attitude exposes more aircraft area to the airflow and increases drag. Use it only within the aircraft’s limitations and maintain an appropriate airspeed reference.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Slips",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-081",
    "category": "aerodynamics",
    "question": "Why can an extended slip affect some fuel systems?",
    "answer": "Fuel can move away from an outlet or vent arrangement. Observe any slip-duration, fuel-quantity, or configuration restrictions in the POH.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Slip limitations",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-082",
    "category": "aerodynamics",
    "question": "What visual change helps a pilot judge the landing roundout?",
    "answer": "Shift attention progressively toward the far end of the runway while retaining peripheral cues for height and alignment. Avoid staring at a point immediately beneath the nose.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Roundout",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-083",
    "category": "aerodynamics",
    "question": "Why does holding the airplane off at excess speed prolong a landing float?",
    "answer": "The wing still produces substantial lift and kinetic energy must dissipate before touchdown. Avoid forcing it down; go around if the planned landing area is no longer achievable.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Landing energy",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-084",
    "category": "aerodynamics",
    "question": "Why should crosswind aileron generally increase as the airplane slows after landing?",
    "answer": "Control effectiveness decreases with airflow. Progressively maintain the necessary into-wind correction according to the aircraft’s ground-handling technique.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Crosswind rollout",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-085",
    "category": "aerodynamics",
    "question": "Why does an abrupt gust loss near the ground threaten approach energy?",
    "answer": "A sudden reduction in headwind can reduce indicated airspeed and lift before the airplane accelerates. Use approved gust procedures and retain a go-around option.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Wind changes",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-086",
    "category": "aerodynamics",
    "question": "What does a phugoid tendency look like?",
    "answer": "A comparatively slow exchange between airspeed and altitude, often with modest angle-of-attack changes. Correct smoothly rather than making large chasing inputs.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Dynamic stability",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-087",
    "category": "aerodynamics",
    "question": "What is overbanking tendency during a steep turn?",
    "answer": "The outer wing travels faster and can produce more lift, tending to increase bank. Apply the coordinated control needed to maintain the selected bank.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Turning flight",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-088",
    "category": "aerodynamics",
    "question": "Why can excessive rudder in a steep turn distort a maneuver even with altitude held?",
    "answer": "It creates slip or skid and changes yaw, drag, and load distribution. Holding altitude alone does not demonstrate a coordinated or safe turn.",
    "source": "FAA Airplane Flying Handbook, chapter 10, Steep Turns",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-089",
    "category": "aerodynamics",
    "question": "What does a clearing turn accomplish before a training maneuver?",
    "answer": "It helps search for traffic in the area the maneuver will occupy. It supplements continuous lookout, altitude planning, and consideration of blind spots.",
    "source": "FAA Airplane Flying Handbook, chapters 2–3, Ground Operations and Basic Flight Maneuvers — clearing and lookout",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-090",
    "category": "aerodynamics",
    "question": "Why should trim be used after establishing the desired flight condition?",
    "answer": "Trim relieves sustained control force. Using it as the primary maneuver control can obscure the actual control requirement and delay a precise attitude change.",
    "source": "FAA Airplane Flying Handbook, chapter 3, Basic Flight Maneuvers — trim",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-091",
    "category": "aerodynamics",
    "question": "How does a nose-heavy trim condition affect a go-around?",
    "answer": "It can require substantial back pressure when climb attitude is selected; changing power and flap configuration may alter that requirement further. Maintain attitude control and retrim deliberately.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Go-around control forces",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-092",
    "category": "aerodynamics",
    "question": "Why must flap retraction during climb be coordinated with airspeed and attitude?",
    "answer": "Reducing flap lift changes stall speed and can cause settling. Accelerate and retract according to the POH rather than retracting all flap at an arbitrary height.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Configuration transitions",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-093",
    "category": "aerodynamics",
    "question": "Why is a normal go-around different from waiting to escape an unrecoverable landing?",
    "answer": "An early go-around preserves speed, altitude, and runway options. Delay can leave too little energy or obstacle clearance even when full power is applied correctly.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Go-around planning",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-094",
    "category": "aerodynamics",
    "question": "What is pivotal altitude used for during eights on pylons?",
    "answer": "It is the height at which the line of sight through the selected lateral reference appears to pivot around the pylon. It depends principally on groundspeed, so altitude adjustments are part of the maneuver.",
    "source": "FAA Airplane Flying Handbook, chapter 10, Performance Maneuvers, Eights on pylons",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-095",
    "category": "aerodynamics",
    "question": "Why does wind require changing pivotal altitude during eights on pylons?",
    "answer": "Groundspeed changes around the maneuver. Higher groundspeed requires a higher pivotal altitude and lower groundspeed a lower one; keep terrain and safety margins in the plan.",
    "source": "FAA Airplane Flying Handbook, chapter 10, Performance Maneuvers, Eights on pylons",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-096",
    "category": "aerodynamics",
    "question": "What skill does a power-off accuracy approach develop beyond simply gliding to a runway?",
    "answer": "Judging energy, wind, configuration, and pattern geometry to reach a selected touchdown area. Preserve safe speed and go around when the exercise cannot be completed safely.",
    "source": "FAA Airplane Flying Handbook, chapter 9, Approaches and Landings, Power-off accuracy approaches",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-097",
    "category": "aerodynamics",
    "question": "What does a steep-spiral training maneuver teach?",
    "answer": "Controlling a descending ground track around a point while managing airspeed, wind correction, bank, and altitude. It is a planned maneuver, not an uncontrolled spiral dive.",
    "source": "FAA Airplane Flying Handbook, chapter 10, Performance Maneuvers, Steep spirals",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-098",
    "category": "aerodynamics",
    "question": "Why does a chandelle use a changing pitch-and-bank schedule?",
    "answer": "It manages a declining airspeed while converting energy into altitude through a coordinated turn. Follow the approved training technique rather than maintaining one fixed pitch and bank.",
    "source": "FAA Airplane Flying Handbook, chapter 10, Performance Maneuvers, Chandelles",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "AD-099",
    "category": "aerodynamics",
    "question": "What is aerodynamic flutter and why is it dangerous?",
    "answer": "A self-excited structural/control-surface oscillation that can grow rapidly and cause failure. Respect speed limits, control balance, and maintenance requirements; do not test a suspected flutter condition.",
    "source": "FAA PHAK, chapter 5, Aerodynamics of Flight, Aeroelastic effects",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "AD-100",
    "category": "aerodynamics",
    "question": "Why can moving a control surface by hand during preflight fail to reveal every control problem?",
    "answer": "It may not test cockpit travel, correct connection, structural loading, or an intermittent obstruction. Complete the specified cockpit and exterior checks, particularly after maintenance.",
    "source": "FAA PHAK, chapter 6, Flight Controls, Control-system verification",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-041",
    "category": "performance",
    "question": "An aircraft weighs 2,000 lb and has a 160,000 lb-in total moment. Where is its CG?",
    "answer": "At an 80-inch arm: total moment divided by total weight. Compare that arm with the approved envelope for 2,000 lb, not merely with an example loading.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, CG calculation",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-042",
    "category": "performance",
    "question": "How should kilograms and pounds be handled on a loading worksheet?",
    "answer": "Convert them to the worksheet’s required units before calculating moments. A consistent-looking worksheet can still be dangerously wrong if one item uses a different mass unit.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Loading units",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-043",
    "category": "performance",
    "question": "Why can adding baggage aft move CG beyond limits before maximum weight is reached?",
    "answer": "Its moment depends on both weight and arm. A light load far behind the datum can have a large CG effect even with unused payload capacity.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Loading arms",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-044",
    "category": "performance",
    "question": "How does removing a forward passenger differ from removing the same weight of aft baggage?",
    "answer": "Both lower total weight, but removing forward weight shifts CG aft while removing aft weight shifts it forward. Recalculate rather than assuming lighter always means safer balance.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Loading changes",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-045",
    "category": "performance",
    "question": "Why must loading adjustments respect seat and baggage-compartment limits as well as CG?",
    "answer": "A legal overall CG does not prove that local floors, seats, restraints, or compartments can support the load. All applicable structural and loading limits must be met.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Local loading limits",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-046",
    "category": "performance",
    "question": "What must be verified before carrying removable ballast?",
    "answer": "Its approved location, mass, attachment, and inclusion in weight and balance. Loose ballast can shift CG suddenly or become a projectile.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Ballast",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-047",
    "category": "performance",
    "question": "Why can fuel burn move the CG in different directions in different airplanes?",
    "answer": "The direction depends on the fuel tank arms relative to the loaded CG. Use the actual aircraft loading information rather than a generic forward-or-aft assumption.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Fuel moments",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-048",
    "category": "performance",
    "question": "How can an empty-weight equipment list reveal a loading error?",
    "answer": "It identifies what equipment was included in the recorded empty weight. Counting installed equipment again or omitting removed equipment can make the worksheet incorrect.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Equipment accounting",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-049",
    "category": "performance",
    "question": "Why must weighing conditions match the aircraft’s approved empty-weight definition?",
    "answer": "Fuel, oil, equipment, and leveling conditions determine the measured result. An apparently precise scale reading is not a usable basic empty weight if the preparation was wrong.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Aircraft weighing",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-050",
    "category": "performance",
    "question": "What is percent mean aerodynamic chord used to express?",
    "answer": "CG position relative to the wing’s mean aerodynamic chord. Convert using the aircraft’s published leading-edge location and chord length; inches from the datum are not automatically percent MAC.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, CG presentation",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-051",
    "category": "performance",
    "question": "Why should a pilot check a loading-envelope graph’s axes and units?",
    "answer": "Some plots use CG arm, moment, or index with different scales. Plotting the right numbers on the wrong kind of envelope can falsely show an acceptable loading.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Loading charts",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-052",
    "category": "performance",
    "question": "Why is a maximum takeoff weight not always the maximum allowable ramp weight?",
    "answer": "Some aircraft permit additional ramp weight for fuel expected to be burned before takeoff. Use separate approved limits and actual taxi fuel, not an assumed allowance.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Weight limits",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-053",
    "category": "performance",
    "question": "Why does payload planning need a realistic taxi-fuel estimate?",
    "answer": "Taxi consumes usable fuel and changes takeoff weight. An optimistic estimate can leave less flight reserve than planned even when the takeoff weight becomes legal.",
    "source": "FAA PHAK, chapter 10, Weight and Balance, Weight and Balance and Aircraft Performance, Fuel and loading",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-054",
    "category": "performance",
    "question": "What is excess power used for in a climb?",
    "answer": "The power available beyond that required to maintain the flight condition supports an increase in altitude. Drag or power losses can sharply reduce climb even if level flight is still possible.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Climb performance",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-055",
    "category": "performance",
    "question": "How does climb gradient differ from rate of climb?",
    "answer": "Gradient is altitude gained per horizontal distance; rate is altitude gained per time. Obstacle clearance requires gradient, so the same vertical speed can be insufficient at a higher groundspeed.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Climb metrics",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-056",
    "category": "performance",
    "question": "When a POH recommends a cruise climb instead of Vy, what tradeoff is being made?",
    "answer": "A higher climb airspeed can improve forward visibility, cooling, and distance covered while accepting less than the maximum possible climb rate. Use the approved climb schedule and ensure obstacle clearance remains adequate.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance — Climb Performance",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-057",
    "category": "performance",
    "question": "Why can a strong headwind improve obstacle clearance without improving the airplane’s still-air climb rate?",
    "answer": "It reduces groundspeed, so less horizontal distance is traveled during the climb. The airplane’s aerodynamic climb capability has not increased.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Wind and climb",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-058",
    "category": "performance",
    "question": "Why can an obstacle departure remain unsuitable even when the POH shows a positive climb rate?",
    "answer": "Positive climb alone may not meet the required gradient, terrain path, or maneuver margins. Compare the actual performance with the entire departure requirement.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Obstacle planning",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-059",
    "category": "performance",
    "question": "Why is extrapolating a sea-level climb figure to a high-elevation airport unsafe?",
    "answer": "Available power, drag, true airspeed, temperature, and weight change the result. Use the appropriate approved performance data and avoid inventing a correction outside its range.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Climb data",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-060",
    "category": "performance",
    "question": "How does an aircraft’s climb speed usually change as weight decreases?",
    "answer": "The optimum speed commonly decreases, but the approved weight-dependent schedule controls. A single memorized speed may not provide the best result at all weights.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Weight-dependent speeds",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-061",
    "category": "performance",
    "question": "Why should climb performance be assessed with the planned anti-ice or other power-consuming equipment in use?",
    "answer": "Bleed, electrical, or mechanical demands can reduce available performance. Apply the installed equipment’s penalties and limitations when relevant.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Equipment penalties",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-062",
    "category": "performance",
    "question": "What makes a runway intersection takeoff a new performance decision?",
    "answer": "It reduces available distance and may change obstacle geometry. Recalculate with the actual starting point rather than using the full runway length.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Available runway",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-063",
    "category": "performance",
    "question": "Why must a runway’s published declared distances be read individually?",
    "answer": "TORA, TODA, ASDA, and LDA can differ because of clearways, stopways, displaced thresholds, or operational restrictions. Choose the distance applicable to the calculation.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Declared distances",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-064",
    "category": "performance",
    "question": "What is a clearway credited for in approved performance planning?",
    "answer": "An obstacle-controlled area beyond the runway that may contribute to the available takeoff distance. It is not extra pavement for accelerating, braking, or landing.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Clearways",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-065",
    "category": "performance",
    "question": "What is a stopway credited for in approved performance planning?",
    "answer": "A prepared area that may extend accelerate-stop distance for an aborted takeoff. It is not automatically usable takeoff runway or landing distance.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Stopways",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-066",
    "category": "performance",
    "question": "Why can takeoff technique invalidate a published short-field distance?",
    "answer": "The chart assumes specified configuration, power application, rotation, and climb technique. A rolling departure or different flap setting may not reproduce those assumptions.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Takeoff assumptions",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-067",
    "category": "performance",
    "question": "Why does landing-distance planning need the expected threshold-crossing height?",
    "answer": "Extra height generally uses additional runway before touchdown. A correct approach speed alone cannot compensate for crossing the threshold substantially above the assumed height.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Landing assumptions",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-068",
    "category": "performance",
    "question": "Why does extra approach speed increase stopping-energy demands?",
    "answer": "Kinetic energy varies with speed squared. A modest speed increase can create a disproportionately greater energy burden and a longer float or rollout.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Landing energy",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-069",
    "category": "performance",
    "question": "What does a landing chart’s maximum-braking assumption require the pilot to recognize?",
    "answer": "Actual braking technique, tire condition, surface friction, and system operation may differ. Plan a margin rather than assuming routine braking will reproduce the demonstration.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Braking assumptions",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-070",
    "category": "performance",
    "question": "Why can a downhill landing be worse than its visual appearance suggests?",
    "answer": "Gravity assists the airplane’s motion during rollout and the runway may appear flatter or longer from the approach. Use approved slope data and preserve stopping margin.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Landing slope",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-071",
    "category": "performance",
    "question": "What can standing water do besides reducing tire friction?",
    "answer": "It can create hydroplaning and drag effects that change acceleration, control, and stopping performance. Use condition-specific data and limits rather than a simple wet-pavement assumption.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Contaminated runway effects",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-072",
    "category": "performance",
    "question": "Why is a maximum demonstrated crosswind figure not automatically a universal limitation?",
    "answer": "It records a demonstrated condition unless the aircraft documentation makes it a limit. Apply actual limitations, runway condition, aircraft capability, and pilot proficiency.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Crosswind data",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-073",
    "category": "performance",
    "question": "How should a forecast wind near a runway-performance limit affect planning?",
    "answer": "Allow for uncertainty, gusts, direction changes, and updated observations. A calculation that is legal only at the most favorable wind leaves little practical margin.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Wind margins",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-074",
    "category": "performance",
    "question": "Why does range planning need climb and descent fuel rather than only cruise consumption?",
    "answer": "Those phases have different power, time, distance, and fuel use. Ignoring them can overstate endurance and destination reserve.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Trip fuel",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "PF-075",
    "category": "performance",
    "question": "Why can an economy cruise setting be unsuitable when fuel is becoming critical into a headwind?",
    "answer": "The best still-air setting may not maximize ground distance in that wind. Use approved guidance and reassess a reachable landing option before reserve becomes an emergency.",
    "source": "FAA PHAK, chapter 11, Aircraft Performance, Weight and Balance and Aircraft Performance, Range in wind",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-021",
    "category": "navigation",
    "question": "Why must a latitude-longitude entry’s format be checked before pressing enter?",
    "answer": "Degrees/minutes/seconds, degrees/decimal minutes, and decimal degrees are different formats. A misplaced decimal or wrong hemisphere can produce a plausible-looking point far from the intended location.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Coordinates",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-022",
    "category": "navigation",
    "question": "How can a pilot cross-check a manually entered coordinate?",
    "answer": "Compare hemisphere, degrees, minutes, plotted position, bearing, and distance with independent chart information. Do not use the same mistyped coordinate as its own verification.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Coordinate verification",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-023",
    "category": "navigation",
    "question": "What is the practical relationship between one minute of latitude and distance?",
    "answer": "One minute of latitude is approximately one nautical mile. This helps estimate distance on a chart, but longitude spacing changes with latitude.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Chart distance",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-024",
    "category": "navigation",
    "question": "Why should a chart’s latitude scale be used carefully when estimating distance?",
    "answer": "Chart projection and location matter. Use the chart’s published scale or an appropriate local latitude scale, not a distant longitude scale that may produce a different result.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Chart scales",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-025",
    "category": "navigation",
    "question": "Why must statute and nautical miles be distinguished in navigation calculations?",
    "answer": "A statute mile is shorter than a nautical mile. Mixing distances with groundspeed in knots produces incorrect time and fuel estimates.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Units",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-026",
    "category": "navigation",
    "question": "What date problem can arise when comparing a late-evening local flight with UTC information?",
    "answer": "UTC may already be on the next calendar date. Verify both date and time when reading validity periods or filing flight-plan information.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, UTC",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-027",
    "category": "navigation",
    "question": "Why should a cross-country navigation log show leg-by-leg rather than only total fuel?",
    "answer": "It exposes where fuel is expected to be consumed and supports checkpoint comparison, diversion decisions, and reserve monitoring before the destination is reached.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Navigation log",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-028",
    "category": "navigation",
    "question": "What does a planned time checkpoint reveal that GPS distance alone may miss?",
    "answer": "Whether actual progress and fuel use match the plan. Distance can appear correct while a stronger headwind progressively erodes the remaining reserve.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Progress monitoring",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-029",
    "category": "navigation",
    "question": "Why are checkpoints immediately before an airspace boundary especially useful?",
    "answer": "They provide a recognizable decision point for confirming position, clearance or communication, altitude, and the route around the boundary if entry is unavailable.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Checkpoint placement",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-030",
    "category": "navigation",
    "question": "Why should an urban landmark be verified by its surrounding pattern?",
    "answer": "Similar roads, lakes, stadiums, and towns can be confused. Match the feature’s position relative to several other landmarks before treating it as a fix.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Pilotage",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-031",
    "category": "navigation",
    "question": "What is a navigation fix based on two independent lines of position?",
    "answer": "A position determined by intersecting two bearings, radials, or other independent references. Favor a useful crossing angle rather than nearly parallel lines.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Position fixing",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-032",
    "category": "navigation",
    "question": "Why are nearly parallel position lines a weak fix?",
    "answer": "Small bearing errors can move the intersection a long distance. Use another reference or more favorable geometry before accepting a precise location.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Fix geometry",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-033",
    "category": "navigation",
    "question": "What should a pilot do when the expected landmark is not found at the planned time?",
    "answer": "Maintain control, check heading, time, chart orientation, and nearby features, and reassess position early. Do not force an uncertain landmark to fit the plan.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Lost-position prevention",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-034",
    "category": "navigation",
    "question": "How can a prominent linear feature serve as a visual navigation handrail?",
    "answer": "A verified river, coastline, road, or railway can help maintain position along a route. Follow a safe planned track and cross-check junctions; the feature may bend into terrain, weather, or airspace that the flight must avoid.",
    "source": "FAA PHAK, chapter 16, Navigation — Pilotage",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-035",
    "category": "navigation",
    "question": "How can haze alter the usefulness of a planned checkpoint?",
    "answer": "It can hide distant detail or make similar landmarks appear alike. Choose closer, more distinctive references and retain a diversion option rather than descending into unsafe terrain clearance.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Visual navigation",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-036",
    "category": "navigation",
    "question": "Why should a pilot plan a turn point before reaching a complicated junction?",
    "answer": "It provides time to verify the correct feature, select the new heading, and scan for hazards. Last-second chart interpretation increases overshoot and cockpit workload.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Route transitions",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-037",
    "category": "navigation",
    "question": "What is a practical way to avoid cumulative chart-orientation errors?",
    "answer": "Relate the chart to the aircraft’s actual direction of travel and periodically confirm north and major landmarks. Reorient deliberately after turns or display-mode changes.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Chart orientation",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-038",
    "category": "navigation",
    "question": "Why does a return flight require a fresh wind and fuel calculation?",
    "answer": "The outbound tailwind can become a return headwind, and weather, loading, daylight, and airspace conditions may change. Reversing the heading does not simply reverse elapsed time.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Return planning",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-039",
    "category": "navigation",
    "question": "What should be checked before using an airport listed as a diversion option?",
    "answer": "Current availability, weather, runway dimensions and condition, services, approach access, and aircraft suitability. A nearby symbol does not prove a usable landing option.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Diversions",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-040",
    "category": "navigation",
    "question": "Why is a checkpoint over open water or featureless terrain a poor sole visual reference?",
    "answer": "There may be no reliable feature to confirm. Use independent navigation, more conservative position uncertainty, and an appropriate route rather than inventing visual precision.",
    "source": "FAA PHAK, chapter 16, Navigation, Navigation; FAA AIM, chapter 1, Route robustness",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NAV-041",
    "category": "navigation",
    "question": "What does a VOR radial describe?",
    "answer": "A magnetic bearing outward from the station. The aircraft can be on that radial while flying toward, away from, or across the station.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, VOR radials",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-042",
    "category": "navigation",
    "question": "An airplane is north of a VOR. Which radial is it approximately on?",
    "answer": "The 360 radial, regardless of its heading. A southerly heading toward the station is not the same as being on the 180 radial.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, VOR interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-043",
    "category": "navigation",
    "question": "Why must a VOR be positively identified before relying on its guidance?",
    "answer": "The selected frequency alone does not establish the correct or serviceable station. Check the identification and disregard guidance from a facility reported unusable.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, NAVAID identification",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-044",
    "category": "navigation",
    "question": "What does a VOR TO/FROM indication compare?",
    "answer": "The selected course with the aircraft’s position relative to the station. It does not tell the pilot whether the nose is currently pointed toward or away from the station.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, VOR indication",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-045",
    "category": "navigation",
    "question": "How can reverse sensing occur when manually tracking a VOR?",
    "answer": "An inappropriate selected course can make CDI deflection appear opposite to the intended correction. Set the desired course with the proper TO/FROM sense and verify geometry before following it.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, VOR course selection",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-046",
    "category": "navigation",
    "question": "Why does a centered VOR CDI not by itself show that the desired route is being flown?",
    "answer": "The selected course or station may be wrong, and a centered needle can occur on either side of the station. Verify station, course, TO/FROM sense, position, and clearance.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, VOR cross-check",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-047",
    "category": "navigation",
    "question": "Why should large VOR needle swings near station passage not be chased?",
    "answer": "Angular sensitivity increases and indications can become unstable close to or over the facility. Maintain a planned heading and use the expected station-passage indications.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, VOR tracking",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-048",
    "category": "navigation",
    "question": "What does VOR line-of-sight coverage mean for a low-altitude route?",
    "answer": "Terrain and the horizon can block signals even within a seemingly short distance. Confirm usable coverage rather than assuming every tuned station is available.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, NAVAID coverage",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-049",
    "category": "navigation",
    "question": "Why does a charted NAVAID service volume matter?",
    "answer": "It defines expected signal coverage under stated conditions. A signal received outside that volume may not have the same assured performance or interference protection.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, Service volumes",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-050",
    "category": "navigation",
    "question": "Why should an unflagged electronic bearing not override a NAVAID outage notice?",
    "answer": "Erroneous guidance can appear believable during a transmitter failure or maintenance condition. Follow the outage information and use an authorized alternative.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, NAVAID outages",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-051",
    "category": "navigation",
    "question": "What is DME groundspeed most accurate at showing?",
    "answer": "The rate of change of slant distance to the station. It approximates aircraft groundspeed when flying directly toward or away, but can be misleading on crossing or orbiting tracks.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, DME indications",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-052",
    "category": "navigation",
    "question": "Why can DME time-to-station be misleading while flying abeam a station?",
    "answer": "Distance may be changing very slowly even though the airplane is moving quickly. The computed time is based on distance closure, not the time along the intended route.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, DME interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-053",
    "category": "navigation",
    "question": "What does an ADF relative bearing reference?",
    "answer": "The angle from the aircraft’s nose to the station. Combine it with heading to determine bearing, recognizing compass and ADF errors.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, ADF",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-054",
    "category": "navigation",
    "question": "Why does homing to an NDB differ from tracking a course to it?",
    "answer": "Homing keeps the needle near the nose and can produce a curved path in wind. Tracking uses a wind-corrected heading to maintain the desired ground course.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, ADF tracking",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-055",
    "category": "navigation",
    "question": "Why can lightning or precipitation static make an ADF misleading?",
    "answer": "The receiver can respond to interference rather than the intended beacon. Monitor identification and cross-check position with other references.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, ADF limitations",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-056",
    "category": "navigation",
    "question": "What makes a VOR cross-radial a useful route checkpoint?",
    "answer": "It provides an independent geographic crossing indication when the stations and geometry are appropriate. Plan the correct radial and recognize that reception and tolerances limit precision.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, Cross-radial fixes",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-057",
    "category": "navigation",
    "question": "How can a bearing to a known station help resolve a suspected GPS position error?",
    "answer": "It provides an independent line of position. Compare the observed bearing and other available information with the displayed GPS location instead of using GPS-derived bearings on both sides of the check.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, Independent verification",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-058",
    "category": "navigation",
    "question": "Why is the OBS course different from aircraft heading?",
    "answer": "OBS selects a reference course; heading is the direction the airplane points. Wind correction means a correct intercept or tracking heading often differs from the selected course.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, Course versus heading",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-059",
    "category": "navigation",
    "question": "What should be verified when switching a navigation receiver to its standby frequency?",
    "answer": "That the intended frequency became active, the station identifies correctly, and the indicator or audio panel is using that receiver. The standby window itself supplies no navigation guidance.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, Receiver operation",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-060",
    "category": "navigation",
    "question": "Why can two navigation displays agree yet share the same underlying error?",
    "answer": "They may use the same receiver, antenna, position source, or database. Independence concerns data sources as well as the number of screens.",
    "source": "FAA AIM 1-1, Navigation Aids, Navigation; FAA AIM, chapter 1, Common-source errors",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html"
  },
  {
    "id": "NAV-061",
    "category": "navigation",
    "question": "How do GPS bearing-to-waypoint and desired track differ?",
    "answer": "Bearing points from present position to the waypoint; desired track is the planned leg’s course. Steering directly to the bearing can abandon the planned route.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, GPS navigation fields",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-062",
    "category": "navigation",
    "question": "What does cross-track error show?",
    "answer": "Lateral displacement from the active course line. It does not directly show heading error or whether the remaining route is safe.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, GPS cross-track error",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-063",
    "category": "navigation",
    "question": "Why should the active leg be verified after changing a flight plan?",
    "answer": "The receiver may navigate to a different fix or sequence than intended. Check the map, course, distance, and active waypoint before following new guidance.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Flight-plan activation",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-064",
    "category": "navigation",
    "question": "What is the difference between editing a stored flight plan and activating it?",
    "answer": "Editing changes route data; activation tells the navigator which route or leg to use. Confirm the active guidance rather than assuming an edited plan is automatically being flown.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Flight-plan management",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-065",
    "category": "navigation",
    "question": "Why must identical waypoint names in different regions be treated cautiously?",
    "answer": "The chosen database entry may be far from the intended destination. Verify identifier, location, bearing, and distance before activation.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Waypoint selection",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-066",
    "category": "navigation",
    "question": "What should be checked when a nearest-airport list omits an expected airport?",
    "answer": "Database coverage, filters, runway criteria, airport status, and current position. Nearest lists can be configured to exclude otherwise nearby airports.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Nearest functions",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-067",
    "category": "navigation",
    "question": "Why is a GPS direct distance not the complete distance-to-go for fuel planning?",
    "answer": "It may exclude required routing, maneuvering, weather avoidance, approach, and diversion distance. Use a realistic flight path and reserve rather than a straight-line number alone.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Distance planning",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-068",
    "category": "navigation",
    "question": "What should a pilot verify before following an advisory GPS vertical profile VFR?",
    "answer": "Terrain, obstacles, airspace, weather, altimeter reference, and the aircraft’s limitations. A computed descent path is not an obstacle-clearance authorization.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Advisory vertical navigation",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-069",
    "category": "navigation",
    "question": "Why can a GPS estimated arrival time change sharply after a turn?",
    "answer": "The new leg can have a different wind component or speed. GPS prediction depends on its assumptions; compare the revised estimate with the fuel plan.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, ETA prediction",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-070",
    "category": "navigation",
    "question": "What hazard can a moving-map scale change introduce?",
    "answer": "Important terrain, airspace, or route details may disappear or become generalized. Select a useful scale and consult the underlying chart information.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Map scales",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-071",
    "category": "navigation",
    "question": "Why should an electronic route be inspected beyond the currently displayed map window?",
    "answer": "A hidden later segment can cross hazards or contain an unintended waypoint. Review the entire plan at appropriate scales before departure and after major edits.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Route review",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-072",
    "category": "navigation",
    "question": "How can an off-airport user waypoint create a navigation hazard?",
    "answer": "Coordinates may be inaccurate, lack obstacle information, or use a misleading label. Independently verify its position and purpose before treating it like a published fix.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, User waypoints",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-073",
    "category": "navigation",
    "question": "What does a GPS loss-of-integrity warning require the pilot to reassess?",
    "answer": "Whether that guidance remains suitable for the intended operation. Follow the equipment instructions, advise ATC when relevant, and use another approved navigation method or change the plan.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Integrity alerts",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-074",
    "category": "navigation",
    "question": "Why should a GPS groundspeed not be substituted for indicated airspeed during aircraft control?",
    "answer": "Groundspeed includes wind effects and does not measure aerodynamic stall margin or structural airspeed limits. Use the approved flight instruments and procedures.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Speed references",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "NAV-075",
    "category": "navigation",
    "question": "Why is a terrain display not a substitute for a safe VFR route and visibility?",
    "answer": "Terrain databases have coverage, accuracy, update, and display limitations. Maintain visual terrain clearance and appropriate planning margins instead of navigating into obscuration on a map alone.",
    "source": "FAA AIM 1-1-17, GPS; 1-2, RNAV system operation, Navigation; FAA AIM, chapter 1, Terrain displays",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html"
  },
  {
    "id": "COM-021",
    "category": "communications",
    "question": "What does an instruction to squawk a code require?",
    "answer": "Set that assigned transponder code and retain the required operating mode. It is not a clearance to enter airspace or change flightpath.",
    "source": "FAA AIM 4-1-19, Transponder Operation",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_1.html"
  },
  {
    "id": "COM-022",
    "category": "communications",
    "question": "What does IDENT ask the pilot to do?",
    "answer": "Briefly activate the transponder’s identification function when requested. Do not change the assigned code or use IDENT as an ordinary acknowledgment.",
    "source": "FAA AIM 4-1-19, Transponder Operation",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_1.html"
  },
  {
    "id": "COM-023",
    "category": "communications",
    "question": "How does squawk standby differ from stop altitude squawk?",
    "answer": "Standby suspends replies; stop altitude squawk disables altitude reporting while retaining other replies as directed. Use the installed controls correctly and clarify an ambiguous request.",
    "source": "FAA AIM 4-1-19, Transponder Operation",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_1.html"
  },
  {
    "id": "COM-024",
    "category": "communications",
    "question": "Why should an assigned heading be read as individual digits?",
    "answer": "Standard digit pronunciation reduces confusion with similar numbers. Include the direction of turn and call sign when reading back a heading instruction.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Numbers",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-025",
    "category": "communications",
    "question": "What should a pilot do after reading back the wrong altitude and hearing no correction?",
    "answer": "Correct the readback promptly and obtain confirmation if uncertain. Silence is not reliable proof that an erroneous readback became the clearance.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Readback errors",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-026",
    "category": "communications",
    "question": "How should a long or complex clearance be handled if it cannot be copied reliably?",
    "answer": "Request a slower repeat or the unclear portion, write it down, and confirm it before acting. Do not accept a clearance based on fragments.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Clearance copying",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-027",
    "category": "communications",
    "question": "What does verify ask for in an ATC exchange?",
    "answer": "Confirmation that the stated information or instruction is correct. Respond with the actual information and resolve any discrepancy rather than giving a vague acknowledgment.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Glossary: verify",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-028",
    "category": "communications",
    "question": "What does negative mean in aviation radio communication?",
    "answer": "No, permission not granted, or the stated information is incorrect, depending on context. If the consequence is unclear, request clarification.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Glossary: negative",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-029",
    "category": "communications",
    "question": "Why should the word takeoff be reserved carefully in runway communications?",
    "answer": "It distinguishes an actual takeoff clearance from other departure-related discussion. Clear phraseology helps prevent a pilot from mistaking a route or timing instruction for permission to roll.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Runway phraseology",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-030",
    "category": "communications",
    "question": "Does a departure frequency issued during taxi authorize takeoff?",
    "answer": "No. It supplies a frequency for later contact. A separate takeoff clearance is required at an operating tower.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Clearance meaning",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-031",
    "category": "communications",
    "question": "What should a pilot do if a takeoff clearance is heard while still unsure of runway identity?",
    "answer": "Remain clear or stop safely and verify the runway and clearance. Resolve the uncertainty before beginning the takeoff roll.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Runway verification",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-032",
    "category": "communications",
    "question": "Why does contact a new frequency differ from monitor it?",
    "answer": "Contact normally requires an initial call; monitor generally means listen and await the facility’s call. Follow the instruction and clarify if a response is needed.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Frequency changes",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-033",
    "category": "communications",
    "question": "What should happen if communication cannot be established after a frequency handoff?",
    "answer": "Recheck the frequency and radio selection, then return to the previous facility or use another appropriate means. Do not continue indefinitely assuming the handoff succeeded.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Handoff failures",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-034",
    "category": "communications",
    "question": "Why should the full facility name be used on an initial call?",
    "answer": "It identifies which station is being addressed, particularly on shared or remotely served frequencies. Calling only an aircraft identifier can leave both parties unsure of the intended recipient.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Initial contact",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-035",
    "category": "communications",
    "question": "What information helps ATC respond quickly to a request for immediate assistance?",
    "answer": "Aircraft identity, position, altitude, nature of the problem, intentions, and the assistance needed. Supply fuel and persons aboard when requested or operationally useful.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Emergency communication",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-036",
    "category": "communications",
    "question": "How should a pilot report fuel status when priority is actually required?",
    "answer": "Plainly declare the emergency and state the fuel problem. A minimum-fuel advisory alone does not request emergency handling.",
    "source": "FAA AIM 5-5, Minimum Fuel Advisory; Pilot/Controller Glossary",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_5.html"
  },
  {
    "id": "COM-037",
    "category": "communications",
    "question": "What does minimum fuel tell ATC?",
    "answer": "The flight cannot accept undue delay upon reaching the destination. It is an advisory, not an emergency declaration or automatic priority request.",
    "source": "FAA AIM 5-5, Minimum Fuel Advisory; Pilot/Controller Glossary",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_5.html"
  },
  {
    "id": "COM-038",
    "category": "communications",
    "question": "Why must a pilot promptly tell ATC that assigned traffic was lost from sight?",
    "answer": "A controller may have based instructions or separation on the reported visual contact. State the loss and obtain revised instructions rather than continuing a visual plan blindly.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Visual contact",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-039",
    "category": "communications",
    "question": "What does following traffic mean during a landing sequence?",
    "answer": "Identify the assigned aircraft and maintain the instructed sequence while preserving safe spacing. Ask for help if identification or wake spacing is uncertain.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Sequencing",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-040",
    "category": "communications",
    "question": "How should a pilot respond to an instruction to extend downwind when fuel or glide options are becoming limiting?",
    "answer": "State unable or request a specific alternative early. Do not accept an extension that places the aircraft in an unsafe position.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Traffic-pattern instructions",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-041",
    "category": "communications",
    "question": "Does a controller’s traffic description prove the other aircraft is at the reported position now?",
    "answer": "No. Reports and surveillance data can have delays or uncertainty. Scan a useful area around the called position and never maneuver solely toward an unverified target.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Traffic advisories",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-042",
    "category": "communications",
    "question": "Why should a student pilot identify as student on an initial ATC call?",
    "answer": "It helps controllers tailor assistance and avoid assuming experience the pilot does not yet have. It does not remove the pilot’s responsibility to state uncertainty or limitations.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Student pilots",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-043",
    "category": "communications",
    "question": "Why can transmitting immediately after keying a microphone lose the first part of a call?",
    "answer": "Some systems need a brief moment to activate. Use normal technique, speak clearly, and verify that the intended facility and call sign were received.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Microphone technique",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-044",
    "category": "communications",
    "question": "What should a pilot check before concluding that a quiet frequency means radio failure?",
    "answer": "Volume, audio-panel selection, active frequency, headset connections, transmit selection, and expected coverage. A quiet sector can also be normal.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Radio troubleshooting",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-045",
    "category": "communications",
    "question": "Why can one blocked transmission be dangerous even if both crews spoke correctly?",
    "answer": "Simultaneous calls may prevent the controller or pilots from hearing a clearance or warning. Verify any partially heard safety-critical instruction.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Blocked calls",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-046",
    "category": "communications",
    "question": "What does read back mean when ATC specifically requests it?",
    "answer": "Repeat the specified message or instruction so the controller can verify reception. A roger or wilco response does not supply the requested verification.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Glossary: read back",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-047",
    "category": "communications",
    "question": "Why should nonstandard abbreviations be avoided when reporting a fix?",
    "answer": "They can sound like another location or identifier. Use the published name and phonetic spelling when needed, particularly with similar-sounding fixes.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Fix identification",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-048",
    "category": "communications",
    "question": "How should a pilot communicate a request that standard phraseology does not express clearly?",
    "answer": "Use plain, concise language. Accurate mutual understanding takes priority over forcing an unfamiliar situation into an inappropriate standard phrase.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Plain language",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-049",
    "category": "communications",
    "question": "Why should unnecessary radio troubleshooting be deferred during an immediate aircraft-control problem?",
    "answer": "Flying the aircraft has priority. Stabilize and manage essential actions, then use remaining capacity or another crewmember for communications.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Workload management",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-050",
    "category": "communications",
    "question": "What does an ATC instruction to expedite require the pilot to consider?",
    "answer": "Respond promptly within safe aircraft limits. If the requested rate or maneuver cannot be achieved safely, say unable and provide the practical alternative.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Glossary: expedite",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-051",
    "category": "communications",
    "question": "Why must a pilot correct an incorrect aircraft type or position given by ATC?",
    "answer": "The controller may be using it for sequencing, performance expectations, or identification. Correct the error before it leads to an unsuitable instruction.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Information accuracy",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-052",
    "category": "communications",
    "question": "Can a request to report ready be treated as takeoff clearance?",
    "answer": "No. It asks for a status report. Remain clear of the runway as required until an explicit entry or takeoff clearance is issued.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Readiness reports",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-053",
    "category": "communications",
    "question": "What should a pilot do after hearing a radio instruction that conflicts with a previous restriction?",
    "answer": "Clarify the conflict before acting when safety permits. Do not silently choose the interpretation that is most convenient.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Conflicting instructions",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-054",
    "category": "communications",
    "question": "Why should a pilot avoid leaving a busy frequency just to obtain routine information without advising ATC?",
    "answer": "ATC may need an immediate response or issue a safety-critical instruction. Request a brief frequency change or use a second radio when appropriate.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Frequency monitoring",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-055",
    "category": "communications",
    "question": "How should a pilot report a short-final go-around?",
    "answer": "State the aircraft identification and going around when workload permits, then follow or clarify ATC instructions while flying the safe go-around. Do not wait for permission to reject an unsafe landing.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Go-around reports",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-056",
    "category": "communications",
    "question": "What does unable to accept LAHSO communicate?",
    "answer": "The pilot is declining a land-and-hold-short clearance. Advise ATC early so another clearance can be arranged; acceptance requires suitable aircraft, performance, conditions, and proficiency.",
    "source": "FAA AIM 4-3-11, Pilot Responsibilities When Conducting Land and Hold Short Operations",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html"
  },
  {
    "id": "COM-057",
    "category": "communications",
    "question": "What should a pilot report if a landing clearance cannot be complied with after acceptance?",
    "answer": "Inform ATC immediately and state the problem and intentions. Safety takes priority, and ATC needs to protect other traffic.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Landing clearance changes",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-058",
    "category": "communications",
    "question": "Why must a pilot request clarification of an unfamiliar local reporting point?",
    "answer": "Guessing can give ATC a false traffic picture or place the aircraft on the wrong route. Ask for location or an alternative instruction before proceeding.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Local knowledge",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-059",
    "category": "communications",
    "question": "How should a pilot communicate turbulence that prevents accurate altitude holding?",
    "answer": "Tell ATC promptly, describe the condition and altitude difficulty, and request an appropriate clearance or assistance. Avoid silently exceeding clearances while trying to appear precise.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Turbulence reports",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "COM-060",
    "category": "communications",
    "question": "Why should a radio call give the actual limitation rather than just not comfortable?",
    "answer": "A concrete limitation—such as unable to maintain the requested speed—helps ATC offer a workable alternative. State the necessary safety constraint clearly without lengthy explanation.",
    "source": "FAA AIM 4-2, Radio Communications; Pilot/Controller Glossary, Radio Communications; Pilot/Controller Glossary, Operational limitations",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html"
  },
  {
    "id": "AS-051",
    "category": "airspace",
    "question": "What does a minus sign before a Class D charted ceiling indicate?",
    "answer": "The ceiling altitude is excluded from that Class D area. Read the boxed altitude and any applicable chart notes rather than assuming the top is included.",
    "source": "FAA AIM, 3-2, Class D chart depiction",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-052",
    "category": "airspace",
    "question": "Does flying exactly at a Class B shelf floor keep an aircraft below the shelf?",
    "answer": "No. Plan a clear altitude margin below the floor if remaining outside. Include altimeter accuracy, turbulence, terrain clearance, and the actual charted boundary.",
    "source": "FAA AIM, 3-2, Class B boundaries",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-053",
    "category": "airspace",
    "question": "Why must charted MSL airspace altitudes not be confused with AGL?",
    "answer": "An MSL floor is referenced to sea level, while terrain elevation changes underneath it. Subtracting airport elevation once is not a reliable AGL value throughout a route.",
    "source": "FAA AIM, 3-2, Altitude references",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-054",
    "category": "airspace",
    "question": "Why should a VFR route under a shelf include a lateral alternative?",
    "answer": "Clouds, terrain, or altimeter uncertainty may remove the planned vertical gap. A lateral route can preserve legal weather and terrain clearance without an unintended airspace entry.",
    "source": "FAA AIM, 3-2, Airspace planning",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-055",
    "category": "airspace",
    "question": "Does every operating control tower necessarily have a Class D surface area?",
    "answer": "No. Some towers operate where suitable weather reporting for a controlled surface area is unavailable. Check the charted airspace and communicate with the operating tower.",
    "source": "FAA AIM, 3-2, AIM 4-3-2",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-056",
    "category": "airspace",
    "question": "Is the usual Class C outer area itself additional Class C airspace?",
    "answer": "No. It is a nonregulatory service area associated with the Class C facility. Participation and services there do not change the underlying airspace class.",
    "source": "FAA AIM, 3-2, Class C services",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-057",
    "category": "airspace",
    "question": "What should be checked when a sectional shows stacked Class B altitude numbers?",
    "answer": "The numbers identify that sector’s ceiling and floor in hundreds of feet MSL. Follow the boundary lines carefully so an adjacent sector’s floor is not applied to the wrong location.",
    "source": "FAA AIM, 3-2, Class B chart reading",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-058",
    "category": "airspace",
    "question": "Why must approach-control contact not be assumed to satisfy every tower instruction?",
    "answer": "Services, frequencies, and clearances have distinct purposes. Follow the handoff and operating requirements for the actual airport and airspace.",
    "source": "FAA AIM, 3-2, Terminal communications",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-059",
    "category": "airspace",
    "question": "What does a dashed magenta airport boundary normally depict on a sectional?",
    "answer": "A Class E surface area. It differs from the shaded magenta transition-area vignette, where Class E begins above the surface.",
    "source": "FAA AIM, 3-2, Class E chart depiction",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-060",
    "category": "airspace",
    "question": "What does a dashed blue boundary normally depict on a sectional?",
    "answer": "A Class D surface area. Read the associated altitude, hours, and airport information; the line alone does not establish that the tower is open now.",
    "source": "FAA AIM, 3-2, Class D chart depiction",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-061",
    "category": "airspace",
    "question": "Why should an airport’s radio communication outlet information be checked before relying on Flight Service contact?",
    "answer": "Some outlets use different transmit and receive arrangements or limited coverage. Read the published frequencies and instructions rather than assuming one frequency provides both directions.",
    "source": "FAA AIM, 4-3, Radio outlets",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html"
  },
  {
    "id": "AS-062",
    "category": "airspace",
    "question": "Can a UNICOM operator issue an ATC landing clearance?",
    "answer": "No. UNICOM provides advisory services, not air traffic control. At a non-towered airport, pilots coordinate and follow applicable rules without treating advice as a clearance.",
    "source": "FAA AIM, 4-3, UNICOM",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html"
  },
  {
    "id": "AS-063",
    "category": "airspace",
    "question": "How does a CTAF differ from the service name UNICOM?",
    "answer": "CTAF is the frequency used for airport traffic advisories; UNICOM is an advisory service that may operate on that frequency. A CTAF can also be a tower frequency when the tower is closed.",
    "source": "FAA AIM, 4-3, Advisory frequencies",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html"
  },
  {
    "id": "AS-064",
    "category": "airspace",
    "question": "Why should a destination’s automated weather frequency be checked before arrival?",
    "answer": "It may differ from CTAF, use a telephone or voice outlet, or have limited reporting capabilities. Plan how to obtain current conditions without losing essential communications.",
    "source": "FAA AIM, 4-3, Airport weather information",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html"
  },
  {
    "id": "AS-065",
    "category": "airspace",
    "question": "What does prior-permission-required airport status mean for trip planning?",
    "answer": "Obtain the specified permission before using the airport. A charted runway and suitable weather do not establish public access or permission to land.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-066",
    "category": "airspace",
    "question": "Why is a charted fuel symbol insufficient for a fuel-critical diversion?",
    "answer": "Fuel type, hours, payment arrangements, outages, or staffing may change. Confirm availability when practical and preserve another viable option.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-067",
    "category": "airspace",
    "question": "A familiar airport’s runway is closed by NOTAM. Does a clear-looking runway make it usable?",
    "answer": "No. Verify the closure and any authorized exceptions. Physical appearance or lack of visible work does not cancel a published closure.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-068",
    "category": "airspace",
    "question": "Why do airport construction NOTAMs deserve a diagram review?",
    "answer": "Construction may change taxi routes, runway access, markings, lighting, or available distances. Brief the current configuration instead of relying on memory.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-069",
    "category": "airspace",
    "question": "What is an airport hot spot?",
    "answer": "A location with a history or potential risk of collision or runway incursion requiring heightened attention. Study its specific geometry and instructions before taxi.",
    "source": "FAA AIM, 4-3, Hot spots",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html"
  },
  {
    "id": "AS-070",
    "category": "airspace",
    "question": "Why should airport-diagram orientation be compared with the actual aircraft position before taxi?",
    "answer": "A correctly read diagram can still be followed from the wrong starting point. Confirm ramp exit, compass direction, taxiway identification, and the intended first turn.",
    "source": "FAA AIM, 4-3, Airport diagrams",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html"
  },
  {
    "id": "AS-071",
    "category": "airspace",
    "question": "What is the purpose of an ILS critical-area holding position?",
    "answer": "It protects sensitive ILS signal areas from interference by aircraft or vehicles. Hold there when instructed or required, even though it may be farther from the runway than the normal holding position.",
    "source": "FAA AIM, 2-3, ILS critical-area markings",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html"
  },
  {
    "id": "AS-072",
    "category": "airspace",
    "question": "What can a runway-approach holding-position sign protect?",
    "answer": "The approach or departure airspace of a runway, which can be affected by an aircraft on a taxiway. Comply with the applicable hold instruction rather than assuming no runway crossing means no restriction.",
    "source": "FAA AIM, 2-3, Approach holding positions",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html"
  },
  {
    "id": "AS-073",
    "category": "airspace",
    "question": "What do runway distance-remaining signs display?",
    "answer": "The runway remaining in thousands of feet. Use them for awareness, but apply the aircraft’s planned performance and reject criteria rather than improvising a new high-speed decision.",
    "source": "FAA AIM, 2-3, Distance-remaining signs",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html"
  },
  {
    "id": "AS-074",
    "category": "airspace",
    "question": "What does a transverse white threshold bar identify?",
    "answer": "The beginning of the runway portion available for landing in that direction, including a displaced threshold when applicable. Verify the usable landing distance.",
    "source": "FAA AIM, 2-3, Threshold markings",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html"
  },
  {
    "id": "AS-075",
    "category": "airspace",
    "question": "Are painted runway aiming-point blocks a command to touch down exactly on them?",
    "answer": "No. They are visual aiming references. Actual touchdown follows the flare and must remain within the aircraft’s safe, planned landing area.",
    "source": "FAA AIM, 2-3, Aiming points",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html"
  },
  {
    "id": "AS-076",
    "category": "airspace",
    "question": "Why must a taxiway centerline leading onto a runway not be treated as an entry authorization?",
    "answer": "It is alignment guidance only. Required runway-entry or crossing clearance still applies, regardless of where the painted line leads.",
    "source": "FAA AIM, 2-3, Taxiway markings",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html"
  },
  {
    "id": "AS-077",
    "category": "airspace",
    "question": "What do dashed lines alongside a taxiway centerline near a runway help signal?",
    "answer": "An enhanced centerline warns of an upcoming runway holding position. Prepare to identify the runway and stop at the required marking.",
    "source": "FAA AIM, 2-3, Enhanced taxiway centerlines",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html"
  },
  {
    "id": "AS-078",
    "category": "airspace",
    "question": "What are airport surface geographic-position markings used for?",
    "answer": "They identify specific surface locations, often supporting low-visibility taxi procedures. Use the current airport diagram and clearance to determine their operational significance.",
    "source": "FAA AIM, 2-3, Geographic-position markings",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html"
  },
  {
    "id": "AS-079",
    "category": "airspace",
    "question": "How should a runway marked with closure Xs be treated?",
    "answer": "As closed to the indicated use. Confirm airport status and NOTAMs, and do not interpret the markings as optional advice because the pavement looks usable.",
    "source": "FAA AIM, 2-3, Closed surfaces",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_3.html"
  },
  {
    "id": "AS-080",
    "category": "airspace",
    "question": "What runway distance matters when deciding whether to accept a land-and-hold-short clearance?",
    "answer": "The available landing distance to the designated hold-short point, not the full runway length. Verify the published distance and that aircraft performance, conditions, and proficiency permit stopping within it.",
    "source": "FAA AIM 4-3-11, Pilot Responsibilities When Conducting Land and Hold Short Operations",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_3.html"
  },
  {
    "id": "AS-081",
    "category": "airspace",
    "question": "Do extinguished runway status lights mean a pilot has permission to enter or take off?",
    "answer": "No. They provide an independent warning system, not an ATC clearance. Absence of red lights does not replace the required clearance and visual checks.",
    "source": "FAA AIM, 2-1, Runway status lights",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-082",
    "category": "airspace",
    "question": "What should a pilot do if a red stop bar conflicts with an ATC taxi clearance?",
    "answer": "Stop and resolve the discrepancy with ATC before proceeding. Do not assume the clearance silently authorizes crossing an illuminated stop bar.",
    "source": "FAA AIM, 2-1, Stop bars",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-083",
    "category": "airspace",
    "question": "What do flashing yellow runway guard lights warn of?",
    "answer": "A runway holding position is nearby. They improve conspicuity but do not authorize entry or replace signs, markings, and clearances.",
    "source": "FAA AIM, 2-1, Runway guard lights",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-084",
    "category": "airspace",
    "question": "What is the purpose of runway end identifier lights?",
    "answer": "They help identify the approach end of a runway using synchronized flashing lights. They do not provide lateral or vertical instrument guidance.",
    "source": "FAA AIM, 2-1, REIL",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-085",
    "category": "airspace",
    "question": "What does the transition toward red runway-centerline lights tell a landing pilot?",
    "answer": "The runway end is approaching. Recognize the color progression as a distance cue while maintaining directional control and the required deceleration.",
    "source": "FAA AIM, 2-1, Runway centerline lighting",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-086",
    "category": "airspace",
    "question": "Why can taxiway centerline lighting change color near protected runway areas?",
    "answer": "Alternating green and yellow identifies specified protected segments. Interpret it with the airport diagram and holding requirements rather than treating all green-looking lights as unrestricted taxi guidance.",
    "source": "FAA AIM, 2-1, Taxiway lighting",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-087",
    "category": "airspace",
    "question": "What should a pilot verify before keying the microphone to activate airport lighting?",
    "answer": "The published lighting-control frequency, activation method, availability, and any shared-frequency effects. Confirm the desired runway actually illuminates before relying on it.",
    "source": "FAA AIM, 2-1, Pilot-controlled lighting",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-088",
    "category": "airspace",
    "question": "Does an operating airport beacon during daylight establish that the field is IFR?",
    "answer": "No. It may indicate lower conditions at some controlled airports, but beacon operation is not a weather report. Obtain current observations and determine the applicable rules.",
    "source": "FAA AIM, 2-1, Airport beacons",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-089",
    "category": "airspace",
    "question": "What does a civil land-airport rotating beacon normally show?",
    "answer": "Alternating white and green flashes. Use it to help locate the airport, then confirm identity and runway alignment with other references.",
    "source": "FAA AIM, 2-1, Airport identification",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-090",
    "category": "airspace",
    "question": "Why should visual glidepath indications not be followed while far off the runway centerline?",
    "answer": "Their obstacle-protection coverage has lateral and distance limits. Establish the required visual alignment and check published restrictions before descending on the indication.",
    "source": "FAA AIM, 2-1, Visual glidepath coverage",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-091",
    "category": "airspace",
    "question": "What can the Chart Supplement tell a pilot about a displaced or restricted visual glidepath?",
    "answer": "It may describe offsets, limited coverage, unusual angles, or obstructions. Familiar red-and-white indications do not guarantee a standard installation.",
    "source": "FAA AIM, 2-1, Visual aid limitations",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "AS-092",
    "category": "airspace",
    "question": "How does an airport elevation differ from an obstacle height marked AGL?",
    "answer": "Airport elevation is referenced to mean sea level; AGL height is above local ground. Compare values only after accounting for their reference and location.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-093",
    "category": "airspace",
    "question": "Why can an obstacle’s charted MSL elevation matter more than its AGL height along a route?",
    "answer": "It identifies the obstacle’s top relative to the aircraft’s altitude reference. A short structure on high terrain can be higher MSL than a tall tower on low terrain.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-094",
    "category": "airspace",
    "question": "Why should airport runway lengths be confirmed from detailed information rather than estimated from the sectional symbol?",
    "answer": "A symbol gives an overview and may not show declared distances, closures, slope, or actual usable runway. Use current detailed airport data for performance decisions.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-095",
    "category": "airspace",
    "question": "What is the practical difference between airport ownership and public-use status?",
    "answer": "A privately owned airport can be public use, and ownership alone does not determine access. Check published use restrictions and permission requirements.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-096",
    "category": "airspace",
    "question": "Why should an airport’s traffic-pattern altitude be obtained instead of assumed?",
    "answer": "Published altitudes can vary with aircraft category and local requirements. Use the applicable airport information and maintain separation from other pattern flows.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-097",
    "category": "airspace",
    "question": "Why are noise-abatement procedures part of arrival planning?",
    "answer": "They may affect runway choice, routes, or operating practices. Review them in advance while preserving regulatory compliance, aircraft limitations, and safety.",
    "source": "FAA Chart Supplement, airport data and local procedures; FAA PHAK chapter 16, chart interpretation",
    "sourceUrl": "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/"
  },
  {
    "id": "AS-098",
    "category": "airspace",
    "question": "Why must a stadium or event-related flight restriction be checked separately from permanent charted airspace?",
    "answer": "Temporary restrictions may apply without appearing as a permanent sectional boundary. Review current applicable restrictions and their exact area, time, altitude, and exceptions.",
    "source": "FAA AIM, 3-5, Temporary restrictions",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_5.html"
  },
  {
    "id": "AS-099",
    "category": "airspace",
    "question": "Does receiving flight following automatically authorize entry into every controlled-airspace area along the route?",
    "answer": "No. The pilot still must meet each area’s clearance or communication requirements. Verify the authorization before crossing a boundary.",
    "source": "FAA AIM, 3-2, Airspace transitions",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "AS-100",
    "category": "airspace",
    "question": "How should a pilot handle a charted airspace boundary whose position cannot be determined confidently?",
    "answer": "Remain clearly outside with suitable altitude and lateral margins, identify the position using reliable references, or obtain the required authorization. Do not use display precision to conceal uncertainty.",
    "source": "FAA AIM, 3-2, Boundary uncertainty",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap3_section_2.html"
  },
  {
    "id": "EM-011",
    "category": "emergencies",
    "question": "Why should a pilot select a forced-landing area before attempting an engine restart?",
    "answer": "Troubleshooting can consume the altitude needed to reach a survivable site. Establish the landing plan while maintaining control, then perform appropriate restart checks if time permits.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-012",
    "category": "emergencies",
    "question": "What makes the largest visible field an unsuitable forced-landing choice?",
    "answer": "Obstacles, wires, slope, surface, approach path, or distance may make it unreachable or hazardous. Choose a reachable site with a survivable approach.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-013",
    "category": "emergencies",
    "question": "Why should a forced-landing pilot continually reassess the selected field?",
    "answer": "Wind, height, sink, and newly visible obstacles can change reachability. Refine the plan early rather than making a desperate low turn at the end.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-014",
    "category": "emergencies",
    "question": "How should wind affect a power-off landing-site choice?",
    "answer": "Consider drift, reach, and touchdown groundspeed as well as terrain and obstacles. A manageable into-wind site is useful only if it is reachable and survivable.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-015",
    "category": "emergencies",
    "question": "Why is maintaining the published glide speed important after power loss?",
    "answer": "It preserves the intended glide performance and control margin. Flying too slowly to stretch the glide can increase sink and lead to a stall.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-016",
    "category": "emergencies",
    "question": "Why should a forced landing avoid an excessive attempt to reach a distant runway?",
    "answer": "An airport beyond gliding reach is not a usable option. A controlled landing short of it may be far more survivable than stalling while trying to reach pavement.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-017",
    "category": "emergencies",
    "question": "How can a turn immediately after engine failure consume landing options?",
    "answer": "Bank increases lift demand and usually sink, while changing wind and geometry. Use only a turn supported by height, speed, terrain, and the landing plan.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-018",
    "category": "emergencies",
    "question": "Why must a turnback after takeoff be evaluated before departure rather than improvised?",
    "answer": "Actual height, reaction delay, wind, runway geometry, and aircraft performance determine feasibility. No universal altitude makes the maneuver safe.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-019",
    "category": "emergencies",
    "question": "What should a pre-takeoff engine-failure briefing identify?",
    "answer": "Usable landing areas, likely flightpath, aircraft-specific immediate actions, and limits on turning back. Keep the plan simple enough to use under stress.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-020",
    "category": "emergencies",
    "question": "Why should an off-airport landing emphasize a controlled touchdown?",
    "answer": "Occupant survival depends strongly on impact speed, attitude, and deceleration. Preserve control even when the surface is imperfect.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-021",
    "category": "emergencies",
    "question": "Why should a pilot avoid a late steep turn to align with a forced-landing field?",
    "answer": "The low-altitude stall risk can outweigh the benefit of alignment. Favor a controlled landing using available space.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-022",
    "category": "emergencies",
    "question": "What should occupants be told before an anticipated emergency landing?",
    "answer": "Give clear instructions on restraints, brace position, exits, loose items, and when to evacuate, using the aircraft's procedures and available time.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-023",
    "category": "emergencies",
    "question": "Why should loose cabin objects be secured before a forced landing when time permits?",
    "answer": "They can injure occupants, obstruct controls, or block exits during deceleration. Assign simple tasks without distracting from aircraft control.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-024",
    "category": "emergencies",
    "question": "When should a pilot communicate the forced-landing location?",
    "answer": "As early as workload permits, using a clear position and intentions. Transmit useful information before descending out of radio coverage, without sacrificing control.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-025",
    "category": "emergencies",
    "question": "Why can extending landing gear be the wrong generic answer for every forced landing?",
    "answer": "Surface, aircraft design, and the approved procedure determine the choice. A water, soft-ground, or rough-terrain landing may require a different configuration.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-026",
    "category": "emergencies",
    "question": "Why must flap use during a power-off approach account for reach?",
    "answer": "Flaps change drag and glide capability. Delay irreversible loss of range until the landing area is assured, consistent with the aircraft procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-027",
    "category": "emergencies",
    "question": "What should happen if the engine restarts during a forced-landing approach?",
    "answer": "Reassess reliability, altitude, and options. A momentary restart is not proof the failure is resolved; choose a conservative landing plan.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-028",
    "category": "emergencies",
    "question": "Why should a pilot avoid repeated restart attempts with evidence of engine fire or serious damage?",
    "answer": "Restarting may feed a fire or worsen damage. Follow the aircraft's specific shutdown and landing procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-029",
    "category": "emergencies",
    "question": "What is the practical concern with partial power rather than complete power loss?",
    "answer": "Performance may be insufficient or unpredictable. Preserve a reachable landing option instead of assuming the remaining power will last.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-030",
    "category": "emergencies",
    "question": "How should abnormal oil pressure and rising temperature together affect a flight?",
    "answer": "Treat the combined indications as a potentially serious engine problem, use the checklist, and plan an early landing before power deteriorates further.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-031",
    "category": "emergencies",
    "question": "Why should severe engine vibration prompt an early landing decision?",
    "answer": "It may signal mechanical damage and can worsen rapidly. Maintain control, use approved power or shutdown guidance, and avoid unnecessary continued flight.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-032",
    "category": "emergencies",
    "question": "What is the danger of treating rough running as definitely carburetor ice?",
    "answer": "Fuel, ignition, mechanical, and other failures can look similar. Apply the approved diagnostic sequence while preserving a landing option.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-033",
    "category": "emergencies",
    "question": "Why should a pilot verify fuel-tank selection during an appropriate power-loss checklist?",
    "answer": "Fuel may be unavailable from the selected source even when total fuel remains. Use the correct selector procedure and avoid blindly moving controls.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-034",
    "category": "emergencies",
    "question": "Why is total fuel quantity not proof that the engine can receive fuel?",
    "answer": "Tank selection, pump failure, blocked vents, contamination, or damaged lines can interrupt delivery. Troubleshoot only as the approved procedure directs.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-035",
    "category": "emergencies",
    "question": "What should a pilot do after suspecting fuel contamination in flight?",
    "answer": "Manage engine indications, use the aircraft checklist, and choose a prompt suitable landing. Do not assume switching tanks always eliminates contamination.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-036",
    "category": "emergencies",
    "question": "Why is an unexplained fuel smell in the cockpit an urgent abnormal indication?",
    "answer": "It can indicate a leak and fire risk. Use the aircraft's leak or fire procedure, avoid ignition hazards as instructed, and prepare to land.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-037",
    "category": "emergencies",
    "question": "Why must smoke source identification not delay immediate protection and landing planning?",
    "answer": "A hidden fire can grow rapidly while occupants lose visibility or breathing capability. Follow immediate procedures and establish a safe landing plan.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-038",
    "category": "emergencies",
    "question": "What should happen if smoke returns after an electrical item is switched back on?",
    "answer": "Follow the approved fire or electrical procedure and avoid repeatedly reenergizing the suspected source. A temporarily clear cockpit does not prove safety.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-039",
    "category": "emergencies",
    "question": "Why should a pilot know the approved extinguisher's limitations before an emergency?",
    "answer": "Agent type, discharge duration, visibility, and breathing concerns affect its safe use. Learn the aircraft's procedure before smoke and stress reduce capacity.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-040",
    "category": "emergencies",
    "question": "Why can opening vents be inappropriate for some in-flight fire situations?",
    "answer": "Airflow can feed a fire or spread smoke. Follow the aircraft-specific smoke-removal or fire procedure rather than a universal ventilation rule.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-041",
    "category": "emergencies",
    "question": "What should a pilot do after an in-flight fire appears extinguished?",
    "answer": "Continue the approved response and land as the procedure requires. Hidden damage and reignition remain possible.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-042",
    "category": "emergencies",
    "question": "Why is a cabin door opening in flight usually managed without abrupt maneuvering?",
    "answer": "Startle can cause a loss of control greater than the door hazard. Fly the aircraft and follow the specific door-open procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-043",
    "category": "emergencies",
    "question": "Why should pilots not attempt to reach outside to close an open door in flight?",
    "answer": "It can disturb control, expose occupants, and worsen the problem. Use the approved procedure and land if needed.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-044",
    "category": "emergencies",
    "question": "What should a pilot do if the aircraft's controls become unusually stiff or restricted?",
    "answer": "Maintain the safest controllable flightpath, avoid forcing a jam, use the applicable checklist, and seek a suitable landing with assistance.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-045",
    "category": "emergencies",
    "question": "Why should passengers be briefed not to obstruct the flight controls?",
    "answer": "A bag, foot, or loose object can restrict control travel at a critical moment. Clear obstructions without compromising aircraft control.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-046",
    "category": "emergencies",
    "question": "What should a pilot do after suspecting runaway trim?",
    "answer": "Maintain control, apply the aircraft's immediate trim-disconnect or power-isolation actions as trained, and use the approved checklist. Do not fight indefinitely without addressing the source.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-047",
    "category": "emergencies",
    "question": "Why must an autopilot be disconnected when the approved failure procedure requires it?",
    "answer": "A malfunctioning system can continue commanding an unsafe attitude or trim. Positive manual control must replace unreliable automation.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-048",
    "category": "emergencies",
    "question": "What is the priority when an instrument indication becomes obviously implausible in VMC?",
    "answer": "Keep visual control, compare reliable information, and use the failure procedure. Do not chase a suspect indication into an unsafe attitude.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-049",
    "category": "emergencies",
    "question": "Why can a landing-gear unsafe indication require more than recycling the switch?",
    "answer": "The problem may involve mechanical damage, power, sensors, or the extension system. Use the approved checklist and alternate-extension procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-050",
    "category": "emergencies",
    "question": "How should a pilot prepare for a landing with uncertain gear status?",
    "answer": "Use the aircraft checklist, request assistance, brief occupants, and select an appropriate landing location. Avoid speculative maneuvers intended to force the gear down.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-051",
    "category": "emergencies",
    "question": "Why should flap failure change the approach plan early?",
    "answer": "The required speed, descent path, and landing distance may change. Use approved data and choose a runway with adequate margin.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-052",
    "category": "emergencies",
    "question": "What should a pilot do if a brake problem is discovered while taxiing?",
    "answer": "Stop safely if possible and obtain assistance before takeoff. A controllable taxi defect can become a serious landing or rejected-takeoff hazard.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-053",
    "category": "emergencies",
    "question": "Why is asymmetric braking during rollout a directional-control problem?",
    "answer": "Unequal deceleration can cause yaw or a ground loop. Use the aircraft's directional-control and braking procedure rather than an improvised forceful response.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-054",
    "category": "emergencies",
    "question": "How should a suspected tire failure affect runway handling?",
    "answer": "Maintain directional control, avoid abrupt braking or steering, and follow the aircraft procedure. Stop where safe and request assistance rather than taxiing blindly.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-055",
    "category": "emergencies",
    "question": "What should a pilot do if a bird strike is followed by abnormal engine indications?",
    "answer": "Maintain control, assess using the approved checklist, and plan a suitable landing. A visible bird strike does not establish the full damage extent.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-056",
    "category": "emergencies",
    "question": "Why should a windshield strike or crack prompt a conservative plan?",
    "answer": "Visibility, structural integrity, and pressure capability may be affected. Apply the aircraft's limitations and abnormal procedure rather than touching or loading the damaged area.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-057",
    "category": "emergencies",
    "question": "What should a crew do if a passenger becomes incapacitated in a small airplane?",
    "answer": "Maintain aircraft control, enlist available assistance, communicate the medical concern, and choose an appropriate diversion without attempting treatment beyond training.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-058",
    "category": "emergencies",
    "question": "Why should an emergency diversion consider runway length as well as distance?",
    "answer": "Aircraft configuration, brakes, weather, terrain, and rescue capability may make a slightly farther airport the safer usable choice.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-059",
    "category": "emergencies",
    "question": "What should a pilot tell ATC when uncertain whether the aircraft can reach the assigned airport?",
    "answer": "State the actual limitation and intentions promptly. Do not accept an unreachable option merely because a controller suggested it.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-060",
    "category": "emergencies",
    "question": "How should a pilot prioritize landing after a suspected control-cable or linkage failure if the airplane remains controllable?",
    "answer": "Use the approved procedure and the least demanding suitable landing option. Avoid unnecessary configuration changes or maneuvers that could expose a control limit before the landing plan is ready.",
    "source": "FAA Airplane Flying Handbook chapter 18 — Flight control malfunctions",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-061",
    "category": "emergencies",
    "question": "How should limited altitude affect checklist execution after takeoff?",
    "answer": "Perform only the trained time-critical actions possible while maintaining control and selecting a landing path. Avoid searching for nonessential items while height disappears.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-062",
    "category": "emergencies",
    "question": "Why should a pilot explicitly transfer control before another crewmember troubleshoots?",
    "answer": "It prevents both pilots being head-down or both manipulating controls. Establish one pilot flying and clear supporting duties.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-063",
    "category": "emergencies",
    "question": "Why is concise emergency communication better than a long technical explanation?",
    "answer": "ATC needs the nature of the problem, location, intentions, and immediate assistance needed. Detailed troubleshooting can wait until workload permits.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-064",
    "category": "emergencies",
    "question": "What should a pilot do if the assigned emergency frequency cannot be reached?",
    "answer": "Use an available working frequency, guard, relay aircraft, or other installed communication as appropriate. Do not spend all attention on one failed channel.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-065",
    "category": "emergencies",
    "question": "Why should transponder emergency selection not replace a distress transmission when radio works?",
    "answer": "The code alerts surveillance systems, but voice conveys the problem and desired assistance. Use both as appropriate to the circumstances.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-066",
    "category": "emergencies",
    "question": "Why must rescue personnel be told about an installed ballistic recovery system after an accident?",
    "answer": "Unfired rockets and related components can remain hazardous. Identify the system and keep people clear until qualified responders manage it.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-067",
    "category": "emergencies",
    "question": "What should a pilot consider before deciding whether to use an installed aircraft parachute?",
    "answer": "The approved envelope, remaining control, altitude, terrain, and aircraft procedure. Learn the decision criteria before flight rather than inventing them during the event.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-068",
    "category": "emergencies",
    "question": "Why should passengers know where and how to evacuate after landing?",
    "answer": "The pilot may be injured or occupied. A short preflight and emergency briefing can allow prompt self-rescue when instructed.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-069",
    "category": "emergencies",
    "question": "Why should baggage be left behind during an urgent aircraft evacuation?",
    "answer": "Retrieving it delays escape and can block exits or injure others. Move clear of the aircraft under the applicable procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-070",
    "category": "emergencies",
    "question": "What should be checked before moving away from an emergency-landing site?",
    "answer": "Immediate fire, fuel, terrain, weather, injuries, and signaling options. Move to safety without unnecessarily making rescuers' search harder.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-071",
    "category": "emergencies",
    "question": "Why can staying near a downed aircraft help rescuers when the location is safe?",
    "answer": "The aircraft is larger and easier to locate than individuals. Balance that benefit against fire, weather, terrain, and other immediate threats.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-072",
    "category": "emergencies",
    "question": "Why should an ELT or personal locator device be checked after an emergency landing?",
    "answer": "Impact activation is not guaranteed. Use accessible approved activation and signaling methods if safe, and communicate position by available means.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-073",
    "category": "emergencies",
    "question": "What should a pilot do with an activated emergency beacon after a genuine accident?",
    "answer": "Leave it operating as appropriate until rescue coordination or the equipment procedure directs otherwise. Do not silence the best locating signal merely to save power without a plan.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-074",
    "category": "emergencies",
    "question": "Why should an injured occupant not be moved unnecessarily after a forced landing?",
    "answer": "Movement can worsen injuries. Move only when immediate hazards or essential care require it and obtain medical assistance when possible.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "EM-075",
    "category": "emergencies",
    "question": "What is the value of preserving a factual post-emergency account?",
    "answer": "It supports maintenance inspection, safety reporting, and learning. Record observed indications and actions without substituting assumptions for facts.",
    "source": "FAA Airplane Flying Handbook, chapter 18 — Emergency Procedures",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "HF-021",
    "category": "human-factors",
    "question": "What is hypemic hypoxia?",
    "answer": "Inadequate oxygen carriage by the blood, such as from anemia or carbon-monoxide exposure. Normal ambient oxygen does not guarantee adequate oxygen delivery to tissues.",
    "source": "FAA PHAK, chapter 17, hypoxia",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-022",
    "category": "human-factors",
    "question": "What is stagnant hypoxia?",
    "answer": "Inadequate blood flow delivering oxygen to tissues. Circulatory problems, cold, or acceleration forces can contribute even when oxygen content in the lungs is adequate.",
    "source": "FAA PHAK, chapter 17, hypoxia",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-023",
    "category": "human-factors",
    "question": "What is histotoxic hypoxia?",
    "answer": "Cells cannot use available oxygen effectively, for example because of certain toxic substances. Adding oxygen does not make the underlying toxic impairment safe for flight.",
    "source": "FAA PHAK, chapter 17, hypoxia",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-024",
    "category": "human-factors",
    "question": "Why should a carbon-monoxide detector be treated as preventive equipment rather than a replacement for symptoms awareness?",
    "answer": "Detector power, placement, service life, and operation matter. Treat symptoms or a warning seriously, obtain fresh air as appropriate, use the emergency procedure, and land promptly.",
    "source": "FAA AIM 8-1-1, carbon monoxide",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-025",
    "category": "human-factors",
    "question": "Can the absence of an exhaust smell rule out carbon monoxide?",
    "answer": "No. Carbon monoxide itself is colorless and odorless. An odor may warn of exhaust, but its absence does not establish safe cabin air.",
    "source": "FAA AIM 8-1-1, carbon monoxide",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-026",
    "category": "human-factors",
    "question": "Why can smoking reduce a pilot’s altitude tolerance?",
    "answer": "Carbon monoxide reduces the blood’s oxygen-carrying capacity. The resulting oxygen deficit can add to altitude effects, including impaired night vision.",
    "source": "FAA PHAK, chapter 17, hypoxia and carbon monoxide",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-027",
    "category": "human-factors",
    "question": "What does time of useful consciousness describe?",
    "answer": "The interval during an oxygen-deficient exposure when purposeful, effective action is still possible. It varies greatly and is not a dependable countdown for delaying oxygen use.",
    "source": "FAA PHAK, chapter 17, hypoxia",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-028",
    "category": "human-factors",
    "question": "Why should symptoms learned in supervised hypoxia training be treated as warning cues rather than a complete diagnostic checklist?",
    "answer": "Individual responses can vary with conditions and exposure. Act on suspected impairment promptly instead of waiting for every familiar symptom to appear.",
    "source": "FAA CAMI, Hypoxia brochure; recognition and physiological training",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/hypoxia.pdf"
  },
  {
    "id": "HF-029",
    "category": "human-factors",
    "question": "Why should oxygen equipment be checked for delivery rather than merely cylinder pressure?",
    "answer": "A charged cylinder cannot help if the valve, regulator, tubing, mask, or cannula is not delivering oxygen correctly. Complete the installed system’s functional checks.",
    "source": "FAA PHAK, chapter 7, oxygen systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-030",
    "category": "human-factors",
    "question": "Why does mask fit matter during an oxygen emergency?",
    "answer": "Leakage can prevent the intended oxygen concentration from reaching the user. Adjust and verify the equipment as instructed before relying on it at altitude.",
    "source": "FAA PHAK, chapter 7, oxygen systems",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-031",
    "category": "human-factors",
    "question": "What should a pilot verify before using an oxygen cannula instead of a mask?",
    "answer": "That the device is approved and suitable for the planned altitude and required oxygen flow. Follow the system limitations; a cannula does not provide the same oxygen-delivery capability in every condition as a mask.",
    "source": "FAA PHAK, chapter 7, Oxygen Systems — masks and cannulas",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-032",
    "category": "human-factors",
    "question": "Does living at elevation remove the need to follow aircraft oxygen requirements?",
    "answer": "No. Acclimatization does not eliminate hypoxia risk or override operating rules. Maintain appropriate oxygen use and physiological margins.",
    "source": "FAA AIM 8-1-1, hypoxia",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-033",
    "category": "human-factors",
    "question": "Why is deliberately breathing faster a poor response to suspected altitude hypoxia?",
    "answer": "It does not replace the missing oxygen pressure and may worsen carbon-dioxide imbalance. Use oxygen and descent according to the situation and aircraft procedures.",
    "source": "FAA CAMI, Hypoxia brochure",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/hypoxia.pdf"
  },
  {
    "id": "HF-034",
    "category": "human-factors",
    "question": "Why should a pilot avoid assuming tingling and dizziness are only anxiety?",
    "answer": "Hyperventilation, hypoxia, carbon monoxide, and other conditions can overlap. Maintain aircraft control, address possible oxygen or air-quality problems, and seek landing or assistance as needed.",
    "source": "FAA AIM 8-1-1, hyperventilation and hypoxia",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-035",
    "category": "human-factors",
    "question": "Why can a descent cause more ear-pressure difficulty than a climb?",
    "answer": "Increasing outside pressure requires air to enter the middle ear through the Eustachian tube, which may be blocked by congestion. Avoid flying with a condition that prevents pressure equalization.",
    "source": "FAA AIM 8-1-2, effects of altitude",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-036",
    "category": "human-factors",
    "question": "Why can trapped gastrointestinal gas become uncomfortable during ascent?",
    "answer": "Lower outside pressure allows trapped gas to expand. Pain or discomfort can distract from flying; consider symptoms and fitness rather than treating the issue as merely inconvenient.",
    "source": "FAA PHAK, chapter 17, trapped gas",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-037",
    "category": "human-factors",
    "question": "Why should a new medication be evaluated on the ground before considering flight?",
    "answer": "Unexpected sedation, vision effects, slowed responses, or other adverse effects may occur. Ground tolerance does not itself establish FAA acceptability; obtain appropriate aeromedical guidance.",
    "source": "FAA AIM 8-1-1, medication",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-038",
    "category": "human-factors",
    "question": "Why is a medication’s half-life not the same as an automatic safe-to-fly interval?",
    "answer": "Drug effects, active metabolites, dosage, underlying illness, and FAA requirements differ. Follow current FAA and AME guidance rather than making a personal clearance from half-life arithmetic.",
    "source": "FAA Guide for Aviation Medical Examiners, pharmaceuticals",
    "sourceUrl": "https://www.faa.gov/ame_guide/pharm"
  },
  {
    "id": "HF-039",
    "category": "human-factors",
    "question": "Why does treating symptoms not necessarily restore fitness for flight?",
    "answer": "The illness may still impair judgment or endurance, and the treatment may add side effects. Assess both the condition and medication before resuming flying.",
    "source": "FAA AIM 8-1-1, illness and medication",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-040",
    "category": "human-factors",
    "question": "Why does adequate time in bed not guarantee restorative sleep?",
    "answer": "Sleep quality can be degraded by interruptions, illness, environment, or sleep disorders. Persistent poor sleep or daytime sleepiness warrants medical evaluation and reconsideration of flight duties.",
    "source": "FAA CAMI, Fatigue in Aviation",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Fatigue_Aviation.pdf"
  },
  {
    "id": "HF-041",
    "category": "human-factors",
    "question": "How can crossing time zones impair alertness after a seemingly adequate rest?",
    "answer": "The body’s circadian timing may remain misaligned with the local schedule. Plan sleep and duties with that mismatch in mind rather than using local clock time alone.",
    "source": "FAA CAMI, Fatigue in Aviation",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Fatigue_Aviation.pdf"
  },
  {
    "id": "HF-042",
    "category": "human-factors",
    "question": "What is sleep inertia?",
    "answer": "Temporary grogginess and reduced performance after waking, particularly after deeper sleep. Allow recovery before demanding safety-critical tasks rather than assuming immediate alertness.",
    "source": "FAA CAMI, Fatigue in Aviation",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Fatigue_Aviation.pdf"
  },
  {
    "id": "HF-043",
    "category": "human-factors",
    "question": "Why is a brief unintended lapse of awareness a serious fatigue warning?",
    "answer": "It may indicate that alertness can no longer be sustained reliably. Stop or transfer safety-critical work appropriately and obtain rest instead of relying on willpower.",
    "source": "FAA CAMI, Fatigue in Aviation",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Fatigue_Aviation.pdf"
  },
  {
    "id": "HF-044",
    "category": "human-factors",
    "question": "Why may one good night not fully reverse several nights of inadequate sleep?",
    "answer": "Accumulated sleep loss can impair performance beyond the following morning. Plan sufficient recovery and avoid treating a single rest period as proof of restored proficiency.",
    "source": "FAA CAMI, Fatigue in Aviation",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Fatigue_Aviation.pdf"
  },
  {
    "id": "HF-045",
    "category": "human-factors",
    "question": "Can caffeine substitute for the sleep needed before flying?",
    "answer": "No. It may temporarily increase alertness but does not restore all performance lost to fatigue, and late use can interfere with later sleep.",
    "source": "FAA CAMI, Fatigue in Aviation",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Fatigue_Aviation.pdf"
  },
  {
    "id": "HF-046",
    "category": "human-factors",
    "question": "Why should physical exertion before a flight be considered in the fitness decision?",
    "answer": "Heat, dehydration, and fatigue can carry into the cockpit even if the flight itself is short. Assess recovery, hydration, and alertness before accepting the workload.",
    "source": "FAA PHAK, chapter 17, physiological factors",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-047",
    "category": "human-factors",
    "question": "Why is a continuous sweeping glance less effective than deliberate visual scanning?",
    "answer": "The eye needs time to focus and detect targets. Use short, systematic sectors with pauses and refocus outside after instrument checks.",
    "source": "FAA CAMI, Pilot Vision brochure, visual scanning",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Pilot_Vision.pdf"
  },
  {
    "id": "HF-048",
    "category": "human-factors",
    "question": "What is the normal blind spot and how can it be managed in scanning?",
    "answer": "The optic-nerve exit has no light-sensitive receptors. Moving the eyes and head and using overlapping scan sectors helps prevent a target from remaining hidden there.",
    "source": "FAA PHAK, chapter 17, vision",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-049",
    "category": "human-factors",
    "question": "Why should head movement be part of a collision scan around a high or low wing?",
    "answer": "Aircraft structure can hide traffic despite good eyesight. Shift viewpoint to inspect obstructed areas before turns or other maneuvers.",
    "source": "FAA CAMI, Pilot Vision brochure; FAA PHAK chapter 17",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Pilot_Vision.pdf"
  },
  {
    "id": "HF-050",
    "category": "human-factors",
    "question": "Why can polarized sunglasses be unsuitable with some cockpit displays?",
    "answer": "They may reduce or distort visibility of certain screens or windscreen features. Check compatibility in the actual cockpit and use suitable eyewear.",
    "source": "FAA CAMI, Pilot Vision brochure, sunglasses",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Pilot_Vision.pdf"
  },
  {
    "id": "HF-051",
    "category": "human-factors",
    "question": "Why can a pilot with sharp visual acuity still have difficulty judging a nighttime approach?",
    "answer": "Contrast, depth cues, glare, and adaptation also affect visual performance. A clear eye-chart result does not eliminate low-light operational limitations.",
    "source": "FAA CAMI, Pilot Vision brochure",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Pilot_Vision.pdf"
  },
  {
    "id": "HF-052",
    "category": "human-factors",
    "question": "Why should new glare, halos, or reduced contrast prompt a fitness review?",
    "answer": "These can signal a visual problem that affects night flying even when ordinary daytime vision seems adequate. Seek professional evaluation rather than compensating by flying closer to lights.",
    "source": "FAA CAMI, Pilot Vision brochure, vision pathophysiology",
    "sourceUrl": "https://www.faa.gov/pilots/safety/pilotsafetybrochures/media/Pilot_Vision.pdf"
  },
  {
    "id": "HF-053",
    "category": "human-factors",
    "question": "Why can the vestibular system disagree with reliable flight instruments?",
    "answer": "It senses acceleration and changes of motion, not an unambiguous absolute attitude. In restricted visual conditions, use a trained instrument cross-check rather than bodily sensation alone.",
    "source": "FAA PHAK, chapter 17, spatial disorientation",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-054",
    "category": "human-factors",
    "question": "What should visual dimming during a high-load maneuver prompt a pilot to do?",
    "answer": "Recognize a possible reduction in blood flow to the eyes and brain, reduce the physiological load safely, and recover within aircraft limits. Do not continue the maneuver merely because airspeed or altitude appears normal.",
    "source": "FAA PHAK, chapter 17, Aeromedical Factors — Stagnant Hypoxia",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-055",
    "category": "human-factors",
    "question": "How can high cockpit noise affect performance beyond making conversation difficult?",
    "answer": "It can increase fatigue, interfere with communication, and contribute to hearing damage. Use suitable hearing protection while preserving clear reception of required audio.",
    "source": "FAA PHAK, chapter 17, noise and hearing",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-056",
    "category": "human-factors",
    "question": "Why should gradual hearing loss not be dismissed because radio volume can be increased?",
    "answer": "Louder audio may not restore speech discrimination and can increase exposure. Obtain assessment and use appropriate protection and communication equipment.",
    "source": "FAA PHAK, chapter 17, noise and hearing",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "HF-057",
    "category": "human-factors",
    "question": "Why can untreated pain make a pilot unfit even without medication?",
    "answer": "Pain diverts attention and can reduce movement, concentration, and tolerance of workload. The absence of a sedating drug does not establish safe performance.",
    "source": "FAA AIM 8-1-1, illness and physiological impairment",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-058",
    "category": "human-factors",
    "question": "What makes a headache developing in flight worth an immediate cabin-environment check?",
    "answer": "It can be associated with hypoxia or carbon monoxide as well as other causes. Check oxygen and air-quality concerns promptly while managing the flight and landing decision.",
    "source": "FAA AIM 8-1-1, hypoxia and carbon monoxide",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-059",
    "category": "human-factors",
    "question": "Why should a pilot returning after illness reassess endurance as well as symptoms?",
    "answer": "Residual weakness, poor sleep, reduced concentration, or medication effects may remain after the main symptoms improve. Resume only when medically eligible and capable of the planned workload.",
    "source": "FAA AIM 8-1-1, illness",
    "sourceUrl": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap8_section_1.html"
  },
  {
    "id": "HF-060",
    "category": "human-factors",
    "question": "How can acute stress change a pilot’s visual and cognitive attention?",
    "answer": "It can narrow attention and reduce working-memory capacity. Use a deliberate scan, clear priorities, and appropriate task sharing to avoid missing other threats.",
    "source": "FAA PHAK, chapters 2 and 17, stress and attention",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NGT-021",
    "category": "night",
    "question": "Why can a dirty or scratched windscreen become particularly troublesome at night?",
    "answer": "It scatters lights and increases glare, reducing contrast and the ability to identify traffic and runway cues. Clean and inspect the windscreen before flight rather than accepting daytime visibility as proof of night suitability.",
    "source": "FAA Airplane Flying Handbook, chapter 11, Night Operations — Preflight Preparation",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-022",
    "category": "night",
    "question": "Why is the landing light an incomplete obstacle-detection system at night?",
    "answer": "Its beam and useful range are limited and it may not illuminate wires, terrain, or objects off the flightpath. Maintain planned clearance rather than flying only within the lighted patch.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night operations",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-023",
    "category": "night",
    "question": "How can a pilot protect night adaptation during an unexpected bright-light exposure?",
    "answer": "Avoid staring at the source, shield vision where practical, and use the lowest effective cockpit lighting. Reassess visual capability before a demanding maneuver.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night vision",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-024",
    "category": "night",
    "question": "Why should moon phase and position be considered in night route planning?",
    "answer": "They affect terrain illumination and the available visual horizon. A familiar route can look very different on a dark night with little natural light.",
    "source": "FAA Airplane Flying Handbook, chapter 11, preflight planning",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-025",
    "category": "night",
    "question": "Why can a night route over water require stronger instrument proficiency than one over a well-lit area?",
    "answer": "Water may supply almost no horizon or depth cues. Plan the flight as a limited-visual-reference operation rather than assuming VFR weather supplies a visible horizon.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night orientation",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-026",
    "category": "night",
    "question": "Why should an unlighted obstruction not be assumed absent from a night approach path?",
    "answer": "Some hazards are unlit, lights may fail, and chart coverage has limits. Use current obstacle information and remain on a safe approach path.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night approaches",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-027",
    "category": "night",
    "question": "Why does deteriorating visibility deserve an earlier diversion decision at night?",
    "answer": "Cloud, terrain, and precipitation can be harder to recognize visually, while escape and landing options may be fewer. Act before the visual cues needed to stay safe disappear.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night planning",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-028",
    "category": "night",
    "question": "What can reflected runway lights on a wet surface do to landing cues?",
    "answer": "They can distort perceived runway shape and height or obscure markings. Cross-check approach attitude and visual glidepath and avoid forcing a landing on ambiguous cues.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night approaches",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-029",
    "category": "night",
    "question": "Why should night runway identification include more than locating a line of lights?",
    "answer": "Roads, taxiways, and nearby airports can resemble the intended runway. Verify airport identity, runway orientation, markings, lighting pattern, and navigation position.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night approaches",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-030",
    "category": "night",
    "question": "How should apparently stationary aircraft lights be treated at night?",
    "answer": "They may indicate a collision course. Continue evaluating bearing and closure and take appropriate see-and-avoid action rather than assuming no visible motion means no threat.",
    "source": "FAA PHAK, chapter 17, night vision and collision avoidance",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
  },
  {
    "id": "NGT-031",
    "category": "night",
    "question": "Why is the distance to a single isolated light difficult to judge at night?",
    "answer": "Size, texture, and surrounding depth cues are missing. Use independent position and altitude information instead of inferring terrain clearance from the light’s apparent brightness.",
    "source": "FAA Airplane Flying Handbook, chapter 11, illusions",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-032",
    "category": "night",
    "question": "Why does a night passenger briefing need to address emergency lighting and exits?",
    "answer": "Occupants may have difficulty finding latches or equipment in darkness. Demonstrate locations and usable lights before departure rather than relying on an explanation after power is lost.",
    "source": "FAA Airplane Flying Handbook, chapter 11, preflight preparation",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-033",
    "category": "night",
    "question": "Why should night taxi speed allow stopping within the clearly visible surface?",
    "answer": "Unlit objects, pavement edges, and other traffic may appear late. Slow down, use appropriate lighting, and stop if the route cannot be positively identified.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night taxi",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-034",
    "category": "night",
    "question": "Why is a night flight’s weather trend more useful than a single favorable observation?",
    "answer": "A currently clear field can deteriorate before arrival, and cloud or visibility changes may be difficult to see en route. Review the trend, forecast timing, and alternatives before committing to the route.",
    "source": "FAA Airplane Flying Handbook, chapter 11, preflight planning and weather",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-035",
    "category": "night",
    "question": "Why should a long daytime trip be reassessed before adding a nighttime return leg?",
    "answer": "Fatigue, daylight loss, weather, airport services, and terrain visibility may change the workload substantially. Make a fresh decision rather than treating the return as the remainder of the original plan.",
    "source": "FAA Airplane Flying Handbook, chapter 11, planning; FAA CAMI fatigue guidance",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-036",
    "category": "night",
    "question": "Why should the destination’s lighting activation and operating hours be confirmed before a night flight?",
    "answer": "Lighting or tower services may be unavailable, limited, or controlled on a separate frequency. A charted airport is not automatically a usable nighttime destination.",
    "source": "FAA Airplane Flying Handbook, chapter 11, airport planning",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-037",
    "category": "night",
    "question": "Why should a night landing clearance not prevent a go-around if runway lights become unusable?",
    "answer": "The clearance does not restore the visual references needed for a safe landing. Go around when appropriate, tell ATC, and select a suitable alternative.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night approaches",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-038",
    "category": "night",
    "question": "Why is fuel planning especially important when night airport services are limited?",
    "answer": "An airport may be open for landing while fuel or assistance is unavailable. Confirm services and preserve enough fuel to reach a genuinely usable alternative.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night preflight planning",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-039",
    "category": "night",
    "question": "Why should a night approach to an unfamiliar airport be stabilized farther from the runway?",
    "answer": "Recognizing terrain, runway geometry, lighting, and distance takes more effort in darkness. Resolve configuration and navigation early so the final segment is not spent identifying the airport.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night approaches",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "NGT-040",
    "category": "night",
    "question": "What practical preparation helps a pilot resume night flying after a long gap?",
    "answer": "Obtain appropriate refresher training, practice instrument-supported departures and go-arounds, and review lighting and local terrain. Legal recency alone does not establish readiness for a dark or unfamiliar route.",
    "source": "FAA Airplane Flying Handbook, chapter 11, night proficiency",
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook"
  },
  {
    "id": "P135-001",
    "category": "part-135",
    "question": "What determines whether a flight belongs under Part 135?",
    "answer": "The operation's actual nature and applicable certification rules, not the airplane's appearance or a passenger's description of the trip.",
    "source": "14 CFR 135.1",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.1"
  },
  {
    "id": "P135-002",
    "category": "part-135",
    "question": "Does Part 135 replace all Part 91 requirements?",
    "answer": "No. Applicable Part 91 rules still apply unless Part 135 provides a different requirement; apply the complete regulatory combination.",
    "source": "14 CFR 135.3",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.3"
  },
  {
    "id": "P135-003",
    "category": "part-135",
    "question": "Can an unauthorized charter operator avoid Part 135 by lacking a certificate?",
    "answer": "No. Applicable Part 135 rules also apply to a person conducting covered operations without the required authority.",
    "source": "14 CFR 135.7",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.7"
  },
  {
    "id": "P135-004",
    "category": "part-135",
    "question": "Who retains operational-control responsibility for a charter flight?",
    "answer": "The certificate holder. Its manual identifies the people authorized to exercise operational control.",
    "source": "14 CFR 135.77",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.77"
  },
  {
    "id": "P135-005",
    "category": "part-135",
    "question": "A charter customer orders a departure despite unsafe conditions. Who controls the decision?",
    "answer": "The authorized operator and PIC must apply their safety responsibilities; purchasing the trip gives the customer no operational-control authority.",
    "source": "14 CFR 135.77",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.77"
  },
  {
    "id": "P135-006",
    "category": "part-135",
    "question": "What keeps an operator's charter manual from becoming unofficial advice?",
    "answer": "It sets the certificate holder's current procedures and policies for the operation; personnel must use the applicable manual and authorized procedures.",
    "source": "14 CFR 135.21",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.21"
  },
  {
    "id": "P135-007",
    "category": "part-135",
    "question": "May a charter manual authorize conduct contrary to an operations specification?",
    "answer": "No. The manual cannot conflict with applicable regulations, the certificate, or operations specifications.",
    "source": "14 CFR 135.21",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.21"
  },
  {
    "id": "P135-008",
    "category": "part-135",
    "question": "Why must a charter pilot verify the revision status of an electronic manual?",
    "answer": "The operator must make revision dates immediately ascertainable so personnel can identify current instructions.",
    "source": "14 CFR 135.23",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.23"
  },
  {
    "id": "P135-009",
    "category": "part-135",
    "question": "What loading procedures should a Part 135 manual provide?",
    "answer": "Procedures ensuring compliance with aircraft weight and balance limits and applicable multiengine performance requirements.",
    "source": "14 CFR 135.23",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.23"
  },
  {
    "id": "P135-010",
    "category": "part-135",
    "question": "Why should a pilot know who has operational-control authority before accepting a trip?",
    "answer": "The manual identifies authorized personnel and responsibilities, enabling release, delay, diversion, and escalation through the correct people.",
    "source": "14 CFR 135.23",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.23"
  },
  {
    "id": "P135-011",
    "category": "part-135",
    "question": "Can an operator use any airworthy aircraft for a charter trip?",
    "answer": "No. The aircraft must also meet Part 135 requirements and the operator's applicable authorizations and control arrangements.",
    "source": "14 CFR 135.25",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.25"
  },
  {
    "id": "P135-012",
    "category": "part-135",
    "question": "What does an operator's pilot qualification record establish?",
    "answer": "Certificates, ratings, experience, assignments, training, checking, and other required information demonstrating eligibility for assigned operations.",
    "source": "14 CFR 135.63",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.63"
  },
  {
    "id": "P135-013",
    "category": "part-135",
    "question": "Why does a charter flight's load manifest matter beyond total weight?",
    "answer": "Required loading information documents compliance, including weight distribution and center-of-gravity limits where applicable.",
    "source": "14 CFR 135.63",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.63"
  },
  {
    "id": "P135-014",
    "category": "part-135",
    "question": "Passengers swap seats after the manifest is prepared. What needs checking?",
    "answer": "Whether loading and CG remain valid; update records or seating according to the approved loading procedures before departure.",
    "source": "14 CFR 135.63",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.63"
  },
  {
    "id": "P135-015",
    "category": "part-135",
    "question": "How are mechanical irregularities transferred between charter crews?",
    "answer": "Enter them in the aircraft maintenance log and use the operator's process so subsequent crews know the discrepancy and its disposition.",
    "source": "14 CFR 135.65",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.65"
  },
  {
    "id": "P135-016",
    "category": "part-135",
    "question": "Why must a charter captain review preceding discrepancy entries?",
    "answer": "To determine the status of earlier irregularities before the next flight rather than assuming a new crew means a serviceable aircraft.",
    "source": "14 CFR 135.65",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.65"
  },
  {
    "id": "P135-017",
    "category": "part-135",
    "question": "What should a charter pilot do with a facility defect that threatens other flights?",
    "answer": "Report the irregularity to the appropriate ground station as soon as practicable.",
    "source": "14 CFR 135.67",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.67"
  },
  {
    "id": "P135-018",
    "category": "part-135",
    "question": "How should a Part 135 operator respond to hazardous airport conditions?",
    "answer": "Restrict or suspend affected operations until the hazard is corrected; current suitability controls the decision.",
    "source": "14 CFR 135.69",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.69"
  },
  {
    "id": "P135-019",
    "category": "part-135",
    "question": "What airworthiness checks precede a Part 135 departure?",
    "answer": "The PIC must determine required inspections and maintenance releases are satisfied and the aircraft is airworthy under the operator's procedures.",
    "source": "14 CFR 135.71",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.71"
  },
  {
    "id": "P135-020",
    "category": "part-135",
    "question": "Why may the FAA inspect charter personnel and equipment during operations?",
    "answer": "The rule authorizes inspections and tests to determine compliance; the certificate holder must permit appropriate access.",
    "source": "14 CFR 135.73",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.73"
  },
  {
    "id": "P135-021",
    "category": "part-135",
    "question": "May a charter pilot refuse an authorized FAA inspection because passengers are waiting?",
    "answer": "No. The operator and crew must permit authorized inspections and provide the required access.",
    "source": "14 CFR 135.75",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.75"
  },
  {
    "id": "P135-022",
    "category": "part-135",
    "question": "Why is PIC final authority not permission to ignore an operator's control system?",
    "answer": "PIC authority operates within legal operational-control, manual, and safety obligations; disagreements should be resolved before an unsafe flight starts.",
    "source": "14 CFR 135.77",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.77"
  },
  {
    "id": "P135-023",
    "category": "part-135",
    "question": "When must a Part 135 operator arrange flight-locating procedures?",
    "answer": "For flights where an FAA flight plan is not filed, the operator needs the specified locating process, subject to the rule's exceptions.",
    "source": "14 CFR 135.79",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.79"
  },
  {
    "id": "P135-024",
    "category": "part-135",
    "question": "What makes a charter flight-locating arrangement useful in an overdue event?",
    "answer": "It retains route, destination, timing, and notification information so responsible personnel can promptly initiate overdue-aircraft action.",
    "source": "14 CFR 135.79",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.79"
  },
  {
    "id": "P135-025",
    "category": "part-135",
    "question": "How must a charter operator communicate operational changes to its personnel?",
    "answer": "Inform personnel of appropriate changes in equipment and operating procedures, including changes affecting their assigned duties.",
    "source": "14 CFR 135.81",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.81"
  },
  {
    "id": "P135-026",
    "category": "part-135",
    "question": "Can a charter pilot rely on charts downloaded months ago because the route is familiar?",
    "answer": "No. Required aeronautical information must be current and appropriate to the flight; check effective dates and changes.",
    "source": "14 CFR 135.83",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.83"
  },
  {
    "id": "P135-027",
    "category": "part-135",
    "question": "Why can carrying a company employee still require a passenger-rule review?",
    "answer": "Only specified persons and conditions qualify for carriage without all passenger-carrying provisions; employee status alone is not enough.",
    "source": "14 CFR 135.85",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.85"
  },
  {
    "id": "P135-028",
    "category": "part-135",
    "question": "What must cabin cargo restraints accomplish in a charter airplane?",
    "answer": "Secure the load against movement, preserve exits and emergency-equipment access, and meet compartment, floor-loading, and restraint limitations.",
    "source": "14 CFR 135.87",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.87"
  },
  {
    "id": "P135-029",
    "category": "part-135",
    "question": "A bag fits in the cabin but blocks the fire extinguisher. May it stay there?",
    "answer": "No. Reposition and properly restrain it; physical fit alone does not satisfy cabin-cargo requirements.",
    "source": "14 CFR 135.87",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.87"
  },
  {
    "id": "P135-030",
    "category": "part-135",
    "question": "What governs oxygen use by a Part 135 crew?",
    "answer": "Apply the specific crew oxygen requirements, aircraft pressurization status, altitude, and operating conditions rather than assuming ordinary private-flight rules alone suffice.",
    "source": "14 CFR 135.89",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.89"
  },
  {
    "id": "P135-031",
    "category": "part-135",
    "question": "What should be checked before accepting medical oxygen aboard a charter aircraft?",
    "answer": "The operator's authorization, equipment requirements, handling restrictions, and applicable passenger/crew procedures.",
    "source": "14 CFR 135.91",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.91"
  },
  {
    "id": "P135-032",
    "category": "part-135",
    "question": "Why is a charter autopilot's approved approach capability not enough to select an engagement altitude?",
    "answer": "Part 135 minimum-use heights, AFM limitations, demonstrated altitude loss, and any authorized exceptions must all be satisfied.",
    "source": "14 CFR 135.93",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.93"
  },
  {
    "id": "P135-033",
    "category": "part-135",
    "question": "How do autopilot altitude references differ between en route and approach operations?",
    "answer": "The rule distinguishes terrain, airport elevation, and touchdown-zone or approach-minimum references; use the reference applicable to that phase.",
    "source": "14 CFR 135.93",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.93"
  },
  {
    "id": "P135-034",
    "category": "part-135",
    "question": "May a pilot accept a charter assignment while medically unfit despite a valid medical certificate?",
    "answer": "No. A valid certificate does not remove the prohibition on serving when the pilot knows of a disqualifying condition.",
    "source": "14 CFR 135.95",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.95"
  },
  {
    "id": "P135-035",
    "category": "part-135",
    "question": "What must a charter operator provide to keep pilot recent-experience requirements achievable?",
    "answer": "Suitable aircraft and facilities for the pilot to demonstrate or maintain the applicable required recent flight experience.",
    "source": "14 CFR 135.97",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.97"
  },
  {
    "id": "P135-036",
    "category": "part-135",
    "question": "What sets the minimum charter flightcrew complement?",
    "answer": "Both aircraft operating limitations and Part 135 requirements for the specific operation; satisfy whichever requires more crewmembers.",
    "source": "14 CFR 135.99",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.99"
  },
  {
    "id": "P135-037",
    "category": "part-135",
    "question": "What passenger seating configuration generally triggers an SIC under § 135.99(b)?",
    "answer": "Ten or more passenger seats, excluding pilot seats. An installed autopilot does not erase this separate requirement.",
    "source": "14 CFR 135.99",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.99"
  },
  {
    "id": "P135-038",
    "category": "part-135",
    "question": "What is the usual Part 135 SIC rule when carrying passengers under IFR?",
    "answer": "An SIC is required unless the specific approved-autopilot exception lawfully applies.",
    "source": "14 CFR 135.101",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.101"
  },
  {
    "id": "P135-039",
    "category": "part-135",
    "question": "Does installing a working autopilot automatically authorize single-pilot passenger IFR charter?",
    "answer": "No. The autopilot must be approved, operative, and authorized by the applicable operations specifications; other two-pilot requirements still control.",
    "source": "14 CFR 135.105",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.105"
  },
  {
    "id": "P135-040",
    "category": "part-135",
    "question": "The autopilot fails before a planned single-pilot IFR charter. What must be reconsidered?",
    "answer": "The basis for SIC relief. Provide a legally qualified crew or another authorized operating solution; do not assume the flight may depart unchanged.",
    "source": "14 CFR 135.105",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.105"
  },
  {
    "id": "P135-041",
    "category": "part-135",
    "question": "How are PIC and SIC roles established for a Part 135 flight?",
    "answer": "The certificate holder designates qualified pilots for the assigned duties, with PIC responsibility clearly assigned.",
    "source": "14 CFR 135.109",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.109"
  },
  {
    "id": "P135-042",
    "category": "part-135",
    "question": "Why can two pilots be required even on a VFR charter flight?",
    "answer": "Aircraft limitations, seating configuration, or the specific VFR two-pilot provisions may require an SIC independent of weather.",
    "source": "14 CFR 135.111",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.111"
  },
  {
    "id": "P135-043",
    "category": "part-135",
    "question": "When may a charter pilot leave the assigned crew station?",
    "answer": "Only under the permitted operational or physiological circumstances, with applicable restraints and crew requirements maintained.",
    "source": "14 CFR 135.113",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.113"
  },
  {
    "id": "P135-044",
    "category": "part-135",
    "question": "May a charter operator treat anyone in uniform as flight-deck-authorized?",
    "answer": "No. Occupancy must meet the permitted-person and operator-authorization rules; appearance alone establishes no eligibility.",
    "source": "14 CFR 135.115",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.115"
  },
  {
    "id": "P135-045",
    "category": "part-135",
    "question": "What evacuation information should a charter passenger briefing emphasize?",
    "answer": "Exit locations and operation, belts, required flotation and emergency equipment, and instructions applicable to that aircraft and flight.",
    "source": "14 CFR 135.117",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.117"
  },
  {
    "id": "P135-046",
    "category": "part-135",
    "question": "Why should a charter briefing account for passengers needing help?",
    "answer": "The crew must address appropriate assistance and evacuation arrangements instead of assuming everyone can use every exit independently.",
    "source": "14 CFR 135.117",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.117"
  },
  {
    "id": "P135-047",
    "category": "part-135",
    "question": "What extra safety preparation accompanies extended-overwater charter operations?",
    "answer": "Provide the applicable flotation-equipment briefing, including how to use available life preservers and other required survival equipment.",
    "source": "14 CFR 135.119",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.119"
  },
  {
    "id": "P135-048",
    "category": "part-135",
    "question": "May a charter passenger drink a personal bottle without the operator serving it?",
    "answer": "No. The rule restricts consumption to alcoholic beverages served by the certificate holder.",
    "source": "14 CFR 135.121",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.121"
  },
  {
    "id": "P135-049",
    "category": "part-135",
    "question": "How should the operator handle a passenger who appears intoxicated before boarding?",
    "answer": "Do not allow boarding contrary to the rule; coordinate through the operator rather than accepting customer pressure.",
    "source": "14 CFR 135.121",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.121"
  },
  {
    "id": "P135-050",
    "category": "part-135",
    "question": "Why must a charter operator assign evacuation duties before an emergency?",
    "answer": "Necessary functions must be realistic for the aircraft, crew, and foreseeable emergency, including possible crewmember incapacitation.",
    "source": "14 CFR 135.123",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.123"
  },
  {
    "id": "P135-051",
    "category": "part-135",
    "question": "Why should a Part 135 crew use a written cockpit checklist?",
    "answer": "The operator must provide an approved checklist appropriate to the aircraft; systematic use supports required normal and emergency actions.",
    "source": "14 CFR 135.127",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.127"
  },
  {
    "id": "P135-052",
    "category": "part-135",
    "question": "What makes a borrowed checklist unsuitable for charter use?",
    "answer": "It may not match the operator's approved procedures, aircraft equipment, limitations, or required sequence.",
    "source": "14 CFR 135.127",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.127"
  },
  {
    "id": "P135-053",
    "category": "part-135",
    "question": "Why must charter passenger restraint decisions use approved seating arrangements?",
    "answer": "Each occupant must comply with applicable seat, belt, and child-restraint rules; an improvised seat is not authorized simply because the trip is short.",
    "source": "14 CFR 135.128",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.128"
  },
  {
    "id": "P135-054",
    "category": "part-135",
    "question": "How should exit-seat suitability be handled in a charter cabin?",
    "answer": "Apply the rule's selection criteria and operator procedures so occupants can perform required exit functions when applicable.",
    "source": "14 CFR 135.129",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.129"
  },
  {
    "id": "P135-055",
    "category": "part-135",
    "question": "Why does meeting the aircraft type certificate not prove charter equipment compliance?",
    "answer": "Part 135 may require additional equipment for the operation, route, or conditions beyond original certification.",
    "source": "14 CFR 135.141",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.141"
  },
  {
    "id": "P135-056",
    "category": "part-135",
    "question": "What should a pilot determine about required charter equipment before departure?",
    "answer": "That required items are installed, approved where required, and operative or legally deferred under applicable authority.",
    "source": "14 CFR 135.143",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.143"
  },
  {
    "id": "P135-057",
    "category": "part-135",
    "question": "What is the purpose of aircraft proving and validation tests in Part 135?",
    "answer": "Demonstrate the operator's ability to conduct applicable new operations safely with the aircraft and proposed procedures before authorization.",
    "source": "14 CFR 135.145",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.145"
  },
  {
    "id": "P135-058",
    "category": "part-135",
    "question": "What determines whether a dual-control installation is required for charter operations?",
    "answer": "The aircraft and operation must meet the applicable dual-control rules and any specifically permitted exceptions.",
    "source": "14 CFR 135.147",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.147"
  },
  {
    "id": "P135-059",
    "category": "part-135",
    "question": "Why must a charter preflight verify the required instruments for the planned kind of flight?",
    "answer": "Part 135 adds instrument and equipment requirements; daylight VFR, night, and IFR assignments may require different combinations.",
    "source": "14 CFR 135.149",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.149"
  },
  {
    "id": "P135-060",
    "category": "part-135",
    "question": "What is the value of a Part 135 public-address system requirement?",
    "answer": "It lets the crew give required passenger information and emergency instructions using the approved installation when that requirement applies.",
    "source": "14 CFR 135.150",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.150"
  },
  {
    "id": "P135-061",
    "category": "part-135",
    "question": "What should a charter crew know about a required CVR before a trip?",
    "answer": "Whether the airplane is within the applicability, whether the recorder is serviceable or legally deferred, and the operator's required operating procedures.",
    "source": "14 CFR 135.151",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.151"
  },
  {
    "id": "P135-062",
    "category": "part-135",
    "question": "Why should recorder discrepancies be resolved through maintenance rather than pilot improvisation?",
    "answer": "Recorder applicability and dispatch relief are regulated; use authorized maintenance and any lawful MEL process.",
    "source": "14 CFR 135.152",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.152"
  },
  {
    "id": "P135-063",
    "category": "part-135",
    "question": "What does a charter TAWS installation protect against?",
    "answer": "Terrain-related threats within its design capability. It supplements flightpath and terrain planning rather than authorizing descent below safe limits.",
    "source": "14 CFR 135.154",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.154"
  },
  {
    "id": "P135-064",
    "category": "part-135",
    "question": "Why is TAWS database currency relevant to a charter flight?",
    "answer": "An inappropriate or outdated terrain/airport database can degrade alerts; follow the approved currency and operation requirements.",
    "source": "14 CFR 135.154",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.154"
  },
  {
    "id": "P135-065",
    "category": "part-135",
    "question": "What makes a hand fire extinguisher useful during a charter emergency?",
    "answer": "An appropriate approved type, required number and location, serviceability, and crew knowledge of access and operation.",
    "source": "14 CFR 135.155",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.155"
  },
  {
    "id": "P135-066",
    "category": "part-135",
    "question": "What should determine oxygen equipment carried on a charter route?",
    "answer": "The applicable altitude, pressurization, occupant, and emergency-descent requirements, along with the aircraft's approved system capabilities.",
    "source": "14 CFR 135.157",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.157"
  },
  {
    "id": "P135-067",
    "category": "part-135",
    "question": "Why must pitot heat capability be evaluated before a cold-weather charter?",
    "answer": "The applicable airspeed-indicating-system requirements and flight conditions may make probe heat essential; resolve defects legally before departure.",
    "source": "14 CFR 135.158",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.158"
  },
  {
    "id": "P135-068",
    "category": "part-135",
    "question": "What extra equipment planning accompanies IFR passenger charter?",
    "answer": "Verify the required instruments, communications, navigation, power sources, and applicable redundancy for that specific aircraft and operation.",
    "source": "14 CFR 135.159",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.159"
  },
  {
    "id": "P135-069",
    "category": "part-135",
    "question": "Why does reliable communication coverage matter to Part 135 flight planning?",
    "answer": "The operation must meet its communication requirements over the route; an installed radio does not itself prove usable coverage.",
    "source": "14 CFR 135.161",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.161"
  },
  {
    "id": "P135-070",
    "category": "part-135",
    "question": "Why might an apparently healthy charging system still need a redundancy check for IFR charter?",
    "answer": "Required electrical and instrument power provisions depend on the operation; assess failure protection against the applicable rule and approved installation.",
    "source": "14 CFR 135.163",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.163"
  },
  {
    "id": "P135-071",
    "category": "part-135",
    "question": "How should route changes affect charter navigation-equipment assessment?",
    "answer": "Confirm the equipment and authorizations still support the newly planned route, facilities, and procedures before accepting the change.",
    "source": "14 CFR 135.165",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.165"
  },
  {
    "id": "P135-072",
    "category": "part-135",
    "question": "What is special about charter emergency equipment for extended-overwater flying?",
    "answer": "Required flotation, rafts, survival items, and signaling must suit the operation and be accessible and serviceable.",
    "source": "14 CFR 135.167",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.167"
  },
  {
    "id": "P135-073",
    "category": "part-135",
    "question": "Why do overwater rotorcraft charter rules need separate review?",
    "answer": "Rotorcraft-specific flotation and survival requirements may apply; fixed-wing assumptions do not establish compliance.",
    "source": "14 CFR 135.168",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.168"
  },
  {
    "id": "P135-074",
    "category": "part-135",
    "question": "Why must charter performance approval be checked for the particular aircraft category?",
    "answer": "The rules distinguish aircraft categories and operations; a general equipment checklist does not establish passenger-carrying eligibility.",
    "source": "14 CFR 135.169",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.169"
  },
  {
    "id": "P135-075",
    "category": "part-135",
    "question": "Why must materials installed in a charter cabin meet applicable fire-protection standards?",
    "answer": "Cabin interior fireworthiness is part of operational compliance; cosmetic alterations cannot bypass required standards.",
    "source": "14 CFR 135.170",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.170"
  },
  {
    "id": "P135-076",
    "category": "part-135",
    "question": "What shoulder-harness issue should a charter crew verify at pilot stations?",
    "answer": "Required harnesses must be installed and used under the applicable rule and aircraft procedures, not left unused for convenience.",
    "source": "14 CFR 135.171",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.171"
  },
  {
    "id": "P135-077",
    "category": "part-135",
    "question": "Why does an airborne thunderstorm detector not authorize penetration of hazardous cells?",
    "answer": "Its role is hazard detection; safe avoidance, limitations, and the operator's procedures still govern routing.",
    "source": "14 CFR 135.173",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.173"
  },
  {
    "id": "P135-078",
    "category": "part-135",
    "question": "When an airborne weather-radar defect is found before charter departure, what comes next?",
    "answer": "Evaluate the specific radar requirement, conditions, authorized relief, and limitations; do not substitute a phone weather image without approved authority.",
    "source": "14 CFR 135.175",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.175"
  },
  {
    "id": "P135-079",
    "category": "part-135",
    "question": "Why must emergency equipment have suitable markings?",
    "answer": "Markings help occupants and crew locate and operate required equipment promptly during an emergency.",
    "source": "14 CFR 135.177",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.177"
  },
  {
    "id": "P135-080",
    "category": "part-135",
    "question": "What is the starting point for charter operation with an inoperative installed item?",
    "answer": "Determine whether a properly approved MEL or other applicable legal provision authorizes it and comply with all associated procedures and restrictions.",
    "source": "14 CFR 135.179",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.179"
  },
  {
    "id": "P135-081",
    "category": "part-135",
    "question": "May a pilot defer a charter defect merely because it is absent from a personal checklist?",
    "answer": "No. Determine regulatory, AFM, operator, and MEL requirements through the authorized process.",
    "source": "14 CFR 135.179",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.179"
  },
  {
    "id": "P135-082",
    "category": "part-135",
    "question": "Why is traffic-alerting equipment not a substitute for a charter crew's collision avoidance duties?",
    "answer": "It supplies specific alerts within its capabilities; visual lookout, ATC compliance, and trained responses remain necessary.",
    "source": "14 CFR 135.180",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.180"
  },
  {
    "id": "P135-083",
    "category": "part-135",
    "question": "What engine-out route-performance issue can limit IFR passenger charter weight?",
    "answer": "Applicable multiengine requirements may demand positive climb with the critical engine inoperative at specified route altitudes; use approved data and exceptions correctly.",
    "source": "14 CFR 135.181",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.181"
  },
  {
    "id": "P135-084",
    "category": "part-135",
    "question": "Why must a charter landplane's overwater route be assessed for engine failure?",
    "answer": "The rule imposes overwater performance and distance restrictions with specified exceptions; consider whether a safe landing remains possible after loss of power.",
    "source": "14 CFR 135.183",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.183"
  },
  {
    "id": "P135-085",
    "category": "part-135",
    "question": "Why should charter dispatch examine the aircraft empty weight and CG records?",
    "answer": "Required current weighing/loading information supports the performance and balance calculation for the actual aircraft.",
    "source": "14 CFR 135.185",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.185"
  },
  {
    "id": "P135-086",
    "category": "part-135",
    "question": "What extra obstacle margin applies to Part 135 airplane night VFR planning?",
    "answer": "Outside takeoff and landing, use the rule's obstacle-based route margins, including the greater designated-mountainous-terrain requirement.",
    "source": "14 CFR 135.203",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.203"
  },
  {
    "id": "P135-087",
    "category": "part-135",
    "question": "A daytime charter route passes close beside a tower. What does Part 135 add?",
    "answer": "The VFR airplane minimum includes horizontal obstacle clearance as well as height above the surface; evaluate both.",
    "source": "14 CFR 135.203",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.203"
  },
  {
    "id": "P135-088",
    "category": "part-135",
    "question": "Can a charter airplane always use ordinary Part 91 Class G visibility minima?",
    "answer": "No. Part 135 imposes additional VFR visibility restrictions; apply the more restrictive applicable requirements.",
    "source": "14 CFR 135.205",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.205"
  },
  {
    "id": "P135-089",
    "category": "part-135",
    "question": "What must a VFR charter pilot be able to do with surface references?",
    "answer": "Maintain visual surface reference as required, subject to the rule's authorized exceptions; simply staying outside clouds may not suffice.",
    "source": "14 CFR 135.207",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.207"
  },
  {
    "id": "P135-090",
    "category": "part-135",
    "question": "How should a charter fuel plan account for VFR reserve requirements?",
    "answer": "Use the applicable aircraft and day/night reserve rule, then add practical margins for wind, delays, and diversion uncertainty.",
    "source": "14 CFR 135.209",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.209"
  },
  {
    "id": "P135-091",
    "category": "part-135",
    "question": "Why does VFR over-the-top charter require more planning than a clear cruise layer?",
    "answer": "The flight must meet conditions supporting a lawful descent or continuation and applicable engine-failure provisions, not merely clear weather above the clouds.",
    "source": "14 CFR 135.211",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.211"
  },
  {
    "id": "P135-092",
    "category": "part-135",
    "question": "Which weather sources are acceptable when Part 135 requires a report or forecast?",
    "answer": "The National Weather Service, an NWS-approved source, or an FAA-approved source; the rule includes a limited VFR observation allowance.",
    "source": "14 CFR 135.213",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.213"
  },
  {
    "id": "P135-093",
    "category": "part-135",
    "question": "Can an IFR charter use a distant airport's report automatically as destination weather?",
    "answer": "No. Required observations normally come from the airport being used unless operations specifications specifically authorize another location.",
    "source": "14 CFR 135.213",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.213"
  },
  {
    "id": "P135-094",
    "category": "part-135",
    "question": "When departure weather is below authorized landing minima, what does charter planning require?",
    "answer": "Consider the specific departure-alternate requirement and its location, weather, and performance conditions before takeoff.",
    "source": "14 CFR 135.217",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.217"
  },
  {
    "id": "P135-095",
    "category": "part-135",
    "question": "What destination weather gate applies before an IFR charter takeoff?",
    "answer": "Applicable reports or forecasts must support the rule's destination conditions at the planned arrival time; verify the exact authorization and exceptions.",
    "source": "14 CFR 135.219",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.219"
  },
  {
    "id": "P135-096",
    "category": "part-135",
    "question": "Why is a convenient alternate not necessarily legal for a charter release?",
    "answer": "The alternate must meet the operator's authorized weather minima and applicable rule at the planned time of use.",
    "source": "14 CFR 135.221",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.221"
  },
  {
    "id": "P135-097",
    "category": "part-135",
    "question": "What does IFR charter fuel planning normally include beyond reaching destination?",
    "answer": "Fuel to the destination, then the required alternate, then the specified reserve; apply the rule's exception only when all its conditions are met.",
    "source": "14 CFR 135.223",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.223"
  },
  {
    "id": "P135-098",
    "category": "part-135",
    "question": "Why should the charter alternate decision use ceiling height above circling minima?",
    "answer": "The no-alternate exception uses its own ceiling test, not simply the familiar domestic-airline or private-flight shortcut.",
    "source": "14 CFR 135.223",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.223"
  },
  {
    "id": "P135-099",
    "category": "part-135",
    "question": "What is the usual weather gate for beginning a Part 135 instrument approach?",
    "answer": "An approved reporting facility and the latest report indicating conditions at or above authorized landing minima, unless a specific exception applies.",
    "source": "14 CFR 135.225",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.225"
  },
  {
    "id": "P135-100",
    "category": "part-135",
    "question": "How is an eligible on-demand approach to an airport without weather reporting different?",
    "answer": "It requires the particular exception's conditions, including alternate and weather assessment provisions; eligibility alone is not blanket permission.",
    "source": "14 CFR 135.225",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.225"
  },
  {
    "id": "P135-101",
    "category": "part-135",
    "question": "Weather drops after the charter airplane passes the FAF legally. What must the crew evaluate?",
    "answer": "The rule permits continuation in specified circumstances, but descent below minima and landing still require the applicable visual and landing conditions.",
    "source": "14 CFR 135.225",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.225"
  },
  {
    "id": "P135-102",
    "category": "part-135",
    "question": "Does an ATC takeoff clearance satisfy charter takeoff-weather requirements?",
    "answer": "No. Meet authorized takeoff minima and all operator and aircraft conditions independently of ATC clearance.",
    "source": "14 CFR 135.225",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.225"
  },
  {
    "id": "P135-103",
    "category": "part-135",
    "question": "Why is charter icing approval more than having boots and heated probes?",
    "answer": "The aircraft's approved equipment, training, forecast/known icing limits, and any ground-deicing program must support the actual operation.",
    "source": "14 CFR 135.227",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.227"
  },
  {
    "id": "P135-104",
    "category": "part-135",
    "question": "Can a charter airplane take off with unapproved frost contamination because it is thin?",
    "answer": "No. Apply clean-aircraft requirements and only specifically permitted exceptions; visual thinness is not an authorization.",
    "source": "14 CFR 135.227",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.227"
  },
  {
    "id": "P135-105",
    "category": "part-135",
    "question": "What makes an airport adequate for a charter trip?",
    "answer": "Its size, surface, obstructions, lighting, and other conditions must support the actual proposed operation and performance.",
    "source": "14 CFR 135.229",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.229"
  },
  {
    "id": "P135-106",
    "category": "part-135",
    "question": "What must a charter airplane pilot verify about a passenger destination at night?",
    "answer": "Required wind-direction information and clearly marked landing/takeoff limits, as well as airport and aircraft suitability.",
    "source": "14 CFR 135.229",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.229"
  },
  {
    "id": "P135-107",
    "category": "part-135",
    "question": "What certificate is required for a passenger-carrying turbojet Part 135 PIC?",
    "answer": "An ATP with appropriate ratings and any required type rating, plus all other applicable operator qualifications.",
    "source": "14 CFR 135.243",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.243"
  },
  {
    "id": "P135-108",
    "category": "part-135",
    "question": "Why do commercial-certificate privileges alone not establish IFR charter PIC eligibility?",
    "answer": "Part 135 adds aeronautical-experience, instrument, training, and checking requirements for that assignment.",
    "source": "14 CFR 135.243",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.243"
  },
  {
    "id": "P135-109",
    "category": "part-135",
    "question": "How should a pilot evaluate eligibility for a new charter aircraft assignment?",
    "answer": "Match category, class, type, certificate, experience, and operator training/checking to the actual aircraft and operation.",
    "source": "14 CFR 135.243",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.243"
  },
  {
    "id": "P135-110",
    "category": "part-135",
    "question": "What is the usual certificate baseline for a Part 135 SIC?",
    "answer": "At least a commercial certificate with appropriate category/class and an instrument rating, subject to the specific helicopter VFR exception.",
    "source": "14 CFR 135.245",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.245"
  },
  {
    "id": "P135-111",
    "category": "part-135",
    "question": "Why must a charter SIC's instrument experience be checked separately?",
    "answer": "IFR SIC service has applicable instrument-experience requirements; possessing an instrument rating alone is not enough.",
    "source": "14 CFR 135.245",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.245"
  },
  {
    "id": "P135-112",
    "category": "part-135",
    "question": "What does charter landing recency establish, and what does it not establish?",
    "answer": "It addresses recent takeoffs and landings for passenger PIC service; it does not replace operator checks, training, or aircraft qualification.",
    "source": "14 CFR 135.247",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.247"
  },
  {
    "id": "P135-113",
    "category": "part-135",
    "question": "May simulator takeoffs and landings be counted casually for charter recency?",
    "answer": "Only when the device, course, and applicable approval meet the rule; ordinary unsupervised simulation is insufficient.",
    "source": "14 CFR 135.247",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.247"
  },
  {
    "id": "P135-114",
    "category": "part-135",
    "question": "Why does fatigue legality require more than counting today's airborne hours?",
    "answer": "Applicable commercial flying, preceding rest, scheduling provisions, and other flight-time limits must be considered.",
    "source": "14 CFR 135.263",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.263"
  },
  {
    "id": "P135-115",
    "category": "part-135",
    "question": "Does an unforeseen delay justify knowingly scheduling an illegal charter duty plan?",
    "answer": "No. Planning must comply with the applicable limits; unforeseen circumstances provisions are not routine scheduling tools.",
    "source": "14 CFR 135.263",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.263"
  },
  {
    "id": "P135-116",
    "category": "part-135",
    "question": "Why must a scheduled passenger operator identify its correct duty/rest rule?",
    "answer": "Scheduled and unscheduled operations can fall under different provisions; do not automatically apply an on-demand limit.",
    "source": "14 CFR 135.265",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.265"
  },
  {
    "id": "P135-117",
    "category": "part-135",
    "question": "What commercial flying counts toward unscheduled one- and two-pilot Part 135 cumulative limits?",
    "answer": "All commercial flying covered by the rule, not just flights for the current employer.",
    "source": "14 CFR 135.267",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.267"
  },
  {
    "id": "P135-118",
    "category": "part-135",
    "question": "What basic 24-hour flight-time limits apply to unscheduled one- and two-pilot crews?",
    "answer": "Normally eight hours for one pilot or ten for two qualified pilots, with the rule's specific alternative and rest provisions.",
    "source": "14 CFR 135.267",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.267"
  },
  {
    "id": "P135-119",
    "category": "part-135",
    "question": "Why is the regularly assigned 14-hour duty provision not a universal charter duty entitlement?",
    "answer": "Its flight-time and preceding/following rest conditions must all be met; other assignments and limits may prevent its use.",
    "source": "14 CFR 135.267",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.267"
  },
  {
    "id": "P135-120",
    "category": "part-135",
    "question": "What quarterly and annual flight-time limits apply under § 135.267(a)?",
    "answer": "500 hours per calendar quarter, 800 in two consecutive quarters, and 1,400 per calendar year, counting covered commercial flying.",
    "source": "14 CFR 135.267",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.267"
  },
  {
    "id": "P135-121",
    "category": "part-135",
    "question": "Why do three- and four-pilot charter crews need their own fatigue-rule review?",
    "answer": "They operate under different provisions from unscheduled one- and two-pilot crews; extra pilots alone do not authorize a longer assignment.",
    "source": "14 CFR 135.269",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.269"
  },
  {
    "id": "P135-122",
    "category": "part-135",
    "question": "Why must an operator track cabin-crewmember rest separately?",
    "answer": "Flight-attendant duty and rest provisions are distinct from pilot limits and must be satisfied for the assigned cabin crew.",
    "source": "14 CFR 135.273",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.273"
  },
  {
    "id": "P135-123",
    "category": "part-135",
    "question": "What is the usual Part 135 recurrent knowledge and competency-check interval?",
    "answer": "Within the preceding 12-calendar-month framework specified by the rule; the checks cover operator, aircraft, and assigned-pilot knowledge and competency.",
    "source": "14 CFR 135.293",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.293"
  },
  {
    "id": "P135-124",
    "category": "part-135",
    "question": "Why may a charter competency check include an emergency not used on the last trip?",
    "answer": "The check evaluates capability for the aircraft and operation, including required abnormal and emergency procedures, rather than only routine line experience.",
    "source": "14 CFR 135.293",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.293"
  },
  {
    "id": "P135-125",
    "category": "part-135",
    "question": "What is the usual instrument-proficiency-check interval for a Part 135 IFR PIC?",
    "answer": "Within the preceding six-calendar-month framework specified in the rule, using an authorized check pilot or the FAA.",
    "source": "14 CFR 135.297",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.297"
  },
  {
    "id": "P135-126",
    "category": "part-135",
    "question": "Why must an IFR charter captain review approach types demonstrated on the last check?",
    "answer": "The rule separately controls eligibility to use precision and nonprecision procedure types; a generic check date is not the whole assessment.",
    "source": "14 CFR 135.297",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.297"
  },
  {
    "id": "P135-127",
    "category": "part-135",
    "question": "What does the Part 135 PIC line check evaluate?",
    "answer": "Competent performance of PIC duties on a representative route or operational flight under the applicable checking provisions.",
    "source": "14 CFR 135.299",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.299"
  },
  {
    "id": "P135-128",
    "category": "part-135",
    "question": "How does Part 135 credit a covered check completed in an adjacent calendar month?",
    "answer": "The rule permits credit to the required month when completed in the month before or after, subject to its scope and approved procedures.",
    "source": "14 CFR 135.301",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.301"
  },
  {
    "id": "P135-129",
    "category": "part-135",
    "question": "Why must a charter operator have an approved training program rather than rely on pilot self-study?",
    "answer": "The program must provide the training and qualification needed for assigned duties under the applicable requirements.",
    "source": "14 CFR 135.323",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.323"
  },
  {
    "id": "P135-130",
    "category": "part-135",
    "question": "What is the purpose of Part 135 crew emergency training?",
    "answer": "Teach the equipment, assignments, coordination, and emergency actions relevant to the aircraft and operation.",
    "source": "14 CFR 135.331",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.331"
  },
  {
    "id": "P135-131",
    "category": "part-135",
    "question": "Why is crew resource management important in charter training?",
    "answer": "It addresses communication, teamwork, decision-making, and workload skills within the operator's required training program.",
    "source": "14 CFR 135.329",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.329"
  },
  {
    "id": "P135-132",
    "category": "part-135",
    "question": "How does differences training help a charter pilot flying variants of one type?",
    "answer": "It addresses relevant systems, limitations, procedures, and handling differences that a common aircraft designation can hide.",
    "source": "14 CFR 135.329",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.329"
  },
  {
    "id": "P135-133",
    "category": "part-135",
    "question": "What should charter ground training teach beyond memorized limitations?",
    "answer": "Aircraft systems, performance, normal/abnormal procedures, operator rules, and practical application appropriate to the duty position.",
    "source": "14 CFR 135.345",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.345"
  },
  {
    "id": "P135-134",
    "category": "part-135",
    "question": "Why does initial charter flight training need aircraft-specific maneuvers?",
    "answer": "The program must develop proficiency for the assigned aircraft and duty position, including applicable failures and emergencies.",
    "source": "14 CFR 135.347",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.347"
  },
  {
    "id": "P135-135",
    "category": "part-135",
    "question": "What is the purpose of recurrent charter training?",
    "answer": "Maintain current proficiency and refresh required knowledge and maneuvers, including changes and weaknesses relevant to the assignment.",
    "source": "14 CFR 135.351",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.351"
  },
  {
    "id": "P135-136",
    "category": "part-135",
    "question": "Why must large transport-category charter airplanes use approved performance data?",
    "answer": "The applicable operating limitations and performance rules rely on approved airplane data for the actual weight and conditions.",
    "source": "14 CFR 135.363",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.363"
  },
  {
    "id": "P135-137",
    "category": "part-135",
    "question": "How can runway and obstacles limit a charter jet below structural takeoff weight?",
    "answer": "Applicable takeoff distances, engine-out climb, obstacles, wind, temperature, and runway conditions can impose a lower allowable weight.",
    "source": "14 CFR 135.379",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.379"
  },
  {
    "id": "P135-138",
    "category": "part-135",
    "question": "Why must charter engine-out en route planning examine the complete route?",
    "answer": "Terrain and obstacle clearance must remain acceptable along the approved net flightpath, including diversion options and changing weight.",
    "source": "14 CFR 135.381",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.381"
  },
  {
    "id": "P135-139",
    "category": "part-135",
    "question": "What is the usual dry-runway landing-distance dispatch factor for covered large turbine charter airplanes?",
    "answer": "The applicable landing distance must fit within 60 percent of effective runway length under the specified conditions, unless an authorized alternative applies.",
    "source": "14 CFR 135.385",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.385"
  },
  {
    "id": "P135-140",
    "category": "part-135",
    "question": "What permits eligible on-demand operators to use the alternative landing-distance provision?",
    "answer": "Specific eligibility, approved destination-airport-analysis procedures, and all conditions of the regulatory alternative; not merely a pilot's judgment.",
    "source": "14 CFR 135.385",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.385"
  },
  {
    "id": "P135-141",
    "category": "part-135",
    "question": "Why must a covered charter turbojet's wet-runway dispatch calculation be checked separately?",
    "answer": "Additional wet/slippery runway provisions or approved data can increase required runway; a dry calculation alone is insufficient.",
    "source": "14 CFR 135.385",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.385"
  },
  {
    "id": "P135-142",
    "category": "part-135",
    "question": "Why might a small charter aircraft have an approved aircraft inspection program?",
    "answer": "The FAA can require an AAIP appropriate to the operation; its intervals and tasks become part of maintenance compliance.",
    "source": "14 CFR 135.419",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.419"
  },
  {
    "id": "P135-143",
    "category": "part-135",
    "question": "What maintenance-program issue arises for charter engines and appliances?",
    "answer": "Applicable additional manufacturer maintenance requirements and approved programs must be followed for the equipment covered by the rule.",
    "source": "14 CFR 135.421",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.421"
  },
  {
    "id": "P135-144",
    "category": "part-135",
    "question": "Why are charter maintenance records part of the flight-safety chain?",
    "answer": "They document required work, inspections, approvals, and status needed to demonstrate continuing airworthiness.",
    "source": "14 CFR 135.439",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.439"
  },
  {
    "id": "P135-145",
    "category": "part-135",
    "question": "What must happen after required charter maintenance before release to service?",
    "answer": "An authorized airworthiness release or maintenance-log entry must certify the required completion and condition under the operator's system.",
    "source": "14 CFR 135.443",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.443"
  },
  {
    "id": "P135-146",
    "category": "part-135",
    "question": "Why must a no-carry charter operator still train personnel about hazardous materials?",
    "answer": "It still needs the applicable recognition, rejection, reporting, and other dangerous-goods training for assigned functions.",
    "source": "14 CFR 135.501",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.501"
  },
  {
    "id": "P135-147",
    "category": "part-135",
    "question": "Why is hazardous-materials training matched to employee duties?",
    "answer": "Accepting, handling, loading, and operating personnel have different responsibilities and must be trained for the functions they perform.",
    "source": "14 CFR 135.503",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.503"
  },
  {
    "id": "P135-148",
    "category": "part-135",
    "question": "How should a charter operator document dangerous-goods training?",
    "answer": "Maintain the required employee training records so qualification and currency can be established.",
    "source": "14 CFR 135.507",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.507"
  },
  {
    "id": "P135-149",
    "category": "part-135",
    "question": "What is a helicopter air-ambulance preflight risk analysis intended to accomplish?",
    "answer": "Identify and assess the applicable operational hazards before the flight and apply the certificate holder’s required risk-analysis and approval procedures.",
    "source": "14 CFR 135.617",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.617"
  },
  {
    "id": "P135-150",
    "category": "part-135",
    "question": "Why is an HAA exception for an airport without weather reporting not general charter authority?",
    "answer": "It has specialized conditions and scope; unrelated Part 135 flights cannot borrow that exception.",
    "source": "14 CFR 135.611",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-135.611"
  },
  {
    "id": "INTL-001",
    "category": "international-oceanic",
    "question": "Why does an oceanic flight require regional planning instead of a single worldwide checklist?",
    "answer": "States and regions differ in airspace, equipment, approvals, communications, and contingency procedures; consult current AIPs and notices for every region.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-002",
    "category": "international-oceanic",
    "question": "What is an AIP used for in international flight planning?",
    "answer": "It publishes a state's enduring aeronautical information, including rules, facilities, procedures, and differences relevant to operations there.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-003",
    "category": "international-oceanic",
    "question": "How do international NOTAMs complement an AIP?",
    "answer": "They communicate temporary or recent operational changes and hazards that may supersede baseline published information.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-004",
    "category": "international-oceanic",
    "question": "Why does a U.S. aircraft remain subject to U.S. rules abroad?",
    "answer": "Applicable U.S. requirements continue while foreign-country operating rules and international provisions also apply; resolve the combination before flight.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-005",
    "category": "international-oceanic",
    "question": "Does an ICAO recommendation automatically become a pilot's domestic regulation?",
    "answer": "No. Determine how applicable states implement it and what the operator's approvals require.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-006",
    "category": "international-oceanic",
    "question": "Why should foreign overflight permission be checked separately from an ATC flight plan?",
    "answer": "A filed or accepted flight plan does not necessarily satisfy sovereign overflight, landing, diplomatic, or other entry permissions.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-007",
    "category": "international-oceanic",
    "question": "Why verify customs and immigration arrangements before choosing an international destination?",
    "answer": "Airport operating permission and border-entry permission are separate; required facilities, notices, and opening hours affect usability.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-008",
    "category": "international-oceanic",
    "question": "What is a flight-information region boundary's practical significance?",
    "answer": "Responsibility for ATS may change there, requiring specified contact, reporting, and transfer procedures.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-009",
    "category": "international-oceanic",
    "question": "Why is an oceanic control area not necessarily the same as territorial airspace?",
    "answer": "ATS responsibility over the high seas can be delegated without making the area a state's sovereign territory.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-010",
    "category": "international-oceanic",
    "question": "What makes a remote continental route operationally similar to an oceanic route?",
    "answer": "Limited surveillance, VHF communications, and ground navigation aids can require long-range systems and procedural separation.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-011",
    "category": "international-oceanic",
    "question": "Why must crew documentation be reviewed for each international itinerary?",
    "answer": "Licenses, medicals, travel documents, visas, and required validations can differ by state and operation.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-012",
    "category": "international-oceanic",
    "question": "A handler says no additional approvals are needed. What should the operator verify?",
    "answer": "The actual route, aircraft capabilities, required authorizations, entry requirements, and controlling state publications rather than relying on informal assurance.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-013",
    "category": "international-oceanic",
    "question": "Why must international training include contingency procedures before departure?",
    "answer": "Remote failures can demand prompt precise action without immediate ATC assistance; reading the procedure for the first time during failure increases risk.",
    "source": "FAA AC 91-70D, chapter 3; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-014",
    "category": "international-oceanic",
    "question": "What should a relief pilot understand before assuming oceanic duties?",
    "answer": "The current clearance, route and offsets, position, communications status, system condition, fuel, weather, and pending actions.",
    "source": "FAA AC 91-70D, chapter 3; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-015",
    "category": "international-oceanic",
    "question": "At oceanic entry, one long-range navigation system disagrees substantially with the others. Is an improvised airborne alignment a sound correction?",
    "answer": "No. Follow the flight-manual accuracy-check and failure procedures, rank usable systems, and advise ATC as necessary. The FAA warns that airborne alignment or manual position updates can worsen the error.",
    "source": "FAA AC 91-70D, Appendix D, D.2.5.1",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-016",
    "category": "international-oceanic",
    "question": "What does effective oceanic workload planning assign between pilots?",
    "answer": "Route entry and independent verification, communications, plotting, fuel checks, reporting, and failure-management responsibilities.",
    "source": "FAA AC 91-70D, chapter 3; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-017",
    "category": "international-oceanic",
    "question": "Why should a crew brief regional differences in lost communications?",
    "answer": "Domestic memory aids may not match oceanic expectations for cleared routing, level, speed, and timing.",
    "source": "FAA AC 91-70D, chapter 3; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-018",
    "category": "international-oceanic",
    "question": "How should a crew prepare for high-latitude navigation limitations?",
    "answer": "Review magnetic unreliability, approved heading references, navigation coverage, and the aircraft's polar limitations and procedures.",
    "source": "FAA AC 91-70D, chapter 3; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-019",
    "category": "international-oceanic",
    "question": "What does a long-range navigation system provide beyond a radio receiver?",
    "answer": "Approved positioning and guidance suitable for the intended remote operation using supported sensor inputs and integrity capabilities.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-020",
    "category": "international-oceanic",
    "question": "Why are two displays not necessarily two independent long-range navigation systems?",
    "answer": "They may share a receiver, antenna, power source, or computing unit; independence concerns failure paths, not screen count.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-021",
    "category": "international-oceanic",
    "question": "How do RNAV and RNP navigation specifications differ?",
    "answer": "RNP includes onboard performance monitoring and alerting; RNAV specifications do not require that feature as part of the specification.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-022",
    "category": "international-oceanic",
    "question": "What does an RNP accuracy number represent operationally?",
    "answer": "The specified lateral navigation accuracy in nautical miles under the navigation specification's conditions; other integrity and functionality requirements also apply.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-023",
    "category": "international-oceanic",
    "question": "Why is demonstrated aircraft accuracy not enough to claim an oceanic authorization?",
    "answer": "Operator training, procedures, maintenance, documentation, and specific approval requirements also apply.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-024",
    "category": "international-oceanic",
    "question": "What is PBCS intended to support?",
    "answer": "Performance-based communication and surveillance requirements supporting specified ATS separation and airspace operations.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-025",
    "category": "international-oceanic",
    "question": "How are RCP and RSP different?",
    "answer": "RCP addresses communication performance; RSP addresses surveillance performance. They support different parts of the separation assurance system.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-026",
    "category": "international-oceanic",
    "question": "Why should an operator avoid filing unsupported PBCS capabilities?",
    "answer": "ATC may use reduced separation based on the filed capability; inaccurate declarations undermine the basis for clearance.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-027",
    "category": "international-oceanic",
    "question": "What is CPDLC's basic role over the ocean?",
    "answer": "Exchange ATC messages digitally between controller and flightcrew using the appropriate data-link service and procedures.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-028",
    "category": "international-oceanic",
    "question": "What is ADS-C's basic role over the ocean?",
    "answer": "Automatically provide surveillance reports under a contract established between the aircraft and the ground system.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-029",
    "category": "international-oceanic",
    "question": "Why does ADS-B capability not establish ADS-C capability?",
    "answer": "Broadcast surveillance and contract-based reporting use different functions and requirements; one equipment code cannot stand in for the other.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-030",
    "category": "international-oceanic",
    "question": "Why must CPDLC logon use the correct flight identification?",
    "answer": "Mismatch between aircraft logon and filed flight identity can prevent association and delay service.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-031",
    "category": "international-oceanic",
    "question": "What should the crew verify after a data-link logon?",
    "answer": "The intended ATS unit and appropriate connection status, rather than assuming entry of a logon request established service.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-032",
    "category": "international-oceanic",
    "question": "Does a CPDLC connection guarantee an active ADS-C contract?",
    "answer": "No. Check the separate surveillance function and required reporting status using the aircraft procedures.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-033",
    "category": "international-oceanic",
    "question": "Why is voice backup still important with working CPDLC?",
    "answer": "Data link can fail or be unsuitable for urgent clarification; maintain the prescribed alternate communications capability.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-034",
    "category": "international-oceanic",
    "question": "How does an HF radio differ practically from VHF in remote operations?",
    "answer": "HF supports beyond-line-of-sight communication but can have variable propagation and interference requiring frequency and technique changes.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-035",
    "category": "international-oceanic",
    "question": "What does a SELCAL check establish?",
    "answer": "That selective calling can alert the crew through the assigned communications path; it does not prove all subsequent communication will succeed.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-036",
    "category": "international-oceanic",
    "question": "Does SELCAL relieve a crew of all communications monitoring?",
    "answer": "No. Follow the region's listening-watch and SELCAL procedures and maintain readiness to respond.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-037",
    "category": "international-oceanic",
    "question": "Why may oceanic radio personnel relay rather than issue clearances themselves?",
    "answer": "Communications stations can pass messages between aircraft and controllers; distinguish relay services from the controlling authority.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-038",
    "category": "international-oceanic",
    "question": "When is satvoice usefulness limited despite a working phone?",
    "answer": "Availability, approval, routing, contact numbers, system coverage, and ATS procedures can restrict its operational use.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-039",
    "category": "international-oceanic",
    "question": "What should an oceanic communications briefing include besides frequencies?",
    "answer": "Logon addresses, SELCAL, primary and backup services, changeover points, emergency contacts, and failure procedures.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-040",
    "category": "international-oceanic",
    "question": "Why should an HF outage be assessed before entering remote airspace?",
    "answer": "Required long-range communication capability may no longer be satisfied even when local VHF works.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-041",
    "category": "international-oceanic",
    "question": "A CPDLC message seems inconsistent with the voice clearance. What should the crew do?",
    "answer": "Clarify with ATC using an appropriate channel before executing the disputed instruction; do not choose whichever seems convenient.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-042",
    "category": "international-oceanic",
    "question": "Why must CPDLC clearance responses follow the specified message procedure?",
    "answer": "A correct response closes the clearance transaction; informal text or silence may leave ATC uncertain whether an instruction was accepted.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-043",
    "category": "international-oceanic",
    "question": "What does STANDBY mean in a data-link clearance exchange?",
    "answer": "The crew needs time to evaluate; it is not acceptance and does not itself authorize the proposed maneuver.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-044",
    "category": "international-oceanic",
    "question": "Why should an oceanic crew check active versus next ATS-unit status?",
    "answer": "A transfer can be pending rather than complete; communications with the wrong unit can delay clearance or reporting.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-045",
    "category": "international-oceanic",
    "question": "How can inertial navigation degrade during a long remote flight?",
    "answer": "Position error can grow when updates are unavailable; monitor performance and compare available independent references.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-046",
    "category": "international-oceanic",
    "question": "Why check GNSS prediction and interference information for remote routing?",
    "answer": "Loss or degradation may affect the required navigation performance, available backups, and route eligibility.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-047",
    "category": "international-oceanic",
    "question": "What is the practical significance of WGS 84 for international navigation?",
    "answer": "Consistent geodetic coordinates help ensure charts, procedures, and navigation databases refer to the same positions.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-048",
    "category": "international-oceanic",
    "question": "Why can a non-WGS-84 airport require special care?",
    "answer": "Coordinate discrepancies can affect RNAV use; consult published limitations and operator guidance before relying on the procedure.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-049",
    "category": "international-oceanic",
    "question": "What must an oceanic equipment review include beyond an MEL's general dispatch approval?",
    "answer": "The deferred item's effect on route-specific communications, navigation, surveillance, separation, and special authorizations.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-050",
    "category": "international-oceanic",
    "question": "Why check diversion-airport rescue and firefighting capability?",
    "answer": "A runway may be physically adequate while support capability is unsuitable for the planned extended operation or aircraft.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-051",
    "category": "international-oceanic",
    "question": "How do curfews affect remote diversion planning?",
    "answer": "An alternate's runway, staffing, lighting, and services may be unavailable during the possible arrival window.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-052",
    "category": "international-oceanic",
    "question": "What does an equal-time point help a crew decide?",
    "answer": "Where travel times to specified diversion airports are equal under the assumed conditions; it supports diversion planning, not a compulsory turn point.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-053",
    "category": "international-oceanic",
    "question": "Why can engine-out and depressurization equal-time points differ?",
    "answer": "Their altitudes, speeds, winds, and fuel consumption differ, changing the relative diversion times.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-054",
    "category": "international-oceanic",
    "question": "How is a point of safe return different from an equal-time point?",
    "answer": "It considers whether remaining fuel permits a return under stated assumptions; an ETP compares time to alternatives.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-055",
    "category": "international-oceanic",
    "question": "Why recalculate remote diversion options after a significant wind change?",
    "answer": "The original assumptions for time, fuel, alternates, and critical points may no longer describe the flight.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-056",
    "category": "international-oceanic",
    "question": "What should remote fuel planning consider for a depressurization?",
    "answer": "A safe lower altitude, terrain, oxygen endurance, fuel flow, winds, and the time to a usable diversion airport.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-057",
    "category": "international-oceanic",
    "question": "Why is fuel for a normal cruise diversion not necessarily enough after an engine failure?",
    "answer": "Engine-out altitude and configuration can change speed and consumption; use the applicable critical-fuel scenario.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-058",
    "category": "international-oceanic",
    "question": "What determines whether an isolated airport is a dependable destination?",
    "answer": "Weather, access, runway condition, services, fuel, rescue options, and the lack of a realistic alternate all need consideration.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-059",
    "category": "international-oceanic",
    "question": "Why should crew survival equipment match the route's water temperature?",
    "answer": "Cold-water exposure can become life-threatening quickly; equipment and training must suit realistic ditching and rescue conditions.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-060",
    "category": "international-oceanic",
    "question": "What makes a survival kit inaccessible in practice?",
    "answer": "Stowage that cannot be reached or carried during evacuation can defeat otherwise suitable equipment; plan access and assignment.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-061",
    "category": "international-oceanic",
    "question": "Why confirm life-raft capacity and deployment arrangements before remote flight?",
    "answer": "Occupant numbers, loss-of-raft provisions, accessibility, and usable deployment paths affect survival capability.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-062",
    "category": "international-oceanic",
    "question": "Why should a high-latitude dispatch review include fuel temperature?",
    "answer": "Fuel can approach its operational freezing limitation during long cold-soaked flights; monitor trends and plan approved remedies.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-063",
    "category": "international-oceanic",
    "question": "What should an international flight's operational flight plan show for navigation checks?",
    "answer": "The cleared waypoints, coordinates, tracks, distances, estimates, and other information needed to monitor progress independently.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-064",
    "category": "international-oceanic",
    "question": "How should a last-minute oceanic reroute change dispatch preparation?",
    "answer": "Recheck authorizations, performance, fuel, alternates, equipment, weather, and database entries for the revised route.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-065",
    "category": "international-oceanic",
    "question": "Why is an organized track message only part of the flight's authority?",
    "answer": "It describes a routing structure and conditions; the aircraft still needs the applicable clearances and qualifications.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-066",
    "category": "international-oceanic",
    "question": "Why must a North Atlantic track message's validity period be checked?",
    "answer": "Track structures change with traffic and winds; yesterday's track letter may identify a different route.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-067",
    "category": "international-oceanic",
    "question": "What should a crew do if its planned track is unavailable?",
    "answer": "Obtain and independently verify the revised clearance and reassess fuel and capability rather than fly the filed track automatically.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-068",
    "category": "international-oceanic",
    "question": "Why are random routes not exempt from oceanic procedures?",
    "answer": "They still require appropriate approvals, clearance, separation compliance, navigation checks, and communications.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-069",
    "category": "international-oceanic",
    "question": "If the flight plan declares RNP 4, may the FMC navigation alerting threshold be set above 4.0?",
    "answer": "No. The FMC monitoring and alerting must be consistent with the declared capability; AC 91-70D specifies a threshold no higher than 4.0 for the RNP 4 example.",
    "source": "FAA AC 91-70D, § 6.4.2.5",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-070",
    "category": "international-oceanic",
    "question": "Why verify foreign transition altitude and transition level separately?",
    "answer": "Their meanings and values can differ, affecting when to change between local pressure settings and standard pressure.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-071",
    "category": "international-oceanic",
    "question": "How can mixed altitude units create an international clearance hazard?",
    "answer": "Feet, meters, or flight-level conventions can be confused; confirm units and apply approved conversions and cross-checks.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-072",
    "category": "international-oceanic",
    "question": "What is the oceanic master document?",
    "answer": "The controlled crew reference recording the effective route clearance and flight progress, used to reconcile navigation and reporting.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-073",
    "category": "international-oceanic",
    "question": "Why must amended clearances be recorded on the master document?",
    "answer": "It must reflect the route actually authorized so later checks and relief-pilot briefings do not rely on the original filed route.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-074",
    "category": "international-oceanic",
    "question": "How does independent route verification reduce oceanic navigation errors?",
    "answer": "A second check against the clearance and full coordinates can detect entry errors that copying or confirming labels alone may miss.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-075",
    "category": "international-oceanic",
    "question": "Why check full coordinates rather than just a waypoint's short identifier?",
    "answer": "Similar abbreviated labels can represent widely separated geographic points or hide degree/minute errors.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-076",
    "category": "international-oceanic",
    "question": "What should a crew compare after loading an oceanic flight plan from a data link?",
    "answer": "The complete active routing, coordinates, tracks, distances, constraints, and clearance against the master reference.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-077",
    "category": "international-oceanic",
    "question": "What can an unexpected long leg reveal during oceanic route verification?",
    "answer": "A wrong coordinate, omitted waypoint, or incorrect sequence; resolve it before proceeding on the suspect leg.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-078",
    "category": "international-oceanic",
    "question": "Why must the FROM and TO waypoints be checked at oceanic entry?",
    "answer": "They establish the active leg; correct waypoints elsewhere in the route do not ensure the airplane is following the cleared segment.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-079",
    "category": "international-oceanic",
    "question": "What automation-mode check belongs with oceanic route verification?",
    "answer": "Confirm the intended navigation steering mode is active, rather than a heading mode that can silently leave the cleared route.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-080",
    "category": "international-oceanic",
    "question": "How should a crew verify an oceanic heading change following a waypoint?",
    "answer": "Check actual turn direction and resulting track against the cleared next leg and expected geometry.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-081",
    "category": "international-oceanic",
    "question": "Why compare the FMS track with an independent chart or plotting reference?",
    "answer": "A self-consistent FMS can accurately fly an incorrectly entered route; an external comparison provides a different error barrier.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-082",
    "category": "international-oceanic",
    "question": "What does a plotting check contribute after coast-out?",
    "answer": "It confirms actual progress and route geometry independently of simply trusting the active navigation display.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-083",
    "category": "international-oceanic",
    "question": "Why should a position report use the current cleared route rather than the original flight plan?",
    "answer": "ATC separation depends on accurate position, estimates, and intentions for the clearance actually being flown.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-084",
    "category": "international-oceanic",
    "question": "What information is typically prepared for a procedural position report?",
    "answer": "Aircraft identity, position and time, flight level, next position and estimate, following position, and any additionally required information.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-085",
    "category": "international-oceanic",
    "question": "Why must revised waypoint estimates be reported when required?",
    "answer": "Longitudinal separation can depend on predicted crossing times; significant changes must reach ATC under regional procedures.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-086",
    "category": "international-oceanic",
    "question": "Does ADS-C always eliminate voice position reports?",
    "answer": "Only when the region and clearance procedures authorize it; confirm the reporting requirement and surveillance status.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-087",
    "category": "international-oceanic",
    "question": "Why must the assigned oceanic speed be maintained accurately?",
    "answer": "ATC can use speed control to preserve longitudinal separation; unapproved changes can close the gap to other traffic.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-088",
    "category": "international-oceanic",
    "question": "What should a pilot do when unable to maintain an assigned oceanic Mach number?",
    "answer": "Notify ATC promptly and obtain a revised clearance or apply the applicable contingency if immediate safety demands it.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-089",
    "category": "international-oceanic",
    "question": "Why are unapproved oceanic step climbs dangerous even with no visible traffic?",
    "answer": "Procedural traffic may be outside visual or onboard detection coverage; altitude changes require clearance except for emergency procedures.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-090",
    "category": "international-oceanic",
    "question": "What is strategic lateral offset intended to mitigate?",
    "answer": "Collision and wake risks from aircraft navigating extremely accurately along the same centerline under the applicable regional procedure.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-091",
    "category": "international-oceanic",
    "question": "Why must strategic offset direction and amount be verified regionally?",
    "answer": "Permitted offsets and increments depend on the applicable procedure and equipment; personal offsets can conflict with the system.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-092",
    "category": "international-oceanic",
    "question": "Can strategic lateral offset replace a weather deviation clearance?",
    "answer": "No. SLOP is a separate normal procedure and does not authorize arbitrary routing around weather.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-093",
    "category": "international-oceanic",
    "question": "Why should fuel checks continue after the oceanic clearance is settled?",
    "answer": "Winds, consumption, leaks, and delays can change diversion viability throughout the remote segment.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-094",
    "category": "international-oceanic",
    "question": "What should a relief-pilot handover include about pending data-link messages?",
    "answer": "Any open clearance transaction, expected transfer, unread message, or deferred response so the new crew does not duplicate or miss action.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-095",
    "category": "international-oceanic",
    "question": "What should be checked when returning from oceanic to domestic airspace?",
    "answer": "Required communications, navigation modes, route and altitude clearance, pressure settings, and offset termination according to local procedures.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-096",
    "category": "international-oceanic",
    "question": "When should a crew seek a revised oceanic clearance rather than immediately use a contingency offset?",
    "answer": "Whenever circumstances allow; coordinated clearance preserves separation more predictably than unilateral deviation.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-097",
    "category": "international-oceanic",
    "question": "Why do general oceanic contingencies and weather-deviation contingencies use different procedures?",
    "answer": "They address different maneuvering needs and separation strategies; do not mix their offsets, altitude adjustments, or trigger conditions.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-098",
    "category": "international-oceanic",
    "question": "What should a crew announce when equipment no longer supports the required RNP or RVSM capability?",
    "answer": "Advise ATS promptly of the inability and cause using the prescribed phraseology, and request an appropriate revised clearance.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-099",
    "category": "international-oceanic",
    "question": "How does an engine failure change an oceanic crew's priorities?",
    "answer": "Control the airplane, apply aircraft procedures, evaluate altitude and diversion needs, coordinate with ATC, and use the correct contingency if clearance cannot be obtained.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-100",
    "category": "international-oceanic",
    "question": "Why is an immediate straight-ahead emergency descent potentially hazardous over the ocean?",
    "answer": "It can cross occupied levels along a busy track; follow applicable emergency and contingency guidance to reduce collision risk while protecting occupants.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-101",
    "category": "international-oceanic",
    "question": "What should a weather-deviation request communicate clearly?",
    "answer": "The required direction and extent of deviation, urgency, and inability to comply if applicable, using the region's procedures.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-102",
    "category": "international-oceanic",
    "question": "If ATC cannot approve a necessary weather deviation, what should the crew do?",
    "answer": "Use the applicable published weather contingency when safety requires it, broadcast intentions as prescribed, and keep trying to coordinate.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-103",
    "category": "international-oceanic",
    "question": "Why should crews distinguish loss of one navigation system from loss of all reliable navigation?",
    "answer": "The remaining capability and regional rules determine whether continued operation, rerouting, or a contingency is appropriate.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-104",
    "category": "international-oceanic",
    "question": "What should a remote crew preserve after navigation degradation?",
    "answer": "Usable independent position information, recent fixes, heading/time calculations, communications, and a clear record of the failure and decisions.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-105",
    "category": "international-oceanic",
    "question": "Why does lost CPDLC not necessarily mean total lost communications?",
    "answer": "HF, VHF, satvoice, or relay paths may remain available; assess and use the approved alternatives.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-106",
    "category": "international-oceanic",
    "question": "How can another aircraft help after a remote communications failure?",
    "answer": "It may relay messages to ATS using prescribed frequencies and procedures; relay assistance does not itself amend the clearance.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-107",
    "category": "international-oceanic",
    "question": "What should crews review about an unexpected oceanic ATC-facility shutdown?",
    "answer": "The applicable contingency communication and routing procedures, notifications, and published regional arrangements.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-108",
    "category": "international-oceanic",
    "question": "Why should a remote medical diversion consider more than the nearest runway?",
    "answer": "Patient needs, medical services, weather, runway suitability, fuel, terrain, and landing support determine the usable option.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-109",
    "category": "international-oceanic",
    "question": "Why keep ATS and company informed during an oceanic diversion?",
    "answer": "They can coordinate traffic, rescue, airport support, weather, and operational assistance while maintaining awareness of the aircraft's intentions.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-110",
    "category": "international-oceanic",
    "question": "What is the purpose of automatic aircraft tracking on remote flights?",
    "answer": "Provide timely position awareness and support overdue-aircraft and search-and-rescue response without depending solely on manual reports.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-111",
    "category": "international-oceanic",
    "question": "Why does an ELT not replace a remote flight-tracking and communication plan?",
    "answer": "It is a distress aid with limitations, not a continuous guarantee of position, communications, or prompt rescue.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-112",
    "category": "international-oceanic",
    "question": "A route crosses an active conflict area. Is an ATC clearance sufficient risk approval?",
    "answer": "No. Review applicable prohibitions, warnings, state restrictions, threat information, and operator risk decisions before accepting the routing.",
    "source": "FAA AC 91-70D, chapter 2; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-113",
    "category": "international-oceanic",
    "question": "Why should international dispatch verify fuel availability and specification at alternates?",
    "answer": "A physically suitable landing airport may not support onward flight with usable fuel, equipment, payment, or servicing arrangements.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-114",
    "category": "international-oceanic",
    "question": "What should happen after a reroute introduces a coordinate not in the navigation database?",
    "answer": "Enter and verify it using approved manual-coordinate procedures, independently checking hemisphere, degrees, minutes, leg geometry, and clearance.",
    "source": "FAA AC 91-70D, chapter 6; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-115",
    "category": "international-oceanic",
    "question": "Why does a working passenger internet connection not prove operational data-link capability?",
    "answer": "Cabin connectivity is not evidence of approved ATS communications, required performance, or surveillance service.",
    "source": "FAA AC 91-70D, chapter 4; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-116",
    "category": "international-oceanic",
    "question": "What should a crew verify about volcanic-ash advisories on a remote route?",
    "answer": "The affected region, levels, movement, alternatives, fuel consequences, and operator avoidance procedures using current official information.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-117",
    "category": "international-oceanic",
    "question": "Does the FAA definition of a gross navigation error permit oceanic lateral deviations smaller than 10 NM?",
    "answer": "No. The 10 NM threshold defines a gross navigation error; it is not an allowable tracking tolerance. Remain on the cleared route and comply with the applicable navigation specification and alerts.",
    "source": "FAA AC 91-70D, § 6.1.2.2; Appendix A, A.2.35",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-118",
    "category": "international-oceanic",
    "question": "Why can ECON or Long Range Cruise speed modes conflict with an assigned fixed oceanic Mach number?",
    "answer": "Those modes may vary commanded speed as weight or conditions change. An assigned fixed Mach must be maintained unless ATC authorizes a change; select and monitor a compatible speed-control method.",
    "source": "FAA AC 91-70D, § 6.1.2.3.2",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-119",
    "category": "international-oceanic",
    "question": "What is the safest response when the crew cannot confidently recall an oceanic contingency detail?",
    "answer": "Maintain control, use the current accessible published procedure, coordinate as circumstances permit, and avoid improvising remembered offsets.",
    "source": "FAA AC 91-70D, chapter 7; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "INTL-120",
    "category": "international-oceanic",
    "question": "Why should remote-flight crews check alternate weather over a window rather than only one estimated arrival minute?",
    "answer": "A diversion can start at different route points and times; the relevant approval and planning rules may require suitability across the possible use period.",
    "source": "FAA AC 91-70D, chapter 5; current regional AIP and NOTAMs",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-70D.pdf"
  },
  {
    "id": "TP-001",
    "category": "turboprop",
    "question": "Where does most useful thrust come from in a typical turboprop?",
    "answer": "The propeller, driven through a reduction gearbox; exhaust also contributes some thrust.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-002",
    "category": "turboprop",
    "question": "Why does a turboprop need reduction gearing?",
    "answer": "Turbine rotational speed is much higher than an efficient propeller speed, so gearing transfers power at usable propeller rpm.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-003",
    "category": "turboprop",
    "question": "How does a free-turbine turboprop transmit energy to its propeller?",
    "answer": "Gas flow drives a separate power turbine mechanically connected to the propeller through gearing, rather than directly coupling the gas generator shaft to it.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-004",
    "category": "turboprop",
    "question": "How does a fixed-shaft turboprop differ from a free-turbine design?",
    "answer": "Its compressor and power-producing turbine/propeller train are mechanically linked; starting and operating characteristics therefore differ.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-005",
    "category": "turboprop",
    "question": "Why is a turbine gas-generator speed not the same as propeller rpm?",
    "answer": "Different shafts and gearing can rotate independently or at different ratios; read the parameter identified for that engine.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-006",
    "category": "turboprop",
    "question": "What does turboprop torque indicate?",
    "answer": "Twisting load transmitted through the shaft or gearbox, a principal power-setting and limitation parameter.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-007",
    "category": "turboprop",
    "question": "Why must a turboprop pilot monitor both torque and temperature when setting power?",
    "answer": "Either can become limiting as conditions change; acceptable torque does not guarantee acceptable turbine temperature.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-008",
    "category": "turboprop",
    "question": "How can a hot day change the limiting takeoff-power parameter?",
    "answer": "Temperature limits can be reached before rated torque; use the actual-condition AFM power-setting method.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-009",
    "category": "turboprop",
    "question": "Why may cold dense air make torque limiting at takeoff?",
    "answer": "The engine can produce sufficient power to reach mechanical torque limits before reaching temperature limits.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-010",
    "category": "turboprop",
    "question": "What does ITT or a similar turbine-temperature indication tell the pilot?",
    "answer": "Temperature at the installation's specified sensing location; its name and allowable values depend on the engine design.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-011",
    "category": "turboprop",
    "question": "Why are turbine temperature limits not interchangeable between turboprops?",
    "answer": "Different sensing locations, hardware, ratings, and approved procedures give the values different meanings.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-012",
    "category": "turboprop",
    "question": "What does a turboprop power lever normally command in forward flight?",
    "answer": "Engine power through the fuel/engine-control system, while the propeller governor maintains selected rpm within its operating range.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-013",
    "category": "turboprop",
    "question": "What does a conventional turboprop propeller lever select?",
    "answer": "The governing propeller rpm and, through designated positions, functions such as feathering where provided.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-014",
    "category": "turboprop",
    "question": "What does a turboprop condition lever commonly control?",
    "answer": "Functions such as fuel cutoff and gas-generator idle selection; exact functions and positions vary by installation.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-015",
    "category": "turboprop",
    "question": "Why must turbine-engine control lever names be learned for the actual aircraft?",
    "answer": "Lever functions, gates, detents, and interlocks differ; a familiar label does not ensure an identical action.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-016",
    "category": "turboprop",
    "question": "How does a constant-speed propeller respond to increasing engine power within its governing range?",
    "answer": "It increases blade angle to absorb more power while maintaining the selected rpm.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-017",
    "category": "turboprop",
    "question": "What is an on-speed propeller governor condition?",
    "answer": "Actual rpm matches selected rpm, so the governor does not command a corrective pitch change.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-018",
    "category": "turboprop",
    "question": "How does a governor respond to propeller overspeed within its control capability?",
    "answer": "It commands a blade-angle change that increases absorbed load and reduces rpm toward the selected value.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-019",
    "category": "turboprop",
    "question": "Why can a constant-speed propeller leave its governing range?",
    "answer": "At low power or a blade-angle stop, the governor may no longer have enough pitch authority to hold selected rpm.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-020",
    "category": "turboprop",
    "question": "What does feathering a turboprop propeller accomplish after a failure?",
    "answer": "It aligns blades to reduce drag from the unpowered propeller, improving the aircraft's available performance.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-021",
    "category": "turboprop",
    "question": "Why can an unfeathered failed-engine propeller seriously impair climb?",
    "answer": "Windmilling and low blade angle can create large drag that consumes the remaining engine's performance margin.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-022",
    "category": "turboprop",
    "question": "Does selecting feather necessarily make every turboprop propeller stop instantly?",
    "answer": "No. Rotation and stopping behavior depend on the design, airflow, and system condition; verify the expected indications.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-023",
    "category": "turboprop",
    "question": "What is autofeather intended to do on equipped turboprops?",
    "answer": "Automatically initiate feathering under the system's qualifying failure conditions to reduce drag during critical phases.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-024",
    "category": "turboprop",
    "question": "Why must autofeather arming be verified rather than assumed?",
    "answer": "Its operation depends on specific arming conditions, switches, power settings, and sensor logic.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-025",
    "category": "turboprop",
    "question": "Does autofeather remove the need to identify and secure a failed engine?",
    "answer": "No. Follow the aircraft's failure identification, verification, control, and securing procedures.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-026",
    "category": "turboprop",
    "question": "How does negative torque sensing differ from autofeather?",
    "answer": "NTS reduces drag by moving blade angle toward feather under qualifying negative torque; it is not necessarily a complete automatic feathering system.",
    "source": "FAA Lessons Learned, SA227; propeller NTS and feathering",
    "sourceUrl": "https://www.faa.gov/lessons_learned/small_airplane/accidents/C-FFZN"
  },
  {
    "id": "TP-027",
    "category": "turboprop",
    "question": "Why must pilots not rely on NTS alone after engine power loss?",
    "answer": "It may not fully feather or provide the required final drag reduction; complete the approved engine-failure checklist promptly.",
    "source": "FAA Lessons Learned, SA227; propeller NTS and feathering",
    "sourceUrl": "https://www.faa.gov/lessons_learned/small_airplane/accidents/C-FFZN"
  },
  {
    "id": "TP-028",
    "category": "turboprop",
    "question": "What does propeller synchronization adjust?",
    "answer": "It reduces small rpm differences between propellers to reduce beat noise and vibration within the approved operating envelope.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-029",
    "category": "turboprop",
    "question": "How is synchrophasing different from simple synchronization?",
    "answer": "It also controls the relative angular position of blades to optimize noise or vibration, depending on the installation.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-030",
    "category": "turboprop",
    "question": "Why are synchronizer operating restrictions aircraft-specific?",
    "answer": "The system's authority and failure behavior can affect engine-out handling; use the AFM's permitted phases and settings.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-031",
    "category": "turboprop",
    "question": "What is the beta range in a turboprop control system?",
    "answer": "A low-power range where power-lever movement directly schedules propeller blade angle under the design's ground-handling logic.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-032",
    "category": "turboprop",
    "question": "How does reverse thrust arise on a reversing turboprop propeller?",
    "answer": "The blades move to a negative angle, redirecting the propeller's thrust to oppose forward motion.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-033",
    "category": "turboprop",
    "question": "Why is reverse thrust not simply a stronger wheel brake?",
    "answer": "It creates aerodynamic force through the propeller and engine system, with separate controls, limitations, and asymmetric effects.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-034",
    "category": "turboprop",
    "question": "Why must pilots respect flight-idle gates and beta interlocks?",
    "answer": "They help prevent hazardous low or negative blade-angle selection in flight; never defeat them outside approved procedures.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-035",
    "category": "turboprop",
    "question": "What can inadvertent ground-beta selection in flight cause?",
    "answer": "Severe drag, overspeed, controllability problems, or engine/propeller damage depending on the design.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-036",
    "category": "turboprop",
    "question": "Why might a turboprop require more taxi-speed attention than a piston airplane?",
    "answer": "Substantial residual thrust at idle and propeller characteristics can accelerate the aircraft quickly; use approved taxi technique.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-037",
    "category": "turboprop",
    "question": "Why is prolonged aggressive reverse on a loose surface undesirable?",
    "answer": "Propeller wash can lift debris into the propeller and engine intake, risking damage and hazards to others.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-038",
    "category": "turboprop",
    "question": "Why should reverse thrust be reduced according to the aircraft's speed schedule?",
    "answer": "Low-speed use can increase debris ingestion, vibration, or other risks; follow the approved limitation and technique.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-039",
    "category": "turboprop",
    "question": "What directional problem can unequal reverse thrust cause on a twin turboprop?",
    "answer": "Asymmetric deceleration and yaw, especially on a slippery runway; maintain control using approved procedures.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-040",
    "category": "turboprop",
    "question": "Why is turboprop reverse availability checked in landing-performance planning?",
    "answer": "Approved calculations may assume specific deceleration devices; inoperative systems can change required runway or operating restrictions.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-041",
    "category": "turboprop",
    "question": "What makes a turbine start time-critical for the pilot?",
    "answer": "Temperature, speed, oil pressure, starter limits, and acceleration must remain within the approved sequence and limits.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-042",
    "category": "turboprop",
    "question": "Why does weak starting power raise hot-start risk?",
    "answer": "Slow acceleration can reduce cooling airflow while fuel burns, increasing temperature; verify approved battery or external-power capability.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-043",
    "category": "turboprop",
    "question": "What should a turboprop crew do if starting temperature rises toward a limit abnormally?",
    "answer": "Apply the aircraft's start-abort procedure promptly rather than waiting for a limit exceedance.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-044",
    "category": "turboprop",
    "question": "Why is fuel introduction tied to a specified start condition?",
    "answer": "Adequate rotation and airflow are needed for proper ignition and temperature control; use the engine's prescribed sequence.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-045",
    "category": "turboprop",
    "question": "What does failure of temperature to rise after fuel introduction suggest?",
    "answer": "Possible failure to light; observe the specified time limit and use the approved abort and clearing procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-046",
    "category": "turboprop",
    "question": "Why should an aborted turbine start not be followed immediately by an improvised restart?",
    "answer": "Starter duty cycle, residual fuel, temperature, battery state, and fault identification must be addressed first.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-047",
    "category": "turboprop",
    "question": "What is dry motoring used for when directed by a turboprop checklist?",
    "answer": "Rotate the engine without fuel as prescribed to clear fuel or provide cooling; observe the particular starter and engine limits.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-048",
    "category": "turboprop",
    "question": "Why must oil pressure be checked during turbine starting?",
    "answer": "Correct pressure must appear within the approved conditions; running without adequate lubrication can damage the engine.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-049",
    "category": "turboprop",
    "question": "How can a start-lock system affect a turboprop's starting procedure?",
    "answer": "It holds blades at a starting position on equipped propellers; engagement and release must follow the approved procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-050",
    "category": "turboprop",
    "question": "Why is knowing a propeller's start-lock status important after an engine failure?",
    "answer": "Some systems can inhibit feathering under certain conditions; use aircraft-specific recognition and feathering procedures.",
    "source": "FAA Lessons Learned, SA227; propeller NTS and feathering",
    "sourceUrl": "https://www.faa.gov/lessons_learned/small_airplane/accidents/C-FFZN"
  },
  {
    "id": "TP-051",
    "category": "turboprop",
    "question": "Why may a free-turbine engine show different gas-generator and propeller acceleration during start?",
    "answer": "The power turbine and propeller are not directly mechanically tied to gas-generator rotation.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-052",
    "category": "turboprop",
    "question": "What is the purpose of a turboprop overspeed governor?",
    "answer": "Provide additional propeller-speed protection if the primary governing system does not keep rpm within the intended range.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-053",
    "category": "turboprop",
    "question": "Why should the pilot verify overspeed protection during an approved system check?",
    "answer": "It is an independent protective function whose availability may be required for safe operation and dispatch.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-054",
    "category": "turboprop",
    "question": "Does a normal propeller-governor check prove every feathering function works?",
    "answer": "No. Governing, feathering, autofeather, and backup protection can have separate checks and failure paths.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-055",
    "category": "turboprop",
    "question": "Why must turboprop power changes account for engine response lag?",
    "answer": "Gas-generator and propeller response is not instantaneous; anticipate thrust needs while respecting transient limits.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-056",
    "category": "turboprop",
    "question": "How can rapid power application near the ground create problems?",
    "answer": "Lag, torque changes, asymmetric response, and pitch/yaw effects can make control more demanding; use the approved go-around technique.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-057",
    "category": "turboprop",
    "question": "Why should a turboprop takeoff use a planned profile?",
    "answer": "Specified speeds, power settings, configuration changes, and failure decisions coordinate performance and workload for that type.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-058",
    "category": "turboprop",
    "question": "Why must takeoff power be confirmed early in the roll?",
    "answer": "An incorrect setting or abnormal engine response should be detected while appropriate reject options remain available.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-059",
    "category": "turboprop",
    "question": "What should an unexpected torque split during takeoff prompt?",
    "answer": "Assess whether required takeoff power and engine indications are achieved, applying the approved reject policy and failure procedures.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-060",
    "category": "turboprop",
    "question": "Why is rotating a turboprop early not a reliable cure for a short runway?",
    "answer": "Premature liftoff can impair acceleration, climb, and control margins; use approved performance and rotation technique.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-061",
    "category": "turboprop",
    "question": "Why does minimum control speed deserve attention in twin turboprop takeoff planning?",
    "answer": "Asymmetric thrust can make directional control limiting after an engine failure, especially at low speed and high power.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-062",
    "category": "turboprop",
    "question": "What should takeoff planning distinguish about accelerate-stop and accelerate-go capability?",
    "answer": "Stopping and continuing after failure have different performance requirements; a usable runway length does not automatically satisfy both.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-063",
    "category": "turboprop",
    "question": "Why can reducing power on the operating engine sometimes improve control after one engine fails in a twin turboprop?",
    "answer": "It reduces asymmetric yaw when necessary to maintain control, but sacrifices performance; follow the aircraft's trained procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-064",
    "category": "turboprop",
    "question": "What does an unfeathering accumulator provide on a propeller system equipped with one?",
    "answer": "Stored engine oil under gas pressure can move the blades out of feather so airflow can turn the propeller for an approved restart. Its use and availability depend on the installation.",
    "source": "FAA Airplane Flying Handbook, chapter 13, unfeathering accumulators",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/14_afh_ch13.pdf"
  },
  {
    "id": "TP-065",
    "category": "turboprop",
    "question": "What should a turboprop crew verify before moving a propeller lever to feather?",
    "answer": "The affected engine and checklist action, using the aircraft's required confirmation or challenge-response procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-066",
    "category": "turboprop",
    "question": "Why can engine-out airspeed selection differ between climb and descent?",
    "answer": "The target may optimize climb, obstacle clearance, cooling, range, or control for that phase; use the approved schedule.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-067",
    "category": "turboprop",
    "question": "Why must a twin turboprop's single-engine service ceiling be considered before high-terrain routing?",
    "answer": "The aircraft may be unable to maintain the planned altitude after a failure despite normal two-engine performance.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-068",
    "category": "turboprop",
    "question": "What does a turboprop's maximum continuous power rating permit?",
    "answer": "Operation within the approved continuous rating and associated limits; it is not interchangeable with time-limited takeoff power.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-069",
    "category": "turboprop",
    "question": "Why are transient exceedance allowances not normal power targets?",
    "answer": "They address specified short events, not routine operation; repeated or prolonged exceedance can require maintenance and risk damage.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-070",
    "category": "turboprop",
    "question": "What should happen after a turbine temperature or torque exceedance?",
    "answer": "Record and report the event and obtain the required maintenance evaluation before further operation under the approved program.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-071",
    "category": "turboprop",
    "question": "Why should cruise power setting follow tables instead of lever position alone?",
    "answer": "Altitude, temperature, rpm, bleed use, and limits change actual power and performance for a given lever position.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-072",
    "category": "turboprop",
    "question": "How can engine bleed-air demand affect turboprop performance?",
    "answer": "Air extraction and associated system loads can reduce available power or change temperature; apply the approved corrections.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-073",
    "category": "turboprop",
    "question": "Why can ice-protection use alter takeoff or climb calculations?",
    "answer": "Engine inlet and airframe protection may impose performance penalties or configuration requirements specified by the AFM.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-074",
    "category": "turboprop",
    "question": "What is an inertial separator on equipped turboprops intended to do?",
    "answer": "Divert certain foreign material or precipitation away from the engine intake, with installation-specific use and performance effects.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-075",
    "category": "turboprop",
    "question": "Why must inlet-separator use not be improvised?",
    "answer": "Its required conditions and power penalties depend on the design; follow the actual aircraft's limitations and checklist.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-076",
    "category": "turboprop",
    "question": "Why is compressor washing a maintenance matter rather than a pilot power-setting fix?",
    "answer": "Contamination and approved cleaning affect engine health; pilots use reporting and maintenance processes rather than compensate with unauthorized settings.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-077",
    "category": "turboprop",
    "question": "What can an adverse engine-temperature trend at the same power suggest?",
    "answer": "Changing conditions, instrumentation, or engine deterioration; compare properly normalized data and report through the maintenance program.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-078",
    "category": "turboprop",
    "question": "Why are turbine-engine trend-monitoring records useful?",
    "answer": "They can reveal developing changes in temperature, torque, fuel flow, and speed before a conspicuous failure occurs.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-079",
    "category": "turboprop",
    "question": "What should unusually high vibration in a turboprop prompt?",
    "answer": "Maintain control, evaluate indications, use the approved abnormal procedure, and consider landing; do not assume propeller synchronization will cure a mechanical fault.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-080",
    "category": "turboprop",
    "question": "Why must a propeller strike be reported even without visible blade damage?",
    "answer": "Internal propeller, gearbox, or engine damage can exist; required inspection criteria extend beyond a quick visual check.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-081",
    "category": "turboprop",
    "question": "Why should a turboprop exterior inspection include intake condition?",
    "answer": "Obstructions, ice, debris, or improperly removed covers can compromise airflow and engine operation.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-082",
    "category": "turboprop",
    "question": "What propeller blade findings warrant maintenance review before flight?",
    "answer": "Damage, cracks, erosion, leaks, or other defects outside approved limits; pilots should not blend or repair blades without authorization.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-083",
    "category": "turboprop",
    "question": "Why should a pilot not casually pull or rotate a turboprop blade during inspection?",
    "answer": "Approved handling restrictions protect the propeller, gearbox, and personnel; the correct practice depends on the installation.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-084",
    "category": "turboprop",
    "question": "Why can engine shutdown require a specified cooling period?",
    "answer": "It helps control thermal conditions and protect engine components before fuel cutoff under the approved procedure.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-085",
    "category": "turboprop",
    "question": "What should a pilot verify after selecting turboprop fuel cutoff?",
    "answer": "Expected shutdown indications, propeller behavior, and completion of required securing checks rather than assuming lever movement proves shutdown.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-086",
    "category": "turboprop",
    "question": "Why does a turboprop propeller create a hazard after shutdown?",
    "answer": "It may still rotate or windmill, and restart or system actions can move it; keep people clear until safe under ground procedures.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-087",
    "category": "turboprop",
    "question": "How can turboprop noise tempt a pilot into an unsafe rpm choice?",
    "answer": "Reducing rpm solely for comfort can violate phase or power restrictions; use the approved noise-abatement and power schedule.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-088",
    "category": "turboprop",
    "question": "Why must approach speed and power be stabilized in a turboprop?",
    "answer": "Large power changes and propeller drag changes near the ground can disrupt energy and landing performance.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-089",
    "category": "turboprop",
    "question": "Why can flight-idle descent characteristics surprise a piston-trained pilot?",
    "answer": "Propeller drag and turbine response can produce different deceleration and sink behavior; learn the aircraft's approved energy-management technique.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-090",
    "category": "turboprop",
    "question": "Why should a turboprop pilot avoid attempting to stretch the glide after total power loss?",
    "answer": "Maintain approved best-glide and control margins while selecting a reachable landing site and applying the engine/propeller procedures.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-091",
    "category": "turboprop",
    "question": "How can propeller configuration affect a turboprop's glide distance?",
    "answer": "A windmilling, feathered, or otherwise configured propeller changes drag substantially; use the applicable approved performance data.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-092",
    "category": "turboprop",
    "question": "Why should a turboprop go-around briefing address reverse or beta selection?",
    "answer": "Once ground deceleration selections have been made, aircraft-specific restrictions and system response may constrain a rejected landing.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-093",
    "category": "turboprop",
    "question": "Why are passenger or cargo loading changes important to turboprop handling?",
    "answer": "CG changes affect trim, stability, control forces, and performance; loading within weight alone is not sufficient.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-094",
    "category": "turboprop",
    "question": "What makes turboprop icing encounters an aircraft-specific training issue?",
    "answer": "Protection systems, minimum speeds, handling effects, and escape criteria differ; generic boot or heater knowledge is insufficient.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-095",
    "category": "turboprop",
    "question": "Why should a turboprop pilot know which electrical sources operate feathering components?",
    "answer": "A power failure can affect system availability; identify the actual installation's normal, backup, and manual paths.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-096",
    "category": "turboprop",
    "question": "Why can a hydraulic or oil leak affect propeller control as well as lubrication?",
    "answer": "Many propeller systems use engine oil pressure for blade control; consequences depend on the design's fail-safe direction and backups.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-097",
    "category": "turboprop",
    "question": "What must be understood before using an emergency feathering or unfeathering system?",
    "answer": "Its prerequisites, electrical or oil supply, limitations, expected indications, and the specific checklist sequence.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-098",
    "category": "turboprop",
    "question": "Why is engine-out training in a turboprop conducted using approved simulation methods?",
    "answer": "Actual feathering, power reduction, and failures introduce risks; training must follow the aircraft and operator's safe simulation procedures.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "TP-099",
    "category": "turboprop",
    "question": "How does propeller blade angle differ from the blade’s aerodynamic angle of attack?",
    "answer": "Blade angle is measured relative to the plane of rotation; angle of attack is measured relative to the local airflow. Forward speed and rotational speed can change angle of attack without an identical change in blade angle.",
    "source": "FAA AMT Powerplant Handbook, chapter 7, propeller blade geometry",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/09_amtp_ch7.pdf"
  },
  {
    "id": "TP-100",
    "category": "turboprop",
    "question": "Why does propeller tip speed limit useful rpm even when the engine could turn faster?",
    "answer": "High tip speeds bring compressibility, noise, and efficiency penalties; operate within the approved rpm limits rather than seeking power through overspeed.",
    "source": "FAA Airplane Flying Handbook, chapter 15; turbine/propeller principles — applicable AFM controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/16_afh_ch15.pdf"
  },
  {
    "id": "PD-026",
    "category": "pilot-docs",
    "question": "How long can a temporary pilot certificate normally be used?",
    "answer": "Up to 120 days, unless it expires earlier under the rule. Check its date and conditions before relying on it while awaiting the permanent certificate.",
    "source": "14 CFR 61.17",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.17"
  },
  {
    "id": "PD-027",
    "category": "pilot-docs",
    "question": "You lose your pilot certificate before a trip. Is a photograph of it enough?",
    "answer": "No. Obtain the FAA-approved replacement or temporary authority that applies to the operation. A personal photo does not automatically satisfy the possession requirement.",
    "source": "14 CFR 61.29",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.29"
  },
  {
    "id": "PD-028",
    "category": "pilot-docs",
    "question": "What evidence supports changing the name on a pilot certificate?",
    "answer": "Apply with the certificate and a marriage license, court order, or other document verifying the change. Use the FAA's current submission process.",
    "source": "14 CFR 61.25",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.25"
  },
  {
    "id": "PD-029",
    "category": "pilot-docs",
    "question": "Can a first-class medical remain useful after its first-class privileges expire?",
    "answer": "Yes. It may support a lower class of privileges for the applicable remaining duration. Determine validity from age at examination, examination date, and the actual operation.",
    "source": "14 CFR 61.23",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.23"
  },
  {
    "id": "PD-030",
    "category": "pilot-docs",
    "question": "Does an instructor always need a medical certificate just to give instruction?",
    "answer": "No. A medical is generally tied to acting as PIC or another required crewmember. Resolve who is qualified and acting as PIC before the lesson.",
    "source": "14 CFR 61.23",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.23"
  },
  {
    "id": "PD-031",
    "category": "pilot-docs",
    "question": "What passenger-carrying limitation applies to a commercial airplane pilot without an instrument rating?",
    "answer": "The commercial certificate prohibits carrying passengers for hire at night or on cross-country flights beyond 50 nautical miles. An instrument rating removes that particular certificate limitation, not other operating requirements.",
    "source": "14 CFR 61.133",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.133"
  },
  {
    "id": "PD-032",
    "category": "pilot-docs",
    "question": "Does an instrument-helicopter rating authorize airplane IFR privileges?",
    "answer": "No. The instrument rating or other applicable authority must match the aircraft category. Check the certificate rather than assuming instrument privileges transfer between categories.",
    "source": "14 CFR 61.3",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.3"
  },
  {
    "id": "PD-033",
    "category": "pilot-docs",
    "question": "What additional training applies before PIC service in certain high-altitude pressurized airplanes?",
    "answer": "Unless an exception applies, receive the required ground and flight training and endorsement for pressurized airplanes with a service ceiling or maximum operating altitude, whichever is lower, above 25,000 feet MSL.",
    "source": "14 CFR 61.31",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.31"
  },
  {
    "id": "PD-034",
    "category": "pilot-docs",
    "question": "Does a twin with two 180-hp engines require the high-performance endorsement merely because total power exceeds 200 hp?",
    "answer": "No. That endorsement rule concerns an airplane with an engine of more than 200 horsepower. Multiengine ratings and other applicable training still matter.",
    "source": "14 CFR 61.31",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.31"
  },
  {
    "id": "PD-035",
    "category": "pilot-docs",
    "question": "Can a small turbojet avoid the PIC type-rating requirement because it is below the large-aircraft weight threshold?",
    "answer": "No. Turbojet-powered airplanes require the appropriate PIC type rating regardless of that weight threshold, unless specific FAA authorization applies.",
    "source": "14 CFR 61.31",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.31"
  },
  {
    "id": "PD-036",
    "category": "pilot-docs",
    "question": "Does adding a multiengine rating automatically supply a missing complex-airplane endorsement?",
    "answer": "No. Ratings and additional-training endorsements address different qualifications. Confirm each requirement and any applicable exception for the airplane and PIC role.",
    "source": "14 CFR 61.31",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.31"
  },
  {
    "id": "PD-037",
    "category": "pilot-docs",
    "question": "Can a safety pilot log SIC time for an entire trip when the other pilot wears a hood only briefly?",
    "answer": "Only time that meets the applicable SIC logging conditions qualifies. Simulated-instrument safety-pilot duties do not automatically make all other time on the trip loggable SIC time.",
    "source": "14 CFR 61.51",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.51"
  },
  {
    "id": "PD-038",
    "category": "pilot-docs",
    "question": "Should an approved training-device session be entered as aircraft flight time?",
    "answer": "No. Record the correct device identification and training or instrument experience category. Credit toward a requirement depends on device approval and the applicable training rule.",
    "source": "14 CFR 61.51",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.51"
  },
  {
    "id": "PD-039",
    "category": "pilot-docs",
    "question": "Can a private pilot charge passengers for aircraft depreciation as part of shared expenses?",
    "answer": "No. The permitted pro-rata expense categories do not include depreciation. Also satisfy common-purpose and other applicable compensation limitations.",
    "source": "14 CFR 61.113",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.113"
  },
  {
    "id": "PD-040",
    "category": "pilot-docs",
    "question": "Why can an insurance checkout still be necessary after all FAA ratings and endorsements are satisfied?",
    "answer": "Insurance and rental conditions can impose separate experience or checkout requirements. Verify them along with legal qualifications before accepting the aircraft; FAA qualification alone does not establish contractual coverage.",
    "source": "14 CFR 61.31 (FAA qualifications); applicable aircraft rental agreement and insurance policy (separate contractual requirements)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-61.31"
  },
  {
    "id": "AW-031",
    "category": "airworthiness",
    "question": "May the 10-hour 100-hour-inspection extension be used for an ordinary sightseeing trip?",
    "answer": "No. It is limited to reaching a place where the inspection can be done. Excess time counts toward the next 100 hours; it is not free operating time.",
    "source": "14 CFR 91.409",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.409"
  },
  {
    "id": "AW-032",
    "category": "airworthiness",
    "question": "Does a 100-hour inspection completed last week replace an annual that has now expired?",
    "answer": "No. A qualifying annual can replace a required 100-hour inspection, but an ordinary 100-hour inspection does not replace the annual.",
    "source": "14 CFR 91.409",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.409"
  },
  {
    "id": "AW-033",
    "category": "airworthiness",
    "question": "Can mandatory airworthiness-limitations inspections be ignored because the aircraft passes annual?",
    "answer": "No. The applicable airworthiness-limitations section's replacement times, inspection intervals, and related procedures must be met unless an approved alternative applies.",
    "source": "14 CFR 91.403",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.403"
  },
  {
    "id": "AW-034",
    "category": "airworthiness",
    "question": "Is possessing an STC document enough to authorize using someone else's modification approval?",
    "answer": "No. The owner/operator must hold the STC or have the holder's written permission, and the installation and records must meet applicable requirements.",
    "source": "14 CFR 91.403",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.403"
  },
  {
    "id": "AW-035",
    "category": "airworthiness",
    "question": "Why should a pilot look for Form 337 documentation after a major alteration?",
    "answer": "Major alterations generally require the prescribed major-alteration record, not just a casual log note. Verify the installation approval, required records, and revised operating data with qualified maintenance personnel.",
    "source": "14 CFR 43.9",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-43.9"
  },
  {
    "id": "AW-036",
    "category": "airworthiness",
    "question": "A new avionics unit has an AFM supplement. What must the pilot do before using it?",
    "answer": "Identify the supplement's applicability, required limitations, procedures, and required availability. The original flight manual alone may no longer describe the approved installation.",
    "source": "14 CFR 91.9",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.9"
  },
  {
    "id": "AW-037",
    "category": "airworthiness",
    "question": "What records help establish whether a life-limited component can remain in service?",
    "answer": "Its current life status and the applicable life limit. An overhaul entry alone does not automatically reset a mandatory retirement life.",
    "source": "14 CFR 91.417",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.417"
  },
  {
    "id": "AW-038",
    "category": "airworthiness",
    "question": "Does losing an aircraft logbook reset component times or inspection obligations?",
    "answer": "No. Reconstruct status through acceptable supporting records and qualified maintenance assistance. Do not assume missing documentation means an item is new or compliant.",
    "source": "14 CFR 91.417",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.417"
  },
  {
    "id": "AW-039",
    "category": "airworthiness",
    "question": "Can a special flight permit authorize an aircraft that is incapable of safe flight?",
    "answer": "No. The aircraft may fail to meet some airworthiness requirements, but must still be capable of safe flight under the permit's conditions.",
    "source": "14 CFR 21.197",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-21.197"
  },
  {
    "id": "AW-040",
    "category": "airworthiness",
    "question": "What should an application for a special flight permit explain?",
    "answer": "Purpose, route, required crew, noncompliance, proposed restrictions, and other information the FAA needs to set safe operating limitations. Inspections or tests may be required.",
    "source": "14 CFR 21.199",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-21.199"
  },
  {
    "id": "AW-041",
    "category": "airworthiness",
    "question": "Can an AD prevent using a special flight permit for a ferry flight?",
    "answer": "Yes. Follow the AD's special-flight-permit provisions and restrictions. A ferry purpose does not by itself override an AD.",
    "source": "14 CFR 39.23",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-39.23"
  },
  {
    "id": "AW-042",
    "category": "airworthiness",
    "question": "Can a pilot supervise an unqualified friend doing maintenance as though the pilot were an A&P?",
    "answer": "No. Pilot preventive-maintenance privileges do not create the mechanic supervision authority in Part 43. Establish who is authorized to perform and approve the work.",
    "source": "14 CFR 43.3",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-43.3"
  },
  {
    "id": "AW-043",
    "category": "airworthiness",
    "question": "After authorized pilot preventive maintenance, who approves that work for return to service?",
    "answer": "The appropriately authorized pilot may approve the preventive maintenance they performed, within the rule's limitations, with a compliant maintenance entry. Authority does not extend to arbitrary repairs.",
    "source": "14 CFR 43.7",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-43.7"
  },
  {
    "id": "AW-044",
    "category": "airworthiness",
    "question": "Can an owner substitute an internet repair technique for the applicable maintenance instructions?",
    "answer": "Use current manufacturer instructions or another method acceptable to the FAA, with appropriate tools and workmanship. Convenience or popularity online does not establish acceptability.",
    "source": "14 CFR 43.13",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-43.13"
  },
  {
    "id": "AW-045",
    "category": "airworthiness",
    "question": "What happens when an inspection finds the aircraft unairworthy?",
    "answer": "The inspection entry records the disapproval, and the owner/operator receives the discrepancy list required by the rule. An inspection performed is not necessarily an approval for flight.",
    "source": "14 CFR 43.11",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-43.11"
  },
  {
    "id": "AW-046",
    "category": "airworthiness",
    "question": "Who must ensure inspection discrepancies are repaired or otherwise legally addressed?",
    "answer": "The owner/operator. Verify that correction or lawful disposition and required return-to-service records exist before operating.",
    "source": "14 CFR 91.405",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.405"
  },
  {
    "id": "AW-047",
    "category": "airworthiness",
    "question": "Does a maintenance release guarantee that the pilot should accept the airplane without a preflight?",
    "answer": "No. The release addresses the work performed; the PIC still determines condition for safe flight. Inspect the aircraft and review affected systems and limitations.",
    "source": "14 CFR 91.407",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.407"
  },
  {
    "id": "AW-048",
    "category": "airworthiness",
    "question": "Does an annual inspection performed early preserve the old annual expiration month?",
    "answer": "No. Under the ordinary calendar-month rule, the next interval runs from the month the qualifying annual was completed. Do not apply airline training grace-month rules to annual inspections.",
    "source": "14 CFR 91.409",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.409"
  },
  {
    "id": "AW-049",
    "category": "airworthiness",
    "question": "Can an airframe-rated mechanic perform every part of the required altimeter-system inspection?",
    "answer": "No. Section 91.411 limits that mechanic authority to static-pressure-system tests and inspections. Other required work needs an appropriately rated repair station, manufacturer, or other specifically authorized person.",
    "source": "14 CFR 91.411(b)",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.411"
  },
  {
    "id": "AW-050",
    "category": "airworthiness",
    "question": "Does passing the transponder inspection alone establish that ADS-B Out meets its performance requirements?",
    "answer": "No. ADS-B Out has separate equipment and performance requirements, including correct identification and position information. Verify the installation and transmitted performance; a routine transponder inspection is not proof of every ADS-B function.",
    "source": "14 CFR 91.225–91.227; 91.413",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.227"
  },
  {
    "id": "AW-051",
    "category": "airworthiness",
    "question": "Must maintenance logs normally be carried aboard during an ordinary domestic Part 91 flight?",
    "answer": "Not generally. They must be retained and available as required; onboard certificates and operating documents are separate requirements. Specific operations may require additional records aboard.",
    "source": "14 CFR 91.417",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.417"
  },
  {
    "id": "AW-052",
    "category": "airworthiness",
    "question": "What maintenance status should be checked before buying an aircraft with a recent inspection?",
    "answer": "Total time, life limits, overhaul status, applicable AD compliance, current inspection status, and major-alteration records. A fresh inspection date alone does not establish all those facts.",
    "source": "14 CFR 91.417",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.417"
  },
  {
    "id": "AW-053",
    "category": "airworthiness",
    "question": "How can an operator use a different method from the one specified by an AD?",
    "answer": "Obtain an approved alternative method of compliance or adjustment as allowed by the AD and FAA process. An owner's or mechanic's preference is not approval.",
    "source": "14 CFR 39.19",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-39.19"
  },
  {
    "id": "AW-054",
    "category": "airworthiness",
    "question": "Why must a removed life-limited part's status remain identifiable?",
    "answer": "To prevent installation after its allowed life is exhausted. Use the permitted recordkeeping or control method so its life status follows the part appropriately.",
    "source": "14 CFR 43.10",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-43.10"
  },
  {
    "id": "AW-055",
    "category": "airworthiness",
    "question": "Does an airworthiness certificate by itself prove the airplane is currently airworthy?",
    "answer": "No. Its continued effectiveness depends on the applicable conditions; current maintenance, alterations, required inspections, and safe condition still need verification.",
    "source": "14 CFR 21.181",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-21.181"
  },
  {
    "id": "AW-056",
    "category": "airworthiness",
    "question": "What is the practical difference between an MMEL and an aircraft's approved MEL?",
    "answer": "An MMEL is a master basis for relief; it is not automatically the operator's authorization to dispatch. Use the applicable approved MEL and required authorization or the lawful non-MEL process.",
    "source": "14 CFR 91.213",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.213"
  },
  {
    "id": "AW-057",
    "category": "airworthiness",
    "question": "A day-only airplane gets a landing light. Is it thereby equipped for night VFR?",
    "answer": "No. Check the entire applicable night-equipment requirement, aircraft operating limitations, installation approvals, and pilot qualifications. One added item does not establish night eligibility.",
    "source": "14 CFR 91.205",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.205"
  },
  {
    "id": "AW-058",
    "category": "airworthiness",
    "question": "Can an S-LSA owner treat a manufacturer's safety directive as merely an optional suggestion?",
    "answer": "The special-light-sport operating rule addresses applicable safety directives and authorized alternatives. Determine required compliance for the aircraft rather than treating every manufacturer communication alike.",
    "source": "14 CFR 91.327",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.327"
  },
  {
    "id": "AW-059",
    "category": "airworthiness",
    "question": "Does owning an S-LSA permit every repair without an authorized maintenance qualification?",
    "answer": "No. The work and approval privileges depend on the certificate, task, applicable maintenance rules, and manufacturer instructions. Ownership is not a general mechanic certificate.",
    "source": "14 CFR 43.3",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-43.3"
  },
  {
    "id": "AW-060",
    "category": "airworthiness",
    "question": "Why should a repair's effect on the approved configuration be resolved before flight?",
    "answer": "The aircraft must continue to meet its applicable design and operating requirements. A physically functioning replacement does not automatically establish an approved installation.",
    "source": "14 CFR 91.403",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.403"
  },
  {
    "id": "P91-051",
    "category": "part-91",
    "question": "ATC asks for a report after giving emergency priority. What deadline can apply?",
    "answer": "If ATC requests it, submit the detailed report to the facility manager within 48 hours after the emergency-priority event. This is distinct from an FAA-requested report under section 91.3.",
    "source": "14 CFR 91.123",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.123"
  },
  {
    "id": "P91-052",
    "category": "part-91",
    "question": "Can an apparently intoxicated friend ride on an ordinary Part 91 pleasure flight?",
    "answer": "Except for the specified emergency or properly cared-for medical-patient situation, the pilot may not carry someone who appears intoxicated or under the influence of drugs.",
    "source": "14 CFR 91.17",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.17"
  },
  {
    "id": "P91-053",
    "category": "part-91",
    "question": "Does an ordinary automobile booster seat automatically qualify as an aircraft child restraint?",
    "answer": "No. Verify that the restraint is an approved type for aircraft use, correctly labeled and installed, and appropriate for the child. A car approval alone is insufficient.",
    "source": "14 CFR 91.107",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.107"
  },
  {
    "id": "P91-054",
    "category": "part-91",
    "question": "Does the under-two lap-child exception mean a shared adult seat belt should be used?",
    "answer": "No. The exception permits holding the child under its conditions; it does not approve putting an adult belt around both people. An approved child restraint is the safer arrangement.",
    "source": "14 CFR 91.107",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.107"
  },
  {
    "id": "P91-055",
    "category": "part-91",
    "question": "Can a one-control airplane automatically be used for ordinary flight instruction?",
    "answer": "No. Fully functioning dual controls are the general requirement. Throwover-wheel exceptions have specific instructor, pilot, rudder-control, and safety conditions; verify the exact operation qualifies.",
    "source": "14 CFR 91.109",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.109"
  },
  {
    "id": "P91-056",
    "category": "part-91",
    "question": "Does an IFR clearance excuse a pilot from looking for traffic in visual conditions?",
    "answer": "No. Vigilance to see and avoid applies when weather permits, whether operating under IFR or VFR. ATC services do not cancel that duty.",
    "source": "14 CFR 91.113",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.113"
  },
  {
    "id": "P91-057",
    "category": "part-91",
    "question": "Two aircraft on the water approach head-on. What should their pilots do?",
    "answer": "Alter course to the right and keep well clear. Water right-of-way rules also require attention to vessels and other water traffic.",
    "source": "14 CFR 91.115",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.115"
  },
  {
    "id": "P91-058",
    "category": "part-91",
    "question": "ATC says maintain best forward speed below 10,000 feet. Does that automatically waive the speed rule?",
    "answer": "No. Clarify what can legally and safely be flown. An ordinary speed request is not automatic authorization to exceed a regulatory limit.",
    "source": "14 CFR 91.117",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.117"
  },
  {
    "id": "P91-059",
    "category": "part-91",
    "question": "Why might the lowest usable flight level be above FL180 even though Class A normally starts at 18,000 feet?",
    "answer": "Low atmospheric pressure can raise the lowest usable flight level to preserve separation from aircraft below using local altimeter settings. Use the applicable setting and clearance.",
    "source": "14 CFR 91.121",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.121"
  },
  {
    "id": "P91-060",
    "category": "part-91",
    "question": "What must a pilot do if an in-flight radio failure occurs while operating VFR in Class D?",
    "answer": "The rule permits landing when weather is at least basic VFR, visual contact with the tower is maintained, and landing clearance is received. Watch for light signals and comply with applicable procedures.",
    "source": "14 CFR 91.129",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.129"
  },
  {
    "id": "P91-061",
    "category": "part-91",
    "question": "What runway-altitude restriction applies to a large or turbine airplane entering a Class D traffic pattern?",
    "answer": "Unless ATC instructs otherwise or cloud clearance requires otherwise, maintain at least 1,500 feet above airport elevation until further descent is necessary for a safe landing. Apply the rule to the covered large or turbine airplane operation.",
    "source": "14 CFR 91.129",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.129"
  },
  {
    "id": "P91-062",
    "category": "part-91",
    "question": "What does the Class D rule require when a runway has a visual approach slope indicator?",
    "answer": "Maintain an altitude at or above the indicated glidepath until a lower altitude is necessary for a safe landing. Do not treat visual guidance as clearance to ignore other restrictions.",
    "source": "14 CFR 91.129",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.129"
  },
  {
    "id": "P91-063",
    "category": "part-91",
    "question": "Does an IFR clearance through a restricted area remove the need for authorization?",
    "answer": "Entry must be authorized by the using or controlling agency as appropriate. Confirm that the clearance provides the necessary coordination; do not assume every restricted area is available.",
    "source": "14 CFR 91.133",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.133"
  },
  {
    "id": "P91-064",
    "category": "part-91",
    "question": "Can a news or sightseeing pilot enter a disaster TFR simply because the flight stays VFR?",
    "answer": "No. Entry must qualify under the particular restriction and its coordination conditions. VFR weather alone does not authorize access.",
    "source": "14 CFR 91.137",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.137"
  },
  {
    "id": "P91-065",
    "category": "part-91",
    "question": "What should a pilot do when the FAA issues emergency air traffic rules for a region?",
    "answer": "Follow the emergency rules and applicable notices, including restrictions on otherwise normal operations. A standing route or previous clearance does not establish exemption.",
    "source": "14 CFR 91.139",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.139"
  },
  {
    "id": "P91-066",
    "category": "part-91",
    "question": "Is a presidential flight restriction limited to the location of the aircraft carrying the President?",
    "answer": "No. Operate according to the published restriction and instructions. Its defined area, times, permissions, and prohibited activities control.",
    "source": "14 CFR 91.141",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.141"
  },
  {
    "id": "P91-067",
    "category": "part-91",
    "question": "Can a published spaceflight restriction close airspace that is normally usable?",
    "answer": "Yes. Check the current notice's area, altitude, and effective times and obtain required authorization. A permanent chart does not establish launch-day availability.",
    "source": "14 CFR 91.143",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.143"
  },
  {
    "id": "P91-068",
    "category": "part-91",
    "question": "May an IFR pilot cut an airway corner simply because the next fix is visible?",
    "answer": "Not without the appropriate authorization. In controlled airspace, follow the airway centerline or the prescribed direct route as applicable unless ATC authorizes otherwise. Visual contact with a fix is not a shortcut clearance.",
    "source": "14 CFR 91.181",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.181"
  },
  {
    "id": "P91-069",
    "category": "part-91",
    "question": "Can a charity fundraiser arrange airplane rides without checking special flight requirements?",
    "answer": "No. Qualifying charitable, nonprofit, or community-event flights have specific pilot, aircraft, notification, and operating conditions. A good cause does not itself create an exemption.",
    "source": "14 CFR 91.146",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.146"
  },
  {
    "id": "P91-070",
    "category": "part-91",
    "question": "Does a short sightseeing flight automatically fall outside commercial operating oversight?",
    "answer": "No. Certain qualifying nonstop commercial air tours use a specific authorization and oversight framework, including an FAA letter of authorization and other required programs. Verify eligibility before advertising or accepting payment.",
    "source": "14 CFR 91.147",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.147"
  },
  {
    "id": "P91-071",
    "category": "part-91",
    "question": "Must a pilot still carry the planned reserve at every instant of a VFR flight under the departure fuel rule?",
    "answer": "The rule is a departure planning and fuel-adequacy requirement, not permission to continue toward fuel exhaustion. Reassess actual burn and conditions and divert while a safe landing remains available.",
    "source": "14 CFR 91.151",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.151"
  },
  {
    "id": "P91-072",
    "category": "part-91",
    "question": "Can a VFR pilot climb into a cloud layer because the destination reports clear weather?",
    "answer": "No. Applicable visibility and cloud-clearance minima must be maintained along the flight. Destination weather cannot authorize entering cloud en route.",
    "source": "14 CFR 91.155",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.155"
  },
  {
    "id": "P91-073",
    "category": "part-91",
    "question": "Does the hemispheric VFR cruising-altitude rule apply to a sustained turn or holding maneuver?",
    "answer": "The ordinary rule applies in level cruising flight more than 3,000 feet above the surface, with stated exceptions including turning and holding. Still maintain terrain clearance and avoid traffic.",
    "source": "14 CFR 91.159",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.159"
  },
  {
    "id": "P91-074",
    "category": "part-91",
    "question": "Can a certificate of registration belonging to the previous aircraft owner simply be used indefinitely after a sale?",
    "answer": "No. Ownership changes affect registration validity. Verify the current registration or permitted temporary evidence and its conditions before flight.",
    "source": "14 CFR 91.203",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.203"
  },
  {
    "id": "P91-075",
    "category": "part-91",
    "question": "Can an airplane whose ELT was removed for repair fly indefinitely with a placard?",
    "answer": "No. The maintenance-removal exception has record, placard, and time conditions, including a 90-day limit. Check the applicable exception before operating without the required transmitter.",
    "source": "14 CFR 91.207",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.207"
  },
  {
    "id": "P91-076",
    "category": "part-91",
    "question": "Can anticollision lights be switched off if their glare creates a safety hazard in cloud?",
    "answer": "The PIC may turn them off when doing so is in the interest of safety. This does not eliminate separate position-light requirements.",
    "source": "14 CFR 91.209",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.209"
  },
  {
    "id": "P91-077",
    "category": "part-91",
    "question": "In a pressurized Part 91 airplane above FL250, what emergency oxygen supply is required for occupants?",
    "answer": "At least ten minutes of supplemental oxygen for each occupant for a pressurization-loss descent, in addition to oxygen otherwise required by the rule.",
    "source": "14 CFR 91.211",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.211"
  },
  {
    "id": "P91-078",
    "category": "part-91",
    "question": "One of two pilots leaves the controls above FL350 in a pressurized Part 91 airplane. What oxygen action is required?",
    "answer": "The remaining pilot must put on and use the oxygen mask until the other pilot returns. Do not apply the different Part 121 threshold to an ordinary Part 91 operation.",
    "source": "14 CFR 91.211",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.211"
  },
  {
    "id": "P91-079",
    "category": "part-91",
    "question": "May an approved MEL be used while ignoring one of its required maintenance or operating procedures?",
    "answer": "No. Relief depends on satisfying the MEL and authorization conditions. An item listed in the MEL is not unconditional permission to take off with it failed.",
    "source": "14 CFR 91.213",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.213"
  },
  {
    "id": "P91-080",
    "category": "part-91",
    "question": "How should a flight be planned when the required transponder is inoperative?",
    "answer": "Obtain the applicable ATC authorization before entering airspace requiring it, complying with the rule's request conditions. A radio call after entry does not automatically cure noncompliance.",
    "source": "14 CFR 91.215",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.215"
  },
  {
    "id": "P91-081",
    "category": "part-91",
    "question": "Does carrying a portable ADS-B receiver satisfy required ADS-B Out capability?",
    "answer": "No. A receiver provides information to the pilot; it does not establish the compliant installed ADS-B Out transmission required for the airspace.",
    "source": "14 CFR 91.225",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.225"
  },
  {
    "id": "P91-082",
    "category": "part-91",
    "question": "Why must aircraft identification entered into ADS-B match the operation's assigned identification?",
    "answer": "ADS-B transmits identification used to associate the aircraft with its flight. Use the required registration or flight-plan identification and approved entry procedure to avoid mismatch.",
    "source": "14 CFR 91.227",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.227"
  },
  {
    "id": "P91-083",
    "category": "part-91",
    "question": "Does staying below 60 degrees of bank automatically mean a maneuver is not aerobatic?",
    "answer": "No. The rule's definition also considers intentional abrupt changes, abnormal attitude or acceleration, and maneuvers unnecessary for normal flight. Bank angle alone does not define aerobatics.",
    "source": "14 CFR 91.303",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.303"
  },
  {
    "id": "P91-084",
    "category": "part-91",
    "question": "What additional location restriction applies when deliberately flight-testing an aircraft?",
    "answer": "Flight testing must be over open water or sparsely populated areas with light air traffic. Required operating limitations and other airspace or certification restrictions still apply.",
    "source": "14 CFR 91.305",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.305"
  },
  {
    "id": "P91-085",
    "category": "part-91",
    "question": "Are spin-training flights for a certificate always subject to the passenger unusual-attitude parachute rule?",
    "answer": "The rule includes specified training exceptions when conducted by an authorized instructor for required certificate or rating maneuvers. Confirm the exception and airplane authorization before intentional spins.",
    "source": "14 CFR 91.307",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.307"
  },
  {
    "id": "P91-086",
    "category": "part-91",
    "question": "Does an installed tow attachment alone authorize banner towing?",
    "answer": "No. Towing other than the specified glider/unpowered-ultralight operation requires a certificate of waiver and compliance with its terms, plus applicable aircraft and pilot requirements.",
    "source": "14 CFR 91.311",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.311"
  },
  {
    "id": "P91-087",
    "category": "part-91",
    "question": "Can a restricted-category agricultural airplane be used for an ordinary passenger sightseeing business?",
    "answer": "Not merely on the basis of its restricted certificate. Its permitted special purpose, carriage restrictions, and any specific authorizations control.",
    "source": "14 CFR 91.313",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.313"
  },
  {
    "id": "P91-088",
    "category": "part-91",
    "question": "Why must an experimental-aircraft pilot brief passengers about the certificate status?",
    "answer": "The rule requires advising occupants of the aircraft's experimental nature. The briefing supplements, rather than replaces, compliance with its operating limitations.",
    "source": "14 CFR 91.319",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.319"
  },
  {
    "id": "P91-089",
    "category": "part-91",
    "question": "May a pilot use a general light-sport privilege to disregard an S-LSA's own day-only limitation?",
    "answer": "No. Aircraft operating limitations remain binding independently of pilot privileges. Both the pilot and the particular airplane must be eligible for the operation.",
    "source": "14 CFR 91.327",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.327"
  },
  {
    "id": "P91-090",
    "category": "part-91",
    "question": "Do all additional Part 91 Subpart F rules automatically apply to every small piston airplane?",
    "answer": "No. Establish the subpart's applicability, which covers specified large, turbojet multiengine, and fractional-program airplanes and operations. Do not apply a specialized requirement outside its scope without checking.",
    "source": "14 CFR 91.501",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.501"
  },
  {
    "id": "P91-091",
    "category": "part-91",
    "question": "For a Subpart F flight, why must landing performance be checked for planned airports before departure?",
    "answer": "The pilot must become familiar with the applicable runway lengths and takeoff/landing information. Meeting cruise capability does not establish safe destination or alternate runway performance.",
    "source": "14 CFR 91.503",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.503"
  },
  {
    "id": "P91-092",
    "category": "part-91",
    "question": "What must be verified before using a Subpart F airplane's autopilot below ordinary minimum-use heights?",
    "answer": "The applicable authorized exception, AFM approval and limitations, equipment status, and operating conditions. An engaged autopilot is not proof that low-altitude use is permitted.",
    "source": "14 CFR 91.505",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.505"
  },
  {
    "id": "P91-093",
    "category": "part-91",
    "question": "What should be checked before a covered Subpart F over-the-top or night VFR flight?",
    "answer": "The applicable instrument, equipment, weather, and pilot conditions in the rule. Ordinary daytime visual capability does not establish eligibility for those operations.",
    "source": "14 CFR 91.507",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.507"
  },
  {
    "id": "P91-094",
    "category": "part-91",
    "question": "For covered Subpart F overwater operations, is a raft useful if occupants cannot reach it quickly?",
    "answer": "Required equipment must be accessible under the rule. Plan stowage and occupant access rather than treating a raft stored somewhere aboard as sufficient preparation.",
    "source": "14 CFR 91.509",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.509"
  },
  {
    "id": "P91-095",
    "category": "part-91",
    "question": "How must emergency equipment be carried in a covered Subpart F airplane?",
    "answer": "Serviceable, accessible, and clearly marked with operating information as required. A hidden or unserviceable item cannot serve its intended emergency purpose.",
    "source": "14 CFR 91.513",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.513"
  },
  {
    "id": "P91-096",
    "category": "part-91",
    "question": "For covered Subpart F flights, what evacuation issue must a passenger briefing address?",
    "answer": "Emergency exits and equipment, along with required restraint, smoking, oxygen, flotation, and assistance information as applicable. Tailor the briefing to the airplane and occupants.",
    "source": "14 CFR 91.519",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.519"
  },
  {
    "id": "P91-097",
    "category": "part-91",
    "question": "Does an unsecured shoulder harness satisfy the Subpart F flightcrew restraint rule for takeoff and landing?",
    "answer": "No. Use the installed required restraint as prescribed, subject to the rule's limited duty-performance exception. Merely having the harness installed is not enough.",
    "source": "14 CFR 91.521",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.521"
  },
  {
    "id": "P91-098",
    "category": "part-91",
    "question": "Can a covered Subpart F airplane carry a loose heavy object merely because weight and balance are acceptable?",
    "answer": "No. Cargo must be properly carried and restrained without obstructing exits or essential access. Loading legality includes more than total weight and CG.",
    "source": "14 CFR 91.525",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.525"
  },
  {
    "id": "P91-099",
    "category": "part-91",
    "question": "For an airplane covered by Subpart F, can a pilot depart with adhering contamination simply because deicing equipment is installed?",
    "answer": "No. The rule prohibits takeoff with specified frost, ice, or snow adhering, apart from its authorized exceptions. Installed protection does not excuse a contaminated departure.",
    "source": "14 CFR 91.527",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.527"
  },
  {
    "id": "P91-100",
    "category": "part-91",
    "question": "Does receiving an FAA waiver cancel all the other operating rules?",
    "answer": "No. A waiver authorizes only the specified deviations under its stated conditions and limitations. Other applicable rules and aircraft limitations remain in force.",
    "source": "14 CFR 91.903",
    "sourceUrl": "https://www.ecfr.gov/current/title-14/section-91.903"
  },
  {
    "id": "CT-051",
    "category": "ctls",
    "question": "Why must a CTLS passenger keep clear of the unused controls?",
    "answer": "The dual controls are connected; interference at either seat affects control.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.3.1, p.7-12",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-052",
    "category": "ctls",
    "question": "A CTLS no longer tracks straight while taxiing. Should you shorten a steering rod yourself?",
    "answer": "No. Linked rudder cable tension and wheel alignment require qualified adjustment.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.3.2, p.7-12",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-053",
    "category": "ctls",
    "question": "Why should the CTLS anti-servo tab not be forced beyond normal travel during handling?",
    "answer": "Its elastic hinge can be damaged. Use the maintenance instructions.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.3.3, p.7-13",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-054",
    "category": "ctls",
    "question": "Which direction does the cited CTLS pitch-trim wheel move the trim?",
    "answer": "Forward gives nose-down trim; backward gives nose-up trim. Verify installation.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.3.4, p.7-14",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-055",
    "category": "ctls",
    "question": "Does unequal effort in opposite directions on the CTLS aileron trim automatically mean it is jammed?",
    "answer": "No. Spring tension changes can cause unequal effort; investigate abnormal changes.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.3.6, p.7-15",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-056",
    "category": "ctls",
    "question": "What does turning the cited CTLS rudder-trim wheel to the right command?",
    "answer": "Nose-right trim. Confirm the actual control and indication before adjustment.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.3.8, p.7-17",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-057",
    "category": "ctls",
    "question": "Why should a CTLS walkaround include unobstructed winglet fuel vents?",
    "answer": "Blocked ventilation can impair the tank-pressure and fuel-feed arrangement.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.2.3, p.7-6",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-058",
    "category": "ctls",
    "question": "Why must baggage not obstruct the CTLS recovery-system installation or exit path?",
    "answer": "The parachute and rocket need an unobstructed deployment arrangement.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.3.9, p.7-17",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-059",
    "category": "ctls",
    "question": "Can an arbitrary charger safely recover the CTLS's discharged lead-gel battery?",
    "answer": "Use the battery-specific charging procedure; verify the installed battery type.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.2.4, p.7-8",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-060",
    "category": "ctls",
    "question": "Do separate avionics grounds mean the cited CTLS has independent electrical power buses?",
    "answer": "No. The described distribution uses a common power bus.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.2.4, p.7-8",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-061",
    "category": "ctls",
    "question": "Where is braking commanded in the CTLS installation described by this AOI?",
    "answer": "A central hand lever operates the main-wheel hydraulic disc brakes.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.2.5, p.7-11",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-062",
    "category": "ctls",
    "question": "Why inspect the CTLS nose-wheel fairing carefully after wheel servicing?",
    "answer": "Incorrect seating can let it flutter and become damaged.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.2.5, p.7-11",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-063",
    "category": "ctls",
    "question": "What recovery-system precaution is required before CTLS servicing or repair?",
    "answer": "Secure its activation handle with the safety pin against unintended activation.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8, p.8-1",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-064",
    "category": "ctls",
    "question": "Where should CTLS parachute repack and rocket replacement dates be checked?",
    "answer": "The installed recovery-system handbook and records, not a generic interval.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.3, p.8-2",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-065",
    "category": "ctls",
    "question": "Why must a CTLS not be raised on a small hard jack pad anywhere convenient?",
    "answer": "The composite sandwich needs approved support points and distributed loads.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.1, p.8-1",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-066",
    "category": "ctls",
    "question": "May a pressure washer be used to clean the CTLS airframe?",
    "answer": "No. The cited AOI prohibits high-pressure washing.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.4, p.8-3",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-067",
    "category": "ctls",
    "question": "Why are alkaline household cleaners unsafe choices for the cited CTLS composite wings?",
    "answer": "They can damage the foam core if they penetrate it.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.4.1, p.8-3",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-068",
    "category": "ctls",
    "question": "How should the CTLS acrylic windshield be cleaned without harming visibility?",
    "answer": "Use clean, nonabrasive materials and acrylic-compatible products; avoid circular polishing.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.4.2, p.8-3",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-069",
    "category": "ctls",
    "question": "Why remove solvent-soaked cloths from beneath the CTLS windshield?",
    "answer": "Their vapors can cause acrylic stress cracking.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.4.2, p.8-3",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-070",
    "category": "ctls",
    "question": "A CTLS has visible structural composite damage. Is a cosmetic patch sufficient?",
    "answer": "No. Obtain qualified assessment and the applicable approved repair instructions.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.6, p.8-6",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-071",
    "category": "ctls",
    "question": "Does a factory-fitted tow hook authorize glider towing under this archived CTLS AOI?",
    "answer": "No. This revision prohibits it; a later applicable release would be needed.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 9, p.9-1",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-072",
    "category": "ctls",
    "question": "May different antifreeze products be mixed in the CTLS just because both suit aluminum engines?",
    "answer": "No. Verify compatibility and current Rotax/aircraft instructions before servicing.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.6.1, p.8-6",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-073",
    "category": "ctls",
    "question": "Why is adjusting a CTLS mixer bellcrank more than an isolated aileron adjustment?",
    "answer": "It can alter the flap-aileron mixing function and aircraft handling.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.7, p.8-7",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-074",
    "category": "ctls",
    "question": "Should the CTLS plastic flap and aileron bearings be greased routinely?",
    "answer": "The cited AOI says those bearings are maintenance-free and not to grease them.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 8.7, p.8-7",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "CT-075",
    "category": "ctls",
    "question": "Does an AOI illustration showing an instrument prove that every CTLS has that instrument installed?",
    "answer": "No. Panel layouts vary. Identify actual equipment and its applicable supplements.",
    "source": "Flight Design CTLS AOI AF04300005 Rev.8 (archived), AOI 7.4.1, p.7-20",
    "sourceUrl": "https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf"
  },
  {
    "id": "RM-021",
    "category": "adm",
    "question": "How does a hazard differ from a risk?",
    "answer": "A hazard is a condition with harmful potential; risk considers the likelihood and severity of that harm in the actual operation.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-022",
    "category": "adm",
    "question": "Why evaluate risk severity separately from probability?",
    "answer": "An unlikely event can still demand strong controls when its consequences are catastrophic; frequency alone can hide an unacceptable exposure.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-023",
    "category": "adm",
    "question": "What makes a risk control stronger than simply promising to be careful?",
    "answer": "It changes the operation in a concrete way, such as reducing exposure, adding capability, or establishing an enforceable decision point.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-024",
    "category": "adm",
    "question": "How can a pilot test whether a proposed mitigation is practical?",
    "answer": "Identify who performs it, when it is available, whether it addresses the actual threat, and how its effectiveness will be checked.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-025",
    "category": "adm",
    "question": "Why should a flight-risk score not be treated as automatic takeoff permission?",
    "answer": "A numerical total can conceal a single intolerable hazard or interacting risks; apply judgment and any required escalation.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-026",
    "category": "adm",
    "question": "What is the benefit of involving another qualified person in a marginal decision?",
    "answer": "A fresh review can challenge assumptions and identify options the invested pilot has missed, provided responsibility remains clear.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-027",
    "category": "adm",
    "question": "A pilot is reluctant to cancel after paying for fuel and lodging. What bias is present?",
    "answer": "Sunk-cost pressure. Money already spent does not improve the flight's future safety; judge the remaining options on present conditions.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-028",
    "category": "adm",
    "question": "How can hindsight bias distort a flight debrief?",
    "answer": "Knowing the outcome can make an uncertain decision seem obvious; assess what information and cues were actually available at the time.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-029",
    "category": "adm",
    "question": "Why can a successful risky flight be a poor lesson for the next one?",
    "answer": "A safe outcome may reflect luck rather than a sound decision; review margins and procedures independently of whether harm occurred.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-030",
    "category": "adm",
    "question": "What is a useful defense against expectation bias during a clearance change?",
    "answer": "Read or listen for the actual instruction, compare it independently, and resolve mismatches before acting on the expected version.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-031",
    "category": "adm",
    "question": "How can goal fixation narrow a pilot's options?",
    "answer": "Attention becomes centered on completing one objective while safer alternatives disappear from consideration; deliberately restate the safety goal and available exits.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-032",
    "category": "adm",
    "question": "Why should a pilot define the decision deadline as well as the diversion trigger?",
    "answer": "A correct decision made after fuel, terrain, or weather removes the escape option is too late.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-033",
    "category": "adm",
    "question": "What does threat-and-error management add to a preflight briefing?",
    "answer": "Identify external threats, likely crew errors, and barriers that prevent them from creating an unsafe aircraft state.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-034",
    "category": "adm",
    "question": "How is recovering an unsafe aircraft state different from explaining its cause?",
    "answer": "First restore control and safe flightpath; analyze the chain of events when doing so no longer competes with immediate safety.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-035",
    "category": "adm",
    "question": "Why should crews distinguish a checklist challenge from a personal criticism?",
    "answer": "Safety communication should make deviations discussable and actionable; defensive reactions can suppress necessary correction.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-036",
    "category": "adm",
    "question": "What makes a safety challenge more effective than hinting?",
    "answer": "State the observed problem, its consequence, and the needed action clearly, using the operator's standard escalation if unresolved.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-037",
    "category": "adm",
    "question": "How should a pilot respond when a less experienced passenger notices something unusual?",
    "answer": "Assess the observation rather than dismiss the source; a useful safety cue can come from anyone aboard.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-038",
    "category": "adm",
    "question": "Why is a shared mental model valuable before a complicated arrival?",
    "answer": "It aligns expectations for route, configuration, duties, threats, and contingencies so discrepancies are recognized sooner.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-039",
    "category": "adm",
    "question": "An ATC shortcut saves time but increases setup workload. What should the pilot evaluate?",
    "answer": "Whether the approach can still be prepared and stabilized safely; request delay or retain the original plan if necessary.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-040",
    "category": "adm",
    "question": "Why can accepting every ATC offer increase risk?",
    "answer": "A clearance can be legal yet unsuitable for the aircraft, workload, or preparation state; the pilot must assess capability before acceptance.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-041",
    "category": "adm",
    "question": "What is the value of a deliberate pause before an irreversible cockpit action?",
    "answer": "It provides time to verify the problem, target control, and expected effect, reducing wrong-engine or wrong-system actions.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-042",
    "category": "adm",
    "question": "Why should troubleshooting have a time or resource limit?",
    "answer": "It can consume fuel, altitude, attention, or diversion opportunities without solving the problem; define when to stop diagnosing and land.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-043",
    "category": "adm",
    "question": "How should uncertainty affect a go/no-go decision?",
    "answer": "Uncertainty reduces confidence in the available margin; obtain better information or choose an option robust to unfavorable assumptions.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-044",
    "category": "adm",
    "question": "Why distinguish information that is unavailable from information assumed favorable?",
    "answer": "Missing evidence is not proof of safe conditions; explicit uncertainty prevents optimism from being mistaken for a forecast.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-045",
    "category": "adm",
    "question": "How can a pilot compare several diversion choices systematically?",
    "answer": "Consider reachability, runway, weather, terrain, support, workload, and time-critical threats rather than selecting solely by distance.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-046",
    "category": "adm",
    "question": "What makes an early precautionary landing a risk-control tool?",
    "answer": "It ends exposure while options remain, before deterioration forces a landing under worse circumstances.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-047",
    "category": "adm",
    "question": "Why should a pilot brief passengers about possible delays before the trip?",
    "answer": "It sets realistic expectations and reduces pressure to improvise unsafe compromises when conditions change.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-048",
    "category": "adm",
    "question": "How can fatigue alter a pilot's confidence without improving actual ability?",
    "answer": "Reduced judgment and self-monitoring can make the pilot underestimate impairment; use objective rest and performance cues.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-049",
    "category": "adm",
    "question": "Why should a pilot avoid learning unfamiliar avionics during a demanding flight phase?",
    "answer": "Programming competes with flightpath monitoring; practice beforehand and simplify or delay nonessential changes when workload is high.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-050",
    "category": "adm",
    "question": "What should a pilot do when two indications suggest different failures?",
    "answer": "Maintain control, compare independent evidence, and use the appropriate diagnostic procedure rather than forcing all evidence into the first theory.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-051",
    "category": "adm",
    "question": "How can time pressure degrade a preflight inspection?",
    "answer": "It encourages omission and superficial confirmation; protect required inspection time and postpone departure when necessary.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-052",
    "category": "adm",
    "question": "Why is an operational change a reason to repeat the risk assessment?",
    "answer": "The original controls may no longer fit a different aircraft, runway, crew, weather window, or destination.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-053",
    "category": "adm",
    "question": "What makes a debrief action item useful?",
    "answer": "It names a specific behavior or process to change, an owner, and a way to verify improvement on later flights.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-054",
    "category": "adm",
    "question": "How can pilots learn from near misses without waiting for an accident?",
    "answer": "Identify the broken barriers and successful recoveries, then change training or procedures before the same chain repeats.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-055",
    "category": "adm",
    "question": "Why should a pilot be cautious about transferring confidence between aircraft types?",
    "answer": "Experience in one type does not automatically cover different systems, performance, control behavior, or operating limitations.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-056",
    "category": "adm",
    "question": "How can frequent interruptions threaten checklist integrity?",
    "answer": "They obscure the last confirmed step; use the operator's interruption/restart procedure instead of guessing where to resume.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-057",
    "category": "adm",
    "question": "What should the PIC do if crew members disagree about the current clearance?",
    "answer": "Resolve the discrepancy through the recorded clearance and ATC before executing an uncertain maneuver.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-058",
    "category": "adm",
    "question": "Why can an overly detailed briefing become ineffective?",
    "answer": "It can bury the actual threats and actions in routine information; prioritize what matters to this specific flight while covering required items.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-059",
    "category": "adm",
    "question": "How does assertiveness differ from aggression in cockpit communication?",
    "answer": "Assertiveness clearly states safety concerns and needed action while keeping the exchange focused on the task and mutual understanding.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "RM-060",
    "category": "adm",
    "question": "What is the value of identifying a safe default action before a complex situation develops?",
    "answer": "It gives the pilot an immediately usable stabilizing option while gathering information, reducing pressure for an improvised commitment.",
    "source": "FAA Risk Management Handbook (FAA-H-8083-2A), decision-making and risk controls",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf"
  },
  {
    "id": "MTN-021",
    "category": "mountain",
    "question": "Why can a valley airport report be misleading about cloud clearance over a nearby pass?",
    "answer": "The report is referenced to the airport and may not describe the higher terrain; compare cloud-base altitude and actual ridge conditions.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-022",
    "category": "mountain",
    "question": "What does a strong cross-ridge wind imply for the lee side?",
    "answer": "Potential downdrafts, turbulence, and rotor; avoid assuming the sheltered-looking side offers smoother or safer passage.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-023",
    "category": "mountain",
    "question": "Why do smooth lenticular clouds not prove smooth air beneath them?",
    "answer": "They can mark standing-wave flow with severe rotor and turbulence lower down; interpret the whole wind and terrain pattern.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-024",
    "category": "mountain",
    "question": "Can mountain-wave turbulence exist when no lenticular cloud is visible?",
    "answer": "Yes. Insufficient moisture can hide the cloud signature even while strong vertical motion exists.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-025",
    "category": "mountain",
    "question": "Why should a mountain pilot examine winds at ridge height rather than only surface wind?",
    "answer": "A sheltered valley can conceal much stronger flow across the surrounding terrain.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-026",
    "category": "mountain",
    "question": "How can a narrow mountain pass change local wind speed?",
    "answer": "Terrain can funnel and accelerate flow, producing stronger winds and turbulence than nearby broad-area forecasts suggest.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-027",
    "category": "mountain",
    "question": "What should a pilot do when a downdraft exceeds available climb performance?",
    "answer": "Preserve safe airspeed and control, move toward a planned escape or lower terrain, and avoid trying to hold altitude through an impending stall.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-028",
    "category": "mountain",
    "question": "Why can raising the nose toward terrain worsen a mountain escape?",
    "answer": "It can sacrifice airspeed and control without overcoming descending air; escape depends on performance and route options, not pitch alone.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-029",
    "category": "mountain",
    "question": "Why approach a ridge with an oblique escape angle when conditions and local procedures permit?",
    "answer": "It can require less turning to retreat toward lower terrain than a perpendicular approach, preserving an earlier escape option.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-030",
    "category": "mountain",
    "question": "How can drainage patterns help a mountain pilot maintain terrain awareness?",
    "answer": "They help identify which way terrain descends, but must be cross-checked with charts and actual valley geometry before relying on an escape route.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-031",
    "category": "mountain",
    "question": "Why is flying upstream into an unfamiliar valley a special commitment risk?",
    "answer": "Terrain commonly rises and the valley may narrow, reducing climb and turning options ahead.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-032",
    "category": "mountain",
    "question": "How should a pilot verify the correct valley after several similar branches appear?",
    "answer": "Use charted landmarks, bearings, position, and terrain relationships before committing; visual similarity alone is insufficient.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-033",
    "category": "mountain",
    "question": "Why can a moving-map terrain display create false confidence in a canyon?",
    "answer": "Database resolution, position accuracy, display scale, and vertical margins may be inadequate for close terrain maneuvering.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-034",
    "category": "mountain",
    "question": "Why is an early-morning mountain departure often preferable to an afternoon one?",
    "answer": "It may offer cooler air, weaker convection, and better performance, but current wind, fog, and weather still control suitability.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-035",
    "category": "mountain",
    "question": "What mountain hazard can virga indicate even when rain never reaches the ground?",
    "answer": "Evaporative cooling can produce strong downdrafts or dry microbursts; avoid the affected area rather than judging by surface rainfall.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-036",
    "category": "mountain",
    "question": "How can afternoon thunderstorms change a mountain return route?",
    "answer": "Cells can block passes and retreat paths quickly; set an earlier return window and retain routes that do not require threading gaps.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-037",
    "category": "mountain",
    "question": "Why must an uphill mountain takeoff account for more than book ground roll?",
    "answer": "Slope, roughness, wind, obstacles, and reduced climb may consume margin beyond a standard-condition runway calculation.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-038",
    "category": "mountain",
    "question": "What should a pilot do if actual mountain takeoff acceleration is poorer than planned?",
    "answer": "Reject while the prebriefed stopping option remains; do not wait for the departure end to confirm inadequate performance.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-039",
    "category": "mountain",
    "question": "Why may a short mountain field require an aircraft-specific departure survey?",
    "answer": "The runway, rising terrain, turns, and engine-out options can impose constraints not captured by runway length alone.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-040",
    "category": "mountain",
    "question": "How should a pilot evaluate a runway surrounded by trees above the airport?",
    "answer": "Use obstacle-clearance and climb performance for the real path; being airborne before the trees does not establish clearance.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-041",
    "category": "mountain",
    "question": "Why can a downhill landing with a tailwind be especially difficult at altitude?",
    "answer": "Higher groundspeed, reduced deceleration, slope, and limited runway combine; use approved data and conservative limits or choose another option.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-042",
    "category": "mountain",
    "question": "Why should a mountain arrival include a landing commitment point?",
    "answer": "Past a terrain- or runway-dependent point a normal go-around may no longer be safe; understand that limit before beginning the approach.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-043",
    "category": "mountain",
    "question": "How can snow-covered terrain cause loss of visual depth perception?",
    "answer": "Uniform surfaces and flat light can hide slope, obstacles, and height; avoid continuing when reliable terrain reference is lost.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-044",
    "category": "mountain",
    "question": "Why is unlighted mountain terrain dangerous even on a clear moonlit night?",
    "answer": "Ridges and obstacles can remain indistinct or blend with the sky; visibility alone does not provide reliable clearance cues.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-045",
    "category": "mountain",
    "question": "What oxygen-planning issue arises when a pass crossing extends longer than expected?",
    "answer": "Actual time and cabin altitude may exceed the original plan; carry suitable oxygen and margin rather than relying on a short intended exposure.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-046",
    "category": "mountain",
    "question": "Why should a mountain pilot account for passengers' physiological condition?",
    "answer": "Altitude, illness, fatigue, and cold can impair occupants and create workload or emergency needs far from assistance.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-047",
    "category": "mountain",
    "question": "How can clothing become part of mountain flight preparation even with a heated cabin?",
    "answer": "A forced landing may expose occupants to terrain and weather immediately; wear or keep accessible protection suitable for survival outside.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-048",
    "category": "mountain",
    "question": "Why should a mountain emergency landing plan consider rescue access?",
    "answer": "Reachability, communication, shelter, and likely rescue time affect survivability after the aircraft stops.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-049",
    "category": "mountain",
    "question": "Why can a seemingly inviting high meadow be an uncertain landing surface?",
    "answer": "Slope, rocks, vegetation, wet ground, and hidden obstructions can be difficult to judge from the air; assess carefully while preserving control.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  },
  {
    "id": "MTN-050",
    "category": "mountain",
    "question": "How should an unexpected loss of climb capability change a mountain route decision?",
    "answer": "Reevaluate terrain clearance and reachable lower routes immediately, and use the planned retreat before the remaining margin disappears.",
    "source": "FAA Tips on Mountain Flying (FAA-P-8740-60), terrain, weather, performance and preparation",
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/tips_on_mountain_flying.pdf"
  }
]);
