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
              <Image src={contactImg} alt="contact" width={700} height={1012} />
            </div>
          </div>

          <div className="col-lg-7 col-md-12 ps-5">
            <div className="contact-form-wrap" {...fadeUp(200)}>
              <div className="title">
                <h2>
                  <span>Start Your</span> Masonry Project
                </h2>
                <p>
                  Let&apos;s discuss your masonry project and how we can help create a timeless
                  results for your property. Our team provides masonry solutions built for
                  lasting quality.
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
