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
import MaterialsSection from "@/components/Services/MaterialsSection";
import { servicePageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Data FAQ khusus untuk halaman Custom Fire Pits
const firePitsFaqs = [
  {
    uuid: "faq-firepit-1",
    question: "What are Calgary's rules for backyard fire pits?",
    answers: [
      "The City of Calgary requires a backyard fire pit to be at least 2 metres from your property line, house, garage and fence, and not under trees or branches. Fires must be kept to about 1 metre high and wide, and wood-burning pits need a spark screen with openings no larger than 1.24 cm. Check calgary.ca for the current rules and any fire ban before you build.",
    ],
  },
  {
    uuid: "faq-firepit-2",
    question: "What's the difference between a wood-burning and gas fire pit?",
    answers: [
      "Wood-burning fire pits give you the traditional look and feel of a real fire. Gas and propane ones are more convenient: no firewood to manage, and the flame is consistent. Which is better depends on how you plan to use the space. Want a taller, chimney-style fire feature? See [outdoor fireplaces](/calgary/fireplace-installation/).",
    ],
  },
  {
    uuid: "faq-firepit-3",
    question: "Does a gas fire pit need a permit?",
    answers: [
      "Connecting a natural gas fire pit means running a gas line, and in Alberta that work needs a gas permit and a licensed gas fitter. We build the masonry; the gas connection is done by the gas fitter.",
    ],
  },
  {
    uuid: "faq-firepit-4",
    question: "How much does a custom fire pit cost in Calgary?",
    answers: [
      "It depends on the size, the material (natural stone, stone veneer or brick), wood or gas, and whether it's built into an existing patio or seating wall. We give you a clear quote after we've seen the space.",
    ],
  },
  {
    uuid: "faq-firepit-5",
    question: "Can a fire pit be built with natural stone or stone veneer?",
    answers: [
      "Yes. We can finish a fire pit in natural stone, [stone veneer](/calgary/stone-veneer/), brick or other masonry, depending on the look you want and your budget. We'll go through the options at the design stage.",
    ],
  },
  {
    uuid: "faq-firepit-6",
    question: "Can a fire pit be integrated into an existing outdoor area?",
    answers: [
      "Yes. A fire pit can be built into an existing patio, seating area or other hardscape. We plan the layout so it connects with what's already there.",
    ],
  },
  {
    uuid: "faq-firepit-7",
    question: "Do you build fire pits outside Calgary?",
    answers: [
      "Yes. We build custom fire pits in Calgary and across southern Alberta. Tell us your location when you get in touch.",
    ],
  },
  {
    uuid: "faq-firepit-8",
    question: "How long does a custom fire pit typically last?",
    answers: [
      "A professionally built fire pit can last many years. Good materials, solid construction and basic upkeep, like clearing ash and checking the joints, keep it in good shape.",
    ],
  },
  {
    uuid: "faq-firepit-9",
    question: "How long does fire pit mortar need to cure before use?",
    answers: [
      "Typically several days, as with most masonry work. We'll tell you how long to wait before the first fire.",
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
      <JsonLd data={servicePageSchema("/calgary/custom-fire-pits/")} />

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
          "Fire pits often sit alongside [patios](/patio-stone-installation/), seating walls and [outdoor kitchens](/outdoor-kitchen-contractor/). We use the same stone throughout, so the whole space looks designed as one.",
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
