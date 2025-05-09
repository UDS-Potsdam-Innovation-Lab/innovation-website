const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// Get all files in directory
function getFiles(dir) {
  const files = [];
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      files.push(...getFiles(res));
    } else {
      files.push(res);
    }
  }
  return files;
}

function removeNumberedImages() {
  const allFiles = getFiles(imagesDir);
  
  allFiles.forEach(file => {
    const filename = path.basename(file);
    // Check if filename contains numbers
    if (/[0-9]/.test(filename)) {
      console.log(`Deleting: ${file}`);
      try {
        fs.unlinkSync(file);
      } catch (error) {
        console.error(`Error deleting ${file}: ${error.message}`);
      }
    }
  });
}

// Run the cleanup
try {
  removeNumberedImages();
  console.log('Numbered image cleanup completed successfully');
} catch (error) {
  console.error('Error during numbered image cleanup:', error);
}
