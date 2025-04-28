import React from 'react';
import { cn } from '../../utils/cn';
import { handleImageError } from '../../utils/image-helpers';

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

  const isDataUri = src.startsWith('data:');
  const webpSrc = !isDataUri && src.match(/\.(jpe?g|png)$/i) ? src.replace(/\.(jpe?g|png)$/i, '.webp') : null;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setError(true);
    
    if (props.onError) {
      props.onError(e);
    }
  };

  const generateSrcSet = () => {
    if (isDataUri || !width) return undefined;
    
    const baseSrc = src.replace(/\.(jpe?g|png)$/i, '');
    const ext = src.match(/\.(jpe?g|png)$/i)?.[0] || '.jpg';
    
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
    onError: handleImageError,
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