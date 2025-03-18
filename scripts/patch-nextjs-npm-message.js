/**
 * This script patches the Next.js npm reference in error messages to use yarn instead
 */
const fs = require('fs');
const path = require('path');

const filesToPatch = [
  path.join(__dirname, '../node_modules/next/dist/lib/patch-incorrect-lockfile.js'),
  path.join(__dirname, '../node_modules/next/dist/esm/lib/patch-incorrect-lockfile.js')
];

filesToPatch.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    console.log(`Patching file: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace npm install with yarn
    content = content.replace(
      /Lockfile was successfully patched, please run "npm install"/g,
      'Lockfile was successfully patched, please run "yarn"'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully patched: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Patching complete!');
