import React, { useState } from 'react';
import { ExternalLink, Camera } from 'lucide-react';

interface PortfolioProps {
  onGalleryClick: () => void;
  onCategorySelect: (category: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onGalleryClick, onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'event', name: 'Events' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'corporate',
      image: 'https://i.postimg.cc/d0pbHFYx/Screenshot-2025-09-03-160903.png',
      title: 'Corporate Events',
      description: 'Professional business photography and team portraits',
      count: '25+ Projects'
    },
    {
      id: 2,
      category: 'wedding',
      image: 'https://i.postimg.cc/BQSVCbFv/Screenshot-2025-09-03-162045.png',
      title: 'Wedding Photography',
      description: 'Romantic ceremonies and celebration moments',
      count: '50+ Weddings'
    },
    {
      id: 3,
      category: 'portrait',
      image: 'https://i.postimg.cc/Ss3QVDFq/EME2774.jpg',
      title: 'Portrait Sessions',
      description: 'Family, senior, and professional headshots',
      count: '100+ Sessions'
    },
    {
      id: 4,
      category: 'event',
      image: 'https://i.postimg.cc/26hjcnzZ/EME8299.jpg',
      title: 'Event Photography',
      description: 'Birthdays, conferences, and special celebrations',
      count: '75+ Events'
    },
    {
      id: 5,
      category: 'lifestyle',
      image: 'https://i.postimg.cc/jS59dKng/2025-07-14-Mphidi-Art-Gallery-23.jpg',
      title: 'Lifestyle Photography',
      description: 'Urban, fashion, and adventure photography',
      count: '40+ Shoots'
    },
    {
      id: 6,
      category: 'all',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'View All Work',
      description: 'Complete portfolio across all photography categories',
      count: '200+ Images',
      isViewAll: true
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black-200 mb-4">
            <span className="text-orange-500">Our Work Speaks for Itself</span>
          </h2>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto mb-12">
        A showcase of our best projects across various industries and mediums..
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => {
                if (item.isViewAll) {
                  onGalleryClick();
                } else {
                  onCategorySelect(item.category);
                }
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-gray-200 text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white-300 mb-4">{item.description}</p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Camera className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-500 font-semibold">{item.count}</span>
                  </div>
                  <div className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>{item.isViewAll ? 'View All' : 'View Gallery'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={onGalleryClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;