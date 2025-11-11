import { Navbar } from '@/components';

export default function FallsNormsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Normas: Prevención de Caídas</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h2 className="text-2xl font-bold text-red-800 mb-2">⚠️ Seguridad contra Caídas</h2>
            <p className="text-red-700">
              Protocolos esenciales para prevenir caídas en el ambiente laboral.
            </p>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Factores de Riesgo</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Equipos de Protección</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Arnés de Seguridad</h4>
              <p className="text-gray-600 text-sm">Obligatorio para trabajo en alturas superiores a 2 metros</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Calzado Antideslizante</h4>
              <p className="text-gray-600 text-sm">Con suela de agarre para superficies resbaladizas</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Barandas de Seguridad</h4>
              <p className="text-gray-600 text-sm">Instalación en todas las áreas elevadas</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Señalización</h4>
              <p className="text-gray-600 text-sm">Advertencias visibles en zonas de riesgo</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Procedimientos de Emergencia</h3>
          <p className="text-gray-600 leading-relaxed">
            Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
        </div>
      </main>
    </div>
  );
}
