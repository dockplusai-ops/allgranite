import React from 'react'
import { Square, Award, Shield } from 'lucide-react'

const TileFlooringV2Value = () => {
  const values = [
    {
      icon: Square,
      title: 'Premium Materials',
      description: 'Wide selection of premium tiles and flooring. Quality materials that enhance your home\'s beauty.',
      highlight: 'Top Quality'
    },
    {
      icon: Award,
      title: 'Expert Installation',
      description: 'Professional installation by experienced craftsmen. Perfect alignment, lasting results.',
      highlight: '15+ Years'
    },
    {
      icon: Shield,
      title: 'Durability',
      description: 'Built to last with proper installation techniques. Your floors will look beautiful for years.',
      highlight: 'Long-Lasting'
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-white relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(22, 33, 62, 0.1) 20px, rgba(22, 33, 62, 0.1) 22px),
            repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(22, 33, 62, 0.1) 20px, rgba(22, 33, 62, 0.1) 22px)
          `
        }} />
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 border-4 border-navy/10 rotate-45" />
      <div className="absolute bottom-20 left-0 w-48 h-48 border-4 border-gold/20 rotate-12 rounded-lg" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-navy/5 rounded-lg mb-6 border-2 border-navy/10">
            <span className="text-navy font-body font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Perfect Patterns,<br />Lasting Beauty
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Three reasons why Cape Cod homeowners trust us with their tile and flooring
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
                {/* Geometric card */}
                <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-200">
                  {/* Geometric accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-navy/5 to-gold/5 rounded-bl-full" />
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-navy/10 rounded-lg rotate-45" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-navy/5 mb-6 group-hover:bg-navy group-hover:scale-110 transition-all duration-300 shadow-lg border-2 border-navy/10">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-12 text-navy group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                    </div>
                    
                    <div className="inline-block px-4 py-1.5 bg-navy/5 text-navy font-body font-bold text-xs rounded-lg mb-5 border border-navy/10">
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

export default TileFlooringV2Value

