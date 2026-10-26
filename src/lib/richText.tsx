import type { ReactNode } from "react";
import Link from "next/link";

// Page copy is kept as plain strings. Two bits of inline markup are understood:
//   [anchor text](/path/)  an in-text link, styled by .text-link
//   **bold**               <strong>, used for the lead-in of a list item
const INLINE_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

/** Renders a copy string, turning its inline markup into links and bold text. */
export function renderInline(text: string): ReactNode {
  if (!text.includes("](") && !text.includes("**")) {
    return text;
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  INLINE_PATTERN.lastIndex = 0;

  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    if (match[3] !== undefined) {
      nodes.push(<strong key={match.index}>{match[3]}</strong>);
    } else {
      nodes.push(
        <Link key={match.index} href={match[2]} className="text-link">
          {match[1]}
        </Link>,
      );
    }

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

/** The copy as plain text (link anchors kept, markup dropped), for JSON-LD and meta tags. */
export function plainText(text: string): string {
  return text.replace(INLINE_PATTERN, (_, anchor, _href, bold) => anchor ?? bold);
}
