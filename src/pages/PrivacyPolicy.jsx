import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy text-white py-6 px-4 lg:px-8 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors duration-300 font-body font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-lg text-gray-600 font-body mb-8">
            All Granite And Stone Inc - Effective Date: January 1st, 2025
          </p>

          <div className="prose prose-lg max-w-none font-body text-gray-700">
            {/* Important Notice */}
            <section className="mb-8 p-6 bg-gold/10 border-l-4 border-gold rounded">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA
              </h2>
              <p>
                All Granite And Stone Inc ("we," "us," or "our") DOES NOT share customer opt-in information, 
                including phone numbers and consent records, with any affiliates or third parties for marketing, 
                promotional, or any other purposes unrelated to providing our direct services. All text messaging 
                originator opt-in data is kept strictly confidential.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                1. Information We Collect
              </h2>
              
              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                Personal Information:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number, physical address</li>
                <li>Payment information when you make a purchase or request a quote</li>
                <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
              </ul>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                Non-Personal Information:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address, browser type, device information</li>
                <li>Website usage patterns and analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                Customer Communication:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Records of inquiries and service requests</li>
                <li>Appointment details and preferences</li>
                <li>Service history and feedback</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use collected data for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and improving our services</li>
                <li>Processing transactions and payments</li>
                <li>Communicating with you about your inquiries, appointments, and promotions</li>
                <li>Enhancing website functionality and user experience</li>
                <li>Ensuring security and fraud prevention</li>
                <li>Maintaining records of your communication preferences and consent</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                3. SMS Messaging & Compliance
              </h2>
              
              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                Text Message Program Terms & Conditions
              </h3>
              <p className="mb-4">
                By opting into our SMS messaging services, you agree to receive text messages related to our services, 
                including appointment reminders, customer support, and important updates.
              </p>

              <h4 className="text-lg font-body font-bold text-navy mb-3 mt-4">
                Opt-In & Consent:
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>You will only receive messages if you have explicitly opted in</li>
                <li>We maintain timestamped records of all opt-in actions</li>
                <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
              </ul>

              <h4 className="text-lg font-body font-bold text-navy mb-3 mt-4">
                Opt-Out Instructions:
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can cancel SMS notifications at any time by replying "STOP"</li>
                <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
                <li>All opt-out requests are processed within 24 hours</li>
              </ul>

              <h4 className="text-lg font-body font-bold text-navy mb-3 mt-4">
                Message Frequency & Content:
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Message frequency varies based on your interactions with our business</li>
                <li>Messages will be directly related to the services you have requested</li>
                <li>We do not send promotional content without specific consent</li>
              </ul>

              <h4 className="text-lg font-body font-bold text-navy mb-3 mt-4">
                Help & Support:
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reply "HELP" for assistance or contact us at contact@allgraniteandstone.com</li>
                <li>Customer support is available during regular business hours</li>
              </ul>

              <h4 className="text-lg font-body font-bold text-navy mb-3 mt-4">
                Carrier Information:
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard message and data rates may apply</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Supported carriers include AT&T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
              </ul>

              <h4 className="text-lg font-body font-bold text-navy mb-3 mt-4">
                SMS Data Protection Statement
              </h4>
              <p className="mb-3">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. 
                Information sharing to subcontractors in support services, such as customer service, is permitted. 
                All other use case categories exclude text messaging originator opt-in data and consent; this information 
                will not be shared with any third parties.
              </p>
              <p>
                We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                4. Information Sharing & Disclosure
              </h2>
              <p className="mb-4">
                We do not sell, rent, or trade personal information. We may share information with:
              </p>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                Service Providers:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)</li>
                <li>SMS aggregators and providers solely for the purpose of delivering messages you've consented to receive</li>
                <li>All service providers are contractually obligated to maintain confidentiality and security</li>
              </ul>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                Legal Compliance:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>If required by law, legal process, or to protect our rights</li>
                <li>In response to valid law enforcement requests or court orders</li>
              </ul>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                Business Transfers:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>In case of mergers, acquisitions, or sale of assets</li>
                <li>In such cases, your data remains protected under the terms of this policy</li>
              </ul>

              <p className="mt-4 italic">
                All the above categories exclude text messaging originator opt-in data and consent; this information 
                will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                5. Data Security
              </h2>
              <p className="mb-3">
                We implement and maintain reasonable security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure access controls and authentication mechanisms</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Breach notification protocols in accordance with applicable laws</li>
                <li>Secure backup systems and disaster recovery procedures</li>
              </ul>
              <p className="mt-4">
                Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. 
                We strive to use commercially acceptable means to protect your personal information but cannot guarantee 
                absolute security.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                6. Cookies & Tracking Technologies
              </h2>
              <p className="mb-3">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analyze site traffic and user behavior</li>
                <li>Remember your preferences</li>
                <li>Improve website functionality and user experience</li>
                <li>Measure the effectiveness of our services</li>
              </ul>
              <p className="mt-4">
                You may control cookies through your browser settings. Disabling cookies may limit your ability to use 
                certain features of our website.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                7. Your Rights & Choices
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing emails by clicking "unsubscribe" in our emails</li>
                <li>Opt-out of SMS messages by replying "STOP"</li>
                <li>Request information on how we process your data</li>
                <li>Withdraw consent at any time for future communications</li>
                <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information in Section 10.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices 
                and encourage you to review their policies. This privacy policy applies only to information collected by 
                All Granite And Stone Inc.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this policy periodically. The latest version will always be available on our website with 
                the effective date. For significant changes, we will notify you by email or through a notice on our website.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                10. Contact Us
              </h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy or how your information is handled, contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-bold text-navy mb-2">All Granite And Stone Inc</p>
                <p>Phone: <a href="tel:+15083757785" className="text-gold hover:underline">+1 (508) 375-7785</a></p>
                <p>Email: <a href="mailto:contact@allgraniteandstone.com" className="text-gold hover:underline">contact@allgraniteandstone.com</a></p>
                <p>Website: <a href="https://allgraniteandstone.com" className="text-gold hover:underline">https://allgraniteandstone.com</a></p>
              </div>
            </section>

            {/* Final Statement */}
            <section className="mt-8 p-6 bg-navy/5 border border-navy/20 rounded-lg">
              <p className="text-center font-semibold text-navy">
                By using our website and services, you consent to this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

