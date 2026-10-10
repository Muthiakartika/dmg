import Navbar from "@/components/Layout/Navbar";
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
import { buildMetadata } from "@/lib/seo";

// Data FAQ khusus untuk halaman Patio Stone Installation
const patioStoneFaqs = [
  {
    uuid: "faq-patio-1",
    question: "Can patio stones be installed on uneven or sloped ground?",
    answers: [
      "Yes. We assess the site conditions and properly prepare the base to ensure a stable and level patio surface, even on uneven or sloped terrain. Proper groundwork is essential for long-term durability and performance.",
    ],
  },
  {
    uuid: "faq-patio-2",
    question: "What materials are commonly used for patio stone installation?",
    answers: [
      "We work with a range of durable materials including natural stone, concrete pavers, and masonry products. Material selection is based on both design preferences and suitability for Calgary's weather conditions.",
    ],
  },
  {
    uuid: "faq-patio-3",
    question: "Can an existing patio be repaired instead of replaced?",
    answers: [
      "Yes. In many cases, patios can be repaired or re-leveled without requiring full replacement. We restore uneven, cracked, or shifted patio stones to improve both appearance and structural stability.",
    ],
  },
  {
    uuid: "faq-patio-4",
    question: "How long does a patio stone installation typically last?",
    answers: [
      "With proper installation methods and maintenance, a professionally built patio can last for many years. Durability depends on base preparation, material quality, and overall workmanship during installation.",
    ],
  },
  {
    uuid: "faq-patio-5",
    question: "Can patio stone layouts and patterns be customized?",
    answers: [
      "Yes. At DMG Masonry, we design custom patio layouts based on property layout, usage needs, and visual preferences. This includes stone patterns, shapes, and overall design flow to match the outdoor space.",
    ],
  },
];

// Perawatan, sealing & biaya patio - section tanya-jawab baru (AEO)
const patioMaintenanceTopics = [
  {
    title: "Does a patio need sealing?",
    text: "Sealing is optional. It helps with staining and can deepen the colour of natural stone, but it needs redoing periodically and is not what determines whether the patio lasts. Base preparation is.",
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
    text: "We evaluate ground conditions, drainage, and layout prior to installation.",
  },
  {
    image: "/images/services/service/pation_stone/3.webp",
    title: "Prepare The Base",
    text: "Proper grading and base work are completed to support a stable patio surface.",
  },
  {
    image: "/images/services/service/pation_stone/4.webp",
    title: "Install The Stones",
    text: "Each patio stone is placed with care to ensure alignment, level, and strength.",
  },
  {
    image: "/images/services/service/pation_stone/5.webp",
    title: "Complete The Surface",
    text: "Final adjustments are made to achieve a clean, durable, and even finish.",
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
  title: "Patio Stone Installation for Calgary Area Homes Today",
  description:
    "We handle every stage of your patio project, from grading to laying patio stones, creating a durable outdoor surface built for daily use and years of weather.",
  path: "/patio-stone-installation/",
  image: "/images/services/service/pation_stone/1.webp",
});

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle
        title="Patio Stone Installation"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent
        mainImage="/images/services/service/pation_stone/1.webp"
        title="Patio Stone Installation Calgary: Hardscape Patios & Pavers"
        description="DMG Masonry is a patio stone installer in Calgary, Alberta. A properly installed patio stone surface can improve both the function and appearance of an outdoor space. Our patio stone installation focuses on building stable, well-structured surfaces for everyday use and long-term durability in Calgary's climate."
        paragraphsHeading="What affects how long a patio lasts?"
        paragraphs={[
          "Outdoor patio areas are exposed to constant movement, seasonal weather changes, and moisture over time. At DMG Masonry, we install patio stones using dependable hardscape construction methods and carefully selected materials to ensure the surface remains stable, properly aligned, and visually consistent through years of use in Calgary's freeze-thaw climate.",
          "Beyond functionality, a patio also plays an important role in shaping how the overall outdoor environment comes together. With the right layout and planning, we help create spaces that feel practical for everyday use while still remaining comfortable and inviting for hosting, relaxation, and outdoor gatherings, while maintaining a cohesive connection with the rest of the property.",
        ]}
        benefits={[
          "Custom Patio Layout Planning",
          "Durable Outdoor Construction",
          "Professional Patio Stone Installation",
          "Repair & Re-Leveling Services",
        ]}
        extraParagraphsHeading="What does patio stone installation involve?"
        extraParagraphs={[
          "Every patio project starts with a detailed assessment of the space, including soil condition, drainage patterns, and intended use of the area. As masonry contractors in Calgary, we carefully evaluate these factors before installation begins to determine the most suitable construction approach and to help ensure long-term performance and structural reliability.",
          "During installation, each stone is carefully positioned and adjusted to achieve consistent leveling, proper alignment, and strong structural stability. We focus on precise workmanship throughout the process, ensuring the surface not only looks clean and even but also performs well under regular foot traffic and varying weather conditions.",
          "At DMG Masonry, our patio stone installation work is built around durable construction methods, quality materials, and consistent execution at every stage of the project. The result is a patio surface across Calgary and Alberta designed to remain functional, stable, and visually consistent over many years of outdoor use.",
        ]}
      />

      <ProcessSteps
        title="How Does Patio Stone Installation Work?"
        steps={patioStoneProcessSteps}
      />

      <ServiceGallery items={patioStoneOverviewItems} />

      <MaterialsSection
        subtitle="MAINTENANCE & COST"
        title="Patio Maintenance, Sealing And Cost"
        items={patioMaintenanceTopics}
      />

      <TestimonialSlider
        titleNormal="What Calgary Thinks"
        titleHighlight="About Our Patios"
        feedbacks={patioStoneFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/pation_stone/8.webp"
        title="Why Choose DMG Masonry For Patio Stone Installation In Calgary?"
        description="A properly installed patio stone surface helps create a functional, balanced outdoor space. As masonry contractors in Calgary, we build patio installations with strong structure and a clean, timeless finish for everyday use."
        listItems={[
          "Stable and level stone placement",
          "Properly prepared base layers",
          "Durable hardscape construction",
          "Designed for everyday outdoor use",
          "Built for Calgary's freeze-thaw climate",
        ]}
        buttonText="Contact Our Team"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={patioStoneFaqs}
        title="Patio Stone Installation Calgary: Frequently Asked Questions"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/pation_stone/9.webp"
          title="Design Your Perfect Patio"
          subtitle="REQUEST A QUOTE"
        />
      </div>

      <Footer />
    </>
  );
}
