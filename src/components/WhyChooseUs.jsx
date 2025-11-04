import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      title: 'QUICK TURNAROUND',
      description: 'Get your quote in 24 hours. Installation in 7 days.'
    },
    {
      title: 'PREMIUM QUALITY',
      description: 'Precision cutting and expert installation guaranteed.'
    },
    {
      title: 'COMPETITIVE PRICING',
      description: 'Best value without compromising quality.'
    },
    {
      title: 'OUTSTANDING SERVICE',
      description: 'From first call to post-installation support.'
    },
    {
      title: 'LOCAL EXPERTISE',
      description: 'Serving Cape Cod families for 15+ years.'
    },
    {
      title: 'FREE ESTIMATES',
      description: 'No obligation. No hidden fees.'
    }
  ]

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
          The All Granite & Stone Difference
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:border-gold hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Checkmark Icon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Check className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-body font-bold text-navy mb-2 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

