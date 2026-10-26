"use client";

import { useEffect } from "react";

type GtagWindow = Window & { dataLayer?: unknown[] };

/** Sends a GA4 event. Queued in dataLayer, so it is not lost if gtag.js has not loaded yet. */
function sendEvent(name: string, params: Record<string, string>) {
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  // gtag.js only understands `arguments` objects, not arrays.
  (function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  })("event", name, params);
}

/**
 * GA4 events for clicks on WhatsApp links: `whatsapp_float_click` for the
 * floating button and `whatsapp_link_click` for every other wa.me link. These
 * replace the two tags that lived in the Google Tag Manager container.
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      const href = anchor?.getAttribute("href") ?? "";
      if (!anchor || !href.includes("wa.me")) return;

      sendEvent(anchor.id === "whatsapp-float" ? "whatsapp_float_click" : "whatsapp_link_click", {
        link_url: href,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
