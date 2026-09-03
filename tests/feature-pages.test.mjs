import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

// slug -> { terms: 页面必含关键术语, minImages: 最少占位图数 }
const manifest = {
  php: { terms: ['PHP-FPM', 'php.ini', 'Composer', 'WordPress'], minImages: 13 },
  nodejs: { terms: ['Version Manager', 'Run as service', 'reverse'], minImages: 0 },
  'local-sites-https': { terms: ['HTTPS', 'domain', 'reverse'], minImages: 0 },
  python: { terms: ['Homebrew', 'MacPorts', '.flyenv', 'FastAPI', 'Django'], minImages: 5 },
  java: { terms: ['JDK', 'SDKMAN', 'Maven', '.flyenv'], minImages: 5 },
  go: { terms: ['GVM', 'Version Manager', '.flyenv', 'Projects'], minImages: 4 },
  ruby: { terms: ['Ruby', 'Version Manager', 'Projects', 'PATH'], minImages: 3 },
  rust: { terms: ['rustup', 'Version Manager', 'PATH', 'Projects'], minImages: 3 },
  dotnet: { terms: ['.NET', 'Version Manager', 'PATH', 'Projects'], minImages: 3 },
  zig: { terms: ['Zig', 'Homebrew', 'Projects'], minImages: 3 },
  bun: { terms: ['Bun', 'Static', 'Projects'], minImages: 3 },
  deno: { terms: ['Deno', 'Homebrew', 'Projects'], minImages: 3 },
  erlang: { terms: ['Erlang', 'Homebrew', 'MacPorts'], minImages: 3 },
  gradle: { terms: ['Gradle', 'SDKMAN', 'Version Manager'], minImages: 2 },
  flutter: { terms: ['Flutter', 'doctor', 'Android SDK', 'pub'], minImages: 6 },
  nginx: { terms: ['nginx.conf', 'gzip', 'reverse proxy', 'vhost'], minImages: 5 },
  apache: { terms: ['httpd', 'KeepAlive', 'vhost', 'Homebrew'], minImages: 4 },
  caddy: { terms: ['Caddyfile', 'watch', 'reverse proxy'], minImages: 4 },
  tomcat: { terms: ['CATALINA_BASE', 'server.xml', 'web.xml', 'Java'], minImages: 5 },
  frankenphp: { terms: ['FrankenPHP', 'Caddyfile', 'php_server'], minImages: 4 },
  mysql: { terms: ['mysqld', 'phpMyAdmin', 'Group', 'mysqldump', 'slow'], minImages: 7 },
  mariadb: { terms: ['mariadbd', 'phpMyAdmin', 'MacPorts'], minImages: 5 },
  postgresql: { terms: ['pgAdmin', 'initdb', 'data directory', 'pgvector'], minImages: 5 },
  mongodb: { terms: ['mongod', 'DbGate', 'mongosh'], minImages: 4 },
  clickhouse: { terms: ['ClickHouse', 'CH-UI', '8123', 'macOS and Linux'], minImages: 4 },
  neo4j: { terms: ['Neo4j', 'Java', '7687', 'Browser'], minImages: 4 },
  qdrant: { terms: ['Qdrant', '6333', 'dashboard'], minImages: 3 },
  redis: { terms: ['redis-server', 'Redis Commander', 'requirepass', 'maxmemory'], minImages: 4 },
  memcached: { terms: ['memcached', '11211'], minImages: 2 },
  rabbitmq: { terms: ['RabbitMQ', '15672', 'management', 'Erlang'], minImages: 4 },
  elasticsearch: { terms: ['elasticsearch.yml', 'jvm.options', '9200'], minImages: 4 },
  meilisearch: { terms: ['Meilisearch', '7700', 'meilisearch.toml', 'dashboard'], minImages: 4 },
  typesense: { terms: ['Typesense', '8108', 'macOS and Linux'], minImages: 3 },
  zincsearch: { terms: ['ZincSearch', '4080'], minImages: 3 },
  mailpit: { terms: ['Mailpit', '1025', '8025', 'SMTP'], minImages: 4 },
  minio: { terms: ['MinIO', 'Console', '9001', 'S3-compatible'], minImages: 4 },
  rustfs: { terms: ['RustFS', 'S3-compatible', 'console'], minImages: 4 },
  consul: { terms: ['Consul', '8500', 'data directory'], minImages: 4 },
  etcd: { terms: ['etcd', '2379', 'etcd.yaml'], minImages: 3 },
  'r-nacos': { terms: ['R-Nacos', '8848', 'console'], minImages: 3 },
  temporal: { terms: ['Temporal', '7233', 'namespace', 'SQLite'], minImages: 5 },
  numa: { terms: ['Numa', 'DNS', '5380', 'ad-blocking'], minImages: 4 },
  ollama: { terms: ['Ollama', 'Model', '11434', 'pull'], minImages: 5 },
  n8n: { terms: ['n8n', '5678', 'npm', 'Users'], minImages: 5 },
  cliproxyapi: { terms: ['CLIProxyAPI', '8317', 'management'], minImages: 4 },
  'claude-code': { terms: ['Claude Code', 'Plugins', 'Sessions', 'MCP'], minImages: 5 },
  codex: { terms: ['Codex', 'config.toml', 'Sessions', 'MCP'], minImages: 4 },
  opencode: { terms: ['OpenCode', 'Stats', 'Providers', 'Sessions'], minImages: 4 },
  kimi: { terms: ['Kimi', 'Sessions', 'export', 'MCP'], minImages: 4 },
  'antigravity-cli': { terms: ['Antigravity', 'Skills', 'agy', 'Sessions'], minImages: 4 },
  'github-copilot-cli': { terms: ['Copilot', 'Skills', 'Sessions', 'npm'], minImages: 4 },
  openclaw: { terms: ['OpenClaw', 'gateway', 'command'], minImages: 3 },
  'hermes-agent': { terms: ['Hermes', 'gateway', 'Skills', 'Sessions'], minImages: 4 },
  'mcp-server': { terms: ['MCP', 'Streamable HTTP', '7682', 'Audit Log', 'Tools'], minImages: 5 },
  'dns-server': { terms: ['DNS', 'port 53', 'hosts', 'query'], minImages: 3 },
  'ftp-server': { terms: ['Pure-FTPd', 'ftp-srv', 'account', 'port 21'], minImages: 4 },
  'startup-groups': { terms: ['Startup Groups', 'default group', 'tray'], minImages: 3 },
  'cron-jobs': { terms: ['cron', 'crontab', 'Task Scheduler', 'run history'], minImages: 4 },
  'per-project-runtimes': { terms: ['.flyenv', 'shell hook', 'PATH', 'IDE'], minImages: 4 },
  'user-modules': { terms: ['custom module', 'sudo', 'pid'], minImages: 4 },
  'cli-terminal': { terms: ['terminal', 'shell', 'PowerShell', 'environment variables'], minImages: 3 },
  podman: { terms: ['Podman', 'machine', 'Compose', 'Image', 'Container'], minImages: 5 },
  cloudflared: { terms: ['cloudflared', 'Homebrew', 'PATH'], minImages: 2 },
  'cloudflare-tunnel': { terms: ['Cloudflare Tunnel', 'API Token', 'CNAME', 'ingress'], minImages: 4 }
}

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

for (const [slug, { terms, minImages }] of Object.entries(manifest)) {
  test(`feature page /features/${slug} meets the contract`, () => {
    const page = fs.readFileSync(new URL(`../docs/features/${slug}.md`, import.meta.url), 'utf8')

    // frontmatter contract
    assert.match(page, /layout: doc/)
    assert.match(page, /titleTemplate: false/)
    assert.match(page, /rel: canonical/)
    const canonicalCount = (page.match(new RegExp(`https://www\\.flyenv\\.com/features/${slug}`, 'g')) ?? []).length
    assert.ok(canonicalCount >= 2, 'og:url and canonical both point at the page URL')

    // unique title & description across meta tags
    const titleMatch = page.match(/^title: '(.+)'$/m)
    const descMatch = page.match(/^description: '(.+)'$/m)
    assert.ok(titleMatch, 'frontmatter title present')
    assert.ok(descMatch, 'frontmatter description present')
    assert.ok(page.includes(`content: '${titleMatch[1]}'`), 'og:title repeats title')
    assert.ok(page.includes(`content: '${descMatch[1]}'`), 'description metas repeat description')

    // exactly one H1
    assert.equal((page.match(/^# /gm) ?? []).length, 1, 'exactly one H1')

    // placeholder screenshots: slug-matched, numbered from 1 without gaps
    const images = [
      ...page.matchAll(
        /!\[[^\]]+\]\(https:\/\/oss\.macphpstudy\.com\/image\/features\/([a-z0-9-]+)-(\d+)\.webp\)/g
      )
    ]
    assert.ok(images.length >= minImages, `at least ${minImages} screenshots`)
    images.forEach((m, i) => {
      assert.equal(m[1], slug, 'image slug matches page slug')
      assert.equal(Number(m[2]), i + 1, 'image numbers are sequential from 1')
    })

    // structure
    assert.match(page, /## Compatibility Notes/)

    // no license/trial marketing blockers
    assert.doesNotMatch(page, /licen[cs]e|trial/i)

    // at least two internal links
    const links = page.match(/\]\(\/(guide|solutions|features|download|demos)[^)]*\)/g) ?? []
    assert.ok(links.length >= 2, 'at least two internal links')

    // key terms
    for (const term of terms) {
      assert.match(page, new RegExp(escapeRegExp(term), 'i'), `contains "${term}"`)
    }
  })
}
