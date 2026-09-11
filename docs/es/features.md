---
layout: home
titleTemplate: false
title: 'Funciones de FlyEnv: Runtimes, Servicios, Sitios Locales y Más'
description: 'Explora los runtimes, servicios, flujos de trabajo de proyectos y herramientas de sitios locales que FlyEnv gestiona en un único espacio de trabajo de desarrollo nativo.'
head:
  - - meta
    - name: description
      content: 'Explora los runtimes, servicios, flujos de trabajo de proyectos y herramientas de sitios locales que FlyEnv gestiona en un único espacio de trabajo de desarrollo nativo.'
  - - meta
    - property: og:title
      content: 'Funciones de FlyEnv: Runtimes, Servicios, Sitios Locales y Más'
  - - meta
    - property: og:description
      content: 'Explora los runtimes, servicios, flujos de trabajo de proyectos y herramientas de sitios locales que FlyEnv gestiona en un único espacio de trabajo de desarrollo nativo.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features
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
    id: 'languages', eyebrow: '01 / Construye con tu stack', title: 'Lenguajes y Runtimes',
    description: 'Instala, cambia y delimita los runtimes que cada proyecto necesita.', tone: 'bg-blue-50 text-blue-700',
    items: [
      { name: 'PHP', detail: 'Gestiona versiones, extensiones y PHP-FPM.', href: '/es/features/php', logo: 'https://oss.macphpstudy.com/image/php.png' },
      { name: 'Node.js', detail: 'Fija versiones de Node por proyecto.', href: '/es/features/nodejs', logo: 'https://oss.macphpstudy.com/image/Node.js.svg' },
      { name: 'Python', detail: 'Ejecuta versiones de Python con servicios locales.', href: '/es/features/python', logo: pythonLogo },
      { name: 'Java', detail: 'Configura Java para proyectos Spring Boot.', href: '/es/features/java', logo: 'https://oss.macphpstudy.com/image/java.svg' },
      { name: 'Go', detail: 'Ejecuta proyectos Go con un toolchain gestionado.', href: '/es/features/go', logo: goLogo },
      { name: 'Erlang', detail: 'Mantén los runtimes de Erlang cerca de tu proyecto.', href: '/es/features/erlang', logo: erlangLogo },
      { name: 'Ruby', detail: 'Cambia los runtimes de Ruby para apps locales.', href: '/es/features/ruby', logo: rubyLogo },
      { name: 'Rust', detail: 'Compila proyectos Rust con toolchains locales.', href: '/es/features/rust', logo: rustLogo },
      { name: '.NET', detail: 'Ejecuta proyectos .NET en tu espacio de trabajo.', href: '/es/features/dotnet', logo: dotNetLogo },
      { name: 'Zig', detail: 'Experimenta con Zig en local.', href: '/es/features/zig', logo: zigLogo },
      { name: 'Bun', detail: 'Gestiona versiones y servicios de Bun.', href: '/es/features/bun', logo: bunLogo },
      { name: 'Deno', detail: 'Ejecuta proyectos Deno sin configuración adicional.', href: '/es/features/deno', logo: denoLogo },
      { name: 'Flutter', detail: 'Mantén las herramientas del SDK de Flutter disponibles en local.', href: '/es/features/flutter', logo: flutterLogo },
      { name: 'Gradle', detail: 'Compila proyectos JVM con Gradle.', href: '/es/features/gradle', logo: gradleLogo }
    ]
  },
  {
    id: 'web', eyebrow: '02 / Publica en local', title: 'Servidores Web y Sitios Locales',
    description: 'Asigna tu código a dominios amigables, HTTPS y el servidor que mejor encaje.', tone: 'bg-emerald-50 text-emerald-700',
    items: [
      { name: 'Sitios Locales y HTTPS', detail: 'Crea dominios locales, HTTPS y proxies.', href: '/es/features/local-sites-https', logo: '' },
      { name: 'MkCert', detail: 'Genera certificados HTTPS locales de confianza.', href: '/es/features/mkcert', logo: sslMakeLogo },
      { name: 'FrankenPHP', detail: 'Sirve apps PHP modernas con FrankenPHP.', href: '/es/features/frankenphp', logo: frankenPhpLogo },
      { name: 'Nginx', detail: 'Ejecuta sitios y configuraciones de Nginx versionados.', href: '/es/features/nginx', logo: 'https://oss.macphpstudy.com/image/nginx.png' },
      { name: 'Apache', detail: 'Sirve proyectos PHP con Apache en local.', href: '/es/features/apache', logo: 'https://oss.macphpstudy.com/image/apache.png' },
      { name: 'Caddy', detail: 'Sirve sitios locales con HTTPS automático.', href: '/es/features/caddy', logo: 'https://oss.macphpstudy.com/image/caddy.svg' },
      { name: 'Tomcat', detail: 'Ejecuta aplicaciones web Java con Tomcat.', href: '/es/features/tomcat', logo: 'https://oss.macphpstudy.com/image/tomcat.svg' }
    ]
  },
  {
    id: 'databases', eyebrow: '03 / Persiste con confianza', title: 'Bases de Datos y Gestión de Bases de Datos',
    description: 'Mantén almacenes relacionales, de documentos y analíticos cerca de tu código.', tone: 'bg-violet-50 text-violet-700',
    items: [
      { name: 'MySQL', detail: 'Ejecuta versiones de MySQL y gestiona usuarios.', href: '/es/features/mysql', logo: 'https://oss.macphpstudy.com/image/mysql.png' },
      { name: 'PostgreSQL', detail: 'Ejecuta PostgreSQL y conecta pgAdmin.', href: '/es/features/postgresql', logo: 'https://oss.macphpstudy.com/image/postgresql.svg' },
      { name: 'MariaDB', detail: 'Ejecuta un servicio aislado compatible con MySQL.', href: '/es/features/mariadb', logo: 'https://oss.macphpstudy.com/image/mariadb.svg' },
      { name: 'MongoDB', detail: 'Inicia MongoDB para el desarrollo de apps.', href: '/es/features/mongodb', logo: 'https://oss.macphpstudy.com/image/MongoDB.svg' },
      { name: 'Qdrant', detail: 'Ejecuta una base de datos vectorial local para apps de IA.', href: '/es/features/qdrant', logo: qdrantLogo },
      { name: 'ClickHouse', detail: 'Explora cargas de trabajo analíticas en local.', href: '/es/features/clickhouse', logo: clickHouseLogo },
      { name: 'Neo4j', detail: 'Prototipa aplicaciones basadas en grafos en local.', href: '/es/features/neo4j', logo: neo4jLogo }
    ]
  },
  {
    id: 'services', eyebrow: '04 / Añade lo que tu app necesita', title: 'Caché, Mensajería y Búsqueda',
    description: 'Integra colas, cachés e índices de búsqueda en el mismo espacio de trabajo.', tone: 'bg-rose-50 text-rose-700',
    items: [
      { name: 'Redis', detail: 'Ejecuta Redis para caché, sesiones y colas.', href: '/es/features/redis', logo: 'https://oss.macphpstudy.com/image/redis.png' },
      { name: 'Memcached', detail: 'Prueba caché ligera de aplicaciones en local.', href: '/es/features/memcached', logo: 'https://oss.macphpstudy.com/image/memcached.png' },
      { name: 'RabbitMQ', detail: 'Ejecuta RabbitMQ e inspecciona colas locales.', href: '/es/features/rabbitmq', logo: rabbitMqLogo },
      { name: 'Elasticsearch', detail: 'Construye funciones de búsqueda con Elasticsearch local.', href: '/es/features/elasticsearch', logo: elasticsearchLogo },
      { name: 'Meilisearch', detail: 'Prototipa experiencias de búsqueda local rápidas.', href: '/es/features/meilisearch', logo: meilisearchLogo },
      { name: 'Typesense', detail: 'Prueba búsquedas tolerantes a errores tipográficos en local.', href: '/es/features/typesense', logo: typesenseLogo },
      { name: 'ZincSearch', detail: 'Ejecuta un motor de búsqueda local ligero.', href: '/es/features/zincsearch', logo: 'https://oss.macphpstudy.com/image/assets/home/zincsearch.png' },
      { name: 'Mailpit', detail: 'Captura correo local y tráfico SMTP.', href: '/es/features/mailpit', logo: mailpitLogo }
    ]
  },
  {
    id: 'infrastructure', eyebrow: '05 / Conecta los extremos', title: 'Infraestructura, Almacenamiento y Red',
    description: 'Modela los servicios de soporte de los que dependen tus sistemas locales y distribuidos.', tone: 'bg-cyan-50 text-cyan-700',
    items: [
      { name: 'Numa', detail: 'Ejecuta DNS local con Numa.', href: '/es/features/numa', mark: 'Numa' },
      { name: 'Servidor DNS', detail: 'Gestiona servicios DNS locales.', href: '/es/features/dns-server', logo: 'https://oss.macphpstudy.com/image/dns.svg' },
      { name: 'Servidor FTP', detail: 'Ejecuta un servicio FTP para pruebas locales.', href: '/es/features/ftp-server', logo: 'https://oss.macphpstudy.com/image/ftp.svg' },
      { name: 'Minio', detail: 'Ejecuta almacenamiento compatible con S3 en local.', href: '/es/features/minio', logo: minioLogo },
      { name: 'RustFS', detail: 'Prototipa almacenamiento compatible con S3 en local.', href: '/es/features/rustfs', logo: rustFsLogo },
      { name: 'Podman', detail: 'Usa contenedores cuando un proyecto lo requiera.', href: '/es/features/podman', logo: podmanLogo },
      { name: 'Cloudflared', detail: 'Ejecuta el conector de Cloudflare en local.', href: '/es/features/cloudflared', logo: cloudflareLogo },
      { name: 'Cloudflare Tunnel', detail: 'Expón sitios locales para webhooks y revisiones.', href: '/es/features/cloudflare-tunnel', logo: cloudflareLogo },
      { name: 'R-NACOS', detail: 'Prueba descubrimiento de servicios y configuración en local.', href: '/es/features/r-nacos', logo: rNacosLogo },
      { name: 'Consul', detail: 'Ejecuta descubrimiento de servicios en tu espacio de trabajo.', href: '/es/features/consul', logo: consulLogo },
      { name: 'Etcd', detail: 'Prueba configuración distribuida en local.', href: '/es/features/etcd', logo: etcdLogo }
    ]
  },
  {
    id: 'workflow', eyebrow: '06 / Hazlo repetible', title: 'Flujo de Trabajo y Productividad del Desarrollador',
    description: 'Convierte configuraciones, comandos y servicios de proyecto recurrentes en flujos de trabajo de un clic.', tone: 'bg-amber-50 text-amber-700',
    items: [
      { name: 'Grupos de Inicio', detail: 'Inicia los servicios de un proyecto a la vez.', href: '/es/features/startup-groups', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Runtimes por Proyecto', detail: 'Delimita versiones y puertos por proyecto.', href: '/es/features/per-project-runtimes', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Tareas Cron', detail: 'Programa comandos y tareas locales.', href: '/es/features/cron-jobs', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Módulos de Usuario', detail: 'Crea y comparte módulos personalizados.', href: '/es/features/user-modules', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'CLI y Terminal', detail: 'Usa un terminal integrado con el contexto de FlyEnv.', href: '/es/features/cli-terminal', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Temporal', detail: 'Ejecuta flujos de trabajo duraderos en local.', href: '/es/features/temporal', logo: temporalLogo }
    ]
  },
  {
    id: 'ai', eyebrow: '07 / Construye con contexto', title: 'IA, MCP y Automatización',
    description: 'Ofrece a las herramientas de programación con IA un puente seguro hacia el entorno local que tú controlas.', tone: 'bg-indigo-50 text-indigo-700',
    items: [
      { name: 'Servidor MCP', detail: 'Conecta herramientas de IA al estado del proyecto local.', href: '/es/features/mcp-server', logo: 'https://oss.macphpstudy.com/image/app-icon.png' },
      { name: 'Claude Code', detail: 'Usa Claude Code junto a tu stack local.', href: '/es/features/claude-code', logo: claudeCodeLogo },
      { name: 'Codex', detail: 'Mantén Codex cerca de los servicios del proyecto.', href: '/es/features/codex', logo: codexLogo },
      { name: 'OpenCode', detail: 'Ejecuta OpenCode con el contexto del proyecto local.', href: '/es/features/opencode', logo: openCodeLogo },
      { name: 'Kimi', detail: 'Conecta Kimi a los flujos de trabajo de desarrollo local.', href: '/es/features/kimi', logo: kimiLogo },
      { name: 'Antigravity CLI', detail: 'Usa Antigravity CLI con el contexto de FlyEnv.', href: '/es/features/antigravity-cli', logo: antigravityLogo },
      { name: 'GitHub Copilot CLI', detail: 'Lleva Copilot CLI a tu flujo de trabajo en el terminal.', href: '/es/features/github-copilot-cli', logo: githubLogo },
      { name: 'Agente Hermes', detail: 'Conecta un agente de IA a los servicios locales.', href: '/es/features/hermes-agent', logo: hermesLogo },
      { name: 'OpenClaw', detail: 'Construye flujos de trabajo de agentes locales con OpenClaw.', href: '/es/features/openclaw', logo: openClawLogo },
      { name: 'n8n', detail: 'Prototipa automatizaciones e integraciones locales.', href: '/es/features/n8n', logo: n8nLogo },
      { name: 'Ollama', detail: 'Ejecuta modelos sin conexión junto a tu stack.', href: '/es/features/ollama', logo: ollamaLogo },
      { name: 'CLIProxyAPI', detail: 'Enruta proveedores de IA locales a través de un único gateway.', href: '/es/features/cliproxyapi', mark: 'CLIProxyAPI' }
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
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-sm"><span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>Entorno de desarrollo local todo en uno</div>
        <h1 class="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">Todo lo que necesitas<br /><span class="text-blue-600">para el desarrollo local</span></h1>
        <p class="mt-7 max-w-lg text-lg leading-8 text-slate-600">Gestiona runtimes de lenguajes, bases de datos, servidores web, sitios locales y herramientas de IA desde un único espacio de trabajo de escritorio nativo: en Windows, macOS y Linux.</p>
        <div class="mt-9 flex flex-wrap gap-3"><a href="/es/download" class="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0">Descargar FlyEnv <span class="ml-2">→</span></a><a href="/es/guide/getting-started" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 active:translate-y-0">Lee la guía de inicio rápido</a></div>
        <div class="mt-12 grid max-w-lg grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-3 sm:gap-5"><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">✦</span>Aplicación de escritorio nativa</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">⌘</span>Flujos de trabajo locales sin contenedores</div><div class="flex items-center gap-2"><span class="flex h-7 w-7 shrink-0 aspect-square items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">◌</span>Funciona sin conexión</div></div>
      </div>
      <div class="relative lg:justify-self-end"><div class="absolute -inset-5 -z-10 rounded-[2rem] bg-blue-200/40 blur-3xl"></div><div class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-2 shadow-[0_28px_80px_-32px_rgba(15,23,42,0.45)]"><img src="https://oss.macphpstudy.com/image/assets/home/flyenv-mcp-screen.webp" alt="Servidor MCP de FlyEnv y controles de runtimes locales" class="block w-full rounded-[1.1rem]" /></div><div class="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block"><p class="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Un espacio de trabajo</p><p class="mt-1 text-sm font-semibold text-slate-900">Tu stack, en contexto.</p></div></div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12"><div class="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"><span class="px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Explora por capacidad</span><a v-for="jump in jumps" :key="jump.id" :href="`#${jump.id}`" class="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">{{ jump.title }}</a></div></section>

  <main class="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12"><div class="mb-14 max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Explora las funciones de FlyEnv</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Explora el stack de FlyEnv.</h2><p class="mt-4 text-base leading-7 text-slate-600">Descubre runtimes, servidores web, bases de datos y flujos de trabajo de desarrollo disponibles en FlyEnv.</p></div>
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
          <span class="mt-auto pt-4 text-xs font-semibold text-blue-600">Explorar {{ item.name }} <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </section>
  </main>

  <section class="border-y border-slate-200 bg-slate-50"><div class="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-16"><div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">¿No sabes por dónde empezar?</p><h2 class="no-border mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Elige un flujo de trabajo y hazlo tuyo.</h2><p class="mt-3 max-w-2xl text-base leading-7 text-slate-600">Sigue la guía de inicio rápido para crear tu primer sitio local, explora demos verificadas de stacks reales o conecta FlyEnv a las herramientas de IA que ya usas.</p></div><div class="flex flex-wrap gap-3 lg:justify-end"><a href="/es/guide/getting-started" class="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">Guía de Inicio Rápido <span class="ml-2">→</span></a><a href="/es/demos" class="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400">Explorar demos</a></div></div></section>

  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20"><div class="rounded-[2rem] bg-slate-950 px-7 py-10 text-white sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10"><div class="max-w-2xl"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Un espacio de trabajo nativo</p><h2 class="no-border mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Deja de remendar tu entorno local pieza a pieza.</h2><p class="mt-4 text-base leading-7 text-slate-300">Instala FlyEnv y mantén runtimes, servicios, sitios y flujos de trabajo de IA cerca de los proyectos que impulsan.</p></div><a href="/es/download" class="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50 lg:mt-0">Descargar FlyEnv <span class="ml-2">→</span></a></div></section>
</div>
