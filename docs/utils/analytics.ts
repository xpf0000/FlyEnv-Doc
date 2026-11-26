import type { Router } from 'vitepress'

export type AnalyticsValue = string | number | boolean | undefined
export type AnalyticsParameters = Record<string, AnalyticsValue>

type Gtag = (...command: unknown[]) => void
type AnalyticsWindow = Window & {
  gtag?: Gtag
  dataLayer?: unknown[]
}

const localePattern = /^\/(zh|id|es|vi)(?:\/|$)/
const paymentPattern = /^\/(?:(?:zh|id|es|vi)\/)?payment-success(?:\.html)?\/?$/
const pageSections = new Set([
  'compare',
  'features',
  'guide',
  'solutions',
  'demos',
  'download',
  'license',
  'community'
])
const campaignKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_id',
  'utm_content',
  'utm_term'
]
const campaignValue = /^(?![\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$)[a-z0-9][a-z0-9 _.-]{0,63}$/i

let currentPath: string | undefined
let currentLocation = ''

export function detectOperatingSystem() {
  if (typeof window === 'undefined') return 'unknown'

  const navigator = window.navigator as Navigator & {
    userAgentData?: { platform?: string; architecture?: string }
  }
  const platform = navigator.userAgentData?.platform || navigator.platform || ''
  const userAgent = navigator.userAgent || ''

  if (/mac/i.test(platform) || /macintosh/i.test(userAgent)) {
    return /arm|aarch/i.test(navigator.userAgentData?.architecture || userAgent)
      ? 'MacOS_ARM64'
      : 'MacOS_X86'
  }
  if (/win/i.test(platform) || /windows/i.test(userAgent)) return 'Windows'
  if (/linux/i.test(platform) || /linux/i.test(userAgent)) return 'Linux'
  return 'unknown'
}

function analyticsContext(path: string) {
  const locale = path.match(localePattern)?.[1] || 'en'
  const [section, slug] = (locale === 'en' ? path : path.slice(locale.length + 1))
    .split('/')
    .filter(Boolean)
  let pageType = section ? (pageSections.has(section) ? section : 'page') : 'home'
  if (section === 'features' && slug) pageType = 'feature'
  if (section === 'solutions' && slug) pageType = 'solution'

  return { page_path: path, source_page: path, locale, page_type: pageType, content_id: slug }
}

export function normalizeAnalyticsPath(path: string) {
  const cleanPath = path.replace(/(?:(^|\/)index)?\.(?:md|html)$/, '$1')
  return cleanPath.replace(/^\/(zh|id|es|vi)$/, '/$1/')
}

function privacyOptOut() {
  const navigator = window.navigator as Navigator & { globalPrivacyControl?: boolean }
  return navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true
}

function pageLocation(path: string, includeCampaign: boolean) {
  const safeUrl = new URL(path, window.location.origin)
  if (includeCampaign) {
    const search = new URLSearchParams(window.location.search)
    for (const key of campaignKeys) {
      const value = search.get(key)
      if (value && campaignValue.test(value)) safeUrl.searchParams.set(key, value)
    }
  }
  return safeUrl.href
}

function firstReferrer() {
  if (!document.referrer) return ''
  const referrer = new URL(document.referrer)
  return /^https?:$/.test(referrer.protocol) ? referrer.origin + '/' : ''
}

function safeTarget(target: string) {
  const url = new URL(target, window.location.origin)
  if (!/^https?:$/.test(url.protocol)) return undefined
  if (url.origin === window.location.origin) return normalizeAnalyticsPath(url.pathname)
  return url.origin + url.pathname
}

export function installAnalytics(router: Router, id: string, productionOrigin: string) {
  if (
    typeof window === 'undefined' ||
    window.location.origin !== productionOrigin ||
    privacyOptOut()
  )
    return

  const analyticsWindow = window as AnalyticsWindow
  const previousHook = router.onAfterRouteChange || router.onAfterRouteChanged
  let started = false
  let previousPath: string | undefined

  router.onAfterRouteChange = (to) => {
    const { data, path: routePath } = router.route
    const routeLocale = routePath?.match(localePattern)?.[1]
    const path = data.isNotFound
      ? routeLocale
        ? `/${routeLocale}/404`
        : '/404'
      : normalizeAnalyticsPath('/' + data.relativePath)
    const firstView = previousPath === undefined
    if (path === previousPath || privacyOptOut()) return previousHook?.(to)

    const location = pageLocation(path, firstView && !data.isNotFound && !paymentPattern.test(path))
    const referrer = previousPath ? pageLocation(previousPath, false) : firstReferrer()
    previousPath = path
    currentPath = paymentPattern.test(path) ? undefined : path
    currentLocation = location
    const context = { page_location: location, page_referrer: referrer, page_title: data.title }
    if (!started && currentPath) {
      started = true
      analyticsWindow.dataLayer ||= []
      analyticsWindow.gtag = function () {
        analyticsWindow.dataLayer!.push(arguments)
      }
      analyticsWindow.gtag('js', new Date())
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id)
      document.head.append(script)
      analyticsWindow.gtag('config', id, { ...context, send_page_view: false })
    } else if (started) {
      analyticsWindow.gtag?.('config', id, { ...context, send_page_view: false, update: true })
    }
    if (currentPath) {
      analyticsWindow.gtag?.('event', 'page_view', { ...analyticsContext(currentPath), ...context })
    }
    return previousHook?.(to)
  }
}

export function trackEvent(eventName: string, parameters: AnalyticsParameters = {}) {
  if (typeof window === 'undefined' || !currentPath || privacyOptOut()) return

  const analyticsWindow = window as AnalyticsWindow
  if (typeof analyticsWindow.gtag !== 'function') return

  const target =
    typeof parameters.target === 'string' && parameters.target
      ? safeTarget(parameters.target)
      : undefined
  analyticsWindow.gtag('event', eventName, {
    ...analyticsContext(currentPath),
    os: detectOperatingSystem(),
    ...parameters,
    target,
    page_location: currentLocation
  })
}
