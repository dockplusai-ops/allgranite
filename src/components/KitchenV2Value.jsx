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
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Luxurious decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border-4 border-gold rounded-full" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border-4 border-gold/50 rounded-full" />
      </div>
      
      {/* Gold accents */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-gold/20 to-amber-500/20 rounded-full mb-6 border-2 border-gold/30">
            <span className="text-gold font-body font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Luxury Design,<br />Premium Materials
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Three reasons why Cape Cod homeowners trust us with their most important renovation
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
                {/* Luxurious card with gold accents */}
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition-all duration-500 transform hover:-translate-y-3 border-2 border-gold/20 bg-gradient-to-br from-white to-gold/5">
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-bl-full" />
                  
                  {/* Decorative gold line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-gold/20 to-amber-500/20 mb-6 group-hover:from-gold group-hover:to-amber-500 group-hover:scale-110 transition-all duration-300 shadow-lg border-2 border-gold/30">
                      <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-gold group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                    </div>
                    
                    <div className="inline-block px-5 py-2 bg-gradient-to-r from-gold/20 to-amber-500/20 text-gold font-body font-bold text-xs rounded-full mb-5 border border-gold/30">
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

export default KitchenV2Value

