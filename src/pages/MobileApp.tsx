import React from 'react';
import ProjectPage from './ProjectPage';
import './ProjectPage.css';

const images = [
  'mobile1.PNG',
  'mobile2.jpg',
  'mobile3.PNG',
  'mobile4.PNG',
];

export default function MobileApp() {
  return (
    <ProjectPage
      title="Mobile App"
      description="Cross-platform mobile application for business automation and communication. Includes push notifications, real-time chat, and analytics dashboard."
      stack="React Native, Swift, TypeScript, Node.js, Firebase, Expo"
      images={images}
      imagesFolder="Mobile"
    />
  );
}