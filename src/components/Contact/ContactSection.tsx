import Image, { type StaticImageData } from "next/image";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { fadeUp } from "@/lib/aos";

import defaultImage from "../../../public/images/contact/contact.png";
import shape from "../../../public/images/contact/shape.png";

/** Bootstrap's lg breakpoint, where the photo and form sit side by side. */
const LG_UP_QUERY = "(min-width: 992px)";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  image?: string | StaticImageData;
  /**
   * Load the side image eagerly. Only true on /contact-us, where this
   * form sits directly under the breadcrumb and the image is the LCP; on
   * the other pages that render this form it is far below the fold.
   */
  priorityImage?: boolean;
}

/** Photo + enquiry form block used at the bottom of the inner pages. */
export default function ContactSection({
  title = "Contact Our Team to Discuss Your Masonry Project",
  subtitle = "CONTACT",
  image = defaultImage,
  priorityImage = false,
}: ContactSectionProps) {
  // The default photo is a stock picture, not DMG's work. Beside the form it
  // fills the column, but once the columns stack (below lg) it takes a whole
  // phone screen above the form, so it is only shown from lg up. Pages that
  // pass their own project photo keep it at every width.
  const desktopOnly = image === defaultImage;

  return (
    <div className="contact-area bg-white-wrap">
      {/* A hidden image is still fetched when it is preloaded or eager, so the
          desktop-only photo gets a preload limited to lg and stays lazy. */}
      {priorityImage && desktopOnly && (
        <link
          rel="preload"
          as="image"
          href={defaultImage.src}
          fetchPriority="high"
          media={LG_UP_QUERY}
        />
      )}

      <div className="container">
        <div className="row justify-content-center">
          <div
            className={`col-lg-5 col-md-12 pe-5${desktopOnly ? " d-none d-lg-block" : ""}`}
            {...fadeUp(100)}
          >
            <div className="contact-image">
              <Image
                src={image}
                alt="contact"
                width={700}
                height={1012}
                priority={priorityImage && !desktopOnly}
              />
            </div>
          </div>

          <div className="col-lg-7 col-md-12 position-relative ps-5" {...fadeUp(200)}>
            <div className="contact-form-wrap">
              <div className="title">
                <span>{subtitle}</span>
                <h2>{title}</h2>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                  <ContactForm />
                </div>

                <div className="col-lg-5 col-md-6">
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-shape1">
        <Image src={shape} alt="image" width={116} height={82} />
      </div>
    </div>
  );
}
