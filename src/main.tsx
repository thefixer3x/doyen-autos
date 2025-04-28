import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { checkFeatureSupport } from './utils/browser-detection';
import { reportWebVitals } from './utils/performance';

// Check browser features
const features = checkFeatureSupport();
console.log('Browser features:', features);

// Preload critical assets
const preloadAssets = async () => {
  const logoUrls = [
    '/doyen-logo.png', 
    '/doyen-logo-white.png',
    '/icons/logo-48.png',
    '/icons/logo-144.png'
  ];
  
  const preloadPromises = logoUrls.map(url => {
    const img = new Image();
    return new Promise((resolve) => {
      img.onload = img.onerror = resolve;
      img.src = url;
    });
  });

  await Promise.all(preloadPromises);
};

// Initialize app with performance monitoring
const initApp = async () => {
  try {
    await preloadAssets();
    
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    // Report initial page load metrics
    const metrics = performance.getEntriesByType('navigation')[0];
    reportWebVitals(metrics);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};

initApp();