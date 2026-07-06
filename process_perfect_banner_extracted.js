const { Jimp } = require('jimp');
const fs = require('fs');

async function main() {
  const imgPath = 'f:/Antigravity/project/Jin_oriental/public/images/review/best_review_banner.png';
  
  try {
    const img = await Jimp.read(imgPath);
    const w = img.bitmap.width;
    const h = img.bitmap.height;
    console.log(`Processing banner for natural diagonal shadow and clean fringes: ${w}x${h}`);

    // Scan for stamp pixels to automatically find the center (cx, cy)
    let sumX = 0;
    let sumY = 0;
    let count = 0;

    for (let y = 0; y < h * 0.7; y++) {
      for (let x = 0; x < w * 0.4; x++) {
        const color = img.getPixelColor(x, y);
        const r = (color >> 24) & 255;
        const g = (color >> 16) & 255;
        const b = (color >> 8) & 255;
        const a = color & 255;

        // Stamp pink/red ink detection
        if (a > 15 && r > 210 && g < 160 && b > 100 && b < 210) {
          sumX += x;
          sumY += y;
          count++;
        }
      }
    }

    if (count === 0) {
      throw new Error("Could not detect the pink stamp mark on the image!");
    }

    const cx = Math.round(sumX / count);
    const cy = Math.round(sumY / count);
    console.log(`Detected stamp center at: (${cx}, ${cy}) using ${count} pixels.`);

    // Scaling factors based on the ratio to base width (1024)
    const scale = w / 1024;
    console.log(`Calculated scale factor: ${scale.toFixed(4)}`);

    const charRadius = 112 * scale;
    const stampFringeRadius = 160 * scale;

    const visited = new Uint8Array(w * h);
    const isShadow = new Uint8Array(w * h);
    const isGraphicSource = new Uint8Array(w * h);
    const queue = [];

    // PASS 1: Whiten the character "眞" inside the stamp.
    const charMinX = cx - 55 * scale;
    const charMaxX = cx + 55 * scale;
    const charMinY = cy - 90 * scale;
    const charMaxY = cy + 90 * scale;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if (dist < charRadius) {
          if (x >= charMinX && x <= charMaxX && y >= charMinY && y <= charMaxY) {
            const color = img.getPixelColor(x, y);
            const g = (color >> 16) & 255;
            const b = (color >> 8) & 255;
            const a = color & 255;

            // Character stroke detection
            if (a > 50 && g > 175 && b > 190) {
              img.setPixelColor(0xFFFFFFFF, x, y);
            }
          }
        }
      }
    }

    // PASS 2: BFS starting from transparent pixels to find and ELIMINATE all white fringe outlines
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = y * w + x;
        const color = img.getPixelColor(x, y);
        const a = color & 255;
        if (a < 15) {
          visited[idx] = 1;
          queue.push({ x, y });
        }
      }
    }

    console.log(`BFS queue initialized with ${queue.length} transparent/background pixels.`);

    let head = 0;
    let outlineCount = 0;
    while (head < queue.length) {
      const { x, y } = queue[head++];

      const neighbors = [
        { x: x + 1, y },
        { x: x - 1, y },
        { x, y: y + 1 },
        { x, y: y - 1 }
      ];

      for (const n of neighbors) {
        if (n.x >= 0 && n.x < w && n.y >= 0 && n.y < h) {
          const nIdx = n.y * w + n.x;
          if (!visited[nIdx]) {
            // APPLY STRICT EXCLUSION ZONES for BFS
            
            // 1. Gold stars at the top
            if (n.y < 200 * scale) {
              visited[nIdx] = 1;
              continue;
            }

            // 2. Stamp circle core (眞 character and stamp pink body)
            const dx = n.x - cx;
            const dy = n.y - cy;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < charRadius) {
              visited[nIdx] = 1;
              continue;
            }

            // 3. Sparkle illustrations (X > w * 0.72 & Y < h * 0.40)
            if (n.x > w * 0.72 && n.y < h * 0.40) {
              visited[nIdx] = 1;
              continue;
            }

            // 4. Thumbs up 3D hand (X > w * 0.78 & Y > h * 0.65)
            if (n.x > w * 0.78 && n.y > h * 0.65) {
              visited[nIdx] = 1;
              continue;
            }

            const nColor = img.getPixelColor(n.x, n.y);
            const nr = (nColor >> 24) & 255;
            const ng = (nColor >> 16) & 255;
            const nb = (nColor >> 8) & 255;
            const na = nColor & 255;

            // Detect white outline: R, G, B channels are high (near-white) and it's opaque
            // We use a safe threshold > 185 to capture all fringes
            if (na > 15 && nr > 185 && ng > 185 && nb > 185) {
              visited[nIdx] = 1;
              outlineCount++;

              // All detected white outlines/fringes (including text outline and stamp outer fringe) are completely removed!
              // (We will dynamically recreate natural shadows instead)
              img.setPixelColor(0x00000000, n.x, n.y);

              queue.push(n);
            } else {
              // Non-white pixel: stop BFS propagation
              visited[nIdx] = 1;
            }
          }
        }
      }
    }

    console.log(`Removed ${outlineCount} white outline/fringe pixels.`);

    // PASS 3: Identify the 3D Text & Bubble core pixels as graphic source for shadow generation
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        // Exclude top stars, stamp circle, sparkles, and thumbs up hand
        if (y < 200 * scale) continue;
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < stampFringeRadius) continue;
        if (x > w * 0.72 && y < h * 0.40) continue;
        if (x > w * 0.78 && y > h * 0.65) continue;
        if (y > 750 * scale) continue; // Exclude hashtags too

        const color = img.getPixelColor(x, y);
        const r = (color >> 24) & 255;
        const g = (color >> 16) & 255;
        const b = (color >> 8) & 255;
        const a = color & 255;

        // Opaque, non-white colored pixels are our 3D text/bubble graphics
        if (a > 150 && !(r > 200 && g > 200 && b > 200)) {
          isGraphicSource[y * w + x] = 1;
        }
      }
    }

    // PASS 4: Generate natural diagonal shadow (from Top-Right to Bottom-Left)
    // Offset direction: dx < 0 (left), dy > 0 (down)
    const ox = Math.round(-11 * scale); // 11px left offset at scale 1.0
    const oy = Math.round(11 * scale);  // 11px down offset at scale 1.0
    console.log(`Generating diagonal shadow with offset: (${ox}, ${oy})`);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = y * w + x;
        const color = img.getPixelColor(x, y);
        const a = color & 255;

        // Only draw shadow on transparent pixels
        if (a === 0) {
          // Check if there is a graphic source at (x - ox, y - oy)
          const srcX = x - ox;
          const srcY = y - oy;

          if (srcX >= 0 && srcX < w && srcY >= 0 && srcY < h) {
            if (isGraphicSource[srcY * w + srcX]) {
              isShadow[idx] = 1;
              // Base shadow color: semi-transparent black (approx 20% opacity = 50)
              img.setPixelColor(0x00000032, x, y);
            }
          }
        }
      }
    }

    // PASS 5: Apply masked blur on shadow pixels to make it soft and natural
    console.log('Applying soft blur to the generated diagonal shadow...');
    const tempImg = img.clone();
    const blurRadius = Math.max(4, Math.round(4 * scale)); // 9x9 window for soft shadow

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = y * w + x;

        if (isShadow[idx]) {
          let sumA = 0;
          let count = 0;

          for (let ky = -blurRadius; ky <= blurRadius; ky++) {
            for (let kx = -blurRadius; kx <= blurRadius; kx++) {
              const nx = x + kx;
              const ny = y + ky;

              if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                const nIdx = ny * w + nx;
                const nColor = tempImg.getPixelColor(nx, ny);
                const na = nColor & 255;

                if (isShadow[nIdx]) {
                  sumA += na;
                  count++;
                } else if (na === 0) {
                  sumA += 0;
                  count++;
                } else {
                  // Opaque graphics behaves as solid shadow source
                  sumA += 60;
                  count++;
                }
              }
            }
          }

          if (count > 0) {
            const finalAlpha = Math.min(Math.round(sumA / count), 65); // Max opacity cap
            if (finalAlpha > 1) {
              img.setPixelColor(finalAlpha, x, y);
            } else {
              img.setPixelColor(0x00000000, x, y);
            }
          }
        }
      }
    }

    // Save the finalized image
    await img.write(imgPath);
    console.log('Successfully saved perfect high-res banner with natural diagonal shadow!');

  } catch (err) {
    console.error('Error processing high-res banner:', err);
  }
}

main();
