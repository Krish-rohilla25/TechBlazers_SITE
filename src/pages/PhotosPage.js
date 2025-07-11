import React, { useState } from 'react';
import { Camera, Calendar, MapPin, Users, X } from 'lucide-react';

const PhotosPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photoCategories = [
    {
      title: "Workshop Sessions",
      description: "Interactive learning sessions and technical workshops",
      photos: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
          title: "STM32 Programming Workshop",
          date: "June 15, 2024",
          location: "Tech Lab",
          participants: "All Team Members"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
          title: "IoT Development Session",
          date: "June 22, 2024",
          location: "Innovation Center",
          participants: "Embedded Team"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80",
          title: "Project Planning Meeting",
          date: "June 29, 2024",
          location: "Conference Room",
          participants: "Project Teams"
        }
      ]
    },
    {
      title: "Project Development",
      description: "Hands-on development and building sessions",
      photos: [
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
          title: "Robot Assembly Session",
          date: "July 5, 2024",
          location: "Hardware Lab",
          participants: "Robotics Team"
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&q=80",
          title: "Circuit Design Workshop",
          date: "July 12, 2024",
          location: "Electronics Lab",
          participants: "Hardware Teams"
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1587613864521-9ef25cb978b8?w=600&q=80",
          title: "Code Review Session",
          date: "July 19, 2024",
          location: "Development Center",
          participants: "All Developers"
        }
      ]
    },
    {
      title: "Presentations & Demo",
      description: "Project presentations and demo sessions",
      photos: [
        {
          id: 7,
          url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
          title: "Final Project Presentations",
          date: "August 15, 2024",
          location: "Main Auditorium",
          participants: "All Team Members"
        },
        {
          id: 8,
          url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
          title: "Live Demo Session",
          date: "August 16, 2024",
          location: "Demo Hall",
          participants: "Project Teams"
        },
        {
          id: 9,
          url: "https://images.unsplash.com/photo-1559223607-b4d0555ae49a?w=600&q=80",
          title: "Awards Ceremony",
          date: "August 17, 2024",
          location: "Main Hall",
          participants: "All Interns"
        }
      ]
    },
    {
      title: "Team Building",
      description: "Fun moments and team bonding activities",
      photos: [
        {
          id: 10,
          url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
          title: "Team Lunch",
          date: "July 1, 2024",
          location: "Cafeteria",
          participants: "All Team Members"
        },
        {
          id: 11,
          url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80",
          title: "Brainstorming Session",
          date: "July 8, 2024",
          location: "Creative Space",
          participants: "Innovation Team"
        },
        {
          id: 12,
          url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
          title: "Celebration Time",
          date: "August 18, 2024",
          location: "Office Space",
          participants: "All Interns"
        }
      ]
    }
  ];

  const allPhotos = photoCategories.flatMap(category => category.photos);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Capturing moments from our incredible journey at STMicroelectronics
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              <span>{allPhotos.length} Photos</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>6 Team Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {photoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage(photo)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold mb-1">{photo.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Calendar className="w-4 h-4" />
                          {photo.date}
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-2">{photo.title}</h3>
                      <div className="space-y-1 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {photo.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {photo.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {photo.participants}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedImage.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{selectedImage.participants}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosPage;