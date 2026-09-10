---
layout: home
titleTemplate: false
title: 'FlyEnv 特性：运行时、服务、本地站点等'
description: '探索 FlyEnv 在原生开发工作区中管理的运行时、服务、项目工作流和本地站点工具。'
head:
  - - meta
    - name: description
      content: '探索 FlyEnv 的运行时、服务、本地站点和项目工作流。'
  - - meta
    - property: og:title
      content: 'FlyEnv 特性：运行时、服务、本地站点等'
  - - meta
    - property: og:description
      content: '探索 FlyEnv 的运行时、服务、本地站点和项目工作流。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features
---

<script setup lang="ts">
import frankenPhpLogo from '../components/SVG/FrankenPHP.svg'
import qdrantLogo from '../components/SVG/qdrant.svg'
import clickHouseLogo from '../components/SVG/ClickHouse.svg'
import neo4jLogo from '../components/SVG/Neo4j.svg'
import pythonLogo from '../components/SVG/Python.svg'
import goLogo from '../components/SVG/Go.svg'
import erlangLogo from '../components/SVG/Erlang.svg'
import rubyLogo from '../components/SVG/Ruby.svg'
import rustLogo from '../components/SVG/Rust.svg'
import dotNetLogo from '../components/SVG/DotNet.svg'
import zigLogo from '../components/SVG/zig.svg'
import bunLogo from '../components/SVG/bun.svg'
import denoLogo from '../components/SVG/Deno.svg'
import flutterLogo from '../components/SVG/Flutter.svg'
import gradleLogo from '../components/SVG/Gradle.svg'
import rabbitMqLogo from '../components/SVG/RabbitMQ.svg'
import elasticsearchLogo from '../components/SVG/Elasticsearch.svg'
import meilisearchLogo from '../components/SVG/Meilisearch.svg'
import typesenseLogo from '../components/SVG/Typesense.svg'
import mailpitLogo from '../components/SVG/Mailpit.svg'
import claudeCodeLogo from '../components/SVG/claude-code.svg'
import codexLogo from '../components/SVG/codex.svg'
import openCodeLogo from '../components/SVG/opencode.svg'
import kimiLogo from '../components/SVG/kimi.svg'
import antigravityLogo from '../components/SVG/antigravity.svg'
import githubLogo from '../components/SVG/github.svg'
import hermesLogo from '../components/SVG/Hermes.svg'
import openClawLogo from '../components/SVG/OpenClaw.svg'
import n8nLogo from '../components/SVG/n8n.svg'
import ollamaLogo from '../components/SVG/Ollama.svg'
import rustFsLogo from '../components/SVG/RustFS.svg'
import minioLogo from '../components/SVG/Minio.svg'
import podmanLogo from '../components/SVG/Podman.svg'
import sslMakeLogo from '../components/SVG/sslmake.svg'
import cloudflareLogo from '../components/SVG/cloudflare.svg'
import rNacosLogo from '../components/SVG/R-NACOS.svg'
import consulLogo from '../components/SVG/Consul.svg'
import etcdLogo from '../components/SVG/etcd.svg'
import temporalLogo from '../components/SVG/Temporal.svg'

const categories = [
  {
    id: 'languages', eyebrow: '01 / 使用你的技术栈', title: '语言与运行时',
    description: '安装、切换并按项目配置所需的运行时。', tone: 'bg-blue-50 text-blue-700',
    items: [
      { name: 'PHP', detail: '管理版本、扩展和 PHP-FPM。', href: '/zh/features/php', logo: 'https://oss.macphpstudy.com/image/php.png' },
      { name: 'Node.js', detail: '按项目固定 Node 版本。', href: '/zh/features/nodejs', logo: 'https://oss.macphpstudy.com/image/Node.js.svg' },
      { name: 'Python', detail: '运行 Python 版本及本地服务。', href: '/zh/features/python', logo: pythonLogo },
      { name: 'Java', detail: '为 Spring Boot 项目配置 Java。', href: '/zh/features/java', logo: 'https://oss.macphpstudy.com/image/java.svg' },
      { name: 'Go', detail: '使用受管工具链运行 Go 项目。', href: '/zh/features/go', logo: goLogo },
      { name: 'Erlang', detail: '让 Erlang 运行时贴近项目。', href: '/zh/features/erlang', logo: erlangLogo },
      { name: 'Ruby', detail: '为本地应用切换 Ruby 运行时。', href: '/zh/features/ruby', logo: rubyLogo },
      { name: 'Rust', detail: '使用本地工具链构建 Rust 项目。', href: '/zh/features/rust', logo: rustLogo },
      { name: '.NET', detail: '在工作区运行 .NET 项目。', href: '/zh/features/dotnet', logo: dotNetLogo },
      { name: 'Zig', detail: '在本地试用 Zig。', href: '/zh/features/zig', logo: zigLogo },
      { name: 'Bun', detail: '管理 Bun 版本和服务。', href: '/zh/features/bun', logo: bunLogo },
      { name: 'Deno', detail: '无需额外设置即可运行 Deno 项目。', href: '/zh/features/deno', logo: denoLogo },
      { name: 'Flutter', detail: '在本地使用 Flutter SDK 工具。', href: '/zh/features/flutter', logo: flutterLogo },
      { name: 'Gradle', detail: '使用 Gradle 构建 JVM 项目。', href: '/zh/features/gradle', logo: gradleLogo }
    ]
  },
  {
    id: 'web', eyebrow: '02 / 本地交付', title: 'Web 服务器与本地站点',
    description: '将代码映射到易记域名、HTTPS 和合适的服务器。', tone: 'bg-emerald-50 text-emerald-700',
    items: [
      { name: 'Local Sites & HTTPS', detail: '创建本地域名、HTTPS 和代理。', href: '/zh/features/local-sites-https', logo: '' },
      { name: 'MkCert', detail: '生成受信任的本地 HTTPS 证书。', href: '/zh/features/mkcert', logo: sslMakeLogo },
      { name: 'FrankenPHP', detail: '使用 FrankenPHP 提供现代 PHP 应用。', href: '/zh/features/frankenphp', logo: frankenPhpLogo },
      { name: 'Nginx', detail: '运行不同版本的 Nginx 站点和配置。', href: '/zh/features/nginx', logo: 'https://oss.macphpstudy.com/image/nginx.png' },
      { name: 'Apache', detail: '在本地使用 Apache 提供 PHP 项目。', href: '/zh/features/apache', logo: 'https://oss.macphpstudy.com/image/apache.png' },
      { name: 'Caddy', detail: '使用自动 HTTPS 提供本地站点。', href: '/zh/features/caddy', logo: 'https://oss.macphpstudy.com/image/caddy.svg' },
      { name: 'Tomcat', detail: '使用 Tomcat 运行 Java Web 应用。', href: '/zh/features/tomcat', logo: 'https://oss.macphpstudy.com/image/tomcat.svg' }
    ]
  },
  {
    id: 'databases', eyebrow: '03 / 可靠持久化', title: '数据库与数据库管理',
    description: '让关系型、文档型和分析型存储贴近代码。', tone: 'bg-violet-50 text-violet-700',
    items: [
      { name: 'MySQL', detail: '运行 MySQL 版本并管理用户。', href: '/zh/features/mysql', logo: 'https://oss.macphpstudy.com/image/mysql.png' },
      { name: 'PostgreSQL', detail: '运行 PostgreSQL 并连接 pgAdmin。', href: '/zh/features/postgresql', logo: 'https://oss.macphpstudy.com/image/postgresql.svg' },
      { name: 'MariaDB', detail: '运行隔离的 MySQL 兼容服务。', href: '/zh/features/mariadb', logo: 'https://oss.macphpstudy.com/image/mariadb.svg' },
      { name: 'MongoDB', detail: '为应用开发启动 MongoDB。', href: '/zh/features/mongodb', logo: 'https://oss.macphpstudy.com/image/MongoDB.svg' },
      { name: 'Qdrant', detail: '为 AI 应用运行本地向量数据库。', href: '/zh/features/qdrant', logo: qdrantLogo },
      { name: 'ClickHouse', detail: '在本地探索分析型工作负载。', href: '/zh/features/clickhouse', logo: clickHouseLogo },
      { name: 'Neo4j', detail: '在本地原型化图数据库应用。', href: '/zh/features/neo4j', logo: neo4jLogo }
    ]
  },
  {
    id: 'services', eyebrow: '04 / 按需添加服务', title: '缓存、消息与搜索',
    description: '将队列、缓存和搜索索引集中到同一工作区。', tone: 'bg-rose-50 text-rose-700',
    items: [
      { name: 'Redis', detail: '运行 Redis 处理缓存、会话和队列。', href: '/zh/features/redis', logo: 'https://oss.macphpstudy.com/image/redis.png' },
      { name: 'Memcached', detail: '在本地测试轻量级应用缓存。', href: '/zh/features/memcached', logo: 'https://oss.macphpstudy.com/image/memcached.png' },
      { name: 'RabbitMQ', detail: '运行 RabbitMQ 并检查本地队列。', href: '/zh/features/rabbitmq', logo: rabbitMqLogo },
      { name: 'Elasticsearch', detail: '使用本地 Elasticsearch 构建搜索功能。', href: '/zh/features/elasticsearch', logo: elasticsearchLogo },
      { name: 'Meilisearch', detail: '快速原型化本地搜索体验。', href: '/zh/features/meilisearch', logo: meilisearchLogo },
      { name: 'Typesense', detail: '在本地测试容错搜索。', href: '/zh/features/typesense', logo: typesenseLogo },
      { name: 'ZincSearch', detail: '运行轻量级本地搜索引擎。', href: '/zh/features/zincsearch', logo: 'https://oss.macphpstudy.com/image/assets/home/zincsearch.png' },
      { name: 'Mailpit', detail: '捕获本地邮件和 SMTP 流量。', href: '/zh/features/mailpit', logo: mailpitLogo }
    ]
  },
  {
    id: 'infrastructure', eyebrow: '05 / 连接基础设施', title: '基础设施、存储与网络',
    description: '模拟本地和分布式系统依赖的支撑服务。', tone: 'bg-cyan-50 text-cyan-700',
    items: [
      { name: 'Numa', detail: '使用 Numa 运行本地 DNS。', href: '/zh/features/numa', mark: 'Numa' },
      { name: 'DNS Server', detail: '管理本地 DNS 服务。', href: '/zh/features/dns-server', logo: 'https://oss.macphpstudy.com/image/dns.svg' },
      { name: 'FTP Server', detail: '运行 FTP 服务进行本地测试。', href: '/zh/features/ftp-server', logo: 'https://oss.macphpstudy.com/image/ftp.svg' },
      { name: 'Minio', detail: '在本地运行兼容 S3 的存储。', href: '/zh/features/minio', logo: minioLogo },
      { name: 'RustFS', detail: '在本地原型化兼容 S3 的存储。', href: '/zh/features/rustfs', logo: rustFsLogo },
      { name: 'Podman', detail: '项目需要时使用容器。', href: '/zh/features/podman', logo: podmanLogo },
      { name: 'Cloudflared', detail: '在本地运行 Cloudflare 连接器。', href: '/zh/features/cloudflared', logo: cloudflareLogo },
      { name: 'Cloudflare Tunnel', detail: '为 Webhook 和评审公开本地站点。', href: '/zh/features/cloudflare-tunnel', logo: cloudflareLogo },
      { name: 'R-NACOS', detail: '在本地测试服务发现和配置。', href: '/zh/features/r-nacos', logo: rNacosLogo },
      { name: 'Consul', detail: '在工作区运行服务发现。', href: '/zh/features/consul', logo: consulLogo },
      { name: 'Etcd', detail: '在本地测试分布式配置。', href: '/zh/features/etcd', logo: etcdLogo }
    ]
  },
  {
    id: 'workflow', eyebrow: '06 / 让流程可复用', title: '开发者工作流与效率',
    description: '将重复设置、命令和项目服务变成一键工作流。', tone: 'bg-amber-50 text-amber-700',
    items: [
      { name: 'Startup Groups', detail: '一起启动项目所需的服务。', href: '/zh/features/startup-groups', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Per-Project Runtimes', detail: '按项目配置版本和端口。', href: '/zh/features/per-project-runtimes', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Cron Jobs', detail: '计划本地命令和任务。', href: '/zh/features/cron-jobs', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'User Modules', detail: '创建并分享自定义模块。', href: '/zh/features/user-modules', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'CLI & Terminal', detail: '使用带有 FlyEnv 上下文的集成终端。', href: '/zh/features/cli-terminal', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Temporal', detail: '在本地运行持久化工作流。', href: '/zh/features/temporal', logo: temporalLogo }
    ]
  },
  {
    id: 'ai', eyebrow: '07 / 在上下文中构建', title: 'AI、MCP 与自动化',
    description: '为 AI 编程工具连接到受控本地环境提供安全桥梁。', tone: 'bg-indigo-50 text-indigo-700',
    items: [
      { name: 'MCP Server', detail: '将 AI 工具连接到本地项目状态。', href: '/zh/features/mcp-server', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Claude Code', detail: '在本地技术栈旁使用 Claude Code。', href: '/zh/features/claude-code', logo: claudeCodeLogo },
      { name: 'Codex', detail: '让 Codex 贴近项目服务。', href: '/zh/features/codex', logo: codexLogo },
      { name: 'OpenCode', detail: '结合本地项目上下文运行 OpenCode。', href: '/zh/features/opencode', logo: openCodeLogo },
      { name: 'Kimi', detail: '将 Kimi 接入本地开发工作流。', href: '/zh/features/kimi', logo: kimiLogo },
      { name: 'Antigravity CLI', detail: '在 FlyEnv 上下文中使用 Antigravity CLI。', href: '/zh/features/antigravity-cli', logo: antigravityLogo },
      { name: 'GitHub Copilot CLI', detail: '将 Copilot CLI 纳入终端工作流。', href: '/zh/features/github-copilot-cli', logo: githubLogo },
      { name: 'Hermes Agent', detail: '将 AI 代理连接到本地服务。', href: '/zh/features/hermes-agent', logo: hermesLogo },
      { name: 'OpenClaw', detail: '使用 OpenClaw 构建本地代理工作流。', href: '/zh/features/openclaw', logo: openClawLogo },
      { name: 'n8n', detail: '原型化本地自动化和集成。', href: '/zh/features/n8n', logo: n8nLogo },
      { name: 'Ollama', detail: '在技术栈旁运行离线模型。', href: '/zh/features/ollama', logo: ollamaLogo },
      { name: 'CLIProxyAPI', detail: '通过一个网关路由本地 AI 提供商。', href: '/zh/features/cliproxyapi', mark: 'CLIProxyAPI' }
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
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm"><span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>一体化本地开发环境</div>
        <h1 class="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">本地开发所需的一切<br /><span class="text-blue-600">尽在 FlyEnv</span></h1>
        <p class="mt-7 max-w-lg text-lg leading-8 text-slate-600">在一个原生桌面工作区管理语言运行时、数据库、Web 服务器、本地站点和 AI 工具，支持 Windows、macOS 与 Linux。</p>
        <div class="mt-9 flex flex-wrap gap-3"><a href="/zh/download" class="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0">下载 FlyEnv <span class="ml-2">→</span></a><a href="/zh/guide/getting-started" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 active:translate-y-0">阅读快速入门</a></div>
        <div class="mt-12 grid max-w-lg grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-3 sm:gap-5"><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">✦</span>原生桌面应用</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">⌘</span>无需容器的本地工作流</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">◌</span>支持离线运行</div></div>
      </div>
      <div class="relative lg:justify-self-end"><div class="absolute -inset-5 -z-10 rounded-[2rem] bg-blue-200/40 blur-3xl"></div><div class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-2 shadow-[0_28px_80px_-32px_rgba(15,23,42,0.45)]"><img src="https://oss.macphpstudy.com/image/assets/home/flyenv-mcp-screen.webp" alt="FlyEnv MCP Server and local runtime controls" class="block w-full rounded-[1.1rem]" /></div><div class="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block"><p class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">One workspace</p><p class="mt-1 text-sm font-semibold text-slate-900">Your stack, in context.</p></div></div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12"><div class="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"><span class="px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">按能力浏览</span><a v-for="jump in jumps" :key="jump.id" :href="`#${jump.id}`" class="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">{{ jump.title }}</a></div></section>

  <main class="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12"><div class="mb-14 max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">探索 FlyEnv 特性</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">探索 FlyEnv 技术栈。</h2><p class="mt-4 text-base leading-7 text-slate-600">浏览 FlyEnv 提供的运行时、Web 服务器、数据库和开发工作流。</p></div>
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
          <span class="mt-auto pt-4 text-xs font-semibold text-blue-600">探索 {{ item.name }} <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </section>
  </main>

  <section class="border-y border-slate-200 bg-slate-50"><div class="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-16"><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">不确定从哪里开始？</p><h2 class="no-border mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">选择一个工作流，打造你的方式。</h2><p class="mt-3 max-w-2xl text-base leading-7 text-slate-600">按照快速入门创建第一个本地站点，浏览真实技术栈演示，或将 FlyEnv 连接到正在使用的 AI 工具。</p></div><div class="flex flex-wrap gap-3 lg:justify-end"><a href="/zh/guide/getting-started" class="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">快速入门指南 <span class="ml-2">→</span></a><a href="/zh/demos" class="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400">浏览演示</a></div></div></section>

  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20"><div class="rounded-[2rem] bg-slate-950 px-7 py-10 text-white sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">一个原生工作区</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">无需再拼接本地开发环境。</h2><p class="mt-4 text-base leading-7 text-slate-300">安装 FlyEnv，让运行时、服务、站点和 AI 工作流紧贴它们所服务的项目。</p></div><a href="/zh/download" class="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50 lg:mt-0">下载 FlyEnv <span class="ml-2">→</span></a></div></section>
</div>
