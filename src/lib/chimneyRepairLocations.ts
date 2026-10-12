import {
  chimneyRepairAreas,
  type ChimneyRepairAreaSlug,
} from "./chimneyRepairAreas";

export interface ChimneyRepairLocationImages {
  main: string;
  /** Phone crop focus for `main`; see ServiceDetailsContent's mainImageFocus. */
  mainFocus?: string;
  process: [string, string, string, string];
  whyChoose: string;
  contact: string;
}

export interface ChimneyRepairLocationContent {
  metadataTitle: string;
  metadataDescription: string;
  description: string;
  paragraphs: string[];
  benefits: string[];
  extraParagraphs: string[];
  whyChooseTitle: string;
  whyChooseDescription: string;
  whyChooseItems: string[];
  /** Answer to the "How does local weather affect chimneys in …?" FAQ. */
  weatherFaqAnswer: string;
  images: ChimneyRepairLocationImages;
}

export interface ChimneyRepairLocation extends ChimneyRepairLocationContent {
  slug: ChimneyRepairAreaSlug;
  name: string;
}

const locationContent: Record<ChimneyRepairAreaSlug, ChimneyRepairLocationContent> = {
  "bragg-creek": {
    metadataTitle: "Chimney Repair Bragg Creek – Cracks, Leaks & Caps – DMG",
    metadataDescription:
      "Chimney repair in Bragg Creek, Alberta: cracks, leaks, caps and crowns repaired by DMG Masonry. Request an estimate or call 1-403-619-8727.",
    description:
      "DMG Masonry repairs chimneys in Bragg Creek: cracked mortar, loose bricks, leaks and damaged caps or crowns. Our repairs aim to make the chimney sound again while keeping the look of the existing masonry.",
    paragraphs: [
      "Bragg Creek sits in the foothills, so chimneys here see plenty of moisture, snow and wind, and many freeze-thaw cycles. A small gap in a mortar joint or at the crown lets water in, and each freeze makes the crack bigger.",
      "We inspect the visible masonry, the mortar joints, the crown, the flashing and the area around the chimney before recommending anything. That way we fix where the damage starts, not just the most obvious crack.",
    ],
    benefits: [
      "Brick and mortar restoration",
      "Cap and crown repairs",
      "Finding the source of leaks",
      "Freeze-thaw protection",
      "Spalled brick replacement",
    ],
    extraParagraphs: [
      "Depending on the condition, a repair might include tuckpointing worn joints, replacing damaged bricks, rebuilding an unstable section or repairing the crown. We choose materials that match the existing chimney.",
      "Catching it early keeps water away from the walls, ceiling and fireplace around the chimney, and can avoid a bigger rebuild after another winter. Whether it's an older cabin or a full-time home, we treat each Bragg Creek chimney as its own job.",
    ],
    whyChooseTitle: "Chimney Repairs Built for Bragg Creek Conditions",
    whyChooseDescription:
      "Foothills weather finds weak mortar quickly. We inspect carefully, repair what's failing and make the chimney better able to keep water out.",
    whyChooseItems: [
      "A careful look at the masonry",
      "Repairs to the crown, brick and mortar",
      "Materials chosen to match",
      "Clean, durable finish",
    ],
    weatherFaqAnswer:
      "Bragg Creek's foothills setting brings moisture, snow, wind and frequent freezing and thawing. Once water gets into a crack or open joint, freezing widens it and speeds up the damage. Sound mortar and a good crown keep that to a minimum.",
    images: {
      main: "/images/services/braggcreek/braggcreek-1.webp",
      process: [
        "/images/services/braggcreek/braggcreek-2.webp",
        "/images/services/braggcreek/braggcreek-3.webp",
        "/images/services/braggcreek/braggcreek-4.webp",
        "/images/services/braggcreek/braggcreek-5.webp",
      ],
      whyChoose: "/images/services/braggcreek/braggcreek-6.webp",
      contact: "/images/services/braggcreek/braggcreek-7.webp",
    },
  },
  "longview": {
    metadataTitle: "Chimney Repair Longview – Cracks, Leaks & Caps – DMG",
    metadataDescription:
      "Chimney repair in Longview, Alberta: cracks, leaks, caps and crowns repaired by DMG Masonry. Request an estimate or call 1-403-619-8727.",
    description:
      "DMG Masonry repairs chimneys in Longview: weathered mortar, cracked brick, unstable masonry and water damage. We aim for repairs that last and suit the property.",
    paragraphs: [
      "Longview is open foothills country, so chimneys get strong wind, blowing snow, rain and quick changes in temperature. A chimney sticks up above the roof, so even a small defect in the crown or a joint is hit by the weather again and again and gets worse.",
      "We look at the whole chimney, from the base we can reach to the top: joint depth, brick condition, how the crown drains, and any sign that water has reached nearby materials. One crack is rarely the whole story.",
    ],
    benefits: [
      "Tuckpointing and joint repair",
      "Spalled brick replacement",
      "Chimney crown restoration",
      "Wind and moisture protection",
    ],
    extraParagraphs: [
      "What we recommend depends on how far the damage goes and why. Sound sections may only need repointing. Loose or broken masonry may need to be rebuilt in places so it bonds and supports properly.",
      "We also look at where water goes. Restoring the mortar profile, repairing the crown and fixing worn masonry surfaces limits how much water soaks in and cuts down freeze-thaw damage. You get a clear repair plan and neat work that doesn't look like an obvious patch.",
    ],
    whyChooseTitle: "Reliable Masonry Work for Longview Chimneys",
    whyChooseDescription:
      "An exposed chimney needs more than a surface patch. We repair the damaged material and the places water gets in, so the chimney stands up to Longview's foothills climate.",
    whyChooseItems: [
      "Repairs based on the actual cause",
      "Careful colour and material matching",
      "Details built for the weather",
      "Straightforward inspection and recommendations",
    ],
    weatherFaqAnswer:
      "Longview's open foothills bring strong wind, blowing snow, rain and quick temperature swings. Water gets into small cracks, freezes and widens them. Sound joints and a well-drained crown help a lot.",
    images: {
      main: "/images/services/longview/longview-1.webp",
      process: [
        "/images/services/longview/longview-2.webp",
        "/images/services/longview/longview-3.webp",
        "/images/services/longview/longview-4.webp",
        "/images/services/longview/longview-5.webp",
      ],
      whyChoose: "/images/services/longview/longview-6.webp",
      contact: "/images/services/longview/longview-7.webp",
    },
  },
  "kananaskis": {
    metadataTitle: "Chimney Repair Kananaskis – Cracks, Leaks & Caps – DMG",
    metadataDescription:
      "Chimney repair in Kananaskis, Alberta: cracks, leaks, caps and crowns repaired by DMG Masonry. Request an estimate or call 1-403-619-8727.",
    description:
      "DMG Masonry repairs chimneys in Kananaskis, for cabins, homes and other mountain properties. We repair damaged brick, stone, mortar and crowns, with a focus on keeping the chimney stable and dry.",
    paragraphs: [
      "Mountain weather is hard on chimneys. Heavy snow, wind, moisture and quick temperature changes find weak spots at the mortar joints, the crown and where the chimney meets the roof.",
      "Before we start, we check the parts of the chimney we can reach and work out whether the damage is in one spot or part of a bigger problem. We also think about site access, so the plan is practical for your property.",
    ],
    benefits: [
      "Mountain-climate masonry repair",
      "Stone and brick restoration",
      "Crown and joint repairs",
      "Preventing moisture damage",
      "Spalled brick replacement",
    ],
    extraParagraphs: [
      "Typical repairs include renewing eroded mortar, replacing broken bricks or stones, rebuilding loose upper courses and restoring a crown that no longer sheds water. We choose replacement materials that suit the texture and colour of your chimney.",
      "Water control matters most on remote or seasonal properties, where a small leak can go unnoticed between visits. Fixing weak spots early protects the chimney and the interior around it. We aim for strong, durable work that still looks natural on a mountain property.",
    ],
    whyChooseTitle: "Chimney Restoration for Mountain Properties",
    whyChooseDescription:
      "Kananaskis chimneys need repairs planned around the mountain exposure and the materials already there. We do focused masonry work that improves strength and keeps water out.",
    whyChooseItems: [
      "Brick and stone experience",
      "Repair plans for tough exposure",
      "Matching materials and finish",
      "Protection where the chimney is most vulnerable",
    ],
    weatherFaqAnswer:
      "Mountain weather brings heavy snow, wind, moisture and fast temperature changes. Those stress the mortar joints, the crown and the roof junction. Water that gets in and freezes widens cracks, so fixing small openings early matters.",
    images: {
      main: "/images/services/kananaskis/kananaskis-1.webp",
      mainFocus: "20%",
      process: [
        "/images/services/kananaskis/kananaskis-2.webp",
        "/images/services/kananaskis/kananaskis-3.webp",
        "/images/services/kananaskis/kananaskis-4.webp",
        "/images/services/kananaskis/kananaskis-5.webp",
      ],
      // 6 and 7 are swapped here compared to the other locations: the
      // portrait shot is -6 and the near-square one is -7.
      whyChoose: "/images/services/kananaskis/kananaskis-7.webp",
      contact: "/images/services/kananaskis/kananaskis-6.webp",
    },
  },
  "sundre": {
    metadataTitle: "Chimney Repair Sundre – Cracks, Leaks & Caps – DMG",
    metadataDescription:
      "Chimney repair in Sundre, Alberta: cracks, leaks, caps and crowns repaired by DMG Masonry. Request an estimate or call 1-403-619-8727.",
    description:
      "DMG Masonry repairs chimneys in Sundre, for homes and rural properties with cracked joints, damaged brick or stone, a leaking crown or ageing masonry. We repair the chimney so it works properly and still looks right.",
    paragraphs: [
      "Sundre is close to the foothills, so chimneys see snow, rain, wind and repeated freezing and thawing. Mortar usually shows wear first, but damage can also start at the crown or inside brick and stone that has soaked up moisture.",
      "We start with an inspection to find the worn materials and where water is getting in. We separate cosmetic wear from real movement, so we recommend targeted work where that's enough and a bigger restoration only where it's needed.",
    ],
    benefits: [
      "Mortar joint repointing",
      "Brick and stone repair",
      "Crown restoration",
      "Homes and rural properties",
      "Spalled brick replacement",
    ],
    extraParagraphs: [
      "Repairs range from renewing a few joints to replacing damaged masonry or rebuilding an unstable chimney top. We take out the failed material, prepare a sound surface and finish the new work so it blends in.",
      "The crown is the chimney's main defence against water. When it cracks, moisture gets into the masonry below and can cause staining, white deposits, loose joints and leaks inside. Repairing early often saves more of the original chimney and puts off a bigger rebuild.",
    ],
    whyChooseTitle: "Practical Chimney Repair in the Sundre Area",
    whyChooseDescription:
      "We tailor the repair to your chimney's materials, condition and exposure. You get clear recommendations, careful preparation and a durable finish.",
    whyChooseItems: [
      "Targeted repairs that keep sound masonry",
      "Brick and stone chimneys",
      "Attention to the crown and water entry",
      "Durable, consistent finish",
    ],
    weatherFaqAnswer:
      "Sundre is near the foothills, so chimneys get snow, rain, wind and repeated freeze-thaw. Mortar wears first, then water gets in and freezing breaks it up further.",
    images: {
      main: "/images/services/sundre/sundre-1.webp",
      mainFocus: "45%",
      process: [
        "/images/services/sundre/sundre-2.webp",
        "/images/services/sundre/sundre-3.webp",
        "/images/services/sundre/sundre-4.webp",
        "/images/services/sundre/sundre-5.webp",
      ],
      whyChoose: "/images/services/sundre/sundre-6.webp",
      contact: "/images/services/sundre/sundre-7.webp",
    },
  },
  "three-hills": {
    metadataTitle: "Chimney Repair Three Hills – Cracks, Leaks & Caps – DMG",
    metadataDescription:
      "Chimney repair in Three Hills, Alberta: cracks, leaks, caps and crowns repaired by DMG Masonry. Request an estimate or call 1-403-619-8727.",
    description:
      "DMG Masonry repairs chimneys in Three Hills: failing mortar, cracked or spalling brick, crown damage, leaks and loose masonry. We inspect first, then repair to suit the age and construction of your chimney.",
    paragraphs: [
      "Prairie chimneys are very exposed above the roofline. Wind-driven rain and snow get into small cracks, and hot summers followed by cold winters make the masonry expand and contract until the joints wear down, including earlier repairs.",
      "We check for open joints, movement, broken bricks, staining and crown defects to understand how the damage developed. That lets us rebuild the support and weather protection instead of relying on a quick surface seal.",
    ],
    benefits: [
      "Crack and joint restoration",
      "Spalled brick replacement",
      "Crown and water-shedding repairs",
      "Structural masonry assessment",
    ],
    extraParagraphs: [
      "When mortar has lost depth or grip, tuckpointing restores the joint with properly prepared mortar. Where the surrounding masonry is stable, damaged bricks can be taken out one at a time, which keeps as much of the original chimney as possible.",
      "The upper courses and the crown take the most weather. Repairing them improves stability and limits water absorption before it causes deeper damage or stains around the fireplace and ceiling. You get a repair plan based on what we find, with neat work and compatible materials.",
    ],
    whyChooseTitle: "Chimney Masonry Prepared for Prairie Exposure",
    whyChooseDescription:
      "Our Three Hills chimney repairs deal with wind, rain, snow and big temperature swings, using sound preparation and proven masonry methods.",
    whyChooseItems: [
      "A thorough look at exposed areas",
      "Selective repair or rebuilding",
      "Strong, properly finished joints",
      "Work for long-term weather exposure",
    ],
    weatherFaqAnswer:
      "Open prairie means wind-driven rain and snow, hot summers and cold winters. That expansion and contraction slowly wears down joints, and water in small cracks makes it worse.",
    images: {
      main: "/images/services/threehills/threehills-1.webp",
      mainFocus: "90%",
      process: [
        "/images/services/threehills/threehills-2.webp",
        "/images/services/threehills/threehills-3.webp",
        "/images/services/threehills/threehills-4.webp",
        "/images/services/threehills/threehills-5.webp",
      ],
      whyChoose: "/images/services/threehills/threehills-6.webp",
      contact: "/images/services/threehills/threehills-7.webp",
    },
  },
  "drumheller": {
    metadataTitle: "Chimney Repair Drumheller – Cracks, Leaks & Caps – DMG",
    metadataDescription:
      "Chimney repair in Drumheller, Alberta: cracks, leaks, caps and crowns repaired by DMG Masonry. Request an estimate or call 1-403-619-8727.",
    description:
      "DMG Masonry repairs chimneys in Drumheller, where age, movement, moisture and temperature extremes take their toll. We repair mortar joints, brickwork, crowns and unstable sections for a stronger, cleaner chimney.",
    paragraphs: [
      "Drumheller's dry landscape doesn't spare a chimney. Strong sun, wind, sudden weather changes, winter freezing and the occasional wind-driven rain all wear on exposed mortar and brick, especially where there are already small cracks.",
      "We look at the visible damage and at the parts of the chimney that control water: the mortar, the brick faces, the slope of the crown and any cracks in it, and where the chimney meets the roof. That shows where the damage begins and how far it goes.",
    ],
    benefits: [
      "Weathered mortar repair",
      "Spalled brick and masonry replacement",
      "Crown crack restoration",
      "Leak and damage assessment",
    ],
    extraParagraphs: [
      "Surface cracks and worn joints should be checked before loose pieces become a safety problem. Tuckpointing, replacing individual bricks and rebuilding small sections can restore the sound areas while keeping the stable parts of the original chimney.",
      "We repair crowns with drainage and edge protection in mind, so water runs off the chimney instead of into it. A good crown supports every other repair on the chimney. For Drumheller homes, we aim for a repair that fits the building, with a clear scope and tidy finishing.",
    ],
    whyChooseTitle: "Lasting Chimney Repair for Drumheller Homes",
    whyChooseDescription:
      "From weathered joints to unstable upper courses, we repair what affects the chimney's strength and water resistance, and finish it so it belongs on your home.",
    whyChooseItems: [
      "Diagnosis before repair recommendations",
      "Keeping sound masonry",
      "Durable crown and joint detailing",
      "A finish that blends in",
    ],
    weatherFaqAnswer:
      "Drumheller is dry, but strong sun, wind, sudden weather changes and winter freezing still wear down mortar and brick. Small cracks let in water, and freezing makes them bigger.",
    images: {
      main: "/images/services/drumheller/drumheller-1.webp",
      mainFocus: "0%",
      process: [
        "/images/services/drumheller/drumheller-2.webp",
        "/images/services/drumheller/drumheller-3.webp",
        "/images/services/drumheller/drumheller-4.webp",
        "/images/services/drumheller/drumheller-5.webp",
      ],
      whyChoose: "/images/services/drumheller/drumheller-6.webp",
      contact: "/images/services/drumheller/drumheller-7.webp",
    },
  },
  "claresholm": {
    metadataTitle: "Chimney Repair Claresholm – Cracks, Leaks & Caps – DMG",
    metadataDescription:
      "Chimney repair in Claresholm, Alberta: cracks, leaks, caps and crowns repaired by DMG Masonry. Request an estimate or call 1-403-619-8727.",
    description:
      "DMG Masonry repairs chimneys in Claresholm: worn mortar, damaged brick or stone, a cracked crown and loose masonry. We plan each repair around your chimney and the weather in southern Alberta.",
    paragraphs: [
      "Wind and quick temperature changes are hard on chimneys around Claresholm. Open joints and hairline cracks in the crown let wind-driven rain and snow in, and repeated freezing and thawing slowly turns small damage into loose or broken masonry.",
      "We inspect the parts of the chimney we can reach to see how far the problem goes. That tells us whether you need a few joints repaired, individual bricks replaced, crown work, or a section rebuilt.",
    ],
    benefits: [
      "Mortar and masonry restoration",
      "Crown repair",
      "Spalled brick replacement",
      "Chimney stability assessment",
    ],
    extraParagraphs: [
      "Preparation makes the repair last. We remove failed mortar and masonry back to sound material, clean the bonding surfaces and install the new work to match the joint profile and alignment.",
      "The top of the chimney matters as much as the walls below it. A sound crown limits the water getting in and protects new mortar and brick. We aim for tidy repairs built for continued seasonal weather, not a temporary patch that needs attention again next year.",
    ],
    whyChooseTitle: "Chimney Repair Suited to Southern Alberta Weather",
    whyChooseDescription:
      "We allow for Claresholm's wind and changing temperatures: stable masonry, sound water-shedding details and a finish that matches the original chimney.",
    whyChooseItems: [
      "Repair plans based on condition",
      "Matching brick, stone and mortar",
      "Protection against wind-driven moisture",
      "Neat finishing and site care",
    ],
    weatherFaqAnswer:
      "Claresholm's wind and fast temperature changes are hard on chimneys. Wind-driven rain and snow get into small cracks, and freezing and thawing breaks the masonry down over time.",
    images: {
      main: "/images/services/claresholm/claresholm-1.webp",
      mainFocus: "55%",
      process: [
        "/images/services/claresholm/claresholm-2.webp",
        "/images/services/claresholm/claresholm-3.webp",
        "/images/services/claresholm/claresholm-4.webp",
        "/images/services/claresholm/claresholm-5.webp",
      ],
      whyChoose: "/images/services/claresholm/claresholm-6.webp",
      contact: "/images/services/claresholm/claresholm-7.webp",
    },
  },
};

export const chimneyRepairLocations: ChimneyRepairLocation[] = chimneyRepairAreas.map(
  (area) => ({ ...area, ...locationContent[area.slug] }),
);

export function getChimneyRepairLocation(slug: string) {
  return chimneyRepairLocations.find((location) => location.slug === slug);
}
