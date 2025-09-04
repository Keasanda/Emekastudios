import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

interface GalleryProps {
  onBack: () => void;
  onCategorySelect: (category: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onBack, onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'event', name: 'Events' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'corporate', name: 'Corporate' }
  ];

  const galleryImages: GalleryImage[] = [
    // Wedding Photography
    {
      id: 1,
      src: 'https://i.postimg.cc/x87JZhq1/Screenshot-2025-09-04-162751.png',
      title: 'Romantic Garden Wedding',
      category: 'wedding',
      description: 'A beautiful outdoor ceremony captured in golden hour light'
    },
    {
      id: 2,
      src: 'https://i.postimg.cc/sXPCqhXQ/Screenshot-2025-09-04-162843.png',
      title: 'Elegant Reception',
      category: 'wedding',
      description: 'Celebration moments filled with joy and laughter'
    },
    {
      id: 3,
      src: 'https://i.postimg.cc/mDs0Ygwb/Screenshot-2025-09-04-162910.png',
      title: 'Wedding Ceremony',
      category: 'wedding',
      description: 'Sacred moments of love and commitment'
    },
    {
      id: 4,
      src: 'https://i.postimg.cc/gkZHWHpT/Screenshot-2025-09-04-162725.png',
      title: 'Bridal Portrait',
      category: 'wedding',
      description: 'Stunning bridal photography with natural lighting'
    },
    
    // Portrait Photography
    {
      id: 5,
      src: 'https://i.postimg.cc/R0YVTfYc/Screenshot-2025-09-04-163005.png',
      title: 'Family Portrait Session',
      category: 'portrait',
      description: 'Capturing family bonds and connections'
    },
    {
      id: 6,
      src: 'https://i.postimg.cc/1tNR7Xxb/Screenshot-2025-09-04-163020.png',
      title: 'Senior Portraits',
      category: 'portrait',
      description: 'Graduation memories that last a lifetime'
    },
    {
      id: 7,
      src: 'https://i.postimg.cc/mgq0Xwb2/Screenshot-2025-09-04-164935.png',
      title: 'Professional Headshots',
      category: 'portrait',
      description: 'Corporate headshots with personality'
    },
    {
      id: 8,
      src: 'https://i.postimg.cc/wjtrmmhK/Screenshot-2025-09-04-163218.png',
      title: 'Maternity Session',
      category: 'portrait',
      description: 'Beautiful expecting mother portraits'
    },

    // Event Photography
    {
      id: 9,
      src: 'https://i.postimg.cc/FKJsDpLh/Dimakatso-Lebelo25.jpg',
      title: 'Corporate Event',
      category: 'event',
      description: 'Professional business gathering documentation'
    },
    {
      id: 10,
      src: 'https://i.postimg.cc/NjzWCw6H/2025-06-01-kwa-Ace-lounge-003.jpg',
      title: 'Birthday Celebration',
      category: 'event',
      description: 'Joyful birthday party moments'
    },
    {
      id: 11,
      src: 'https://i.postimg.cc/x85Zvrjq/2025-07-14-Mphidi-Art-Gallery-05.jpg',
      title: 'Conference Coverage',
      category: 'event',
      description: 'Professional conference and networking event'
    },

    // Lifestyle Photography
    {
      id: 12,
      src: 'https://i.postimg.cc/3xTPPZVK/2025-06-06-Sere-Mhati-03.jpg',
      title: 'Urban Lifestyle',
      category: 'lifestyle',
      description: 'City life and urban exploration'
    },
    {
      id: 13,
      src: 'https://i.postimg.cc/W3hKMYF7/2025-06-06-Sere-Mhati-02.jpg',
      title: 'Fashion Lifestyle',
      category: 'lifestyle',
      description: 'Contemporary fashion and style photography'
    },
    {
      id: 14,
      src: 'https://i.postimg.cc/26RvwV3X/2025-06-12-SIKHO-C-023.jpg',
      title: 'Outdoor Adventure',
      category: 'lifestyle',
      description: 'Adventure and outdoor lifestyle captures'
    },

    // Corporate Photography
    {
      id: 15,
      src: 'https://i.postimg.cc/y6T1xwPq/KYIB-26.jpg',
      title: 'Corporate Team',
      category: 'corporate',
      description: 'Professional team photography for businesses'
    },
    {
      id: 16,
      src: 'https://i.postimg.cc/6Qzcy6y2/2025-06-06-Rich-Aunties-77.jpg',
      title: 'Executive Portraits',
      category: 'corporate',
      description: 'High-end executive and leadership portraits'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black border-b border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-200">
              Photography Gallery
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white-900 border-b border-white-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  if (category.id === 'all') {
                    setActiveCategory(category.id);
                  } else {
                    onCategorySelect(category.id);
                  }
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid - Updated with CodePen style */}
      <div className="gallery p-8">
        <div className="flex flex-wrap justify-center">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-tile m-2 overflow-hidden relative cursor-pointer"
              style={{ minWidth: '200px', maxWidth: '28vw' }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="picture-info absolute inset-0 z-10 text-white flex flex-col justify-center items-start opacity-0 transition-opacity duration-300">
                <h2 className="text-2xl font-oswald font-light uppercase tracking-wide m-4">{image.title}</h2>
                <p className="m-4">{image.description}</p>
              </div>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal - Updated with CodePen style */}
      {selectedImage && (
        <div className="imageview-wrapper fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fadeIn">
          <div className="imageview flex flex-col md:flex-row items-center justify-center p-4">
            <div className="imageview-image w-full md:w-1/2 h-96 md:h-auto mb-6 md:mb-0 md:mr-8">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg shadow-xl"
                style={{ boxShadow: '0 20px 40px -5px rgba(66,66,66,0.7)' }}
              />
            </div>
            <div className="imageview-info text-white text-right max-w-md relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-8 -right-4 text-orange-500 text-2xl font-oswald font-light uppercase hover:scale-125 transition-transform duration-300"
              >
                <X className="w-8 h-8" />
              </button>
              <h2 className="text-3xl font-oswald font-light uppercase tracking-wide mt-0 mb-4">
                {selectedImage.title}
              </h2>
              <p className="mb-6">{selectedImage.description}</p>
              <h3 className="text-xl font-oswald font-light uppercase tracking-wide mb-2">Category</h3>
              <ul className="list-none mb-6">
                <li className="capitalize">{selectedImage.category}</li>
              </ul>
              <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-tile:hover img {
          transform: scale(1.1);
          filter: brightness(80%);
        }
        .gallery-tile:hover .picture-info {
          opacity: 1;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .font-oswald {
          font-family: 'Oswald', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Gallery;