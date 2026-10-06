"use client";

import Link from "next/link";
import { useState } from "react";

import { services } from "@/lib/services";

interface ServicesNavigationProps {
  currentRoute: string;
}

function isCurrentRoute(currentRoute: string, link: string) {
  return currentRoute === link || currentRoute === `${link}/`;
}

function isServiceActive(currentRoute: string, link: string) {
  return isCurrentRoute(currentRoute, link) || currentRoute.startsWith(`${link}/`);
}

/** Items of the desktop "Services" dropdown (with the chimney town flyout). */
export function DesktopServicesNavigation({ currentRoute }: ServicesNavigationProps) {
  return (
    <>
      {services.map((service) => {
        const locations = service.locations ?? [];

        return (
          <li
            className={`nav-item ${locations.length ? "has-location-menu" : ""}`}
            key={service.id}
          >
            <Link
              href={service.link}
              className={`nav-link ${locations.length ? "dropdown-toggle" : ""} ${
                isServiceActive(currentRoute, service.link) ? "active" : ""
              }`}
            >
              {service.title}
            </Link>

            {locations.length > 0 && (
              <ul className="dropdown-menu chimney-location-menu">
                {locations.map((location) => (
                  <li className="nav-item" key={location.link}>
                    <Link
                      href={location.link}
                      className={`nav-link ${
                        isCurrentRoute(currentRoute, location.link) ? "active" : ""
                      }`}
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}

/** Items of the mobile "Services" accordion panel. */
export function MobileServicesNavigation({ currentRoute }: ServicesNavigationProps) {
  const [isLocationsOpen, setLocationsOpen] = useState(
    currentRoute.startsWith("/calgary/chimney-repair/"),
  );

  return (
    <>
      {services.map((service) => {
        const locations = service.locations ?? [];
        const linkClassName = `nav-link ${
          isServiceActive(currentRoute, service.link) ? "active" : ""
        }`;

        if (locations.length === 0) {
          return (
            <li key={service.id}>
              <Link href={service.link} className={linkClassName}>
                {service.title}
              </Link>
            </li>
          );
        }

        return (
          <li className="mobile-service-with-children" key={service.id}>
            <div className="mobile-service-row">
              <Link href={service.link} className={linkClassName}>
                {service.title}
              </Link>
              <button
                type="button"
                className="mobile-submenu-toggle"
                aria-expanded={isLocationsOpen}
                aria-label={`${isLocationsOpen ? "Hide" : "Show"} ${service.title} locations`}
                onClick={() => setLocationsOpen((open) => !open)}
              >
                <i className={isLocationsOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"} />
              </button>
            </div>

            {isLocationsOpen && (
              <ul className="mobile-chimney-locations">
                {locations.map((location) => (
                  <li key={location.link}>
                    <Link
                      href={location.link}
                      className={`nav-link ${
                        isCurrentRoute(currentRoute, location.link) ? "active" : ""
                      }`}
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}
