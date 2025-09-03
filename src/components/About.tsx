import React from 'react';
import { Award, Users, Camera, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Camera className="w-8 h-8" />, number: '500+', label: 'African Excellence' },
    { icon: <Users className="w-8 h-8" />, number: '200+', label: 'Community Driven' },
    { icon: <Award className="w-8 h-8" />, number: '5', label: 'Collaboration & Creativity' },
    { icon: <Heart className="w-8 h-8" />, number: '∞', label: 'Storytelling  Purpose ' }
  ];

  return (
    <section id="about" className="py-20 bg-White">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black-200 mb-6">
              Your Story. Our Lens. <span className="text-orange-500">Emeka Studios.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
             At Emeka Studios, we believe every story deserves to be seen, heard, and felt. We are a creative media company founded by Tshepiso Makoni, a visual storyteller passionate about elevating township, city, and rural businesses through authentic, bold, and intentional content. </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
From photography and videography to social media content, Emeka Studios partners with entrepreneurs, brands, and communities to help you build your identity, showcase your vision, and stand out in the market
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-orange-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-200 mb-1">{stat.number}</div>
                  <div className="text-black-400 font-bold  text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://i.postimg.cc/G2zN6gHZ/Whats-App-Image-lololo.jpg"
                alt="Photographer portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;