'use client'

import { Navbar } from '@/components';
import { useState } from 'react';

const equipmentZones = [
  {
    id: 1,
    title: 'Manipulación de Químicos',
    risks: 'Exposición a sustancias corrosivas, tóxicas, irritantes o inflamables',
    equipment: [
      'Gafas de seguridad o careta facial sellada',
      'Guantes químicos (nitrilo, neopreno, butilo o PVC)',
      'Ropa impermeable o traje de protección química',
      'Botas de goma antideslizantes',
      'Respirador con filtro para gases y vapores'
    ],
    considerations: 'El traje debe cubrir completamente la piel. Se recomienda ducha de emergencia y lavaojos cercanos.',
    color: 'red',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  },
  {
    id: 2,
    title: 'Soldadura y Corte',
    risks: 'Radiación UV/IR, chispas, salpicaduras de metal fundido, humos metálicos',
    equipment: [
      'Máscara de soldar con filtro adecuado',
      'Gafas de seguridad con filtro lateral',
      'Guantes de cuero grueso',
      'Ropa ignífuga y mandil de cuero',
      'Botas de cuero de caña alta',
      'Protectores auditivos'
    ],
    considerations: 'La ropa debe mantenerse seca. No usar materiales sintéticos.',
    color: 'orange',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 3,
    title: 'Fundición y Metalurgia',
    risks: 'Calor radiante extremo, salpicaduras de metal fundido, humos y gases',
    equipment: [
      'Casco con visera reflectante',
      'Gafas protectoras con filtro térmico',
      'Careta y traje aluminizado',
      'Guantes de Kevlar o Nomex',
      'Botas con aislamiento térmico',
      'Protección respiratoria'
    ],
    considerations: 'La ropa debe ser holgada pero ajustada en muñecas y tobillos. Mantenerla seca.',
    color: 'yellow',
    icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
  },
  {
    id: 4,
    title: 'Riesgo Eléctrico',
    risks: 'Arco eléctrico, choque, explosión, contacto con partes energizadas',
    equipment: [
      'Ropa ignífuga certificada (FR)',
      'Casco dieléctrico',
      'Guantes y botas dieléctricas',
      'Herramientas aisladas',
      'Alfombra dieléctrica'
    ],
    considerations: 'Nunca usar ropa sintética bajo la ropa FR. Aplicar bloqueo y etiquetado (LOTO).',
    color: 'purple',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 5,
    title: 'Ruido Elevado',
    risks: 'Pérdida auditiva, estrés, fatiga',
    equipment: [
      'Tapones auditivos moldeables',
      'Orejeras de reducción de ruido',
      'Combinación de ambos en niveles extremos'
    ],
    considerations: 'Los protectores deben usarse todo el tiempo de exposición. La pérdida auditiva es irreversible.',
    color: 'blue',
    icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'
  },
  {
    id: 6,
    title: 'Polvo y Partículas',
    risks: 'Inhalación de partículas, irritación ocular, enfermedades respiratorias',
    equipment: [
      'Mascarilla N95 o P100',
      'Gafas cerradas de seguridad',
      'Ropa ajustada y lavable',
      'Botas antideslizantes',
      'Guantes de trabajo'
    ],
    considerations: 'Mantener ventilación forzada. Evitar comer o fumar en el área.',
    color: 'gray',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  },
  {
    id: 7,
    title: 'Espacios Confinados',
    risks: 'Falta de oxígeno, gases tóxicos, atrapamiento',
    equipment: [
      'Arnés completo con línea de vida',
      'Detector multigás personal',
      'SCBA (equipo autónomo de respiración)',
      'Casco con lámpara',
      'Linterna intrínsecamente segura'
    ],
    considerations: 'Siempre debe haber un vigilante externo y monitoreo atmosférico previo.',
    color: 'indigo',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    id: 8,
    title: 'Manipulación de Carga',
    risks: 'Golpes, atrapamientos, caídas de objetos, lesiones lumbares',
    equipment: [
      'Casco de seguridad',
      'Chaleco reflectante',
      'Guantes reforzados',
      'Botas de seguridad con puntera',
      'Faja lumbar (opcional)'
    ],
    considerations: 'Buena iluminación y señalización. La faja no sustituye la técnica correcta de levantamiento.',
    color: 'green',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  },
  {
    id: 9,
    title: 'Zona Biológica',
    risks: 'Exposición a microorganismos, fluidos o agentes biológicos',
    equipment: [
      'Bata impermeable desechable',
      'Guantes de nitrilo desechables',
      'Mascarilla N95 o FFP2',
      'Gafas de seguridad o pantalla facial',
      'Calzado cerrado impermeabilizado'
    ],
    considerations: 'Nunca reutilizar guantes. No tocar la cara con EPP contaminado. Desechar en contenedores biológicos.',
    color: 'pink',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    id: 10,
    title: 'Frío Extremo/Criogénicos',
    risks: 'Quemaduras por frío, congelación, desplazamiento de oxígeno',
    equipment: [
      'Guantes criogénicos especializados',
      'Delantal aislante térmico',
      'Botas térmicas aisladas',
      'Protección facial completa',
      'Ropa térmica multicapa'
    ],
    considerations: 'Evitar contacto con metales fríos o líquidos criogénicos. No usar objetos metálicos personales.',
    color: 'cyan',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    id: 11,
    title: 'Construcción y Altura',
    risks: 'Caídas desde altura, golpes, proyección de objetos',
    equipment: [
      'Arnés anticaídas certificado',
      'Casco con barboquejo',
      'Botas antideslizantes con puntera',
      'Guantes de trabajo resistentes',
      'Chaleco reflectante',
      'Línea de vida retráctil'
    ],
    considerations: 'Revisar arnés antes de cada uso. Puntos de anclaje deben soportar al menos 2,270 kg.',
    color: 'amber',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    id: 12,
    title: 'Altas Temperaturas Ambientales',
    risks: 'Estrés térmico, deshidratación, golpe de calor',
    equipment: [
      'Casco ventilado',
      'Ropa ligera y transpirable',
      'Lentes de sol con protección UV',
      'Guantes ligeros transpirables',
      'Acceso constante a hidratación'
    ],
    considerations: 'Balancear protección con ventilación. Planificar turnos más cortos y vigilancia médica.',
    color: 'red',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  }
];

const colorClasses: { [key: string]: { bg: string; border: string; text: string; hover: string; badge: string } } = {
  red: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-700', hover: 'hover:bg-red-100', badge: 'bg-red-100 text-red-800' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700', hover: 'hover:bg-orange-100', badge: 'bg-orange-100 text-orange-800' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-700', hover: 'hover:bg-yellow-100', badge: 'bg-yellow-100 text-yellow-800' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-700', hover: 'hover:bg-purple-100', badge: 'bg-purple-100 text-purple-800' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700', hover: 'hover:bg-blue-100', badge: 'bg-blue-100 text-blue-800' },
  gray: { bg: 'bg-gray-50', border: 'border-gray-500', text: 'text-gray-700', hover: 'hover:bg-gray-100', badge: 'bg-gray-100 text-gray-800' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-500', text: 'text-indigo-700', hover: 'hover:bg-indigo-100', badge: 'bg-indigo-100 text-indigo-800' },
  green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', hover: 'hover:bg-green-100', badge: 'bg-green-100 text-green-800' },
  pink: { bg: 'bg-pink-50', border: 'border-pink-500', text: 'text-pink-700', hover: 'hover:bg-pink-100', badge: 'bg-pink-100 text-pink-800' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-500', text: 'text-cyan-700', hover: 'hover:bg-cyan-100', badge: 'bg-cyan-100 text-cyan-800' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-500', text: 'text-amber-700', hover: 'hover:bg-amber-100', badge: 'bg-amber-100 text-amber-800' },
};

export default function VestimentaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState<number | null>(null);

  const filteredZones = equipmentZones.filter(zone =>
    zone.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    zone.risks.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <section
        className="relative h-[450px] flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/FondoPage.jfif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white z-10 px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Equipos de Protección Personal
          </h1>
          <p className="text-xl mb-6">
            Guía completa de EPP según zonas de trabajo y riesgos específicos
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">{equipmentZones.length}</div>
              <div className="text-sm">Zonas de Trabajo</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">12+</div>
              <div className="text-sm">Tipos de Riesgos</div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar por zona o tipo de riesgo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          {searchTerm && (
            <p className="mt-3 text-sm text-gray-600">
              Mostrando {filteredZones.length} de {equipmentZones.length} zonas
            </p>
          )}
        </div>

        {/* Introduction Card */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 shadow-md border-l-4 border-blue-600">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Importancia del EPP</h3>
              <p className="text-gray-700 leading-relaxed">
                El equipo de protección personal (EPP) es la última barrera de defensa ante los riesgos laborales que no pueden ser eliminados o controlados por medios técnicos, administrativos o de ingeniería. Su correcta selección depende de los peligros específicos del área de trabajo, de la exposición del trabajador y de la duración de la tarea.
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredZones.map((zone) => {
            const colors = colorClasses[zone.color];
            return (
              <div
                key={zone.id}
                className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${colors.border} cursor-pointer transform hover:-translate-y-1`}
                onClick={() => setSelectedZone(zone.id === selectedZone ? null : zone.id)}
              >
                <div className={`p-6 ${colors.bg}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                      Zona {zone.id}
                    </span>
                    <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={zone.icon} />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                    {zone.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {zone.risks}
                  </p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      EPP Recomendado:
                    </h4>
                    <ul className="space-y-2">
                      {zone.equipment.slice(0, selectedZone === zone.id ? undefined : 3).map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className={`${colors.text} mr-2 flex-shrink-0`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {zone.equipment.length > 3 && selectedZone !== zone.id && (
                      <button className={`mt-2 text-sm ${colors.text} font-semibold hover:underline`}>
                        Ver {zone.equipment.length - 3} más...
                      </button>
                    )}
                  </div>

                  {selectedZone === zone.id && (
                    <div className={`mt-4 p-4 ${colors.bg} rounded-lg border ${colors.border}`}>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Consideraciones:
                      </h4>
                      <p className="text-sm text-gray-700">{zone.considerations}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredZones.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron resultados</h3>
            <p className="text-gray-500">Intenta con otros términos de búsqueda</p>
          </div>
        )}

        {/* Safety Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 border-l-4 border-red-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-8 h-8 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Reglas de Oro del EPP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Inspeccionar antes de usar</p>
                <p className="text-sm text-gray-700">Revisar el estado del EPP antes de cada turno</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Uso correcto y completo</p>
                <p className="text-sm text-gray-700">Usar todo el EPP requerido durante toda la jornada</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Mantenimiento adecuado</p>
                <p className="text-sm text-gray-700">Limpiar y almacenar correctamente después de usar</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Reemplazo oportuno</p>
                <p className="text-sm text-gray-700">Cambiar EPP dañado o vencido inmediatamente</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
