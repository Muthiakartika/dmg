import Image from "next/image";
import Link from "next/link";

import { fadeUp, staggerDelay } from "@/lib/aos";

import arrowRightIcon from "../../../public/images/arrow-right.svg";

const offerings = [
  {
    icon: "flaticon-measuring",
    title: "Masonry Repair",
    link: "/calgary/masonry-repair/",
    text: "Fixes for cracked mortar, flaking brick and worn masonry, before water does more damage.",
  },
  {
    icon: "flaticon-mansory",
    title: "Masonry Restoration",
    link: "/calgary/masonry-repair/",
    text: "Bringing older brick and stone back to good condition while keeping the original look.",
  },
  {
    icon: "flaticon-interior-design",
    title: "Masonry Design",
    link: "/calgary/stone-veneer/",
    text: "Custom stonework and outdoor features, designed around your property.",
  },
];

/** Three service cards on the home page, each linking to the page for that service. */
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
            <span>Masonry Services</span> in Calgary
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
                  <Link href={offering.link}>{offering.title}</Link>
                </h3>
                <p>{offering.text}</p>
                <Link href={offering.link} className="services-btn" aria-hidden="true" tabIndex={-1}>
                  <Image src={arrowRightIcon} alt="" width={18} height={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
