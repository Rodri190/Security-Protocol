import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Fondo.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-8">
            Análisis y Prevención de Riesgos Industriales
          </h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">156</div>
              <p className="text-gray-600">Incidentes Totales</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">34</div>
              <p className="text-gray-600">Este Mes</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-600">Resueltos</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">12</div>
              <p className="text-gray-600">Áreas Monitoreadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Servicios de Seguridad Industrial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Estadísticas en Tiempo Real</h3>
              <p className="text-gray-600 mb-4">
                Monitoreo constante de incidentes y accidentes en todas las áreas de trabajo.
                Datos actualizados para toma de decisiones informadas.
              </p>
              <Link href="/statistics/total" className="text-red-600 hover:text-red-700 font-semibold">
                Ver estadísticas →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Análisis Detallado</h3>
              <p className="text-gray-600 mb-4">
                Análisis profundo por área, turno y tipo de accidente. Identificación de
                patrones y áreas críticas que requieren atención inmediata.
              </p>
              <Link href="/analysis/area" className="text-red-600 hover:text-red-700 font-semibold">
                Ver análisis →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">👷</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Equipamiento de Seguridad</h3>
              <p className="text-gray-600 mb-4">
                Catálogo completo de equipos de protección personal y uniformes industriales.
                Información sobre ropa de trabajo certificada.
              </p>
              <Link href="/vestimenta" className="text-red-600 hover:text-red-700 font-semibold">
                Ver catálogo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prevención y Seguridad: Nuestra Prioridad
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Trabajamos constantemente para mejorar las condiciones de seguridad en todas las áreas.
            Tu bienestar es nuestro compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/norms/heat"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ver Normas de Seguridad
            </Link>
            <Link
              href="/statistics/total"
              className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors border-2 border-white"
            >
              Consultar Estadísticas
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sistema Integral de Prevención de Riesgos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">✓</span>
                  <span className="text-gray-700">Monitoreo 24/7 de todas las áreas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">✓</span>
                  <span className="text-gray-700">Capacitación continua del personal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">✓</span>
                  <span className="text-gray-700">Equipos de protección certificados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">✓</span>
                  <span className="text-gray-700">Reportes y análisis detallados</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Áreas de Enfoque</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-bold text-gray-800">Producción</h4>
                  <p className="text-gray-600 text-sm">Área con mayor actividad industrial</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-bold text-gray-800">Mantenimiento</h4>
                  <p className="text-gray-600 text-sm">Reparación y cuidado de equipos</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-bold text-gray-800">Logística</h4>
                  <p className="text-gray-600 text-sm">Transporte y almacenamiento</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-gray-800">Administración</h4>
                  <p className="text-gray-600 text-sm">Gestión y coordinación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}
