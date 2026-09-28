export interface SkillGroup {
  id: string;
  pillar: string;
  subtitle: string;
  skills: {
    name: string;
    level: string;
    description: string;
    tags: string[];
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend-creative',
    pillar: 'Frontend & Creative Engineering',
    subtitle: 'Obsessive micro-interactions, responsive architectures, and cinematic frame-perfect motion.',
    skills: [
      {
        name: 'React / Next.js / Astro',
        level: 'Expert',
        description: 'Server components, partial hydration islands, fine-grained state management, zero-JS content generation.',
        tags: ['Astro 5', 'React 19', 'Next.js 15', 'State Machines']
      },
      {
        name: 'TypeScript & JavaScript (ESNext)',
        level: 'Expert',
        description: 'Strict type modeling, generic abstractions, async stream handling, zero any policy.',
        tags: ['Strict Typing', 'Generics', 'Async Iterators', 'AST']
      },
      {
        name: 'GSAP, ScrollTrigger & Lenis',
        level: 'Advanced',
        description: 'Timeline orchestration, scroll-driven narratives, SVG morphing, GPU-bound composite transforms.',
        tags: ['ScrollTrigger', 'Motion Easing', 'Timeline Sync', 'Hardware Acceleration']
      },
      {
        name: 'Modern CSS & Tailwind Architecture',
        level: 'Expert',
        description: 'Custom design systems, CSS variables, container queries, high-contrast accessible layouts.',
        tags: ['Tailwind v3/v4', 'Design Tokens', 'Glassmorphism', 'Double-Bezel']
      }
    ]
  },
  {
    id: 'backend-systems',
    pillar: 'Backend Systems & API Architecture',
    subtitle: 'Fault-tolerant server architecture, high-throughput microservices, and database optimization.',
    skills: [
      {
        name: 'Node.js & Express / Fastify',
        level: 'Advanced',
        description: 'RESTful API engineering, JWT cryptographic auth, rate-limiting middleware, stream processing.',
        tags: ['Express', 'Fastify', 'Event Emitters', 'Worker Threads']
      },
      {
        name: 'MongoDB, PostgreSQL & Redis',
        level: 'Advanced',
        description: 'Aggregation pipelines, indexing optimization, ACID transactional integrity, pub/sub caching layers.',
        tags: ['Mongoose', 'Prisma', 'Redis Cache', 'Schema Design']
      },
      {
        name: 'Real-Time WebSockets & SSE',
        level: 'Advanced',
        description: 'Low-latency bi-directional sockets, binary protocol streaming, connection heartbeats and reconnection backoff.',
        tags: ['Socket.io', 'Native WS', 'SSE Streaming', 'Binary Payloads']
      }
    ]
  },
  {
    id: 'ai-ml-engineering',
    pillar: 'AI / ML & Agentic Systems',
    subtitle: 'From foundational deep learning models to autonomous multi-agent graph workflows.',
    skills: [
      {
        name: 'Python, PyTorch & Scikit-Learn',
        level: 'Proficient',
        description: 'Machine learning classifiers, convolutional & sequential architectures, data wrangling pipelines.',
        tags: ['Python 3.12', 'PyTorch', 'NumPy / Pandas', 'Model Evaluation']
      },
      {
        name: 'LLM Orchestration & LangChain',
        level: 'Advanced',
        description: 'Dynamic agent graphs, tool-calling schema validation, retrieval-augmented generation (RAG).',
        tags: ['LangChain', 'LangGraph', 'RAG Pipelines', 'Prompt Optimization']
      },
      {
        name: 'Vector Databases & Embeddings',
        level: 'Proficient',
        description: 'Dense vector search, semantic embeddings, hierarchical indexing for fast retrieval.',
        tags: ['ChromaDB', 'FAISS', 'OpenAI Embeddings', 'Hybrid Search']
      }
    ]
  },
  {
    id: 'devops-tooling',
    pillar: 'DevOps, Tooling & Code Craft',
    subtitle: 'Disciplined version control, automated CI/CD verification, and production containerization.',
    skills: [
      {
        name: 'Docker & Containerization',
        level: 'Proficient',
        description: 'Multi-stage Docker builds, production container hardening, docker-compose orchestration.',
        tags: ['Multi-Stage', 'Image Optimization', 'Docker Compose']
      },
      {
        name: 'Git, GitHub Actions & CI/CD',
        level: 'Advanced',
        description: 'Feature branching workflows, automated testing pipelines, semantic versioning, edge deployments.',
        tags: ['GitHub Actions', 'Vercel Edge', 'Code Quality Linters']
      },
      {
        name: 'Web Performance & Accessibility',
        level: 'Expert',
        description: 'Lighthouse 95+ audits, WCAG 2.1 AA compliance, Core Web Vitals optimization (LCP, FID, CLS).',
        tags: ['Core Web Vitals', 'WCAG AA', 'Tree-shaking', 'Bundle Auditing']
      }
    ]
  }
];
