/**
 * Script to create locale-specific image directories
 * 
 * This script creates localized image directories for each supported locale.
 * It allows you to place locale-specific versions of images (for example 
 * logos with text in different languages).
 * 
 * Usage: 
 * - Run with: node scripts/create-locale-directories.js
 * - After running, you'll have /images/de/ directories
 * - Copy and customize images that need localization into these directories
 */

const fs = require('fs');
const path = require('path');

// Configuration
const locales = ['de']; // Add locales here (excluding the default 'en')
const sourceDir = path.join(__dirname, '..', 'public', 'images');
const imageDirs = [];

// Find all image directories recursively
function scanDirectories(dir, baseDir = '') {
  // Skip locale folders (already created)
  if (baseDir && locales.includes(baseDir.split('/')[0])) {
    return;
  }

  // Add this directory to the list
  if (baseDir) {
    imageDirs.push(baseDir);
  }
  
  // Scan subdirectories
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const newBaseDir = baseDir ? path.join(baseDir, entry.name) : entry.name;
        scanDirectories(path.join(dir, entry.name), newBaseDir);
      }
    }
  } catch (err) {
    console.error(`Error scanning directory ${dir}:`, err);
  }
}

// Create locale-specific directories
function createLocaleDirectories() {
  // First scan for all image directories
  scanDirectories(sourceDir);
  
  let created = 0;
  
  // For each locale, create corresponding directories
  for (const locale of locales) {
    // Create the locale root directory
    const localeDir = path.join(sourceDir, locale);
    
    if (!fs.existsSync(localeDir)) {
      fs.mkdirSync(localeDir, { recursive: true });
      console.log(`Created directory: ${localeDir}`);
      created++;
    }
    
    // Create all subdirectories for this locale
    for (const imageDir of imageDirs) {
      const localeImageDir = path.join(sourceDir, locale, imageDir);
      
      if (!fs.existsSync(localeImageDir)) {
        fs.mkdirSync(localeImageDir, { recursive: true });
        console.log(`Created directory: ${localeImageDir}`);
        created++;
      }
    }
  }
  
  if (created === 0) {
    console.log('All locale directories already exist!');
  } else {
    console.log(`\nCreated ${created} directories for localization.`);
    console.log('\nNext steps:');
    console.log('1. Copy any images that need localization to their respective locale directories');
    console.log('2. Modify the copied images as needed for each locale');
    console.log('3. The website will automatically use the localized images when the locale is selected');
  }
}

// Run the script
try {
  console.log('Creating locale-specific image directories...');
  createLocaleDirectories();
} catch (error) {
  console.error('Error creating locale directories:', error);
  process.exit(1);
}