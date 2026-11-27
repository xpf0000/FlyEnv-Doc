<template>
  <section id="stack" class="section tinted" aria-labelledby="home-stack-title">
    <div class="wrap">
      <div class="head-row">
        <div class="section-head">
          <span class="eyebrow">{{ copy.stack.eyebrow }}</span>
          <h2 id="home-stack-title">{{ copy.stack.title }}</h2>
          <p>{{ copy.stack.description }}</p>
        </div>
        <a
          class="text-link"
          :href="localized('/features')"
          data-analytics-surface="new-home-feature"
          data-analytics-content-id="features"
        >
          {{ copy.stack.explore }} <HomeStackIcon name="arrow" />
        </a>
      </div>

      <div class="stack-grid grid">
        <article v-for="(group, index) in stackGroups" :key="group.icon" class="stack-card panel">
          <div class="stack-title">
            <HomeStackIcon :name="group.icon" />
            <h3>{{ copy.stack.categories[index] }}</h3>
          </div>
          <a
            v-for="tool in group.tools"
            :key="tool.slug"
            :href="localized('/features/' + tool.slug)"
            :data-analytics-surface="
              tool.slug === 'mcp-server' ? 'new-home-mcp' : 'new-home-feature'
            "
            :data-analytics-content-id="tool.slug"
          >
            <span class="tech-dot" :style="{ '--tech': tool.color }">
              <img
                class="home-stack-tech-icon"
                :src="tool.logo"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </span>
            {{ tool.name }}
          </a>
        </article>
      </div>
      <p class="section-note">{{ copy.stack.note }}</p>
    </div>
  </section>

  <section id="plugins" class="section plugin-section" aria-labelledby="home-plugins-title">
    <div class="wrap">
      <div class="plugin-panel">
        <div class="plugin-copy">
          <span class="eyebrow">{{ copy.plugins.name }}</span>
          <h2 id="home-plugins-title">
            {{ copy.plugins.title[0] }}<br />
            <span>{{ copy.plugins.title[1] }}</span>
          </h2>
          <p>{{ copy.plugins.description }}</p>
          <div class="plugin-points">
            <span v-for="point in copy.plugins.points" :key="point">
              <HomeStackIcon name="check" /> {{ point }}
            </span>
          </div>
          <a
            class="btn white-btn"
            :href="localized('/features/plugin-market')"
            data-analytics-surface="new-home-plugin-market"
            data-analytics-content-id="plugin-market"
          >
            {{ copy.plugins.explore }} <HomeStackIcon name="arrow" />
          </a>
          <small class="plugin-note">
            {{ copy.plugins.licenseNote }}
            <a
              :href="localized('/license')"
              data-analytics-surface="new-home-license"
              data-analytics-content-id="license"
              >{{ copy.plugins.licenseLink }}</a
            >{{ locale === 'zh' ? '。' : '.' }}
          </small>
        </div>

        <div class="plugin-visual">
          <figure class="plugin-browser">
            <div class="plugin-browser-top">
              <span class="traffic" aria-hidden="true"><i></i><i></i><i></i></span>
              <b>{{ copy.plugins.name }}</b>
              <span>FlyEnv</span>
            </div>
            <img
              width="2862"
              height="1802"
              src="/assets/compare/plugin-market-clusters.webp"
              :alt="copy.plugins.screenshotAlt"
              loading="lazy"
              decoding="async"
            />
            <figcaption class="plugin-image-caption">{{
              copy.plugins.screenshotCaption
            }}</figcaption>
          </figure>
          <div class="plugin-float">
            <HomeStackIcon name="puzzle" />
            <span>
              <b>{{ copy.plugins.floatTitle }}</b>
              <small>{{ copy.plugins.floatDescription }}</small>
            </span>
          </div>
        </div>

        <div class="plugin-modules">
          <a
            v-for="(module, index) in pluginModules"
            :key="module.slug"
            :href="localized('/features/' + module.slug)"
            :data-analytics-surface="module.surface"
            :data-analytics-content-id="module.slug"
          >
            <HomeStackIcon :name="module.icon" />
            <span>
              <b>{{ module.name ?? copy.plugins.moreTitle }}</b>
              <small>{{ copy.plugins.modules[index] }}</small>
            </span>
            <HomeStackIcon class="module-arrow" name="arrow" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="ai" class="section ai-section" aria-labelledby="home-ai-title">
    <div class="wrap">
      <div class="section-head center">
        <span class="eyebrow">{{ copy.ai.eyebrow }}</span>
        <h2 id="home-ai-title">{{ copy.ai.title }}</h2>
        <p>{{ copy.ai.description }}</p>
      </div>

      <div class="ai-layout">
        <figure class="ai-diagram panel">
          <div class="ai-diagram-top">
            <span class="section-label">{{ copy.ai.diagramLabel }}</span>
            <span class="small-pill">{{ copy.ai.integration }}</span>
          </div>
          <div class="agent-row">
            <div v-for="agent in agents" :key="agent.slug">
              <span class="tech-dot" :style="{ '--tech': agent.color }">
                <img
                  class="home-stack-tech-icon"
                  :src="agent.logo"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <b>{{ agent.name }}</b>
            </div>
          </div>
          <div class="ai-lines" aria-hidden="true"><span></span></div>
          <div class="mcp-core">
            <span class="logo-mark">
              <img
                src="/assets/home/newhome/FlyEnv-Icon.webp"
                alt=""
                width="31"
                height="31"
                loading="lazy"
                decoding="async"
              />
            </span>
            <div>
              <b>{{ copy.ai.coreTitle }}</b>
              <small>{{ copy.ai.coreDescription }}</small>
            </div>
            <span class="small-pill">MCP</span>
          </div>
          <div class="ai-lines split" aria-hidden="true"><span></span></div>
          <div class="ai-targets">
            <div
              v-for="target in aiTargets"
              :key="target.labels[0]"
              class="target-box"
              :class="{ 'memory-target': target.icon === 'brain' }"
            >
              <div>
                <HomeStackIcon :name="target.icon" />
                <b>{{ target.labels[0] }}</b>
              </div>
              <span>{{ target.labels[1] }}</span>
              <span class="target-status"
                ><HomeStackIcon name="check" /> {{ target.labels[2] }}</span
              >
            </div>
          </div>
          <figcaption class="visual-foot">{{ copy.ai.caption }}</figcaption>
        </figure>

        <div class="ai-capabilities">
          <article v-for="(capability, index) in aiCapabilities" :key="capability.href">
            <span class="feature-icon" :class="{ purple: capability.icon === 'brain' }">
              <HomeStackIcon :name="capability.icon" />
            </span>
            <div>
              <h3>{{ copy.ai.capabilities[index].title }}</h3>
              <p>{{ copy.ai.capabilities[index].description }}</p>
              <a
                class="text-link"
                :href="localized(capability.href)"
                :data-analytics-surface="capability.surface"
                :data-analytics-content-id="capability.contentId"
              >
                {{ copy.ai.capabilities[index].link }} <HomeStackIcon name="arrow" />
              </a>
            </div>
          </article>
        </div>
      </div>
      <div class="ai-workflow">
        <template v-for="(icon, index) in workflowIcons" :key="icon">
          <i v-if="index" aria-hidden="true"></i>
          <span><HomeStackIcon :name="icon" /> {{ copy.ai.steps[index] }}</span>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { homeStackCopy, type HomeStackLocale } from '../../data/home/stack'
  import claudeCodeLogo from '../SVG/claude-code.svg'
  import cliproxyapiLogo from '../SVG/cliproxyapi.svg'
  import codexLogo from '../SVG/codex.svg'
  import kimiLogo from '../SVG/kimi.svg'
  import mcpLogo from '../SVG/mcp.svg'
  import HomeStackIcon from './HomeStackIcon.vue'

  const props = defineProps<{ locale: HomeStackLocale }>()

  const copy = computed(() => homeStackCopy[props.locale])
  const localized = (path: string) => (props.locale === 'en' ? path : '/' + props.locale + path)

  const logoPath = '/assets/demo-logos/'
  const claudeCode = {
    name: 'Claude Code',
    slug: 'claude-code',
    logo: claudeCodeLogo,
    color: '#c77b5a'
  }
  const codex = { name: 'Codex', slug: 'codex', logo: codexLogo, color: '#475569' }
  const agents = [
    claudeCode,
    codex,
    { name: 'Kimi', slug: 'kimi', logo: kimiLogo, color: '#6f64e6' }
  ]

  const stackGroups = [
    {
      icon: 'code',
      tools: [
        { name: 'PHP', slug: 'php', logo: logoPath + 'php.svg', color: '#777bb3' },
        { name: 'Node.js', slug: 'nodejs', logo: logoPath + 'nodedotjs.svg', color: '#339966' },
        { name: 'Python', slug: 'python', logo: logoPath + 'python.svg', color: '#3776ab' },
        { name: 'Java', slug: 'java', logo: logoPath + 'openjdk.svg', color: '#e76f24' },
        { name: 'Go', slug: 'go', logo: logoPath + 'go.svg', color: '#00add8' }
      ]
    },
    {
      icon: 'database',
      tools: [
        { name: 'MySQL', slug: 'mysql', logo: logoPath + 'mysql.svg', color: '#2184b7' },
        {
          name: 'PostgreSQL',
          slug: 'postgresql',
          logo: logoPath + 'postgresql.svg',
          color: '#336791'
        },
        { name: 'MariaDB', slug: 'mariadb', logo: logoPath + 'mariadb.svg', color: '#91654b' },
        { name: 'Redis', slug: 'redis', logo: logoPath + 'redis.svg', color: '#d34b4b' },
        { name: 'Qdrant', slug: 'qdrant', logo: logoPath + 'qdrant.svg', color: '#b73576' }
      ]
    },
    {
      icon: 'server',
      tools: [
        { name: 'Nginx', slug: 'nginx', logo: logoPath + 'nginx.svg', color: '#119f68' },
        { name: 'Apache', slug: 'apache', logo: logoPath + 'apache.svg', color: '#c43c58' },
        { name: 'Caddy', slug: 'caddy', logo: logoPath + 'caddy.svg', color: '#1f96a4' },
        {
          name: 'FrankenPHP',
          slug: 'frankenphp',
          logo: logoPath + 'FrankenPHP.svg',
          color: '#7155d7'
        }
      ]
    },
    {
      icon: 'wrench',
      tools: [
        { name: 'Mailpit', slug: 'mailpit', logo: logoPath + 'mailpit.svg', color: '#dc8b2e' },
        { name: 'RabbitMQ', slug: 'rabbitmq', logo: logoPath + 'rabbitmq.svg', color: '#ee6a23' },
        { name: 'MinIO', slug: 'minio', logo: logoPath + 'minio.svg', color: '#b93e64' },
        {
          name: 'Cloudflare Tunnel',
          slug: 'cloudflare-tunnel',
          logo: logoPath + 'cloudflare.svg',
          color: '#ef8a29'
        }
      ]
    },
    {
      icon: 'brain',
      tools: [
        claudeCode,
        codex,
        { name: 'Ollama', slug: 'ollama', logo: logoPath + 'ollama.svg', color: '#475569' },
        { name: 'CLIProxyAPI', slug: 'cliproxyapi', logo: cliproxyapiLogo, color: '#4169e1' },
        { name: 'MCP Server', slug: 'mcp-server', logo: mcpLogo, color: '#805ad5' }
      ]
    }
  ] as const

  const pluginModules = [
    { name: 'AI Memory', slug: 'ai-memory', icon: 'brain', surface: 'new-home-ai-memory' },
    { name: 'MySQL Cluster', slug: 'mysql-cluster', icon: 'database', surface: 'new-home-feature' },
    { name: 'llama.cpp', slug: 'llama-cpp', icon: 'chip', surface: 'new-home-feature' },
    { name: null, slug: 'plugin-market', icon: 'puzzle', surface: 'new-home-plugin-market' }
  ] as const

  const aiTargets = computed(
    () =>
      [
        { icon: 'server', labels: copy.value.ai.environment },
        { icon: 'brain', labels: copy.value.ai.memory }
      ] as const
  )

  const aiCapabilities = [
    {
      icon: 'terminal',
      href: '/features/mcp-server',
      contentId: 'mcp-server',
      surface: 'new-home-mcp'
    },
    {
      icon: 'brain',
      href: '/features/ai-memory',
      contentId: 'ai-memory',
      surface: 'new-home-ai-memory'
    },
    {
      icon: 'chip',
      href: '/guide/build-local-offline-ai-agent',
      contentId: 'build-local-offline-ai-agent',
      surface: 'new-home-feature'
    }
  ] as const
  const workflowIcons = ['message', 'package', 'play', 'check', 'brain'] as const
</script>

<style scoped>
  .home-stack-tech-icon {
    @apply h-3/4 w-3/4 object-contain;
  }

  .plugin-section .plugin-visual {
    padding-bottom: 0;
  }

  .plugin-visual .plugin-float {
    position: relative;
    width: fit-content;
    max-width: calc(100% - 12px);
    margin: -4px 0 0 auto;
  }
</style>
