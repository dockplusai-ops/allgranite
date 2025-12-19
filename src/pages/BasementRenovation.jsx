import React, { Suspense, lazy, useEffect } from 'react'
import { trackBasementRenovationPageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load optimized components
const BasementRenovationV2Hero = lazy(() => import('../components/BasementRenovationV2Hero'))
const BasementRenovationV2Value = lazy(() => import('../components/BasementRenovationV2Value'))
const BasementRenovationV2SocialProof = lazy(() => import('../components/BasementRenovationV2SocialProof'))
const BasementRenovationV2Gallery = lazy(() => import('../components/BasementRenovationV2Gallery'))
const BasementRenovationV2Form = lazy(() => import('../components/BasementRenovationV2Form'))
const BasementRenovationV2FinalCTA = lazy(() => import('../components/BasementRenovationV2FinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const BasementRenovation = () => {
  useEffect(() => {
    trackBasementRenovationPageView()
  }, [])

  const seoData = {
    title: 'Basement Renovation Cape Cod | Transform Your Basement | All Granite & Stone',
    description: 'Transform your basement into valuable living space in Cape Cod. Functional design, premium finishes, increased home value. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'basement renovation Cape Cod, basement remodeling, basement finishing, Cape Cod basement renovation, Hyannis basement renovation',
    canonical: 'https://www.allgraniteandstone.com/basement-renovation',
    ogImage: 'https://www.allgraniteandstone.com/og-basement-renovation.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Basement Renovation',
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
      'description': 'Complete basement renovation services to transform unused space into valuable living areas with functional design.',
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
        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BasementRenovationV2Hero />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BasementRenovationV2Value />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="500px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BasementRenovationV2SocialProof />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BasementRenovationV2Gallery />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BasementRenovationV2Form />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <BasementRenovationV2FinalCTA />
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

export default BasementRenovation

