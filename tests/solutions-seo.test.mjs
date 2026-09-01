import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

const projectRoot = process.cwd()
const dist = (...parts) => resolve(projectRoot, 'docs/.vitepress/dist', ...parts)

const solutionPages = {
  laravel: {
    name: 'Laravel',
    description:
      'Set up and manage a local Laravel development environment with PHP, MySQL or PostgreSQL, Redis, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  django: {
    name: 'Django',
    description:
      'Set up a local Django development environment with Python, PostgreSQL or MySQL, Redis, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  fastapi: {
    name: 'FastAPI',
    description:
      'Run FastAPI locally with Python, PostgreSQL or MySQL, Redis, Nginx or Caddy, and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  'spring-boot': {
    name: 'Spring Boot',
    description:
      'Run Spring Boot locally with Java, PostgreSQL or MySQL, Redis, Nginx or Caddy, and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  wordpress: {
    name: 'WordPress',
    description:
      'Set up a local WordPress site with PHP, MySQL or MariaDB, Redis, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  drupal: {
    name: 'Drupal',
    description:
      'Run Drupal locally with PHP, MySQL, MariaDB or PostgreSQL, Redis, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  ghost: {
    name: 'Ghost',
    description:
      'Run Ghost locally with Node.js, MySQL, Nginx or Caddy, and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  nextcloud: {
    name: 'Nextcloud',
    description:
      'Set up a local Nextcloud environment with PHP, a database, Redis, a web server and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  magento: {
    name: 'Magento',
    description:
      'Set up and manage a local Magento development environment with PHP, MySQL or MariaDB, OpenSearch or Elasticsearch, Redis and Nginx using FlyEnv on Windows, macOS and Linux.'
  },
  prestashop: {
    name: 'PrestaShop',
    description:
      'Set up a local PrestaShop development environment with PHP, MySQL or MariaDB, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  opencart: {
    name: 'OpenCart',
    description:
      'Set up a local OpenCart development environment with PHP, MySQL or MariaDB, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  erpnext: {
    name: 'ERPNext',
    description:
      'Run ERPNext locally with Python, MariaDB, Redis, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  odoo: {
    name: 'Odoo',
    description:
      'Run Odoo locally with Python, PostgreSQL, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  suitecrm: {
    name: 'SuiteCRM',
    description:
      'Set up a local SuiteCRM environment with PHP, MySQL or MariaDB, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  espocrm: {
    name: 'EspoCRM',
    description:
      'Set up a local EspoCRM environment with PHP, MySQL or MariaDB, Redis, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  gitea: {
    name: 'Gitea',
    description:
      'Run Gitea locally with Go, a supported database, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  strapi: {
    name: 'Strapi',
    description:
      'Run Strapi locally with Node.js, PostgreSQL or MySQL, Redis and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  directus: {
    name: 'Directus',
    description:
      'Run Directus locally with Node.js, PostgreSQL or MySQL, Redis, a reverse proxy and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  matomo: {
    name: 'Matomo',
    description:
      'Run Matomo locally with PHP, MySQL or MariaDB, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  },
  metabase: {
    name: 'Metabase',
    description:
      'Run Metabase locally with Java, PostgreSQL, Nginx and HTTPS using FlyEnv on Windows, macOS and Linux.'
  }
}

function metaContent(html, attribute, value) {
  const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const match = html.match(
    new RegExp(`<meta ${attribute}="${escapedValue}" content="([^"]*)">`)
  )

  return match?.[1]
}

function jsonLdEntries(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    ([, json]) => JSON.parse(json)
  )
}

test('Solutions pages publish complete English SEO metadata in the generated site', () => {
  execFileSync('yarn', ['docs:build'], {
    cwd: projectRoot,
    encoding: 'utf8',
    stdio: 'pipe',
    maxBuffer: 10 * 1024 * 1024
  })

  const solutionsHome = readFileSync(dist('solutions.html'), 'utf8')
  assert.match(solutionsHome, /<title>Solutions: Run Popular Projects Locally \| FlyEnv<\/title>/)
  assert.equal(
    metaContent(solutionsHome, 'property', 'og:image'),
    'https://oss.macphpstudy.com/image/app-icon.png',
    'Solutions home OG image'
  )
  assert.equal(
    metaContent(solutionsHome, 'name', 'twitter:image'),
    'https://oss.macphpstudy.com/image/app-icon.png',
    'Solutions home Twitter image'
  )

  const homeSchema = jsonLdEntries(solutionsHome).find((entry) => entry['@type'] === 'CollectionPage')
  assert.deepEqual(homeSchema?.isPartOf, {
    '@type': 'WebSite',
    name: 'FlyEnv',
    url: 'https://flyenv.com/'
  })

  for (const [slug, { name, description }] of Object.entries(solutionPages)) {
    const html = readFileSync(dist('solutions', `${slug}.html`), 'utf8')
    const title = `Run ${name} Locally with FlyEnv`
    const url = `https://flyenv.com/solutions/${slug}.html`

    assert.equal(metaContent(html, 'name', 'description'), description, `${slug} description`)
    assert.equal(metaContent(html, 'property', 'og:title'), title, `${slug} OG title`)
    assert.equal(metaContent(html, 'property', 'og:description'), description, `${slug} OG description`)
    assert.equal(metaContent(html, 'property', 'og:type'), 'website', `${slug} OG type`)
    assert.equal(metaContent(html, 'property', 'og:url'), url, `${slug} OG URL`)
    assert.equal(metaContent(html, 'property', 'og:image'), 'https://oss.macphpstudy.com/image/app-icon.png', `${slug} OG image`)
    assert.equal(metaContent(html, 'name', 'twitter:card'), 'summary', `${slug} Twitter card`)
    assert.equal(metaContent(html, 'name', 'twitter:title'), title, `${slug} Twitter title`)
    assert.equal(metaContent(html, 'name', 'twitter:description'), description, `${slug} Twitter description`)
    assert.equal(metaContent(html, 'name', 'twitter:image'), 'https://oss.macphpstudy.com/image/app-icon.png', `${slug} Twitter image`)
    assert.equal(
      [...html.matchAll(/<link rel="canonical" href="[^"]+">/g)].length,
      1,
      `${slug} has one canonical`
    )
    assert.match(html, new RegExp(`<link rel="canonical" href="${url}">`), `${slug} canonical`)
    assert.match(html, /<nav aria-label="Breadcrumb"[^>]*>/, `${slug} visible breadcrumb`)

    const graph = jsonLdEntries(html).find((entry) => Array.isArray(entry['@graph']))?.['@graph']
    const webPage = graph?.find((entry) => entry['@type'] === 'WebPage')
    const breadcrumb = graph?.find((entry) => entry['@type'] === 'BreadcrumbList')

    assert.equal(webPage?.url, url, `${slug} WebPage URL`)
    assert.equal(webPage?.description, description, `${slug} WebPage description`)
    assert.deepEqual(breadcrumb?.itemListElement, [
      { '@type': 'ListItem', position: 1, name: 'FlyEnv', item: 'https://flyenv.com/' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://flyenv.com/solutions.html' },
      { '@type': 'ListItem', position: 3, name, item: url }
    ])
  }
})
