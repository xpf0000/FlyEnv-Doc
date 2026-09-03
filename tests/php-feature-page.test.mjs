import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

const page = fs.readFileSync(new URL('../docs/features/php.md', import.meta.url), 'utf8')

test('php feature page keeps its SEO frontmatter contract', () => {
  assert.match(page, /layout: doc/)
  assert.match(page, /titleTemplate: false/)
  assert.match(page, /https:\/\/www\.flyenv\.com\/features\/php/)
  assert.match(page, /rel: canonical/)
})

test('php feature page covers all core feature sections', () => {
  for (const heading of [
    '## PHP version management',
    '## PHP-FPM service management',
    '## php.ini configuration',
    '## Extension management',
    '## Project-level PHP isolation',
    '## Composer management',
    '## Quick project creation',
    '## More PHP tools',
    '## PHP Application Servers',
    '## Compatibility Notes'
  ]) {
    assert.match(page, new RegExp(heading.replace(/[.*]/g, '\\$&')))
  }
})

test('php feature page embeds 13 placeholder screenshots in order', () => {
  const matches = [
    ...page.matchAll(
      /!\[[^\]]+\]\(https:\/\/oss\.macphpstudy\.com\/image\/features\/php-(\d+)\.webp\)/g
    )
  ]
  assert.deepEqual(
    matches.map((m) => Number(m[1])),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  )
})

test('php feature page lists exactly the supported project templates', () => {
  for (const tpl of [
    'WordPress',
    'Laravel',
    'Yii2',
    'ThinkPHP',
    'Symfony',
    'CodeIgniter',
    'CakePHP',
    'Slim',
    'ClassicPress',
    'Contao'
  ]) {
    assert.match(page, new RegExp(tpl))
  }
  assert.doesNotMatch(page, /Drupal|Nextcloud/)
})

test('php feature page documents platform differences and limits', () => {
  assert.match(page, /FastCGI/)
  assert.match(page, /MacPorts/)
  assert.match(page, /disable_functions/)
  assert.match(page, /\.flyenv/)
  assert.doesNotMatch(page, /licen[cs]e|trial/i)
})

test('php feature page keeps cross-links to related docs', () => {
  for (const link of [
    '/guide/deploy-php-projects-without-docker',
    '/guide/php-extensions-install',
    '/features/local-sites-https',
    '/download'
  ]) {
    assert.match(page, new RegExp(link.replaceAll('/', '\\/')))
  }
})
