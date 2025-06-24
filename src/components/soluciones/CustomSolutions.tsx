
import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

const CustomSolutions = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes Necesidades Específicas?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos puede crear una solución
            completamente personalizada para tu industria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Solicitar Consulta Gratuita
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-purple-600">
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
