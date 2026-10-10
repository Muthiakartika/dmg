import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/services";

import arrowIcon from "../../../public/images/arrow-right.svg";

/** Grid of every service on /services. */
export default function ServicesGrid() {
  return (
    <div className="services-wrap-area without-bg-color pt-100 pb-75">
      <div className="container">
        <div className="section-title-wrap">
          <span>SERVICES</span>
          <h2>Masonry Services for Calgary Homes & Businesses</h2>
        </div>

        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className="services-item">
                <div className="icon">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    style={{ borderRadius: "0px", objectFit: "cover" }}
                  />
                </div>
                <h3>
                  <Link href={service.link}>{service.title}</Link>
                </h3>
                <p>{service.text}</p>
                <Link href={service.link} className="services-btn">
                  <Image src={arrowIcon} alt="arrow-right" width={18} height={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
