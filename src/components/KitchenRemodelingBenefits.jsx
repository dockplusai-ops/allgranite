import React from 'react'
import { Palette, Clock, Award, Shield } from 'lucide-react'

const KitchenRemodelingBenefits = () => {
  const benefits = [
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Personalized kitchen design tailored to your style and needs'
    },
    {
      icon: Clock,
      title: 'Fast Installation',
      description: 'Professional installation completed in 7-10 days'
    },
    {
      icon: Award,
      title: 'Premium Materials',
      description: 'Top-quality granite, marble, quartz, and quartzite'
    },
    {
      icon: Shield,
      title: 'Full Warranty',
      description: 'Comprehensive warranty on all materials and workmanship'
    }
  ]

  return (
    <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16 animate-fade-in">
          Why Choose Our Kitchen Remodeling
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="group bg-cream border border-gray-200 rounded-lg p-6 md:p-8 hover:border-gold hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gold group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-body font-bold text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KitchenRemodelingBenefits

