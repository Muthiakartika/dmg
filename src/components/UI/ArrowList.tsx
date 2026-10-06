import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

interface ArrowListProps {
  items: readonly ReactNode[];
  /** Each section uses its own arrow artwork. */
  icon: StaticImageData;
}

/** The `ul.list` bullet list with a small arrow in front of each item. */
export default function ArrowList({ items, icon }: ArrowListProps) {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index}>
          <Image src={icon} alt="arrow" width={28} height={10} />
          {item}
        </li>
      ))}
    </ul>
  );
}
