import React from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/doyen-logo.png"
              alt="Doyen Autos"
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAoCAYAAAA16j4lAAADJElEQVR4nO2cT2sTQRjGn9m62rrVVmvFqiheCp704EFBDx5E/Ac96cWTX8GjFEE8ehE/gFAPHgQP6kHx5MWDKA0UihbaJN3NxmTiLBo3u5PZzGzmeX4Q2s7OvO/uvO+zM5NNE4AIgmDe9/2LQRBcbTabZ4UQszEVQxDiOEYURfB9H1EUwfM8eJ6HMAyRpinSNEUQBEiSBEmSII5jJEmCOI6RZRnyPEee58jzHFJKSCmRZRnyPIeUElmWQSmFPM+hlIJSCkopKKWQZRmyLEOe51BKQSmFPM+RZRmUUkjTFGmaIk1TJEmCJEkQxzGiKEIURQjDEEEQwPd9+L6PKIoQBAE8z4Pv+/A8D2EYIgxDBEGAMAyRJAmSJEGSJIjjGHEcI0kSJEmCOI4RxzHiOEYcx4jjGHEcI45jxHGMJEkQxzGSJEEcx4jjGHEcI45jJEmCJEkQxzGSJEEURQjDEJ7nwfd9hGGIIAgQBAF834fneQjDEJ7nwfM8hGGIIAgQBAE8z4Pv+/B9H77vw/d9eJ6HMAzh+z6CIEAQBAiCAEEQwPd9+L6PIAgQBAF834fneQiCAJ7nwfd9eJ6HMAzheR6CIEAQBPvXDcMQYRgiDEOEYYggCBAEAYIggO/78H0fQRAgCAIEQYAgCBAEAYIgQBAECIIAvh8gDEMEQYAwDBEEAYIgQBAE8H0fQRAgCAL4vg/f9+H7PnzfRxAECIIAnufB8zx4ngfP8+B5HjzPg+d58DwPnufB8zx4ngff9+H7PnzfRxAECIIAQRAgCAIEQYAwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDBGGIcIwRBiGCMMQYRgiDEOEYYgwDPEbCZqxE+T5RkIAAAAASUVORK5CYII=';
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/inventory" className="text-gray-600 hover:text-gray-900">Inventory</a>
            <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a
              href="/book"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Home</a>
            <a href="/inventory" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Inventory</a>
            <a href="/services" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Services</a>
            <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">About</a>
            <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Contact</a>
            <a
              href="/book"
              className="block w-full px-4 py-2 text-center font-medium text-white bg-accent-600 hover:bg-accent-700 rounded-md"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};