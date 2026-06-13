import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import {AsyncComponentShow} from "../../components/AsyncComponent.ts";
import AppFeedbackBtn from '../../components/AppFeedback/btn.vue'
import AppDownBtn from '../../components/AppDownButton/index.vue'
import AppFriendLink from '../../components/AppFriendLink/index.vue'

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
                if (!BtnInited) {
                    BtnInited = true
                    AsyncComponentShow(AppFeedbackBtn).then().catch()
                }
            }
        })
    }
}
