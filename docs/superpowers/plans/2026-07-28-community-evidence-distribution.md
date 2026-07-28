# Community Evidence Distribution Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Reuse verified public developer stories as source-backed evidence on Community, the English and Chinese homepages, and only the official guides that directly match the story.

**Architecture:** Existing locale JSON stays the source of author, URL, platform, date, title, and source summary. A new TypeScript manifest, keyed by post ID, contains FlyEnv's small editorial layer: scenario, neutral summary, official-guide links, and placement. Three compact Vue presentation components consume that shared manifest.

**Tech Stack:** VitePress 1, Vue 3 script setup, TypeScript, Tailwind CSS, Node built-in test runner, existing Google Analytics gtag.

---

## Selected stories and placement map

| Locale | Post ID | Scenario | Homepage | Guide proof blocks |
| --- | --- | --- | --- | --- |
| en | mencoba-flyenv-setelah-lama-menggunakan-xampp | Moving from XAMPP | yes | FlyEnv vs Docker & XAMPP |
| en | why-i-finally-switched-from-laragon-to-flyenv | Moving from Laragon | yes | FlyEnv vs Docker & XAMPP; Run Laravel |
| en | flyenv-on-linux-actually-fixed-my-php-version-headache | Linux and multiple PHP versions | yes | Project Isolation; Manage Node/PHP Versions |
| zh | csdn-145736318 | 从 Docker 与 XAMPP 迁移 | yes | FlyEnv vs Docker & XAMPP |
| zh | juejin-7666754297045614628 | 多项目运行时与本地服务 | yes | 项目级环境隔离；管理多个 Node/PHP 版本 |
| zh | zhuangpenglong-macos-kai-fa-huan-jing-bu-shu-flyenv-ran | macOS 多运行时开发 | yes | none in V1 |

Do not add blocks to Mailpit, Cloudflare Tunnel, or Offline AI Agent in this release. The existing public records do not substantiate those exact workflows.

## Files

| Path | Change |
| --- | --- |
| docs/data/community-evidence.ts | Create the locale-specific editorial manifest and lookup helpers. |
| docs/components/AppCommunityEvidence/types.ts | Create shared source-post and evidence types. |
| docs/components/AppCommunityEvidence/track.ts | Create SSR-safe click-event helper. |
| docs/components/AppCommunityEvidence/StoryCard.vue | Create one attributed card used in all three locations. |
| docs/components/AppCommunityEvidence/HomepageProof.vue | Create the three-story homepage trust section. |
| docs/components/AppCommunityEvidence/ScenarioMap.vue | Create Community's intent-led story map. |
| docs/components/AppCommunityEvidence/GuideProof.vue | Create a compact matching-guide proof block. |
| docs/index.md; docs/zh/index.md | Replace AppComment imports and usage. |
| docs/community.md; docs/zh/community.md | Add title/canonical/alternate metadata and scenario map. |
| docs/components/AppCommunityPosts/index.vue | Keep original title/summary and server-render all archive records. |
| docs/components/AppCommunityCTA/index.vue | Derive counts from posts and correct its license CTA. |
| Seven mapped guide Markdown files | Add only their selected proof block. |
| tests/community-evidence-distribution.test.mjs | Create source-level regression coverage. |

### Task 1: Lock the editorial contract with a failing test

**Files:**
- Create: tests/community-evidence-distribution.test.mjs
- Test: tests/community-evidence-distribution.test.mjs

- [ ] **Step 1: Write the failing test**

Create tests/community-evidence-distribution.test.mjs:

~~~js
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

test('homepages use evidence, not generic testimonial components', () => {
  for (const path of ['docs/index.md', 'docs/zh/index.md']) {
    expectTerms(path, ['AppCommunityEvidence', 'communityEvidence'])
    assert.ok(!source(path).includes('AppCommentModules'), path + ' still imports AppCommentModules')
  }
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
~~~

- [ ] **Step 2: Run the test to verify the baseline**

Run:

~~~bash
node --test tests/community-evidence-distribution.test.mjs
~~~

Expected: FAIL because the manifest and components do not exist and both homepages still import AppCommentModules.

- [ ] **Step 3: Commit the test**

~~~bash
git add tests/community-evidence-distribution.test.mjs
git commit -m "test: define community evidence distribution"
~~~

### Task 2: Create the editorial manifest, types, and analytics helper

**Files:**
- Create: docs/components/AppCommunityEvidence/types.ts
- Create: docs/data/community-evidence.ts
- Create: docs/components/AppCommunityEvidence/track.ts
- Test: tests/community-evidence-distribution.test.mjs

- [ ] **Step 1: Add the types**

Create docs/components/AppCommunityEvidence/types.ts:

~~~ts
export type CommunityLocale = 'en' | 'zh'
export type CommunityPlacement = 'home' | 'community-hero' | 'guide'

export interface CommunityPost {
  id: string
  title: string
  url: string
  author: string
  platform: string
  language: string
  date: string
  summary: string
  tags: string[]
}

export interface CommunityEvidence {
  postId: string
  locale: CommunityLocale
  scenario: string
  useCases: string[]
  editorialSummary: string
  relatedGuides: string[]
  featuredPlacements: CommunityPlacement[]
}
~~~

- [ ] **Step 2: Add the complete manifest**

Create docs/data/community-evidence.ts:

~~~ts
import type { CommunityEvidence, CommunityLocale, CommunityPlacement, CommunityPost } from '../components/AppCommunityEvidence/types'

export const communityEvidence: Record<CommunityLocale, CommunityEvidence[]> = {
  en: [
    {
      postId: 'mencoba-flyenv-setelah-lama-menggunakan-xampp',
      locale: 'en',
      scenario: 'Moving from XAMPP',
      useCases: ['xampp-migration', 'multiple-runtime-versions'],
      editorialSummary: 'A PHP developer describes moving from a long-standing XAMPP workflow and handling projects that need different PHP versions.',
      relatedGuides: ['/guide/flyenv-vs-docker-xampp.html', '/guide/project-level-runtime-environment.html'],
      featuredPlacements: ['home', 'community-hero', 'guide']
    },
    {
      postId: 'why-i-finally-switched-from-laragon-to-flyenv',
      locale: 'en',
      scenario: 'Moving from Laragon',
      useCases: ['laragon-migration', 'laravel-local-development'],
      editorialSummary: 'A Laravel developer describes moving from Laragon to a FlyEnv workflow for PHP, PostgreSQL, and everyday project work.',
      relatedGuides: ['/guide/flyenv-vs-docker-xampp.html', '/guide/run-laravel-use-flyenv.html'],
      featuredPlacements: ['home', 'community-hero', 'guide']
    },
    {
      postId: 'flyenv-on-linux-actually-fixed-my-php-version-headache',
      locale: 'en',
      scenario: 'Linux and multiple PHP versions',
      useCases: ['linux-local-development', 'multiple-runtime-versions'],
      editorialSummary: 'A Linux Mint developer explains how they manage legacy and current PHP projects alongside local services without repeated system-wide version changes.',
      relatedGuides: ['/guide/project-level-runtime-environment.html', '/guide/manage-multiple-node-php-versions.html'],
      featuredPlacements: ['home', 'community-hero', 'guide']
    }
  ],
  zh: [
    {
      postId: 'csdn-145736318',
      locale: 'zh',
      scenario: '从 Docker 与 XAMPP 迁移',
      useCases: ['docker-alternative', 'xampp-migration'],
      editorialSummary: '一位开发者从本地服务、运行时版本和跨平台使用场景出发，分享了 FlyEnv 作为 Docker 与 XAMPP 替代方案的体验。',
      relatedGuides: ['/zh/guide/flyenv-vs-docker-xampp.html'],
      featuredPlacements: ['home', 'community-hero', 'guide']
    },
    {
      postId: 'juejin-7666754297045614628',
      locale: 'zh',
      scenario: '多项目运行时与本地服务',
      useCases: ['multiple-runtime-versions', 'local-services'],
      editorialSummary: '作者分享了用统一图形界面安装运行时、按项目切换版本、管理本地服务、配置站点并查看日志的实际场景。',
      relatedGuides: ['/zh/guide/project-level-runtime-environment.html', '/zh/guide/manage-multiple-node-php-versions.html'],
      featuredPlacements: ['home', 'community-hero', 'guide']
    },
    {
      postId: 'zhuangpenglong-macos-kai-fa-huan-jing-bu-shu-flyenv-ran',
      locale: 'zh',
      scenario: 'macOS 多运行时开发',
      useCases: ['macos-local-development', 'multiple-runtime-versions'],
      editorialSummary: '一位 macOS 开发者介绍了在一个桌面环境中管理 Web 服务、数据库和多版本语言运行时的本地开发体验。',
      relatedGuides: ['/zh/guide/manage-multiple-node-php-versions.html'],
      featuredPlacements: ['home', 'community-hero']
    }
  ]
}

export function getEvidencePost(posts: CommunityPost[], evidence: CommunityEvidence) {
  const post = posts.find((item) => item.id === evidence.postId)
  if (!post) throw new Error('Missing community post: ' + evidence.postId)
  return post
}

export function getPlacementEvidence(locale: CommunityLocale, placement: CommunityPlacement) {
  return communityEvidence[locale].filter((item) => item.featuredPlacements.includes(placement))
}
~~~

- [ ] **Step 3: Add the SSR-safe event helper**

Create docs/components/AppCommunityEvidence/track.ts:

~~~ts
type EvidenceEvent =
  | 'community_story_source_click'
  | 'community_story_guide_click'
  | 'home_community_story_source_click'
  | 'home_community_story_guide_click'
  | 'guide_community_story_source_click'
  | 'community_hub_click'

type Gtag = (command: 'event', name: EvidenceEvent, parameters: Record<string, string>) => void

export function trackEvidenceEvent(eventName: EvidenceEvent, postId: string, placement: string) {
  if (typeof window === 'undefined') return
  const gtag = (window as typeof window & { gtag?: Gtag }).gtag
  gtag?.('event', eventName, { post_id: postId, placement })
}
~~~

- [ ] **Step 4: Run the focused test**

Run:

~~~bash
node --test tests/community-evidence-distribution.test.mjs
~~~

Expected: manifest test passes; card, homepage, Community, and guide tests still fail.

- [ ] **Step 5: Commit**

~~~bash
git add docs/components/AppCommunityEvidence/types.ts docs/components/AppCommunityEvidence/track.ts docs/data/community-evidence.ts
git commit -m "feat: add community evidence manifest"
~~~

### Task 3: Build reusable evidence cards and three placement wrappers

**Files:**
- Create: docs/components/AppCommunityEvidence/StoryCard.vue
- Create: docs/components/AppCommunityEvidence/HomepageProof.vue
- Create: docs/components/AppCommunityEvidence/ScenarioMap.vue
- Create: docs/components/AppCommunityEvidence/GuideProof.vue
- Test: tests/community-evidence-distribution.test.mjs

- [ ] **Step 1: Implement StoryCard with attribution and both click paths**

Create StoryCard.vue with these props and event selection:

~~~ts
const props = defineProps<{
  post: CommunityPost
  evidence: CommunityEvidence
  locale: CommunityLocale
  placement: 'community' | 'home' | 'guide'
  guidePath?: string
  compact?: boolean
}>()

const sourceEvent = computed(() => props.placement === 'home'
  ? 'home_community_story_source_click'
  : props.placement === 'guide'
    ? 'guide_community_story_source_click'
    : 'community_story_source_click')

const guideEvent = computed(() => props.placement === 'home'
  ? 'home_community_story_guide_click'
  : 'community_story_guide_click')
~~~

Its template must render exactly these source facts: evidence.scenario, post.title, evidence.editorialSummary, post.author, post.platform, post.language, and a locale-formatted post.date. Use `&#123;&#123; post.author &#125;&#125; · &#123;&#123; post.platform &#125;&#125; · &#123;&#123; post.language.toUpperCase() &#125;&#125; · &#123;&#123; formattedDate &#125;&#125;` for the attribution line. Its source link is post.url with target _blank and rel noopener noreferrer; its click handler calls trackEvidenceEvent(sourceEvent, post.id, placement). Render the related-guide link only when guidePath is set and call trackEvidenceEvent(guideEvent, post.id, placement).

Use the following literal labels in the template:

~~~ts
en: { original: 'Read the original story', guide: 'See the related guide' }
zh: { original: '阅读原文', guide: '查看相关指南' }
~~~

Use Tailwind utilities for a bordered rounded card. Do not include star ratings, anonymous text, or an unverified quote.

- [ ] **Step 2: Implement HomepageProof**

HomepageProof receives posts, evidence, and locale. It filters evidence by home placement, resolves the three posts with getEvidencePost, and renders three StoryCard components with placement home and the first related-guide path.

Use these exact copy values:

~~~ts
en: {
  title: 'How Developers Use FlyEnv',
  subtitle: 'Public stories from developers using FlyEnv across local PHP, Laravel, Linux, and multi-service workflows.',
  hub: 'Explore all developer stories',
  hubPath: '/community.html'
}
zh: {
  title: '开发者如何使用 FlyEnv',
  subtitle: '来自 PHP、Laravel、Linux 与多服务本地开发场景的公开开发者故事。',
  hub: '查看全部开发者故事',
  hubPath: '/zh/community.html'
}
~~~

The hub link calls trackEvidenceEvent('community_hub_click', 'homepage', 'home').

- [ ] **Step 3: Implement ScenarioMap and GuideProof**

ScenarioMap receives posts, evidence, and locale, filters community-hero placement, and renders a scenario heading plus StoryCard placement community for every selected item. It uses the first related-guide path. Copy:

~~~ts
en: {
  title: 'How developers use FlyEnv',
  subtitle: 'Explore public stories by the local-development problem each developer was solving.'
}
zh: {
  title: '开发者如何使用 FlyEnv',
  subtitle: '按开发者实际解决的本地开发问题浏览公开故事。'
}
~~~

GuideProof receives posts, evidence, locale, postId, and guidePath. It finds the matching manifest record. If none exists, render no markup. If it exists, render a heading and one compact StoryCard placement guide without a related-guide link, because the page itself is already that guide. Its headings are From the community and 来自社区的真实使用场景.

- [ ] **Step 4: Run test**

Run:

~~~bash
node --test tests/community-evidence-distribution.test.mjs
~~~

Expected: shared-card test passes; page integration tests still fail.

- [ ] **Step 5: Commit**

~~~bash
git add docs/components/AppCommunityEvidence
git commit -m "feat: add reusable community evidence cards"
~~~

### Task 4: Replace homepage testimonial blocks

**Files:**
- Modify: docs/index.md:61-85
- Modify: docs/zh/index.md:59-82
- Test: tests/community-evidence-distribution.test.mjs

- [ ] **Step 1: Replace the English imports and component**

In docs/index.md, replace the AppCommentModules import with:

~~~vue
import AppCommunityEvidence from './components/AppCommunityEvidence/HomepageProof.vue';
import communityPosts from './data/community-posts.json';
import { communityEvidence } from './data/community-evidence';
~~~

Replace the AppCommentModules element with:

~~~vue
<AppCommunityEvidence :posts="communityPosts" :evidence="communityEvidence.en" locale="en" />
~~~

- [ ] **Step 2: Replace the Chinese imports and component**

In docs/zh/index.md, replace the AppCommentModules import with:

~~~vue
import AppCommunityEvidence from '../components/AppCommunityEvidence/HomepageProof.vue'
import communityPosts from '../data/community-posts-zh.json'
import { communityEvidence } from '../data/community-evidence'
~~~

Replace the AppCommentModules element with:

~~~vue
<AppCommunityEvidence :posts="communityPosts" :evidence="communityEvidence.zh" locale="zh" />
~~~

- [ ] **Step 3: Test and commit**

Run:

~~~bash
node --test tests/community-evidence-distribution.test.mjs
git add docs/index.md docs/zh/index.md
git commit -m "feat: show sourced community proof on homepages"
~~~

Expected: homepage test passes and both stale testimonial imports are gone. Do not delete AppComment files in this release; leave removal to a separate cleanup change.

### Task 5: Make Community pages intent-led, crawlable, and accurately linked

**Files:**
- Modify: docs/community.md:1-30
- Modify: docs/zh/community.md:1-30
- Modify: docs/components/AppCommunityPosts/index.vue
- Modify: docs/components/AppCommunityCTA/index.vue
- Test: tests/community-evidence-distribution.test.mjs
- Test: tests/community-content-refresh.test.mjs

- [ ] **Step 1: Add English page metadata and scenario map**

Add this frontmatter field to docs/community.md:

~~~yaml
title: FlyEnv Community Stories & Developer Tutorials
~~~

Add these entries to its existing head list before JSON-LD:

~~~yaml
- - link
  - rel: canonical
    href: https://www.flyenv.com/community.html
- - link
  - rel: alternate
    hreflang: en
    href: https://www.flyenv.com/community.html
- - link
  - rel: alternate
    hreflang: zh-CN
    href: https://www.flyenv.com/zh/community.html
~~~

Add imports and render order:

~~~vue
import AppCommunityScenarioMap from './components/AppCommunityEvidence/ScenarioMap.vue'
import { communityEvidence } from './data/community-evidence'

<AppCommunityScenarioMap :posts="posts" :evidence="communityEvidence.en" locale="en" />
<AppCommunityPosts :posts="posts" locale="en" />
<AppCommunityCTA :posts="posts" locale="en" />
~~~

- [ ] **Step 2: Add Chinese metadata and scenario map**

Add this title to docs/zh/community.md:

~~~yaml
title: FlyEnv 社区故事、教程与开发者评测
~~~

Add these head entries:

~~~yaml
- - link
  - rel: canonical
    href: https://www.flyenv.com/zh/community.html
- - link
  - rel: alternate
    hreflang: en
    href: https://www.flyenv.com/community.html
- - link
  - rel: alternate
    hreflang: zh-CN
    href: https://www.flyenv.com/zh/community.html
~~~

Use ../components/AppCommunityEvidence/ScenarioMap.vue, ../data/community-evidence, communityEvidence.zh, and pass posts to AppCommunityCTA.

- [ ] **Step 3: Preserve source language and render all archive records**

In AppCommunityPosts/index.vue:

1. Replace all post.seoTitle || post.title and featuredPost.seoTitle || featuredPost.title expressions with .title.
2. Replace all post.seoSummary || post.summary and featuredPost.seoSummary || featuredPost.summary expressions with .summary.
3. Change const showAll = ref(false) to const showAll = ref(true).
4. Remove the Load More button wrapper because remaining posts now render in initial SSR HTML.
5. Replace the English hero subtitle with: Explore public stories from developers who use FlyEnv for migration, multiple runtimes, local services, Laravel, and cross-platform work.
6. Replace the Chinese hero subtitle with: 浏览开发者使用 FlyEnv 迁移环境、管理多版本运行时、本地服务与跨平台项目的公开故事。
7. Add `post.language.toUpperCase()` next to the date in each archive card's existing attribution/meta row, including the featured, latest/popular, compact Docker/PHP, remaining, and filtered variants.

Keep filters and the existing JSON-LD ItemList. All its selected records remain visible in the now-complete archive.

- [ ] **Step 4: Derive CTA statistics and correct its destination**

In AppCommunityCTA/index.vue, add `import { computed } from 'vue'` and replace the current props and static counts with:

~~~ts
const props = defineProps<{
  locale?: 'en' | 'zh'
  posts: Array<{ author: string; language: string; platform: string }>
}>()

const isZh = props.locale === 'zh'
const stats = computed(() => ({
  authors: new Set(props.posts.map((post) => post.author).filter(Boolean)).size,
  languages: new Set(props.posts.map((post) => post.language)).size,
  platforms: new Set(props.posts.map((post) => post.platform)).size
}))
const licensePath = computed(() => isZh ? '/zh/guide/about-license.html' : '/guide/about-license.html')
~~~

Replace the CTA anchor with:

~~~vue
<a :href="licensePath" class="cta-btn no-underline">
  {{ isZh ? '了解内容贡献与许可证' : 'Learn about community contributions and licensing' }}
</a>
~~~

Render stats.authors, stats.languages, and stats.platforms in the footer. Remove Feedback, AsyncComponentShow, and showFeedback because the CTA no longer opens feedback.

- [ ] **Step 5: Test and commit**

Run:

~~~bash
node --test tests/community-evidence-distribution.test.mjs tests/community-content-refresh.test.mjs
~~~

Expected: all Community tests pass.

~~~bash
git add docs/community.md docs/zh/community.md docs/components/AppCommunityPosts/index.vue docs/components/AppCommunityCTA/index.vue
git commit -m "feat: make community stories easier to discover"
~~~

### Task 6: Add only direct-match guide proof blocks

**Files:**
- Modify: docs/guide/flyenv-vs-docker-xampp.md
- Modify: docs/guide/project-level-runtime-environment.md
- Modify: docs/guide/manage-multiple-node-php-versions.md
- Modify: docs/guide/run-laravel-use-flyenv.md
- Modify: docs/zh/guide/flyenv-vs-docker-xampp.md
- Modify: docs/zh/guide/project-level-runtime-environment.md
- Modify: docs/zh/guide/manage-multiple-node-php-versions.md
- Test: tests/community-evidence-distribution.test.mjs

- [ ] **Step 1: Add guide imports after frontmatter**

Use this block in every English guide:

~~~vue
<script setup>
import AppGuideCommunityProof from '../components/AppCommunityEvidence/GuideProof.vue'
import communityPosts from '../data/community-posts.json'
import { communityEvidence } from '../data/community-evidence'
</script>
~~~

Use this block in every Chinese guide:

~~~vue
<script setup>
import AppGuideCommunityProof from '../../components/AppCommunityEvidence/GuideProof.vue'
import communityPosts from '../../data/community-posts-zh.json'
import { communityEvidence } from '../../data/community-evidence'
</script>
~~~

- [ ] **Step 2: Insert these English blocks immediately before Next Steps**

~~~vue
<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.en" locale="en" post-id="mencoba-flyenv-setelah-lama-menggunakan-xampp" guide-path="/guide/flyenv-vs-docker-xampp.html" />
<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.en" locale="en" post-id="flyenv-on-linux-actually-fixed-my-php-version-headache" guide-path="/guide/project-level-runtime-environment.html" />
<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.en" locale="en" post-id="flyenv-on-linux-actually-fixed-my-php-version-headache" guide-path="/guide/manage-multiple-node-php-versions.html" />
<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.en" locale="en" post-id="why-i-finally-switched-from-laragon-to-flyenv" guide-path="/guide/run-laravel-use-flyenv.html" />
~~~

Place the four lines in the four English files in the same order as the file list. The guidePath must match its containing page.

- [ ] **Step 3: Insert these Chinese blocks immediately before 下一步**

~~~vue
<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.zh" locale="zh" post-id="csdn-145736318" guide-path="/zh/guide/flyenv-vs-docker-xampp.html" />
<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.zh" locale="zh" post-id="juejin-7666754297045614628" guide-path="/zh/guide/project-level-runtime-environment.html" />
<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.zh" locale="zh" post-id="juejin-7666754297045614628" guide-path="/zh/guide/manage-multiple-node-php-versions.html" />
~~~

Place the three lines in the three Chinese files in the same order as the file list. Do not import the proof component in non-mapped guides.

- [ ] **Step 4: Test and commit**

Run:

~~~bash
node --test tests/community-evidence-distribution.test.mjs
~~~

Expected: mapped guide test passes and Mailpit, Cloudflare Tunnel, and Offline AI Agent remain free of an unrelated proof component.

~~~bash
git add docs/guide/flyenv-vs-docker-xampp.md docs/guide/project-level-runtime-environment.md docs/guide/manage-multiple-node-php-versions.md docs/guide/run-laravel-use-flyenv.md docs/zh/guide/flyenv-vs-docker-xampp.md docs/zh/guide/project-level-runtime-environment.md docs/zh/guide/manage-multiple-node-php-versions.md
git commit -m "docs: add matched community proof to guides"
~~~

### Task 7: Verify built output and preserve unrelated staged files

**Files:**
- Verify: docs/.vitepress/dist/index.html
- Verify: docs/.vitepress/dist/zh/index.html
- Verify: docs/.vitepress/dist/community.html
- Verify: docs/.vitepress/dist/zh/community.html
- Verify: mapped guide HTML files

- [ ] **Step 1: Run all regression tests**

Run:

~~~bash
node --test tests/community-content-refresh.test.mjs tests/community-evidence-distribution.test.mjs tests/homepage-core-modules.test.mjs
~~~

Expected: Community-content and community-evidence suites pass. Record any known unrelated homepage-core failure exactly; do not change unrelated module behavior to make it pass.

- [ ] **Step 2: Build the site**

Run:

~~~bash
yarn docs:build
~~~

Expected: exit code 0 and generated files in docs/.vitepress/dist.

- [ ] **Step 3: Inspect Community metadata and SSR story content**

Run:

~~~bash
rg -F -n '<title>FlyEnv Community Stories &amp; Developer Tutorials | FlyEnv</title>' docs/.vitepress/dist/community.html
rg -F -n 'rel="canonical"' docs/.vitepress/dist/community.html
rg -F -n 'hreflang="zh-CN"' docs/.vitepress/dist/community.html
rg -F -n 'Mencoba FlyEnv Setelah Lama Menggunakan XAMPP' docs/.vitepress/dist/community.html
rg -F -n 'FlyEnv on Linux Actually Fixed My PHP Version Headache' docs/.vitepress/dist/community.html
rg -F -n '<title>FlyEnv 社区故事、教程与开发者评测 | FlyEnv</title>' docs/.vitepress/dist/zh/community.html
rg -F -n 'rel="canonical"' docs/.vitepress/dist/zh/community.html
rg -F -n 'hreflang="en"' docs/.vitepress/dist/zh/community.html
rg -F -n '环境管理神器flyenv' docs/.vitepress/dist/zh/community.html
rg -F -n 'macOS开发环境部署' docs/.vitepress/dist/zh/community.html
~~~

Expected: both pages contain their title, canonical/alternate tags, and all selected locale stories before client interaction.

- [ ] **Step 4: Inspect homepage and guide proof placements**

Run:

~~~bash
rg -n "How Developers Use FlyEnv|Mencoba FlyEnv Setelah Lama Menggunakan XAMPP|Why I Finally Switched from Laragon to FlyEnv After Years of Using It" docs/.vitepress/dist/index.html
rg -n "开发者如何使用 FlyEnv|环境管理神器flyenv|macOS开发环境部署" docs/.vitepress/dist/zh/index.html
rg -n "From the community|Mencoba FlyEnv Setelah Lama Menggunakan XAMPP" docs/.vitepress/dist/guide/flyenv-vs-docker-xampp.html
rg -n "来自社区的真实使用场景|环境管理神器flyenv" docs/.vitepress/dist/zh/guide/project-level-runtime-environment.html
~~~

Expected: each rendered proof includes attribution and an original-source URL.

- [ ] **Step 5: Verify the task commits and preserve existing staged files**

Run:

~~~bash
git status --short
git log --oneline -6
~~~

Expected: Task 1 through Task 6 each have their own commit, and the only remaining staged files are the pre-existing task/img.png, task/img_1.png, and task/img_2.png files. Do not run git add on those files.
