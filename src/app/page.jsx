import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Link from "next/link";
import { SocialIcon } from "@/components/icons";
import { nav as profile, socialLinks, projects, latestArticle } from "@/data/profile";
import Reveal from "@/components/reveal";
import Magnetic from "@/components/magnetic";
import ProjectList from "@/components/project-list";

const heroStats = [
  { value: "5+", label: "Shipped products" },
  { value: "10x", label: "App growth delivered" },
  { value: "Live", label: "Open-source system in production" },
];

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
        <Reveal delay={0}>
          <p className="font-inter text-sm text-accent mb-6">
            Product Designer · Worldwide
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-neueMachina text-[2.25rem] sm:text-[3.25rem] lg:text-[4.25rem] leading-[1.08] text-paper max-w-4xl">
            Product design that balances delight with{" "}
            <span className="text-accent">business outcomes</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="font-inter text-lg text-muted max-w-2xl mt-8 leading-relaxed">
            I&apos;m Prince Isaac. I design interfaces, systems, and flows that
            people enjoy using, for startups and consultancies solving real
            business problems, not just shipping pretty screens.
          </p>
          <p className="font-inter text-sm text-muted max-w-2xl mt-4">
            Currently designing at Alexandra &amp; Ike Consultancy · Past work
            spans food delivery, DeFi, and government design systems.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center gap-5 mt-10">
            <Magnetic>
              <a
                href="#work"
                className="font-inter text-sm font-semibold text-ink bg-accent rounded-full px-6 py-3 hover:bg-white transition-colors"
              >
                View my work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="font-inter text-sm font-semibold text-paper border border-border rounded-full px-6 py-3 hover:border-accent hover:text-accent transition-colors"
              >
                Résumé
              </a>
            </Magnetic>
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
        </Reveal>

        <Reveal delay={0.32}>
          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-14">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={i > 0 ? "sm:pl-12 sm:border-l sm:border-border" : ""}
              >
                <p className="font-neueMachina text-2xl sm:text-3xl text-accent mb-1">
                  {stat.value}
                </p>
                <p className="font-inter text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Selected work */}
      <section id="work" className="scroll-mt-16 max-w-6xl mx-auto px-4 sm:px-8 py-20 md:py-28 border-t border-border">
        <Reveal>
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-neueMachina text-2xl sm:text-3xl text-paper">
              Selected Work
            </h2>
            <span className="font-inter text-sm text-muted hidden sm:block">
              {projects.length} projects
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ProjectList projects={projects} />
        </Reveal>
      </section>

      {/* Writing */}
      <section id="writing" className="scroll-mt-16 max-w-6xl mx-auto px-4 sm:px-8 py-20 md:py-28 border-t border-border">
        <Reveal>
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-neueMachina text-2xl sm:text-3xl text-paper">
              Writing
            </h2>
            <Link
              href={socialLinks.find((s) => s.name === "Substack")?.href ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 font-inter text-sm text-muted hover:text-accent transition-colors"
            >
              All posts on Substack
              <SocialIcon name="Arrow" className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={latestArticle.url}
            target="_blank"
            rel="noreferrer"
            data-cursor="view"
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_20px_60px_-25px_rgba(255,102,0,0.45)]"
          >
            <p className="font-inter text-xs uppercase tracking-widest text-accent">
              Latest on Substack
            </p>
            <h3 className="font-neueMachina text-xl sm:text-2xl text-paper max-w-2xl group-hover:text-accent transition-colors">
              {latestArticle.title}
            </h3>
            <p className="font-inter text-base text-muted max-w-2xl leading-relaxed">
              {latestArticle.subtitle}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-inter text-sm text-muted">{latestArticle.date}</span>
              <span className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-paper group-hover:text-accent transition-colors">
                Read the post
                <SocialIcon
                  name="Arrow"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <Link
            href={socialLinks.find((s) => s.name === "Substack")?.href ?? "#"}
            target="_blank"
            rel="noreferrer"
            className="sm:hidden mt-6 inline-flex items-center gap-2 font-inter text-sm text-muted hover:text-accent transition-colors"
          >
            All posts on Substack
            <SocialIcon name="Arrow" className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-16 max-w-6xl mx-auto px-4 sm:px-8 py-20 md:py-28 border-t border-border">
        <Reveal className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12">
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
              I work with clients worldwide and am open to remote work
              anywhere.
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
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
