import React from 'react'
import { Sparkles, Clock, Award } from 'lucide-react'

const BathroomV2Value = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Complete Transformation',
      description: 'Everything from vanities to lighting. One team, one project, seamless execution.',
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
      description: 'Top-tier materials and craftsmanship. Your bathroom deserves nothing less.',
      highlight: '15+ Years'
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-white via-cyan-50/20 to-white relative overflow-hidden">
      {/* Spa-like water wave effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Water ripple effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-100/50 rounded-full mb-6 border border-cyan-200/50">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-700 font-body font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Spa-Like Design,<br />Relaxing Results
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Three reasons why Cape Cod homeowners trust us with their bathroom renovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            const waterColors = [
              'from-cyan-500/20 to-blue-500/20 border-cyan-200/30',
              'from-teal-500/20 to-cyan-500/20 border-teal-200/30',
              'from-blue-500/20 to-indigo-500/20 border-blue-200/30'
            ]
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Spa-like card with water effects */}
                <div className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 bg-gradient-to-br ${waterColors[index]}`}>
                  {/* Water wave accent */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 opacity-60" />
                  
                  {/* Ripple effect */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-cyan-200/20 rounded-full blur-xl" />
                  
                  <div className="relative z-10 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${waterColors[index]} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className={`w-8 h-8 md:w-10 md:h-12 ${
                        index === 0 ? 'text-cyan-600' :
                        index === 1 ? 'text-teal-600' :
                        'text-blue-600'
                      } group-hover:text-white transition-colors duration-300`} strokeWidth={2} />
                    </div>
                    
                    <div className={`inline-block px-4 py-1.5 bg-gradient-to-r ${waterColors[index]} text-cyan-700 font-body font-bold text-xs rounded-full mb-5 border`}>
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

export default BathroomV2Value

