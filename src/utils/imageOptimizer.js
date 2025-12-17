/**
 * Helper functions to generate optimized Cloudinary image URLs
 * Optimized for mobile-first approach with AVIF support
 */

/**
 * Extracts the base image ID from a Cloudinary URL
 * @param {string} url - Cloudinary URL
 * @returns {string} - Base image ID (e.g., "v1762535827/8_rv8xux.webp")
 */
const getImageId = (url) => {
  const match = url.match(/\/v\d+\/[^/]+$/)
  return match ? match[0] : url
}

/**
 * Generates optimized image sources for Cloudinary images
 * @param {string} baseUrl - Original Cloudinary URL
 * @param {Object} options - Configuration options
 * @param {Array<number>} options.widths - Array of widths for srcset (default: [400, 600, 800])
 * @param {string} options.quality - Quality for mobile (default: '65'), desktop uses 75
 * @param {boolean} options.includeAvif - Whether to include AVIF format (default: true)
 * @returns {Object} - Object with avif and webp srcSet strings and fallback src
 */
export const getOptimizedImageSources = (baseUrl, options = {}) => {
  const {
    widths = [400, 600, 800],
    quality = '65',
    includeAvif = true
  } = options

  const imageId = getImageId(baseUrl)
  const basePath = 'https://res.cloudinary.com/dhrxy4yo0/image/upload'

  const sources = {
    avif: {
      mobile: [],
      desktop: []
    },
    webp: {
      mobile: [],
      desktop: []
    },
    fallback: ''
  }

  widths.forEach((width, index) => {
    const isMobile = width <= 600
    const imgQuality = isMobile ? quality : '75'
    
    // AVIF sources
    if (includeAvif) {
      const avifUrl = `${basePath}/f_avif,q_${imgQuality},w_${width}${imageId}`
      if (isMobile) {
        sources.avif.mobile.push(`${avifUrl} ${width}w`)
      } else {
        sources.avif.desktop.push(`${avifUrl} ${width}w`)
      }
    }
    
    // WebP sources
    const webpUrl = `${basePath}/f_webp,q_${imgQuality},w_${width}${imageId}`
    if (isMobile) {
      sources.webp.mobile.push(`${webpUrl} ${width}w`)
    } else {
      sources.webp.desktop.push(`${webpUrl} ${width}w`)
    }
  })

  // Fallback (smallest WebP)
  sources.fallback = `${basePath}/f_webp,q_${quality},w_${widths[0]}${imageId}`

  return {
    avifMobile: sources.avif.mobile.join(', '),
    avifDesktop: sources.avif.desktop.join(', '),
    webpMobile: sources.webp.mobile.join(', '),
    webpDesktop: sources.webp.desktop.join(', '),
    fallback: sources.fallback,
    srcSet: [...sources.webp.mobile, ...sources.webp.desktop].join(', ')
  }
}

/**
 * Generates a simple optimized image URL for Cloudinary
 * @param {string} baseUrl - Original Cloudinary URL
 * @param {Object} options - Configuration options
 * @param {number} options.width - Desired width (default: 800)
 * @param {string} options.format - Format: 'avif', 'webp', or 'auto' (default: 'webp')
 * @param {string} options.quality - Quality: '60', '65', '70', '75' (default: '75')
 * @returns {string} - Optimized URL
 */
export const getOptimizedImageUrl = (baseUrl, options = {}) => {
  const {
    width = 800,
    format = 'webp',
    quality = '75'
  } = options

  const imageId = getImageId(baseUrl)
  const basePath = 'https://res.cloudinary.com/dhrxy4yo0/image/upload'
  const formatParam = format === 'auto' ? 'f_auto' : `f_${format}`

  return `${basePath}/${formatParam},q_${quality},w_${width}${imageId}`
}

