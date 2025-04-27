import React, { useState, useEffect, useRef } from 'react';

type LogoSize = 'small' | 'medium' | 'large';

interface LogoProps {
  size?: LogoSize;
  isWhite?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  isWhite = false,
  className = ''
}) => {
  // Reference to track if component is mounted
  const isMounted = useRef(true);
  
  // Define size-specific paths
  const logoSizes = {
    small: '/icons/logo-48.png',
    medium: isWhite ? '/doyen-logo-white.png' : '/doyen-logo.png',
    large: '/icons/logo-144.png'
  };
  
  // Ensure size is valid
  const safeSize: LogoSize = (size in logoSizes) ? size : 'medium';
  
  // Create an enhanced SVG fallback that better represents the Doyen logo
  const fallbackLogo = `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
      <rect width="240" height="240" fill="#102a43"/>
      <g fill="#d0d0d0">
        <!-- Stylized D with car silhouette -->
        <path d="M60,50 L60,190 L120,190 C155,190 180,165 180,120 C180,75 155,50 120,50 Z M80,70 L115,70 C140,70 155,90 155,120 C155,150 140,170 115,170 L80,170 Z"/>
        <path d="M100,100 Q130,95 145,115 L155,125 Q157,127 159,125 L165,120 Q120,85 95,100 Z" fill="${isWhite ? '#ffffff' : '#22b573'}"/>
        
        <!-- DOYEN text -->
        <text x="120" y="220" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">DOYEN AUTOS</text>
      </g>
    </svg>
  `)}`;

  // Initialize with a safe default
  const [currentSrc, setCurrentSrc] = useState<string>(logoSizes[safeSize]);
  const [usingFallback, setUsingFallback] = useState<boolean>(false);
  
  // Update source when props change
  useEffect(() => {
    if (isMounted.current) {
      setCurrentSrc(logoSizes[safeSize]);
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

  // Calculate dimensions based on size
  const dimensions = {
    small: { width: 48, height: 48 },
    medium: { width: 150, height: 50 },
    large: { width: 144, height: 144 }
  }[safeSize];
  
  return (
    <img 
      src={currentSrc} 
      alt="Doyen Autos" 
      onError={handleError}
      className={className}
      width={dimensions.width}
      height={dimensions.height}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

// Both types of exports to make sure it works regardless of how it's imported
export default Logo;