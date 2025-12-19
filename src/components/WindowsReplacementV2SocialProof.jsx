import React from 'react'
import { Star } from 'lucide-react'

const WindowsReplacementV2SocialProof = () => {
  const stats = [
    { number: '600+', label: 'Windows Replaced' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' },
    { number: '24h', label: 'Quote Response' }
  ]

  const testimonials = [
    {
      quote: "Our energy bills dropped significantly after the window replacement. Beautiful windows and great insulation.",
      name: "Steven R.",
      location: "Dennis",
      rating: 5
    },
    {
      quote: "Modern, efficient windows that transformed our home. Better light, less noise, and lower heating costs.",
      name: "Maria L.",
      location: "Brewster",
      rating: 5
    },
    {
      quote: "Professional installation and excellent quality. The new windows look great and our home is much more comfortable.",
      name: "Daniel K.",
      location: "Chatham",
      rating: 5
    }
  ]

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
    ))
  }

  return (
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-b from-cream via-white to-blue-50/20 relative overflow-hidden">
      {/* Light rays background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-yellow-200 to-transparent" style={{ transform: 'rotate(10deg)' }} />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-yellow-200 to-transparent" style={{ transform: 'rotate(-10deg)' }} />
      </div>
      
      {/* Light glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-100/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats - Light, airy cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 bg-gradient-to-br from-white to-yellow-50/20">
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-800 mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-body text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Clean, light layout */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-yellow-50 rounded-full mb-6 border border-yellow-100">
            <span className="text-yellow-700 font-body font-bold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            {renderStars(5)}
            <span className="ml-2 text-gray-600 font-body font-medium">4.9/5 from 250+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden group bg-gradient-to-br from-white to-blue-50/10"
            >
              {/* Light accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-50 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 font-body text-lg leading-relaxed mb-8 italic relative">
                  <span className="absolute -top-2 -left-2 text-6xl text-yellow-100 font-display">"</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                </p>
                <div className="border-t border-gray-100 pt-6">
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

export default WindowsReplacementV2SocialProof

