import React, { Suspense, lazy, useEffect } from 'react'
import { trackKitchenRenovationPageView } from '../utils/gtm'
import LazySection from '../components/LazySection'
import SEOHead from '../components/SEOHead'
import MobileStickyCTA from '../components/MobileStickyCTA'

// Lazy load components for kitchen remodeling page
const KitchenRemodelingHero = lazy(() => import('../components/KitchenRemodelingHero'))
const KitchenRemodelingBenefits = lazy(() => import('../components/KitchenRemodelingBenefits'))
const KitchenRemodelingServices = lazy(() => import('../components/KitchenRemodelingServices'))
const KitchenRemodelingProcess = lazy(() => import('../components/KitchenRemodelingProcess'))
const KitchenRemodelingGallery = lazy(() => import('../components/KitchenRemodelingGallery'))
const KitchenRemodelingTestimonials = lazy(() => import('../components/KitchenRemodelingTestimonials'))
const KitchenRemodelingWhyChoose = lazy(() => import('../components/KitchenRemodelingWhyChoose'))
const ContactForm = lazy(() => import('../components/ContactForm'))
const KitchenRemodelingFinalCTA = lazy(() => import('../components/KitchenRemodelingFinalCTA'))
const Footer = lazy(() => import('../components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-16 md:py-24 animate-pulse bg-cream/30" aria-hidden="true" />
)

const KitchenRenovation = () => {
  // Track page view on mount
  useEffect(() => {
    trackKitchenRenovationPageView()
  }, [])

  // SEO Meta Tags
  const seoData = {
    title: 'Kitchen Remodeling Cape Cod | Complete Kitchen Renovation | All Granite & Stone',
    description: 'Transform your Cape Cod kitchen with our complete remodeling services. Premium countertops, custom cabinets, islands, backsplash & more. Expert installation, licensed & insured. Free estimates. Serving Hyannis, Barnstable & all of Cape Cod.',
    keywords: 'kitchen remodeling Cape Cod, kitchen renovation, complete kitchen remodel, kitchen countertops, custom kitchen cabinets, kitchen island, backsplash installation, Cape Cod kitchen design, Hyannis kitchen remodeling',
    canonical: 'https://www.allgraniteandstone.com/kitchen-renovation',
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
    <div className="min-h-screen bg-cream">
      <SEOHead {...seoData} />
      <MobileStickyCTA />
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Hero Section Otimizado para Conversão (includes navigation) */}
        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenRemodelingHero />
            </Suspense>
          )}
        />

        {/* 2. Seção de Benefícios Rápidos */}
        <LazySection
          fallbackHeight="360px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenRemodelingBenefits />
            </Suspense>
          )}
        />

        {/* 3. O Que Está Incluído (Escopo do Serviço) */}
        <LazySection
          fallbackHeight="420px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenRemodelingServices />
            </Suspense>
          )}
        />

        {/* 4. Processo de Trabalho */}
        <LazySection
          fallbackHeight="420px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenRemodelingProcess />
            </Suspense>
          )}
        />

        {/* 5. Galeria de Projetos */}
        <LazySection
          fallbackHeight="420px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenRemodelingGallery />
            </Suspense>
          )}
        />

        {/* 6. Depoimentos Específicos */}
        <LazySection
          fallbackHeight="420px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenRemodelingTestimonials />
            </Suspense>
          )}
        />

        {/* 7. Por Que Escolher Nós */}
        <LazySection
          fallbackHeight="420px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenRemodelingWhyChoose />
            </Suspense>
          )}
        />

        {/* 8. Formulário de Contato */}
        <LazySection
          fallbackHeight="600px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <ContactForm />
            </Suspense>
          )}
        />

        {/* 9. CTA Final */}
        <LazySection
          fallbackHeight="360px"
          render={() => (
            <Suspense fallback={<SectionFallback />}>
              <KitchenRemodelingFinalCTA />
            </Suspense>
          )}
        />
      </main>

      {/* Footer */}
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

export default KitchenRenovation

