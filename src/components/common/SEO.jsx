import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, DEFAULT_LOCALE } from '../../config/seo.js'
import { trackPageView } from '../../lib/analytics.js'

function upsertMetaByName(name, content) {
  if (!content) return
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertMetaByProperty(property, content) {
  if (!content) return
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let tag = document.getElementById(id)
  if (!data) {
    if (tag) tag.remove()
    return
  }
  if (!tag) {
    tag = document.createElement('script')
    tag.id = id
    tag.type = 'application/ld+json'
    document.head.appendChild(tag)
  }
  tag.textContent = JSON.stringify(data)
}

/**
 * Sets per-page title, meta description/keywords, canonical URL, Open Graph,
 * Twitter Card tags, and optional JSON-LD structured data. Rendered once at
 * the top of each page component.
 */
function SEO({ title, description, keywords, image, type = 'website', structuredData, noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title}` : SITE_NAME
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`
    const ogImage = image || DEFAULT_OG_IMAGE

    document.title = fullTitle

    upsertMetaByName('description', description)
    upsertMetaByName('keywords', keywords)
    upsertMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    upsertMetaByProperty('og:site_name', SITE_NAME)
    upsertMetaByProperty('og:locale', DEFAULT_LOCALE)
    upsertMetaByProperty('og:title', fullTitle)
    upsertMetaByProperty('og:description', description)
    upsertMetaByProperty('og:image', ogImage)
    upsertMetaByProperty('og:url', canonicalUrl)
    upsertMetaByProperty('og:type', type)

    upsertMetaByName('twitter:card', 'summary_large_image')
    upsertMetaByName('twitter:title', fullTitle)
    upsertMetaByName('twitter:description', description)
    upsertMetaByName('twitter:image', ogImage)

    upsertCanonical(canonicalUrl)
    upsertJsonLd('seo-page-structured-data', structuredData)
    trackPageView(pathname)
  }, [title, description, keywords, image, type, structuredData, noindex, pathname])

  return null
}

export default SEO
