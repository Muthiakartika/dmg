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

// Data FAQ khusus untuk halaman Custom Fire Pits
const firePitsFaqs = [
  {
    uuid: "faq-firepit-1",
    question: "Do you build both gas and wood-burning fire pits?",
    answers: [
      "Yes. We build both, and we'll help you choose based on your yard, how you'll use it and the look you want.",
    ],
  },
  {
    uuid: "faq-firepit-2",
    question: "Can the fire pit design be customized?",
    answers: [
      "Yes. We customize the shape, size, finish and layout so the fire pit suits your yard and your house.",
    ],
  },
  {
    uuid: "faq-firepit-3",
    question: "Can a fire pit be integrated into an existing outdoor area?",
    answers: [
      "Yes. A fire pit can be built into an existing patio, seating area or other hardscape. We plan the layout so it connects with what's already there.",
    ],
  },
  {
    uuid: "faq-firepit-4",
    question: "Are custom fire pits designed with safety in mind?",
    answers: [
      "Yes. We follow safe construction practices and local requirements, with proper spacing and suitable materials.",
    ],
  },
  {
    uuid: "faq-firepit-5",
    question: "How long does a custom fire pit typically last?",
    answers: [
      "A professionally built fire pit can last many years. Good materials, solid construction and basic upkeep, like clearing ash and checking the joints, keep it in good shape.",
    ],
  },
  {
    uuid: "faq-firepit-7",
    question: "How long does fire pit mortar need to cure before use?",
    answers: [
      "Typically several days, as with most masonry work. We'll tell you how long to wait before the first fire.",
    ],
  },
  {
    uuid: "faq-firepit-8",
    question: "What is the typical deposit required to start a fire pit installation?",
    answers: [
      "Most fire pit projects need a deposit up front to secure materials and scheduling. The balance is due as the work progresses or when it's finished.",
    ],
  },
  {
    uuid: "faq-firepit-9",
    question: "Can a fire pit be built with natural stone or stone veneer?",
    answers: [
      "Yes. We can finish a fire pit in natural stone, stone veneer, brick or other masonry, depending on the look you want and your budget. We'll go through the options at the design stage.",
    ],
  },
  {
    uuid: "faq-firepit-10",
    question: "What's the difference between a wood-burning and gas fire pit?",
    answers: [
      "Wood-burning fire pits give you the traditional look and feel of a real fire. Gas and propane ones are more convenient: no firewood to manage, and the flame is consistent. Which is better depends on how you plan to use the space.",
    ],
  },
];

// Alasan menambahkan fire pit - section tanya-jawab baru (AEO)
const firePitBenefits = [
  {
    title: "It extends the outdoor season",
    text: "In a climate like Calgary's, a fire pit is the difference between a yard that gets used four months a year and one that gets used well into the shoulder seasons and on cool summer evenings.",
  },
  {
    title: "It gives the yard a focal point",
    text: "Seating arranged around nothing tends not to get used. A fire pit gives the outdoor space a centre, which is why it is often the piece that makes the rest of a patio work.",
  },
  {
    title: "It is low maintenance",
    text: "A masonry fire pit built on a proper base needs very little beyond clearing ash and the occasional joint check. There is no mechanism to service on a wood-burning build.",
  },
  {
    title: "It integrates with the rest of the yard",
    text: "Fire pits are usually built alongside patios, seating walls and outdoor kitchens using the same stone, so the finished space reads as one design rather than an add-on.",
  },
];

const firePitMaterials = [
  {
    icon: "flaticon-cube",
    title: "Natural Stone",
    text: "Gives a textured, natural look that suits both traditional and modern yards, and stands up to the weather.",
  },
  {
    icon: "flaticon-facade",
    title: "Stone Veneer",
    text: "Looks like full stone but weighs less. It's one of the most popular finishes for Calgary fire pits and is still very durable.",
  },
  {
    icon: "flaticon-mansory",
    title: "Brick",
    text: "A clean, classic finish that suits many backyard styles and handles Calgary's temperature swings.",
  },
  {
    icon: "flaticon-houses",
    title: "Eco-Friendly & Custom Finishes",
    text: "We can source eco-friendly and sustainably produced masonry materials, and custom finishes to match your outdoor space.",
  },
];

// Tahapan proses spesifik untuk Custom Fire Pits
const firePitsProcessSteps = [
  {
    image: "/images/services/service/custom_firepit/2.webp",
    title: "Review The Space",
    text: "We look at the layout and the spot where the fire pit will go.",
  },
  {
    image: "/images/services/service/custom_firepit/3.webp",
    title: "Plan The Design",
    text: "We plan the materials, fuel type and layout for your fire pit.",
  },
  {
    image: "/images/services/service/custom_firepit/4.webp",
    title: "Build The Fire Pit",
    text: "We build the structure with durable masonry.",
  },
  {
    image: "/images/services/service/custom_firepit/5.webp",
    title: "Complete The Finishing",
    text: "We add the final details for safe use and a clean finish.",
  },
];

// Overview spesifik untuk Custom Fire Pits
const firePitsOverviewItems = [
  {
    image: "/images/services/service/custom_firepit/6.webp",
    titleNormal: "Wood-Burning",
    titleHighlight: "Fire Pits",
  },
  {
    image: "/images/services/service/custom_firepit/7.webp",
    titleNormal: "Gas & Propane",
    titleHighlight: "Fire Tables",
  }
];

// Testimonial klien spesifik untuk Custom Fire Pits
const firePitsFeedbacks = [
  {
    feedbackText:
      "The fire pit has become our favorite part of the backyard. Big thanks to DMG Masonry.",
    name: "Amanda S.",
  },
  {
    feedbackText:
      "I was mostly focused on how it would look, but it ended up being a really practical addition too. It's nice having a place where everyone naturally gathers.",
    name: "Lisa W.",
  },
  {
    feedbackText:
      "It looks natural in the space, and the quality of the stonework really stands out.",
    name: "Kyle T.",
  },
];


export const metadata = buildMetadata({
  title: "Fire Pits Calgary – Custom Fire Pit Design & Install – DMG",
  description:
    "Custom stone and brick fire pits designed and installed in Calgary and across Alberta. Request a quote or call 1-403-619-8727.",
  path: "/calgary/custom-fire-pits/",
  image: "/images/services/service/custom_firepit/1.webp",
});

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle title="Custom Fire Pits" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/custom_firepit/1.webp"
        mainImageFocus="45%"
        title="Fire Pits Calgary: Custom Fire Pit Installation & Design"
        description="DMG Masonry builds custom fire pits in Calgary. A good fire pit gives your yard somewhere to sit, gather and stay out longer. We design and build them in natural stone, stone veneer or brick, burning wood or gas."
        paragraphsHeading="What Makes a Custom Fire Pit Last in Alberta Winters?"
        paragraphs={[
          "A fire pit lives outside. It takes heat, rain, snow and freeze-thaw every year, so it has to be built for that. We use durable masonry on a proper base, with joints and finishes chosen to cope with Alberta winters. The result keeps its shape and its look season after season.",
        ]}
        benefits={[
          "Custom fire pit designs",
          "Wood-burning and gas options",
          "Natural stone and stone veneer finishes",
          "Built with durable masonry",
          "Integrated with your outdoor space",
          "Installed with safety in mind",
        ]}
        extraParagraphsHeading="Fire Pit Planning & Design in Calgary"
        extraParagraphs={[
          "We plan before we build. Layout, materials, fuel type and how you'll use the fire pit all affect the design, so we work them out first. Then the fire pit sits properly in your yard and works the way you use it.",
          "We build custom fire pits for Calgary homes in modern and rustic styles, with clean finishing from the first course to the final detail.",
          "Fire pits often sit alongside patios, seating walls and outdoor kitchens. We use the same stone throughout, so the whole space looks designed as one.",
        ]}
      />

      <MaterialsSection
        title="What Materials Are Fire Pits Made From?"
        description="The material changes how your fire pit looks and how it holds up outdoors. Here are the finishes we use most."
        items={firePitMaterials}
      />

      <ProcessSteps
        title="How Does Fire Pit Installation Work In Calgary?"
        steps={firePitsProcessSteps}
      />

      <ServiceGallery items={firePitsOverviewItems} />

      <MaterialsSection
        subtitle="BENEFITS"
        title="Why Add A Fire Pit To Your Outdoor Space?"
        items={firePitBenefits}
      />

      <TestimonialSlider
        titleNormal="Calgary Fire Pit"
        titleHighlight="Reviews"
        feedbacks={firePitsFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/custom_firepit/8.webp"
        title="Why Choose DMG Masonry For Custom Fire Pits In Calgary?"
        description="A fire pit gives a yard a place to gather, and the right one adds real value to your property. We build safe, solid fire pits for everyday use, designed around your yard."
        listItems={[
          "Built safely and solidly",
          "Custom designs for your yard",
          "Made for everyday use",
          "Wood-burning and gas options",
          "Natural stone and stone veneer finishes",
        ]}
        buttonText="Plan Your Project"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={firePitsFaqs}
        title="Fire Pits Calgary: Frequently Asked Questions"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/custom_firepit/9.webp"
          title="Request a Fire Pit Installation Quote in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Ready to plan your fire pit? Tell us about your yard and what you have in mind. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}
