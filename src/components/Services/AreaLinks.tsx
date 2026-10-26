import Link from "next/link";

import { renderInline } from "@/lib/richText";

export interface AreaLink {
  label: string;
  href: string;
  /** What the page covers, shown after the link. */
  note: string;
}

interface AreaLinksProps {
  title: string;
  intro?: string;
  areas: readonly AreaLink[];
}

/** Heading and a list of links to nearby-town pages, shown before the FAQ. */
export default function AreaLinks({ title, intro, areas }: AreaLinksProps) {
  return (
    <div className="services-wrap-area without-bg-color materials-area area-links pt-100">
      <div className="container">
        <div className="section-title-wrap">
          <span>SERVICE AREAS</span>
          <div className="title-text">
            <h2>{title}</h2>
            {intro && <p>{renderInline(intro)}</p>}
          </div>
        </div>

        <ul className="area-links-list">
          {areas.map((area) => (
            <li key={area.href}>
              <Link href={area.href} className="text-link">
                {area.label}
              </Link>
              : {area.note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
