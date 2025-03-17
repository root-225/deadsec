/**
 * Image Download and Optimization Utility
 * 
 * This script helps download images from URLs and optimize them for the website.
 * It requires the following packages to be installed:
 * npm install sharp fs-extra node-fetch
 * 
 * Usage:
 * node src/scripts/downloadImage.js <imageUrl> <outputPath> [options]
 * 
 * Example:
 * node src/scripts/downloadImage.js https://example.com/image.jpg public/images/services/cloud-service.jpg --width=600 --height=400
 */

const fs = require('fs-extra');
const path = require('path');
const fetch = require('node-fetch');
const sharp = require('sharp');

async function downloadImage(url, outputPath, options = {}) {
  try {
    // Create directory if it doesn't exist
    await fs.ensureDir(path.dirname(outputPath));
    
    // Download image
    console.log(`Downloading image from ${url}...`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }
    
    const buffer = await response.buffer();
    
    // Process image with sharp
    let sharpInstance = sharp(buffer);
    
    // Resize if dimensions are provided
    if (options.width || options.height) {
      sharpInstance = sharpInstance.resize({
        width: options.width,
        height: options.height,
        fit: options.fit || 'cover',
        position: options.position || 'center',
      });
    }
    
    // Format conversion
    const format = path.extname(outputPath).substring(1).toLowerCase() || 'jpeg';
    
    // Quality settings
    const quality = options.quality || 80;
    
    if (format === 'jpeg' || format === 'jpg') {
      sharpInstance = sharpInstance.jpeg({ quality });
    } else if (format === 'png') {
      sharpInstance = sharpInstance.png({ compressionLevel: 9 });
    } else if (format === 'webp') {
      sharpInstance = sharpInstance.webp({ quality });
    } else if (format === 'avif') {
      sharpInstance = sharpInstance.avif({ quality });
    }
    
    // Save the processed image
    await sharpInstance.toFile(outputPath);
    
    console.log(`Image saved to ${outputPath}`);
    
    // Get file size
    const stats = await fs.stat(outputPath);
    console.log(`File size: ${(stats.size / 1024).toFixed(2)} KB`);
    
    return outputPath;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Execute if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Usage: node downloadImage.js <imageUrl> <outputPath> [options]');
    console.log('Options:');
    console.log('  --width=<number>    Width to resize to');
    console.log('  --height=<number>   Height to resize to');
    console.log('  --quality=<number>  Quality (1-100, default: 80)');
    console.log('  --fit=<method>      Fit method (cover, contain, fill, inside, outside)');
    process.exit(1);
  }
  
  const [url, outputPath] = args;
  const options = {};
  
  // Parse options
  args.slice(2).forEach(arg => {
    if (arg.startsWith('--')) {
      const [key, value] = arg.substring(2).split('=');
      if (key === 'width' || key === 'height' || key === 'quality') {
        options[key] = parseInt(value, 10);
      } else {
        options[key] = value;
      }
    }
  });
  
  // Execute download
  downloadImage(url, outputPath, options)
    .catch(error => {
      console.error('Failed:', error);
      process.exit(1);
    });
}

module.exports = downloadImage; 