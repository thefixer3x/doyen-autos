import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Zap, Heart, Eye } from 'lucide-react';
import { Button } from '../../ui/Button';
import { cn } from '../../../utils/cn';

interface VehicleCardProps {
  images: string[];
  name: string;
  details: string;
  price?: string;
  isElectric?: boolean;
  onViewDetails?: () => void;
  onQuickView?: () => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  images,
  name,
  details,
  price,
  isElectric = false,
  onViewDetails,
  onQuickView,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
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
    if (e) e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  // Improved image error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    try {
      // Only update state if component is still mounted
      if (isMounted.current && !imageError) {
        console.warn(`Vehicle image failed to load: ${name}`, e);
        setImageError(true);
        
        // Set a fallback image - data URI for a simple placeholder
        const fallbackImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjYTBhMGEwIj5JbWFnZSB1bmF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=";
        
        // Safely update the image source
        if (e.target instanceof HTMLImageElement) {
          e.target.src = fallbackImage;
        }
      }
    } catch (err) {
      console.error('Error in handleImageError:', err);
    }
  };

  // Generate a unique ID for accessibility
  const vehicleId = `vehicle-${name.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <article 
      className={cn(
        "group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 h-full flex flex-col",
        isHovered ? "shadow-lg transform -translate-y-1" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      aria-labelledby={vehicleId}
    >
      {/* Image container with fixed height to ensure consistency */}
      <div className="relative w-full h-52 flex-shrink-0 bg-gray-50">
        {!imageError ? (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={images[currentImageIndex] || images[0]}
              alt={`${name} - View ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain p-2"
              onError={handleImageError}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Image unavailable</p>
          </div>
        )}
        
        {/* Overlay with gradient */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 z-10",
          isHovered ? "opacity-100" : "opacity-0"
        )}></div>
        
        {/* Favorite button */}
        <button 
          className="absolute top-4 right-4 z-30 p-2 bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-110 focus:outline-none"
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            size={20} 
            className={cn(
              "transition-colors duration-300",
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
            )} 
          />
        </button>
        
        {/* Electric badge */}
        {isElectric && (
          <div className="absolute top-4 left-4 z-30 bg-accent-500 text-white px-3 py-1 rounded-full flex items-center text-sm shadow-md">
            <Zap className="w-4 h-4 mr-1" />
            Electric
          </div>
        )}
        
        {/* Price tag */}
        {price && (
          <div className="absolute bottom-4 left-4 z-30 bg-white text-gray-900 px-4 py-2 rounded-lg font-bold text-lg shadow-md">
            {price}
          </div>
        )}
        
        {/* Image navigation buttons - only show when multiple images */}
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
              <ChevronRight className="rotate-180" size={20} />
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
      
      {/* Content container */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 flex-grow">
          <h3 
            id={vehicleId}
            className="text-xl font-bold text-gray-900 mb-1 group-hover:text-accent-600 transition-colors"
          >
            {name}
          </h3>
          <p className="text-gray-600">{details}</p>
        </div>
        
        <div className="mt-auto flex justify-between items-center">
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