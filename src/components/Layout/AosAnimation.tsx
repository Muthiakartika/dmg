"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Starts AOS once for the whole app. AOS watches the DOM itself, so blocks
 * rendered by later client-side navigations are picked up automatically.
 * Elements opt in through the attributes from `fadeUp()` in lib/aos.ts.
 */
export default function AosAnimation() {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
}
