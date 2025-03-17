#!/usr/bin/env node

/**
 * Image Preparation Script
 * 
 * This script processes and optimizes images in batch mode.
 * It can convert images to WebP and AVIF formats, resize them,
 * and organize them into appropriate directories.
 * 
 * Usage:
 *   node src/scripts/prepare-images.js
 * 
 * Configuration options are set within this file.
 */

const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const { program } = require('commander');

// Configure the CLI program
program
  .option('-s, --source <path>', 'Source directory for images', 'image-sources')
  .option('-d, --dest <path>', 'Destination directory for processed images', 'public/images')
  .option('-w, --width <number>', 'Target width for resizing', parseInt)
  .option('-h, --height <number>', 'Target height for resizing', parseInt)
  .option('-q, --quality <number>', 'Image quality (1-100)', 80, parseInt)
  .option('-f, --formats <list>', 'Output formats (comma separated)', 'webp,avif,original')
  .option('--no-progressive', 'Disable progressive mode for JPEG')
  .option('--force', 'Force overwrite existing files')
  .parse(process.argv);

const options = program.opts();

// Image processing configuration
const config = {
  formats: options.formats.split(','),
  quality: options.quality,
  progressive: options.progressive,
  force: options.force,
  // Default target sizes for different image types
  sizes: {
    'hero': { width: 1920, height: 1080 },
    'service': { width: 800, height: 600 },
    'testimonial': { width: 200, height: 200 },
    'team': { width: 400, height: 400 },
    'blog': { width: 1200, height: 630 },
    'project': { width: 1200, height: 800 },
    'icon': { width: 64, height: 64 },
    'logo': { width: 300, height: 150 },
  }
};

// Source directory structure to scan
const sourceDir = options.source;
// Destination directory structure to output
const destDir = options.dest;

// Ensure directories exist
fs.ensureDirSync(sourceDir);
fs.ensureDirSync(destDir);

// Map of source subdirectories to destination subdirectories
const directoryMap = {
  'general': 'general',
  'services': 'services',
  'team': 'team',
  'testimonials': 'testimonials',
  'blog': 'blog',
  'projects': 'projects',
};

/**
 * Process a single image file
 * @param {string} sourcePath Full path to source image
 * @param {string} destPath Base destination path without extension
 * @param {object} sizeConfig Size configuration for this image type
 */
async function processImage(sourcePath, destPath, sizeConfig) {
  const imageType = path.basename(path.dirname(destPath));
  const fileName = path.basename(sourcePath);
  
  console.log(`Processing: ${fileName} (${imageType})`);
  
  try {
    // Get image metadata
    const metadata = await sharp(sourcePath).metadata();
    
    // Determine resize options
    let width = options.width || sizeConfig?.width;
    let height = options.height || sizeConfig?.height;
    
    // If only one dimension is specified, maintain aspect ratio
    if (width && !height) {
      height = Math.round(width * (metadata.height / metadata.width));
    } else if (!width && height) {
      width = Math.round(height * (metadata.width / metadata.height));
    }
    
    // Base sharp instance
    let sharpInstance = sharp(sourcePath);
    
    // Apply resizing if dimensions are specified
    if (width && height) {
      sharpInstance = sharpInstance.resize({
        width,
        height,
        fit: 'cover',
        position: 'center'
      });
    }
    
    // Process each output format
    for (const format of config.formats) {
      if (format === 'original') {
        // Keep original format but still process and optimize
        const originalFormat = metadata.format;
        const outputPath = `${destPath}.${originalFormat}`;
        
        // Skip if file exists and force is not enabled
        if (fs.existsSync(outputPath) && !config.force) {
          console.log(`  Skipping ${originalFormat} (already exists)`);
          continue;
        }
        
        let formatOptions = {};
        if (originalFormat === 'jpeg' || originalFormat === 'jpg') {
          formatOptions = { quality: config.quality, progressive: config.progressive };
        } else if (originalFormat === 'png') {
          formatOptions = { compressionLevel: 9 };
        }
        
        await sharpInstance.toFormat(originalFormat, formatOptions).toFile(outputPath);
        console.log(`  Saved ${originalFormat} version`);
      } else {
        // Convert to specified format
        const outputPath = `${destPath}.${format}`;
        
        // Skip if file exists and force is not enabled
        if (fs.existsSync(outputPath) && !config.force) {
          console.log(`  Skipping ${format} (already exists)`);
          continue;
        }
        
        let formatOptions = {};
        if (format === 'webp') {
          formatOptions = { quality: config.quality };
        } else if (format === 'avif') {
          formatOptions = { quality: config.quality };
        } else if (format === 'jpg' || format === 'jpeg') {
          formatOptions = { quality: config.quality, progressive: config.progressive };
        }
        
        await sharpInstance.toFormat(format, formatOptions).toFile(outputPath);
        console.log(`  Saved ${format} version`);
      }
    }
  } catch (error) {
    console.error(`  Error processing ${fileName}:`, error.message);
  }
}

/**
 * Process all images in source directory
 */
async function processAllImages() {
  console.log('Starting image processing...');
  console.log(`Source directory: ${sourceDir}`);
  console.log(`Destination directory: ${destDir}`);
  console.log(`Output formats: ${config.formats.join(', ')}`);
  console.log(`Quality: ${config.quality}`);
  
  // Process each directory mapping
  for (const [sourceSubdir, destSubdir] of Object.entries(directoryMap)) {
    const fullSourceDir = path.join(sourceDir, sourceSubdir);
    const fullDestDir = path.join(destDir, destSubdir);
    
    // Skip if source directory doesn't exist
    if (!fs.existsSync(fullSourceDir)) {
      console.log(`Skipping ${sourceSubdir} (directory doesn't exist)`);
      continue;
    }
    
    // Ensure destination directory exists
    fs.ensureDirSync(fullDestDir);
    
    // Get all files in source directory
    const files = fs.readdirSync(fullSourceDir);
    
    // Filter image files
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    });
    
    console.log(`Found ${imageFiles.length} images in ${sourceSubdir}`);
    
    // Process each image
    for (const file of imageFiles) {
      const sourcePath = path.join(fullSourceDir, file);
      const baseName = path.basename(file, path.extname(file));
      const destPath = path.join(fullDestDir, baseName);
      
      // Determine appropriate size configuration based on directory
      let sizeConfig;
      
      if (sourceSubdir === 'general') {
        // Handle general images based on filename patterns
        if (file.includes('hero')) {
          sizeConfig = config.sizes.hero;
        } else if (file.includes('logo')) {
          sizeConfig = config.sizes.logo;
        } else if (file.includes('icon')) {
          sizeConfig = config.sizes.icon;
        }
      } else {
        // Use directory-specific size configurations
        sizeConfig = config.sizes[sourceSubdir.replace('s', '')] || null;
      }
      
      await processImage(sourcePath, destPath, sizeConfig);
    }
  }
  
  console.log('Image processing complete!');
}

// Start processing
processAllImages().catch(err => {
  console.error('Error during image processing:', err);
  process.exit(1);
}); 