// Helpers shared by the public forms (contact, quote, newsletter) and the API
// routes that receive them.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string) {
  return EMAIL_PATTERN.test(email);
}

/** Shape every form endpoint responds with. */
export interface FormResponse {
  success: boolean;
  message: string;
}

export async function postJson(url: string, body: unknown): Promise<FormResponse> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return response.json();
}
