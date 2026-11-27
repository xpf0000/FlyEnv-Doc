<script setup lang="ts">
  import { computed, ref } from 'vue'
  import HomeHeroIcon from './HomeHeroIcon.vue'
  import { homeHeroCopy, type HomeHeroLocale } from '../../data/home/hero'

  const props = defineProps<{ locale: HomeHeroLocale }>()
  const copy = computed(() => homeHeroCopy[props.locale])
  const running = ref(false)

  const localHref = (path: string) => (props.locale === 'en' ? path : '/' + props.locale + path)
  const flyenvLogo = '/assets/home/newhome/FlyEnv-Icon.webp'
  const techLogo = (file: string) => '/assets/demo-logos/' + file + '.svg'

  const tech = {
    laravel: { file: 'laravel', color: '#f05252' },
    node: { file: 'nodedotjs', color: '#339966' },
    python: { file: 'python', color: '#4777a5' },
    nginx: { file: 'nginx', color: '#119f68' },
    php: { file: 'php', color: '#777bb3' },
    mysql: { file: 'mysql', color: '#2184b7' },
    redis: { file: 'redis', color: '#d34b4b' },
    postgresql: { file: 'postgresql', color: '#336791' }
  }

  const projects = computed(() => [
    { name: 'Laravel API', ...tech.laravel },
    { name: copy.value.workspace.nodeApp, ...tech.node },
    { name: 'Python', ...tech.python }
  ])

  const services = [
    { name: 'Nginx', version: '1.28', ...tech.nginx },
    { name: 'PHP-FPM', version: '8.4', ...tech.php },
    { name: 'MySQL', version: '8.4', ...tech.mysql },
    { name: 'Redis', version: '7.4', ...tech.redis }
  ]

  const platforms = ['macOS', 'Windows', 'Linux']
  const workspaceIcons = ['layers', 'globe', 'code', 'servers', 'bolt'] as const
  const extraWorkspaceIcons = ['puzzle', 'brain'] as const
  const categoryIcons = ['code', 'database', 'servers', 'wrench', 'brain', 'puzzle'] as const

  const features = [
    { id: 'native-development', path: '/guide/what-is-flyenv' },
    { id: 'on-demand-installation', path: '/features' },
    { id: 'per-project-runtimes', path: '/features/per-project-runtimes' },
    { id: 'startup-groups', path: '/features/startup-groups' }
  ]

  const nativeServices = [
    { name: 'PHP', ...tech.php },
    { name: 'MySQL', ...tech.mysql },
    { name: 'Redis', ...tech.redis }
  ]

  const library = [
    { name: 'Nginx', installed: true, ...tech.nginx },
    { name: 'PHP', installed: true, ...tech.php },
    { name: 'MySQL', installed: false, ...tech.mysql },
    { name: 'PostgreSQL', installed: false, ...tech.postgresql }
  ]

  const runtimes = [
    { project: 'shop-api', version: 'PHP 8.4' },
    { project: 'legacy-cms', version: 'PHP 7.4' },
    { project: 'frontend', version: 'Node.js 22' },
    { project: 'worker', version: 'Python 3.12' }
  ]
</script>

<template>
  <section class="hero" aria-labelledby="new-home-hero-title">
    <div class="wrap hero-grid mx-auto grid items-center">
      <div class="hero-copy">
        <div class="hero-kicker uppercase">
          <span class="status-dot" aria-hidden="true"></span>{{ copy.openSource }}
          <span class="kicker-sep" aria-hidden="true"></span>{{ copy.native }}
        </div>
        <h1 id="new-home-hero-title">
          {{ copy.heading[0] }}<br class="desktop-break" />
          <span>{{ ' ' + copy.heading[1] }}</span>
        </h1>
        <p class="hero-sub">{{ copy.subtitle }}</p>
        <p class="hero-desc">{{ copy.description }}</p>
        <div class="hero-actions flex flex-wrap items-center">
          <a
            class="btn primary"
            :href="localHref('/download')"
            data-analytics-surface="new-home-hero"
          >
            <HomeHeroIcon name="download" />{{ copy.download }}
          </a>
          <a
            class="btn secondary"
            :href="localHref('/demos')"
            data-analytics-surface="new-home-hero-demo"
          >
            <HomeHeroIcon name="play" />{{ copy.demos }}
          </a>
        </div>
        <div class="platform-line">
          <HomeHeroIcon name="check" />
          <template v-for="(platform, index) in platforms" :key="platform">
            <i v-if="index" aria-hidden="true"></i>{{ platform }}
          </template>
          <span class="divider-small" aria-hidden="true"></span>{{ copy.free }}
        </div>
        <div class="hero-links">
          <a class="text-link" :href="localHref('/guide/getting-started')">
            {{ copy.gettingStarted }} <HomeHeroIcon name="arrow" />
          </a>
          <a
            class="text-link"
            href="#compare"
            data-analytics-event="home_section_click"
            data-analytics-surface="new-home-hero-compare"
            data-analytics-content-id="compare"
          >
            {{ copy.compare }} <HomeHeroIcon name="arrow" />
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-orbit orbit-one" aria-hidden="true"></div>
        <div class="hero-orbit orbit-two" aria-hidden="true"></div>
        <div class="floating-tag tag-one" aria-hidden="true">
          <HomeHeroIcon name="code" />{{ copy.multipleRuntimes }}
        </div>
        <div
          class="app-window hero-window"
          :class="{ 'is-running': running }"
          data-group="hero-group"
        >
          <div class="window-bar">
            <span class="traffic" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="window-title"
              >FlyEnv <span aria-hidden="true">/</span> {{ copy.workspace.navigation[5] }}</span
            >
            <span class="window-extra"><HomeHeroIcon name="layers" /></span>
          </div>
          <div class="app-body">
            <div class="app-sidebar" aria-hidden="true">
              <div class="side-brand"
                ><img class="logo-mark object-contain" :src="flyenvLogo" alt="" /> FlyEnv</div
              >
              <div class="side-label uppercase">{{ copy.workspace.navigation[0] }}</div>
              <div
                v-for="(icon, index) in workspaceIcons"
                :key="icon"
                class="side-nav"
                :class="{ selected: icon === 'bolt' }"
              >
                <HomeHeroIcon :name="icon" />{{ copy.workspace.navigation[index + 1] }}
              </div>
              <div class="side-label side-bottom uppercase">{{ copy.workspace.navigation[6] }}</div>
              <div v-for="(icon, index) in extraWorkspaceIcons" :key="icon" class="side-nav">
                <HomeHeroIcon :name="icon" />{{ copy.workspace.navigation[index + 7] }}
              </div>
            </div>

            <div class="app-main">
              <div class="app-heading">
                <div>
                  <span class="mini-caption uppercase">{{ copy.workspace.yourProjects }}</span>
                  <h3>{{ copy.workspace.heading }}</h3>
                </div>
                <span class="small-pill">{{ copy.workspace.projectCount }}</span>
              </div>
              <div class="project-tabs">
                <span
                  v-for="(project, index) in projects"
                  :key="project.file"
                  :class="{ 'active-tab': !index }"
                >
                  <span class="tech-dot" :style="{ '--tech': project.color }">
                    <img :src="techLogo(project.file)" alt="" class="h-3/4 w-3/4 object-contain" />
                  </span>
                  {{ project.name }}
                </span>
              </div>

              <div class="project-group">
                <div class="group-top">
                  <div>
                    <b>{{ copy.workspace.laravel }}</b>
                    <small>api.test · PHP 8.4</small>
                  </div>
                  <span class="small-pill group-badge">{{
                    running ? copy.workspace.running : copy.workspace.readyToStart
                  }}</span>
                </div>
                <div v-for="service in services" :key="service.file" class="service-row">
                  <span class="service-name">
                    <span class="tech-dot" :style="{ '--tech': service.color }">
                      <img
                        :src="techLogo(service.file)"
                        alt=""
                        class="h-3/4 w-3/4 object-contain"
                      />
                    </span>
                    <span
                      ><b>{{ service.name }}</b
                      ><small>{{ service.version }}</small></span
                    >
                  </span>
                  <span class="svc-status">
                    <i aria-hidden="true"></i
                    ><span>{{ running ? copy.workspace.running : copy.workspace.ready }}</span>
                  </span>
                </div>
                <div class="group-actions">
                  <button
                    class="mini-btn start-toggle"
                    type="button"
                    :aria-pressed="running"
                    aria-describedby="home-workflow-note"
                    @click="running = !running"
                  >
                    <HomeHeroIcon name="play" />
                    <span>{{ running ? copy.workspace.stop : copy.workspace.start }}</span>
                  </button>
                  <span class="group-result" aria-live="polite">{{
                    running ? copy.workspace.runningSummary : copy.workspace.summary
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="window-foot">
            <span><i class="status-dot" aria-hidden="true"></i>{{ copy.workspace.local }}</span>
            <span id="home-workflow-note">{{ copy.workspace.illustrative }}</span>
          </div>
        </div>
        <div class="floating-tag tag-two" aria-hidden="true">
          <HomeHeroIcon name="puzzle" />{{ copy.extend }}
        </div>
      </div>
    </div>

    <div class="wrap hero-bottom">
      <span>{{ copy.oneWorkspace }}</span>
      <div class="hero-categories">
        <span v-for="(icon, index) in categoryIcons" :key="icon">
          <HomeHeroIcon :name="icon" />{{ copy.categories[index] }}
        </span>
      </div>
    </div>
  </section>

  <section id="why" class="section" aria-labelledby="home-why-title">
    <div class="wrap">
      <div class="section-head center">
        <span class="eyebrow">{{ copy.why.eyebrow }}</span>
        <h2 id="home-why-title">{{ copy.why.heading }}</h2>
        <p>{{ copy.why.description }}</p>
      </div>
      <div class="feature-grid grid">
        <article v-for="(feature, index) in features" :key="feature.id" class="feature-card panel">
          <div>
            <span class="section-label">{{ copy.why.cards[index].label }}</span>
            <h3>{{ copy.why.cards[index].title }}</h3>
            <p>{{ copy.why.cards[index].description }}</p>
            <a
              class="text-link"
              :href="localHref(feature.path)"
              data-analytics-surface="new-home-feature"
              :data-analytics-content-id="feature.id"
            >
              {{ copy.why.cards[index].link }} <HomeHeroIcon name="arrow" />
            </a>
          </div>

          <div
            v-if="feature.id === 'native-development'"
            class="mini-visual native-visual"
            aria-hidden="true"
          >
            <div class="native-node">
              <img class="logo-mark object-contain" :src="flyenvLogo" alt="" />
              <b>FlyEnv</b>
            </div>
            <div class="native-line"></div>
            <div class="native-platforms">
              <span v-for="platform in platforms" :key="platform">{{ platform }}</span>
            </div>
            <div class="native-line"></div>
            <div class="mini-chips">
              <span v-for="service in nativeServices" :key="service.file" class="chip">
                <span class="tech-dot" :style="{ '--tech': service.color }">
                  <img :src="techLogo(service.file)" alt="" class="h-3/4 w-3/4 object-contain" />
                </span>
                {{ service.name }}
              </span>
            </div>
            <div class="visual-foot">{{ copy.why.native }}</div>
          </div>

          <div
            v-else-if="feature.id === 'on-demand-installation'"
            class="mini-visual mini-list"
            aria-hidden="true"
          >
            <div class="mini-top"
              ><b>{{ copy.why.library }}</b
              ><span>{{ copy.why.onDemand }}</span></div
            >
            <div v-for="service in library" :key="service.file" class="mini-row">
              <span class="tech-dot" :style="{ '--tech': service.color }">
                <img :src="techLogo(service.file)" alt="" class="h-3/4 w-3/4 object-contain" />
              </span>
              <b>{{ service.name }}</b>
              <span :class="service.installed ? 'installed' : 'install'">
                {{ service.installed ? copy.why.installed : copy.why.install }}
              </span>
            </div>
          </div>

          <div
            v-else-if="feature.id === 'per-project-runtimes'"
            class="mini-visual mini-list"
            aria-hidden="true"
          >
            <div class="mini-top"
              ><b>{{ copy.why.runtimes }}</b
              ><span>{{ copy.why.automatic }}</span></div
            >
            <div v-for="runtime in runtimes" :key="runtime.project" class="mini-row">
              <HomeHeroIcon name="folder" />
              <b>{{ runtime.project }}</b>
              <span class="runtime-tag">{{ runtime.version }}</span>
            </div>
          </div>

          <div v-else class="mini-visual mini-list" aria-hidden="true">
            <div class="mini-top"
              ><b>{{ copy.why.laravel }}</b
              ><span>{{ copy.why.group }}</span></div
            >
            <div v-for="service in services.slice(0, 3)" :key="service.file" class="mini-row">
              <span class="tech-dot" :style="{ '--tech': service.color }">
                <img :src="techLogo(service.file)" alt="" class="h-3/4 w-3/4 object-contain" />
              </span>
              <b>{{ service.name }}</b>
              <span class="installed">{{ copy.workspace.ready }}</span>
            </div>
            <div class="mini-start"><HomeHeroIcon name="play" />{{ copy.why.startAll }}</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
