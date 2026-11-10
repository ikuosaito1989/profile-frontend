const measurementId = 'G-F1LHCEWMS7'

export default defineNuxtPlugin(() => {
  const router = useRouter()

  // Load GA4 once in the browser. Sending page views ourselves keeps SPA
  // navigation measurable and avoids duplicate automatic page_view events.
  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  const sendPageView = (path: string) => {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.origin + path,
      page_path: path
    })
  }

  router.isReady().then(() => sendPageView(router.currentRoute.value.fullPath))
  router.afterEach((to) => sendPageView(to.fullPath))
})
