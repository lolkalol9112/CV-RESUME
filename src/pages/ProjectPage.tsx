import React from 'react';
import './ProjectPage.css';

type ProjectPageProps = {
  title: string;
  description: string;
  stack: string;
  images: string[];
};

const ProjectPage: React.FC<ProjectPageProps> = ({ title, description, stack, images }) => {
  return (
    <div className="project-page">
      <h1 className="project-title">{title}</h1>
      <p className="project-description">{description}</p>
      <p className="project-stack"><b>Stack:</b> {stack}</p>
      <div className="project-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={title + ' screenshot ' + (idx+1)} className="project-image" />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;