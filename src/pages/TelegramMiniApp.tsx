import React from 'react';
import ProjectPage, { Section } from './ProjectPage';
import './ProjectPage.css';

const sections: Section[] = [
  {
    image: 'tg3.png',
    title: 'Seamless API Integrations',
    description: 'Over 20 external APIs integrated for content, analytics, and automation.',
  },
  {
    image: 'tg1.png',
  },
  {
    image: 'tg4.png',
    title: 'AI-powered Video Editor',
    description: 'Edit and generate videos directly in Telegram using advanced AI tools.',
  },
  {
    image: 'tg2.png',
    title: 'Adaptive design',
  },
  {
    image: 'tg8.png',
    image2: 'tg6.png',
    title: 'For both desktop and mobile',
  },
  {
    image: 'tg7.png',
    image2: 'tg5.png',
    title: 'First ever video editor in Telegram!',
    description: 'Working both on mobile and desktop.',
  },
];

export default function TelegramMiniApp() {
  return (
    <ProjectPage
      sections={sections}
      imagesFolder="Telegram"
      title="Telegram Mini-App"
      description="Telegram-based video editor and content platform for creators and businesses. Features AI-powered tools and seamless video editing."
      stack="Next.js, Python, FastAPI, ffmpeg, Telegram API."
    />
  );
}