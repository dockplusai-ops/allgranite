import React, { Suspense, lazy, useEffect } from 'react'
import { trackTileFlooringPageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load optimized components
const TileFlooringV2Hero = lazy(() => import('../components/TileFlooringV2Hero'))
const TileFlooringV2Value = lazy(() => import('../components/TileFlooringV2Value'))
const TileFlooringV2SocialProof = lazy(() => import('../components/TileFlooringV2SocialProof'))
const TileFlooringV2Gallery = lazy(() => import('../components/TileFlooringV2Gallery'))
const TileFlooringV2Form = lazy(() => import('../components/TileFlooringV2Form'))
const TileFlooringV2FinalCTA = lazy(() => import('../components/TileFlooringV2FinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const TileFlooring = () => {
  useEffect(() => {
    trackTileFlooringPageView()
  }, [])

  const seoData = {
    title: 'Tile & Flooring Cape Cod | Professional Installation | All Granite & Stone',
    description: 'Expert tile and flooring installation in Cape Cod. Premium materials, professional installation, lasting beauty. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'tile flooring Cape Cod, tile installation, flooring installation, premium tiles, Cape Cod flooring, Hyannis tile installation',
    canonical: 'https://www.allgraniteandstone.com/tile-flooring',
    ogImage: 'https://www.allgraniteandstone.com/og-tile-flooring.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Tile Flooring',
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
      'description': 'Professional tile and flooring installation services with premium materials and expert craftsmanship.',
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
              <TileFlooringV2Hero />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <TileFlooringV2Value />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="500px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <TileFlooringV2SocialProof />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <TileFlooringV2Gallery />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <TileFlooringV2Form />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <TileFlooringV2FinalCTA />
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

export default TileFlooring

