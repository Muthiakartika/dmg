import Image from "next/image";

import LazySwiper from "@/components/UI/LazySwiper";

import quoteIcon from "../../../public/images/client/quote.svg";
import shape1 from "../../../public/images/client/shape1.png";
import shape2 from "../../../public/images/client/shape2.png";

export interface Testimonial {
  feedbackText: string;
  name: string;
}

interface TestimonialSliderProps {
  feedbacks: readonly Testimonial[];
  /** Outlined first part of the heading. */
  titleNormal?: string;
  titleHighlight?: string;
}

/** Centred one-at-a-time testimonial slider (home and service pages). */
export default function TestimonialSlider({
  feedbacks,
  titleNormal = "Our Clients",
  titleHighlight = "Talk For Us",
}: TestimonialSliderProps) {
  return (
    <div className="client-area pt-100">
      <div className="container">
        <div className="section-title d-flex justify-content-center">
          <h2>
            <span>{titleNormal}</span> {titleHighlight}
          </h2>
        </div>

        {feedbacks.length > 0 && (
          <LazySwiper
            className="client-swiper"
            options={{
              pagination: { dynamicBullets: true, clickable: true },
              autoplay: { delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true },
            }}
            slides={feedbacks.map((feedback, index) => ({
              key: index,
              content: (
                <div className="client-content">
                  <div className="icon">
                    <Image src={quoteIcon} alt="quote" width={56} height={56} />
                  </div>
                  <p>{feedback.feedbackText}</p>

                  <div className="client-information">
                    <div className="title mt-0">
                      <h3>{feedback.name}</h3>
                    </div>
                  </div>
                </div>
              ),
            }))}
          />
        )}
      </div>

      <div className="client-shape1">
        <Image src={shape1} alt="shape" width={88} height={125} />
      </div>
      <div className="client-shape2">
        <Image src={shape2} alt="shape" width={116} height={82} />
      </div>
    </div>
  );
}
