
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-secondary/70">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="p-6 md:p-10 glass mb-12"
        >
          <h2 className="heading-lg mb-10 text-gray-800">
            Comece agora e organize sua prática clínica
          </h2>
          
          <div className="bg-white rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="text-left">
                <div className="text-sm uppercase tracking-wide text-gray-500 mb-1">Por apenas</div>
                <div className="text-2xl line-through text-gray-400">R$364,90</div>
                <div className="text-4xl font-bold text-gray-800">R$197</div>
                <div className="text-sm text-gray-500 mt-2">
                  Acesso único e vitalício com atualizações inclusas
                </div>
              </div>
              
              <div className="text-left flex-1 space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Acesso imediato após o pagamento</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Acesso a todas as funcionalidades</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Modelos prontos para usar</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Suporte por 30 dias</span>
                </div>
              </div>
            </div>
          </div>
          
          <motion.a
            href="#"
            className="button-primary mx-auto mb-8 w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Quero meu GestãoPlena agora
          </motion.a>
          
          <p className="paragraph opacity-80 italic">
            Um beijo, nos vemos do outro lado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
