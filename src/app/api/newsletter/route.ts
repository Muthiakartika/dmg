import type { NextRequest } from "next/server";

import { handleFormSubmission } from "@/lib/formRoute";
import { sendNewsletterNotification, sendNewsletterWelcome } from "@/lib/sendEmail";

export const runtime = "edge";

export function POST(request: NextRequest) {
  return handleFormSubmission(request, {
    fields: ["email"],
    missingFieldsMessage: "Email address is required.",
    requireTurnstile: false,
    successMessage:
      "You've been subscribed successfully! Check your inbox for a welcome email.",
    logLabel: "Newsletter subscription",
    // Welcome the subscriber and notify the admin(s) in parallel.
    send: ({ email }) =>
      Promise.all([sendNewsletterWelcome(email), sendNewsletterNotification(email)]),
  });
}
