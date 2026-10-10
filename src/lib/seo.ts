import type { Metadata } from "next";
import { siteConfig } from "./site";

export interface PageSeo {
  title: string;
  description: string;
  /**
   * Page path with a leading and trailing slash, e.g. "/services/".
   * The home page is "/". Resolved against `metadataBase` (set in the root
   * layout) for canonical and og:url.
   */
  path?: string;
  /**
   * og:image / twitter:image for this page, e.g. the service page's hero
   * photo. Google also uses it to pick the page thumbnail (Search Console,
   * Discover). Defaults to `siteConfig.ogImage`.
   */
  image?: string;
}

/**
 * Builds a full Metadata object (title, description, canonical, OpenGraph and
 * Twitter card) for a page. The robots tag is inherited from the root layout.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage,
}: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
