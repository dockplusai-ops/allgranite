import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X } from 'lucide-react'

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762214275/Lucid_Realism_Hyperrealistic_professional_photo_of_upscale_Cap_1_mgcdyu.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-navy opacity-30"></div>
      </div>

      {/* Sticky Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white lg:bg-navy/95 backdrop-blur-sm shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762217425/Lucid_Realism_Highend_3D_logo_design_isolated_on_transparent_b_0-removebg-preview_n87fhr.png"
                  alt="All Granite & Stone Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className={`font-display text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-navy lg:text-white' : 'text-white'
              }`}>
                All Granite & Stone
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="tel:7742077924" className="text-cream hover:text-gold transition-colors font-body font-medium">
                Phone
              </a>
              <a href="#showroom" className="text-cream hover:text-gold transition-colors font-body font-medium">
                Showroom
              </a>
              <a href="#quote" className="text-cream hover:text-gold transition-colors font-body font-medium">
                Get Quote
              </a>
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
      </motion.header>

      {/* Mobile Hamburger Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-navy/90 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl"
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
                      <a
                        href="#home"
                        className="block py-3 text-navy font-body font-medium hover:text-gold transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        className="block py-3 text-navy font-body font-medium hover:text-gold transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#gallery"
                        className="block py-3 text-navy font-body font-medium hover:text-gold transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="block py-3 text-navy font-body font-medium hover:text-gold transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contact
                      </a>
                    </li>
                    <li className="pt-4 border-t border-gray-200">
                      <a
                        href="tel:7742077924"
                        className="flex items-center gap-2 py-3 px-4 bg-gold text-navy font-body font-bold rounded-lg hover:bg-gold/90 transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Phone className="w-5 h-5" />
                        Call Now
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quote"
                        className="flex items-center gap-2 py-3 px-4 border-2 border-gold text-gold font-body font-bold rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get Quote
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Spacer for fixed header */}
        <div className="h-24 lg:h-28"></div>

        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center px-4 lg:px-8">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-tight animate-slide-up">
              Transform Your Cape Cod Home with Exquisite Stone Craftsmanship
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-cream mb-12 font-body font-light max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Premium Granite, Marble, Quartz & Quartzite | Expert Installation | Quick Turnaround | Free Estimates
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="tel:7742077924"
                className="w-full sm:w-auto px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Call Now: (774) 207-7924
              </a>
              <a
                href="#quote"
                className="w-full sm:w-auto px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </a>
              <a
                href="#showroom"
                className="w-full sm:w-auto px-8 py-4 border-2 border-gold text-gold font-body font-semibold text-lg rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 transform hover:scale-105"
              >
                Visit Showroom
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-cream font-body text-sm md:text-base animate-slide-up" style={{ animationDelay: '0.6s' }}>
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

      {/* Mobile Sticky Call Button */}
      <motion.a
        href="tel:7742077924"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-gold/95 backdrop-blur-sm text-navy font-body font-bold text-lg py-4 px-6 text-center shadow-2xl hover:bg-gold transition-colors duration-300"
      >
        <span className="text-2xl mr-2">📞</span>
        Call Now: (774) 207-7924
      </motion.a>
    </div>
  )
}

export default Hero

