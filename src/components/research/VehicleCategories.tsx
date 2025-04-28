import React from 'react';
import { cn } from '../../utils/cn';

interface VehicleCategory {
  type: string;
  icon: string;
  href: string;
}

const categories: VehicleCategory[] = [
  {
    type: 'EV',
    icon: '/icons/vehicle-ev.svg',
    href: '/research/ev'
  },
  {
    type: 'SUV',
    icon: '/icons/vehicle-suv.svg',
    href: '/research/suv'
  },
  {
    type: 'Truck',
    icon: '/icons/vehicle-truck.svg',
    href: '/research/truck'
  },
  {
    type: 'Sedan',
    icon: '/icons/vehicle-sedan.svg',
    href: '/research/sedan'
  },
  {
    type: 'Hybrid',
    icon: '/icons/vehicle-hybrid.svg',
    href: '/research/hybrid'
  }
];

export const VehicleCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Research By Type
        </h2>
        
        <div className="flex flex-wrap justify-center items-end gap-8 md:gap-12">
          {categories.map((category) => (
            <a
              key={category.type}
              href={category.href}
              className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative w-32 h-24 mb-4">
                {/* Vehicle icon */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-blue-100/50 rounded-lg" />
                <img
                  src={category.icon}
                  alt={`${category.type} icon`}
                  className="w-full h-full object-contain p-2 relative z-10"
                />
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
              
              <span className="text-lg font-semibold text-gray-900 group-hover:text-accent-600 transition-colors">
                {category.type}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};