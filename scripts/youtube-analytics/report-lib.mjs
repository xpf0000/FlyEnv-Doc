const DAY_MS = 24 * 60 * 60 * 1000
const ANALYTICS_URL = 'https://youtubeanalytics.googleapis.com/v2/reports'
const DATA_API_URL = 'https://www.googleapis.com/youtube/v3'

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
    if (start > end) {
      throw new Error('--start-date cannot be after --end-date')
    }
    return { startDate, endDate }
  }

  if (!Number.isInteger(days) || days < 1 || days > 365) {
    throw new Error('--days must be an integer from 1 to 365')
  }

  const previousUtcDay = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1)
  )
  const startUtcDay = new Date(previousUtcDay.valueOf() - (days - 1) * DAY_MS)

  return {
    startDate: toIsoDate(startUtcDay),
    endDate: toIsoDate(previousUtcDay)
  }
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
  if (rows.length === 0) {
    return '_No data returned by YouTube for this breakdown._\n\n'
  }

  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.map(escapeCell).join(' | ')} |`),
    ''
  ].join('\n')
}

function total(rows, key) {
  return rows.reduce((sum, row) => sum + Number(row[key] ?? 0), 0)
}

export function renderMarkdownReport(data) {
  const daily = data.daily ?? []
  const videos = data.videos ?? []
  const channelTitle = data.channel?.snippet?.title ?? 'Authorized channel'
  const channelId = data.channel?.id ?? 'Unavailable'
  const dailyRows = daily.map((row) => [
    row.day,
    row.views,
    row.estimatedMinutesWatched,
    row.averageViewDuration,
    row.averageViewPercentage,
    row.subscribersGained,
    row.subscribersLost,
    row.likes,
    row.comments,
    row.shares
  ])
  const videoRows = videos.slice(0, 20).map((row) => [
    row.title ?? row.video,
    row.publishedAt ?? '—',
    row.url ?? '—',
    row.views,
    row.estimatedMinutesWatched,
    row.averageViewDuration,
    row.averageViewPercentage,
    row.subscribersGained,
    row.subscribersLost,
    row.likes,
    row.comments,
    row.shares
  ])
  const periodRows = [
    'views',
    'estimatedMinutesWatched',
    'subscribersGained',
    'subscribersLost',
    'likes',
    'comments',
    'shares'
  ].map((key) => {
    const value = total(daily, key)
    return [key, value, daily.length === 0 ? '0.00' : (value / daily.length).toFixed(2)]
  })
  const breakdown = (title, key, rows) =>
    `### ${title}\n\n` +
    table(
      [key, 'Views', 'Watch minutes'],
      rows.map((row) => [row[key], row.views, row.estimatedMinutesWatched])
    )

  return (
    `# YouTube private channel data report\n\n` +
    `## Collection context\n\n` +
    `- **Channel:** ${escapeCell(channelTitle)} (${escapeCell(channelId)})\n` +
    `- **Date range:** ${data.dateRange.startDate} to ${data.dateRange.endDate} (UTC)\n` +
    `- **Collected:** ${data.collectedAt}\n` +
    `- **Data note:** YouTube Analytics can lag behind the current day.\n\n` +
    `## Channel trend\n\n` +
    `### Period totals and daily averages\n\n` +
    table(['Metric', 'Total', 'Daily average'], periodRows) +
    table(
      [
        'Day',
        'Views',
        'Watch minutes',
        'Avg duration (s)',
        'Avg viewed (%)',
        'Subs gained',
        'Subs lost',
        'Likes',
        'Comments',
        'Shares'
      ],
      dailyRows
    ) +
    `## Top videos\n\n` +
    table(
      [
        'Video',
        'Published (UTC)',
        'URL',
        'Views',
        'Watch minutes',
        'Avg duration (s)',
        'Avg viewed (%)',
        'Subs gained',
        'Subs lost',
        'Likes',
        'Comments',
        'Shares'
      ],
      videoRows
    ) +
    `## Discovery and audience context\n\n` +
    breakdown('Traffic sources', 'insightTrafficSourceType', data.trafficSources ?? []) +
    breakdown('Countries', 'country', data.countries ?? []) +
    breakdown('Device types', 'deviceType', data.devices ?? [])
  )
}

export async function fetchGoogleJson(url, accessToken, fetchImpl = fetch) {
  const response = await fetchImpl(url, {
    headers: { authorization: `Bearer ${accessToken}` }
  })
  const payload = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(
      `Google API request failed (${response.status}): ${payload.error?.message ?? 'Unknown error'}`
    )
  }

  return payload
}

export async function fetchAnalyticsRows({ accessToken, query, fetchImpl = fetch }) {
  const rows = []
  const maxResults = 200
  let startIndex = 1

  while (true) {
    const url = new URL(ANALYTICS_URL)
    const parameters = { ids: 'channel==MINE', ...query, maxResults, startIndex }

    for (const [key, value] of Object.entries(parameters)) {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value))
      }
    }

    const page = await fetchGoogleJson(url, accessToken, fetchImpl)
    const pageRows = normalizeAnalyticsRows(page)
    rows.push(...pageRows)

    if (pageRows.length === 0 || rows.length >= (page.totalResults ?? rows.length)) {
      return rows
    }

    startIndex += pageRows.length
  }
}

export async function getVideoMetadata({ accessToken, videoIds, fetchImpl = fetch }) {
  const metadata = new Map()

  for (let index = 0; index < videoIds.length; index += 50) {
    const ids = videoIds.slice(index, index + 50)
    const url = new URL(`${DATA_API_URL}/videos`)
    url.search = new URLSearchParams({ part: 'snippet', id: ids.join(',') }).toString()

    const response = await fetchGoogleJson(url, accessToken, fetchImpl)
    for (const item of response.items ?? []) {
      metadata.set(item.id, item)
    }
  }

  return metadata
}

export async function collectChannelData({ accessToken, dateRange, fetchImpl = fetch }) {
  const channelMetrics =
    'views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,' +
    'subscribersGained,subscribersLost,likes,comments,shares'
  const baseQuery = { ...dateRange, metrics: channelMetrics }
  const channelUrl = new URL(`${DATA_API_URL}/channels`)
  channelUrl.search = new URLSearchParams({ part: 'snippet,statistics', mine: 'true' }).toString()

  const [channelPayload, daily, videoRows, optionalResults] = await Promise.all([
    fetchGoogleJson(channelUrl, accessToken, fetchImpl),
    fetchAnalyticsRows({
      accessToken,
      query: { ...baseQuery, dimensions: 'day', sort: 'day' },
      fetchImpl
    }),
    fetchAnalyticsRows({
      accessToken,
      query: { ...baseQuery, dimensions: 'video', sort: '-views' },
      fetchImpl
    }),
    Promise.allSettled([
      fetchAnalyticsRows({
        accessToken,
        query: {
          ...dateRange,
          metrics: 'views,estimatedMinutesWatched',
          dimensions: 'insightTrafficSourceType',
          sort: '-views'
        },
        fetchImpl
      }),
      fetchAnalyticsRows({
        accessToken,
        query: {
          ...dateRange,
          metrics: 'views,estimatedMinutesWatched',
          dimensions: 'country',
          sort: '-views'
        },
        fetchImpl
      }),
      fetchAnalyticsRows({
        accessToken,
        query: {
          ...dateRange,
          metrics: 'views,estimatedMinutesWatched',
          dimensions: 'deviceType',
          sort: '-views'
        },
        fetchImpl
      })
    ])
  ])

  const metadata = await getVideoMetadata({
    accessToken,
    videoIds: videoRows.map((row) => row.video),
    fetchImpl
  })
  const videos = videoRows.map((row) => {
    const video = metadata.get(row.video)
    return {
      ...row,
      title: video?.snippet?.title ?? row.video,
      publishedAt: video?.snippet?.publishedAt,
      url: `https://www.youtube.com/watch?v=${row.video}`
    }
  })
  const [trafficSources, countries, devices] = optionalResults.map((result) =>
    result.status === 'fulfilled' ? result.value : []
  )

  return {
    channel: channelPayload.items?.[0] ?? null,
    dateRange,
    collectedAt: new Date().toISOString(),
    daily,
    videos,
    trafficSources,
    countries,
    devices
  }
}
