import React from 'react'

const KitchenRemodelingProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'We visit your home to understand your vision and take precise measurements'
    },
    {
      number: '02',
      title: 'Design & Quote',
      description: 'Receive a detailed design proposal and transparent quote within 24 hours'
    },
    {
      number: '03',
      title: 'Material Selection',
      description: 'Choose from our extensive collection of premium stones and materials'
    },
    {
      number: '04',
      title: 'Professional Installation',
      description: 'Our expert team installs everything with precision and care'
    },
    {
      number: '05',
      title: 'Final Inspection',
      description: 'We ensure everything is perfect and provide ongoing support'
    }
  ]

  return (
    <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16 animate-fade-in">
          Our Simple 5-Step Process
        </h2>

        {/* Timeline - Desktop: Horizontal, Mobile: Vertical */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gold/30" style={{ top: '48px' }}></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Mobile Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold/30" style={{ height: 'calc(100% + 2rem)' }}></div>
                )}

                {/* Step Content */}
                <div className="relative bg-cream rounded-lg p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300">
                  {/* Step Number */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center relative z-10">
                    <span className="text-2xl md:text-3xl font-display font-bold text-navy">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg md:text-xl font-body font-bold text-navy mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default KitchenRemodelingProcess

