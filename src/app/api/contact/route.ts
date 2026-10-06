import type { NextRequest } from "next/server";

import { handleFormSubmission } from "@/lib/formRoute";
import { sendContactAutoReply, sendContactNotification } from "@/lib/sendEmail";

export const runtime = "edge";

export function POST(request: NextRequest) {
  return handleFormSubmission(request, {
    fields: ["name", "email", "phone", "message"],
    missingFieldsMessage: "All fields are required.",
    requireTurnstile: true,
    successMessage: "Your message has been sent successfully! We'll get back to you soon.",
    logLabel: "Contact form",
    // Notify the admin and auto-reply to the visitor in parallel.
    send: (data) => Promise.all([sendContactNotification(data), sendContactAutoReply(data)]),
  });
}
