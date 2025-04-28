import { getBrowserInfo } from './browser-detection';

export const measurePerformance = () => {
  if ('performance' in window) {
    const timing = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    
    return {
      ttfb: timing.responseStart - timing.requestStart,
      fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
      domLoad: timing.domContentLoadedEventEnd - timing.navigationStart,
      fullLoad: timing.loadEventEnd - timing.navigationStart
    };
  }
  return null;
};

export const reportWebVitals = (metric: any) => {
  console.log(metric);
  // Here you would typically send to your analytics service
};

export const optimizeImageLoading = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};