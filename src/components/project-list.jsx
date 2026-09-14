"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/icons";

export default function ProjectList({ projects }) {
  const [active, setActive] = useState(null);
  const previewRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let rafId;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.16;
      pos.current.y += (target.current.y - pos.current.y) * 0.16;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${pos.current.x + 28}px, ${pos.current.y - 90}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative flex flex-col">
      {projects.map((project, i) => (
        <Link
          key={project.slug}
          href={`/case-studies/${project.slug}/`}
          data-cursor="view"
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive((a) => (a === i ? null : a))}
          className="group border-t border-border py-8 md:py-9 last:border-b"
        >
          <div className="md:hidden relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-black mb-5">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8">
            <div className="flex items-baseline gap-4 md:w-1/2">
              <span className="font-inter text-xs text-muted w-6 shrink-0">
                0{i + 1}
              </span>
              <h3 className="font-neueMachina text-2xl sm:text-3xl text-paper group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="font-inter text-sm text-muted md:w-1/4 pl-10 md:pl-0">
              {project.role} · {project.year}
            </p>
            <span className="hidden md:inline-flex items-center gap-2 font-inter text-sm font-semibold text-paper group-hover:text-accent transition-colors md:w-1/4 md:justify-end">
              View case study
              <SocialIcon
                name="Arrow"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </div>

          <p className="font-inter text-base text-paper/80 leading-relaxed mt-3 pl-10 max-w-2xl md:hidden">
            {project.summary}
          </p>
        </Link>
      ))}

      <div
        ref={previewRef}
        className="hidden md:block pointer-events-none fixed left-0 top-0 z-40 w-64 aspect-[16/10] overflow-hidden rounded-xl border border-border shadow-2xl bg-black transition-opacity duration-300"
        style={{ opacity: active !== null ? 1 : 0 }}
      >
        {projects.map((project, i) => (
          <Image
            key={project.slug}
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="256px"
            className={`object-cover transition-opacity duration-300 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
