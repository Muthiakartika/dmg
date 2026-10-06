"use client";

import Image from "next/image";

import logo from "../../../public/images/logo.webp";
import whiteLogo from "../../../public/images/whitelogo.webp";
import { useTheme } from "./ThemeProvider";

interface ThemeLogoProps {
  width: number;
  height: number;
  priority?: boolean;
}

/** The DMG logo in the colour that suits the active theme. */
export default function ThemeLogo({ width, height, priority }: ThemeLogoProps) {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "dark" ? whiteLogo : logo}
      alt="DMG Masonry Logo"
      width={width}
      height={height}
      priority={priority}
    />
  );
}
