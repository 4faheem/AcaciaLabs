const sharp = require('sharp');
const path = require('path');

async function removeBackground() {
  const inputPath = path.join(__dirname, 'syncLabs logo.png');
  const outputPath = path.join(__dirname, 'syncLabs-logo-nobg.png');
  
  // Get raw pixels
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  const w = info.width, h = info.height;
  const channels = info.channels;
  
  // Sample background color (top-left corner)
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];
  console.log('Background color detected:', bgR, bgG, bgB);
  
  // New buffer with alpha channel
  const newData = Buffer.alloc(w * h * 4);
  
  // Process each pixel
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * channels;
      const dstIdx = (y * w + x) * 4;
      
      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      
      // Copy RGB
      newData[dstIdx] = r;
      newData[dstIdx + 1] = g;
      newData[dstIdx + 2] = b;
      
      // Check if this pixel is background (dark color matching corners)
      // Background is around RGB(0, 10, 36) - make it transparent
      const isBg = (r < 20 && g < 30 && b < 60);
      
      // Also check for white/light background variations
      const isWhiteBg = (r > 240 && g > 240 && b > 240);
      
      newData[dstIdx + 3] = (isBg || isWhiteBg) ? 0 : 255;
    }
  }
  
  // Save as PNG with alpha
  await sharp(Buffer.from(newData), {
    raw: { width: w, height: h, channels: 4 }
  })
  .png()
  .toFile(outputPath);
  
  console.log('Saved:', outputPath);
  
  // Verify
  const outMeta = await sharp(outputPath).metadata();
  console.log('Output has alpha:', outMeta.hasAlpha);
}

removeBackground().catch(console.error);
