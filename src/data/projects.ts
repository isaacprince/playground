import { publicUrl } from '../utils/publicUrl';

export type ProjectCard = {
  slug: string;
  title: string;
  role: string;
  description: string;
  image: string;
  stats: { number: string; label: string }[];
};

export const projectCards: ProjectCard[] = [
  {
    slug: 'cravings',
    title: 'Cravings',
    role: 'UI/UX & product design • 2021-2022',
    description:
      'Designed and launched the Cravings web application and vendor & customer mobile application, which has onboarded 52 active vendors. Implemented behavioral push notifications that expanded retention by 10%.',
    image: publicUrl('/images/common/project1.png'),
    stats: [
      { number: '52', label: 'Active Vendors' },
      { number: '10%', label: 'Retention Increase' },
      { number: '150%', label: 'Click-through Rate' },
    ],
  },
  {
    slug: 'indao',
    title: 'InDAO',
    role: 'UI/UX & product design • 2022',
    description:
      'Designed mobile application for decentralized autonomous organization. Created user personas and conducted extensive user research to improve accessibility and user experience.',
    image: publicUrl('/images/common/project2.png'),
    stats: [
      { number: '6+', label: 'User Personas' },
      { number: '40%', label: 'Engagement Increase' },
      { number: '100%', label: 'Accessibility' },
    ],
  },
  {
    slug: 'nds',
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
