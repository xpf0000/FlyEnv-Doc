import assert from 'node:assert/strict'
import test from 'node:test'
import {
  fetchAnalyticsRows,
  getVideoMetadata,
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

test('paginates Analytics rows for the authorized channel', async () => {
  const urls = []
  const payloads = [
    {
      totalResults: 3,
      columnHeaders: [{ name: 'video' }, { name: 'views' }],
      rows: [['a', 5], ['b', 4]]
    },
    {
      totalResults: 3,
      columnHeaders: [{ name: 'video' }, { name: 'views' }],
      rows: [['c', 3]]
    }
  ]

  const rows = await fetchAnalyticsRows({
    accessToken: 'not-a-real-token',
    query: {
      startDate: '2026-07-01',
      endDate: '2026-07-31',
      metrics: 'views',
      dimensions: 'video',
      sort: '-views'
    },
    fetchImpl: async (url) => {
      urls.push(new URL(url))
      return new Response(JSON.stringify(payloads.shift()), { status: 200 })
    }
  })

  assert.deepEqual(rows, [
    { video: 'a', views: 5 },
    { video: 'b', views: 4 },
    { video: 'c', views: 3 }
  ])
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
      return new Response(
        JSON.stringify({ items: ids.map((id) => ({ id, snippet: { title: id } })) }),
        { status: 200 }
      )
    }
  })

  assert.deepEqual(requestedIds.map((ids) => ids.length), [50, 1])
  assert.equal(metadata.get('video-50').snippet.title, 'video-50')
})
