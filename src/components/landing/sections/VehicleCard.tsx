import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { OptimizedImage } from '../../common/OptimizedImage';

interface VehicleCardProps {
  image: string;
  name: string;
  details: string;
  isElectric?: boolean;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  image,
  name,
  details,
  isElectric = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9 relative">
        <OptimizedImage
          src={image}
          alt={name}
          className="w-full h-48 md:h-64 object-cover"
          width={640}
          height={360}
        />
        {isElectric && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full flex items-center text-sm">
            <Zap className="w-4 h-4 mr-1" />
            Electric
          </div>
        )}
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 mb-4">{details}</p>
        <a
          href={`/inventory/${name.toLowerCase().replace(' ', '-')}`}
          className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
        >
          View Details
          <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </a>
      </div>
    </div>
  );
};