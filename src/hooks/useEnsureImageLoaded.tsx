import { useState, useEffect } from 'react';

interface UseEnsureImageLoadedProps {
  src: string;
  fallbackSrc?: string;
}

/**
 * Custom hook to ensure images are loaded properly with fallback
 * 
 * @param src Primary image source
 * @param fallbackSrc Optional fallback image source
 * @returns An object containing the current source and loading state
 */
export function useEnsureImageLoaded({ 
  src, 
  fallbackSrc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjYTBhMGEwIj5JbWFnZSB1bmF2YWlsYWJsZTwvdGV4dD48L3N2Zz4="
}: UseEnsureImageLoadedProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    // Reset states when source changes
    setIsLoading(true);
    setHasError(false);
    setCurrentSrc(src);

    // Pre-load the image to check if it loads correctly
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      console.warn(`Image failed to load: ${src}, using fallback`);
      setHasError(true);
      setIsLoading(false);
      setCurrentSrc(fallbackSrc);
    };

    return () => {
      // Clean up by removing event listeners
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return { currentSrc, isLoading, hasError };
}