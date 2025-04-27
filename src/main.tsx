import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Preload key assets
const preloadAssets = async () => {
  // Preload critical logos
  const logoUrls = [
    '/doyen-logo.png', 
    '/doyen-logo-white.png',
    '/icons/logo-48.png',
    '/icons/logo-144.png'
  ];
  
  // Preload each image
  logoUrls.forEach(url => {
    const img = new Image();
    img.src = url;
    // Add error handler to avoid console errors during preload
    img.onerror = () => {
      console.warn(`Failed to preload image: ${url}`);
    };
  });
};

// Call the preload function before rendering
preloadAssets().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});