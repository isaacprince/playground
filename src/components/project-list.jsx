"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/icons";

export default function ProjectList({ projects }) {
  const [featured, ...rest] = projects;
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
    <div className="flex flex-col">
      {featured && (
        <Link
          href={`/case-studies/${featured.slug}/`}
          data-cursor="view"
          className="group grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 md:gap-10 items-center rounded-2xl border border-border bg-surface p-5 sm:p-7 mb-10 transition-all duration-300 hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_20px_60px_-25px_rgba(255,102,0,0.45)]"
        >
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-black">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div>
            <p className="font-inter text-xs uppercase tracking-widest text-accent mb-3">
              Featured
            </p>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-neueMachina text-xl sm:text-2xl text-paper">
                {featured.title}
              </h3>
              <span className="font-inter text-xs text-muted">{featured.year}</span>
            </div>
            <p className="font-inter text-sm text-muted mb-2">{featured.role}</p>
            <p className="font-inter text-base text-paper/90 leading-relaxed mb-4">
              {featured.summary}
            </p>
            <p className="font-inter text-sm text-accent mb-5">{featured.outcome}</p>
            <span className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-paper group-hover:text-accent transition-colors">
              View case study
              <SocialIcon
                name="Arrow"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </div>
        </Link>
      )}

      <div className="relative flex flex-col">
        {rest.map((project, i) => (
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
                  0{i + 2}
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
          {rest.map((project, i) => (
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
    </div>
  );
}
