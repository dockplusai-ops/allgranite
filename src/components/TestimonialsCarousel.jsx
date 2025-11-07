import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Outstanding work! The team was professional, quick, and the granite looks stunning. Completed in exactly 7 days as promised.",
      name: "Sarah M.",
      location: "Barnstable",
      initial: "SM"
    },
    {
      id: 2,
      quote: "Best price in Cape Cod and the quality is incredible. The free estimate was thorough and accurate.",
      name: "John D.",
      location: "Hyannis",
      initial: "JD"
    },
    {
      id: 3,
      quote: "From selection to installation, everything was perfect. The customer service is exceptional!",
      name: "Lisa T.",
      location: "Dennis",
      initial: "LT"
    },
    {
      id: 4,
      quote: "They transformed our kitchen beyond our expectations. The craftsmanship is flawless and the attention to detail is remarkable.",
      name: "Michael R.",
      location: "Falmouth",
      initial: "MR"
    },
    {
      id: 5,
      quote: "Professional, timely, and beautiful work. The quartz countertops are exactly what we dreamed of. Highly recommend!",
      name: "Jennifer K.",
      location: "Orleans",
      initial: "JK"
    },
    {
      id: 6,
      quote: "The entire process was smooth from start to finish. Great communication and the final result is stunning.",
      name: "David P.",
      location: "Chatham",
      initial: "DP"
    }
  ]

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className="w-5 h-5 fill-gold text-gold"
      />
    ))
  }

  return (
    <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16">
          What Our Customers Say
        </h2>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-md h-full flex flex-col">
                  {/* 5-Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars()}
                  </div>

                  {/* Quote Text */}
                  <div className="relative flex-1 mb-6">
                    <div className="absolute -top-2 -left-2 text-6xl font-display text-gold/20 leading-none">
                      "
                    </div>
                    <p className="text-gray-700 font-body text-base md:text-lg leading-relaxed relative z-10 italic">
                      {testimonial.quote}
                    </p>
                    <div className="absolute -bottom-4 -right-2 text-6xl font-display text-gold/20 leading-none">
                      "
                    </div>
                  </div>

                  {/* Gold Accent Line */}
                  <div className="w-16 h-0.5 bg-gold mb-6"></div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    {/* Initial Circle */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-navy font-body font-bold text-sm md:text-base">
                        {testimonial.initial}
                      </span>
                    </div>

                    {/* Name and Location */}
                    <div>
                      <p className="text-navy font-body font-bold text-base md:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 font-body text-sm md:text-base">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all duration-300 -translate-x-4 md:-translate-x-6">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all duration-300 translate-x-4 md:translate-x-6">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Custom Pagination Dots */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel

