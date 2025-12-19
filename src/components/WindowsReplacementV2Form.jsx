import React, { useRef, useEffect, useState } from 'react'
import { Phone, Check } from 'lucide-react'
import { trackWindowsReplacementPhoneClick, trackWindowsReplacementFormSubmit } from '../utils/gtm'

const WindowsReplacementV2Form = () => {
  const sectionRef = useRef(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const sectionElement = sectionRef.current
    if (!sectionElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !scriptLoaded) {
            const script = document.createElement('script')
            script.src = 'https://link.msgsndr.com/js/form_embed.js'
            script.async = true
            document.body.appendChild(script)
            setScriptLoaded(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '200px', threshold: 0.01 }
    )

    observer.observe(sectionElement)
    return () => observer.disconnect()
  }, [scriptLoaded])

  const benefits = [
    'Free in-home consultation',
    '24-hour quote response',
    'No obligation estimate',
    'Licensed & insured'
  ]

  return (
    <section 
      ref={sectionRef}
      id="windows-replacement-form" 
      className="w-full py-20 md:py-32 px-4 lg:px-8 bg-gradient-to-br from-navy via-navy/95 to-navy"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-body mb-8 leading-relaxed">
              Tell us about your window replacement project. We'll send you a detailed estimate within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-navy" strokeWidth={3} />
                  </div>
                  <span className="font-body text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="font-body text-white/80 mb-4">Prefer to talk? Call us directly:</p>
              <a
                href="tel:5083757785"
                onClick={() => trackWindowsReplacementPhoneClick('form_section')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy font-body font-bold text-lg rounded-full hover:bg-gold/90 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                (508) 375-7785
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/zRsGmUvk5jOFGIsFM1qc"
              style={{
                width: '100%',
                height: '856px',
                border: 'none',
                borderRadius: '1rem'
              }}
              id="inline-zRsGmUvk5jOFGIsFM1qc"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Windows Replacement Quote"
              data-height="856"
              data-layout-iframe-id="inline-zRsGmUvk5jOFGIsFM1qc"
              data-form-id="zRsGmUvk5jOFGIsFM1qc"
              title="Windows Replacement Quote Form"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WindowsReplacementV2Form

