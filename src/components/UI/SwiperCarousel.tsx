"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import type { LazySwiperProps } from "./LazySwiper";

/** The real slider behind LazySwiper. Only ever loaded through its dynamic import. */
export default function SwiperCarousel({ className, options, slides }: LazySwiperProps) {
  return (
    <Swiper {...options} modules={[Autoplay, Pagination]} className={className}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.key} style={slide.style}>
          {slide.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
