---
layout: home
titleTemplate: false
title: 'FlyEnv Features: Runtimes, Services, Local Sites and More'
description: 'Explore the runtimes, services, project workflows and local site tools FlyEnv manages in one native development workspace.'
head:
  - - meta
    - name: description
      content: 'Explore the runtimes, services, project workflows and local site tools FlyEnv manages in one native development workspace.'
  - - meta
    - property: og:title
      content: 'FlyEnv Features: Runtimes, Services, Local Sites and More'
  - - meta
    - property: og:description
      content: 'Explore the runtimes, services, project workflows and local site tools FlyEnv manages in one native development workspace.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://www.flyenv.com/features
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://www.flyenv.com/features
---

<script setup lang="ts">
import frankenPhpLogo from './components/SVG/FrankenPHP.svg'
import qdrantLogo from './components/SVG/qdrant.svg'
import clickHouseLogo from './components/SVG/ClickHouse.svg'
import neo4jLogo from './components/SVG/Neo4j.svg'
import pythonLogo from './components/SVG/Python.svg'
import goLogo from './components/SVG/Go.svg'
import erlangLogo from './components/SVG/Erlang.svg'
import rubyLogo from './components/SVG/Ruby.svg'
import rustLogo from './components/SVG/Rust.svg'
import dotNetLogo from './components/SVG/DotNet.svg'
import zigLogo from './components/SVG/zig.svg'
import bunLogo from './components/SVG/bun.svg'
import denoLogo from './components/SVG/Deno.svg'
import flutterLogo from './components/SVG/Flutter.svg'
import gradleLogo from './components/SVG/Gradle.svg'
import rabbitMqLogo from './components/SVG/RabbitMQ.svg'
import elasticsearchLogo from './components/SVG/Elasticsearch.svg'
import meilisearchLogo from './components/SVG/Meilisearch.svg'
import typesenseLogo from './components/SVG/Typesense.svg'
import mailpitLogo from './components/SVG/Mailpit.svg'
import claudeCodeLogo from './components/SVG/claude-code.svg'
import codexLogo from './components/SVG/codex.svg'
import openCodeLogo from './components/SVG/opencode.svg'
import kimiLogo from './components/SVG/kimi.svg'
import antigravityLogo from './components/SVG/antigravity.svg'
import githubLogo from './components/SVG/github.svg'
import hermesLogo from './components/SVG/Hermes.svg'
import openClawLogo from './components/SVG/OpenClaw.svg'
import n8nLogo from './components/SVG/n8n.svg'
import ollamaLogo from './components/SVG/Ollama.svg'
import rustFsLogo from './components/SVG/RustFS.svg'
import minioLogo from './components/SVG/Minio.svg'
import podmanLogo from './components/SVG/Podman.svg'
import cloudflareLogo from './components/SVG/cloudflare.svg'
import rNacosLogo from './components/SVG/R-NACOS.svg'
import consulLogo from './components/SVG/Consul.svg'
import etcdLogo from './components/SVG/etcd.svg'
import temporalLogo from './components/SVG/Temporal.svg'

const categories = [
  {
    id: 'languages', eyebrow: '01 / Build with your stack', title: 'Languages & Runtimes',
    description: 'Install, switch and scope the runtimes each project needs.', tone: 'bg-blue-50 text-blue-700',
    items: [
      { name: 'PHP', detail: 'Manage versions, extensions and PHP-FPM.', href: '/features/php', logo: 'https://oss.macphpstudy.com/image/php.png' },
      { name: 'Node.js', detail: 'Pin Node versions per project.', href: '/features/nodejs', logo: 'https://oss.macphpstudy.com/image/Node.js.svg' },
      { name: 'Python', detail: 'Run Python versions with local services.', href: '/features/python', logo: pythonLogo },
      { name: 'Java', detail: 'Set up Java for Spring Boot projects.', href: '/features/java', logo: 'https://oss.macphpstudy.com/image/java.svg' },
      { name: 'Go', detail: 'Run Go projects with a managed toolchain.', href: '/features/go', logo: goLogo },
      { name: 'Erlang', detail: 'Keep Erlang runtimes close to your project.', href: '/features/erlang', logo: erlangLogo },
      { name: 'Ruby', detail: 'Switch Ruby runtimes for local apps.', href: '/features/ruby', logo: rubyLogo },
      { name: 'Rust', detail: 'Build Rust projects with local toolchains.', href: '/features/rust', logo: rustLogo },
      { name: '.NET', detail: 'Run .NET projects in your workspace.', href: '/features/dotnet', logo: dotNetLogo },
      { name: 'Zig', detail: 'Experiment with Zig locally.', href: '/features/zig', logo: zigLogo },
      { name: 'Bun', detail: 'Manage Bun versions and services.', href: '/features/bun', logo: bunLogo },
      { name: 'Deno', detail: 'Run Deno projects without extra setup.', href: '/features/deno', logo: denoLogo },
      { name: 'Flutter', detail: 'Keep Flutter SDK tools available locally.', href: '/features/flutter', logo: flutterLogo },
      { name: 'Gradle', detail: 'Build JVM projects with Gradle.', href: '/features/gradle', logo: gradleLogo }
    ]
  },
  {
    id: 'web', eyebrow: '02 / Ship locally', title: 'Web Servers & Local Sites',
    description: 'Map code to friendly domains, HTTPS and the server that fits.', tone: 'bg-emerald-50 text-emerald-700',
    items: [
      { name: 'Local Sites & HTTPS', detail: 'Create local domains, HTTPS and proxies.', href: '/features/local-sites-https', logo: '' },
      { name: 'FrankenPHP', detail: 'Serve modern PHP apps with FrankenPHP.', href: '/features/frankenphp', logo: frankenPhpLogo },
      { name: 'Nginx', detail: 'Run versioned Nginx sites and configs.', href: '/features/nginx', logo: 'https://oss.macphpstudy.com/image/nginx.png' },
      { name: 'Apache', detail: 'Serve PHP projects with Apache locally.', href: '/features/apache', logo: 'https://oss.macphpstudy.com/image/apache.png' },
      { name: 'Caddy', detail: 'Serve local sites with automatic HTTPS.', href: '/features/caddy', logo: 'https://oss.macphpstudy.com/image/caddy.svg' },
      { name: 'Tomcat', detail: 'Run Java web apps with Tomcat.', href: '/features/tomcat', logo: 'https://oss.macphpstudy.com/image/tomcat.svg' }
    ]
  },
  {
    id: 'databases', eyebrow: '03 / Persist with confidence', title: 'Databases & Database Management',
    description: 'Keep relational, document and analytical stores close to your code.', tone: 'bg-violet-50 text-violet-700',
    items: [
      { name: 'MySQL', detail: 'Run MySQL versions and manage users.', href: '/features/mysql', logo: 'https://oss.macphpstudy.com/image/mysql.png' },
      { name: 'PostgreSQL', detail: 'Run PostgreSQL and connect pgAdmin.', href: '/features/postgresql', logo: 'https://oss.macphpstudy.com/image/postgresql.svg' },
      { name: 'MariaDB', detail: 'Run an isolated MySQL-compatible service.', href: '/features/mariadb', logo: 'https://oss.macphpstudy.com/image/mariadb.svg' },
      { name: 'MongoDB', detail: 'Start MongoDB for app development.', href: '/features/mongodb', logo: 'https://oss.macphpstudy.com/image/MongoDB.svg' },
      { name: 'Qdrant', detail: 'Run a local vector database for AI apps.', href: '/features/qdrant', logo: qdrantLogo },
      { name: 'ClickHouse', detail: 'Explore analytical workloads locally.', href: '/features/clickhouse', logo: clickHouseLogo },
      { name: 'Neo4j', detail: 'Prototype graph-backed applications locally.', href: '/features/neo4j', logo: neo4jLogo }
    ]
  },
  {
    id: 'services', eyebrow: '04 / Add what your app needs', title: 'Cache, Messaging & Search',
    description: 'Bring queues, caches and search indexes into the same workspace.', tone: 'bg-rose-50 text-rose-700',
    items: [
      { name: 'Redis', detail: 'Run Redis for cache, sessions and queues.', href: '/demos', logo: 'https://oss.macphpstudy.com/image/redis.png' },
      { name: 'Memcached', detail: 'Test lightweight application caching locally.', href: '/demos', logo: 'https://oss.macphpstudy.com/image/memcached.png' },
      { name: 'RabbitMQ', detail: 'Run RabbitMQ and inspect local queues.', href: '/demos', logo: rabbitMqLogo },
      { name: 'Elasticsearch', detail: 'Build search features with local Elasticsearch.', href: '/demos', logo: elasticsearchLogo },
      { name: 'Meilisearch', detail: 'Prototype fast local search experiences.', href: '/demos', logo: meilisearchLogo },
      { name: 'Typesense', detail: 'Test typo-tolerant search locally.', href: '/demos', logo: typesenseLogo },
      { name: 'ZincSearch', detail: 'Run a lightweight local search engine.', href: '/demos', logo: '/home/zincsearch.png' },
      { name: 'Mailpit', detail: 'Capture local email and SMTP traffic.', href: '/demos', logo: mailpitLogo }
    ]
  },
  {
    id: 'infrastructure', eyebrow: '05 / Connect the edges', title: 'Infrastructure, Storage & Network',
    description: 'Model the supporting services your local and distributed systems rely on.', tone: 'bg-cyan-50 text-cyan-700',
    items: [
      { name: 'Numa', detail: 'Run local DNS with Numa.', href: '/demos', mark: 'Numa' },
      { name: 'DNS Server', detail: 'Manage local DNS services.', href: '/demos', logo: 'https://oss.macphpstudy.com/image/dns.svg' },
      { name: 'FTP Server', detail: 'Run an FTP service for local testing.', href: '/demos', logo: 'https://oss.macphpstudy.com/image/ftp.svg' },
      { name: 'Minio', detail: 'Run S3-compatible storage locally.', href: '/demos', logo: minioLogo },
      { name: 'RustFS', detail: 'Prototype S3-compatible storage locally.', href: '/demos', logo: rustFsLogo },
      { name: 'Podman', detail: 'Use containers when a project calls for them.', href: '/features/podman', logo: podmanLogo },
      { name: 'Cloudflared', detail: 'Run the Cloudflare connector locally.', href: '/features/cloudflared', logo: cloudflareLogo },
      { name: 'Cloudflare Tunnel', detail: 'Expose local sites for webhooks and reviews.', href: '/features/cloudflare-tunnel', logo: cloudflareLogo },
      { name: 'R-NACOS', detail: 'Test service discovery and configuration locally.', href: '/demos', logo: rNacosLogo },
      { name: 'Consul', detail: 'Run service discovery in your workspace.', href: '/demos', logo: consulLogo },
      { name: 'Etcd', detail: 'Test distributed configuration locally.', href: '/demos', logo: etcdLogo }
    ]
  },
  {
    id: 'workflow', eyebrow: '06 / Make it repeatable', title: 'Developer Workflow & Productivity',
    description: 'Turn recurring setup, commands and project services into one-click workflows.', tone: 'bg-amber-50 text-amber-700',
    items: [
      { name: 'Startup Groups', detail: "Start a project's services together.", href: '/guide/getting-started', logo: '' },
      { name: 'Per-Project Runtimes', detail: 'Scope versions and ports per project.', href: '/guide/project-level-runtime-environment', logo: '' },
      { name: 'Cron Jobs', detail: 'Schedule local commands and jobs.', href: '/guide/getting-started', logo: '' },
      { name: 'User Modules', detail: 'Create and share custom modules.', href: '/guide/user-customizable-modules', logo: '' },
      { name: 'CLI & Terminal', detail: 'Use an integrated terminal with FlyEnv context.', href: '/guide/code-playground-and-code-library', logo: '' },
      { name: 'Temporal', detail: 'Run durable workflows locally.', href: '/demos', logo: temporalLogo }
    ]
  },
  {
    id: 'ai', eyebrow: '07 / Build with context', title: 'AI, MCP & Automation',
    description: 'Give AI coding tools a secure bridge to the local environment you control.', tone: 'bg-indigo-50 text-indigo-700',
    items: [
      { name: 'MCP Server', detail: 'Connect AI tools to local project state.', href: '/guide/ai-coding-workspace-mcp', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Claude Code', detail: 'Use Claude Code beside your local stack.', href: '/guide/flyenv-work-with-ai', logo: claudeCodeLogo },
      { name: 'Codex', detail: 'Keep Codex close to project services.', href: '/guide/flyenv-work-with-ai', logo: codexLogo },
      { name: 'OpenCode', detail: 'Run OpenCode with local project context.', href: '/guide/flyenv-work-with-ai', logo: openCodeLogo },
      { name: 'Kimi', detail: 'Connect Kimi to local development workflows.', href: '/guide/flyenv-work-with-ai', logo: kimiLogo },
      { name: 'Antigravity CLI', detail: 'Use Antigravity CLI with FlyEnv context.', href: '/guide/flyenv-work-with-ai', logo: antigravityLogo },
      { name: 'GitHub Copilot CLI', detail: 'Bring Copilot CLI into your terminal workflow.', href: '/guide/flyenv-work-with-ai', logo: githubLogo },
      { name: 'Hermes Agent', detail: 'Connect an AI agent to local services.', href: '/guide/flyenv-work-with-ai', logo: hermesLogo },
      { name: 'OpenClaw', detail: 'Build local agent workflows with OpenClaw.', href: '/guide/flyenv-work-with-ai', logo: openClawLogo },
      { name: 'n8n', detail: 'Prototype local automations and integrations.', href: '/guide/build-local-ai-workflow-by-n8n', logo: n8nLogo },
      { name: 'Ollama', detail: 'Run offline models beside your stack.', href: '/guide/build-local-offline-ai-agent', logo: ollamaLogo },
      { name: 'CLIProxyAPI', detail: 'Route local AI providers through one gateway.', href: '/demos', mark: 'CLIProxyAPI' }
    ]
  }
]

const jumps = categories.map(({ id, title }) => ({ id, title }))
</script>

<div class="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white text-slate-950 [&_a]:no-underline [&_h4+p]:!leading-5">
  <section class="relative isolate border-b border-slate-200/80 bg-slate-50">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(14,165,233,0.1),transparent_30%)]"></div>
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-28">
      <div class="max-w-xl">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm"><span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>All-in-one local development environment</div>
        <h1 class="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">Everything you need<br /><span class="text-blue-600">for local development</span></h1>
        <p class="mt-7 max-w-lg text-lg leading-8 text-slate-600">Manage language runtimes, databases, web servers, local sites and AI tools from one native desktop workspace — on Windows, macOS and Linux.</p>
        <div class="mt-9 flex flex-wrap gap-3"><a href="/download" class="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0">Download FlyEnv <span class="ml-2">→</span></a><a href="/guide/getting-started" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 active:translate-y-0">Read the quick start</a></div>
        <div class="mt-12 grid max-w-lg grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-3 sm:gap-5"><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">✦</span>Native desktop app</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">⌘</span>Container-free local workflows</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">◌</span>Works offline</div></div>
      </div>
      <div class="relative lg:justify-self-end"><div class="absolute -inset-5 -z-10 rounded-[2rem] bg-blue-200/40 blur-3xl"></div><div class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-2 shadow-[0_28px_80px_-32px_rgba(15,23,42,0.45)]"><img src="/home/flyenv-mcp-screen.webp" alt="FlyEnv MCP Server and local runtime controls" class="block w-full rounded-[1.1rem]" /></div><div class="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block"><p class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">One workspace</p><p class="mt-1 text-sm font-semibold text-slate-900">Your stack, in context.</p></div></div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12"><div class="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"><span class="px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Explore by capability</span><a v-for="jump in jumps" :key="jump.id" :href="`#${jump.id}`" class="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">{{ jump.title }}</a></div></section>

  <main class="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12"><div class="mb-14 max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Explore FlyEnv features</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Explore the FlyEnv stack.</h2><p class="mt-4 text-base leading-7 text-slate-600">Browse runtimes, web servers, databases and development workflows available in FlyEnv.</p></div>
    <section v-for="category in categories" :id="category.id" :key="category.id" class="scroll-mt-28 border-t border-slate-200 py-12 first:border-t-0 first:pt-0">
      <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{{ category.eyebrow }}</p>
          <h3 class="mt-2 text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-3xl">{{ category.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">{{ category.description }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        <a v-for="item in category.items" :key="item.name" :href="item.href" class="group flex min-h-[168px] flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_35px_-24px_rgba(37,99,235,0.6)]">
          <div class="flex items-start justify-between gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl" :class="category.tone">
              <img v-if="item.logo" :src="item.logo" :alt="`${item.name} logo`" class="h-6 w-6 object-contain" />
              <span v-else-if="item.mark" class="text-[10px] font-bold tracking-[-0.04em] text-slate-500">{{ item.mark }}</span>
              <span v-else class="text-lg font-semibold">＋</span>
            </div>
            <span class="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-500">↗</span>
          </div>
          <h4 class="mt-5 text-base font-semibold text-slate-950">{{ item.name }}</h4>
          <p class="mt-2 text-sm leading-5 text-slate-600">{{ item.detail }}</p>
          <span class="mt-auto pt-4 text-xs font-semibold text-blue-600">Explore {{ item.name }} <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </section>
  </main>

  <section class="border-y border-slate-200 bg-slate-50"><div class="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-16"><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Not sure where to start?</p><h2 class="no-border mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Choose a workflow, then make it yours.</h2><p class="mt-3 max-w-2xl text-base leading-7 text-slate-600">Follow the quick start to create your first local site, browse verified demos for real stacks, or connect FlyEnv to the AI tools you already use.</p></div><div class="flex flex-wrap gap-3 lg:justify-end"><a href="/guide/getting-started" class="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">Quick Start Guide <span class="ml-2">→</span></a><a href="/demos" class="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400">Browse demos</a></div></div></section>

  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20"><div class="rounded-[2rem] bg-slate-950 px-7 py-10 text-white sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">One native workspace</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Stop stitching your local environment together.</h2><p class="mt-4 text-base leading-7 text-slate-300">Install FlyEnv and keep runtimes, services, sites and AI workflows close to the projects they power.</p></div><a href="/download" class="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50 lg:mt-0">Download FlyEnv <span class="ml-2">→</span></a></div></section>
</div>
