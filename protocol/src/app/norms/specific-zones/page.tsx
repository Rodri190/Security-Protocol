'use client'

import { Navbar } from '@/components';
import Link from 'next/link';
import React, { useState, JSX } from 'react';

const zones = [
  {
    id: 1,
    number: '1',
    title: 'Manipulación de Químicos',
    dangers: 'Sustancias corrosivas, salpicaduras y vapores',
    norm: 'ANSI Z358.1 (Lavaojos/Duchas) / ISO 374 (Guantes Químicos)',
    requirements: 'La Ficha de Datos de Seguridad (FDS) del químico debe ser el único criterio para seleccionar el EPP. Se debe garantizar la ubicación de lavaojos a 10 segundos de recorrido.',
    icon: 'chemical'
  },
  {
    id: 2,
    number: '2',
    title: 'Soldadura y Corte',
    dangers: 'Radiación UV/IR, chispas, metal fundido',
    norm: 'ISO 11612 (Ropa de Protección) / ANSI Z87.1 (Protección Ocular)',
    requirements: 'El filtro de soldadura debe ser seleccionado según el tipo y amperaje de soldadura. La ropa debe ser de material ignífugo (ej: algodón tratado) y estar seca.',
    icon: 'welding'
  },
  {
    id: 3,
    number: '3',
    title: 'Fundición y Metalurgia',
    dangers: 'Calor radiante, salpicaduras de metal fundido',
    norm: 'ISO 11612',
    requirements: 'La ropa debe ofrecer protección contra el calor radiante (H) y salpicaduras de metal fundido (D/E). Los EPP deben estar libres de pliegues donde el metal pueda acumularse.',
    icon: 'factory'
  },
  {
    id: 4,
    number: '4',
    title: 'Riesgo Eléctrico',
    dangers: 'Arco eléctrico, choque eléctrico',
    norm: 'NFPA 70E (Seguridad Eléctrica)',
    requirements: 'Exigencia de un Análisis de Peligro de Choque y un Análisis de Energía Incidente (Arco Eléctrico). El EPP (trajes, guantes) debe ser clasificado por Calificación de Arco (Cal/cm²) y los guantes dieléctricos deben ser inspeccionados periódicamente.',
    icon: 'electrical'
  },
  {
    id: 5,
    number: '5',
    title: 'Ruido Elevado',
    dangers: 'Pérdida auditiva',
    norm: 'NTS-003/17 (Ruido Ocupacional)',
    requirements: 'El uso de protectores auditivos (EPP) es la última medida. Se debe priorizar la reducción del ruido en la fuente (controles de ingeniería). Los protectores deben garantizar la atenuación necesaria según la dosis de ruido.',
    icon: 'sound'
  },
  {
    id: 6,
    number: '6',
    title: 'Polvo o Partículas',
    dangers: 'Inhalación de partículas, irritación ocular',
    norm: 'OSHA 1910.134 (Protección Respiratoria)',
    requirements: 'Se requiere Prueba de Ajuste (Fit Test) para respiradores ajustados (ej: N95 o P100) y Programa de Protección Respiratoria con vigilancia médica.',
    icon: 'dust'
  },
  {
    id: 7,
    number: '7',
    title: 'Espacios Confinados',
    dangers: 'Falta de oxígeno, gases tóxicos, atrapamiento',
    norm: 'NTS-008/17 (Trabajos en Espacios Confinados)',
    requirements: 'Obligatorio un Permiso de Entrada (PET), monitoreo atmosférico continuo (O2, explosividad, toxicidad), ventilación forzada y contar con un equipo de rescate disponible (Arnés y trípode).',
    icon: 'confined'
  },
  {
    id: 8,
    number: '8',
    title: 'Construcción y Altura',
    dangers: 'Caídas, golpes',
    norm: 'NTS-003/17 (Trabajos en Altura)',
    requirements: 'Uso obligatorio del Arnés y Línea de Vida en trabajos a partir de 1.8 metros. El punto de anclaje debe ser verificado por personal competente y debe soportar 2,270 kg por trabajador conectado.',
    icon: 'construction'
  },
  {
    id: 9,
    number: '9',
    title: 'Zonas Biológicas',
    dangers: 'Microorganismos patógenos, fluidos corporales',
    norm: 'OMS/OPS (Estándares Biológicos)',
    requirements: 'Estricto protocolo de Retiro (Doffing) para evitar la contaminación cruzada. Prohibida la reutilización de guantes, batas y mascarillas desechables.',
    icon: 'biological'
  },
  {
    id: 10,
    number: '10',
    title: 'Frío Extremo/Criogénicos',
    dangers: 'Quemaduras por frío, desplazamiento de oxígeno',
    norm: 'Estándares ISO (Ropa Térmica)',
    requirements: 'La ropa debe ser aislante y resistente al líquido criogénico. Se exige la medición de oxígeno en áreas donde se almacenan gases criogénicos (ej: Nitrógeno líquido).',
    icon: 'cold'
  },
  {
    id: 11,
    number: '11',
    title: 'Manipulación de Carga',
    dangers: 'Golpes, atrapamientos, resbalones',
    norm: 'D.L. 16998 (Higiene) / NB 33001 (Señalización)',
    requirements: 'Capacitación en levantamiento manual correcto y uso de ayudas mecánicas (montacargas, carretillas) si la carga excede los límites legales. La zona de tránsito debe estar ordenada, limpia y señalizada (Norma NB 33001).',
    icon: 'lifting'
  },
  {
    id: 12,
    number: '12',
    title: 'Altas Temperaturas Ambientales',
    dangers: 'Estrés térmico, deshidratación',
    norm: 'D.L. 16998 (Bienestar)',
    requirements: 'Establecer pausas, rotación de personal y acceso a hidratación para evitar el golpe de calor. Vigilancia médica para detectar signos de estrés térmico en el personal expuesto.',
    icon: 'heat'
  }
];

export default function SpecificZonesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const getIcon = (iconType: string) => {
    const icons: { [key: string]: JSX.Element } = {
      chemical: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      welding: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      factory: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      electrical: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      sound: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      dust: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      confined: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      construction: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      biological: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      cold: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      lifting: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      heat: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    };
    return icons[iconType] || icons.chemical;
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <section
        className="relative h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37, 99, 235, 0.5), rgba(29, 78, 216, 0.6)), url("/FondoPage.jfif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Normas Específicas por Zonas de Trabajo
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Requisitos de Seguridad según el Tipo de Operación Industrial
          </p>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-12">
        {/* Download PDF Section */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 shadow-md border-l-4 border-blue-600">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Marco Normativo Completo</h3>
                <p className="text-gray-700">Descarga el documento PDF con todas las normas y obligaciones</p>
              </div>
            </div>
            <a
              href="/docs/MARCO NORMATIVO BOLIVIANO Y OBLIGACIONES INCUMPLIDAS.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Descargar PDF</span>
            </a>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/norms" className="hover:text-red-600">Marco Normativo</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Normas Específicas por Zonas</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Normas de Seguridad Específicas por Zonas de Trabajo</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2.5 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-1">Requisitos por Zona de Trabajo</h2>
                <p className="text-blue-700 text-lg">
                  Normativa específica según el tipo de operación y los riesgos particulares de cada área industrial.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            {zones.map((zone, index) => (
              <div key={zone.id} className={index !== 0 ? 'border-t border-gray-200' : ''}>
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(zone.id)}
                  className="flex items-center justify-between w-full p-6 text-left transition-all duration-200 hover:bg-blue-50 group"
                  aria-expanded={openAccordion === zone.id}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="flex-shrink-0 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md group-hover:scale-110 transition-transform">
                      {zone.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {zone.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{zone.dangers}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openAccordion === zone.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openAccordion === zone.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-100">
                    <div className="space-y-5">
                      {/* Norma Técnica */}
                      <div className="bg-white rounded-lg p-5 shadow-sm border border-blue-200">
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-100 p-2.5 rounded-lg flex-shrink-0">
                            {getIcon(zone.icon)}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-bold text-gray-900 mb-2">Norma Técnica a Considerar</h4>
                            <p className="text-base text-gray-700 leading-relaxed">
                              <span className="font-semibold text-blue-700">{zone.norm}</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Requisitos Específicos */}
                      <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-200">
                        <div className="flex items-start space-x-3">
                          <div className="bg-orange-100 p-2.5 rounded-lg flex-shrink-0">
                            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-bold text-gray-900 mb-2">Requisito Específico a Cumplir</h4>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                              <p className="text-base text-gray-800 leading-relaxed">
                                {zone.requirements}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nota sobre inspecciones */}
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-green-100 p-2.5 rounded-lg">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Inspecciones y Auditorías</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              Todas las zonas de trabajo deben ser inspeccionadas periódicamente:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Inspecciones diarias por parte de supervisores de área</li>
              <li>Auditorías mensuales del comité de seguridad</li>
              <li>Evaluaciones trimestrales por personal especializado</li>
              <li>Revisión anual de cumplimiento normativo</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
