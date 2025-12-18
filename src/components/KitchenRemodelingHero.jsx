import React, { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trackKitchenRenovationPhoneClick, trackKitchenRenovationCTAClick, trackPhoneClick, trackPortfolioView } from '../utils/gtm'

const KitchenRemodelingHero = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeroLoaded, setIsHeroLoaded] = useState(false)

  // Hero image sources with AVIF (preferred) and WebP (fallback) formats
  const heroImageSources = {
    avif: {
      xl: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_1920/v1762535831/1_o5smft.webp',
      lg: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_1440/v1762535831/1_o5smft.webp',
      md: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_800/v1762535831/1_o5smft.webp',
      sm: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_72,w_320/v1762535831/1_o5smft.webp'
    },
    webp: {
      xl: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_1920/v1762535831/1_o5smft.webp',
      lg: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_1440/v1762535831/1_o5smft.webp',
      md: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_800/v1762535831/1_o5smft.webp',
      sm: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_72,w_320/v1762535831/1_o5smft.webp'
    }
  }

  const handleScrollToForm = () => {
    const element = document.querySelector('#quote')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSectionClick = (hash) => {
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleMenuNavigation = (hash) => {
    handleSectionClick(hash)
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
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

  const desktopPhoneButtonClasses = `flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300 text-sm font-body font-semibold ${
    isScrolled
      ? 'border-gold bg-gold text-navy hover:bg-gold/90 hover:text-navy'
      : 'border-cream/80 text-cream hover:bg-cream hover:text-navy'
  }`

  return (
    <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-navy via-navy/70 to-navy/40 transition-opacity duration-700 ${
            isHeroLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />
        <picture className={`absolute inset-0 transition-opacity duration-700 ${isHeroLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* AVIF sources (preferred format for better compression) */}
          <source type="image/avif" media="(min-width: 1280px)" srcSet={heroImageSources.avif.xl} />
          <source type="image/avif" media="(min-width: 1024px)" srcSet={heroImageSources.avif.lg} />
          <source type="image/avif" media="(min-width: 768px)" srcSet={heroImageSources.avif.md} />
          <source type="image/avif" srcSet={heroImageSources.avif.sm} />
          {/* WebP sources (fallback) */}
          <source type="image/webp" media="(min-width: 1280px)" srcSet={heroImageSources.webp.xl} />
          <source type="image/webp" media="(min-width: 1024px)" srcSet={heroImageSources.webp.lg} />
          <source type="image/webp" media="(min-width: 768px)" srcSet={heroImageSources.webp.md} />
          <source type="image/webp" srcSet={heroImageSources.webp.sm} />
          {/* Fallback image */}
          <img
            src={heroImageSources.webp.sm}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
            alt="Beautiful kitchen renovation with premium stone countertops"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="h-full w-full object-cover"
            aria-hidden="true"
            onLoad={() => setIsHeroLoaded(true)}
          />
        </picture>
        <div className="absolute inset-0 bg-navy opacity-30"></div>
      </div>

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white lg:bg-navy/95 backdrop-blur-sm shadow-lg py-2'
            : 'bg-transparent py-0'
        }`}
      >
        <nav className={`container mx-auto px-4 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-0' : 'py-0'}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className={`relative flex-shrink-0 transition-all duration-300 ${
                isScrolled 
                  ? 'w-20 h-20 lg:w-28 lg:h-28 -my-2' 
                  : 'w-28 h-28 lg:w-36 lg:h-36 -my-4'
              }`}>
                <picture>
                  <source 
                    type="image/avif" 
                    media="(max-width: 1023px)"
                    srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_70,w_112/v1762537584/anjexfa3kt2o4wvtdu8r_gmd4vt.avif 112w"
                  />
                  <source 
                    type="image/avif" 
                    srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_144/v1762537584/anjexfa3kt2o4wvtdu8r_gmd4vt.avif 144w"
                  />
                  <source 
                    type="image/webp" 
                    media="(max-width: 1023px)"
                    srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_70,w_112/v1762537584/anjexfa3kt2o4wvtdu8r_gmd4vt.avif 112w"
                  />
                  <source 
                    type="image/webp" 
                    srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_144/v1762537584/anjexfa3kt2o4wvtdu8r_gmd4vt.avif 144w"
                  />
                  <img 
                    src="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_70,w_112/v1762537584/anjexfa3kt2o4wvtdu8r_gmd4vt.avif"
                    alt="All Granite & Stone Logo"
                    sizes="(min-width: 1024px) 144px, 112px"
                    width="144"
                    height="111"
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </picture>
              </div>
            </Link>

            {/* Mobile Call Us Button */}
            <a 
              href="tel:5083757785" 
              className={`lg:hidden flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-sm font-body font-semibold ${
                isScrolled
                  ? 'border-navy/70 text-navy hover:bg-navy hover:text-white'
                  : 'border-cream/80 text-cream hover:bg-cream hover:text-navy'
              }`}
              onClick={() => trackPhoneClick('hero_mobile_navbar')}
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a 
                href="tel:5083757785" 
                className={desktopPhoneButtonClasses}
                onClick={() => trackPhoneClick('hero_desktop')}
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <button 
                onClick={() => handleSectionClick('#quote')} 
                className={`transition-colors font-body font-medium ${
                  isScrolled 
                    ? 'text-white hover:text-gold' 
                    : 'text-cream hover:text-gold'
                }`}
              >
                Get Quote
              </button>
              <Link
                to="/"
                className={`transition-colors font-body font-medium ${
                  isScrolled 
                    ? 'text-white hover:text-gold' 
                    : 'text-cream hover:text-gold'
                }`}
              >
                Home
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden focus:outline-none z-50 transition-colors duration-300 ${
                isScrolled ? 'text-navy lg:text-cream' : 'text-cream'
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Mobile Hamburger Menu Overlay */}
      <div
        className={`fixed inset-0 bg-navy/90 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy hover:text-gold transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 px-6 py-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block py-3 text-navy font-body font-medium hover:text-gold transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleMenuNavigation('#quote')}
                  className="w-full text-left py-3 text-navy font-body font-medium hover:text-gold transition-colors duration-300"
                >
                  Get Quote
                </button>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="block py-3 text-navy font-body font-medium hover:text-gold transition-colors duration-300"
                  onClick={() => {
                    trackPortfolioView('header')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-200">
                <a
                  href="tel:5083757785"
                  className="flex items-center gap-2 py-3 px-4 bg-gold text-navy font-body font-bold rounded-lg hover:bg-gold/90 transition-colors duration-300"
                  onClick={() => {
                    trackPhoneClick('hero_mobile')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[600px] md:min-h-[700px] lg:min-h-screen flex flex-col">
        {/* Spacer for fixed header */}
        <div className="h-32 md:h-24 lg:h-14"></div>

        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center px-4 lg:px-8 pt-8 md:pt-0">
          <div className="text-center max-w-5xl mx-auto">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-tight px-2 animate-fade-in">
              Transform Your Kitchen Into Your Dream Space
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-cream mb-12 font-body font-light max-w-4xl mx-auto animate-fade-in">
              Complete Kitchen Renovation | Custom Design | Professional Installation | Premium Materials
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
              <a
                href="tel:5083757785"
                onClick={() => trackKitchenRenovationPhoneClick('hero_primary')}
                className="w-full sm:w-auto px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now for Free Estimate
              </a>
              <button
                onClick={() => {
                  trackKitchenRenovationCTAClick('get_quote', 'hero')
                  handleScrollToForm()
                }}
                className="w-full sm:w-auto px-8 py-4 border-2 border-gold text-gold font-body font-semibold text-lg rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 transform hover:scale-105"
              >
                Request Quote Online
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-cream font-body text-sm md:text-base animate-fade-in">
              <div className="flex items-center gap-2">
                <span className="text-gold text-xl">⭐⭐⭐⭐⭐</span>
                <span>5-Star Reviews</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-cream rounded-full"></div>
              <div>Licensed & Insured</div>
              <div className="hidden sm:block w-1 h-1 bg-cream rounded-full"></div>
              <div>15+ Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KitchenRemodelingHero

