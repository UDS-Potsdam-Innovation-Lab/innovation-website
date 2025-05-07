// This script analyzes components to find image sizes and creates resized versions
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Common image sizes for responsive design
const COMMON_SIZES = [400, 800, 1200, 1600];

// Directories to scan for images
const IMAGE_DIRS = [
  path.join(__dirname, 'public', 'images'),
];

// Image extensions to process
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Function to check if a file is an image
function isImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

// Function to analyze components for Image components
function analyzeComponents() {
  const componentsDir = path.join(__dirname, 'components');
  const sizes = new Set();
  
  try {
    const files = fs.readdirSync(componentsDir);
    
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
        
        // Look for Image components with width and height props
        const imgMatches = content.match(/<Image[^>]*width=\\{(\d+)\\}[^>]*height=\\{(\d+)\\}[^>]*/g) || [];
        
        for (const match of imgMatches) {
          const widthMatch = match.match(/width=\\{(\d+)\\}/);
          if (widthMatch && widthMatch[1]) {
            sizes.add(parseInt(widthMatch[1], 10));
          }
          
          const heightMatch = match.match(/height=\\{(\d+)\\}/);
          if (heightMatch && heightMatch[1]) {
            sizes.add(parseInt(heightMatch[1], 10));
          }
        }
      }
    }
  } catch (error) {
    console.error('Error analyzing components:', error);
  }
  
  // Add common sizes
  COMMON_SIZES.forEach(size => sizes.add(size));
  
  return Array.from(sizes).sort((a, b) => a - b);
}

// Function to create a resized version using an external tool if available
function resizeImage(filePath, width) {
  const ext = path.extname(filePath);
  const dir = path.dirname(filePath);
  const basename = path.basename(filePath, ext);
  const outputPath = path.join(dir, `${basename}_${width}w${ext}`);
  
  // Skip if already exists
  if (fs.existsSync(outputPath)) {
    console.log(`  - Already exists: ${path.basename(outputPath)}`);
    return;
  }
  
  // Try to use imagemagick or sips (on macOS) if available
  const command = process.platform === 'darwin' 
    ? `sips -Z ${width} "${filePath}" --out "${outputPath}"`
    : `convert "${filePath}" -resize ${width} "${outputPath}"`;
  
  return new Promise((resolve, reject) => {
    exec(command, (error) => {
      if (error) {
        // If external tools fail, try to create a manifest instead
        console.log(`  - Skipped resizing (no compatible tools): ${path.basename(outputPath)}`);
        resolve(false);
      } else {
        console.log(`  - Created resized version: ${path.basename(outputPath)}`);
        resolve(true);
      }
    });
  });
}

// Function to process a single image
async function processImage(filePath, sizes) {
  const fileName = path.basename(filePath);
  console.log(`Processing: ${fileName}`);
  
  // Create resized versions for each target size
  const promises = [];
  for (const size of sizes) {
    promises.push(resizeImage(filePath, size));
  }
  
  await Promise.all(promises);
}

// Function to recursively scan directories for images
async function scanDirectory(dir, sizes) {
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
        imageCount += await scanDirectory(fullPath, sizes);
      } else if (entry.isFile() && isImage(fullPath)) {
        await processImage(fullPath, sizes);
        imageCount++;
      }
    }
    
    return imageCount;
  } catch (error) {
    console.error(`Error scanning directory ${dir}: ${error.message}`);
    return 0;
  }
}

// Main function to process images
async function main() {
  console.log('Starting image resizing...');
  
  // Analyze components to find image sizes
  const componentSizes = analyzeComponents();
  console.log(`Found ${componentSizes.length} unique sizes in components: ${componentSizes.join(', ')}`);
  
  // Use common sizes if no component sizes found
  const targetSizes = componentSizes.length > 0 ? componentSizes : COMMON_SIZES;
  
  let totalImages = 0;
  
  for (const dir of IMAGE_DIRS) {
    if (fs.existsSync(dir)) {
      console.log(`\nScanning ${dir}...`);
      const count = await scanDirectory(dir, targetSizes);
      totalImages += count;
      console.log(`Processed ${count} images in ${dir}`);
    } else {
      console.warn(`Directory not found: ${dir}`);
    }
  }
  
  console.log(`\nImage resizing completed! Processed ${totalImages} images for ${targetSizes.length} sizes.`);
  console.log('For better image optimization, consider installing ImageMagick or Sharp.');
  
  // Create a manifest file for future reference
  fs.writeFileSync(
    path.join(__dirname, 'public', 'image-sizes.json'), 
    JSON.stringify({ sizes: targetSizes, lastUpdated: new Date().toISOString() }, null, 2)
  );
  console.log('Created image-sizes.json manifest.');
}

main().catch(console.error);