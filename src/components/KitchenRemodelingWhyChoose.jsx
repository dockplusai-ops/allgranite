import React from 'react'
import { Check, X } from 'lucide-react'

const KitchenRemodelingWhyChoose = () => {
  const advantages = [
    {
      feature: '15+ Years Experience',
      us: true,
      competitor: false
    },
    {
      feature: 'Free In-Home Consultation',
      us: true,
      competitor: false
    },
    {
      feature: '24-Hour Quote Response',
      us: true,
      competitor: false
    },
    {
      feature: 'Complete Kitchen Renovation',
      us: true,
      competitor: false
    },
    {
      feature: 'Premium Materials Only',
      us: true,
      competitor: 'sometimes'
    },
    {
      feature: 'Licensed & Insured',
      us: true,
      competitor: true
    },
    {
      feature: 'Full Warranty Coverage',
      us: true,
      competitor: 'limited'
    },
    {
      feature: '7-10 Day Installation',
      us: true,
      competitor: false
    }
  ]

  const certifications = [
    'Licensed Contractor',
    'Fully Insured',
    'BBB Accredited',
    '15+ Years in Business'
  ]

  return (
    <section className="w-full py-16 md:py-20 px-4 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12 md:mb-16 animate-fade-in">
          Why Choose All Granite & Stone
        </h2>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 md:mb-16 animate-slide-up">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-body font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-body font-semibold">All Granite & Stone</th>
                  <th className="px-6 py-4 text-center font-body font-semibold">Other Contractors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {advantages.map((advantage, index) => (
                  <tr key={index} className="hover:bg-cream transition-colors duration-200">
                    <td className="px-6 py-4 font-body text-gray-700">{advantage.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {advantage.us ? (
                        <Check className="w-6 h-6 text-gold mx-auto" strokeWidth={3} />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" strokeWidth={3} />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {advantage.competitor === true ? (
                        <Check className="w-6 h-6 text-gray-400 mx-auto" strokeWidth={3} />
                      ) : advantage.competitor === 'sometimes' || advantage.competitor === 'limited' ? (
                        <span className="text-gray-500 font-body text-sm">Sometimes</span>
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" strokeWidth={3} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-gold hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-gold" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-body font-bold text-navy">
                {cert}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KitchenRemodelingWhyChoose

