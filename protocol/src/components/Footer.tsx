import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Sobre UMSS */}
          <div>
            <h3 className="text-xl font-bold mb-4">UMSS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Universidad Mayor de San Simón - Sistema de Análisis y Prevención de Riesgos Industriales.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  INICIO
                </Link>
              </li>
              <li>
                <Link href="/vestimenta" className="text-gray-400 hover:text-white transition-colors">
                  EQUIPOS DE PROTECCION SEGUN ZONAS DE TRABAJO
                </Link>
              </li>
              <li>
                <Link href="/statistics/total" className="text-gray-400 hover:text-white transition-colors">
                  ESTADISTICAS
                </Link>
              </li>
              <li>
                <Link href="/analysis/area" className="text-gray-400 hover:text-white transition-colors">
                  ANALISIS
                </Link>
              </li>
              <li>
                <Link href="/norms/heat" className="text-gray-400 hover:text-white transition-colors">
                  MARCO NORMATIVO BOLIVIANO
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Normas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Normas de Seguridad</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/norms/heat" className="text-gray-400 hover:text-white transition-colors">
                  ISO
                </Link>
              </li>
              <li>
                <Link href="/norms/falls" className="text-gray-400 hover:text-white transition-colors">
                  OHSAS
                </Link>
              </li>
              <li>
                <Link href="/norms/cuts" className="text-gray-400 hover:text-white transition-colors">
                  NFPA
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 Cochabamba, Bolivia</li>
              <li>📧 seguridad@umss.edu.bo</li>
              <li>📞 +591 4 4534000</li>
              <li className="pt-4">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Universidad Mayor de San Simón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
