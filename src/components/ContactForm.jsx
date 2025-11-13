import React, { useEffect } from 'react'

const ContactForm = () => {
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
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
        <div className="bg-white rounded-lg shadow-lg animate-slide-up overflow-hidden p-6 md:p-8">
          <style>
            {`
              #inline-zRsGmUvk5jOFGIsFM1qc {
                min-height: 856px;
              }
              /* Style GHL form links to match site design */
              #inline-zRsGmUvk5jOFGIsFM1qc a {
                color: #d4af37 !important;
                text-decoration: underline !important;
              }
              #inline-zRsGmUvk5jOFGIsFM1qc a:hover {
                color: #b8941f !important;
              }
            `}
          </style>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/zRsGmUvk5jOFGIsFM1qc"
            style={{
              width: '100%',
              height: '856px',
              border: 'none',
              borderRadius: '3px'
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

