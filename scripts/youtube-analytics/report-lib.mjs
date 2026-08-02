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
