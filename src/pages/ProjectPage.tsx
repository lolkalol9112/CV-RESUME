import React from 'react';
import './ProjectPage.css';

type ProjectPageProps = {
  title: string;
  description: string;
  stack: string;
  images: string[]; // только имена файлов
  imagesFolder: string;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ title, description, stack, images, imagesFolder }) => {
  return (
    <div className="project-page">
      <div className="project-layout">
        <div className="project-gallery-scroll">
          {images.map((name, idx) => (
            <img
              key={idx}
              src={`/images/${imagesFolder}/${name}`}
              alt={title + ' screenshot ' + (idx+1)}
              className="project-image-scroll"
            />
          ))}
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