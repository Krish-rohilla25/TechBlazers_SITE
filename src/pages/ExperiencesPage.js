import React from 'react';
import { Calendar, MapPin, Award, Users, Lightbulb } from 'lucide-react';

const ExperiencesPage = () => {
  const experiences = [
    {
      title: "STMicroelectronics Internship Program",
      duration: "June 2024 - August 2024",
      location: "New Delhi, India",
      description: "An intensive 10-week program focused on embedded systems, IoT development, and hands-on project creation. Interns worked with industry-standard tools and mentors to build real-world solutions.",
      highlights: [
        "Worked with STM32 microcontrollers and development boards",
        "Built 6 innovative projects spanning embedded systems and IT solutions",
        "Collaborated with cross-functional teams and industry experts",
        "Participated in technical workshops and skill development sessions"
      ],
      skills: ["Embedded Systems", "IoT Development", "Project Management", "Team Collaboration"],
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Technical Workshops & Training",
      duration: "Throughout the Program",
      location: "Various Sessions",
      description: "Comprehensive training sessions covering cutting-edge technologies, best practices, and industry standards in embedded systems and software development.",
      highlights: [
        "Advanced STM32 programming and debugging techniques",
        "IoT protocol implementation and sensor integration",
        "Project presentation and documentation skills",
        "Industry best practices and code optimization"
      ],
      skills: ["C/C++", "Python", "Hardware Design", "Documentation"],
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: "Cross-Team Collaboration",
      duration: "Ongoing",
      location: "Team Projects",
      description: "Working in diverse teams with members from different technical backgrounds to solve complex engineering challenges and deliver innovative solutions.",
      highlights: [
        "Led and participated in multi-member project teams",
        "Shared knowledge and mentored fellow interns",
        "Participated in code reviews and technical discussions",
        "Contributed to project documentation and knowledge base"
      ],
      skills: ["Leadership", "Mentoring", "Communication", "Problem Solving"],
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Experiences
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Journey through our learning experiences and achievements at STMicroelectronics
          </p>
        </div>
      </section>

      {/* Experiences Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                )}
                
                {/* Experience Card */}
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white z-10">
                    {experience.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                        {experience.title}
                      </h3>
                      <div className="flex flex-col md:items-end text-sm text-gray-400">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, sIndex) => (
                          <span
                            key={sIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Program Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">6</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10</div>
                <div className="text-gray-300">Weeks of Training</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-gray-300">Technologies Learned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-300">Growth Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesPage;