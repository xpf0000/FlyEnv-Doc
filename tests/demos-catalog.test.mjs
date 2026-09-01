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
  'L-W1JNqWPEw', 't7nKL45FdVk', 'OYP1IOoJOtI', 'NuaYnRiD3AY',
  'MJ9OQBOBXMg', '0qfnkr5V7eE', 'E_jetPnVxBo', 'vjZPrYqJavA', 'lCEEocXdt_M',
  'lu68kw8_3dY', 'ZhvJ8a9Fp_4', '3ePJYddWYmQ', 'idjLaMh2RMw', 'SHK12kXApTM',
  'uOf2cWk3AtU', 'vPD3lXo1vr0', 'sdbIbnIYoYY', '5NqSag8c4YY', 'ahetMNLLS7s',
  'Jg7zfJTOZCM', 'B9Eo2Y-aXWQ', 'YnA1B3qmDJU', 'ymbyrr5zGkI',
  'mvmbRi6KsgI', 'D4MkA25Ofd0', '2sfoWGW9rm4', '8ceC7QqY4UA', 'hKIx2LdNz0Y',
  'Pt_I3NDciZw', 'xsw8BQxii10', '80psOMuDK9I', 'X8W1FcwWc00', 'uWWHAqxhVyk',
  'zfdNZFRt3k4', 'dhy0nJYsfQQ', 'qpgUJZmS6Ig', 'Sd03V_wxh1k', 'yYSwnYC7V9M',
  'wPjgwVeA6lw', 'iPGTefjNWI8', 'uFVZHMGORGM', '3Uo22iqty9k', 'yPk9HQJRvb8',
  'j7_B-VzIyEU', 'LFazRyd_G3o', 's6PHRiioyuc', 'NSQNBS7zHqU', 'NiJW09NCa_0',
  '2QxmRRVR15Q', 'pa0QFgpu17w', 'BYu3sNxuRF0', 'jZmnlraSHvs', 'KChv2gvgKjw',
  'sXo7L4-cxh8', 'Kfb0meXjzUA', 'mriHvqJmU1g', '2KZK97EP8is', 'cCXvWoJ4ayM',
  'DiYIv_SoTDY', 'x36kdgUI16k', 'oiVFGe4GhkY', 'u9xjPN-VWT4', 'Y17Tvrc9fsQ',
  '4kyrX0-QPgM', 'DIX4lTgBP4c', 'Zb5YPO5BTaY', 'ViKMVkh3TL8', 'dyT5GzuOrBc',
  '67cwHqygWFM', 'Cpq6i9T6IK4', 'DByCl9MyYrg', 'MqjFsqrpI0I'
])

test('the public demo catalog contains every approved YouTube video exactly once', () => {
  assert.ok(existsSync(dataPath), 'docs/data/demos.ts should exist')

  const source = read('docs/data/demos.ts')
  const ids = Array.from(source.matchAll(/youtubeId: '([A-Za-z0-9_-]{11})'/g), (match) => match[1])

  assert.equal(ids.length, 77)
  assert.equal(new Set(ids).size, 77)
  assert.deepEqual(new Set(ids), expectedYoutubeIds)
  assert.doesNotMatch(source, /phpwebstudy|flyphpserver/i)

  for (const [id, youtubeId] of [
    ['keycloak-local-project', 'sXo7L4-cxh8'],
    ['snipe-it-local-project', 'Kfb0meXjzUA'],
    ['zero-config-runtimes', '47I5nZK3rjo']
  ]) {
    const category = id === 'zero-config-runtimes' ? 'getting-started' : 'projects'
    assert.match(source, new RegExp(`id: '${id}', youtubeId: '${youtubeId}', category: '${category}'`))
  }
  assert.equal((source.match(/category: 'projects'/g) || []).length, 7)
  assert.equal((source.match(/category: 'getting-started'/g) || []).length, 3)
  assert.equal((source.match(/category: 'runtimes'/g) || []).length, 6)
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
  assert.match(source, /summaries\?: Partial<Record<DemoLocale, string>>/)
  assert.match(source, /locales: \{\s+en: \{\s+title: source\.titles\.en,\s+summary: source\.summaries\?\.en \|\| categorySummaries\.en\[source\.category\],\s+tags: source\.tags/s)
  assert.match(source, /zh: \{\s+title: source\.titles\.zh,\s+summary: source\.summaries\?\.zh \|\| categorySummaries\.zh\[source\.category\],\s+tags: source\.tags/s)
  assert.match(source, /id: \{\s+title: source\.titles\.id,\s+summary: source\.summaries\?\.id \|\| categorySummaries\.id\[source\.category\],\s+tags: source\.tags/s)
  assert.match(source, /youtube: 'https:\/\/www\.youtube\.com\/watch\?v=/)
  assert.doesNotMatch(source, /averageViewDuration|watchMinutes|retention|views:/)
  assert.match(source, /runtimes: 'Languages & Runtimes'/)
  assert.match(source, /runtimes: '语言与运行时'/)
  assert.match(source, /runtimes: 'Bahasa & Runtime'/)

  for (const summary of [
    'See how FlyEnv brings runtimes, services, projects, and developer tools into one local workspace.',
    'Install and switch PHP, Python, Go, Node.js, and Java from one local workspace.',
    'Run ERPNext and its Frappe services together as a managed local stack.',
    'Run PostgreSQL locally, then connect and manage it in pgAdmin 4.',
    'Configure Caddy, PHP-FPM, and MySQL together for a native local PHP stack.',
    'Use an AI CLI and MCP to build and manage a local PHP and MySQL project.'
  ]) {
    assert.ok(source.includes(summary), `missing specific featured summary: ${summary}`)
  }
})

test('the Bilibili mapping reserves every catalog YouTube ID for manual completion', () => {
  const source = read('docs/data/demos.ts')
  const youtubeIds = Array.from(
    source.matchAll(/youtubeId: '([A-Za-z0-9_-]{11})'/g),
    ([, youtubeId]) => youtubeId
  )
  const mappingSource = source.match(/const bilibiliByYoutubeId[\s\S]*?= \{([\s\S]*?)\n\}/)?.[1] || ''
  const mappedIds = Array.from(
    mappingSource.matchAll(/'([A-Za-z0-9_-]{11})':/g),
    ([, youtubeId]) => youtubeId
  )

  assert.deepEqual(new Set(mappedIds), new Set(youtubeIds))
})

test('the Bilibili mapping reuses the matching AppModules video links', () => {
  const source = read('docs/data/demos.ts')

  for (const [youtubeId, bilibiliId] of [
    ['t7nKL45FdVk', 'BV1wqZ7BNErL'],
    ['5gW3WHh8_Jw', 'BV19oE36BELa'],
    ['yPk9HQJRvb8', 'BV13UZcYGEhu'],
    ['8ceC7QqY4UA', 'BV1XuGV6oECA'],
    ['pa0QFgpu17w', 'BV1vNGV68EF4']
  ]) {
    assert.match(source, new RegExp(`'${youtubeId}': '${bilibiliId}'`))
  }
})

test('the Bilibili mapping reuses the matching AppToolModule video links', () => {
  const source = read('docs/data/demos.ts')
  const englishModule = read('docs/components/AppToolModule/en.vue')
  const chineseModule = read('docs/components/AppToolModule/zh.vue')
  const youtubeIds = Array.from(
    englishModule.matchAll(/https:\/\/youtu\.be\/([A-Za-z0-9_-]{11})/g),
    ([, youtubeId]) => youtubeId
  )
  const bilibiliIds = Array.from(
    chineseModule.matchAll(/https:\/\/www\.bilibili\.com\/video\/(BV[A-Za-z0-9]+)/g),
    ([, bilibiliId]) => bilibiliId
  )

  assert.equal(youtubeIds.length, bilibiliIds.length)

  for (const [index, youtubeId] of youtubeIds.entries()) {
    assert.match(source, new RegExp(`'${youtubeId}': '${bilibiliIds[index]}'`))
  }
})

test('Featured cards keep a strategic MCP-first capability progression', () => {
  const source = read('docs/data/demos.ts')
  const featured = Array.from(
    source.matchAll(
      /id: '([^']+)', youtubeId: '[^']+', category: '[^']+',\s+publishedAt: '[^']+', featured: true, featuredRank: (\d+),/g
    ),
    ([, id, rank]) => [id, Number(rank)]
  ).sort((first, second) => first[1] - second[1])

  assert.deepEqual(featured, [
    ['flyenv-feature-overview', 1],
    ['zero-config-runtimes', 2],
    ['erpnext-local-project', 3],
    ['postgresql-pgadmin', 4],
    ['caddy-php-mysql', 5],
    ['ai-cli-mcp-crud', 6]
  ])
  assert.doesNotMatch(source, /id: 'cliproxyapi-gateway'[\s\S]{0,180}featured: true/)
  assert.match(source, /使用 AI CLI 与 MCP 构建并管理本地 PHP 和 MySQL 项目。/)
  assert.match(source, /Gunakan AI CLI dan MCP untuk membangun serta mengelola proyek PHP dan MySQL lokal\./)

  const component = read('docs/components/AppDemos/index.vue')
  assert.match(
    component,
    /\.filter\(\(demo\) => demo\.featured && typeof demo\.featuredRank === 'number'\)\s+\.sort\(\(first, second\) => first\.featuredRank! - second\.featuredRank!\)/s
  )
})

test('the English Featured heading stays concise', () => {
  const source = read('docs/components/AppDemos/index.vue')

  assert.match(source, /featuredTitle: 'Featured demos'/)
  assert.doesNotMatch(source, /featuredTitle: 'Featured demonstrations'/)
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
    /\.demos-controls\s*\{[^}]*display:\s*flex;[^}]*flex-wrap:\s*wrap/s,
    'the browse bar must use a wrapping flex layout'
  )
  assert.match(
    source,
    /\.demos-filter-group\s*\{[^}]*display:\s*contents/s,
    'the filter buttons must participate in the browse bar flex layout'
  )
  assert.match(
    source,
    /\.demos-search-label\s*\{[^}]*margin-right:\s*8px/s,
    'the search field must leave a 20px total gap before the first filter'
  )
  assert.match(
    source,
    /\.demos-masthead h1\s*\{[^}]*max-width:\s*700px/s,
    'the desktop title must have a deliberate text measure'
  )
  assert.match(source, /<h2 :id="featuredHeadingId" class="no-border">/)
  assert.match(source, /<h2 :id="section\.headingId" class="no-border">/)
  assert.doesNotMatch(source, /class="demos-result-summary"/)
  assert.match(source, /class="visually-hidden" aria-live="polite">\{\{ resultSummary \}\}<\/p>/)
  assert.match(source, /searchPlaceholder: 'Search projects, stacks, and tools'/)
  assert.match(source, /relatedLink: 'Related guide →'/)
  assert.doesNotMatch(source, /relatedLink: 'Open related guide'/)
  assert.match(source, /\.demos-search-label\s*\{[^}]*max-width:\s*280px/s)
})

test('the Chinese demo player does not offer a switch to YouTube', () => {
  const source = read('docs/components/AppDemos/index.vue')

  assert.match(source, /v-if="alternatePlatform && props\.locale !== 'zh'"/)
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
  assert.match(source, /hideBrokenCoverLogo/)
  assert.doesNotMatch(source, /class="demo-cover-topic"/)
  assert.doesNotMatch(source, /class="demo-cover-tags"/)
})

test('text-only module covers retain their product names', () => {
  const source = read('docs/components/AppDemos/index.vue')

  assert.match(source, /\{ match: \/numa\/, mark: 'Numa' \}/)
  assert.match(source, /\{ match: \/cliproxyapi\/, mark: 'CLIProxyAPI' \}/)
})

test('the default catalog limits each category while filters and searches retain full discovery', () => {
  const source = read('docs/components/AppDemos/index.vue')

  assert.match(source, /const DEMOS_PER_CATEGORY = 6/)
  assert.match(source, /const matchedDemos = computed\(/)
  assert.match(source, /const categorySections = computed\(/)
  assert.match(source, /const shouldLimitCategory = !searchQuery\.value\.trim\(\) && activeCategory\.value === 'all'/)
  assert.match(source, /const unfeaturedDemos = categoryDemos\.filter\(\(demo\) => !demo\.featured\)/)
  assert.match(source, /const shouldShowWholeCategory = categoryDemos\.length <= DEMOS_PER_CATEGORY/)
  assert.match(
    source,
    /const displayedDemos = shouldLimitCategory && !shouldShowWholeCategory\s*\? unfeaturedDemos\.slice\(0, DEMOS_PER_CATEGORY\)\s*: categoryDemos/s
  )
  assert.match(source, /demos: displayedDemos/)
  assert.match(source, /hasMore: shouldLimitCategory && categoryDemos\.length > displayedDemos\.length/)
  assert.match(source, /v-for="section in categorySections"/)
  assert.match(source, /@click="selectCategory\(section\.category\)"/)
  assert.match(source, /demos-section-view-all/)
  assert.match(source, /viewAll: \(\) => 'View all →'/)
  assert.match(source, /\{\{ t\.viewAll\(\) \}\}/)
  assert.equal((source.match(/class="demo-summary"/g) || []).length, 1)
  assert.doesNotMatch(source, /demos-all-section/)
  assert.match(source, /:global\(html\.dark \.demos-library\)/)
  assert.match(source, /:global\(\.dark \.demo-dialog\)/)
})

test('standard demo cards reserve only the title space required by each desktop locale', () => {
  const source = read('docs/components/AppDemos/index.vue')

  assert.match(source, /<section class="demos-library" :data-locale="props\.locale">/)
  assert.match(
    source,
    /\.demo-card:not\(\.demo-card-featured\) h3\s*\{[^}]*min-height:\s*2\.7em/s,
    'English and Chinese catalog cards need only two title lines before their tag rows'
  )
  assert.match(
    source,
    /\.demos-library\[data-locale='id'\] \.demo-card:not\(\.demo-card-featured\) h3\s*\{[^}]*min-height:\s*4\.05em/s,
    'Indonesian catalog cards need three title lines for their longer localized titles'
  )
})

test('single-column demo cards place tags immediately after their content', () => {
  const source = read('docs/components/AppDemos/index.vue')

  assert.match(
    source,
    /@media \(max-width: 700px\)\s*\{[\s\S]*?\.demo-card h3,[\s\S]*?\.demo-card-featured \.demo-summary\s*\{[^}]*min-height:\s*0/s,
    'single-column cards must not retain desktop title or summary spacer height'
  )
})

test('demo tag chips override the document list-item spacing rule', () => {
  const source = read('docs/components/AppDemos/index.vue')

  assert.match(
    source,
    /\.demos-library \.demo-tags li \+ li\s*\{[^}]*margin-top:\s*0/s,
    'tag chips must not inherit .vp-doc li + li spacing from Markdown content'
  )
})

test('featured demo cards reserve consistent title and summary space before their tags', () => {
  const source = read('docs/components/AppDemos/index.vue')

  assert.match(
    source,
    /\.demo-card h3\s*\{[^}]*min-height:\s*2\.7em/s,
    'featured cards need two title lines so localized titles retain a shared tag baseline'
  )
  assert.match(
    source,
    /\.demo-card-featured \.demo-summary\s*\{[^}]*min-height:\s*3\.1em/s,
    'featured cards need two summary lines so category copy cannot shift tag rows'
  )
})

test('demo covers use local brand assets and the first screen presents a unified browse bar', () => {
  const source = read('docs/components/AppDemos/index.vue')

  assert.match(source, /\/assets\/demo-logos\//)
  assert.doesNotMatch(source, /cdn\.simpleicons\.org/)
  assert.match(source, /title: 'See what runs locally with FlyEnv'/)
  assert.match(
    source,
    /Browse demos of real projects, runtimes, databases, developer tools, and AI workflows running locally with FlyEnv\./
  )
  assert.match(source, /demos-browse-bar/)
  assert.match(source, /class="demos-search-label"[\s\S]*class="demos-filter-group"/)
  assert.match(
    source,
    /\{ match: \/flyenv-feature-overview\/, mark: 'FlyEnv', src: 'https:\/\/oss\.macphpstudy\.com\/image\/app-icon\.png' \}/,
    'the FlyEnv overview cover must use the official FlyEnv application icon'
  )
})

test('the local demo logo library contains every mapped brand asset', () => {
  const source = read('docs/components/AppDemos/index.vue')
  const assets = Array.from(
    source.matchAll(/\/assets\/demo-logos\/([a-z0-9-]+\.(?:svg|png))/g),
    (match) => match[1]
  )

  for (const asset of new Set(assets)) {
    assert.ok(existsSync(resolve(projectRoot, 'docs/public/assets/demo-logos', asset)), `missing ${asset}`)
  }

  for (const asset of [
    'erpnext.svg',
    'nextcloud.svg',
    'keycloak.svg',
    'snipeit.png'
  ]) {
    assert.ok(assets.includes(asset), `missing mapped official asset ${asset}`)
  }
})

test('demo covers reuse AppModules logo URLs before shared module SVGs', () => {
  const source = read('docs/components/AppDemos/index.vue')
  const moduleSource = read('docs/components/AppModules/index.vue')
  const sharedSvgImports = Array.from(
    source.matchAll(/from '([^']*\.\.\/SVG\/[A-Za-z0-9-]+\.svg)'/g),
    (match) => match[1]
  )

  for (const icon of [
    'RabbitMQ.svg',
    'Neo4j.svg',
    'ClickHouse.svg',
    'qdrant.svg',
    'Temporal.svg',
    'Consul.svg',
    'etcd.svg',
    'RustFS.svg',
    'Podman.svg',
    'Python.svg',
    'Go.svg',
    'bun.svg',
    'Ruby.svg',
    'Rust.svg',
    'Flutter.svg',
    'n8n.svg',
    'Ollama.svg',
    'opencode.svg',
    'kimi.svg'
  ]) {
    assert.ok(sharedSvgImports.some((path) => path.endsWith(`/SVG/${icon}`)), `missing shared SVG import ${icon}`)
  }

  for (const [name, url] of [
    ['Apache', 'https://oss.macphpstudy.com/image/apache.png'],
    ['Nginx', 'https://oss.macphpstudy.com/image/nginx.png'],
    ['Caddy', 'https://oss.macphpstudy.com/image/caddy.svg'],
    ['PostgreSQL', 'https://oss.macphpstudy.com/image/postgresql.svg'],
    ['Redis', 'https://oss.macphpstudy.com/image/redis.png'],
    ['MySQL', 'https://oss.macphpstudy.com/image/mysql.png'],
    ['MariaDB', 'https://oss.macphpstudy.com/image/mariadb.svg'],
    ['MongoDB', 'https://oss.macphpstudy.com/image/MongoDB.svg'],
    ['PHP', 'https://oss.macphpstudy.com/image/php.png'],
    ['Node.js', 'https://oss.macphpstudy.com/image/Node.js.svg'],
    ['Java', 'https://oss.macphpstudy.com/image/java.svg'],
    ['Tomcat', 'https://oss.macphpstudy.com/image/tomcat.svg']
  ]) {
    assert.ok(moduleSource.includes(url), `AppModules is missing the ${name} logo URL`)
    assert.ok(source.includes(url), `Demos must reuse the ${name} logo URL from AppModules`)
  }

  assert.ok(
    source.indexOf("{ match: /mcp/, mark: 'MCP', src: mcpLogo }") < source.indexOf("{ match: /php/, mark: 'PHP'"),
    'the MCP cover must take precedence when a demo title also mentions PHP'
  )
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

  for (const [downloadLabel, demoLabel, guideLabel] of [
    ['Download', 'Demos', 'Guide'],
    ['下载', '演示', '指南'],
    ['Unduh', 'Demo', 'Panduan']
  ]) {
    assert.match(
      config,
      new RegExp(
        `\\{ text: '${downloadLabel}', link: '[^']+' \\},\\s+\\{ text: '${demoLabel}', link: '[^']+' \\},\\s+\\{ text: '${guideLabel}', link: '[^']+' \\}`
      )
    )
  }
  assert.doesNotMatch(config, /\{ text: 'FlyPHPServer', link: '\/[^']*flyphpserver' \}/)

  assert.match(theme, /demos_nav_click/)
  assert.match(theme, /primary_nav/)
})
