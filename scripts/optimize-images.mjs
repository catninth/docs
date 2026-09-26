import sharp from 'sharp';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';

// Serving derivatives only. Keep supplied branding and full screenshots intact.
const root = fileURLToPath(new URL('../static/img/', import.meta.url));
const variants = [
  ['cat-ninth.png', 'cat-ninth-nav.webp', 96],
  ['cat-ninth.png', 'cat-ninth-hero.webp', 640],
  ['cat-ninth.png', 'favicon.png', 64],
  ['gitcat/workspace.png', 'gitcat/workspace-preview.webp', 720],
  ['clipcat/settings.png', 'clipcat/settings-preview.webp', 720],
];
await Promise.all(variants.map(async ([source, target, width]) => {
  const pipeline = sharp(resolve(root, source)).resize({width, withoutEnlargement: true});
  await (target.endsWith('.webp') ? pipeline.webp({quality: 88}) : pipeline.png()).toFile(resolve(root, target));
  console.log(`Created ${target}`);
}));
