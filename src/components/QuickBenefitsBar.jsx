import React from 'react'

const QuickBenefitsBar = () => {
  const benefits = [
    {
      icon: '⚡',
      title: 'QUICK TURNAROUND',
      description: '24hr quotes | 7-day installation'
    },
    {
      icon: '💎',
      title: 'PREMIUM QUALITY',
      description: 'Precision cutting | Expert installation'
    },
    {
      icon: '💰',
      title: 'BEST PRICES',
      description: 'Competitive rates | Free estimates'
    }
  ]

  return (
    <section className="bg-white py-16 px-4 lg:px-8" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="max-w-1200 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-gold" style={{ color: '#d4af37' }}>
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-navy font-body font-bold text-lg md:text-xl mb-2 uppercase tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-gray-600 font-body text-sm md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickBenefitsBar

