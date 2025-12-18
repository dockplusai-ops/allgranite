import React, { Suspense, lazy, useEffect } from 'react'
import { trackKitchenRenovationPageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load optimized components
const KitchenV2Hero = lazy(() => import('../components/KitchenV2Hero'))
const KitchenV2Value = lazy(() => import('../components/KitchenV2Value'))
const KitchenV2SocialProof = lazy(() => import('../components/KitchenV2SocialProof'))
const KitchenV2Gallery = lazy(() => import('../components/KitchenV2Gallery'))
const KitchenV2Form = lazy(() => import('../components/KitchenV2Form'))
const KitchenV2FinalCTA = lazy(() => import('../components/KitchenV2FinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const KitchenRenovationV2 = () => {
  useEffect(() => {
    trackKitchenRenovationPageView()
  }, [])

  const seoData = {
    title: 'Kitchen Remodeling Cape Cod | Complete Kitchen Renovation | All Granite & Stone',
    description: 'Transform your Cape Cod kitchen with our complete remodeling services. Premium countertops, custom cabinets, islands, backsplash & more. Expert installation, licensed & insured. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'kitchen remodeling Cape Cod, kitchen renovation, complete kitchen remodel, kitchen countertops, custom kitchen cabinets, kitchen island, backsplash installation, Cape Cod kitchen design, Hyannis kitchen remodeling',
    canonical: 'https://www.allgraniteandstone.com/kitchen-renovation-v2',
    ogImage: 'https://www.allgraniteandstone.com/og-kitchen-renovation.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Kitchen Remodeling',
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
      'description': 'Complete kitchen remodeling services including countertops, cabinets, islands, backsplash, sinks, faucets, and lighting. Expert installation with premium materials.',
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
              <KitchenV2Hero />
            </Suspense>
          )}
        />

        {/* 2. Value Proposition - 3 Key Benefits */}
        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenV2Value />
            </Suspense>
          )}
        />

        {/* 3. Social Proof - Numbers + Testimonials */}
        <LazySection
          fallbackHeight="500px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenV2SocialProof />
            </Suspense>
          )}
        />

        {/* 4. Gallery - Minimalist Showcase */}
        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenV2Gallery />
            </Suspense>
          )}
        />

        {/* 5. Form - Simplified & Prominent */}
        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenV2Form />
            </Suspense>
          )}
        />

        {/* 6. Final CTA - High Impact */}
        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenV2FinalCTA />
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

export default KitchenRenovationV2

