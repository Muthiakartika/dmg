// Hero background, shared by HeroBanner (which paints it) and the home page
// (which preloads it, since CSS backgrounds are invisible to the preload scanner).
//
// Below 768px the banner is 800px tall with `background-size: cover` anchored
// top-left, so the picture always fills 800px of height and at most the left
// ~780px of its width are visible. 1-mobile.webp is the 800x815px strip of
// 1.webp that starts at x=1040, on the house's main brick gable (1.webp's left
// ~700px are only trees, which is all a phone used to show), scaled to 500px
// wide and saved at WebP quality 70: 39 KB instead of the 116 KB full-size
// strip. Phones draw it under a 62-78% dark overlay, where the lower resolution
// does not show, and it no longer competes with the page's JavaScript for
// bandwidth long enough to hold back LCP.
import heroImage from "../../../public/images/main-banner/home/1.webp";
import heroImageMobile from "../../../public/images/main-banner/home/1-mobile.webp";

/** Must match the max-width of the `--hero-image-mobile` rule in src/styles/sections/hero.css. */
export const HERO_MOBILE_QUERY = "(max-width: 767px)";
export const HERO_DESKTOP_QUERY = "(min-width: 768px)";

export { heroImage, heroImageMobile };
