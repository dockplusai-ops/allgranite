import React from 'react'
import { Star } from 'lucide-react'

const BasementRenovationV2SocialProof = () => {
  const stats = [
    { number: '200+', label: 'Basements Renovated' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' },
    { number: '24h', label: 'Quote Response' }
  ]

  const testimonials = [
    {
      quote: "Our basement is now a beautiful family room. The transformation added so much value to our home. Excellent work!",
      name: "Richard C.",
      location: "Hyannis",
      rating: 5
    },
    {
      quote: "Smart design that maximized our space. The basement renovation created the perfect home office and entertainment area.",
      name: "Karen D.",
      location: "Barnstable",
      rating: 5
    },
    {
      quote: "The functional design turned our unused basement into valuable living space. Quality work and great results.",
      name: "Paul M.",
      location: "Yarmouth",
      rating: 5
    }
  ]

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
    ))
  }

  return (
    <section className="w-full py-24 md:py-40 px-4 lg:px-8 bg-gradient-to-b from-cream via-white to-gray-50/30 relative overflow-hidden">
      {/* Spacious background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gray-300 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gray-300 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats - Spacious cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-800 mb-4">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-body text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Spacious layout */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200">
            <span className="text-gray-600 font-body font-bold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-8">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-12">
            {renderStars(5)}
            <span className="ml-2 text-gray-600 font-body font-medium">4.9/5 from 100+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden group"
            >
              {/* Light accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full opacity-50" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 font-body text-lg leading-relaxed mb-10 italic relative">
                  <span className="absolute -top-2 -left-2 text-6xl text-gray-200 font-display">"</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                </p>
                <div className="border-t border-gray-100 pt-8">
                  <div className="font-body font-bold text-navy text-lg">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-sm text-gray-500 mt-2">
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

export default BasementRenovationV2SocialProof

