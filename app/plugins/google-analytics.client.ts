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
  router.afterEach((to) => {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.origin + to.fullPath,
      page_path: to.fullPath
    })
  })
})
