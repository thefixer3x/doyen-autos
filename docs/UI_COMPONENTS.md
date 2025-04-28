# UI Components Documentation

This document outlines the core UI components used throughout the Doyen Autos application, their purpose, properties, and usage examples.

## Button

A versatile button component with multiple variants and sizes.

### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

### Usage

```jsx
<Button 
  variant="primary" 
  size="md" 
  onClick={handleClick}
  isLoading={loading}
  rightIcon={<ArrowRight size={16} />}
>
  Submit
</Button>
```

## Card

A versatile card component with multiple sub-components.

### Sub-components

- `CardHeader`: Header section of the card
- `CardTitle`: Title element within the card
- `CardDescription`: Description text within the card
- `CardContent`: Main content area of the card
- `CardFooter`: Footer section of the card

### Usage

```jsx
<Card>
  <CardHeader>
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>Brief description of the feature</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Badge

A small indicator component used to highlight status or categorization.

### Props

```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
  children: React.ReactNode;
}
```

### Usage

```jsx
<Badge variant="success">Completed</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Failed</Badge>
```

## Modal

A dialog component for displaying content that requires user attention.

### Props

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
}
```

### Usage

```jsx
<Modal 
  isOpen={showModal} 
  onClose={() => setShowModal(false)}
  closeOnEsc={true}
>
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">Modal Title</h2>
    <p>Modal content goes here</p>
    <div className="mt-4 flex justify-end">
      <Button onClick={() => setShowModal(false)}>Close</Button>
    </div>
  </div>
</Modal>
```

## ImageViewerModal

A specialized modal for displaying images in a larger format.

### Props

```typescript
interface ImageViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
  caption?: string;
}
```

### Usage

```jsx
<ImageViewerModal
  isOpen={isImageViewerOpen}
  onClose={() => setIsImageViewerOpen(false)}
  imageSrc="https://example.com/image.jpg"
  altText="Example image"
  caption="Example image caption"
/>
```

## Logo

A component for displaying the Doyen Autos logo with different sizes and colors.

### Props

```typescript
interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  isWhite?: boolean;
  className?: string;
}
```

### Usage

```jsx
<Logo size="medium" isWhite={false} className="my-4" />
```

## OptimizedImage

A component for displaying images with optimizations for performance and error handling.

### Props

```typescript
interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}
```

### Usage

```jsx
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description of image"
  width={400}
  height={300}
  priority={true}
/>
```

## MultiImageViewer

A component for displaying multiple images with navigation controls.

### Props

```typescript
interface MultiImageViewerProps {
  images: string[];
  alt: string;
  className?: string;
}
```

### Usage

```jsx
<MultiImageViewer
  images={[
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg"
  ]}
  alt="Product images"
/>
```

## Custom Hooks

### useInView

A hook for detecting when an element enters the viewport.

```jsx
const MyComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
    >
      Content here
    </div>
  );
};
```

### useEnsureImageLoaded

A hook for handling image loading states and errors.

```jsx
const MyImageComponent = ({ src }) => {
  const { currentSrc, isLoading, hasError } = useEnsureImageLoaded({
    src,
    fallbackSrc: "path/to/fallback.jpg"
  });
  
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <img src={currentSrc} alt="Example" />}
    </div>
  );
};
```

## Utility Functions

### cn

A utility function that merges Tailwind CSS classes without conflicts.

```jsx
import { cn } from '../../utils/cn';

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className
)}>
  Content
</div>
```

## Design System Integration

All UI components are designed to work with the Doyen Autos design system, following these principles:

1. **Consistent Theming**: Using design tokens from the Tailwind config
2. **Responsive Design**: Mobile-first approach with appropriate breakpoints
3. **Accessibility**: WCAG 2.1 AA compliance
4. **Dark Mode Support**: Compatible with light/dark theming
5. **Animation Standards**: Consistent timing and easing functions