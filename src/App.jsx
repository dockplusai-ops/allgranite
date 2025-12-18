import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import LazySection from './components/LazySection'

const QuickBenefitsBar = lazy(() => import('./components/QuickBenefitsBar'))
const ServicesShowcase = lazy(() => import('./components/ServicesShowcase'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const MaterialsShowcase = lazy(() => import('./components/MaterialsShowcase'))
const PortfolioGallery = lazy(() => import('./components/PortfolioGallery'))
const TestimonialsCarousel = lazy(() => import('./components/TestimonialsCarousel'))
const ServiceAreaMap = lazy(() => import('./components/ServiceAreaMap'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const FinalCTASection = lazy(() => import('./components/FinalCTASection'))
const Footer = lazy(() => import('./components/Footer'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const KitchenRenovation = lazy(() => import('./pages/KitchenRenovation'))
const KitchenRenovationV2 = lazy(() => import('./pages/KitchenRenovationV2'))
const BathroomRenovation = lazy(() => import('./pages/BathroomRenovation'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

function HomePage() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      <main id="main-content">
          <Hero />
          <LazySection
            fallbackHeight="260px"
            render={() => (
              <Suspense fallback={<SectionFallback />}>
                <QuickBenefitsBar />
              </Suspense>
            )}
          />
          <LazySection
            fallbackHeight="360px"
            render={() => (
              <Suspense fallback={<SectionFallback />}>
                <ServicesShowcase />
              </Suspense>
            )}
          />
          <LazySection
            fallbackHeight="360px"
            render={() => (
              <Suspense fallback={<SectionFallback />}>
                <WhyChooseUs />
              </Suspense>
            )}
          />
          <LazySection
            fallbackHeight="420px"
            render={() => (
              <Suspense fallback={<SectionFallback />}>
                <MaterialsShowcase />
              </Suspense>
            )}
          />
          <LazySection
            fallbackHeight="420px"
            render={() => (
              <Suspense fallback={<SectionFallback />}>
                <PortfolioGallery />
              </Suspense>
            )}
          />
          <LazySection
            fallbackHeight="420px"
            render={() => (
              <Suspense fallback={<SectionFallback />}>
                <TestimonialsCarousel />
              </Suspense>
            )}
          />
          <Suspense fallback={<SectionFallback />}>
            <ServiceAreaMap />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ContactForm />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <FinalCTASection />
          </Suspense>
      </main>
      
      <LazySection
        fallbackHeight="240px"
        render={() => (
          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
        )}
      />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/portfolio"
            element={(
              <Suspense fallback={<SectionFallback />}>
                <Portfolio />
              </Suspense>
            )}
          />
          <Route
            path="/privacy-policy"
            element={(
              <Suspense fallback={<SectionFallback />}>
                <PrivacyPolicy />
              </Suspense>
            )}
          />
          <Route
            path="/terms-of-service"
            element={(
              <Suspense fallback={<SectionFallback />}>
                <TermsOfService />
              </Suspense>
            )}
          />
          <Route
            path="/kitchen-renovation"
            element={(
              <Suspense fallback={<SectionFallback />}>
                <KitchenRenovation />
              </Suspense>
            )}
          />
          <Route
            path="/kitchen-renovation-v2"
            element={(
              <Suspense fallback={<SectionFallback />}>
                <KitchenRenovationV2 />
              </Suspense>
            )}
          />
          <Route
            path="/bathroom-renovation"
            element={(
              <Suspense fallback={<SectionFallback />}>
                <BathroomRenovation />
              </Suspense>
            )}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

