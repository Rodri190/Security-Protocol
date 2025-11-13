'use client'

import { Navbar } from '@/components';
import Link from 'next/link';
import { useState } from 'react';

const norms = [
  {
    id: 1,
    number: '1',
    title: 'Ley General de Higiene, Seguridad Ocupacional y Bienestar',
    code: 'D.L. 16998 de 1979',
    scope: 'Principal ley que obliga a garantizar las condiciones adecuadas de higiene y seguridad en el trabajo.',
    violation: {
      title: 'Artículo 25° y 375°',
      description: 'Obliga al empleador a proveer gratuitamente el EPP y la ropa de trabajo adecuada. El incumplimiento más común es la falta de dotación, la dotación de equipos de baja calidad o el no reemplazo oportuno.'
    }
  },
  {
    id: 2,
    number: '2',
    title: 'NTS-009/23',
    code: 'Programa de Gestión de Seguridad',
    scope: 'Exige la gestión de riesgos y la elaboración de un Programa de Gestión de Seguridad y Salud en el Trabajo (PGSST).',
    violation: {
      title: 'Gestión de Riesgos',
      description: 'El incumplimiento se da al no realizar o actualizar la Identificación de Peligros y Evaluación de Riesgos (IPER) para cada zona. Si la IPER se realiza correctamente, se determina el EPP y el procedimiento exacto.'
    }
  },
  {
    id: 3,
    number: '3',
    title: 'NB 51003:2023',
    code: 'IBNORCA',
    scope: 'Directrices para la selección, dotación y mantenimiento de los EPPs.',
    violation: {
      title: 'Certificación y Mantenimiento',
      description: 'Obliga a que el EPP esté respaldado por una certificación (nacional o internacional reconocida). Se incumple al usar EPP sin certificación o por no realizar el mantenimiento e inspección adecuada (ej: en cascos, arneses o respiradores).'
    }
  },
  {
    id: 4,
    number: '4',
    title: 'D.S. 2935 de 2016',
    code: 'Seguridad y Salud en la Construcción',
    scope: 'Establece lineamientos para la seguridad en el sector construcción, aplicables a trabajos en altura.',
    violation: {
      title: 'Capacitación y Prohibiciones',
      description: 'Prohíbe que el personal sin capacitación realice trabajos peligrosos y exige la inspección de equipos antes de su uso. Se incumple la capacitación específica en tareas de alto riesgo.'
    }
  },
  {
    id: 5,
    number: '5',
    title: 'Decreto Ley Nº 16998 (Art. 376°)',
    code: 'Obligación de los trabajadores',
    scope: 'Obligación de los trabajadores.',
    violation: {
      title: 'Uso Obligatorio',
      description: 'Se incumple cuando el trabajador no utiliza o altera el EPP provisto, lo cual es una obligación legal del trabajador.'
    }
  }
];

export default function GeneralRisksPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <section
        className="relative h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(220, 38, 38, 0.5), rgba(127, 29, 29, 0.6)), url("/FondoPage.jfif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Normas para Riesgos Generales
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Marco Legal de Seguridad Industrial Boliviano
          </p>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-12">
        {/* Download PDF Section */}
        <div className="mb-8 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 shadow-md border-l-4 border-red-600">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
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
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
          <span className="text-gray-900">Normas para Riesgos Generales</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Normas para Riesgos Generales</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2.5 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-red-800 mb-1">Marco Legal de Seguridad Industrial</h2>
                <p className="text-red-700 text-lg">
                  Normativa boliviana aplicable a todos los centros de trabajo para la prevención de riesgos laborales.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            {norms.map((norm, index) => (
              <div key={norm.id} className={index !== 0 ? 'border-t border-gray-200' : ''}>
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(norm.id)}
                  className="flex items-center justify-between w-full p-6 text-left transition-all duration-200 hover:bg-red-50 group"
                  aria-expanded={openAccordion === norm.id}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="flex-shrink-0 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md group-hover:scale-110 transition-transform">
                      {norm.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {norm.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 font-medium">{norm.code}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-red-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openAccordion === norm.id ? 'rotate-180' : ''
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
                    openAccordion === norm.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-100">
                    <div className="space-y-6">
                      {/* Alcance General */}
                      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                        <div className="flex items-start space-x-3">
                          <div className="bg-red-100 p-2.5 rounded-lg flex-shrink-0">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-bold text-gray-900 mb-2">Alcance General</h4>
                            <p className="text-base text-gray-700 leading-relaxed">
                              {norm.scope}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Obligación Clave */}
                      <div className="bg-white rounded-lg p-5 shadow-sm border border-amber-200">
                        <div className="flex items-start space-x-3">
                          <div className="bg-amber-100 p-2.5 rounded-lg flex-shrink-0">
                            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-bold text-gray-900 mb-2">Obligación Clave que se Incumple</h4>
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                              <p className="text-base text-gray-800">
                                <span className="font-bold text-amber-800">{norm.violation.title}:</span>{' '}
                                {norm.violation.description}
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

          {/* Obligaciones del Empleador */}
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-blue-100 p-2.5 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Obligaciones del Empleador</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              Según el marco normativo boliviano, todo empleador está obligado a:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Proporcionar equipos de protección personal sin costo para el trabajador</li>
              <li>Capacitar al personal en seguridad al menos 2 veces al año</li>
              <li>Mantener registros actualizados de accidentes e incidentes</li>
              <li>Realizar evaluaciones de riesgo periódicas</li>
              <li>Conformar comités de seguridad en empresas con más de 20 trabajadores</li>
              <li>Reportar accidentes graves al Ministerio de Trabajo en 24 horas</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
