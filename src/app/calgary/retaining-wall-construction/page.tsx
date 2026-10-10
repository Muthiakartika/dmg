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

// Data FAQ khusus untuk halaman Retaining Wall
const retainingWallFaqs = [
  {
    uuid: "faq-retaining-1",
    question: "Why is proper drainage important for retaining walls?",
    answers: [
      "Drainage plays a critical role in retaining wall performance. Without proper water management, pressure can build behind the wall over time, which may affect structural stability. Our retaining wall installations are planned with drainage considerations to support long-term durability and reliable performance.",
    ],
  },
  {
    uuid: "faq-retaining-2",
    question: "What materials are commonly used for retaining walls?",
    answers: [
      "We work with a variety of retaining wall materials including natural stone, concrete blocks, modular wall systems, and other masonry products. Material selection depends on site conditions, structural needs, visual style, and overall project goals.",
    ],
  },
  {
    uuid: "faq-retaining-3",
    question: "Can retaining walls be installed on sloped properties?",
    answers: [
      "Yes. Retaining walls are often used to help manage elevation changes and improve the usability of sloped outdoor spaces. Before construction begins, we assess the site conditions carefully to determine the most appropriate wall structure and installation approach.",
    ],
  },
  {
    uuid: "faq-retaining-4",
    question: "Do retaining wall projects require permits or inspections?",
    answers: [
      "Some retaining wall projects in Calgary may require permits depending on wall size, location, and local regulations. When required, our team helps coordinate the necessary approvals and ensures the work aligns with applicable building standards.",
    ],
  },
  {
    uuid: "faq-retaining-5",
    question: "How long does a retaining wall typically last?",
    answers: [
      "When constructed with proper drainage, quality materials, and reliable installation methods, retaining walls can remain structurally stable and visually consistent for many years. Long-term performance also depends on site conditions and ongoing maintenance over time.",
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
    text: "Used where the structural demand is high or the space is tight. Strong and long-lived, but less forgiving than block and typically clad afterwards in stone veneer if appearance matters.",
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
    text: "We assess grading, drainage, and soil conditions before installation begins.",
  },
  {
    image: "/images/services/service/retaining_wall/3.webp",
    title: "Plan The Wall Structure",
    text: "Layout, materials, and wall support requirements are carefully prepared.",
  },
  {
    image: "/images/services/service/retaining_wall/4.webp",
    title: "Build The Retaining Wall",
    text: "The retaining wall is constructed using durable materials and proper installation methods.",
  },
  {
    image: "/images/services/service/retaining_wall/5.webp",
    title: "Complete The Finishing",
    text: "Final adjustments help ensure structural support and a clean overall appearance.",
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

// Testimonial klien spesifik untuk Retaining Wall
const retainingWallFeedbacks = [
  {
    feedbackText:
      "The finished wall looks great, but what impressed me most was how solid everything feels. You can tell a lot of care went into getting it right.",
    name: "Steven M.",
  },
  {
    feedbackText:
      "We'd been putting this project off for a while because we thought it would be more complicated. It ended up being a smooth process, and we're glad we finally got it done.",
    name: "Brian L.",
  },
  {
    feedbackText:
      "They kept the site organized, and there wasn't much cleanup left for us once the job was finished.",
    name: "Daniel H.",
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
        description="DMG Masonry builds retaining walls in Calgary, Alberta. Retaining walls help manage sloped landscapes while improving the structure and appearance of an outdoor space. Ours are designed for dependable support, proper drainage, and a clean finish that fits naturally with the property."
        paragraphsHeading="What a Retaining Wall Does for Calgary Yards"
        paragraphs={[
          "A properly built retaining wall helps reduce soil movement, erosion, and water-related issues that can affect the stability of the landscape over time. Our team carefully plans each installation to ensure the wall performs reliably while maintaining a balanced and visually cohesive appearance within the outdoor environment.",
          "Beyond structural support, retaining walls can also help define outdoor spaces and improve long-term property functionality. Whether used for elevation changes, garden areas, or landscape organization, a professionally installed retaining wall adds both durability and visual structure to the property.",
        ]}
        benefits={[
          "Structural Support",
          "Durable Wall Construction",
          "Proper Drainage Solutions",
          "Clean Landscape Integration",
        ]}
        extraParagraphsHeading="Planning a Retaining Wall: Slope, Drainage & Soil"
        extraParagraphs={[
          "Proper planning is an essential part of any retaining wall installation. Before construction begins, we evaluate soil conditions, grading, drainage flow, and site layout to determine the most suitable wall structure for the property while helping support long-term stability and performance.",
          "As a hardscape contractor in Calgary, we build retaining walls using a variety of materials and finish options to match different landscape styles and structural needs. Whether using natural stone, concrete block, or modular retaining wall systems, our installations are designed to provide dependable support while maintaining a clean and cohesive outdoor appearance.",
          "Strong retaining wall construction depends on proper site preparation, reliable materials, and consistent workmanship throughout the installation process. By focusing on structural support, drainage efficiency, and durable construction methods, we build retaining walls Calgary properties can rely on through changing outdoor conditions while maintaining their overall appearance and functionality.",
        ]}
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

      <TestimonialSlider
        titleNormal="Calgary Retaining"
        titleHighlight="Wall Reviews"
        feedbacks={retainingWallFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/retaining_wall/8.webp"
        title="Why Choose DMG Masonry as Your Retaining Wall Builder in Calgary?"
        description="Retaining walls help support uneven ground and improve outdoor usability. We build retaining walls Calgary homeowners and commercial property owners rely on for dependable performance and a clean appearance."
        listItems={[
          "Helps stabilize uneven terrain",
          "Creates cleaner and more usable outdoor areas",
          "Constructed with durable retaining wall materials",
          "Designed to complement the surrounding landscape",
          "Part of a full hardscape construction plan",
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
        />
      </div>

      <Footer />
    </>
  );
}
