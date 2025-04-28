import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
          <a href="/privacy-policy" className="text-primary-600 hover:underline">
            Learn more
          </a>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => setShowBanner(false)}>
            Decline
          </Button>
          <Button onClick={acceptCookies}>
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};