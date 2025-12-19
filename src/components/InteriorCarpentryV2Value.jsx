import React from 'react'
import { Hammer, Award, Ruler } from 'lucide-react'

const InteriorCarpentryV2Value = () => {
  const values = [
    {
      icon: Hammer,
      title: 'Premium Wood',
      description: 'Finest quality materials and custom woodwork. Expert craftsmanship that showcases natural beauty.',
      highlight: 'Premium Materials'
    },
    {
      icon: Ruler,
      title: 'Custom Design',
      description: 'Bespoke solutions tailored to your space. Every piece designed and built to your exact specifications.',
      highlight: 'Made to Measure'
    },
    {
      icon: Award,
      title: 'Master Craftsmanship',
      description: 'Experienced artisans with years of expertise. Traditional techniques meet modern precision.',
      highlight: '15+ Years'
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-amber-50/30 via-white to-amber-50/20 relative overflow-hidden">
      {/* Wood grain texture background */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(139, 69, 19, 0.1) 50px, rgba(139, 69, 19, 0.1) 52px)',
        backgroundSize: '100% 2px'
      }} />
      
      {/* Natural wood tones */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-800/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-100 rounded-lg mb-6 border border-amber-200">
            <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)' }} />
            <span className="text-amber-900 font-body font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Master Craftsmanship,<br />Natural Beauty
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Three reasons why Cape Cod homeowners trust us with their custom carpentry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            const woodTones = [
              'from-amber-600/20 to-amber-800/20 border-amber-300',
              'from-amber-700/20 to-amber-900/20 border-amber-400',
              'from-amber-500/20 to-amber-700/20 border-amber-200'
            ]
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Wood-textured card */}
                <div className={`relative bg-white rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 bg-gradient-to-br ${woodTones[index]}`}>
                  {/* Wood grain effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-5" style={{ 
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(139, 69, 19, 0.2) 20px, rgba(139, 69, 19, 0.2) 22px)'
                  }} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${woodTones[index]} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-amber-300/30`}>
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-amber-800 group-hover:text-amber-900 transition-colors duration-300" strokeWidth={2} />
                    </div>
                    
                    <div className={`inline-block px-4 py-1.5 bg-amber-100 text-amber-900 font-body font-bold text-xs rounded-lg mb-5 border border-amber-200`}>
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

export default InteriorCarpentryV2Value

