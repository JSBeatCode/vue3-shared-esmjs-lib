import MyButton from './components/MyButton.vue'
import MyCard from './components/MyCard.vue'
import vFocus from './directives/v-focus'
import { send } from './utils/send'
import i18n from './plugins/local-i18n'
export default {
  install(app) {
    // 전역 컴포넌트 등록
    app.component('MyButton', MyButton)
    app.component('MyCard', MyCard)

    // 전역 디렉티브 등록
    app.directive('focus', vFocus)

    app.config.globalProperties.$hello = () => window.alert('Hello from shared-lib!')

    // 전역 메서드 등록
    app.config.globalProperties.$send = send

    // i18n 플러그인 등록
    app.use(i18n)

    // i18n 헬퍼 함수 전역 등록
    app.config.globalProperties.$setLocale = (locale) => {
      i18n.global.locale.value = locale
    }

    app.config.globalProperties.$hasLocaleMessage = (locale) => {
      return Object.prototype.hasOwnProperty.call(i18n.global.messages.value, locale)
    }

    app.config.globalProperties.$mergeLocaleMessage = (locale, message) => {
      i18n.global.mergeLocaleMessage(locale, message)
    }
  }
}
