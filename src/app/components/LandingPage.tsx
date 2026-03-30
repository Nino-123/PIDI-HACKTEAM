// src/app/components/LandingPage.tsx

import { useEffect, useRef, useState } from 'react';
import { MiniDashboard } from './figma';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [animatedValues, setAnimatedValues] = useState(() => STATS.map(() => 0));
  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return;

    let frameId = 0;
    let observer: IntersectionObserver | null = null;

    const startCountUp = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const durationMs = 1200;
      const startTime = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / durationMs, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setAnimatedValues(
          STATS.map(stat => Math.round(stat.value * easedProgress)),
        );

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
          return;
        }

        setAnimatedValues(STATS.map(stat => stat.value));
      };

      frameId = requestAnimationFrame(animate);
    };

    observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          startCountUp();
          observer?.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(statsElement);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="content">
      {/* ── Hero ─────────────────────────────────── */}
      <div className="hero">
        {/* Left: copy */}
        <div>
          <div className="hero-label">
            <span className="hero-dot" />
            Powered by AI-driven analysis
          </div>

          <h1 className="hero-title">
            Find the Right Job.<br />
            Stay Ahead of{' '}
            <span className="gradient-text">AI.</span>
          </h1>

          <p className="hero-sub">
            Upload your CV and get instant skill extraction, personalised job matches,
            AI disruption risk scores, and strategic career recommendations — all in one
            intelligent platform.
          </p>

          <div className="hero-stats" ref={statsRef}>
            {STATS.map((stat, index) => (
              <div className="stat" key={stat.label}>
                <div className="stat-num">
                  {formatStatValue(animatedValues[index])}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: dashboard preview */}
        <div className="preview-container">
          <div className="preview-glow" />
          <MiniDashboard />
        </div>
      </div>

      {/* ── Features ─────────────────────────────── */}
      <div className="section">
        <div className="section-label">Core Intelligence</div>
        <div className="section-title">
          Everything you need to navigate an AI-driven future
        </div>

        <div className="features-grid">
          {FEATURES.map(f => (
            <div
              key={f.title}
              className={`feature-card glass ${f.highlight ? 'glass-strong' : ''}`}
              style={f.highlight ? { borderColor: 'rgba(239,68,68,0.2)' } : undefined}
            >
              <div className="feature-accent" style={{ background: f.color }} />
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────── */}
      <div className="cta-bottom" style={{ maxWidth: 1100, margin: '0 auto 4rem' }}>
        <h2>Start Building Your Future</h2>
        <p>Join thousands of professionals who use CareerAI to make smarter career decisions.</p>
        <button className="btn-primary" onClick={onStart}>
          Analyse My CV Now →
        </button>
      </div>

      <footer className="landing-footer">
        PIDI Hackathon Team © 2026 CareerAI. All rights reserved
      </footer>
    </div>
  );
}

const formatStatValue = (value: number) => {
  if (value >= 1000) {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 0,
    }).format(value);
  }

  return value.toString();
};

const STATS = [
  { value: 50_000, suffix: '+', label: 'Careers analysed' },
  { value: 94, suffix: '%', label: 'Accuracy rate' },
  { value: 200, suffix: '+', label: 'Job categories' },
] as const;

/* ── Static data ────────────────────────────── */
const FEATURES = [
  {
    icon: '🎯',
    title: 'Precise Skill Matching',
    desc: 'Our AI extracts every skill from your CV and cross-references it against real job requirements, giving you an accurate compatibility score — not guesswork.',
    color: '#6366F1',
    highlight: false,
  },
  {
    icon: '⚡',
    title: 'AI Risk Intelligence',
    desc: 'Understand exactly how vulnerable each role is to automation. We analyse task composition, industry trends, and emerging AI capabilities to quantify your exposure.',
    color: '#EF4444',
    highlight: true,
  },
  {
    icon: '🧭',
    title: 'Career Recommendations',
    desc: 'Get personalised learning paths, skill development priorities, and tool recommendations that close your gaps and make you future-proof.',
    color: '#10B981',
    highlight: false,
  },
] as const;
