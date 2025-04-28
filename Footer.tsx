import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Send, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-6">Profe Ana</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Transformando la educación con creatividad, inclusión y conexión emocional.
            ¡Sígueme en redes sociales para más contenido educativo!
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-8 mb-10">
          <a 
            href="https://www.instagram.com/profe.anagc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            aria-label="Instagram"
          >
            <div className="bg-gradient-to-br from-coral-400 to-coral-600 p-3 rounded-full mb-2 transition-transform transform group-hover:scale-110">
              <Instagram size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-coral-400 transition-colors">Instagram</span>
          </a>
          
          <a 
            href="https://www.facebook.com/profile.php?id=61556829839457" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            aria-label="Facebook"
          >
            <div className="bg-gradient-to-br from-coral-400 to-coral-600 p-3 rounded-full mb-2 transition-transform transform group-hover:scale-110">
              <Facebook size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-coral-400 transition-colors">Facebook</span>
          </a>
          
          <a 
            href="www.linkedin.com/in/ana-clara-gómez-c-53259a351" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            aria-label="LinkedIn"
          >
            <div className="bg-gradient-to-br from-coral-400 to-coral-600 p-3 rounded-full mb-2 transition-transform transform group-hover:scale-110">
              <Linkedin size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-coral-400 transition-colors">LinkedIn</span>
          </a>
          
          <a 
            href="https://www.tiktok.com/@profe.anagc?is_from_webapp=1&sender_device=pc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            aria-label="TikTok"
          >
            <div className="bg-gradient-to-br from-coral-400 to-coral-600 p-3 rounded-full mb-2 transition-transform transform group-hover:scale-110">
              <MessageCircle size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-coral-400 transition-colors">TikTok</span>
          </a>
          
          <a 
            href="http://bit.ly/4bJpHyw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            aria-label="WhatsApp"
          >
            <div className="bg-gradient-to-br from-coral-400 to-coral-600 p-3 rounded-full mb-2 transition-transform transform group-hover:scale-110">
              <Send size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-coral-400 transition-colors">WhatsApp</span>
          </a>
          
          <a 
            href="mailto:anaclaragomezc@gmail.com" 
            className="flex flex-col items-center group"
            aria-label="Email"
          >
            <div className="bg-gradient-to-br from-coral-400 to-coral-600 p-3 rounded-full mb-2 transition-transform transform group-hover:scale-110">
              <Mail size={28} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-coral-400 transition-colors">Email</span>
          </a>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Profe Ana | Todos los derechos reservados
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-coral-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-coral-400 transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;