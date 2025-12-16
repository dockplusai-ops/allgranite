import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          
          <p className="text-lg text-gray-600 font-body mb-8">
            All Granite And Stone Inc - Effective Date: January 1st, 2025
          </p>

          <div className="prose prose-lg max-w-none font-body text-gray-700">
            {/* SMS Messaging Terms */}
            <section className="mb-8 p-6 bg-gold/10 border-l-4 border-gold rounded">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                SMS Messaging Terms & Compliance
              </h2>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                1. Program Description:
              </h3>
              <p>
                This messaging program sends appointment confirmation and reminder messages to customers who have booked 
                an appointment with All Granite And Stone Inc through our website at https://allgraniteandstone.com, 
                or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected 
                via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, 
                appointment reminders, rescheduling updates, and customer support communications.
              </p>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                2. Cancellation Instructions:
              </h3>
              <p>
                You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. 
                Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will 
                no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending 
                SMS messages to you.
              </p>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                3. Support Information:
              </h3>
              <p>
                If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, 
                or reach out directly to contact@allgraniteandstone.com or call +1 (508) 375-7785 during business hours.
              </p>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                4. Carrier Liability:
              </h3>
              <p>
                Carriers are not liable for delayed or undelivered messages.
              </p>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                5. Message & Data Rates:
              </h3>
              <p>
                Message and data rates may apply for messages sent to you from us and to us from you. Message frequency 
                varies based on your service usage and appointment schedule. For questions about your text plan or data plan, 
                contact your wireless provider.
              </p>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                6. Supported Carriers:
              </h3>
              <p>
                Our SMS program works with all major U.S. wireless carriers, including AT&T, T-Mobile, Verizon, Sprint, 
                and most regional carriers.
              </p>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                7. Age Restriction:
              </h3>
              <p>
                You must be 18 years or older to participate in our SMS program.
              </p>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                8. Privacy Policy:
              </h3>
              <p>
                For privacy-related inquiries, please refer to our{' '}
                <Link to="/privacy-policy" className="text-gold hover:underline font-semibold">
                  Privacy Policy
                </Link>.
              </p>

              <p className="mt-6 italic">
                We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) 
                and CTIA guidelines, regarding the use of SMS communications.
              </p>
            </section>

            {/* General Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                General Terms
              </h2>
              <p>
                This website (the "Site") is owned and operated by All Granite And Stone Inc ("COMPANY," "we" or "us"). 
                By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with 
                these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to 
                specific sections of the Site or to products and services available through the Site or from All Granite 
                And Stone Inc.
              </p>
              <p className="mt-4">
                Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your 
                agreement to be bound by these Terms of Service.
              </p>
              <p className="mt-4">
                We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site 
                from time to time, in which case we will post the revised Terms of Service on this website. By continuing 
                to use the Site after we post any such changes, you accept the Terms of Service, as modified.
              </p>
            </section>

            {/* Intellectual Property Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                Intellectual Property Rights
              </h2>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                Our Limited License to You
              </h3>
              <p>
                This Site and all the materials available on the Site are the property of All Granite And Stone Inc 
                and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual 
                property laws. The Site is provided solely for your personal non-commercial use.
              </p>
              <p className="mt-4">
                You may not use the Site or the materials available on the Site in a manner that constitutes an 
                infringement of our rights or that has not been authorized by us.
              </p>
              <p className="mt-4">
                Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, 
                translate, sell, create derivative works, exploit, or distribute in any manner or medium any material 
                from the Site. However, you may download and/or print one copy of individual pages for your personal, 
                non-commercial use, provided that you keep intact all copyright and other proprietary notices.
              </p>

              <h3 className="text-xl font-body font-bold text-navy mb-3 mt-6">
                Your License to Us
              </h3>
              <p>
                By posting or submitting any material (including comments, blog entries, social media posts, photos, 
                and videos) to us via the Site, internet groups, or other digital venues, you represent that you own 
                the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, 
                irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative 
                works from, distribute, and publicly perform or display such material.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                Disclaimers
              </h2>
              <p>
                Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. 
                Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or 
                the information, products, or services offered on or through the sites.
              </p>
              <p className="mt-4">
                The information, products, and services offered on or through the Site are provided "as is" and without 
                warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable 
                law, we disclaim all warranties, including implied warranties of merchantability and fitness for a 
                particular purpose.
              </p>
              <p className="mt-4">
                You agree at all times to indemnify and hold harmless All Granite And Stone Inc, its affiliates, and 
                their respective officers, directors, agents, and employees from any claims, causes of action, damages, 
                liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, 
                or representation under these Terms of Service.
              </p>
            </section>

            {/* Online Commerce */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                Online Commerce
              </h2>
              <p>
                Certain sections of the Site may allow you to purchase products and services from third-party vendors. 
                We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these 
                products and services. If you make a purchase from a third party linked through the Site, the information 
                obtained during your visit, including payment information, may be collected by both the merchant and us.
              </p>
              <p className="mt-4">
                Your participation in any dealings with third-party vendors is solely between you and the third party. 
                All Granite And Stone Inc shall not be responsible for any loss or damage incurred as a result of such 
                dealings.
              </p>
            </section>

            {/* Registration & Passwords */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                Registration & Passwords
              </h2>
              <p>
                To access certain features of the Site, you may be required to register and create an account. You agree 
                to provide accurate, current, and complete information during the registration process. You are responsible 
                for maintaining the confidentiality of your login credentials and for all activities conducted under your 
                account.
              </p>
              <p className="mt-4">
                If you suspect unauthorized use of your account, notify us immediately at contact@allgraniteandstone.com. 
                We are not liable for any loss or damage arising from your failure to comply with this obligation.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your access to the Site, without notice, if we determine 
                that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. 
                Upon termination, you must cease all use of the Site and any content obtained from it.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the state of 
                Massachusetts. Any dispute arising under these Terms shall be resolved exclusively through binding 
                arbitration in that jurisdiction.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                Changes to Terms of Service
              </h2>
              <p>
                We may update these Terms of Service from time to time. The latest version will always be available on 
                our website with the effective date.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                Contact
              </h2>
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
                By using our website and services, you consent to these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

