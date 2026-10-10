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
  title: "Build Your Dream Home with Pro Masonry Contractor",
  description:
    "Our team offers masonry services throughout Calgary, from brick and stone repair to custom patios, fireplaces and fire pits built to last for many years.",
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
    text: "Reviewing your property and masonry needs.",
  },
  {
    image: processImg2,
    imageAlt: "Site & Material Planning ",
    title: "Site & Material Planning ",
    text: "Coordinating materials and project preparation.",
  },
  {
    image: processImg3,
    imageAlt: "Professional Installation",
    title: "Professional Installation",
    text: "Delivering durable masonry with skilled workmanship.",
  },
  {
    image: processImg4,
    imageAlt: "Final Quality Review",
    title: "Final Quality Review",
    text: "Ensuring lasting quality and clean results.",
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
      "We provide complete masonry services in Calgary, including brick, stone, and concrete block construction for residential and commercial properties. Our work also includes masonry repairs, restorations, and custom installations designed to maintain long-term durability, timeless appearance, and lasting structural performance.",
    ],
  },
  {
    uuid: "faq-repair-2",
    question: "How do we know if masonry is the right choice for our project?",
    answers: [
      "Our team reviews your project goals, budget, property layout, and site conditions before recommending the most suitable masonry solution. We focus on helping clients choose materials and construction methods that provide timeless style, reliable durability, and long-term value for the property.",
    ],
  },
  {
    uuid: "faq-repair-3",
    question: "Can masonry withstand Calgary’s weather conditions?",
    answers: [
      "Yes, we work on both new masonry construction and repair projects. From cracked brickwork and deteriorated mortar to complete masonry installations, our goal is to restore or build masonry structures that remain functional, durable, and visually timeless for years to come.",
    ],
  },
  {
    uuid: "faq-repair-4",
    question: "Do you handle both new construction and masonry repairs?",
    answers: [
      "Yes, we work on both new masonry construction and repair projects. From cracked brickwork and deteriorated mortar to complete masonry installations, our goal is to restore or build masonry structures that remain functional, durable, and visually timeless for years to come.",
    ],
  },
  {
    uuid: "faq-repair-5",
    question: "How do we get started with a masonry project?",
    answers: [
      "Simply contact our team to discuss your project and masonry goals. We will review your needs, assess the site conditions, and provide professional guidance with a clear estimate so the project can move forward with careful planning and long-term performance in mind.",
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
            <span>How</span> We Work
          </>
        }
        steps={processSteps}
      />
      <TestimonialSlider feedbacks={feedbacks} />
      <FaqSection faqs={faqs} title="Frequently Asked Questions" />

      {/* Instagram wall via Behold: add a Feed ID and render
          <BeholdFeed feedId="..." /> from "@/components/Sections/BeholdFeed". */}

      <HomeContactSection />
      <Footer />
    </>
  );
}
