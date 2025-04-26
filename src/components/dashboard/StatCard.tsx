import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '../../utils/cn';

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  className,
}) => {
  return (
    <Card className={cn("transition-all duration-300 hover:translate-y-[-4px]", className)}>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
            <h3 className="text-2xl font-semibold mt-1 dark:text-white">{value}</h3>
          </div>
          <div className="p-3 rounded-lg bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400">
            {icon}
          </div>
        </div>
        
        <div className="mt-4 flex items-center">
          <div
            className={cn(
              "flex items-center text-sm font-medium",
              change >= 0
                ? "text-accent-600 dark:text-accent-400"
                : "text-error-600 dark:text-error-400"
            )}
          >
            {change >= 0 ? (
              <ArrowUpRight size={16} className="mr-1" />
            ) : (
              <ArrowDownRight size={16} className="mr-1" />
            )}
            {Math.abs(change)}%
          </div>
          <span className="text-gray-500 text-sm ml-2 dark:text-gray-400">from last month</span>
        </div>
      </div>
    </Card>
  );
};