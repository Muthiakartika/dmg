"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import { isValidEmail, postJson } from "@/lib/forms";

type Message = { kind: "ok" | "error"; text: string };

/** Footer newsletter sign-up, posted to /api/newsletter. */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSending, setSending] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (message) setMessage(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Checked here as well as on the server so an obvious typo does not cost a
    // round trip.
    if (!isValidEmail(email)) {
      setMessage({ kind: "error", text: "Please enter a valid email address." });
      return;
    }

    setSending(true);
    setMessage(null);

    try {
      const result = await postJson("/api/newsletter/", { email });

      if (result.success) {
        setMessage({ kind: "ok", text: result.message });
        setEmail("");
      } else {
        setMessage({
          kind: "error",
          text: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setMessage({ kind: "error", text: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form className="footer-newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="footer-newsletter-input"
          placeholder="Your Email Here"
          aria-label="Your Email Here"
          value={email}
          onChange={handleEmailChange}
          disabled={isSending}
        />

        <button type="submit" className="footer-newsletter-button" disabled={isSending}>
          <span className="footer-link-arrow">&rarr;</span>
          <span>{isSending ? "Subscribing..." : "Subscribe Newsletter"}</span>
        </button>
      </form>

      {message && (
        <p
          role="status"
          style={{
            marginTop: "10px",
            marginBottom: 0,
            fontSize: "13px",
            lineHeight: 1.5,
            color: message.kind === "ok" ? "#2ecc71" : "#e94560",
          }}
        >
          {message.text}
        </p>
      )}
    </>
  );
}
