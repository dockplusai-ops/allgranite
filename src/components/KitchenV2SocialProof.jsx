import React from 'react'
import { Star } from 'lucide-react'

const KitchenV2SocialProof = () => {
  const stats = [
    { number: '500+', label: 'Kitchens Renovated' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' },
    { number: '24h', label: 'Quote Response' }
  ]

  const testimonials = [
    {
      quote: "Our kitchen transformation exceeded all expectations. The team was professional, the design was perfect, and the installation was flawless.",
      name: "Sarah M.",
      location: "Barnstable",
      rating: 5
    },
    {
      quote: "From consultation to completion, everything was seamless. The custom design perfectly matched our vision, and the quality is outstanding.",
      name: "John D.",
      location: "Hyannis",
      rating: 5
    },
    {
      quote: "The complete kitchen renovation was done in just 10 days as promised. The attention to detail is remarkable. Our kitchen is now the heart of our home.",
      name: "Lisa T.",
      location: "Dennis",
      rating: 5
    }
  ]

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
    ))
  }

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-cream via-white to-cream relative overflow-hidden">
      {/* Luxurious background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-gold/50 rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats - Luxurious cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gold/20 bg-gradient-to-br from-white to-gold/5">
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-br from-navy via-gold to-navy bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-body text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Luxurious layout */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-gold/20 to-amber-500/20 rounded-full mb-6 border-2 border-gold/30">
            <span className="text-gold font-body font-bold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            {renderStars(5)}
            <span className="ml-2 text-gray-600 font-body font-medium">4.9/5 from 200+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition-all duration-500 transform hover:-translate-y-2 border-2 border-gold/20 relative overflow-hidden group bg-gradient-to-br from-white to-gold/5"
            >
              {/* Gold accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold via-amber-400 to-gold" />
              
              {/* Gold corner decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 font-body text-lg leading-relaxed mb-8 italic relative">
                  <span className="absolute -top-2 -left-2 text-6xl text-gold/10 font-display">"</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                </p>
                <div className="border-t-2 border-gold/20 pt-6">
                  <div className="font-body font-bold text-navy text-lg">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-sm text-gray-500 mt-1">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KitchenV2SocialProof

