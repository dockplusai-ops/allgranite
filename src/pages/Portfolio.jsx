import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { trackPortfolioFilter } from '../utils/gtm'

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
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
      id: 3,
      category: 'Kitchens',
      title: 'Classic Coastal Kitchen',
      material: 'Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535828/13_qlpnko.webp'
    },
    {
      id: 4,
      category: 'Outdoor',
      title: 'Outdoor Kitchen Paradise',
      material: 'Weather-Resistant Quartz',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535826/10_s51dlw.webp'
    },
    {
      id: 5,
      category: 'Kitchens',
      title: 'Contemporary Kitchen Design',
      material: 'Calacatta Quartz',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535831/1_o5smft.webp'
    },
    {
      id: 6,
      category: 'Commercial',
      title: 'Restaurant Bar Counter',
      material: 'Durable Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/12_r7s9dq.webp'
    },
    {
      id: 7,
      category: 'Bathrooms',
      title: 'Spa-Like Powder Room',
      material: 'Soapstone',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535828/13_qlpnko.webp'
    },
    {
      id: 8,
      category: 'Kitchens',
      title: 'Farmhouse Style Kitchen',
      material: 'Quartzite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535828/14_rejm9y.webp'
    },
    {
      id: 9,
      category: 'Outdoor',
      title: 'Patio Bar Area',
      material: 'Outdoor Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535828/15_vzxnuf.webp'
    },
    {
      id: 13,
      category: 'Outdoor',
      title: 'Luxury Outdoor Entertainment',
      material: 'Premium Stone',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/11_ew0tqd.webp'
    },
    {
      id: 10,
      category: 'Bathrooms',
      title: 'Modern Guest Bath',
      material: 'Quartz',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535828/13_qlpnko.webp'
    },
    {
      id: 11,
      category: 'Commercial',
      title: 'Office Reception Counter',
      material: 'Premium Marble',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535829/17_dam3tc.webp'
    },
    {
      id: 12,
      category: 'Kitchens',
      title: 'Elegant Island Kitchen',
      material: 'Statuary Marble',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535831/18_kwfwxl.webp'
    }
  ]

  const filters = ['All', 'Kitchens', 'Bathrooms', 'Outdoor', 'Commercial']

  // Initialize filter from URL params
  useEffect(() => {
    const filterParam = searchParams.get('filter')
    if (filterParam && filters.includes(filterParam)) {
      setActiveFilter(filterParam)
    }
  }, [searchParams])

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    trackPortfolioFilter(filter)
    if (filter === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ filter })
    }
  }

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <Hero />

      {/* Portfolio Content */}
      <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-8 md:mb-12 animate-fade-in">
            Our Portfolio
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-6 py-2 md:px-8 md:py-3 rounded-lg font-body font-medium text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95 ${
                  activeFilter === filter
                    ? 'bg-gold text-navy shadow-lg'
                    : 'bg-white text-navy hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <PhotoProvider>
            <div
              key={activeFilter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                    <PhotoView src={project.image}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {/* Image with Lazy Loading */}
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                          width="800"
                          height="600"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Dark Overlay on Hover */}
                        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-all duration-300 flex flex-col justify-end p-6">
                          {/* Caption - Hidden until hover */}
                          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                            <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-1">
                              {project.title}
                            </h3>
                            <p className="text-cream font-body text-sm md:text-base">
                              {project.material}
                            </p>
                          </div>
                        </div>
                      </div>
                    </PhotoView>
                  </div>
                ))}
              </div>
          </PhotoProvider>

          {/* Back to Home Button */}
          <div className="text-center mt-12 md:mt-16 animate-slide-up">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Back to Home
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Portfolio

