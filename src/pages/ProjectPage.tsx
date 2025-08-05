import React from 'react';
import './ProjectPage.css';

type ProjectPageProps = {
  title: string;
  description: string;
  stack: string;
  images: string[];
};

const ProjectPage: React.FC<ProjectPageProps> = ({ title, description, stack, images }) => {
  const isVertical = images.length === 2;
  return (
    <div className="project-page">
      <div className={`project-layout${isVertical ? ' vertical' : ''}`}>
        <div className="project-images">
          {isVertical ? (
            images.map((src, idx) => (
              <img key={idx} src={src} alt={title + ' screenshot ' + (idx+1)} className="project-image" />
            ))
          ) : (
            <img src={images[0]} alt={title + ' screenshot'} className="project-image" />
          )}
        </div>
        <div className="project-info">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>
          <p className="project-stack"><b>Stack:</b> {stack}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;