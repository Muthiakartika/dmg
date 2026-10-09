import Image from "next/image";
import Link from "next/link";

import { fadeUp, staggerDelay } from "@/lib/aos";

import arrowRightIcon from "../../../public/images/arrow-right.svg";

const offerings = [
  {
    icon: "flaticon-measuring",
    title: "Masonry Repair",
    text: "Reliable masonry repairs for cracks, damage, and worn surfaces to keep your property safe and sound.",
  },
  {
    icon: "flaticon-mansory",
    title: "Masonry Restoration",
    text: "Restoring aging structures with precision while preserving their original appearance and strength.",
  },
  {
    icon: "flaticon-interior-design",
    title: "Masonry Design",
    text: "Designing custom masonry with detailed stonework and lasting outdoor features tailored to your vision.",
  },
];

/** Three service cards on the home page; all link to /services. */
export default function WhatWeDo() {
  return (
    <div className="services-area pb-75">
      <div className="container">
        <div
          className="section-title d-flex justify-content-between align-items-center"
          {...fadeUp(100)}
        >
          {/* Previous h2, kept in case the client wants it back:
              What <span>We Do</span> For You */}
          <h2>
            Our <span>Masonry Services</span>
          </h2>
          <Link href="/services">VIEW ALL SERVICES</Link>
        </div>

        <div className="row g-0 justify-content-center">
          {offerings.map((offering, index) => (
            <div className="col-lg-4 col-md-6" {...fadeUp(staggerDelay(index))} key={index}>
              <div className="services-card">
                <div className="icon">
                  <i className={offering.icon}></i>
                </div>
                <h3>
                  <Link href="/services">{offering.title}</Link>
                </h3>
                <p>{offering.text}</p>
                <Link href="/services" className="services-btn">
                  <Image src={arrowRightIcon} alt="arrow-right" width={18} height={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
