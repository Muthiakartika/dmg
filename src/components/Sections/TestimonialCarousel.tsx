import Image from "next/image";

import LazySwiper from "@/components/UI/LazySwiper";

import quoteIcon from "../../../public/images/client/quote.svg";
import type { Testimonial } from "./TestimonialSlider";

interface TestimonialCarouselProps {
  feedbacks: readonly Testimonial[];
}

/** Multi-card testimonial carousel (About page): 1, 2 or 3 cards per view. */
export default function TestimonialCarousel({ feedbacks }: TestimonialCarouselProps) {
  return (
    <div className="client-wrap-area pb-75">
      <div className="container">
        <div className="section-title-wrap">
          <span>REVIEWS</span>
          <h2>Our Clients Talk About Us & Believe In Our Work</h2>
        </div>
      </div>

      <div className="container-fluid">
        <LazySwiper
          className="client-swiper"
          options={{
            spaceBetween: 25,
            pagination: { clickable: true },
            autoplay: { delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true },
            breakpoints: {
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            },
          }}
          slides={feedbacks.map((feedback, index) => ({
            key: index,
            style: { paddingBottom: "30px" },
            content: (
              <div className="client-wrap-card">
                <div className="icon">
                  <Image src={quoteIcon} alt="quote" width={56} height={56} />
                </div>

                <p>{feedback.feedbackText}</p>

                <div className="info">
                  <div className="title ms-0">
                    <h3>{feedback.name}</h3>
                  </div>
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}
