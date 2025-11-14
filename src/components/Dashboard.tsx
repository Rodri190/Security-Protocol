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
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Fondo.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            <span className="block">ANÁLISIS Y PREVENCIÓN</span>
            <span className="block">DE</span>
            <span className="block">RIESGOS INDUSTRIALES</span>
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
              <div className="mb-4 bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center">
                <svg className="w-9 h-9 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Estadísticas en Tiempo Real</h3>
              <p className="text-gray-600 mb-4">
                Monitoreo constante de incidentes y accidentes en todas las áreas de trabajo.
                Datos actualizados para toma de decisiones informadas.
              </p>
              <Link href="/analysis/type" className="text-red-600 hover:text-red-700 font-semibold">
                Ver estadísticas →
              </Link>
            </div>

            {/* Feature 2*/}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
                <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Marco normativo Boliviano</h3>
              <p className="text-gray-600 mb-4">
                Análisis detallado del marco normativo boliviano. Identificación de leyes clave, principios fundamentales y áreas que requieren actualización o mayor cumplimiento para fortalecer la gestión institucional y social.
              </p>
              <Link href="/norms" className="text-red-600 hover:text-red-700 font-semibold">
                Ver análisis →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center">
                <svg className="w-9 h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
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
      <section className="py-16 bg-[#273c75]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prevención y Seguridad: Nuestra Prioridad
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Trabajamos constantemente para mejorar las condiciones de seguridad en todas las áreas.
            Tu bienestar es nuestro compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/norms"
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ver Normas de Seguridad
            </Link>
            <Link
              href="/analysis/type"
              className="bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors border-2 border-white"
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

      {/* Marco Normativo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Marco Normativo Boliviano
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Normativa boliviana para la prevención de riesgos y seguridad en el trabajo industrial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 - Normas Riesgos Generales */}
            <Link href="/norms/general-risks">
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all cursor-pointer border-l-4 border-red-600 transform hover:-translate-y-1">
                <div className="mb-4 bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center">
                  <svg className="w-9 h-9 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Normas para Riesgos Generales
                </h3>
                <p className="text-gray-600 mb-4">
                  Leyes y decretos supremos que establecen las bases legales para la protección de los trabajadores en todos los sectores industriales.
                </p>
                <span className="text-red-600 font-semibold flex items-center">
                  Ver normativa →
                </span>
              </div>
            </Link>

            {/* Card 2 - Normas Específicas por Zonas */}
            <Link href="/norms/specific-zones">
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all cursor-pointer border-l-4 border-blue-600 transform hover:-translate-y-1">
                <div className="mb-4 bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
                  <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Normas Específicas por Zonas de Trabajo
                </h3>
                <p className="text-gray-600 mb-4">
                  Requisitos de seguridad específicos para cada zona de trabajo: producción, mantenimiento, logística, zonas eléctricas y más.
                </p>
                <span className="text-blue-600 font-semibold flex items-center">
                  Ver normativa →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}
