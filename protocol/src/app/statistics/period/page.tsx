import { Navbar } from '@/components';

export default function AccidentsByPeriodPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Accidentes por Semana/Mes</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 leading-relaxed mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Esta Semana</h3>
              <p className="text-3xl font-bold text-gray-800">8 accidentes</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-2">Este Mes</h3>
              <p className="text-3xl font-bold text-gray-800">34 accidentes</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
