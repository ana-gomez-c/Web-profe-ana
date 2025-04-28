import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.pexels.com/photos/8617769/pexels-photo-8617769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Taller de Arte Creativo"
  },
  {
    url: "https://images.pexels.com/photos/8617784/pexels-photo-8617784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Sesión de Aprendizaje Colaborativo"
  },
  {
    url: "https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Clase de Expresión Creativa"
  },
  {
    url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Proyecto Educativo Innovador"
  },
  {
    url: "https://images.pexels.com/photos/7433830/pexels-photo-7433830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Actividad de Integración"
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Galería de <span className="text-coral-500">Proyectos</span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={galleryImages[currentIndex].url} 
              alt={galleryImages[currentIndex].title}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white">
                {galleryImages[currentIndex].title}
              </h3>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors focus:outline-none"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-coral-500" />
          </button>
          
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors focus:outline-none"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-coral-500" />
          </button>
          
          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-coral-500' : 'bg-gray-300 hover:bg-coral-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;