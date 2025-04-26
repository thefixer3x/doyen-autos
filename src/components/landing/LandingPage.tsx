import React, { lazy, Suspense } from 'react';
import { Search, ChevronRight } from 'lucide-react';

// Lazy load components below the fold
const FeaturedVehicles = lazy(() => import('./sections/FeaturedVehicles'));
const Features = lazy(() => import('./sections/Features'));
const GreenInitiative = lazy(() => import('./sections/GreenInitiative'));
const OurStory = lazy(() => import('./sections/OurStory'));
const Financing = lazy(() => import('./sections/Financing'));
const Testimonials = lazy(() => import('./sections/Testimonials'));

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-navy-600 to-navy-900">
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Find Your Perfect Ride
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl px-4">
            The largest selection of quality vehicles in Lagos, with transparent pricing and financing options.
          </p>
          <div className="w-full max-w-3xl bg-white rounded-full shadow-lg p-2 flex items-center mx-4">
            <Search className="text-gray-400 ml-2 md:ml-4 flex-shrink-0" size={20} />
            <input
              type="text"
              placeholder="Search by make, model, or features..."
              className="flex-1 px-2 md:px-4 py-2 focus:outline-none text-gray-800 text-sm md:text-base w-full"
              aria-label="Search vehicles"
            />
            <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-4 md:px-8 py-2 rounded-full transition-colors text-sm md:text-base whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Suspense boundaries for lazy-loaded sections */}
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <FeaturedVehicles />
      </Suspense>

      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Features />
      </Suspense>

      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <GreenInitiative />
      </Suspense>

      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <OurStory />
      </Suspense>

      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Financing />
      </Suspense>

      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Testimonials />
      </Suspense>
    </div>
  );
};