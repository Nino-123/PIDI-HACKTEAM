// src/app/App.tsx
// Root component — renders the Navbar, background effects, and the
// currently active page based on `PageKey` state.

import { useState } from 'react';
import type { PageKey } from './routes';

import { Navbar, BackgroundEffects } from './components/ui';
import LandingPage     from './components/LandingPage';
import UploadPage      from './components/UploadPage';
import SkillReviewPage from './components/SkillReviewPage';
import DashboardPage   from './components/DashboardPage';

// Page-level CSS (imports globals + component styles)
import '../styles/globals.css';
import '../styles/components.css';

export default function App() {
  const [page, setPage] = useState<PageKey>('landing');

  function navigate(key: string) {
    setPage(key as PageKey);
  }

  return (
    <div className="app">
      <BackgroundEffects />

      <Navbar onNavigate={navigate} page={page} />

      {page === 'landing'   && <LandingPage   onStart={() => navigate('upload')}    />}
      {page === 'upload'    && <UploadPage     onNext={() => navigate('skills')}     />}
      {page === 'skills'    && <SkillReviewPage onNext={() => navigate('dashboard')} />}
      {page === 'dashboard' && <DashboardPage />}
    </div>
  );
}
