import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
  children: React.ReactNode;
}

export const Badge = ({ 
  variant = 'default', 
  className, 
  children, 
  ...props 
}: BadgeProps) => {
  const baseStyles = 'badge';
  
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    info: 'badge-info',
  };

  return (
    <span 
      className={cn(baseStyles, variantStyles[variant], className)} 
      {...props}
    >
      {children}
    </span>
  );
};