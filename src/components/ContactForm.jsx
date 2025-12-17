import React, { useEffect, useRef } from 'react'

const ContactForm = () => {
  const sectionRef = useRef(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Helper function to add preconnects dynamically
    const addPreconnects = () => {
      const preconnectUrls = [
        'https://link.msgsndr.com',
        'https://api.leadconnectorhq.com',
        'https://stcdn.leadconnectorhq.com'
      ]

      preconnectUrls.forEach(url => {
        // Check if preconnect already exists
        const existing = document.querySelector(`link[href="${url}"]`)
        if (!existing) {
          const link = document.createElement('link')
          link.rel = 'preconnect'
          link.href = url
          link.crossOrigin = 'anonymous'
          document.head.appendChild(link)

          // Also add dns-prefetch as fallback
          const dnsLink = document.createElement('link')
          dnsLink.rel = 'dns-prefetch'
          dnsLink.href = url
          document.head.appendChild(dnsLink)
        }
      })
    }

    // Helper function to load the script
    const loadScript = () => {
      if (scriptLoadedRef.current) return
      
      // Add preconnects when about to load
      addPreconnects()

      // Small delay to allow preconnect to work
      setTimeout(() => {
        const script = document.createElement('script')
        script.src = 'https://link.msgsndr.com/js/form_embed.js'
        script.async = true
        script.onload = () => {
          scriptLoadedRef.current = true
        }
        document.body.appendChild(script)
      }, 100)
    }

    // Use Intersection Observer to load script when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadScript()
            // Once loaded, we can disconnect the observer
            observer.disconnect()
          }
        })
      },
      {
        // Start loading when section is 200px away from viewport
        rootMargin: '200px',
        threshold: 0
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, []) // Empty deps - observer is set up once on mount

  return (
    <section ref={sectionRef} id="quote" className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream scroll-mt-20 lg:scroll-mt-24">
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
        <div className="animate-slide-up">
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

