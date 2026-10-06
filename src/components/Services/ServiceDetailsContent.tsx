import Image, { type StaticImageData } from "next/image";

import ArrowList from "@/components/UI/ArrowList";
import ServiceSidebar from "./ServiceSidebar";

import arrowIcon from "../../../public/images/services-details/arrow.svg";

interface ServiceDetailsContentProps {
  title: string;
  subtitle?: string;
  mainImage: string | StaticImageData;
  description: string;
  /** Question-form h2 introducing `paragraphs`. */
  paragraphsHeading?: string;
  paragraphs: readonly string[];
  /** Shown as two arrow lists side by side. */
  benefits: readonly string[];
  /** Question-form h2 introducing `extraParagraphs`. */
  extraParagraphsHeading?: string;
  extraParagraphs: readonly string[];
}

/** Main article of a service page, with the other services in a sidebar. */
export default function ServiceDetailsContent({
  title,
  subtitle = "SERVICE",
  mainImage,
  description,
  paragraphsHeading,
  paragraphs,
  benefits,
  extraParagraphsHeading,
  extraParagraphs,
}: ServiceDetailsContentProps) {
  const firstColumnSize = Math.ceil(benefits.length / 2);

  return (
    <div className="services-details-area pt-100 pb-100">
      <div className="container">
        <div className="row justify-content-left">
          <div className="col-lg-8 col-md-12">
            <div className="services-details-desc">
              <div className="title">
                <span>{subtitle}</span>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>

              {/* The banner is the LCP element on every page that renders this
                  component, so it must not be lazy-loaded: `priority` marks it
                  eager and sets fetchpriority="high". */}
              <Image src={mainImage} alt={title} width={1400} height={645} priority />

              {paragraphsHeading && <h2 className="body-question">{paragraphsHeading}</h2>}

              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-6">
                  <ArrowList items={benefits.slice(0, firstColumnSize)} icon={arrowIcon} />
                </div>

                <div className="col-lg-6 col-sm-6">
                  <ArrowList items={benefits.slice(firstColumnSize)} icon={arrowIcon} />
                </div>
              </div>

              {extraParagraphsHeading && (
                <h2 className="body-question">{extraParagraphsHeading}</h2>
              )}

              {extraParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-12">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
