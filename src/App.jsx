import React from 'react'
import Hero from './components/Hero'
import QuickBenefitsBar from './components/QuickBenefitsBar'
import ServicesShowcase from './components/ServicesShowcase'
import MaterialsShowcase from './components/MaterialsShowcase'
import PortfolioGallery from './components/PortfolioGallery'
import ProcessTimeline from './components/ProcessTimeline'
import WhyChooseUs from './components/WhyChooseUs'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import ServiceAreaMap from './components/ServiceAreaMap'
import ContactForm from './components/ContactForm'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      <main id="main-content">
        <Hero />
        <QuickBenefitsBar />
        <ServicesShowcase />
        <MaterialsShowcase />
        <PortfolioGallery />
        <ProcessTimeline />
        <WhyChooseUs />
        <TestimonialsCarousel />
        <ServiceAreaMap />
        <ContactForm />
        <FinalCTASection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App

