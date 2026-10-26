"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";

interface LazyBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  /** Image painted as the div's background once it is about to scroll into view. */
  src: string;
}

/**
 * A div whose CSS background image is only requested when it is near the
 * viewport. An inline `background-image` is fetched at parse time, so on the
 * home page a photo far below the hero was competing with the hero image
 * (the LCP element) for bandwidth.
 */
export default function LazyBackground({ src, style, children, ...rest }: LazyBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={visible ? { ...style, backgroundImage: `url(${src})` } : style}
      {...rest}
    >
      {children}
    </div>
  );
}
