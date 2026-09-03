/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import BackButton from "@/components/back-button";
import { SocialIcon } from "@/components/icons";

function Gallery({ images }) {
  if (!images?.length) return null;
  return (
    <div className="grid grid-cols-1 gap-6 mt-8">
      {images.map((image) => (
        <figure
          key={image.src}
          className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-auto"
          />
          {image.caption && (
            <figcaption className="font-inter text-sm text-muted px-5 py-4">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function Stats({ stats }) {
  if (!stats?.length) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-border bg-surface p-5 text-center"
        >
          <p className="font-neueMachina text-2xl sm:text-3xl text-accent mb-1">
            {stat.value}
          </p>
          <p className="font-inter text-xs text-muted leading-snug">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyTemplate({
  title,
  subtitle,
  meta,
  sections,
  nextProject,
}) {
  return (
    <div className="bg-ink min-h-screen">
      <Nav />
      <article className="max-w-6xl mx-auto px-4 sm:px-8 py-16 md:py-24">
        <BackButton className="mb-10" />

        <h1 className="font-neueMachina text-[2rem] sm:text-[2.75rem] leading-[1.1] text-paper mb-5 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-inter text-lg text-muted mb-10 max-w-2xl">{subtitle}</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 pb-10 border-b border-border">
          {meta.map((item) => (
            <div key={item.label}>
              <p className="font-inter text-xs uppercase tracking-widest text-accent mb-1.5">
                {item.label}
              </p>
              <p className="font-inter text-sm text-paper/90 leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-16">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-neueMachina text-xl sm:text-2xl text-paper mb-5 max-w-3xl">
                {section.heading}
              </h2>
              <div className="flex flex-col gap-4 max-w-3xl">
                {section.body?.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-inter text-base text-paper/85 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-5 flex flex-col gap-2 font-inter text-base text-paper/85 leading-relaxed">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
              <Stats stats={section.stats} />
              <Gallery images={section.images} />
              {section.link && (
                <a
                  href={section.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-accent mt-4"
                >
                  {section.link.label}
                  <SocialIcon name="Arrow" className="w-4 h-4" />
                </a>
              )}
            </section>
          ))}
        </div>

        {nextProject && (
          <Link
            href={`/case-studies/${nextProject.slug}/`}
            className="group flex items-center justify-between mt-20 pt-10 border-t border-border"
          >
            <div>
              <p className="font-inter text-xs uppercase tracking-widest text-muted mb-2">
                Next project
              </p>
              <p className="font-neueMachina text-xl sm:text-2xl text-paper group-hover:text-accent transition-colors">
                {nextProject.title}
              </p>
            </div>
            <SocialIcon name="Arrow" className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
          </Link>
        )}
      </article>
      <Footer />
    </div>
  );
}
