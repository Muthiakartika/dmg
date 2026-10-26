import Navbar from "@/components/Layout/Navbar";
import JsonLd from "@/components/UI/JsonLd";
import PageTitle from "@/components/Sections/PageTitle";
import ContactSection from "@/components/Contact/ContactSection";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Footer from "@/components/Layout/Footer";
import ProcessSteps from "@/components/Sections/ProcessSteps";
import ServiceGallery from "@/components/Services/ServiceGallery";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import FaqSection from "@/components/Sections/FaqSection";
import TestimonialSlider from "@/components/Sections/TestimonialSlider";
import MaterialsSection from "@/components/Services/MaterialsSection";
import { servicePageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Data FAQ khusus untuk halaman Patio Stone Installation
const patioStoneFaqs = [
  {
    uuid: "faq-patio-1",
    question: "Pavers or natural flagstone: which is better for a Calgary patio?",
    answers: [
      "Interlocking pavers flex slightly with ground movement instead of cracking, and single pavers can be lifted and reset if a section settles. Natural flagstone gives a less uniform, more organic look and takes longer to lay, so it usually costs more. Both last when the base is built properly.",
    ],
  },
  {
    uuid: "faq-patio-2",
    question: "Can patio stones be installed on uneven or sloped ground?",
    answers: [
      "Yes. We look at the site and prepare the base so the patio is stable and level, even on uneven or sloped ground. Good groundwork is what makes it last. On steeper slopes, a [retaining wall](/calgary/retaining-wall-construction/) may be needed to create a level area.",
    ],
  },
  {
    uuid: "faq-patio-3",
    question: "How much does patio stone installation cost in Calgary?",
    answers: [
      "Cost depends on the area, the material, how much excavation the site needs and access for equipment. A flat, open backyard and a terraced site with a narrow gate are very different jobs at the same size, which is why we quote after seeing the space.",
    ],
  },
  {
    uuid: "faq-patio-4",
    question: "Should I seal my patio?",
    answers: [
      "It's optional. Sealing helps resist staining and can deepen the colour of natural stone, but it needs redoing every few years and isn't what makes a patio last; the base is. Avoid de-icing salt on natural stone and some concrete pavers; sand is safer.",
    ],
  },
  {
    uuid: "faq-patio-5",
    question: "Can an existing patio be repaired instead of replaced?",
    answers: [
      "Often, yes. A patio can usually be repaired or re-levelled without replacing it. We fix uneven, cracked or shifted stones.",
    ],
  },
  {
    uuid: "faq-patio-6",
    question: "How long does a patio stone installation typically last?",
    answers: [
      "A professionally built patio can last many years. How long depends mainly on base preparation, material quality and workmanship.",
    ],
  },
];

// Perawatan, sealing & biaya patio - section tanya-jawab baru (AEO)
const patioMaintenanceTopics = [
  {
    title: "Does a patio need sealing?",
    text: "Sealing is optional. It helps with staining and can deepen the colour of natural stone, but it needs redoing periodically and is not what determines whether the patio lasts. Base preparation is. Our guide on [how to seal a masonry patio](/blogs/how-to-seal-a-masonry-patio-a-diy-guide/) walks through it step by step.",
  },
  {
    title: "How do I maintain a paver patio?",
    text: "Sweep it, keep joint sand topped up, and pull weeds from joints before they establish. Re-sanding joints every few years keeps the interlock working, which is what stops individual pavers shifting.",
  },
  {
    title: "Is salt bad for a stone patio?",
    text: "De-icing salt is hard on natural stone and on the surface of some concrete products. Sand or a stone-safe alternative is the safer choice on a patio you care about the look of.",
  },
  {
    title: "How much does patio stone installation cost?",
    text: "Cost is driven by area, the material chosen, how much excavation the site needs, and access for equipment. A flat, open backyard and a terraced site with a narrow gate are very different jobs at the same square footage, which is why we quote after seeing the space.",
  },
];

// Tahapan proses spesifik untuk Patio Stone Installation
const patioStoneProcessSteps = [
  {
    image: "/images/services/service/pation_stone/2.webp",
    title: "Assess The Site",
    text: "We check the ground, drainage and layout before we start.",
  },
  {
    image: "/images/services/service/pation_stone/3.webp",
    title: "Prepare The Base",
    text: "We grade and build up the base so the patio stays stable.",
  },
  {
    image: "/images/services/service/pation_stone/4.webp",
    title: "Install The Stones",
    text: "We place each stone carefully so it's aligned and level.",
  },
  {
    image: "/images/services/service/pation_stone/5.webp",
    title: "Complete The Surface",
    text: "We make the final adjustments for an even, clean finish.",
  },
];

// Overview spesifik untuk Patio Stone Installation
const patioStoneOverviewItems = [
  {
    image: "/images/services/service/pation_stone/6.webp",
    titleNormal: "Natural Flagstone",
    titleHighlight: "Patios",
  },
  {
    image: "/images/services/service/pation_stone/7.webp",
    titleNormal: "Interlocking",
    titleHighlight: "Pavers",
  },
];

// Testimonial klien spesifik untuk Patio Stone Installation
const patioStoneFeedbacks = [
  {
    feedbackText:
      "We originally contacted DMG Masonry about repairing our patio, but after talking through the options, we decided on a new installation instead. Looking back, it was definitely the right decision for our space.",
    name: "Nicole H.",
  },
  {
    feedbackText:
      "Our backyard finally feels finished. The patio connects everything together, thank you DMG Masonry.",
    name: "Melissa W.",
  },
];


export const metadata = buildMetadata({
  title: "Patio Stone Installation Calgary – Pavers & Flagstone – DMG",
  description:
    "Paving stone patios, pavers and flagstone installed in Calgary, from grading to finish. Request a quote or call 1-403-619-8727.",
  path: "/patio-stone-installation/",
  image: "/images/services/service/pation_stone/1.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageSchema("/patio-stone-installation/")} />

      <Navbar />

      <PageTitle
        title="Patio Stone Installation"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent
        mainImage="/images/services/service/pation_stone/1.webp"
        mainImageFocus="90%"
        title="Patio Stone Installation in Calgary: Paving Stone, Pavers & Flagstone"
        description="DMG Masonry installs patio stone in Calgary: paving stone, pavers and flagstone. A well-built patio makes your outdoor space easier to use, and what holds it together is the part you can't see: the base."
        paragraphsHeading="How Long Does a Stone Patio Last in Calgary?"
        paragraphs={[
          "Patios take foot traffic, weather and moisture, and in Calgary they go through freeze-thaw every winter. A patio lasts when the base is built properly. We prepare the ground, drainage and levels carefully, so the stones stay stable and aligned.",
          "A patio also changes how you use the yard. With the right layout, it's somewhere you actually want to sit, host and spend time.",
        ]}
        benefits={[
          "Custom Patio Layout Planning",
          "Durable Outdoor Construction",
          "Professional Patio Stone Installation",
          "Repair & Re-Leveling Services",
        ]}
        extraParagraphsHeading="What Patio Stone Installation Involves"
        extraParagraphs={[
          "We start by looking at the space: the soil, how water drains and how you'll use the patio. Those decide the best way to build it.",
          "During installation, each stone is placed and adjusted so the surface is level, aligned and solid underfoot.",
          "We build patios across Calgary and Alberta using solid construction methods and quality materials.",
          "Planning more than a patio? Our [hardscape contractor](/hardscape-contractor/) page covers walls, walkways and full yard projects.",
        ]}
      />

      <ProcessSteps
        title="How We Install Paving Stone Patios in Calgary"
        steps={patioStoneProcessSteps}
      />

      <ServiceGallery items={patioStoneOverviewItems} />

      <MaterialsSection
        subtitle="MAINTENANCE & COST"
        title="Patio Maintenance, Sealing And Cost"
        items={patioMaintenanceTopics}
      />

      <TestimonialSlider
        titleNormal="Calgary Patio Stone"
        titleHighlight="Installation Reviews"
        feedbacks={patioStoneFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/pation_stone/8.webp"
        title="Why Choose DMG Masonry For Patio Stone Installation In Calgary?"
        description="A properly installed patio gives you a balanced, usable outdoor space. We build patios with a solid base and a clean finish, made for everyday use in Calgary."
        listItems={[
          "Level, stable stone placement",
          "Properly prepared base layers",
          "Built for everyday use",
          "Built for Calgary's freeze-thaw climate",
        ]}
        buttonText="Contact Our Team"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={patioStoneFaqs}
        title="Patio Stone Installation Calgary: FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/pation_stone/9.webp"
          title="Request a Patio Installation Quote in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Tell us about the space you have in mind. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}
