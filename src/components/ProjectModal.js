import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Users, Calendar, MapPin, Cpu, Code } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Embedded': return <Cpu className="w-5 h-5" />;
      case 'IT': return <Code className="w-5 h-5" />;
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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center gap-2 ${getCategoryColor(project.category)}`}>
                  {getCategoryIcon(project.category)}
                  {project.category}
                </div>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Main Image */}
            <div className="mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-4">About the Project</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Demo Images */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Project Demo</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.demoImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Demo ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Team Members */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Team Members
                  </h4>
                  <div className="space-y-4">
                    {project.members.map((member, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-12 h-12 rounded-full border border-gray-600"
                        />
                        <div>
                          <h5 className="font-medium text-white">{member.name}</h5>
                          <p className="text-sm text-gray-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {member.college}
                          </p>
                          <p className="text-sm text-gray-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {member.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4">Project Links</h4>
                  <div className="space-y-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors group"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      <span className="text-gray-300 group-hover:text-white">View on GitHub</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white ml-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;