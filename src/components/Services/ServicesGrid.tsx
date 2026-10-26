import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/services";

import arrowIcon from "../../../public/images/arrow-right.svg";

interface ServicesGridProps {
  /** Short intro under the heading, above the cards. */
  description?: string;
}

/** Grid of every service on /services. */
export default function ServicesGrid({ description }: ServicesGridProps) {
  return (
    <div className="services-wrap-area without-bg-color pt-100 pb-75">
      <div className="container">
        <div className="section-title-wrap">
          <span>SERVICES</span>
          <h2>Masonry Services for Calgary Homes & Businesses</h2>
          {description && <p>{description}</p>}
        </div>

        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className="services-item">
                <div className="icon">
                  <Image
                    src={service.icon}
                    alt=""
                    width={80}
                    height={80}
                    style={{ borderRadius: "0px", objectFit: "cover" }}
                  />
                </div>
                <h3>
                  <Link href={service.link}>{service.title}</Link>
                </h3>
                <p>{service.text}</p>
                <Link href={service.link} className="services-btn" aria-hidden="true" tabIndex={-1}>
                  <Image src={arrowIcon} alt="" width={18} height={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
