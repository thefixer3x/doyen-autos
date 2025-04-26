import React from 'react';
import { Leaf, Battery, CreditCard, Zap, Sparkles } from 'lucide-react';

const GreenInitiative: React.FC = () => {
  const benefits = [
    {
      icon: <Battery className="w-8 h-8 text-accent-500" />,
      title: "Lower Running Costs",
      description: "Significant reduction in fuel expenses, perfect for navigating Nigeria's fluctuating fuel prices"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-accent-500" />,
      title: "Special Financing",
      description: "Exclusive Lan-Onasis partnership offering multiple credit options at competitive rates"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-500" />,
      title: "Free Charging",
      description: "Enjoy complimentary charging for your first year at available charging stations"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent-500" />,
      title: "Fashion Package",
      description: "Exclusive fashion package from our partner brand with every EV purchase"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-navy-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-6">
            <Leaf className="w-8 h-8 text-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Drive the Future, Live the Style
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Join the electric revolution with Doyen Autos' premium Electric Vehicle range
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/ev-range"
            className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-colors text-lg"
          >
            Explore Our EV Range
          </a>
        </div>
      </div>
    </section>
  );
};

export default GreenInitiative;