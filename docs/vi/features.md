---
layout: page
titleTemplate: false
title: 'Tính năng FlyEnv: Runtime, Dịch vụ, Local Site và nhiều hơn nữa'
description: 'Khám phá các runtime, dịch vụ, quy trình dự án và công cụ local site mà FlyEnv quản lý trong một môi trường phát triển native duy nhất.'
head:
  - - meta
    - name: description
      content: 'Khám phá các runtime, dịch vụ, quy trình dự án và công cụ local site mà FlyEnv quản lý trong một môi trường phát triển native duy nhất.'
  - - meta
    - property: og:title
      content: 'Tính năng FlyEnv: Runtime, Dịch vụ, Local Site và nhiều hơn nữa'
  - - meta
    - property: og:description
      content: 'Khám phá các runtime, dịch vụ, quy trình dự án và công cụ local site mà FlyEnv quản lý trong một môi trường phát triển native duy nhất.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features
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
    id: 'languages', eyebrow: '01 / Xây dựng với stack của bạn', title: 'Ngôn ngữ & Runtime',
    description: 'Cài đặt, chuyển đổi và giới hạn phạm vi các runtime mà từng dự án cần.', tone: 'bg-blue-50 text-blue-700',
    items: [
      { name: 'PHP', detail: 'Quản lý phiên bản, extension và PHP-FPM.', href: '/vi/features/php', logo: 'https://oss.macphpstudy.com/image/php.png' },
      { name: 'Node.js', detail: 'Ghim phiên bản Node theo từng dự án.', href: '/vi/features/nodejs', logo: 'https://oss.macphpstudy.com/image/Node.js.svg' },
      { name: 'Python', detail: 'Chạy các phiên bản Python cùng dịch vụ local.', href: '/vi/features/python', logo: pythonLogo },
      { name: 'Java', detail: 'Thiết lập Java cho các dự án Spring Boot.', href: '/vi/features/java', logo: 'https://oss.macphpstudy.com/image/java.svg' },
      { name: 'Go', detail: 'Chạy các dự án Go với toolchain được quản lý.', href: '/vi/features/go', logo: goLogo },
      { name: 'Erlang', detail: 'Giữ các runtime Erlang sát cạnh dự án của bạn.', href: '/vi/features/erlang', logo: erlangLogo },
      { name: 'Ruby', detail: 'Chuyển đổi runtime Ruby cho các ứng dụng local.', href: '/vi/features/ruby', logo: rubyLogo },
      { name: 'Rust', detail: 'Xây dựng dự án Rust với các toolchain local.', href: '/vi/features/rust', logo: rustLogo },
      { name: '.NET', detail: 'Chạy các dự án .NET trong workspace của bạn.', href: '/vi/features/dotnet', logo: dotNetLogo },
      { name: 'Zig', detail: 'Thử nghiệm Zig ngay trên máy local.', href: '/vi/features/zig', logo: zigLogo },
      { name: 'Bun', detail: 'Quản lý phiên bản và dịch vụ Bun.', href: '/vi/features/bun', logo: bunLogo },
      { name: 'Deno', detail: 'Chạy các dự án Deno mà không cần thiết lập thêm.', href: '/vi/features/deno', logo: denoLogo },
      { name: 'Flutter', detail: 'Giữ các công cụ Flutter SDK luôn sẵn sàng trên máy local.', href: '/vi/features/flutter', logo: flutterLogo },
      { name: 'Gradle', detail: 'Xây dựng các dự án JVM với Gradle.', href: '/vi/features/gradle', logo: gradleLogo }
    ]
  },
  {
    id: 'web', eyebrow: '02 / Đưa lên sóng ngay tại local', title: 'Web Server & Local Site',
    description: 'Gắn code với domain thân thiện, HTTPS và server phù hợp.', tone: 'bg-emerald-50 text-emerald-700',
    items: [
      { name: 'Local Sites & HTTPS', detail: 'Tạo domain local, HTTPS và proxy.', href: '/vi/features/local-sites-https', logo: '' },
      { name: 'MkCert', detail: 'Tạo chứng chỉ HTTPS local đáng tin cậy.', href: '/vi/features/mkcert', logo: sslMakeLogo },
      { name: 'FrankenPHP', detail: 'Phục vụ ứng dụng PHP hiện đại với FrankenPHP.', href: '/vi/features/frankenphp', logo: frankenPhpLogo },
      { name: 'Nginx', detail: 'Chạy các site Nginx theo phiên bản cùng cấu hình.', href: '/vi/features/nginx', logo: 'https://oss.macphpstudy.com/image/nginx.png' },
      { name: 'Apache', detail: 'Phục vụ các dự án PHP với Apache trên máy local.', href: '/vi/features/apache', logo: 'https://oss.macphpstudy.com/image/apache.png' },
      { name: 'Caddy', detail: 'Phục vụ local site với HTTPS tự động.', href: '/vi/features/caddy', logo: 'https://oss.macphpstudy.com/image/caddy.svg' },
      { name: 'Tomcat', detail: 'Chạy các ứng dụng web Java với Tomcat.', href: '/vi/features/tomcat', logo: 'https://oss.macphpstudy.com/image/tomcat.svg' }
    ]
  },
  {
    id: 'databases', eyebrow: '03 / Lưu trữ dữ liệu an tâm', title: 'Cơ sở dữ liệu & Quản lý cơ sở dữ liệu',
    description: 'Giữ các kho dữ liệu quan hệ, tài liệu và phân tích sát cạnh code của bạn.', tone: 'bg-violet-50 text-violet-700',
    items: [
      { name: 'MySQL', detail: 'Chạy các phiên bản MySQL và quản lý user.', href: '/vi/features/mysql', logo: 'https://oss.macphpstudy.com/image/mysql.png' },
      { name: 'PostgreSQL', detail: 'Chạy PostgreSQL và kết nối pgAdmin.', href: '/vi/features/postgresql', logo: 'https://oss.macphpstudy.com/image/postgresql.svg' },
      { name: 'MariaDB', detail: 'Chạy một dịch vụ tương thích MySQL độc lập.', href: '/vi/features/mariadb', logo: 'https://oss.macphpstudy.com/image/mariadb.svg' },
      { name: 'MongoDB', detail: 'Khởi động MongoDB cho phát triển ứng dụng.', href: '/vi/features/mongodb', logo: 'https://oss.macphpstudy.com/image/MongoDB.svg' },
      { name: 'Qdrant', detail: 'Chạy một cơ sở dữ liệu vector local cho ứng dụng AI.', href: '/vi/features/qdrant', logo: qdrantLogo },
      { name: 'ClickHouse', detail: 'Khám phá các workload phân tích ngay tại local.', href: '/vi/features/clickhouse', logo: clickHouseLogo },
      { name: 'Neo4j', detail: 'Nguyên mẫu hóa các ứng dụng dựa trên đồ thị ngay tại local.', href: '/vi/features/neo4j', logo: neo4jLogo }
    ]
  },
  {
    id: 'services', eyebrow: '04 / Bổ sung những gì ứng dụng cần', title: 'Cache, Messaging & Tìm kiếm',
    description: 'Đưa hàng đợi, cache và chỉ mục tìm kiếm vào cùng một workspace.', tone: 'bg-rose-50 text-rose-700',
    items: [
      { name: 'Redis', detail: 'Chạy Redis cho cache, session và hàng đợi.', href: '/vi/features/redis', logo: 'https://oss.macphpstudy.com/image/redis.png' },
      { name: 'Memcached', detail: 'Kiểm thử cache ứng dụng nhẹ ngay tại local.', href: '/vi/features/memcached', logo: 'https://oss.macphpstudy.com/image/memcached.png' },
      { name: 'RabbitMQ', detail: 'Chạy RabbitMQ và kiểm tra các hàng đợi local.', href: '/vi/features/rabbitmq', logo: rabbitMqLogo },
      { name: 'Elasticsearch', detail: 'Xây dựng tính năng tìm kiếm với Elasticsearch local.', href: '/vi/features/elasticsearch', logo: elasticsearchLogo },
      { name: 'Meilisearch', detail: 'Nguyên mẫu hóa trải nghiệm tìm kiếm local nhanh nhạy.', href: '/vi/features/meilisearch', logo: meilisearchLogo },
      { name: 'Typesense', detail: 'Kiểm thử tìm kiếm tha thứ lỗi gõ ngay tại local.', href: '/vi/features/typesense', logo: typesenseLogo },
      { name: 'ZincSearch', detail: 'Chạy một công cụ tìm kiếm local gọn nhẹ.', href: '/vi/features/zincsearch', logo: 'https://oss.macphpstudy.com/image/assets/home/zincsearch.png' },
      { name: 'Mailpit', detail: 'Bắt email và lưu lượng SMTP local.', href: '/vi/features/mailpit', logo: mailpitLogo }
    ]
  },
  {
    id: 'infrastructure', eyebrow: '05 / Kết nối các cạnh', title: 'Hạ tầng, Lưu trữ & Mạng',
    description: 'Mô hình hóa các dịch vụ hỗ trợ mà hệ thống local và phân tán của bạn dựa vào.', tone: 'bg-cyan-50 text-cyan-700',
    items: [
      { name: 'Numa', detail: 'Chạy DNS local với Numa.', href: '/vi/features/numa', mark: 'Numa' },
      { name: 'DNS Server', detail: 'Quản lý các dịch vụ DNS local.', href: '/vi/features/dns-server', logo: 'https://oss.macphpstudy.com/image/dns.svg' },
      { name: 'FTP Server', detail: 'Chạy dịch vụ FTP cho kiểm thử local.', href: '/vi/features/ftp-server', logo: 'https://oss.macphpstudy.com/image/ftp.svg' },
      { name: 'Minio', detail: 'Chạy lưu trữ tương thích S3 ngay tại local.', href: '/vi/features/minio', logo: minioLogo },
      { name: 'RustFS', detail: 'Nguyên mẫu hóa lưu trữ tương thích S3 ngay tại local.', href: '/vi/features/rustfs', logo: rustFsLogo },
      { name: 'Podman', detail: 'Dùng container khi dự án có nhu cầu.', href: '/vi/features/podman', logo: podmanLogo },
      { name: 'Cloudflared', detail: 'Chạy connector Cloudflare ngay tại local.', href: '/vi/features/cloudflared', logo: cloudflareLogo },
      { name: 'Cloudflare Tunnel', detail: 'Đưa local site ra ngoài cho webhook và review.', href: '/vi/features/cloudflare-tunnel', logo: cloudflareLogo },
      { name: 'R-NACOS', detail: 'Kiểm thử service discovery và cấu hình ngay tại local.', href: '/vi/features/r-nacos', logo: rNacosLogo },
      { name: 'Consul', detail: 'Chạy service discovery trong workspace của bạn.', href: '/vi/features/consul', logo: consulLogo },
      { name: 'Etcd', detail: 'Kiểm thử cấu hình phân tán ngay tại local.', href: '/vi/features/etcd', logo: etcdLogo }
    ]
  },
  {
    id: 'workflow', eyebrow: '06 / Biến mọi thứ có thể lặp lại', title: 'Quy trình làm việc & Năng suất cho lập trình viên',
    description: 'Biến thiết lập lặp lại, các lệnh và dịch vụ dự án thành quy trình một cú nhấp.', tone: 'bg-amber-50 text-amber-700',
    items: [
      { name: 'Startup Groups', detail: 'Khởi động các dịch vụ của dự án cùng lúc.', href: '/vi/features/startup-groups', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Per-Project Runtimes', detail: 'Giới hạn phiên bản và port theo từng dự án.', href: '/vi/features/per-project-runtimes', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Cron Jobs', detail: 'Lập lịch các lệnh và job local.', href: '/vi/features/cron-jobs', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'User Modules', detail: 'Tạo và chia sẻ module tùy chỉnh.', href: '/vi/features/user-modules', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'CLI & Terminal', detail: 'Dùng terminal tích hợp với ngữ cảnh FlyEnv.', href: '/vi/features/cli-terminal', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Temporal', detail: 'Chạy durable workflow ngay tại local.', href: '/vi/features/temporal', logo: temporalLogo }
    ]
  },
  {
    id: 'ai', eyebrow: '07 / Xây dựng với ngữ cảnh', title: 'AI, MCP & Tự động hóa',
    description: 'Trao cho các công cụ AI coding một cây cầu an toàn đến môi trường local do bạn kiểm soát.', tone: 'bg-indigo-50 text-indigo-700',
    items: [
      { name: 'MCP Server', detail: 'Kết nối công cụ AI với trạng thái dự án local.', href: '/vi/features/mcp-server', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Claude Code', detail: 'Dùng Claude Code bên cạnh stack local của bạn.', href: '/vi/features/claude-code', logo: claudeCodeLogo },
      { name: 'Codex', detail: 'Giữ Codex sát cạnh các dịch vụ dự án.', href: '/vi/features/codex', logo: codexLogo },
      { name: 'OpenCode', detail: 'Chạy OpenCode với ngữ cảnh dự án local.', href: '/vi/features/opencode', logo: openCodeLogo },
      { name: 'Kimi', detail: 'Kết nối Kimi với các quy trình phát triển local.', href: '/vi/features/kimi', logo: kimiLogo },
      { name: 'Antigravity CLI', detail: 'Dùng Antigravity CLI với ngữ cảnh FlyEnv.', href: '/vi/features/antigravity-cli', logo: antigravityLogo },
      { name: 'GitHub Copilot CLI', detail: 'Đưa Copilot CLI vào quy trình terminal của bạn.', href: '/vi/features/github-copilot-cli', logo: githubLogo },
      { name: 'Hermes Agent', detail: 'Kết nối một AI agent với các dịch vụ local.', href: '/vi/features/hermes-agent', logo: hermesLogo },
      { name: 'OpenClaw', detail: 'Xây dựng quy trình agent local với OpenClaw.', href: '/vi/features/openclaw', logo: openClawLogo },
      { name: 'n8n', detail: 'Nguyên mẫu hóa tự động hóa và tích hợp local.', href: '/vi/features/n8n', logo: n8nLogo },
      { name: 'Ollama', detail: 'Chạy model offline bên cạnh stack của bạn.', href: '/vi/features/ollama', logo: ollamaLogo },
      { name: 'CLIProxyAPI', detail: 'Định tuyến các nhà cung cấp AI local qua một gateway duy nhất.', href: '/vi/features/cliproxyapi', mark: 'CLIProxyAPI' }
    ]
  }
]

const jumps = categories.map(({ id, title }) => ({ id, title }))
</script>

<div class="w-full overflow-hidden bg-white text-slate-950 [&_a]:no-underline [&_h4+p]:!leading-5">
  <section class="relative isolate border-b border-slate-200/80 bg-slate-50">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(14,165,233,0.1),transparent_30%)]"></div>
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-28">
      <div class="max-w-xl">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm"><span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>Môi trường lập trình local tất-cả-trong-một</div>
        <h1 class="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">Mọi thứ bạn cần<br /><span class="text-blue-600">cho lập trình local</span></h1>
        <p class="mt-7 max-w-lg text-lg leading-8 text-slate-600">Quản lý runtime ngôn ngữ, cơ sở dữ liệu, web server, local site và công cụ AI từ một workspace desktop native duy nhất — trên Windows, macOS và Linux.</p>
        <div class="mt-9 flex flex-wrap gap-3"><a href="/vi/download" class="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0">Tải xuống FlyEnv <span class="ml-2">→</span></a><a href="/vi/guide/getting-started" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 active:translate-y-0">Đọc hướng dẫn bắt đầu nhanh</a></div>
        <div class="mt-12 grid max-w-lg grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-3 sm:gap-5"><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">✦</span>Ứng dụng desktop native</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">⌘</span>Quy trình local không cần container</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">◌</span>Hoạt động offline</div></div>
      </div>
      <div class="relative lg:justify-self-end"><div class="absolute -inset-5 -z-10 rounded-[2rem] bg-blue-200/40 blur-3xl"></div><div class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-2 shadow-[0_28px_80px_-32px_rgba(15,23,42,0.45)]"><img src="https://oss.macphpstudy.com/image/assets/home/flyenv-mcp-screen.webp" alt="FlyEnv MCP Server và các điều khiển runtime local" class="block w-full rounded-[1.1rem]" /></div><div class="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block"><p class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Một workspace duy nhất</p><p class="mt-1 text-sm font-semibold text-slate-900">Stack của bạn, luôn trong ngữ cảnh.</p></div></div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12"><div class="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"><span class="px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Khám phá theo năng lực</span><a v-for="jump in jumps" :key="jump.id" :href="`#${jump.id}`" class="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">{{ jump.title }}</a></div></section>

  <main class="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12"><div class="mb-14 max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Khám phá các tính năng FlyEnv</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Khám phá stack của FlyEnv.</h2><p class="mt-4 text-base leading-7 text-slate-600">Duyệt qua các runtime, web server, cơ sở dữ liệu và quy trình phát triển có sẵn trong FlyEnv.</p></div>
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
          <span class="mt-auto pt-4 text-xs font-semibold text-blue-600">Khám phá {{ item.name }} <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </section>
  </main>

  <section class="border-y border-slate-200 bg-slate-50"><div class="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-16"><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Chưa biết bắt đầu từ đâu?</p><h2 class="no-border mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Chọn một quy trình, rồi biến nó thành của riêng bạn.</h2><p class="mt-3 max-w-2xl text-base leading-7 text-slate-600">Làm theo hướng dẫn bắt đầu nhanh để tạo local site đầu tiên của bạn, duyệt các demo đã được kiểm chứng cho những stack thực tế, hoặc kết nối FlyEnv với các công cụ AI bạn đang dùng.</p></div><div class="flex flex-wrap gap-3 lg:justify-end"><a href="/vi/guide/getting-started" class="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">Hướng dẫn bắt đầu nhanh <span class="ml-2">→</span></a><a href="/vi/demos" class="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400">Xem các demo</a></div></div></section>

  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20"><div class="rounded-[2rem] bg-slate-950 px-7 py-10 text-white sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Một workspace native duy nhất</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Chấm dứt việc ghép vá môi trường local của bạn.</h2><p class="mt-4 text-base leading-7 text-slate-300">Cài đặt FlyEnv và giữ các runtime, dịch vụ, site cùng quy trình AI luôn sát cạnh những dự án mà chúng tiếp sức.</p></div><a href="/vi/download" class="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50 lg:mt-0">Tải xuống FlyEnv <span class="ml-2">→</span></a></div></section>
</div>
