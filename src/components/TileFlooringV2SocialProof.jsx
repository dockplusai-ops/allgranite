import React from 'react'
import { Star } from 'lucide-react'

const TileFlooringV2SocialProof = () => {
  const stats = [
    { number: '400+', label: 'Floors Installed' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' },
    { number: '24h', label: 'Quote Response' }
  ]

  const testimonials = [
    {
      quote: "Beautiful tile installation in our kitchen and bathroom. Professional work and premium materials that look stunning.",
      name: "Carol M.",
      location: "Truro",
      rating: 5
    },
    {
      quote: "The flooring installation was perfect. Expert craftsmanship and attention to detail. Our floors are beautiful.",
      name: "James F.",
      location: "Provincetown",
      rating: 5
    },
    {
      quote: "Great selection of premium tiles and flawless installation. The quality is outstanding and will last for years.",
      name: "Linda G.",
      location: "Harwich",
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
      {/* Geometric tile pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(22, 33, 62, 0.1) 50px, rgba(22, 33, 62, 0.1) 52px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(22, 33, 62, 0.1) 50px, rgba(22, 33, 62, 0.1) 52px)
          `
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats - Geometric cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-navy/10 relative overflow-hidden">
                {/* Geometric accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-navy/5 rounded-bl-full" />
                <div className="absolute top-2 right-2 w-8 h-8 border-2 border-navy/10 rounded-lg rotate-45" />
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-navy mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-body text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Geometric layout */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-navy/5 rounded-lg mb-6 border-2 border-navy/10">
            <span className="text-navy font-body font-bold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            {renderStars(5)}
            <span className="ml-2 text-gray-600 font-body font-medium">4.9/5 from 170+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-gray-200 relative overflow-hidden group"
            >
              {/* Geometric accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy via-gold to-navy" />
              
              {/* Corner geometric accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-navy/5 rounded-bl-full" />
              <div className="absolute top-2 right-2 w-10 h-10 border-2 border-navy/10 rounded-lg rotate-45" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 font-body text-lg leading-relaxed mb-8 italic relative">
                  <span className="absolute -top-2 -left-2 text-6xl text-navy/10 font-display">"</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                </p>
                <div className="border-t-2 border-gray-100 pt-6">
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

export default TileFlooringV2SocialProof

