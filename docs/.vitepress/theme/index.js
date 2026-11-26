import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import { AsyncComponentShow } from '../../components/AsyncComponent.ts'
import AppFeedbackBtn from '../../components/AppFeedback/btn.vue'
import AppDownBtn from '../../components/AppDownButton/index.vue'
import AppFriendLink from '../../components/AppFriendLink/index.vue'
import AppHomeHeroAnchor from '../../components/AppHomeHeroAnchor/en.vue'
import { normalizeAnalyticsPath, installAnalytics, trackEvent } from '../../utils/analytics'
import { AppHost, GoogleID, PROD } from '../env'

let BtnInited = false
let AnalyticsClickTrackingInstalled = false

function getLinkEvent(anchor, url) {
  const explicitEvent = anchor.dataset.analyticsEvent
  if (explicitEvent) return explicitEvent

  const href = url.pathname
  if (url.hostname === 'github.com') return 'github_click'
  if (/(^|\.)(youtu\.be|youtube\.com|bilibili\.com)$/.test(url.hostname)) return 'video_click'
  if (url.origin !== window.location.origin) return undefined
  if (/ai-coding-workspace-mcp|flyenv-work-with-ai/.test(href)) return 'solution_click'
  if (/\/demos(?:\.html)?\/?$/.test(href)) return 'demos_nav_click'
  if (/\/guide\//.test(href)) return 'guide_click'
  if (/\/download/.test(href)) return 'download_click'
  if (/\/license|about-license/.test(href)) return 'license_click'
  return undefined
}

function installAnalyticsClickTracking() {
  if (AnalyticsClickTrackingInstalled || typeof document === 'undefined') return
  AnalyticsClickTrackingInstalled = true
  document.addEventListener(
    'click',
    (event) => {
      if (!(event.target instanceof Element)) return

      const checkout = event.target.closest('button[data-analytics-license-purchase]')
      if (checkout && !checkout.disabled) {
        trackEvent('license_purchase_click', {
          license_method: 'purchase',
          cta_position: checkout.dataset.analyticsLicensePurchase
        })
        return
      }

      const anchor = event.target.closest('a[href]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || (href.startsWith('#') && !anchor.dataset.analyticsEvent)) return
      const url = new URL(href, anchor.baseURI)
      if (!/^https?:$/.test(url.protocol)) return

      const packageType = anchor.dataset.analyticsPackageType
      if (packageType) {
        trackEvent('download_click', {
          target: url.href,
          download_intent: 'package',
          platform: anchor.dataset.analyticsPlatform,
          architecture: anchor.dataset.analyticsArchitecture,
          app_version: anchor.dataset.analyticsVersion,
          package_type: packageType,
          download_source: anchor.dataset.analyticsDownloadSource
        })
        return
      }
      if (anchor.hasAttribute('download')) return

      const targetPage = normalizeAnalyticsPath(url.pathname)
      const isInternal = url.origin === window.location.origin
      const navigation = isInternal
        ? targetPage.match(/^\/(?:(?:zh|id|es|vi)\/)?(download|license)\/?$/)?.[1]
        : undefined
      const eventName = getLinkEvent(anchor, url)
      const inNav = anchor.closest('.VPNav')
      let surface = anchor.dataset.analyticsSurface || 'site'
      if (!anchor.dataset.analyticsSurface && eventName === 'demos_nav_click') {
        if (url.searchParams.has('video')) surface = 'demo_deep_link'
        else if (inNav) surface = 'primary_nav'
      }
      if (eventName) {
        trackEvent(eventName, {
          target: url.href,
          surface,
          download_intent:
            eventName === 'download_click' && navigation === 'download' ? 'navigation' : undefined,
          ...(eventName === 'solution_detail_click' && isInternal
            ? {
                target_page: targetPage,
                content_id: targetPage.split('/').pop()
              }
            : {})
        })
      }
      if (navigation) {
        const ctaPosition = /hero/.test(surface)
          ? 'hero'
          : /final-cta|footer/.test(surface)
            ? 'footer'
            : inNav
              ? 'nav'
              : 'inline'
        trackEvent(`${navigation}_nav_click`, {
          target_page: targetPage.replace(/\/$/, ''),
          cta_position: ctaPosition,
          surface
        })
      }
    },
    { capture: true }
  )
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(AppFriendLink),
      'home-hero-actions-after': () => h(AppHomeHeroAnchor)
    })
  },
  enhanceApp({ app, router }) {
    app.component('AppDownBtn', AppDownBtn)
    if (PROD && import.meta.env.PROD) {
      installAnalytics(router, GoogleID, AppHost)
      installAnalyticsClickTracking()
    }
    app.mixin({
      mounted() {
        if (!BtnInited) {
          BtnInited = true
          AsyncComponentShow(AppFeedbackBtn).then().catch()
        }
      }
    })
  }
}
