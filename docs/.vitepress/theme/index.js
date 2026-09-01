import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import {AsyncComponentShow} from "../../components/AsyncComponent.ts";
import AppFeedbackBtn from '../../components/AppFeedback/btn.vue'
import AppDownBtn from '../../components/AppDownButton/index.vue'
import AppFriendLink from '../../components/AppFriendLink/index.vue'
import AppHomeHeroAnchor from '../../components/AppHomeHeroAnchor/en.vue'
import { trackEvent } from '../../utils/analytics'

let BtnInited = false
let AnalyticsClickTrackingInstalled = false

function getLinkEvent(anchor) {
    const explicitEvent = anchor.dataset.analyticsEvent
    if (explicitEvent) return explicitEvent

    const href = anchor.getAttribute('href') || ''
    if (!href) return undefined
    if (href.includes('github.com')) return 'github_click'
    if (/youtu\.be|youtube\.com|bilibili\.com/.test(href)) return 'video_click'
    if (/ai-coding-workspace-mcp|flyenv-work-with-ai/.test(href)) return 'solution_click'
    if (/\/demos(?:\.html)?(?:[?#]|$)/.test(href)) return 'demos_nav_click'
    if (/\/guide\//.test(href)) return 'guide_click'
    if (/\/download/.test(href)) return 'download_click'
    if (/\/license|about-license/.test(href)) return 'license_click'
    return undefined
}

function installAnalyticsClickTracking() {
    if (AnalyticsClickTrackingInstalled || typeof document === 'undefined') return
    AnalyticsClickTrackingInstalled = true
    document.addEventListener('click', (event) => {
        const target = event.target
        if (!(target instanceof Element)) return
        const anchor = target.closest('a')
        if (!anchor) return
        if (anchor.hasAttribute('download')) return

        const eventName = getLinkEvent(anchor)
        if (!eventName) return

        trackEvent(eventName, {
            target: anchor.href || anchor.getAttribute('href') || '',
            link_text: (anchor.textContent || '').trim().slice(0, 100),
            surface: anchor.dataset.analyticsSurface || (eventName === 'demos_nav_click' ? 'primary_nav' : 'site')
        })
    })
}

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'layout-bottom': () => h(AppFriendLink),
            'home-hero-actions-after': () => h(AppHomeHeroAnchor)
        })
    },
    enhanceApp({ Vue, app }) {
        app.component('AppDownBtn', AppDownBtn)
        installAnalyticsClickTracking()
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
