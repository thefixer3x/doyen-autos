import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn('card', className)} {...props}>
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader = ({ className, children, ...props }: CardHeaderProps) => {
  return (
    <div className={cn('p-5 border-b border-gray-100 dark:border-gray-700', className)} {...props}>
      {children}
    </div>
  );
};

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardTitle = ({ className, children, ...props }: CardTitleProps) => {
  return (
    <h3 className={cn('text-lg font-medium', className)} {...props}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardDescription = ({ className, children, ...props }: CardDescriptionProps) => {
  return (
    <p className={cn('text-sm text-gray-500 dark:text-gray-400', className)} {...props}>
      {children}
    </p>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardContent = ({ className, children, ...props }: CardContentProps) => {
  return (
    <div className={cn('p-5', className)} {...props}>
      {children}
    </div>
  );
};

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter = ({ className, children, ...props }: CardFooterProps) => {
  return (
    <div
      className={cn('p-5 border-t border-gray-100 dark:border-gray-700', className)}
      {...props}
    >
      {children}
    </div>
  );
};