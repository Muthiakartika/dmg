import Navbar from "@/components/Layout/Navbar";
import JsonLd from "@/components/UI/JsonLd";
import PageTitle from "@/components/Sections/PageTitle";
import ContactSection from "@/components/Contact/ContactSection";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Footer from "@/components/Layout/Footer";
import ProcessSteps from "@/components/Sections/ProcessSteps";
import ServiceGallery from "@/components/Services/ServiceGallery";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import AreaLinks from "@/components/Services/AreaLinks";
import type { ContentSection } from "@/components/Services/ContentSections";
import FaqSection from "@/components/Sections/FaqSection";
import { servicePageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Data FAQ khusus untuk halaman Chimney Repair
const chimneyRepairFaqs = [
  {
    uuid: "faq-chimney-1",
    question: "How much does chimney repair cost in Calgary?",
    answers: [
      "It depends on what's damaged and how much of it. Replacing a cap or repointing a few joints is a small job. Replacing a crown, repointing a whole chimney or rebuilding the top above the roofline is more involved. Chimney height, roof pitch and access also affect the price. We quote after an inspection and tell you which repairs are urgent and which can wait.",
    ],
  },
  {
    uuid: "faq-chimney-2",
    question: "Should I repair or rebuild my chimney?",
    answers: [
      "Repair it if the damage is limited to the crown, the cap, some mortar joints or a few bricks. Consider rebuilding if the chimney leans, has pulled away from the house, has spalled or loose brick on several sides, or keeps failing after earlier repairs. Often only the top section above the roofline needs rebuilding, not the whole chimney.",
    ],
  },
  {
    uuid: "faq-chimney-3",
    question: "What's the difference between a chimney crown and a chimney cap?",
    answers: [
      "The crown is the concrete slab that covers the top of the chimney around the flue and sheds water off the masonry. The cap is the metal cover that sits over the flue opening to keep out rain, snow, animals and debris; some caps include a spark arrestor screen. A chimney needs both, and a cracked crown is one of the most common causes of chimney leaks.",
    ],
  },
  {
    uuid: "faq-chimney-4",
    question: "Why is my chimney leaking?",
    answers: [
      "The usual causes are a cracked or crumbling crown, a missing or damaged cap, open or eroded mortar joints, porous or spalled brick, or a gap where the chimney meets the roof. Water stains on the ceiling or wall beside the fireplace, white deposits on the brick, or damp smells after rain are the common signs. We find where the water gets in before recommending a repair.",
    ],
  },
  {
    uuid: "faq-chimney-5",
    question: "What is tuckpointing, and how long does it last?",
    answers: [
      "Tuckpointing (also called repointing) means grinding or raking out failed mortar to an even depth and packing in fresh mortar matched to the original. It restores the joints that hold the chimney together and keep water out. Done properly, with the crown and cap keeping water out of the top, it can last for decades.",
    ],
  },
  {
    uuid: "faq-chimney-6",
    question: "When is the best time of year for chimney repair in Calgary?",
    answers: [
      "Spring to fall. Mortar and concrete need temperatures above freezing to cure properly, so most repointing and crown work is scheduled outside the coldest months. If you spot damage in winter, send us photos anyway. We can plan the repair early, before the next freeze-thaw season does more damage.",
    ],
  },
  {
    uuid: "faq-chimney-7",
    question: "How often should a chimney be inspected?",
    answers: [
      "At least once a year, and before the heating season if you burn wood. A chimney sweep or WETT inspector checks the flue and the appliance; we repair the masonry: brick, stone, mortar joints, crown and cap. If an inspection report mentions cracked or loose masonry, send it to us with a few photos.",
    ],
  },
  {
    uuid: "faq-chimney-9",
    question: "What is the 3-2-10 rule for chimneys?",
    answers: [
      "It's the rule for how tall a chimney has to be. The flue must rise at least 3 feet (900 mm) above the highest point where the chimney meets the roof, and at least 2 feet (600 mm) above any part of the roof or building within 10 feet (3 m) of it. These minimums come from the National Building Code of Canada, which Alberta's building code is based on. A chimney that's too short can draw poorly and let smoke back into the house, so when the top of a chimney is rebuilt, it should be brought up to the required height.",
    ],
  },
  {
    uuid: "faq-chimney-8",
    question: "Can I repair my chimney myself?",
    answers: [
      "A few small jobs are reasonable for a handy homeowner, such as clearing debris from the cap or sealing hairline cracks in the crown with a sealer made for chimney crowns. Most chimney repair isn't a DIY job. Repointing, replacing spalled brick and rebuilding a crown or the top courses mean working on a roof with heavy materials. Mortar that's harder than the old brick can also cause new damage. Problems inside the flue, such as a damaged liner, are a job for a WETT-certified chimney professional. If you're not sure what's wrong, an inspection will tell you what needs fixing now and what can wait.",
    ],
  },
];

// Extra sections of the article, after the intro copy.
const chimneySections: ContentSection[] = [
  {
    heading: "Chimney Repairs We Do in Calgary",
    blocks: [
      { type: "p", text: "Our brick and masonry chimney repair covers every part of the chimney above the roof:" },
      { type: "h3", title: "Chimney crown repair and replacement", text: "The crown is the concrete slab on top of the chimney. It sheds water away from the brick. Once it cracks, water runs straight into the top of the masonry. We seal small cracks, and replace crowns that are crumbling with a new one that slopes away from the flue and overhangs the brick, so water drips clear of the chimney face." },
      { type: "h3", title: "Chimney cap repair and replacement", text: "A cap sits over the flue opening and keeps rain, snow, birds and debris out of the chimney. Caps with a spark arrestor screen also help stop embers escaping. We replace missing, rusted or loose caps when we repair the crown." },
      { type: "h3", title: "Tuckpointing and repointing", text: "When mortar joints turn sandy, crack or fall out, we rake them out to a consistent depth and pack in fresh mortar matched to the original colour and joint style. Done properly, it stops water getting into the wall and can last for decades." },
      { type: "h3", title: "Cracked and spalled brick replacement", text: "Bricks whose faces have flaked or popped off can't be patched. We cut them out one at a time and set matching brick in their place, keeping as much of the original chimney as possible." },
      { type: "h3", title: "Partial and full chimney rebuilds", text: "The top few courses above the roofline take the most weather and are usually the first to loosen. If the rest of the chimney is sound, we take down only the damaged courses, rebuild them and pour a new crown. If the chimney has moved or the masonry has failed throughout, we'll tell you a larger rebuild is the safer choice." },
      { type: "h3", title: "Finding the source of a leak", text: "A leak near the fireplace can come from the crown, the cap, open mortar joints or the point where the chimney meets the roof. We check each one before recommending a repair, so you're not paying to fix the wrong thing." },
    ],
  },
  {
    heading: "Should You Repair or Rebuild Your Chimney?",
    blocks: [
      { type: "p", text: "Most chimneys can be repaired. A rebuild is worth considering when:" },
      {
        type: "list",
        items: [
          "the chimney leans or has pulled away from the house;",
          "many bricks are spalled or loose, not just a few;",
          "the mortar has failed throughout, so repointing would mean redoing almost every joint;",
          "earlier patches keep failing every winter;",
          "the damage goes below the roofline.",
        ],
      },
      { type: "p", text: "If only the crown, the cap or a few areas of mortar and brick are damaged, a repair is almost always the better value. We'll tell you which you need and why." },
    ],
  },
  {
    heading: "Why Calgary Chimneys Break Down",
    blocks: [
      { type: "p", text: "Calgary goes through more freeze-thaw cycles each winter than most Canadian cities. Chinook winds can push temperatures above freezing for a day or two, melting the snow on the roof and the crown, and the water refreezes as soon as the cold returns. Every cycle widens the cracks a little more. That's why crowns, top courses and the windward side of a chimney usually fail first." },
      { type: "p", text: "Older inner-city homes add another layer. Chimneys built 80 to 100 years ago often use softer brick and lime-based mortar, and repairing them with modern hard mortar can crack the original brick. Our guide to [maintaining a 100-year-old chimney in Calgary](/blogs/maintaining-a-100-year-old-chimney-in-calgary/) explains what to look for." },
    ],
  },
  {
    heading: "What Affects the Cost of Chimney Repair in Calgary",
    blocks: [
      { type: "p", text: "Every quote depends on what we find at the inspection, but these are the things that move the price:" },
      {
        type: "list",
        items: [
          "**What's damaged:** a cap or a few joints is a small job; a new crown or full repointing is more involved; rebuilding the top above the roofline is the largest repair.",
          "**How much is damaged:** a few spalled bricks or most of one side of the chimney.",
          "**Height and roof access:** tall chimneys and steep roofs need more setup and safety equipment.",
          "**Material:** natural stone and very old brick take more time to match.",
          "**Timing:** repairing early usually means a smaller job than waiting for another winter.",
        ],
      },
    ],
  },
];

// Towns around Calgary that have their own chimney repair page.
const nearbyAreas = [
  { label: "Chimney repair in Bragg Creek", href: "/calgary/chimney-repair/bragg-creek/", note: "wood-burning cabins and acreage homes in the trees." },
  { label: "Chimney repair in Kananaskis", href: "/calgary/chimney-repair/kananaskis/", note: "stone and brick chimneys on mountain properties." },
  { label: "Chimney repair in Longview", href: "/calgary/chimney-repair/longview/", note: "ranch homes and acreages on the Cowboy Trail." },
  { label: "Chimney repair in Sundre", href: "/calgary/chimney-repair/sundre/", note: "wood-heated homes and rural properties." },
  { label: "Chimney repair in Three Hills", href: "/calgary/chimney-repair/three-hills/", note: "town homes and farmhouses on the prairie." },
  { label: "Chimney repair in Drumheller", href: "/calgary/chimney-repair/drumheller/", note: "older brick chimneys in the valley." },
  { label: "Chimney repair in Claresholm", href: "/calgary/chimney-repair/claresholm/", note: "chimneys built for southern Alberta wind." },
];

// Tahapan proses spesifik untuk Chimney Repair
const chimneyProcessSteps = [
  {
    image: "/images/services/service/chimney_repair/2.webp",
    title: "Inspect The Chimney",
    text: "We check for cracks, spalling brick and the overall condition.",
  },
  {
    image: "/images/services/service/chimney_repair/3.webp",
    title: "Plan The Repair",
    text: "We put together a repair plan based on the damage we find.",
  },
  {
    image: "/images/services/service/chimney_repair/4.webp",
    title: "Strengthen The Structure",
    text: "Spalled brick is replaced and damaged mortar is repaired.",
  },
  {
    image: "/images/services/service/chimney_repair/5.webp",
    title: "Seal & Protect",
    text: "We seal the repair to keep water out and protect the chimney through winter.",
  },
];

// Overview spesifik untuk Chimney Repair
const chimneyOverviewItems = [
  {
    image: "/images/services/service/chimney_repair/6.webp",
    titleNormal: "Cap/Crown",
    titleHighlight: "Pouring",
  },
  {
    image: "/images/services/service/chimney_repair/7.webp",
    titleNormal: "Tuckpointing",
    titleHighlight: "Restoration",
  }
];

export const metadata = buildMetadata({
  title: "Chimney Repair Calgary – Leaks, Cracks, Caps & Crowns – DMG",
  description:
    "Chimney repair in Calgary: crowns, caps, tuckpointing, spalled brick and partial rebuilds. Request an estimate or call 1-403-619-8727.",
  path: "/calgary/chimney-repair/",
  image: "/images/services/service/chimney_repair/1.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageSchema("/calgary/chimney-repair/")} />

      <Navbar />

      <PageTitle title="Chimney Repair" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/chimney_repair/1.webp"
        mainImageFocus="20%"
        title="Chimney Repair in Calgary: Leaks, Cracks, Caps & Crowns"
        description="Water is the main enemy of any chimney. It gets into the brick and mortar, freezes and thaws through the winter, and slowly breaks the masonry apart. If you've noticed cracked mortar, loose bricks, a crumbling crown or a leak near your fireplace, it's cheaper to deal with it now than after another winter."
        paragraphs={[
          "DMG Masonry repairs brick and stone chimneys across Calgary. After an inspection we replace damaged brick, repoint worn mortar, rebuild loose top courses, and repair or replace the crown and cap, using materials that match the rest of your chimney. For damage elsewhere on your walls, see our [masonry repair service](/calgary/masonry-repair/).",
          "Fixing a small problem early is simpler than waiting for water to reach your walls and ceiling.",
        ]}
        benefits={[
          "Stops leaks",
          "Fixes the mortar",
          "Replaces damaged brick",
          "Matches your chimney",
        ]}
        extraParagraphs={[
          "Every chimney is different. Age, exposure and the condition of the brick all change what it needs, so we inspect first: the brick, the mortar joints, the crown and cap, and the masonry around the chimney. Then we recommend a repair.",
          "The work can include repointing worn mortar joints, [replacing spalled brick](/calgary/brick-repair/), and repairing parts damaged by weather. We keep the finish clean so the repair doesn't look like a patch.",
        ]}
        sections={chimneySections}
      />

      <ProcessSteps
        title="How Our Calgary Chimney Repair Process Works"
        steps={chimneyProcessSteps}
      />

      <ServiceGallery items={chimneyOverviewItems} />

      <WhyChooseUs
        image="/images/services/service/chimney_repair/8.webp"
        title="Brick Chimney Repair Built to Last"
        description="A damaged chimney can affect the safety and condition of the whole structure. Our repairs strengthen the chimney and keep water out, so the damage doesn't spread."
        listItems={[
          "A stronger structure",
          "Water kept out",
          "Damage stopped before it spreads",
        ]}
        buttonText="See What We Do"
        buttonLink="/contact-us"
      />

      <AreaLinks
        title="Chimney Repair Outside Calgary"
        intro="We also repair chimneys in the communities around Calgary:"
        areas={nearbyAreas}
      />

      <FaqSection
        faqs={chimneyRepairFaqs}
        title="Calgary Chimney Repair FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/calgary/calgary-1.webp"
          title="Book a Chimney Repair Estimate in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Seeing cracks or a leak? Tell us what's happening and we'll arrange an inspection. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}
