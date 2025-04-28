import { useState, useEffect, useRef } from 'react';
import { createPlaceholderImage } from '../utils/image-helpers';

interface UseEnsureImageLoadedProps {
  src: string;
  fallbackSrc?: string;
}

export function useEnsureImageLoaded({ 
  src, 
  fallbackSrc = createPlaceholderImage()
}: UseEnsureImageLoadedProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const isMounted = useRef(true);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setCurrentSrc(src);

    const img = new Image();
    img.src = src;

    const handleLoad = () => {
      if (isMounted.current) {
        setIsLoading(false);
      }
    };

    const handleError = () => {
      if (isMounted.current) {
        console.warn(`Image failed to load: ${src}, using fallback`);
        setHasError(true);
        setIsLoading(false);
        setCurrentSrc(fallbackSrc);
      }
    };

    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      isMounted.current = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return { currentSrc, isLoading, hasError };
}