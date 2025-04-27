import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { VehicleCard } from './VehicleCard';
import { Button } from '../../ui/Button';
import { ImageViewerModal } from '../../ui/ImageViewerModal';
import { useInView } from '../../../hooks/useInView';

const FeaturedVehicles: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  // State for image viewer modal
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<{
    images: string[];
    name: string;
    currentImageIndex: number;
  } | null>(null);
  
  const vehicles = [
    {
      id: '1',
      images: [
        'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      name: 'Tesla Model Y',
      details: 'Long Range • 315mi range',
      price: '$45,990',
    },
    {
      id: '2',
      images: [
        'https://images.unsplash.com/photo-1590510575123-c6db1cf6522d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1599912027611-484b9fc447af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1583267746897-2cf530ce14c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      name: 'Toyota Camry XSE',
      details: '26,532 miles • 2.5L 4-cylinder',
      price: '$25,990',
    },
    {
      id: '3',
      images: [
        'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      name: 'BMW i4 eDrive40',
      details: '300mi range • Premium Package',
      price: '$52,800',
    },
    {
      id: '4',
      images: [
        'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1622933617059-6aaabb9e8c55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1629184898348-3da0d5117564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      name: 'Honda Accord EX-L',
      details: '31,245 miles • 1.5L Turbo',
      price: '$28,550',
    },
    {
      id: '5',
      images: [
        'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1608658232586-9c4684999fc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      name: 'Porsche Taycan Turbo S',
      details: '280mi range • Performance Package',
      price: '$89,990',
    },
    {
      id: '6',
      images: [
        'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1604497181015-76590d828b75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ],
      name: 'Ford F-150 XLT',
      details: '18,324 miles • 5.0L V8',
      price: '$42,775',
    }
  ];

  // Function to handle quick view
  const handleQuickView = (vehicle: typeof vehicles[0], imageIndex: number = 0) => {
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
    setCurrentIndex((prevIndex) => (prevIndex + 3 < vehicles.length ? prevIndex + 3 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 >= 0 ? prevIndex - 3 : Math.floor(vehicles.length / 3) * 3));
  };

  // Auto-scroll every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  const visibleVehicles = vehicles.slice(currentIndex, currentIndex + 3);
  // If we don't have enough vehicles to fill the row, add from the beginning
  if (visibleVehicles.length < 3) {
    visibleVehicles.push(...vehicles.slice(0, 3 - visibleVehicles.length));
  }

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
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
                  onViewDetails={() => handleViewDetails(vehicle.id)}
                  onQuickView={() => handleQuickView(vehicle)}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(vehicles.length / 3) }).map((_, index) => (
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