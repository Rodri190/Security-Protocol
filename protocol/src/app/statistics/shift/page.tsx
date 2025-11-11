import { Navbar } from '@/components';

export default function ShiftIncidencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Turno con Mayor Incidencia</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-bold text-gray-700 mb-2">Turno Mañana</h3>
              <p className="text-2xl font-bold text-gray-800">28%</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-bold text-gray-700 mb-2">Turno Tarde</h3>
              <p className="text-2xl font-bold text-gray-800">24%</p>
            </div>
            <div className="p-6 bg-red-50 rounded-lg border-2 border-red-500">
              <h3 className="text-lg font-bold text-red-600 mb-2">Turno Noche ⚠️</h3>
              <p className="text-2xl font-bold text-red-700">48%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
