const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const logoPath = path.join(__dirname, 'syncLabs-logo-nobg.png');
  const outputPath = path.join(__dirname, 'app', 'favicon.ico');
  
  console.log('Loading logo:', logoPath);
  
  const logoBuffer = fs.readFileSync(logoPath);
  const sizes = [16, 32, 48, 64, 128, 256];
  
  // Generate PNG buffers - use resize with specific settings to preserve alpha
  const pngBuffers = await Promise.all(
    sizes.map(size => 
      sharp(logoBuffer, { 
        failOnError: false 
      })
        .resize(size, size, {
          fit: 'fill',
          kernel: sharp.kernel.lanczos3
        })
        .png({
          compressionLevel: 9,
          palette: false,
          quality: 100
        })
        .toBuffer()
    )
  );
  
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const directorySize = 16 * numImages;
  
  let offset = headerSize + directorySize;
  const directories = [];
  const imageDataBuffers = [];
  
  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];
    const pngData = pngBuffers[i];
    
    directories.push({
      width: size === 256 ? 0 : size,
      height: size === 256 ? 0 : size,
      colorCount: 0,
      reserved: 0,
      planes: 1,
      bitCount: 32,
      bytesInRes: pngData.length,
      imageOffset: offset
    });
    
    imageDataBuffers.push(pngData);
    offset += pngData.length;
  }
  
  const icoBuffer = Buffer.alloc(headerSize + directorySize + offset);
  let pos = 0;
  
  icoBuffer.writeUInt16LE(0, pos); pos += 2;
  icoBuffer.writeUInt16LE(1, pos); pos += 2;
  icoBuffer.writeUInt16LE(numImages, pos); pos += 2;
  
  for (const dir of directories) {
    icoBuffer.writeUInt8(dir.width, pos); pos += 1;
    icoBuffer.writeUInt8(dir.height, pos); pos += 1;
    icoBuffer.writeUInt8(dir.colorCount, pos); pos += 1;
    icoBuffer.writeUInt8(dir.reserved, pos); pos += 1;
    icoBuffer.writeUInt16LE(dir.planes, pos); pos += 2;
    icoBuffer.writeUInt16LE(dir.bitCount, pos); pos += 2;
    icoBuffer.writeUInt32LE(dir.bytesInRes, pos); pos += 4;
    icoBuffer.writeUInt32LE(dir.imageOffset, pos); pos += 4;
  }
  
  for (const imgData of imageDataBuffers) {
    imgData.copy(icoBuffer, pos);
    pos += imgData.length;
  }
  
  fs.writeFileSync(outputPath, icoBuffer);
  console.log('Favicon saved:', outputPath, 'Size:', icoBuffer.length);
  
  // Also copy to public
  fs.copyFileSync(logoPath, path.join(__dirname, 'public', 'syncLabs-logo.png'));
  console.log('Logo copied to public folder');
}

generateFavicon().catch(console.error);
