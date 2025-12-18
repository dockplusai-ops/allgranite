import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { trackEvent } from '../utils/gtm'

const KitchenRemodelingGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Modern White Kitchen',
      material: 'White Quartzite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/8_rv8xux.webp'
    },
    {
      id: 2,
      title: 'Classic Granite Kitchen',
      material: 'Premium Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/9_iqshcr.webp'
    },
    {
      id: 3,
      title: 'Luxury Marble Kitchen',
      material: 'Carrara Marble',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535826/10_s51dlw.webp'
    },
    {
      id: 4,
      title: 'Contemporary Quartz Kitchen',
      material: 'Premium Quartz',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/11_ew0tqd.webp'
    },
    {
      id: 5,
      title: 'Elegant Kitchen Island',
      material: 'Quartzite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535831/1_o5smft.webp'
    },
    {
      id: 6,
      title: 'Rustic Stone Kitchen',
      material: 'Natural Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/8_rv8xux.webp'
    }
  ]

  const openLightbox = (index) => {
    setSelectedImage(index)
    setLightboxOpen(true)
    trackEvent({
      event: 'kitchen_renovation_gallery_view',
      image_index: index,
      project_title: projects[index].title
    })
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % projects.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // Handle keyboard navigation
  React.useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  return (
    <>
      <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16 animate-fade-in">
            Our Kitchen Renovation Projects
          </h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Optimized Image with AVIF and WebP support */}
                  <picture>
                    <source 
                      type="image/avif" 
                      media="(max-width: 767px)"
                      srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_65,w_400${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 400w`}
                    />
                    <source 
                      type="image/avif" 
                      media="(max-width: 1279px)"
                      srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_70,w_600${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 600w`}
                    />
                    <source 
                      type="image/avif" 
                      srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_800${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 800w`}
                    />
                    <source 
                      type="image/webp" 
                      media="(max-width: 767px)"
                      srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_65,w_400${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 400w`}
                    />
                    <source 
                      type="image/webp" 
                      media="(max-width: 1279px)"
                      srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_70,w_600${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 600w`}
                    />
                    <source 
                      type="image/webp" 
                      srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_800${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 800w`}
                    />
                    <img
                      src={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_65,w_400${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || project.image}`}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      width="800"
                      height="600"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </picture>
                  
                  {/* Overlay with Label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-1">
                      {project.title}
                    </h3>
                    <p className="text-cream font-body text-sm md:text-base">
                      {project.material}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors duration-300 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 text-white hover:text-gold transition-colors duration-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 text-white hover:text-gold transition-colors duration-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div 
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[selectedImage].image}
              alt={projects[selectedImage].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                {projects[selectedImage].title}
              </h3>
              <p className="text-lg font-body text-cream">
                {projects[selectedImage].material}
              </p>
              <p className="text-sm font-body text-cream/80 mt-2">
                {selectedImage + 1} / {projects.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default KitchenRemodelingGallery

