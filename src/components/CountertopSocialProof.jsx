import React from 'react'
import { Star } from 'lucide-react'

const CountertopSocialProof = () => {
  const stats = [
    { number: '1000+', label: 'Countertops Installed' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' },
    { number: '24h', label: 'Quote Response' }
  ]

  const testimonials = [
    {
      quote: "Our new granite countertops transformed our kitchen completely. The installation was flawless and the quality is outstanding. Highly recommend!",
      name: "Michael R.",
      location: "Hyannis",
      rating: 5
    },
    {
      quote: "We chose quartz countertops for our bathroom and couldn't be happier. The team was professional, on-time, and the result is beautiful.",
      name: "Jennifer L.",
      location: "Barnstable",
      rating: 5
    },
    {
      quote: "The marble countertops in our kitchen are absolutely stunning. The installation process was smooth and the craftsmanship is top-notch.",
      name: "Robert K.",
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
    <section className="w-full py-20 md:py-32 px-4 lg:px-8 bg-white">
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
              className="bg-cream rounded-2xl p-8 shadow-lg"
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

export default CountertopSocialProof

