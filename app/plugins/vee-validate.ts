import { defineRule, configure } from 'vee-validate'
import { email, max, required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import ja from '@vee-validate/i18n/dist/locale/ja.json'

export default defineNuxtPlugin(() => {
  defineRule('email', email)
  defineRule('max', max)
  defineRule('required', required)

  // 言語設定
  configure({
    generateMessage: localize({ ja })
  })
  setLocale('ja')
})
