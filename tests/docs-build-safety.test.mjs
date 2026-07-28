import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = (path) => readFileSync(resolve(root, path), 'utf8')

test('community evidence plan keeps Vue interpolation examples as literal documentation', () => {
  const plan = source('docs/superpowers/plans/2026-07-28-community-evidence-distribution.md')
  assert.ok(
    plan.includes('`&#123;&#123; post.author &#125;&#125; · &#123;&#123; post.platform &#125;&#125; · &#123;&#123; post.language.toUpperCase() &#125;&#125; · &#123;&#123; formattedDate &#125;&#125;`')
  )
})
