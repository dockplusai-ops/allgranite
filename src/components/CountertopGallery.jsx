import React, { useState, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { trackEvent } from '../utils/gtm'

const CountertopGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Quartz Countertop',
      material: 'Premium Quartz',
      location: 'Kitchen',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/5_fdzchu.webp'
    },
    {
      id: 2,
      title: 'Classic Granite Kitchen Countertop',
      material: 'Premium Granite',
      location: 'Kitchen',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/3_wqvvt2.webp'
    },
    {
      id: 3,
      title: 'Luxury Marble Bathroom Countertop',
      material: 'Carrara Marble',
      location: 'Bathroom',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/4_aybqia.webp'
    },
    {
      id: 4,
      title: 'Contemporary Quartzite Countertop',
      material: 'Premium Quartzite',
      location: 'Kitchen',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535826/6_zeexqu.webp'
    },
    {
      id: 5,
      title: 'Elegant Soapstone Countertop',
      material: 'Natural Soapstone',
      location: 'Kitchen',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/7_mthrbp.webp'
    },
    {
      id: 6,
      title: 'Modern Bathroom Quartz Countertop',
      material: 'Premium Quartz',
      location: 'Bathroom',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/8_rv8xux.webp'
    }
  ]

  const openLightbox = (index) => {
    setSelectedImage(index)
    setLightboxOpen(true)
    trackEvent({
      event: 'countertop_service_gallery_view',
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
      <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-body max-w-2xl mx-auto">
              See the countertop installations we've completed for Cape Cod homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
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
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <h3 className="text-white font-display font-bold text-2xl mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/90 font-body">
                      {project.material} • {project.location}
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
                {projects[selectedImage].material} • {projects[selectedImage].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CountertopGallery

