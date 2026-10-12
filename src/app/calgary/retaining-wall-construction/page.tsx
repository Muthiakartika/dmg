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
      "Water is the main thing that pushes a wall over. If it can't drain, pressure builds up behind the wall and can affect its stability. We plan drainage into every wall.",
    ],
  },
  {
    uuid: "faq-retaining-2",
    question: "What materials are commonly used for retaining walls?",
    answers: [
      "Natural stone, concrete block, modular wall systems and other masonry products. The right one depends on your site, what the wall has to hold back and the look you want.",
    ],
  },
  {
    uuid: "faq-retaining-3",
    question: "Can retaining walls be installed on sloped properties?",
    answers: [
      "Yes. Retaining walls are often used to manage slopes and make them usable. We look at the site first to choose the right wall and method.",
    ],
  },
  {
    uuid: "faq-retaining-4",
    question: "Do retaining wall projects require permits or inspections?",
    answers: [
      "Some retaining walls in Calgary need a permit, depending on the size, location and local rules. When one is required, we help coordinate the approvals and make sure the work meets the applicable standards.",
    ],
  },
  {
    uuid: "faq-retaining-5",
    question: "How long does a retaining wall typically last?",
    answers: [
      "A wall built with good drainage, quality materials and sound methods can stay stable for many years. How long also depends on the site and on upkeep.",
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
          "Planning decides how well a wall performs. Before we build, we check the soil, the grade, how water flows and the layout of the site, then choose the wall that suits the property.",
          "We build with natural stone, concrete block and modular wall systems, whichever fits your site and the look you want.",
          "A good wall depends on solid site preparation, the right materials and consistent workmanship. The base and the drainage behind the wall do most of the work.",
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
