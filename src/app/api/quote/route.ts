import type { NextRequest } from "next/server";

import { handleFormSubmission } from "@/lib/formRoute";
import { sendQuoteAutoReply, sendQuoteNotification } from "@/lib/sendEmail";

export const runtime = "edge";

export function POST(request: NextRequest) {
  return handleFormSubmission(request, {
    fields: ["name", "email", "phone", "category", "location", "message"],
    missingFieldsMessage: "All fields are required.",
    requireTurnstile: true,
    successMessage:
      "Your quote request has been submitted successfully! We'll prepare your estimate shortly.",
    logLabel: "Quote form",
    // Notify the admin and auto-reply to the visitor in parallel.
    send: (data) => Promise.all([sendQuoteNotification(data), sendQuoteAutoReply(data)]),
  });
}
