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
    const { sections, imagesFolder } = props;
    return (
      <div className="project-page-vertical">
        {sections.map((section, idx) => (
          <div className="project-section-row" key={idx}>
            <div className="project-section-info">
              {section.title && <h1 className="project-title">{section.title}</h1>}
              {section.description && <p className="project-description">{section.description}</p>}
              {section.stack && <p className="project-stack"><b>Stack:</b> {section.stack}</p>}
            </div>
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
          </div>
        ))}
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