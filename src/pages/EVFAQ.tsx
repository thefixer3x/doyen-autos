import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ChevronDown } from 'lucide-react';

export const EVFAQ = () => {
  const faqs = [
    {
      question: "What is the typical range of an electric vehicle?",
      answer: "Modern EVs typically offer ranges between 250-400 kilometers on a single charge, depending on the model. Factors like driving style, weather conditions, and terrain can affect range."
    },
    {
      question: "How long does it take to charge an electric vehicle?",
      answer: "Charging time varies based on the charger type: Level 1 (8-15 hours), Level 2 (3-8 hours), and DC Fast Charging (30-60 minutes to 80%). Home charging overnight is the most convenient option for most users."
    },
    {
      question: "Are electric vehicles more expensive to maintain?",
      answer: "No, EVs generally have lower maintenance costs due to fewer moving parts. There's no need for oil changes, and brake wear is reduced due to regenerative braking."
    },
    {
      question: "What about charging infrastructure in Lagos?",
      answer: "The charging network in Lagos is growing rapidly. We offer home charging solutions and can help you locate public charging stations near your frequent routes."
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Get answers to common questions about electric vehicles.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group mb-4 rounded-lg border border-gray-200 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-6 text-gray-900"
                >
                  <h2 className="font-medium">
                    {faq.question}
                  </h2>

                  <ChevronDown
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  />
                </summary>

                <div className="p-6 pt-0">
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-gray-600 mb-8">
              Still have questions? We're here to help!
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EVFAQ;