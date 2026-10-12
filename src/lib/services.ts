import { chimneyRepairAreas } from "./chimneyRepairAreas";

export interface ServiceLocation {
  name: string;
  link: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  text: string;
  link: string;
  /** Town pages listed under this service in the navigation. */
  locations?: ServiceLocation[];
}

const chimneyRepairLinks: ServiceLocation[] = [
  { name: "Calgary", link: "/calgary/chimney-repair" },
  ...chimneyRepairAreas.map((area) => ({
    name: area.name,
    link: `/calgary/chimney-repair/${area.slug}`,
  })),
].sort((first, second) => first.name.localeCompare(second.name));

export const services: Service[] = [
  {
    id: "1",
    icon: "/images/service/MasonryRepair.png",
    title: "Masonry Repair",
    text: "Repair for cracked mortar, flaking brick and damaged stone.",
    link: "/calgary/masonry-repair",
  },
  {
    id: "12",
    icon: "/images/service/MasonryRepair.png",
    title: "Brick Repair",
    text: "Repair for cracked, spalled and loose brick, with mortar matched for a clean, lasting finish.",
    link: "/calgary/brick-repair",
  },
  {
    id: "2",
    icon: "/images/service/StoneVineer.png",
    title: "Stone Veneer",
    text: "Natural or manufactured stone veneer for walls, fireplaces and facades.",
    link: "/calgary/stone-veneer",
  },
  {
    id: "3",
    icon: "/images/service/HardscapeContractor.png",
    title: "Hardscape Contractor",
    text: "Patios, walkways, driveways and outdoor surfaces built to last.",
    link: "/hardscape-contractor",
  },
  {
    id: "4",
    icon: "/images/service/ChimneyRepair.png",
    title: "Chimney Repair",
    text: "Chimney inspection and repair: mortar, brick, caps and crowns.",
    link: "/calgary/chimney-repair",
    locations: chimneyRepairLinks,
  },
  {
    id: "5",
    icon: "/images/service/CustomFirePits.png",
    title: "Custom Fire Pits",
    text: "Custom wood-burning and gas fire pits for your yard.",
    link: "/calgary/custom-fire-pits",
  },
  {
    id: "6",
    icon: "/images/service/OutdorKitchen.png",
    title: "Outdoor Kitchen Contractor",
    text: "Built-in BBQs, counters and outdoor kitchens designed around your patio.",
    link: "/outdoor-kitchen-contractor",
  },
  {
    id: "7",
    icon: "/images/service/PatioStone.png",
    title: "Patio Stone Installation",
    text: "Paving stone, pavers and flagstone patios, built on a solid base.",
    link: "/patio-stone-installation",
  },
  {
    id: "8",
    icon: "/images/service/CustomPizza.png",
    title: "Custom Pizza Oven",
    text: "Custom wood-fired pizza ovens in brick and stone.",
    link: "/calgary/custom-pizza-oven",
  },
  {
    id: "9",
    icon: "/images/service/RetainingWauit.png",
    title: "Retaining Wall Construction",
    text: "Retaining walls in block, stone or concrete, built with proper drainage.",
    link: "/calgary/retaining-wall-construction",
  },
  {
    id: "10",
    icon: "/images/service/FirePlaceInsta.png",
    title: "Fireplace Installation",
    text: "Custom indoor and outdoor fireplaces.",
    link: "/calgary/fireplace-installation",
  },
  {
    id: "11",
    icon: "/images/service/MasonryRepair.png",
    title: "Foundation Repair",
    text: "Foundation crack repair, waterproofing and reinforcement.",
    link: "/calgary/foundation-repair",
  },
];
