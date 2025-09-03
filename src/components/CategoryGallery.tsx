import React, { useState } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  date: string;
}

interface CategoryGalleryProps {
  category: string;
  onBack: () => void;
}

const CategoryGallery: React.FC<CategoryGalleryProps> = ({ category, onBack }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categoryData = {
    wedding: {
      title: 'Wedding Photography',
      description: 'Capturing the magic of your special day with timeless elegance and artistic vision',
      images: [
        {
          id: 1,
          src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Romantic Garden Wedding',
          description: 'A beautiful outdoor ceremony captured in golden hour light with natural romance',
          date: 'June 2024'
        },
        {
          id: 2,
          src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Elegant Reception',
          description: 'Celebration moments filled with joy, laughter, and unforgettable memories',
          date: 'May 2024'
        },
        {
          id: 3,
          src: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Wedding Ceremony',
          description: 'Sacred moments of love and commitment in a beautiful church setting',
          date: 'April 2024'
        },
        {
          id: 4,
          src: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Bridal Portrait',
          description: 'Stunning bridal photography with natural lighting and elegant composition',
          date: 'March 2024'
        },
        {
          id: 5,
          src: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Wedding Details',
          description: 'Beautiful detail shots of rings, flowers, and wedding decorations',
          date: 'February 2024'
        },
        {
          id: 6,
          src: 'https://images.pexels.com/photos/1729932/pexels-photo-1729932.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'First Dance',
          description: 'Intimate moments of the couple\'s first dance as newlyweds',
          date: 'January 2024'
        }
      ]
    },
    portrait: {
      title: 'Portrait Photography',
      description: 'Professional portraits that capture personality, emotion, and authentic moments',
      images: [
        {
          id: 7,
          src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Family Portrait Session',
          description: 'Capturing family bonds and connections in a natural outdoor setting',
          date: 'June 2024'
        },
        {
          id: 8,
          src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Senior Portraits',
          description: 'Graduation memories that last a lifetime with professional styling',
          date: 'May 2024'
        },
        {
          id: 9,
          src: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Professional Headshots',
          description: 'Corporate headshots with personality and professional appeal',
          date: 'April 2024'
        },
        {
          id: 10,
          src: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Maternity Session',
          description: 'Beautiful expecting mother portraits celebrating new life',
          date: 'March 2024'
        },
        {
          id: 11,
          src: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Children Portraits',
          description: 'Playful and natural children photography sessions',
          date: 'February 2024'
        },
        {
          id: 12,
          src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Couple Session',
          description: 'Romantic couple photography in beautiful natural settings',
          date: 'January 2024'
        }
      ]
    },
    event: {
      title: 'Event Photography',
      description: 'Professional event coverage that captures every important moment and emotion',
      images: [
        {
          id: 13,
          src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Corporate Event',
          description: 'Professional business gathering documentation with attention to detail',
          date: 'June 2024'
        },
        {
          id: 14,
          src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Birthday Celebration',
          description: 'Joyful birthday party moments with family and friends',
          date: 'May 2024'
        },
        {
          id: 15,
          src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Conference Coverage',
          description: 'Professional conference and networking event documentation',
          date: 'April 2024'
        },
        {
          id: 16,
          src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Product Launch',
          description: 'Corporate product launch event with media coverage',
          date: 'March 2024'
        },
        {
          id: 17,
          src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Charity Gala',
          description: 'Elegant charity fundraising event with VIP guests',
          date: 'February 2024'
        },
        {
          id: 18,
          src: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Awards Ceremony',
          description: 'Prestigious awards ceremony with professional coverage',
          date: 'January 2024'
        }
      ]
    },
    lifestyle: {
      title: 'Lifestyle Photography',
      description: 'Authentic lifestyle photography that captures real moments and genuine emotions',
      images: [
        {
          id: 19,
          src: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Urban Lifestyle',
          description: 'City life and urban exploration with modern aesthetics',
          date: 'June 2024'
        },
        {
          id: 20,
          src: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Fashion Lifestyle',
          description: 'Contemporary fashion and style photography with artistic flair',
          date: 'May 2024'
        },
        {
          id: 21,
          src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Outdoor Adventure',
          description: 'Adventure and outdoor lifestyle captures in natural settings',
          date: 'April 2024'
        },
        {
          id: 22,
          src: 'https://images.pexels.com/photos/1779489/pexels-photo-1779489.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Beach Lifestyle',
          description: 'Relaxed beach lifestyle photography with natural lighting',
          date: 'March 2024'
        },
        {
          id: 23,
          src: 'https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Home Lifestyle',
          description: 'Cozy home lifestyle sessions capturing everyday moments',
          date: 'February 2024'
        },
        {
          id: 24,
          src: 'https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Travel Lifestyle',
          description: 'Travel and adventure lifestyle photography around the world',
          date: 'January 2024'
        }
      ]
    },
    corporate: {
      title: 'Corporate Photography',
      description: 'Professional corporate photography for businesses, teams, and executive portraits',
      images: [
        {
          id: 25,
          src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Corporate Team',
          description: 'Professional team photography for businesses and organizations',
          date: 'June 2024'
        },
        {
          id: 26,
          src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Executive Portraits',
          description: 'High-end executive and leadership portraits for corporate use',
          date: 'May 2024'
        },
        {
          id: 27,
          src: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Office Environment',
          description: 'Professional workplace photography showcasing company culture',
          date: 'April 2024'
        },
        {
          id: 28,
          src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Business Conference',
          description: 'Corporate conference and meeting photography',
          date: 'March 2024'
        },
        {
          id: 29,
          src: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Professional Headshots',
          description: 'Corporate headshots for LinkedIn and company profiles',
          date: 'February 2024'
        },
        {
          id: 30,
          src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          title: 'Company Culture',
          description: 'Authentic workplace moments showcasing team collaboration',
          date: 'January 2024'
        }
      ]
    }
  };

 const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <Camera className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-gray-200">Category Not Found</h2>
          <button
            onClick={onBack}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleBookSession = () => {
    window.open('https://webstore.ikhokha.com/emekastudios', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Gallery</span>
            </button>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-200">
                {currentCategory.title}
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                {currentCategory.images.length} Images
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Category Description */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-lg text-white leading-relaxed">
            {currentCategory.description}
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCategory.images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-gray-200">
                  <h3 className="font-bold mb-1 text-sm">{image.title}</h3>
                  <p className="text-gray-300 text-xs">{image.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal - Adjusted sizing */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 text-white p-3 rounded-full hover:bg-orange-500 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <div className="p-1">
              <div className="max-h-[65vh] overflow-hidden flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[65vh] object-contain rounded-t-2xl"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-200 mb-2">{selectedImage.title}</h3>
                    <p className="text-white text-lg mb-2">{selectedImage.description}</p>
                    <p className="text-orange-500 font-medium">{selectedImage.date}</p>
                  </div>
                  <div className="flex space-x-2">
                
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium capitalize">
                    {category} Photography
                  </span>
                  <button 
                    onClick={handleBookSession}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Book Similar Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryGallery;