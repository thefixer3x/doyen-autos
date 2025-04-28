import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Zap, Battery, DollarSign, Leaf } from 'lucide-react';

export const EVBenefits = () => {
  const benefits = [
    {
      icon: <Battery className="w-12 h-12 text-accent-500" />,
      title: "Lower Running Costs",
      description: "Save significantly on fuel and maintenance costs compared to traditional vehicles."
    },
    {
      icon: <Leaf className="w-12 h-12 text-accent-500" />,
      title: "Environmental Impact",
      description: "Zero direct emissions, contributing to cleaner air and a healthier environment."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-accent-500" />,
      title: "Tax Incentives",
      description: "Take advantage of government incentives and tax benefits for EV ownership."
    },
    {
      icon: <Zap className="w-12 h-12 text-accent-500" />,
      title: "Performance",
      description: "Instant torque delivery for superior acceleration and smoother driving experience."
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits of Electric Vehicles
            </h1>
            <p className="text-xl text-gray-600">
              Discover why more Nigerians are choosing electric vehicles for a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-navy-900 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Make the Switch?
              </h2>
              <p className="text-lg mb-8">
                Our team of EV experts is here to help you transition to electric mobility.
                Book a consultation today and take the first step towards sustainable driving.
              </p>
              <a
                href="/book"
                className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EVBenefits;