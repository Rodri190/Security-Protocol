import { Navbar } from '@/components';
import Link from 'next/link';

export default function NormsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Marco Normativo Boliviano</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Normativa boliviana para la prevención de riesgos y seguridad en el trabajo industrial.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Normas Riesgos Generales */}
          <Link href="/norms/general-risks">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow cursor-pointer border-l-4 border-red-600">
              <div className="text-5xl mb-4">⚖️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Normas para Riesgos Generales
              </h2>
              <p className="text-gray-600">
                Leyes y decretos supremos que establecen las bases legales para la protección de los trabajadores en todos los sectores industriales.
              </p>
              <div className="mt-4 text-red-600 font-semibold flex items-center">
                Ver normativa →
              </div>
            </div>
          </Link>

          {/* Card 2 - Normas Específicas por Zonas */}
          <Link href="/norms/specific-zones">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow cursor-pointer border-l-4 border-blue-600">
              <div className="text-5xl mb-4">🏭</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Normas Específicas por Zonas de Trabajo
              </h2>
              <p className="text-gray-600">
                Requisitos de seguridad específicos para cada zona de trabajo: producción, mantenimiento, logística, zonas eléctricas y más.
              </p>
              <div className="mt-4 text-blue-600 font-semibold flex items-center">
                Ver normativa →
              </div>
            </div>
          </Link>
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Acerca del Marco Normativo</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            El Marco Normativo Boliviano en materia de seguridad e higiene ocupacional establece las disposiciones legales 
            que regulan las condiciones de trabajo y protección de la salud de los trabajadores en territorio nacional.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Este marco legal es de cumplimiento obligatorio para todos los empleadores y trabajadores, y su objetivo 
            principal es prevenir accidentes laborales y enfermedades ocupacionales mediante la implementación de 
            medidas de seguridad apropiadas.
          </p>
        </div>
      </main>
    </div>
  );
}
