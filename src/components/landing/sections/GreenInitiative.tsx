import React, { useRef } from 'react';
import { Leaf, Battery, CreditCard, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';
import { Button } from '../../ui/Button';
import { cn } from '../../../utils/cn';

const GreenInitiative: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const benefits = [
    {
      icon: <Battery className="w-10 h-10 text-accent-500" />,
      title: "Lower Running Costs",
      description: "Significant reduction in fuel expenses, perfect for navigating Nigeria's fluctuating fuel prices"
    },
    {
      icon: <CreditCard className="w-10 h-10 text-accent-500" />,
      title: "Special Financing",
      description: "Exclusive Lan-Onasis partnership offering multiple credit options at competitive rates"
    },
    {
      icon: <Zap className="w-10 h-10 text-accent-500" />,
      title: "Free Charging",
      description: "Enjoy complimentary charging for your first year at available charging stations"
    },
    {
      icon: <Sparkles className="w-10 h-10 text-accent-500" />,
      title: "Fashion Package",
      description: "Exclusive fashion package from our partner brand with every EV purchase"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-b from-navy-50 to-white relative overflow-hidden transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-100 mb-8 p-4">
            <Leaf className="w-12 h-12 text-accent-500" />
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
              className={cn(
                "bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-4 bg-accent-50 rounded-full inline-block mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={cn(
          "mt-16 text-center bg-gradient-to-r from-accent-500 to-accent-600 py-10 px-8 rounded-3xl shadow-xl relative overflow-hidden transition-all duration-1000",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="absolute inset-0 bg-accent-500 opacity-30">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Go Electric?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Discover our collection of premium electric vehicles and join the sustainable mobility revolution in Nigeria.
            </p>
            <Button className="bg-white text-accent-600 hover:bg-navy-50 px-8 py-3 rounded-full font-semibold text-lg shadow-md inline-flex items-center">
              Explore Our EV Range <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenInitiative;