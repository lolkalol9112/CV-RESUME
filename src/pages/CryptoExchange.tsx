import React from 'react';
import ProjectPage from './ProjectPage';
import './ProjectPage.css';

const images = [
  'uploader1.png',
  'uploader2.png',
  'uploader3.png',
  'uploader4.png',
];

export default function YTAutoUploader() {
  return (
    <div className="project-page project-page-horizontal">
      <button className="project-back-btn" onClick={() => (window.location.href = '/')}>back</button>
      <div className="project-header">
        <h1 className="project-header-title">Auto-Uploader</h1>
        <p className="project-header-description">
          Automated file uploader for cloud storage and content delivery. Supports batch uploads, progress tracking, and notifications.
        </p>
        <p className="project-header-stack">
          <b>Stack:</b> Node.js, React, TypeScript, AWS S3, WebSockets, Docker
        </p>
      </div>
      <div className="project-gallery-scroll">
        {images.map((name, idx) => (
          <img
            key={idx}
            src={`/images/Uploader/${name}`}
            alt={`Auto-Uploader screenshot ${idx+1}`}
            className="project-image-scroll project-image-scroll-large"
          />
        ))}
      </div>
      <div className="scroll-hint">Scroll horizontally <span className="scroll-hint-arrow">→</span></div>
    </div>
  );
}