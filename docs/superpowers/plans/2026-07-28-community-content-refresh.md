# Community Content Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Add five source-reviewed Community stories to the matching FlyEnv locale pages and keep their structured data aligned with the visible data.

**Architecture:** Community pages import static locale-specific JSON. Add four non-Chinese records to the English dataset and one Chinese record to the Chinese dataset, retaining the Vue component so its filters, sort order, links, and score behavior stay unchanged. Replace each page's selected JSON-LD ItemList with the newly curated entries and canonical URLs.

**Tech Stack:** VitePress 1, Vue 3, static JSON, Node.js built-in test runner, Yarn.

---

## File Structure

- tests/community-content-refresh.test.mjs — exact-data and JSON-LD regression tests.
- docs/data/community-posts.json — add four English-page records.
- docs/data/community-posts-zh.json — add one Chinese-page record.
- docs/community.md — English ItemList JSON-LD.
- docs/zh/community.md — Chinese ItemList JSON-LD.

### Task 1: Write a failing curated-data regression test

**Files:**

- Create: tests/community-content-refresh.test.mjs

- [ ] **Step 1: Create the failing test file**

Create tests/community-content-refresh.test.mjs:

~~~js
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function readJson(path) {
  return JSON.parse(readFileSync(resolve(projectRoot, path), 'utf8'))
}

function pick(post) {
  return {
    id: post.id,
    title: post.title,
    url: post.url,
    author: post.author,
    platform: post.platform,
    language: post.language,
    date: post.date,
    tags: post.tags,
    featured: post.featured,
    quality_score: post.quality_score,
    relevance_score: post.relevance_score
  }
}

function expectPost(posts, expected) {
  const post = posts.find((item) => item.url === expected.url)
  assert.ok(post, 'missing ' + expected.url)
  assert.deepEqual(pick(post), expected)
  assert.ok(post.summary.length >= 80, 'summary should be useful and non-empty')
}

const englishPosts = [
  {
    id: 'mencoba-flyenv-setelah-lama-menggunakan-xampp',
    title: 'Mencoba FlyEnv Setelah Lama Menggunakan XAMPP',
    url: 'https://medium.com/@putusuthasatyawan/mencoba-flyenv-setelah-lama-menggunakan-xampp-e5f2980d8730',
    author: 'I Putu Sutha Satyawan',
    platform: 'Medium',
    language: 'id',
    date: '2026-07-26',
    tags: ['review', 'php', 'xampp', 'tutorial'],
    featured: false,
    quality_score: 95,
    relevance_score: 10
  },
  {
    id: 'why-i-finally-switched-from-laragon-to-flyenv',
    title: 'Why I Finally Switched from Laragon to FlyEnv After Years of Using It',
    url: 'https://medium.com/@rafy683/why-i-finally-switched-from-laragon-to-flyenv-after-years-of-using-it-21be77579963',
    author: 'Rafy Aulia Akbar',
    platform: 'Medium',
    language: 'en',
    date: '2026-07-26',
    tags: ['review', 'laravel', 'php', 'laragon'],
    featured: false,
    quality_score: 95,
    relevance_score: 10
  },
  {
    id: 'flyenv-on-linux-actually-fixed-my-php-version-headache',
    title: 'FlyEnv on Linux Actually Fixed My PHP Version Headache',
    url: 'https://medium.com/@azka.thoyyib/flyenv-on-linux-actually-fixed-my-php-version-headache-668de6216565',
    author: 'Azka Thoyyib',
    platform: 'Medium',
    language: 'en',
    date: '2026-07-19',
    tags: ['review', 'linux', 'php', 'laravel'],
    featured: false,
    quality_score: 95,
    relevance_score: 10
  },
  {
    id: 'flyenv-for-lightweight-local-development-on-linux',
    title: 'FlyEnv for Lightweight Local Development on Linux',
    url: 'https://www.linkedin.com/posts/hadiid-andri-yulison-984a69200_flyenv-webdevelopment-localenvironment-share-7469227528122007553-oCBY',
    author: 'Hadiid Andri Yulison',
    platform: 'LinkedIn',
    language: 'en',
    date: '2026-06-07',
    tags: ['review', 'linux', 'php', 'nodejs', 'postgresql'],
    featured: false,
    quality_score: 85,
    relevance_score: 10
  }
]

const chinesePost = {
  id: 'juejin-7666754297045614628',
  title: '环境管理神器flyenv',
  url: 'https://juejin.cn/post/7666754297045614628',
  author: '西雨东晴',
  platform: '掘金',
  language: 'zh',
  date: '2026-07-27',
  tags: ['tutorial', 'php', 'nodejs', 'docker'],
  featured: false,
  quality_score: 80,
  relevance_score: 9
}

test('English Community data contains the four selected reviewed stories', () => {
  const posts = readJson('docs/data/community-posts.json')
  for (const expected of englishPosts) expectPost(posts, expected)
})

test('Chinese Community data contains the selected reviewed story', () => {
  expectPost(readJson('docs/data/community-posts-zh.json'), chinesePost)
})
~~~

- [ ] **Step 2: Run the test before updating the datasets**

Run: node --test tests/community-content-refresh.test.mjs

Expected: FAIL with missing https://medium.com/@putusuthasatyawan/...; no selected URL exists in the static data yet.

### Task 2: Add the five reviewed static records

**Files:**

- Modify: docs/data/community-posts.json
- Modify: docs/data/community-posts-zh.json
- Test: tests/community-content-refresh.test.mjs

- [ ] **Step 1: Append the four English records**

Append four objects to docs/data/community-posts.json, all with cover: "", featured: false, and the title, URL, author, platform, language, date, tags, and scores declared in Task 1's englishPosts array.

| id | Neutral summary |
| --- | --- |
| mencoba-flyenv-setelah-lama-menggunakan-xampp | A PHP developer shares how trying FlyEnv changed a long-standing XAMPP workflow, with a focus on handling projects that need different PHP versions. |
| why-i-finally-switched-from-laragon-to-flyenv | A Laravel developer describes moving from a familiar Laragon setup to a FlyEnv workflow for PHP, PostgreSQL, and everyday project work. |
| flyenv-on-linux-actually-fixed-my-php-version-headache | A Linux Mint developer walks through managing legacy and current PHP projects alongside local services without repeated system-wide version changes. |
| flyenv-for-lightweight-local-development-on-linux | A Linux Mint developer shares a practical account of using FlyEnv with Laravel, Node.js, Golang, and PostgreSQL on an 8 GB laptop. |

Do not add seoTitle or seoSummary. The source title stays as the rendered title and the neutral summary stays as the rendered description.

- [ ] **Step 2: Append the Chinese record**

Append this exact object to docs/data/community-posts-zh.json:

~~~json
{
  "id": "juejin-7666754297045614628",
  "title": "环境管理神器flyenv",
  "url": "https://juejin.cn/post/7666754297045614628",
  "author": "西雨东晴",
  "platform": "掘金",
  "language": "zh",
  "date": "2026-07-27",
  "summary": "作者从维护多个不同运行时项目的日常场景出发，介绍了通过统一图形界面管理本地服务和项目环境的体验。",
  "tags": ["tutorial", "php", "nodejs", "docker"],
  "cover": "",
  "featured": false,
  "quality_score": 80,
  "relevance_score": 9
}
~~~

- [ ] **Step 3: Run the data test and commit**

Run: node --test tests/community-content-refresh.test.mjs

Expected: PASS for both data tests.

~~~bash
git add tests/community-content-refresh.test.mjs docs/data/community-posts.json docs/data/community-posts-zh.json
git commit -m "docs: add curated community stories"
~~~

### Task 3: Test and update the JSON-LD ItemLists

**Files:**

- Modify: tests/community-content-refresh.test.mjs
- Modify: docs/community.md
- Modify: docs/zh/community.md

- [ ] **Step 1: Add a failing JSON-LD alignment test**

Append the following test code to tests/community-content-refresh.test.mjs:

~~~js
function sourceFile(path) {
  return readFileSync(resolve(projectRoot, path), 'utf8')
}

function expectSchemaTerms(path, entries) {
  const source = sourceFile(path)
  for (const entry of entries) {
    for (const term of [entry.title, entry.url, entry.author, entry.platform, entry.date]) {
      assert.ok(source.includes(term), path + ' is missing JSON-LD term: ' + term)
    }
  }
}

test('English Community JSON-LD describes the four curated English entries', () => {
  expectSchemaTerms('docs/community.md', englishPosts)
})

test('Chinese Community JSON-LD describes the curated Chinese entry', () => {
  expectSchemaTerms('docs/zh/community.md', [chinesePost])
})
~~~

- [ ] **Step 2: Verify the JSON-LD test fails**

Run: node --test tests/community-content-refresh.test.mjs

Expected: the two new JSON-LD tests FAIL because neither current frontmatter ItemList includes the selected canonical URLs.

- [ ] **Step 3: Replace the English ItemList**

In the application/ld+json value in docs/community.md, replace the current three selected entries with these four entries in date order. Every item must retain the existing about object:

| Position | Headline | Publisher | Published | URL |
| --- | --- | --- | --- | --- |
| 1 | Mencoba FlyEnv Setelah Lama Menggunakan XAMPP | Medium | 2026-07-26 | https://medium.com/@putusuthasatyawan/mencoba-flyenv-setelah-lama-menggunakan-xampp-e5f2980d8730 |
| 2 | Why I Finally Switched from Laragon to FlyEnv After Years of Using It | Medium | 2026-07-26 | https://medium.com/@rafy683/why-i-finally-switched-from-laragon-to-flyenv-after-years-of-using-it-21be77579963 |
| 3 | FlyEnv on Linux Actually Fixed My PHP Version Headache | Medium | 2026-07-19 | https://medium.com/@azka.thoyyib/flyenv-on-linux-actually-fixed-my-php-version-headache-668de6216565 |
| 4 | FlyEnv for Lightweight Local Development on Linux | LinkedIn | 2026-06-07 | https://www.linkedin.com/posts/hadiid-andri-yulison-984a69200_flyenv-webdevelopment-localenvironment-share-7469227528122007553-oCBY |

Use the title, author, and neutral description defined in Task 1 and Task 2. Add each canonical URL with the JSON-LD url property. The author names must be I Putu Sutha Satyawan, Rafy Aulia Akbar, Azka Thoyyib, and Hadiid Andri Yulison in the same positions as the table.

- [ ] **Step 4: Replace the Chinese ItemList**

In the application/ld+json value in docs/zh/community.md, replace the current three selected entries with this single entry:

~~~json
{
  "@type": "ListItem",
  "position": 1,
  "item": {
    "@type": "TechArticle",
    "headline": "环境管理神器flyenv",
    "url": "https://juejin.cn/post/7666754297045614628",
    "description": "作者从维护多个不同运行时项目的日常场景出发，介绍了通过统一图形界面管理本地服务和项目环境的体验。",
    "author": { "@type": "Person", "name": "西雨东晴" },
    "publisher": { "@type": "Organization", "name": "掘金" },
    "datePublished": "2026-07-27",
    "about": {
      "@type": "SoftwareApplication",
      "name": "FlyEnv",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": ["macOS", "Windows", "Linux"]
    }
  }
}
~~~

- [ ] **Step 5: Run the full regression test and commit**

Run: node --test tests/community-content-refresh.test.mjs

Expected: PASS with four tests: two data assertions and two JSON-LD alignment assertions.

~~~bash
git add tests/community-content-refresh.test.mjs docs/community.md docs/zh/community.md
git commit -m "docs: align community article metadata"
~~~

### Task 4: Verify the built Community pages

**Files:**

- Verify: docs/data/community-posts.json
- Verify: docs/data/community-posts-zh.json
- Verify: docs/community.md
- Verify: docs/zh/community.md

- [ ] **Step 1: Parse both JSON datasets**

Run:

~~~bash
node -e "JSON.parse(require('fs').readFileSync('docs/data/community-posts.json','utf8')); JSON.parse(require('fs').readFileSync('docs/data/community-posts-zh.json','utf8')); console.log('Community JSON is valid')"
~~~

Expected: Community JSON is valid.

- [ ] **Step 2: Run all static regression tests explicitly**

Run: node --test tests/homepage-core-modules.test.mjs tests/community-content-refresh.test.mjs

Expected: the Community tests PASS. Record the known baseline failures in the homepage test: both Temporal CLI assertions are stale because the pages now link its demos; do not alter that unrelated behavior in this task.

- [ ] **Step 3: Build VitePress**

Run: yarn docs:build

Expected: VitePress completes successfully and writes the static site to docs/.vitepress/dist/.

- [ ] **Step 4: Inspect the generated locale pages**

Run:

~~~bash
rg -n "Mencoba FlyEnv Setelah Lama Menggunakan XAMPP|Why I Finally Switched from Laragon to FlyEnv After Years of Using It|FlyEnv on Linux Actually Fixed My PHP Version Headache|FlyEnv for Lightweight Local Development on Linux" docs/.vitepress/dist/community.html
rg -n "环境管理神器flyenv" docs/.vitepress/dist/zh/community.html
~~~

Expected: every selected title appears in its correct generated locale page.

- [ ] **Step 5: Preserve the user's unrelated staged task file**

Run: git status --short

Expected: only curated Community data, frontmatter, regression-test, and planning changes are added by this task. Preserve the pre-existing AM task/task88.md state.
