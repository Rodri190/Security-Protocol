import { Navbar } from '@/components';

export default function AnalysisByTypePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Análisis por Tipo de Accidente</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 leading-relaxed mb-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-red-50 rounded-lg border-t-4 border-red-500">
              <h3 className="text-xl font-bold text-red-800 mb-3">Cortes</h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">35%</p>
              <p className="text-gray-600">Más frecuente en producción</p>
            </div>
            
            <div className="p-6 bg-orange-50 rounded-lg border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-800 mb-3">Caídas</h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">28%</p>
              <p className="text-gray-600">Principalmente en almacén</p>
            </div>
            
            <div className="p-6 bg-yellow-50 rounded-lg border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Golpes</h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">22%</p>
              <p className="text-gray-600">Por objetos en movimiento</p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg border-t-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Quemaduras</h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">10%</p>
              <p className="text-gray-600">Área de soldadura</p>
            </div>
            
            <div className="p-6 bg-pink-50 rounded-lg border-t-4 border-pink-500">
              <h3 className="text-xl font-bold text-pink-800 mb-3">Golpes de Calor</h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">3%</p>
              <p className="text-gray-600">En verano principalmente</p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Otros</h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">2%</p>
              <p className="text-gray-600">Diversos tipos menores</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
