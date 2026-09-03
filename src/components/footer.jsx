import Link from "next/link";
import { nav as profile, socialLinks } from "@/data/profile";
import { SocialIcon } from "@/components/icons";

export default function Footer() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-ink px-4 sm:px-8 py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-10">
        <div className="max-w-2xl">
          <p className="font-inter text-xs uppercase tracking-widest text-accent mb-4">
            Got a project in mind?
          </p>
          <h2 className="font-neueMachina text-[1.75rem] sm:text-[2.5rem] lg:text-[3.25rem] leading-[1.1] text-paper mb-8">
            Let&apos;s build something people actually enjoy using.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-ink bg-accent rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
          >
            {profile.email}
          </a>
        </div>

        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-10 border-t border-border">
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                aria-label={social.name}
                className="text-muted hover:text-accent transition-colors"
              >
                <SocialIcon name={social.name} />
              </Link>
            ))}
          </div>
          <p className="font-inter text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. Designed &amp; built in London.
          </p>
        </div>
      </div>
    </section>
  );
}
