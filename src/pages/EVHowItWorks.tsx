import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Battery, Zap, Clock, Settings } from 'lucide-react';

export const EVHowItWorks = () => {
  const steps = [
    {
      icon: <Battery className="w-12 h-12 text-accent-500" />,
      title: "Charging",
      description: "Learn about different charging options, from home charging to public stations."
    },
    {
      icon: <Zap className="w-12 h-12 text-accent-500" />,
      title: "Range",
      description: "Understand how to maximize your EV's range and plan your journeys effectively."
    },
    {
      icon: <Clock className="w-12 h-12 text-accent-500" />,
      title: "Charging Time",
      description: "Different charging speeds and how to optimize your charging schedule."
    },
    {
      icon: <Settings className="w-12 h-12 text-accent-500" />,
      title: "Maintenance",
      description: "Simple maintenance tips to keep your EV running at peak performance."
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              How Electric Vehicles Work
            </h1>
            <p className="text-xl text-gray-600">
              Understanding the basics of electric vehicle technology and operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-accent-500 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Want to Experience an EV?
              </h2>
              <p className="text-lg mb-8">
                Book a test drive today and experience the future of driving firsthand.
              </p>
              <a
                href="/test-drive"
                className="inline-block bg-white text-accent-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Schedule Test Drive
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EVHowItWorks;