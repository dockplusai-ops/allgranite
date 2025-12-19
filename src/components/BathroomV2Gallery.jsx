import React, { useState, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { trackEvent } from '../utils/gtm'

const BathroomV2Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Modern White Bathroom',
      material: 'White Quartzite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/8_rv8xux.webp'
    },
    {
      id: 2,
      title: 'Classic Granite Bathroom',
      material: 'Premium Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/9_iqshcr.webp'
    },
    {
      id: 3,
      title: 'Luxury Marble Bathroom',
      material: 'Carrara Marble',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535826/10_s51dlw.webp'
    },
    {
      id: 4,
      title: 'Contemporary Quartz',
      material: 'Premium Quartz',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/11_ew0tqd.webp'
    }
  ]

  const openLightbox = (index) => {
    setSelectedImage(index)
    setLightboxOpen(true)
    trackEvent({
      event: 'bathroom_renovation_gallery_view',
      image_index: index,
      project_title: projects[index].title
    })
  }

  const closeLightbox = () => setLightboxOpen(false)
  const nextImage = useCallback(() => {
    setSelectedImage((prev) => (prev + 1) % projects.length)
  }, [projects.length])
  
  const prevImage = useCallback(() => {
    setSelectedImage((prev) => (prev - 1 + projects.length) % projects.length)
  }, [projects.length])

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
  }, [lightboxOpen, nextImage, prevImage])

  return (
    <>
      <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-white via-cyan-50/10 to-white relative overflow-hidden">
        {/* Spa-like water effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(ellipse at 30% 40%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-100/50 rounded-full mb-6 border border-cyan-200/50">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-cyan-700 font-body font-bold text-sm uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
              Our Recent Work
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
              See the spa-like bathroom transformations we've created for Cape Cod families
            </p>
          </div>

          {/* Spa-like grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-cyan-100"
                onClick={() => openLightbox(index)}
              >
                <picture>
                  <source 
                    type="image/avif" 
                    srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_800${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 800w`}
                  />
                  <source 
                    type="image/webp" 
                    srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_800${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 800w`}
                  />
                  <img
                    src={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_800${project.image.match(/\/v\d+\/[^/]+$/)?.[0] || project.image}`}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                {/* Water wave accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Spa-like overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full mb-3 border border-cyan-300/30">
                      <span className="text-white font-body text-xs font-semibold uppercase">{project.material}</span>
                    </div>
                    <h3 className="text-white font-display font-bold text-2xl md:text-3xl mb-2">
                      {project.title}
                    </h3>
                    <div className="flex gap-1">
                      <div className="w-8 h-1 bg-cyan-300 rounded-full" />
                      <div className="w-4 h-1 bg-cyan-300/50 rounded-full" />
                    </div>
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
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-4 text-white hover:text-gold transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-4 text-white hover:text-gold transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-6xl w-full">
            <img
              src={projects[selectedImage].image}
              alt={projects[selectedImage].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                {projects[selectedImage].title}
              </h3>
              <p className="text-lg font-body text-white/80">
                {projects[selectedImage].material}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BathroomV2Gallery

