import React from 'react';
import { X } from 'lucide-react';
import { Modal } from './Modal';
import { OptimizedImage } from '../common/OptimizedImage';
import { cn } from '../../utils/cn';

interface ImageViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
  caption?: string;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  altText,
  caption,
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="bg-transparent p-0 max-w-6xl w-full mx-4"
      showCloseButton={false}
    >
      <div className="relative flex flex-col items-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white z-20 transition-colors"
          aria-label="Close image viewer"
        >
          <X size={24} />
        </button>
        
        {/* Image container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-accent-300 border-t-accent-600 rounded-full animate-spin"></div>
            </div>
          )}
          
          {!imageError ? (
            <img
              src={imageSrc}
              alt={altText}
              className={cn(
                "max-w-full max-h-[80vh] object-contain rounded shadow-2xl",
                !imageLoaded && "opacity-0",
                imageLoaded && "opacity-100 transition-opacity duration-300"
              )}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded">
              <p className="text-gray-500">Image not available</p>
            </div>
          )}
        </div>
        
        {/* Optional caption */}
        {caption && imageLoaded && (
          <div className="mt-4 bg-white dark:bg-gray-800 p-3 rounded-lg max-w-full">
            <p className="text-gray-700 dark:text-gray-300 text-center">{caption}</p>
          </div>
        )}
      </div>
    </Modal>
  );
};