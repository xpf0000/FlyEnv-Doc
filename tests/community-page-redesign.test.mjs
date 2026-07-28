import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

const read = (path) => readFileSync(resolve(process.cwd(), path), 'utf8')

for (const page of ['docs/community.md', 'docs/zh/community.md']) {
  test(`${page} composes the editorial community library`, () => {
    const source = read(page)
    assert.match(source, /import AppCommunityPosts/)
    assert.match(source, /<AppCommunityPosts :posts="posts"/)
    assert.match(source, /<AppCommunityChannels title=/)
    assert.match(source, /<AppCommunityCTA :posts="posts"/)
    assert.doesNotMatch(source, /AppCommunityScenarioMap/)
  })
}

test('the post library has the editorial interaction hooks', () => {
  const source = read('docs/components/AppCommunityPosts/index.vue')
  for (const hook of ['community-library', 'story-masthead', 'aria-pressed', 'showMore']) {
    assert.ok(source.includes(hook), `missing ${hook}`)
  }
})
