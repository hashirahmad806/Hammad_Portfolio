export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI / ML' | 'Systems & Creative';
  tagline: string;
  problem: string;
  solution: string;
  technicalHighlights: string[];
  metrics: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 'healthcare-mern-ml',
    title: 'MediPulse: AI-Assisted Clinical Diagnostic Engine',
    category: 'AI / ML',
    tagline: 'End-to-end clinical diagnosis platform combining MERN architecture with ensemble ML models.',
    problem: 'Siloed clinical diagnostic pipelines suffer from high triage latency and fragmented patient telemetry during emergency evaluations.',
    solution: 'Engineered an asynchronous predictive diagnostic dashboard that ingests vital metrics, executes real-time disease risk inference, and tracks patient trajectories.',
    technicalHighlights: [
      'Built reactive Express + MongoDB microservices pipeline with WebSocket streaming for patient vital updates.',
      'Containerized Scikit-Learn / PyTorch inference service with sub-80ms prediction latency.',
      'Implemented role-based HIPAA-compliant access controls with JWT cryptographic token rotation.',
      'Designed high-density clinical dashboard featuring custom SVG telemetry gauges and predictive trend curves.'
    ],
    metrics: '94.2% Diagnostic Accuracy · <80ms Inference Latency',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'PyTorch', 'TailwindCSS'],
    githubUrl: 'https://github.com/hammad-dev/healthcare-mern-ml',
    liveUrl: '#',
    featured: true,
    accentColor: '#10B981',
  },
  {
    id: 'ai-agent-workflow',
    title: 'CognitiveFlow: Autonomous Agentic Orchestrator',
    category: 'AI / ML',
    tagline: 'Distributed multi-agent pipeline engine executing autonomous code synthesis and documentation audits.',
    problem: 'Standard LLM queries lack deterministic tool-use bounds, contextual persistence across sessions, and self-correcting validation loops.',
    solution: 'Architected a Directed Acyclic Graph (DAG) agent workflow utilizing LangChain and FastAPI that orchestrates multi-step code refactoring with automated lint-check verification.',
    technicalHighlights: [
      'Implemented dynamic agent handoff protocols using stateful graph memory and Vector DB retrieval.',
      'Integrated deterministic sandbox runner executing runtime unit tests before committing agent PRs.',
      'Engineered streaming event-driven SSE protocol for live token rendering and agent thought-process inspection.',
      'Reduced token hallucination frequency by 68% using dual-pass critic-reflection prompting.'
    ],
    metrics: '68% Lower Hallucinations · Multi-Agent DAG Architecture',
    stack: ['Python', 'FastAPI', 'LangChain', 'TypeScript', 'Next.js', 'ChromaDB', 'Docker'],
    githubUrl: 'https://github.com/hammad-dev/cognitive-flow-agents',
    liveUrl: '#',
    featured: true,
    accentColor: '#6366F1',
  },
  {
    id: 'fintech-telemetry-engine',
    title: 'ApexTrade: High-Frequency Market Telemetry Hub',
    category: 'Full-Stack',
    tagline: 'Ultra-low-latency real-time order-book visualizer and algorithmic trading signal terminal.',
    problem: 'Traditional financial web frontends choke under high-frequency WebSocket tick volumes, inducing DOM thrashing and frame drops.',
    solution: 'Designed an offscreen Canvas/WebGL rendering pipeline coupled with an optimized ring-buffer data structure delivering sustained 60fps tick charts under 5,000 msgs/sec.',
    technicalHighlights: [
      'Built zero-allocation WebSocket parser utilizing binary ArrayBuffers for instant tick ingestion.',
      'Implemented dual-layer OffscreenCanvas architecture decoupling market graph updates from main-thread layout.',
      'Structured distributed Node.js gateway with Redis Pub/Sub cluster handling live price fanout.',
      'Developed dark glassmorphic terminal interface featuring keyboard-first trade execution shortcuts.'
    ],
    metrics: '5,000+ Ticks/Sec · Sustained 60fps WebGL Canvas',
    stack: ['TypeScript', 'React', 'Node.js', 'Redis', 'WebSockets', 'TailwindCSS', 'Zustand'],
    githubUrl: 'https://github.com/hammad-dev/apextrade-telemetry',
    liveUrl: '#',
    featured: true,
    accentColor: '#F59E0B',
  },
  {
    id: 'fluid-creative-engine',
    title: 'Aetheria: Interactive 3D Spatial Audio & Shader Lab',
    category: 'Systems & Creative',
    tagline: 'Experimental WebGL procedural audio-visual landscape exploring organic noise fields and spatial acoustics.',
    problem: 'Browser-based 3D simulations often feel synthetic, uncalibrated, and detached from auditory physics.',
    solution: 'Authored custom GLSL raymarching shaders synchronized to Web Audio API Fast Fourier Transform (FFT) frequencies for real-time acoustic deform fields.',
    technicalHighlights: [
      'Custom vertex and fragment shaders programmed in raw GLSL with zero bloated wrapper overhead.',
      'Dynamic spatial audio node graph rendering binaural panning based on 3D camera coordinates.',
      'Adaptive performance scaler throttling compute resolution on mobile GPUs to ensure silky 60fps.',
      'Zero layout shift architecture with instant WebGL context restoration on background tab switch.'
    ],
    metrics: 'Awwwards Site of the Day Nominee · 60fps Native Shaders',
    stack: ['Three.js', 'GLSL', 'Web Audio API', 'TypeScript', 'GSAP'],
    githubUrl: 'https://github.com/hammad-dev/aetheria-shader-lab',
    liveUrl: '#',
    featured: false,
    accentColor: '#06B6D4',
  }
];
