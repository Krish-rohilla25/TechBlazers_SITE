import React, { useState, useMemo } from 'react';
import { projects as mockProjects } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { Search, Code, Cpu, Settings } from 'lucide-react';
import { Button } from '../components/ui/button';

import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  const categories = ['All', 'Embedded', 'IT'];

  // Filter and search projects in-memory
  const filteredProjects = useMemo(() => {
    let filtered = mockProjects;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    if (searchTerm.trim() !== '') {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.title.toLowerCase().includes(lower) ||
          p.description.toLowerCase().includes(lower) ||
          (p.technologies && p.technologies.join(' ').toLowerCase().includes(lower)) ||
          (p.members && p.members.some(m => m.name.toLowerCase().includes(lower)))
      );
    }
    return filtered;
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Embedded': return <Cpu className="w-5 h-5" />;
      case 'IT': return <Code className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Techblazers
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Showcasing innovative projects from our talented interns at STMicroelectronics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
              <span className="text-blue-400 font-semibold">{filteredProjects.length} Projects</span>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
              <span className="text-purple-400 font-semibold">
                {filteredProjects.reduce((acc, p) => acc + (p.members?.length || 0), 0)} Contributors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects, members, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {getCategoryIcon(category)}
                  {category}
                </button>
              ))}
            </div>

            
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-400">
              {`Showing ${filteredProjects.length} projects`}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onProjectClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-xl mb-4">No projects found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default HomePage;
