import type { Metadata } from "next";
import { notFound } from "next/navigation";

import WhyChooseUs from "@/components/Services/WhyChooseUs";
import PageTitle from "@/components/Sections/PageTitle";
import ContactSection from "@/components/Contact/ContactSection";
import FaqSection from "@/components/Sections/FaqSection";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import JsonLd from "@/components/UI/JsonLd";
import ProcessSteps from "@/components/Sections/ProcessSteps";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import ServiceGallery from "@/components/Services/ServiceGallery";
import {
  chimneyRepairLocations,
  getChimneyRepairLocation,
} from "@/lib/chimneyRepairLocations";
import { chimneyTownSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

interface ChimneyLocationPageProps {
  params: { location: string };
}

const chimneyProcessTitles = [
  "Inspect The Chimney",
  "Plan The Repair",
  "Restore The Masonry",
  "Finish & Protect",
];

const chimneyOverviewItems = [
  {
    image: "/images/services/service/chimney_repair/6.webp",
    titleNormal: "Cap/Crown",
    titleHighlight: "Repair",
  },
  {
    image: "/images/services/service/chimney_repair/7.webp",
    titleNormal: "Tuckpointing",
    titleHighlight: "Restoration",
  },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return chimneyRepairLocations.map((location) => ({
    location: location.slug,
  }));
}

export function generateMetadata({
  params,
}: ChimneyLocationPageProps): Metadata {
  const location = getChimneyRepairLocation(params.location);

  if (!location) {
    return {};
  }

  return buildMetadata({
    title: location.metadataTitle,
    description: location.metadataDescription,
    path: `/calgary/chimney-repair/${location.slug}/`,
    image: location.images.main,
  });
}

export default function ChimneyLocationPage({
  params,
}: ChimneyLocationPageProps) {
  const location = getChimneyRepairLocation(params.location);

  if (!location) {
    notFound();
  }

  const processSteps = chimneyProcessTitles.map((title, index) => ({
    title,
    text: location.processTexts[index],
    image: location.images.process[index],
  }));

  const faqs = location.faqs.map((faq, index) => ({
    uuid: `faq-${location.slug}-${index + 1}`,
    question: faq.question,
    answers: [faq.answer],
  }));

  // The page's meta description without its closing call to action.
  const schemaDescription = location.metadataDescription.replace(/\s*Call 1-403-619-8727\.$/, "");

  return (
    <>
      <JsonLd
        data={chimneyTownSchema({
          name: location.name,
          slug: location.slug,
          description: schemaDescription,
        })}
      />

      <Navbar />

      <PageTitle
        title={`Chimney Repair in ${location.name}`}
        homeText="Chimney Repair"
        homeUrl="/calgary/chimney-repair/"
      />

      <ServiceDetailsContent
        mainImage={location.images.main}
        mainImageFocus={location.images.mainFocus}
        title={`Chimney Repair in ${location.name}, Alberta`}
        description={location.description}
        paragraphs={location.paragraphs}
        benefits={location.benefits}
        extraParagraphs={location.extraParagraphs}
        sections={[
          {
            heading: location.problemsHeading,
            blocks: location.problems.map((problem) => ({ type: "h3" as const, ...problem })),
          },
        ]}
      />

      <ProcessSteps
        title={`Our ${location.name} Chimney Repair Process`}
        steps={processSteps}
      />

      <ServiceGallery items={chimneyOverviewItems} />

      <WhyChooseUs
        image={location.images.whyChoose}
        title={location.whyChooseTitle}
        description={location.whyChooseDescription}
        listItems={location.whyChooseItems}
        buttonText="Request an Assessment"
        buttonLink="/contact-us/"
      />

      <FaqSection
        faqs={faqs}
        title={`Chimney Repair FAQs for ${location.name}`}
      />

      <div className="ptb-100">
        <ContactSection
          image={location.images.contact}
          title={`Request a Chimney Repair Estimate in ${location.name}`}
          subtitle="REQUEST A QUOTE"
          description={`Seeing cracks or a leak? Send us your ${location.name} address and a few photos, and we'll arrange an inspection. Call 1-403-619-8727 or fill in the form.`}
        />
      </div>

      <Footer />
    </>
  );
}
