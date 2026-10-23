<template>
  <div class="payment-page">
    <main class="page-width payment-main">
      <section class="success-hero" aria-labelledby="payment-title">
        <div class="success-seal" aria-hidden="true"><Check /></div>
        <h1 id="payment-title">{{ copy.title }}</h1>
        <p class="hero-thanks">{{ copy.thanks }}</p>
        <p class="hero-description">{{ copy.description }}</p>

        <ol class="purchase-progress" :aria-label="copy.progressLabel">
          <li class="progress-step complete">
            <span class="progress-number"><Check aria-hidden="true" /></span>
            <span>{{ copy.progress[0] }}</span>
          </li>
          <li class="progress-step current" aria-current="step">
            <span class="progress-number">2</span>
            <span>{{ copy.progress[1] }}</span>
          </li>
          <li class="progress-step pending">
            <span class="progress-number">3</span>
            <span>{{ copy.progress[2] }}</span>
          </li>
        </ol>
      </section>

      <section id="license-request" class="request-card" aria-labelledby="request-title">
        <div class="request-columns">
          <div class="instructions">
            <p class="section-label">{{ copy.nextStep }}</p>
            <h2 id="request-title"
              >{{ copy.requestTitle[0] }}<br class="desktop-break" />{{
                ' ' + copy.requestTitle[1]
              }}</h2
            >
            <p class="section-description">{{ copy.intro }}</p>

            <ol class="request-steps">
              <li>
                <span class="step-number" aria-hidden="true">1</span>
                <div class="step-content">
                  <h3>{{ copy.step1Title }}</h3>
                  <p>{{ copy.step1Description }}</p>
                  <div class="app-location" :aria-label="copy.locationLabel">
                    <span><Setting aria-hidden="true" />{{ copy.settings }}</span>
                    <ArrowRight class="location-arrow" aria-hidden="true" />
                    <span><Document aria-hidden="true" />{{ copy.license }}</span>
                  </div>
                </div>
              </li>
              <li>
                <span class="step-number" aria-hidden="true">2</span>
                <div class="step-content">
                  <h3>{{ copy.step2Title }}</h3>
                  <p>{{ copy.step2Description }}</p>
                </div>
              </li>
              <li>
                <span class="step-number" aria-hidden="true">3</span>
                <div class="step-content">
                  <h3>{{ copy.step3Title }}</h3>
                  <p>{{ copy.step3Description }}</p>
                </div>
              </li>
            </ol>
          </div>

          <aside class="template-panel" aria-labelledby="template-title">
            <div class="template-icon" aria-hidden="true"><Document /></div>
            <h3 id="template-title">{{ copy.templateTitle }}</h3>
            <p class="template-description">{{ copy.templateDescription }}</p>
            <p class="template-label" id="example-label">{{ copy.example }}</p>
            <pre
              class="message-template"
              tabindex="0"
              aria-labelledby="example-label"
            ><code>{{ requestTemplate }}</code></pre>
            <button
              class="copy-button"
              type="button"
              :disabled="copyState === 'copying'"
              @click="copyTemplate"
            >
              <Check v-if="copyState === 'copied'" aria-hidden="true" />
              <CopyDocument v-else aria-hidden="true" />
              {{
                copyState === 'copied'
                  ? copy.copied
                  : copyState === 'copying'
                    ? copy.copying
                    : copy.copy
              }}
            </button>
            <p class="copy-feedback" role="status" aria-live="polite">{{ copyFeedback }}</p>

            <div class="receipt-note">
              <Message aria-hidden="true" />
              <p>
                <strong>{{ copy.receiptTitle }}</strong>
                {{ copy.receiptNote }}
              </p>
            </div>
          </aside>
        </div>

        <div class="manual-issuance">
          <Clock aria-hidden="true" />
          <p>
            {{ copy.manualNote }}
            <span>{{ copy.processingNote }}</span>
          </p>
        </div>

        <div class="next-actions">
          <a class="primary-action" :href="`${localePrefix}/guide/about-license`">
            {{ copy.guide }}<ArrowRight aria-hidden="true" />
          </a>
          <a class="download-action" :href="`${localePrefix}/download`">
            {{ copy.download }}<Download aria-hidden="true" />
          </a>
        </div>
      </section>

      <p class="support-link">
        <QuestionFilled aria-hidden="true" />
        <span>{{ copy.help }}</span>
        <a :href="`mailto:${copy.supportEmail}`"
          >{{ copy.support }}<ArrowRight aria-hidden="true"
        /></a>
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { computed, onUnmounted, ref } from 'vue'
  import { paymentSuccessCopy, type PaymentLocale } from '../../data/payment-success'
  import {
    ArrowRight,
    Check,
    Clock,
    CopyDocument,
    Document,
    Download,
    Message,
    QuestionFilled,
    Setting
  } from '@element-plus/icons-vue'

  const props = withDefaults(defineProps<{ locale?: PaymentLocale }>(), { locale: 'en' })
  const copy = computed(() => paymentSuccessCopy[props.locale])
  const localePrefix = computed(() => (props.locale === 'en' ? '' : `/${props.locale}`))
  const requestTemplate = computed(() => copy.value.requestTemplate)
  const copyState = ref<'idle' | 'copying' | 'copied' | 'error'>('idle')
  let resetTimer: ReturnType<typeof setTimeout> | undefined

  const copyFeedback = computed(() => {
    if (copyState.value === 'copied') return copy.value.copySuccess
    if (copyState.value === 'error') return copy.value.copyFailure
    return ''
  })

  function copyWithFallback() {
    const previousFocus = document.activeElement
    const textarea = document.createElement('textarea')
    textarea.value = requestTemplate.value
    textarea.setAttribute('readonly', '')
    textarea.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0'
    document.body.appendChild(textarea)
    try {
      textarea.select()
      return document.execCommand('copy')
    } catch {
      return false
    } finally {
      textarea.remove()
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true })
    }
  }

  async function copyTemplate() {
    if (copyState.value === 'copying') return
    if (resetTimer) clearTimeout(resetTimer)
    copyState.value = 'copying'
    let copied = false
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(requestTemplate.value)
        copied = true
      }
    } catch {
      // Browser clipboard permissions vary; the selectable template remains available.
    }
    if (!copied) copied = copyWithFallback()
    copyState.value = copied ? 'copied' : 'error'
    if (copied)
      resetTimer = setTimeout(() => {
        copyState.value = 'idle'
      }, 4000)
  }

  onUnmounted(() => {
    if (resetTimer) clearTimeout(resetTimer)
  })
</script>

<style scoped>
  .payment-page {
    --page-bg: #f8fbff;
    --surface: #fff;
    --ink: #102044;
    --muted: #526589;
    --line: #dce6f5;
    --accent: #0759f6;
    --accent-hover: #0347cd;
    --tint: #edf4ff;
    --template-bg: #fafdff;
    --green: #19ac68;
    --shadow: 0 20px 70px -30px rgb(46 91 167 / 20%);
    background: radial-gradient(ellipse at 50% 22%, #ecf5ff 0, transparent 62%), var(--page-bg);
    color: var(--ink);
    font-family: var(--vp-font-family-base);
    -webkit-font-smoothing: antialiased;
  }
  :global(.dark .payment-page) {
    --page-bg: #0c1424;
    --surface: #121e32;
    --ink: #eef4ff;
    --muted: #acbddb;
    --line: #2a3a56;
    --accent: #81adff;
    --accent-hover: #a7c6ff;
    --tint: #1a2d4b;
    --template-bg: #0f1b2e;
    --green: #42d395;
    --shadow: 0 20px 70px -30px rgb(0 8 27 / 55%);
    background: radial-gradient(ellipse at 50% 22%, #152a46 0, transparent 62%), var(--page-bg);
  }
  .payment-page :where(h1, h2, h3, p, ol, pre) {
    margin: 0;
  }
  .payment-page a {
    text-decoration: none;
  }
  .payment-page button {
    font: inherit;
  }
  .payment-page svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }
  .payment-page :where(a, button, pre):focus-visible {
    outline: 3px solid var(--accent);
    outline-offset: 5px;
  }
  .page-width {
    width: min(1280px, calc(100% - 96px));
    margin-inline: auto;
  }

  .success-hero {
    padding: 66px 0 42px;
    text-align: center;
  }
  .success-seal {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    margin: 0 auto 30px;
    border-radius: 50%;
    color: #fff;
    background: #19ac68;
    box-shadow:
      0 0 0 10px rgb(25 172 104 / 9%),
      0 0 0 21px rgb(25 172 104 / 4%);
  }
  .success-seal svg {
    width: 30px;
    height: 30px;
    stroke: currentColor;
    stroke-width: 1;
  }
  .success-hero h1 {
    font-size: clamp(44px, 5vw, 72px);
    font-weight: 750;
    line-height: 1.08;
    letter-spacing: -3.6px;
  }
  .hero-thanks {
    margin-top: 16px !important;
    font-size: 24px;
    line-height: 1.45;
    font-weight: 550;
    letter-spacing: -0.5px;
  }
  .hero-description {
    margin-top: 10px !important;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.65;
  }
  .purchase-progress {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 650px;
    padding: 0;
    margin: 36px auto 0 !important;
    list-style: none;
  }
  .progress-step {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.4;
  }
  .progress-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 19px;
    left: calc(50% + 30px);
    width: calc(100% - 60px);
    height: 2px;
    background: var(--line);
  }
  .progress-step.complete::after {
    background: var(--accent);
  }
  .progress-number {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--tint);
    font-weight: 650;
    font-size: 16px;
  }
  .complete .progress-number {
    background: #19ac68;
    color: #fff;
  }
  .current {
    color: var(--accent);
    font-weight: 600;
  }
  .current .progress-number {
    background: #0759f6;
    color: #fff;
    box-shadow: 0 0 0 6px rgb(7 89 246 / 6%);
  }
  .request-card {
    scroll-margin-top: 24px;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: var(--surface);
    box-shadow: var(--shadow);
    overflow: hidden;
  }
  .request-columns {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 52px;
    padding: 48px 48px 36px;
  }
  .section-label {
    color: var(--accent);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 13px !important;
  }
  .instructions h2 {
    font-size: clamp(29px, 2.6vw, 38px);
    font-weight: 700;
    line-height: 1.14;
    letter-spacing: -1.5px;
  }
  .section-description {
    max-width: 540px;
    margin-top: 15px !important;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.7;
  }
  .request-steps {
    padding: 0;
    margin-top: 31px !important;
    list-style: none;
  }
  .request-steps li {
    position: relative;
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 22px;
    padding-bottom: 26px;
  }
  .request-steps li:last-child {
    padding-bottom: 0;
  }
  .request-steps li:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 51px;
    bottom: 6px;
    left: 21px;
    width: 1px;
    background: var(--line);
  }
  .step-number {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: 1px solid #b3ceff;
    border-radius: 50%;
    color: var(--accent);
    background: var(--template-bg);
    font-size: 18px;
    font-weight: 600;
  }
  .step-content {
    padding-top: 5px;
  }
  .step-content h3 {
    font-size: 17px;
    font-weight: 650;
    line-height: 1.4;
    letter-spacing: -0.35px;
  }
  .step-content p {
    margin-top: 6px !important;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.65;
  }
  .app-location {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 14px;
  }
  .app-location > span {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    border-radius: 8px;
    padding: 9px 14px;
    background: var(--tint);
    font-size: 13px;
    font-weight: 550;
  }
  .app-location > span svg {
    color: var(--accent);
    width: 18px;
    height: 18px;
  }
  .app-location .location-arrow {
    color: var(--muted);
    width: 15px;
    height: 15px;
  }
  .template-panel {
    align-self: stretch;
    min-width: 0;
    padding: 30px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: linear-gradient(145deg, var(--template-bg), var(--tint));
  }
  .template-icon {
    display: grid;
    place-items: center;
    width: 43px;
    height: 43px;
    margin-bottom: 24px;
    border: 1px solid var(--line);
    border-radius: 11px;
    background: var(--surface);
    color: var(--accent);
  }
  .template-panel h3 {
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: 1.3;
  }
  .template-description {
    margin-top: 10px !important;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.65;
  }
  .template-label {
    margin-top: 27px !important;
    color: var(--muted);
    font-size: 10px;
    font-weight: 650;
    text-transform: uppercase;
    letter-spacing: 1.7px;
  }
  .message-template {
    margin-top: 11px !important;
    padding: 18px;
    border: 1px solid var(--line);
    border-radius: 9px;
    background: var(--surface);
    color: var(--ink);
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    font-family: var(--vp-font-family-mono);
    font-size: 12px;
    line-height: 1.85;
  }
  .message-template code {
    font-family: inherit;
  }
  .copy-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 44px;
    margin-top: 14px;
    padding: 9px 15px;
    border: 1px solid var(--accent);
    border-radius: 8px;
    background: var(--surface);
    color: var(--accent);
    font-size: 14px !important;
    font-weight: 600 !important;
    cursor: pointer;
  }
  .copy-button svg {
    width: 18px;
    height: 18px;
  }
  .copy-button:hover {
    background: var(--tint);
  }
  .copy-button:disabled {
    cursor: wait;
    opacity: 0.7;
  }
  .copy-feedback {
    min-height: 37px;
    margin-top: 9px !important;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.5;
  }
  .receipt-note {
    display: flex;
    gap: 16px;
    padding-top: 22px;
    margin-top: 10px;
    border-top: 1px solid var(--line);
  }
  .receipt-note > svg {
    color: var(--accent);
    width: 24px;
    height: 24px;
    margin-top: 2px;
  }
  .receipt-note p {
    color: var(--muted);
    font-size: 13px;
    line-height: 1.75;
  }
  .receipt-note strong {
    display: block;
    font-weight: 600;
    color: var(--ink);
  }
  .manual-issuance {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0 48px;
    padding: 17px 20px;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--tint);
    color: var(--muted);
  }
  .manual-issuance > svg {
    color: var(--accent);
    width: 24px;
    height: 24px;
  }
  .manual-issuance p {
    font-size: 13px;
    line-height: 1.7;
  }
  .manual-issuance span {
    display: inline-block;
  }
  .next-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 29px;
    padding: 26px 36px 31px;
  }
  .primary-action,
  .download-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    min-height: 48px;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 600;
  }
  .primary-action {
    padding: 13px 24px;
    border-radius: 8px;
    background: #0759f6;
    color: #fff;
    box-shadow: 0 4px 12px rgb(7 89 246 / 12%);
  }
  .primary-action:hover {
    background: #0347cd;
  }
  .primary-action svg,
  .download-action svg {
    width: 18px;
    height: 18px;
  }
  .download-action {
    color: var(--accent);
  }
  .download-action:hover {
    color: var(--accent-hover);
  }
  .support-link {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 25px 0 96px;
    font-size: 13px;
    color: var(--muted);
  }
  .support-link > svg {
    color: var(--accent);
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
  .support-link a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--accent);
    font-weight: 550;
  }
  .support-link a:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .support-link a svg {
    width: 13px;
    height: 13px;
    transform: rotate(-35deg);
  }

  @media (min-width: 1500px) {
    .success-hero {
      padding-top: 78px;
      padding-bottom: 48px;
    }
    .request-columns {
      padding: 54px 56px 40px;
      gap: 64px;
    }
    .manual-issuance {
      margin-inline: 56px;
    }
  }
  @media (max-width: 1050px) {
    .page-width {
      width: calc(100% - 56px);
    }
    .request-columns {
      padding: 36px;
      gap: 30px;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    }
    .template-panel {
      padding: 25px;
    }
    .manual-issuance {
      margin-inline: 36px;
    }
    .instructions h2 {
      font-size: 30px;
      letter-spacing: -1px;
    }
    .step-content h3 {
      font-size: 16px;
    }
    .request-steps li {
      gap: 17px;
    }
  }
  @media (max-width: 760px) {
    .page-width {
      width: calc(100% - 36px);
    }

    .success-hero {
      padding: 54px 2px 31px;
    }
    .success-seal {
      width: 48px;
      height: 48px;
      margin-bottom: 28px;
    }
    .success-seal svg {
      width: 25px;
      height: 25px;
    }
    .success-hero h1 {
      font-size: clamp(34px, 7.8vw, 52px);
      letter-spacing: -1.8px;
    }
    .hero-thanks {
      font-size: 19px;
      margin-top: 13px !important;
    }
    .hero-description {
      max-width: 420px;
      margin: 9px auto 0 !important;
      font-size: 15px;
      line-height: 1.7;
    }
    .purchase-progress {
      margin-top: 28px !important;
    }
    .progress-step {
      gap: 10px;
      font-size: 11px;
    }
    .progress-step > span:last-child {
      max-width: 105px;
    }
    .progress-number {
      width: 34px;
      height: 34px;
      font-size: 14px;
    }
    .progress-number svg {
      width: 19px;
      height: 19px;
    }
    .progress-step:not(:last-child)::after {
      top: 16px;
      left: calc(50% + 25px);
      width: calc(100% - 50px);
    }
    .request-card {
      border-radius: 15px;
    }
    .request-columns {
      grid-template-columns: minmax(0, 1fr);
      padding: 27px 23px 24px;
      gap: 28px;
    }
    .section-label {
      margin-bottom: 11px !important;
    }
    .instructions h2 {
      max-width: 390px;
      font-size: 29px;
    }
    .desktop-break {
      display: none;
    }
    .section-description {
      font-size: 14px;
    }
    .request-steps {
      margin-top: 25px !important;
    }
    .request-steps li {
      grid-template-columns: 36px minmax(0, 1fr);
      gap: 15px;
      padding-bottom: 24px;
    }
    .step-number {
      width: 36px;
      height: 36px;
      font-size: 15px;
    }
    .step-content {
      padding-top: 4px;
    }
    .step-content h3 {
      font-size: 15px;
    }
    .step-content p {
      font-size: 13px;
    }
    .request-steps li:not(:last-child)::after {
      left: 17px;
      top: 43px;
    }
    .app-location {
      gap: 8px;
      margin-top: 12px;
    }
    .app-location > span {
      gap: 6px;
      padding: 8px 10px;
      font-size: 12px;
    }
    .app-location > span svg {
      width: 16px;
      height: 16px;
    }
    .template-panel {
      padding: 24px;
    }
    .template-icon {
      margin-bottom: 17px;
    }
    .template-panel h3 {
      font-size: 23px;
    }
    .template-description {
      font-size: 14px;
    }
    .template-label {
      margin-top: 22px !important;
    }
    .message-template {
      font-size: 11px;
      padding: 15px;
    }
    .copy-feedback {
      min-height: 20px;
    }
    .receipt-note {
      margin-top: 13px;
      padding-top: 18px;
    }
    .manual-issuance {
      align-items: flex-start;
      margin-inline: 23px;
      padding: 15px;
      gap: 11px;
    }
    .manual-issuance > svg {
      width: 20px;
      height: 20px;
      margin-top: 2px;
    }
    .manual-issuance p {
      font-size: 12px;
    }
    .manual-issuance span {
      margin-top: 3px;
    }
    .next-actions {
      flex-direction: column;
      gap: 10px;
      padding: 23px 23px 22px;
    }
    .primary-action {
      width: 100%;
    }
    .download-action {
      min-height: 40px;
    }
    .support-link {
      padding-bottom: 72px;
      font-size: 12px;
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    .payment-page :where(button, .primary-action, .download-action) {
      transition:
        background-color 0.18s,
        color 0.18s,
        transform 0.18s;
    }
    .payment-page :where(button, .primary-action, .download-action):active {
      transform: translateY(1px);
    }
  }
</style>
