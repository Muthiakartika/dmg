// Top-level navigation shared by the desktop navbar and the mobile menu.
// "Services" sits between About Us and Blogs and is rendered separately
// because it opens a submenu.

export interface PrimaryLink {
  label: string;
  href: string;
  /** Highlight the link on every page below `href`, not only on `href` itself. */
  matchPrefix?: boolean;
}

export const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Blogs", href: "/blogs/", matchPrefix: true },
  { label: "Contact Us", href: "/contact-us/" },
] as const satisfies readonly PrimaryLink[];

export function isActiveLink(link: PrimaryLink, currentRoute: string) {
  return link.matchPrefix ? currentRoute.startsWith(link.href) : currentRoute === link.href;
}
