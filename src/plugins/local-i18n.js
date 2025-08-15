import { createI18n } from 'vue-i18n'

// 기본 메시지 예시
const messages = {
  en: { welcome: 'Welcome!' },
  ko: { welcome: '환영합니다!' }
}

const i18n = createI18n({
  legacy: false,  // Composition API 모드
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n