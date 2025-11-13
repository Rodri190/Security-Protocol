'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mainNavigation } from '@/lib/navigation';

export default function Navbar() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<number | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-center lg:gap-12 h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center lg:absolute lg:left-4">
            <div className="flex items-center border-2 border-black px-3 py-1.5 md:px-4 md:py-2 space-x-2">
              <Image
                src="/LogoUmss.png"
                alt="Logo UMSS"
                width={28}
                height={28}
                className="object-contain md:w-8 md:h-8"
              />
              <span className="text-xl md:text-2xl font-bold text-black">UMSS</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
            {/* Home Button */}
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              INICIO
            </Link>
            
            {mainNavigation.map((item, index) => {
              if ('items' in item) {
                // Es un menú desplegable
                return (
                  <div
                    key={index}
                    className="relative inline-block"
                    onMouseEnter={() => setOpenMenuIndex(index)}
                    onMouseLeave={() => setOpenMenuIndex(null)}
                  >
                    <button className="text-gray-700 hover:text-red-600 font-medium">
                      {item.label}
                    </button>
                    {openMenuIndex === index && (
                      <div className="absolute left-0 top-full mt-0 w-60 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else {
                // Es un link directo
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 font-medium"
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
          </nav>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-red-600 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // X Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {/* Home Link */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors"
              >
                Inicio
              </Link>

              {mainNavigation.map((item, index) => {
                if ('items' in item) {
                  // Menú desplegable en móvil
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === index ? null : index)}
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${openMobileSubmenu === index ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openMobileSubmenu === index && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenMobileSubmenu(null);
                              }}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  // Link directo en móvil
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
