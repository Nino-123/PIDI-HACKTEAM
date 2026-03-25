// src/app/components/ui/index.tsx
// Shared, reusable UI primitives used across all pages.

import React from 'react';

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
