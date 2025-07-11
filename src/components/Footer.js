import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/st_logo.png" 
                alt="STMicroelectronics" 
                className="h-8 w-auto"
              />
              <div className="text-2xl font-bold">
                <span className="text-blue-400">Tech</span>
                <span className="text-purple-400">Blazers</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              An innovative initiative by STMicroelectronics fostering creativity and technical excellence among young engineers through hands-on projects and real-world applications.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/techblazers" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/company/techblazers" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@techblazers.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/experiences" className="text-gray-400 hover:text-blue-400 transition-colors">Experiences</a></li>
              <li><a href="/photos" className="text-gray-400 hover:text-blue-400 transition-colors">Photos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@techblazers.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tech Blazers. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed by{' '}
            <a 
              href="https://www.linkedin.com/in/krish-rohilla-b3ab19317/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Krish Rohilla
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;