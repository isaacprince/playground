"use client";
import { useEffect, useState } from "react";
import { SocialIcon } from "@/components/icons";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={`flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors shrink-0 ${className}`}
    >
      {theme && <SocialIcon name={theme === "light" ? "Moon" : "Sun"} className="w-4 h-4" />}
    </button>
  );
}
