import React, { Suspense, lazy, useEffect } from 'react'
import { trackInteriorPaintingPageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load optimized components
const InteriorPaintingV2Hero = lazy(() => import('../components/InteriorPaintingV2Hero'))
const InteriorPaintingV2Value = lazy(() => import('../components/InteriorPaintingV2Value'))
const InteriorPaintingV2SocialProof = lazy(() => import('../components/InteriorPaintingV2SocialProof'))
const InteriorPaintingV2Gallery = lazy(() => import('../components/InteriorPaintingV2Gallery'))
const InteriorPaintingV2Form = lazy(() => import('../components/InteriorPaintingV2Form'))
const InteriorPaintingV2FinalCTA = lazy(() => import('../components/InteriorPaintingV2FinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const InteriorPainting = () => {
  useEffect(() => {
    trackInteriorPaintingPageView()
  }, [])

  const seoData = {
    title: 'Interior Painting Cape Cod | Professional Painting Services | All Granite & Stone',
    description: 'Transform your Cape Cod home with professional interior painting. Premium paint, modern colors, clean work. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'interior painting Cape Cod, professional painting, home painting, premium paint, Cape Cod painters, Hyannis painting services',
    canonical: 'https://www.allgraniteandstone.com/interior-painting',
    ogImage: 'https://www.allgraniteandstone.com/og-interior-painting.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Interior Painting',
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
      'description': 'Professional interior painting services with premium paint, modern colors, and clean professional work.',
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
              <InteriorPaintingV2Hero />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorPaintingV2Value />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="500px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorPaintingV2SocialProof />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorPaintingV2Gallery />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorPaintingV2Form />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <InteriorPaintingV2FinalCTA />
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

export default InteriorPainting

