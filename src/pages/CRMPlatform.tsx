import React from 'react';
import ProjectPage from './ProjectPage';
import './ProjectPage.css';

const images = [
  'crm1.png',
  'crm2.png',
  'crm3.png',
];

export default function CRMPlatform() {
  return (
    <div className="project-page project-page-horizontal">
      <button className="project-back-btn" onClick={() => (window.location.href = '/')}>back</button>
      <div className="project-header">
        <h1 className="project-header-title">CRM Platform</h1>
        <p className="project-header-description">
          Modern CRM for HR and recruiting. Automated workflows, analytics, and integrations for fast placements and team collaboration.
        </p>
        <p className="project-header-stack">
          <b>Stack:</b> Next.js, Node.js, FastAPI, PostgreSQL
        </p>
      </div>
      <div className="project-gallery-scroll">
        {images.map((name, idx) => (
          <img
            key={idx}
            src={`/images/CRM/${name}`}
            alt={`CRM Platform screenshot ${idx+1}`}
            className="project-image-scroll project-image-scroll-large"
          />
        ))}
      </div>
      <div className="scroll-hint">Scroll horizontally <span className="scroll-hint-arrow">→</span></div>
    </div>
  );
}