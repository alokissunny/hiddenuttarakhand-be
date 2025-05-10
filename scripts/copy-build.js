const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, '../../uttarakhand-frontend/build');
const targetDir = path.join(__dirname, '../public');

async function copyBuild() {
  try {
    // Remove existing public directory
    await fs.remove(targetDir);
    
    // Create new public directory
    await fs.ensureDir(targetDir);
    
    // Copy build files
    await fs.copy(sourceDir, targetDir);
    
    console.log('Successfully copied frontend build to public directory');
  } catch (err) {
    console.error('Error copying build files:', err);
    process.exit(1);
  }
}

copyBuild(); 