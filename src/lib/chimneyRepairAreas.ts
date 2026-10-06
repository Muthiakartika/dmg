// The towns that have their own /calgary/chimney-repair/<slug>/ page.
//
// Kept apart from chimneyRepairLocations.ts on purpose: the navbar and footer
// (client components on every page) only need these names, and importing the
// full page copy would ship all of it to the browser.
export const chimneyRepairAreas = [
  { slug: "bragg-creek", name: "Bragg Creek" },
  { slug: "longview", name: "Longview" },
  { slug: "kananaskis", name: "Kananaskis" },
  { slug: "sundre", name: "Sundre" },
  { slug: "three-hills", name: "Three Hills" },
  { slug: "drumheller", name: "Drumheller" },
  { slug: "claresholm", name: "Claresholm" },
] as const;

export type ChimneyRepairAreaSlug = (typeof chimneyRepairAreas)[number]["slug"];
