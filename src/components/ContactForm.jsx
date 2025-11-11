import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Lock, CheckCircle, Loader2 } from 'lucide-react'
import { trackFormSubmit } from '../utils/gtm'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Zod validation schema
  const formSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    phone: z.string().regex(/^[\d\s\(\)\-]+$/, 'Please enter a valid phone number'),
    email: z.string().email('Please enter a valid email address'),
    projectType: z.string().min(1, 'Please select a project type'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid zip code'),
    projectDescription: z.string().optional()
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', data)
    
    // Track form submission
    trackFormSubmit('contact_quote', 'quote_section')
    
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  const projectTypes = [
    'Kitchen Countertops',
    'Bathroom Vanities',
    'Outdoor Kitchen',
    'Fireplace',
    'Other'
  ]

  return (
    <section id="quote" className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-body">
            Receive a detailed estimate within 24 hours
          </p>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="mb-6 p-6 bg-green-50 border-2 border-green-200 rounded-lg flex items-center gap-4 animate-slide-down">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-green-800 font-body font-bold text-lg mb-1">
                Thank you!
              </h3>
              <p className="text-green-700 font-body text-sm">
                We've received your request and will contact you within 24 hours.
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg p-6 md:p-8 shadow-lg animate-slide-up"
        >
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-navy font-body font-semibold mb-2">
                Full Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                {...register('fullName')}
                className={`w-full px-4 py-3 border-2 rounded-lg font-body text-base transition-all duration-300 ${
                  errors.fullName
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
                placeholder="John Smith"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600 font-body">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-navy font-body font-semibold mb-2">
                Phone Number <span className="text-gold">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className={`w-full px-4 py-3 border-2 rounded-lg font-body text-base transition-all duration-300 ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
                placeholder="(774) 207-7924"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 font-body">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-navy font-body font-semibold mb-2">
                Email Address <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full px-4 py-3 border-2 rounded-lg font-body text-base transition-all duration-300 ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 font-body">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-navy font-body font-semibold mb-2">
                Project Type <span className="text-gold">*</span>
              </label>
              <select
                id="projectType"
                {...register('projectType')}
                className={`w-full px-4 py-3 border-2 rounded-lg font-body text-base transition-all duration-300 appearance-none bg-white ${
                  errors.projectType
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-600 font-body">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zipCode" className="block text-navy font-body font-semibold mb-2">
                Zip Code <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                {...register('zipCode')}
                className={`w-full px-4 py-3 border-2 rounded-lg font-body text-base transition-all duration-300 ${
                  errors.zipCode
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
                placeholder="02601"
                maxLength="10"
              />
              {errors.zipCode && (
                <p className="mt-1 text-sm text-red-600 font-body">
                  {errors.zipCode.message}
                </p>
              )}
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="projectDescription" className="block text-navy font-body font-semibold mb-2">
                Project Description <span className="text-gray-400 text-sm">(optional)</span>
              </label>
              <textarea
                id="projectDescription"
                {...register('projectDescription')}
                rows="4"
                className="w-full px-4 py-3 border-2 rounded-lg font-body text-base transition-all duration-300 border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full px-8 py-4 bg-gold text-navy font-body font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                isSubmitting || isSuccess
                  ? 'opacity-75 cursor-not-allowed'
                  : 'hover:bg-gold/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Get My Free Quote'
              )}
            </button>

            {/* Trust Elements */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600 font-body text-sm">
                <Lock className="w-4 h-4 text-gold" />
                <span>Your information is secure and never shared</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <p className="text-gray-600 font-body text-sm">
                No obligation. No spam.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm

