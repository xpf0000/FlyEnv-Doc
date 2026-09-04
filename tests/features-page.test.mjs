import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

const page = fs.readFileSync(new URL('../docs/features.md', import.meta.url), 'utf8')

test('features page presents the full product capability overview', () => {
  for (const heading of [
    'Everything you need',
    'for local development',
    'Languages & Runtimes',
    'Web Servers & Local Sites',
    'Databases & Database Management',
    'Cache, Messaging & Search',
    'Infrastructure, Storage & Network',
    'Developer Workflow & Productivity',
    'AI, MCP & Automation'
  ]) {
    assert.match(page, new RegExp(heading.replace(/[&]/g, '\\&')))
  }
})

test('features page links users to verified workflows', () => {
  for (const link of [
    '/features/php',
    '/features/nodejs',
    '/features/local-sites-https',
    '/guide/getting-started',
    '/features/mcp-server',
    '/download'
  ]) {
    assert.match(page, new RegExp(link.replaceAll('/', '\\/')))
  }
})

test('features page keeps styling in Tailwind utilities', () => {
  assert.doesNotMatch(page, /class="[^"]*live-app-block/)
  assert.match(page, /class="[^"]*grid/)
})

test('features page opts out of VitePress heading rules with the shared utility', () => {
  assert.equal((page.match(/<h2 class="no-border/g) || []).length, 3)
})

test('features page applies the review refinements', () => {
  assert.match(page, /flyenv-mcp-screen\.webp/)
  assert.doesNotMatch(page, /flyenv-mcp\.jpeg/)
  assert.match(page, /relative left-1\/2 w-screen -translate-x-1\/2/)
  assert.match(page, /Explore the FlyEnv stack\./)
  assert.match(page, /\[&_h4\+p\]:!leading-5/)
  assert.match(page, /Per-Project Runtimes/)
  assert.match(page, /Mailpit/)
  assert.match(page, /CLIProxyAPI/)
  assert.match(page, /import frankenPhpLogo from '\.\/components\/SVG\/FrankenPHP\.svg'/)
  assert.doesNotMatch(page, /more: true/)
})

test('features page applies the final chat30 polish', () => {
  assert.match(page, /Container-free local workflows/)
  assert.match(page, /Browse runtimes, web servers, databases and development workflows available in FlyEnv\./)
  assert.match(page, /shrink-0 aspect-square/)
  assert.match(page, /v-else-if="item\.mark"/)
  assert.doesNotMatch(page, /item\.more/)
  assert.doesNotMatch(page, /More (runtimes|databases|services)/)
  for (const categoryCta of [
    'Read runtime guide',
    'See all web features',
    'Read the database guide',
    'See all services',
    'Explore infrastructure demos'
  ]) {
    assert.doesNotMatch(page, new RegExp(categoryCta))
  }
})

test('features page exposes every AppModules capability', () => {
  for (const moduleName of [
    'FrankenPHP', 'Apache', 'Nginx', 'Caddy', 'Tomcat', 'MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB',
    'Qdrant', 'ClickHouse', 'Neo4j', 'PHP', 'Node.js', 'Python', 'Java', 'Go', 'Erlang', 'Ruby',
    'Rust', '.NET', 'Zig', 'Bun', 'Deno', 'Flutter', 'Gradle', 'Redis', 'Memcached', 'RabbitMQ',
    'Elasticsearch', 'Meilisearch', 'Typesense', 'ZincSearch', 'Mailpit', 'MCP Server', 'Claude Code',
    'Codex', 'OpenCode', 'Kimi', 'Antigravity CLI', 'GitHub Copilot CLI', 'Hermes Agent', 'OpenClaw',
    'n8n', 'Ollama', 'CLIProxyAPI', 'RustFS', 'Minio', 'Podman', 'Cloudflared', 'Cloudflare Tunnel',
    'Numa', 'DNS Server', 'FTP Server', 'R-NACOS', 'Consul', 'Etcd', 'Temporal'
  ]) {
    assert.match(page, new RegExp(moduleName.replace(/[.+]/g, '\\$&')))
  }
})
