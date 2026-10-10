export const SAFE_IMAGE_UPLOAD_BYTES = Math.floor(3.5 * 1024 * 1024);
export const MAX_SOURCE_IMAGE_BYTES = 20 * 1024 * 1024;

// Blog images are served as-is (next.config.js sets `images.unoptimized`), so
// every visitor, phones included, downloads the stored file. Uploads are
// scaled to fit WEB_IMAGE_MAX_DIMENSION (the widest a cover is drawn is about
// 856 CSS px, so this stays sharp at 2x) and re-encoded as WebP. A file that
// already fits and weighs at most WEB_IMAGE_KEEP_BYTES is uploaded untouched.
export const WEB_IMAGE_MAX_DIMENSION = 1600;
export const WEB_IMAGE_KEEP_BYTES = 500 * 1024;
export const WEB_IMAGE_WEBP_QUALITY = 0.8;

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
] as const;

export function isAllowedImageType(type: string) {
  return ALLOWED_IMAGE_TYPES.some((allowedType) => allowedType === type);
}
