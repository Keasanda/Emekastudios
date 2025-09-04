import React, { useRef, useEffect, useState } from 'react';

const VideoShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Videography Showcase
          </h2>
          <p className="text-xl text-orange-500 mt-4">
            See our work in motion
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video">
            {isVisible ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Ellbj3kieqs?autoplay=1&mute=1&loop=1&playlist=Ellbj3kieqs&modestbranding=1&rel=0"
                title="Videography Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-4">▶️</div>
                  <p>Video will play when visible</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2 rounded-lg">
            <span className="text-white font-semibold">Videography</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;