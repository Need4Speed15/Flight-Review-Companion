# Study sync and correction reports

The hosted site keeps its vanilla HTML interface. `app/route.ts` serves the root `index.html` bundled by Vite; `scripts/prepare-library.mjs` copies its script/style/image assets into `public/` before building. Root files remain usable directly for local/offline study. Vinext, the Sites plugin, and the Worker entrypoint retain hosted authentication and deployment integration.

Set `.openai/hosting.json` to the existing project ID with `d1: "DB"`, `r2: null`, and no `static` field. The schema and generated Drizzle migration are source controlled. Sites applies the migration when publishing. Use the starter's local D1 commands for preview data; local and hosted databases are separate.

Set the **server environment variable** `OWNER_USER_ID` to the owner's authenticated Site user ID returned by `/api/identity`. A workspace/account user ID is not interchangeable with the per-Site authenticated ID. There is no first-user owner bootstrap. Until configured, reports can be submitted but no visitor can read the inbox. Do not put owner credentials, bearer tokens, or service access tokens in browser code.

## API contract

Every API response is JSON with `Cache-Control: no-store`. Errors are `{error: string}` and meaningful HTTP status. Browser writes require same-origin `Origin` and `Content-Type: application/json`. Identity derives only from platform-injected server headers via `getChatGPTUser()`.

- `GET /api/identity`: `{authenticated, user: {id, displayName} | null, isOwner, storageAvailable}`. It works anonymously; user-owned APIs require sign-in.
- `GET /api/sync`: `{userId,records}` for the authenticated user only. Both sync methods require `X-Study-User` matching the ID obtained from `/api/identity`. This is a consistency check, not an authorization credential: the authenticated server identity still controls all queries. Mismatches return 409, preventing stale tabs from uploading another account's local data after cookies change. The client must compare response `userId` with its captured account before merging.
- `POST /api/sync`: `{records}`; maximum **250 records per request**, 1 MiB JSON body, 128 KiB per value. Split larger uploads into chunks. Returns all merged records for the authenticated user.
- A record is `{value, updatedAt, opId}` under key `session`, `preferences`, or `bookmark:ID`, `flag:ID`, `learning:ID`, `mix:ID`. `updatedAt` is safe integer milliseconds, at most five minutes ahead of server time. `opId` is a nonempty ASCII identifier, maximum 160 characters. `false` and `null` tombstones are retained. Scalar true/false/null is accepted only for bookmarks and flags; other values are objects or null.
- Merge is last-writer-wins by `(updatedAt, opId)` using an atomic SQLite upsert predicate. User ID is always the authenticated server user, never a field supplied by the client.
- `POST /api/reports`: `{cardId, concern}`. Concern is 10–4,000 characters. Returns `{id,status:"open"}` with 201 after durable insertion. Limit 20 reports per user per rolling day. No email is sent; the owner reads the in-site inbox.
- `GET /api/reports`: owner only, returns `{reports:[{id,cardId,concern,createdAt,status}],nextBefore}`. Up to 100 newest records; subsequent pages use `?before=nextBefore`.
- `PATCH /api/reports`: owner only, `{id,status:"open"|"resolved"}`. Updates status and returns `{id,status}`. No irreversible delete endpoint exists.

Only user study records are returned by sync. Report payloads are plain text and must be rendered using `textContent`, never HTML. Public visitors may read the library; submitting a report or enabling sync requires sign-in. A normal top-level sign-in anchor must use `/signin-with-chatgpt?return_to=/` with `target="_top"`.

Run `node server/test-api.mjs` for the isolated authorization, validation, merge, and report regression checks. These complement browser verification and real local-D1 integration checks.
