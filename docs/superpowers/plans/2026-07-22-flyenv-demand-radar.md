# FlyEnv Demand Radar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a repository-owned, evidence-driven content research system that discovers and scores current English-language developer needs across FlyEnv's full local-development scope, then completes one pilot research run without publishing speculative articles.

**Architecture:** Keep human-readable research data under `research/demand-radar/`, with JSON registries as the source of truth and Markdown templates/reports for editorial review. A dependency-free Node.js scoring and validation CLI enforces the approved evidence thresholds, product-fit gate, source diversity, and decision rules; external discovery tools remain read-only inputs and cannot publish content or mutate social accounts.

**Tech Stack:** Node.js 18+ built-in modules and test runner, JSON, Markdown, Yarn, Google Search Console exports, public web/GitHub/Reddit/Hacker News/YouTube sources

---

## Scope and file map

This plan implements the Demand Radar foundation and one research pilot. It deliberately does not create or rewrite public documentation pages. Any topic that passes the pilot becomes a separate, topic-specific content plan with its own technical verification and review.

**Create:**

- `scripts/demand-radar/score.mjs` - pure scoring and decision rules
- `scripts/demand-radar/schema.mjs` - registry validation and cross-reference checks
- `scripts/demand-radar/report.mjs` - deterministic Markdown topic report generation
- `scripts/demand-radar/cli.mjs` - file loading, validation, and report commands
- `scripts/demand-radar/__tests__/score.test.mjs` - score and decision tests
- `scripts/demand-radar/__tests__/schema.test.mjs` - schema and reference tests
- `scripts/demand-radar/__tests__/report.test.mjs` - report ordering and content tests
- `research/demand-radar/README.md` - weekly operating runbook
- `research/demand-radar/config/sources.json` - source priorities and known biases
- `research/demand-radar/config/query-packs.json` - change, action, and task-pillar query terms
- `research/demand-radar/templates/evidence-card.md` - normalized evidence capture template
- `research/demand-radar/templates/content-brief.md` - evidence-backed brief template
- `research/demand-radar/data/evidence.json` - normalized evidence registry
- `research/demand-radar/data/topics.json` - clustered topic and rating registry
- `research/demand-radar/data/pages.json` - published-page cohort registry
- `research/demand-radar/baselines/2026-07-22-gsc.md` - initial GSC baseline and data limitations
- `research/demand-radar/pilots/2026-07-22.md` - four-week operating schedule and 12-week checkpoints
- `research/demand-radar/audits/last30days.md` - pinned third-party tool audit and decision
- `research/demand-radar/runs/2026-07-22/source-coverage.md` - pilot source outcomes
- `research/demand-radar/runs/2026-07-22/shortlist.md` - pilot editorial decision record
- `research/demand-radar/reports/latest.md` - generated topic ranking

**Modify:**

- `package.json` - add Demand Radar test, validation, and report commands

## Task 1: Implement the scoring and decision rules

**Files:**

- Create: `scripts/demand-radar/score.mjs`
- Create: `scripts/demand-radar/__tests__/score.test.mjs`
- Test: `scripts/demand-radar/__tests__/score.test.mjs`

- [ ] **Step 1: Write the failing score tests**

Create `scripts/demand-radar/__tests__/score.test.mjs`:

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateScore, evaluateTopic } from '../score.mjs'

const fullRatings = {
  evidenceStrength: 5,
  painIntensity: 5,
  actionIntent: 5,
  productFit: 5,
  searchEntry: 5,
  competitionFeasibility: 5
}

const makeEvidence = (count, sources = ['reddit', 'github']) =>
  Array.from({ length: count }, (_, index) => ({
    id: `ev-${index + 1}`,
    source: sources[index % sources.length]
  }))

test('calculateScore returns 100 for maximum ratings', () => {
  assert.equal(calculateScore(fullRatings), 100)
})

test('calculateScore rejects a missing or out-of-range rating', () => {
  assert.throws(
    () => calculateScore({ ...fullRatings, productFit: 6 }),
    /productFit must be an integer from 0 to 5/
  )
})

test('evaluateTopic approves a high-scoring topic with five pieces of evidence from two sources', () => {
  const evidence = makeEvidence(5)
  const topic = {
    id: 'topic-runtime-switching',
    ratings: fullRatings,
    evidenceIds: evidence.map((item) => item.id),
    existingPage: null
  }

  assert.deepEqual(evaluateTopic(topic, evidence), {
    score: 100,
    evidenceCount: 5,
    sourceCount: 2,
    decision: 'new-page',
    reasons: ['score and evidence gates passed']
  })
})

test('evaluateTopic rejects a topic when product fit is below four', () => {
  const evidence = makeEvidence(5)
  const topic = {
    id: 'topic-kubernetes-production',
    ratings: { ...fullRatings, productFit: 3 },
    evidenceIds: evidence.map((item) => item.id),
    existingPage: null
  }

  assert.equal(evaluateTopic(topic, evidence).decision, 'reject')
  assert.deepEqual(evaluateTopic(topic, evidence).reasons, [
    'product fit must be at least 4'
  ])
})

test('evaluateTopic recommends an existing-page update with three evidence items and score at least 60', () => {
  const evidence = makeEvidence(3)
  const topic = {
    id: 'topic-local-https',
    ratings: {
      evidenceStrength: 3,
      painIntensity: 3,
      actionIntent: 4,
      productFit: 5,
      searchEntry: 3,
      competitionFeasibility: 3
    },
    evidenceIds: evidence.map((item) => item.id),
    existingPage: '/guide/getting-started.html'
  }

  assert.equal(evaluateTopic(topic, evidence).score, 72)
  assert.equal(evaluateTopic(topic, evidence).decision, 'update-existing')
})

test('evaluateTopic observes rather than inventing evidence for a new page', () => {
  const evidence = makeEvidence(4)
  const topic = {
    id: 'topic-new-workflow',
    ratings: fullRatings,
    evidenceIds: evidence.map((item) => item.id),
    existingPage: null
  }

  assert.equal(evaluateTopic(topic, evidence).decision, 'observe')
  assert.deepEqual(evaluateTopic(topic, evidence).reasons, [
    'new pages need at least 5 evidence items from 2 sources'
  ])
})
```

- [ ] **Step 2: Run the tests and verify the module is missing**

Run:

```bash
node --test scripts/demand-radar/__tests__/score.test.mjs
```

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `scripts/demand-radar/score.mjs`.

- [ ] **Step 3: Implement the minimal scoring module**

Create `scripts/demand-radar/score.mjs`:

```js
export const WEIGHTS = Object.freeze({
  evidenceStrength: 20,
  painIntensity: 15,
  actionIntent: 20,
  productFit: 20,
  searchEntry: 15,
  competitionFeasibility: 10
})

const validateRating = (key, value) => {
  if (!Number.isInteger(value) || value < 0 || value > 5) {
    throw new TypeError(`${key} must be an integer from 0 to 5`)
  }
}

export const calculateScore = (ratings) =>
  Object.entries(WEIGHTS).reduce((total, [key, weight]) => {
    const value = ratings?.[key]
    validateRating(key, value)
    return total + (value * weight) / 5
  }, 0)

export const evaluateTopic = (topic, evidence) => {
  const evidenceById = new Map(evidence.map((item) => [item.id, item]))
  const linkedEvidence = [...new Set(topic.evidenceIds)]
    .map((id) => evidenceById.get(id))
    .filter(Boolean)
  const score = calculateScore(topic.ratings)
  const evidenceCount = linkedEvidence.length
  const sourceCount = new Set(linkedEvidence.map((item) => item.source)).size

  const result = (decision, reasons) => ({
    score,
    evidenceCount,
    sourceCount,
    decision,
    reasons
  })

  if (topic.ratings.productFit < 4) {
    return result('reject', ['product fit must be at least 4'])
  }

  if (score < 45) {
    return result('reject', ['score is below 45'])
  }

  if (score >= 75 && evidenceCount >= 5 && sourceCount >= 2) {
    return result('new-page', ['score and evidence gates passed'])
  }

  if (score >= 60 && evidenceCount >= 3 && topic.existingPage) {
    return result('update-existing', [
      'existing page and update evidence gate passed'
    ])
  }

  if (score >= 75) {
    return result('observe', [
      'new pages need at least 5 evidence items from 2 sources'
    ])
  }

  return result('observe', ['collect more evidence before publishing'])
}
```

- [ ] **Step 4: Run the score tests**

Run:

```bash
node --test scripts/demand-radar/__tests__/score.test.mjs
```

Expected: 5 tests pass, 0 fail.

- [ ] **Step 5: Commit the scoring unit**

Run:

```bash
git add scripts/demand-radar/score.mjs scripts/demand-radar/__tests__/score.test.mjs
git commit -m "feat: add demand radar scoring rules"
```

Expected: the commit contains only the score module and its tests.

## Task 2: Validate evidence, topic, and page registries

**Files:**

- Create: `scripts/demand-radar/schema.mjs`
- Create: `scripts/demand-radar/__tests__/schema.test.mjs`
- Test: `scripts/demand-radar/__tests__/schema.test.mjs`

- [ ] **Step 1: Write the failing registry-validation tests**

Create `scripts/demand-radar/__tests__/schema.test.mjs`:

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { validateDatasets } from '../schema.mjs'

const evidenceRecord = {
  id: 'ev-2026-07-22-001',
  source: 'reddit',
  url: 'https://www.reddit.com/r/webdev/example',
  publishedAt: '2026-07-20',
  collectedAt: '2026-07-22',
  quote: 'I need a lighter local setup for several runtimes.',
  language: 'en',
  pillar: 'runtime-management',
  technologies: ['nodejs', 'python'],
  operatingSystems: ['macos'],
  currentApproach: ['docker-desktop'],
  job: 'Run two project runtimes locally',
  pain: 'The current environment consumes too much memory',
  trigger: 'A new multi-runtime project',
  desiredOutcome: 'One local interface for both runtimes',
  solutionsConsidered: ['native-installation'],
  searchLanguage: ['multiple local runtimes without Docker'],
  engagement: { score: 12, comments: 8 },
  flyenvFit: 'solves',
  notes: 'Public developer discussion'
}

const topicRecord = {
  id: 'topic-multi-runtime',
  title: 'Manage multiple local runtimes without Docker Desktop',
  pillar: 'runtime-management',
  evidenceIds: ['ev-2026-07-22-001'],
  ratings: {
    evidenceStrength: 2,
    painIntensity: 4,
    actionIntent: 4,
    productFit: 5,
    searchEntry: 3,
    competitionFeasibility: 3
  },
  status: 'candidate',
  existingPage: null
}

test('validateDatasets accepts consistent registries', () => {
  assert.deepEqual(
    validateDatasets({
      evidence: [evidenceRecord],
      topics: [topicRecord],
      pages: []
    }),
    []
  )
})

test('validateDatasets rejects duplicate evidence URLs', () => {
  const errors = validateDatasets({
    evidence: [
      evidenceRecord,
      { ...evidenceRecord, id: 'ev-2026-07-22-002' }
    ],
    topics: [
      {
        ...topicRecord,
        evidenceIds: ['ev-2026-07-22-001', 'ev-2026-07-22-002']
      }
    ],
    pages: []
  })

  assert.ok(errors.includes(`duplicate evidence url: ${evidenceRecord.url}`))
})

test('validateDatasets rejects missing topic references', () => {
  const errors = validateDatasets({
    evidence: [evidenceRecord],
    topics: [{ ...topicRecord, evidenceIds: ['ev-missing'] }],
    pages: []
  })

  assert.ok(
    errors.includes('topic topic-multi-runtime references missing evidence ev-missing')
  )
})

test('validateDatasets rejects invalid pillars and ratings', () => {
  const errors = validateDatasets({
    evidence: [{ ...evidenceRecord, pillar: 'php-only' }],
    topics: [
      {
        ...topicRecord,
        pillar: 'php-only',
        ratings: { ...topicRecord.ratings, productFit: 7 }
      }
    ],
    pages: []
  })

  assert.ok(errors.some((error) => error.includes('invalid pillar php-only')))
  assert.ok(errors.some((error) => error.includes('productFit must be 0-5')))
})
```

- [ ] **Step 2: Run the tests and verify the validator is missing**

Run:

```bash
node --test scripts/demand-radar/__tests__/schema.test.mjs
```

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `scripts/demand-radar/schema.mjs`.

- [ ] **Step 3: Implement registry validation**

Create `scripts/demand-radar/schema.mjs`:

```js
import { WEIGHTS } from './score.mjs'

export const PILLARS = Object.freeze([
  'runtime-management',
  'local-services',
  'network-access',
  'project-automation',
  'ai-local-automation',
  'compatibility-migration'
])

const TOPIC_STATUSES = new Set([
  'candidate',
  'observe',
  'approved',
  'rejected',
  'published'
])
const FIT_VALUES = new Set(['solves', 'partial', 'none'])
const nonEmptyString = (value) => typeof value === 'string' && value.trim() !== ''
const validDate = (value) =>
  /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value))

const duplicateValues = (values) => {
  const seen = new Set()
  return [...new Set(values.filter((value) => seen.size === seen.add(value).size))]
}

const validateStringFields = (record, fields, label, errors) => {
  for (const field of fields) {
    if (!nonEmptyString(record[field])) {
      errors.push(`${label} requires non-empty ${field}`)
    }
  }
}

const validateArrayFields = (record, fields, label, errors) => {
  for (const field of fields) {
    if (!Array.isArray(record[field])) {
      errors.push(`${label} requires array ${field}`)
    }
  }
}

export const validateDatasets = ({ evidence, topics, pages }) => {
  const errors = []

  if (!Array.isArray(evidence) || !Array.isArray(topics) || !Array.isArray(pages)) {
    return ['evidence, topics, and pages must all be arrays']
  }

  for (const duplicate of duplicateValues(evidence.map((item) => item.id))) {
    errors.push(`duplicate evidence id: ${duplicate}`)
  }
  for (const duplicate of duplicateValues(evidence.map((item) => item.url))) {
    errors.push(`duplicate evidence url: ${duplicate}`)
  }
  for (const duplicate of duplicateValues(topics.map((item) => item.id))) {
    errors.push(`duplicate topic id: ${duplicate}`)
  }
  for (const duplicate of duplicateValues(pages.map((item) => item.id))) {
    errors.push(`duplicate page id: ${duplicate}`)
  }

  const evidenceIds = new Set(evidence.map((item) => item.id))
  const topicIds = new Set(topics.map((item) => item.id))

  for (const item of evidence) {
    const label = `evidence ${item.id || '<missing-id>'}`
    validateStringFields(
      item,
      [
        'id',
        'source',
        'url',
        'publishedAt',
        'collectedAt',
        'quote',
        'language',
        'pillar',
        'job',
        'trigger',
        'desiredOutcome',
        'flyenvFit'
      ],
      label,
      errors
    )
    validateArrayFields(
      item,
      [
        'technologies',
        'operatingSystems',
        'currentApproach',
        'solutionsConsidered',
        'searchLanguage'
      ],
      label,
      errors
    )

    try {
      new URL(item.url)
    } catch {
      errors.push(`${label} has invalid url ${item.url}`)
    }
    if (!validDate(item.publishedAt) || !validDate(item.collectedAt)) {
      errors.push(`${label} requires YYYY-MM-DD dates`)
    }
    if (!PILLARS.includes(item.pillar)) {
      errors.push(`${label} has invalid pillar ${item.pillar}`)
    }
    if (!FIT_VALUES.has(item.flyenvFit)) {
      errors.push(`${label} has invalid flyenvFit ${item.flyenvFit}`)
    }
    if (
      typeof item.engagement !== 'object' ||
      item.engagement === null ||
      !Number.isFinite(item.engagement.score) ||
      !Number.isFinite(item.engagement.comments)
    ) {
      errors.push(`${label} requires numeric engagement score and comments`)
    }
  }

  for (const item of topics) {
    const label = `topic ${item.id || '<missing-id>'}`
    validateStringFields(item, ['id', 'title', 'pillar', 'status'], label, errors)
    validateArrayFields(item, ['evidenceIds'], label, errors)

    if (!PILLARS.includes(item.pillar)) {
      errors.push(`${label} has invalid pillar ${item.pillar}`)
    }
    if (!TOPIC_STATUSES.has(item.status)) {
      errors.push(`${label} has invalid status ${item.status}`)
    }
    if (item.existingPage !== null && !nonEmptyString(item.existingPage)) {
      errors.push(`${label} existingPage must be null or a non-empty path`)
    }
    for (const key of Object.keys(WEIGHTS)) {
      if (!Number.isInteger(item.ratings?.[key]) || item.ratings[key] < 0 || item.ratings[key] > 5) {
        errors.push(`${label} rating ${key} must be 0-5`)
      }
    }
    for (const evidenceId of item.evidenceIds || []) {
      if (!evidenceIds.has(evidenceId)) {
        errors.push(`${label} references missing evidence ${evidenceId}`)
      }
    }
  }

  for (const item of pages) {
    const label = `page ${item.id || '<missing-id>'}`
    validateStringFields(
      item,
      ['id', 'path', 'topicId', 'pillar', 'publishedAt'],
      label,
      errors
    )
    if (!topicIds.has(item.topicId)) {
      errors.push(`${label} references missing topic ${item.topicId}`)
    }
    if (!PILLARS.includes(item.pillar)) {
      errors.push(`${label} has invalid pillar ${item.pillar}`)
    }
    if (!validDate(item.publishedAt)) {
      errors.push(`${label} publishedAt must be YYYY-MM-DD`)
    }
    if (
      typeof item.baseline !== 'object' ||
      item.baseline === null ||
      !Number.isFinite(item.baseline.clicks) ||
      !Number.isFinite(item.baseline.impressions)
    ) {
      errors.push(`${label} requires numeric baseline clicks and impressions`)
    }
  }

  return errors
}
```

- [ ] **Step 4: Run the schema tests**

Run:

```bash
node --test scripts/demand-radar/__tests__/schema.test.mjs
```

Expected: 4 tests pass, 0 fail.

- [ ] **Step 5: Commit the validation unit**

Run:

```bash
git add scripts/demand-radar/schema.mjs scripts/demand-radar/__tests__/schema.test.mjs
git commit -m "feat: validate demand radar registries"
```

Expected: the commit contains only the schema module and tests.

## Task 3: Generate a deterministic editorial report

**Files:**

- Create: `scripts/demand-radar/report.mjs`
- Create: `scripts/demand-radar/cli.mjs`
- Create: `scripts/demand-radar/__tests__/report.test.mjs`
- Modify: `package.json`
- Test: `scripts/demand-radar/__tests__/report.test.mjs`

- [ ] **Step 1: Write the failing report test**

Create `scripts/demand-radar/__tests__/report.test.mjs`:

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { buildReport } from '../report.mjs'

const evidence = Array.from({ length: 8 }, (_, index) => ({
  id: `ev-${index + 1}`,
  source: index % 2 === 0 ? 'reddit' : 'github'
}))

const ratings = (productFit, searchEntry) => ({
  evidenceStrength: 5,
  painIntensity: 4,
  actionIntent: 5,
  productFit,
  searchEntry,
  competitionFeasibility: 4
})

test('buildReport sorts topics by score and includes decisions', () => {
  const topics = [
    {
      id: 'topic-lower',
      title: 'Lower priority topic',
      pillar: 'network-access',
      ratings: ratings(4, 2),
      evidenceIds: evidence.slice(0, 5).map((item) => item.id),
      existingPage: null
    },
    {
      id: 'topic-higher',
      title: 'Higher priority topic',
      pillar: 'runtime-management',
      ratings: ratings(5, 5),
      evidenceIds: evidence.slice(0, 5).map((item) => item.id),
      existingPage: null
    }
  ]

  const report = buildReport(topics, evidence, '2026-07-22')

  assert.match(report, /Generated: 2026-07-22/)
  assert.match(report, /Higher priority topic.*new-page/)
  assert.ok(report.indexOf('Higher priority topic') < report.indexOf('Lower priority topic'))
})
```

- [ ] **Step 2: Run the test and verify the report module is missing**

Run:

```bash
node --test scripts/demand-radar/__tests__/report.test.mjs
```

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `scripts/demand-radar/report.mjs`.

- [ ] **Step 3: Implement the report formatter**

Create `scripts/demand-radar/report.mjs`:

```js
import { evaluateTopic } from './score.mjs'

const escapeCell = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ')

export const buildReport = (topics, evidence, generatedAt) => {
  const ranked = topics
    .map((topic) => ({ topic, result: evaluateTopic(topic, evidence) }))
    .sort((left, right) => right.result.score - left.result.score)

  const lines = [
    '# FlyEnv Demand Radar Topic Report',
    '',
    `Generated: ${generatedAt}`,
    '',
    '| Rank | Topic | Pillar | Score | Evidence | Sources | Decision |',
    '| ---: | --- | --- | ---: | ---: | ---: | --- |'
  ]

  if (ranked.length === 0) {
    lines.push('| - | No topics collected | - | 0 | 0 | 0 | observe |')
  } else {
    ranked.forEach(({ topic, result }, index) => {
      lines.push(
        `| ${index + 1} | ${escapeCell(topic.title)} | ${topic.pillar} | ${result.score} | ${result.evidenceCount} | ${result.sourceCount} | ${result.decision} |`
      )
    })
  }

  lines.push('', 'A high score never overrides the product-fit or evidence gates.', '')
  return lines.join('\n')
}
```

- [ ] **Step 4: Implement the CLI**

Create `scripts/demand-radar/cli.mjs`:

```js
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { validateDatasets } from './schema.mjs'
import { buildReport } from './report.mjs'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(scriptDirectory, '../..')
const radarRoot = path.join(repositoryRoot, 'research/demand-radar')
const dataRoot = path.join(radarRoot, 'data')

const loadJson = (name) =>
  JSON.parse(fs.readFileSync(path.join(dataRoot, `${name}.json`), 'utf8'))

const loadDatasets = () => ({
  evidence: loadJson('evidence'),
  topics: loadJson('topics'),
  pages: loadJson('pages')
})

const validate = (datasets) => {
  const errors = validateDatasets(datasets)
  if (errors.length > 0) {
    for (const error of errors) console.error(`- ${error}`)
    process.exitCode = 1
    return false
  }

  console.log(
    `Demand Radar data valid: ${datasets.evidence.length} evidence, ${datasets.topics.length} topics, ${datasets.pages.length} pages.`
  )
  return true
}

const command = process.argv[2]
const datasets = loadDatasets()

if (command === 'validate') {
  validate(datasets)
} else if (command === 'report') {
  if (validate(datasets)) {
    const reportDirectory = path.join(radarRoot, 'reports')
    const reportPath = path.join(reportDirectory, 'latest.md')
    fs.mkdirSync(reportDirectory, { recursive: true })
    fs.writeFileSync(
      reportPath,
      buildReport(datasets.topics, datasets.evidence, new Date().toISOString().slice(0, 10))
    )
    console.log(`Wrote ${path.relative(repositoryRoot, reportPath)}`)
  }
} else {
  console.error('Usage: node scripts/demand-radar/cli.mjs <validate|report>')
  process.exitCode = 2
}
```

- [ ] **Step 5: Add package commands**

Add these scripts after `docs:zh:preview` in `package.json`:

```json
"docs:zh:preview": "vitepress preview docsZH",
"test:demand-radar": "node --test scripts/demand-radar/__tests__/*.test.mjs",
"demand-radar:check": "node scripts/demand-radar/cli.mjs validate",
"demand-radar:report": "node scripts/demand-radar/cli.mjs report"
```

- [ ] **Step 6: Run all unit tests**

Run:

```bash
yarn test:demand-radar
```

Expected: 10 tests pass, 0 fail.

- [ ] **Step 7: Commit the report and CLI unit**

Run:

```bash
git add package.json scripts/demand-radar/report.mjs scripts/demand-radar/cli.mjs scripts/demand-radar/__tests__/report.test.mjs
git commit -m "feat: report demand radar opportunities"
```

Expected: the commit adds the report CLI and package scripts without changing documentation pages.

## Task 4: Add the research configuration and editorial templates

**Files:**

- Create: `research/demand-radar/README.md`
- Create: `research/demand-radar/config/sources.json`
- Create: `research/demand-radar/config/query-packs.json`
- Create: `research/demand-radar/templates/evidence-card.md`
- Create: `research/demand-radar/templates/content-brief.md`

- [ ] **Step 1: Create the source-priority configuration**

Create `research/demand-radar/config/sources.json`:

```json
[
  {
    "id": "reddit",
    "priority": 1,
    "enabled": true,
    "use": "recommendations, switching intent, workflows, complaints",
    "bias": "technical and skeptical; vocal users are overrepresented"
  },
  {
    "id": "hacker-news",
    "priority": 1,
    "enabled": true,
    "use": "Ask HN, architecture tradeoffs, licensing and resource concerns",
    "bias": "senior technical users and first-principles objections are overrepresented"
  },
  {
    "id": "github",
    "priority": 1,
    "enabled": true,
    "use": "release regressions, compatibility failures, feature and migration requests",
    "bias": "problems are overrepresented; silent successful users are absent"
  },
  {
    "id": "youtube",
    "priority": 2,
    "enabled": true,
    "use": "tutorial confusion, setup questions, missing steps and edge cases",
    "bias": "viewers of the selected channels are not the whole market"
  },
  {
    "id": "product-hunt",
    "priority": 2,
    "enabled": true,
    "use": "evaluation questions, early-adopter objections and alternatives",
    "bias": "launch audiences skew toward early adopters"
  },
  {
    "id": "x",
    "priority": 3,
    "enabled": true,
    "use": "recent changes, emerging vocabulary and candidate leads",
    "bias": "engagement favors novelty and controversy; never use alone"
  },
  {
    "id": "google-search-console",
    "priority": 4,
    "enabled": true,
    "use": "validate search entry, page visibility, position and click response",
    "bias": "low-volume queries are anonymized"
  },
  {
    "id": "official-docs",
    "priority": 4,
    "enabled": true,
    "use": "verify releases, compatibility and technical claims",
    "bias": "documents product behavior, not user demand"
  }
]
```

- [ ] **Step 2: Create the change and task query packs**

Create `research/demand-radar/config/query-packs.json`:

```json
{
  "windowDays": {
    "primary": 30,
    "fallback": 90
  },
  "changeSignals": [
    "new release",
    "no longer works",
    "broke after update",
    "deprecated",
    "migration",
    "high memory",
    "licensing change",
    "security warning",
    "macOS",
    "Windows",
    "Linux",
    "WSL",
    "Homebrew"
  ],
  "actionSignals": [
    "how to set up",
    "how to fix",
    "recommend",
    "alternative",
    "switch from",
    "without Docker",
    "multiple versions",
    "self-host locally",
    "local development environment"
  ],
  "pillars": [
    {
      "id": "runtime-management",
      "terms": ["Node.js", "Python", "PHP", "Java", "Go", "Ruby", "Rust", ".NET", "runtime version manager"]
    },
    {
      "id": "local-services",
      "terms": ["MySQL", "PostgreSQL", "Redis", "MongoDB", "RabbitMQ", "MinIO", "Elasticsearch", "local database"]
    },
    {
      "id": "network-access",
      "terms": ["local HTTPS", "local domain", "reverse proxy", "port conflict", "Cloudflare Tunnel", "Nginx", "Caddy", "Apache"]
    },
    {
      "id": "project-automation",
      "terms": ["project environment variables", "startup command", "service group", "cron", "local logs", "multi-service project"]
    },
    {
      "id": "ai-local-automation",
      "terms": ["AI coding local stack", "MCP local development", "Ollama", "n8n", "Claude Code", "Codex", "local agent"]
    },
    {
      "id": "compatibility-migration",
      "terms": ["local development compatibility", "Apple Silicon", "Windows Defender", "WSL", "Homebrew upgrade", "runtime upgrade"]
    }
  ],
  "excludeSignals": [
    "production Kubernetes operations",
    "managed cloud hosting only",
    "generic AI news without a local development task",
    "cryptocurrency price discussion"
  ]
}
```

- [ ] **Step 3: Create the evidence-card template**

Create `research/demand-radar/templates/evidence-card.md`:

```markdown
# Evidence Card

- Evidence ID:
- Source:
- URL:
- Published date:
- Collected date:
- Exact public quote:
- Language:
- Task pillar:
- Technologies:
- Operating systems:
- Current approach:
- Job to be done:
- Pain or obstacle:
- Trigger event or recent change:
- Desired outcome:
- Solutions considered:
- Search language used by the developer:
- Engagement context:
- FlyEnv fit: solves / partial / none
- Source-bias notes:

Do not replace the exact quote with an AI paraphrase. Do not infer profile, operating system, technology, or motivation when the source does not establish it.
```

- [ ] **Step 4: Create the content-brief template**

Create `research/demand-radar/templates/content-brief.md`:

```markdown
# Evidence-Backed Content Brief

## Decision

- Topic ID:
- Radar score:
- Decision: new-page / update-existing
- Task pillar:
- Existing page, if any:

## Audience and task

- Target developer:
- Operating system and project context:
- Job to be done:
- Trigger event or recent change:
- Desired outcome:

## Evidence

- Independent evidence count:
- Source count:
- Representative quotes and URLs:
- Contradictions or minority views:
- Known source bias:

## Search intent

- Primary non-brand intent:
- Query language found in discussions:
- Existing SERP pattern:
- Search Console signal, if present:
- Cannibalization check:

## FlyEnv proof

- What FlyEnv solves:
- What FlyEnv only partly solves:
- Where FlyEnv is not the right solution:
- Required screenshots, commands, tests, or reproducible comparison:
- Product version used for verification:

## Proposed page

- Page type: workflow / problem-solution / migration / alternative / decision comparison
- Direct-answer opening:
- Section outline:
- Contextual CTA:
- Measurement cohort:
```

- [ ] **Step 5: Create the operating runbook**

Create `research/demand-radar/README.md` with these exact operating rules:

```markdown
# FlyEnv Demand Radar

This directory is the internal source of truth for evidence-driven English content research. It is not part of the public VitePress documentation tree.

## Weekly loop

1. Scan all six task pillars for changes and action-oriented discussions from the last 30 days; expand to 90 days only when current coverage is thin.
2. Capture public evidence with a short exact quote, URL, context, source bias, and FlyEnv fit.
3. Deduplicate reposts, syndicated copies, and multiple comments from the same underlying discussion.
4. Cluster evidence into topics and rate every scoring field from 0 to 5.
5. Run `yarn demand-radar:check` and `yarn demand-radar:report`.
6. Create at most 2-3 briefs from topics that pass the automated and editorial gates.
7. Publish nothing when no topic has enough evidence. Capacity is a ceiling, not a quota.
8. Review page cohorts after 2, 4, 8, and 12 weeks.

## Commands

```bash
yarn test:demand-radar
yarn demand-radar:check
yarn demand-radar:report
```

## Content balance

- Use roughly 80% of effort for current changes and developer tasks.
- Use roughly 20% for durable competitor, alternative, and migration content.
- Cover at least three task pillars in any rolling four-week window.
- Keep any single language or runtime below 35% in a rolling eight-week window.
- Include at least one genuine cross-stack workflow every two weeks.

## Safety and quality

- Treat inaccessible, rate-limited, or unconfigured sources as missing coverage, not as evidence of no discussion.
- Keep external research tools read-only.
- Never commit API keys, cookies, OAuth tokens, full private feedback, or personal data.
- Do not invent user quotes, product capabilities, benchmarks, or search demand.
- Verify every technical claim against the current FlyEnv product and upstream official documentation.
```

- [ ] **Step 6: Review and commit configuration and templates**

Run:

```bash
git diff --check
git diff -- research/demand-radar/README.md research/demand-radar/config research/demand-radar/templates
git add research/demand-radar/README.md research/demand-radar/config research/demand-radar/templates
git commit -m "docs: add demand radar research workflow"
```

Expected: the commit contains only the internal runbook, two configuration files, and two templates.

## Task 5: Seed registries and record the GSC baseline

**Files:**

- Create: `research/demand-radar/data/evidence.json`
- Create: `research/demand-radar/data/topics.json`
- Create: `research/demand-radar/data/pages.json`
- Create: `research/demand-radar/baselines/2026-07-22-gsc.md`
- Create: `research/demand-radar/pilots/2026-07-22.md`
- Create: `research/demand-radar/reports/latest.md`

- [ ] **Step 1: Create empty source-of-truth registries**

Create each of the following files with the exact content `[]` followed by a newline:

```text
research/demand-radar/data/evidence.json
research/demand-radar/data/topics.json
research/demand-radar/data/pages.json
```

- [ ] **Step 2: Record the screenshot-derived baseline without inventing hidden queries**

Create `research/demand-radar/baselines/2026-07-22-gsc.md`:

```markdown
# Google Search Console Baseline - 2026-07-22

Reporting window: 2026-06-24 through 2026-07-21 (last 28 days)

## Landing-page report totals

| Metric | Value |
| --- | ---: |
| Clicks | 1,224 |
| Impressions | 54,036 |
| CTR | 2.27% |
| Average position | 13.36 |

## Visible-query report totals

| Metric | Value |
| --- | ---: |
| Clicks | 710 |
| Impressions | 5,844 |
| CTR | 12.15% |
| Average position | 8.84 |

Google hid 514 clicks and 48,192 impressions from the query dimension. The visible query report is brand-heavy and cannot represent the site's real CTR.

The four visible brand queries `flyenv`, `fly env`, `flyenv download`, and `download flyenv` contributed 654 clicks. The exact visible non-brand baseline cannot be reconstructed from the screenshots because the remaining query rows were not exported. Do not invent that value. Use this file as the provisional baseline and add a query export before making a numeric claim about non-brand growth.

## Measurement rules

- Track visible non-brand queries as a lower bound.
- Track the research-led landing-page cohort as the second primary series.
- Do not use all-site CTR to evaluate the pilot.
- Treat the final day and one-day impression spikes as incomplete or unstable until confirmed in native Search Console.
```

- [ ] **Step 3: Create the four-week pilot schedule**

Create `research/demand-radar/pilots/2026-07-22.md`:

```markdown
# Demand Radar Pilot - 2026-07-22

## Operating weeks

| Week | Dates | Required output |
| --- | --- | --- |
| 1 | 2026-07-22 to 2026-07-28 | Foundation, source audit, first evidence run and shortlist |
| 2 | 2026-07-29 to 2026-08-04 | Second evidence run; create only qualified briefs |
| 3 | 2026-08-05 to 2026-08-11 | Third evidence run; first two-week cohort review |
| 4 | 2026-08-12 to 2026-08-18 | Fourth evidence run; four-week editorial retrospective |

Each weekly run uses `research/demand-radar/runs/<run-date>/` and the same evidence, validation, scoring, and shortlist gates. Future run dates are directories created when those runs actually occur; they are not pre-created by this foundation task.

## Four-week content guardrails

- Publish or deeply update no more than 8-12 pages.
- Cover at least three task pillars.
- Include at least two genuine cross-stack workflows.
- Include no more than two PHP-only pages.
- Include no more than two AI-trend-only pages.
- Publishing zero pages is valid when no topic passes the evidence and product-fit gates.

## Measurement checkpoints

| Checkpoint | Date | Decision |
| --- | --- | --- |
| 2 weeks | 2026-08-05 | Check indexing and initial impressions for any published cohort pages |
| 4 weeks | 2026-08-19 | Check query direction, pillar balance and average position |
| 8 weeks | 2026-09-16 | Continue only themes with credible search or user signal |
| 12 weeks | 2026-10-14 | Compare rolling 28-day visible non-brand clicks and cohort clicks with baseline |

## Pilot success criteria

- Every brief passes evidence and technical-verification gates.
- At least 60% of published cohort pages receive relevant non-brand impressions within 4-8 weeks.
- At least three topics reach average position 20 or better.
- At least one topic reaches average position 10 or better.
- Rolling 28-day visible non-brand clicks increase at least 30% by week 12 without relying on a one-day spike.

The visible non-brand baseline remains provisional until a Search Console query export is available. Report the cohort series independently and do not manufacture the missing baseline.
```

- [ ] **Step 4: Verify empty registries and generate the first report**

Run:

```bash
yarn demand-radar:check
yarn demand-radar:report
```

Expected output:

```text
Demand Radar data valid: 0 evidence, 0 topics, 0 pages.
Wrote research/demand-radar/reports/latest.md
```

Expected report table: one `No topics collected` row with decision `observe`.

- [ ] **Step 5: Commit the registries, baseline, and pilot schedule**

Run:

```bash
git add research/demand-radar/data research/demand-radar/baselines/2026-07-22-gsc.md research/demand-radar/pilots/2026-07-22.md research/demand-radar/reports/latest.md
git commit -m "docs: establish demand radar baseline"
```

Expected: the commit contains only the empty registries, provisional GSC baseline, pilot schedule, and generated empty report.

## Task 6: Audit `last30days` before any installation

**Files:**

- Create: `research/demand-radar/audits/last30days.md`

The audit target is `mvanhorn/last30days-skill` pinned to commit `01aef34ca49db1ccc9caaee72913760f4468f6c1`, whose `skills/last30days/SKILL.md` reports version `3.18.0` and MIT licensing as observed on 2026-07-22.

- [ ] **Step 1: Clone the pinned source into a temporary directory**

Run:

```bash
RADAR_AUDIT_DIR="$(mktemp -d)"
test -n "$RADAR_AUDIT_DIR"
git clone --filter=blob:none --no-checkout https://github.com/mvanhorn/last30days-skill.git "$RADAR_AUDIT_DIR/last30days-skill"
git -C "$RADAR_AUDIT_DIR/last30days-skill" checkout 01aef34ca49db1ccc9caaee72913760f4468f6c1
git -C "$RADAR_AUDIT_DIR/last30days-skill" rev-parse HEAD
```

Expected: the final output is exactly `01aef34ca49db1ccc9caaee72913760f4468f6c1`.

- [ ] **Step 2: Inventory executable code, manifests, and credential access**

Run:

```bash
rg --files "$RADAR_AUDIT_DIR/last30days-skill" | rg '(SKILL\.md|package.*json|requirements.*txt|pyproject\.toml|scripts/|hooks/|install)'
rg -n '(subprocess|os\.system|exec\(|spawn\(|fetch\(|requests\.|curl|wget|AUTH_TOKEN|CT0|API_KEY|PASSWORD|TOKEN)' "$RADAR_AUDIT_DIR/last30days-skill/scripts" "$RADAR_AUDIT_DIR/last30days-skill/hooks" "$RADAR_AUDIT_DIR/last30days-skill/skills/last30days/SKILL.md"
```

Expected: output identifies every executable entry point, outbound request mechanism, optional credential name, and subprocess invocation for manual review. A match is not automatically a failure; undocumented or unrelated access is.

- [ ] **Step 3: Record a concrete audit decision**

Create `research/demand-radar/audits/last30days.md` with:

- pinned repository URL, commit, version, and license;
- the exact executable files reviewed;
- network destinations and external services found;
- every environment variable or cookie name read;
- every file or directory the tool may write;
- subprocesses and package-install behavior;
- whether it can perform social write actions;
- the source-coverage limitations when credentials are absent;
- a final decision of `approved-read-only`, `approved-with-restrictions`, or `rejected`;
- restrictions that confine outputs to `research/demand-radar/runs/` and prohibit social write credentials.

Approval requires all executable paths and credential reads to be understood, no social write capability in the research path, no unreviewed install hook, and an acceptable MIT license. If any condition fails, record `rejected` and continue the pilot with direct public-source research.

- [ ] **Step 4: Remove the temporary audit clone safely**

Run:

```bash
test -n "$RADAR_AUDIT_DIR"
test "$RADAR_AUDIT_DIR" != "/"
rm -rf "$RADAR_AUDIT_DIR/last30days-skill"
rmdir "$RADAR_AUDIT_DIR"
```

Expected: only the temporary directory created in Step 1 is removed.

- [ ] **Step 5: Commit the audit artifact**

Run:

```bash
git add research/demand-radar/audits/last30days.md
git commit -m "docs: audit last30days research skill"
```

Expected: the commit contains the audit only. Do not install the skill in the same commit.

## Task 7: Run the first evidence-discovery pilot

**Files:**

- Modify: `research/demand-radar/data/evidence.json`
- Modify: `research/demand-radar/data/topics.json`
- Create: `research/demand-radar/runs/2026-07-22/source-coverage.md`
- Create: `research/demand-radar/runs/2026-07-22/shortlist.md`
- Modify: `research/demand-radar/reports/latest.md`

- [ ] **Step 1: Decide the discovery path from the audit**

Read `research/demand-radar/audits/last30days.md`.

- If the decision is `approved-read-only` or `approved-with-restrictions`, invoke the `skill-installer` skill and install the pinned repository revision through its supported workflow. Do not run a repository-provided install shell script.
- If the decision is `rejected`, use direct read-only searches of Reddit, Hacker News, GitHub, YouTube, X, official release notes, and the web.
- In either case, do not configure social write credentials, OAuth write scopes, webhooks, or account mutation.

- [ ] **Step 2: Run one discovery query per task pillar**

Use these six exact research prompts with the primary 30-day window and 90-day fallback:

```text
What are developers currently struggling with when installing, switching, or isolating local Node.js, Python, PHP, Java, Go, Ruby, Rust, and .NET runtime versions?

What are developers currently struggling with when running databases, caches, queues, search engines, and object storage locally for development?

What recent problems are developers discussing around local HTTPS, custom domains, reverse proxies, port conflicts, and secure tunnels?

What recent problems are developers discussing around multi-service project startup, environment variables, service groups, cron jobs, and local logs?

What new local-development needs are emerging from AI coding agents, MCP, Ollama, n8n, Claude Code, Codex, and local automation?

What recent macOS, Windows, Linux, WSL, Homebrew, security, and runtime updates have broken or changed local development workflows?
```

- [ ] **Step 3: Record source coverage before synthesizing**

Create `research/demand-radar/runs/2026-07-22/source-coverage.md`. For every attempted source, record:

- query or prompt used;
- time window;
- result count;
- outcome: `complete`, `no-results`, `partial`, `rate-limited`, `auth-failed`, `unreachable`, or `not-configured`;
- whether the source contributed evidence;
- any platform bias affecting interpretation.

Never translate `partial`, `rate-limited`, `auth-failed`, `unreachable`, or `not-configured` into “no one is discussing this.”

- [ ] **Step 4: Normalize and deduplicate the evidence registry**

Add public evidence records to `research/demand-radar/data/evidence.json` using the schema in Task 2. Use IDs in the form `ev-2026-07-22-001`, incrementing sequentially. Keep quotes short, exact, and necessary for analysis. Do not copy full posts, collect private messages, or include personal data that is irrelevant to the development task.

Treat the following as one evidence item:

- a post and its syndicated copy;
- a quote-post and the original when they express the same underlying problem;
- multiple comments from one user in one thread about one problem.

- [ ] **Step 5: Cluster and rate topics**

Add topic records to `research/demand-radar/data/topics.json`. Each topic must:

- describe a developer task or current change, not merely name a technology;
- link only to evidence IDs that support it;
- use one of the six approved pillar IDs;
- rate all six dimensions from 0 to 5;
- set `existingPage` to a real current path or `null`;
- start with status `candidate`.

Do not increase `evidenceStrength` because the same story has high engagement or appears in syndicated copies.

- [ ] **Step 6: Validate and generate the ranked report**

Run:

```bash
yarn demand-radar:check
yarn demand-radar:report
```

Expected: validation exits 0; `research/demand-radar/reports/latest.md` ranks every topic by score and displays `new-page`, `update-existing`, `observe`, or `reject`.

- [ ] **Step 7: Create the editorial shortlist without a publication quota**

Create `research/demand-radar/runs/2026-07-22/shortlist.md` with:

- the generated ranking copied by topic ID, not recomputed manually;
- the automated decision and editorial accept/reject decision;
- evidence count, source count, task pillar, and product-fit proof;
- proposed page type and existing-page check;
- diversity check across pillars, runtimes, PHP-only topics, AI-only topics, and cross-stack workflows;
- a clear `No qualified topics this run` conclusion when no candidate passes all gates.

Select no more than three briefs. Do not create public Markdown pages in `docs/` during this task.

- [ ] **Step 8: Commit the pilot research separately**

Run:

```bash
git diff --check
git diff -- research/demand-radar/data research/demand-radar/runs/2026-07-22 research/demand-radar/reports/latest.md
git add research/demand-radar/data research/demand-radar/runs/2026-07-22 research/demand-radar/reports/latest.md
git commit -m "docs: complete first demand radar research run"
```

Expected: the commit contains evidence citations, scored topics, coverage, shortlist, and generated report only.

## Task 8: Verify the foundation and hand off qualified topics

**Files:**

- Verify: all files under `scripts/demand-radar/`
- Verify: all files under `research/demand-radar/`
- Verify: `package.json`
- Verify: `docs/superpowers/specs/2026-07-22-flyenv-demand-radar-design.md`

- [ ] **Step 1: Run the complete Demand Radar verification**

Run:

```bash
yarn test:demand-radar
yarn demand-radar:check
yarn demand-radar:report
git diff --check
```

Expected:

- all 10 Node tests pass;
- registry validation exits 0;
- the report is regenerated successfully;
- `git diff --check` reports no whitespace errors.

- [ ] **Step 2: Verify that the public documentation still builds**

Run:

```bash
yarn docs:build
```

Expected: VitePress reports `build complete` and exits 0. The internal `research/` directory is not included in the public site output.

- [ ] **Step 3: Review repository boundaries and unrelated changes**

Run:

```bash
git status --short
git log --oneline -8
```

Expected: implementation commits contain only `scripts/demand-radar/`, `research/demand-radar/`, and the planned `package.json` script changes. Existing user-owned files such as `task/img.png` and `task/img_1.png` remain outside these commits.

- [ ] **Step 4: Create one follow-up plan per accepted topic**

For every topic accepted in `research/demand-radar/runs/2026-07-22/shortlist.md`, start a separate brainstorming and content-plan cycle using its evidence IDs and approved content-brief template. If no topic qualified, stop without creating content tasks and run the radar again at the next weekly interval.

- [ ] **Step 5: Commit any regenerated report change**

If Step 1 changed `research/demand-radar/reports/latest.md`, run:

```bash
git add research/demand-radar/reports/latest.md
git commit -m "docs: refresh demand radar report"
```

Expected: skip this commit when the report is unchanged.
