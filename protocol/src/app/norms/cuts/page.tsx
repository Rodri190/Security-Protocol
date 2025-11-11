import { Navbar } from '@/components';

export default function CutsNormsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Normas: Prevención de Cortes</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">⚠️ Manejo Seguro de Herramientas Cortantes</h2>
            <p className="text-yellow-700">
              Directrices para prevenir lesiones por cortes en el área de trabajo.
            </p>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Herramientas y Equipos</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Equipos de Protección Personal</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-6">
            <li>Guantes resistentes a cortes (nivel 3 o superior)</li>
            <li>Protección para antebrazos</li>
            <li>Delantal de seguridad</li>
            <li>Gafas de protección</li>
            <li>Calzado de seguridad con puntera de acero</li>
          </ul>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Buenas Prácticas</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <h4 className="font-bold text-gray-800 mb-3">Mantenimiento de Herramientas</h4>
            <p className="text-gray-600">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Atención de Heridas</h3>
          <p className="text-gray-600 leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
        </div>
      </main>
    </div>
  );
}
