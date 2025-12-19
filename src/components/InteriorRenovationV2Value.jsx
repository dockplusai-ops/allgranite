import React from 'react'
import { Sparkles, Clock, Award } from 'lucide-react'

const InteriorRenovationV2Value = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Custom Design',
      description: 'Personalized interior solutions tailored to your style and needs. Every detail crafted for your vision.',
      highlight: 'Personalized',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Top-tier materials and expert craftsmanship. Your home deserves the finest renovation work.',
      highlight: '15+ Years',
      gradient: 'from-gold/20 to-amber-500/10'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Efficient project management and timely completion. We respect your schedule and deliver on time.',
      highlight: 'On Schedule',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-white via-cream/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gold/10 rounded-full mb-6">
            <span className="text-gold font-body font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Elegant Design,<br />Exceptional Results
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Three reasons why Cape Cod homeowners trust us with their most important renovation projects
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
                {/* Floating card effect */}
                <div className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${value.gradient} bg-gradient-to-br`}>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full opacity-50" />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-navy group-hover:text-gold transition-colors duration-300" strokeWidth={2} />
                    </div>
                    
                    <div className="inline-block px-4 py-1.5 bg-navy/5 text-navy font-body font-bold text-xs rounded-full mb-5">
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

export default InteriorRenovationV2Value

