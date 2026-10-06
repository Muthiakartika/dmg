"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { services } from "@/lib/services";

import arrowIcon from "../../../public/images/arrow-right.svg";

const withoutTrailingSlash = (path: string) => path.replace(/\/$/, "");

/** Links to every service except the one being viewed. */
export default function ServiceSidebar() {
  const pathname = withoutTrailingSlash(usePathname());
  const otherServices = services.filter(
    (service) => withoutTrailingSlash(service.link) !== pathname,
  );

  return (
    <ul className="services-details-info-side">
      {otherServices.map((service) => (
        <li className="d-flex align-items-center justify-content-between" key={service.id}>
          <Link href={service.link}>{service.title}</Link>
          <Link href={service.link}>
            <Image src={arrowIcon} alt="arrow-right" width={18} height={18} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
