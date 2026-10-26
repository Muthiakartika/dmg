import CoreFeatures from "@/components/Home/CoreFeatures";
import HeroBanner from "@/components/Home/HeroBanner";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeContactSection from "@/components/Home/HomeContactSection";
import HomeOverview from "@/components/Home/HomeOverview";
import VideoSection from "@/components/Home/VideoSection";
import WhatWeDo from "@/components/Home/WhatWeDo";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import FaqSection, { type FaqItem } from "@/components/Sections/FaqSection";
import ProcessSteps, { type ProcessStep } from "@/components/Sections/ProcessSteps";
import TestimonialSlider, { type Testimonial } from "@/components/Sections/TestimonialSlider";
import TextMarquee from "@/components/Sections/TextMarquee";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

import processImg1 from "../../public/images/main-banner/home/10.webp";
import processImg2 from "../../public/images/main-banner/home/11.webp";
import processImg3 from "../../public/images/main-banner/home/12.webp";
import processImg4 from "../../public/images/main-banner/home/13.webp";

export const metadata = buildMetadata({
  title: "Masonry Contractors Calgary – Brick & Stone – DMG Masonry",
  description:
    "Calgary masonry contractors for brick and stone repair, restoration, fireplaces, fire pits and outdoor kitchens. Request a quote: 1-403-619-8727.",
  path: "/",
});

// Names the share image as this page's main image. The hero is a CSS
// background, which Google does not count as a page image, so without this the
// first <img> it found was the white-on-transparent navbar logo, and Search
// Console showed the homepage with a blank thumbnail.
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  url: `${siteConfig.url}/`,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${siteConfig.url}${siteConfig.ogImage}`,
  },
};

const processSteps: ProcessStep[] = [
  {
    image: processImg1,
    imageAlt: "Concrete block walls going up inside a building under construction",
    title: "Project Consultation",
    text: "We look at your property and talk through what you need.",
  },
  {
    image: processImg2,
    imageAlt: "Rectangular stacked-stone fire pit on a concrete patio",
    title: "Site & Material Planning ",
    text: "We plan the schedule and order the materials.",
  },
  {
    image: processImg3,
    imageAlt: "Brick garden wall under construction with mortar and tools",
    title: "Professional Installation",
    text: "We do the work and keep you updated as we go.",
  },
  {
    image: processImg4,
    imageAlt: "Stacked-stone outdoor kitchen with a built-in oven and stone emblem",
    title: "Final Quality Review",
    text: "We check the finished work with you and clean up the site.",
  },
];

const feedbacks: Testimonial[] = [
  {
    feedbackText:
      "We had a few areas that needed repair, and everything was taken care of without any hassle. The team was easy to work with, kept us updated, and the finished work matched the original brick really well.",
    name: "Michael R.",
  },
  {
    feedbackText:
      "The whole process was smooth from start to finish. They showed up on time, answered all of our questions, and made sure everything was cleaned up before they left.",
    name: "Lisa M.",
  },
  {
    feedbackText:
      "I appreciated how straightforward everything was. The quote was clear and the work turned out exactly as discussed.",
    name: "Kevin B.",
  },
];

const faqs: FaqItem[] = [
  {
    uuid: "faq-home-1",
    question: "What does a masonry contractor do?",
    answers: [
      "A masonry contractor builds and repairs structures made of brick, stone and concrete block: walls, chimneys, fireplaces, patios, retaining walls, outdoor kitchens and foundations. DMG Masonry does repairs and restoration as well as custom builds, for homes and commercial properties in Calgary.",
    ],
  },
  {
    uuid: "faq-home-2",
    question: "How do I choose a masonry company in Calgary?",
    answers: [
      "Choose a contractor who visits before quoting, explains what's causing the damage, gives you a clear quote listing what's included, can show photos of similar work, and has reviews from local customers. They should also tell you what can wait. That's how we work on every job.",
    ],
  },
  {
    uuid: "faq-home-3",
    question: "What masonry services do you provide in Calgary?",
    answers: [
      "Brick, stone and block repair and restoration, including [chimney repair](/calgary/chimney-repair/) and [foundation repair](/calgary/foundation-repair/), plus custom builds: fireplaces, [fire pits](/calgary/custom-fire-pits/), pizza ovens, outdoor kitchens, patios and [retaining walls](/calgary/retaining-wall-construction/).",
    ],
  },
  {
    uuid: "faq-home-4",
    question: "Can masonry stand up to Calgary's weather?",
    answers: [
      "Yes, when it's built and maintained properly. Brick and stone resist weather, moisture and fire. The main threat in Calgary is freeze-thaw: Chinooks melt snow during the day, the water soaks into small cracks and freezes again at night, widening them. Sound mortar joints, good crowns and caps, and prompt repairs keep that in check.",
    ],
  },
  {
    uuid: "faq-home-5",
    question: "Do you work outside Calgary?",
    answers: [
      "Yes. Besides Calgary, we do chimney repair in Bragg Creek, Kananaskis, Longview, Sundre, Three Hills, Drumheller and Claresholm, and take on masonry projects elsewhere in Alberta. Tell us your location when you get in touch.",
    ],
  },
  {
    uuid: "faq-home-6",
    question: "How do we get started with a masonry project?",
    answers: [
      "Call 1-403-619-8727 or send the form with a few details and photos. We'll look at the site, talk through your options and give you a clear quote.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Navbar variant="home" />
      <HeroBanner />
      <HomeAbout />
      <WhatWeDo />
      <HomeOverview />
      <CoreFeatures />
      <VideoSection />
      <TextMarquee />
      <ProcessSteps
        title={
          <>
            <span>How Our</span> Calgary Masonry Projects Work
          </>
        }
        steps={processSteps}
      />
      <TestimonialSlider
        feedbacks={feedbacks}
        titleNormal="Calgary Masonry"
        titleHighlight="Contractor Reviews"
      />
      <FaqSection faqs={faqs} title="Masonry Contractors Calgary: FAQs" />

      {/* Instagram wall via Behold: add a Feed ID and render
          <BeholdFeed feedId="..." /> from "@/components/Sections/BeholdFeed". */}

      <HomeContactSection />
      <Footer />
    </>
  );
}
