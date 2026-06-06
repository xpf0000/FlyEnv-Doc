import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import { PROD } from '../env.ts'
import {AsyncComponentShow} from "../../components/AsyncComponent.ts";
import AppFeedbackBtn from '../../components/AppFeedback/btn.vue'
import AppDownBtn from '../../components/AppDownButton/index.vue'
import AppFriendLink from '../../components/AppFriendLink/index.vue'

let Inited = false
let BtnInited = false
export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'layout-bottom': () => h(AppFriendLink)
        })
    },
    enhanceApp({ Vue, app }) {
        app.component('AppDownBtn', AppDownBtn)
        app.mixin({
            mounted() {
                if (!Inited && PROD) {
                    Inited = true
                    console.log('Vue.mixin mounted !!!')
                    const s = document.createElement('script');
                    s.innerHTML = `const loadKofi = () => {
        let loaded = false
        let count = 0
        let max = 10
        const load = () => {
            if (loaded || count > max) {
                console.log('load fail: ', loaded, count)
                return
            }
            count += 1
            if (window?.kofiWidgetOverlay) {
                window?.kofiWidgetOverlay?.draw('xpf0000', {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': 'Ko-fi',
                    'floating-chat.donateButton.background-color': '#323842',
                    'floating-chat.donateButton.text-color': '#fff'
                });
                loaded = true
            } else {
                setTimeout(load, 300)
            }
        }
        load()
    }
    loadKofi()`
                    document.body.appendChild(s);
                }
                if (!BtnInited) {
                    BtnInited = true
                    AsyncComponentShow(AppFeedbackBtn).then().catch()
                }
            }
        })
    }
}
