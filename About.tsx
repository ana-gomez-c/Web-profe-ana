import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Sobre <span className="text-coral-500">mí</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fadeInLeft">
            <img 
              src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Profe Ana smiling" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>
          
          <div className="flex-1 animate-fadeInRight">
            <h3 className="text-2xl font-semibold mb-4 text-coral-500">¡Hola! Soy Ana</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Con más de 10 años de experiencia en educación, mi pasión es crear entornos de aprendizaje 
              inclusivos donde cada estudiante pueda descubrir su potencial único.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Mi enfoque combina métodos pedagógicos innovadores con un profundo entendimiento de las 
              necesidades emocionales y cognitivas de cada alumno, creando experiencias educativas 
              que son tanto efectivas como memorables.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Estoy comprometida con una educación que va más allá de los libros, incorporando 
              creatividad, tecnología y empatía para preparar a los estudiantes no solo académicamente,
              sino también para la vida.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-peach-100 px-4 py-2 rounded-full text-coral-500 font-medium">
                Educación Inclusiva
              </div>
              <div className="bg-peach-100 px-4 py-2 rounded-full text-coral-500 font-medium">
                Métodos Creativos
              </div>
              <div className="bg-peach-100 px-4 py-2 rounded-full text-coral-500 font-medium">
                Innovación Pedagógica
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;