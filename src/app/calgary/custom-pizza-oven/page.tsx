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

// Data FAQ khusus untuk halaman Custom Pizza Oven
const pizzaOvenFaqs = [
  {
    uuid: "faq-oven-1",
    question: "Can custom pizza ovens be built for smaller outdoor spaces?",
    answers: [
      "Yes. We build ovens in different sizes, including compact ones for smaller yards. We plan the layout so you still have room to move and cook comfortably.",
    ],
  },
  {
    uuid: "faq-oven-2",
    question: "Do you install pizza ovens for commercial applications?",
    answers: [
      "Yes. We build for homes and for commercial spaces, including restaurants, hospitality venues and outdoor entertainment areas.",
    ],
  },
  {
    uuid: "faq-oven-3",
    question:
      "Can a pizza oven be combined with an outdoor kitchen or BBQ area?",
    answers: [
      "Yes, and many of our projects do. We can build an oven into an outdoor kitchen with a BBQ, counters and prep space.",
    ],
  },
  {
    uuid: "faq-oven-4",
    question: "How do you ensure consistent cooking performance?",
    answers: [
      "It comes down to the build: heat-resistant materials and a design that holds heat well. A well-built oven keeps steady temperatures, so cooking is predictable.",
    ],
  },
  {
    uuid: "faq-oven-5",
    question: "Can the pizza oven design be customized?",
    answers: [
      "Yes. We tailor the size, shape, finish and style to your project so it fits your space and the way you cook.",
    ],
  },
  {
    uuid: "faq-oven-6",
    question: "How long before I can use my new pizza oven after installation?",
    answers: [
      "A new oven needs time to cure. The masonry and mortar have to dry out slowly, and the first fires need to be small and gradual to avoid cracking. When your oven is finished, we'll give you a curing and first-use schedule for it.",
    ],
  },
  {
    uuid: "faq-oven-7",
    question: "How long does it take to build a custom pizza oven?",
    answers: [
      "Most builds take from one to a few weeks, depending on size, design and materials. After we review your project, we'll give you a more exact timeline.",
    ],
  },
  {
    uuid: "faq-oven-8",
    question: "Is brick or natural stone better for a pizza oven?",
    answers: [
      "Both work well. Firebrick lines the inside of most ovens, and stone or brick is used on the outside. For the outside, the choice mostly comes down to style and how the oven fits your yard. We'll go through the options during planning.",
    ],
  },
  {
    uuid: "faq-oven-9",
    question:
      "What should I ask a contractor before starting my pizza oven project?",
    answers: [
      "Ask how many pizza ovens they've built, how long the build will take, what materials they use and how they handle heat and durability. We're happy to go through all of this at the first consultation.",
    ],
  },
  {
    uuid: "faq-oven-10",
    question: "Are there eco-friendly material options for a custom pizza oven?",
    answers: [
      "Yes. Eco-friendly and sustainably produced masonry materials are available for pizza ovens. We can talk through the options when we design your oven.",
    ],
  },
];

// Section MATERIALS baru (lihat sheet "CUSTOM PIZZA OVEN" baris 10-19)
const pizzaOvenMaterials = [
  {
    icon: "flaticon-mansory",
    title: "Heat-Resistant Brick",
    text: "Firebrick is the traditional choice for the inside of the oven. It holds heat well and releases it evenly, which gives steady cooking temperatures.",
  },
  {
    icon: "flaticon-cube",
    title: "Natural Stone",
    text: "Often used for the outside and the surrounding structure. It's tough, textured and looks at home in a backyard.",
  },
  {
    icon: "flaticon-facade",
    title: "Stone Veneer & Brick Finishes",
    text: "If you like the look of stone or brick but want less weight, veneer gives you the same look with a strong, long-lasting finish.",
  },
  {
    icon: "flaticon-houses",
    title: "Eco-Friendly Material Options",
    text: "We can source eco-friendly and sustainably produced masonry materials if that matters to you, with no loss in performance.",
  },
];

// Tahapan proses spesifik untuk Custom Pizza Oven
const pizzaOvenProcessSteps = [
  {
    image: "/images/services/service/custome_pizza/2.webp",
    title: "Assess the Space",
    text: "We look at your layout and how you plan to cook.",
  },
  {
    image: "/images/services/service/custome_pizza/3.webp",
    title: "Plan the Installation",
    text: "We design the oven around your space and needs.",
  },
  {
    image: "/images/services/service/custome_pizza/4.webp",
    title: "Build the Custom Pizza Oven",
    text: "We build it with a focus on structure, heat performance and durability.",
  },
  {
    image: "/images/services/service/custome_pizza/5.webp",
    title: "Final Finish",
    text: "We finish the oven cleanly so it's ready for outdoor use.",
  },
];

// Overview spesifik untuk Custom Pizza Oven
const pizzaOvenOverviewItems = [
  {
    image: "/images/services/service/custome_pizza/6.webp",
    titleNormal: "Wood-Fired",
    titleHighlight: "Pizza Ovens",
  },
  {
    image: "/images/services/service/custome_pizza/7.webp",
    titleNormal: "Custom Masonry",
    titleHighlight: "Oven Builds",
  },
];

// Testimonial klien spesifik untuk Custom Pizza Oven
const pizzaOvenFeedbacks = [
  {
    feedbackText:
      "I'd wanted a wood-fired pizza oven for a long time, but never knew where to start. DMG Masonry helped us come up with a design that fit our backyard without taking over the whole space.",
    name: "Matt R.",
  },
  {
    feedbackText:
      "The finished pizza oven looks really clean and fits the space perfectly.",
    name: "Hannah M.",
  },
];


export const metadata = buildMetadata({
  title: "Outdoor Pizza Ovens Calgary – Custom Wood-Fired Builds – DMG",
  description:
    "Custom wood-fired outdoor pizza ovens built in Calgary, for homes and commercial projects. Request a quote or call 1-403-619-8727.",
  path: "/calgary/custom-pizza-oven/",
  image: "/images/services/service/custome_pizza/1.webp",
});

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle title="Custom Pizza Oven" homeText="Home" homeUrl="/" />

      <ServiceDetailsContent
        mainImage="/images/services/service/custome_pizza/1.webp"
        title="Custom Outdoor Pizza Ovens in Calgary"
        description="A pizza oven turns a backyard into the place everyone ends up. We design and build custom wood-fired pizza ovens for homes and commercial properties in Calgary, sized and styled to fit your space."
        paragraphs={[
          "Pizza ovens run very hot and sit outside through Calgary winters, so the materials and the construction matter. We build with heat-resistant masonry that holds heat well and stands up to repeated use and freeze-thaw weather.",
          "A good oven becomes the centre of the yard. We plan where it sits and how you'll use it, so it looks like part of the space instead of something dropped in.",
        ]}
        benefits={[
          "Custom Pizza Oven Design & Build",
          "Built-In Outdoor Cooking Systems",
          "Residential & Commercial Pizza Oven Builds",
          "Durable Heat-Resistant Masonry",
        ]}
        extraParagraphs={[
          "Every build starts with how you'll use it: how often you cook, how many people you cook for, and how much room you have. We design around that.",
          "Then comes the construction. We plan how heat moves through the oven and how each material handles sustained high temperatures, and build it layer by layer for a clean finish that holds up outdoors.",
          "Precision matters. A well-built oven heats evenly, stays stable and lasts.",
        ]}
      />

      <MaterialsSection
        title="Materials for Wood-Fired Pizza Ovens"
        description="A pizza oven runs hotter for longer than almost anything else in a backyard, so the materials matter. Here's what we usually build with."
        items={pizzaOvenMaterials}
      />

      <ProcessSteps
        title="How We Build Your Outdoor Pizza Oven in Calgary"
        steps={pizzaOvenProcessSteps}
      />

      <ServiceGallery items={pizzaOvenOverviewItems} />

      <TestimonialSlider
        titleNormal="Calgary Pizza Oven"
        titleHighlight="Reviews"
        feedbacks={pizzaOvenFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/custome_pizza/8.webp"
        title="Outdoor Pizza Ovens for North & South Calgary Backyards"
        description="A wood-fired oven brings warmth and a bit of ceremony to a backyard. We build custom ovens for homes across north and south Calgary, designed for steady heat and to match the style of your outdoor space."
        listItems={[
          "Custom-built pizza oven designs",
          "Reliable heat for consistent cooking",
          "Traditional wood-fired cooking experience",
          "Designed for outdoor gatherings",
          "Professional pizza oven installation in Calgary",
          "Built with durable, heat-resistant masonry materials",
          "Trusted by Calgary homeowners for outdoor living projects",
        ]}
        buttonText="Contact Our Team"
        buttonLink="/contact-us"
      />

      <FaqSection
        faqs={pizzaOvenFaqs}
        title="Pizza Oven Calgary FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/custome_pizza/9.webp"
          title="Build Your Ideal Outdoor Pizza Oven in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Ready to plan your oven? Tell us about your yard and how you like to cook. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}
