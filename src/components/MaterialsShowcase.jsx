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
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      fullDescription: 'Naturally resistant to heat, scratches, and stains. Perfect for busy kitchens.'
    },
    {
      name: 'MARBLE',
      description: 'Elegant luxury',
      durability: 3,
      price: '$$$$',
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
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
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
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
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-navy/40 group-hover:from-navy/95 group-hover:via-navy/70 group-hover:to-navy/50 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-white">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 group-hover:text-gold transition-colors duration-300">
                      {material.name}
                    </h3>
                    <p className="text-lg md:text-xl text-cream font-body font-light mb-4">
                      {material.description}
                    </p>
                  </div>
                  {/* Price Indicator */}
                  <div className="text-right">
                    {renderPriceIndicator(material.price)}
                  </div>
                </div>

                {/* Bottom Section */}
                <div>
                  {/* Durability Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-body text-cream/80">Durability:</span>
                    <div className="flex gap-1">
                      {renderStars(material.durability)}
                    </div>
                  </div>

                  {/* Full Description */}
                  <p className="text-sm md:text-base text-cream/90 font-body mb-6 leading-relaxed">
                    {material.fullDescription}
                  </p>

                  {/* Learn More Link */}
                  <motion.a
                    href={`#${material.name.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm md:text-base group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
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

