# Flight Review Companion

A flashcard library for U.S. flight-review preparation, IFR refreshers, and professional operations, with **2,245 cards in 25 categories**. It combines 2,235 reference cards with ten illustrated Practical Scenarios for interpreting weather, airport signs, loading, fuel, performance, and approach constraints. Part 121 Ops has 250 cards and Instrument / IFR Refresher has 200.

The same study interface supports opening `index.html` as a local file and running as a hosted Site with optional account sync and correction reports. This README describes the implemented source; publishing a new hosted release and choosing its audience are separate steps.

## Study features

The homepage starts with topic selection and a compact study bar. Starter mixes and the review queue expand on demand; Session options holds order, size, and focus settings. The header's Study tools menu contains whole-library card search, bookmarks, flags, sync, backups, sources, and the owner's report inbox. A saved session appears as a compact Resume banner, and untouched topics omit empty progress counters.

- Browse topic groups, search categories, and select one or more topics. Inspect lists matching questions with search, subtopic, bookmark, and flag filters.
- Choose shuffled or ordered study, a session size, and a subtopic focus. Custom Study draws a requested number of random cards from each category; named mixes save those quantities for reuse.
- Resume the current session, reveal answers, bookmark or flag a card, and rate recall with Know it or Review again. Session replacement asks before discarding an unfinished set.
- Recall history persists between sessions. The dashboard offers due cards, cards needing more practice, and unseen cards, with category progress. These self-ratings guide review; they do not establish pilot proficiency.
- Copy a direct card link or retain an Inspect search in the URL. Use completion controls to restart a set or revisit cards needing review.
- Export a backup or preview an import before applying it. A backup can transfer local progress between devices without enabling account sync.

Bookmarks, private flags, learning history, saved mixes, preferences, and the current session use browser-local storage by default. `study-store.js` merges individual records and retains removal markers to avoid restoring deleted bookmarks or mixes during a later merge. It also handles competing tab updates. Clearing browser data can erase unsynced progress; export backups for safekeeping.

## Optional hosted services

Account sync is **off until enabled on each device**. When enabled on the hosted site, it saves study records to the signed-in learner's account. Each account has separate data, and its current session can be resumed on another enabled device. Turning sync off stops further syncing on that device and leaves the existing cloud copy intact.

Suggest a correction submits a card ID and explanation to the site owner's inbox after sign-in. The owner can review reports and mark them resolved or open. Private flags remain separate: flagging a card alone sends no report. The inbox requires an explicitly configured owner identity; visitors cannot appoint themselves owner. No report email is sent.

See [server/README.md](server/README.md) for authentication, owner configuration, D1 storage, API validation, merge rules, and endpoint tests. Sync and submitted reports require the hosted backend; they are unavailable when opening a standalone local file. Local studying, private flags, and backup export/import remain available.

## Run locally and build

For standalone study, open the root `index.html` in a modern browser and keep its neighboring JavaScript, CSS, and `assets/` directory in place. A plain static server can also serve these root files. Source links require internet access, and browser settings determine whether local-file storage persists.

For the hosted app, use Node 22.13 or newer and the repository's installed dependencies:

```sh
npm run dev
npm run build
```

The build runs `scripts/prepare-library.mjs` to copy study assets into `public/`, then builds the Vinext/Worker app. `npm run start` previews the built Worker locally; backend checks require the local D1 setup described in [server/README.md](server/README.md). The generated `dist/` now contains hosted build output and should not be treated as the standalone source folder. Building does not publish a release.

## Project structure

| File or folder | Purpose |
| --- | --- |
| `index.html`, `styles.css` | Accessible views, dialogs, controls, and responsive presentation. |
| `script.js` | Selection, search, study sessions, ratings, navigation, mixes, backup UI, sync, and correction-report UI. |
| `study-store.js` | Browser-local record persistence, review scheduling, validation, and merging. |
| `cards.js` | The 2,235-card base library, categories, and reference directory. |
| `source-enhancements.js` | Post-content overlay: more specific citations, source metadata, and ten Practical Scenarios. |
| `assets/practice/` | Ten original SVG training illustrations, each with accessible descriptions. |
| `content/` | Expansion and revision inputs, category targets, research notes, content generation, and study/store tests. |
| `app/`, `server/` | Hosted page route, authenticated APIs, server logic, and API tests. |
| `db/`, `drizzle/` | Hosted database schema and migrations. |
| `scripts/prepare-library.mjs` | Copies standalone assets into the hosted public directory before a build. |
| `public/`, `dist/` | Prepared public assets and generated hosted build output. Edit their source files instead. |
| `worker/`, `lib/`, framework configuration | Sites hosting, authentication, and framework integration. |
| `favicon.svg` | Site icon. |

The browser loads `cards.js`, then `source-enhancements.js`, then the store and application code. Keep that order: the overlay augments the existing content globals before the interface reads them.

## References and review metadata

The source overlay improves **737 existing links** to eCFR sections, AIM sections, FAA handbook chapters, or a specific handbook directory. It preserves the original citation labels and previous URLs. This makes fact-checking easier; changing a link does not establish that its answer has been newly audited.

All existing cards have `reviewedAt: null` with an explicit indication that an individual answer review date was not recorded. The ten newly authored examples have an actual review date of October 29, 2026. Their metadata distinguishes primary-reference checks from arithmetic checks with an FAA chapter reference. Known publication editions are identified; unknown editions remain unrecorded. See [source-enhancements-notes.md](content/source-enhancements-notes.md) for the exact scope, source mapping, and calculation checks.

Each card has a stable `id`, `category`, `question`, `answer`, `source`, and `sourceUrl`. Optional fields are:

- `image`, `imageAlt`, and `steps` for illustrated or worked examples.
- `sourceMetadata` containing `edition`, `reviewedAt`, `verificationStatus`, and, when applicable, `linkUpdatedAt`.
- `sourceOriginalUrl` and `additionalSourceLinks` to retain prior references and other cited sections.

Training diagrams, example reports, and supplied numerical data are fictional and labeled accordingly. The Flight Design CTLS category uses an archived AOI; the actual aircraft's current documents and applicability control. Carrier operations specifications, approved manuals, performance data, and training determine actual airline procedures and limits.

## Content maintenance

Maintain expansion cards in `content/expansion-*.json`, revisions in `content/revisions-*.json`, and their category definitions in `content/new-categories.json`. Run `node content/build-database.cjs` to validate targets and regenerate the managed portion of `cards.js`. Its targets cover the **2,235-card base**, before the ten-card overlay. The generator also produces similarity candidates for editorial review; it cannot decide semantic duplication automatically. Run the hosted build afterward to refresh prepared assets.

Keep practice cards and source-resolution rules in `source-enhancements.js`. Preserve stable IDs when revising content so bookmarks and learning records continue to refer to the same question. Change category targets and count assertions deliberately when adding or removing cards.

For factual changes, check current eCFR text for regulations and primary FAA or manufacturer material for guidance. Verify CTLS facts against the applicable aircraft's current AOI/POH, supplements, weight-and-balance record, equipment list, and placards. Record what was actually checked and its date; never infer individual review dates from a project-wide audit. Update visible release information when releasing content.

Earlier research and review scope are documented in [CONTENT-AUDIT.md](CONTENT-AUDIT.md), [CONTENT-EXPANSION-2026-10-29.md](CONTENT-EXPANSION-2026-10-29.md), and [WEBSITE-REVIEW-2026-10-29.md](WEBSITE-REVIEW-2026-10-29.md).

## QA

Run the appropriate checks after changes:

```sh
node --check cards.js
node --check source-enhancements.js
node --check study-store.js
node --check script.js
node content/test-store.cjs
node content/test-study.cjs
node server/test-api.mjs
npm run build
```

For browser verification, cover selection and Custom Study, saved mixes, direct links, Inspect filters, bookmarks and flags, ratings and due review, session restoration/replacement, and backup merging. Check local-file behavior separately from authenticated hosted sync and the owner inbox. Verify that another learner cannot read someone else's records or reports.

Inspect keyboard navigation and screen-reader announcements, small and large viewports, long answers, and every practice diagram. Spot-check source destinations, normalized question uniqueness, category counts, and stable IDs. Test disabled storage, malformed backups, offline transitions, and competing tab/account updates when changing persistence behavior.

This is an independent educational study aid, not an FAA-approved course or a substitute for current regulations, aircraft documents, or qualified flight instruction.
