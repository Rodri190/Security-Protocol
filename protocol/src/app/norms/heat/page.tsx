import { Navbar } from '@/components';

export default function HeatStrokeNormsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Normas: Golpes de Calor</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-2">⚠️ Prevención de Golpes de Calor</h2>
            <p className="text-orange-700">
              Información crítica para prevenir golpes de calor en ambientes industriales.
            </p>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Síntomas</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Medidas de Prevención</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Hidratación constante durante la jornada laboral</li>
            <li>Uso de ropa ligera y transpirable</li>
            <li>Pausas frecuentes en áreas con sombra</li>
            <li>Monitoreo de la temperatura ambiente</li>
            <li>Acceso a agua potable fresca</li>
          </ul>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Primeros Auxilios</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </main>
    </div>
  );
}
