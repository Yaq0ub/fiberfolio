import React from 'react';
import logo from '../assets/images/logo.png';
import { projects } from '../constants';

// ProjectCard component that displays each project card
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {/* Loop through the tags array and render each tag */}
          {project.tags.map((tag, index) => (
            <span key={index} className={`tag ${tag.color}`}>
              {tag.name}
            </span>
          ))}
        </div>
        <a href={project.source_code_link} className="source-code-link">
          View Source Code
        </a>
      </div>
    </div>
  );
};

// Projects component that renders all the project cards
function Projects() {
  return (
    <div className="projects-container">
      {/* Loop through the projects array and render each ProjectCard component */}
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

// Export the Projects component
export default Projects;
