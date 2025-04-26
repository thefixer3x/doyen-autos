import React from 'react';
import { Shield, Zap, Clock, CreditCard } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-accent-500" />,
      title: "Certified Pre-owned",
      description: "Every vehicle undergoes a rigorous 150-point inspection"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-500" />,
      title: "Electric Vehicle Focus",
      description: "Leading the charge in Nigeria's transition to sustainable mobility"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-500" />,
      title: "Quick Process",
      description: "Complete your purchase in as little as 24 hours"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-accent-500" />,
      title: "Flexible Financing",
      description: "Competitive rates and flexible payment plans available"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Doyen Autos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;