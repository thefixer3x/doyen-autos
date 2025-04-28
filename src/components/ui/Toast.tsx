import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '../../utils/cn';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  type: ToastType;
  message: string;
  onClose: () => void;
  duration?: number;
  className?: string;
}

const icons = {
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  error: <AlertCircle className="w-5 h-5 text-red-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />
};

export const Toast: React.FC<ToastProps> = ({
  type,
  message,
  onClose,
  duration = 5000,
  className
}) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        'flex items-center p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800',
        'transform transition-all duration-300 ease-in-out',
        className
      )}
      role="alert"
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="ml-3 mr-8 text-sm font-medium text-gray-900 dark:text-gray-100">
        {message}
      </div>
      <button
        onClick={onClose}
        className="ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};