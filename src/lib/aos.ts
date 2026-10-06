/**
 * Attributes for the AOS "fade-up" reveal used by every animated block on the
 * site (always 600ms). AOS itself is initialised once in the root layout.
 *
 * `once: false` makes the block hide again when scrolled back above it — only
 * the hero copy and the service gallery cards use that.
 */
export function fadeUp(delay: number, { once = true }: { once?: boolean } = {}) {
  return {
    "data-aos": "fade-up",
    "data-aos-delay": String(delay),
    "data-aos-duration": "600",
    "data-aos-once": String(once),
  };
}

/** Stagger delay for the n-th item of a list: 100ms, 200ms, 300ms… */
export function staggerDelay(index: number) {
  return (index + 1) * 100;
}
