import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://i.postimg.cc/q7JtXQCN/Screenshot-2025-09-02-132618.png" 
                alt="Emeka Studios Logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500" 
              />
              <span className="text-2xl font-bold text-white">Emeka Studios</span>
            </div>
            <p className="text-white leading-relaxed">
              Capturing life's beautiful moments with artistic vision and professional excellence. 
              Creating memories that last a lifetime.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Impact', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white hover:text-orange-500 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-white">
              <li>Wedding Photography</li>
              <li>Portrait Sessions</li>
              <li>Event Photography</li>
              <li>Lifestyle Shoots</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white mb-4 md:mb-0">
            © {currentYear} Emeka Studios. All rights reserved.
          </p>
          <p className="text-white flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-orange-500 fill-current" />
            <span>by Emeka Studios</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;