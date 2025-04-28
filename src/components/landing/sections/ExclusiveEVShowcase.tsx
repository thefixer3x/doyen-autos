import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, Zap } from 'lucide-react';
import { Button } from '../../ui/Button';
import { useInView } from '../../../hooks/useInView';
import { cn } from '../../../utils/cn';

// Filter only electric vehicles
const EV_DATA = [
  {
    id: '1',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    ],
    name: 'Tesla Model Y',
    details: 'Long Range • Electric • 315mi range',
    price: '$45,990',
    isElectric: true
  },
  {
    id: '2',
    images: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    ],
    name: 'BMW i4 eDrive40',
    details: '300mi range • Electric • Premium Package',
    price: '$52,800',
    isElectric: true
  },
  {
    id: '3',
    images: [
      'https://images.pexels.com/photos/3802512/pexels-photo-3802512.jpeg',
      'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg',
    ],
    name: 'Porsche Taycan Turbo S',
    details: '280mi range • Electric • Performance Package',
    price: '$89,990',
    isElectric: true
  }
];

const ExclusiveEVShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 < EV_DATA.length ? prevIndex + 3 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 >= 0 ? prevIndex - 3 : Math.floor(EV_DATA.length / 3) * 3));
  };

  const visibleVehicles = EV_DATA.slice(currentIndex, currentIndex + 3);
  if (visibleVehicles.length < 3) {
    visibleVehicles.push(...EV_DATA.slice(0, 3 - visibleVehicles.length));
  }

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "py-20 bg-navy-900 text-white relative overflow-hidden transition-opacity duration-1000",
        isInView ? "opacity-100" : "opacity-0"
      )}
      id="ev-showcase"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-500/20 mb-6">
              <Zap className="w-8 h-8 text-accent-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Electric Vehicles
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Experience the future of mobility with our premium selection of electric vehicles. 
              Zero emissions, maximum performance.
            </p>
          </div>
          <div className="flex items-center mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="p-2 rounded-full mr-2 border-gray-700 text-white hover:bg-navy-800"
              onClick={prevSlide}
              aria-label="Previous vehicles"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button 
              variant="outline" 
              className="p-2 rounded-full border-gray-700 text-white hover:bg-navy-800"
              onClick={nextSlide}
              aria-label="Next vehicles"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleVehicles.map((vehicle, index) => (
            <div 
              key={`${vehicle.id}-${index}`}
              className={cn(
                "bg-navy-800/50 rounded-xl p-6 backdrop-blur-sm transition-all duration-700",
                isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full flex items-center text-sm">
                  <Zap className="w-4 h-4 mr-1" />
                  Electric
                </div>
                <div className="absolute bottom-4 left-4 bg-white text-navy-900 px-4 py-2 rounded-lg font-bold text-lg">
                  {vehicle.price}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
              <p className="text-gray-300 mb-6">{vehicle.details}</p>
              
              <div className="flex justify-between items-center">
                <Button
                  variant="ghost"
                  className="text-accent-400 hover:text-accent-300 hover:bg-navy-700 px-0"
                >
                  View Details <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
                <Button
                  variant="accent"
                  className="bg-accent-500 hover:bg-accent-600"
                >
                  Configure
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg inline-flex items-center"
          >
            Explore All EVs <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveEVShowcase;