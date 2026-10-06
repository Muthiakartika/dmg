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
  // Default social-share image (used for og:image / twitter:image).
  ogImage: "/images/main-banner/home/1.webp",
  telephone: "+1-403-619-8727",
  email: "will@dmgmasonry.ca",
  sameAs: [
    "https://www.facebook.com/DMGMasonry/",
    "https://www.instagram.com/d.m.gmasonry/",
  ],
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
