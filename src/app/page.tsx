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
    imageAlt: "Project Consultation",
    title: "Project Consultation",
    text: "We look at your property and talk through what you need.",
  },
  {
    image: processImg2,
    imageAlt: "Site & Material Planning ",
    title: "Site & Material Planning ",
    text: "We plan the schedule and order the materials.",
  },
  {
    image: processImg3,
    imageAlt: "Professional Installation",
    title: "Professional Installation",
    text: "We do the work and keep you updated as we go.",
  },
  {
    image: processImg4,
    imageAlt: "Final Quality Review",
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
    uuid: "faq-repair-1",
    question: "What masonry services do you provide in Calgary?",
    answers: [
      "Brick, stone and concrete block work for homes and commercial properties. That covers repairs and restoration, plus custom builds such as fireplaces, fire pits, pizza ovens, outdoor kitchens, patios and retaining walls.",
    ],
  },
  {
    uuid: "faq-repair-2",
    question: "How do we know if masonry is the right choice for our project?",
    answers: [
      "Tell us what you're planning. We'll look at your goals, budget, property and site conditions, then recommend the materials and building method that fit.",
    ],
  },
  {
    uuid: "faq-repair-3",
    question: "Can masonry withstand Calgary’s weather conditions?",
    answers: [
      "Yes, when it's built and looked after properly. Brick and stone resist weather, moisture and fire. The main threat in Calgary is freeze-thaw: water gets into small cracks, freezes and makes them wider. Sound mortar joints and quick repairs keep that in check.",
    ],
  },
  {
    uuid: "faq-repair-4",
    question: "Do you handle both new construction and masonry repairs?",
    answers: [
      "Yes. We repair cracked brick and worn mortar, and we build new masonry such as fireplaces, patios and outdoor kitchens.",
    ],
  },
  {
    uuid: "faq-repair-5",
    question: "How do we get started with a masonry project?",
    answers: [
      "Contact us with a few details about your project. We'll look at the site and give you a clear estimate.",
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
