import plugin from './plugin'
import { send } from './utils/send'

// plugin 기본 export
export default plugin

// 필요한 경우 개별 import 사용 가능
export { send }
export { default as MyButton } from './components/MyButton.vue'
export { default as MyCard } from './components/MyCard.vue'
