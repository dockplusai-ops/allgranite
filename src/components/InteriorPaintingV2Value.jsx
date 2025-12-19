import React from 'react'
import { Palette, Shield, Sparkles } from 'lucide-react'

const InteriorPaintingV2Value = () => {
  const values = [
    {
      icon: Palette,
      title: 'Modern Colors',
      description: 'Latest color trends and premium paint selection. Transform your space with beautiful, lasting finishes.',
      highlight: 'Premium Paint'
    },
    {
      icon: Shield,
      title: 'Lasting Coverage',
      description: 'Durable, high-quality paints that stand the test of time. Professional application for perfect results.',
      highlight: 'Long-Lasting'
    },
    {
      icon: Sparkles,
      title: 'Zero Mess',
      description: 'Clean, professional service. We protect your furniture and leave your home spotless when we\'re done.',
      highlight: 'Clean Work'
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Colorful decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 border border-blue-200/50">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <div className="w-2 h-2 rounded-full bg-pink-500" />
            </div>
            <span className="text-navy font-body font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Vibrant Colors,<br />Lasting Quality
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Three reasons why Cape Cod homeowners trust us with their interior painting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            const colorClasses = [
              'from-blue-500/20 to-cyan-500/20 border-blue-200/30',
              'from-purple-500/20 to-pink-500/20 border-purple-200/30',
              'from-amber-500/20 to-orange-500/20 border-amber-200/30'
            ]
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Colorful card */}
                <div className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 bg-gradient-to-br ${colorClasses[index]}`}>
                  {/* Color accent stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${
                    index === 0 ? 'from-blue-500 to-cyan-500' :
                    index === 1 ? 'from-purple-500 to-pink-500' :
                    'from-amber-500 to-orange-500'
                  } rounded-t-3xl`} />
                  
                  <div className="relative z-10 mt-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${colorClasses[index]} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${
                        index === 0 ? 'text-blue-600' :
                        index === 1 ? 'text-purple-600' :
                        'text-amber-600'
                      } group-hover:text-navy transition-colors duration-300`} strokeWidth={2} />
                    </div>
                    
                    <div className={`inline-block px-4 py-1.5 bg-gradient-to-r ${colorClasses[index]} text-navy font-body font-bold text-xs rounded-full mb-5 border`}>
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

export default InteriorPaintingV2Value

