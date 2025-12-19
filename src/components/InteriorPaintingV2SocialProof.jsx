import React from 'react'
import { Star } from 'lucide-react'

const InteriorPaintingV2SocialProof = () => {
  const stats = [
    { number: '500+', label: 'Homes Painted' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' },
    { number: '24h', label: 'Quote Response' }
  ]

  const testimonials = [
    {
      quote: "The painting job was flawless. Clean work, beautiful colors, and zero mess. Our home looks brand new!",
      name: "Patricia S.",
      location: "Dennis",
      rating: 5
    },
    {
      quote: "Professional service from start to finish. The paint quality is excellent and the coverage is perfect.",
      name: "David W.",
      location: "Brewster",
      rating: 5
    },
    {
      quote: "They protected all our furniture and left everything spotless. The modern colors transformed our entire home.",
      name: "Nancy B.",
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
      {/* Colorful background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-pink-500 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats - Colorful cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => {
            const colors = [
              'from-blue-500/10 to-cyan-500/10 border-blue-200',
              'from-purple-500/10 to-pink-500/10 border-purple-200',
              'from-amber-500/10 to-orange-500/10 border-amber-200',
              'from-green-500/10 to-emerald-500/10 border-green-200'
            ]
            return (
              <div key={index} className="text-center group">
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 bg-gradient-to-br ${colors[index]}`}>
                  <div className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-br ${
                    index === 0 ? 'from-blue-600 to-cyan-600' :
                    index === 1 ? 'from-purple-600 to-pink-600' :
                    index === 2 ? 'from-amber-600 to-orange-600' :
                    'from-green-600 to-emerald-600'
                  } bg-clip-text text-transparent mb-3`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-body text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials - Vibrant layout */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 border border-blue-200/50">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <span className="text-navy font-body font-bold text-sm uppercase tracking-wider">Testimonials</span>
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
          {testimonials.map((testimonial, index) => {
            const borderColors = [
              'border-blue-200',
              'border-purple-200',
              'border-pink-200'
            ]
            const accentColors = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500',
              'from-pink-500 to-rose-500'
            ]
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 ${borderColors[index]} relative overflow-hidden group`}
              >
                {/* Colorful accent stripe */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColors[index]}`} />
                
                <div className="flex gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 font-body text-lg leading-relaxed mb-8 italic relative">
                  <span className={`absolute -top-2 -left-2 text-6xl bg-gradient-to-br ${accentColors[index]} bg-clip-text text-transparent opacity-20 font-display`}>"</span>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default InteriorPaintingV2SocialProof

