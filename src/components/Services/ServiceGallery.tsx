import Image, { type StaticImageData } from "next/image";

import { fadeUp, staggerDelay } from "@/lib/aos";

export interface ServiceGalleryItem {
  image: string | StaticImageData;
  titleNormal: string;
  titleHighlight: string;
}

interface ServiceGalleryProps {
  items: readonly ServiceGalleryItem[];
}

/** Two captioned photos side by side, below the process steps. */
export default function ServiceGallery({ items }: ServiceGalleryProps) {
  return (
    <div className="overview-area wrap-color pt-100">
      <div className="container">
        <div className="overview-inner-area">
          <div className="row justify-content-center">
            {items.map((item, index) => (
              <div
                className="col-lg-6 col-md-6"
                {...fadeUp(staggerDelay(index), { once: false })}
                key={index}
              >
                <div className="overview-card">
                  <div className="image">
                    <Image src={item.image} alt={item.titleNormal} width={1320} height={780} />
                  </div>
                  <h3>
                    {item.titleNormal} <span>{item.titleHighlight}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
