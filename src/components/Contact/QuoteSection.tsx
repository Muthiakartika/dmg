import Image from "next/image";

import ContactInfo from "./ContactInfo";
import QuoteForm from "./QuoteForm";

import contactImg from "../../../public/images/contact/contact2.png";

/** Photo + quote form block of /request-quote. */
export default function QuoteSection() {
  return (
    <div className="contact-area bg-white-wrap ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-12 pe-5">
            <div className="contact-image">
              <Image src={contactImg} alt="contact" width={700} height={1012} priority />
            </div>
          </div>

          <div className="col-lg-7 col-md-12 ps-5 position-relative">
            <div className="contact-form-wrap">
              <div className="title">
                <span>QUOTE</span>
                <h2>Request A Quote Now For Your Next Project</h2>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-7 col-md-6">
                  <QuoteForm />
                </div>

                <div className="col-lg-5 col-md-6">
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
