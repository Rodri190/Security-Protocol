import { Navbar } from '@/components';

export default function AnalysisByAreaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Análisis por Área</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Área de Producción</h3>
              <p className="text-gray-600">45 incidentes reportados</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">Área de Logística</h3>
              <p className="text-gray-600">18 incidentes reportados</p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Área de Mantenimiento</h3>
              <p className="text-gray-600">23 incidentes reportados</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Área Administrativa</h3>
              <p className="text-gray-600">7 incidentes reportados</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
