// src/app/lib/utils.ts

import type { RiskLevel, Suitability } from '../data/jobs';

export function getMatchColor(pct: number): string {
  if (pct >= 80) return '#34D399';
  if (pct >= 60) return '#FCD34D';
  return '#F87171';
}

export function getRiskClass(risk: RiskLevel): string {
  if (risk === 'low')    return 'risk-low';
  if (risk === 'medium') return 'risk-medium';
  return 'risk-high';
}

export function getSuitabilityLabel(s: Suitability): string {
  if (s === 'high') return 'Highly Suitable';
  if (s === 'mid')  return 'Moderately Suitable';
  return 'Needs Improvement';
}

export function formatFileSize(bytes: number): string {
  return `${(bytes / 1024).toFixed(0)} KB`;
}
