import React, { useState, useEffect } from 'react'
import { Phone, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trackInteriorCarpentryPhoneClick, trackInteriorCarpentryCTAClick, trackPhoneClick } from '../utils/gtm'

const InteriorCarpentryV2Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeroLoaded, setIsHeroLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleScrollToForm = () => {
    const element = document.querySelector('#interior-carpentry-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const heroImage = {
    avif: {
      xl: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_80,w_1920/v1762535831/1_o5smft.webp',
      md: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_1200/v1762535831/1_o5smft.webp',
      sm: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_70,w_800/v1762535831/1_o5smft.webp'
    },
    webp: {
      xl: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_80,w_1920/v1762535831/1_o5smft.webp',
      md: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_1200/v1762535831/1_o5smft.webp',
      sm: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_70,w_800/v1762535831/1_o5smft.webp'
    }
  }

  const quickBenefits = [
    'Custom Woodwork',
    'Premium Materials',
    '15+ Years Experience'
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-navy/60 transition-opacity duration-700 ${isHeroLoaded ? 'opacity-100' : 'opacity-0'}`} />
        <picture className={`absolute inset-0 transition-opacity duration-700 ${isHeroLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <source type="image/avif" media="(min-width: 1024px)" srcSet={heroImage.avif.xl} />
          <source type="image/avif" media="(min-width: 768px)" srcSet={heroImage.avif.md} />
          <source type="image/avif" srcSet={heroImage.avif.sm} />
          <source type="image/webp" media="(min-width: 1024px)" srcSet={heroImage.webp.xl} />
          <source type="image/webp" media="(min-width: 768px)" srcSet={heroImage.webp.md} />
          <source type="image/webp" srcSet={heroImage.webp.sm} />
          <img
            src={heroImage.webp.sm}
            alt="Custom interior carpentry"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="h-full w-full object-cover"
            onLoad={() => setIsHeroLoaded(true)}
            aria-hidden="true"
          />
        </picture>
      </div>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className={`relative transition-all duration-300 ${
                isScrolled ? 'w-20 h-20 lg:w-24 lg:h-24' : 'w-24 h-24 lg:w-32 lg:h-32'
              }`}>
                <picture>
                  <source 
                    type="image/avif" 
                    media="(max-width: 1023px)"
                    srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_70,w_112/v1762537584/anjexfa3kt2o4wvtdu8r_gmd4vt.avif"
                  />
                  <source 
                    type="image/avif" 
                    srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_144/v1762537584/anjexfa3kt2o4wvtdu8r_gmd4vt.avif"
                  />
                  <img 
                    src="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_70,w_112/v1762537584/anjexfa3kt2o4wvtdu8r_gmd4vt.avif"
                    alt="All Granite & Stone"
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </picture>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:5083757785"
                onClick={() => trackPhoneClick('hero_desktop')}
                className="flex items-center gap-2 px-6 py-2.5 bg-gold text-navy font-body font-bold rounded-full hover:bg-gold/90 transition-all duration-300 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-navy/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <a
              href="tel:5083757785"
              onClick={() => {
                trackPhoneClick('hero_mobile')
                setIsMobileMenuOpen(false)
              }}
              className="flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-bold text-lg rounded-full"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <button
              onClick={() => {
                handleScrollToForm()
                setIsMobileMenuOpen(false)
              }}
              className="text-white font-body text-lg"
            >
              Get Quote
            </button>
            <Link to="/" className="text-white font-body text-lg" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </div>
        </div>
      )}

      {/* Hero Content - Wood-themed Layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 lg:px-8 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              {/* Wood grain badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/30 backdrop-blur-sm rounded-lg mb-6 border border-amber-800/40">
                <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)' }} />
                <span className="text-amber-100 font-body text-sm font-semibold uppercase tracking-wider">Master Craftsmanship</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-6 leading-tight">
                Custom Interior
                <span className="block text-amber-300 mt-2" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3)' }}>Carpentry</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-body font-light mb-8 max-w-2xl mx-auto lg:mx-0">
                Expert carpentry and custom woodwork. Premium materials, master craftsmanship. Bring your vision to life.
              </p>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
                <a
                  href="tel:5083757785"
                  onClick={() => trackInteriorCarpentryPhoneClick('hero_primary')}
                  className="group flex items-center gap-3 px-10 py-5 bg-amber-600 text-white font-body font-bold text-lg md:text-xl rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-2xl hover:scale-105 w-full sm:w-auto justify-center border border-amber-500/50"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  Call for Free Estimate
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => {
                    trackInteriorCarpentryCTAClick('get_quote', 'hero')
                    handleScrollToForm()
                  }}
                  className="px-10 py-5 border-2 border-white text-white font-body font-bold text-lg md:text-xl rounded-lg hover:bg-white hover:text-navy transition-all duration-300 w-full sm:w-auto"
                >
                  Get Quote Online
                </button>
              </div>

              {/* Quick Benefits - Wood-themed */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {quickBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 bg-amber-900/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-800/40">
                    <Check className="w-4 h-4 text-amber-300 flex-shrink-0" strokeWidth={3} />
                    <span className="text-white/90 font-body text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Wood types showcase */}
            <div className="hidden lg:block">
              <div className="bg-amber-900/20 backdrop-blur-md rounded-2xl p-8 border border-amber-800/30 shadow-2xl">
                <h3 className="text-white font-display font-bold text-2xl mb-6 text-center">Premium Wood Types</h3>
                <div className="space-y-4">
                  {['Oak', 'Maple', 'Walnut', 'Cherry'].map((wood, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-amber-900/20 rounded-xl border border-amber-800/20 hover:bg-amber-900/30 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-700 to-amber-900" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)' }} />
                      <div>
                        <p className="text-white font-body font-bold">{wood}</p>
                        <p className="text-amber-200 font-body text-xs">Premium Quality</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteriorCarpentryV2Hero

