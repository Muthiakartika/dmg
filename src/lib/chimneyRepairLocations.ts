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

export interface ChimneyRepairProblem {
  title: string;
  text: string;
}

export interface ChimneyRepairFaq {
  question: string;
  answer: string;
}

/** Copy strings may hold `[anchor](/path/)` links; see src/lib/richText.tsx. */
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
  /** h2 of the "problems we see here" section and its h3 items. */
  problemsHeading: string;
  problems: ChimneyRepairProblem[];
  /** One line under each of the four process steps, in order. */
  processTexts: [string, string, string, string];
  faqs: ChimneyRepairFaq[];
  images: ChimneyRepairLocationImages;
}

export interface ChimneyRepairLocation extends ChimneyRepairLocationContent {
  slug: ChimneyRepairAreaSlug;
  name: string;
}

const locationContent: Record<ChimneyRepairAreaSlug, ChimneyRepairLocationContent> = {
  "bragg-creek": {
    metadataTitle: "Chimney Repair Bragg Creek – Cracks, Leaks & Caps – DMG",
    metadataDescription: "Chimney repair in Bragg Creek for cabins and acreage homes: crowns, caps with spark arrestors, repointing and brick or stone repair. Call 1-403-619-8727.",
    description: "DMG Masonry repairs brick and stone chimneys in Bragg Creek, from older cabins to full-time acreage homes. We fix cracked crowns, worn mortar joints, spalled brick and failing caps, and match each repair to the masonry you already have.",
    paragraphs: [
      "Bragg Creek is wooded foothills country, and many homes here burn wood for heat. That means chimneys get heavy use, sit under trees and take plenty of snow and moisture, and each of those adds to the wear.",
      "We check the crown, the cap, the mortar joints and the brick or stone before recommending anything, so we fix where the damage starts, not just the most obvious crack.",
    ],
    benefits: [
      "Crown repair and replacement",
      "Caps with spark arrestors",
      "Repointing worn joints",
      "Brick and stone repair",
      "Rebuilding loose top courses",
    ],
    extraParagraphs: [
      "Depending on the condition, a repair might be repointing worn joints, replacing damaged bricks or stones, rebuilding the top few courses or pouring a new crown. We choose materials that match the existing chimney, so the repair doesn't stand out.",
      "Catching damage early keeps water away from the walls, ceiling and fireplace around the chimney. It can also save you a bigger rebuild after another winter. For chimneys deeper in the mountains, see our [Kananaskis chimney repair](/calgary/chimney-repair/kananaskis/) page.",
    ],
    problemsHeading: "Chimney Problems We See in Bragg Creek",
    problems: [
      {
        title: "Chimneys that burn wood all winter",
        text: "Wood stoves and fireplaces put a chimney through heavy use. Heat, moisture from burning and repeated warming and cooling all stress the masonry. If you burn wood regularly, have the chimney swept and inspected every year, and call us if the report mentions loose brick, a cracked crown or open joints.",
      },
      {
        title: "Caps and spark arrestors under the trees",
        text: "Homes surrounded by forest benefit from a chimney cap with a spark arrestor screen, which helps stop embers leaving the flue. FireSmart guidance recommends spark arrestors on chimneys in wildfire-prone areas. A cap also keeps out rain, snow, birds and squirrels. If yours is missing, rusted or loose, we can replace it and repair the crown it sits on.",
      },
      {
        title: "Shade, moisture and snow",
        text: "Chimneys on shaded, tree-lined lots dry out slowly after rain and snowmelt. Masonry that stays damp longer suffers more freeze-thaw damage, which shows up as flaking brick faces and mortar that turns sandy. Keep branches trimmed back from the chimney so needles and debris don't collect on the crown.",
      },
    ],
    processTexts: [
      "We check the crown, cap, joints and brick or stone, and ask how often you burn wood.",
      "You get a clear plan: what needs doing now and what can wait.",
      "We repoint failed joints, replace spalled brick and rebuild loose top courses.",
      "We repair or replace the crown and fit a cap with a spark arrestor where it's needed.",
    ],
    whyChooseTitle: "Chimney Repairs Built for Bragg Creek Conditions",
    whyChooseDescription: "A chimney in the trees needs more than a patch on the worst crack. We repair the crown, cap and joints that keep water and embers where they belong, and finish the work to match your brick or stone.",
    whyChooseItems: [
      "Crown and cap repair, including spark arrestors",
      "Repointing and brick replacement",
      "Brick and natural stone chimneys",
      "Honest advice on what can wait",
    ],
    faqs: [
      {
        question: "Does my Bragg Creek chimney need a spark arrestor?",
        answer: "If you burn wood and your home is surrounded by trees, it's a good idea. A spark arrestor is a metal mesh screen built into the chimney cap. It helps stop embers escaping from the flue and keeps animals and debris out. FireSmart guidance recommends them for homes in wildfire-prone areas, and we can fit one when we repair the crown.",
      },
      {
        question: "How often should a wood-burning chimney be inspected?",
        answer: "At least once a year, before the heating season. A chimney sweep or WETT inspector checks the flue and the stove or fireplace. We handle the masonry: crown, cap, mortar joints and brick or stone. If an inspection report mentions damaged masonry, send it to us with a few photos.",
      },
      {
        question: "Can you repair a stone chimney on a cabin?",
        answer: "Yes. We repair both brick and natural stone chimneys. On stone, we rake out failed mortar, reset or replace loose stones, and match the mortar colour and joint style to the original.",
      },
      {
        question: "What happens if a chimney crown cracks?",
        answer: "The crown is the concrete slab on top of the chimney that sheds water. When it cracks, water runs into the top of the masonry, freezes and breaks it apart, and leaks often follow. Small cracks can be sealed; a crown that's crumbling or badly cracked should be replaced.",
      },
      {
        question: "How do I get a chimney repair quote in Bragg Creek?",
        answer: "Call 1-403-619-8727 or use the form. Send your Bragg Creek address and a few photos: the whole chimney, a close-up of the damage and the top, if you can see it safely from the ground. We'll arrange a visit to confirm the repair.",
      },
    ],
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
    metadataDescription: "Chimney repair in Longview, Alberta: repointing, crown repair and brick replacement for ranch homes and acreages on the Cowboy Trail. Call 1-403-619-8727.",
    description: "DMG Masonry repairs chimneys in and around Longview, from ranch houses and acreage homes to older buildings in the village. We repoint worn joints, replace damaged brick, rebuild loose tops and repair crowns so the chimney keeps water out again.",
    paragraphs: [
      "Longview sits on the Cowboy Trail (Highway 22) in open foothills ranch country. Chimneys here stand above the roof with nothing to block the wind, and Chinooks can swing winter temperatures above and below freezing within days. Every swing is another freeze-thaw cycle for any water in the masonry.",
      "We look at the whole chimney before recommending anything: the depth of the joints, the condition of the brick, how the crown drains and any sign that water has reached the roof or ceiling.",
    ],
    benefits: [
      "Repointing wind-worn joints",
      "Crown repair and replacement",
      "Brick replacement",
      "Removing failed old patches",
    ],
    extraParagraphs: [
      "What we recommend depends on how far the damage goes and why. Sound sections may only need repointing. Loose or broken masonry near the top may need rebuilding so it bonds and carries weight properly.",
      "We also look at where the water goes. Restoring the mortar joints and the crown cuts the water soaking into the chimney, and that's what slows freeze-thaw damage. South of Longview? We also do [chimney repair in Claresholm](/calgary/chimney-repair/claresholm/).",
    ],
    problemsHeading: "Chimney Problems We See in Longview",
    problems: [
      {
        title: "Wind-driven rain and snow",
        text: "Strong westerly winds drive rain and snow sideways into the chimney face, so the windward side often wears first. Look for sandy, recessed mortar and brick faces flaking off on one side of the chimney.",
      },
      {
        title: "Chinook freeze-thaw",
        text: "A Chinook can melt the snow on a roof and crown in an afternoon, and the water refreezes overnight when the cold comes back. That repeated cycle opens cracks faster than steady cold does, which is why crowns and top courses tend to fail first here.",
      },
      {
        title: "Older ranch and farm chimneys",
        text: "Many rural chimneys have been patched more than once. Hard cement patches over older, softer mortar can trap water and crack the brick around them. We remove failed patches and repoint with a mortar suited to the original masonry.",
      },
    ],
    processTexts: [
      "We check the windward face, the joints, the crown and any old patches.",
      "We explain what's urgent, what can wait, and why.",
      "Failed patches come off, joints are repointed and damaged brick is replaced.",
      "We repair or replace the crown so water drains off the chimney, not into it.",
    ],
    whyChooseTitle: "Reliable Masonry Work for Longview Chimneys",
    whyChooseDescription: "An exposed chimney needs more than a surface patch. We repair the damaged masonry and the places where water gets in, so the chimney holds up to Longview's wind and Chinook winters.",
    whyChooseItems: [
      "Repairs based on the actual cause",
      "Mortar matched to older brick",
      "Crowns built to shed water",
      "Clear recommendations",
    ],
    faqs: [
      {
        question: "How do Chinook winds affect my chimney?",
        answer: "Chinooks bring sudden thaws in the middle of winter. Snow on the roof and the crown melts, water soaks into any crack or open joint, and it freezes again when the cold returns. Each of those cycles widens the damage, so chimneys in Chinook country benefit most from sound joints and a crown that sheds water.",
      },
      {
        question: "Should old mortar be patched or repointed?",
        answer: "Repointed, in most cases. Patching smears new mortar over the surface; it doesn't bond well and usually pops off after a winter or two. Repointing means raking out the failed mortar to an even depth and packing in fresh mortar matched to the original, and it lasts far longer.",
      },
      {
        question: "Is it worth repairing a chimney we no longer use?",
        answer: "Usually, yes, if it's still standing on the house. An unused chimney still takes the weather, and a leaking or loose one can damage the roof and ceiling around it. Repairing the masonry, rebuilding a loose top and fitting a cap keeps it safe and dry.",
      },
      {
        question: "Do you travel to Longview and the surrounding foothills?",
        answer: "Yes. We're based in southeast Calgary and repair chimneys in Longview and the nearby foothills communities. Send us your address when you get in touch.",
      },
      {
        question: "How do I request a chimney repair quote in Longview?",
        answer: "Call 1-403-619-8727 or use the form with your address and a few photos of the chimney. We'll arrange a visit to confirm the condition and the repair.",
      },
    ],
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
    metadataDescription: "Chimney repair in Kananaskis for cabins and mountain homes: stone and brick repair, chimney top rebuilds, crowns and caps. Call 1-403-619-8727.",
    description: "DMG Masonry repairs chimneys on cabins, lodges and mountain homes in the Kananaskis area. We work on natural stone and brick chimneys, rebuild loose upper courses, repair crowns and caps, and track down the leaks that tend to show up after a long winter.",
    paragraphs: [
      "Mountain chimneys take more snow, wind and temperature swings than chimneys in the city, and many properties sit empty for weeks at a time. A small crack can go unnoticed until water has reached the ceiling.",
      "Before we start, we check the parts of the chimney we can reach, work out whether the damage is in one spot or part of a bigger problem, and plan around access to your property.",
    ],
    benefits: [
      "Stone and brick chimney repair",
      "Chimney top rebuilds",
      "Crown and cap repair",
      "Spring leak investigation",
    ],
    extraParagraphs: [
      "Typical repairs include repointing eroded mortar, resetting or replacing loose stones and bricks, rebuilding the top courses and replacing a crown that no longer sheds water. We choose materials that match the texture and colour of your chimney.",
      "On seasonal properties, water control matters most, because a leak can run for weeks before anyone sees it. Fixing weak spots before winter protects the chimney and the interior around it. Closer to Calgary? See our [chimney repair in Bragg Creek](/calgary/chimney-repair/bragg-creek/).",
    ],
    problemsHeading: "Chimney Problems We See in Kananaskis",
    problems: [
      {
        title: "Snow load and ice at the roofline",
        text: "Deep snow piles against the uphill side of a chimney and melts slowly, soaking the masonry and the junction with the roof. Ice that forms in open joints pushes them apart. Repointing those joints and making sure the crown sheds water stops the damage building up year after year.",
      },
      {
        title: "Stone chimneys on mountain homes",
        text: "Natural stone chimneys are common on mountain homes and cabins. The stone itself lasts, but the mortar between the stones wears, and loose stones near the top can shift. We reset or replace loose stones and repoint with mortar matched in colour and texture.",
      },
      {
        title: "Seasonal and remote properties",
        text: "If the property sits empty for weeks at a time, check the chimney when you open up for the season and again before winter. Look for stains around the fireplace, bits of masonry on the roof or ground, and cracks in the crown. Send us photos if anything has changed.",
      },
    ],
    processTexts: [
      "We look at the stone or brick, the crown and the roof junction, and plan around site access.",
      "We tell you what needs doing before winter and what can be scheduled later.",
      "Loose stones and bricks are reset or replaced, and failed joints repointed.",
      "We repair or replace the crown and cap so snow and water are shed away from the masonry.",
    ],
    whyChooseTitle: "Chimney Restoration for Mountain Properties",
    whyChooseDescription: "Mountain chimneys need repairs planned around snow, wind and access, not just the visible crack. We repair the stone, brick, joints and crown that keep the chimney stable and dry, and finish the work so it suits a mountain property.",
    whyChooseItems: [
      "Natural stone and brick experience",
      "Chimney top rebuilds and new crowns",
      "Repairs planned around access and weather",
      "Matching mortar colour and texture",
    ],
    faqs: [
      {
        question: "When is the best time to repair a chimney in the mountains?",
        answer: "Late spring to early fall. Mortar needs temperatures above freezing to cure properly, and the weather window is shorter in the mountains than in Calgary. If you notice damage in winter, send photos so we can plan the repair for the first good stretch of weather.",
      },
      {
        question: "Why does my cabin chimney leak in spring?",
        answer: "Usually because snow has been sitting on the crown or against the chimney all winter. As it melts, water gets in through a cracked crown, open mortar joints or the gap where the chimney meets the roof. We find where it's getting in before recommending a repair; most of these leaks are fixed by repairing the crown and repointing.",
      },
      {
        question: "Can you rebuild just the top of a chimney?",
        answer: "Yes. The top few courses take the most weather, so they're often the first part to loosen. If the rest of the chimney is sound, we take down the damaged courses, rebuild them and pour a new crown, which costs far less than rebuilding the whole chimney.",
      },
      {
        question: "Do you work on cabins that are hard to reach?",
        answer: "Yes. Access affects how we plan the job and how long it takes. When you send photos, tell us about the road, parking and roof access, and we'll plan around them.",
      },
      {
        question: "How do I request a chimney repair quote in Kananaskis?",
        answer: "Call 1-403-619-8727 or use the form. Send the property location, a few photos of the chimney and a note on access. We'll arrange a visit to confirm the repair.",
      },
    ],
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
    metadataDescription: "Chimney repair in Sundre: repointing, crown and cap repair, and brick or stone repair for homes and acreages heated with wood. Call 1-403-619-8727.",
    description: "DMG Masonry repairs chimneys in Sundre and on rural properties in the area, from homes in town to acreages toward the foothills. We repoint worn joints, replace damaged brick and stone, rebuild loose tops and repair crowns and caps.",
    paragraphs: [
      "Sundre sits on the Red Deer River at the edge of the foothills, and wood heat is common here. A chimney that's used all winter takes more heat, moisture and wear than one lit a few times a year, so small masonry problems grow faster.",
      "We start with an inspection to find the worn materials and where water is getting in, and we separate cosmetic wear from real movement. That way you get targeted repairs where they're enough, and a bigger restoration only where it's needed.",
    ],
    benefits: [
      "Repointing mortar joints",
      "Brick and stone repair",
      "New crowns with a proper overhang",
      "Chimney caps",
    ],
    extraParagraphs: [
      "Repairs range from renewing a few joints to replacing damaged masonry or rebuilding an unstable top. We take out the failed material back to sound masonry, prepare the surface and finish the new work so it blends in.",
      "The crown is the chimney's main defence against water. When it cracks, moisture gets into the masonry below and shows up as staining, white deposits, loose joints and leaks inside. Repairing it early saves more of the original chimney. For older chimneys out on the prairie, see [chimney repair in Three Hills](/calgary/chimney-repair/three-hills/).",
    ],
    problemsHeading: "Chimney Problems We See in Sundre",
    problems: [
      {
        title: "Heavy wood-burning use",
        text: "Regular burning means hot flue gases, moisture and creosote. Keep up with a yearly sweep and inspection. When the sweep reports loose brick, open joints or a damaged crown, call us for the masonry repair.",
      },
      {
        title: "Crowns that crack after a few winters",
        text: "Many older crowns are a thin layer of mortar spread over the top of the brick rather than a properly formed concrete crown. They crack quickly and let water into the chimney. We replace them with a crown that slopes away from the flue and overhangs the brick, so water drips clear of the chimney face.",
      },
      {
        title: "Brick and stone on rural homes",
        text: "Acreage homes often have stone or mixed brick-and-stone chimneys. We repair both, matching the mortar colour and joint style so the repair looks like part of the original.",
      },
    ],
    processTexts: [
      "We check the crown, cap, joints and masonry, and ask how much you burn.",
      "We separate cosmetic wear from real damage and plan only what's needed.",
      "Failed joints are repointed and damaged brick or stone is replaced.",
      "We rebuild the crown with a proper overhang and fit a cap.",
    ],
    whyChooseTitle: "Practical Chimney Repair in the Sundre Area",
    whyChooseDescription: "A chimney that heats a home all winter has to be sound. We repair the masonry, crown and cap that keep it dry and stable, with clear recommendations and a durable finish.",
    whyChooseItems: [
      "Targeted repairs that keep sound masonry",
      "Brick and stone chimneys",
      "Crowns built to shed water",
      "Advice that fits how you heat your home",
    ],
    faqs: [
      {
        question: "What's the difference between a chimney sweep and masonry repair?",
        answer: "A sweep cleans soot and creosote out of the flue and checks the inside of the chimney. Masonry repair fixes the structure: brick, stone, mortar joints, the crown and the cap. A chimney you use regularly needs both: a sweep every year, and masonry repairs when the outside starts to wear.",
      },
      {
        question: "What should a good chimney crown look like?",
        answer: "It should slope away from the flue and overhang the brick on all sides, so water drips clear of the chimney face instead of running down it. A flat, thin crown that sits flush with the brick tends to crack and leak within a few winters.",
      },
      {
        question: "Can you repair a chimney in winter?",
        answer: "Mortar needs temperatures above freezing to cure properly, so most repointing and crown work is done from spring to fall. If you have a leak in winter, contact us anyway. We'll look at your photos and plan the repair for the first suitable weather.",
      },
      {
        question: "Do you repair stone chimneys on acreages?",
        answer: "Yes. We repair natural stone, brick and mixed chimneys: resetting loose stones, replacing damaged pieces and repointing with mortar matched to the original.",
      },
      {
        question: "How do I request a chimney repair quote in Sundre?",
        answer: "Call 1-403-619-8727 or use the form with your address and a few photos of the chimney. We'll arrange a visit to confirm the condition and the repair.",
      },
    ],
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
    metadataDescription: "Chimney repair in Three Hills: repointing, crown repair and brick replacement for town homes and farmhouses in Kneehill County. Call 1-403-619-8727.",
    description: "DMG Masonry repairs chimneys in Three Hills and on farm and acreage homes in the surrounding area: failing mortar, cracked or spalled brick, damaged crowns and leaks around the fireplace.",
    paragraphs: [
      "Three Hills is open prairie, so chimneys catch wind from every direction, and hot summers give way to long, cold winters. Farmhouse chimneys are also often the oldest masonry on the property.",
      "We check for open joints, movement, broken bricks, staining and crown defects to understand how the damage developed. That lets us repair the structure and the weather protection, not just seal the surface.",
    ],
    benefits: [
      "Joint repointing",
      "Crown repair and replacement",
      "Brick replacement",
      "Replacing failed tar and caulk repairs",
    ],
    extraParagraphs: [
      "When mortar has lost depth or grip, tuckpointing restores the joint with properly prepared mortar. Where the surrounding masonry is stable, damaged bricks can be replaced one at a time, keeping as much of the original chimney as possible.",
      "The upper courses and the crown take the most weather. Repairing them first improves stability and stops water soaking in before it causes deeper damage or stains around the fireplace. Further east? See [chimney repair in Drumheller](/calgary/chimney-repair/drumheller/).",
    ],
    problemsHeading: "Chimney Problems We See in Three Hills",
    problems: [
      {
        title: "Prairie wind and driving rain",
        text: "With nothing to break the wind, rain and snow are driven hard into the chimney face. Mortar on the exposed sides wears back from the brick, leaving recessed joints that hold water and freeze.",
      },
      {
        title: "Chimneys on older farmhouses",
        text: "Many farmhouse chimneys were built for wood or coal heat and have been adapted over the years. Some are still in use; others stand unused. Both need sound mortar and a good crown, or water works its way down into the house.",
      },
      {
        title: "Repairs that didn't last",
        text: "We often find tar smeared on a crown, caulk in mortar joints or cement patched over the surface. These trap water and fail within a few winters. A proper repair removes them and restores the joint or crown.",
      },
    ],
    processTexts: [
      "We check the exposed faces, joints, crown and any earlier repairs.",
      "You get a plan based on what we find, with priorities.",
      "Old patches come off, joints are repointed and damaged brick is replaced.",
      "We repair or replace the crown and cap so the chimney sheds water.",
    ],
    whyChooseTitle: "Chimney Masonry Prepared for Prairie Exposure",
    whyChooseDescription: "Prairie chimneys take wind, driving rain and big temperature swings. We repair them with proper preparation and proven masonry methods, so the work lasts longer than the patch it replaces.",
    whyChooseItems: [
      "A thorough look at exposed areas",
      "Selective repair or rebuilding",
      "Properly finished joints",
      "Crowns and caps that keep water out",
    ],
    faqs: [
      {
        question: "Is tar or caulk a good fix for a cracked chimney crown?",
        answer: "Only as a very short-term patch. Tar and caulk break down in sun and cold, and they can trap water underneath. A cracked crown should be properly repaired or replaced so it sheds water away from the brick.",
      },
      {
        question: "What should I do with a chimney we no longer use?",
        answer: "Keep it sound and capped. An unused chimney still takes the weather, and a loose or leaking one can damage the roof and ceiling. We can repair the masonry, rebuild a loose top and fit a cap to keep out rain and animals.",
      },
      {
        question: "How can I tell if chimney damage is serious?",
        answer: "Get it checked soon if you see loose or missing bricks, a chimney that leans, large cracks, or pieces of masonry on the roof or ground. Water stains inside near the chimney mean water is already getting in. Hairline cracks in mortar are less urgent, but worth watching.",
      },
      {
        question: "Do you work on farm properties outside town?",
        answer: "Yes. We repair chimneys in Three Hills and on farms and acreages in the surrounding area. Send your location when you contact us.",
      },
      {
        question: "How do I request a chimney repair quote in Three Hills?",
        answer: "Call 1-403-619-8727 or use the form with your address and a few photos of the chimney. We'll arrange a visit to confirm the condition and the repair.",
      },
    ],
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
    metadataDescription: "Chimney repair in Drumheller: repointing, brick replacement, new crowns and chimney top rebuilds for older homes in the valley. Call 1-403-619-8727.",
    description: "DMG Masonry repairs chimneys in Drumheller, including the older brick chimneys on homes that have stood in the valley for generations. We repoint mortar, replace spalled or cracked brick, rebuild unstable tops and repair crowns.",
    paragraphs: [
      "Drumheller grew as a coal-mining town in the early 1900s, and some of its homes still have their original brick chimneys. The Red Deer River valley also has some of Alberta's hottest summers and still freezes hard in winter, so masonry here expands and contracts through a wide range of temperatures every year.",
      "We look at the visible damage and at the parts of the chimney that control water: the mortar, the brick faces, the slope of the crown and where the chimney meets the roof. That shows where the damage begins and how far it goes.",
    ],
    benefits: [
      "Repointing with suitable mortar",
      "Spalled brick replacement",
      "Crown replacement",
      "Chimney top rebuilds",
    ],
    extraParagraphs: [
      "Surface cracks and worn joints should be checked before loose pieces become a safety problem. Repointing, replacing individual bricks and rebuilding small sections keep the stable parts of the original chimney.",
      "We build crowns that slope and overhang, so water runs off the chimney instead of into it. A good crown protects every other repair. Our [masonry repair](/calgary/masonry-repair/) page covers cracked brick and mortar on the rest of the house.",
    ],
    problemsHeading: "Chimney Problems We See in Drumheller",
    problems: [
      {
        title: "Older brick and soft mortar",
        text: "Early 20th-century chimneys were often built with softer brick and lime-based mortar. Repairing them with hard modern mortar can crack the old brick, so we choose a mortar that suits the original masonry. Our guide to [maintaining a 100-year-old chimney](/blogs/maintaining-a-100-year-old-chimney-in-calgary/) explains why.",
      },
      {
        title: "Heat, sun and dry wind",
        text: "Strong sun and dry wind wear away exposed mortar and crown surfaces, and a sudden storm then drives water into the cracks. Crowns in particular dry, shrink and crack, letting water into the top of the chimney.",
      },
      {
        title: "Leaning and movement",
        text: "A chimney that leans, pulls away from the house or shows stair-step cracks has moved. Movement needs an assessment before any repair, because the fix may mean rebuilding a section rather than repointing it.",
      },
    ],
    processTexts: [
      "We check the brick, mortar, crown and any signs of movement.",
      "We choose a mortar and method that suit the age of your chimney.",
      "Spalled brick is replaced and joints are repointed or rebuilt.",
      "We pour a crown that sheds water and finish the work to match.",
    ],
    whyChooseTitle: "Lasting Chimney Repair for Drumheller Homes",
    whyChooseDescription: "From weathered joints to unstable upper courses, we repair what affects your chimney's strength and water resistance, using methods suited to older masonry, and finish it so it belongs on your home.",
    whyChooseItems: [
      "Diagnosis before recommendations",
      "Mortar suited to older brick",
      "Durable crowns and joints",
      "A finish that blends in",
    ],
    faqs: [
      {
        question: "Can a 100-year-old chimney be repaired?",
        answer: "Often, yes. Old brick chimneys can usually be repointed, have damaged bricks replaced and get a new crown, as long as the structure is sound. The key is using a mortar that suits the old brick. If the chimney has moved or the brick is badly deteriorated, rebuilding the top section may be the better option.",
      },
      {
        question: "Why is my chimney leaning?",
        answer: "Leaning usually means the chimney has lost support, or the masonry has deteriorated at the base or at the roofline. A leaning chimney can be dangerous in high winds, so have it inspected soon rather than waiting to see if it gets worse.",
      },
      {
        question: "What is spalling brick?",
        answer: "Spalling is when the face of a brick flakes or pops off. Water soaks into the brick, freezes and expands, and the surface breaks away. Spalled brick can't be patched; the damaged bricks are cut out and replaced, and the source of the water is fixed so it doesn't happen again.",
      },
      {
        question: "Can you match old brick?",
        answer: "We source brick that matches the colour, size and texture as closely as possible, and match the mortar colour and joint style. On very old chimneys an exact match isn't always possible, but the repair should blend in.",
      },
      {
        question: "How do I request a chimney repair quote in Drumheller?",
        answer: "Call 1-403-619-8727 or use the form with your address and a few photos of the chimney. We'll arrange a visit to confirm the condition and the repair.",
      },
    ],
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
    metadataDescription: "Chimney repair in Claresholm: repointing, crown repair, secure caps and spalled brick replacement, built for southern Alberta wind. Call 1-403-619-8727.",
    description: "DMG Masonry repairs chimneys in Claresholm and the surrounding area: worn mortar, spalled brick, cracked crowns and loose upper courses. We find where the water is getting in, then repair it so the chimney matches the rest of your home.",
    paragraphs: [
      "Claresholm sits on Highway 2 in southern Alberta, one of the windiest parts of the province, and Chinooks bring regular winter thaws. Strong wind and repeated freezing and thawing are hard on any masonry that stands above a roof.",
      "We inspect the parts of the chimney we can reach to see how far the problem goes, whether you need a few joints repaired, some bricks replaced, crown work or a section rebuilt.",
    ],
    benefits: [
      "Mortar and masonry restoration",
      "Crown repair and replacement",
      "Secure chimney caps",
      "Chimney top rebuilds",
    ],
    extraParagraphs: [
      "Preparation makes the repair last. We remove failed mortar and masonry back to sound material, clean the bonding surfaces and match the new work to the original joint profile and alignment.",
      "The top of the chimney matters as much as the walls below it. A sound crown and a secure cap keep water out and protect the new mortar and brick. Heading north? We also do [chimney repair in Longview](/calgary/chimney-repair/longview/).",
    ],
    problemsHeading: "Chimney Problems We See in Claresholm",
    problems: [
      {
        title: "Mortar worn back by wind",
        text: "Constant wind carries grit and drives moisture into the joints. Over the years the mortar wears back from the brick face, leaving recessed joints that hold water. Repointing restores the joint before the brick edges start to break.",
      },
      {
        title: "Cracked crowns and loose caps",
        text: "High winds can loosen and lift chimney caps, and a crown with hairline cracks lets water straight into the top of the chimney. We repair or replace the crown and fit a cap that's properly secured.",
      },
      {
        title: "Older chimneys with several problems at once",
        text: "Many chimneys in town have stood for decades with only small repairs. When open joints, spalled brick and a cracked crown all show up together, rebuilding the top section is often better value than patching each problem.",
      },
    ],
    processTexts: [
      "We check the windward faces, joints, crown and cap.",
      "We tell you whether repair or a partial rebuild is the better value.",
      "Joints are repointed, and spalled brick replaced or the top rebuilt.",
      "We repair the crown and secure the cap against the wind.",
    ],
    whyChooseTitle: "Chimney Repair Suited to Southern Alberta Weather",
    whyChooseDescription: "We plan for Claresholm's wind and changing temperatures: stable masonry, crowns and caps that stay put, and a finish that matches the original chimney.",
    whyChooseItems: [
      "Repair plans based on condition",
      "Matching brick, stone and mortar",
      "Protection against wind-driven moisture",
      "Neat finishing and site care",
    ],
    faqs: [
      {
        question: "Why does wind damage chimneys?",
        answer: "Wind drives rain and snow sideways into the masonry, forcing water into small cracks and open joints. It also carries grit that slowly wears the mortar back from the brick. Once water is in the joints, freezing and thawing breaks the masonry apart.",
      },
      {
        question: "How long does chimney repointing last?",
        answer: "Repointing done properly can last for decades, as long as the crown and cap keep water out of the top of the chimney. Most failures we see start at the crown, so we check it whenever we repoint.",
      },
      {
        question: "Should I repair or rebuild the top of my chimney?",
        answer: "Repair it if the damage is limited to a few joints, some bricks or the crown. Rebuilding the top section makes more sense when the upper courses are loose, several sides are spalled, or earlier repairs keep failing.",
      },
      {
        question: "Can high winds blow a chimney cap off?",
        answer: "Yes, if the cap is loose, rusted or not properly fastened. If yours has moved or is missing, replace it soon. Without a cap, rain and snow go straight down the flue, and animals and debris can get in.",
      },
      {
        question: "How do I request a chimney repair quote in Claresholm?",
        answer: "Call 1-403-619-8727 or use the form with your address and a few photos of the chimney. We'll arrange a visit to confirm the condition and the repair.",
      },
    ],
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
