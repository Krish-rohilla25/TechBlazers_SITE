import React from 'react';
import { Users, ExternalLink, Github, Cpu, Code } from 'lucide-react';

const ProjectCard = ({ project, onProjectClick }) => {
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Embedded': return <Cpu className="w-4 h-4" />;
      case 'IT': return <Code className="w-4 h-4" />;
      default: return null;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Embedded': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'IT': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getCategoryColor(project.category)}`}>
          {getCategoryIcon(project.category)}
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Team Members */}
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-gray-400" />
          <div className="flex -space-x-2">
            {project.members.map((member, index) => (
              <img
                key={index}
                src={member.image}
                alt={member.name}
                className="w-8 h-8 rounded-full border-2 border-gray-800 hover:border-blue-400 transition-colors"
                title={member.name}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400 ml-2">
            {project.members.length} member{project.members.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-700">
          <button
            onClick={onProjectClick}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Details
          </button>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-colors flex items-center justify-center"
            title="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;