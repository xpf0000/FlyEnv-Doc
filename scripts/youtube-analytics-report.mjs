import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import {
  collectChannelData,
  renderMarkdownReport,
  resolveDateRange
} from './youtube-analytics/report-lib.mjs'
import {
  getAccessToken,
  parseOAuthClient,
  sanitizeOAuthError
} from './youtube-analytics/oauth.mjs'

const OPTION_NAMES = [
  '--client-secrets',
  '--days',
  '--start-date',
  '--end-date',
  '--output',
  '--token-file'
]

export function parseReportArgs(argv) {
  const options = {
    days: 90,
    output: 'reports/youtube',
    tokenFile: '.youtube-analytics/token.json'
  }

  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index]
    const value = argv[index + 1]

    if (!OPTION_NAMES.includes(option)) {
      throw new Error(`Unknown option: ${option}`)
    }
    if (!value || value.startsWith('--')) {
      throw new Error(`${option} requires a value`)
    }

    index += 1
    if (option === '--client-secrets') options.clientSecrets = value
    if (option === '--days') options.days = Number(value)
    if (option === '--start-date') options.startDate = value
    if (option === '--end-date') options.endDate = value
    if (option === '--output') options.output = value
    if (option === '--token-file') options.tokenFile = value
  }

  if (!options.clientSecrets) {
    throw new Error('--client-secrets is required')
  }

  resolveDateRange(options)
  return options
}

async function readOAuthClient(clientSecretsPath) {
  try {
    return parseOAuthClient(JSON.parse(await readFile(clientSecretsPath, 'utf8')))
  } catch {
    throw new Error('Could not read OAuth client configuration. Verify the private client JSON file.')
  }
}

export async function runReport(options) {
  const client = await readOAuthClient(options.clientSecrets)
  const accessToken = await getAccessToken({ client, tokenFile: options.tokenFile })
  const data = await collectChannelData({
    accessToken,
    dateRange: resolveDateRange(options)
  })
  const outputDirectory = join(
    options.output,
    data.collectedAt.replaceAll(':', '-').replaceAll('.', '-')
  )
  const jsonPath = join(outputDirectory, 'channel-data.json')
  const markdownPath = join(outputDirectory, 'channel-data.md')

  await mkdir(outputDirectory, { recursive: true })
  await writeFile(jsonPath, JSON.stringify(data, null, 2) + '\n', { mode: 0o600 })
  await writeFile(markdownPath, renderMarkdownReport(data), { mode: 0o600 })

  return { jsonPath, markdownPath, dateRange: data.dateRange }
}

async function main() {
  const result = await runReport(parseReportArgs(process.argv.slice(2)))
  console.log(
    `Created private channel report for ${result.dateRange.startDate} to ${result.dateRange.endDate}.`
  )
  console.log(`Markdown: ${result.markdownPath}`)
  console.log(`JSON: ${result.jsonPath}`)
}

if (basename(process.argv[1] ?? '') === 'youtube-analytics-report.mjs') {
  main().catch((error) => {
    console.error(`Could not generate YouTube report: ${sanitizeOAuthError(error)}`)
    process.exitCode = 1
  })
}
