import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import CategoryGallery from './components/CategoryGallery';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'gallery' | 'category'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  if (currentPage === 'gallery') {
    return <Gallery 
      onBack={() => setCurrentPage('home')} 
      onCategorySelect={(category) => {
        setSelectedCategory(category);
        setCurrentPage('category');
      }}
    />;
  }

  if (currentPage === 'category') {
    return <CategoryGallery 
      category={selectedCategory}
      onBack={() => setCurrentPage('gallery')}
    />;
  }

  return (
    <div className="min-h-screen">
      <Header onGalleryClick={() => setCurrentPage('gallery')} />
      <Hero onGalleryClick={() => setCurrentPage('gallery')} />
      <About />
      <Services />
      <Portfolio 
        onGalleryClick={() => setCurrentPage('gallery')}
        onCategorySelect={(category) => {
          setSelectedCategory(category);
          setCurrentPage('category');
        }}
      />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;