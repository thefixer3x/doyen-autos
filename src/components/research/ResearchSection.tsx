import React from 'react';
import { VehicleCategories } from './VehicleCategories';

export const ResearchSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <VehicleCategories />
      
      {/* Sponsored Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Sponsored Card */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
              alt="2026 Honda Passport"
              className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium mb-2">Photo Sponsored By</p>
                <h3 className="text-2xl font-bold mb-2">2026 Honda Passport</h3>
                <a 
                  href="https://www.honda.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-accent-300 transition-colors"
                >
                  Learn More at ShopHonda.com
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Second Sponsored Card */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
              alt="Trail-Ready Capability"
              className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium mb-2">Photo Sponsored By</p>
                <h3 className="text-2xl font-bold mb-2">Trail-Ready Capability</h3>
                <a 
                  href="https://www.honda.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-accent-300 transition-colors"
                >
                  Learn More at ShopHonda.com
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};