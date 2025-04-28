import React, { useState } from 'react';
import { Search, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-navy-900">404</h1>
        
        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          Oops! The page you're looking for seems to have driven off. Let's help you find your way back.
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="mt-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our site..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <Button type="submit" className="mt-4 w-full">
            Search
          </Button>
        </form>

        {/* Navigation Links */}
        <div className="mt-8 space-y-4">
          <a
            href="/"
            className="flex items-center justify-center text-accent-600 hover:text-accent-700 font-medium"
          >
            <Home className="mr-2" size={18} />
            Back to Homepage
          </a>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/inventory" className="text-gray-600 hover:text-accent-600">Browse Inventory</a>
            <a href="/about" className="text-gray-600 hover:text-accent-600">About Us</a>
            <a href="/contact" className="text-gray-600 hover:text-accent-600">Contact</a>
            <a href="/blog" className="text-gray-600 hover:text-accent-600">Blog</a>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center text-gray-600 hover:text-accent-600"
        >
          <ArrowLeft className="mr-2" size={18} />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;