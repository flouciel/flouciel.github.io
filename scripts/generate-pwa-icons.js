import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourceImage = 'src/assets/logo.png'; // Update this path to your source image
const outputDir = 'public/icons';

async function generateIcons() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Generate icons for each size
    for (const size of sizes) {
      await sharp(sourceImage)
        .resize(size, size)
        .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
      console.log(`Generated ${size}x${size} icon`);
    }

    // Generate shortcut icons
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