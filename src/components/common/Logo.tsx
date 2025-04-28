import React from 'react';

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
  return (
    <span 
      className={`font-bold ${isWhite ? 'text-white' : 'text-gray-900'} ${
        size === 'small' ? 'text-lg' :
        size === 'large' ? 'text-3xl' :
        'text-2xl'
      } ${className}`}
    >
      DOYEN AUTOS
    </span>
  );
};

export default Logo;