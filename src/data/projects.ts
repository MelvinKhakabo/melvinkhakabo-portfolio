// Every project on the site lives here. Add, remove or re-tag projects
// without touching any page: the Work section and its filters are built from this list.

export type Category = 'web' | 'ai' | 'research';
export type Status = 'Live' | 'In progress' | 'Report';

export interface Project {
  slug: string;
  category: Category;
  categoryLabel: string;
  title: string;
  role: string;
  year: string;
  status: Status;
  summary: string;
  stack: string[];
  /** Text shown in the fake browser bar on the card */
  domain: string;
  /** Screenshot in /public/images/work. Leave out for a text thumbnail. */
  image?: string;
  imageAlt?: string;
  /** Text thumbnail, used when there is no screenshot */
  thumbKicker?: string;
  thumbLine?: string;
  /** Internal case study page */
  caseStudy?: string;
  /** External link (live site or repository) */
  link?: { href: string; label: string };
}

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web development' },
  { id: 'ai', label: 'AI engineering' },
  { id: 'research', label: 'Research & analysis' },
];

export const projects: Project[] = [
  {
    slug: 'the-learning-quarter',
    category: 'web',
    categoryLabel: 'Web development',
    title: 'The Learning Quarter',
    role: 'Lead developer · discovery, IA, build, migration',
    year: '2025 – 26',
    status: 'In progress',
    summary:
      'Rebrand of a Nairobi learning company into one identity across three divisions (Youth, Professional and Consulting), with the registration and payments platform behind its youth programmes.',
    stack: ['Astro', 'Cloudflare', 'React', 'Supabase', 'Paystack'],
    domain: 'thelearningquarter.co',
    image: '/images/work/the-learning-quarter.jpg',
    imageAlt: 'The Learning Quarter homepage',
    caseStudy: '/work/the-learning-quarter/',
  },
  {
    slug: 'pumac',
    category: 'web',
    categoryLabel: 'Web development',
    title: 'PUMaC & PUMaC Africa',
    role: 'Lead developer',
    year: '2025 – 26',
    status: 'Live',
    summary:
      'The Princeton University Mathematics Competition site and its Africa edition, which opens the competition to students aged 13–18 across the continent, with online registration.',
    stack: ['Squarespace', 'React', 'TypeScript', 'Supabase', 'Paystack'],
    domain: 'Princeton University Mathematics Competition',
    image: '/images/work/pumac.jpg',
    imageAlt: 'PUMaC homepage',
    link: { href: 'https://pumac-africa.thelearningquarter.co', label: 'Visit PUMaC Africa ↗' },
  },
  {
    slug: 'pep',
    category: 'web',
    categoryLabel: 'Web development',
    title: 'Partnership for Economic Policy (PEP)',
    role: 'Co-developer',
    year: '2026',
    status: 'Live',
    summary:
      'Website for a Southern-led global research network that produces local evidence to inform economic policy across the Global South.',
    stack: ['Drupal', 'PHP', 'jQuery', 'Google Analytics'],
    domain: 'pep-net.org',
    image: '/images/work/pep.jpg',
    imageAlt: 'Partnership for Economic Policy homepage',
    link: { href: 'https://www.pep-net.org/', label: 'Visit site ↗' },
  },
  {
    slug: 'chloe-stewart-collective',
    category: 'web',
    categoryLabel: 'Web development',
    title: 'Chloe Stewart Collective',
    role: 'Lead developer',
    year: '2026',
    status: 'Live',
    summary:
      'Site and shop for a women-led embroidery social enterprise in Kayole, Nairobi: products, bespoke commissions, the team and its social-impact work.',
    stack: ['Squarespace', 'E-commerce'],
    domain: 'chloestewart.co.uk',
    image: '/images/work/chloe-stewart.jpg',
    imageAlt: 'Chloe Stewart Collective homepage',
    link: { href: 'https://www.chloestewart.co.uk/', label: 'Visit site ↗' },
  },
  {
    slug: 'tolea',
    category: 'web',
    categoryLabel: 'Web development',
    title: 'Tolea',
    role: 'Co-founder, CTO & lead developer',
    year: '2026',
    status: 'Live',
    summary:
      'A platform that matches young Kenyans with verified volunteering and internship placements, free for volunteers, with support through each placement.',
    stack: ['React', 'Vite', 'Tailwind v4', 'Supabase', 'Vercel'],
    domain: 'tolea.vercel.app',
    image: '/images/work/tolea.jpg',
    imageAlt: 'Tolea homepage',
    link: { href: 'https://tolea.vercel.app/', label: 'Visit site ↗' },
  },
  {
    slug: 'ujuzi-agent',
    category: 'ai',
    categoryLabel: 'AI engineering',
    title: 'Ujuzi Agent',
    role: 'AI engineer · sole builder',
    year: '2025 – 26',
    status: 'In progress',
    summary:
      'A six-agent pipeline on Google’s Agent Development Kit that drafts lesson plans fitted to African curricula, languages and classrooms, with evaluation checks on output quality.',
    stack: ['Python', 'Google ADK', 'Multi-agent', 'LLM eval'],
    domain: 'github.com/MelvinKhakabo/ujuzi-agent',
    thumbKicker: '6 AGENTS · GOOGLE ADK',
    thumbLine: 'Curriculum-aligned lesson plans for African classrooms',
    link: { href: 'https://github.com/MelvinKhakabo/ujuzi-agent', label: 'View repository ↗' },
  },
  {
    slug: 'sheng-mode',
    category: 'ai',
    categoryLabel: 'AI engineering · Accessibility',
    title: 'Sheng Mode for screen readers',
    role: 'Team lead & lead developer',
    year: 'Nov 2026',
    status: 'In progress',
    summary:
      'A code-switching English / Kiswahili / Sheng text-to-speech engine for TalkBack, built at the AI for Accessibility Design & Hackathon in Nairobi. First target: WhatsApp.',
    stack: ['TTS', 'Android TalkBack', 'NLP'],
    domain: 'github.com/inferno254/ai-toolkit',
    thumbKicker: 'EN · SW · SHENG',
    thumbLine: 'Code-switching speech for TalkBack',
    link: { href: 'https://github.com/inferno254/ai-toolkit', label: 'View repository ↗' },
  },
  {
    slug: 'wash-survey',
    category: 'research',
    categoryLabel: 'Research & analysis',
    title: 'National WASH landscape survey',
    role: 'Lead Research Coordinator · OCENA',
    year: '2023 – 25',
    status: 'Report',
    summary:
      'Designed and ran 500 water, sanitation and hygiene surveys with CSOs and government bodies on Kobo Collect, then analysed the data in MySQL for a stakeholder report.',
    stack: ['Kobo Collect', 'MySQL', 'Survey design'],
    domain: 'OCENA × KEWASNET',
    thumbKicker: '500 SURVEYS · KOBO COLLECT',
    thumbLine: 'Water, sanitation & hygiene across Kenya',
  },
  {
    slug: 'programming-awareness-study',
    category: 'research',
    categoryLabel: 'Research & analysis',
    title: 'Programming awareness across African universities',
    role: 'Technical Research Associate · CS Academy Africa',
    year: '2023 – 24',
    status: 'Report',
    summary:
      'Coordinated a 100-person field team collecting surveys and interviews across several countries, and reported on programming opportunities for African students.',
    stack: ['Field research', 'Data analysis', 'Reporting'],
    domain: 'Multi-country study',
    thumbKicker: '100-PERSON FIELD TEAM',
    thumbLine: 'How African students meet programming',
  },
  {
    slug: 'hackbio-oncology',
    category: 'research',
    categoryLabel: 'Research & analysis',
    title: 'Cancer dataset modelling',
    role: 'Data Scientist · HackBio',
    year: '2023 – 24',
    status: 'Report',
    summary:
      'Built and validated Random Forest and KNN models on cancer datasets, with reproducible R and Python processing scripts.',
    stack: ['R', 'Python', 'Random Forest', 'KNN'],
    domain: 'github.com/MelvinKhakabo/HackBio_Internship…',
    thumbKicker: 'RANDOM FOREST · KNN',
    thumbLine: 'Predictive models on cancer datasets',
    link: {
      href: 'https://github.com/MelvinKhakabo/HackBio_Internship-DS-ML_in_Bioinformatics_For_Oncology_Research',
      label: 'View repository ↗',
    },
  },
];