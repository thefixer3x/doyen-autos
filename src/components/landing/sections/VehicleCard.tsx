import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Eye } from 'lucide-react';
import { OptimizedImage } from '../../common/OptimizedImage';
import { Button } from '../../ui/Button';
import { cn } from '../../../utils/cn';

interface VehicleCardProps {
  images: string[];
  name: string;
  details: string;
  price?: string;
  onViewDetails?: () => void;
  onQuickView?: () => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  images,
  name,
  details,
  price,
  onViewDetails,
  onQuickView,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);
  
  // Add a ref to track mounted state
  const isMounted = useRef(true);

  // Use effect for cleanup
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Handle image navigation
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Replace the existing handleImageError function with this improved version
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    try {
      // Only update state if component is still mounted
      if (isMounted.current) {
        console.warn('Vehicle image failed to load, using fallback');
        setImageError(true);
        
        // Set a fallback image - data URI for a simple placeholder
        const fallbackImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjYTBhMGEwIj5JbWFnZSB1bmF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=";
        
        // Safely update the image source
        if (e.target) {
          (e.target as HTMLImageElement).src = fallbackImage;
        }
      }
    } catch (err) {
      console.error('Error in handleImageError:', err);
      // Don't throw or rethrow errors here - silently handle them
    }
  };

  return (
    <article 
      className={cn(
        "group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300",
        isHovered ? "shadow-lg transform -translate-y-1" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      aria-labelledby={`vehicle-${name.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        {!imageError ? (
          <div className="w-full h-60 flex items-center justify-center">
            <OptimizedImage
              src={images[currentImageIndex]}
              alt={`${name} - View ${currentImageIndex + 1}`}
              className="w-3/4 h-3/4 object-contain" // Scaled to 75% and centered
              width={480}
              height={270}
              onError={handleImageError}
            />
          </div>
        ) : (
          <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Image unavailable</p>
          </div>
        )}
        
        {/* Overlay with gradient */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 z-10",
          isHovered ? "opacity-100" : "opacity-0"
        )}></div>
        
        {/* Image navigation buttons */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 text-gray-800 z-20 transition-opacity",
                isHovered ? "opacity-100" : "opacity-0"
              )}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 text-gray-800 z-20 transition-opacity",
                isHovered ? "opacity-100" : "opacity-0"
              )}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
        
        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentImageIndex === idx 
                    ? "bg-white w-4" 
                    : "bg-white/50 hover:bg-white/80"
                )}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 
            id={`vehicle-${name.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-xl font-bold text-gray-900 mb-1 group-hover:text-accent-600 transition-colors"
          >
            {name}
          </h3>
          <p className="text-gray-600">{details}</p>
          {/* Price displayed in the details section */}
          {price && (
            <p className="mt-2 text-lg font-bold text-navy-800">{price}</p>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            className="text-accent-600 hover:text-accent-700 hover:bg-accent-50 px-0 font-semibold inline-flex items-center"
            onClick={onViewDetails}
          >
            View Details <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
          
          <Button
            variant="primary"
            className="bg-navy-700 hover:bg-navy-800 text-white rounded-lg"
            onClick={onQuickView}
          >
            Quick View <Eye className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
};