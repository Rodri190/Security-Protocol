import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Chatbot from '../components/Chatbot';

export const metadata: Metadata = {
  title: 'Análisis y Prevención de Riesgos Industriales',
  description: 'Sistema integral de análisis y prevención de riesgos industriales con marco normativo boliviano',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
