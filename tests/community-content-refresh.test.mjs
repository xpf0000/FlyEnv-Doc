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

const newEnglishPosts = [
  {
    id: 'fahdilabib-flyenv-ram-lightweight-local-development',
    title: 'Pengalaman Nyata Menggunakan FlyEnv: Menyelamatkan RAM Laptop dari Beban Berat Local Development',
    url: 'https://fahdilabib.com/pengalaman-nyata-menggunakan-flyenv-menyelamatkan-ram-laptop-dari-beban-berat-local-development/',
    author: 'Fahdi Labib',
    platform: 'Blog',
    language: 'id',
    date: '2026-09-01',
    tags: ['case-study', 'php', 'docker', 'xampp'],
    featured: false,
    quality_score: 100,
    relevance_score: 10
  },
  {
    id: 'goharabbas321-flyenv-modern-local-development-full-stack',
    title: 'FlyEnv: A Modern Local Development Environment for Full-Stack Developers',
    url: 'https://medium.com/@goharabbas321/flyenv-a-modern-local-development-environment-for-full-stack-developers-d1661b18f488',
    author: 'Gohar Abbas',
    platform: 'Medium',
    language: 'en',
    date: '2026-09-01',
    tags: ['review', 'php', 'nodejs', 'ai'],
    featured: false,
    quality_score: 85,
    relevance_score: 10
  },
  {
    id: 'mufaizabd-xampp-docker-to-flyenv',
    title: 'I Used XAMPP and Docker for Years — Now I Fully Use FlyEnv',
    url: 'https://medium.com/@mufaizabd/i-used-xampp-and-docker-for-years-now-i-fully-use-flyenv-71bb92d3a141',
    author: 'Muhammad Faiz',
    platform: 'Medium',
    language: 'id',
    date: '2026-08-28',
    tags: ['review', 'php', 'docker', 'xampp'],
    featured: false,
    quality_score: 95,
    relevance_score: 10
  },
  {
    id: 'kiki-six-months-flyenv-multi-project-dashboard',
    title: 'Sharing: 6 Bulan Pakai FlyEnv & Tips Kelola Banyak Project Disatu Site untuk Pengguna',
    url: 'https://blog.kiki.my.id/tips-kelola-banyak-project-disatu-site-untuk-pengguna/',
    author: 'kiki',
    platform: "Miftakhuddin's Blog",
    language: 'id',
    date: '2026-08-23',
    tags: ['case-study', 'php', 'nodejs'],
    featured: false,
    quality_score: 95,
    relevance_score: 10
  },
  {
    id: 'taufantritama-flyenv-modern-local-development',
    title: 'Selamat Tinggal XAMPP: Mengapa FlyEnv Adalah Masa Depan Local Development bagi Developer Modern',
    url: 'https://medium.com/@taufantritama.unu/selamat-tinggal-xampp-mengapa-flyenv-adalah-masa-depan-local-development-bagi-developer-modern-07126edffd93',
    author: 'Taufantritama Unu',
    platform: 'Medium',
    language: 'id',
    date: '2026-08-24',
    tags: ['comparison', 'php', 'xampp', 'nodejs'],
    featured: false,
    quality_score: 90,
    relevance_score: 10
  },
  {
    id: 'elmandayp-flyenv-xampp-laragon-alternative',
    title: 'FlyEnv: Alternatif Lokal Server Terbaik Pengganti XAMPP dan Laragon',
    url: 'https://elmandayp.com/flyenv-alternatif-lokal-server-terbaik-pengganti-xampp-dan-laragon/',
    author: 'elmandayp',
    platform: 'Blog',
    language: 'id',
    date: '2026-08-21',
    tags: ['comparison', 'php', 'xampp', 'laragon'],
    featured: false,
    quality_score: 95,
    relevance_score: 10
  }
]

test('Community data contains the newly verified English and Indonesian stories', () => {
  const posts = readJson('docs/data/community-posts.json')
  for (const expected of newEnglishPosts) expectPost(posts, expected)
})

const newChinesePosts = [
  {
    id: 'toutiao-7680435277819314739',
    title: '一个人的古籍站，我是怎么用 FlyEnv 把本地开发环境理顺的',
    url: 'https://www.toutiao.com/article/7680435277819314739/',
    author: '',
    platform: '今日头条',
    language: 'zh',
    date: '2026-09-01',
    tags: ['case-study', 'php', 'postgresql', 'nodejs'],
    featured: false,
    quality_score: 95,
    relevance_score: 10
  },
  {
    id: 'zhihu-2075241562318152899',
    title: 'FlyEnv 使用体验：一款省心的本地开发环境管理工具',
    url: 'https://zhuanlan.zhihu.com/p/2075241562318152899',
    author: '啊哈',
    platform: '知乎',
    language: 'zh',
    date: '2026-08-24',
    tags: ['review', 'php', 'nodejs'],
    featured: false,
    quality_score: 90,
    relevance_score: 10
  },
  {
    id: 'csdn-164155021',
    title: 'FlyEnv：把 Java 开发环境，从“配置两小时“变成“点击三下“',
    url: 'https://blog.csdn.net/zbsxcc/article/details/164155021',
    author: 'zbsxcc',
    platform: 'CSDN',
    language: 'zh',
    date: '2026-08-29',
    tags: ['tutorial', 'java'],
    featured: false,
    quality_score: 85,
    relevance_score: 9
  }
]

test('Chinese Community data contains the newly verified stories', () => {
  const posts = readJson('docs/data/community-posts-zh.json')
  for (const expected of newChinesePosts) expectPost(posts, expected)
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

test('Community JSON-LD includes the newly verified stories', () => {
  expectSchemaTerms('docs/community.md', newEnglishPosts)
  expectSchemaTerms('docs/zh/community.md', newChinesePosts)
})

test('community evidence keeps exactly three fresh stories on each localized homepage', () => {
  const source = sourceFile('docs/data/community-evidence.ts')
  for (const ids of [
    ['goharabbas321-flyenv-modern-local-development-full-stack', 'mufaizabd-xampp-docker-to-flyenv', 'kiki-six-months-flyenv-multi-project-dashboard'],
    ['toutiao-7680435277819314739', 'zhihu-2075241562318152899', 'csdn-164155021'],
    ['fahdilabib-flyenv-ram-lightweight-local-development', 'mufaizabd-xampp-docker-to-flyenv', 'kiki-six-months-flyenv-multi-project-dashboard']
  ]) {
    for (const id of ids) assert.match(source, new RegExp(`postId: '${id}'[\\s\\S]*?featuredPlacements: \\['home'`))
  }
  assert.equal((source.match(/featuredPlacements: \['home'/g) || []).length, 9)
})
