import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8')
const readIfExists = (path) => (existsSync(resolve(projectRoot, path)) ? read(path) : '')

function assertInOrder(source, labels) {
  let previous = -1
  for (const label of labels) {
    const index = source.indexOf(label)
    assert.ok(index >= 0, `homepage should include ${label}`)
    assert.ok(index > previous, `${label} should appear after the previous homepage section`)
    previous = index
  }
}

test('English homepage follows the positioning-first information architecture', () => {
  const source = read('docs/index.md')
  const positioning = read('docs/components/AppHomePositioning/en.vue')
  const stacks = read('docs/components/AppProjectStacks/en.vue')
  const modules = read('docs/components/AppFeaturedModules/en.vue')
  const finalCta = read('docs/components/AppHomeFinalCta/en.vue')
  const ai = read('docs/components/AppAiWorkflow/en.vue')
  const stories = read('docs/components/AppCommunityEvidence/StoryCard.vue')
  const github = read('docs/components/AppGithub/en.vue')
  const themeCss = read('docs/.vitepress/theme/custom.css')
  const theme = read('docs/.vitepress/theme/index.js')
  const heroAnchor = readIfExists('docs/components/AppHomeHeroAnchor/en.vue')
  assert.doesNotMatch(source, /AppToolsModule/)
  assert.doesNotMatch(source, /AppPriceModules/)
  assert.doesNotMatch(source, /AppNoFountTipsModules/)
  assert.doesNotMatch(source, /^features:/m)
  assert.match(source, /AppHomePositioning\/en\.vue/)
  assertInOrder(source, [
    '<AppHomePositioning',
    '<AppProjectStacks',
    '<AppCommunityEvidence',
    '<AppFeaturedModules',
    '<AppAiWorkflow',
    '<AppGitHubModules',
    '<AppHomeFinalCta'
  ])
  assert.match(source, /text: "Run your complete local development stack natively\."/)
  assert.match(source, /local sites and HTTPS from one desktop app on Windows, macOS and Linux — with AI coding tools and MCP built in/)
  assert.match(source, /src: 'https:\/\/oss\.macphpstudy\.com\/image\/app-icon\.png'/)
  assert.match(theme, /AppHomeHeroAnchor/)
  assert.match(theme, /home-hero-actions-after/)
  assert.match(heroAnchor, /A modern alternative to XAMPP, MAMP, Laragon and Laravel Herd — built for more than PHP\./)
  assert.match(heroAnchor, /mt-5 max-w-xl text-base font-medium leading-7 text-slate-700 dark:text-slate-200/)
  assert.match(heroAnchor, /route\.path === '\/'/)
  assert.match(heroAnchor, /现代化的 XAMPP、MAMP、Laragon 和 Laravel Herd 替代方案，支持的不止 PHP。/)
  assert.match(heroAnchor, /Alternatif modern untuk XAMPP, MAMP, Laragon, dan Laravel Herd — dibuat untuk lebih dari sekadar PHP\./)
  assert.doesNotMatch(source, /home-hero-actions-after/)
  assert.doesNotMatch(themeCss, /\.VPHero\.has-image \.image-src/)
  assert.doesNotMatch(themeCss, /max-width: 460px/)
  for (const term of [
    'Why FlyEnv',
    'From scattered tools to one workspace',
    'No container setup',
    'Per-project versions',
    'nvm',
    'FlyEnv'
  ]) {
    assert.ok(positioning.includes(term), `English homepage should include ${term}`)
  }
  assert.doesNotMatch(positioning, /One native workspace for the project you are actually building/)
  assert.match(positioning, /'PHP manager'/)
  assert.match(positioning, /'Runtimes'/)
  assert.match(positioning, /https:\/\/oss\.macphpstudy\.com\/image\/one-workspace\.webp/)
  assert.match(positioning, /md:grid-cols-\[1\.25fr_0\.75fr\]/)
  assert.match(positioning, /rounded-full bg-white/)
  assert.match(positioning, /text-base font-bold uppercase/)
  for (const term of ['Laravel', 'Django', 'ERPNext', 'Gitea', 'PHP', 'MySQL', 'Redis', 'Nginx']) {
    assert.ok(stacks.includes(term), `English project stacks should include ${term}`)
  }
  assert.match(stacks, /\/home\/stacks\/laravel\.svg/)
  assert.match(stacks, /flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between/)
  assert.match(stacks, /href="\/demos"/)
  assert.match(stacks, /Browse all demos →/)
  assert.match(stacks, /data-analytics-surface="project-stacks"/)
  assert.match(modules, /Core runtimes, databases and services/)
  assert.match(modules, /px-3\.5 py-2 text-base/)
  assert.match(modules, /View all modules/)
  assert.match(finalCta, /Ready to run your local stack with FlyEnv\?/)
  assert.doesNotMatch(ai, /flyenv-mcp-screen\.webp/)
  assert.match(ai, /same local environment as your project/)
  assert.match(ai, /Claude Code, Codex and other MCP clients/)
  assert.match(ai, /same runtimes, services and local sites already managed by FlyEnv/)
  assert.match(stories, /displayTitle/)
  assert.match(stories, /homepageTitle/)
  assert.match(stories, /line-clamp-2/)
  assert.match(stories, /placement !== 'home'/)
  assert.match(github, /max-h-48/)
  assert.match(github, /github\/contributors\/xpf0000\/FlyEnv/)
  assert.match(stacks, /bg-slate-50/)
})

test('Chinese homepage exposes the same positioning sections', () => {
  const source = read('docs/zh/index.md')
  const positioning = read('docs/components/AppHomePositioning/zh.vue')
  const stacks = read('docs/components/AppProjectStacks/zh.vue')
  const modules = read('docs/components/AppFeaturedModules/zh.vue')
  const finalCta = read('docs/components/AppHomeFinalCta/zh.vue')
  const ai = read('docs/components/AppAiWorkflow/zh.vue')
  assert.doesNotMatch(source, /AppToolModule/)
  assert.doesNotMatch(source, /AppPriceModules/)
  assert.doesNotMatch(source, /AppNoFountTipsModules/)
  assert.doesNotMatch(source, /^features:/m)
  assert.match(source, /AppHomePositioning\/zh\.vue/)
  assert.match(source, /text: "原生运行完整的本地开发技术栈"/)
  assert.match(source, /本地站点和 HTTPS。内置 AI 编程工具与 MCP/)
  assert.match(source, /src: 'https:\/\/oss\.macphpstudy\.com\/image\/app-icon\.png'/)
  assertInOrder(source, [
    '<AppHomePositioning',
    '<AppProjectStacks',
    '<AppCommunityEvidence',
    '<AppFeaturedModules',
    '<AppAiWorkflow',
    '<AppGitHubModules',
    '<AppHomeFinalCta'
  ])
  for (const term of ['为什么选择 FlyEnv', '从零散工具到一个工作区', '无需容器配置', '按项目切换版本', 'nvm', 'FlyEnv']) {
    assert.ok(positioning.includes(term), `Chinese homepage should include ${term}`)
  }
  assert.doesNotMatch(positioning, /为真实项目准备的原生开发工作区/)
  assert.match(positioning, /'PHP 管理器'/)
  assert.match(positioning, /'运行时'/)
  assert.match(positioning, /https:\/\/oss\.macphpstudy\.com\/image\/one-workspace\.webp/)
  assert.match(positioning, /md:grid-cols-\[1\.25fr_0\.75fr\]/)
  assert.match(positioning, /rounded-full bg-white/)
  for (const term of ['Laravel', 'Django', 'ERPNext', 'Gitea', 'PHP', 'MySQL', 'Redis', 'Nginx']) {
    assert.ok(stacks.includes(term), `Chinese project stacks should include ${term}`)
  }
  assert.match(stacks, /\/home\/stacks\/erpnext\.svg/)
  assert.match(stacks, /href="\/zh\/demos"/)
  assert.match(stacks, /浏览全部演示 →/)
  assert.match(stacks, /data-analytics-surface="project-stacks"/)
  assert.match(modules, /核心运行时、数据库与服务/)
  assert.match(modules, /查看全部模块/)
  assert.match(finalCta, /准备好使用 FlyEnv 运行本地技术栈了吗？/)
  assert.doesNotMatch(ai, /flyenv-mcp-screen\.webp/)
})
