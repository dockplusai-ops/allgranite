import React, { useEffect, useRef } from 'react'

const ContactForm = () => {
  const formRef = useRef(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    const formElement = formRef.current
    if (!formElement || scriptLoaded.current) return

    // Use Intersection Observer to load script only when form is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !scriptLoaded.current) {
            scriptLoaded.current = true
            
            // Load GHL form embed script
            const script = document.createElement('script')
            script.src = 'https://link.msgsndr.com/js/form_embed.js'
            script.async = true
            document.body.appendChild(script)

            // Stop observing once script is loaded
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '100px', // Start loading 100px before form is visible
        threshold: 0.1
      }
    )

    observer.observe(formElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="quote" className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-body">
            Receive a detailed estimate within 24 hours
          </p>
        </div>

        {/* GHL Form Embed */}
        <div ref={formRef} className="animate-slide-up">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/zRsGmUvk5jOFGIsFM1qc"
            style={{
              width: '100%',
              height: '856px',
              border: 'none'
            }}
            id="inline-zRsGmUvk5jOFGIsFM1qc"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Website"
            data-height="856"
            data-layout-iframe-id="inline-zRsGmUvk5jOFGIsFM1qc"
            data-form-id="zRsGmUvk5jOFGIsFM1qc"
            title="Contact Website"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactForm

