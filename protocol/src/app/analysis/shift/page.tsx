import { Navbar } from '@/components';

export default function AnalysisByShiftPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Análisis por Turno</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          
          <div className="space-y-6 mt-8">
            <div className="p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">Turno Mañana (6:00 - 14:00)</h3>
              <p className="text-gray-700 mb-2">28% de incidentes totales</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Menor incidencia de accidentes graves.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-900 mb-2">Turno Tarde (14:00 - 22:00)</h3>
              <p className="text-gray-700 mb-2">24% de incidentes totales</p>
              <p className="text-gray-600">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-red-900 mb-2">Turno Noche (22:00 - 6:00) ⚠️</h3>
              <p className="text-gray-700 mb-2 font-semibold">48% de incidentes totales - ALERTA CRÍTICA</p>
              <p className="text-gray-600">
                Mayor fatiga del personal y reducción de visibilidad. Requiere medidas urgentes de prevención.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
