import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onGalleryClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGalleryClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Gallery', href: '#gallery', isSpecial: true },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#gallery') {
      onGalleryClick();
      setIsMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/q7JtXQCN/Screenshot-2025-09-02-132618.png" 
              alt="Emeka Studios Logo" 
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-500" 
            />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-200' : 'text-gray-200'}`}>
              Emeka Studios
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-gray-300' : 'text-gray-300'
                } ${item.isSpecial ? 'bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-300' : 'text-gray-300'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 font-medium transition-colors ${
                    item.isSpecial 
                      ? 'bg-orange-500 text-white rounded-lg hover:bg-orange-600 mx-2' 
                      : 'text-gray-300 hover:text-orange-500'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;