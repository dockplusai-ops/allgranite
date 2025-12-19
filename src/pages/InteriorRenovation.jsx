import React, { Suspense, lazy, useEffect } from 'react'
import { trackInteriorRenovationPageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load optimized components
const InteriorRenovationV2Hero = lazy(() => import('../components/InteriorRenovationV2Hero'))
const InteriorRenovationV2Value = lazy(() => import('../components/InteriorRenovationV2Value'))
const InteriorRenovationV2SocialProof = lazy(() => import('../components/InteriorRenovationV2SocialProof'))
const InteriorRenovationV2Gallery = lazy(() => import('../components/InteriorRenovationV2Gallery'))
const InteriorRenovationV2Form = lazy(() => import('../components/InteriorRenovationV2Form'))
const InteriorRenovationV2FinalCTA = lazy(() => import('../components/InteriorRenovationV2FinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const InteriorRenovation = () => {
  useEffect(() => {
    trackInteriorRenovationPageView()
  }, [])

  const seoData = {
    title: 'Interior Renovation Cape Cod | Complete Home Renovation | All Granite & Stone',
    description: 'Transform your Cape Cod home with our complete interior renovation services. Custom design, premium materials, expert craftsmanship. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'interior renovation Cape Cod, home renovation, complete interior remodel, custom interior design, Cape Cod interior renovation, Hyannis home renovation',
    canonical: 'https://www.allgraniteandstone.com/interior-renovation',
    ogImage: 'https://www.allgraniteandstone.com/og-interior-renovation.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Interior Renovation',
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
      'description': 'Complete interior renovation services including custom design, premium materials, and expert craftsmanship. Transform your entire home.',
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
              <InteriorRenovationV2Hero />
            </Suspense>
          )}
        />

        {/* 2. Value Proposition - 3 Key Benefits */}
        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorRenovationV2Value />
            </Suspense>
          )}
        />

        {/* 3. Social Proof - Numbers + Testimonials */}
        <LazySection
          fallbackHeight="500px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorRenovationV2SocialProof />
            </Suspense>
          )}
        />

        {/* 4. Gallery - Minimalist Showcase */}
        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorRenovationV2Gallery />
            </Suspense>
          )}
        />

        {/* 5. Form - Simplified & Prominent */}
        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorRenovationV2Form />
            </Suspense>
          )}
        />

        {/* 6. Final CTA - High Impact */}
        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorRenovationV2FinalCTA />
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

export default InteriorRenovation

