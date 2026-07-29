import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = (path) => readFileSync(resolve(root, path), 'utf8')

function expectTerms(path, terms) {
  const value = source(path)
  for (const term of terms) assert.ok(value.includes(term), path + ' is missing ' + term)
}

test('manifest selects approved stories and direct guide paths', () => {
  expectTerms('docs/data/community-evidence.ts', [
    'mencoba-flyenv-setelah-lama-menggunakan-xampp',
    'why-i-finally-switched-from-laragon-to-flyenv',
    'flyenv-on-linux-actually-fixed-my-php-version-headache',
    'csdn-145736318',
    'juejin-7666754297045614628',
    'zhuangpenglong-macos-kai-fa-huan-jing-bu-shu-flyenv-ran',
    '/guide/flyenv-vs-docker-xampp.html',
    '/guide/project-level-runtime-environment.html',
    '/guide/manage-multiple-node-php-versions.html',
    '/guide/run-laravel-use-flyenv.html',
    '/zh/guide/flyenv-vs-docker-xampp.html',
    '/zh/guide/project-level-runtime-environment.html',
    '/zh/guide/manage-multiple-node-php-versions.html'
  ])
})

test('shared card keeps attribution and tracks both destinations', () => {
  expectTerms('docs/components/AppCommunityEvidence/StoryCard.vue', [
    'post.title',
    'post.author',
    'post.platform',
    'post.language',
    'post.date',
    'Read the original story',
    'trackEvidenceEvent',
    'community_story_source_click',
    'home_community_story_source_click',
    'guide_community_story_source_click',
    'community_story_guide_click',
    'home_community_story_guide_click'
  ])
})

test('story card anchors its action row to the shared card bottom', () => {
  expectTerms('docs/components/AppCommunityEvidence/StoryCard.vue', [
    'flex h-full flex-col',
    'mt-auto flex flex-wrap'
  ])
})

test('homepages use evidence, not generic testimonial components', () => {
  for (const path of ['docs/index.md', 'docs/zh/index.md']) {
    expectTerms(path, ['AppCommunityEvidence', 'communityEvidence'])
    assert.ok(!source(path).includes('AppCommentModules'), path + ' still imports AppCommentModules')
  }
})

test('homepage developer story heading matches the shared section heading treatment', () => {
  expectTerms('docs/components/AppCommunityEvidence/HomepageProof.vue', [
    'no-border',
    '!text-3xl',
    'md:!text-[40px]'
  ])
})

test('Community metadata, archive, and CTA are crawlable and accurate', () => {
  expectTerms('docs/community.md', [
    'title: FlyEnv Community Stories & Developer Tutorials',
    'rel: canonical',
    'hreflang: zh-CN',
    'AppCommunityScenarioMap',
    'communityEvidence.en',
    ':posts="posts"'
  ])
  expectTerms('docs/zh/community.md', [
    'title: FlyEnv 社区故事、教程与开发者评测',
    'rel: canonical',
    'hreflang: en',
    'AppCommunityScenarioMap',
    'communityEvidence.zh',
    ':posts="posts"'
  ])
  expectTerms('docs/components/AppCommunityCTA/index.vue', [
    "'/guide/about-license.html'",
    "'/zh/guide/about-license.html'",
    'posts:'
  ])
  const archive = source('docs/components/AppCommunityPosts/index.vue')
  assert.ok(!archive.includes('seoTitle || post.title'))
  assert.ok(!archive.includes('seoSummary || post.summary'))
  assert.ok(archive.includes('const showAll = ref(true)'))
})

test('only guides with direct scenario evidence render proof blocks', () => {
  const mapped = [
    'docs/guide/flyenv-vs-docker-xampp.md',
    'docs/guide/project-level-runtime-environment.md',
    'docs/guide/manage-multiple-node-php-versions.md',
    'docs/guide/run-laravel-use-flyenv.md',
    'docs/zh/guide/flyenv-vs-docker-xampp.md',
    'docs/zh/guide/project-level-runtime-environment.md',
    'docs/zh/guide/manage-multiple-node-php-versions.md'
  ]
  for (const path of mapped) expectTerms(path, ['AppGuideCommunityProof', 'communityEvidence'])
  for (const path of [
    'docs/guide/local-email-testing-mailpit.md',
    'docs/guide/cloudflare-tunnel-local-development.md',
    'docs/guide/build-local-offline-ai-agent.md'
  ]) assert.ok(!source(path).includes('AppGuideCommunityProof'), path + ' has unrelated proof')
})
