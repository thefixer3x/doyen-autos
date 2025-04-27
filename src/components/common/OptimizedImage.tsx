import React from 'react';
import { cn } from '../../utils/cn';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Check if the image source is a base64 data URI
  const isDataUri = src.startsWith('data:');
  
  // Generate WebP URL if the source is a JPEG or PNG and not a data URI
  const webpSrc = !isDataUri && src.match(/\.(jpe?g|png)$/i) ? src.replace(/\.(jpe?g|png)$/i, '.webp') : null;

  // Create a function to handle the image load event
  const handleLoad = () => {
    setIsLoading(false);
  };

  // Create a function to handle the image error event
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('🔍 Image error handler called');
    try {
      console.error(`Image failed to load: ${src}`);
      setIsLoading(false);
      setError(true);
      
      // Call the onError prop if it exists
      if (props.onError) {
        props.onError(e);
      }
    } catch (err) {
      console.error('Error in OptimizedImage handleError:', err);
    }
  };

  // Add srcset for responsive images if width is provided
  const generateSrcSet = () => {
    if (isDataUri || !width) return undefined;
    
    const baseSrc = src.replace(/\.(jpe?g|png)$/i, '');
    const ext = src.match(/\.(jpe?g|png)$/i)?.[0] || '.jpg';
    
    // Only generate srcSet if not a data URI
    return `${src} 1x, ${baseSrc}@2x${ext} 2x`;
  };

  const imgProps = {
    src,
    alt,
    width,
    height,
    loading: priority ? 'eager' : 'lazy',
    decoding: "async" as "async" | "sync" | "auto",
    onLoad: handleLoad,
    onError: handleError,
    srcSet: generateSrcSet(),
    className: cn(
      'transition-opacity duration-300',
      isLoading ? 'opacity-0' : 'opacity-100',
      error ? 'hidden' : 'block'
    ),
    ...props
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img {...imgProps} />
        </picture>
      ) : (
        <img {...imgProps} />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
};