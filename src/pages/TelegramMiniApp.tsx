import React from 'react';
import ProjectPage, { Section } from './ProjectPage';
import './ProjectPage.css';

const sections: Section[] = [
  {
    image: 'tg1.png',
    title: 'AI-powered Video Editor',
    description: 'Edit and generate videos directly in Telegram using advanced AI tools.',
    stack: 'TypeScript, Node.js, FastAPI, ffmpeg, OpenAI'
  },
  {
    image: 'tg2.png',
    title: 'Seamless API Integrations',
    description: 'Over 20 external APIs integrated for content, analytics, and automation.',
    stack: 'Telegram API, REST, Webhooks'
  },
  { image: 'tg3.png' },
  { image: 'tg4.png' },
  { image: 'tg5.png' },
  { image: 'tg6.png' },
  { image: 'tg7.png' },
  { image: 'tg8.png' },
];

export default function TelegramMiniApp() {
  return (
    <ProjectPage sections={sections} imagesFolder="Telegram" />
  );
}