import React from 'react';
import './ProjectPage.css';

export type Section = {
  image: string;
  image2?: string;
  title?: string;
  description?: string;
  stack?: string;
};

type ProjectPageProps =
  | {
      sections: Section[];
      imagesFolder: string;
      title: string;
      description: string;
      stack: string;
    }
  | {
      title: string;
      description: string;
      stack: string;
      images: string[];
      imagesFolder: string;
    };

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  if ('sections' in props) {
    const { sections, imagesFolder, title, description, stack } = props;
    return (
      <div className="project-page-vertical">
        <button className="project-back-btn" onClick={() => (window.location.href = '/')}>back</button>
        <div className="project-header">
          <h1 className="project-header-title">{title}</h1>
          <p className="project-header-description">{description}</p>
          <p className="project-header-stack"><b>Stack:</b> {stack}</p>
        </div>
        {sections.map((section, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div className={`project-section-row${isReversed ? ' reversed' : ''}`} key={idx}>
              <div className={`project-section-image-wrap${section.image2 ? ' double' : ''}`}>
                <img
                  src={`/images/${imagesFolder}/${section.image}`}
                  alt={section.title || 'Project screenshot ' + (idx + 1)}
                  className={section.image2 ? 'project-section-image half' : 'project-section-image'}
                />
                {section.image2 && (
                  <img
                    src={`/images/${imagesFolder}/${section.image2}`}
                    alt={section.title || 'Project screenshot ' + (idx + 1) + 'b'}
                    className="project-section-image half"
                  />
                )}
              </div>
              <div className="project-section-info">
                {section.title && <h1 className="project-title">{section.title}</h1>}
                {section.description && <p className="project-description">{section.description}</p>}
                {section.stack && <p className="project-stack"><b>Stack:</b> {section.stack}</p>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  // fallback: старый режим
  const { title, description, stack, images, imagesFolder } = props;
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