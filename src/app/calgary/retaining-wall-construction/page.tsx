import Navbar from "@/components/Layout/Navbar";
import JsonLd from "@/components/UI/JsonLd";
import PageTitle from "@/components/Sections/PageTitle";
import ContactSection from "@/components/Contact/ContactSection";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import ArticleSections from "@/components/Services/ArticleSections";
import type { ContentSection } from "@/components/Services/ContentSections";
import Footer from "@/components/Layout/Footer";
import ProcessSteps from "@/components/Sections/ProcessSteps";
import ServiceGallery from "@/components/Services/ServiceGallery";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import FaqSection from "@/components/Sections/FaqSection";
import MaterialsSection from "@/components/Services/MaterialsSection";
import { servicePageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Data FAQ khusus untuk halaman Retaining Wall
const retainingWallFaqs = [
  {
    uuid: "faq-retaining-1",
    question: "Do I need a permit for a retaining wall in Calgary?",
    answers: [
      "It depends on the height. In Calgary, a residential retaining wall that holds back 1.2 m (4 ft) or more of soil generally needs City approval, and walls built close together are counted together. Lower walls usually don't. Rules change, so we check the current requirements for your property and help coordinate approvals when they're needed.",
    ],
  },
  {
    uuid: "faq-retaining-2",
    question: "Which is best: block, natural stone or concrete retaining walls?",
    answers: [
      "Engineered block is the most common in Calgary: it drains through the wall, can be curved or stepped, and tolerates small ground movement. Natural stone and boulder walls suit terraced, natural-looking yards but need machine access. Poured concrete suits tight spaces and high loads and is often finished in stone veneer. Timber is cheaper, but rots much sooner in wet soil.",
    ],
  },
  {
    uuid: "faq-retaining-3",
    question: "Why is proper drainage important for retaining walls?",
    answers: [
      "Water is the main thing that pushes a wall over. If it can't drain, pressure builds up behind the wall and can affect its stability. We plan drainage into every wall.",
    ],
  },
  {
    uuid: "faq-retaining-4",
    question: "Why do retaining walls fail?",
    answers: [
      "Most failures come from water: no drainage behind the wall, so pressure builds up and pushes it over. A poorly compacted base, walls built too tall for their design, and timber that has rotted are the other common causes.",
    ],
  },
  {
    uuid: "faq-retaining-5",
    question: "How much does a retaining wall cost in Calgary?",
    answers: [
      "It depends on the height and length, the material, the drainage needed, and access to the site. Taller walls also need more base work and may need engineering. We quote after seeing the slope.",
    ],
  },
  {
    uuid: "faq-retaining-6",
    question: "How long does a retaining wall typically last?",
    answers: [
      "A wall built with good drainage, quality materials and sound methods can stay stable for many years. How long also depends on the site and on upkeep.",
    ],
  },
  {
    uuid: "faq-retaining-7",
    question: "How long does it take to build a retaining wall?",
    answers: [
      "Most walls take one to a few weeks, depending on length, height and site conditions. We'll give you a more exact timeline once we've seen your property.",
    ],
  },
  {
    uuid: "faq-retaining-8",
    question: "What is the cheapest type of retaining wall?",
    answers: [
      "Timber costs the least to build, but in wet Calgary soil with freeze-thaw it usually needs replacing much sooner than masonry. Over the life of the wall, segmental block is often the better value.",
    ],
  },
  {
    uuid: "faq-retaining-9",
    question: "Can a leaning retaining wall be fixed?",
    answers: [
      "Sometimes. If one section has moved because water built up behind it, that section can be taken down, the drainage fixed and the section rebuilt. If the whole wall leans or the timbers have rotted, rebuilding is usually the safer and cheaper long-term fix. Have it checked before it gets worse, especially if it holds up a driveway, a fence or a building.",
    ],
  },
];

// Sections after "Planning a Retaining Wall: Slope, Drainage & Soil".
const retainingWallSections: ContentSection[] = [
  {
    heading: "Retaining Wall Permits in Calgary",
    blocks: [
      { type: "p", text: "According to the City of Calgary:" },
      {
        type: "list",
        items: [
          "A retaining wall needs a building permit when it holds back 1.2 m (4 ft) or more of soil.",
          "Walls and garden boxes within 1 m of each other count as one height.",
          "Some walls also need a development permit, for example when the design or location doesn't meet the land use bylaw for your property.",
          "Before anyone digs, contact Utility Safety Partners to have buried lines marked.",
        ],
      },
      { type: "p", text: "The current rules, fees and timelines are on the City's [fences and retaining walls page](https://www.calgary.ca/development/home-building/fences.html)." },
    ],
  },
];

// Sections after the wall types ("Concrete, Block & Natural Stone Retaining Walls").
const retainingWallRepairSections: ContentSection[] = [
  {
    heading: "Retaining Wall Repair and Replacement",
    blocks: [
      { type: "p", text: "Signs a retaining wall is failing:" },
      {
        type: "list",
        items: [
          "it leans or bulges;",
          "blocks or stones have shifted;",
          "cracks run through the wall;",
          "soil or water seeps through the face;",
          "timbers have gone soft.",
        ],
      },
      { type: "p", text: "Almost every failure starts with water building up behind a wall that can't drain." },
    ],
  },
];

// Jenis retaining wall - section tanya-jawab baru (AEO)
const retainingWallTypes = [
  {
    title: "Segmental block retaining walls",
    text: "Engineered block units that lock together without mortar. They are the most common retaining wall in Calgary because they allow drainage through the wall, can be curved or stepped to follow a slope, and tolerate small ground movements without cracking.",
  },
  {
    title: "Natural stone and boulder walls",
    text: "Large quarried stone or boulders set into a slope. These suit terraced and naturalised landscapes and can look considerably less engineered than block, which is usually the point. They need machine access to build.",
  },
  {
    title: "Poured and reinforced concrete walls",
    text: "Used where the structural demand is high or the space is tight. Strong and long-lived, but less forgiving than block and typically clad afterwards in [stone veneer](/calgary/stone-veneer/) if appearance matters.",
  },
  {
    title: "Why we do not recommend timber",
    text: "Timber walls are cheaper to build and are the ones we most often get called out to replace. In contact with wet soil through repeated freeze-thaw cycles, they have a much shorter life than masonry.",
  },
];

// Tahapan proses spesifik untuk Retaining Wall
const retainingWallProcessSteps = [
  {
    image: "/images/services/service/retaining_wall/2.webp",
    title: "Evaluate The Site",
    text: "We check the grade, drainage and soil.",
  },
  {
    image: "/images/services/service/retaining_wall/3.webp",
    title: "Plan The Wall Structure",
    text: "We plan the layout, the materials and what the wall needs to hold back.",
  },
  {
    image: "/images/services/service/retaining_wall/4.webp",
    title: "Build The Retaining Wall",
    text: "We build the wall with durable materials and proper methods.",
  },
  {
    image: "/images/services/service/retaining_wall/5.webp",
    title: "Complete The Finishing",
    text: "We finish the details so the wall is solid and neat.",
  },
];

// Overview spesifik untuk Retaining Wall
const retainingWallOverviewItems = [
  {
    image: "/images/services/service/retaining_wall/6.webp",
    titleNormal: "Segmental Block",
    titleHighlight: "Wall Installation",
  },
  {
    image: "/images/services/service/retaining_wall/7.webp",
    titleNormal: "Natural Boulder",
    titleHighlight: "Terraced Slopes",
  },
];

export const metadata = buildMetadata({
  title: "Retaining Walls Calgary – Contractor & Builder – DMG Masonry",
  description:
    "Retaining wall contractor in Calgary: block, stone and concrete walls for sloped yards and erosion control. Request a quote or call 1-403-619-8727.",
  path: "/calgary/retaining-wall-construction/",
  image: "/images/services/service/retaining_wall/1.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageSchema("/calgary/retaining-wall-construction/")} />

      <Navbar />

      <PageTitle
        title="Retaining Wall Construction"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent
        mainImage="/images/services/service/retaining_wall/1.webp"
        mainImageFocus="75%"
        title="Retaining Wall Contractor in Calgary: Construction & Installation"
        description="DMG Masonry builds retaining walls in Calgary. A retaining wall holds back soil on a slope, controls where water goes, and makes the ground above and below it easier to use. We build them with proper drainage and a clean finish that suits your property."
        paragraphsHeading="What a Retaining Wall Does for Calgary Yards"
        paragraphs={[
          "A well-built retaining wall holds the soil in place. It reduces the erosion and water problems that can undermine a slope over time. We plan each wall so it does that job and looks right in your yard.",
          "A wall can also give a yard shape. It can level off a garden bed, create a terrace, or separate one area of the yard from another.",
        ]}
        benefits={[
          "Holds back soil",
          "Built to last",
          "Drains properly",
          "Fits your landscape",
        ]}
        extraParagraphsHeading="Planning a Retaining Wall: Slope, Drainage & Soil"
        extraParagraphs={[
          "Planning decides how well a wall performs. Before we build, we check the soil, the grade, how water flows and the layout of the site, then choose the wall that suits the property. Retaining walls are often one part of a bigger [hardscape project](/hardscape-contractor/), with a patio or steps above or below the wall.",
          "We build with natural stone, concrete block and modular wall systems, whichever fits your site and the look you want.",
          "A good wall depends on solid site preparation, the right materials and consistent workmanship. The base and the drainage behind the wall do most of the work.",
        ]}
        sections={retainingWallSections}
      />

      <ProcessSteps
        title="How Does Retaining Wall Installation Work?"
        steps={retainingWallProcessSteps}
      />

      <ServiceGallery items={retainingWallOverviewItems} />

      <MaterialsSection
        subtitle="WALL TYPES"
        title="Concrete, Block & Natural Stone Retaining Walls"
        items={retainingWallTypes}
      />

      <ArticleSections sections={retainingWallRepairSections} />

      <WhyChooseUs
        image="/images/services/service/retaining_wall/8.webp"
        title="Why Choose DMG Masonry as Your Retaining Wall Builder in Calgary?"
        description="A retaining wall makes uneven ground stable and usable. We build walls for homeowners and commercial properties in Calgary, with proper drainage and a clean finish."
        listItems={[
          "Stabilizes uneven ground",
          "Makes your yard more usable",
          "Built with durable materials",
          "Suited to the surrounding landscape",
          "Part of a full hardscape plan",
        ]}
        buttonText="Start Your Project"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={retainingWallFaqs}
        title="Retaining Walls Calgary: FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/retaining_wall/9.webp"
          title="Request a Retaining Wall Quote in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Tell us about your slope and what you want the wall to do. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}
