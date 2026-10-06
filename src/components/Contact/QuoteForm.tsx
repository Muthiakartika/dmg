"use client";

import Turnstile from "./Turnstile";
import { FormAlerts, SelectField, SubmitButton, TextField } from "./FormFields";
import { useFormSubmission } from "./useFormSubmission";

// Project categories mirror DMG's masonry services (see src/lib/services.ts)
// plus an "Other" catch-all.
const CATEGORY_OPTIONS = [
  "Masonry Repair",
  "Stone Veneer",
  "Chimney Repair",
  "Fireplace Installation",
  "Retaining Wall Construction",
  "Foundation Repair",
  "Hardscaping",
  "Outdoor Kitchen",
  "Patio Stone Installation",
  "Custom Fire Pit",
  "Custom Pizza Oven",
  "Other",
];

// Calgary + surrounding service areas. Adjust to your actual coverage.
const LOCATION_OPTIONS = ["Calgary", "Airdrie", "Cochrane", "Chestermere", "Okotoks", "Other"];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  category: CATEGORY_OPTIONS[0],
  location: LOCATION_OPTIONS[0],
  message: "",
};

/** Request-a-quote form, posted to /api/quote. */
export default function QuoteForm() {
  const { loading, success, error, handleSubmit, fieldProps, turnstileProps } =
    useFormSubmission({
      endpoint: "/api/quote/",
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
      <SelectField
        label="CHOOSE PROJECT CATEGORY"
        options={CATEGORY_OPTIONS}
        {...fieldProps("category")}
      />
      <SelectField
        label="CHOOSE PROJECT LOCATION"
        options={LOCATION_OPTIONS}
        {...fieldProps("location")}
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
