import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Photography',
      description: 'Professional photos for brands, events, real estate, portraits, and products.',
      features: ['Brand Photography', 'Event Coverage', 'Product Photography'],
      price: 'Starting at R1700.00',
      backgroundImage: 'https://i.postimg.cc/gjMXZ6YL/96-A887-A9-2-C31-4-AB0-81-D6-CA189-B08-B432.jpg',
      duration: '1-2 hours'
    },
    {
      title: 'Videography',
      description: 'Telling your story through cinematic, impactful visuals.',
      features: ['Brand Videos', 'Documentary Projects', 'Event Highlights'],
      price: 'Starting at R400.00',
      backgroundImage: 'https://i.postimg.cc/QdK9FtvV/2025-04-17-Sanlam-Financial-Planning-017.jpg',
      duration: '1-2 hours'
    },
    {
      title: 'Content Creation Packages',
      description: 'Custom social media reels, promos, and lifestyle content for digital marketing.',
      features: ['Social Media Content', 'Promotional Reels', 'Digital Marketing Assets'],
      price: 'Starting at R1700.00',
      backgroundImage: 'https://i.postimg.cc/5NPVzS82/2025-06-05-Clareb-accessories-051.jpg',
      duration: '3-6 hours'
    },
    {
      title: 'Workshops & Masterclasses',
      description: 'Training entrepreneurs, content creators, and youth in content creation and branding.',
      features: ['Content Creation Basics', 'Brand Development', 'Youth Empowerment'],
      price: 'Starting at R350',
      backgroundImage: 'https://i.postimg.cc/Y9Y4qqDY/26.png',
      duration: '2-4 hours'
    },
    {
      title: 'Brand Strategy & Storytelling',
      description: 'Helping you define your brand voice, story, and visual identity.',
      features: ['Brand Identity Development', 'Storytelling Consultation', 'Visual Strategy'],
      price: 'Starting at R700.00',
      backgroundImage: 'https://i.postimg.cc/52bVQ97b/4.png',
      duration: '2-8 hours'
    },
    {
      title: 'Ready to elevate your brand?',
      description: '   Explore our comprehensive portfolio showcasing exceptional visual storytelling across various photography styles and creative disciplines. Witness firsthand how we transform ordinary moments into extraordinary visual narratives that capture the essence of every story we tell.',
      features: [],
      price: '',
      backgroundImage: '',
      isBooking: true
    }
  ];

  const handleBookService = () => {
    window.open('https://webstore.ikhokha.com/emekastudios', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
             <span className="text-orange-500"> What We Do</span>
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto font-bold">
            Comprehensive media services tailored to elevate your brand and tell your unique story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                service.isBooking ? 'bg-orange-500' : ''
              }`}
              style={service.isBooking ? {} : {minHeight: '500px'}}
            >
              {/* Background Image - Only for non-booking cards */}
              {!service.isBooking && (
                <div className="absolute inset-0">
                  <img
                    src={service.backgroundImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                </div>
              )}
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between" style={service.isBooking ? {minHeight: '300px'} : {}}>
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${service.isBooking ? 'text-white' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-white mb-6 text-lg font-bold leading-relaxed">
                      {service.description}
                    </p>
                  )}
                  
                  {service.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-white">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div>
                  {service.price && (
                    <div className="text-3xl font-bold text-orange-500 mb-4">{service.price}</div>
                  )}
                  {service.duration && (
                    <div className="text-gray-400 mb-4 text-sm font-medium">
                      Duration: {service.duration}
                    </div>
                  )}
                  {service.isBooking && (
                    <button 
                      onClick={handleBookService}
                      className="w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg bg-white text-orange-500 hover:bg-gray-100"
                    >
                      Book a service
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-white mb-8 font-medium">
            Ready to see my work? Explore my portfolio to see examples of each photography style.
          </p>
          <button 
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;