#!/usr/bin/env node
// app/brand.css is a verbatim copy of pai-assets' brand/brand.css, the master
// copy shared byte for byte with the website (pai-website, app/brand.css).
// Never edit it here: change the master, then copy it to both sites.
//
//   npm run brand              # copy ../pai-assets/brand/brand.css (or $BRAND_CSS) to app/brand.css
//   npm run brand -- --check   # fail if app/brand.css differs from the master
import { copyFileSync, existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = join(import.meta.dirname, '..');
const target = join(root, 'app/brand.css');
const master = resolve(process.env.BRAND_CSS ?? join(root, '../pai-assets/brand/brand.css'));

if (!existsSync(master)) {
  console.error(`${master} not found. Set BRAND_CSS to the master copy (pai-assets brand/brand.css).`);
  process.exit(2);
}

if (process.argv.includes('--check')) {
  const same = existsSync(target) && readFileSync(target).equals(readFileSync(master));
  console.log(same ? `app/brand.css is identical to ${master}.` : `app/brand.css differs from ${master}.`);
  process.exit(same ? 0 : 1);
}

copyFileSync(master, target);
console.log(`app/brand.css <- ${master}`);
