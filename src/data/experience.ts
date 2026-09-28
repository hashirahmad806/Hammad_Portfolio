export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Work' | 'Education' | 'Milestone';
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'fullstack-engineer',
    role: 'Full-Stack Software Engineer',
    organization: 'Independent Engineering & Client Solutions',
    period: '2024 — Present',
    location: 'Remote',
    type: 'Work',
    description: 'Engineering bespoke web applications, reactive SaaS platforms, and AI-powered automation workflows for international clients.',
    highlights: [
      'Shipped 6+ production web applications built on Astro, Next.js, and Node.js with average 98 Lighthouse performance scores.',
      'Designed and deployed custom LLM agents integrating LangChain and local Vector DBs for contextual document query pipelines.',
      'Optimized backend SQL and NoSQL query latency by 45% through schema indexing and Redis caching hierarchies.'
    ],
    technologies: ['Astro', 'React', 'Node.js', 'Python', 'TailwindCSS', 'MongoDB', 'Docker']
  },
  {
    id: 'ml-research-intern',
    role: 'AI / ML Engineering Fellow',
    organization: 'Applied Machine Learning & Deep Learning Labs',
    period: '2023 — 2024',
    location: 'Hybrid',
    type: 'Work',
    description: 'Researched and trained predictive supervised models and deep neural networks on specialized healthcare and tabular datasets.',
    highlights: [
      'Authored end-to-end data preprocessing and feature selection pipelines for multi-class classification challenges.',
      'Achieved 94.2% diagnostic validation accuracy on clinical decision-support benchmark test suites.',
      'Documented technical reproducibility guidelines and published modular open-source inference notebooks.'
    ],
    technologies: ['Python', 'PyTorch', 'Scikit-Learn', 'Pandas', 'FastAPI', 'Matplotlib']
  },
  {
    id: 'cs-degree',
    role: 'Bachelor of Science in Computer Science',
    organization: 'University Academic Excellence',
    period: '2021 — 2025',
    location: 'On-Campus',
    type: 'Education',
    description: 'Core foundational coursework in Algorithms, Data Structures, Operating Systems, Database Management Systems, and Artificial Intelligence.',
    highlights: [
      'Specialized focus on Distributed Systems Architecture and Deep Learning Theory.',
      'Led university student technical society workshops on modern web architecture and open-source contribution.'
    ],
    technologies: ['C++', 'Data Structures', 'Algorithms', 'Distributed Systems', 'Software Engineering']
  }
];
