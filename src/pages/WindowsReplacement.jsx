import React, { Suspense, lazy, useEffect } from 'react'
import { trackWindowsReplacementPageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load optimized components
const WindowsReplacementV2Hero = lazy(() => import('../components/WindowsReplacementV2Hero'))
const WindowsReplacementV2Value = lazy(() => import('../components/WindowsReplacementV2Value'))
const WindowsReplacementV2SocialProof = lazy(() => import('../components/WindowsReplacementV2SocialProof'))
const WindowsReplacementV2Gallery = lazy(() => import('../components/WindowsReplacementV2Gallery'))
const WindowsReplacementV2Form = lazy(() => import('../components/WindowsReplacementV2Form'))
const WindowsReplacementV2FinalCTA = lazy(() => import('../components/WindowsReplacementV2FinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const WindowsReplacement = () => {
  useEffect(() => {
    trackWindowsReplacementPageView()
  }, [])

  const seoData = {
    title: 'Windows Replacement Cape Cod | Energy Efficient Windows | All Granite & Stone',
    description: 'Replace your windows with energy-efficient, modern designs in Cape Cod. Lower bills, better insulation, beautiful aesthetics. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'windows replacement Cape Cod, window replacement, energy efficient windows, Cape Cod windows, Hyannis window replacement',
    canonical: 'https://www.allgraniteandstone.com/windows-replacement',
    ogImage: 'https://www.allgraniteandstone.com/og-windows-replacement.jpg',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Windows Replacement',
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
      'description': 'Energy-efficient window replacement services with modern designs, better insulation, and lower energy bills.',
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
              <WindowsReplacementV2Hero />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <WindowsReplacementV2Value />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="500px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <WindowsReplacementV2SocialProof />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <WindowsReplacementV2Gallery />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="700px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <WindowsReplacementV2Form />
            </Suspense>
          )}
        />

        <LazySection
          fallbackHeight="400px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <WindowsReplacementV2FinalCTA />
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

export default WindowsReplacement

