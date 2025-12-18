import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { trackKitchenRenovationPhoneClick, trackKitchenRenovationCTAClick } from '../utils/gtm'

const KitchenV2FinalCTA = () => {
  const handleScrollToForm = () => {
    const element = document.querySelector('#kitchen-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative w-full py-20 md:py-32 px-4 lg:px-8 overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-navy">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_30,w_1920/v1762535831/1_o5smft.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
          Ready to Start?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 font-body mb-12 max-w-2xl mx-auto">
          Join 500+ Cape Cod families who transformed their kitchens with us
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:5083757785"
            onClick={() => trackKitchenRenovationPhoneClick('final_cta_primary')}
            className="group flex items-center gap-3 px-10 py-5 bg-gold text-navy font-body font-bold text-xl rounded-full hover:bg-gold/90 transition-all duration-300 shadow-2xl hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Phone className="w-6 h-6" />
            Call Now: (508) 375-7785
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => {
              trackKitchenRenovationCTAClick('get_quote', 'final_cta')
              handleScrollToForm()
            }}
            className="px-10 py-5 border-2 border-white text-white font-body font-bold text-xl rounded-full hover:bg-white hover:text-navy transition-all duration-300 w-full sm:w-auto"
          >
            Get Quote Online
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 font-body text-sm">
            🎁 Limited Time: Free Design Consultation with Every Quote
          </p>
        </div>
      </div>
    </section>
  )
}

export default KitchenV2FinalCTA

