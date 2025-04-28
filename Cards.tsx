import React from 'react';
import Button from './ui/Button';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonHref: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, buttonText, buttonHref }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform hover:-translate-y-2 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button href={buttonHref} size="small">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      title: "Tutorías para Niños",
      description: "Apoyo escolar personalizado para fortalecer bases académicas y despertar el amor por aprender.",
      imageSrc: "https://images.pexels.com/photos/8617546/pexels-photo-8617546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      buttonText: "Más información",
      buttonHref: "#contact"
    },
    {
      title: "Talleres para Adolescentes",
      description: "Experiencias educativas dinámicas que combinan contenido académico con desarrollo de habilidades sociales.",
      imageSrc: "https://images.pexels.com/photos/8412407/pexels-photo-8412407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      buttonText: "Descubrir",
      buttonHref: "#contact"
    },
    {
      title: "Formación para Docentes",
      description: "Programas de capacitación para educadores que buscan renovar sus métodos y herramientas pedagógicas.",
      imageSrc: "https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      buttonText: "Explorar",
      buttonHref: "#contact"
    }
  ];

  return (
    <section className="py-20 bg-peach-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Programas <span className="text-coral-500">Destacados</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              buttonText={card.buttonText}
              buttonHref={card.buttonHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;