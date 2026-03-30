// src/app/components/figma/index.tsx
// Design-system tokens and the MiniDashboard hero preview.
// The "figma" folder mirrors design handoff components that map
// directly to Figma frames / design tokens.

/* ─────────────────────────────────────────────
   Design tokens (mirrors Figma variables)
───────────────────────────────────────────── */
export const tokens = {
  colors: {
    primary:      '#6366F1',
    primaryLight: '#818CF8',
    purple:       '#8B5CF6',
    blue:         '#3B82F6',
    green:        '#34D399',
    amber:        '#FCD34D',
    red:          '#EF4444',
    surface:      'rgba(255,255,255,0.04)',
    border:       'rgba(255,255,255,0.08)',
    textPrimary:  '#F1F5F9',
    textMuted:    '#94A3B8',
    textSubtle:   '#64748B',
  },
  radii: {
    sm:   '8px',
    md:   '12px',
    lg:   '16px',
    full: '100px',
  },
  shadows: {
    glow:      '0 0 24px rgba(99,102,241,0.35)',
    glowHover: '0 0 36px rgba(99,102,241,0.5)',
  },
} as const;

/* ─────────────────────────────────────────────
   MiniDashboard  – hero preview widget
───────────────────────────────────────────── */
export function MiniDashboard() {
  return (
    <div className="mini-dashboard">
      {/* Window chrome */}
      <div className="mini-header">
        <div className="mini-dot" style={{ background: '#EF4444' }} />
        <div className="mini-dot" style={{ background: '#FCD34D' }} />
        <div className="mini-dot" style={{ background: '#34D399' }} />
      </div>

      <div className="mini-body">
        {/* Match score card */}
        <div className="mini-card">
          <div className="mini-card-label">Match Score</div>
          <div className="mini-card-val" style={{ color: tokens.colors.green }}>92%</div>
          <div className="mini-bar-wrap">
            <div className="mini-bar" style={{ width: '92%', background: 'linear-gradient(90deg,#34D399,#059669)' }} />
          </div>
          <div style={{ fontSize: '0.6rem', color: tokens.colors.textSubtle, marginTop: '0.3rem' }}>
            Highly Suitable
          </div>
        </div>

        {/* AI Risk card */}
        <div className="mini-card">
          <div className="mini-card-label">AI Risk</div>
          <div className="mini-card-val" style={{ color: tokens.colors.green }}>Low</div>
          <div className="mini-bar-wrap">
            <div className="mini-bar" style={{ width: '18%', background: tokens.colors.green }} />
          </div>
          <div style={{ fontSize: '0.6rem', color: tokens.colors.textSubtle, marginTop: '0.3rem' }}>
            18% exposure
          </div>
        </div>

        {/* Skill gaps card – full width */}
        <div className="mini-card" style={{ gridColumn: '1 / -1' }}>
          <div className="mini-card-label">Skill Gaps</div>
          <div className="mini-tags">
            {['SQL Advanced', 'B2B Metrics', 'Roadmapping'].map(t => (
              <div
                key={t}
                className="mini-tag"
                style={{
                  background: 'rgba(239,68,68,0.12)',
                  color: '#FCA5A5',
                  border: '1px solid rgba(239,68,68,0.2)',
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
