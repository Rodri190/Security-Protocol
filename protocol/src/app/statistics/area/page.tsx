import { Navbar } from '@/components';

export default function HighRiskAreaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Área con Mayor Riesgo</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 leading-relaxed mb-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
          <div className="mt-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Área de Producción</h3>
            <p className="text-gray-700 mb-4">65% de los accidentes totales</p>
            <p className="text-gray-600">
              Requiere atención inmediata y reforzamiento de medidas de seguridad.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
