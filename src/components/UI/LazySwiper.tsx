"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
} from "react";
import type { SwiperOptions } from "swiper/types";

export interface LazySlide {
  key: string | number;
  content: ReactNode;
  style?: CSSProperties;
}

export interface LazySwiperProps {
  className: string;
  /** Swiper parameters; the Autoplay and Pagination modules are always on. */
  options: SwiperOptions;
  slides: readonly LazySlide[];
}

/**
 * A Swiper slider whose script (~28 KB gzipped) is only downloaded once the
 * slider is a couple of screens away, so it stays out of the initial page
 * load. Until then it renders exactly the markup Swiper's own server render
 * produces, so the page looks the same and the first slide is in place.
 */
export default function LazySwiper({ className, options, slides }: LazySwiperProps) {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [Carousel, setCarousel] = useState<ComponentType<LazySwiperProps> | null>(null);

  useEffect(() => {
    const placeholder = placeholderRef.current;
    if (!placeholder) return;

    const load = () =>
      void import("./SwiperCarousel").then((module) => setCarousel(() => module.default));

    // Without IntersectionObserver (very old browsers) load right away rather
    // than leaving a slider that never starts.
    if (typeof IntersectionObserver === "undefined") {
      load();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        load();
      },
      { rootMargin: "1500px" },
    );
    observer.observe(placeholder);
    return () => observer.disconnect();
  }, []);

  if (Carousel) {
    return <Carousel className={className} options={options} slides={slides} />;
  }

  return (
    <div ref={placeholderRef} className={`swiper ${className}`}>
      <div className="swiper-wrapper">
        {slides.map((slide) => (
          <div className="swiper-slide" style={slide.style} key={slide.key}>
            {slide.content}
          </div>
        ))}
      </div>
      {options.pagination && <div className="swiper-pagination"></div>}
    </div>
  );
}
