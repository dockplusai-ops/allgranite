import React from 'react'
import { getOptimizedImageSources } from '../utils/imageOptimizer'

/**
 * OptimizedImage Component
 * Renders images with AVIF/WebP support and responsive srcset
 * 
 * @param {string} src - Original Cloudinary image URL
 * @param {string} alt - Alt text for the image
 * @param {Object} options - Configuration options
 * @param {Array<number>} options.widths - Array of widths for srcset (default: [400, 600, 800])
 * @param {string} options.quality - Quality for mobile (default: '65'), desktop uses 75
 * @param {boolean} options.includeAvif - Whether to include AVIF format (default: true)
 * @param {string} options.loading - Loading attribute: 'lazy' or 'eager' (default: 'lazy')
 * @param {string} options.className - CSS classes
 * @param {string} options.sizes - Sizes attribute for responsive images
 * @param {number} options.width - Image width attribute
 * @param {number} options.height - Image height attribute
 * @param {string} options.fetchpriority - Fetch priority: 'high' or 'low' (default: undefined)
 */
const OptimizedImage = ({
  src,
  alt,
  widths = [400, 600, 800],
  quality = '65',
  includeAvif = true,
  loading = 'lazy',
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw',
  width,
  height,
  fetchpriority,
  ...props
}) => {
  const imageSources = getOptimizedImageSources(src, { widths, quality, includeAvif })

  return (
    <picture>
      {/* AVIF sources - mobile optimized */}
      {includeAvif && imageSources.avifMobile && (
        <source
          type="image/avif"
          media="(max-width: 767px)"
          srcSet={imageSources.avifMobile}
        />
      )}
      {includeAvif && imageSources.avifDesktop && (
        <source
          type="image/avif"
          media="(min-width: 768px)"
          srcSet={imageSources.avifDesktop}
        />
      )}
      
      {/* WebP sources - mobile optimized */}
      {imageSources.webpMobile && (
        <source
          type="image/webp"
          media="(max-width: 767px)"
          srcSet={imageSources.webpMobile}
        />
      )}
      {imageSources.webpDesktop && (
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcSet={imageSources.webpDesktop}
        />
      )}
      
      {/* Fallback image */}
      <img
        src={imageSources.fallback}
        alt={alt}
        loading={loading}
        decoding="async"
        sizes={sizes}
        width={width}
        height={height}
        fetchPriority={fetchpriority}
        className={className}
        {...props}
      />
    </picture>
  )
}

export default OptimizedImage

