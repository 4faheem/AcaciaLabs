/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const logoPath = path.join(__dirname, 'public', 'acacia-logo.png');
  const outputPath = path.join(__dirname, 'app', 'favicon.ico');
  const iconPath = path.join(__dirname, 'app', 'icon.png');
  
  console.log('Loading logo:', logoPath);
  
  const logoBuffer = fs.readFileSync(logoPath);
  
  // Generate the app/icon.png (high res)
  await sharp(logoBuffer)
    .resize(512, 512)
    .png()
    .toFile(iconPath);
  console.log('Icon saved:', iconPath);

  const sizes = [16, 32, 48, 64];
  
  // Generate PNG buffers for ICO
  const pngBuffers = await Promise.all(
    sizes.map(size => 
      sharp(logoBuffer)
        .resize(size, size)
        .png()
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
      width: size,
      height: size,
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
  
  const totalSize = headerSize + directorySize + imageDataBuffers.reduce((acc, buf) => acc + buf.length, 0);
  const icoBuffer = Buffer.alloc(totalSize);
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
}

generateFavicon().catch(console.error);
