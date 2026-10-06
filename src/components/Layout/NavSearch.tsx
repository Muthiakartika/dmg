"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";

import { services } from "@/lib/services";

const dropdownStyle: CSSProperties = {
  position: "absolute",
  top: "100%",
  right: 0,
  width: "280px",
  backgroundColor: "var(--whiteColor)",
  padding: "15px",
  borderRadius: "8px",
  zIndex: 999,
  marginTop: "15px",
  border: "1px solid var(--borderColor)",
};

const resultListStyle: CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  maxHeight: "250px",
  overflowY: "auto",
};

const resultItemStyle: CSSProperties = {
  borderBottom: "1px solid var(--borderColor)",
  padding: "10px 0",
};

const resultLinkStyle: CSSProperties = {
  color: "var(--headingColor)",
  textDecoration: "none",
  display: "block",
  fontSize: "15px",
  fontWeight: 500,
};

const emptyStyle: CSSProperties = {
  padding: "10px 0",
  fontSize: "14px",
  color: "var(--paragraphColor)",
};

/** Search icon in the navbar that filters the service pages by name. */
export default function NavSearch() {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggle = () => {
    setOpen(!isOpen);
    if (isOpen) setQuery("");
  };

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  const needle = query.toLowerCase();
  const results = services.filter(
    (service) =>
      service.title.toLowerCase().includes(needle) ||
      service.link.toLowerCase().includes(needle),
  );

  return (
    <div className="option-item position-relative">
      <div className="search-btn" onClick={toggle} style={{ cursor: "pointer" }}>
        <i className="ri-search-line"></i>
      </div>

      {isOpen && (
        <div className="search-dropdown shadow-sm" style={dropdownStyle}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control"
              placeholder="Search services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              style={{ marginBottom: "10px", fontSize: "14px" }}
            />
          </form>

          {query && (
            <ul style={resultListStyle}>
              {results.length > 0 ? (
                results.map((service) => (
                  <li key={service.id} style={resultItemStyle}>
                    <Link href={service.link} onClick={close} style={resultLinkStyle}>
                      {service.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li style={emptyStyle}>No services found</li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
