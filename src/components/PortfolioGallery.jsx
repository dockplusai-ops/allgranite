import React from 'react'
import { useNavigate } from 'react-router-dom'

const PortfolioGallery = () => {
  const navigate = useNavigate()

  // Select one image from each category
  const featuredProjects = [
    {
      id: 1,
      category: 'Kitchens',
      title: 'Modern Cape Cod Kitchen',
      material: 'White Quartzite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/8_rv8xux.webp'
    },
    {
      id: 2,
      category: 'Bathrooms',
      title: 'Luxury Master Bathroom',
      material: 'Carrara Marble',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/9_iqshcr.webp'
    },
    {
      id: 4,
      category: 'Outdoor',
      title: 'Outdoor Kitchen Paradise',
      material: 'Weather-Resistant Quartz',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535826/10_s51dlw.webp'
    },
    {
      id: 6,
      category: 'Commercial',
      title: 'Restaurant Bar Counter',
      material: 'Durable Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/11_ew0tqd.webp'
    }
  ]

  const handleImageClick = (category) => {
    navigate(`/portfolio?filter=${category}`)
  }

  return (
    <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16">
          Transformations We're Proud Of
        </h2>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              onClick={() => handleImageClick(project.category)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent flex flex-col justify-end p-6">
                  {/* Category Label */}
                  <div className="transform translate-y-0 opacity-100 transition-all duration-300">
                    <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-1">
                      {project.category}
                    </h3>
                    <p className="text-cream font-body text-sm md:text-base">
                      {project.material}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* See More Projects Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-transform duration-300 hover:-translate-y-1 shadow-lg"
          >
            See More Projects
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioGallery

