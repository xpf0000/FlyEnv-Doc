<script setup lang="ts">
  import { computed, ref } from 'vue'
  import {
    getServBayPrototypeCopy,
    getServBayPrototypeFaqs
  } from '../data/compare/servbay-prototype'
  import type { CompareLocale } from '../data/compare/types'
  import AIMemoryIcon from './SVG/AIMemory.svg'
  import LlamaCppIcon from './SVG/LlamaCpp.svg'
  import CommandShortcutsIcon from './SVG/CommandShortcuts.svg'

  const props = withDefaults(defineProps<{ locale?: CompareLocale }>(), { locale: 'en' })
  const tr = computed(() => getServBayPrototypeCopy(props.locale))
  const faqs = computed(() => getServBayPrototypeFaqs(props.locale))
  const href = (path: string) => (props.locale === 'en' ? path : `/${props.locale}${path}`)
  const running = ref(true)

  const logo = '/assets/home/newhome/FlyEnv-Icon.webp'
  const marketScreenshot = '/assets/compare/plugin-market-clusters.webp'
  const github = 'https://github.com/xpf0000/FlyEnv'

  const sectionLinks = [
    ['comparison', 'differences'],
    ['extensions', 'extensible'],
    ['advantages', 'workflows'],
    ['migration', 'tryProject'],
    ['faq', 'faq']
  ] as const

  const workspaceLayers = computed(() => [
    {
      title: tr.value('coreEnv'),
      badge: tr.value('native'),
      chips: ['PHP', 'Node.js', 'Python', 'MySQL']
    },
    {
      title: tr.value('projectWorkflow'),
      badge: tr.value('compose'),
      chips: [tr.value('runtimeSettings'), tr.value('startupGroups'), tr.value('sites')]
    },
    {
      title: tr.value('extendWhen'),
      badge: tr.value('optional'),
      chips: [tr.value('pluginMarket'), 'AI Memory', tr.value('userModules')]
    }
  ])

  const chipTones = ['', 'green', 'purple']
  const platforms = ['macOS', 'Windows', 'Linux']
  const services = ['Nginx', 'PHP-FPM', 'PostgreSQL', 'Redis']
  const agents = ['Claude Code', 'Codex', 'Kimi CLI']

  const featureRows = [
    ['sourceExtensibility', 'upgradable', 'sourceThirdParty'],
    ['orchestration', 'siteManagement', 'namedGroups'],
    ['optionalModules', 'packageEcosystem', 'pluginUserModules'],
    ['aiContext', 'servbayAI', 'flyenvAI']
  ] as const

  const sharedRows = [
    ['runtime', 'runtimeList'],
    ['certificates', 'supported'],
    ['databases', 'supported']
  ] as const

  const modules = [
    { name: 'AI Memory', icon: AIMemoryIcon },
    { name: 'MySQL Cluster', icon: '/assets/demo-logos/mysql.svg' },
    { name: 'llama.cpp', icon: LlamaCppIcon },
    { name: 'Command Shortcuts', icon: CommandShortcutsIcon }
  ]

  const modularLayers = [
    ['coreApp', 'nativeServices'],
    ['plugins', 'integrations'],
    ['userModules', 'yourScripts']
  ] as const

  const migrationSteps = [
    ['preserve', 'preserveBody'],
    ['recreate', 'recreateBody'],
    ['connect', 'connectBody'],
    ['extendOnly', 'extendBody']
  ] as const

  const tableNote = computed(() => tr.value('tableNote').split(/\{download\}|\{packages\}/))
  const licenseDetails = computed(() => tr.value('licenseDetails').split('{license}'))
</script>

<template>
  <main class="comparison-page servbay-comparison">
    <section class="hero" aria-labelledby="servbay-title">
      <div class="wrap">
        <div class="crumb">
          <a :href="href('/compare/')" data-analytics-surface="compare-entry">{{
            tr('compare')
          }}</a>
          <span aria-hidden="true">/</span> <span>ServBay</span>
        </div>
        <div class="hero-grid">
          <div>
            <div class="eyebrow">{{ tr('alternative') }}</div>
            <h1 id="servbay-title">
              FlyEnv vs ServBay<br />
              <span class="accent hero-headline"
                >{{ tr('openWorkspace') }}<br />{{ tr('growsWithYou') }}</span
              >
            </h1>
            <p class="lead">{{ tr('heroLead') }}</p>
            <div class="hero-actions">
              <a
                class="btn primary"
                :href="href('/download')"
                data-analytics-surface="compare-hero"
              >
                {{ tr('download') }} <span aria-hidden="true">→</span>
              </a>
              <a class="btn ghost" href="#comparison">{{ tr('capabilities') }}</a>
            </div>
            <div class="trust">
              <span v-for="platform in platforms" :key="platform">{{ platform }}</span>
              <span>{{ tr('openSource') }}</span>
            </div>
          </div>

          <div class="diagram">
            <div class="diagram-top">
              <div class="flex items-center gap-2">
                <img :src="logo" class="logo" alt="" width="29" height="29" />
                <span class="diagram-title">{{ tr('buildWorkspace') }}</span>
              </div>
              <span class="tiny-tag workspace-tag">{{ tr('workspace') }}</span>
            </div>
            <div v-for="layer in workspaceLayers" :key="layer.title" class="project">
              <div class="project-head">
                <span>{{ layer.title }}</span>
                <span class="tiny-tag">{{ layer.badge }}</span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(entry, index) in layer.chips"
                  :key="entry"
                  class="chip"
                  :class="chipTones[index % chipTones.length]"
                  ><i aria-hidden="true"></i>{{ entry }}</span
                >
              </div>
            </div>
            <div class="diagram-bottom">
              <span>{{ tr('sourceNative') }}</span>
              <div class="platforms"><span>Win</span><span>Mac</span><span>Linux</span></div>
            </div>
            <p class="diagram-foot">{{ tr('illustrative') }}</p>
          </div>
        </div>
      </div>
    </section>

    <nav class="feature-nav" :aria-label="tr('pageNav')">
      <div class="wrap">
        <a v-for="[id, label] in sectionLinks" :key="id" :href="'#' + id">{{ tr(label) }}</a>
      </div>
    </nav>

    <section id="comparison" class="section tinted" aria-labelledby="table-title">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">{{ tr('differencesEyebrow') }}</div>
          <h2 id="table-title">{{ tr('evolves') }}</h2>
          <p>{{ tr('matrixIntro') }}</p>
        </div>
        <div class="matrix-wrap" role="region" aria-labelledby="table-title" tabindex="0">
          <table>
            <thead>
              <tr>
                <th scope="col">{{ tr('capability') }}</th>
                <th scope="col">ServBay</th>
                <th scope="col" class="flycol">FlyEnv</th>
              </tr>
            </thead>
            <tbody>
              <tr class="rowgroup"
                ><th colspan="3" scope="rowgroup">{{ tr('standOut') }}</th></tr
              >
              <tr>
                <th scope="row">{{ tr('platforms') }}</th>
                <td>macOS, Windows¹</td>
                <td class="flycol">macOS, Windows, Linux</td>
              </tr>
              <tr v-for="[capability, servbay, flyenv] in featureRows" :key="capability">
                <th scope="row">{{ tr(capability) }}</th>
                <td>{{ tr(servbay) }}</td>
                <td class="flycol">{{ tr(flyenv) }}</td>
              </tr>
            </tbody>
            <tbody>
              <tr class="rowgroup"
                ><th colspan="3" scope="rowgroup">{{ tr('shared') }}</th></tr
              >
              <tr v-for="[capability, value] in sharedRows" :key="capability">
                <th scope="row">{{ tr(capability) }}</th>
                <td>{{ tr(value) }}</td>
                <td class="flycol">{{ tr(value) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="note md:hidden">{{ tr('tableScroll') }}</p>
        <p class="note">
          {{ tableNote[0]
          }}<a href="https://www.servbay.com/download">{{ tr('servbayDownloads') }}</a
          >{{ tableNote[1]
          }}<a href="https://www.servbay.com/packages">{{ tr('servbayPackages') }}</a
          >{{ tableNote[2] }}
        </p>
        <div class="source">
          {{ tr('productReferences') }}:
          <a href="https://www.servbay.com/features">{{ tr('servbayFeatures') }}</a> ·
          <a href="https://www.servbay.com/features/mcp">ServBay MCP</a> ·
          <a :href="github">FlyEnv GitHub</a> ·
          <a
            :href="href('/features/plugin-market')"
            data-analytics-surface="compare-plugin-market"
            >{{ tr('flyenvMarket') }}</a
          >
        </div>
        <div class="hero-actions">
          <a class="btn primary" :href="href('/download')">{{ tr('tryFlyenv') }}</a>
          <a
            class="btn ghost"
            :href="href('/demos?video=postgresql-pgadmin4-stack')"
            data-analytics-surface="compare-demo"
            >{{ tr('viewDemos') }}</a
          >
        </div>
      </div>
    </section>

    <section id="extensions" class="section" aria-labelledby="servbay-extensions-title">
      <div class="wrap">
        <div id="plugin-market" class="workspace">
          <div>
            <div class="eyebrow">{{ tr('marketplace') }}</div>
            <h2 id="servbay-extensions-title"
              >{{ tr('broadCapability') }}<br />{{ tr('focusedExperience') }}</h2
            >
            <p>{{ tr('marketLead') }}</p>
            <div class="hero-actions">
              <a
                class="btn dark-btn"
                :href="href('/features/plugin-market')"
                data-analytics-surface="compare-plugin-market"
                >{{ tr('exploreMarket') }}</a
              >
            </div>
            <p class="note">{{ tr('licenseRule') }}</p>
          </div>
          <div class="diagram">
            <div class="diagram-top">
              <span class="diagram-title">{{ tr('workspaceExtended') }}</span>
              <span class="tiny-tag workspace-tag">{{ tr('onDemand') }}</span>
            </div>
            <div class="module-grid">
              <div v-for="module in modules" :key="module.name" class="module">
                <span class="module-icon"
                  ><img :src="module.icon" alt="" width="17" height="17"
                /></span>
                <b>{{ module.name }}</b>
              </div>
            </div>
            <img
              class="plugin-shot"
              :src="marketScreenshot"
              :alt="tr('catalogAlt')"
              width="2862"
              height="1802"
              loading="lazy"
              decoding="async"
            />
            <div class="diagram-bottom">{{ tr('catalogFooter') }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="advantages" class="section tinted" aria-labelledby="workflow-title">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">{{ tr('gain') }}</div>
          <h2 id="workflow-title">{{ tr('realWorkflows') }}</h2>
        </div>
        <div class="feature-split">
          <div>
            <div class="eyebrow">01 / {{ tr('orchestration') }}</div>
            <h3>{{ tr('projectTitle') }}</h3>
            <p>{{ tr('projectBody') }}</p>
            <a class="link" :href="href('/features/startup-groups')"
              >{{ tr('exploreStartup') }} <span aria-hidden="true">→</span></a
            >
          </div>
          <div class="visual">
            <div class="diagram">
              <div class="diagram-top">
                <div class="flex items-center gap-2">
                  <img :src="logo" class="logo" alt="" width="29" height="29" />
                  <span class="diagram-title">{{ tr('startupGroups') }}</span>
                </div>
                <span class="tiny-tag workspace-tag">{{ tr('workspace') }}</span>
              </div>
              <div class="project">
                <div class="project-head">
                  <span>{{ tr('fullStack') }}</span>
                  <button
                    class="mini-btn"
                    type="button"
                    data-startup-preview
                    @click="running = !running"
                  >
                    {{ tr(running ? 'stopGroup' : 'startGroup') }}
                  </button>
                </div>
                <span class="sr-only" role="status">{{ tr(running ? 'running' : 'stopped') }}</span>
                <ul class="service-list">
                  <li
                    v-for="service in services"
                    :key="service"
                    class="service"
                    :class="{ stopped: !running }"
                  >
                    <span>{{ service }}</span>
                    <span class="status" data-startup-status>{{
                      tr(running ? 'running' : 'stopped')
                    }}</span>
                  </li>
                </ul>
              </div>
              <p class="diagram-foot">{{ tr('interactive') }}</p>
            </div>
          </div>
        </div>

        <div class="feature-split reverse">
          <div>
            <div class="eyebrow">02 / AI Memory + MCP</div>
            <h3>{{ tr('aiTitle') }}</h3>
            <p>{{ tr('aiBody') }}</p>
            <a class="link" :href="href('/features/ai-memory')"
              >{{ tr('exploreMemory') }} <span aria-hidden="true">→</span></a
            >
          </div>
          <div class="visual">
            <div class="diagram">
              <div class="diagram-top">
                <div class="flex items-center gap-2">
                  <img :src="logo" class="logo" alt="" width="29" height="29" />
                  <span class="diagram-title">{{ tr('sharedContext') }}</span>
                </div>
                <span class="tiny-tag workspace-tag">{{ tr('workspace') }}</span>
              </div>
              <div class="agent-row"
                ><div v-for="agent in agents" :key="agent">{{ agent }}</div></div
              >
              <div class="line-down" aria-hidden="true"></div>
              <div class="memory-core"
                >{{ tr('memoryViaMcp') }}<small>{{ tr('memoryScope') }}</small></div
              >
              <div class="line-down" aria-hidden="true"></div>
              <div class="project">
                <div class="project-head"
                  ><span>{{ tr('memoryData') }}</span
                  ><span class="tiny-tag">{{ tr('example') }}</span></div
                >
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(key, index) in ['memories', 'revisions', 'backups'] as const"
                    :key="key"
                    class="chip"
                    :class="chipTones[index]"
                    ><i aria-hidden="true"></i>{{ tr(key) }}</span
                  >
                </div>
              </div>
              <p class="diagram-foot">{{ tr('concept') }}</p>
            </div>
          </div>
        </div>

        <div class="feature-split">
          <div>
            <div class="eyebrow">03 / {{ tr('openSource') }}</div>
            <h3>{{ tr('sourceTitle') }}</h3>
            <p>{{ tr('sourceBody') }}</p>
            <a class="link" :href="github"
              >{{ tr('exploreSource') }} <span aria-hidden="true">→</span></a
            >
          </div>
          <div class="visual">
            <div class="diagram">
              <div class="diagram-top">
                <div class="flex items-center gap-2">
                  <img :src="logo" class="logo" alt="" width="29" height="29" />
                  <span class="diagram-title">{{ tr('modular') }}</span>
                </div>
                <span class="tiny-tag workspace-tag">{{ tr('workspace') }}</span>
              </div>
              <div class="flow-grid">
                <div v-for="[title, description] in modularLayers" :key="title" class="flow-cell">
                  <strong>{{ tr(title) }}</strong
                  ><p>{{ tr(description) }}</p>
                </div>
              </div>
              <div class="project">
                <div class="project-head"
                  ><span>{{ tr('nextProject') }}</span
                  ><span class="tiny-tag">{{ tr('compose') }}</span></div
                >
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(key, index) in ['install', 'configure', 'startTogether'] as const"
                    :key="key"
                    class="chip"
                    :class="chipTones[index]"
                    ><i aria-hidden="true"></i>{{ tr(key) }}</span
                  >
                </div>
              </div>
              <p class="diagram-foot">{{ tr('illustrative') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="migration" class="section" aria-labelledby="migration-title">
      <div class="wrap">
        <div class="step-grid">
          <div>
            <div class="eyebrow">{{ tr('tryWithProject') }}</div>
            <h2 id="migration-title">{{ tr('migrationTitle') }}</h2>
            <p class="lead">{{ tr('migrationLead') }}</p>
            <div class="hero-actions">
              <a class="btn primary" :href="href('/download')">{{ tr('download') }}</a>
              <a
                class="btn ghost"
                :href="href('/guide/getting-started')"
                data-analytics-surface="compare-migration"
                >{{ tr('gettingStarted') }}</a
              >
            </div>
          </div>
          <div class="panel">
            <ol class="steps" role="list">
              <li v-for="[title, description] in migrationSteps" :key="title" class="step">
                <h3>{{ tr(title) }}</h3>
                <p>{{ tr(description) }}</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="section tinted" aria-labelledby="faq-title">
      <div class="wrap">
        <div class="faq mx-auto">
          <div class="section-head">
            <div class="eyebrow">{{ tr('questions') }}</div>
            <h2 id="faq-title">{{ tr('frequentlyAsked') }}</h2>
          </div>
          <details v-for="entry in faqs" :key="entry.question">
            <summary>{{ entry.question }}</summary>
            <p v-if="entry.question === tr('faqLicense')">
              {{ tr('licenseRule') }} {{ licenseDetails[0]
              }}<a class="link" :href="href('/license')">{{ tr('licensePage') }}</a
              >{{ licenseDetails[1] }}
            </p>
            <p v-else>{{ entry.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <section id="download" class="section section-tight" aria-labelledby="servbay-download-title">
      <div class="wrap">
        <div class="cta">
          <div>
            <div class="eyebrow">{{ tr('makeYours') }}</div>
            <h2 id="servbay-download-title">{{ tr('closingTitle') }}</h2>
            <p>{{ tr('closingBody') }}</p>
          </div>
          <div class="hero-actions">
            <a
              class="btn dark-btn"
              :href="href('/download')"
              data-analytics-surface="compare-final-cta"
            >
              {{ tr('download') }} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="./ServBayComparisonPage.css"></style>
