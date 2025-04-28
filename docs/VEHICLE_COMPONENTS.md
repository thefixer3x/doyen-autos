# Vehicle Display Components

This document details the components used for displaying vehicles in the Doyen Autos application, including their props, functionality, and integration patterns.

## Component Structure

```
FeaturedVehicles
└── VehicleCard
    ├── Multiple Images Display
    └── Quick View Features
        └── ImageViewerModal
            └── Modal (base component)
```

## VehicleCard

The VehicleCard component is responsible for displaying individual vehicle information in a card format.

### Props

```typescript
interface VehicleCardProps {
  images: string[];           // Array of image URLs
  name: string;               // Vehicle name
  details: string;            // Vehicle details text
  price?: string;             // Optional price display
  isElectric?: boolean;       // Whether the vehicle is electric
  onViewDetails?: () => void; // Handler for view details action
  onQuickView?: () => void;   // Handler for quick view action
}
```

### Features

- **Multiple Image Display**: Carousel UI for displaying multiple vehicle images
- **Image Navigation**: Previous/next controls for browsing images
- **Electric Badge**: Visual badge for electric vehicles
- **Price Display**: Prominent price display
- **Favorites**: Toggle for adding/removing from favorites
- **Quick View**: Button to open the image in a modal
- **View Details**: Link to full vehicle details page

### Implementation Details

- Fixed height container ensures consistent card dimensions
- Error handling for failed image loads
- Accessibility attributes for screen readers
- Hover states for interactive elements
- Mobile-responsive design

## FeaturedVehicles

Container component that manages the display of multiple VehicleCard components.

### Data Structure

```typescript
const VEHICLE_DATA = [
  {
    id: '1',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    ],
    name: 'Tesla Model Y',
    details: 'Long Range • Electric • 315mi range',
    price: '$45,990',
    isElectric: true
  },
  // Additional vehicles...
];
```

### Features

- **Carousel Display**: Shows a set number of vehicles at once
- **Pagination**: Dot indicators for available pages
- **Navigation Controls**: Previous/next buttons for browsing
- **Auto-rotation**: Automatically cycles through vehicle sets
- **Animation**: Smooth transition effects for content changes
- **Responsive Grid**: Adapts to different screen sizes

## ImageViewerModal

Modal component for displaying enlarged vehicle images.

### Props

```typescript
interface ImageViewerModalProps {
  isOpen: boolean;        // Whether the modal is visible
  onClose: () => void;    // Function to close the modal
  imageSrc: string;       // URL of the image to display
  altText: string;        // Alternative text for the image
  caption?: string;       // Optional caption to display
}
```

### Features

- **Full-size Image Display**: Shows vehicle images in a larger format
- **Loading States**: Loading spinner while image loads
- **Error Handling**: Graceful handling of image load failures
- **Caption Display**: Optional text caption
- **Close Controls**: Button to close the modal
- **Keyboard Navigation**: ESC key closes the modal
- **Focus Management**: Proper focus handling for accessibility

## Modal

Base modal component used by ImageViewerModal.

### Props

```typescript
interface ModalProps {
  isOpen: boolean;                   // Modal visibility state
  onClose: () => void;               // Close handler
  children: React.ReactNode;         // Modal content
  className?: string;                // Additional styling
  showCloseButton?: boolean;         // Whether to show the close button
  closeOnEsc?: boolean;              // Whether ESC key closes the modal
  closeOnOverlayClick?: boolean;     // Whether clicking the overlay closes
}
```

### Features

- **Overlay**: Semi-transparent backdrop
- **Focus Trapping**: Keeps focus within the modal
- **Body Scroll Lock**: Prevents background scrolling
- **Animation**: Transition effects for opening/closing
- **Flexible Content**: Can contain any React components

## MultiImageViewer

Component for displaying multiple images with navigation controls.

### Props

```typescript
interface MultiImageViewerProps {
  images: string[];      // Array of image URLs
  alt: string;           // Alternative text base
  className?: string;    // Additional styling
}
```

### Features

- **Image Carousel**: Displays multiple images in sequence
- **Navigation Controls**: Previous/next buttons
- **Progress Indicators**: Dots showing position in sequence
- **Error Handling**: Fallback for failed image loads
- **Empty State**: Message when no images are available

## Integration Example

```jsx
import React from 'react';
import { VehicleCard } from './components/landing/sections/VehicleCard';

const VehicleDisplay = () => {
  const handleQuickView = () => {
    console.log('Quick view clicked');
  };
  
  const handleViewDetails = () => {
    console.log('View details clicked');
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <VehicleCard
        images={[
          'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
          'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
        ]}
        name="Tesla Model Y"
        details="Long Range • Electric • 315mi range"
        price="$45,990"
        isElectric={true}
        onQuickView={handleQuickView}
        onViewDetails={handleViewDetails}
      />
      {/* Additional cards... */}
    </div>
  );
};

export default VehicleDisplay;
```

## Best Practices

1. **Data Separation**: Keep vehicle data separate from presentation components
2. **Error Boundaries**: Implement React error boundaries around vehicle display sections
3. **Consistent Animations**: Use consistent timing and easing for animations
4. **Mobile Optimization**: Test and optimize for touch interfaces
5. **Performance Monitoring**: Watch for performance impacts with multiple cards/images