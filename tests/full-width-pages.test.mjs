import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const pageFiles = [
  'docs/compare/index.md',
  'docs/compare/xampp.md',
  'docs/compare/laragon.md',
  'docs/compare/mamp.md',
  'docs/compare/herd.md',
  'docs/compare/servbay.md',
  'docs/compare/docker.md',
  'docs/features.md',
  'docs/solutions/laravel.md',
  'docs/solutions/wordpress.md',
  'docs/zh/compare/index.md',
  'docs/zh/compare/xampp.md',
  'docs/zh/compare/laragon.md',
  'docs/zh/compare/mamp.md',
  'docs/zh/compare/herd.md',
  'docs/zh/compare/servbay.md',
  'docs/zh/compare/docker.md',
  'docs/zh/features.md',
  'docs/zh/solutions/laravel.md',
  'docs/id/compare/index.md',
  'docs/id/compare/xampp.md',
  'docs/id/compare/laragon.md',
  'docs/id/compare/mamp.md',
  'docs/id/compare/herd.md',
  'docs/id/compare/servbay.md',
  'docs/id/compare/docker.md',
  'docs/id/features.md',
  'docs/id/solutions/laravel.md',
  'docs/es/compare/index.md',
  'docs/es/compare/xampp.md',
  'docs/es/compare/laragon.md',
  'docs/es/compare/mamp.md',
  'docs/es/compare/herd.md',
  'docs/es/compare/servbay.md',
  'docs/es/compare/docker.md',
  'docs/es/features.md',
  'docs/es/solutions/laravel.md'
]

test('custom full-width pages use the page layout without VitePress content padding', async () => {
  const pages = await Promise.all(pageFiles.map(async (file) => [file, await readFile(file, 'utf8')]))

  for (const [file, source] of pages) {
    assert.match(source, /^layout: page$/m, file)
    assert.doesNotMatch(source, /^layout: home$/m, file)
  }
})

test('custom full-width component roots do not depend on viewport-width offsets', async () => {
  const componentFiles = [
    'docs/components/CompareIndexPage.vue',
    'docs/components/ComparisonLoopPage.vue',
    'docs/components/XamppComparisonPage.vue',
    'docs/components/DockerComparisonPage.vue',
    'docs/components/ServBayComparisonPage.vue',
    'docs/components/LaravelSolutionPage.vue',
    'docs/components/WordPressSolutionPage.vue',
    'docs/features.md'
  ]
  const sources = await Promise.all(componentFiles.map(async (file) => [file, await readFile(file, 'utf8')]))

  for (const [file, source] of sources) {
    assert.doesNotMatch(source, /(?:left-1\/2|50vw) w-screen|w-screen[^\n]*(?:left-1\/2|50vw)/, file)
  }
})
