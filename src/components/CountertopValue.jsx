import React from 'react'
import { Sparkles, Award, Shield } from 'lucide-react'

const CountertopValue = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Premium Materials',
      description: 'Granite, Marble, Quartz, Quartzite, and Soapstone. Only the finest materials for your countertops.',
      highlight: 'Top Quality'
    },
    {
      icon: Award,
      title: 'Expert Installation',
      description: 'Professional craftsmen with 15+ years of experience. Precision installation that lasts a lifetime.',
      highlight: '15+ Years'
    },
    {
      icon: Shield,
      title: 'Long-lasting Quality',
      description: 'Durable countertops that withstand daily use. Your investment protected with our warranty.',
      highlight: 'Lifetime Value'
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
            Three reasons why Cape Cod homeowners trust us with their countertop installation
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

export default CountertopValue

