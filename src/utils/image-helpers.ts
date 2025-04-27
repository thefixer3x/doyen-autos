/**
 * Collection of utility functions for handling images
 */

/**
 * Creates a data URI for a placeholder image with customizable text
 * 
 * @param width Width of the placeholder
 * @param height Height of the placeholder
 * @param text Text to display on the placeholder
 * @param bgColor Background color
 * @param textColor Text color
 * @returns Base64 encoded data URI
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
 * Checks if an image URL is valid before using it
 * 
 * @param url URL to check
 * @param timeout Timeout in milliseconds
 * @returns Promise that resolves to boolean indicating if image is loadable
 */
export async function isImageUrlValid(url: string, timeout: number = 5000): Promise<boolean> {
  return new Promise((resolve) => {
    if (!url || url.startsWith('data:')) {
      // Data URIs are always considered valid
      resolve(true);
      return;
    }
    
    const img = new Image();
    
    // Set up timeout
    const timeoutId = setTimeout(() => {
      img.src = '';
      resolve(false);
    }, timeout);
    
    img.onload = () => {
      clearTimeout(timeoutId);
      resolve(true);
    };
    
    img.onerror = () => {
      clearTimeout(timeoutId);
      resolve(false);
    };
    
    img.src = url;
  });
}

/**
 * Creates an inline SVG for the Doyen logo
 * @param isWhite Whether to use the white version of the logo
 * @returns SVG string
 */
export function getDoyenLogoSvg(isWhite: boolean = false): string {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
      <rect width="240" height="240" fill="${isWhite ? 'transparent' : '#102a43'}"/>
      <g fill="${isWhite ? '#ffffff' : '#d0d0d0'}">
        <!-- Stylized D with car silhouette -->
        <path d="M60,50 L60,190 L120,190 C155,190 180,165 180,120 C180,75 155,50 120,50 Z M80,70 L115,70 C140,70 155,90 155,120 C155,150 140,170 115,170 L80,170 Z"/>
        <path d="M100,100 Q130,95 145,115 L155,125 Q157,127 159,125 L165,120 Q120,85 95,100 Z" fill="${isWhite ? '#ffffff' : '#22b573'}"/>
        
        <!-- DOYEN text -->
        <text x="120" y="220" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">DOYEN AUTOS</text>
      </g>
    </svg>
  `;
}