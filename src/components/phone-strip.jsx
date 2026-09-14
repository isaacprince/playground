"use client";
import { useCallback, useEffect, useState } from "react";

export default function PhoneStrip({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
  }, [items?.length]);
  const showNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
  }, [items?.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, showPrev, showNext]);

  if (!items?.length) return null;
  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="flex flex-wrap gap-5 mt-8">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group w-[130px] sm:w-[150px] text-left focus:outline-none"
          >
            <div className="overflow-hidden rounded-[20px] border border-border bg-ink shadow-[0_20px_45px_-28px_rgba(0,0,0,0.7)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-accent/50 group-hover:shadow-[0_28px_55px_-24px_rgba(0,0,0,0.85)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>
            {item.label && (
              <p className="mt-2.5 font-inter text-xs text-muted leading-snug">{item.label}</p>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/92 backdrop-blur-sm p-6"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-paper/80 hover:text-paper hover:border-accent/50 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="w-4 h-4">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous screen"
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-paper/80 hover:text-paper hover:border-accent/50 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M15 6 9 12l6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next screen"
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-paper/80 hover:text-paper hover:border-accent/50 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-4 max-h-full"
          >
            <div className="max-h-[72vh] overflow-hidden rounded-[28px] border border-border shadow-2xl bg-ink">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>
            <p className="font-inter text-sm text-paper/80">
              {active.label ? `${active.label} · ` : ""}
              {openIndex + 1} / {items.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
