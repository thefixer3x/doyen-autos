import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface MultiImageViewerProps {
  images: string[];
  alt: string;
  className?: string;
}

export const MultiImageViewer: React.FC<MultiImageViewerProps> = ({ 
  images, 
  alt,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) {
    return (
      <div className={cn("bg-gray-200 w-full h-60 flex items-center justify-center", className)}>
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  return (
    <div 
      className={cn("relative w-full h-60", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main image */}
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <img 
          src={images[currentIndex]} 
          alt={`${alt} - View ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain p-2" 
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMjAwIDE1MCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjOTk5OTk5Ij5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
          }}
        />
      </div>
      
      {/* Navigation buttons - only visible on hover and when multiple images */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 text-gray-800 transition-opacity",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 text-gray-800 transition-opacity",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
      
      {/* Image counter/indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentIndex === idx 
                  ? "bg-white w-4" 
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};