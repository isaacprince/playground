import React, { useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { projectCards } from '../data/projects';
import {
  professionalSummary,
  impactHighlights,
  experience,
  education,
  toolCategories,
  community,
  coreSkillChips,
} from '../data/cv';
import { publicUrl } from '../utils/publicUrl';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const HomePage: React.FC = () => {
  const location = useLocation();
  const experienceScrollRef = useRef<HTMLDivElement>(null);

  const scrollExperience = useCallback((direction: 1 | -1) => {
    const el = experienceScrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>('.experience-card');
    const gap = 20;
    const step = (firstCard?.offsetWidth ?? 400) + gap;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    document.title = 'Prince C. Isaac — UI/UX Engineer & Designer | Toronto & London';
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <>
      <Navigation />
      <section id="home" className="hero">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.h1 variants={fadeUp} custom={0}>
              Prince C. Isaac
            </motion.h1>
            <motion.div className="hero-rule" variants={fadeUp} custom={1} aria-hidden />
            <motion.h2 variants={fadeUp} custom={2}>
              UI/UX Engineer &amp; Designer · Toronto, ON &amp; London, UK
            </motion.h2>
            <motion.p variants={fadeUp} custom={3}>
              {professionalSummary.shortLine}
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeUp} custom={4}>
              <a href="#portfolio" className="btn btn-primary">
                View selected work
              </a>
              <a href="#experience" className="btn btn-secondary">
                Experience
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in touch
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="profile-image-shell">
              <span className="profile-image-glow" aria-hidden />
              <span className="profile-image-ring profile-image-ring--outer" aria-hidden />
              <span className="profile-image-ring profile-image-ring--inner" aria-hidden />
              <img
                src={publicUrl('/images/common/picture_hero.png')}
                alt="Prince Isaac"
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">Professional summary</h2>
          <p className="section-subtitle">
            I combine UX craft with frontend execution — systems and flows in Figma, shipped UI in modern web stacks.
            Especially interested in fintech, Web3, and AI-assisted product surfaces.
          </p>

          <div className="highlights-grid">
            {impactHighlights.map((h) => (
              <div key={h.label} className="highlight-card">
                <span className="highlight-stat">{h.stat}</span>
                <span className="highlight-label">{h.label}</span>
                <span className="highlight-context">{h.context}</span>
              </div>
            ))}
          </div>

          <div className="about-content">
            <div className="about-text">
              {professionalSummary.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            <div className="skills">
              <h3>Core strengths</h3>
              <div className="skills-grid">
                {coreSkillChips.map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Product and UI work in remote and in-person teams — launches, dashboards, and design systems, with a
            growing focus on implementation and engineering partnership.
          </p>
          <div className="experience-rail">
            <div className="experience-rail__toolbar">
              <p className="experience-rail__hint">Drag or swipe the cards — or use the arrows.</p>
              <div className="experience-rail__arrows">
                <button
                  type="button"
                  className="experience-rail__btn"
                  aria-label="Scroll experience left"
                  onClick={() => scrollExperience(-1)}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="experience-rail__btn"
                  aria-label="Scroll experience right"
                  onClick={() => scrollExperience(1)}
                >
                  →
                </button>
              </div>
            </div>
            <div
              ref={experienceScrollRef}
              className="experience-scroll"
              tabIndex={0}
              role="region"
              aria-label="Work experience timeline"
            >
              {experience.map((job, index) => (
                <motion.article
                  key={`${job.company}-${job.period}`}
                  className="experience-card"
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="experience-card__header">
                    <div className="experience-card__role">{job.role}</div>
                    <div className="experience-card__company">{job.company}</div>
                    <div className="experience-card__meta">
                      {job.period} · {job.location}
                    </div>
                  </div>
                  <div className="experience-card__body">
                    <ul>
                      {job.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="experience-card__tools">
                    <div className="experience-card__tools-label">Tools</div>
                    <div>
                      {job.tools.map((t) => (
                        <span key={t} className="tag-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="credentials" className="credentials-section">
        <div className="container">
          <h2 className="section-title">Expertise &amp; education</h2>
          <p className="section-subtitle">
            Formal training in print, web, and product — plus the design and frontend toolkit I use to go from
            research to build.
          </p>

          <div className="credentials-layout">
            <div>
              <h3 className="edu-block-title">Education</h3>
              <div className="education-list">
                {education.map((edu) => (
                  <div key={edu.detail} className="edu-card">
                    <div className="edu-location">{edu.location}</div>
                    <h3>{edu.school}</h3>
                    <p>{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="tool-categories">
              {toolCategories.map((cat) => (
                <div key={cat.title} className="tool-category">
                  <h4>{cat.title}</h4>
                  <div>
                    {cat.items.map((item) => (
                      <span key={item} className="tag-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="subsection-title">Open source &amp; leadership</h3>
          <div className="community-grid">
            {community.map((item, i) => (
              <motion.div
                key={item.title}
                className="community-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <h3>{item.title}</h3>
                <div className="community-card__meta">
                  {item.year} · {item.role}
                </div>
                <p>{item.description}</p>
                {item.href ? (
                  <a className="community-card__link" href={item.href} target="_blank" rel="noreferrer">
                    View project →
                  </a>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Selected projects</h2>
          <p className="section-subtitle">
            Case studies spanning product UX, research, branding, and systems — the same problems I like to solve in
            code when I&apos;m on the engineering side of the house.
          </p>
        </div>
        <div className="portfolio-grid">
          {projectCards.map((project, index) => (
            <motion.article
              key={project.slug}
              className="project-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p>{project.description}</p>
                <div className="project-stats">
                  {project.stats.map((s) => (
                    <div key={s.label} className="stat">
                      <span className="stat-number">{s.number}</span>
                      <span className="stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="project-actions">
                  <Link to={`/case-studies/${project.slug}`} className="btn btn-primary">
                    View case study
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get in touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let&apos;s work together</h3>
              <p>
                Open to UI/UX engineering, frontend, and product design roles — plus contract work in fintech, Web3,
                and design systems. If you need someone who can both design the experience and help ship the UI, say
                hello. I&apos;ll follow up with my full CV or portfolio PDF on request.
              </p>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="mailto:isaacprince001@gmail.com?subject=CV%20request%20%E2%80%94%20Prince%20Isaac"
                  className="btn btn-primary"
                  style={{ marginRight: '0.75rem' }}
                >
                  Email for full CV
                </a>
                <a href="https://www.linkedin.com/in/prince-isaac/" className="btn btn-secondary" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </p>
              <div className="contact-details" style={{ marginTop: '1.75rem' }}>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:isaacprince001@gmail.com">isaacprince001@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:+16474682911">(647) 468-2911</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Toronto, ON &amp; London, UK</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <h3>Portfolio &amp; social</h3>
              <div className="social-grid">
                <motion.a
                  href="https://www.linkedin.com/in/prince-isaac/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={publicUrl('/images/common/linkedin.png')} alt="LinkedIn" />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://dribbble.com/princeisaac"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={publicUrl('/images/common/dribble.png')} alt="Dribbble" />
                  <span>Dribbble</span>
                </motion.a>
                <motion.a
                  href="https://www.behance.net/princeisaac"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={publicUrl('/images/common/behance.png')} alt="Behance" />
                  <span>Behance</span>
                </motion.a>
                <motion.a
                  href="https://github.com/isaacprince"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={publicUrl('/images/common/github.png')} alt="GitHub" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Prince Chibueze Isaac. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
