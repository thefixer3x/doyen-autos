# Image Handling in Doyen Autos

This document outlines the image handling strategy implemented in the Doyen Autos application, providing developers with guidelines and best practices for working with images throughout the codebase.

## Image Loading Strategy

### Preloading Critical Images

The application preloads critical images like logos and featured vehicle images to prevent layout shifts and improve perceived performance:

```javascript
// From main.tsx
const preloadAssets = async () => {
  const logoUrls = [
    '/doyen-logo.png', 
    '/doyen-logo-white.png',
    '/icons/logo-48.png',
    '/icons/logo-144.png'
  ];
  
  logoUrls.forEach(url => {
    const img = new Image();
    img.src = url;
    img.onerror = () => {
      console.warn(`Failed to preload image: ${url}`);
    };
  });
};
```

### Lazy Loading Non-Critical Images

For non-critical images, we use the `loading="lazy"` attribute to defer loading until they are near the viewport:

```jsx
<img
  src={imageSrc}
  alt={altText}
  loading="lazy"
  onError={handleImageError}
/>
```

## Error Handling

### Fallback Images

We implement fallback strategies for all images using SVG placeholders:

```javascript
// Using the image-helpers utility
import { createPlaceholderImage } from '../../utils/image-helpers';

const fallbackImage = createPlaceholderImage(400, 300, "Image unavailable");

// Or using inline data URI
const fallbackImage = "data:image/svg+xml;base64,...";
```

### Error Handling Pattern

All image components follow this error handling pattern:

```jsx
const [imageError, setImageError] = useState(false);

const handleImageError = (e) => {
  try {
    console.warn(`Image failed to load: ${src}`);
    setImageError(true);
    
    if (e.target instanceof HTMLImageElement) {
      e.target.src = fallbackImage;
    }
  } catch (err) {
    console.error('Error in handleImageError:', err);
  }
};
```

## Component Hierarchy

### OptimizedImage Component

The base component for rendering images with optimizations:

- WebP format support
- Responsive srcSet
- Loading states
- Error handling

### Logo Component

Specialized component for rendering the Doyen logo with:

- Size variants
- Color variants (standard/white)
- SVG fallback

### MultiImageViewer Component

Handles multiple images in a carousel:

- Navigation controls
- Progress indicators
- Hover interactions

### ImageViewerModal Component

Displays images in a full-screen modal with:

- Loading states
- Error handling
- Captions

## SVG Fallbacks

We use inline SVG fallbacks for critical UI elements to ensure a consistent look even when external images fail:

```javascript
// Logo fallback
const fallbackLogo = `data:image/svg+xml;base64,${btoa(`
  <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
    <!-- SVG content -->
  </svg>
`)}`;
```

## Best Practices

1. **Always include alt text** for all images
2. **Specify width and height** attributes to prevent layout shifts
3. **Use the appropriate component** for the specific use case
4. **Include error handling** for all image elements
5. **Test with network throttling** to ensure good performance under poor conditions

## External Image Services

We use Pexels for stock photography:

- Vehicle images from Pexels API
- Always use appropriate attribution
- Consider implementing a caching strategy for frequently accessed images

## Future Improvements

- Implement a CDN for image delivery
- Add image compression pipeline
- Consider implementing responsive images with art direction
- Implement image prioritization for critical content