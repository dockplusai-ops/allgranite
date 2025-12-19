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

/**
 * Track countertop service page view
 */
export const trackCountertopServicePageView = () => {
  trackEvent({
    event: 'countertop_service_page_view',
    page_name: 'countertop_service'
  })
}

/**
 * Track countertop service phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackCountertopServicePhoneClick = (location) => {
  trackEvent({
    event: 'countertop_service_phone_click',
    click_location: location
  })
}

/**
 * Track countertop service form submit
 * @param {string} formLocation - Location of the form on the page
 */
export const trackCountertopServiceFormSubmit = (formLocation) => {
  trackEvent({
    event: 'countertop_service_form_submit',
    form_location: formLocation
  })
}

/**
 * Track countertop service CTA click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackCountertopServiceCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'countertop_service_cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

/**
 * Track countertop material view
 * @param {string} materialName - Name of the material viewed
 */
export const trackCountertopMaterialView = (materialName) => {
  trackEvent({
    event: 'countertop_material_view',
    material_name: materialName
  })
}

/**
 * Track interior renovation page view
 */
export const trackInteriorRenovationPageView = () => {
  trackEvent({
    event: 'interior_renovation_page_view',
    page_name: 'interior_renovation'
  })
}

/**
 * Track interior renovation phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackInteriorRenovationPhoneClick = (location) => {
  trackEvent({
    event: 'interior_renovation_phone_click',
    click_location: location
  })
}

/**
 * Track interior renovation form submit
 * @param {string} formLocation - Location of the form on the page
 */
export const trackInteriorRenovationFormSubmit = (formLocation) => {
  trackEvent({
    event: 'interior_renovation_form_submit',
    form_location: formLocation
  })
}

/**
 * Track interior renovation CTA click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackInteriorRenovationCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'interior_renovation_cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

/**
 * Track interior painting page view
 */
export const trackInteriorPaintingPageView = () => {
  trackEvent({
    event: 'interior_painting_page_view',
    page_name: 'interior_painting'
  })
}

/**
 * Track interior painting phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackInteriorPaintingPhoneClick = (location) => {
  trackEvent({
    event: 'interior_painting_phone_click',
    click_location: location
  })
}

/**
 * Track interior painting form submit
 * @param {string} formLocation - Location of the form on the page
 */
export const trackInteriorPaintingFormSubmit = (formLocation) => {
  trackEvent({
    event: 'interior_painting_form_submit',
    form_location: formLocation
  })
}

/**
 * Track interior painting CTA click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackInteriorPaintingCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'interior_painting_cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

/**
 * Track interior carpentry page view
 */
export const trackInteriorCarpentryPageView = () => {
  trackEvent({
    event: 'interior_carpentry_page_view',
    page_name: 'interior_carpentry'
  })
}

/**
 * Track interior carpentry phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackInteriorCarpentryPhoneClick = (location) => {
  trackEvent({
    event: 'interior_carpentry_phone_click',
    click_location: location
  })
}

/**
 * Track interior carpentry form submit
 * @param {string} formLocation - Location of the form on the page
 */
export const trackInteriorCarpentryFormSubmit = (formLocation) => {
  trackEvent({
    event: 'interior_carpentry_form_submit',
    form_location: formLocation
  })
}

/**
 * Track interior carpentry CTA click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackInteriorCarpentryCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'interior_carpentry_cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

/**
 * Track tile flooring page view
 */
export const trackTileFlooringPageView = () => {
  trackEvent({
    event: 'tile_flooring_page_view',
    page_name: 'tile_flooring'
  })
}

/**
 * Track tile flooring phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackTileFlooringPhoneClick = (location) => {
  trackEvent({
    event: 'tile_flooring_phone_click',
    click_location: location
  })
}

/**
 * Track tile flooring form submit
 * @param {string} formLocation - Location of the form on the page
 */
export const trackTileFlooringFormSubmit = (formLocation) => {
  trackEvent({
    event: 'tile_flooring_form_submit',
    form_location: formLocation
  })
}

/**
 * Track tile flooring CTA click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackTileFlooringCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'tile_flooring_cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

/**
 * Track basement renovation page view
 */
export const trackBasementRenovationPageView = () => {
  trackEvent({
    event: 'basement_renovation_page_view',
    page_name: 'basement_renovation'
  })
}

/**
 * Track basement renovation phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackBasementRenovationPhoneClick = (location) => {
  trackEvent({
    event: 'basement_renovation_phone_click',
    click_location: location
  })
}

/**
 * Track basement renovation form submit
 * @param {string} formLocation - Location of the form on the page
 */
export const trackBasementRenovationFormSubmit = (formLocation) => {
  trackEvent({
    event: 'basement_renovation_form_submit',
    form_location: formLocation
  })
}

/**
 * Track basement renovation CTA click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackBasementRenovationCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'basement_renovation_cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

/**
 * Track windows replacement page view
 */
export const trackWindowsReplacementPageView = () => {
  trackEvent({
    event: 'windows_replacement_page_view',
    page_name: 'windows_replacement'
  })
}

/**
 * Track windows replacement phone click
 * @param {string} location - Location where phone was clicked
 */
export const trackWindowsReplacementPhoneClick = (location) => {
  trackEvent({
    event: 'windows_replacement_phone_click',
    click_location: location
  })
}

/**
 * Track windows replacement form submit
 * @param {string} formLocation - Location of the form on the page
 */
export const trackWindowsReplacementFormSubmit = (formLocation) => {
  trackEvent({
    event: 'windows_replacement_form_submit',
    form_location: formLocation
  })
}

/**
 * Track windows replacement CTA click
 * @param {string} ctaText - Text/identifier of the CTA
 * @param {string} ctaLocation - Location of the CTA on the page
 */
export const trackWindowsReplacementCTAClick = (ctaText, ctaLocation) => {
  trackEvent({
    event: 'windows_replacement_cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation
  })
}

