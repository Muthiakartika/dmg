"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface LazyVideoProps {
  src: string;
  poster: string;
}

const videoStyle: CSSProperties = {
  width: "100%",
  height: "550px",
  objectFit: "cover",
  display: "block",
};

const muteButtonStyle: CSSProperties = {
  position: "absolute",
  bottom: "20px",
  right: "20px",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(0, 0, 0, 0.55)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "20px",
  zIndex: 2,
};

/**
 * Muted looping video with a mute toggle. It ships `preload="none"` and only
 * starts downloading once it is about to scroll into view, so a below-the-fold
 * video does not slow down the initial page load.
 */
export default function LazyVideo({ src, poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay is only permitted while muted; if the visitor has already
    // unmuted it the promise rejects and they press play themselves.
    const startPlayback = () => void video.play().catch(() => {});

    // Without IntersectionObserver (very old browsers) start right away rather
    // than leaving a video that never plays.
    if (typeof IntersectionObserver === "undefined") {
      video.preload = "auto";
      startPlayback();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.preload = "auto";
        video.load();
        startPlayback();
        observer.disconnect();
      },
      // Start fetching a little early so playback has a head start.
      { rootMargin: "300px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        style={videoStyle}
      />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        style={muteButtonStyle}
      >
        <i className={isMuted ? "ri-volume-mute-line" : "ri-volume-up-line"}></i>
      </button>
    </div>
  );
}
