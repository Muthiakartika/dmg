"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/services";

import arrowIcon from "../../../public/images/arrow-right.svg";

const ITEMS_PER_PAGE = 6;

/** Paginated grid of every service on /services. */
export default function ServicesGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleServices = services.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document
      .querySelector(".services-wrap-area")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="services-wrap-area without-bg-color pt-100 pb-75">
      <div className="container">
        <div className="section-title-wrap">
          <span>SERVICES</span>
          <h2>We are here to guide you from the beginning to the end of your project.</h2>
        </div>

        <div className="row justify-content-center">
          {visibleServices.map((service) => (
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

        {totalPages > 1 && (
          <div className="services-pagination">
            <button
              className={`pagination-btn pagination-prev ${currentPage === 1 ? "disabled" : ""}`}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              &larr;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                onClick={() => goToPage(page)}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            ))}

            <button
              className={`pagination-btn pagination-next ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
