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
