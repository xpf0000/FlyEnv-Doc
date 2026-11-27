<script setup lang="ts">
  import { computed } from 'vue'
  import {
    ArrowRight,
    Check,
    Connection,
    Download,
    Present,
    Tickets
  } from '@element-plus/icons-vue'
  import { homeLicenseDetails, homeLicensePrice, homePricingCopy } from '../../data/home/pricing'

  const props = defineProps<{ locale: keyof typeof homePricingCopy }>()
  const copy = computed(() => homePricingCopy[props.locale])
  const license = computed(() => homeLicenseDetails[props.locale])
  const href = (path: string) => (props.locale === 'en' ? path : '/' + props.locale + path)
  const paths = ['/license', '/guide/about-license', '/community']
  const pathIcons = [Present, Connection, Tickets]
</script>

<template>
  <section id="pricing" class="section tinted pricing-section" aria-labelledby="pricing-title">
    <div class="wrap">
      <header class="section-head center">
        <span class="eyebrow">{{ copy.eyebrow }}</span>
        <h2 id="pricing-title">{{ copy.title }}</h2>
        <p>{{ copy.intro }}</p>
      </header>
      <div class="pricing-grid">
        <article class="price-card panel" data-pricing-tier="free">
          <span class="section-label">{{ copy.free }}</span>
          <div class="price">$0</div>
          <h3>{{ copy.freeTitle }}</h3>
          <p>{{ copy.freeDescription }}</p>
          <div class="price-rule"></div>
          <div class="price-list">
            <span v-for="item in copy.included" :key="item">
              <Check aria-hidden="true" class="icon" />{{ item }}
            </span>
          </div>
          <h4>{{ copy.limits }}</h4>
          <ul class="home-free-limits" data-home-free-limits>
            <li v-for="limit in license.limits" :key="limit.label">
              <b>{{ limit.value }}</b> {{ limit.label }}
              <small v-if="limit.tools">{{ limit.tools.join(' · ') }}</small>
            </li>
          </ul>
          <a
            class="btn secondary full-btn"
            :href="href('/download')"
            data-analytics-surface="new-home-pricing-free"
          >
            {{ copy.download }} <Download aria-hidden="true" class="icon" />
          </a>
          <a
            class="text-link"
            :href="href('/guide/about-license')"
            data-analytics-surface="new-home-license"
          >
            {{ copy.viewLimits }} <ArrowRight aria-hidden="true" class="icon" />
          </a>
        </article>
        <article class="price-card pro-card panel" data-pricing-tier="pro">
          <span class="section-label">{{ copy.pro }}</span>
          <div class="price"
            >${{ homeLicensePrice }} <span>{{ copy.oneTime }}</span></div
          >
          <h3>{{ copy.proTitle }}</h3>
          <p>{{ copy.proDescription }}</p>
          <div class="price-rule"></div>
          <div class="pro-benefits" data-home-pro-benefits>
            <span v-for="item in [...license.benefits, copy.plugins]" :key="item">
              <Check aria-hidden="true" class="icon" /><b>{{ item }}</b>
            </span>
          </div>
          <div class="pay-options">
            <h4>{{ copy.payTitle }}</h4>
            <p>{{ copy.payDescription }}</p>
            <div>
              <a
                v-for="(label, index) in license.paths"
                :key="label"
                :href="href(paths[index])"
                :data-analytics-surface="index < 2 ? 'new-home-license' : 'new-home-community'"
              >
                <component :is="pathIcons[index]" class="icon" aria-hidden="true" />
                <b>{{ label }}</b>
              </a>
            </div>
          </div>
          <a
            class="btn primary full-btn"
            :href="href('/license')"
            data-analytics-surface="new-home-pricing-pro"
          >
            {{ copy.license }} <ArrowRight aria-hidden="true" class="icon" />
          </a>
          <small class="section-note">{{ copy.note }}</small>
        </article>
      </div>
    </div>
  </section>

  <section class="section final-section" aria-labelledby="final-cta-title">
    <div class="wrap">
      <div class="final-cta">
        <div>
          <span class="eyebrow">{{ copy.finalEyebrow }}</span>
          <h2 id="final-cta-title">{{ copy.finalTitle }}</h2>
          <p>{{ copy.finalDescription }}</p>
        </div>
        <div class="final-actions">
          <a
            class="btn white-btn"
            :href="href('/download')"
            data-analytics-surface="new-home-final-cta"
          >
            <Download aria-hidden="true" class="icon" /> {{ copy.download }}
          </a>
          <a class="light-link" :href="href('/guide/getting-started')">
            {{ copy.guide }} <ArrowRight aria-hidden="true" class="icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
