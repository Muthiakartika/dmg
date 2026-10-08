// Hero background, shared by HeroBanner (which paints it) and the home page
// (which preloads it, since CSS backgrounds are invisible to the preload scanner).
//
// Below 768px the banner is 800px tall with `background-size: cover` anchored
// top-left, so the image is always drawn at 800/815 scale and only its left
// ~780px are ever visible. 1-mobile.webp is exactly that strip — the left
// 800x815px of 1.webp, re-encoded at WebP quality 90 — so phones download 88 KB
// instead of 194 KB and see the same picture.
import heroImage from "../../../public/images/main-banner/home/1.webp";
import heroImageMobile from "../../../public/images/main-banner/home/1-mobile.webp";

/** Must match the max-width of the `--hero-image-mobile` rule in responsive.css. */
export const HERO_MOBILE_QUERY = "(max-width: 767px)";
export const HERO_DESKTOP_QUERY = "(min-width: 768px)";

export { heroImage, heroImageMobile };
