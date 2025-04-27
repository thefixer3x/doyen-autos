import React, { useRef } from 'react';
import { Shield, Zap, Clock, CreditCard } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';
import { cn } from '../../../utils/cn';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const features = [
    {
      icon: <Shield className="w-10 h-10 text-accent-500" />,
      title: "Certified Pre-owned",
      description: "Every vehicle undergoes a rigorous 150-point inspection to ensure quality and reliability."
    },
    {
      icon: <Zap className="w-10 h-10 text-accent-500" />,
      title: "Electric Vehicle Focus",
      description: "Leading the charge in Nigeria's transition to sustainable mobility with premium EV options."
    },
    {
      icon: <Clock className="w-10 h-10 text-accent-500" />,
      title: "Quick Process",
      description: "Complete your purchase in as little as 24 hours with our streamlined buying experience."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-accent-500" />,
      title: "Flexible Financing",
      description: "Competitive rates and flexible payment plans available through our trusted financial partners."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-b from-white to-gray-50 transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
            Why Choose Doyen Autos
            <span className="absolute left-1/4 right-1/4 bottom-0 h-1 bg-accent-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600">
            We combine automotive excellence with innovation to deliver a car buying experience that exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-4 bg-accent-50 rounded-full inline-block mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
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