import React from 'react'
import { Star } from 'lucide-react'
import { trackCountertopMaterialView } from '../utils/gtm'

const CountertopMaterials = () => {
  const materials = [
    {
      name: 'GRANITE',
      description: 'Timeless durability',
      durability: 5,
      price: '$$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/3_wqvvt2.webp',
      fullDescription: 'Naturally resistant to heat, scratches, and stains. Perfect for busy kitchens and bathrooms.',
      countertopFeatures: 'Heat-resistant, scratch-resistant, stain-resistant'
    },
    {
      name: 'MARBLE',
      description: 'Elegant luxury',
      durability: 3,
      price: '$$$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/4_aybqia.webp',
      fullDescription: 'Sophisticated beauty with unique veining patterns. Perfect for elegant kitchen and bathroom countertops.',
      countertopFeatures: 'Unique veining, elegant appearance, timeless beauty'
    },
    {
      name: 'QUARTZ',
      description: 'Low maintenance beauty',
      durability: 5,
      price: '$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535825/5_fdzchu.webp',
      fullDescription: 'Engineered for strength and consistency. Non-porous and easy to clean. Ideal for modern countertops.',
      countertopFeatures: 'Non-porous, easy maintenance, consistent patterns'
    },
    {
      name: 'QUARTZITE',
      description: 'Natural strength',
      durability: 5,
      price: '$$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535826/6_zeexqu.webp',
      fullDescription: 'Harder than granite, with the beauty of marble. Exceptional durability for high-traffic areas.',
      countertopFeatures: 'Extremely hard, marble-like beauty, superior durability'
    },
    {
      name: 'SOAPSTONE',
      description: 'Unique character',
      durability: 4,
      price: '$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535827/7_mthrbp.webp',
      fullDescription: 'Natural, non-porous surface that develops a rich patina over time. Perfect for distinctive countertops.',
      countertopFeatures: 'Non-porous, develops patina, unique character'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-gold text-gold' : 'text-gray-400'
        }`}
      />
    ))
  }

  const renderPriceIndicator = (price) => {
    const count = price.length
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < count ? 'text-gold' : 'text-gray-400'
            }`}
          >
            $
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-4">
            Premium Countertop Materials
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-2xl mx-auto">
            Choose from our selection of premium materials for your kitchen and bathroom countertops
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {materials.map((material, index) => (
            <div
              key={material.name}
              onClick={() => trackCountertopMaterialView(material.name)}
              className={`group relative h-96 md:h-[450px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-1 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background Image - Optimized */}
              <div className="absolute inset-0">
                <picture className="absolute inset-0 w-full h-full">
                  {/* AVIF sources - mobile optimized with lower quality */}
                  <source 
                    type="image/avif" 
                    media="(max-width: 767px)"
                    srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_65,w_600${material.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 600w`}
                  />
                  <source 
                    type="image/avif" 
                    media="(max-width: 1023px)"
                    srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_70,w_800${material.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 800w`}
                  />
                  <source 
                    type="image/avif" 
                    srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_1200${material.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 1200w`}
                  />
                  {/* WebP fallback */}
                  <source 
                    type="image/webp" 
                    media="(max-width: 767px)"
                    srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_65,w_600${material.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 600w`}
                  />
                  <source 
                    type="image/webp" 
                    media="(max-width: 1023px)"
                    srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_70,w_800${material.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 800w`}
                  />
                  <source 
                    type="image/webp" 
                    srcSet={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_1200${material.image.match(/\/v\d+\/[^/]+$/)?.[0] || ''} 1200w`}
                  />
                  {/* Fallback image */}
                  <img
                    src={`https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_65,w_600${material.image.match(/\/v\d+\/[^/]+$/)?.[0] || material.image}`}
                    alt={`${material.name} countertop`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </picture>
                {/* Dark Overlay - Top portion */}
                <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b from-navy/90 via-navy/60 to-transparent transition-all duration-300" />
                {/* Dark Overlay - Bottom portion */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-navy/90 via-navy/60 to-transparent transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                {/* Top Section - No overlay, white text for better readability */}
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 text-white group-hover:text-gold transition-colors duration-300">
                      {material.name}
                    </h3>
                    <p className="text-lg md:text-xl text-white font-body font-medium mb-4">
                      {material.description}
                    </p>
                  </div>
                  {/* Price Indicator */}
                  <div className="text-right">
                    {renderPriceIndicator(material.price)}
                  </div>
                </div>

                {/* Bottom Section - With overlay */}
                <div className="relative z-10 text-white">
                  {/* Durability Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-body text-cream/80">Durability:</span>
                    <div className="flex gap-1">
                      {renderStars(material.durability)}
                    </div>
                  </div>

                  {/* Full Description */}
                  <p className="text-sm md:text-base text-cream/90 font-body leading-relaxed">
                    {material.fullDescription}
                  </p>
                </div>
              </div>

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold rounded-lg transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CountertopMaterials

