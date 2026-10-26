// Central site configuration used for SEO metadata, sitemap, robots and the
// contact details repeated across the layout and forms.
//
// The production domain is not live yet, so this defaults to localhost for dev.
// When deploying, set NEXT_PUBLIC_SITE_URL (e.g. https://dmgmasonry.ca) at build
// time and every canonical / OpenGraph URL, the sitemap and robots.txt update.

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "DMG Masonry",
  // No trailing slash here; paths are appended starting with "/".
  url: rawUrl.replace(/\/+$/, ""),
  locale: "en_US",
  // Default social-share image (used for og:image / twitter:image) for pages
  // that do not pass their own. It is an opaque 1200x630 crop of the home hero
  // (main-banner/home/1.webp is a transparent cut-out, which Google showed as a
  // blank or odd thumbnail).
  ogImage: "/images/og-default.jpg",
  telephone: "+1-403-619-8727",
  email: "will@dmgmasonry.ca",
  sameAs: [
    "https://www.facebook.com/DMGMasonry/",
    "https://www.instagram.com/d.m.gmasonry/",
  ],
  // Google Business Profile (the Maps listing). Kept apart from `sameAs`, whose
  // first two entries feed the footer's social icons.
  googleBusinessProfile:
    "https://www.google.com/maps/place/D.M.G.+Masonry+LTD/@50.919583,-113.9621332,745m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53717701781c0ddb:0x82f1044b969394fb!8m2!3d50.919583!4d-113.9621332!16s%2Fg%2F11xctrhj8k",
} as const;

export const contact = {
  phoneHref: "tel:+14036198727",
  phoneLabel: "1-403-619-8727",
  emailHref: `mailto:${siteConfig.email}`,
  email: siteConfig.email,
  address: "1111 - 46 Ave S.E., Calgary, Alberta T2G 2A5",
  whatsappUrl: `https://wa.me/${siteConfig.telephone.replace(/\D/g, "")}`,
} as const;

export const socialLinks = [
  {
    id: "facebook",
    label: "Facebook",
    icon: "ri-facebook-line",
    link: siteConfig.sameAs[0],
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: "ri-instagram-line",
    link: siteConfig.sameAs[1],
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: "ri-whatsapp-line",
    link: contact.whatsappUrl,
  },
] as const;
