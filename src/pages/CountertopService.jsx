import React, { Suspense, lazy, useEffect } from 'react'
import { trackCountertopServicePageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load optimized components
const CountertopHero = lazy(() => import('../components/CountertopHero'))
const CountertopValue = lazy(() => import('../components/CountertopValue'))
const CountertopMaterials = lazy(() => import('../components/CountertopMaterials'))
const CountertopSocialProof = lazy(() => import('../components/CountertopSocialProof'))
const CountertopGallery = lazy(() => import('../components/CountertopGallery'))
const CountertopForm = lazy(() => import('../components/CountertopForm'))
const CountertopFinalCTA = lazy(() => import('../components/CountertopFinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const CountertopService = () => {
  useEffect(() => {
    trackCountertopServicePageView()
  }, [])

  const seoData = {
    title: 'Countertop Installation Cape Cod | Premium Kitchen & Bathroom Countertops | All Granite & Stone',
    description: 'Transform your Cape Cod kitchen and bathroom with premium countertop installation. Granite, Marble, Quartz, Quartzite & Soapstone. Expert installation, licensed & insured. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'countertop installation Cape Cod, kitchen countertops, bathroom countertops, granite countertops, marble countertops, quartz countertops, quartzite countertops, soapstone countertops, Cape Cod countertop installation, Hyannis countertops',
    canonical: 'https://www.allgraniteandstone.com/countertop-service',
    ogImage: 'https://www.allgraniteandstone.com/og-countertop-service.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Countertop Installation',
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
      'description': 'Premium countertop installation services for kitchen and bathroom. Expert installation with granite, marble, quartz, quartzite, and soapstone materials.',
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
              <CountertopHero />
            </Suspense>
          )}
        />

        {/* 2. Value Proposition - 3 Key Benefits */}
        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <CountertopValue />
            </Suspense>
          )}
        />

        {/* 3. Materials - Showcase */}
        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <CountertopMaterials />
            </Suspense>
          )}
        />

        {/* 4. Social Proof - Numbers + Testimonials */}
        <LazySection
          fallbackHeight="500px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <CountertopSocialProof />
            </Suspense>
          )}
        />

        {/* 5. Gallery - Minimalist Showcase */}
        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <CountertopGallery />
            </Suspense>
          )}
        />

        {/* 6. Form - Simplified & Prominent */}
        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <CountertopForm />
            </Suspense>
          )}
        />

        {/* 7. Final CTA - High Impact */}
        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <CountertopFinalCTA />
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

export default CountertopService

