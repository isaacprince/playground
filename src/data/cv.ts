/** CV content — keep in sync with resume PDF */

export const professionalSummary = {
  shortLine:
    'UI/UX engineer and designer with 5+ years shipping interfaces, from research and systems in Figma to production-minded HTML, CSS, and React. Comfortable owning the span from UX flows to accessible, component-ready UI.',
  paragraphs: [
    'I bridge product design and frontend delivery: structured components, tokens, and prototypes in Figma; semantic, responsive layouts; and modern stacks (e.g. React, TypeScript, styled-components) so ideas don’t stop at the mockup. Focus areas include fintech, Web3, and AI-enhanced interfaces.',
    'I thrive in remote, cross-functional teams, workshops and usability tests with design, paired with clear specs, motion notes, and dev handoff so engineering can ship faster with fewer loops. I’m based between Toronto, ON and London, UK.',
  ],
};

export const impactHighlights = [
  { stat: '30%', label: 'Faster admin tasks', context: 'Koneqtor dashboard redesign' },
  { stat: '52', label: 'Active vendors', context: 'Cravings launch' },
  { stat: '10%', label: 'Retention lift', context: 'Behavioral notifications' },
  { stat: '150%', label: 'Email CTR', context: 'Cravings campaigns' },
];

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
  tools: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Alexandra & Ike Consultancy LTD',
    location: 'London, UK (remote)',
    role: 'Product Designer',
    period: 'Sep 2024 – Present',
    bullets: [
      'Design and refine digital experiences within an established visual system in a multidisciplinary, remote-first team.',
      'Support brand and interface consistency across web tools, presentations, and internal documentation.',
      'Facilitate stakeholder workshops to translate complex requirements into clear layouts and flows.',
      'Maintain organized Figma files, reusable components, and labeled assets for smooth collaboration — with an eye toward dev-ready structure, variants, and accessibility.',
    ],
    tools: [
      'Figma',
      'Miro',
      'Adobe CC',
      'Photoshop',
      'Illustrator',
      'InDesign',
      'After Effects',
      'Sketch',
    ],
  },
  {
    company: 'Humber Employability Skills Hub (ESH)',
    location: 'Toronto, ON',
    role: 'Product Designer',
    period: 'Feb 2024 – Sep 2024',
    bullets: [
      'One of 24 students in Humber’s ESH Student Design Workshop; collaborated in multidisciplinary teams.',
      'Co-designed a centralized skills and activities hub, piloted with Early Childhood Education — 40+ key functions.',
      'Ran stakeholder and persona workshops; led feature design and usability improvements over a five-week sprint.',
      'Presented findings and rollout recommendations to Humber’s oversight committee.',
    ],
    tools: ['Figma', 'Miro', 'Adobe CC', 'Sketch'],
  },
  {
    company: 'Koneqtor',
    location: 'Lagos',
    role: 'Product Designer',
    period: 'Jan 2023 – Nov 2023',
    bullets: [
      'Led UI/UX for mobile and web; supported a successful site and app preview in Q2 testing.',
      'Designed a streamlined admin dashboard — ~30% faster task completion, ~25% efficiency gain, fewer errors, ~20% higher internal satisfaction.',
      'Usability testing and iterative fixes — ~20% reduction in user errors.',
      'A/B tests on landing pages — ~20% improvement in visit-to-booking conversion.',
    ],
    tools: [
      'Figma',
      'Miro',
      'Adobe CC',
      'Sketch',
      'Webflow',
      'Framer',
      'Notion',
      'Trello',
    ],
  },
  {
    company: 'Cravings',
    location: 'Lagos',
    role: 'Product Designer',
    period: 'Sep 2021 – Dec 2022',
    bullets: [
      'Shipped Cravings web app plus vendor and customer mobile apps; 52 active vendors onboarded.',
      'Behavioral push notifications from usage data — ~10% retention lift.',
      'Email templates for newsletters and campaigns — ~150% higher click-through.',
      'Figma prototypes for mobile and web — faster iteration (~60% less rework) and stronger design quality (~40%).',
    ],
    tools: ['Figma', 'Jira', 'Illustrator', 'Google Workspace'],
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
    title: 'Design & UX',
    items: [
      'UI/UX & product design',
      'Design systems & tokens',
      'Prototyping & motion',
      'Usability testing',
      'A/B testing',
      'Workshops & facilitation',
    ],
  },
  {
    title: 'Frontend & delivery',
    items: [
      'React',
      'TypeScript',
      'HTML & semantic markup',
      'CSS & responsive layout',
      'styled-components',
      'Git',
      'Design-to-code handoff',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Figma',
      'Sketch',
      'Miro',
      'Webflow',
      'Framer',
      'Adobe Photoshop',
      'Illustrator',
      'InDesign',
      'After Effects',
      'Jira',
      'Notion',
      'Generative AI',
    ],
  },
  {
    title: 'Foundations',
    items: ['Accessibility (WCAG-minded)', 'Performance-aware UI', 'Brand & print'],
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
      'Mentored junior designers through the full product cycle — research, ideation, and handoff — through test release in Q3 planning.',
    href: 'https://paperfoxx.bubbleapps.io/version-test',
  },
  {
    title: 'Metaworks DAO',
    year: '2023',
    role: 'Core contributor',
    description:
      'Open-source DAO work with dev, growth, and ops. Shaped POAP concepts and a foundational design system — tone, voice, and MVP cohesion.',
    href: 'https://www.metaworks.xyz/',
  },
  {
    title: 'Nigerian Design System',
    year: '2022',
    role: 'Contributor',
    description:
      'Cross-functional collaboration on standards and assets for Nigerian government digital products — aligned with your NDS case study.',
    href: 'https://naijadesignsystem.webflow.io/',
  },
  {
    title: 'Into the Design System',
    year: '2022',
    role: 'Accessibility & research',
    description:
      'User research to improve accessibility for visually impaired users; contrast tooling and inclusive patterns in the system.',
  },
];

export const coreSkillChips = [
  'UI/UX engineering',
  'Design systems',
  'React & TypeScript',
  'UX research',
  'Prototyping',
  'Figma',
  'Accessible UI',
  'Design-to-code',
];
