import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import ArrowList from "@/components/UI/ArrowList";
import { fadeUp } from "@/lib/aos";

import arrowIcon from "../../../public/images/about/arrow2.svg";

interface WhyChooseUsProps {
  image: string | StaticImageData;
  subtitle?: string;
  title: string;
  description: string;
  listItems: readonly string[];
  buttonText: string;
  buttonLink: string;
}

/** Photo + selling points block near the end of each service page. */
export default function WhyChooseUs({
  image,
  subtitle = "WHY CHOOSE US",
  title,
  description,
  listItems,
  buttonText,
  buttonLink,
}: WhyChooseUsProps) {
  return (
    <div className="about-area pt-100">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="about-image-two" {...fadeUp(100)}>
              <Image src={image} alt="image" width={1052} height={1120} />
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="about-two-content" {...fadeUp(200)}>
              <span>{subtitle}</span>
              <h2>{title}</h2>
              <p>{description}</p>

              <ArrowList items={listItems} icon={arrowIcon} />

              <div className="about-btn">
                <Link href={buttonLink} className="default-btn">
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
