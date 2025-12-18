/**
 * Google Tag Manager Tracking Helper
 * 
 * Centralizes all GTM tracking calls to ensure consistency
 * and prevent errors when dataLayer is not available
 */

/**
 * Push event to Google Tag Manager dataLayer
 * @param {Object} eventData - Event data to push to dataLayer
 */
export const trackEvent = (eventData) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData)
    
    // Log in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('GTM Event:', eventData)
    }
  }
}

/**
 * Track form submission
 * @param {string} formName - Name of the form
 * @param {string} formLocation - Location of the form on the page
 */
export const trackFormSubmit = (formName, formLocation) => {
  trackEvent({
    event: 'form_submit',
    form_name: formName,
    form_location: formLocation
  })
}

/**
 * Track phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackPhoneClick = (location) => {
  trackEvent({
    event: 'phone_click',
    click_location: location
  })
}

/**
 * Track email click
 * @param {string} location - Location where email was clicked
 */
export const trackEmailClick = (location) => {
  trackEvent({
    event: 'email_click',
    click_location: location
  })
}

/**
 * Track CTA button click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

/**
 * Track portfolio view
 * @param {string} location - Location where portfolio was accessed
 */
export const trackPortfolioView = (location) => {
  trackEvent({
    event: 'portfolio_view',
    click_location: location
  })
}

/**
 * Track portfolio filter change
 * @param {string} filterCategory - Selected filter category
 */
export const trackPortfolioFilter = (filterCategory) => {
  trackEvent({
    event: 'portfolio_filter',
    filter_category: filterCategory
  })
}

/**
 * Track service link click
 * @param {string} serviceName - Name of the service clicked
 */
export const trackServiceClick = (serviceName) => {
  trackEvent({
    event: 'service_click',
    service_name: serviceName
  })
}

/**
 * Track social media click
 * @param {string} socialNetwork - Name of the social network
 */
export const trackSocialClick = (socialNetwork) => {
  trackEvent({
    event: 'social_click',
    social_network: socialNetwork
  })
}

/**
 * Track directions click
 * @param {string} destination - Destination type (e.g., 'google_maps')
 */
export const trackDirectionsClick = (destination) => {
  trackEvent({
    event: 'directions_click',
    destination: destination
  })
}

/**
 * Track page view
 * @param {string} pageName - Name/identifier of the page
 */
export const trackPageView = (pageName) => {
  trackEvent({
    event: 'page_view',
    page_name: pageName
  })
}

/**
 * Track kitchen renovation page view
 */
export const trackKitchenRenovationPageView = () => {
  trackEvent({
    event: 'kitchen_renovation_page_view',
    page_name: 'kitchen_renovation'
  })
}

/**
 * Track kitchen renovation phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackKitchenRenovationPhoneClick = (location) => {
  trackEvent({
    event: 'kitchen_renovation_phone_click',
    click_location: location
  })
}

/**
 * Track kitchen renovation form submit
 * @param {string} formLocation - Location of the form on the page
 */
export const trackKitchenRenovationFormSubmit = (formLocation) => {
  trackEvent({
    event: 'kitchen_renovation_form_submit',
    form_location: formLocation
  })
}

/**
 * Track kitchen renovation gallery view
 * @param {string} filter - Optional filter applied
 */
export const trackKitchenRenovationGalleryView = (filter = null) => {
  trackEvent({
    event: 'kitchen_renovation_gallery_view',
    filter: filter
  })
}

/**
 * Track kitchen renovation CTA click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackKitchenRenovationCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'kitchen_renovation_cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

/**
 * Track bathroom renovation page view
 */
export const trackBathroomRenovationPageView = () => {
  trackEvent({
    event: 'bathroom_renovation_page_view',
    page_name: 'bathroom_renovation'
  })
}

/**
 * Track bathroom renovation phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackBathroomRenovationPhoneClick = (location) => {
  trackEvent({
    event: 'bathroom_renovation_phone_click',
    click_location: location
  })
}

/**
 * Track bathroom renovation form submit
 * @param {string} formLocation - Location of the form on the page
 */
export const trackBathroomRenovationFormSubmit = (formLocation) => {
  trackEvent({
    event: 'bathroom_renovation_form_submit',
    form_location: formLocation
  })
}

/**
 * Track bathroom renovation CTA click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackBathroomRenovationCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'bathroom_renovation_cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

