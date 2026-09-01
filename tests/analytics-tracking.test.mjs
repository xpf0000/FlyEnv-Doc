import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8')

test('analytics helper is SSR-safe and sends a consistent event context', () => {
  const source = read('docs/utils/analytics.ts')

  assert.match(source, /typeof window === ['"]undefined['"]\s*\)\s*return/)
  assert.match(source, /typeof analyticsWindow\.gtag !== ['"]function['"]\s*\)\s*return/)
  assert.match(source, /gtag\(['"]event['"],\s*eventName/)
  for (const parameter of ['page_path', 'page_type', 'locale', 'os', 'target']) {
    assert.match(source, new RegExp(parameter))
  }
})

test('download button tracks click and browser download events with release metadata', () => {
  const source = read('docs/components/AppDownButton/index.vue')

  assert.match(source, /trackEvent\(['"]download_click['"]/)
  assert.match(source, /trackEvent\(['"]download_start['"]/)
  assert.match(source, /release_file/)
  assert.match(source, /target:\s*downloadUrl/)
})

test('theme installs delegated tracking for homepage navigation links', () => {
  const source = read('docs/.vitepress/theme/index.js')

  assert.match(source, /trackEvent/)
  assert.match(source, /anchor\.hasAttribute\(['"]download['"]\)/)
  for (const eventName of ['github_click', 'video_click', 'guide_click', 'solution_click', 'license_click']) {
    assert.match(source, new RegExp(eventName))
  }
})

test('community evidence events use the shared analytics context', () => {
  const source = read('docs/components/AppCommunityEvidence/track.ts')

  assert.match(source, /import\s+\{\s*trackEvent\s*\}/)
  assert.match(source, /trackEvent\(eventName,\s*\{\s*post_id/)
})

test('analytics context identifies Indonesian and Demos routes', () => {
  const source = read('docs/utils/analytics.ts')

  assert.match(source, /if \(pathname === '\/id' \|\| pathname\.startsWith\('\/id\/'\)\) return 'id'/)
  assert.match(source, /pathname\.includes\('\/demos'\).*return 'demos'/s)
})
