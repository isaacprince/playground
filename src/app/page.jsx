import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/icons";
import { nav as profile, socialLinks, projects } from "@/data/profile";

const tools = [
  "Figma",
  "Miro",
  "Sketch",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "After Effects",
  "User research",
  "Usability testing",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      <Nav />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-20 pb-24 md:pt-32 md:pb-32">
        <p className="font-inter text-sm text-accent mb-6">
          Product Designer · London, UK
        </p>
        <h1 className="font-neueMachina text-[2.25rem] sm:text-[3.25rem] lg:text-[4.25rem] leading-[1.08] text-paper max-w-4xl">
          Product design that balances delight with business outcomes.
        </h1>
        <p className="font-inter text-lg text-muted max-w-2xl mt-8 leading-relaxed">
          I&apos;m Prince Isaac. I design interfaces, systems, and flows that
          people enjoy using, for startups and consultancies solving real
          business problems, not just shipping pretty screens.
        </p>
        <p className="font-inter text-sm text-muted max-w-2xl mt-4">
          Currently designing at Alexandra &amp; Ike Consultancy · Past work
          spans food delivery, DeFi, and government design systems.
        </p>

        <div className="flex flex-wrap items-center gap-5 mt-10">
          <a
            href="#work"
            className="font-inter text-sm font-semibold text-ink bg-accent rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
          >
            View my work
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-inter text-sm font-semibold text-paper border border-border rounded-full px-6 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            Résumé
          </a>
          <div className="flex items-center gap-4 ml-1">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                aria-label={social.name}
                className="text-muted hover:text-accent transition-colors"
              >
                <SocialIcon name={social.name} className="w-[1.1rem] h-[1.1rem]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="max-w-6xl mx-auto px-4 sm:px-8 py-20 md:py-28 border-t border-border">
        <div className="flex items-end justify-between mb-14">
          <h2 className="font-neueMachina text-2xl sm:text-3xl text-paper">
            Selected Work
          </h2>
          <span className="font-inter text-sm text-muted hidden sm:block">
            {projects.length} projects
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}/`}
              className="group grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 md:gap-10 items-center rounded-2xl border border-border bg-surface p-5 sm:p-7 hover:border-accent/60 transition-colors"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-black">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-neueMachina text-xl sm:text-2xl text-paper">
                    {project.title}
                  </h3>
                  <span className="font-inter text-xs text-muted">{project.year}</span>
                </div>
                <p className="font-inter text-sm text-muted mb-2">{project.role}</p>
                <p className="font-inter text-base text-paper/90 leading-relaxed mb-4">
                  {project.summary}
                </p>
                <p className="font-inter text-sm text-accent mb-5">{project.outcome}</p>
                <span className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-paper group-hover:text-accent transition-colors">
                  View case study
                  <SocialIcon name="Arrow" className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-8 py-20 md:py-28 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12">
          <h2 className="font-neueMachina text-2xl sm:text-3xl text-paper">
            About
          </h2>
          <div>
            <p className="font-inter text-lg text-paper/90 leading-relaxed mb-6">
              I operate at the intersection of two things: what makes a
              product enjoyable to use, and what makes a business work. That
              means getting into the weeds with stakeholders, translating
              messy requirements into clear flows, and keeping design systems
              organised enough that other people can actually build on them.
            </p>
            <p className="font-inter text-lg text-paper/90 leading-relaxed mb-10">
              I&apos;m based in London and open to remote work worldwide.
            </p>
            <p className="font-inter text-xs uppercase tracking-widest text-muted mb-4">
              Tools &amp; skills
            </p>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="font-inter text-sm text-paper/90 border border-border rounded-full px-4 py-1.5"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
