import React from 'react';
import ProjectPage from './ProjectPage';
import './ProjectPage.css';

const images = [
  '/images/crm1.jpg',
  '/images/crm2.jpg',
  '/images/crm3.jpg',
];

export default function CRMPlatform() {
  return (
    <ProjectPage
      title="CRM Platform"
      description="Modern CRM for HR and recruiting. Automated workflows, analytics, and integrations for fast placements and team collaboration."
      stack="React, Node.js, FastAPI, PostgreSQL, Docker, TypeScript"
      images={images}
    />
  );
}