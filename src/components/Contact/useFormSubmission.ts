import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

import { isValidEmail, postJson } from "@/lib/forms";
import type { TurnstileHandle } from "./Turnstile";

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

interface FormOptions<Values extends { email: string }> {
  endpoint: string;
  initialValues: Values;
  /** Fields that must be non-empty before the request is sent. */
  requiredFields: readonly (keyof Values)[];
}

/**
 * State and submit flow shared by the contact and quote forms: client-side
 * validation, the Turnstile token (single-use, reset after every attempt) and
 * the success / error message.
 */
export function useFormSubmission<Values extends { email: string }>({
  endpoint,
  initialValues,
  requiredFields,
}: FormOptions<Values>) {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const turnstileRef = useRef<TurnstileHandle>(null);

  const handleChange = (e: ChangeEvent<FieldElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (requiredFields.some((field) => !values[field])) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!token) {
      setError("Please complete the bot verification below.");
      return;
    }

    setLoading(true);

    try {
      const result = await postJson(endpoint, { ...values, turnstileToken: token });

      if (result.success) {
        setSuccess(result.message);
        setValues(initialValues);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
      // Turnstile tokens are single-use — reset for the next submission.
      turnstileRef.current?.reset();
      setToken("");
    }
  };

  /** value / onChange / disabled for the field called `name`. */
  const fieldProps = (name: keyof Values & string) => ({
    name,
    value: String(values[name]),
    onChange: handleChange,
    disabled: loading,
  });

  const turnstileProps = {
    ref: turnstileRef,
    onVerify: setToken,
    onExpire: () => setToken(""),
    onError: () => setToken(""),
  };

  return { loading, success, error, handleSubmit, fieldProps, turnstileProps };
}
