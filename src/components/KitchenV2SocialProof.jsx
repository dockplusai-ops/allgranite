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
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-navy mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-body text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-8">
            {renderStars(5)}
            <span className="ml-2 text-gray-600 font-body">4.9/5 from 200+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 font-body text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-6">
                <div className="font-body font-bold text-navy">
                  {testimonial.name}
                </div>
                <div className="font-body text-sm text-gray-600">
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

export default KitchenV2SocialProof

