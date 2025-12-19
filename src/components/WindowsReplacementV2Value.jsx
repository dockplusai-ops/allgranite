import React from 'react'
import { Zap, Shield, Sparkles } from 'lucide-react'

const WindowsReplacementV2Value = () => {
  const values = [
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'Lower your energy bills with modern, efficient windows. Better insulation means significant savings.',
      highlight: 'Save Energy'
    },
    {
      icon: Shield,
      title: 'Better Insulation',
      description: 'Superior sound and thermal insulation. Enjoy a quieter, more comfortable home year-round.',
      highlight: 'Comfort'
    },
    {
      icon: Sparkles,
      title: 'Modern Aesthetics',
      description: 'Beautiful, contemporary window designs that enhance your home\'s curb appeal and interior light.',
      highlight: 'Beautiful Design'
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Light rays effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-yellow-200 to-transparent" style={{ transform: 'rotate(15deg)' }} />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-yellow-200 to-transparent" style={{ transform: 'rotate(-15deg)' }} />
      </div>
      
      {/* Light glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-yellow-50 rounded-full mb-6 border border-yellow-100">
            <span className="text-yellow-700 font-body font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Natural Light,<br />Modern Windows
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Three reasons why Cape Cod homeowners trust us with their window replacement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Light, airy card */}
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 bg-gradient-to-br from-white to-blue-50/10">
                  {/* Light ray accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-50 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-yellow-50 mb-6 group-hover:bg-yellow-100 group-hover:scale-110 transition-all duration-300 shadow-sm border border-yellow-100">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-12 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" strokeWidth={2} />
                    </div>
                    
                    <div className="inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 font-body font-bold text-xs rounded-full mb-5 border border-yellow-100">
                      {value.highlight}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-navy mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 font-body text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WindowsReplacementV2Value

