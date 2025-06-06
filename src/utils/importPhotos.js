/**
 * Helper function to import all photos from a directory
 *
 * This function uses Vite's import.meta.glob to import all images
 * from the specified directory.
 */

export async function importPhotos() {
  try {
    // Use Vite's import.meta.glob with a literal string pattern
    const imageModules = import.meta.glob('../assets/photos/**/*.{jpg,jpeg,png,webp}', { 
      eager: true,
      import: 'default'
    });
    
    console.log('Found image modules:', Object.keys(imageModules).length);

    if (Object.keys(imageModules).length === 0) {
      console.warn('No images found in src/assets/photos directory');
      return [];
    }

    // Convert the modules to an array of photo objects
    const photos = Object.entries(imageModules).map(([path, module]) => {
      try {
        // Extract the filename without extension
        const filename = path.split('/').pop().split('.')[0];
        
        // Extract year from folder path
        const pathParts = path.split('/');
        const yearFolder = pathParts[pathParts.length - 2]; // Get the parent folder name
        const year = /^\d{4}$/.test(yearFolder) ? yearFolder : '';

        // Extract date from filename if it exists (format: YYYY-MM-DD-*)
        const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})-?(.*)$/);
        const dateStr = dateMatch ? dateMatch[1] : '';

        // If no date in filename but we have a year folder, use that year
        let finalDate = dateStr;
        if (!dateStr && year) {
          finalDate = `${year}-01-01`; // Default to January 1st if only year is known
        }

        // Extract the description part after the date (if any)
        const descriptionPart = dateMatch ? dateMatch[2] : filename;

        // Split description by common separators to get title and description
        // Format: "title--description" or "title-description" (double dash for explicit separation)
        let title, description;

        if (descriptionPart.includes('--')) {
          // Explicit title--description format
          const parts = descriptionPart.split('--');
          title = parts[0].trim();
          description = parts.slice(1).join('--').trim();
        } else {
          // Use the whole description as title, no separate description
          title = descriptionPart;
          description = '';
        }

        // Clean up title and description
        title = title
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase())
          .trim();

        description = description
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase())
          .trim();

        // Create alt text from title (fallback to filename if no title)
        const alt = title || filename
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase());

        // Get image dimensions from the module
        const { width, height } = module;

        console.log('Processing image:', {
          path,
          width,
          height,
          year,
          date: finalDate
        });

        return {
          src: module,
          alt: alt,
          title: title,
          description: description,
          date: finalDate,
          year: year || (dateStr ? dateStr.substring(0, 4) : ''),
          width: width,
          height: height
        };
      } catch (error) {
        console.error('Error processing image:', path, error);
        return null;
      }
    }).filter(Boolean); // Remove any null entries from failed processing

    console.log('Successfully processed photos:', photos.length);
    return photos;
  } catch (error) {
    console.error('Error importing photos:', error);
    return [];
  }
}

export default importPhotos;
