import React, { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { trackPhoneClick } from '../utils/gtm'

/**
 * Mobile Sticky CTA Component
 * Displays a floating call button on mobile devices that appears during scroll
 */
const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024 // lg breakpoint
      setIsMobile(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Show button after scrolling down a bit
    const handleScroll = () => {
      if (isMobile) {
        setIsVisible(window.scrollY > 300)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  // Don't render on desktop
  if (!isMobile) {
    return null
  }

  return (
    <a
      href="tel:5083757785"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-4 bg-gold text-navy font-body font-bold text-base rounded-full shadow-2xl hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      onClick={() => trackPhoneClick('mobile_sticky')}
      aria-label="Call us now"
    >
      <Phone className="w-5 h-5" />
      <span>Call Now</span>
    </a>
  )
}

export default MobileStickyCTA

