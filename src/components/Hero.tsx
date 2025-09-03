import React from 'react';
import { ArrowDown} from 'lucide-react';

interface HeroProps {
  onGalleryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGalleryClick }) => {
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/Sx9h8j8v/Whats-App-Image-2025-09-03-at-15-31-29-edfab46d.jpg")',
          backgroundSize: '100%', // Reduced from 'cover' to 50%
          backgroundColor: 'white', // Added a dark background to fill the space
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        {/* Prominent Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="">
          
          </div>
         
        </div>
        
       <h1 className="text-5xl md:text-5x1 font-bold mb-6 animate-fade-in text-gray-200">
  Emeka Studios 
  <span className="text-orange-500 block text-1x2">Bringing stories to life through photography, video, and content creation.</span>
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

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-orange-500 transition-colors animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;