import { publicUrl } from '../utils/publicUrl';

/** Shipped product UI (consulting). Distinct from design-only case studies in the portfolio UI. */
export type ProjectKind = 'frontend' | 'design';

export type ProjectCard = {
  slug: string;
  kind: ProjectKind;
  title: string;
  role: string;
  description: string;
  image: string;
  stats: { number: string; label: string }[];
  /** Opens in a new tab instead of an internal case study route */
  externalUrl?: string;
  /** Primary button label (defaults: external → “Visit live site”, internal → “View case study”) */
  ctaLabel?: string;
};

export const projectCards: ProjectCard[] = [
  {
    slug: 'combyn',
    kind: 'frontend',
    title: 'Combyn',
    role: 'Product engineering · consultant · Sep 2025 - Present',
    description:
      'Marketing and product web for an expense-management platform: design system (Chakra UI, Radix, Emotion), frontend observability, experiments, and performance-focused rebuild work.',
    image: publicUrl('/images/projects/combyn-card.svg'),
    stats: [
      { number: 'DS', label: 'Design system' },
      { number: 'OBS', label: 'Datadog tracking' },
      { number: 'A/B', label: 'Growth experiments' },
    ],
    externalUrl: 'https://www.combyn.net/',
  },
  {
    slug: 'puffer',
    kind: 'frontend',
    title: 'Puffer Finance',
    role: 'Product engineering · consultant · Feb - Sep 2025',
    description:
      'Public web and product surfaces for liquid restaking and Ethereum infrastructure: React/TypeScript UI, shared design system, CLI-adjacent tooling, and measurable load-performance wins.',
    image: publicUrl('/images/projects/puffer-card.svg'),
    stats: [
      { number: '23%', label: 'Fewer drop-offs' },
      { number: 'FT', label: 'Fintech modules' },
      { number: 'DX', label: 'System & tooling' },
    ],
    externalUrl: 'https://www.puffer.fi/',
  },
  {
    slug: 'cravings',
    kind: 'design',
    title: 'Cravings',
    role: 'UI/UX & product design • 2021-2022',
    description:
      'End-to-end UI/UX for web and native apps: onboarding flows, vendor tools, and customer journeys. Behavioral notifications and campaign UI contributed to retention and engagement lifts.',
    image: publicUrl('/images/common/project1.png'),
    stats: [
      { number: '52', label: 'Active Vendors' },
      { number: '10%', label: 'Retention Increase' },
      { number: '150%', label: 'Click-through Rate' },
    ],
  },
  {
    slug: 'indao',
    kind: 'design',
    title: 'InDAO',
    role: 'UI/UX & product design • 2022',
    description:
      'Mobile UI/UX for a DAO: personas, research, and accessible interaction patterns for a complex, trust-sensitive product.',
    image: publicUrl('/images/common/project2.png'),
    stats: [
      { number: '6+', label: 'User Personas' },
      { number: '40%', label: 'Engagement Increase' },
      { number: '100%', label: 'Accessibility' },
    ],
  },
  {
    slug: 'nds',
    kind: 'design',
    title: 'Nigerian Design System',
    role: 'Design systems & UI • 2022',
    description:
      "Contributed to an open-source project establishing design standards and assets across the Nigerian government's digital products and platforms. Focused on accessibility and inclusive design.",
    image: publicUrl('/images/common/project3.png'),
    stats: [
      { number: '100%', label: 'Accessibility' },
      { number: '50+', label: 'Government Sites' },
      { number: '25%', label: 'Efficiency Gain' },
    ],
  },
  {
    slug: 'onadema',
    kind: 'design',
    title: 'Onadema - Basement Record',
    role: 'Brand & visual design • 2024',
    description:
      'Full-Scale Branding for Ona Dema, Afro beat artist Under Basement Records',
    image: publicUrl('/images/common/project4.png'),
    stats: [
      { number: '100%', label: 'Accessibility' },
      { number: '100%', label: 'Engagement Increase' },
      { number: '80%', label: 'Effeciency Gain' },
    ],
  },
  {
    slug: 'editorial',
    kind: 'design',
    title: 'Editorial Design',
    role: 'Visual & editorial design • 2025',
    description: 'Editorial Designs for various publications',
    image: publicUrl('/images/common/project5.png'),
    stats: [
      { number: '100%', label: 'Accessibility' },
      { number: '100%', label: 'Engagement Increase' },
      { number: '80%', label: 'Effeciency Gain' },
    ],
  },
];
