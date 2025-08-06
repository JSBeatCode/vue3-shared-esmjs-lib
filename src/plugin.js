import MyButton from './components/MyButton.vue'
import MyCard from './components/MyCard.vue'
import vFocus from './directives/v-focus'
import { send } from './utils/send'

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
  }
}
