const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

(async () => {
  try {
    const inPath = path.join(__dirname, '..', 'public', 'file.svg');
    const outPath = path.join(__dirname, '..', 'public', 'favicon.ico');
    const sizes = [16, 32, 48, 64, 128];

    const pngBuffers = await Promise.all(
      sizes.map((size) => sharp(inPath).resize(size, size).png().toBuffer())
    );

    const ico = await toIco(pngBuffers);
    fs.writeFileSync(outPath, ico);
    console.log('Generated', outPath);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
