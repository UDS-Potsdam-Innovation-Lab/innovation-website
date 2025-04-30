#!/bin/bash

# Build script for German UDS Innovation Landing Page
# This script compiles TypeScript files to JavaScript for web deployment

echo "Building German UDS Innovation Landing Page..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Install required packages if they don't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install typescript @types/react @types/react-dom lucide-react
fi

# Compile TypeScript files to JavaScript
echo "Compiling TypeScript to JavaScript..."
npx tsc --jsx react --target es6 --module es6 --outDir dist scroll-progress.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist navigation.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist hero-section.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist ecosystem-section.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist portfolio-section.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist structure-section.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist business-section.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist invest-section.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist contact-section.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist footer-component.tsx
npx tsc --jsx react --target es6 --module es6 --outDir dist german-uds-landing.tsx

# Copy HTML file to dist directory
echo "Copying HTML file to dist directory..."
cp index.html dist/
# cp *.js dist/
echo "Build complete! Files are available in the dist directory."
echo "To serve the website, run a local web server in the dist directory:"
echo "cd dist && python -m http.server 8000"