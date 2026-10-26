// Hero photo, painted by the <picture> in HeroBanner (desktop file by default,
// the mobile crop below 768px). The <img> is in the HTML, so the browser's
// preload scanner fetches it without a separate <link rel="preload">.
//
// Below 768px the whole photo shows at the top of the banner at full width
// (44.3vw tall), with the copy below it.
// 1-mobile.webp is all of 1.webp scaled to 900px wide (2x of a 412px phone, which
// is what PageSpeed emulates) and saved at WebP quality 70 with the alpha kept: 48 KB
// instead of the desktop file's 194 KB.
import heroImage from "../../../public/images/main-banner/home/1.webp";
import heroImageMobile from "../../../public/images/main-banner/home/1-mobile.webp";

/** Must match the max-width of the phone rules for .main-banner-image in src/styles/sections/hero.css. */
export const HERO_MOBILE_QUERY = "(max-width: 767px)";

export { heroImage, heroImageMobile };
