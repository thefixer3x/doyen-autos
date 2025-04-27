import fs from 'fs';
import path from 'path';
import Jimp from 'jimp';

// Create the icons directory if it doesn't exist
const ICONS_DIR = path.resolve('public/icons');
const SOURCE_LOGO = path.resolve('public/doyen-logo.png');

if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
  console.log(`Created directory: ${ICONS_DIR}`);
}

// Define the sizes we need to generate
const SIZES = [
  { width: 16, height: 16, name: 'favicon-16x16.png' },
  { width: 32, height: 32, name: 'favicon-32x32.png' },
  { width: 48, height: 48, name: 'logo-48.png' },
  { width: 96, height: 96, name: 'logo-96.png' },
  { width: 144, height: 144, name: 'logo-144.png' },
  { width: 192, height: 192, name: 'android-chrome-192x192.png' },
  { width: 512, height: 512, name: 'android-chrome-512x512.png' },
  { width: 180, height: 180, name: 'apple-touch-icon.png' },
  { width: 512, height: 512, name: 'logo-512.png' },
];

// Function to generate icons
async function generateIcons() {
  try {
    console.log(`Reading source logo from ${SOURCE_LOGO}`);
    const image = await Jimp.read(SOURCE_LOGO);
    
    // Generate all the sizes
    for (const size of SIZES) {
      const resized = image.clone().resize(size.width, size.height);
      const outputPath = path.join(ICONS_DIR, size.name);
      await resized.writeAsync(outputPath);
      console.log(`Generated: ${outputPath}`);
    }

    // We need to also copy the favicon.ico to the public folder for browsers
    const favicon16 = await Jimp.read(path.join(ICONS_DIR, 'favicon-16x16.png'));
    const favicon32 = await Jimp.read(path.join(ICONS_DIR, 'favicon-32x32.png'));
    
    await favicon16.writeAsync(path.resolve('public/favicon-16x16.png'));
    await favicon32.writeAsync(path.resolve('public/favicon-32x32.png'));
    
    console.log('Copied favicon files to public directory');
    
    // Copy original logo to the icons directory
    await image.writeAsync(path.join(ICONS_DIR, 'doyen-logo.png'));
    console.log('Copied original logo to icons directory');
    
    console.log('Icon generation complete!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

// Generate a manifest file documenting the available logo sizes
function generateManifest() {
  const manifest = {
    name: 'Doyen Autos Logo Resources',
    description: 'Official logo assets for Doyen Autos in various sizes and formats',
    version: '1.0.0',
    icons: SIZES.map(size => ({
      size: `${size.width}x${size.height}`,
      filename: size.name,
      purpose: size.name.includes('favicon') ? 'favicon' : 
               size.name.includes('android') ? 'android' :
               size.name.includes('apple') ? 'ios' : 'general'
    })),
    usage: {
      favicon: 'Use favicon-16x16.png and favicon-32x32.png for browser tab icons',
      mobile: 'Use android-chrome-192x192.png, android-chrome-512x512.png, and apple-touch-icon.png for mobile devices',
      general: 'Use logo-48.png for small UI elements, logo-96.png for standard display, logo-144.png for high-DPI displays, and logo-512.png for large displays or printing'
    }
  };

  fs.writeFileSync(
    path.join(ICONS_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('Generated icon manifest file');
}

// Run both functions
generateIcons().then(() => {
  generateManifest();
});