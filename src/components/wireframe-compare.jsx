"use client";
import { useState } from "react";

function CompareCard({ item }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setRevealed((r) => !r)}
      aria-pressed={revealed}
      className="group w-[150px] sm:w-[180px] text-left focus:outline-none"
    >
      <div className="relative aspect-[375/812] overflow-hidden rounded-[22px] border border-border bg-ink shadow-[0_20px_45px_-28px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:-translate-y-1">
        <img
          src={item.wireframe.src}
          alt={item.wireframe.alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            revealed ? "opacity-0" : "opacity-100 group-hover:opacity-0"
          }`}
        />
        <img
          src={item.final.src}
          alt={item.final.alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            revealed ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
        <span
          className="absolute top-2.5 left-2.5 rounded-full bg-ink/80 backdrop-blur px-2 py-0.5 font-inter text-[9px] uppercase tracking-widest text-paper/90 transition-opacity duration-300"
          style={{ opacity: revealed ? 0 : 1 }}
        >
          Wireframe
        </span>
        <span
          className="absolute top-2.5 left-2.5 rounded-full bg-accent px-2 py-0.5 font-inter text-[9px] uppercase tracking-widest text-ink transition-opacity duration-300"
          style={{ opacity: revealed ? 1 : 0 }}
        >
          Final
        </span>
      </div>
      <p className="mt-2.5 font-inter text-xs text-muted leading-snug">{item.label}</p>
    </button>
  );
}

export default function WireframeCompare({ items }) {
  if (!items?.length) return null;
  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-5">
        {items.map((item) => (
          <CompareCard key={item.label} item={item} />
        ))}
      </div>
      <p className="mt-4 font-inter text-xs text-muted/70">
        Hover (or tap) a screen to reveal the final design.
      </p>
    </div>
  );
}
