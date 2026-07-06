"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Nav() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const londonTime = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      });
      setTime(londonTime);
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

  const navItems = ["Projects", "About", "Contact"];

  return (
    <nav className="pt-[1rem] w-full relative z-50">
      <div className="px-4 sm:px-8 md:px-[6rem] lg:px-[12.25rem]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-[0.375rem]">
            <div className="h-[2rem] w-[2rem]">
              <Image
                src="/logo.png"
                alt=""
                className="h-full w-full object-contain"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[0.75rem] text-[#AAAAAA] font-[800]">
                PRINCE
              </span>
              <span className="font-mono text-[0.75rem] text-[#AAAAAA] font-[800]">
                ISAAC
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item} className="relative group">
                <a
                  href={`/#${item.toLowerCase()}`}
                  className="font-neueMachina text-[1rem] text-[#FF6600] hover:font-neueMachinaBold transition duration-300 z-10 relative"
                >
                  {item}
                </a>
                <div className="absolute -top-2 -left-2 w-[120%] h-[120%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                  <img
                    src="/note.png"
                    alt=""
                    className="w-full h-full object-contain animate-pulse"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 border-[0.125rem] border-[#FF6600] rounded-full p-[0.5rem] md:p-[0.75rem]">
              <span className="font-mono text-[0.875rem] md:text-[1.125rem] font-[400] text-[#ff6600]">
                🇬🇧 London {time}
              </span>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-6 h-0.5 bg-[#FF6600] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#FF6600] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#FF6600] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[4rem] bg-[#111111] z-40 flex flex-col items-center justify-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="font-neueMachina text-[1.5rem] text-[#FF6600]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-2 border-[0.125rem] border-[#FF6600] rounded-full p-[0.75rem] sm:hidden">
            <span className="font-mono text-[1rem] font-[400] text-[#ff6600]">
              🇬🇧 London {time}
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
