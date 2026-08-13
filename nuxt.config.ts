import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const RAW_SUFFIX = '?raw'

/**
 * Nitro（rollup）は Vite の `?raw` インポートを解釈できないため、
 * サーバービルド側でも .md を文字列として読み込めるようにする。
 */
const rawMarkdown = () => ({
  name: 'raw-markdown',
  resolveId(source: string, importer?: string) {
    if (!source.endsWith(`.md${RAW_SUFFIX}`)) return null
    const file = source.slice(0, -RAW_SUFFIX.length)
    const absolute =
      file.startsWith('.') && importer ? resolve(dirname(importer), file) : file
    return `${absolute}${RAW_SUFFIX}`
  },
  load(id: string) {
    if (!id.endsWith(`.md${RAW_SUFFIX}`)) return null
    const file = id.slice(0, -RAW_SUFFIX.length)
    return `export default ${JSON.stringify(readFileSync(file, 'utf-8'))}`
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-13',
  devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    },
    rollupConfig: {
      plugins: [rawMarkdown()]
    }
  },

  runtimeConfig: {
    // 値は .env / wrangler secret から注入する（ソースには書かない）
    resendApiKey: '',
    mailSupport: '',
    mailSupportName: '',
    mailAdmin: '',
    public: {
      title: '',
      description: '',
      metaImage: '',
      siteUrl: ''
    }
  },

  css: ['~/assets/css/freelancer.css', '~/assets/css/profile.css'],

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        {
          name: 'google-site-verification',
          content: 'qF6cytze7DCkmBecF5Z2nq-MCrATZWHNTYbHPle1e8E'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.10/font-awesome-animation.css'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  typescript: {
    typeCheck: false,
    strict: true
  }
})
