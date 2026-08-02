import assert from 'node:assert/strict'
import test from 'node:test'
import {
  normalizeAnalyticsRows,
  renderMarkdownReport,
  resolveDateRange
} from '../scripts/youtube-analytics/report-lib.mjs'

test('defaults to the previous 90 complete UTC days', () => {
  assert.deepEqual(
    resolveDateRange({ now: new Date('2026-08-02T12:00:00.000Z') }),
    { startDate: '2026-05-04', endDate: '2026-08-01' }
  )
})

test('uses an explicit inclusive date range and rejects incomplete input', () => {
  assert.deepEqual(
    resolveDateRange({ startDate: '2026-07-01', endDate: '2026-07-31' }),
    { startDate: '2026-07-01', endDate: '2026-07-31' }
  )
  assert.throws(() => resolveDateRange({ startDate: '2026-07-01' }), /start-date.*end-date/)
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

test('renders every required report section and escapes Markdown table values', () => {
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

  for (const heading of [
    '## Collection context',
    '## Channel trend',
    '### Period totals and daily averages',
    '## Top videos',
    '## Discovery and audience context'
  ]) {
    assert.match(markdown, new RegExp(heading))
  }
  assert.ok(markdown.includes('A \\| B'))
})
