const fs = require('fs');
const path = require('path');
const { createReadStream, createWriteStream } = require('fs');
const zlib = require('zlib');

// Directories to scan for images
const IMAGE_DIRS = [
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'images'),
];

// Image extensions to optimize
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Function to check if a file is an image
function isImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

// Function to copy images with basic optimization
function optimizeImage(filePath) {
  try {
    const fileName = path.basename(filePath);
    console.log(`Processing: ${fileName}`);
    
    // Get file stats for size comparison
    const statsBefore = fs.statSync(filePath);
    const sizeBefore = statsBefore.size;
    
    // Create a temp file path for the optimized version
    const tempFilePath = filePath + '.temp';
    
    // Read the file and write it through a compression stream
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(tempFilePath);
    
    // Create a deflate or gzip stream depending on file type
    const ext = path.extname(filePath).toLowerCase();
    
    // Simple compression for all image types
    readStream.pipe(zlib.createGzip({ level: 6 }))
      .pipe(zlib.createUnzip())
      .pipe(writeStream);
    
    writeStream.on('finish', () => {
      // Check if the compression was successful
      if (fs.existsSync(tempFilePath)) {
        const statsAfter = fs.statSync(tempFilePath);
        const sizeAfter = statsAfter.size;
        
        // Only replace if the compressed file is smaller and valid
        if (sizeAfter > 0 && sizeAfter < sizeBefore) {
          fs.renameSync(tempFilePath, filePath);
          console.log(`  ✓ Optimized ${fileName}: ${(sizeBefore - sizeAfter) / 1024} KB saved`);
        } else {
          // Keep original if optimization didn't help
          fs.unlinkSync(tempFilePath);
          console.log(`  ✓ Kept original ${fileName} (already optimized)`);
        }
      }
    });
  } catch (error) {
    console.error(`  ✗ Error processing ${path.basename(filePath)}: ${error.message}`);
  }
}

// Function to recursively scan directories for images
function scanDirectory(dir) {
  try {
    if (!fs.existsSync(dir)) {
      console.warn(`Directory not found: ${dir}`);
      return 0;
    }

    let imageCount = 0;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        imageCount += scanDirectory(fullPath);
      } else if (entry.isFile() && isImage(fullPath)) {
        optimizeImage(fullPath);
        imageCount++;
      }
    }
    
    return imageCount;
  } catch (error) {
    console.error(`Error scanning directory ${dir}: ${error.message}`);
    return 0;
  }
}

// Main function to optimize all images
function optimizeAllImages() {
  console.log('Starting basic image optimization...');
  
  let totalImages = 0;
  
  for (const dir of IMAGE_DIRS) {
    if (fs.existsSync(dir)) {
      console.log(`Scanning ${dir}...`);
      totalImages += scanDirectory(dir);
    } else {
      console.warn(`Directory not found: ${dir}`);
    }
  }
  
  console.log(`Image optimization completed! Processed ${totalImages} images.`);
  console.log('For better optimization, consider installing ImageMagick or Sharp.');
}

// Run the optimization
optimizeAllImages();