"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor");

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    let rafId;
    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onOver = (e) => {
      const viewTarget = e.target.closest?.('[data-cursor="view"]');
      const interactive = e.target.closest?.("a, button, [data-cursor]");
      if (viewTarget) {
        setHovering(true);
        setLabel("View");
      } else if (interactive) {
        setHovering(true);
        setLabel("");
      }
    };
    const onOut = (e) => {
      const related = e.relatedTarget;
      if (!(related && related.closest && related.closest("a, button, [data-cursor]"))) {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-accent"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-accent/70 flex items-center justify-center transition-[width,height,background-color] duration-200 ease-out ${
          hovering ? "w-16 h-16 -ml-8 -mt-8 bg-accent/10" : "w-8 h-8 -ml-4 -mt-4 bg-transparent"
        }`}
      >
        {label && (
          <span className="font-inter text-[10px] uppercase tracking-widest text-accent">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
