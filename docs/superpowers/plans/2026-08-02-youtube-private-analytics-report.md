# YouTube Private Channel Analytics Report Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local command that authorizes the owner's YouTube channel, exports the last 90 complete days of private analytics to Markdown and JSON, and keeps all credentials and reports out of Git.

**Architecture:** A Node.js CLI performs OAuth 2.0 Authorization Code with PKCE through a loopback callback, then uses the official YouTube Analytics API and Data API v3 with a read-only token. Pure modules calculate date windows, normalize paginated API responses, enrich video rows, and render the report; the executable only coordinates OAuth, retrieval, file output, and concise terminal messages.

**Tech Stack:** Node.js 18+ built-in `fetch`, `http`, `crypto`, `fs`, and `node:test`; Yarn; YouTube Analytics API; YouTube Data API v3.

---

## File structure

| Path | Responsibility |
|---|---|
| `scripts/youtube-analytics/report-lib.mjs` | Date validation, Analytics/Data API retrieval, row normalization, and Markdown/JSON report generation. |
| `scripts/youtube-analytics/oauth.mjs` | OAuth-client parsing, PKCE, loopback callback, local token persistence/refresh, and sanitized OAuth errors. |
| `scripts/youtube-analytics-report.mjs` | CLI argument parsing, authorization/retrieval orchestration, and file output. |
| `tests/youtube-analytics-report.test.mjs` | Unit tests for the report library and CLI argument validation. |
| `tests/youtube-analytics-oauth.test.mjs` | Unit tests for OAuth configuration, PKCE URL construction, and secret-safe errors. |
| `.gitignore` | Excludes the local OAuth state directory and generated private reports. |
| `package.json` | Adds repeatable test and report scripts. |
| `docs/guide/youtube-private-channel-analytics.md` | English setup, execution, and AI-review instructions. |
| `docs/zh/guide/youtube-private-channel-analytics.md` | Chinese setup, execution, and AI-review instructions. |
| `docs/.vitepress/config.mts` | Places both guides in their existing Productivity sidebars. |

### Task 1: Add private-output boundaries and test commands

**Files:**
- Modify: `.gitignore`
- Modify: `package.json`
- Create: `tests/youtube-analytics-report.test.mjs`

- [ ] **Step 1: Write the failing report-library import test**

Create `tests/youtube-analytics-report.test.mjs` with this initial test. It establishes the public pure-function contract before the module exists.

```js
import assert from 'node:assert/strict'
import test from 'node:test'
import { resolveDateRange } from '../scripts/youtube-analytics/report-lib.mjs'

test('defaults to the previous 90 complete UTC days', () => {
  assert.deepEqual(
    resolveDateRange({ now: new Date('2026-08-02T12:00:00.000Z') }),
    { startDate: '2026-05-04', endDate: '2026-08-01' }
  )
})
```

- [ ] **Step 2: Register deterministic commands and private paths**

Add these lines to `.gitignore` after the existing `/.worktrees/` entry:

```gitignore
/.youtube-analytics/
/reports/youtube/
```

Add these scripts to the existing `scripts` object in `package.json` without changing the existing docs commands:

```json
"test": "node --test tests/*.test.mjs",
"youtube:report": "node scripts/youtube-analytics-report.mjs"
```

- [ ] **Step 3: Run the test to verify the missing-module failure**

Run: `node --test tests/youtube-analytics-report.test.mjs`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `scripts/youtube-analytics/report-lib.mjs`.

- [ ] **Step 4: Commit the test harness and privacy boundary**

Run:

```bash
git add .gitignore package.json tests/youtube-analytics-report.test.mjs
git commit -m "test: scaffold YouTube analytics report coverage"
```

### Task 2: Implement and test deterministic report primitives

**Files:**
- Modify: `tests/youtube-analytics-report.test.mjs`
- Create: `scripts/youtube-analytics/report-lib.mjs`

- [ ] **Step 1: Add failing behavior tests**

Replace the initial report-library import with the following import, then append these cases to `tests/youtube-analytics-report.test.mjs`:

```js
import {
  normalizeAnalyticsRows,
  resolveDateRange,
  renderMarkdownReport
} from '../scripts/youtube-analytics/report-lib.mjs'

test('uses an explicit inclusive date range and rejects incomplete input', () => {
  assert.deepEqual(
    resolveDateRange({ startDate: '2026-07-01', endDate: '2026-07-31' }),
    { startDate: '2026-07-01', endDate: '2026-07-31' }
  )
  assert.throws(() => resolveDateRange({ startDate: '2026-07-01' }), /start-date and end-date/)
})

test('maps Analytics API rows by column name', () => {
  assert.deepEqual(
    normalizeAnalyticsRows({
      columnHeaders: [{ name: 'video' }, { name: 'views' }],
      rows: [['abc123', 42]]
    }),
    [{ video: 'abc123', views: 42 }]
  )
})

test('renders escaped Markdown tables with every required report section', () => {
  const markdown = renderMarkdownReport({
    channel: { id: 'channel-1', snippet: { title: 'A | B' } },
    dateRange: { startDate: '2026-07-01', endDate: '2026-07-31' },
    collectedAt: '2026-08-02T12:00:00.000Z',
    daily: [{ day: '2026-07-01', views: 12, estimatedMinutesWatched: 34 }],
    videos: [],
    trafficSources: [],
    countries: [],
    devices: []
  })

  for (const heading of ['Collection context', 'Channel trend', 'Period totals and daily averages', 'Top videos', 'Discovery and audience context']) {
    assert.match(markdown, new RegExp('## ' + heading))
  }
  assert.ok(markdown.includes('A \\| B'))
})
```

- [ ] **Step 2: Run the focused tests and verify they fail**

Run: `node --test tests/youtube-analytics-report.test.mjs`

Expected: FAIL because the three imported exports do not exist.

- [ ] **Step 3: Create the pure report module**

Create `scripts/youtube-analytics/report-lib.mjs` with these exported contracts. Keep all date math in UTC and never rely on the local timezone.

```js
const DAY_MS = 24 * 60 * 60 * 1000

function toIsoDate(value) {
  return value.toISOString().slice(0, 10)
}

function parseIsoDate(value, flagName) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`${flagName} must use YYYY-MM-DD`)
  }
  const parsed = new Date(`${value}T00:00:00.000Z`)
  if (Number.isNaN(parsed.valueOf()) || toIsoDate(parsed) !== value) {
    throw new Error(`${flagName} must be a valid calendar date`)
  }
  return parsed
}

export function resolveDateRange({ days = 90, startDate, endDate, now = new Date() } = {}) {
  if ((startDate && !endDate) || (!startDate && endDate)) {
    throw new Error('--start-date and --end-date must be provided together')
  }
  if (startDate && endDate) {
    const start = parseIsoDate(startDate, '--start-date')
    const end = parseIsoDate(endDate, '--end-date')
    if (start > end) throw new Error('--start-date cannot be after --end-date')
    return { startDate, endDate }
  }
  if (!Number.isInteger(days) || days < 1 || days > 365) {
    throw new Error('--days must be an integer from 1 to 365')
  }
  const previousUtcDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1))
  const startUtcDay = new Date(previousUtcDay.valueOf() - (days - 1) * DAY_MS)
  return { startDate: toIsoDate(startUtcDay), endDate: toIsoDate(previousUtcDay) }
}

export function normalizeAnalyticsRows(report = {}) {
  const headers = report.columnHeaders ?? []
  return (report.rows ?? []).map((row) =>
    Object.fromEntries(headers.map((header, index) => [header.name, row[index]]))
  )
}

function escapeCell(value) {
  return String(value ?? '—').replaceAll('|', '\\|').replaceAll('\n', '<br>')
}

function table(headers, rows) {
  if (rows.length === 0) return '_No data returned by YouTube for this breakdown._\n'
  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.map(escapeCell).join(' | ')} |`),
    ''
  ].join('\n')
}

export function renderMarkdownReport(data) {
  const channelTitle = data.channel?.snippet?.title ?? 'Authorized channel'
  const channelId = data.channel?.id ?? 'Unavailable'
  const dailyRows = data.daily.map((row) => [row.day, row.views, row.estimatedMinutesWatched, row.averageViewDuration, row.averageViewPercentage, row.subscribersGained, row.subscribersLost, row.likes, row.comments, row.shares])
  const videoRows = data.videos.slice(0, 20).map((row) => [row.title ?? row.video, row.publishedAt ?? '—', row.url ?? '—', row.views, row.estimatedMinutesWatched, row.averageViewDuration, row.averageViewPercentage, row.subscribersGained, row.subscribersLost, row.likes, row.comments, row.shares])
  const total = (key) => data.daily.reduce((sum, row) => sum + Number(row[key] ?? 0), 0)
  const dailyAverage = (key) => data.daily.length === 0 ? 0 : total(key) / data.daily.length
  const periodRows = ['views', 'estimatedMinutesWatched', 'subscribersGained', 'subscribersLost', 'likes', 'comments', 'shares']
    .map((key) => [key, total(key), dailyAverage(key).toFixed(2)])
  const breakdown = (title, key, rows) => `### ${title}\n\n` + table([key, 'Views', 'Watch minutes'], rows.map((row) => [row[key], row.views, row.estimatedMinutesWatched]))

  return `# YouTube private channel data report\n\n## Collection context\n\n- **Channel:** ${escapeCell(channelTitle)} (${escapeCell(channelId)})\n- **Date range:** ${data.dateRange.startDate} to ${data.dateRange.endDate} (UTC)\n- **Collected:** ${data.collectedAt}\n- **Data note:** YouTube Analytics can lag behind the current day.\n\n## Channel trend\n\n` +
    `### Period totals and daily averages\n\n` +
    table(['Metric', 'Total', 'Daily average'], periodRows) +
    table(['Day', 'Views', 'Watch minutes', 'Avg duration (s)', 'Avg viewed (%)', 'Subs gained', 'Subs lost', 'Likes', 'Comments', 'Shares'], dailyRows) +
    `## Top videos\n\n` +
    table(['Video', 'Published (UTC)', 'URL', 'Views', 'Watch minutes', 'Avg duration (s)', 'Avg viewed (%)', 'Subs gained', 'Subs lost', 'Likes', 'Comments', 'Shares'], videoRows) +
    `## Discovery and audience context\n\n` +
    breakdown('Traffic sources', 'insightTrafficSourceType', data.trafficSources) +
    breakdown('Countries', 'country', data.countries) +
    breakdown('Device types', 'deviceType', data.devices)
}
```

- [ ] **Step 4: Run the tests and format-check the new module**

Run: `node --test tests/youtube-analytics-report.test.mjs`

Expected: PASS for the date range, normalization, and report-rendering tests.

- [ ] **Step 5: Commit the pure reporting primitives**

Run:

```bash
git add scripts/youtube-analytics/report-lib.mjs tests/youtube-analytics-report.test.mjs
git commit -m "feat: render private YouTube data reports"
```

### Task 3: Add paginated read-only YouTube retrieval and metadata enrichment

**Files:**
- Modify: `scripts/youtube-analytics/report-lib.mjs`
- Modify: `tests/youtube-analytics-report.test.mjs`

- [ ] **Step 1: Add failing API retrieval tests**

Replace the report-library import with one that also imports `fetchAnalyticsRows` and `getVideoMetadata`, then append tests that pass an injected `fetchImpl` returning two Analytics pages and a `videos.list` response. Assert that `fetchAnalyticsRows` requests `ids=channel==MINE`, increments `startIndex` from `1` to `3`, and returns three normalized rows. Add this complete batching test too:

```js
test('paginates Analytics rows and uses the authorized channel', async () => {
  const urls = []
  const payloads = [
    { totalResults: 3, columnHeaders: [{ name: 'video' }, { name: 'views' }], rows: [['a', 5], ['b', 4]] },
    { totalResults: 3, columnHeaders: [{ name: 'video' }, { name: 'views' }], rows: [['c', 3]] }
  ]
  const rows = await fetchAnalyticsRows({
    accessToken: 'not-a-real-token',
    query: { startDate: '2026-07-01', endDate: '2026-07-31', metrics: 'views', dimensions: 'video', sort: '-views' },
    fetchImpl: async (url) => {
      urls.push(new URL(url))
      return new Response(JSON.stringify(payloads.shift()), { status: 200 })
    }
  })
  assert.equal(rows.length, 3)
  assert.equal(urls[0].searchParams.get('ids'), 'channel==MINE')
  assert.equal(urls[1].searchParams.get('startIndex'), '3')
})

test('batches Data API metadata lookups in groups of at most 50 IDs', async () => {
  const requestedIds = []
  const videoIds = Array.from({ length: 51 }, (_, index) => `video-${index}`)
  const metadata = await getVideoMetadata({
    accessToken: 'not-a-real-token',
    videoIds,
    fetchImpl: async (url) => {
      const ids = new URL(url).searchParams.get('id').split(',')
      requestedIds.push(ids)
      return new Response(JSON.stringify({ items: ids.map((id) => ({ id, snippet: { title: id } })) }), { status: 200 })
    }
  })
  assert.deepEqual(requestedIds.map((ids) => ids.length), [50, 1])
  assert.equal(metadata.get('video-50').snippet.title, 'video-50')
})
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run: `node --test tests/youtube-analytics-report.test.mjs`

Expected: FAIL with `fetchAnalyticsRows is not exported`.

- [ ] **Step 3: Implement Google API helpers and the collector**

Add these exports to `scripts/youtube-analytics/report-lib.mjs`:

```js
const ANALYTICS_URL = 'https://youtubeanalytics.googleapis.com/v2/reports'
const DATA_API_URL = 'https://www.googleapis.com/youtube/v3'

export async function fetchGoogleJson(url, accessToken, fetchImpl = fetch) {
  const response = await fetchImpl(url, { headers: { authorization: `Bearer ${accessToken}` } })
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(`Google API request failed (${response.status}): ${payload.error?.message ?? 'Unknown error'}`)
  }
  return payload
}

export async function fetchAnalyticsRows({ accessToken, query, fetchImpl = fetch }) {
  const rows = []
  let startIndex = 1
  const maxResults = 200
  while (true) {
    const url = new URL(ANALYTICS_URL)
    for (const [key, value] of Object.entries({ ids: 'channel==MINE', ...query, maxResults, startIndex })) {
      if (value) url.searchParams.set(key, String(value))
    }
    const page = await fetchGoogleJson(url, accessToken, fetchImpl)
    const pageRows = normalizeAnalyticsRows(page)
    rows.push(...pageRows)
    if (pageRows.length === 0 || rows.length >= (page.totalResults ?? rows.length)) break
    startIndex += pageRows.length
  }
  return rows
}

export async function getVideoMetadata({ accessToken, videoIds, fetchImpl = fetch }) {
  const metadata = new Map()
  for (let index = 0; index < videoIds.length; index += 50) {
    const ids = videoIds.slice(index, index + 50)
    const url = new URL(`${DATA_API_URL}/videos`)
    url.search = new URLSearchParams({ part: 'snippet', id: ids.join(',') }).toString()
    const response = await fetchGoogleJson(url, accessToken, fetchImpl)
    for (const item of response.items ?? []) metadata.set(item.id, item)
  }
  return metadata
}

export async function collectChannelData({ accessToken, dateRange, fetchImpl = fetch }) {
  const metrics = 'views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained,subscribersLost,likes,comments,shares'
  const baseQuery = { ...dateRange, metrics }
  const channelUrl = new URL(`${DATA_API_URL}/channels`)
  channelUrl.search = new URLSearchParams({ part: 'snippet,statistics', mine: 'true' }).toString()
  const [channelPayload, daily, videoRows, optionalResults] = await Promise.all([
    fetchGoogleJson(channelUrl, accessToken, fetchImpl),
    fetchAnalyticsRows({ accessToken, query: { ...baseQuery, dimensions: 'day', sort: 'day' }, fetchImpl }),
    fetchAnalyticsRows({ accessToken, query: { ...baseQuery, dimensions: 'video', sort: '-views' }, fetchImpl }),
    Promise.allSettled([
      fetchAnalyticsRows({ accessToken, query: { ...baseQuery, metrics: 'views,estimatedMinutesWatched', dimensions: 'insightTrafficSourceType', sort: '-views' }, fetchImpl }),
      fetchAnalyticsRows({ accessToken, query: { ...baseQuery, metrics: 'views,estimatedMinutesWatched', dimensions: 'country', sort: '-views' }, fetchImpl }),
      fetchAnalyticsRows({ accessToken, query: { ...baseQuery, metrics: 'views,estimatedMinutesWatched', dimensions: 'deviceType', sort: '-views' }, fetchImpl })
    ])
  ])
  const metadata = await getVideoMetadata({ accessToken, videoIds: videoRows.map((row) => row.video), fetchImpl })
  const videos = videoRows.map((row) => {
    const video = metadata.get(row.video)
    return { ...row, title: video?.snippet?.title ?? row.video, publishedAt: video?.snippet?.publishedAt, url: `https://www.youtube.com/watch?v=${row.video}` }
  })
  const [trafficSources, countries, devices] = optionalResults.map((result) => result.status === 'fulfilled' ? result.value : [])
  return { channel: channelPayload.items?.[0] ?? null, dateRange, collectedAt: new Date().toISOString(), daily, videos, trafficSources, countries, devices }
}
```

- [ ] **Step 4: Run the report test suite**

Run: `node --test tests/youtube-analytics-report.test.mjs`

Expected: PASS, including pagination and metadata batching cases.

- [ ] **Step 5: Commit the read-only API collector**

Run:

```bash
git add scripts/youtube-analytics/report-lib.mjs tests/youtube-analytics-report.test.mjs
git commit -m "feat: collect private YouTube analytics data"
```

### Task 4: Add testable OAuth with PKCE and local token storage

**Files:**
- Create: `scripts/youtube-analytics/oauth.mjs`
- Create: `tests/youtube-analytics-oauth.test.mjs`

- [ ] **Step 1: Write OAuth security tests before the module exists**

Create `tests/youtube-analytics-oauth.test.mjs`:

```js
import assert from 'node:assert/strict'
import test from 'node:test'
import { buildAuthorizationUrl, parseOAuthClient, sanitizeOAuthError } from '../scripts/youtube-analytics/oauth.mjs'

test('builds a PKCE authorization URL without the client secret', () => {
  const url = new URL(buildAuthorizationUrl({
    client: { clientId: 'client-id', clientSecret: 'never-show-this', redirectUri: 'http://127.0.0.1:53682/oauth2callback' },
    state: 'state-value',
    codeChallenge: 'challenge-value'
  }))
  assert.equal(url.searchParams.get('client_id'), 'client-id')
  assert.equal(url.searchParams.get('code_challenge'), 'challenge-value')
  assert.equal(url.searchParams.get('access_type'), 'offline')
  assert.equal(url.searchParams.has('client_secret'), false)
})

test('accepts installed OAuth credentials and redacts a secret value in errors', () => {
  assert.deepEqual(
    parseOAuthClient({ installed: { client_id: 'id', client_secret: 'secret' } }),
    { clientId: 'id', clientSecret: 'secret', redirectUri: 'http://127.0.0.1:53682/oauth2callback' }
  )
  assert.doesNotMatch(sanitizeOAuthError(new Error('invalid client secret super-private-value')), /super-private-value/)
})
```

- [ ] **Step 2: Run the OAuth tests and verify the missing-module failure**

Run: `node --test tests/youtube-analytics-oauth.test.mjs`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `scripts/youtube-analytics/oauth.mjs`.

- [ ] **Step 3: Implement local OAuth and token persistence**

Create `scripts/youtube-analytics/oauth.mjs`. It must export `SCOPES`, `parseOAuthClient`, `createPkcePair`, `buildAuthorizationUrl`, `waitForAuthorizationCode`, `exchangeAuthorizationCode`, `refreshAccessToken`, `readTokenFile`, `writeTokenFile`, `getAccessToken`, and `sanitizeOAuthError`.

Use the following exact policy in the implementation:

```js
export const SCOPES = [
  'https://www.googleapis.com/auth/yt-analytics.readonly',
  'https://www.googleapis.com/auth/youtube.readonly'
]

export const LOOPBACK_REDIRECT_URI = 'http://127.0.0.1:53682/oauth2callback'

export function parseOAuthClient(document) {
  const source = document.installed ?? document.web
  if (!source?.client_id) throw new Error('OAuth client JSON must contain an installed or web client_id')
  return {
    clientId: source.client_id,
    clientSecret: source.client_secret ?? '',
    redirectUri: LOOPBACK_REDIRECT_URI
  }
}

export function buildAuthorizationUrl({ client, state, codeChallenge }) {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  url.search = new URLSearchParams({
    client_id: client.clientId,
    redirect_uri: client.redirectUri,
    response_type: 'code',
    scope: SCOPES.join(' '),
    access_type: 'offline',
    prompt: 'consent',
    state,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256'
  }).toString()
  return url.toString()
}

export function sanitizeOAuthError(error) {
  const message = error instanceof Error ? error.message : String(error)
  return message
    .replace(/(access_token|refresh_token|client_secret|code)=([^\s&]+)/gi, '$1=[redacted]')
    .replace(/secret\s+[^\s,]+/gi, 'secret [redacted]')
}
```

`createPkcePair` must generate a random base64url verifier with `crypto.randomBytes(64)` and calculate the SHA-256 base64url challenge. `waitForAuthorizationCode` must bind only to `127.0.0.1:53682`, reject a state mismatch, timeout after five minutes, close the server in every path, and return a small success/error HTML page. `getAccessToken` must reuse an unexpired stored access token, refresh an expired token when a refresh token exists, otherwise open the authorization URL and exchange the returned code. Store `expires_at` in ISO form and preserve an existing refresh token if Google's exchange response omits a new one. `writeTokenFile` must call `mkdir(..., { recursive: true })`, write with mode `0o600`, and call `chmod(path, 0o600)` after write.

- [ ] **Step 4: Run the OAuth tests**

Run: `node --test tests/youtube-analytics-oauth.test.mjs`

Expected: PASS. The `sanitizeOAuthError` assertion proves that the returned error message does not contain the secret value.

- [ ] **Step 5: Commit the OAuth layer**

Run:

```bash
git add scripts/youtube-analytics/oauth.mjs tests/youtube-analytics-oauth.test.mjs
git commit -m "feat: authorize private YouTube analytics access"
```

### Task 5: Build the no-secret CLI and report writer

**Files:**
- Create: `scripts/youtube-analytics-report.mjs`
- Modify: `tests/youtube-analytics-report.test.mjs`

- [ ] **Step 1: Add failing CLI argument tests**

Add tests for an exported `parseReportArgs` function. Verify the default object is `{ days: 90, output: 'reports/youtube', tokenFile: '.youtube-analytics/token.json' }`, `--client-secrets` is required, date flags are passed to `resolveDateRange`, and unknown flags throw `Unknown option: --bad`.

```js
import { parseReportArgs } from '../scripts/youtube-analytics-report.mjs'

test('requires OAuth client configuration without printing a path or secret', () => {
  assert.throws(() => parseReportArgs([]), /--client-secrets is required/)
  assert.deepEqual(
    parseReportArgs(['--client-secrets', '/tmp/client.json', '--days', '30']),
    { clientSecrets: '/tmp/client.json', days: 30, output: 'reports/youtube', tokenFile: '.youtube-analytics/token.json' }
  )
})
```

- [ ] **Step 2: Run the test and verify the import failure**

Run: `node --test tests/youtube-analytics-report.test.mjs`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `scripts/youtube-analytics-report.mjs`.

- [ ] **Step 3: Implement the executable**

Create `scripts/youtube-analytics-report.mjs` using these exact orchestration boundaries:

```js
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { collectChannelData, renderMarkdownReport, resolveDateRange } from './youtube-analytics/report-lib.mjs'
import { getAccessToken, parseOAuthClient, sanitizeOAuthError } from './youtube-analytics/oauth.mjs'

export function parseReportArgs(argv) {
  const options = { days: 90, output: 'reports/youtube', tokenFile: '.youtube-analytics/token.json' }
  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index]
    const value = argv[index + 1]
    if (!['--client-secrets', '--days', '--start-date', '--end-date', '--output', '--token-file'].includes(option)) {
      throw new Error(`Unknown option: ${option}`)
    }
    if (!value || value.startsWith('--')) throw new Error(`${option} requires a value`)
    index += 1
    if (option === '--client-secrets') options.clientSecrets = value
    if (option === '--days') options.days = Number(value)
    if (option === '--start-date') options.startDate = value
    if (option === '--end-date') options.endDate = value
    if (option === '--output') options.output = value
    if (option === '--token-file') options.tokenFile = value
  }
  if (!options.clientSecrets) throw new Error('--client-secrets is required')
  resolveDateRange(options)
  return options
}

export async function runReport(options) {
  const client = parseOAuthClient(JSON.parse(await readFile(options.clientSecrets, 'utf8')))
  const accessToken = await getAccessToken({ client, tokenFile: options.tokenFile })
  const data = await collectChannelData({ accessToken, dateRange: resolveDateRange(options) })
  const outputDirectory = join(options.output, data.collectedAt.replaceAll(':', '-').replaceAll('.', '-'))
  await mkdir(outputDirectory, { recursive: true })
  const jsonPath = join(outputDirectory, 'channel-data.json')
  const markdownPath = join(outputDirectory, 'channel-data.md')
  await writeFile(jsonPath, JSON.stringify(data, null, 2) + '\n', { mode: 0o600 })
  await writeFile(markdownPath, renderMarkdownReport(data), { mode: 0o600 })
  return { jsonPath, markdownPath, dateRange: data.dateRange }
}

if (basename(process.argv[1] ?? '') === 'youtube-analytics-report.mjs') {
  runReport(parseReportArgs(process.argv.slice(2)))
    .then(({ markdownPath, jsonPath, dateRange }) => {
      console.log(`Created private channel report for ${dateRange.startDate} to ${dateRange.endDate}.`)
      console.log(`Markdown: ${markdownPath}`)
      console.log(`JSON: ${jsonPath}`)
    })
    .catch((error) => {
      console.error(`Could not generate YouTube report: ${sanitizeOAuthError(error)}`)
      process.exitCode = 1
    })
}
```

Do not log token values, OAuth URLs, the client-secret path, API response bodies, or the full report body.

- [ ] **Step 4: Run all unit tests**

Run: `yarn test`

Expected: PASS with the existing `tests/*.test.mjs` files plus both new suites.

- [ ] **Step 5: Commit the local report command**

Run:

```bash
git add scripts/youtube-analytics-report.mjs scripts/youtube-analytics tests/youtube-analytics-report.test.mjs
git commit -m "feat: export private YouTube channel reports"
```

### Task 6: Document local Google setup and AI review handoff

**Files:**
- Create: `docs/guide/youtube-private-channel-analytics.md`
- Create: `docs/zh/guide/youtube-private-channel-analytics.md`
- Modify: `docs/.vitepress/config.mts`

- [ ] **Step 1: Write failing documentation-presence tests**

Create `tests/youtube-private-channel-analytics-docs.test.mjs` that asserts each guide contains the command, the two read-only OAuth scopes, the words `Google Cloud`, and an explicit statement not to commit `client_secret.json` or `channel-data.json`.

```js
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceFile = (path) => readFileSync(resolve(root, path), 'utf8')

test('English YouTube analytics guide keeps credentials and reports private', () => {
  const source = sourceFile('docs/guide/youtube-private-channel-analytics.md')
  for (const term of ['yarn youtube:report', 'yt-analytics.readonly', 'youtube.readonly', 'Google Cloud', 'Do not commit']) {
    assert.ok(source.includes(term), `English guide should include ${term}`)
  }
})

test('Chinese YouTube analytics guide keeps credentials and reports private', () => {
  const source = sourceFile('docs/zh/guide/youtube-private-channel-analytics.md')
  for (const term of ['yarn youtube:report', 'yt-analytics.readonly', 'youtube.readonly', 'Google Cloud', '不要提交']) {
    assert.ok(source.includes(term), `Chinese guide should include ${term}`)
  }
})
```

- [ ] **Step 2: Run the documentation test and verify failure**

Run: `node --test tests/youtube-private-channel-analytics-docs.test.mjs`

Expected: FAIL because the guide files do not exist.

- [ ] **Step 3: Write both guides and add their sidebar entries**

The guides must contain these concrete sections:

```markdown
## Google Cloud setup

1. Create a Google Cloud project.
2. Enable **YouTube Analytics API** and **YouTube Data API v3**.
3. Configure the OAuth consent screen as External or Testing and add the Google account that owns the channel as a test user when applicable.
4. Create a **Desktop app** OAuth client and download its JSON file to a private local path.

## Generate a report

```bash
yarn youtube:report -- --client-secrets /private/path/client_secret.json
```

The first run opens Google authorization. Grant only the requested read-only permissions. The command creates `channel-data.md` and `channel-data.json` below `reports/youtube/`.

## Ask an AI to analyze it

Provide the generated Markdown report and ask for recommendations grounded in the observed date range, trends, top videos, traffic sources, countries, and device mix. Do not send OAuth credentials or refresh-token files.
```

Translate this guidance naturally into Chinese for the Chinese guide. Add `YouTube Private Channel Analytics` and `YouTube 私人频道数据分析` to the existing English and Chinese **AI & Pro Productivity Tools** sidebar arrays, with `/guide/youtube-private-channel-analytics` and `/zh/guide/youtube-private-channel-analytics` links.

- [ ] **Step 4: Run the documentation tests and production build**

Run: `node --test tests/youtube-private-channel-analytics-docs.test.mjs && yarn docs:build`

Expected: both documentation tests PASS and VitePress completes successfully.

- [ ] **Step 5: Commit the usage documentation**

Run:

```bash
git add docs/guide/youtube-private-channel-analytics.md docs/zh/guide/youtube-private-channel-analytics.md docs/.vitepress/config.mts tests/youtube-private-channel-analytics-docs.test.mjs
git commit -m "docs: explain private YouTube analytics reports"
```

### Task 7: Verify privacy, regression safety, and the manual OAuth handoff

**Files:**
- Verify: `.gitignore`
- Verify: `scripts/youtube-analytics-report.mjs`
- Verify: `scripts/youtube-analytics/oauth.mjs`
- Verify: `tests/*.test.mjs`

- [ ] **Step 1: Run the full automated suite**

Run: `yarn test`

Expected: all Node tests PASS.

- [ ] **Step 2: Build the documentation site**

Run: `yarn docs:build`

Expected: VitePress exits with code 0 and writes only gitignored output under `docs/.vitepress/dist/`.

- [ ] **Step 3: Scan the staged source for forbidden monetary scope and accidental token output**

Run:

```bash
rg -n 'yt-analytics-monetary|console\\.log.*token|client_secret\.json' scripts tests docs/guide/youtube-private-channel-analytics.md docs/zh/guide/youtube-private-channel-analytics.md
```

Expected: no monetary scope or token logging; `client_secret.json` only appears in setup warnings and example paths.

- [ ] **Step 4: Inspect the working tree and commit verification-only fixes if needed**

Run: `git status --short`

Expected: no unstaged or uncommitted product changes. If a verification fix was necessary, commit it with `test: verify YouTube report privacy boundaries`.

- [ ] **Step 5: Perform the owner-only manual check**

Ask the owner to run the documented command with their own Google OAuth client, approve the read-only Google consent page, and inspect the generated Markdown report. Do not request, print, read, or commit their OAuth client JSON, token file, or report unless they explicitly decide to share only the report for analysis.
