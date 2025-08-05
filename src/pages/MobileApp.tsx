import React from 'react';
import './ProjectPage.css';

const images = [
  'mobile1.PNG',
  'mobile2.jpg',
  'mobile3.PNG',
  'mobile4.PNG',
];

export default function MobileApp() {
  return (
    <div className="project-page project-page-horizontal">
      <button className="project-back-btn" onClick={() => (window.location.href = '/')}>back</button>
      <div className="project-header">
        <h1 className="project-header-title">Mobile App</h1>
        <p className="project-header-description">
          iOS app for freelancers to manage their budgets, track cash flow, and generate tax reports.
        </p>
        <p className="project-header-stack">
          <b>Stack:</b> Swift, SwiftUI, SwiftData.
        </p>
      </div>
      <div className="project-gallery-scroll">
        {images.map((name, idx) => (
          <img
            key={idx}
            src={`/images/Mobile/${name}`}
            alt={`Mobile App screenshot ${idx+1}`}
            className="mobile-app-image"
          />
        ))}
      </div>
    </div>
  );
}