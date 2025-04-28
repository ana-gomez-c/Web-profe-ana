import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-peach-50 to-coral-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 animate-fadeIn">
              Educación con <span className="text-coral-500">creatividad</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeIn animation-delay-100">
              Transformando el aprendizaje con inclusión, innovación y conexión emocional
            </p>
            <div className="animate-fadeIn animation-delay-200">
              <Button href="#services">
                GO
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fadeIn animation-delay-300">
            <img 
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Profe Ana teaching with creativity" 
              className="w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;