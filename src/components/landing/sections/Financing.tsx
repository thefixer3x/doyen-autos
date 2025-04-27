import React, { useRef } from 'react';
import { ChevronRight, CreditCard, Calculator, Clock, Shield, ArrowRight } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';
import { Button } from '../../ui/Button';
import { cn } from '../../../utils/cn';

const Financing: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const options = [
    {
      icon: <CreditCard className="w-10 h-10 text-accent-500" />,
      title: 'Multiple Lending Offers',
      description: 'We have partnered with Lan-Onasis to provide an aggregation of multiple lenders to find the best rates for you.',
    },
    {
      icon: <Calculator className="w-10 h-10 text-accent-500" />,
      title: 'Quick Pre-Approval',
      description: 'Get pre-approved online in minutes without affecting your credit score.',
    },
    {
      icon: <Clock className="w-10 h-10 text-accent-500" />,
      title: 'Competitive Rates',
      description: 'We partner with local and national lenders to offer you the most competitive interest rates possible.',
    },
    {
      icon: <Shield className="w-10 h-10 text-accent-500" />,
      title: 'All Credit Situations',
      description: 'Less-than-perfect credit? No problem. We have special financing options for all credit situations.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-navy-50 transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            Flexible Financing Options
            <span className="absolute left-1/4 right-1/4 bottom-0 h-1 bg-accent-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg">
            We believe everyone deserves the opportunity to drive their dream car. Our flexible financing options make it possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className={cn(
                "bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-4 bg-accent-50 rounded-full inline-block mb-6">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6">
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

        <div className="mt-16 text-center">
          <Button
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg inline-flex items-center"
          >
            Apply for Financing <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Financing;