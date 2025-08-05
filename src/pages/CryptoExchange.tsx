import React from 'react';
import ProjectPage from './ProjectPage';
import './ProjectPage.css';

const images = [
  '/images/crypto1.jpg',
  '/images/crypto2.jpg',
  '/images/crypto3.jpg',
];

export default function CryptoExchange() {
  return (
    <ProjectPage
      title="Crypto Exchange"
      description="Secure cryptocurrency exchange platform with real-time trading, KYC, and analytics. Focus on speed, security, and user experience."
      stack="React, Node.js, FastAPI, PostgreSQL, WebSockets, Docker"
      images={images}
    />
  );
}