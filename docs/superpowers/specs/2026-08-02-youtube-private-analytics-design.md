# YouTube Private Channel Analytics Report — Design

## Goal

Provide a local, single-user command that retrieves private analytics for the
channel authorized by its owner and writes a Markdown data report plus the
underlying JSON data. The generated report is intended to be reviewed by an AI
assistant afterwards for manual, evidence-based optimization recommendations.

The first release is deliberately not a multi-user web product, persistent
analytics service, dashboard, or AI integration.

## User workflow

1. The channel owner creates a Google OAuth Desktop client and saves its
   downloaded client-secret JSON outside version control.
2. They run the report command locally, passing the client-secret path on the
   first run.
3. The command opens Google's consent page. The owner grants read-only access
   to their YouTube channel and returns to the local callback page.
4. The command retrieves the previous 90 complete calendar days by default.
5. It writes a dated Markdown report and JSON data bundle under
   `reports/youtube/`.
6. The owner shares the report with an AI assistant, which interprets the data
   and proposes content, packaging, and publishing improvements.

## Architecture

The implementation is a Node.js CLI, separate from the VitePress browser
bundle. It uses Node's built-in `http`, `crypto`, `fs`, and `fetch` APIs rather
than adding a runtime dependency.

```text
Local CLI
  -> Google OAuth 2.0 with PKCE (browser + loopback callback)
  -> YouTube Analytics API (private channel reports)
  -> YouTube Data API v3 (channel and video metadata)
  -> reports/youtube/<UTC timestamp>/{channel-data.json,channel-data.md}
```

The CLI will be split into a small executable entry point and testable helpers
for OAuth configuration, API requests, data normalization, and Markdown
rendering.

## Authentication and data safety

- Request only `yt-analytics.readonly` and `youtube.readonly` OAuth scopes.
  Revenue access and the monetary scope are explicitly out of scope.
- Use Authorization Code with PKCE and a local loopback redirect. The CLI must
  never print access tokens, refresh tokens, authorization codes, or a client
  secret.
- Read OAuth client configuration from a user-supplied path. Support the
  `installed` object produced by Google's Desktop OAuth credentials.
- Persist the refresh token in a user-selected local token file. Create it with
  owner-only permissions where the operating system supports them.
- Put the default local token/config directory and `reports/youtube/` in
  `.gitignore`. No credential or report containing private analytics is ever
  committed.
- Refresh an expired access token automatically. If the refresh token is
  revoked or scopes are insufficient, state the corrective action without
  exposing sensitive values.

## Report data

The default date range is the 90 complete UTC calendar days preceding today.
The CLI accepts `--days`, `--start-date`, and `--end-date` so an analysis can be
repeated for a particular publishing period.

The JSON bundle keeps the API-normalized records and query time. The Markdown
report contains readable tables and these sections:

1. **Collection context** — channel title and ID, selected date range, UTC
   collection time, and a note that YouTube analytics can lag.
2. **Channel trend** — daily views, estimated minutes watched, average view
   duration, average percentage viewed, subscribers gained/lost, likes,
   comments, and shares; plus period totals and daily averages.
3. **Top videos** — up to 20 videos ordered by views, enriched with their title,
   publication date, and URL. Include views, watch time, average duration,
   average percentage viewed, subscriber changes, likes, comments, and shares.
4. **Discovery and audience context** — top traffic-source types, countries,
   and device types, each with views and watch time.

The tool does not invent recommendations, score the channel, or send data to an
LLM. That keeps the source data auditable before an AI analysis step.

## API behavior

- Use the Analytics API's `reports.query` endpoint with `ids=channel==MINE`.
- Query daily channel data and dimension summaries for video,
  `insightTrafficSourceType`, `country`, and `deviceType`.
- Use `videos.list` in batches of at most 50 IDs to attach titles, published
  times, and canonical YouTube URLs to video report rows.
- Paginate Analytics responses until all requested rows are collected; cap
  presentation tables while retaining complete fetched data in JSON.
- Convert tabular Analytics API rows to named-object records using the returned
  column headers, so column ordering from Google cannot corrupt the report.

## Errors and limits

- Validate dates, required client configuration, and write locations before
  opening the authorization page.
- Explain OAuth denial, callback timeout, insufficient permissions, unavailable
  reporting dimensions, quota/rate-limit responses, and network failures in
  actionable language.
- Do not fail the entire report if an optional discovery breakdown has no
  returned rows. Record it as unavailable in the Markdown report and preserve
  the successful sections.
- API responses are read-only. The command must not upload, modify, publish, or
  delete any YouTube resource.

## Command interface

The package will expose a Yarn script, conceptually:

```text
yarn youtube:report -- --client-secrets /safe/path/client_secret.json
```

Optional flags:

```text
--days 90
--start-date YYYY-MM-DD
--end-date YYYY-MM-DD
--output reports/youtube
--token-file /safe/path/youtube-token.json
```

At completion, the command prints only the report paths and date range. It
never prints the report contents or private credentials to the terminal.

## Verification

Add Node built-in test coverage for:

- date-window calculation and flag validation;
- Analytics row normalization and pagination;
- video metadata batching and missing-video handling;
- OAuth/API error messages without secret leakage; and
- required sections and escaped content in the Markdown renderer.

Run the new test command and the existing VitePress production build. Actual
OAuth and Analytics API retrieval is a manual final check performed only after
the owner supplies their own Google OAuth client configuration and approves the
Google consent screen.

## Non-goals

- A hosted dashboard, accounts, database, scheduled sync, or multi-channel
  tenancy.
- Revenue metrics, monetary OAuth access, or data sharing with third parties.
- Automatic LLM calls or automatic publishing changes to the YouTube channel.
