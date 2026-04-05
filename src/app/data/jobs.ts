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
  {
    id: 6,
    title: 'Cloud Solutions Architect',
    company: 'Microsoft',
    location: 'Jakarta • Hybrid',
    salary: '$120K–$170K',
    match: 84,
    suitability: 'high',
    aiRisk: 'low',
    aiRiskPct: 20,
    aiRiskExplanation:
      'Architecture roles require systems thinking, stakeholder communication, and tradeoff decisions across cost, security, and reliability. AI can speed up analysis but does not replace final design accountability.',
    matchedSkills: ['Cloud Infrastructure', 'System Design', 'Stakeholder Management', 'Networking', 'Security Basics'],
    gapSkills: ['Kubernetes at Scale', 'FinOps', 'Disaster Recovery Design'],
    recs: {
      learning: [
        'Study cloud architecture patterns and reference architectures',
        'Learn cost optimisation strategies in multi-cloud environments',
        'Take an advanced Kubernetes architecture workshop',
      ],
      skills: [
        'Design production-ready architectures for high-traffic workloads',
        'Practice threat modelling and security-by-design reviews',
        'Improve communication of architecture decisions to non-technical stakeholders',
      ],
      tools: ['Terraform for IaC', 'Kubernetes for orchestration', 'Azure Well-Architected review tools'],
    },
  },
  {
    id: 7,
    title: 'Backend Engineer',
    company: 'Gojek',
    location: 'Jakarta • Full-time',
    salary: '$95K–$140K',
    match: 80,
    suitability: 'high',
    aiRisk: 'low',
    aiRiskPct: 24,
    aiRiskExplanation:
      'Backend engineers are needed to design resilient APIs, scalable services, and observability standards. AI can generate snippets, but core design and production ownership remain human-led.',
    matchedSkills: ['API Design', 'Node.js', 'Database Design', 'Testing', 'Git'],
    gapSkills: ['Event-Driven Architecture', 'gRPC', 'Performance Profiling'],
    recs: {
      learning: [
        'Review distributed systems fundamentals',
        'Study async messaging and event streaming patterns',
        'Learn service-level objective and reliability engineering basics',
      ],
      skills: [
        'Build one service with async events and idempotent consumers',
        'Practice profiling and eliminating database bottlenecks',
        'Improve incident response and postmortem quality',
      ],
      tools: ['PostgreSQL query planner', 'Kafka fundamentals', 'OpenTelemetry for tracing'],
    },
  },
  {
    id: 8,
    title: 'UX Researcher',
    company: 'Tokopedia',
    location: 'Remote • Contract',
    salary: '$70K–$105K',
    match: 69,
    suitability: 'mid',
    aiRisk: 'medium',
    aiRiskPct: 40,
    aiRiskExplanation:
      'AI can summarise interview data and generate hypotheses, but field studies, context understanding, and user empathy still require human researchers to avoid flawed product decisions.',
    matchedSkills: ['Interviewing', 'Survey Design', 'Persona Mapping', 'Synthesis'],
    gapSkills: ['Quantitative UX Metrics', 'Experiment Design', 'Accessibility Research'],
    recs: {
      learning: [
        'Take a course on mixed-method UX research',
        'Learn accessibility evaluation frameworks',
        'Study product analytics for behavioural insight',
      ],
      skills: [
        'Run end-to-end discovery for one product feature',
        'Combine qualitative findings with event metrics',
        'Improve facilitation of stakeholder insight workshops',
      ],
      tools: ['Maze for testing', 'Dovetail for synthesis', 'Amplitude for behavioural analytics'],
    },
  },
  {
    id: 9,
    title: 'Cybersecurity Analyst',
    company: 'Cloudflare',
    location: 'Singapore • Hybrid',
    salary: '$110K–$160K',
    match: 74,
    suitability: 'mid',
    aiRisk: 'low',
    aiRiskPct: 22,
    aiRiskExplanation:
      'Security operations can be AI-assisted, but investigation quality, threat judgement, and incident coordination require experienced analysts in constantly evolving attack conditions.',
    matchedSkills: ['Security Monitoring', 'Log Analysis', 'Risk Assessment', 'Linux'],
    gapSkills: ['Threat Hunting', 'Digital Forensics', 'SIEM Automation'],
    recs: {
      learning: [
        'Study ATT&CK framework use in incident investigation',
        'Learn cloud security controls and IAM hardening',
        'Complete practical labs for malware triage',
      ],
      skills: [
        'Build repeatable detection rules and response playbooks',
        'Practice incident communication with business stakeholders',
        'Develop a monthly threat intelligence review habit',
      ],
      tools: ['Microsoft Sentinel', 'Wireshark', 'Wazuh or Splunk for SIEM workflows'],
    },
  },
  {
    id: 10,
    title: 'Business Intelligence Analyst',
    company: 'Grab',
    location: 'Kuala Lumpur • Hybrid',
    salary: '$85K–$120K',
    match: 66,
    suitability: 'mid',
    aiRisk: 'medium',
    aiRiskPct: 49,
    aiRiskExplanation:
      'Dashboard generation is becoming automated, but defining business KPIs, validating metric logic, and influencing decisions still depend on analyst judgement and domain context.',
    matchedSkills: ['SQL', 'Dashboarding', 'Data Storytelling', 'Business Metrics'],
    gapSkills: ['Data Modelling', 'Cohort Analysis', 'Forecasting'],
    recs: {
      learning: [
        'Strengthen dimensional modelling fundamentals',
        'Study forecasting techniques for business planning',
        'Learn experimentation analysis in product contexts',
      ],
      skills: [
        'Design one executive dashboard with clear ownership and definitions',
        'Create reusable metric documentation and data contracts',
        'Practice turning analysis into decision-ready recommendations',
      ],
      tools: ['dbt', 'Looker Studio', 'BigQuery performance tools'],
    },
  },
  {
    id: 11,
    title: 'DevOps Engineer',
    company: 'Traveloka',
    location: 'Jakarta • On-site',
    salary: '$100K–$145K',
    match: 72,
    suitability: 'mid',
    aiRisk: 'low',
    aiRiskPct: 26,
    aiRiskExplanation:
      'Automation tools support DevOps work, yet reliability engineering, incident control, and deployment governance require hands-on expertise tailored to each production environment.',
    matchedSkills: ['CI/CD', 'Containers', 'Monitoring', 'Scripting', 'Cloud Ops'],
    gapSkills: ['Platform Engineering', 'Policy as Code', 'Chaos Testing'],
    recs: {
      learning: [
        'Study platform engineering patterns for internal developer platforms',
        'Learn policy as code with practical governance examples',
        'Explore reliability and chaos engineering practices',
      ],
      skills: [
        'Create reusable deployment templates with guardrails',
        'Improve observability coverage and alert quality',
        'Practice rollback and incident drills each sprint',
      ],
      tools: ['GitHub Actions', 'Prometheus + Grafana', 'Argo CD for GitOps'],
    },
  },
  {
    id: 12,
    title: 'Junior QA Engineer',
    company: 'Xendit',
    location: 'Remote • Full-time',
    salary: '$45K–$65K',
    match: 47,
    suitability: 'low',
    aiRisk: 'high',
    aiRiskPct: 67,
    aiRiskExplanation:
      'Basic scripted and repetitive testing flows are increasingly assisted by AI tools. Career growth requires moving toward quality strategy, automation engineering, and risk-based testing.',
    matchedSkills: ['Test Cases', 'Bug Reporting', 'Attention to Detail'],
    gapSkills: ['Test Automation', 'API Testing', 'Performance Testing', 'Quality Strategy'],
    recs: {
      learning: [
        'Learn API testing and automation fundamentals',
        'Study risk-based testing strategy for agile teams',
        'Take an introduction to performance and load testing',
      ],
      skills: [
        'Automate one end-to-end regression suite',
        'Build quality gates integrated with CI pipelines',
        'Improve exploratory testing and defect triage depth',
      ],
      tools: ['Playwright', 'Postman', 'k6 for lightweight performance checks'],
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
