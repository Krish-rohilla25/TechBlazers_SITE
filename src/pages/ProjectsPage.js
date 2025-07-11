import React from 'react';
import { projects } from '../data/mockData';

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4 h-48 object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-300 mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <div className="mb-2">
              <span className="font-semibold text-gray-400">Technologies: </span>
              <span className="text-gray-200">{project.technologies.join(', ')}</span>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
