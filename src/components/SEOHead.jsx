import { useEffect } from 'react'

/**
 * SEO Head Component
 * Dynamically updates meta tags for different pages
 */
const SEOHead = ({ 
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  structuredData
}) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title
      updateMetaTag('name', 'title', title)
    }

    // Update description
    if (description) {
      updateMetaTag('name', 'description', description)
    }

    // Update keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords)
    }

    // Update canonical
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]')
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical)
      } else {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        canonicalLink.setAttribute('href', canonical)
        document.head.appendChild(canonicalLink)
      }
    }

    // Update Open Graph tags
    if (title) {
      updateMetaTag('property', 'og:title', title)
    }
    if (description) {
      updateMetaTag('property', 'og:description', description)
    }
    if (canonical) {
      updateMetaTag('property', 'og:url', canonical)
    }
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage)
    }
    if (ogType) {
      updateMetaTag('property', 'og:type', ogType)
    }

    // Update Twitter Card tags
    if (title) {
      updateMetaTag('name', 'twitter:title', title)
    }
    if (description) {
      updateMetaTag('name', 'twitter:description', description)
    }
    if (ogImage) {
      updateMetaTag('name', 'twitter:image', ogImage)
    }
    if (canonical) {
      updateMetaTag('name', 'twitter:url', canonical)
    }

    // Update structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"][data-dynamic="true"]')
      if (structuredDataScript) {
        structuredDataScript.textContent = JSON.stringify(structuredData)
      } else {
        structuredDataScript = document.createElement('script')
        structuredDataScript.setAttribute('type', 'application/ld+json')
        structuredDataScript.setAttribute('data-dynamic', 'true')
        structuredDataScript.textContent = JSON.stringify(structuredData)
        document.head.appendChild(structuredDataScript)
      }
    }
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData])

  const updateMetaTag = (attribute, value, content) => {
    let meta = document.querySelector(`meta[${attribute}="${value}"]`)
    if (meta) {
      meta.setAttribute('content', content)
    } else {
      meta = document.createElement('meta')
      meta.setAttribute(attribute, value)
      meta.setAttribute('content', content)
      document.head.appendChild(meta)
    }
  }

  return null
}

export default SEOHead

