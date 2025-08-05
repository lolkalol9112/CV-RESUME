import React from 'react';
import ProjectPage from './ProjectPage';
import './ProjectPage.css';

const images = [
  '/images/telegram1.jpg',
  '/images/telegram2.jpg',
  '/images/telegram3.jpg',
];

export default function TelegramMiniApp() {
  return (
    <ProjectPage
      title="Telegram Mini-App"
      description="Telegram-based video editor and content platform for creators and businesses. Features AI-powered tools, seamless video editing, and integration with 20+ APIs."
      stack="TypeScript, Node.js, FastAPI, React, Telegram API, ffmpeg, OpenAI, Docker"
      images={images}
    />
  );
}