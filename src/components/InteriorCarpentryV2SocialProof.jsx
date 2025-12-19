import React from 'react'
import { Star } from 'lucide-react'

const InteriorCarpentryV2SocialProof = () => {
  const stats = [
    { number: '250+', label: 'Custom Projects' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' },
    { number: '24h', label: 'Quote Response' }
  ]

  const testimonials = [
    {
      quote: "The custom built-ins they created are absolutely beautiful. Premium wood and master craftsmanship throughout.",
      name: "Thomas H.",
      location: "Orleans",
      rating: 5
    },
    {
      quote: "Perfect custom design that fits our space exactly. The attention to detail in the woodwork is remarkable.",
      name: "Susan P.",
      location: "Eastham",
      rating: 5
    },
    {
      quote: "Expert carpenters who truly understand quality. Our custom cabinets are a work of art.",
      name: "Mark T.",
      location: "Wellfleet",
      rating: 5
    }
  ]

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
    ))
  }

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-cream via-amber-50/20 to-cream relative overflow-hidden">
      {/* Wood texture pattern */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(139, 69, 19, 0.1) 100px, rgba(139, 69, 19, 0.1) 102px)'
      }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats - Wood-themed cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-amber-200 bg-gradient-to-br from-amber-50/50 to-white">
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-amber-800 mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-body text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Natural wood layout */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-100 rounded-lg mb-6 border border-amber-200">
            <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)' }} />
            <span className="text-amber-900 font-body font-bold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            {renderStars(5)}
            <span className="ml-2 text-gray-600 font-body font-medium">4.9/5 from 120+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-amber-200 relative overflow-hidden group"
            >
              {/* Wood grain accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600" style={{ 
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 6px)'
              }} />
              
              <div className="flex gap-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 font-body text-lg leading-relaxed mb-8 italic relative">
                <span className="absolute -top-2 -left-2 text-6xl text-amber-200 font-display">"</span>
                <span className="relative z-10">{testimonial.quote}</span>
              </p>
              <div className="border-t border-amber-100 pt-6">
                <div className="font-body font-bold text-navy text-lg">
                  {testimonial.name}
                </div>
                <div className="font-body text-sm text-gray-500 mt-1">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteriorCarpentryV2SocialProof

