import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onGalleryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGalleryClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel images
  const carouselImages = [
    'https://i.postimg.cc/Sx9h8j8v/Whats-App-Image-2025-09-03-at-15-31-29-edfab46d.jpg',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
  ];

  // Auto-advance the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0 overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundColor: 'white',
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in text-gray-200">
          
          <span className="text-orange-500 block text-xl md:text-5xl mt-4 md:mt-6">
            Bringing stories to life through photography, video, and content creation.
          </span>
        </h1>
        <p className="text-xl md:text-4xl mb-8 text-white-400 max-w-2xl mx-auto">
          Visual storytelling for brands, businesses, and creatives. We help you connect, grow, and leave a lasting impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onGalleryClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Gallery
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-orange-500 transition-colors animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;