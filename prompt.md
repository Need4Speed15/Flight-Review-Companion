# Product Requirements Document / Execution Prompt

## Project

Build a polished, responsive, static website in the current `Flight Review Website` folder that helps a U.S. general aviation pilot prepare for a flight review through interactive flash cards. The pilot currently flies a Flight Design CTLS LSA and also wants optional instrument/IFR review material.

Treat this document as the complete execution brief. Research, design, implement, test, and refine the site end to end. Ask a question only if a missing answer would materially change the product; otherwise make a sound assumption, document it briefly, and continue. Do not stop at a plan or mockup.

## Product goal

Create a credible study companion that turns current flight-review requirements, practical pilot knowledge, instrument knowledge, and CTLS-specific operating information into concise, useful question-and-answer cards. It must help a pilot select topics, work through a clearly numbered study set, bookmark weak areas, and return to bookmarked cards later.

This is a study aid, not an FAA-approved course, a substitute for current regulations or aircraft documents, or a guarantee that a flight review will be completed satisfactorily.

## Primary user

- A U.S. certificated pilot preparing for a flight review under 14 CFR § 61.56.
- Currently flies a Flight Design CTLS LSA.
- May want to refresh IFR/instrument knowledge even though an instrument proficiency check is a distinct event.
- Uses desktop and mobile devices and should not need an account or server.

## Source hierarchy and research requirements

Research before writing the final card set. Preserve a lightweight source record for every card so factual content can be audited.

Use this priority order when sources disagree:

1. Current eCFR regulations, especially 14 CFR §§ 61.56 and 61.57 and relevant parts of Parts 61 and 91.
2. Current FAA publications and current Airman Certification Standards.
3. The exact aircraft-specific Flight Design CTLS handbook in the user's ForeFlight account.
4. Older FAA publications and third-party study guides as supplemental explanations only.

### Required online/current sources

- Current 14 CFR § 61.56, Flight review: <https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.56>
- Current 14 CFR § 61.57, Recent flight experience: <https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-A/section-61.57>
- FAA AC 61-98E, Currency Requirements and Guidance for the Flight Review and Instrument Proficiency Check: <https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1043281>
- Current FAA Airman Certification Standards page, including Private Pilot – Airplane and Instrument Rating – Airplane ACS: <https://www.faa.gov/training_testing/testing/acs>
- Current FAA Aeronautical Information Manual and relevant FAA handbooks when needed.
- FAA WINGS Pilot Proficiency Program information where relevant.

Research note: AC 61-98E is active, was issued October 30, 2024, and cancels AC 61-98D. The saved AC 61-98D may still inform background and comparison, but do not present it as the current controlling guidance. Verify all change-sensitive claims at implementation time and include a visible “content reviewed” date in the finished site.

### Required ForeFlight sources

The user has ForeFlight Documents open in Chrome and has authorized read-only review of these materials:

- `ACs (CFI)` → `AC 61-98D (Flight Review Req.)`
  - Use for background, but reconcile it with and defer to current AC 61-98E.
- `Aviation Resources` → `IFR Review`
  - A 26-page PilotsCafe Airplane IFR Quick-Review Study Guide was observed. Use it as a supplemental study aid, verify regulatory claims against current primary sources, and paraphrase rather than reproducing substantial copyrighted text.
- `POH's` → `CTLS POH`
  - A 107-page Flight Design CTLS LSA Aircraft Operating Instructions (AOI) document was observed. This is the required source for CTLS-specific limitations, systems, procedures, speeds, performance considerations, and emergency information.
- `Aviation Books`, selectively:
  - Pilot's Handbook of Aeronautical Knowledge
  - Airplane Flying Handbook
  - Instrument Flying Handbook
  - Instrument Procedures Handbook
  - Risk Management Handbook
  - Runway Incursions / PHAK appendix
  - Read only the chapters needed to fill or verify the card topics below; it is not necessary to read every document cover to cover.

Do not modify, rename, move, share, or delete anything in ForeFlight. Do not expose signed document URLs, account details, or other private account data in the finished site.

### Aircraft-specific accuracy rule

Do not use generic internet CTLS numbers when the exact handbook is available. Extract facts from the user's CTLS POH/AOI and record the handbook section or page in card metadata. Distinguish clearly among limitations, normal procedures, emergency procedures, recommendations, and calculated/example performance. If a value may vary by serial number, installed equipment, supplement, loading, or operating category, say so and instruct the pilot to confirm against the specific aircraft's current documents and placards. Never invent a limitation or checklist item.

### Copyright and attribution

- Write original, concise questions and answers.
- Paraphrase source material; do not reproduce long passages, tables, diagrams, or proprietary checklists.
- Short labels, regulation citations, numerical limits, and necessary technical facts may be used with attribution.
- Include a Sources/About view listing the primary references and a source reference on each card, such as `14 CFR 61.56(a)`, `AC 61-98E, ch. 2`, or `CTLS AOI § 3 / p. X`.

## Content scope

The initial release should be substantial enough to be genuinely useful, with approximately 120–180 well-edited cards. Prefer accurate, high-value cards over padding. Avoid near-duplicates and trivia that would not improve safe decision-making or flight-review readiness.

Organize cards into selectable categories. The final categories may be refined during research, but must cover:

1. **Flight Review Requirements** — purpose, eligibility, minimum ground/flight components, endorsement, 24-calendar-month timing, satisfactory completion, alternatives/exceptions, WINGS, combining a review with recent-experience work, and the distinction between currency and proficiency.
2. **Pilot Qualifications and Documents** — certificates, ratings, medical or BasicMed considerations as applicable, required personal/aircraft documents, endorsements, logging, passenger-carrying currency, and responsibilities.
3. **Part 91 Operating Rules** — required preflight action, fuel requirements, right-of-way, speed/altitude rules, VFR weather minima, equipment, inoperative equipment, inspections, and other high-value rules commonly reviewed.
4. **Airworthiness and Aircraft Documents** — required documents, inspections, ADs, preventive maintenance boundaries, equipment/KOEL/MEL concepts, placards, and pilot-in-command responsibility.
5. **Airspace, Charts, and Airport Operations** — classes, entry/equipment/weather requirements, special-use airspace, TFRs/NOTAMs, runway markings/signs/lights, pattern and taxi procedures, collision and runway-incursion avoidance.
6. **Weather** — sources, reports/forecasts, hazards, fronts, thunderstorms, icing, turbulence, density altitude, wind, and go/no-go interpretation.
7. **Performance, Weight and Balance** — loading, CG effects, takeoff/landing performance, density altitude, runway factors, and interpreting aircraft data.
8. **Aerodynamics and Maneuvers** — stalls/spins, load factor, maneuvering speed concepts, slow flight, steep turns, takeoffs/landings, crosswind technique, and loss-of-control prevention.
9. **Aeronautical Decision-Making and Risk** — PAVE, IMSAFE, 3P/5P or equivalent practical frameworks, personal minimums, automation management, single-pilot resource management, hazardous attitudes, scenario-based decisions, and managing unexpected events.
10. **Emergencies and Abnormal Situations** — engine failure priorities, fire, electrical issues, inadvertent IMC, lost procedures, communications failure, diversion, emergency authority, and survival considerations. General cards must not masquerade as aircraft-specific checklist steps.
11. **Flight Design CTLS** — exact handbook-derived cards covering limitations/V-speeds, Rotax engine and fuel/oil/cooling/electrical systems as installed, flight controls/flaps/trim, landing gear/brakes, avionics only where confirmed, weight and balance, performance, normal operations, emergency memory priorities, parachute system if installed/documented, and common CTLS-specific hazards. Cite the precise CTLS source for every card.
12. **Instrument / IFR Refresher** — instrument currency versus IPC, required equipment/documents, IFR flight planning and alternates, weather, clearances, departures/arrivals, holding, approaches, lost communications, systems/instruments, aeromedical factors, and risk management. Label this category as supplemental and do not imply that studying it or completing a flight review satisfies an IPC.

Include a balanced mix of direct recall, “what would you do?” scenarios, and short calculation/interpretation questions. Answers should explain the reason, not merely state a fact. Keep most answers scannable; use small lists where needed.

## Core user experience

### Home / topic selection

- Present a distinctive title, short purpose statement, current content-review date, and study disclaimer.
- Show category cards with a brief description and exact card count.
- Let the user select one or multiple categories before starting.
- Provide `Select all`, `Clear`, `Study selected`, and `Study bookmarks` actions.
- Show the exact resulting set size before starting, for example `Study 42 cards`.
- Disable start actions gracefully when no applicable cards are selected.

### Study session

- Display one large flash card at a time with a clear question side and answer side.
- Flip by click/tap and keyboard; use a restrained, smooth animation and respect reduced-motion settings.
- Provide Previous, Flip/Reveal, Next, and Bookmark controls.
- Display both session position and stable card identity, for example `12 / 42` and `Card FR-007`.
- Show the active category and source reference without cluttering the primary answer.
- Preserve bookmark state when navigating and visually/semantically indicate whether the current card is bookmarked.
- Define and implement a deterministic initial order. Add shuffle only if it is polished and does not break numbering or navigation.
- Provide an obvious way to return to topics without losing bookmarks.
- At the end, show a simple completion state with options to restart the same set, study bookmarks, or choose topics.

### Bookmarks

- Bookmark/unbookmark from either side of a card.
- Persist bookmarks in `localStorage` so they survive refreshes and browser restarts.
- Provide a bookmark-only study set and show its count.
- Handle zero bookmarks with a helpful empty state.
- Use stable card IDs so future content reordering does not corrupt saved bookmarks.

## Visual design

Create a clean, modern, aviation-inspired dark interface that does not look like a generic template.

- Use a deep charcoal/navy base, high-contrast off-white text, and one restrained accent family such as cyan/sky blue with an optional warm status accent.
- Add subtle depth through borders, gradients, grid/radar/topographic motifs, or instrument-inspired details, but avoid a novelty cockpit imitation.
- Establish a strong typographic hierarchy and generous spacing.
- Make the flash card the visual focal point.
- Use original CSS shapes/icons or a reputable icon package already available locally; do not depend on fragile hotlinked images.
- Avoid excessive glassmorphism, neon glow, stock hero photography, giant empty hero sections, and repetitive rounded cards.
- Create responsive layouts for narrow phones through large desktop screens.

## Accessibility and interaction requirements

- Use semantic HTML and logical heading structure.
- All functionality must work with keyboard alone.
- Provide visible focus indicators.
- Recommended shortcuts: Space/Enter flips, Left/Right navigates, `B` toggles bookmark; do not trigger shortcuts while a form control has focus.
- Use real buttons and checkboxes with accessible names and state.
- Announce card changes and bookmark changes appropriately to assistive technology without being noisy.
- Maintain WCAG AA color contrast.
- Respect `prefers-reduced-motion`.
- Ensure touch targets are comfortably sized and the card does not require hover.

## Technical requirements

- Build a static client-side site that runs locally with no account, database, API key, analytics, or network requirement after load.
- At minimum create `index.html`, `styles.css`, and `script.js`. A separate data file such as `cards.js` or `data/cards.js` is strongly preferred for maintainability.
- Keep content data separate from rendering and interaction logic.
- Use stable, human-readable card IDs and a clear schema containing at least: ID, category, question, answer, source label, source URL or local-source description, and optional notes/tags.
- Use progressive enhancement and avoid a heavy framework unless the existing project already requires one. Since the folder was empty when this PRD was created, vanilla HTML/CSS/JavaScript is the default.
- Do not place sensitive ForeFlight URLs, tokens, account information, or proprietary source files in the codebase.
- Do not fabricate citations. Every displayed source link must resolve to an authoritative public page; private ForeFlight documents should use a non-link source label and handbook section/page.
- Handle unavailable or malformed localStorage safely.
- Do not use `innerHTML` with untrusted or externally loaded content.
- Include a concise `README.md` explaining how to run the site, structure the card data, add cards/categories, and perform QA.

## Required factual guardrails

- Clearly state that § 61.56 establishes minimum content of at least one hour of flight training and one hour of ground training, but the instructor determines which maneuvers and procedures are necessary and may require more time before endorsing satisfactory completion.
- Do not call a flight review a pass/fail practical test.
- Distinguish legal currency from proficiency.
- Keep flight-review requirements separate from passenger-carrying currency and IFR currency/IPC requirements.
- Explain that current rules and the aircraft's current approved documents, supplements, placards, and instructor guidance prevail.
- Do not provide operationally dangerous simplifications. Emergency cards should reinforce aviate–navigate–communicate and immediate reference to the appropriate aircraft checklist/POH when time permits.
- Display a concise footer disclaimer: educational study aid only; verify against current FAA regulations/publications and the specific aircraft's current operating documents; consult a qualified flight instructor.

## QA and acceptance criteria

Do not declare completion until all items below are checked and any defects found are fixed.

### Content QA

- Verify every regulatory number, time period, exception, and currency rule against current primary sources.
- Verify every CTLS-specific fact against the exact ForeFlight CTLS POH/AOI and attach a section/page citation.
- Spot-check all public links.
- Check for contradictions, duplicated cards, ambiguous wording, and answers that reveal themselves in the question.
- Ensure instrument content is clearly supplemental and not conflated with flight-review completion.
- Ensure sources and the visible review date are present.

### Functional QA

- Category selection correctly produces the union of selected categories with no duplicates.
- All/select-none states and displayed counts are correct.
- Every card flips, navigates in both directions, and reports correct `position / total` numbering.
- Boundary behavior at first/last card and the completion state are intentional.
- Bookmark toggle works before and after flipping, persists after reload, and works in bookmark-only mode.
- Removing a bookmark while studying bookmarks does not crash or create invalid navigation.
- Empty selections, empty bookmarks, one-card sets, stale bookmark IDs, and corrupt localStorage are handled gracefully.
- Browser back/refresh behavior is sensible for a static site.
- No console errors or broken links/assets.

### Visual and accessibility QA

- Test at representative widths around 360 px, 768 px, 1024 px, and 1440 px.
- Inspect front and back of long and short cards for overflow.
- Test keyboard-only operation and focus order.
- Verify accessible control names/states, heading structure, contrast, and reduced motion.
- Ensure touch controls remain usable without hover.
- Confirm there is no horizontal scrolling at supported mobile widths.

### Final verification

- Run the site locally through an appropriate static server.
- Exercise at least one multi-category session from start through completion.
- Reload and verify bookmark persistence.
- Review the finished interface visually on desktop and mobile sizes and refine any awkward spacing, clipping, or generic-looking elements.
- Summarize files created, research sources used, card/category counts, QA performed, and any assumptions or remaining content caveats.

## Deliverables

Place all deliverables directly inside the current `Flight Review Website` folder:

- Working website files (`index.html`, `styles.css`, `script.js`, and structured card data).
- `README.md` with run and maintenance instructions.
- Any small local assets genuinely needed by the design.
- No copied ForeFlight PDFs or private account artifacts.

The finished result should open as a complete, polished product—not a wireframe—and should be ready for the user to review locally.
