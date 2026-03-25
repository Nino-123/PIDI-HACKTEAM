// src/app/components/UploadPage.tsx

import React, { useState } from 'react';
import { StepsBar, AnalyzingSpinner } from './ui';

interface UploadPageProps {
  onNext: () => void;
}

export default function UploadPage({ onNext }: UploadPageProps) {
  const [dragging,  setDragging]  = useState(false);
  const [file,      setFile]      = useState<{ name: string; size: number } | null>(null);
  const [progress,  setProgress]  = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [inputKey,  setInputKey]  = useState(0);

  function simulateUpload() {
    setProgress(0);
    let p = 0;
    const iv = setInterval(() => {
      p += 8;
      setProgress(Math.min(p, 100));
      if (p >= 100) clearInterval(iv);
    }, 80);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) { setFile({ name: f.name, size: f.size }); simulateUpload(); }
  }

  function handleClick() {
    const input = document.getElementById('cv-file-input') as HTMLInputElement | null;
    input?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) {
      setFile({ name: f.name, size: f.size });
      simulateUpload();
      // Reset input so choosing the same file again still triggers onChange.
      setInputKey(k => k + 1);
    }
  }

  function handleAnalyze() {
    setAnalyzing(true);
    setTimeout(() => { setAnalyzing(false); onNext(); }, 2000);
  }

  return (
    <div className="content page-inner">
      <StepsBar step={0} />
      <h1 className="page-title">Upload Your CV</h1>
      <p className="page-sub">Drop your CV below — we'll extract your skills and experience automatically.</p>

      {analyzing ? (
        <AnalyzingSpinner />
      ) : (
        <>
          <input
            key={inputKey}
            id="cv-file-input"
            type="file"
            accept=".pdf,.docx,.doc,.txt"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />

          <div
            className={`drop-zone ${dragging ? 'dragover' : ''}`}
            onClick={handleClick}
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
          >
            <div className="drop-icon">📄</div>
            <div className="drop-title">{file ? 'Replace your CV' : 'Drop your CV here'}</div>
            <div className="drop-sub">or click to browse from your computer</div>
            <div className="drop-formats">
              {['PDF', 'DOCX', 'DOC', 'TXT'].map(fmt => (
                <span key={fmt} className="format-badge">{fmt}</span>
              ))}
            </div>
          </div>

          {file && (
            <div className="uploaded-file">
              <div className="file-icon-box">📄</div>
              <div style={{ flex: 1 }}>
                <div className="file-name">{file.name}</div>
                <div className="file-size">{(file.size / 1024).toFixed(0)} KB</div>
                <div className="progress-bar-wrap">
                  <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>
              {progress === 100 && <div className="file-check">✓</div>}
            </div>
          )}

          <div style={{ marginTop: '2rem' }}>
            <button
              className="btn-primary"
              onClick={handleAnalyze}
              disabled={!file || progress < 100}
              style={{ opacity: (!file || progress < 100) ? 0.5 : 1 }}
            >
              Analyse CV →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
