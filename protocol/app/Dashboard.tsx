'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Dashboard() {
  const [isVestimentaOpen, setIsVestimentaOpen] = useState(false);
  const [isEstadisticasOpen, setIsEstadisticasOpen] = useState(false);
  const [isAnalisisOpen, setIsAnalisisOpen] = useState(false);
  const [isNormasOpen, setIsNormasOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center border-2 border-black px-4 py-2 space-x-2">
                <Image
                  src="/LogoUmss.png"  
                  alt="Logo UMSS"
                  width={32}            
                  height={32}
                  className="object-contain"
                />
                <span className="text-2xl font-bold text-black">UMSS</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <div
                className="relative inline-block"
                onMouseEnter={() => setIsVestimentaOpen(true)}
                onMouseLeave={() => setIsVestimentaOpen(false)}
              >
                <button className="text-gray-700 hover:text-red-600 font-medium">
                  Vestimenta
                </button>
                {isVestimentaOpen && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Ropa de Trabajo
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Equipos de Seguridad
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Uniformes Industriales
                    </a>
                  </div>
                )}
              </div>

              <div
                className="relative inline-block"
                onMouseEnter={() => setIsEstadisticasOpen(true)}
                onMouseLeave={() => setIsEstadisticasOpen(false)}
              >
                <button className="text-gray-700 hover:text-red-600 font-medium">
                  Estadísticas Generales
                </button>
                {isEstadisticasOpen && (
                  <div className="absolute left-0 top-full mt-0 w-60 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Número total de accidentes
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Accidentes por semana/mes
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Área con mayor riesgo
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Turno con mayor incidencia
                    </a>
                  </div>
                )}
              </div>

              <div
                className="relative inline-block"
                onMouseEnter={() => setIsAnalisisOpen(true)}
                onMouseLeave={() => setIsAnalisisOpen(false)}
              >
                <button className="text-gray-700 hover:text-red-600 font-medium">
                  Análisis
                </button>
                {isAnalisisOpen && (
                  <div className="absolute left-0 top-full mt-0 w-60 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Por Área
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Por Turno
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Por Tipo de Accidente
                    </a>
                  </div>
                )}
              </div>

              <div
                className="relative inline-block"
                onMouseEnter={() => setIsNormasOpen(true)}
                onMouseLeave={() => setIsNormasOpen(false)}
              >
                <button className="text-gray-700 hover:text-red-600 font-medium">
                  Normas y Recomendaciones
                </button>
                {isNormasOpen && (
                  <div className="absolute left-0 top-full mt-0 w-60 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Golpes de calor
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Caídas
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Cortes
                    </a>
                  </div>
                )}
              </div>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              {/* User Icon */}
              <button className="text-gray-700 hover:text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              {/* Mail Icon */}
              <button className="text-gray-700 hover:text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
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
    </div>
  );
}
