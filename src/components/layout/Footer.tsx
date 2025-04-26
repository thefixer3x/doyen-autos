import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold text-white">Doyen Autos</span>
            <p className="mt-2 text-gray-400">
              Your trusted partner in premium automotive solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/" className="text-base text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/inventory" className="text-base text-gray-300 hover:text-white">Inventory</a></li>
              <li><a href="/services" className="text-base text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/about" className="text-base text-gray-300 hover:text-white">About</a></li>
              <li><a href="/contact" className="text-base text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-300">Lagos, Nigeria</li>
              <li className="text-base text-gray-300">+234 123 456 7890</li>
              <li className="text-base text-gray-300">info@doyenautos.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Follow Us</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0">
            &copy; {new Date().getFullYear()} Doyen Autos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};