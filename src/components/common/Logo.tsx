import React, { useState, useEffect, useRef } from 'react';

type LogoSize = 'small' | 'medium' | 'large';

interface LogoProps {
  size?: LogoSize;
  isWhite?: boolean;
  className?: string;
}

// Make sure we're declaring the component with the name "Logo"
const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  isWhite = false,
  className = ''
}) => {
  // Reference to track if component is mounted
  const isMounted = useRef(true);
  
  // Define primary logo path
  const primaryLogo = '/doyen-logo.png'; // Path to the image you shared
  
  // Define size-specific paths
  const logoSizes = {
    small: '/icons/logo-48.png',
    medium: primaryLogo,
    large: '/icons/logo-144.png'
  };
  
  // Ensure size is valid
  const safeSize: LogoSize = (size in logoSizes) ? size : 'medium';
  
  // Create SVG fallback based on the actual logo design
  const fallbackLogo = `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#0D1A2A"/>
      <text x="100" y="100" font-family="Arial, sans-serif" font-size="24" 
            font-weight="bold" fill="#D0D0D0" text-anchor="middle">DOYEN</text>
      <text x="100" y="130" font-family="Arial, sans-serif" font-size="18" 
            fill="#D0D0D0" text-anchor="middle">AUTOS</text>
      <text x="100" y="150" font-family="Arial, sans-serif" font-size="10" 
            fill="#D0D0D0" text-anchor="middle">DRIVEN BY EXCELLENCE</text>
    </svg>
  `)}`;

  // Initialize with a safe default
  const [currentSrc, setCurrentSrc] = useState<string>(isWhite ? "/doyen-logo-white.png" : logoSizes[safeSize]);
  const [usingFallback, setUsingFallback] = useState<boolean>(false);
  
  // Update source when props change
  useEffect(() => {
    if (isMounted.current) {
      setCurrentSrc(isWhite ? "/doyen-logo-white.png" : logoSizes[safeSize]);
    }
    
    return () => {
      isMounted.current = false;
    };
  }, [isWhite, safeSize]);
  
  // Error handler with a single try/catch to prevent cascading errors
  const handleError = () => {
    try {
      if (isMounted.current && !usingFallback) {
        console.warn('Logo image failed to load, using SVG fallback');
        setUsingFallback(true);
        setCurrentSrc(fallbackLogo);
      }
    } catch (err) {
      // Last resort - if even this fails, do nothing more to prevent errors
      console.error('Critical error in logo component:', err);
    }
  };
  
  return (
    <img 
      src={currentSrc} 
      alt="Doyen Autos" 
      onError={handleError}
      className={className}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

// Both types of exports to make sure it works regardless of how it's imported
export default Logo;
export { Logo };