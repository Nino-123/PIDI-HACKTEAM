// src/app/components/ui/index.tsx
// Shared, reusable UI primitives used across all pages.

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
            <div className={`step-circle ${isDone ? 'done' : isActive ? 'active' : ''}`}>
              {isDone ? '✓' : i + 1}
            </div>
            <span className={`step-label ${isDone ? 'done' : isActive ? 'active' : ''}`}>
              {label}
            </span>
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
}

export function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => onNavigate('landing')}>CareerAI</div>
      <div className="nav-links">
        <button className="nav-link" onClick={() => onNavigate('landing')}>Home</button>
        <button className="nav-btn"  onClick={() => onNavigate('upload')}>Upload CV →</button>
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
  job: any; // Assuming Job type from data/jobs
}

function generateInterviewTips(job: any) {
  // Simple generation based on job title
  const isTech = job.title.toLowerCase().includes('developer') || job.title.toLowerCase().includes('engineer');

  return {
    keySkills: isTech ? ['Problem Solving', 'Coding Proficiency', 'System Design'] : ['Leadership', 'Communication', 'Project Management'],
    questions: {
      technical: isTech ? ['Explain a complex problem you solved.', 'Describe your experience with [key tech].'] : ['How do you handle team conflicts?', 'Describe a project you led.'],
      behavioral: ['Tell me about a time you failed and learned from it.', 'How do you prioritize tasks?']
    },
    prepare: isTech ? ['GitHub portfolio', 'Personal projects', 'Coding challenges'] : ['Case studies', 'Leadership examples', 'Industry knowledge'],
    tips: ['Use STAR method: Situation, Task, Action, Result', 'Practice clear communication', 'Research the company thoroughly']
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
