import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      category: 'Kitchens',
      title: 'Modern Cape Cod Kitchen',
      material: 'White Quartzite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762214273/Lucid_Realism_Ultra_realistic_photography_of_a_modern_Cape_Cod_0_1_figk2z.jpg'
    },
    {
      id: 2,
      category: 'Bathrooms',
      title: 'Luxury Master Bathroom',
      material: 'Carrara Marble',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762214870/Lucid_Realism_Hyperrealistic_professional_photograph_of_specta_1_mwtgxp.jpg'
    },
    {
      id: 3,
      category: 'Kitchens',
      title: 'Classic Coastal Kitchen',
      material: 'Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762214274/Lucid_Realism_Photorealistic_Cape_Cod_style_kitchen_interior_p_1_h83mua.jpg'
    },
    {
      id: 4,
      category: 'Outdoor',
      title: 'Outdoor Kitchen Paradise',
      material: 'Weather-Resistant Quartz',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762289780/Default_Fotografia_casual_tirada_com_iPhone_16_Pro_Max_lens_ma_0_fhipeh.jpg'
    },
    {
      id: 5,
      category: 'Kitchens',
      title: 'Contemporary Kitchen Design',
      material: 'Calacatta Quartz',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762214275/Lucid_Realism_Hyperrealistic_professional_photo_of_upscale_Cap_1_mgcdyu.jpg'
    },
    {
      id: 6,
      category: 'Commercial',
      title: 'Restaurant Bar Counter',
      material: 'Durable Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762292982/gemini-2.5-flash-image_Prompt_Ultra-Real%C3%ADstico_-_Hotel_Bar_com_Foco_no_Quartz_Countertop_Fotografia_pr-1_nqi7be.jpg'
    },
    {
      id: 7,
      category: 'Bathrooms',
      title: 'Spa-Like Powder Room',
      material: 'Soapstone',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762214869/Lucid_Realism_Photorealistic_Cape_Cod_luxury_bathroom_interior_0_vmr4r4.jpg'
    },
    {
      id: 8,
      category: 'Kitchens',
      title: 'Farmhouse Style Kitchen',
      material: 'Quartzite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762214274/Lucid_Realism_Ultra_high_definition_photograph_of_contemporary_0_ox7qc1.jpg'
    },
    {
      id: 9,
      category: 'Outdoor',
      title: 'Patio Bar Area',
      material: 'Outdoor Granite',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762289780/Default_Foto_documental_de_reforma_residencial_finalizada_outd_0_blbd6z.jpg'
    },
    {
      id: 13,
      category: 'Outdoor',
      title: 'Luxury Outdoor Entertainment',
      material: 'Premium Stone',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762289779/fcda3ac147d5689f2ce9daa73160ad09_x5rxfk.jpg'
    },
    {
      id: 10,
      category: 'Bathrooms',
      title: 'Modern Guest Bath',
      material: 'Quartz',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762214869/Lucid_Realism_Photorealistic_Cape_Cod_luxury_bathroom_interior_1_aiecor.jpg'
    },
    {
      id: 11,
      category: 'Commercial',
      title: 'Office Reception Counter',
      material: 'Premium Marble',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762292982/gemini-2.5-flash-image_Prompt_Simples_e_Detalhista_-_Close-up_Quartz_Bar_Counter_Fotografia_profissiona-1_kasqqy.jpg'
    },
    {
      id: 12,
      category: 'Kitchens',
      title: 'Elegant Island Kitchen',
      material: 'Statuary Marble',
      image: 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762214273/Lucid_Realism_Ultra_realistic_photography_of_a_modern_Cape_Cod_1_1_a1jy2n.jpg'
    }
  ]

  const filters = ['All', 'Kitchens', 'Bathrooms', 'Outdoor', 'Commercial']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-8 md:mb-12"
        >
          Transformations We're Proud Of
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 md:px-8 md:py-3 rounded-lg font-body font-medium text-sm md:text-base transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gold text-navy shadow-lg'
                  : 'bg-white text-navy hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <PhotoProvider>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                >
                  <PhotoView src={project.image}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* Image with Lazy Loading */}
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Dark Overlay on Hover */}
                      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-all duration-300 flex flex-col justify-end p-6">
                        {/* Caption - Hidden until hover */}
                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                          <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-1">
                            {project.title}
                          </h3>
                          <p className="text-cream font-body text-sm md:text-base mb-4">
                            {project.material}
                          </p>
                          
                          {/* View Project Button */}
                          <motion.button
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-navy font-body font-semibold text-sm rounded-lg hover:bg-gold/90 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation()
                            }}
                          >
                            View Project
                            <svg 
                              className="w-4 h-4" 
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
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </PhotoView>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </PhotoProvider>

        {/* See More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More Projects
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

export default PortfolioGallery

