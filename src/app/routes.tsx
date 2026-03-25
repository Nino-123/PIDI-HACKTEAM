// src/app/routes.tsx
// Centralised route map for CareerAI.
// Uses a simple string-based page key — swap for React Router
// or Next.js App Router routes when ready.

export type PageKey = 'landing' | 'upload' | 'skills' | 'dashboard';

export interface Route {
  key: PageKey;
  label: string;
  path: string;
}

export const ROUTES: Route[] = [
  { key: 'landing',   label: 'Home',       path: '/'          },
  { key: 'upload',    label: 'Upload CV',  path: '/upload'    },
  { key: 'skills',    label: 'My Skills',  path: '/skills'    },
  { key: 'dashboard', label: 'Dashboard',  path: '/dashboard' },
];

/** Returns the route object for a given key, or undefined if not found. */
export function getRoute(key: PageKey): Route | undefined {
  return ROUTES.find(r => r.key === key);
}
