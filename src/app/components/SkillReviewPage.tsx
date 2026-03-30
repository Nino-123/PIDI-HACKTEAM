// src/app/components/SkillReviewPage.tsx

import { useState } from 'react';
import { StepsBar } from './ui';
import { SKILLS_INITIAL, type Skill } from '../data/jobs';

interface SkillReviewPageProps {
  onNext: () => void;
}

const CATEGORY_LABELS: Record<Skill['cat'], string> = {
  technical: '⚙️ Technical',
  domain:    '🧠 Domain',
  soft:      '🤝 Soft Skills',
  other:     '✨ Other',
};

export default function SkillReviewPage({ onNext }: SkillReviewPageProps) {
  const [skills, setSkills] = useState<Skill[]>(SKILLS_INITIAL);
  const [input,  setInput]  = useState('');

  const removeSkill = (id: number) =>
    setSkills(prev => prev.filter(s => s.id !== id));

  const addSkill = () => {
    const label = input.trim();
    if (!label) return;
    setSkills(prev => [...prev, { id: Date.now(), label, cat: 'other' }]);
    setInput('');
  };

  return (
    <div className="content page-inner">
      <StepsBar step={1} />
      <h1 className="page-title">Review Your Skills</h1>
      <p className="page-sub">
        We extracted these skills from your CV. Remove any that don't apply,
        or add skills we missed.
      </p>

      {/* Skills grouped by category */}
      {(Object.keys(CATEGORY_LABELS) as Skill['cat'][]).map(cat => {
        const group = skills.filter(s => s.cat === cat);
        if (!group.length) return null;
        return (
          <div className="skill-categories" key={cat}>
            <div className="skill-cat-label">{CATEGORY_LABELS[cat]}</div>
            <div className="skills-container">
              {group.map(s => (
                <span key={s.id} className="skill-tag" onClick={() => removeSkill(s.id)}>
                  {s.label} <span className="tag-x">✕</span>
                </span>
              ))}
            </div>
          </div>
        );
      })}

      {/* Add skill */}
      <div className="skill-input-wrap">
        <input
          className="skill-input"
          placeholder="Add a skill (e.g. React, Copywriting, Figma)…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addSkill()}
        />
        <button className="btn-primary" onClick={addSkill} style={{ padding: '0.7rem 1.25rem' }}>
          Add
        </button>
      </div>

      <div style={{ paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{skills.length} skills detected</div>
      </div>

      <button className="btn-primary" onClick={onNext}>
        Continue to Analysis →
      </button>
    </div>
  );
}
