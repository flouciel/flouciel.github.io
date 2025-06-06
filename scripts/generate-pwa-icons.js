import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourceImage = 'public/apple-touch-icon.png'; // Updated path to use apple-touch-icon.png
const outputDir = 'public/icons';

async function generateIcons() {
  try {
    // Check if the source image exists
    try {
      await fs.access(sourceImage);
    } catch (error) {
      console.error(`Error: Source image not found at ${sourceImage}`);
      process.exit(1);
    }

    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Generate icons for each size
    for (const size of sizes) {
      await sharp(sourceImage)
        .resize(size, size)
        .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
      console.log(`Generated ${size}x${size} icon`);
    }

    // Generate shortcut icons (if needed - adjust paths if your shortcuts have different source)
    // Assuming apple-touch-icon can be used for shortcuts as well for simplicity
    await sharp(sourceImage)
      .resize(96, 96)
      .toFile(path.join(outputDir, 'home-96x96.png'));
    await sharp(sourceImage)
      .resize(96, 96)
      .toFile(path.join(outputDir, 'photos-96x96.png'));

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons(); 