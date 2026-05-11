/** CV content; keep in sync with resume PDF */

export const professionalSummary = {
  shortLine:
    'Product engineer and designer, shipping React/TypeScript product UIs, design systems (Chakra UI, Radix, Emotion), and measurable growth; grounded in years of UI/UX craft in Figma. I use coding assistants as a tool for speed, then I read the diff, test, and ship maintainable UI.',
  paragraphs: [
    'Recent consulting work is hands-on engineering: design systems that scale, frontend observability (e.g. Datadog), A/B tests and experiments, and performance-focused web rebuilds. I use coding assistants for drafts and refactors, then I review the changes, run tests when possible, and ship code I can own. I still bring a designer’s lens to interaction quality, accessibility, and clear handoff.',
    'Earlier roles were design-led product work (Koneqtor, Cravings): mobile and web UX, dashboards, and lifecycle campaigns. I work across Toronto, ON and London, UK, often remote with distributed teams.',
  ],
};

export const impactHighlights = [
  { stat: '23%', label: 'Fewer drop-offs', context: 'Puffer, initial page load' },
  { stat: '30%', label: 'Faster admin tasks', context: 'Koneqtor dashboard' },
  { stat: '52', label: 'Active vendors', context: 'Cravings launch' },
  { stat: '150%', label: 'Email CTR', context: 'Cravings campaigns' },
];

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  focusTags?: string[];
  bullets: string[];
  tools: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Combyn',
    location: 'Remote',
    role: 'Product Engineer Consultant · Alexandra & Ike Consultancy LTD',
    period: 'Sep 2025 - Present',
    focusTags: ['Design systems', 'Observability', 'Experimentation'],
    bullets: [
      'Built a design system for current and future products using Chakra UI, Radix, and Emotion.',
      'Integrated frontend event tracking and analytics into Datadog for stronger product observability.',
      'Ran experiments to improve engagement and conversion (A/B tests on pages and small apps).',
      'Collaborated on the redevelopment of Combyn’s web application, improving initial page load performance.',
    ],
    tools: [
      'React',
      'TypeScript',
      'Webpack',
      'TanStack Query',
      'React Testing Library',
      'Emotion',
      'Chakra UI',
      'Radix UI',
      'Stencil',
      'Figma',
      'Adobe CC',
    ],
  },
  {
    company: 'Puffer Finance',
    location: 'London, UK',
    role: 'Product Engineer Consultant · Alexandra & Ike Consultancy LTD',
    period: 'Feb 2025 - Sep 2025',
    focusTags: ['React & TypeScript', 'Fintech', 'Design systems'],
    bullets: [
      'Collaborated on the revamped Puffer web application: faster load times and ~23% reduction in drop-offs on initial page load.',
      'Contributed to money transfer, insurance marketplace, and loan disbursement modules.',
      'Helped coordinate CLI tooling and a shared design system for the web engineering team.',
    ],
    tools: [
      'React',
      'TypeScript',
      'Webpack',
      'TanStack Query',
      'React Testing Library',
      'Emotion',
      'Stencil',
      'Figma',
      'Adobe CC',
    ],
  },
  {
    company: 'Koneqtor',
    location: 'Lagos',
    role: 'Product Designer',
    period: 'Jan 2023 - Nov 2024',
    focusTags: ['UI/UX', 'Mobile & web', 'Dashboard'],
    bullets: [
      'Led UI/UX for Koneqtor’s mobile and web applications and orchestrated a successful site and app preview in Q2.',
      'Designed a streamlined admin dashboard: ~30% faster task completion for administrators, ~25% efficiency gain, fewer errors, and ~20% higher satisfaction among internal teams.',
      'Usability testing and iterative design: ~20% reduction in user errors and smoother overall experience.',
    ],
    tools: [
      'Figma',
      'Miro',
      'Adobe CC',
      'Sketch',
      'Webflow',
      'Framer',
      'Midjourney',
      'Figma AI',
      'Notion',
    ],
  },
  {
    company: 'Cravings',
    location: 'Lagos',
    role: 'Product Designer',
    period: 'Sep 2021 - Dec 2022',
    focusTags: ['Multi-platform', 'Growth', 'Prototyping'],
    bullets: [
      'Designed and launched the Cravings web app and vendor & customer mobile apps, with 52 active vendors onboarded.',
      'Behavioral push notifications from in-app usage drove ~10% retention lift.',
      'Email templates for newsletters and marketing drove ~150% higher click-through rate.',
      'Figma prototypes for mobile and web cut ~60% of time on design iterations and strengthened design quality by ~40%.',
    ],
    tools: ['Figma', 'Jira', 'Illustrator', 'Google Sheets', 'Google Meet'],
  },
];

export type EducationItem = {
  school: string;
  detail: string;
  location?: string;
};

export const education: EducationItem[] = [
  {
    school: 'Humber College',
    location: 'Toronto, ON',
    detail: 'Graduate Certificate, Graphic Design for Print and Web (2025)',
  },
  {
    school: 'Humber College',
    location: 'Toronto, ON',
    detail: 'Graduate Certificate, Web Design and Development (2024)',
  },
  {
    school: 'Federal University of Technology, Akure',
    location: 'Ondo State, Nigeria',
    detail: 'B.Tech., Industrial Mathematics',
  },
];

export type ToolCategory = {
  title: string;
  items: string[];
};

export const toolCategories: ToolCategory[] = [
  {
    title: 'Product engineering',
    items: [
      'React & TypeScript',
      'Webpack',
      'TanStack Query (React Query)',
      'React Testing Library',
      'Emotion',
      'Stencil',
      'Chakra UI',
      'Radix UI',
      'Datadog (frontend tracking)',
      'Performance & Core Web Vitals',
    ],
  },
  {
    title: 'Design & UX',
    items: [
      'UI & interaction design',
      'Design systems & tokens',
      'Prototyping in Figma',
      'Usability testing',
      'A/B testing & experiments',
      'Workshops & facilitation',
    ],
  },
  {
    title: 'How I work',
    items: [
      'Cursor and similar assistants for scaffolding and refactors',
      'Review every change I did not type by hand',
      'Tests and CI when the project allows it',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Figma & Figma AI',
      'Sketch',
      'Miro',
      'Webflow',
      'Framer (design)',
      'Adobe Photoshop',
      'Illustrator',
      'InDesign',
      'After Effects',
      'Jira',
      'Notion',
      'Midjourney',
    ],
  },
  {
    title: 'Foundations',
    items: [
      'Accessibility (WCAG-minded)',
      'Component-driven workflows',
      'Git & collaboration',
      'Brand & visual design',
    ],
  },
];

export type CommunityItem = {
  title: string;
  year: string;
  role: string;
  description: string;
  href?: string;
};

export const community: CommunityItem[] = [
  {
    title: 'Paperfox',
    year: '2023',
    role: 'Product Design Lead',
    description:
      'Mentored junior designers on UX, UI craft, and dev-ready handoff from research through test release in Q3 planning.',
    href: 'https://paperfoxx.bubbleapps.io/version-test',
  },
  {
    title: 'Metaworks DAO',
    year: '2023',
    role: 'Core contributor',
    description:
      'Open-source DAO work with dev, growth, and ops. Shaped POAP concepts and a foundational design system (tone, voice, and MVP UI cohesion).',
    href: 'https://www.metaworks.xyz/',
  },
  {
    title: 'Nigerian Design System',
    year: '2022',
    role: 'Contributor',
    description:
      'Cross-functional collaboration on standards and UI assets for Nigerian government digital products. See NDS case study.',
    href: 'https://naijadesignsystem.webflow.io/',
  },
  {
    title: 'Into the Design System',
    year: '2022',
    role: 'Accessibility & research',
    description:
      'Research to improve accessibility for visually impaired users; contrast tooling and inclusive UI patterns in the system.',
  },
];

export const coreSkillChips = [
  'Product engineering',
  'React & TypeScript',
  'Design systems',
  'Chakra UI & Radix',
  'UI/UX design',
  'Experimentation',
  'Figma',
  'Observability',
];
