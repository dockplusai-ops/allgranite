import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import QuickBenefitsBar from './components/QuickBenefitsBar'
import ServicesShowcase from './components/ServicesShowcase'
import WhyChooseUs from './components/WhyChooseUs'
import MaterialsShowcase from './components/MaterialsShowcase'
import PortfolioGallery from './components/PortfolioGallery'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import ServiceAreaMap from './components/ServiceAreaMap'
import ContactForm from './components/ContactForm'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'

function HomePage() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      <main id="main-content">
        <Hero />
        <QuickBenefitsBar />
        <ServicesShowcase />
        <WhyChooseUs />
        <MaterialsShowcase />
        <PortfolioGallery />
        <TestimonialsCarousel />
        <ServiceAreaMap />
        <ContactForm />
        <FinalCTASection />
      </main>
      
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

