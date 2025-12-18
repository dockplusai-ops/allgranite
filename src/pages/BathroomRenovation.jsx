import React, { Suspense, lazy, useEffect } from 'react'
import { trackBathroomRenovationPageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load optimized components
const BathroomV2Hero = lazy(() => import('../components/BathroomV2Hero'))
const BathroomV2Value = lazy(() => import('../components/BathroomV2Value'))
const BathroomV2SocialProof = lazy(() => import('../components/BathroomV2SocialProof'))
const BathroomV2Gallery = lazy(() => import('../components/BathroomV2Gallery'))
const BathroomV2Form = lazy(() => import('../components/BathroomV2Form'))
const BathroomV2FinalCTA = lazy(() => import('../components/BathroomV2FinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const BathroomRenovation = () => {
  useEffect(() => {
    trackBathroomRenovationPageView()
  }, [])

  const seoData = {
    title: 'Bathroom Remodeling Cape Cod | Complete Bathroom Renovation | All Granite & Stone',
    description: 'Transform your Cape Cod bathroom with our complete remodeling services. Premium vanities, custom showers, bathtubs, tiles & more. Expert installation, licensed & insured. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'bathroom remodeling Cape Cod, bathroom renovation, complete bathroom remodel, bathroom vanities, custom bathroom showers, bathtub installation, tile installation, Cape Cod bathroom design, Hyannis bathroom remodeling',
    canonical: 'https://www.allgraniteandstone.com/bathroom-renovation',
    ogImage: 'https://www.allgraniteandstone.com/og-bathroom-renovation.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Bathroom Remodeling',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'All Granite & Stone',
        'telephone': '(508) 375-7785',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '207 Iyannough Rd',
          'addressLocality': 'Hyannis',
          'addressRegion': 'MA',
          'postalCode': '02601',
          'addressCountry': 'US'
        }
      },
      'areaServed': {
        '@type': 'City',
        'name': ['Hyannis', 'Barnstable', 'Yarmouth', 'Dennis', 'Brewster', 'Harwich', 'Chatham', 'Orleans', 'Eastham', 'Wellfleet', 'Truro', 'Provincetown']
      },
      'description': 'Complete bathroom remodeling services including vanities, showers, bathtubs, tiles, fixtures, and lighting. Expert installation with premium materials.',
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock'
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead {...seoData} />
      <MobileStickyCTA />
      
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <main id="main-content" className="overflow-x-hidden">
        {/* 1. Hero - Ultra-focused */}
        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BathroomV2Hero />
            </Suspense>
          )}
        />

        {/* 2. Value Proposition - 3 Key Benefits */}
        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BathroomV2Value />
            </Suspense>
          )}
        />

        {/* 3. Social Proof - Numbers + Testimonials */}
        <LazySection
          fallbackHeight="500px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BathroomV2SocialProof />
            </Suspense>
          )}
        />

        {/* 4. Gallery - Minimalist Showcase */}
        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BathroomV2Gallery />
            </Suspense>
          )}
        />

        {/* 5. Form - Simplified & Prominent */}
        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BathroomV2Form />
            </Suspense>
          )}
        />

        {/* 6. Final CTA - High Impact */}
        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BathroomV2FinalCTA />
            </Suspense>
          )}
        />
      </main>

      <LazySection
        fallbackHeight="240px"
        render={() => (
          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
        )}
      />
    </div>
  )
}

export default BathroomRenovation

