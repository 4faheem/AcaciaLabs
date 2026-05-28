const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFaviconSystem() {
  const logoPath = path.join(__dirname, 'public', 'acacia-logo.png');
  console.log('Loading official logo from:', logoPath);
  
  if (!fs.existsSync(logoPath)) {
    throw new Error('Source logo PNG file not found!');
  }
  
  const logoBuffer = fs.readFileSync(logoPath);

  // 1. Generate Next.js automatic high-res icons
  await sharp(logoBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, 'app', 'icon.png'));
  console.log('Saved app/icon.png');

  await sharp(logoBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, 'app', 'apple-icon.png'));
  console.log('Saved app/apple-icon.png');

  // 2. Generate classic public directory icons for standard HTML fallback
  await sharp(logoBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(__dirname, 'public', 'favicon-16x16.png'));
  console.log('Saved public/favicon-16x16.png');

  await sharp(logoBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, 'public', 'favicon-32x32.png'));
  console.log('Saved public/favicon-32x32.png');

  await sharp(logoBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, 'public', 'apple-touch-icon.png'));
  console.log('Saved public/apple-touch-icon.png');

  await sharp(logoBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, 'public', 'android-chrome-192x192.png'));
  console.log('Saved public/android-chrome-192x192.png');

  await sharp(logoBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, 'public', 'android-chrome-512x512.png'));
  console.log('Saved public/android-chrome-512x512.png');

  // 3. Create multi-resolution favicon.ico
  const sizes = [16, 32, 48, 64];
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
  
  fs.writeFileSync(path.join(__dirname, 'app', 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), icoBuffer);
  console.log('Saved app/favicon.ico and public/favicon.ico');

  // 5. Generate Safari pinned tab icon (flat cyan colored SVG)
  const pinnedSvg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M15,35 L85,35" stroke="#00D1FF" stroke-width="7" stroke-linecap="round" />
  <path d="M25,50 L75,50" stroke="#00D1FF" stroke-width="7" stroke-linecap="round" />
  <path d="M38,65 L62,65" stroke="#00D1FF" stroke-width="7" stroke-linecap="round" />
  <path d="M50,35 L50,80" stroke="#00D1FF" stroke-width="8" stroke-linecap="round" />
  <path d="M50,50 L38,35" stroke="#00D1FF" stroke-width="6" stroke-linecap="round" />
  <path d="M50,50 L62,35" stroke="#00D1FF" stroke-width="6" stroke-linecap="round" />
  <path d="M50,65 L25,50" stroke="#00D1FF" stroke-width="6" stroke-linecap="round" />
  <path d="M50,65 L75,50" stroke="#00D1FF" stroke-width="6" stroke-linecap="round" />
  <circle cx="15" cy="35" r="5.5" fill="#00D1FF" />
  <circle cx="50" cy="35" r="5.5" fill="#00D1FF" />
  <circle cx="85" cy="35" r="5.5" fill="#00D1FF" />
  <circle cx="25" cy="50" r="5.5" fill="#00D1FF" />
  <circle cx="75" cy="50" r="5.5" fill="#00D1FF" />
  <circle cx="38" cy="65" r="5.5" fill="#00D1FF" />
  <circle cx="62" cy="65" r="5.5" fill="#00D1FF" />
  <circle cx="50" cy="80" r="7" fill="#00D1FF" />
</svg>`;
  fs.writeFileSync(path.join(__dirname, 'public', 'safari-pinned-tab.svg'), pinnedSvg);
  console.log('Saved public/safari-pinned-tab.svg');

  // 6. Generate site.webmanifest
  const webManifest = {
    name: "Acacia Labs",
    short_name: "Acacia Labs",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#050505",
    background_color: "#050505",
    display: "standalone"
  };
  fs.writeFileSync(path.join(__dirname, 'public', 'site.webmanifest'), JSON.stringify(webManifest, null, 2));
  console.log('Saved public/site.webmanifest');
  
  console.log('--- Favicon Generation System Completed Successfully ---');
}

generateFaviconSystem().catch(console.error);
