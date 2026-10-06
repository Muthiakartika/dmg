"use client";

import { useEffect, useState, type CSSProperties } from "react";

import { contact } from "@/lib/site";

const SHOW_AFTER = 100;

const whatsappStyle: CSSProperties = {
  right: "20px",
  bottom: "75px",
  height: "45px",
  width: "45px",
  borderRadius: "50px",
  background: "#25D366",
  color: "#fff",
  fontSize: "24px",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  cursor: "pointer",
  transition: "0.5s",
  textDecoration: "none",
  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
};

/** Floating WhatsApp and back-to-top buttons, shown once the page is scrolled. */
export default function BackToTop() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        id="whatsapp-float"
        className="position-fixed text-center border-0 p-0"
        style={{ display: isVisible ? "flex" : "none", ...whatsappStyle }}
      >
        <i className="ri-whatsapp-line"></i>
      </a>

      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ display: isVisible ? "block" : "none" }}
        id="back-to-top"
        className="position-fixed text-center border-0 p-0"
      >
        <i className="ri-arrow-up-s-line"></i>
      </div>
    </>
  );
}
