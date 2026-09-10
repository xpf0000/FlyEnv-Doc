---
layout: home
titleTemplate: false
title: 'Fitur FlyEnv: Runtime, Layanan, Situs Lokal, dan Lainnya'
description: 'Jelajahi runtime, layanan, alur kerja proyek, dan alat situs lokal yang dikelola FlyEnv dalam satu ruang kerja desktop.'
head:
  - - meta
    - name: description
      content: 'Jelajahi runtime, layanan, situs lokal, dan alur kerja proyek di FlyEnv.'
  - - meta
    - property: og:title
      content: 'Fitur FlyEnv: Runtime, Layanan, Situs Lokal, dan Lainnya'
  - - meta
    - property: og:description
      content: 'Jelajahi runtime, layanan, situs lokal, dan alur kerja proyek di FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/features
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/features
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
    id: 'languages', eyebrow: '01 / Bangun dengan stack Anda', title: 'Bahasa & Runtime',
    description: 'Instal, ganti, dan atur runtime yang dibutuhkan setiap proyek.', tone: 'bg-blue-50 text-blue-700',
    items: [
      { name: 'PHP', detail: 'Kelola versi, ekstensi, dan PHP-FPM.', href: '/id/features/php', logo: 'https://oss.macphpstudy.com/image/php.png' },
      { name: 'Node.js', detail: 'Tetapkan versi Node untuk tiap proyek.', href: '/id/features/nodejs', logo: 'https://oss.macphpstudy.com/image/Node.js.svg' },
      { name: 'Python', detail: 'Jalankan versi Python dengan layanan lokal.', href: '/id/features/python', logo: pythonLogo },
      { name: 'Java', detail: 'Siapkan Java untuk proyek Spring Boot.', href: '/id/features/java', logo: 'https://oss.macphpstudy.com/image/java.svg' },
      { name: 'Go', detail: 'Jalankan proyek Go dengan toolchain terkelola.', href: '/id/features/go', logo: goLogo },
      { name: 'Erlang', detail: 'Simpan runtime Erlang dekat dengan proyek Anda.', href: '/id/features/erlang', logo: erlangLogo },
      { name: 'Ruby', detail: 'Ganti runtime Ruby untuk aplikasi lokal.', href: '/id/features/ruby', logo: rubyLogo },
      { name: 'Rust', detail: 'Bangun proyek Rust dengan toolchain lokal.', href: '/id/features/rust', logo: rustLogo },
      { name: '.NET', detail: 'Jalankan proyek .NET dalam ruang kerja Anda.', href: '/id/features/dotnet', logo: dotNetLogo },
      { name: 'Zig', detail: 'Bereksperimen dengan Zig secara lokal.', href: '/id/features/zig', logo: zigLogo },
      { name: 'Bun', detail: 'Kelola versi dan layanan Bun.', href: '/id/features/bun', logo: bunLogo },
      { name: 'Deno', detail: 'Jalankan proyek Deno tanpa penyiapan tambahan.', href: '/id/features/deno', logo: denoLogo },
      { name: 'Flutter', detail: 'Sediakan alat SDK Flutter secara lokal.', href: '/id/features/flutter', logo: flutterLogo },
      { name: 'Gradle', detail: 'Bangun proyek JVM dengan Gradle.', href: '/id/features/gradle', logo: gradleLogo }
    ]
  },
  {
    id: 'web', eyebrow: '02 / Rilis secara lokal', title: 'Server Web & Situs Lokal',
    description: 'Petakan kode ke domain ramah, HTTPS, dan server yang sesuai.', tone: 'bg-emerald-50 text-emerald-700',
    items: [
      { name: 'Situs Lokal & HTTPS', detail: 'Buat domain lokal, HTTPS, dan proksi.', href: '/id/features/local-sites-https', logo: '' },
      { name: 'MkCert', detail: 'Buat sertifikat HTTPS lokal yang tepercaya.', href: '/id/features/mkcert', logo: sslMakeLogo },
      { name: 'FrankenPHP', detail: 'Sajikan aplikasi PHP modern dengan FrankenPHP.', href: '/id/features/frankenphp', logo: frankenPhpLogo },
      { name: 'Nginx', detail: 'Jalankan situs dan konfigurasi Nginx berversi.', href: '/id/features/nginx', logo: 'https://oss.macphpstudy.com/image/nginx.png' },
      { name: 'Apache', detail: 'Sajikan proyek PHP secara lokal dengan Apache.', href: '/id/features/apache', logo: 'https://oss.macphpstudy.com/image/apache.png' },
      { name: 'Caddy', detail: 'Sajikan situs lokal dengan HTTPS otomatis.', href: '/id/features/caddy', logo: 'https://oss.macphpstudy.com/image/caddy.svg' },
      { name: 'Tomcat', detail: 'Jalankan aplikasi web Java dengan Tomcat.', href: '/id/features/tomcat', logo: 'https://oss.macphpstudy.com/image/tomcat.svg' }
    ]
  },
  {
    id: 'databases', eyebrow: '03 / Simpan dengan yakin', title: 'Database & Manajemen Database',
    description: 'Dekatkan penyimpanan relasional, dokumen, dan analitik ke kode Anda.', tone: 'bg-violet-50 text-violet-700',
    items: [
      { name: 'MySQL', detail: 'Jalankan versi MySQL dan kelola pengguna.', href: '/id/features/mysql', logo: 'https://oss.macphpstudy.com/image/mysql.png' },
      { name: 'PostgreSQL', detail: 'Jalankan PostgreSQL dan hubungkan pgAdmin.', href: '/id/features/postgresql', logo: 'https://oss.macphpstudy.com/image/postgresql.svg' },
      { name: 'MariaDB', detail: 'Jalankan layanan terisolasi yang kompatibel dengan MySQL.', href: '/id/features/mariadb', logo: 'https://oss.macphpstudy.com/image/mariadb.svg' },
      { name: 'MongoDB', detail: 'Mulai MongoDB untuk pengembangan aplikasi.', href: '/id/features/mongodb', logo: 'https://oss.macphpstudy.com/image/MongoDB.svg' },
      { name: 'Qdrant', detail: 'Jalankan basis data vektor lokal untuk aplikasi AI.', href: '/id/features/qdrant', logo: qdrantLogo },
      { name: 'ClickHouse', detail: 'Jelajahi beban kerja analitik secara lokal.', href: '/id/features/clickhouse', logo: clickHouseLogo },
      { name: 'Neo4j', detail: 'Buat purwarupa aplikasi berbasis graf secara lokal.', href: '/id/features/neo4j', logo: neo4jLogo }
    ]
  },
  {
    id: 'services', eyebrow: '04 / Tambahkan kebutuhan aplikasi', title: 'Cache, Pesan & Pencarian',
    description: 'Satukan antrean, cache, dan indeks pencarian dalam satu ruang kerja.', tone: 'bg-rose-50 text-rose-700',
    items: [
      { name: 'Redis', detail: 'Jalankan Redis untuk cache, sesi, dan antrean.', href: '/id/features/redis', logo: 'https://oss.macphpstudy.com/image/redis.png' },
      { name: 'Memcached', detail: 'Uji cache aplikasi ringan secara lokal.', href: '/id/features/memcached', logo: 'https://oss.macphpstudy.com/image/memcached.png' },
      { name: 'RabbitMQ', detail: 'Jalankan RabbitMQ dan periksa antrean lokal.', href: '/id/features/rabbitmq', logo: rabbitMqLogo },
      { name: 'Elasticsearch', detail: 'Bangun fitur pencarian dengan Elasticsearch lokal.', href: '/id/features/elasticsearch', logo: elasticsearchLogo },
      { name: 'Meilisearch', detail: 'Buat purwarupa pengalaman pencarian lokal yang cepat.', href: '/id/features/meilisearch', logo: meilisearchLogo },
      { name: 'Typesense', detail: 'Uji pencarian yang toleran terhadap salah ketik.', href: '/id/features/typesense', logo: typesenseLogo },
      { name: 'ZincSearch', detail: 'Jalankan mesin pencari lokal yang ringan.', href: '/id/features/zincsearch', logo: 'https://oss.macphpstudy.com/image/assets/home/zincsearch.png' },
      { name: 'Mailpit', detail: 'Tangkap email lokal dan lalu lintas SMTP.', href: '/id/features/mailpit', logo: mailpitLogo }
    ]
  },
  {
    id: 'infrastructure', eyebrow: '05 / Hubungkan infrastruktur', title: 'Infrastruktur, Penyimpanan & Jaringan',
    description: 'Sediakan layanan pendukung untuk sistem lokal dan terdistribusi Anda.', tone: 'bg-cyan-50 text-cyan-700',
    items: [
      { name: 'Numa', detail: 'Jalankan DNS lokal dengan Numa.', href: '/id/features/numa', mark: 'Numa' },
      { name: 'Server DNS', detail: 'Kelola layanan DNS lokal.', href: '/id/features/dns-server', logo: 'https://oss.macphpstudy.com/image/dns.svg' },
      { name: 'Server FTP', detail: 'Jalankan layanan FTP untuk pengujian lokal.', href: '/id/features/ftp-server', logo: 'https://oss.macphpstudy.com/image/ftp.svg' },
      { name: 'Minio', detail: 'Jalankan penyimpanan kompatibel S3 secara lokal.', href: '/id/features/minio', logo: minioLogo },
      { name: 'RustFS', detail: 'Buat purwarupa penyimpanan kompatibel S3 secara lokal.', href: '/id/features/rustfs', logo: rustFsLogo },
      { name: 'Podman', detail: 'Gunakan kontainer saat proyek membutuhkannya.', href: '/id/features/podman', logo: podmanLogo },
      { name: 'Cloudflared', detail: 'Jalankan konektor Cloudflare secara lokal.', href: '/id/features/cloudflared', logo: cloudflareLogo },
      { name: 'Cloudflare Tunnel', detail: 'Ekspos situs lokal untuk webhook dan tinjauan.', href: '/id/features/cloudflare-tunnel', logo: cloudflareLogo },
      { name: 'R-NACOS', detail: 'Uji penemuan layanan dan konfigurasi secara lokal.', href: '/id/features/r-nacos', logo: rNacosLogo },
      { name: 'Consul', detail: 'Jalankan penemuan layanan dalam ruang kerja Anda.', href: '/id/features/consul', logo: consulLogo },
      { name: 'Etcd', detail: 'Uji konfigurasi terdistribusi secara lokal.', href: '/id/features/etcd', logo: etcdLogo }
    ]
  },
  {
    id: 'workflow', eyebrow: '06 / Jadikan berulang', title: 'Alur Kerja & Produktivitas Developer',
    description: 'Ubah penyiapan, perintah, dan layanan proyek berulang menjadi alur sekali klik.', tone: 'bg-amber-50 text-amber-700',
    items: [
      { name: 'Grup Startup', detail: 'Mulai layanan proyek secara bersamaan.', href: '/id/features/startup-groups', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Runtime per Proyek', detail: 'Batasi versi dan port untuk tiap proyek.', href: '/id/features/per-project-runtimes', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Tugas Cron', detail: 'Jadwalkan perintah dan tugas lokal.', href: '/id/features/cron-jobs', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Modul Pengguna', detail: 'Buat dan bagikan modul kustom.', href: '/id/features/user-modules', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'CLI & Terminal', detail: 'Gunakan terminal terintegrasi dalam konteks FlyEnv.', href: '/id/features/cli-terminal', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Temporal', detail: 'Jalankan alur kerja yang tahan lama secara lokal.', href: '/id/features/temporal', logo: temporalLogo }
    ]
  },
  {
    id: 'ai', eyebrow: '07 / Bangun dengan konteks', title: 'AI, MCP & Otomasi',
    description: 'Berikan alat coding AI jembatan aman ke lingkungan lokal yang Anda kendalikan.', tone: 'bg-indigo-50 text-indigo-700',
    items: [
      { name: 'Server MCP', detail: 'Hubungkan alat AI ke status proyek lokal.', href: '/id/features/mcp-server', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Claude Code', detail: 'Gunakan Claude Code di samping stack lokal Anda.', href: '/id/features/claude-code', logo: claudeCodeLogo },
      { name: 'Codex', detail: 'Dekatkan Codex dengan layanan proyek.', href: '/id/features/codex', logo: codexLogo },
      { name: 'OpenCode', detail: 'Jalankan OpenCode dalam konteks proyek lokal.', href: '/id/features/opencode', logo: openCodeLogo },
      { name: 'Kimi', detail: 'Hubungkan Kimi ke alur kerja pengembangan lokal.', href: '/id/features/kimi', logo: kimiLogo },
      { name: 'Antigravity CLI', detail: 'Gunakan Antigravity CLI dalam konteks FlyEnv.', href: '/id/features/antigravity-cli', logo: antigravityLogo },
      { name: 'GitHub Copilot CLI', detail: 'Bawa Copilot CLI ke alur kerja terminal Anda.', href: '/id/features/github-copilot-cli', logo: githubLogo },
      { name: 'Agen Hermes', detail: 'Hubungkan agen AI ke layanan lokal.', href: '/id/features/hermes-agent', logo: hermesLogo },
      { name: 'OpenClaw', detail: 'Bangun alur kerja agen lokal dengan OpenClaw.', href: '/id/features/openclaw', logo: openClawLogo },
      { name: 'n8n', detail: 'Buat purwarupa otomatisasi dan integrasi lokal.', href: '/id/features/n8n', logo: n8nLogo },
      { name: 'Ollama', detail: 'Jalankan model luring di samping stack Anda.', href: '/id/features/ollama', logo: ollamaLogo },
      { name: 'CLIProxyAPI', detail: 'Arahkan penyedia AI lokal melalui satu gateway.', href: '/id/features/cliproxyapi', mark: 'CLIProxyAPI' }
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
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm"><span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>Lingkungan pengembangan lokal terpadu</div>
        <h1 class="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">Semua yang Anda butuhkan<br /><span class="text-blue-600">untuk pengembangan lokal</span></h1>
        <p class="mt-7 max-w-lg text-lg leading-8 text-slate-600">Kelola runtime bahasa, database, server web, situs lokal, dan alat AI dari satu ruang kerja desktop di Windows, macOS, dan Linux.</p>
        <div class="mt-9 flex flex-wrap gap-3"><a href="/id/download" class="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0">Unduh FlyEnv <span class="ml-2">→</span></a><a href="/id/guide/getting-started" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 active:translate-y-0">Baca panduan mulai cepat</a></div>
        <div class="mt-12 grid max-w-lg grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-3 sm:gap-5"><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">✦</span>Aplikasi desktop native</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">⌘</span>Alur kerja lokal tanpa kontainer</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">◌</span>Bekerja offline</div></div>
      </div>
      <div class="relative lg:justify-self-end"><div class="absolute -inset-5 -z-10 rounded-[2rem] bg-blue-200/40 blur-3xl"></div><div class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-2 shadow-[0_28px_80px_-32px_rgba(15,23,42,0.45)]"><img src="https://oss.macphpstudy.com/image/assets/home/flyenv-mcp-screen.webp" alt="Server MCP FlyEnv dan kontrol runtime lokal" class="block w-full rounded-[1.1rem]" /></div><div class="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block"><p class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Satu ruang kerja</p><p class="mt-1 text-sm font-semibold text-slate-900">Tumpukan Anda, dalam konteks.</p></div></div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12"><div class="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"><span class="px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Jelajahi berdasarkan kemampuan</span><a v-for="jump in jumps" :key="jump.id" :href="`#${jump.id}`" class="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">{{ jump.title }}</a></div></section>

  <main class="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12"><div class="mb-14 max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Jelajahi fitur FlyEnv</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Jelajahi stack FlyEnv.</h2><p class="mt-4 text-base leading-7 text-slate-600">Lihat runtime, server web, database, dan alur kerja pengembangan yang tersedia di FlyEnv.</p></div>
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
          <span class="mt-auto pt-4 text-xs font-semibold text-blue-600">Jelajahi {{ item.name }} <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </section>
  </main>

  <section class="border-y border-slate-200 bg-slate-50"><div class="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-16"><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Tidak yakin harus mulai dari mana?</p><h2 class="no-border mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Pilih alur kerja, lalu sesuaikan.</h2><p class="mt-3 max-w-2xl text-base leading-7 text-slate-600">Ikuti panduan mulai cepat untuk membuat situs lokal pertama, lihat demo stack nyata, atau hubungkan FlyEnv ke alat AI yang Anda gunakan.</p></div><div class="flex flex-wrap gap-3 lg:justify-end"><a href="/id/guide/getting-started" class="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">Panduan Mulai Cepat <span class="ml-2">→</span></a><a href="/id/demos" class="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400">Lihat demo</a></div></div></section>

  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20"><div class="rounded-[2rem] bg-slate-950 px-7 py-10 text-white sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Satu ruang kerja desktop</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Berhenti merangkai lingkungan lokal.</h2><p class="mt-4 text-base leading-7 text-slate-300">Instal FlyEnv dan dekatkan runtime, layanan, situs, serta alur kerja AI ke proyek yang menggunakannya.</p></div><a href="/id/download" class="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50 lg:mt-0">Unduh FlyEnv <span class="ml-2">→</span></a></div></section>
</div>
