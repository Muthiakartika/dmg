import { NextResponse, type NextRequest } from "next/server";

import { isValidEmail } from "./forms";
import { verifyTurnstile } from "./turnstile";

interface FormRouteOptions<Field extends string> {
  /** Required body fields; must include "email". */
  fields: readonly Field[];
  /** Error shown when one of `fields` is missing. */
  missingFieldsMessage: string;
  /** Verify the Cloudflare Turnstile token sent as `turnstileToken`. */
  requireTurnstile: boolean;
  successMessage: string;
  /** Prefix for the server log when sending fails. */
  logLabel: string;
  send: (data: Record<Field, string>) => Promise<unknown>;
}

function reply(success: boolean, message: string, status?: number) {
  return NextResponse.json({ success, message }, status ? { status } : undefined);
}

function clientIp(request: NextRequest) {
  return (
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    undefined
  );
}

/**
 * Shared POST handler for the public forms: validates the body, checks the
 * bot token, sends the emails and answers with `{ success, message }`.
 */
export async function handleFormSubmission<Field extends string>(
  request: NextRequest,
  options: FormRouteOptions<Field>,
) {
  try {
    const body = await request.json();
    const data = Object.fromEntries(
      options.fields.map((field) => [field, body[field]]),
    ) as Record<Field, string>;

    if (options.fields.some((field) => !data[field])) {
      return reply(false, options.missingFieldsMessage, 400);
    }

    if (!isValidEmail((data as Record<string, string>).email)) {
      return reply(false, "Please provide a valid email address.", 400);
    }

    // Anti-bot: verify the Cloudflare Turnstile token before sending anything.
    if (options.requireTurnstile) {
      const isHuman = await verifyTurnstile(body.turnstileToken, clientIp(request));
      if (!isHuman) {
        return reply(
          false,
          "Bot verification failed. Please refresh the page and try again.",
          403,
        );
      }
    }

    await options.send(data);

    return reply(true, options.successMessage);
  } catch (error) {
    console.error(`${options.logLabel} error:`, error);
    return reply(false, "Something went wrong. Please try again later.", 500);
  }
}
