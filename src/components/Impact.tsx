import React from 'react';
import { Award } from 'lucide-react';

const Impact: React.FC = () => {
  const achievements = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24hrs', label: 'Average Delivery' },
    { number: '5★', label: 'Average Rating' },
    { number: '100%', label: 'Repeat Clients' }
  ];

  const partners = [
    { name: 'Sanlam', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'YCC', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'RLabs', logo: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' }
  ];

  const recognitions = [
    {
      title: '2025 Media Businesswomen of the Year',
      organization: 'Media Excellence Awards',
      year: '2025'
    },
    {
      title: 'Visual Storytelling Excellence Award',
      organization: 'Photography Institute',
      year: '2024'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-black">Impact</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Don't just take my word for it - see the results and recognitions that speak for themselves.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {achievement.number}
              </div>
              <div className="text-white font-medium opacity-90">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partners & Collaborations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Partners & <span className="text-black">Collaborations</span>
            </h3>
            <p className="text-lg text-white opacity-90">
              Trusted by leading organizations and brands
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-24 h-12 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition & Awards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Recognition & <span className="text-black">Awards</span>
            </h3>
            <p className="text-lg text-white opacity-90">
              Honored for excellence in visual storytelling and business leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-500 mt-1">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {recognition.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{recognition.organization}</p>
                    <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {recognition.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-white mb-8 opacity-90">
            Ready to create beautiful memories together?
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;