import React from 'react';
import { History, Rocket } from 'lucide-react';

const OurStory: React.FC = () => {
  return (
    <section className="py-16 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-800 mb-6">
            <History className="w-8 h-8 text-accent-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Doyen Mantra
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            At Doyen Autos, we are not just selling cars—we are shaping lifestyles, 
            blending automotive excellence with fashion-forward thinking. Empowered by 
            future forward technology partnerships like Lan-Onasis, Social Entertainment 
            and branding network, we are driving the future of mobility and style in 
            Nigeria and beyond.
          </p>

          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-accent-500">
            <Rocket className="w-8 h-8" />
            <span>Don't Snooze, Join the Movement!</span>
          </div>

          <div className="mt-12">
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-colors text-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;