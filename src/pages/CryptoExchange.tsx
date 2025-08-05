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
    <ProjectPage
      title="Auto-Uploader"
      description="Automated file uploader for cloud storage and content delivery. Supports batch uploads, progress tracking, and notifications."
      stack="Node.js, React, TypeScript, AWS S3, WebSockets, Docker"
      images={images}
      imagesFolder="Uploader"
    />
  );
}