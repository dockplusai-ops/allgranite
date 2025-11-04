import React from 'react'
import { motion } from 'framer-motion'
import { 
  PhoneCall, 
  Gem, 
  Ruler, 
  Settings, 
  Hammer 
} from 'lucide-react'

const ProcessTimeline = () => {
  const steps = [
    {
      number: 1,
      icon: PhoneCall,
      title: 'FREE CONSULTATION',
      description: 'We visit your home or you visit our showroom'
    },
    {
      number: 2,
      icon: Gem,
      title: 'SELECT YOUR STONE',
      description: 'Choose from our extensive collection'
    },
    {
      number: 3,
      icon: Ruler,
      title: 'PRECISION TEMPLATING',
      description: 'Expert measurement at your location'
    },
    {
      number: 4,
      icon: Settings,
      title: 'CUSTOM FABRICATION',
      description: 'Cut and finished to perfection'
    },
    {
      number: 5,
      icon: Hammer,
      title: 'PROFESSIONAL INSTALLATION',
      description: 'Completed in 7 days or less'
    }
  ]

  return (
    <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16"
        >
          Your Journey to Beautiful Stone
        </motion.h2>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gold" style={{ width: 'calc(100% - 120px)', marginLeft: '60px', marginRight: '60px' }}></div>

          {/* Steps */}
          <div className="flex justify-between items-start relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 1
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col items-center flex-1 ${isEven ? 'mt-32' : 'mt-0'}`}
                >
                  {/* Content */}
                  <div className={`text-center mb-4 ${isEven ? 'order-3' : 'order-1'}`}>
                    <h3 className="text-lg font-body font-bold text-navy mb-2 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-body text-sm leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className={`mb-4 ${isEven ? 'order-2' : 'order-2'}`}>
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-navy" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className={`${isEven ? 'order-1' : 'order-3'} relative`}>
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-2xl font-display font-bold text-navy">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet Timeline - Vertical */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Number Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center border-4 border-white shadow-lg">
                        <span className="text-xl font-display font-bold text-navy">
                          {step.number}
                        </span>
                      </div>
                      {/* Icon inside circle on mobile */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-cream border-2 border-gold flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5 text-gold" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-body font-bold text-navy mb-2 uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 font-body text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="#quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessTimeline

