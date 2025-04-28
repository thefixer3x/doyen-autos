import React, { lazy, Suspense } from 'react';
import { Search, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

// Lazy load components below the fold
const FeaturedVehicles = lazy(() => import('./sections/FeaturedVehicles'));
const ExclusiveEVShowcase = lazy(() => import('./sections/ExclusiveEVShowcase'));
const Features = lazy(() => import('./sections/Features'));
const GreenInitiative = lazy(() => import('./sections/GreenInitiative'));
const OurStory = lazy(() => import('./sections/OurStory'));
const Financing = lazy(() => import('./sections/Financing'));
const Testimonials = lazy(() => import('./sections/Testimonials'));

export const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <div className="min-h-screen dark:bg-navy-900">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 to-navy-700/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg')] bg-cover bg-center"
          style={parallaxStyle}
        ></div>
        
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center relative z-20">
          <h1 
            className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Drive Your <span className="text-accent-400">Dreams</span> Today
          </h1>
          <p 
            className={`text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Lagos's premier automobile marketplace with unmatched selection, transparent pricing, and innovative financing options.
          </p>
          
          <div 
            className={`w-full max-w-3xl transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-full bg-white dark:bg-navy-800 rounded-full shadow-lg p-2 flex items-center mx-auto">
              <Search className="text-gray-400 dark:text-gray-500 ml-2 md:ml-4 flex-shrink-0" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by make, model, or features..."
                className="flex-1 px-2 md:px-4 py-2 focus:outline-none text-gray-800 dark:text-gray-200 dark:bg-navy-800 text-sm md:text-base w-full rounded-full"
                aria-label="Search vehicles"
              />
              <Button 
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-4 md:px-8 py-2 rounded-full transition-colors text-sm md:text-base whitespace-nowrap"
              >
                Search Now
              </Button>
            </div>
          </div>
          
          <div 
            className={`flex flex-col md:flex-row gap-4 mt-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              className="bg-accent-500 hover:bg-accent-600 text-white rounded-full px-8 py-3 font-semibold flex items-center"
            >
              Browse Inventory <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-3 font-semibold flex items-center"
            >
              Sell Your Car <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          
          <div 
            className={`absolute bottom-8 left-0 right-0 text-center transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={() => {
                document.getElementById('featured-vehicles')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white animate-bounce p-2"
              aria-label="Scroll down"
            >
              <ChevronDown size={36} />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white dark:bg-navy-900 py-6 shadow-md sticky top-16 z-30 border-b border-gray-100 dark:border-navy-700">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-8 md:justify-center">
            <QuickLink href="#featured-vehicles" label="Featured Vehicles" />
            <QuickLink href="#ev-showcase" label="Electric Vehicles" />
            <QuickLink href="#features" label="Why Choose Us" />
            <QuickLink href="#ev-initiative" label="EV Initiative" />
            <QuickLink href="#our-story" label="Our Story" />
            <QuickLink href="#financing" label="Financing" />
            <QuickLink href="#testimonials" label="Testimonials" />
          </div>
        </div>
      </section>

      {/* Suspense boundaries for lazy-loaded sections */}
      <div id="featured-vehicles">
        <Suspense fallback={<LoadingSection title="Featured Vehicles" />}>
          <FeaturedVehicles />
        </Suspense>
      </div>

      <div id="ev-showcase">
        <Suspense fallback={<LoadingSection title="Electric Vehicles" />}>
          <ExclusiveEVShowcase />
        </Suspense>
      </div>

      <div id="features">
        <Suspense fallback={<LoadingSection title="Why Choose Us" />}>
          <Features />
        </Suspense>
      </div>

      <div id="ev-initiative">
        <Suspense fallback={<LoadingSection title="EV Initiative" />}>
          <GreenInitiative />
        </Suspense>
      </div>

      <div id="our-story">
        <Suspense fallback={<LoadingSection title="Our Story" />}>
          <OurStory />
        </Suspense>
      </div>

      <div id="financing">
        <Suspense fallback={<LoadingSection title="Financing Options" />}>
          <Financing />
        </Suspense>
      </div>

      <div id="testimonials">
        <Suspense fallback={<LoadingSection title="Customer Testimonials" />}>
          <Testimonials />
        </Suspense>
      </div>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Subscribe to our newsletter for exclusive deals, new arrivals, and automotive insights.
            </p>
            <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-400 text-gray-800 dark:text-gray-200 dark:bg-navy-800"
              />
              <Button className="bg-accent-500 hover:bg-accent-600 text-white rounded-full px-6 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface QuickLinkProps {
  href: string;
  label: string;
}

const QuickLink: React.FC<QuickLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-gray-600 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 whitespace-nowrap px-4 py-2 font-medium transition-colors duration-200 flex items-center"
    >
      {label}
      <ChevronRight size={16} className="ml-1" />
    </a>
  );
};

const LoadingSection: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="py-16 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-accent-300 border-t-accent-600 rounded-full animate-spin mb-4"></div>
      <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">Loading {title}...</h3>
    </div>
  );
};

export default LandingPage;