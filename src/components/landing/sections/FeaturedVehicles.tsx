import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { VehicleCard } from './VehicleCard';
import { Button } from '../../ui/Button';
import { ImageViewerModal } from '../../ui/ImageViewerModal';
import { useInView } from '../../../hooks/useInView';

// Ensure image URLs are correct and accessible
const VEHICLE_DATA = [
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
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
    ],
    name: 'Toyota Camry XSE',
    details: '26,532 miles • 2.5L 4-cylinder',
    price: '$25,990',
    isElectric: false
  },
  {
    id: '3',
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
    id: '4',
    images: [
      'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg',
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
    ],
    name: 'Honda Accord EX-L',
    details: '31,245 miles • 1.5L Turbo',
    price: '$28,550',
    isElectric: false
  },
  {
    id: '5',
    images: [
      'https://images.pexels.com/photos/3802512/pexels-photo-3802512.jpeg',
      'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg',
    ],
    name: 'Porsche Taycan Turbo S',
    details: '280mi range • Electric • Performance Package',
    price: '$89,990',
    isElectric: true
  },
  {
    id: '6',
    images: [
      'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
    ],
    name: 'Ford F-150 XLT',
    details: '18,324 miles • 5.0L V8',
    price: '$42,775',
    isElectric: false
  }
];

const FeaturedVehicles: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  // Preload images to prevent layout shifts
  useEffect(() => {
    const preloadImages = async () => {
      const imagesToPreload = VEHICLE_DATA.flatMap(vehicle => vehicle.images.slice(0, 1));
      
      for (const src of imagesToPreload) {
        const img = new Image();
        img.src = src;
      }
    };
    
    preloadImages();
  }, []);
  
  // State for image viewer modal
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<{
    images: string[];
    name: string;
    currentImageIndex: number;
  } | null>(null);

  // Function to handle quick view
  const handleQuickView = (vehicle: typeof VEHICLE_DATA[0], imageIndex: number = 0) => {
    setSelectedVehicle({
      images: vehicle.images,
      name: vehicle.name,
      currentImageIndex: imageIndex
    });
    setIsImageViewerOpen(true);
  };

  // Function to handle view details
  const handleViewDetails = (vehicleId: string) => {
    console.log('View details for vehicle ID:', vehicleId);
    // You would typically navigate to a detail page here
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 < VEHICLE_DATA.length ? prevIndex + 3 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 >= 0 ? prevIndex - 3 : Math.floor(VEHICLE_DATA.length / 3) * 3));
  };

  // Auto-scroll every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  const visibleVehicles = VEHICLE_DATA.slice(currentIndex, currentIndex + 3);
  // If we don't have enough vehicles to fill the row, add from the beginning
  if (visibleVehicles.length < 3) {
    visibleVehicles.push(...VEHICLE_DATA.slice(0, 3 - visibleVehicles.length));
  }

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
      id="featured-vehicles"
      aria-labelledby="featured-vehicles-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 id="featured-vehicles-heading" className="text-3xl md:text-4xl font-bold text-gray-900 relative">
              Featured Vehicles
              <span className="absolute left-0 bottom-0 w-1/3 h-1 bg-accent-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              Explore our premium selection of handpicked vehicles, each one meticulously inspected to ensure quality.
            </p>
          </div>
          <div className="flex items-center mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="p-2 rounded-full mr-2"
              onClick={prevSlide}
              aria-label="Previous vehicles"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button 
              variant="outline" 
              className="p-2 rounded-full"
              onClick={nextSlide}
              aria-label="Next vehicles"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleVehicles.map((vehicle, index) => (
              <div 
                key={`${vehicle.id}-${index}`}
                className={`transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <VehicleCard
                  images={vehicle.images}
                  name={vehicle.name}
                  details={vehicle.details}
                  price={vehicle.price}
                  isElectric={vehicle.isElectric}
                  onViewDetails={() => handleViewDetails(vehicle.id)}
                  onQuickView={() => handleQuickView(vehicle)}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(VEHICLE_DATA.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === index
                      ? 'bg-accent-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-3 rounded-full inline-flex items-center font-semibold"
          >
            Browse All Vehicles <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {selectedVehicle && (
        <ImageViewerModal
          isOpen={isImageViewerOpen}
          onClose={() => setIsImageViewerOpen(false)}
          imageSrc={selectedVehicle.images[selectedVehicle.currentImageIndex]}
          altText={selectedVehicle.name}
          caption={selectedVehicle.name}
        />
      )}
    </section>
  );
};

export default FeaturedVehicles;