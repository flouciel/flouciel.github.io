# Photo Gallery Documentation

This document provides information about the photo gallery feature implemented on your website.

## Overview

The photo gallery is a responsive, masonry-style layout that displays your photos in an elegant grid. It includes:

- Masonry layout that respects original image aspect ratios
- Smooth animations and transitions
- Lightbox for viewing full-size images
- Automatic organization by date
- Mobile-friendly responsive design

## How to Use

### Adding Photos

1. Place your photos in the `src/assets/photos/` directory
2. For best organization, name files with date prefixes: `YYYY-MM-DD-description.jpg`
   - Example: `2023-10-15-beach-sunset.jpg`
3. Run the optimization script:
   ```bash
   npm run optimize-images
   ```
4. Start the development server to see your photos:
   ```bash
   npm run dev
   ```

### Photo Organization

- Photos are automatically grouped by month based on their filenames
- Photos are sorted chronologically (newest first)
- Photos without date prefixes will automatically get today's date added during optimization
- All photos will appear in their respective month sections

### Customization

You can customize the gallery by editing these files:
- `src/components/PhotoGallery.astro` - Main gallery component
- `src/components/PhotoLightbox.astro` - Lightbox for full-size viewing
- `src/layouts/PhotoLayout.astro` - Layout for the photos page

## Technical Details

### Optimized Dependencies

The project has been optimized to use minimal dependencies:

**Core Dependencies:**
- `astro` - The main framework
- `sharp` - For image processing
- `tailwindcss` - For styling

**Removed Unnecessary Dependencies:**
- React and related packages
- PWA features
- Various development tools

### Image Optimization

The `optimize-images.js` script:
- Resizes large images to appropriate dimensions
- Converts images to WebP format for better compression
- Preserves original aspect ratios
- Applies quality optimization

### Performance Considerations

- Images are lazy-loaded for better performance
- CSS uses hardware acceleration where appropriate
- Animations are optimized to minimize layout shifts
- The masonry layout uses native CSS features

## Aesthetic Improvements

The gallery has been designed with aesthetics in mind:

- Clean, minimal interface
- Subtle animations and transitions
- Proper spacing between elements
- Elegant lightbox with backdrop blur
- Refined hover effects

## Troubleshooting

If you encounter issues:

1. Make sure images are in supported formats (JPG, PNG, WebP)
2. Check that file permissions allow reading
3. Verify the optimization script ran successfully
4. Clear your browser cache if changes aren't visible

## Future Enhancements

Consider these potential improvements:

1. Add filtering by tags or categories
2. Implement image preloading for faster navigation
3. Add keyboard shortcuts for gallery navigation
4. Create downloadable image collections
