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

// Data FAQ khusus untuk halaman Stone Veneer
const stoneVeneerFaqs = [
  {
    uuid: "faq-veneer-1",
    question: "What's the difference between natural and manufactured stone veneer?",
    answers: [
      "Natural thin veneer is real stone cut into thin pieces, with natural variation in colour and texture. Manufactured (cultured) stone is a cast product made to look like stone; it's lighter, more uniform and usually costs less. Both last when installed properly over a sound, moisture-protected wall. Our guide to [natural vs manufactured stone veneer](/blogs/natural-vs-manufactured-stone-veneer-what-s-the-difference-for-calgary-homes/) compares them in detail.",
    ],
  },
  {
    uuid: "faq-veneer-2",
    question: "What is the difference between stone veneer and full stone masonry?",
    answers: [
      "Veneer is a thinner, lighter layer of stone that gives you the look of full stone without the weight. It's quicker to install and still durable.",
    ],
  },
  {
    uuid: "faq-veneer-3",
    question: "Where can stone veneer be installed?",
    answers: [
      "Inside and out: fireplaces, feature walls, exterior facades, entryways and accent areas, on homes and commercial buildings.",
    ],
  },
  {
    uuid: "faq-veneer-4",
    question: "Can stone veneer go over existing brick or concrete?",
    answers: [
      "In many cases, yes, if the existing wall is sound and properly prepared. We check the surface first, because veneer applied over a wall that's already failing will fail with it.",
    ],
  },
  {
    uuid: "faq-veneer-5",
    question: "Is stone veneer suitable for Calgary's climate?",
    answers: [
      "Yes, when it's installed properly. We use suitable methods and durable materials so the veneer handles moisture and Calgary's temperature swings. Outside, the key is a proper moisture barrier and drainage behind the stone, so water that gets in can get out.",
    ],
  },
  {
    uuid: "faq-veneer-6",
    question: "Can damaged stone veneer be repaired instead of replaced?",
    answers: [
      "Often, yes. Damaged or aging veneer can usually be repaired rather than replaced. We check the surface and tell you what it needs.",
    ],
  },
  {
    uuid: "faq-veneer-7",
    question: "Is stone veneer cheaper than real stone?",
    answers: [
      "Usually, yes. Full-bed stone is thick and heavy: it needs a footing or ledge to sit on, and more labour to lay. Thin natural veneer and manufactured stone are applied to the wall itself, so both the material and the installation cost less, and the finished wall looks much the same.",
    ],
  },
  {
    uuid: "faq-veneer-8",
    question: "What are the downsides of stone veneer?",
    answers: [
      "The main one is moisture getting trapped behind adhered veneer when the drainage layer or weep screed is left out. Manufactured stone can also fade slightly over many years in strong sun, and veneer costs more than vinyl or fibre cement siding. A proper installation prevents the moisture problem, and natural thin stone doesn't fade.",
    ],
  },
];

// Sections after the applications ("Where Can Stone Veneer Be Installed?").
const stoneVeneerSections: ContentSection[] = [
  {
    heading: "Stone Veneer Siding for Calgary Homes",
    blocks: [
      { type: "p", text: "Stone veneer is used as siding in a few common ways:" },
      {
        type: "list",
        items: [
          "across the whole front of a house;",
          "as a wainscot along the lower part of the walls;",
          "on columns and entries;",
          "on garage fronts.",
        ],
      },
      { type: "p", text: "On an exterior wall, a proper installation includes:" },
      {
        type: "list",
        items: [
          "a weather-resistant barrier;",
          "a drainage gap or rainscreen behind the stone;",
          "metal lath and a scratch coat for adhered stone;",
          "a weep screed at the bottom so water can get out;",
          "flashing around windows and doors.",
        ],
      },
      { type: "p", text: "That layer behind the stone matters in Calgary. Water that gets trapped behind veneer freezes, expands and pushes stones off the wall." },
    ],
  },
  {
    heading: "Downsides of Stone Veneer, and How to Avoid Them",
    blocks: [
      {
        type: "list",
        items: [
          "**Trapped moisture:** the most common problem with adhered veneer. It happens when the drainage layer or weep screed is left out. Install it properly and it won't happen.",
          "**Fading:** manufactured stone is coloured concrete, so in strong sun its colour can soften over many years. Natural thin stone doesn't fade.",
          "**Loose or cracked stones:** usually caused by a poorly prepared wall or by movement in the structure behind it. Prep and the right mortar prevent most of it.",
          "**Cost:** stone veneer costs more than vinyl or fibre cement siding. Many homeowners use it as a wainscot or on the entry to get the look for less.",
        ],
      },
    ],
  },
];

// Tahapan proses spesifik untuk Stone Veneer
const stoneVeneerProcessSteps = [
  {
    image: "/images/services/service/stone_veneer/2.webp",
    title: "Evaluate The Project",
    text: "We look at the space and the surface we'll be working on.",
  },
  {
    image: "/images/services/service/stone_veneer/3.webp",
    title: "Prepare Materials & Layout",
    text: "We choose the stone, plan the layout pattern and prepare the details.",
  },
  {
    image: "/images/services/service/stone_veneer/4.webp",
    title: "Apply The Stone Veneer",
    text: "We install each section carefully so it's secure and neat.",
  },
  {
    image: "/images/services/service/stone_veneer/5.webp",
    title: "Complete The Final Finish",
    text: "We finish the joints and details for a clean look.",
  },
];

// Overview spesifik untuk Stone Veneer
const stoneVeneerOverviewItems = [
  {
    image: "/images/services/service/stone_veneer/6.webp",
    titleNormal: "Natural Thin",
    titleHighlight: "Stone Veneer",
  },
  {
    image: "/images/services/service/stone_veneer/7.webp",
    titleNormal: "Manufactured",
    titleHighlight: "Cultured Stone",
  }
];

// Lokasi pemasangan stone veneer - section tanya-jawab baru (AEO)
const stoneVeneerApplications = [
  {
    title: "Exterior facades and accent walls",
    text: "Stone veneer is most often used on the front elevation, around entryways, and on columns or wainscot bands to break up siding. It is light enough to apply over most prepared exterior surfaces.",
  },
  {
    title: "Interior feature walls and fireplace surrounds",
    text: "Indoors, stone veneer is used on [fireplace surrounds](/calgary/fireplace-installation/), feature walls and basement bars. Interior installs avoid the freeze-thaw exposure of exterior work, so material choice is driven mainly by appearance.",
  },
  {
    title: "Outdoor kitchens, fire pits and retaining walls",
    text: "Stone veneer is frequently used to clad outdoor kitchen bases, [fire pit surrounds](/calgary/custom-fire-pits/) and the face of [block retaining walls](/calgary/retaining-wall-construction/), which is how a hardscape project ends up looking like one connected design rather than separate builds.",
  },
  {
    title: "Can stone veneer go over existing brick or concrete?",
    text: "In many cases yes, provided the substrate is sound and properly prepared. We assess the existing surface first, because veneer applied over a wall that is already failing will fail with it.",
  },
];

export const metadata = buildMetadata({
  title: "Stone Veneer Calgary – Installation & Design – DMG Masonry",
  description:
    "Natural and cultured stone veneer installed on Calgary homes, from siding to fireplace surrounds. Request a quote or call 1-403-619-8727.",
  path: "/calgary/stone-veneer/",
  image: "/images/services/service/stone_veneer/1.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageSchema("/calgary/stone-veneer/")} />

      <Navbar />

      <PageTitle title="Stone Veneer" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/stone_veneer/1.webp"
        mainImageFocus="20%"
        title="Stone Veneer Installation in Calgary: Natural & Cultured Stone"
        description="Stone veneer is a thin layer of natural or manufactured stone applied to a wall. You get the look of full stone without the weight. DMG Masonry installs stone veneer in Calgary, inside and out."
        paragraphsHeading="What Is Stone Veneer and Why Use It?"
        paragraphs={[
          "Veneer is a flexible way to get a natural stone look without the weight and cost of full stone construction. We use it on feature walls, exterior facades, fireplaces and other surfaces.",
          "Installed properly, it handles Calgary's weather, needs very little upkeep, and adds value to homes and commercial spaces."
        ]}
        benefits={[
          "Full Stone Veneer Installation",
          "Design Consultation",
          "Repairs & Maintenance",
          "Interior & Exterior Applications",
        ]}
        extraParagraphsHeading="Stone Veneer Installer in Calgary: How Proper Installation Works"
        extraParagraphs={[
          "Installation is where veneer succeeds or fails. We prepare the surface, apply the stone and finish the joints so it stays firmly attached and looks clean, indoors or out.",
          "We also help you choose. We'll go through stone styles and colours with you, so the finish suits your house and how you use the space.",
          "If you already have veneer that's loose, cracked or worn, we repair that too. We match the stone as closely as we can so the repair blends in."
        ]}
      />

      <ProcessSteps
        title="How Does Our Stone Veneer Installation Work?"
        steps={stoneVeneerProcessSteps}
      />

      <ServiceGallery
        items={stoneVeneerOverviewItems}
      />

      <MaterialsSection
        subtitle="APPLICATIONS"
        title="Where Can Stone Veneer Be Installed?"
        items={stoneVeneerApplications}
      />

      <ArticleSections sections={stoneVeneerSections} />

      <WhyChooseUs
        image="/images/services/service/stone_veneer/8.webp"
        title="Why Do Calgary Property Owners Choose Stone Veneer?"
        description="Veneer gives you the look of natural stone in a lighter, quicker-to-install form. We focus on clean installation and durable materials, so it looks good and lasts."
        listItems={[
          "Custom styles and finishes",
          "Clean, precise installation",
          "Holds up in Calgary's climate",
          "A natural stone look"
        ]}
        buttonText="Find Out More"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={stoneVeneerFaqs}
        title="Stone Veneer Calgary: FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/stone_veneer/9.webp"
          title="Request a Stone Veneer Quote in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Tell us about the wall or fireplace you have in mind. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}
