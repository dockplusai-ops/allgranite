import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import { trackPhoneClick, trackEmailClick, trackSocialClick, trackServiceClick, trackPortfolioView } from '../utils/gtm'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Kitchen Countertops', href: '/portfolio?filter=Kitchens' },
    { name: 'Bathroom Vanities', href: '/portfolio?filter=Bathrooms' },
    { name: 'Outdoor Kitchens', href: '/portfolio?filter=Outdoor' },
    { name: 'Commercial Projects', href: '/portfolio?filter=Commercial' },
    { name: 'Custom Works', href: '/#quote' }
  ]

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-16">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* COLUMN 1 - Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-white/80 hover:text-gold transition-colors duration-300"
                    onClick={() => {
                      if (link.name === 'Portfolio') {
                        trackPortfolioView('footer')
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2 - Services */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-gold">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="font-body text-white/80 hover:text-gold transition-colors duration-300"
                    onClick={() => trackServiceClick(service.name)}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - Contact Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-gold">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <a
                  href="tel:7742077924"
                  className="font-body text-white/80 hover:text-gold transition-colors duration-300"
                  onClick={() => trackPhoneClick('footer')}
                >
                  (774) 207-7924
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@allgraniteandstone.com"
                  className="font-body text-white/80 hover:text-gold transition-colors duration-300 break-all"
                  onClick={() => trackEmailClick('footer')}
                >
                  info@allgraniteandstone.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="font-body text-white/80">
                  207 Iyannough Rd<br />
                  Hyannis, MA 02601
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="font-body text-white/80">
                  Mon-Fri 8AM-5PM<br />
                  Sat 9AM-3PM
                </span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/allgraniteandstone"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300 group"
                aria-label="Facebook"
                onClick={() => trackSocialClick('facebook')}
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-navy transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/allgraniteandstone/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300 group"
                aria-label="Instagram"
                onClick={() => trackSocialClick('instagram')}
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-navy transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-white/60 text-sm">
              © 2025 All Granite & Stone. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="#privacy"
                className="font-body text-white/60 hover:text-gold text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-white/20">|</span>
              <a
                href="#terms"
                className="font-body text-white/60 hover:text-gold text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

