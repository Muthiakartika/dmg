"use client";

import Turnstile from "./Turnstile";
import { FormAlerts, SubmitButton, TextField } from "./FormFields";
import { useFormSubmission } from "./useFormSubmission";

const initialValues = { name: "", email: "", phone: "", message: "" };

/** Name / email / phone / message enquiry form, posted to /api/contact. */
export default function ContactForm() {
  const { loading, success, error, handleSubmit, fieldProps, turnstileProps } =
    useFormSubmission({
      endpoint: "/api/contact/",
      initialValues,
      requiredFields: ["name", "email", "phone", "message"],
    });

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="YOUR NAME" placeholder="Your name" {...fieldProps("name")} />
      <TextField
        label="EMAIL ADDRESS"
        type="email"
        placeholder="Your email"
        {...fieldProps("email")}
      />
      <TextField
        label="PHONE NO"
        type="tel"
        placeholder="Your phone number"
        {...fieldProps("phone")}
      />
      <TextField
        label="YOUR MESSAGE HERE"
        multiline
        placeholder="Write your message here..."
        {...fieldProps("message")}
      />

      <FormAlerts error={error} success={success} />

      <div className="form-group">
        <Turnstile {...turnstileProps} />
      </div>

      <SubmitButton loading={loading} />
    </form>
  );
}
