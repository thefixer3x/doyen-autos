/**
 * Creates a data URI for a placeholder image with customizable text
 */
export function createPlaceholderImage(
  width: number = 400,
  height: number = 300,
  text: string = "Image unavailable",
  bgColor: string = "#f0f0f0",
  textColor: string = "#a0a0a0"
): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Handles image loading errors with fallback
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement>,
  fallbackSrc?: string,
  onErrorCallback?: (e: React.SyntheticEvent<HTMLImageElement>) => void
): void {
  try {
    console.warn(`Image failed to load: ${e.currentTarget.src}`);
    
    if (fallbackSrc && e.target instanceof HTMLImageElement) {
      e.target.src = fallbackSrc;
    }
    
    if (onErrorCallback) {
      onErrorCallback(e);
    }
  } catch (err) {
    console.error('Error in handleImageError:', err);
  }
}