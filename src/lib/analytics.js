// Loads Google Analytics 4 (gtag.js) at runtime, but only if a Measurement ID
// is configured. Add VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX to your Vercel
// project's environment variables (and a local .env file) to activate it —
// until then this is a safe no-op.
export function initGoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  if (!measurementId) {
    if (import.meta.env.DEV) {
      console.info('[analytics] VITE_GA_MEASUREMENT_ID not set — Google Analytics disabled.')
    }
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })
}

export function trackPageView(path) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', { page_path: path })
}
