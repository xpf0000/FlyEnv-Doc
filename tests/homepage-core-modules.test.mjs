import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function sourceFile(path) {
  return readFileSync(resolve(projectRoot, path), 'utf8')
}

function escapeRegExp(value) {
  return value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function expectVideoCard(source, card) {
  const moduleClass = escapeRegExp('shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]')
  const pattern =
    '<a\\s+title="' +
    escapeRegExp(card.title) +
    '"\\s+href="' +
    escapeRegExp(card.href) +
    '"\\s+target="_blank"\\s+' +
    'class="group hover:scale-105 transition-all duration-300 relative no-underline overflow-hidden rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"\\s*>' +
    '[\\s\\S]*?<span class="' +
    escapeRegExp(card.categoryClass) +
    '">' +
    escapeRegExp(card.category) +
    '</span>' +
    '[\\s\\S]*?<div class="' +
    escapeRegExp(card.iconClass) +
    '">\\s*<img src="../SVG/' +
    escapeRegExp(card.icon) +
    '.svg" />' +
    '[\\s\\S]*?<span class="' +
    moduleClass +
    '">' +
    escapeRegExp(card.moduleName) +
    '</span>' +
    '[\\s\\S]*?<SVGUse class="w-16 opacity-20 transition-all duration-300 group-hover:opacity-65" :svg="import\\(\'../SVG/play.svg\\?raw\'\\)" />'

  assert.match(source, new RegExp(pattern))
}

const englishCards = [
  ['Native Local ClickHouse in 2 Minutes (No Docker, No Config) - FlyEnv', 'https://youtu.be/3ePJYddWYmQ', 'Database', 'ClickHouse', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4', 'ClickHouse'],
  ['Temporal Local Development in One Click — FlyEnv Native Service', 'https://youtu.be/E_jetPnVxBo', 'Service Governance', 'Temporal', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4', 'Temporal', true],
  ['Elasticsearch Local Setup with FlyEnv | Versions, Logs, and Service Controls', 'https://youtu.be/B9Eo2Y-aXWQ', 'Search Engine', 'Elasticsearch', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6', 'Elasticsearch'],
  ['Qdrant Local Setup in FlyEnv | Versions, Config, Logs, and Dashboard', 'https://youtu.be/ahetMNLLS7s', 'Database', 'qdrant', 'aspect-square w-full flex shrink-0 overflow-hidden items-center justify-center p-4', 'Qdrant']
]

const chineseCards = [
  ['不用 Docker，在本地一键跑起 ClickHouse - FlyEnv 原生本地环境', 'https://www.bilibili.com/video/BV1S43w6QEvS/', '数据库', 'ClickHouse', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4', 'ClickHouse'],
  ['不用 Docker，本地一键运行 Temporal — FlyEnv 原生本地环境', 'https://www.bilibili.com/video/BV1TD3c67Eei/', '服务治理', 'Temporal', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4', 'Temporal', true],
  ['Elasticsearch 本地一键配置｜FlyEnv 演示', 'https://www.bilibili.com/video/BV1if3P6BEBR/', 'Search Engine', 'Elasticsearch', 'aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-6', 'Elasticsearch'],
  ['Qdrant 本地一键配置｜FlyEnv 演示', 'https://www.bilibili.com/video/BV16Q3P6VEPA/', '数据库', 'qdrant', 'aspect-square w-full flex shrink-0 overflow-hidden items-center justify-center p-4', 'Qdrant']
]

function toCard(values) {
  return {
    title: values[0],
    href: values[1],
    category: values[2],
    icon: values[3],
    iconClass: values[4],
    moduleName: values[5],
    categoryClass: values[6]
      ? 'shrink-0 select-text truncate text-[#3c3c43] dark:text-[#dfdff6]'
      : 'shrink-0 select-text text-[#3c3c43] dark:text-[#dfdff6]'
  }
}

for (const values of englishCards) {
  const card = toCard(values)
  test('English Core Modules links ' + card.moduleName + ' to its demo', () => {
    expectVideoCard(sourceFile('docs/components/AppModules/index.vue'), card)
  })
}

for (const values of chineseCards) {
  const card = toCard(values)
  test('Chinese Core Modules links ' + card.moduleName + ' to its demo', () => {
    expectVideoCard(sourceFile('docs/components/AppModules/zh.vue'), card)
  })
}

function expectDocumentIncludes(path, terms) {
  const source = sourceFile(path)
  for (const term of terms) {
    assert.ok(source.toLowerCase().includes(term.toLowerCase()), path + ' should include ' + term)
  }
}

test('English What Is FlyEnv page lists the full on-demand module catalog', () => {
  expectDocumentIncludes('docs/guide/what-is-flyenv.md', [
    'install only the software you need',
    'AI Coding & MCP',
    'AI Integration & Automation',
    'Containers',
    'Network Tunnel',
    'Web Servers',
    'Databases',
    'Email Server',
    'Programming Languages & Runtime',
    'Cache & Message Queue',
    'Service Governance',
    'Search Engine',
    'Object Storage',
    'Automation & Scheduling',
    'Utilities',
    'Custom modules',
    'All modules support multi-version co-existence',
    'Custom modules can be added as services or commands',
    'Custom domains, HTTPS/SSL, reverse proxy, logs, and site-level runtime settings',
    'FlyEnv MCP Server'
  ])
})

test('Chinese What Is FlyEnv page lists the full on-demand module catalog', () => {
  expectDocumentIncludes('docs/zh/guide/what-is-flyenv.md', [
    '只安装当前工作流需要的软件',
    'AI 编程与 MCP',
    'AI 集成与自动化',
    '容器',
    '网络隧道',
    'Web 服务器',
    '数据库',
    '邮件服务器',
    '编程语言与运行时',
    '缓存与消息队列',
    '服务治理',
    '搜索引擎',
    '对象存储',
    '自动化与调度',
    '实用工具',
    '自定义模块',
    '所有模块均支持多版本共存',
    '自定义模块可以作为服务或常用命令添加',
    '自定义域名、HTTPS/SSL、反向代理、日志和站点级运行时设置',
    'FlyEnv MCP Server'
  ])
})

const englishModuleLinks = [
  ['OpenClaw', 'https://youtu.be/j7_B-VzIyEU'],
  ['n8n', 'https://youtu.be/YnA1B3qmDJU'],
  ['Ollama', 'https://youtu.be/yPk9HQJRvb8'],
  ['Apache', 'https://youtu.be/t7nKL45FdVk'],
  ['Nginx', 'https://youtu.be/zfdNZFRt3k4'],
  ['MySQL', 'https://youtu.be/uWWHAqxhVyk'],
  ['MariaDB', 'https://youtu.be/mvmbRi6KsgI'],
  ['PostgreSQL', 'https://youtu.be/5gW3WHh8_Jw'],
  ['MongoDB', 'https://youtu.be/wPjgwVeA6lw'],
  ['Qdrant', 'https://youtu.be/ahetMNLLS7s'],
  ['ClickHouse', 'https://youtu.be/3ePJYddWYmQ'],
  ['Mailpit', 'https://youtu.be/D4MkA25Ofd0'],
  ['PHP', 'https://youtu.be/OYP1IOoJOtI'],
  ['Node.js', 'https://youtu.be/Pt_I3NDciZw'],
  ['Python', 'https://youtu.be/dhy0nJYsfQQ'],
  ['Redis', 'https://youtu.be/u9xjPN-VWT4'],
  ['Elasticsearch', 'https://youtu.be/B9Eo2Y-aXWQ'],
  ['Temporal', 'https://youtu.be/E_jetPnVxBo']
]

const chineseModuleLinks = [
  ['OpenClaw', 'https://www.bilibili.com/video/BV1ciwMzUEGH/'],
  ['n8n', 'https://www.bilibili.com/video/BV1qGXFBfE7U/'],
  ['Ollama', 'https://www.bilibili.com/video/BV13UZcYGEhu/'],
  ['Apache', 'https://www.bilibili.com/video/BV1wqZ7BNErL/'],
  ['Nginx', 'https://www.bilibili.com/video/BV1jKZ4BjEgk/'],
  ['MySQL', 'https://www.bilibili.com/video/BV1vuZ4B5EAg/'],
  ['MariaDB', 'https://www.bilibili.com/video/BV1NfEx6eE3V/'],
  ['PostgreSQL', 'https://www.bilibili.com/video/BV19oE36BELa/'],
  ['MongoDB', 'https://www.bilibili.com/video/BV182E26AELB/'],
  ['Qdrant', 'https://www.bilibili.com/video/BV16Q3P6VEPA/'],
  ['ClickHouse', 'https://www.bilibili.com/video/BV1S43w6QEvS/'],
  ['Mailpit', 'https://www.bilibili.com/video/BV1CxEz6YEgx/'],
  ['PHP', 'https://www.bilibili.com/video/BV1r6Z7BwE8p/'],
  ['Node.js', 'https://www.bilibili.com/video/BV1pzEs6tE2X/'],
  ['Python', 'https://www.bilibili.com/video/BV1hvZxBBEJk/'],
  ['Redis', 'https://www.bilibili.com/video/BV1YaZxBzENJ/'],
  ['Elasticsearch', 'https://www.bilibili.com/video/BV1if3P6BEBR/'],
  ['Temporal', 'https://www.bilibili.com/video/BV1TD3c67Eei/']
]

function expectMarkdownLinks(path, links) {
  const source = sourceFile(path)
  for (const [label, href] of links) {
    const link = '[' + label + '](' + href + ')'
    assert.ok(source.includes(link), path + ' should include ' + link)
  }
}

function expectPlainModuleNames(path, names) {
  const source = sourceFile(path)
  for (const name of names) {
    assert.ok(!source.includes('[' + name + ']('), path + ' should keep ' + name + ' plain')
  }
}

test('English What Is FlyEnv table uses English AppModules demo links', () => {
  expectMarkdownLinks('docs/guide/what-is-flyenv.md', englishModuleLinks)
  expectPlainModuleNames('docs/guide/what-is-flyenv.md', ['Podman', 'FrankenPHP', 'Temporal CLI'])
})

test('Chinese What Is FlyEnv table uses Chinese AppModules demo links', () => {
  expectMarkdownLinks('docs/zh/guide/what-is-flyenv.md', chineseModuleLinks)
  expectPlainModuleNames('docs/zh/guide/what-is-flyenv.md', ['Podman', 'FrankenPHP', 'Temporal CLI'])
})
