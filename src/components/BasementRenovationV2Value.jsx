import React from 'react'
import { Home, TrendingUp, Layout } from 'lucide-react'

const BasementRenovationV2Value = () => {
  const values = [
    {
      icon: Home,
      title: 'Additional Space',
      description: 'Transform unused basement into valuable living space. Create the room you\'ve always wanted.',
      highlight: 'More Space'
    },
    {
      icon: TrendingUp,
      title: 'Increase Value',
      description: 'Significantly boost your home\'s market value. Smart investment that pays for itself.',
      highlight: 'ROI Focused'
    },
    {
      icon: Layout,
      title: 'Functional Design',
      description: 'Smart layouts that maximize space and functionality. Every square foot designed with purpose.',
      highlight: 'Smart Design'
    }
  ]

  return (
    <section className="w-full py-24 md:py-40 px-4 lg:px-8 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Spacious background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200">
            <span className="text-gray-600 font-body font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-8 leading-tight">
            Maximize Your Space,<br />Transform Your Home
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Three reasons why Cape Cod homeowners trust us with their basement renovations
          </p>
        </div>

        {/* Spacious grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Spacious card with lots of padding */}
                <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Light accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full opacity-50" />
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gray-50 mb-8 group-hover:bg-gray-100 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-gray-700 group-hover:text-navy transition-colors duration-300" strokeWidth={2} />
                    </div>
                    
                    <div className="inline-block px-5 py-2 bg-gray-50 text-gray-700 font-body font-bold text-xs rounded-full mb-6 border border-gray-200">
                      {value.highlight}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-navy mb-6">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 font-body text-base leading-relaxed max-w-sm mx-auto">
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

export default BasementRenovationV2Value

