import React from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'
import { trackPhoneClick, trackDirectionsClick } from '../utils/gtm'

const ServiceAreaMap = () => {
  const towns = [
    'Hyannis',
    'Barnstable',
    'Yarmouth',
    'Dennis',
    'Brewster',
    'Harwich',
    'Chatham',
    'Orleans',
    'Eastham',
    'Wellfleet',
    'Truro',
    'Provincetown',
    'Martha\'s Vineyard',
    'Nantucket',
    'South Shore'
  ]

  return (
    <section id="showroom" className="w-full py-16 md:py-20 px-4 lg:px-8 bg-white scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16">
          Proudly Serving Cape Cod & Beyond
        </h2>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN - Map */}
          <div className="relative">
            <div className="bg-cream rounded-lg p-6 md:p-8 shadow-lg relative">
              {/* Map Image */}
              <div className="relative w-full">
                <img
                  src="https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762535830/20_wvpyet.webp"
                  alt="Map of Cape Cod, Nantucket, and Martha's Vineyard service area"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  width="800"
                  height="600"
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Pin Marker at Hyannis Location */}
                <div className="absolute top-[42%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                  {/* Pulse Animation Ring */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold rounded-full opacity-30 animate-ping"></div>
                  
                  {/* Pin Shadow */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black/20 rounded-full blur-sm"></div>
                  
                  {/* Pin */}
                  <svg 
                    width="40" 
                    height="48" 
                    viewBox="0 0 24 32" 
                    className="relative drop-shadow-lg"
                  >
                    <path
                      d="M 12 0 C 5.4 0 0 5.4 0 12 C 0 18.6 12 32 12 32 C 12 32 24 18.6 24 12 C 24 5.4 18.6 0 12 0 Z"
                      fill="#d4af37"
                      stroke="#16213e"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="12" r="6" fill="#16213e" />
                  </svg>
                  
                  {/* Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-navy/90 text-white px-3 py-1 rounded-lg text-xs font-body font-bold whitespace-nowrap">
                    Hyannis
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Towns & Info */}
          <div className="space-y-8">
            {/* Towns Served */}
            <div>
              <h3 className="text-2xl font-display font-bold text-navy mb-4">
                Towns We Serve
              </h3>
              <div className="flex flex-wrap gap-3">
                {towns.map((town, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cream text-navy font-body font-medium rounded-lg hover:bg-gold hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {town}
                  </span>
                ))}
                <span className="px-4 py-2 bg-cream text-navy font-body font-medium rounded-lg">
                  And surrounding areas
                </span>
              </div>
            </div>

            {/* Business Information */}
            <div className="bg-cream rounded-lg p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-display font-bold text-navy mb-6">
                Visit Our Showroom
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-navy font-body font-semibold text-base md:text-lg">
                    207 Iyannough Rd
                  </p>
                  <p className="text-gray-600 font-body text-base">
                    Hyannis, MA 02601
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gold flex-shrink-0" />
                <a
                  href="tel:7742077924"
                  className="text-navy font-body font-semibold text-base md:text-lg hover:text-gold transition-colors duration-300"
                  onClick={() => trackPhoneClick('showroom')}
                >
                  (774) 207-7924
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div className="text-gray-700 font-body text-sm md:text-base">
                  <p className="font-semibold text-navy mb-1">Business Hours:</p>
                  <p>Monday-Friday: 8AM-5PM</p>
                  <p>Saturday: 9AM-3PM</p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=207+Iyannough+Rd,+Hyannis,+MA+02601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg"
              onClick={() => trackDirectionsClick('google_maps')}
            >
              Get Directions
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreaMap

