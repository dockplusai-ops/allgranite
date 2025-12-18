import React from 'react'
import { Sparkles, Clock, Award } from 'lucide-react'

const KitchenV2Value = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Complete Transformation',
      description: 'Everything from countertops to lighting. One team, one project, seamless execution.',
      highlight: 'All-Inclusive'
    },
    {
      icon: Clock,
      title: 'Fast & Reliable',
      description: '7-10 day installation. We respect your time and deliver on schedule, every time.',
      highlight: '7-10 Days'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Top-tier materials and craftsmanship. Your kitchen deserves nothing less.',
      highlight: '15+ Years'
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-2xl mx-auto">
            Three reasons why Cape Cod homeowners trust us with their most important renovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/10 mb-6 group-hover:bg-gold transition-all duration-300">
                  <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-gold group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
                <div className="inline-block px-4 py-1 bg-gold/10 text-gold font-body font-bold text-sm rounded-full mb-4">
                  {value.highlight}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-body text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KitchenV2Value

