import React from 'react';
import ProjectPage from './ProjectPage';
import './ProjectPage.css';

const images = [
  'tg1.png',
  'tg2.png',
  'tg3.png',
  'tg4.png',
  'tg5.png',
  'tg6.png',
  'tg7.png',
  'tg8.png',
];

export default function TelegramMiniApp() {
  return (
    <ProjectPage
      title="Telegram Mini-App"
      description="Telegram-based video editor and content platform for creators and businesses. Features AI-powered tools, seamless video editing, and integration with 20+ APIs."
      stack="TypeScript, Node.js, FastAPI, React, Telegram API, ffmpeg, OpenAI, Docker"
      images={images}
      imagesFolder="Telegram"
    />
  );
}