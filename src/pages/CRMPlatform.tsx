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
    <ProjectPage
      title="CRM Platform"
      description="Modern CRM for HR and recruiting. Automated workflows, analytics, and integrations for fast placements and team collaboration."
      stack="React, Node.js, FastAPI, PostgreSQL, Docker, TypeScript"
      images={images}
      imagesFolder="CRM"
    />
  );
}