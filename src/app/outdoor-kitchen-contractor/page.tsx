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

// Data FAQ khusus untuk halaman Outdoor Kitchen
const outdoorKitchenFaqs = [
  {
    uuid: "faq-kitchen-1",
    question: "Can you build outdoor kitchens for smaller outdoor spaces?",
    answers: [
      "Yes. We design outdoor kitchens to make the most of the space, with room to move and cook. Even a compact Calgary backyard can fit an efficient outdoor kitchen.",
    ],
  },
  {
    uuid: "faq-kitchen-2",
    question: "Do you install built-in BBQ features and appliances?",
    answers: [
      "Yes. We build outdoor BBQ kitchens with built-in grills, sinks, storage, pizza ovens and other appliances, based on your design.",
    ],
  },
  {
    uuid: "faq-kitchen-3",
    question: "Are outdoor kitchens built to withstand weather conditions?",
    answers: [
      "Yes. We use durable materials and construction made for outdoor use, including moisture, heat and Calgary's seasonal changes.",
    ],
  },
  {
    uuid: "faq-kitchen-4",
    question: "Can outdoor kitchens include seating and lighting areas?",
    answers: [
      "Yes. Many of our projects include bar seating, prep areas and lighting.",
    ],
  },
  {
    uuid: "faq-kitchen-5",
    question: "How much does an outdoor kitchen cost in Calgary?",
    answers: [
      "It depends on the layout, materials, size and features. We give you a clear, detailed quote, so you know the scope and cost before work begins.",
    ],
  },
];

// Komponen outdoor kitchen - section tanya-jawab baru (AEO)
const outdoorKitchenComponents = [
  {
    title: "Built-in BBQ grill",
    text: "The grill is the anchor and everything else is planned around it. A built-in unit sits flush in a masonry surround rather than standing on wheels, which is what turns a barbecue into a kitchen.",
  },
  {
    title: "Prep counters and landing space",
    text: "The most common regret on a small outdoor kitchen is not enough counter. Landing space either side of the grill is what makes it usable for actual cooking rather than just grilling.",
  },
  {
    title: "Storage and access doors",
    text: "Weatherproof cabinets and drawers keep tools, charcoal and covers outside instead of being carried back and forth from the house. Stainless access doors are the usual choice for Calgary weather.",
  },
  {
    title: "Sink and water",
    text: "A sink is optional and adds plumbing, including winterisation so the line can be drained before frost. Worth planning if the kitchen is far from the back door.",
  },
  {
    title: "Refrigeration",
    text: "Outdoor-rated fridges exist and work, but they need power and most are pulled for winter. We plan the electrical either way so the option stays open.",
  },
  {
    title: "Pizza oven or side burner",
    text: "A masonry pizza oven or a side burner extends what the kitchen can do. These are built in from the start rather than added later, so it is worth deciding early.",
  },
  {
    title: "Bar seating and lighting",
    text: "Bar seating turns the kitchen into somewhere people gather rather than somewhere one person works. Lighting is what determines whether it gets used after dark.",
  },
];

// Tahapan proses spesifik untuk Outdoor Kitchen
const outdoorKitchenProcessSteps = [
  {
    image: "/images/services/service/outdoor_kitchen/2.webp",
    title: "Assess The Space",
    text: "We look at your layout, what you need and the outdoor area available.",
  },
  {
    image: "/images/services/service/outdoor_kitchen/3.webp",
    title: "Plan The Setup",
    text: "We plan the cooking setup, materials and layout.",
  },
  {
    image: "/images/services/service/outdoor_kitchen/4.webp",
    title: "Build The Kitchen",
    text: "We build the BBQ and cooking areas with durable materials.",
  },
  {
    image: "/images/services/service/outdoor_kitchen/5.webp",
    title: "Finalize The Details",
    text: "We finish the details so it's easy to use and looks clean.",
  },
];

// Overview spesifik untuk Outdoor Kitchen
const outdoorKitchenOverviewItems = [
  {
    image: "/images/services/service/outdoor_kitchen/6.webp",
    titleNormal: "Built-In",
    titleHighlight: "BBQ Grills",
  },
  {
    image: "/images/services/service/outdoor_kitchen/7.webp",
    titleNormal: "Custom Stone",
    titleHighlight: "Counters",
  }
];

// Testimonial klien spesifik untuk Outdoor Kitchen
const outdoorKitchenFeedbacks = [
  {
    feedbackText:
      "We didn't have a huge backyard, so I wasn't sure an outdoor kitchen would work. The layout ended up making great use of the space without feeling crowded.",
    name: "Jason W.",
  },
  {
    feedbackText:
      "Summer dinners have become a lot more fun since the project was finished. Instead of running back and forth between the house and the patio, everything we need is right outside.",
    name: "Olivia C.",
  },
];


export const metadata = buildMetadata({
  title: "Outdoor Kitchens Calgary – Custom BBQ & Patio Kitchens – DMG",
  description:
    "Custom outdoor kitchens and built-in BBQs in Calgary, planned with layout, materials and cost upfront. Request a quote or call 1-403-619-8727.",
  path: "/outdoor-kitchen-contractor/",
  image: "/images/services/service/outdoor_kitchen/1.webp",
});

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle
        title="Outdoor Kitchen Contractor"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent
        mainImage="/images/services/service/outdoor_kitchen/1.webp"
        mainImageFocus="60%"
        title="Outdoor Kitchens in Calgary: Custom BBQ & Patio Kitchen Contractor"
        description="DMG Masonry builds outdoor kitchens in Calgary. An outdoor kitchen puts cooking, dining and gathering in one place, so nobody is running back and forth to the house. We build BBQ areas and full outdoor kitchens in masonry, designed around your patio."
        paragraphsHeading="Outdoor Kitchen Ideas for Calgary Patios"
        paragraphs={[
          "An outdoor kitchen is a permanent cooking and dining area, usually a BBQ grill, prep counters, storage and seating built into one masonry structure. It sits outside all year, through heat, moisture and Calgary's temperature swings, so we build it with durable materials and sound construction.",
          "A good layout is what makes it work. From built-in grills and prep counters to bar seating, we plan each feature so the space is comfortable to use and fits your yard.",
        ]}
        benefits={[
          "Layouts planned around you",
          "BBQ and entertaining built in",
          "Made for outdoor use",
          "For everyday cooking",
        ]}
        extraParagraphsHeading="Planning Your Outdoor Kitchen: Layout, Materials & Cost"
        extraParagraphs={[
          "Planning comes first. We look at how you cook, how much space you have and which materials suit your property, then design for how the kitchen will be used day to day.",
          "We build everything from a simple BBQ station to a full outdoor cooking setup, across north and south Calgary.",
          "Cost depends on the layout, the materials, the size and the features. We give you a clear, detailed quote, so you know what's included before work starts.",
        ]}
      />

      <ProcessSteps
        title="How Does Our Outdoor Kitchen Build Process Work?"
        steps={outdoorKitchenProcessSteps}
      />

      <ServiceGallery items={outdoorKitchenOverviewItems} />

      <MaterialsSection
        subtitle="FEATURES"
        title="Built-In BBQ Grills, Counters & Features"
        items={outdoorKitchenComponents}
      />

      <TestimonialSlider
        titleNormal="Calgary Outdoor"
        titleHighlight="Kitchen Reviews"
        feedbacks={outdoorKitchenFeedbacks}
      />

      <WhyChooseUs
        image="/images/services/service/outdoor_kitchen/8.webp"
        title="Why Choose DMG Masonry For An Outdoor Kitchen In Calgary?"
        description="An outdoor kitchen works best when it's planned around how you cook and who you cook for. We build outdoor kitchens in Calgary with practical layouts, so the space gets used."
        listItems={[
          "Practical cooking layouts",
          "BBQ built in",
          "Space for people to gather",
          "Serving north and south Calgary",
        ]}
        buttonText="Talk to Our Team"
        buttonLink="/contact-us"
      />

      <FaqSection
        questionsAsHeadings
        faqs={outdoorKitchenFaqs}
        title="Outdoor Kitchens Calgary: FAQs"
      />

      <div className="ptb-100">
        <ContactSection
          image="/images/services/service/outdoor_kitchen/9.webp"
          title="Request an Outdoor Kitchen Quote in Calgary"
          subtitle="REQUEST A QUOTE"
          description="Tell us about your space and how you like to cook. Call 1-403-619-8727 or fill in the form."
        />
      </div>

      <Footer />
    </>
  );
}
