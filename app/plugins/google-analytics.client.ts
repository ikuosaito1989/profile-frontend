const measurementId = 'G-F1LHCEWMS7'

export default defineNuxtPlugin(() => {
  const router = useRouter()

  // Use Google's standard gtag bootstrap so GA4 can detect its measurement
  // tag and collect the initial page view automatically.
  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  // Nuxt client-side route changes do not trigger a new document load.
  const sendPageView = (path: string) => {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.origin + path,
      page_path: path
    })
  }

  // The config call handles normal document loads. This explicit first view
  // also covers Nuxt hydration timing reliably; duplicate events are avoided
  // by disabling config's automatic page_view.
  window.gtag('config', measurementId, { send_page_view: false })
  router.isReady().then(() => sendPageView(router.currentRoute.value.fullPath))
  router.afterEach((to, from) => {
    if (to.fullPath !== from.fullPath) sendPageView(to.fullPath)
  })
})
