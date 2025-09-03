import React from 'react';
import { teamInfo } from '../data/mockData';
import { Target, Eye, Award, Users, Lightbulb, Heart } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology solutions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Building stronger teams through shared knowledge and goals"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Learning",
      description: "Continuous growth and development for all team members"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Tech Blazers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {teamInfo.organizationDescription}
            </p>
          </div>

          {/* Organization Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {teamInfo.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {teamInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="p-4 bg-blue-500/20 rounded-lg w-fit mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <div className="text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STMicroelectronics Partnership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-white mb-6">Powered by STMicroelectronics</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Tech Blazers is proudly supported by STMicroelectronics, a global leader in semiconductors and embedded systems. This partnership enables us to work with cutting-edge technology and provides our interns with industry-leading tools and mentorship.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                    <span className="text-blue-400 font-semibold">STM32 Microcontrollers</span>
                  </div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                    <span className="text-purple-400 font-semibold">IoT Solutions</span>
                  </div>
                  <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                    <span className="text-green-400 font-semibold">AI & ML Tools</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/ST_logo_2024_blue.jpg" 
                  alt="STMicroelectronics" 
                  className="h-24 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore Our Projects?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover the innovative solutions our team has created
          </p>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;