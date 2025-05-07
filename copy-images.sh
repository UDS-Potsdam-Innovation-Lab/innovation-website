#!/bin/bash

# Script to ensure images are properly included in the Next.js export
echo "Copying images to public directory for Next.js static export..."

# Make sure public directory exists
mkdir -p public/images

# Copy all images to public directory
cp -r images/* public/images/

# Make script executable
chmod +x copy-images.sh

echo "Images successfully copied to public/images for Next.js static export"