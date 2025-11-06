import React from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'

const MaterialsShowcase = () => {
  const materials = [
    {
      name: 'GRANITE',
      description: 'Timeless durability',
      durability: 5,
      price: '$$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762377845/granite-textures-seamless_fuyzfe.jpg',
      fullDescription: 'Naturally resistant to heat, scratches, and stains. Perfect for busy kitchens.'
    },
    {
      name: 'MARBLE',
      description: 'Elegant luxury',
      durability: 3,
      price: '$$$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762377845/marble_Calacatta-Borghini_LHOcwv5aOZW3cKeSct8X_bwmwcm.jpg',
      fullDescription: 'Sophisticated beauty with unique veining patterns. Requires careful maintenance.'
    },
    {
      name: 'QUARTZ',
      description: 'Low maintenance beauty',
      durability: 5,
      price: '$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762287993/flux-kontext-max_Ultra_realistic_photograph_of_a_white_quartz_slab_detailed_close-up_view_showing-1_p7yxsz.jpg',
      fullDescription: 'Engineered for strength and consistency. Non-porous and easy to clean.'
    },
    {
      name: 'QUARTZITE',
      description: 'Natural strength',
      durability: 5,
      price: '$$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762287993/flux-kontext-max_Ultra_realistic_photograph_of_a_quartz_slab_detailed_close-up_view_showing_natur-0_gia5oe.jpg',
      fullDescription: 'Harder than granite, with the beauty of marble. Exceptional durability.'
    },
    {
      name: 'SOAPSTONE',
      description: 'Unique character',
      durability: 4,
      price: '$$',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762377845/soapstone_Barroca-Soapstone_2LTP16AfN4Rk3ZR4J6fQ_icnncq.jpg',
      fullDescription: 'Natural, non-porous surface that develops a rich patina over time.'
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
    <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16"
        >
          Premium Stone Selection
        </motion.h2>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative h-96 md:h-[450px] rounded-lg overflow-hidden cursor-pointer ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${material.image})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
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
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="#showroom"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Showroom Visit
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default MaterialsShowcase

