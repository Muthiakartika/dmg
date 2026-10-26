import { chimneyRepairAreas } from "./chimneyRepairAreas";
import { plainText } from "./richText";
import { siteConfig } from "./site";

// schema.org data shared by the service pages. The business itself is the
// `#organization` node in the root layout; these nodes point back to it.

const organizationId = `${siteConfig.url}/#organization`;

export interface Crumb {
  name: string;
  /** Page path with leading and trailing slash, e.g. "/services/". */
  path: string;
}

/** One question and its answer, as shown on the page. */
export interface SchemaFaq {
  question: string;
  answers: readonly string[];
}

export function breadcrumbSchema(trail: readonly Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };
}

/** Built from the visible question/answer text, word for word (link markup dropped). */
export function faqPageSchema(faqs: readonly SchemaFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: plainText(faq.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answers.map(plainText).join(" "),
      },
    })),
  };
}

interface ServicePage {
  /** Name shown in the breadcrumb (the PageTitle on the page). */
  breadcrumb: string;
  name: string;
  serviceType: string;
  /** The page's meta description without the phone number / call to action. */
  description: string;
}

export const servicePages = {
  "/calgary/masonry-repair/": {
    breadcrumb: "Masonry Repair",
    name: "Masonry Repair in Calgary",
    serviceType: "Masonry repair",
    description: "Calgary masonry repair for cracked brick, crumbling mortar and damaged stone.",
  },
  "/calgary/brick-repair/": {
    breadcrumb: "Brick Repair",
    name: "Brick Repair in Calgary",
    serviceType: "Brick repair",
    description:
      "Brick repair in Calgary for cracked, spalled and loose brick, with mortar matched for a clean finish.",
  },
  "/calgary/chimney-repair/": {
    breadcrumb: "Chimney Repair",
    name: "Chimney Repair in Calgary",
    serviceType: "Chimney repair",
    description:
      "Chimney repair in Calgary: crowns, caps, tuckpointing, spalled brick and partial rebuilds.",
  },
  "/calgary/stone-veneer/": {
    breadcrumb: "Stone Veneer",
    name: "Stone Veneer Installation in Calgary",
    serviceType: "Stone veneer installation",
    description:
      "Natural and cultured stone veneer installed on Calgary homes, from siding to fireplace surrounds.",
  },
  "/calgary/custom-fire-pits/": {
    breadcrumb: "Custom Fire Pits",
    name: "Custom Fire Pits in Calgary",
    serviceType: "Fire pit installation",
    description:
      "Custom stone and brick fire pits designed and installed in Calgary and across Alberta.",
  },
  "/calgary/custom-pizza-oven/": {
    breadcrumb: "Custom Pizza Oven",
    name: "Custom Outdoor Pizza Ovens in Calgary",
    serviceType: "Pizza oven construction",
    description:
      "Custom wood-fired outdoor pizza ovens built in Calgary, for homes and commercial projects.",
  },
  "/calgary/fireplace-installation/": {
    breadcrumb: "Fireplace Installation",
    name: "Fireplace Installation in Calgary",
    serviceType: "Fireplace installation",
    description: "Custom outdoor fireplaces and indoor fireplace installation in Calgary.",
  },
  "/calgary/retaining-wall-construction/": {
    breadcrumb: "Retaining Wall Construction",
    name: "Retaining Wall Construction in Calgary",
    serviceType: "Retaining wall construction",
    description:
      "Retaining wall contractor in Calgary: block, stone and concrete walls for sloped yards and erosion control.",
  },
  "/calgary/foundation-repair/": {
    breadcrumb: "Foundation Repair",
    name: "Foundation Repair in Calgary",
    serviceType: "Foundation repair",
    description: "Foundation repair in Calgary: crack injection, waterproofing and parging.",
  },
  "/outdoor-kitchen-contractor/": {
    breadcrumb: "Outdoor Kitchen Contractor",
    name: "Outdoor Kitchens in Calgary",
    serviceType: "Outdoor kitchen construction",
    description:
      "Custom outdoor kitchens and built-in BBQs in Calgary, planned with layout, materials and cost upfront.",
  },
  "/hardscape-contractor/": {
    breadcrumb: "Hardscape Contractor",
    name: "Hardscape Contractor in Calgary",
    serviceType: "Hardscaping",
    description: "Calgary hardscape contractor for stone patios, pavers and retaining walls.",
  },
  "/patio-stone-installation/": {
    breadcrumb: "Patio Stone Installation",
    name: "Patio Stone Installation in Calgary",
    serviceType: "Patio installation",
    description:
      "Paving stone patios, pavers and flagstone installed in Calgary, from grading to finish.",
  },
} as const satisfies Record<string, ServicePage>;

export type ServicePagePath = keyof typeof servicePages;

/** Service + BreadcrumbList (Home > Services > page) for a service page. */
export function servicePageSchema(path: ServicePagePath) {
  const page: ServicePage = servicePages[path];

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.name,
      serviceType: page.serviceType,
      description: page.description,
      url: `${siteConfig.url}${path}`,
      areaServed: { "@type": "City", name: "Calgary" },
      provider: { "@id": organizationId },
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/" },
      { name: page.breadcrumb, path },
    ]),
  ];
}

/** Service + BreadcrumbList (Home > Chimney Repair > town) for a chimney town page. */
export function chimneyTownSchema(town: { name: string; slug: string; description: string }) {
  const path = `/calgary/chimney-repair/${town.slug}/`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Chimney Repair in ${town.name}`,
      serviceType: "Chimney repair",
      description: town.description,
      url: `${siteConfig.url}${path}`,
      areaServed: {
        "@type": "Place",
        name: town.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: town.name,
          addressRegion: "AB",
          addressCountry: "CA",
        },
      },
      provider: { "@id": organizationId },
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Chimney Repair", path: "/calgary/chimney-repair/" },
      { name: `Chimney Repair in ${town.name}`, path },
    ]),
  ];
}

/** The `#organization` node of the root layout: a local business with its address and service area. */
export function businessSchema() {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": organizationId,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}/images/logo.webp`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1111 46 Ave SE",
      addressLocality: "Calgary",
      addressRegion: "AB",
      postalCode: "T2G 2A5",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "City", name: "Calgary" },
      ...chimneyRepairAreas.map((area) => ({ "@type": "Place", name: `${area.name}, AB` })),
    ],
    knowsAbout: [
      "Masonry repair",
      "Brick repair",
      "Chimney repair",
      "Stone veneer",
      "Retaining walls",
      "Outdoor kitchens",
      "Fire pits",
      "Fireplaces",
      "Pizza ovens",
      "Patio stone installation",
      "Foundation repair",
    ],
    // Opening hours are local time (Calgary), so no UTC offset is given.
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: [...siteConfig.sameAs, siteConfig.googleBusinessProfile],
  };
}
