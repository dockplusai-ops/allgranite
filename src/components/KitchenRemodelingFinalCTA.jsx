import React, { useState, useEffect } from 'react'
import { Phone, Check } from 'lucide-react'
import { trackPhoneClick, trackCTAClick } from '../utils/gtm'

const KitchenRemodelingFinalCTA = () => {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setShowSticky(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToForm = () => {
    const element = document.querySelector('#quote')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const benefits = [
    '24-Hour Quote Response',
    'Free In-Home Consultation',
    'No Obligation Estimate',
    '15+ Years Experience'
  ]

  return (
    <>
      <section className="relative w-full py-20 md:py-32 px-4 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <picture className="absolute inset-0 w-full h-full">
            <source 
              type="image/webp" 
              media="(max-width: 767px)"
              srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_70,w_800/v1762535831/1_o5smft.webp 800w"
            />
            <source 
              type="image/webp" 
              media="(max-width: 1023px)"
              srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_1200/v1762535831/1_o5smft.webp 1200w"
            />
            <source 
              type="image/webp" 
              srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_80,w_1920/v1762535831/1_o5smft.webp 1920w"
            />
            <img
              src="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_70,w_800/v1762535831/1_o5smft.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
          </picture>
          <div className="absolute inset-0 bg-navy opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight">
              Ready to Transform Your Kitchen?
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-cream font-body font-light max-w-3xl mx-auto">
              Get your free estimate today and start your kitchen renovation journey
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:5083757785"
                onClick={() => trackPhoneClick('kitchen_renovation_final_cta_primary')}
                className="inline-flex items-center gap-2 px-10 py-5 md:px-12 md:py-6 bg-gold text-navy font-body font-bold text-xl md:text-2xl rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <Phone className="w-6 h-6 md:w-7 md:h-7" />
                Call Now: (508) 375-7785
              </a>
              <button
                onClick={() => {
                  trackCTAClick('get_quote', 'kitchen_renovation_final_cta')
                  handleScrollToForm()
                }}
                className="inline-flex items-center gap-2 px-10 py-5 md:px-12 md:py-6 border-2 border-gold text-gold font-body font-bold text-xl md:text-2xl rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Request Quote Online
                <svg 
                  className="w-6 h-6 md:w-7 md:h-7" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 pt-8 animate-slide-up">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white"
                >
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-navy" strokeWidth={3} />
                  </div>
                  <span className="font-body font-semibold text-base md:text-lg">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Special Offer */}
            <div className="bg-gold/20 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gold/30 mt-8 animate-slide-up">
              <p className="text-white font-body font-semibold text-lg md:text-xl">
                🎁 Limited Time: Free Design Consultation with Every Kitchen Renovation Quote
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy shadow-2xl border-t border-gold/30 animate-slide-up">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <a
                href="tel:5083757785"
                onClick={() => trackPhoneClick('kitchen_renovation_sticky_mobile')}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gold text-navy font-body font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button
                onClick={() => {
                  trackCTAClick('get_quote', 'kitchen_renovation_sticky_mobile')
                  handleScrollToForm()
                }}
                className="flex-1 px-6 py-3 border-2 border-gold text-gold font-body font-bold text-lg rounded-lg hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default KitchenRemodelingFinalCTA

