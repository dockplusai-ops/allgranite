import React from 'react'
import { Check, Phone } from 'lucide-react'
import { trackPhoneClick, trackCTAClick } from '../utils/gtm'

const FinalCTASection = () => {
  const benefits = [
    '24-Hour Quote Response',
    'Free In-Home Consultation',
    'No Obligation Estimate'
  ]

  return (
    <section className="relative w-full py-20 md:py-32 px-4 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-navy opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight">
            Ready to Transform Your Space?
          </h2>

          {/* CTA Button */}
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-10 py-5 md:px-12 md:py-6 bg-gold text-navy font-body font-bold text-xl md:text-2xl rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-2xl hover:scale-105"
            onClick={() => trackCTAClick('get_free_quote', 'final_cta')}
          >
            Get Your Free Quote Today
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
          </a>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="h-px bg-white/30 flex-1 max-w-32"></div>
            <span className="text-white/80 font-body text-base md:text-lg">
              Or call us:
            </span>
            <div className="h-px bg-white/30 flex-1 max-w-32"></div>
          </div>

          {/* Phone Number */}
          <a
            href="tel:7742077924"
            className="inline-flex items-center gap-3 text-white hover:text-gold transition-all duration-300 hover:scale-105"
            onClick={() => trackPhoneClick('final_cta')}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold transition-colors duration-300">
              <Phone className="w-7 h-7 md:w-8 md:h-8 text-gold" />
            </div>
            <span className="text-3xl md:text-4xl lg:text-5xl font-body font-bold">
              (774) 207-7924
            </span>
          </a>

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
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
