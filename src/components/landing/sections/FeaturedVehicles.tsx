import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

const FeaturedVehicles: React.FC = () => {
  const vehicles = [
    {
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      name: 'Tesla Model Y',
      details: 'Long Range • Electric • 315mi range',
      isElectric: true
    },
    {
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      name: 'Toyota Camry',
      details: 'XSE • 26,532 miles',
      isElectric: false
    },
    {
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      name: 'BMW i4',
      details: 'eDrive40 • Electric • 300mi range',
      isElectric: true
    },
    {
      image: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg',
      name: 'Honda Accord',
      details: 'EX-L • 31,245 miles',
      isElectric: false
    },
    {
      image: 'https://images.pexels.com/photos/3802512/pexels-photo-3802512.jpeg',
      name: 'Porsche Taycan',
      details: 'Turbo S • Electric • 280mi range',
      isElectric: true
    },
    {
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      name: 'Ford F-150',
      details: 'XLT • 18,324 miles',
      isElectric: false
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">
          Featured Vehicles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 md:h-64 object-cover"
                  loading="lazy"
                />
                {vehicle.isElectric && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full flex items-center text-sm">
                    <Zap className="w-4 h-4 mr-1" />
                    Electric
                  </div>
                )}
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4">{vehicle.details}</p>
                <a
                  href={`/inventory/${vehicle.name.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
                >
                  View Details
                  <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;