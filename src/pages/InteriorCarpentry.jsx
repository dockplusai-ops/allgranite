import React, { Suspense, lazy, useEffect } from 'react'
import { trackInteriorCarpentryPageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load optimized components
const InteriorCarpentryV2Hero = lazy(() => import('../components/InteriorCarpentryV2Hero'))
const InteriorCarpentryV2Value = lazy(() => import('../components/InteriorCarpentryV2Value'))
const InteriorCarpentryV2SocialProof = lazy(() => import('../components/InteriorCarpentryV2SocialProof'))
const InteriorCarpentryV2Gallery = lazy(() => import('../components/InteriorCarpentryV2Gallery'))
const InteriorCarpentryV2Form = lazy(() => import('../components/InteriorCarpentryV2Form'))
const InteriorCarpentryV2FinalCTA = lazy(() => import('../components/InteriorCarpentryV2FinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const InteriorCarpentry = () => {
  useEffect(() => {
    trackInteriorCarpentryPageView()
  }, [])

  const seoData = {
    title: 'Interior Carpentry Cape Cod | Custom Woodwork & Cabinetry | All Granite & Stone',
    description: 'Expert carpentry and custom woodwork in Cape Cod. Premium materials, master craftsmanship, custom design. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'interior carpentry Cape Cod, custom woodwork, custom cabinets, carpentry services, Cape Cod carpenters, Hyannis carpentry',
    canonical: 'https://www.allgraniteandstone.com/interior-carpentry',
    ogImage: 'https://www.allgraniteandstone.com/og-interior-carpentry.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Interior Carpentry',
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
      'description': 'Custom carpentry and woodwork services including custom cabinets, built-ins, and premium wood craftsmanship.',
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
              <InteriorCarpentryV2Hero />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorCarpentryV2Value />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="500px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorCarpentryV2SocialProof />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorCarpentryV2Gallery />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorCarpentryV2Form />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorCarpentryV2FinalCTA />
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

export default InteriorCarpentry

