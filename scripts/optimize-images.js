#!/usr/bin/env node

/**
 * Image optimization script
 *
 * This script optimizes images in the src/assets/photos directory
 * using Sharp for better performance on the website.
 *
 * Features:
 * - Processes all images in src/assets/photos and subdirectories
 * - Preserves directory structure and metadata
 * - Smart optimization with size comparison
 * - Parallel processing for faster optimization
 * - Detailed progress reporting
 * - Format-specific compression settings
 */

import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PHOTOS_DIR = path.join(ROOT_DIR, 'src/assets/photos');

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// Maximum dimensions
const MAX_DIMENSIONS = {
  normal: 2000,
  panorama: 4000,
  portrait: 2400
};

// Compression settings
const COMPRESSION = {
  jpeg: { quality: 98, compressionLevel: 8 },
  jpg: { quality: 98, compressionLevel: 8 },
  png: { quality: 100, compressionLevel: 8 },
  webp: { quality: 98, compressionLevel: 8 }
};

// Stats
let stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  totalSaved: 0
};

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

// Print a colored message
function colorLog(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

// Convert bytes to human readable format
function bytesToHuman(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

// Get all image files recursively from a directory
async function getImageFiles(dir) {
  let results = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      if (item.name !== 'node_modules' && !item.name.startsWith('.')) {
        results = results.concat(await getImageFiles(itemPath));
      }
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        results.push(itemPath);
      }
    }
  }

  return results;
}

// Process a single image
async function processImage(inputPath) {
  try {
    const inputBuffer = await fs.readFile(inputPath);
    const image = sharp(inputBuffer);
    const metadata = await image.metadata();

    if (!metadata.format) {
      throw new Error(`Could not determine format of ${inputPath}`);
    }

    // Determine max dimensions based on aspect ratio
    let maxWidth = MAX_DIMENSIONS.normal;
    let maxHeight = MAX_DIMENSIONS.normal;

    const aspectRatio = metadata.width / metadata.height;
    if (aspectRatio > 1.5) {
      maxWidth = MAX_DIMENSIONS.panorama;
      // For very wide panoramas, allow even larger width
      if (aspectRatio > 2.5) {
        maxWidth = Math.min(metadata.width, 5000); // Allow up to 5000px for very wide panoramas
      }
    } else if (aspectRatio < 0.5) {
      maxHeight = MAX_DIMENSIONS.portrait;
    }

    // Resize if needed, but preserve original size if it's a landscape photo
    if (metadata.width > maxWidth || metadata.height > maxHeight) {
      // For landscape photos, be more conservative with resizing
      if (aspectRatio > 1.5) {
        // Only resize if the image is significantly larger
        if (metadata.width > maxWidth * 1.2) {
          image.resize({
            width: Math.min(maxWidth, metadata.width),
            height: Math.min(maxHeight, metadata.height),
            fit: 'inside',
            withoutEnlargement: true
          });
        }
      } else {
        // Normal resize for other images
        image.resize({
        width: Math.min(maxWidth, metadata.width),
        height: Math.min(maxHeight, metadata.height),
        fit: 'inside',
        withoutEnlargement: true
        });
      }
    }

    // Apply format-specific compression
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
    const format = 'webp';
    
    // Use higher quality for landscape photos
    if (aspectRatio > 1.5) {
      image[format]({
        quality: 100,  // Maximum quality for landscape photos
        compressionLevel: 6  // Lower compression for better quality
      });
    } else {
      image[format](COMPRESSION[format]);
    }

    // Process image with metadata preservation
    const outputBuffer = await image.withMetadata().toBuffer();
    const inputSize = inputBuffer.byteLength;
    const outputSize = outputBuffer.byteLength;
    const compressionRatio = (outputSize - inputSize) / inputSize;

    // Skip if compression ratio is less than 5%
    if (compressionRatio > -0.05) {
      stats.skipped++;
      colorLog(colors.dim, `[SKIP] ${bytesToHuman(inputSize)} → ${bytesToHuman(outputSize)} ${(compressionRatio * 100).toFixed(1).padStart(5, ' ')}%  ${path.basename(inputPath)}`);
      return;
    }

    // Write optimized image
    await fs.writeFile(outputPath, outputBuffer);
    stats.processed++;
    stats.totalSaved += (inputSize - outputSize);
    colorLog(colors.green, `[COMP] ${bytesToHuman(inputSize)} → ${bytesToHuman(outputSize)} ${(compressionRatio * 100).toFixed(1).padStart(5, ' ')}%  ${path.basename(inputPath)}`);

    // Remove original if it's not a webp
    if (!inputPath.toLowerCase().endsWith('.webp')) {
      await fs.unlink(inputPath);
    }
  } catch (error) {
    stats.errors++;
    colorLog(colors.red, `Error processing ${path.basename(inputPath)}: ${error.message}`);
  }
}

// Main function
async function main() {
  colorLog(colors.bright + colors.blue, '\n📸 Photo Optimization Tool 📸');
  colorLog(colors.dim, '----------------------------------------');

  // Check if photos directory exists
  try {
    await fs.access(PHOTOS_DIR);
  } catch {
    colorLog(colors.red, `Error: Photos directory not found at ${PHOTOS_DIR}`);
    colorLog(colors.yellow, `Creating directory...`);
    await fs.mkdir(PHOTOS_DIR, { recursive: true });
  }

  // Get all image files
  const imageFiles = await getImageFiles(PHOTOS_DIR);

  if (imageFiles.length === 0) {
    colorLog(colors.yellow, `No images found in ${PHOTOS_DIR}`);
    colorLog(colors.cyan, `\nTip: Add your photos to the src/assets/photos directory.`);
    return;
  }

  colorLog(colors.blue, `Found ${imageFiles.length} images to process\n`);

  // Process images in parallel
  await Promise.all(imageFiles.map(processImage));

  // Print summary
  colorLog(colors.bright + colors.blue, '\n📊 Summary');
  colorLog(colors.dim, '----------------------------------------');
  colorLog(colors.green, `✅ Processed: ${stats.processed}`);
  colorLog(colors.dim, `⏭️  Skipped: ${stats.skipped}`);
  colorLog(colors.red, `❌ Errors: ${stats.errors}`);
  colorLog(colors.cyan, `💾 Total saved: ${bytesToHuman(stats.totalSaved)}`);
  colorLog(colors.dim, '----------------------------------------');

  if (stats.processed > 0) {
    colorLog(colors.bright + colors.green, '🎉 Optimization complete! Your photos are ready to be displayed on your website.');
  }

  colorLog(colors.cyan, `\nTip: Run 'npm run dev' to see your photos on the website.`);
}

// Run the main function
main().catch(err => {
  colorLog(colors.red, `Unexpected error: ${err.message}`);
  process.exit(1);
});
