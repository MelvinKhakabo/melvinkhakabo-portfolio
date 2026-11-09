export type ExpGroup = 'engineering' | 'data' | 'support';

export const experienceGroups: { id: ExpGroup; label: string }[] = [
  { id: 'engineering', label: 'Engineering' },
  { id: 'data', label: 'Data & Research' },
  { id: 'support', label: 'Support' },
];

export const experience: {
  group: ExpGroup;
  role: string;
  org: string;
  dates: string;
  points: string[];
}[] = [
  {
    group: 'engineering',
    role: 'AI Engineer & Founding STEM/AI Instructor',
    org: 'Learning Sprouts → The Learning Quarter · Nairobi',
    dates: 'Feb 2025 – Present',
    points: [
      'Design and build LLM-powered tools and multi-agent workflows for education, including Ujuzi Agent.',
      'Build and run the organisation’s web platform: registration, payments and the rebrand migration.',
      'Lead a team of 10+ instructors; run AI Hackathon and PUMaC Africa for 500+ participants.',
    ],
  },
  {
    group: 'engineering',
    role: 'Web Accessibility Developer (Contract)',
    org: 'Technoprise Global',
    dates: 'Jan 2024 – Feb 2024',
    points: [
      'Implemented WCAG 2.1 accessibility features in React applications.',
      'Built reusable components with ARIA roles for screen-reader compatibility.',
    ],
  },
  {
    group: 'engineering',
    role: 'Full Stack Developer',
    org: 'TheJitu Ltd',
    dates: 'Jul 2021 – Aug 2022',
    points: [
      'Built back ends in Django and Node.js (TypeScript) on SQL Server and PostgreSQL.',
      'Built notification APIs with RabbitMQ queues; front ends in React and Angular.',
    ],
  },
  {
    group: 'data',
    role: 'Lead Research Coordinator',
    org: 'OCENA · with KEWASNET',
    dates: 'Seasonal · 2023 – 2025',
    points: [
      'Designed and delivered 500 WASH surveys for CSOs and government organisations on Kobo Collect.',
      'Analysed results in MySQL; findings presented to sector stakeholders.',
    ],
  },
  {
    group: 'data',
    role: 'Data Scientist',
    org: 'HackBio',
    dates: 'Aug 2023 – May 2024',
    points: [
      'Analysed and visualised cancer datasets in R and Python.',
      'Built and validated Random Forest and KNN models across the full lifecycle.',
    ],
  },
  {
    group: 'data',
    role: 'Technical Research Associate',
    org: 'Computer Science Academy Africa',
    dates: 'Jul 2023 – Aug 2024',
    points: [
      'Coordinated a 100-person team collecting surveys and interviews across African universities.',
      'Analysed the data and reported on programming opportunities for students.',
    ],
  },
  {
    group: 'support',
    role: 'Technical Support Agent',
    org: 'ALX',
    dates: 'Aug 2022 – Jul 2023',
    points: [
      'Supported learners by phone, WhatsApp and live chat through application and onboarding.',
      'Troubleshot LMS and portal issues, resolving tickets within 12 hours on average.',
    ],
  },
];