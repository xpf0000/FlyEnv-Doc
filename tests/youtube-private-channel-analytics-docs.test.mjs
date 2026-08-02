import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceFile = (path) => readFileSync(resolve(root, path), 'utf8')

test('English YouTube analytics guide keeps credentials and reports private', () => {
  const source = sourceFile('docs/guide/youtube-private-channel-analytics.md')
  for (const term of [
    'yarn youtube:report',
    'yt-analytics.readonly',
    'youtube.readonly',
    'Google Cloud',
    'Do not commit'
  ]) {
    assert.ok(source.includes(term), `English guide should include ${term}`)
  }
})

test('Chinese YouTube analytics guide keeps credentials and reports private', () => {
  const source = sourceFile('docs/zh/guide/youtube-private-channel-analytics.md')
  for (const term of [
    'yarn youtube:report',
    'yt-analytics.readonly',
    'youtube.readonly',
    'Google Cloud',
    '不要提交'
  ]) {
    assert.ok(source.includes(term), `Chinese guide should include ${term}`)
  }
})
