// src/app/data/jobs.ts

export type Suitability = 'high' | 'mid' | 'low';
export type RiskLevel   = 'low' | 'medium' | 'high';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  match: number;
  suitability: Suitability;
  aiRisk: RiskLevel;
  aiRiskPct: number;
  aiRiskExplanation: string;
  matchedSkills: string[];
  gapSkills: string[];
  recs: {
    learning: string[];
    skills: string[];
    tools: string[];
  };
}

export const JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Product Manager',
    company: 'Stripe',
    location: 'Remote • Full-time',
    salary: '$150K–$200K',
    match: 92,
    suitability: 'high',
    aiRisk: 'low',
    aiRiskPct: 18,
    aiRiskExplanation:
      'Product management requires strategic judgment, stakeholder relationships, and domain expertise that AI augments but cannot replace. The role involves navigating ambiguity and organisational dynamics where human intuition is essential.',
    matchedSkills: ['Product Strategy', 'Roadmapping', 'Data Analysis', 'Agile', 'Stakeholder Management', 'UX Research'],
    gapSkills: ['SQL Advanced', 'B2B SaaS Metrics'],
    recs: {
      learning: [
        'Complete a Product Analytics course on Reforge',
        "Study Stripe's developer ecosystem and payment infrastructure",
        "Read 'Continuous Discovery Habits' by Teresa Torres",
      ],
      skills: [
        'Practice SQL for funnel analysis and cohort queries',
        'Build experience with A/B testing frameworks',
        'Develop comfort with financial metrics (LTV, CAC, ARR)',
      ],
      tools: ['Amplitude for product analytics', 'dbt + Looker for data modelling', 'Notion for documentation and roadmapping'],
    },
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    company: 'Anthropic',
    location: 'San Francisco • Hybrid',
    salary: '$180K–$250K',
    match: 78,
    suitability: 'high',
    aiRisk: 'low',
    aiRiskPct: 12,
    aiRiskExplanation:
      'ML Engineers build and improve AI systems themselves — making this one of the most future-proof careers. Those who understand model behaviour, safety, and alignment will be in high demand as AI becomes more capable.',
    matchedSkills: ['Python', 'PyTorch', 'Machine Learning', 'Data Pipelines', 'Cloud Infrastructure'],
    gapSkills: ['Reinforcement Learning', 'Distributed Training', 'CUDA/GPU Optimisation', 'Alignment Research'],
    recs: {
      learning: [
        'Deep dive into transformer architectures and attention mechanisms',
        'Study reinforcement learning from human feedback (RLHF)',
        "Complete fast.ai's Practical Deep Learning course",
      ],
      skills: [
        'Build and train a language model from scratch',
        'Practice distributed training on multi-GPU setups',
        'Contribute to open-source ML projects on GitHub',
      ],
      tools: ['DeepSpeed for distributed training', 'Weights & Biases for experiment tracking', 'Ray for scalable ML workloads'],
    },
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'Netflix',
    location: 'Los Gatos • Hybrid',
    salary: '$130K–$175K',
    match: 71,
    suitability: 'mid',
    aiRisk: 'medium',
    aiRiskPct: 44,
    aiRiskExplanation:
      'Routine data analysis and reporting tasks are increasingly automated. However, data scientists who focus on causal inference, experimental design, and translating business problems are more insulated from automation.',
    matchedSkills: ['Python', 'Statistics', 'SQL', 'Data Visualisation', 'A/B Testing'],
    gapSkills: ['Causal Inference', 'Recommendation Systems', 'Spark/PySpark', 'Scala'],
    recs: {
      learning: [
        'Study causal inference and counterfactual reasoning',
        'Learn recommendation system architectures',
        'Take a course on large-scale data processing with Spark',
      ],
      skills: [
        'Build end-to-end recommendation systems',
        'Practice designing statistically rigorous experiments',
        'Develop storytelling skills for data insights',
      ],
      tools: ['Apache Spark for large-scale processing', 'dbt for data transformation', 'Tableau / Observable for visualisation'],
    },
  },
  {
    id: 4,
    title: 'Marketing Manager',
    company: 'Shopify',
    location: 'Remote • Full-time',
    salary: '$90K–$130K',
    match: 55,
    suitability: 'mid',
    aiRisk: 'medium',
    aiRiskPct: 58,
    aiRiskExplanation:
      'Content creation, campaign optimisation, and market analysis are increasingly handled by AI tools. Strategic marketing, brand positioning, and relationship-based roles remain more human-centric.',
    matchedSkills: ['Content Strategy', 'SEO', 'Project Management', 'Analytics'],
    gapSkills: ['Performance Marketing', 'Marketing Attribution', 'Paid Media', 'CRM Automation', 'Brand Strategy'],
    recs: {
      learning: [
        'Learn performance marketing and paid acquisition',
        'Study brand strategy and positioning frameworks',
        'Understand marketing attribution models',
      ],
      skills: [
        'Build experience with multi-channel campaign management',
        'Develop data-driven decision-making skills',
        'Practice with marketing automation tools',
      ],
      tools: ['HubSpot or Marketo for CRM automation', 'Google Analytics 4 for attribution', 'Meta Ads Manager for paid social'],
    },
  },
  {
    id: 5,
    title: 'Customer Support Specialist',
    company: 'Zendesk',
    location: 'Remote • Full-time',
    salary: '$55K–$75K',
    match: 38,
    suitability: 'low',
    aiRisk: 'high',
    aiRiskPct: 82,
    aiRiskExplanation:
      'AI chatbots and automated support systems can handle a large majority of Tier 1 and Tier 2 support tickets autonomously. Human agents will increasingly handle edge cases and emotionally complex situations only.',
    matchedSkills: ['Communication', 'Problem Solving'],
    gapSkills: ['Technical Support', 'CRM Platforms', 'API Troubleshooting', 'SLA Management'],
    recs: {
      learning: [
        'Pivot toward technical support or customer success management',
        'Learn the product/technical domain deeply',
        'Study customer success metrics (NRR, expansion revenue)',
      ],
      skills: [
        'Develop technical troubleshooting expertise',
        'Build skills in customer success and account management',
        'Learn to manage escalations and enterprise relationships',
      ],
      tools: ['Salesforce CRM', 'Zendesk Admin (configuration level)', 'SQL for support analytics'],
    },
  },
];

export interface Skill {
  id: number;
  label: string;
  cat: 'technical' | 'domain' | 'soft' | 'other';
}

export const SKILLS_INITIAL: Skill[] = [
  { id: 1,  label: 'Python',               cat: 'technical' },
  { id: 2,  label: 'Data Analysis',        cat: 'technical' },
  { id: 3,  label: 'SQL',                  cat: 'technical' },
  { id: 4,  label: 'Product Strategy',     cat: 'domain'    },
  { id: 5,  label: 'Project Management',   cat: 'domain'    },
  { id: 6,  label: 'Machine Learning',     cat: 'technical' },
  { id: 7,  label: 'Statistics',           cat: 'technical' },
  { id: 8,  label: 'Communication',        cat: 'soft'      },
  { id: 9,  label: 'A/B Testing',          cat: 'technical' },
  { id: 10, label: 'Data Visualisation',   cat: 'technical' },
  { id: 11, label: 'Stakeholder Mgmt',     cat: 'soft'      },
  { id: 12, label: 'Agile',               cat: 'domain'    },
  { id: 13, label: 'UX Research',          cat: 'domain'    },
  { id: 14, label: 'Content Strategy',     cat: 'domain'    },
];
