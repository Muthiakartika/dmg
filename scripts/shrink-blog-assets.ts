// Shrink blog images that were stored at camera size.
//
// Until the upload form scaled every image (see prepareImageForUpload in
// src/lib/adminBlogForm.ts), a file of 3.5 MB or less was stored as it was.
// Three covers are 5472px JPEGs of over 3 MB, which every phone downloaded in
// full. This script re-encodes each oversized R2 asset the way the form now
// does (longest side WEB_IMAGE_MAX_DIMENSION, WebP) and points the asset row at
// the new object. The asset id stays the same, so its /api/blog-assets/<id>
// URL and every blog that uses it are unchanged.
//
// The original object is kept in R2 as a backup and its key is printed.
//
// It is a dry run by default. After --apply, the cached redirects need
// clearing: /api/blog-assets/<id> answers with a long-cached 302 to the R2
// object. Redeploy on Vercel, which drops its CDN cache; the deploy workflow
// then purges Cloudflare (or run `npm run purge:cf`).
//
// Usage:
//   npm run blog:shrink-assets               # dry run, prints what would change
//   npm run blog:shrink-assets -- --apply    # upload and update the rows

import { loadEnvConfig } from "@next/env";
import sharp from "sharp";

import {
  WEB_IMAGE_KEEP_BYTES,
  WEB_IMAGE_MAX_DIMENSION,
  WEB_IMAGE_WEBP_QUALITY,
} from "../src/lib/blogImageConfig";
import { getSql } from "../src/lib/db";
import { getR2Asset, uploadR2Asset } from "../src/lib/r2";

loadEnvConfig(process.cwd());

const apply = process.argv.includes("--apply");
const kb = (bytes: number) => `${Math.round(bytes / 1024)} KB`;

async function main() {
  const sql = getSql();
  // GIFs are left alone: re-encoding would keep only the first frame.
  const assets = await sql`
    SELECT id, filename, object_key
    FROM blog_assets
    WHERE object_key IS NOT NULL AND mime_type <> 'image/gif'
    ORDER BY created_at
  `;

  let shrunk = 0;
  let savedBytes = 0;

  for (const asset of assets) {
    const id = String(asset.id);
    const objectKey = String(asset.object_key);
    const object = await getR2Asset(objectKey);
    if (!object.Body) {
      console.log(`${id}: R2 object ${objectKey} is empty, skipped.`);
      continue;
    }

    const original = Buffer.from(await object.Body.transformToByteArray());
    const { width = 0, height = 0 } = await sharp(original).metadata();
    const before = `${width}x${height}, ${kb(original.length)}`;

    if (Math.max(width, height) <= WEB_IMAGE_MAX_DIMENSION && original.length <= WEB_IMAGE_KEEP_BYTES) {
      console.log(`${id}: ${before}, already web-sized.`);
      continue;
    }

    const { data, info } = await sharp(original)
      .rotate() // apply the EXIF orientation before it is stripped
      .resize({
        width: WEB_IMAGE_MAX_DIMENSION,
        height: WEB_IMAGE_MAX_DIMENSION,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: Math.round(WEB_IMAGE_WEBP_QUALITY * 100) })
      .toBuffer({ resolveWithObject: true });

    if (data.length >= original.length) {
      console.log(`${id}: ${before}, re-encoding would not make it smaller, skipped.`);
      continue;
    }

    const summary = `${id}: ${before} -> ${info.width}x${info.height}, ${kb(data.length)}`;
    shrunk += 1;
    savedBytes += original.length - data.length;

    if (!apply) {
      console.log(`${summary} (dry run)`);
      continue;
    }

    const newObjectKey = await uploadR2Asset(data, "image/webp");
    const filename = `${String(asset.filename).replace(/\.[^.]+$/, "") || "image"}.webp`;
    await sql`
      UPDATE blog_assets
      SET object_key = ${newObjectKey}, mime_type = 'image/webp',
          size_bytes = ${data.length}, filename = ${filename}
      WHERE id = ${id} AND object_key = ${objectKey}
    `;
    console.log(`${summary}. Original kept in R2 as ${objectKey}.`);
  }

  const verb = apply ? "Shrunk" : "Would shrink";
  console.log(`${verb} ${shrunk} of ${assets.length} asset(s), saving ${kb(savedBytes)}.`);
  if (apply && shrunk) {
    console.log("Now redeploy on Vercel so the cached /api/blog-assets redirects are dropped.");
  } else if (!apply && shrunk) {
    console.log("Run again with --apply to write the changes.");
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
