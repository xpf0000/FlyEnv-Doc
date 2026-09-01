import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const source = (path) => readFileSync(resolve(root, path), 'utf8')
const markdownFiles = (directory) => readdirSync(resolve(root, directory)).filter((file) => file.endsWith('.md')).sort()

test('Indonesian locale mirrors the English documentation routes', () => {
  const config = source('docs/.vitepress/config.mts')

  assert.match(config, /\bid:\s*\{[\s\S]*?label:\s*'Bahasa Indonesia'/)
  assert.match(config, /link:\s*'\/id\//)

  assert.deepEqual(markdownFiles('docs/id/guide'), markdownFiles('docs/guide'))

  for (const page of ['index.md', 'download.md', 'flyphpserver.md', 'community.md', 'license.md', 'privacy.md', 'refund-policy.md', 'sponsor.md', 'terms.md']) {
    assert.ok(existsSync(resolve(root, 'docs/id', page)), `missing Indonesian page: ${page}`)
  }
})

test('Indonesian guides do not use English-locale relative imports', () => {
  for (const file of markdownFiles('docs/id/guide')) {
    const guide = source(`docs/id/guide/${file}`)

    assert.doesNotMatch(
      guide,
      /^import .* from ['"]\.\.\/(?:components|data)\//m,
      `${file} imports a component or data module from the wrong directory`
    )
  }
})

test('Indonesian markdown does not link back to English routes', () => {
  for (const directory of ['docs/id', 'docs/id/guide']) {
    for (const file of markdownFiles(directory)) {
      const page = source(`${directory}/${file}`)

      assert.doesNotMatch(
        page,
        /\]\(\/(?:guide\/|download(?:[)#?]|$)|community(?:[)#?]|$)|license(?:[)#?]|$)|flyphpserver(?:[)#?]|$))/,
        `${directory}/${file} links to an English route`
      )
    }
  }
})

test('Indonesian homepage renders localized homepage sections', () => {
  const page = source('docs/id/index.md')
  const stacks = source('docs/components/AppProjectStacks/id.vue')

  for (const component of [
    'AppHomePositioning',
    'AppProjectStacks',
    'AppFeaturedModules',
    'AppAiWorkflow',
    'AppGitHubModules',
    'AppHomeFinalCta'
  ]) {
    assert.match(page, new RegExp(`import ${component} from '../components/.+/id\\.vue'`))
    assert.match(page, new RegExp(`<${component} />`))
  }

  assert.match(page, /<AppSvgIcon \/>/)
  assert.match(page, /src: 'https:\/\/oss\.macphpstudy\.com\/image\/app-icon\.png'/)
  assert.match(page, /:evidence="communityEvidence\.id"/)
  assert.match(page, /locale="id"/)
  assert.match(source('docs/components/AppHomeHeroAnchor/en.vue'), /Alternatif modern untuk XAMPP, MAMP, Laragon, dan Laravel Herd — dibuat untuk lebih dari sekadar PHP\./)
  assert.match(stacks, /href="\/id\/demos"/)
  assert.match(stacks, /Lihat semua demo →/)
  assert.match(stacks, /data-analytics-surface="project-stacks"/)
})
