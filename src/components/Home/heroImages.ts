// Hero photo, painted by the <picture> in HeroBanner (desktop file by default,
// the mobile crop below 768px). The <img> is in the HTML, so the browser's
// preload scanner fetches it without a separate <link rel="preload">.
//
// Below 768px the image spans the whole banner (about 500-660px tall) and fills
// it like `background-size: cover` at `object-position: 72% top`, so the photo's
// top edge (its transparent sky band and the gable peaks) meets the top of the
// banner and the copy sits on the walls below.
// 1-mobile.webp is the 1257x815px strip of 1.webp from x=420 to x=1677, which
// covers everything a 320-767px screen shows. It is cut so that 72% across it is
// the same point of the photo as 72% across 1.webp, so phones frame the house
// exactly as the full file would. Scaled to 880px wide and saved at WebP quality
// 70 with the alpha kept: 69 KB. The gables sit under a light 25-45% overlay, so
// a smaller file would show soft brickwork there.
import heroImage from "../../../public/images/main-banner/home/1.webp";
import heroImageMobile from "../../../public/images/main-banner/home/1-mobile.webp";

/** Must match the max-width of the phone rules for .main-banner-image in src/styles/sections/hero.css. */
export const HERO_MOBILE_QUERY = "(max-width: 767px)";

export { heroImage, heroImageMobile };
