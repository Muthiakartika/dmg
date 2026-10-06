import type { ChangeEvent } from "react";

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

interface BaseFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<FieldElement>) => void;
  disabled: boolean;
}

interface TextFieldProps extends BaseFieldProps {
  placeholder: string;
  type?: "text" | "email" | "tel";
  multiline?: boolean;
}

/** Labelled required input (or textarea) in the enquiry-form style. */
export function TextField({ label, type = "text", multiline, ...inputProps }: TextFieldProps) {
  return (
    <div className="form-group">
      <label>
        {label}
        <span>*</span>
      </label>
      {multiline ? (
        <textarea className="form-control" {...inputProps}></textarea>
      ) : (
        <input type={type} className="form-control" {...inputProps} />
      )}
    </div>
  );
}

interface SelectFieldProps extends BaseFieldProps {
  options: readonly string[];
}

export function SelectField({ label, options, ...selectProps }: SelectFieldProps) {
  return (
    <div className="form-group">
      <label>
        {label}
        <span>*</span>
      </label>
      <select className="form-select form-control" {...selectProps}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const alertStyle = { fontSize: "14px", marginBottom: "16px", borderRadius: "8px" };

export function FormAlerts({ error, success }: { error: string; success: string }) {
  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert" style={alertStyle}>
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success" role="alert" style={alertStyle}>
          {success}
        </div>
      )}
    </>
  );
}

export function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <button
      type="submit"
      className="default-btn"
      disabled={loading}
      style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
    >
      {loading ? "Sending..." : "Send Message Now"}
    </button>
  );
}
