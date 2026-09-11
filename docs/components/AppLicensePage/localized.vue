<template>
  <div
    class="license-page relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
  >
    <section
      class="border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 py-20 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-violet-950/30 md:py-24 lg:py-28"
    >
      <div class="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <header class="mx-auto max-w-4xl text-center">
          <p class="!m-0 text-sm font-semibold uppercase text-blue-600 dark:text-blue-300">
            {{ copy.eyebrow }}
          </p>
          <h1
            class="!mb-0 !mt-5 !border-0 !pt-0 !text-4xl !font-bold !leading-tight text-slate-900 dark:text-white md:!text-5xl"
          >
            {{ copy.title }}
          </h1>
          <p class="!mb-0 !mt-7 !text-lg !leading-8 text-slate-600 dark:text-slate-300 md:!text-xl">
            {{ copy.description }}
          </p>
          <div
            class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-300"
            :aria-label="copy.benefitsLabel"
          >
            <span
              v-for="benefit in copy.benefits"
              :key="benefit"
              class="rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/80"
            >
              {{ benefit }}
            </span>
          </div>
        </header>

        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-10">
          <article
            class="rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900 md:p-10 lg:min-h-[38rem] lg:p-12"
          >
            <div
              class="rounded-md bg-gradient-to-r from-orange-50 to-cyan-50 px-5 py-4 text-xl font-bold text-slate-900 dark:from-orange-500/10 dark:to-cyan-500/10 dark:text-white"
            >
              {{ copy.licenseName }}
            </div>
            <p
              class="!mb-0 !mt-12 !text-7xl !font-bold !leading-none text-slate-950 dark:text-white"
            >
              $10
            </p>
            <p class="!mb-0 !mt-4 !text-base !leading-7 text-slate-500 dark:text-slate-400">
              {{ copy.oneTimePayment }}
            </p>

            <ul
              class="!mb-0 !mt-12 grid list-none gap-5 !p-0 text-base text-slate-600 dark:text-slate-300"
            >
              <li v-for="feature in copy.features" :key="feature" class="flex items-center gap-3">
                <span
                  class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 text-xs font-bold text-orange-500"
                  aria-hidden="true"
                  >+</span
                >
                {{ feature }}
              </li>
            </ul>

            <button
              type="button"
              class="mt-12 inline-flex min-h-14 w-full items-center justify-center rounded-md bg-orange-500 px-6 text-base font-semibold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:translate-y-px disabled:cursor-wait disabled:opacity-70"
              :disabled="paddleLoading"
              @click="openPaddleCheckout"
            >
              {{ paddleLoading ? copy.openingCheckout : copy.buyWithPaddle }}
            </button>
            <p
              v-if="paddleError"
              class="!mb-0 !mt-4 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {{ paddleError }}
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-medium">
              <a
                :href="copy.guidePath"
                class="text-blue-600 no-underline hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
              >
                {{ copy.termsLink }}
              </a>
              <a
                :href="copy.guidePath"
                class="border-l border-slate-200 pl-5 text-blue-600 no-underline hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:border-slate-700 dark:text-blue-300 dark:hover:text-blue-200"
              >
                {{ copy.activationGuideLink }}
              </a>
            </div>
          </article>

          <article
            class="rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900 md:p-10 lg:min-h-[38rem] lg:p-12"
          >
            <h2
              class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-slate-900 dark:text-white"
            >
              {{ copy.howItWorks }}
            </h2>
            <ol class="!mb-0 !mt-12 grid list-none gap-9 !p-0">
              <li v-for="(step, index) in copy.steps" :key="step.title" class="grid grid-cols-[3.25rem_1fr] gap-5">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white"
                  aria-hidden="true"
                >
                  {{ index + 1 }}
                </span>
                <div>
                  <strong class="block !text-lg !font-bold text-slate-900 dark:text-white">
                    {{ step.title }}
                  </strong>
                  <span class="mt-2 block !text-base !leading-7 text-slate-500 dark:text-slate-400">
                    {{ step.description }}
                  </span>
                </div>
              </li>
            </ol>
            <div
              class="mt-12 rounded-md border border-blue-200 bg-blue-50 px-5 py-4 text-sm leading-6 text-slate-600 dark:border-blue-400/40 dark:bg-blue-400/10 dark:text-slate-300"
            >
              {{ copy.deviceTransfer }}
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-28 lg:py-32">
      <div class="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-slate-900 dark:text-white md:!text-4xl"
          >
            {{ copy.otherWaysTitle }}
          </h2>
          <p class="!mb-0 !mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {{ copy.otherWaysDescription }}
          </p>
        </header>

        <div class="mt-16 grid gap-7 md:grid-cols-3 lg:mt-20 lg:gap-8">
          <article
            v-for="method in copy.methods"
            :key="method.title"
            class="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900"
          >
            <div :class="method.headerClass">
              <span :class="method.iconClass" :aria-hidden="method.kind === 'contribute' ? 'true' : undefined">
                {{ method.icon }}
              </span>
            </div>
            <div class="flex flex-1 flex-col p-8 text-center lg:p-9">
              <h3
                class="!mb-0 !mt-0 !border-0 !pt-0 text-2xl font-bold text-slate-900 dark:text-white"
              >
                {{ method.title }}
              </h3>
              <p
                class="!mb-0 !mt-4 min-h-14 text-base leading-7 text-slate-500 dark:text-slate-400"
              >
                {{ method.description }}
              </p>

              <template v-if="method.kind === 'contribute'">
                <div class="mt-8 grid min-h-52 grid-cols-2 gap-5">
                  <div v-for="item in method.items" :key="item.label" class="grid content-center justify-items-center gap-4">
                    <span
                      :class="item.iconClass"
                      aria-hidden="true"
                    >
                      {{ item.icon }}
                    </span>
                    <strong class="text-sm text-slate-700 dark:text-slate-200">{{ item.label }}</strong>
                  </div>
                </div>
                <a :href="copy.guidePath" :class="method.actionClass">
                  {{ method.action }}
                </a>
              </template>
              <template v-else>
                <div class="mt-8 flex h-52 items-center justify-center">
                  <img
                    :src="method.qrImage"
                    :alt="method.qrAlt"
                    width="192"
                    height="192"
                    class="h-48 w-48 rounded-md object-contain"
                    loading="lazy"
                  />
                </div>
                <span :class="method.actionClass">
                  {{ method.action }}
                </span>
              </template>
            </div>
          </article>
        </div>

        <a
          :href="copy.communityPath"
          class="mx-auto mt-12 flex w-fit text-base font-semibold text-blue-600 no-underline hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
        >
          {{ copy.communityLink }}
        </a>
      </div>
    </section>

    <section
      class="border-y border-slate-100 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-950 md:py-28 lg:py-32"
    >
      <div class="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <header class="text-center">
          <h2
            class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-slate-900 dark:text-white md:!text-4xl"
          >
            {{ copy.faqTitle }}
          </h2>
        </header>
        <div
          class="mt-14 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:mt-16"
        >
          <details
            v-for="faq in copy.faqs"
            :key="faq.question"
            class="group border-b border-slate-200 last:border-b-0 dark:border-slate-700"
          >
            <summary
              class="!m-0 flex cursor-pointer list-none items-center justify-between gap-6 px-7 py-6 !text-base !font-semibold text-slate-800 marker:hidden dark:text-slate-100"
            >
              <span>{{ faq.question }}</span>
              <span
                class="shrink-0 text-2xl font-normal leading-none text-slate-500 transition-transform group-open:rotate-45 dark:text-slate-400"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div
              v-if="faq.email"
              class="!m-0 px-7 pb-7 !text-base !leading-7 text-slate-600 dark:text-slate-300"
            >
              <p class="!m-0">{{ faq.answer }}</p>
              <div class="mt-3 flex max-w-full items-center gap-2">
                <span
                  class="inline-flex min-w-0 select-text cursor-text break-all rounded-md bg-blue-50 px-3 py-2 font-semibold !text-blue-700 dark:bg-blue-400/15 dark:!text-blue-200"
                >
                  {{ faq.email }}
                </span>
                <button
                  type="button"
                  :aria-label="copiedEmail === faq.email ? copy.emailCopied : copy.copyEmail"
                  :title="copiedEmail === faq.email ? copy.emailCopied : copy.copyEmail"
                  class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  :class="
                    copiedEmail === faq.email
                      ? 'border-emerald-200 bg-emerald-50 !text-emerald-700 hover:bg-emerald-100 dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:!text-emerald-300 dark:hover:bg-emerald-400/25'
                      : 'border-blue-200 bg-white !text-blue-700 hover:bg-blue-100 hover:!text-blue-800 dark:border-blue-400/30 dark:bg-slate-900 dark:!text-blue-200 dark:hover:bg-blue-400/15 dark:hover:!text-blue-100'
                  "
                  @click="copyEmail(faq.email)"
                >
                  <Check v-if="copiedEmail === faq.email" class="h-5 w-5" aria-hidden="true" />
                  <CopyDocument v-else class="h-5 w-5" aria-hidden="true" />
                </button>
                <span class="sr-only" aria-live="polite">
                  {{ copiedEmail === faq.email ? copy.emailCopied : '' }}
                </span>
              </div>
              <p class="!mb-0 !mt-3">{{ faq.emailSuffix }}</p>
            </div>
            <p
              v-else
              class="!m-0 px-7 pb-7 !text-base !leading-7 text-slate-600 dark:text-slate-300"
            >
              {{ faq.answer }}
            </p>
          </details>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-28 lg:py-32">
      <div class="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <header class="text-center">
          <h2
            class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-slate-900 dark:text-white md:!text-4xl"
          >
            {{ copy.thanksTitle }}
          </h2>
          <p class="!mb-0 !mt-6 !text-lg !leading-8 text-slate-600 dark:text-slate-300">
            {{ copy.thanksDescription }}
          </p>
        </header>

        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16">
          <article
            class="flex items-start gap-5 rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 dark:bg-amber-400/15 dark:text-amber-300"
              aria-hidden="true"
            >
              F4
            </div>
            <div>
              <p class="!mb-0 !mt-0 !text-lg !font-bold !leading-7 text-slate-900 dark:text-white">
                F4nniu
              </p>
              <p class="!mb-0 !mt-3 !text-sm !leading-6 text-slate-600 dark:text-slate-300">
                {{ copy.fastAdminPrefix }}
                <a
                  href="https://www.fastadmin.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  FastAdmin
                </a>
                {{ copy.fastAdminSuffix }}
              </p>
            </div>
          </article>

          <article
            class="flex items-start gap-5 rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 dark:bg-amber-400/15 dark:text-amber-300"
              aria-hidden="true"
            >
              SP
            </div>
            <div>
              <p class="!mb-0 !mt-0 !text-lg !font-bold !leading-7 text-slate-900 dark:text-white">
                <a
                  href="https://signpath.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  SignPath
                </a>
              </p>
              <p class="!mb-0 !mt-3 !text-sm !leading-6 text-slate-600 dark:text-slate-300">
                {{ copy.signPathPrefix }}
                <a
                  href="https://signpath.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  SignPath.io
                </a>
                {{ copy.signPathMiddle }}
                <a
                  href="https://signpath.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  SignPath Foundation
                </a>
                {{ copy.signPathSuffix }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="pb-28 pt-4 lg:pb-32">
      <div class="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div
          class="flex flex-col gap-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-white shadow-xl shadow-blue-900/20 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-12"
        >
          <div>
            <h2 class="!mb-0 !mt-0 !border-0 !pt-0 !text-3xl !font-bold !leading-tight text-white">
              {{ copy.finalTitle }}
            </h2>
            <p class="!mb-0 !mt-5 !text-lg !leading-8 text-blue-50">
              {{ copy.finalDescription }}
            </p>
          </div>
          <div class="flex flex-wrap gap-4">
            <button
              type="button"
              class="inline-flex min-h-14 items-center justify-center rounded-md bg-white px-6 text-base font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-px disabled:cursor-wait disabled:opacity-70"
              :disabled="paddleLoading"
              @click="openPaddleCheckout"
            >
              {{ paddleLoading ? copy.openingCheckout : copy.buyLicense }}
            </button>
            <a
              :href="copy.guidePath"
              class="inline-flex min-h-14 items-center justify-center rounded-md border border-white/60 px-6 text-base font-semibold !text-white no-underline transition hover:border-white hover:bg-white/10 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {{ copy.licenseTerms }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { Check, CopyDocument } from '@element-plus/icons-vue'
  import { computed, ref } from 'vue'
  import { usePaddleCheckout } from '../AppSponsorPage/usePaddleCheckout'

  type Locale = 'zh' | 'id' | 'es'

  type Faq = {
    question: string
    answer: string
    email?: string
    emailSuffix?: string
  }

  type ContributionItem = {
    icon: string
    label: string
    iconClass: string
  }

  type PaymentMethod = {
    kind: 'wechat' | 'alipay' | 'contribute'
    title: string
    description: string
    icon: string
    headerClass: string
    iconClass: string
    action: string
    actionClass: string
    qrImage?: string
    qrAlt?: string
    items?: ContributionItem[]
  }

  type LicenseCopy = {
    eyebrow: string
    title: string
    description: string
    benefitsLabel: string
    benefits: string[]
    licenseName: string
    oneTimePayment: string
    features: string[]
    buyWithPaddle: string
    openingCheckout: string
    termsLink: string
    activationGuideLink: string
    howItWorks: string
    steps: Array<{ title: string; description: string }>
    deviceTransfer: string
    otherWaysTitle: string
    otherWaysDescription: string
    methods: PaymentMethod[]
    communityLink: string
    faqTitle: string
    faqs: Faq[]
    copyEmail: string
    emailCopied: string
    thanksTitle: string
    thanksDescription: string
    fastAdminPrefix: string
    fastAdminSuffix: string
    signPathPrefix: string
    signPathMiddle: string
    signPathSuffix: string
    finalTitle: string
    finalDescription: string
    buyLicense: string
    licenseTerms: string
    guidePath: string
    communityPath: string
    paddleError: string
  }

  const props = defineProps<{
    locale: Locale
  }>()

  const messages: Record<Locale, LicenseCopy> = {
    zh: {
      eyebrow: 'FlyEnv 许可证',
      title: '获取 FlyEnv 许可证',
      description: '一次性购买即可在一台设备上解锁高级功能，无需订阅。',
      benefitsLabel: '许可证权益',
      benefits: ['10 美元一次性付款', '1 台设备', '未来更新', '设备激活'],
      licenseName: 'FlyEnv 许可证',
      oneTimePayment: '一次性付款',
      features: ['每份许可证限一台设备', '无持续费用', '包含未来更新', '基于设备的激活'],
      buyWithPaddle: '通过 Paddle 安全购买',
      openingCheckout: '正在打开结账页面...',
      termsLink: '许可证条款 ->',
      activationGuideLink: '激活说明 ->',
      howItWorks: '使用流程',
      steps: [
        { title: '购买', description: '通过 Paddle 安全完成购买。' },
        {
          title: '在 FlyEnv 中申请许可证',
          description: '打开 FlyEnv 设置 -> 许可证，提交 Paddle 订单 ID 或收据邮箱，并填写联系邮箱。'
        },
        {
          title: '获取许可证',
          description: '您的申请将由人工审核，验证后即会发放许可证。'
        }
      ],
      deviceTransfer:
        '许可证绑定至一台设备。更换设备时，请使用 GitHub 登录，在“我的许可证”中解绑旧设备，再绑定新设备。',
      otherWaysTitle: '其他支持 FlyEnv 或获得许可证的方式',
      otherWaysDescription: '偏好其他方式？您也可以通过贡献或扫码付款来支持 FlyEnv 并申请许可证。',
      methods: [
        {
          kind: 'wechat',
          title: '微信支付',
          description: '扫描二维码，通过微信支付付款。',
          icon: 'WX',
          headerClass:
            'flex h-24 items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10',
          iconClass:
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-green-200 bg-white text-xs font-extrabold text-green-600 shadow-sm dark:border-green-400/30 dark:bg-slate-900 dark:text-green-300',
          action: '扫描二维码',
          actionClass:
            'mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-green-600 px-5 text-base font-semibold text-white',
          qrImage: 'https://oss.macphpstudy.com/image/qrcode1@2x.png',
          qrAlt: '微信支付二维码'
        },
        {
          kind: 'alipay',
          title: '支付宝',
          description: '扫描二维码，通过支付宝付款。',
          icon: 'ALI',
          headerClass:
            'flex h-24 items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10',
          iconClass:
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-blue-200 bg-white text-xs font-extrabold text-blue-600 shadow-sm dark:border-blue-400/30 dark:bg-slate-900 dark:text-blue-300',
          action: '扫描二维码',
          actionClass:
            'mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-blue-600 px-5 text-base font-semibold text-white',
          qrImage: 'https://oss.macphpstudy.com/image/qrcode2@2x.png',
          qrAlt: '支付宝二维码'
        },
        {
          kind: 'contribute',
          title: '参与贡献',
          description: '撰写原创文章或提交代码贡献，即有机会获得许可证。',
          icon: '+',
          headerClass:
            'flex h-24 items-center justify-center bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-500/10 dark:to-fuchsia-500/10',
          iconClass:
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-violet-200 bg-white text-sm font-extrabold text-violet-600 shadow-sm dark:border-violet-400/30 dark:bg-slate-900 dark:text-violet-300',
          action: '贡献方式',
          actionClass:
            'mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-violet-600 px-5 text-base font-semibold !text-white no-underline transition hover:bg-violet-700 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600',
          items: [
            {
              icon: '文',
              label: '撰写文章',
              iconClass:
                'flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-xl font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300'
            },
            {
              icon: '</>',
              label: '提交 PR',
              iconClass:
                'flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 font-mono text-xl font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300'
            }
          ]
        }
      ],
      communityLink: '浏览社区贡献记录 ->',
      faqTitle: '常见问题',
      faqs: [
        { question: '这是订阅吗？', answer: '不是。当前 FlyEnv 许可证为一次性购买，没有持续费用。' },
        { question: '可以激活多少台设备？', answer: '每个许可证同一时间只能有一台活跃设备。' },
        {
          question: '可以将许可证迁移到另一台电脑吗？',
          answer: '可以。使用 GitHub 登录，在“我的许可证”中解绑旧设备，再绑定新设备。'
        },
        { question: '包含未来更新吗？', answer: '包含。当前许可证包含未来的 FlyEnv 更新。' },
        {
          question: '有团队或教育许可证吗？',
          answer: '有。团队和教育许可证可根据具体情况协商。请通过以下邮箱联系我：',
          email: 'alexpengfeixu@gmail.com',
          emailSuffix: '请附上使用场景、设备数量和组织信息。'
        }
      ],
      copyEmail: '复制邮箱地址',
      emailCopied: '邮箱地址已复制',
      thanksTitle: '特别感谢',
      thanksDescription: '感谢每一位帮助 FlyEnv 持续进步的朋友。',
      fastAdminPrefix: '感谢 ',
      fastAdminSuffix: ' 创始人 F4nniu 对 flyenv.com 域名的资助。',
      signPathPrefix: 'FlyEnv 的 Windows 免费代码签名由 ',
      signPathMiddle: ' 提供，证书由 ',
      signPathSuffix: ' 提供。',
      finalTitle: '准备好获取许可证了吗？',
      finalDescription: '不受限制地使用 FlyEnv，同时支持后续开发。',
      buyLicense: '购买许可证',
      licenseTerms: '许可证条款',
      guidePath: '/zh/guide/about-license',
      communityPath: '/zh/community',
      paddleError: 'Paddle 结账暂时不可用，请稍后重试。'
    },
    id: {
      eyebrow: 'Lisensi FlyEnv',
      title: 'Dapatkan Lisensi FlyEnv',
      description: 'Pembelian satu kali membuka fitur premium di satu perangkat. Tanpa langganan.',
      benefitsLabel: 'Manfaat lisensi',
      benefits: ['$10 sekali bayar', '1 perangkat', 'Pembaruan mendatang', 'Aktivasi perangkat'],
      licenseName: 'Lisensi FlyEnv',
      oneTimePayment: 'Pembayaran satu kali',
      features: [
        'Satu perangkat per lisensi',
        'Tanpa biaya berulang',
        'Pembaruan mendatang termasuk',
        'Aktivasi berdasarkan perangkat'
      ],
      buyWithPaddle: 'Beli dengan aman melalui Paddle',
      openingCheckout: 'Membuka checkout...',
      termsLink: 'Ketentuan lisensi ->',
      activationGuideLink: 'Panduan aktivasi ->',
      howItWorks: 'Cara kerjanya',
      steps: [
        { title: 'Beli', description: 'Selesaikan pembelian dengan aman melalui Paddle.' },
        {
          title: 'Ajukan lisensi di FlyEnv',
          description:
            'Buka Pengaturan FlyEnv -> Lisensi, lalu kirim ID pesanan Paddle atau email tanda terima bersama email kontak.'
        },
        {
          title: 'Terima lisensi',
          description: 'Permintaan Anda ditinjau secara manual dan lisensi diterbitkan setelah diverifikasi.'
        }
      ],
      deviceTransfer:
        'Lisensi terikat pada satu perangkat. Untuk pindah ke perangkat baru, masuk dengan GitHub, lepas ikatan perangkat lama di My Licenses, lalu ikat perangkat baru.',
      otherWaysTitle: 'Cara lain untuk mendukung atau mendapatkan lisensi',
      otherWaysDescription: 'Memilih cara lain? Anda juga dapat berkontribusi atau membayar melalui kode QR.',
      methods: [
        {
          kind: 'wechat',
          title: 'WeChat Pay',
          description: 'Pindai kode QR untuk membayar dengan WeChat Pay.',
          icon: 'WX',
          headerClass:
            'flex h-24 items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10',
          iconClass:
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-green-200 bg-white text-xs font-extrabold text-green-600 shadow-sm dark:border-green-400/30 dark:bg-slate-900 dark:text-green-300',
          action: 'Pindai kode QR',
          actionClass:
            'mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-green-600 px-5 text-base font-semibold text-white',
          qrImage: 'https://oss.macphpstudy.com/image/qrcode1@2x.png',
          qrAlt: 'Kode QR WeChat Pay'
        },
        {
          kind: 'alipay',
          title: 'Alipay',
          description: 'Pindai kode QR untuk membayar dengan Alipay.',
          icon: 'ALI',
          headerClass:
            'flex h-24 items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10',
          iconClass:
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-blue-200 bg-white text-xs font-extrabold text-blue-600 shadow-sm dark:border-blue-400/30 dark:bg-slate-900 dark:text-blue-300',
          action: 'Pindai kode QR',
          actionClass:
            'mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-blue-600 px-5 text-base font-semibold text-white',
          qrImage: 'https://oss.macphpstudy.com/image/qrcode2@2x.png',
          qrAlt: 'Kode QR Alipay'
        },
        {
          kind: 'contribute',
          title: 'Berkontribusi',
          description: 'Tulis artikel orisinal atau berkontribusi kode untuk memenuhi syarat mendapatkan lisensi.',
          icon: '+',
          headerClass:
            'flex h-24 items-center justify-center bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-500/10 dark:to-fuchsia-500/10',
          iconClass:
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-violet-200 bg-white text-sm font-extrabold text-violet-600 shadow-sm dark:border-violet-400/30 dark:bg-slate-900 dark:text-violet-300',
          action: 'Pilihan kontribusi',
          actionClass:
            'mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-violet-600 px-5 text-base font-semibold !text-white no-underline transition hover:bg-violet-700 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600',
          items: [
            {
              icon: 'A',
              label: 'Tulis artikel',
              iconClass:
                'flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-xl font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300'
            },
            {
              icon: '</>',
              label: 'Kirim PR',
              iconClass:
                'flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 font-mono text-xl font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300'
            }
          ]
        }
      ],
      communityLink: 'Jelajahi kontribusi komunitas ->',
      faqTitle: 'Pertanyaan yang sering diajukan',
      faqs: [
        { question: 'Apakah ini langganan?', answer: 'Tidak. Lisensi FlyEnv saat ini adalah pembelian satu kali tanpa biaya berulang.' },
        { question: 'Berapa perangkat yang dapat saya aktifkan?', answer: 'Setiap lisensi dapat memiliki satu perangkat aktif pada satu waktu.' },
        {
          question: 'Dapatkah saya memindahkan lisensi ke komputer lain?',
          answer: 'Ya. Masuk dengan GitHub, lepas ikatan perangkat lama di My Licenses, lalu ikat perangkat baru.'
        },
        { question: 'Apakah pembaruan mendatang termasuk?', answer: 'Ya. Pembaruan FlyEnv mendatang termasuk dalam lisensi saat ini.' },
        {
          question: 'Apakah tersedia lisensi tim atau pendidikan?',
          answer: 'Ya. Lisensi tim dan pendidikan dapat dibicarakan per kasus. Hubungi saya di:',
          email: 'alexpengfeixu@gmail.com',
          emailSuffix: 'Sertakan kasus penggunaan, jumlah perangkat, dan informasi organisasi Anda.'
        }
      ],
      copyEmail: 'Salin alamat email',
      emailCopied: 'Alamat email disalin',
      thanksTitle: 'Ucapan terima kasih khusus',
      thanksDescription: 'Terima kasih kepada setiap orang yang membantu FlyEnv terus berkembang.',
      fastAdminPrefix: 'Pendiri ',
      fastAdminSuffix: ', F4nniu, atas dukungannya untuk domain flyenv.com.',
      signPathPrefix: 'Penandatanganan kode gratis untuk FlyEnv di Windows disediakan oleh ',
      signPathMiddle: ', dengan sertifikat yang disediakan oleh ',
      signPathSuffix: '.',
      finalTitle: 'Siap mendapatkan lisensi?',
      finalDescription: 'Gunakan FlyEnv tanpa batas dan dukung pengembangan berkelanjutan.',
      buyLicense: 'Beli Lisensi',
      licenseTerms: 'Ketentuan lisensi',
      guidePath: '/id/guide/about-license',
      communityPath: '/id/community',
      paddleError: 'Checkout Paddle sementara tidak tersedia. Silakan coba lagi nanti.'
    },
    es: {
      eyebrow: 'Licencia de FlyEnv',
      title: 'Obtén una licencia de FlyEnv',
      description:
        'Una compra única desbloquea las funciones premium en un dispositivo. Sin suscripción.',
      benefitsLabel: 'Beneficios de la licencia',
      benefits: [
        '$10 pago único',
        '1 dispositivo',
        'Actualizaciones futuras',
        'Activación por dispositivo'
      ],
      licenseName: 'Licencia de FlyEnv',
      oneTimePayment: 'Pago único',
      features: [
        'Un dispositivo por licencia',
        'Sin cuotas recurrentes',
        'Incluye actualizaciones futuras',
        'Activación basada en el dispositivo'
      ],
      buyWithPaddle: 'Comprar de forma segura con Paddle',
      openingCheckout: 'Abriendo el pago...',
      termsLink: 'Términos de la licencia ->',
      activationGuideLink: 'Guía de activación ->',
      howItWorks: 'Cómo funciona',
      steps: [
        { title: 'Compra', description: 'Completa tu compra de forma segura a través de Paddle.' },
        {
          title: 'Solicita una licencia en FlyEnv',
          description:
            'Abre la Configuración de FlyEnv -> Licencia, luego envía el ID de tu pedido de Paddle o el correo del recibo junto con un correo de contacto.'
        },
        {
          title: 'Recibe tu licencia',
          description:
            'Tu solicitud se revisa manualmente y la licencia se emite una vez verificada.'
        }
      ],
      deviceTransfer:
        'Las licencias están vinculadas a un dispositivo. Para cambiar a un dispositivo nuevo, inicia sesión con GitHub, desvincula tu dispositivo anterior en My Licenses y luego vincula el nuevo.',
      otherWaysTitle: 'Otras formas de apoyar FlyEnv u obtener una licencia',
      otherWaysDescription:
        '¿Prefieres otro método? También puedes contribuir o pagar con un código QR.',
      methods: [
        {
          kind: 'wechat',
          title: 'WeChat Pay',
          description: 'Escanea el código QR para pagar con WeChat Pay.',
          icon: 'WX',
          headerClass:
            'flex h-24 items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10',
          iconClass:
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-green-200 bg-white text-xs font-extrabold text-green-600 shadow-sm dark:border-green-400/30 dark:bg-slate-900 dark:text-green-300',
          action: 'Escanear código QR',
          actionClass:
            'mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-green-600 px-5 text-base font-semibold text-white',
          qrImage: 'https://oss.macphpstudy.com/image/qrcode1@2x.png',
          qrAlt: 'Código QR de WeChat Pay'
        },
        {
          kind: 'alipay',
          title: 'Alipay',
          description: 'Escanea el código QR para pagar con Alipay.',
          icon: 'ALI',
          headerClass:
            'flex h-24 items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10',
          iconClass:
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-blue-200 bg-white text-xs font-extrabold text-blue-600 shadow-sm dark:border-blue-400/30 dark:bg-slate-900 dark:text-blue-300',
          action: 'Escanear código QR',
          actionClass:
            'mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-blue-600 px-5 text-base font-semibold text-white',
          qrImage: 'https://oss.macphpstudy.com/image/qrcode2@2x.png',
          qrAlt: 'Código QR de Alipay'
        },
        {
          kind: 'contribute',
          title: 'Contribuir',
          description:
            'Escribe un artículo original o contribuye con código para optar a una licencia.',
          icon: '+',
          headerClass:
            'flex h-24 items-center justify-center bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-500/10 dark:to-fuchsia-500/10',
          iconClass:
            'inline-flex h-10 w-10 items-center justify-center rounded-md border border-violet-200 bg-white text-sm font-extrabold text-violet-600 shadow-sm dark:border-violet-400/30 dark:bg-slate-900 dark:text-violet-300',
          action: 'Opciones de contribución',
          actionClass:
            'mt-9 md:mt-auto flex min-h-14 items-center justify-center rounded-md bg-violet-600 px-5 text-base font-semibold !text-white no-underline transition hover:bg-violet-700 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600',
          items: [
            {
              icon: 'A',
              label: 'Escribe un artículo',
              iconClass:
                'flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-xl font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300'
            },
            {
              icon: '</>',
              label: 'Envía un PR',
              iconClass:
                'flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 font-mono text-xl font-bold text-violet-600 dark:bg-violet-400/10 dark:text-violet-300'
            }
          ]
        }
      ],
      communityLink: 'Explora las contribuciones de la comunidad ->',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿Es una suscripción?',
          answer:
            'No. La licencia actual de FlyEnv es una compra única sin cuotas recurrentes.'
        },
        {
          question: '¿Cuántos dispositivos puedo activar?',
          answer: 'Cada licencia puede tener un dispositivo activo a la vez.'
        },
        {
          question: '¿Puedo trasladar mi licencia a otro ordenador?',
          answer:
            'Sí. Inicia sesión con GitHub, desvincula el dispositivo anterior en My Licenses y luego vincula el nuevo.'
        },
        {
          question: '¿Se incluyen las actualizaciones futuras?',
          answer: 'Sí. Las actualizaciones futuras de FlyEnv están incluidas en la licencia actual.'
        },
        {
          question: '¿Ofrecen licencias para equipos o educativas?',
          answer:
            'Sí. Las licencias para equipos y educativas se pueden acordar caso por caso. Contáctame en',
          email: 'alexpengfeixu@gmail.com',
          emailSuffix: 'indicando tu caso de uso, el número de dispositivos y los datos de tu organización.'
        }
      ],
      copyEmail: 'Copiar dirección de correo',
      emailCopied: 'Dirección de correo copiada',
      thanksTitle: 'Agradecimientos especiales',
      thanksDescription: 'Gracias a cada amigo que ayuda a FlyEnv a seguir mejorando.',
      fastAdminPrefix: 'Fundador de ',
      fastAdminSuffix: ', por financiar el dominio flyenv.com.',
      signPathPrefix:
        'La firma de código gratuita de FlyEnv en Windows es proporcionada por ',
      signPathMiddle: ', con el certificado proporcionado por ',
      signPathSuffix: '.',
      finalTitle: '¿Listo para obtener tu licencia?',
      finalDescription: 'Usa FlyEnv sin límites y apoya el desarrollo continuo.',
      buyLicense: 'Comprar licencia',
      licenseTerms: 'Términos de la licencia',
      guidePath: '/es/guide/about-license',
      communityPath: '/es/community',
      paddleError:
        'El pago con Paddle no está disponible temporalmente. Inténtalo de nuevo más tarde.'
    }
  }

  const copy = computed(() => messages[props.locale])
  const copiedEmail = ref<string>()
  let copyResetTimer: ReturnType<typeof setTimeout> | undefined

  function copyWithFallback(email: string) {
    const textarea = document.createElement('textarea')
    textarea.value = email
    textarea.setAttribute('readonly', '')
    textarea.className = 'fixed -left-[9999px] top-0 opacity-0'
    document.body.appendChild(textarea)
    textarea.select()
    const copied = document.execCommand('copy')
    textarea.remove()
    return copied
  }

  async function copyEmail(email: string) {
    let copied = false

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email)
        copied = true
      } catch {
        copied = copyWithFallback(email)
      }
    } else {
      copied = copyWithFallback(email)
    }

    if (!copied) return

    copiedEmail.value = email
    if (copyResetTimer) window.clearTimeout(copyResetTimer)
    copyResetTimer = window.setTimeout(() => {
      copiedEmail.value = undefined
    }, 2000)
  }

  const { paddleLoading, paddleError, openPaddleCheckout } = usePaddleCheckout({
    source: `license_page_${props.locale}`,
    errorMessage: copy.value.paddleError
  })
</script>

<style scoped>
  :global(.VPHome:has(.license-page)) {
    margin-bottom: 0;
  }
</style>
