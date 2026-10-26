import Image from "next/image";

import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import { fadeUp } from "@/lib/aos";

import contactImg from "../../../public/images/main-banner/home/14.webp";
import shape from "../../../public/images/contact/shape.png";

/** "Start Your Masonry Project" form block on the home page. */
export default function HomeContactSection() {
  return (
    <div className="contact-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-12 pe-5" {...fadeUp(100)}>
            <div className="contact-image">
              <Image src={contactImg} alt="Fire burning in a small brick outdoor fireplace" width={700} height={1012} />
            </div>
          </div>

          <div className="col-lg-7 col-md-12 ps-5">
            <div className="contact-form-wrap" {...fadeUp(200)}>
              <div className="title">
                <h2>
                  <span>Request a Quote</span> from a Calgary Masonry Contractor
                </h2>
                <p>
                  Tell us about your project. We&apos;ll look at the site, talk through your
                  options and give you a clear quote. Call 1-403-619-8727 or send us a message.
                </p>
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
        {/* Decorative shape — empty alt */}
        <Image src={shape} alt="" width={116} height={82} />
      </div>
    </div>
  );
}
