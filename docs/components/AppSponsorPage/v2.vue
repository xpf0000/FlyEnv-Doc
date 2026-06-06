<template>
  <div class="sponsor-v2-page">
    <section class="sponsor-v2-hero">
      <div class="sponsor-v2-inner sponsor-v2-inner-narrow">
        <h1>{{ t.heroTitle }}</h1>
        <p>{{ t.heroDesc }}</p>
      </div>
    </section>

    <section class="sponsor-v2-section sponsor-v2-section-alt">
      <div class="sponsor-v2-inner sponsor-v2-inner-donate">
        <div class="sponsor-v2-header">
          <h2 class="no-border">{{ t.licenseTitle }}</h2>
          <p>{{ t.licenseDesc }}</p>
          <a :href="licenseHref" class="license-guide-link no-underline">
            {{ t.licenseGuide }}
            <span aria-hidden="true">-></span>
          </a>
        </div>

        <div class="license-purchase-grid">
          <article class="donate-card donate-hover license-card">
            <div class="donate-header paddle-bg">
              <span class="donate-mark">PAY</span>
            </div>
            <div class="donate-body">
              <h3>{{ t.paddleTitle }}</h3>
              <p>{{ t.paddleDesc }}</p>
              <div class="paddle-amount-wrap">
                <span class="paddle-amount">$10</span>
                <span class="paddle-amount-label">{{ t.licensePriceLabel }}</span>
              </div>
              <ul class="license-feature-list">
                <li v-for="item in t.paddleFeatures" :key="item">{{ item }}</li>
              </ul>
              <button
                type="button"
                class="donate-btn paddle-btn"
                :disabled="paddleLoading"
                @click="openPaddleCheckout"
              >
                {{ paddleLoading ? t.openingCheckout : t.buyWithPaddle }}
              </button>
              <p v-if="paddleError" class="paddle-error">{{ paddleError }}</p>
              <div class="license-policy-links">
                <a :href="termsHref" class="no-underline">{{ t.termsLink }}</a>
                <a :href="privacyHref" class="no-underline">{{ t.privacyLink }}</a>
                <a :href="refundHref" class="no-underline">{{ t.refundLink }}</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="sponsor-v2-section">
      <div class="sponsor-v2-inner sponsor-v2-inner-donate">
        <div class="sponsor-v2-header">
          <h2 class="no-border">{{ t.communityTitle }}</h2>
          <p>{{ t.communityDesc }}</p>
        </div>

        <div class="donate-grid community-payment-grid">
          <article class="donate-card donate-hover">
            <div class="donate-header kofi-bg">
              <span class="donate-mark">KO</span>
            </div>
            <div class="donate-body">
              <h3>Ko-fi</h3>
              <p>{{ t.kofiDesc }}</p>
              <div class="donate-qr-wrap">
                <img
                  src="https://oss.macphpstudy.com/image/qrcode3@2x.png"
                  alt="Ko-fi QR"
                  class="donate-qr"
                />
              </div>
              <a
                href="https://ko-fi.com/xpf0000"
                target="_blank"
                rel="noopener noreferrer"
                class="donate-btn kofi-btn no-underline"
              >
                {{ t.supportOnKofi }}
              </a>
            </div>
          </article>

          <article class="donate-card donate-hover">
            <div class="donate-header wechat-bg">
              <span class="donate-mark">WX</span>
            </div>
            <div class="donate-body">
              <h3>{{ t.wechatTitle }}</h3>
              <p>{{ t.scanToContribute }}</p>
              <div class="donate-qr-wrap">
                <img
                  src="https://oss.macphpstudy.com/image/qrcode1@2x.png"
                  alt="WeChat Pay QR"
                  class="donate-qr"
                />
              </div>
              <span class="donate-btn wechat-btn">{{ t.scanQr }}</span>
            </div>
          </article>

          <article class="donate-card donate-hover">
            <div class="donate-header alipay-bg">
              <span class="donate-mark">ALI</span>
            </div>
            <div class="donate-body">
              <h3>{{ t.alipayTitle }}</h3>
              <p>{{ t.scanToContribute }}</p>
              <div class="donate-qr-wrap">
                <img
                  src="https://oss.macphpstudy.com/image/qrcode2@2x.png"
                  alt="Alipay QR"
                  class="donate-qr"
                />
              </div>
              <span class="donate-btn alipay-btn">{{ t.scanQr }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="sponsor-v2-section">
      <div class="sponsor-v2-inner sponsor-v2-inner-narrow">
        <div class="sponsor-v2-header">
          <h2 class="no-border">{{ t.specialThanks }}</h2>
          <p>{{ t.specialThanksDesc }}</p>
        </div>
        <div class="thanks-card">
          <div class="thanks-avatar">F4</div>
          <div class="thanks-body">
            <p class="thanks-name">F4nniu</p>
            <p class="thanks-desc">
              {{ t.f4Prefix }}
              <a
                href="https://www.fastadmin.net/"
                target="_blank"
                rel="noopener noreferrer"
                class="no-underline"
                >FastAdmin</a
              >{{ t.f4Suffix }} <strong>flyenv.com</strong> {{ t.domainLabel
              }}{{ t.sentenceEnd }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="sponsor-v2-section sponsor-v2-section-alt">
      <div class="sponsor-v2-inner sponsor-v2-inner-list">
        <div class="sponsor-v2-header">
          <h2 class="no-border">{{ t.donationTitle }}</h2>
          <p>{{ t.donationDesc }}</p>
        </div>
        <AppSponsor
          :list="sponsorData.list"
          :title="t.donationTitle"
          :header-link-text="t.viewOnKofi"
          header-link-href="https://ko-fi.com/xpf0000"
          :show-avatars="true"
          :show-messages="false"
          :page-size="5"
          :max-avatars="14"
          :prev-text="t.prev"
          :next-text="t.next"
        />
      </div>
    </section>

    <section class="sponsor-v2-section">
      <div class="sponsor-v2-inner sponsor-v2-inner-list">
        <div class="sponsor-v2-header">
          <h2 class="no-border">{{ t.articlesTitle }}</h2>
          <p>{{ t.articlesDesc }}</p>
        </div>

        <div class="simple-list-card">
          <div class="simple-list-head">
            <h3 class="no-border">{{ t.articlesHead }}</h3>
            <span>{{ articleList.length }} {{ t.postsLabel }}</span>
          </div>
          <div class="simple-list-body">
            <div class="simple-list">
              <article v-for="item in paginatedArticles" :key="item.url" class="simple-list-item">
                <div class="item-meta">
                  <span class="item-platform">{{ item.platform || t.articleFallback }}</span>
                  <span class="item-author">{{ item.author || t.unknownAuthor }}</span>
                </div>
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="item-title no-underline"
                >
                  {{ item.title }}
                </a>
              </article>
            </div>
            <div v-if="articleTotalPages > 1" class="pagination">
              <button class="page-btn" :disabled="articlePage === 1" @click="articlePage--">
                {{ t.prev }}
              </button>
              <template
                v-for="(page, index) in articleVisiblePages"
                :key="page === -1 ? `article-ellipsis-${index}` : `article-page-${page}`"
              >
                <span v-if="page === -1" class="page-ellipsis">...</span>
                <button
                  v-else
                  class="page-btn"
                  :class="{ active: page === articlePage }"
                  @click="articlePage = page"
                >
                  {{ page }}
                </button>
              </template>
              <button
                class="page-btn"
                :disabled="articlePage === articleTotalPages"
                @click="articlePage++"
              >
                {{ t.next }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sponsor-v2-section sponsor-v2-section-alt">
      <div class="sponsor-v2-inner sponsor-v2-inner-list">
        <div class="sponsor-v2-header">
          <h2 class="no-border">{{ t.pullRequestsTitle }}</h2>
          <p>{{ t.pullRequestsDesc }}</p>
        </div>

        <div class="simple-list-card">
          <div class="simple-list-head">
            <h3 class="no-border">{{ t.pullRequestsHead }}</h3>
            <span>{{ pullRequestList.length }} {{ t.pullRequestsLabel }}</span>
          </div>
          <div class="simple-list-body">
            <div class="simple-list">
              <article
                v-for="item in paginatedPullRequests"
                :key="item.number"
                class="simple-list-item"
              >
                <div class="item-meta">
                  <span class="item-author">{{ item.author }}</span>
                </div>
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="item-title no-underline"
                >
                  {{ item.title }}
                </a>
              </article>
            </div>
            <div v-if="pullRequestTotalPages > 1" class="pagination">
              <button
                class="page-btn"
                :disabled="pullRequestPage === 1"
                @click="pullRequestPage--"
              >
                {{ t.prev }}
              </button>
              <template
                v-for="(page, index) in pullRequestVisiblePages"
                :key="page === -1 ? `pr-ellipsis-${index}` : `pr-page-${page}`"
              >
                <span v-if="page === -1" class="page-ellipsis">...</span>
                <button
                  v-else
                  class="page-btn"
                  :class="{ active: page === pullRequestPage }"
                  @click="pullRequestPage = page"
                >
                  {{ page }}
                </button>
              </template>
              <button
                class="page-btn"
                :disabled="pullRequestPage === pullRequestTotalPages"
                @click="pullRequestPage++"
              >
                {{ t.next }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sponsor-v2-section">
      <div class="sponsor-v2-inner sponsor-v2-inner-medium">
        <div class="cta-banner">
          <div class="cta-content">
            <h2 class="no-border">{{ t.ctaTitle }}</h2>
            <p>{{ t.ctaDesc }}</p>
            <div class="cta-buttons">
              <a
                href="https://ko-fi.com/xpf0000"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-btn cta-btn-primary no-underline"
              >
                {{ t.becomeSupporter }}
              </a>
              <a
                href="https://github.com/xpf0000/FlyEnv"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-btn cta-btn-secondary no-underline"
              >
                {{ t.starOnGithub }}
              </a>
              <a :href="licenseHref" class="cta-btn cta-btn-secondary no-underline">
                {{ t.licenseGuideShort }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import AppSponsor from '../AppSponsor/index.vue'
  import sponsorData from '../../data/sponsor.json'
  import communityPosts from '../../data/community-posts.json'
  import communityPostsZh from '../../data/community-posts-zh.json'
  import pullRequestData from '../../data/flyenv-pull-requests.json'
  import { usePaddleCheckout } from './usePaddleCheckout'

  type ArticleItem = {
    id: string
    title: string
    url: string
    author?: string
    platform?: string
    date: string
  }

  type PullRequestItem = {
    number: number
    title: string
    url: string
    author: string
    createdAt: string
  }

  const props = withDefaults(
    defineProps<{
      i18n?: 'en' | 'zh'
    }>(),
    {
      i18n: 'en'
    }
  )

  const messages = {
    en: {
      heroTitle: 'FlyEnv License',
      heroDesc:
        'Buy a FlyEnv Personal License for licensed access to premium features, one device activation, and continued updates. FlyEnv remains open-source and free to evaluate.',
      licenseTitle: 'Buy FlyEnv Personal License',
      licenseDesc:
        'The Paddle checkout sells a real FlyEnv software license. After payment, use your Paddle order ID in the app license request flow for activation review.',
      licenseGuide: 'Read license terms and activation guide',
      licenseGuideShort: 'License Terms',
      paddleTitle: 'FlyEnv Personal License',
      paddleDesc: 'Software license checkout by Paddle',
      licensePriceLabel: 'Permanent license',
      paddleFeatures: [
        'One device activation',
        'Removes evaluation limits',
        'Manual review within 24 hours',
        'License transfer supported'
      ],
      openingCheckout: 'Opening Checkout...',
      buyWithPaddle: 'Buy License with Paddle',
      termsLink: 'Terms',
      privacyLink: 'Privacy',
      refundLink: 'Refunds',
      communityTitle: 'Other Community Contribution Methods',
      communityDesc:
        'Ko-fi, WeChat Pay, Alipay, Pull Requests, and original articles are handled outside Paddle and may be submitted manually as license request proof.',
      kofiDesc: 'Community contribution via Ko-fi',
      supportOnKofi: 'Contribute on Ko-fi',
      wechatTitle: 'WeChat Pay',
      alipayTitle: 'Alipay',
      scanToContribute: 'Scan QR code to contribute',
      scanQr: 'Scan QR Code',
      specialThanks: 'Special Thanks',
      specialThanksDesc: 'Thank you to every friend who helps FlyEnv keep improving.',
      f4Prefix: 'Founder of',
      f4Suffix: ', for funding the',
      domainLabel: 'domain',
      sentenceEnd: '.',
      donationTitle: 'Community Contribution Records',
      donationDesc:
        'Public records from users who helped FlyEnv through Ko-fi or other community contribution channels.',
      viewOnKofi: 'View on Ko-fi',
      articlesTitle: 'User Articles',
      articlesDesc:
        'Original tutorials, reviews, videos, and migration stories shared by FlyEnv users.',
      articlesHead: 'Articles',
      postsLabel: 'posts',
      articleFallback: 'Article',
      unknownAuthor: 'Unknown author',
      pullRequestsTitle: 'User Pull Requests',
      pullRequestsDesc:
        'Community code, documentation, translation, and bug-fix contributions from GitHub.',
      pullRequestsHead: 'Pull Requests',
      pullRequestsLabel: 'PRs',
      ctaTitle: 'Get Licensed or Contribute',
      ctaDesc:
        'Buy a software license through Paddle, contribute code, or share original FlyEnv content. Each path helps qualify a license request under the activation guide.',
      becomeSupporter: 'Contribute on Ko-fi',
      starOnGithub: 'Star on GitHub',
      prev: 'Prev',
      next: 'Next'
    },
    zh: {
      heroTitle: 'FlyEnv 许可证',
      heroDesc:
        '购买 FlyEnv 个人许可证，可获得高级功能的授权访问、一台设备激活和持续更新。FlyEnv 仍然保持开源并可免费评估。',
      licenseTitle: '购买 FlyEnv 个人许可证',
      licenseDesc:
        'Paddle 结账用于销售真实的 FlyEnv 软件许可证。付款后，请在应用内许可证申请流程中提交 Paddle 订单 ID 以便激活审核。',
      licenseGuide: '查看许可证条款与激活说明',
      licenseGuideShort: '许可证条款',
      paddleTitle: 'FlyEnv 个人许可证',
      paddleDesc: '由 Paddle 处理的软件许可证结账',
      licensePriceLabel: '永久许可证',
      paddleFeatures: [
        '一台设备激活',
        '解除评估版限制',
        '通常 24 小时内审核',
        '支持许可证迁移'
      ],
      openingCheckout: '正在打开付款...',
      buyWithPaddle: '通过 Paddle 购买许可证',
      termsLink: '服务条款',
      privacyLink: '隐私政策',
      refundLink: '退款政策',
      communityTitle: '其他社区贡献方式',
      communityDesc:
        'Ko-fi、微信、支付宝、PR 和原创文章均不通过 Paddle 处理，可在应用内作为许可证申请凭证手动提交。',
      kofiDesc: '通过 Ko-fi 进行社区贡献',
      supportOnKofi: '在 Ko-fi 贡献',
      wechatTitle: '微信支付',
      alipayTitle: '支付宝',
      scanToContribute: '扫码进行社区贡献',
      scanQr: '扫描二维码',
      specialThanks: '特别鸣谢',
      specialThanksDesc: '感谢每一位支持 FlyEnv 项目的朋友。',
      f4Prefix: '',
      f4Suffix: ' 创始人，承担了',
      domainLabel: '域名费用',
      sentenceEnd: '。',
      donationTitle: '社区贡献记录',
      donationDesc:
        '以下是通过 Ko-fi 或其他社区贡献渠道帮助 FlyEnv 的公开记录。',
      viewOnKofi: '在 Ko-fi 查看',
      articlesTitle: '用户文章',
      articlesDesc: 'FlyEnv 用户分享的原创教程、评测、视频和迁移实践。',
      articlesHead: '文章',
      postsLabel: '篇文章',
      articleFallback: '文章',
      unknownAuthor: '未知作者',
      pullRequestsTitle: '用户 PR',
      pullRequestsDesc: '来自 GitHub 社区的代码、文档、翻译和问题修复贡献。',
      pullRequestsHead: 'PR 列表',
      pullRequestsLabel: '个 PR',
      ctaTitle: '获取许可证或参与共建',
      ctaDesc:
        '通过 Paddle 购买软件许可证，或提交代码和原创内容。每一种方式都可按激活说明用于许可证申请。',
      becomeSupporter: '在 Ko-fi 贡献',
      starOnGithub: '在 GitHub 点星',
      prev: '上一页',
      next: '下一页'
    }
  }

  const t = computed(() => messages[props.i18n])
  const licenseHref = computed(() =>
    props.i18n === 'zh' ? '/zh/guide/about-license' : '/guide/about-license'
  )
  const termsHref = computed(() => (props.i18n === 'zh' ? '/zh/terms' : '/terms'))
  const privacyHref = computed(() => (props.i18n === 'zh' ? '/zh/privacy' : '/privacy'))
  const refundHref = computed(() =>
    props.i18n === 'zh' ? '/zh/refund-policy' : '/refund-policy'
  )

  const articlePage = ref(1)
  const pullRequestPage = ref(1)
  const articlePageSize = 10
  const pullRequestPageSize = 10

  const { paddleLoading, paddleError, openPaddleCheckout } = usePaddleCheckout({
    source: 'license_page',
    errorMessage:
      props.i18n === 'zh'
        ? 'Paddle 付款暂时不可用，请尝试其他方式。'
        : 'Paddle checkout is temporarily unavailable. Please try another method.'
  })

  const articleList = computed<ArticleItem[]>(() => {
    return [...(communityPosts as ArticleItem[]), ...(communityPostsZh as ArticleItem[])]
      .filter((item) => item.title && item.url)
      .sort((a, b) => getDateTime(b.date) - getDateTime(a.date))
  })

  const pullRequestList = computed<PullRequestItem[]>(() => {
    return [...((pullRequestData as { list: PullRequestItem[] }).list || [])]
      .filter((item) => item.title && item.url && !isBotAuthor(item.author))
      .sort((a, b) => getDateTime(b.createdAt) - getDateTime(a.createdAt))
  })

  const articleTotalPages = computed(() => Math.ceil(articleList.value.length / articlePageSize))
  const pullRequestTotalPages = computed(() =>
    Math.ceil(pullRequestList.value.length / pullRequestPageSize)
  )

  const paginatedArticles = computed(() => {
    const start = (articlePage.value - 1) * articlePageSize
    return articleList.value.slice(start, start + articlePageSize)
  })

  const paginatedPullRequests = computed(() => {
    const start = (pullRequestPage.value - 1) * pullRequestPageSize
    return pullRequestList.value.slice(start, start + pullRequestPageSize)
  })

  const articleVisiblePages = computed(() =>
    getVisiblePages(articlePage.value, articleTotalPages.value)
  )
  const pullRequestVisiblePages = computed(() =>
    getVisiblePages(pullRequestPage.value, pullRequestTotalPages.value)
  )

  function getDateTime(value?: string): number {
    if (!value) return 0
    const time = new Date(value).getTime()
    return Number.isNaN(time) ? 0 : time
  }

  function isBotAuthor(author?: string): boolean {
    return !author || /\[bot\]$|bot$/i.test(author) || author.toLowerCase().includes('dependabot')
  }

  function getVisiblePages(current: number, total: number): number[] {
    const pages: number[] = []
    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i)
      return pages
    }
    if (current <= 3) {
      for (let i = 1; i <= 5; i++) pages.push(i)
      pages.push(-1, total)
      return pages
    }
    if (current >= total - 2) {
      pages.push(1, -1)
      for (let i = total - 4; i <= total; i++) pages.push(i)
      return pages
    }
    pages.push(1, -1)
    for (let i = current - 1; i <= current + 1; i++) pages.push(i)
    pages.push(-1, total)
    return pages
  }
</script>

<style scoped>
  .sponsor-v2-page {
    max-width: 100%;
    margin: 0 auto;
  }

  .sponsor-v2-hero {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    padding: 5rem 0 4rem;
  }

  .dark .sponsor-v2-hero {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }

  .sponsor-v2-inner {
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .sponsor-v2-inner-narrow {
    max-width: 48rem;
  }

  .sponsor-v2-inner-donate {
    max-width: 72rem;
  }

  .sponsor-v2-inner-list {
    max-width: 56rem;
  }

  .sponsor-v2-inner-medium {
    max-width: 56rem;
  }

  .sponsor-v2-hero h1 {
    font-size: 2.75rem;
    font-weight: 800;
    color: var(--vp-c-text-1);
    margin: 0 0 1rem;
    line-height: 1.12;
    text-align: center;
  }

  .sponsor-v2-hero p {
    max-width: 42rem;
    margin: 0 auto;
    color: var(--vp-c-text-2);
    font-size: 1.0625rem;
    line-height: 1.625;
    text-align: center;
  }

  .sponsor-v2-section {
    padding: 4rem 0;
  }

  .sponsor-v2-section-alt {
    background: rgba(248, 250, 252, 0.5);
  }

  .dark .sponsor-v2-section-alt {
    background: rgba(30, 41, 59, 0.3);
  }

  .sponsor-v2-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .sponsor-v2-header h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin: 0 0 0.75rem;
  }

  .sponsor-v2-header p {
    color: var(--vp-c-text-2);
    margin: 0;
  }

  .license-guide-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    margin-top: 0.875rem;
    color: var(--vp-c-brand-1);
    font-size: 0.875rem;
    font-weight: 600;
  }

  .license-guide-link:hover {
    color: var(--vp-c-brand-2);
  }

  .license-purchase-grid {
    display: grid;
    grid-template-columns: minmax(0, 28rem);
    justify-content: center;
  }

  .license-card .donate-body {
    text-align: left;
  }

  .license-card .paddle-amount-wrap {
    width: 100%;
    height: auto;
    min-height: 8rem;
  }

  .license-feature-list {
    display: grid;
    gap: 0.625rem;
    margin: 0 0 1.25rem;
    padding: 0;
    list-style: none;
  }

  .license-feature-list li {
    position: relative;
    padding-left: 1.25rem;
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    line-height: 1.45;
  }

  .license-feature-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55rem;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 9999px;
    background: #f97316;
  }

  .license-policy-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.875rem;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .license-policy-links a {
    color: var(--vp-c-brand-1);
  }

  .license-policy-links a:hover {
    color: var(--vp-c-brand-2);
  }

  .donate-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    .donate-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .donate-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    .community-payment-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .donate-card {
    background: #fff;
    border-radius: 1rem;
    border: 1px solid #e2e8f0;
    overflow: hidden;
  }

  .dark .donate-card {
    background: var(--vp-c-bg-soft);
    border-color: var(--vp-c-divider);
  }

  .donate-hover {
    transition: all 0.2s ease;
  }

  .donate-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.12);
  }

  .donate-header {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kofi-bg {
    background: linear-gradient(to bottom right, #fff1f2, #fef2f2);
  }

  .wechat-bg {
    background: linear-gradient(to bottom right, #f0fdf4, #ecfdf5);
  }

  .alipay-bg {
    background: linear-gradient(to bottom right, #eff6ff, #f0f9ff);
  }

  .paddle-bg {
    background: linear-gradient(to bottom right, #fff7ed, #ecfeff);
  }

  .donate-mark {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid rgba(148, 163, 184, 0.28);
    font-size: 0.75rem;
    font-weight: 800;
  }

  .paddle-bg .donate-mark {
    color: #f97316;
  }

  .kofi-bg .donate-mark {
    color: #f43f5e;
  }

  .wechat-bg .donate-mark {
    color: #16a34a;
  }

  .alipay-bg .donate-mark {
    color: #2563eb;
  }

  .donate-body {
    padding: 1.5rem;
    text-align: center;
  }

  .donate-body h3 {
    font-weight: 700;
    color: var(--vp-c-text-1);
    font-size: 1.125rem;
    margin: 0 0 0.25rem;
  }

  .donate-body > p {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
    margin: 0 0 1rem;
  }

  .donate-qr-wrap {
    border-radius: 0.75rem;
    margin-bottom: 1.2rem;
  }

  .donate-qr {
    width: 13rem;
    height: 13rem;
    object-fit: contain;
    border-radius: 0.5rem;
    margin: 0 auto;
    display: block;
  }

  .paddle-amount-wrap {
    width: 13rem;
    height: 13rem;
    margin: 0 auto 1.2rem;
    border-radius: 0.75rem;
    background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(6, 182, 212, 0.1));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .paddle-amount {
    display: block;
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--vp-c-text-1);
    line-height: 1;
  }

  .paddle-amount-label {
    display: block;
    margin-top: 0.625rem;
    color: var(--vp-c-text-2);
    font-size: 0.8125rem;
    font-weight: 600;
  }

  .donate-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 0.875rem;
    color: #fff;
    border: 0;
    line-height: 1.25;
  }

  .paddle-btn {
    background: #f97316;
    cursor: pointer;
  }

  .paddle-btn:disabled {
    cursor: not-allowed;
    opacity: 0.72;
  }

  .kofi-btn {
    background: #f43f5e;
  }

  .wechat-btn {
    background: #16a34a;
  }

  .alipay-btn {
    background: #2563eb;
  }

  .paddle-error {
    margin: 0.75rem 0 0;
    color: #dc2626;
    font-size: 0.8125rem;
  }

  .thanks-card {
    background: #fff;
    border-radius: 1rem;
    border: 1px solid #e2e8f0;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .dark .thanks-card {
    background: var(--vp-c-bg-soft);
    border-color: var(--vp-c-divider);
  }

  .thanks-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    background: #fef3c7;
    color: #b45309;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.875rem;
    flex-shrink: 0;
  }

  .thanks-name {
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin: 0 0 0.25rem;
  }

  .thanks-desc {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
    margin: 0;
  }

  .thanks-desc a {
    color: var(--vp-c-brand-1);
    font-weight: 500;
  }

  .simple-list-card {
    border-radius: 1rem;
    border: 1px solid #e2e8f0;
    background: #fff;
    overflow: hidden;
  }

  .dark .simple-list-card {
    background: var(--vp-c-bg);
    border-color: var(--vp-c-divider);
  }

  .simple-list-head {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .dark .simple-list-head {
    border-bottom-color: var(--vp-c-divider);
  }

  .simple-list-head h3 {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--vp-c-text-1);
  }

  .simple-list-head span {
    color: var(--vp-c-text-2);
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
  }

  .simple-list-body {
    padding: 1.5rem;
  }

  .simple-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .simple-list-item {
    border-radius: 0.75rem;
    background: #f8fafc;
    padding: 1rem;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .simple-list-item:hover {
    background: #f1f5f9;
    transform: translateY(-1px);
  }

  .dark .simple-list-item {
    background: rgba(255, 255, 255, 0.04);
  }

  .dark .simple-list-item:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  .item-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .item-platform {
    border-radius: 9999px;
    background: #e0e7ff;
    color: #4f46e5;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    padding: 0.35rem 0.55rem;
  }

  .item-author,
  .item-date {
    color: var(--vp-c-text-2);
    font-size: 0.8125rem;
    font-weight: 600;
  }

  .item-title {
    display: inline;
    color: var(--vp-c-text-1);
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: 1.45;
  }

  .item-title:hover {
    color: var(--vp-c-brand-1);
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 1rem 0 0;
    margin-top: 1rem;
    border-top: 1px solid #f1f5f9;
    flex-wrap: wrap;
  }

  .dark .pagination {
    border-top-color: var(--vp-c-divider);
  }

  .page-btn {
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    border: none;
    background: transparent;
    color: #64748b;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }

  .page-btn:hover:not(:disabled) {
    background: #f1f5f9;
    color: #334155;
  }

  .dark .page-btn:hover:not(:disabled) {
    background: var(--vp-c-bg-soft);
  }

  .page-btn.active {
    background: #e0e7ff;
    color: #4f46e5;
  }

  .page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .page-ellipsis {
    padding: 0.375rem 0.25rem;
    color: #94a3b8;
    font-size: 0.875rem;
    user-select: none;
  }

  .cta-banner {
    border-radius: 1rem;
    padding: 2rem;
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 45%, #db2777 100%);
    color: #fff;
    text-align: center;
    overflow: hidden;
  }

  .cta-content h2 {
    color: #fff;
    font-size: 1.75rem;
    font-weight: 800;
    margin: 0 0 0.75rem;
  }

  .cta-content p {
    max-width: 36rem;
    margin: 0 auto 1.5rem;
    color: rgba(255, 255, 255, 0.86);
    line-height: 1.625;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.5rem;
    padding: 0.625rem 1rem;
    border-radius: 0.75rem;
    font-size: 0.875rem;
    font-weight: 700;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .cta-btn:hover {
    transform: translateY(-1px);
  }

  .cta-btn-primary {
    background: #fff;
    color: #4f46e5;
  }

  .cta-btn-secondary {
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.22);
  }

  @media (min-width: 768px) {
    .sponsor-v2-header h2 {
      font-size: 1.875rem;
    }
  }

  @media (max-width: 640px) {
    .sponsor-v2-hero {
      padding: 3.25rem 0 3rem;
    }

    .sponsor-v2-hero h1 {
      font-size: 2.125rem;
    }

    .sponsor-v2-section {
      padding: 3rem 0;
    }

    .simple-list-head {
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
