# Website readiness review — October 29, 2026

## Changes

- Added three editable starter mixes: 20-card flight-review warm-up, 25-card IFR refresher, and 25-card airline operations mix. These sample the library rather than claiming to be complete syllabi; general presets omit aircraft-specific CTLS content.
- Added whole-library search without changing selected study topics, source-text search, and bookmark/flag filters. Cached searchable text and delayed filtering during typing; retained all matching questions in a single view.
- Replaced private editing/chat wording with local review flags and copyable reports including IDs, questions, answers and sources. Flags do not notify anyone; no contact address was invented or exposed.
- Added a confirmation before replacing an unfinished session. The current session can be exported from that dialog.
- Backup import now validates and previews before changes. Bookmarks/flags merge by default; replacing the session/preferences is explicit. Import returns to Topics to avoid stale study content.
- Added clear guidance about self-rating, library scope, source currency, independent status, browser-local storage and host-managed sign-in.
- Marked CTLS as aircraft-specific with an in-session notice about the archived 2009 Rev. 8 AOI. Replaced the ForeFlight-only source-list description with the public manufacturer archive link.
- Improved focus after revealing answers, small-text contrast, keyboard focus outlines, mobile target sizes, tablet answer width, and the final card's Finish label. Disabled mobile study buttons no longer cover the starter options on a first visit.
- Added a JavaScript-disabled message and updated the site description.

## Content corrections

Counts and IDs remain 2,235 cards / 24 categories. Six existing cards were revised:

| Card | Correction |
|---|---|
| IFR-006 | Cite §91.169(b) for the destination-alternate exception. |
| IFR-102 | Distinguish STAR chart and RNAV database requirements; request an amended clearance when unable. |
| IFR-121 | Replace overlapping contact-approach initiation question with destination eligibility. |
| IFR-128 | Use exact category boundaries, including fractional speeds. |
| CT-026 | Remove the archive's questionable installation-dependent RPM assertion; retain the restart decision lesson. |
| CT-033 | Include ignition/master-off precautions before manual propeller movement. |

Primary references: [FAA AIM arrival procedures](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html), [14 CFR 91.169](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/section-91.169), and [manufacturer CTLS AOI archive](https://flightdesignusa.com/wp-content/uploads/2022/11/AF04300005_08.pdf).

## Verification

- Database rebuild checks all category counts, IDs, required source fields, HTTPS source URLs, and exact normalized question uniqueness.
- Isolated regression tests execute the app's session and backup functions: replacement guard, malformed/unsupported/oversized files, preview without mutation, merge-only imports, explicit restore, stale IDs, invalid indices/modes and conflicting recall ratings.
- In-app browser QA against a separate local preview: starter totals; custom quantity bounds; mixed-category setup; study reveal, ratings, bookmarks and flags; reload/resume; canceling session replacement; completion and unrevealed review; whole-library search; all 2,235 Inspect rows; bookmark and flag filters; report copy; corrected answer/source display; malformed backup rejection; CTLS notice; focus after reveal.
- Visual checks at 1280, 768 and 390 pixels; no horizontal overflow in checked views and no console errors observed. Valid backup merge/restore were regression-tested in isolation; file-chooser browser QA covered malformed input.
- Root and deployment assets synchronized; no new remote scripts, tracking, or personal contact information added.

## Limits and release scope

This is a website review and targeted content fact-check, not independent source verification of every one of the 2,235 answers. Existing content-review notes remain relevant. CTLS serial-number applicability/current supplements have not been verified. No claim of FAA or manufacturer approval is made.

The improved version is intended for the existing owner-private Site. Public access is a separate sharing decision. Before a broad launch, an independent instructor's content review and a chosen way to receive correction reports would strengthen ongoing maintenance.
