"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav as profile } from "@/data/profile";
import ThemeToggle from "@/components/theme-toggle";

export default function Nav() {
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setCity(timeZone.split("/").pop().replace(/_/g, " "));

    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-[4rem] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={28} height={28} className="rounded-full" />
          <span className="font-neueMachina text-sm text-paper">Prince Isaac</span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-inter text-sm text-muted hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex items-center gap-1.5 font-inter text-xs text-muted border border-border rounded-full px-3 py-1.5">
            🌐 {city} · {time}
          </span>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex font-inter text-xs font-semibold text-ink bg-accent rounded-full px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Résumé
          </a>
          <ThemeToggle />

          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-5 h-px bg-paper transition-transform ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-5 h-px bg-paper transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-paper transition-transform ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[4rem] bg-ink z-40 flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-neueMachina text-xl text-paper"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-inter text-sm font-semibold text-ink bg-accent rounded-full px-5 py-2.5"
          >
            Résumé
          </a>
          <span className="font-inter text-xs text-muted">🌐 {city} · {time}</span>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
