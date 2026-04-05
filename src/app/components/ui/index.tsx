// src/app/components/ui/index.tsx
// Shared, reusable UI primitives used across all pages.

import type { Job } from '../../data/jobs';

/* ─────────────────────────────────────────────
   StepsBar
───────────────────────────────────────────── */
interface StepsBarProps {
  step: number; // 0 = Upload, 1 = Skills, 2 = Dashboard
}

export function StepsBar({ step }: StepsBarProps) {
  const steps = ['Upload CV', 'Review Skills', 'Dashboard'];
  return (
    <div className="steps">
      {steps.map((label, i) => {
        const isDone   = i < step;
        const isActive = i === step;
        return (
          <div key={i} className="step">
            {i > 0 && <div className={`step-line ${i <= step ? 'done' : ''}`} />}
            <div
              className={`step-circle ${isDone ? 'done' : isActive ? 'active' : ''}`}
              aria-label={label}
              title={label}
            >
              {isDone ? '✓' : i + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Navbar
───────────────────────────────────────────── */
interface NavbarProps {
  onNavigate: (page: string) => void;
  page: string;
}

export function Navbar({ onNavigate, page }: NavbarProps) {
  const getNavLinks = () => {
    switch (page) {
      case 'landing':
        return (
          <button className="nav-btn" onClick={() => onNavigate('upload')}>
            <span className="nav-btn-label">Upload CV</span>
            <span className="nav-btn-icon" aria-hidden="true">→</span>
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => onNavigate('landing')}>CareerAI</div>
      <div className="nav-links">
        {getNavLinks()}
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   Background decorations (blobs + grid)
───────────────────────────────────────────── */
export function BackgroundEffects() {
  return (
    <>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="grid-texture" />
    </>
  );
}

/* ─────────────────────────────────────────────
   AnalyzingSpinner
───────────────────────────────────────────── */
export function AnalyzingSpinner() {
  return (
    <div className="analyzing glass" style={{ padding: '3rem', textAlign: 'center' }}>
      <div className="spinner" />
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '0.5rem' }}>
        Analysing your CV…
      </div>
      <div style={{ color: '#64748B', fontSize: '0.85rem' }}>
        Extracting skills, experience and qualifications
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   InterviewTipsCard
───────────────────────────────────────────── */
interface InterviewTipsCardProps {
  job: Job;
}

interface InterviewTips {
  keySkills: string[];
  questions: {
    technical: string[];
    behavioral: string[];
  };
  prepare: string[];
  tips: string[];
}

const ROLE_INTERVIEW_TIPS: Record<string, InterviewTips> = {
  'Senior Product Manager': {
    keySkills: ['Product Strategy', 'Roadmapping', 'Stakeholder Management'],
    questions: {
      technical: [
        'How would you define and track success metrics for a new payments feature at Stripe?',
        'Walk through how you prioritise roadmap items when engineering capacity is limited.',
      ],
      behavioral: [
        'Tell me about a time you aligned conflicting stakeholder priorities.',
        'Describe a product decision that failed and what you changed afterward.',
      ],
    },
    prepare: ['One product case study with metric impact', 'A roadmap sample and prioritisation rationale', 'Examples of cross-functional collaboration'],
    tips: ['Anchor answers in customer problem and business impact', 'Use clear KPI language (adoption, conversion, retention)', 'Show tradeoff thinking, not just feature ideas'],
  },
  'Machine Learning Engineer': {
    keySkills: ['Model Architecture', 'PyTorch', 'MLOps'],
    questions: {
      technical: [
        'How do you evaluate and debug model performance regressions in production?',
        'Explain your approach to distributed training and experiment tracking.',
      ],
      behavioral: [
        'Tell me about a model you shipped under tight constraints.',
        'Describe a disagreement with a researcher or engineer and how you resolved it.',
      ],
    },
    prepare: ['A model deployment project with measurable outcomes', 'Knowledge of transformer optimization techniques', 'Examples of training-cost/performance tradeoffs'],
    tips: ['State dataset assumptions explicitly', 'Discuss failure modes and mitigation', 'Highlight reproducibility and monitoring practices'],
  },
  'Data Scientist': {
    keySkills: ['Experiment Design', 'Causal Inference', 'SQL'],
    questions: {
      technical: [
        'How would you design an A/B test for a recommendation ranking change?',
        'When would you choose causal inference over predictive modeling?',
      ],
      behavioral: [
        'Describe a time your analysis changed a business decision.',
        'Tell me about communicating uncertainty to non-technical stakeholders.',
      ],
    },
    prepare: ['One end-to-end experiment case', 'SQL examples involving cohorts/funnels', 'A dashboard or narrative from real analysis'],
    tips: ['Emphasize decision impact over model complexity', 'Quantify lift, confidence, and risks', 'Show how you validate data quality early'],
  },
  'Marketing Manager': {
    keySkills: ['Campaign Strategy', 'Performance Marketing', 'Attribution'],
    questions: {
      technical: [
        'How would you allocate budget across channels for a new product launch?',
        'What attribution approach would you use for multi-channel campaigns and why?',
      ],
      behavioral: [
        'Share a campaign that underperformed and what you changed.',
        'How do you balance brand goals with short-term performance targets?',
      ],
    },
    prepare: ['A campaign post-mortem with KPI movement', 'Channel budget planning framework', 'Examples of creative testing results'],
    tips: ['Tie creative choices to measurable outcomes', 'Use CAC/ROAS/LTV terminology confidently', 'Show iterative testing mindset'],
  },
  'Customer Support Specialist': {
    keySkills: ['Customer Communication', 'Issue Triage', 'CRM Workflow'],
    questions: {
      technical: [
        'How do you diagnose and route complex customer issues efficiently?',
        'How would you use support analytics to reduce repeat tickets?',
      ],
      behavioral: [
        'Describe handling an escalated customer case under pressure.',
        'Tell me about improving a support process for your team.',
      ],
    },
    prepare: ['Examples of difficult customer interactions', 'Your escalation and SLA handling approach', 'Ideas to improve support macros/knowledge base'],
    tips: ['Show empathy plus structure in every answer', 'Demonstrate ownership until issue resolution', 'Highlight how you document learnings for the team'],
  },
  'Cloud Solutions Architect': {
    keySkills: ['System Design', 'Cloud Security', 'Cost Optimization'],
    questions: {
      technical: [
        'Design a highly available architecture for a regional fintech workload.',
        'How do you balance reliability, security, and cloud cost in architecture decisions?',
      ],
      behavioral: [
        'Tell me about persuading stakeholders to adopt a new architecture.',
        'Describe a migration project with major risk and how you handled it.',
      ],
    },
    prepare: ['Architecture diagrams with tradeoff notes', 'One migration or scaling case', 'Security and disaster recovery strategy examples'],
    tips: ['Explain choices with explicit constraints', 'Mention failure scenarios and DR plans', 'Use business language when discussing architecture'],
  },
  'Backend Engineer': {
    keySkills: ['API Design', 'Distributed Systems', 'Performance Optimization'],
    questions: {
      technical: [
        'How would you design an idempotent API for payment processing?',
        'What is your approach to diagnosing latency in a high-throughput service?',
      ],
      behavioral: [
        'Describe a production incident and your role in resolving it.',
        'Tell me about collaborating with frontend/product to refine API contracts.',
      ],
    },
    prepare: ['Service design example with scaling strategy', 'A performance tuning story with metrics', 'Testing approach (unit, integration, contract)'],
    tips: ['Discuss reliability patterns (retry, circuit breaker, queue)', 'Include observability in technical answers', 'Quantify impact (latency, error rate, throughput)'],
  },
  'UX Researcher': {
    keySkills: ['User Interviews', 'Insight Synthesis', 'Experiment Design'],
    questions: {
      technical: [
        'How do you choose between qualitative and quantitative methods for a feature?',
        'Walk through your process from research planning to actionable insights.',
      ],
      behavioral: [
        'Tell me about a time research contradicted stakeholder assumptions.',
        'How did you influence product decisions with your findings?',
      ],
    },
    prepare: ['A research case study portfolio', 'Interview guide and synthesis sample', 'Examples of translating findings into product changes'],
    tips: ['Focus on user problem clarity, not just methods', 'Explain prioritization of insights', 'Show how you close the loop with product teams'],
  },
  'Cybersecurity Analyst': {
    keySkills: ['Threat Detection', 'Incident Response', 'Risk Assessment'],
    questions: {
      technical: [
        'How would you triage a suspicious login pattern across multiple regions?',
        'What signals do you prioritize when writing high-quality detection rules?',
      ],
      behavioral: [
        'Describe an incident where quick communication prevented escalation.',
        'Tell me about improving a security process after a postmortem.',
      ],
    },
    prepare: ['Incident investigation walkthrough', 'Detection logic examples', 'Understanding of MITRE ATT&CK mapping'],
    tips: ['Structure answers by detection, containment, recovery', 'Balance false positives and coverage in explanations', 'Demonstrate calm, clear communication under pressure'],
  },
  'Business Intelligence Analyst': {
    keySkills: ['KPI Modeling', 'Dashboard Design', 'Stakeholder Communication'],
    questions: {
      technical: [
        'How do you ensure KPI definitions remain consistent across teams?',
        'Describe your approach to building an executive dashboard from raw data.',
      ],
      behavioral: [
        'Tell me about a time you challenged a misleading metric.',
        'Describe how you handled conflicting requests from multiple business teams.',
      ],
    },
    prepare: ['Portfolio of dashboards with decision outcomes', 'Metric dictionary example', 'Data quality validation checklist'],
    tips: ['Prioritize business questions before visual design', 'State assumptions and data limitations clearly', 'Emphasize actionable insights over chart volume'],
  },
  'DevOps Engineer': {
    keySkills: ['CI/CD', 'Observability', 'Infrastructure Automation'],
    questions: {
      technical: [
        'How would you design a safe deployment strategy for a critical service?',
        'What telemetry do you require before declaring a release healthy?',
      ],
      behavioral: [
        'Share an outage you handled and what changed afterward.',
        'Describe how you collaborated with developers to improve delivery speed.',
      ],
    },
    prepare: ['Pipeline architecture and rollback strategy', 'Monitoring dashboard examples', 'One incident postmortem with preventive actions'],
    tips: ['Frame answers around reliability and delivery velocity balance', 'Mention automation and guardrails together', 'Quantify improvements in MTTR, failure rate, or deploy frequency'],
  },
  'Junior QA Engineer': {
    keySkills: ['Test Design', 'Bug Analysis', 'Automation Fundamentals'],
    questions: {
      technical: [
        'How do you prioritize test cases when release time is limited?',
        'Explain how you would start automating a repetitive regression flow.',
      ],
      behavioral: [
        'Tell me about reporting a critical bug and coordinating with developers.',
        'Describe a time you improved test coverage with limited resources.',
      ],
    },
    prepare: ['Sample test plan and bug reports', 'Basic automation script examples', 'Clear understanding of severity vs priority'],
    tips: ['Use risk-based testing language', 'Be explicit about reproduction steps and evidence', 'Show growth mindset toward automation and quality strategy'],
  },
};

function generateInterviewTips(job: Job): InterviewTips {
  const specificTips = ROLE_INTERVIEW_TIPS[job.title];
  if (specificTips) {
    return specificTips;
  }

  // Fallback stays role-aware by using each job's own attributes.
  const roleSkills = job.matchedSkills.slice(0, 3);
  const gapFocus = job.gapSkills.slice(0, 2);

  return {
    keySkills: roleSkills.length ? roleSkills : ['Communication', 'Problem Solving', 'Collaboration'],
    questions: {
      technical: [
        `How would you apply ${roleSkills[0] ?? 'your core skill'} to deliver impact in this ${job.title} role?`,
        `Which approach would you use to improve one of these gap areas: ${gapFocus.join(', ') || 'role requirements'}?`,
      ],
      behavioral: [
        `Tell me about a project that best reflects your fit for ${job.title}.`,
        'Describe how you handle tight deadlines and shifting priorities.',
      ],
    },
    prepare: [
      `One portfolio example relevant to ${job.title}`,
      'A clear summary of measurable outcomes from your past work',
      `Concrete plan to close gaps in ${gapFocus.join(' and ') || 'critical skills'}`,
    ],
    tips: [
      `Research ${job.company}'s product, market, and hiring expectations`,
      'Use STAR with metrics to keep answers concise and credible',
      'Connect every answer to role impact, collaboration, and learning agility',
    ],
  };
}

export function InterviewTipsCard({ job }: InterviewTipsCardProps) {
  const tips = generateInterviewTips(job);

  return (
    <div className="section-card glass">
      <div className="section-card-title" style={{ color: '#94A3B8' }}>🎤 Interview Preparation Tips</div>

      <details className="accordion-item">
        <summary className="accordion-summary">
          <span className="accordion-icon">🛠️</span> Key Skills to Prepare
        </summary>
        <div className="accordion-content">
          <ul className="tips-list">
            {tips.keySkills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </details>

      <details className="accordion-item">
        <summary className="accordion-summary">
          <span className="accordion-icon">❓</span> Common Interview Questions
        </summary>
        <div className="accordion-content">
          <div style={{ marginBottom: '1rem' }}>
            <strong>Technical:</strong>
            <ul className="tips-list">
              {tips.questions.technical.map(q => <li key={q}>{q}</li>)}
            </ul>
          </div>
          <div>
            <strong>Behavioral:</strong>
            <ul className="tips-list">
              {tips.questions.behavioral.map(q => <li key={q}>{q}</li>)}
            </ul>
          </div>
        </div>
      </details>

      <details className="accordion-item">
        <summary className="accordion-summary">
          <span className="accordion-icon">📋</span> Things to Prepare
        </summary>
        <div className="accordion-content">
          <ul className="tips-list">
            {tips.prepare.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </details>

      <details className="accordion-item">
        <summary className="accordion-summary">
          <span className="accordion-icon">💡</span> Tips for Answering
        </summary>
        <div className="accordion-content">
          <ul className="tips-list">
            {tips.tips.map(tip => <li key={tip}>{tip}</li>)}
          </ul>
        </div>
      </details>
    </div>
  );
}
