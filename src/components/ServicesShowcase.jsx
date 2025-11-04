import React from 'react'
import { 
  ChefHat, 
  Droplets, 
  UtensilsCrossed, 
  Flame, 
  RectangleHorizontal, 
  Sparkles 
} from 'lucide-react'

const ServicesShowcase = () => {
  const services = [
    {
      icon: ChefHat,
      title: 'Kitchen Countertops',
      description: 'Transform your kitchen with stunning stone countertops that combine durability with elegance. Perfect for meal prep, entertaining, and daily use.',
      materials: 'Granite • Marble • Quartz • Quartzite • Soapstone'
    },
    {
      icon: Droplets,
      title: 'Bathroom Vanities',
      description: 'Create a spa-like retreat with luxurious stone vanities. Water-resistant and beautiful, perfect for your master bath or powder room.',
      materials: 'Granite • Marble • Quartz • Quartzite • Soapstone'
    },
    {
      icon: UtensilsCrossed,
      title: 'Outdoor Kitchens',
      description: 'Extend your living space with weather-resistant stone surfaces for outdoor cooking and entertaining. Built to withstand Cape Cod elements.',
      materials: 'Granite • Marble • Quartz • Quartzite • Soapstone'
    },
    {
      icon: Flame,
      title: 'Fireplace Surrounds',
      description: 'Add warmth and sophistication to your home with custom stone fireplace surrounds. Creates a stunning focal point for any room.',
      materials: 'Granite • Marble • Quartz • Quartzite • Soapstone'
    },
    {
      icon: RectangleHorizontal,
      title: 'Backsplashes',
      description: 'Protect your walls while adding visual interest with elegant stone backsplashes. Available in various patterns and finishes.',
      materials: 'Granite • Marble • Quartz • Quartzite • Soapstone'
    },
    {
      icon: Sparkles,
      title: 'Custom Projects',
      description: 'Bring your unique vision to life with custom stone fabrication. From tabletops to feature walls, we handle any project with precision.',
      materials: 'Granite • Marble • Quartz • Quartzite • Soapstone'
    }
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-20 px-4 lg:px-8" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="max-w-1200 mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16">
          Our Expertise in Natural Stone
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-2 border-transparent hover:border-gold"
              >
                {/* Icon */}
                <div className="mb-4">
                  <IconComponent 
                    className="w-10 h-10 md:w-12 md:h-12 text-gold" 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-body font-bold text-navy mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-body text-sm md:text-base mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Materials */}
                <p className="text-gray-500 font-body text-xs md:text-sm italic">
                  {service.materials}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore All Services
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
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase

