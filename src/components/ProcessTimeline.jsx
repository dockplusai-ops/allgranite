import React from 'react'
import { motion } from 'framer-motion'

const ProcessTimeline = () => {
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

        {/* Timeline Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <picture>
            {/* AVIF sources - mobile optimized with lower quality */}
            <source 
              type="image/avif" 
              media="(max-width: 767px)"
              srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_65,w_800/v1762373302/Captura_de_tela_de_2025-11-05_17-07-51_hvyozm.png 800w"
            />
            <source 
              type="image/avif" 
              media="(max-width: 1023px)"
              srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_70,w_1000/v1762373302/Captura_de_tela_de_2025-11-05_17-07-51_hvyozm.png 1000w"
            />
            <source 
              type="image/avif" 
              srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_avif,q_75,w_1200/v1762373302/Captura_de_tela_de_2025-11-05_17-07-51_hvyozm.png 1200w"
            />
            {/* WebP fallback */}
            <source 
              type="image/webp" 
              media="(max-width: 767px)"
              srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_65,w_800/v1762373302/Captura_de_tela_de_2025-11-05_17-07-51_hvyozm.png 800w"
            />
            <source 
              type="image/webp" 
              media="(max-width: 1023px)"
              srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_70,w_1000/v1762373302/Captura_de_tela_de_2025-11-05_17-07-51_hvyozm.png 1000w"
            />
            <source 
              type="image/webp" 
              srcSet="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_75,w_1200/v1762373302/Captura_de_tela_de_2025-11-05_17-07-51_hvyozm.png 1200w"
            />
            {/* Fallback image */}
            <img
              src="https://res.cloudinary.com/dhrxy4yo0/image/upload/f_webp,q_65,w_800/v1762373302/Captura_de_tela_de_2025-11-05_17-07-51_hvyozm.png"
              alt="Process timeline - Your Journey to Beautiful Stone"
              width="1200"
              height="400"
              loading="lazy"
              decoding="async"
              className="w-full max-w-6xl h-auto rounded-lg shadow-lg"
            />
          </picture>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
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

