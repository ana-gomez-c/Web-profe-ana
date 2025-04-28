import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: "tutoring",
    title: "Tutorías Personalizadas",
    description: "Sesiones individuales adaptadas a las necesidades específicas de cada estudiante, con foco en superar dificultades académicas y desarrollar técnicas de estudio eficaces.",
    icon: "📚"
  },
  {
    id: "workshops",
    title: "Talleres Creativos",
    description: "Espacios de aprendizaje dinámicos donde los estudiantes exploran conceptos a través de actividades prácticas, proyectos colaborativos y expresión artística.",
    icon: "🎨"
  },
  {
    id: "consulting",
    title: "Asesoría Pedagógica",
    description: "Consultoría para instituciones educativas y docentes que buscan innovar sus metodologías, crear materiales inclusivos o implementar nuevas tecnologías en el aula.",
    icon: "💡"
  },
  {
    id: "online",
    title: "Cursos Online",
    description: "Programas educativos a distancia con contenido multimedia, actividades interactivas y seguimiento personalizado para adaptar el aprendizaje a cualquier horario y ubicación.",
    icon: "💻"
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<string>("tutoring");

  return (
    <section id="services" className="py-20 bg-peach-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Mis <span className="text-coral-500">Servicios</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Service Navigation */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <ul>
                {services.map((service) => (
                  <li key={service.id}>
                    <button 
                      className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${
                        activeService === service.id 
                          ? 'bg-coral-500 text-white' 
                          : 'text-gray-700 hover:bg-peach-100'
                      }`}
                      onClick={() => setActiveService(service.id)}
                    >
                      <span className="flex items-center">
                        <span className="mr-3 text-2xl">{service.icon}</span>
                        <span className="font-medium">{service.title}</span>
                      </span>
                      <ChevronDown 
                        size={20} 
                        className={`transform transition-transform ${
                          activeService === service.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Service Description */}
          <div className="md:w-2/3">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`bg-white p-8 rounded-2xl shadow-md h-full animate-fadeIn ${
                  activeService === service.id ? 'block' : 'hidden'
                }`}
              >
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{service.icon}</span>
                  <h3 className="text-2xl font-semibold text-coral-500">{service.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                <div className="bg-peach-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-3 text-coral-600">¿Qué incluye?</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Evaluación inicial personalizada</li>
                    <li>Materiales didácticos exclusivos</li>
                    <li>Seguimiento continuo del progreso</li>
                    <li>Adaptación a diferentes estilos de aprendizaje</li>
                    <li>Certificado de participación</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;