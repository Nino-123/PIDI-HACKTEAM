// src/app/components/DashboardPage.tsx

import { useMemo, useState } from 'react';
import { JOBS, type Job } from '../data/jobs';
import { getMatchColor, getRiskClass, getSuitabilityLabel } from '../lib/utils';
import { InterviewTipsCard } from './ui';

/* ─── Risk glow accent ────────────────────── */
function RiskGlow({ risk }: { risk: Job['aiRisk'] }) {
  const colors = { low: '#34D399', medium: '#FCD34D', high: '#EF4444' };
  return (
    <div
      className="risk-glow"
      style={{ background: colors[risk] }}
    />
  );
}

/* ─── Job card (left panel) ───────────────── */
function JobCard({ job, active, onClick }: { job: Job; active: boolean; onClick: () => void }) {
  const color = getMatchColor(job.match);
  const companyInitials = job.company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <div className={`job-card ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="job-card-brand">
        <div className="job-logo" aria-hidden="true">{companyInitials}</div>
        <span className="job-open-cta">View Details</span>
      </div>
      <div className="job-card-header">
        <div className="job-title"><span>{job.title}</span> · <span className="company-name">{job.company}</span></div>
        <div className="match-badge" style={{ color }}>{job.match}%</div>
      </div>
      <div className="job-company">{job.location.split(' · ')[0]}</div>
      <div className={`suitability-label suit-${job.suitability}`}>
        {getSuitabilityLabel(job.suitability)}
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${job.match}%`, background: color }} />
      </div>
    </div>
  );
}

/* ─── Detail panel (right) ────────────────── */
function DetailPanel({ job }: { job: Job }) {
  const matchColor = getMatchColor(job.match);
  const riskColor  = job.aiRisk === 'low' ? '#34D399' : job.aiRisk === 'medium' ? '#FCD34D' : '#EF4444';

  return (
    <div className="detail-panel">
      {/* Header */}
      <div className="detail-header">
        <div>
          <div className="detail-job-title"><span>{job.title}</span> · <span className="company-name">{job.company}</span></div>
          <div className="detail-meta">
            <span className="meta-chip">📍 {job.location}</span>
            <span className="meta-chip">💰 {job.salary}</span>
            <span className="meta-chip">⏱ Full-time</span>
          </div>
        </div>
        <button className="btn-primary" style={{ flexShrink: 0 }}>Apply Now</button>
      </div>

      {/* Score row */}
      <div className="score-row">
        <div className="score-card glass" style={{ borderColor: `${matchColor}33` }}>
          <div style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Match Score
          </div>
          <div className="score-num" style={{ color: matchColor }}>{job.match}%</div>
          <div className="score-interp" style={{ color: matchColor }}>{getSuitabilityLabel(job.suitability)}</div>
          <div className="bar-track" style={{ marginTop: '0.75rem' }}>
            <div className="bar-fill" style={{ width: `${job.match}%`, background: matchColor }} />
          </div>
        </div>

        <div className="score-card glass">
          <div style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Skills Match
          </div>
          <div className="score-num" style={{ color: '#A5B4FC' }}>{job.matchedSkills.length}</div>
          <div className="score-interp" style={{ color: '#64748B' }}>
            of {job.matchedSkills.length + job.gapSkills.length} required
          </div>
          <div style={{ display: 'flex', gap: '3px', marginTop: '0.75rem' }}>
            {[
              ...job.matchedSkills.map(() => true),
              ...job.gapSkills.map(() => false),
            ].map((matched, i) => (
              <div
                key={i}
                style={{
                  flex: 1, height: '3px', borderRadius: '100px',
                  background: matched ? '#6366F1' : 'rgba(255,255,255,0.08)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Skill analysis */}
      <div className="section-card glass">
        <div className="section-card-title" style={{ color: '#94A3B8' }}>🧩 Skill Analysis</div>
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            ✅ Matched Skills
          </div>
          <div className="tags-wrap">
            {job.matchedSkills.map(s => <span key={s} className="tag tag-green">{s}</span>)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            ⚠️ Skills to Develop
          </div>
          <div className="tags-wrap">
            {job.gapSkills.map(s => <span key={s} className="tag tag-red">{s}</span>)}
          </div>
        </div>
      </div>

      {/* AI Risk */}
      <div className={`risk-card ${getRiskClass(job.aiRisk)}`}>
        <RiskGlow risk={job.aiRisk} />
        <div className="risk-header">
          <div className="risk-title-wrap">
            <span className="risk-icon">⚡</span>
            <span className="risk-title" style={{ color: riskColor }}>
              AI Risk Level (Future Impact)
            </span>
          </div>
          <span className="risk-badge" style={{ textTransform: 'capitalize' }}>
            {job.aiRisk} Risk
          </span>
        </div>
        <div className="risk-pct">{job.aiRiskPct}% exposure</div>
        <div className="risk-bar-wrap">
          <div style={{
            height: '100%', width: `${job.aiRiskPct}%`, borderRadius: '100px',
            background: riskColor, transition: 'width 0.5s',
          }} />
        </div>
        <p className="risk-explanation">{job.aiRiskExplanation}</p>
        <div className="risk-credit">📊 Based on task analysis &amp; industry trends</div>
        <div className="risk-microcopy">
          Understanding AI risk helps you make future-proof career decisions.
        </div>
      </div>

      {/* Recommendations */}
      <div className="section-card glass">
        <div className="section-card-title" style={{ color: '#94A3B8' }}>💡 Strategic Career Recommendations</div>
        {[
          { icon: '🎓', title: 'Learning',            items: job.recs.learning },
          { icon: '🧠', title: 'Skill Development',   items: job.recs.skills   },
          { icon: '⚙️', title: 'Tools & Technologies', items: job.recs.tools   },
        ].map(({ icon, title, items }) => (
          <div className="rec-group" key={title}>
            <div className="rec-group-title">{icon} {title}</div>
            <ul className="rec-list">
              {items.map(item => <li key={item} className="rec-item">{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Interview Tips */}
      <InterviewTipsCard job={job} />
    </div>
  );
}

/* ─── Dashboard page ──────────────────────── */
export default function DashboardPage() {
  const [selected, setSelected] = useState<Job | null>(null);
  const [sortOrder, setSortOrder] = useState<'high-to-low' | 'low-to-high'>('high-to-low');
  const [suitabilityFilter, setSuitabilityFilter] = useState<'all' | Job['suitability']>('all');

  const visibleJobs = useMemo(() => {
    const suitabilityWeight: Record<Job['suitability'], number> = {
      high: 3,
      mid: 2,
      low: 1,
    };

    const filteredJobs = suitabilityFilter === 'all'
      ? JOBS
      : JOBS.filter(job => job.suitability === suitabilityFilter);

    return [...filteredJobs].sort((a, b) => {
      const weightDiff = suitabilityWeight[b.suitability] - suitabilityWeight[a.suitability];
      if (sortOrder === 'high-to-low') {
        return weightDiff !== 0 ? weightDiff : b.match - a.match;
      }
      return weightDiff !== 0 ? -weightDiff : a.match - b.match;
    });
  }, [sortOrder, suitabilityFilter]);

  if (!selected) {
    return (
      <div className="dashboard content">
        <div className="dashboard-overview">
          <div className="list-header dashboard-overview-header">
            <div className="list-header-main">
              <div className="list-header-title">Matched Roles</div>
              <div className="list-count">{visibleJobs.length} opportunities found</div>
            </div>
            <div className="roles-filter-wrap">
              <div className="roles-filter-group">
                <label htmlFor="roles-sort" className="roles-filter-label">Sort by suitability</label>
                <select
                  id="roles-sort"
                  className="roles-filter-select"
                  value={sortOrder}
                  onChange={event => setSortOrder(event.target.value as 'high-to-low' | 'low-to-high')}
                >
                  <option value="high-to-low">Highly Suitable to Needs Improvement</option>
                  <option value="low-to-high">Needs Improvement to Highly Suitable</option>
                </select>
              </div>
              <div className="roles-filter-group">
                <label htmlFor="roles-level" className="roles-filter-label">Show level</label>
                <select
                  id="roles-level"
                  className="roles-filter-select"
                  value={suitabilityFilter}
                  onChange={event => setSuitabilityFilter(event.target.value as 'all' | Job['suitability'])}
                >
                  <option value="all">All suitability levels</option>
                  <option value="high">Highly Suitable only</option>
                  <option value="mid">Moderately Suitable only</option>
                  <option value="low">Needs Improvement only</option>
                </select>
              </div>
            </div>
          </div>

          <div className="roles-grid">
            {visibleJobs.map(job => (
              <JobCard
                key={job.id}
                job={job}
                active={false}
                onClick={() => setSelected(job)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard content">
      <div className="dashboard-detail-shell">
        <div className="dashboard-detail-toolbar">
          <button
            className="btn-secondary dashboard-back-btn"
            onClick={() => setSelected(null)}
          >
            ← Back to matched roles
          </button>
        </div>
        <DetailPanel job={selected} />
      </div>
    </div>
  );
}
