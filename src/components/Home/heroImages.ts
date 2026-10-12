// Hero photo, painted by the <picture> in HeroBanner (desktop file by default,
// the mobile crop below 768px). The <img> is in the HTML, so the browser's
// preload scanner fetches it without a separate <link rel="preload">.
//
// Below 768px the photo shows below the copy, 60vw tall and anchored to its
// right edge, so the house and the tree in front of it are in view.
// 1-mobile.webp is all of 1.webp scaled to 1100px wide (enough for a 375px
// screen at 3x) and saved at WebP quality 70 with the alpha kept: 67 KB
// instead of the desktop file's 194 KB.
import heroImage from "../../../public/images/main-banner/home/1.webp";
import heroImageMobile from "../../../public/images/main-banner/home/1-mobile.webp";

/** Must match the max-width of the phone rules for .main-banner-image in src/styles/sections/hero.css. */
export const HERO_MOBILE_QUERY = "(max-width: 767px)";

export { heroImage, heroImageMobile };
