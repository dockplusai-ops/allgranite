import React from 'react'
import { Check } from 'lucide-react'

const KitchenRemodelingServices = () => {
  const services = [
    {
      title: 'Countertops',
      description: 'Granite, Marble, Quartz & Quartzite',
      icon: '🏗️'
    },
    {
      title: 'Cabinets & Storage',
      description: 'Custom cabinets and storage solutions',
      icon: '🗄️'
    },
    {
      title: 'Kitchen Island',
      description: 'Custom-designed kitchen islands',
      icon: '🏝️'
    },
    {
      title: 'Backsplash',
      description: 'Beautiful tile and stone backsplashes',
      icon: '🧱'
    },
    {
      title: 'Sinks & Faucets',
      description: 'Premium sinks and modern faucets',
      icon: '🚰'
    },
    {
      title: 'Lighting',
      description: 'Professional lighting installation',
      icon: '💡'
    }
  ]

  return (
    <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            What's Included in Your Complete Kitchen Renovation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Everything you need for a stunning kitchen transformation, all in one package
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:border-gold hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon/Emoji */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300 text-2xl">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={2.5} />
                    <h3 className="text-lg md:text-xl font-body font-bold text-navy">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KitchenRemodelingServices

