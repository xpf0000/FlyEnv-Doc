import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dataPath = resolve(projectRoot, 'docs/data/demos.ts')
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8')

const expectedYoutubeIds = new Set([
  'TA2NA0JeGdo', 'RmSl4jgmEyI', '47I5nZK3rjo', '5gW3WHh8_Jw', 'frprHkD1_rQ',
  'L-W1JNqWPEw', 't7nKL45FdVk', 'OYP1IOoJOtI', 'FHJ8nrQ2aj4', 'NuaYnRiD3AY',
  'MJ9OQBOBXMg', '0qfnkr5V7eE', 'E_jetPnVxBo', 'vjZPrYqJavA', 'lCEEocXdt_M',
  'lu68kw8_3dY', 'ZhvJ8a9Fp_4', '3ePJYddWYmQ', 'idjLaMh2RMw', 'SHK12kXApTM',
  'uOf2cWk3AtU', 'vPD3lXo1vr0', 'sdbIbnIYoYY', '5NqSag8c4YY', 'ahetMNLLS7s',
  'Jg7zfJTOZCM', 'B9Eo2Y-aXWQ', 'f9emR2HFk9M', 'YnA1B3qmDJU', 'ymbyrr5zGkI',
  'mvmbRi6KsgI', 'D4MkA25Ofd0', '2sfoWGW9rm4', '8ceC7QqY4UA', 'hKIx2LdNz0Y',
  'Pt_I3NDciZw', 'xsw8BQxii10', '80psOMuDK9I', 'X8W1FcwWc00', 'uWWHAqxhVyk',
  'zfdNZFRt3k4', 'dhy0nJYsfQQ', 'qpgUJZmS6Ig', 'Sd03V_wxh1k', 'yYSwnYC7V9M',
  'wPjgwVeA6lw', 'iPGTefjNWI8', 'uFVZHMGORGM', '3Uo22iqty9k', 'yPk9HQJRvb8',
  'j7_B-VzIyEU', 'LFazRyd_G3o', 's6PHRiioyuc', 'NSQNBS7zHqU', 'NiJW09NCa_0',
  '2QxmRRVR15Q', 'pa0QFgpu17w', 'BYu3sNxuRF0', 'jZmnlraSHvs', 'KChv2gvgKjw',
  'QbuUkztmwLs', 'mriHvqJmU1g', '2KZK97EP8is', 'rufRCVIeqj8', 'cCXvWoJ4ayM',
  'DiYIv_SoTDY', 'x36kdgUI16k', 'oiVFGe4GhkY', 'u9xjPN-VWT4', 'Y17Tvrc9fsQ',
  '4kyrX0-QPgM', 'DIX4lTgBP4c', 'Zb5YPO5BTaY', 'ViKMVkh3TL8', 'dyT5GzuOrBc',
  '67cwHqygWFM', 'TwpnOXZ8cPo', 'Cpq6i9T6IK4', 'DByCl9MyYrg', 'MqjFsqrpI0I'
])

test('the public demo catalog contains every approved YouTube video exactly once', () => {
  assert.ok(existsSync(dataPath), 'docs/data/demos.ts should exist')

  const source = read('docs/data/demos.ts')
  const ids = Array.from(source.matchAll(/youtubeId: '([A-Za-z0-9_-]{11})'/g), (match) => match[1])

  assert.equal(ids.length, 80)
  assert.equal(new Set(ids).size, 80)
  assert.deepEqual(new Set(ids), expectedYoutubeIds)
})

test('the catalog exposes only supported categories and localized public playback data', () => {
  const source = read('docs/data/demos.ts')

  for (const category of [
    'getting-started',
    'projects',
    'runtimes',
    'databases-services',
    'developer-tools',
    'ai-mcp'
  ]) {
    assert.match(source, new RegExp(`category: '${category}'`))
  }

  assert.equal((source.match(/featured: true/g) || []).length, 6)
  assert.match(source, /locales: \{\s+en: \{\s+title: source\.titles\.en,\s+summary: categorySummaries\.en\[source\.category\],\s+tags: source\.tags/s)
  assert.match(source, /zh: \{\s+title: source\.titles\.zh,\s+summary: categorySummaries\.zh\[source\.category\],\s+tags: source\.tags/s)
  assert.match(source, /id: \{\s+title: source\.titles\.id,\s+summary: categorySummaries\.id\[source\.category\],\s+tags: source\.tags/s)
  assert.match(source, /youtube: 'https:\/\/www\.youtube\.com\/watch\?v=/)
  assert.doesNotMatch(source, /averageViewDuration|watchMinutes|retention|views:/)
})

test('the demos component keeps playback lazy and exposes accessible discovery controls', () => {
  const componentPath = resolve(projectRoot, 'docs/components/AppDemos/index.vue')
  assert.ok(existsSync(componentPath), 'docs/components/AppDemos/index.vue should exist')

  const source = read('docs/components/AppDemos/index.vue')
  for (const required of [
    'URLSearchParams',
    'history.replaceState',
    'aria-pressed',
    'aria-live="polite"',
    'loading="lazy"',
    'role="dialog"',
    'aria-modal="true"',
    'trapDialogFocus',
    'document.activeElement',
    'getDemoEmbedUrl',
    'demos_filter_change',
    'demos_search',
    'demos_play',
    'demos_platform_open',
    'demos_guide_click'
  ]) {
    assert.ok(source.includes(required), `missing ${required}`)
  }

  assert.match(source, /<iframe\s+v-if="selectedDemo"/)
  assert.doesNotMatch(source, /<iframe[^>]+src="https:\/\/www\.youtube/i)
  assert.match(source, /query_length: searchQuery\.value\.trim\(\)\.length/)
  assert.doesNotMatch(source, /query:\s*searchQuery/)
  assert.doesNotMatch(
    source,
    /\.demos-masthead h1\s*\{\s*font-size:\s*[^;]*vw/,
    'catalog typography must not scale with viewport width'
  )
  assert.match(
    source,
    /\.demos-filter-scroll\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/s,
    'the desktop filter row must have the full control width'
  )
  assert.match(
    source,
    /\.demos-masthead h1\s*\{[^}]*max-width:\s*700px/s,
    'the desktop title must have a deliberate text measure'
  )
})

test('demo cards provide native localized covers independent of remote thumbnails', () => {
  const source = read('docs/components/AppDemos/index.vue')

  for (const required of [
    'demo-cover-native',
    'demo-cover-thumbnail',
    'demo-cover-scrim',
    'demo-cover-brand',
    'demo-cover-category',
    'demo-cover-visual',
    'demo-cover-logo',
    'demo-cover-fallback',
    'coverVisual',
    'markCoverLogoLoaded',
    'demo-cover-tone-getting-started',
    'demo-cover-tone-projects',
    'demo-cover-tone-runtimes',
    'demo-cover-tone-databases-services',
    'demo-cover-tone-developer-tools',
    'demo-cover-tone-ai-mcp'
  ]) {
    assert.ok(source.includes(required), `missing ${required}`)
  }

  assert.match(source, /class="demo-cover-thumbnail"/)
  assert.match(source, /class="demo-cover-native"/)
  assert.match(source, /class="demo-cover-scrim"/)
  assert.match(source, /class="demo-cover-visual"/)
  assert.match(source, /class="demo-cover-fallback"/)
  assert.match(source, /@load="markCoverLogoLoaded"/)
  assert.doesNotMatch(source, /class="demo-cover-topic"/)
  assert.doesNotMatch(source, /class="demo-cover-tags"/)
})

test('all three Demos routes have localized metadata and compose the shared catalog', () => {
  const expected = [
    ['docs/demos.md', './components/AppDemos/index.vue', 'locale="en"', 'FlyEnv Demos'],
    ['docs/zh/demos.md', '../components/AppDemos/index.vue', 'locale="zh"', 'FlyEnv 演示'],
    ['docs/id/demos.md', '../components/AppDemos/index.vue', 'locale="id"', 'Demo FlyEnv']
  ]

  for (const [path, component, locale, title] of expected) {
    const source = read(path)
    assert.ok(source.includes(component))
    assert.ok(source.includes(locale))
    assert.ok(source.includes(title))
    assert.match(source, /^title: ['"].+['"]$/m, `${path} must quote its YAML title`)
    assert.match(source, /rel: canonical/)
    assert.match(source, /hreflang: en/)
    assert.match(source, /hreflang: zh-CN/)
    assert.match(source, /hreflang: id-ID/)
  }
})

test('all site locales expose Demos in primary navigation and delegated analytics', () => {
  const config = read('docs/.vitepress/config.mts')
  const theme = read('docs/.vitepress/theme/index.js')

  for (const [label, link] of [
    ['Demos', '/demos'],
    ['演示', '/zh/demos'],
    ['Demo', '/id/demos']
  ]) {
    assert.ok(config.includes(`{ text: '${label}', link: '${link}' }`))
  }

  assert.match(theme, /demos_nav_click/)
  assert.match(theme, /primary_nav/)
})
