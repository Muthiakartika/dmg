"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";

type ViewportImageProps = Omit<ImageProps, "width" | "height" | "loading"> & {
  width: number;
  height: number;
};

/**
 * An image that is only requested when it is about to scroll into view. The
 * browser's own lazy loading starts fetching ~1250px early, which on the home
 * page meant a photo far below the hero was downloaded alongside it. Until
 * then a placeholder of the same size holds the layout.
 */
export default function ViewportImage({ width, height, ...imageProps }: ViewportImageProps) {
  const placeholder = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = placeholder.current;
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
      { rootMargin: "100px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (visible) {
    return <Image width={width} height={height} {...imageProps} />;
  }

  // Sized like the <img> it stands in for: its width attribute capped by the
  // container, with the height following from the aspect ratio.
  return (
    <span
      ref={placeholder}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        width,
        maxWidth: "100%",
        aspectRatio: `${width} / ${height}`,
      }}
    />
  );
}
