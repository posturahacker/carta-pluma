
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-[#1e1051] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-serif text-xl font-bold">
              <span className="text-primary">Gestão</span>Plena
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h4 className="font-medium mb-3">Navegação</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition">Funcionalidades</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition">Preços</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition">Contato</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Contato</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">contato@gestaoplena.com</li>
                <li className="text-sm text-gray-300">(11) 99999-9999</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-sm text-gray-300 hover:text-white transition">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition">
              Termos de Uso
            </a>
          </div>
          
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} GestãoPlena. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
