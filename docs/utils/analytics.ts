export type AnalyticsValue = string | number | boolean | undefined
export type AnalyticsParameters = Record<string, AnalyticsValue>

type Gtag = (command: 'event', eventName: string, parameters: Record<string, AnalyticsValue>) => void

type AnalyticsWindow = Window & {
  gtag?: Gtag
  dataLayer?: unknown[]
}

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

function getLocale(pathname: string) {
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh'
  if (pathname === '/id' || pathname.startsWith('/id/')) return 'id'
  return 'en'
}

function getPageType(pathname: string) {
  if (pathname === '/' || pathname === '/zh' || pathname === '/zh/' || pathname === '/id' || pathname === '/id/') return 'home'
  if (pathname.includes('/demos')) return 'demos'
  if (pathname.includes('/guide/')) return 'guide'
  if (pathname.includes('/download')) return 'download'
  if (pathname.includes('/license')) return 'license'
  return 'page'
}

export function trackEvent(eventName: string, parameters: AnalyticsParameters = {}) {
  if (typeof window === 'undefined') return

  const analyticsWindow = window as AnalyticsWindow
  if (typeof analyticsWindow.gtag !== 'function') return

  const pathname = window.location.pathname || '/'
  const context: AnalyticsParameters = {
    page_path: pathname,
    page_type: getPageType(pathname),
    locale: getLocale(pathname),
    os: detectOperatingSystem(),
    target: ''
  }

  analyticsWindow.gtag('event', eventName, { ...context, ...parameters })
}
