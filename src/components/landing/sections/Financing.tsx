import React from 'react';
import { ChevronRight, CreditCard, Calculator, Clock, Shield } from 'lucide-react';

const Financing: React.FC = () => {
  const options = [
    {
      icon: <CreditCard className="w-8 h-8 text-accent-500" />,
      title: 'Multiple Lending Offers',
      description: 'We have partnered with Lan-Onasis to provide an aggregation of multiple lenders to find the best rates for you.',
    },
    {
      icon: <Calculator className="w-8 h-8 text-accent-500" />,
      title: 'Quick Pre-Approval',
      description: 'Get pre-approved online in minutes without affecting your credit score.',
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-500" />,
      title: 'Competitive Rates',
      description: 'We partner with local and national lenders to offer you the most competitive interest rates possible.',
    },
    {
      icon: <Shield className="w-8 h-8 text-accent-500" />,
      title: 'All Credit Situations',
      description: 'Less-than-perfect credit? No problem. We have special financing options for all credit situations.',
    },
  ];

  return (
    <section className="py-16 bg-navy-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Flexible Financing Options Assured
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We believe everyone deserves the opportunity to drive their dream car. Our flexible financing options make it possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {option.description}
              </p>
              <a
                href="/financing"
                className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
              >
                Learn More
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/apply"
            className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-colors"
          >
            Apply for Financing
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Financing;