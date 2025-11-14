 'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AnimatedBot from './AnimatedBot';

interface Message {
  type: 'user' | 'bot';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: '¡Hola! Soy tu asistente de Seguridad Industrial. ¿Tienes alguna consulta sobre prevención de riesgos, vestimenta de seguridad o normas industriales?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [areaName, setAreaName] = useState<string | null>(null);
  const [pageText, setPageText] = useState<string | null>(null);

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Detectar el área a partir de la ruta y leer texto de la página principal
  useEffect(() => {
    if (!pathname) return;

    // Mapear rutas a nombres legibles
    const routeToName: Record<string, string> = {
      '/': 'Inicio / Dashboard',
      '/analysis/type': 'Análisis por tipo',
      '/norms': 'Normas',
      '/norms/cuts': 'Normas - Cortes',
      '/norms/general-risks': 'Normas - Riesgos Generales',
      '/norms/specific-zones': 'Normas - Zonas Específicas',
      '/vestimenta': 'Vestimenta y EPP',
    };

    const area = routeToName[pathname] || pathname.replace('/', '') || 'Página';
    setAreaName(area);

    // Intentar leer el contenido principal de la página para contexto
    try {
      const main = document.querySelector('main');
      const text = main ? (main.textContent || '').trim() : '';
      setPageText(text ? text.slice(0, 2000) : null);
    } catch (e) {
      setPageText(null);
    }
  }, [pathname]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    // Agregar mensaje del usuario
    const newMessages: Message[] = [
      ...messages,
      { type: 'user', text: userMessage },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Enviar mensaje a la API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(-6), // Enviar últimos 6 mensajes para contexto
          area: areaName,
          pageText: pageText,
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();

      // Agregar respuesta del bot
      setMessages([
        ...newMessages,
        { type: 'bot', text: data.response },
      ]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setMessages([
        ...newMessages,
        {
          type: 'bot',
          text: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta nuevamente. 🔧',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chatbot Character con SVG animado */}
          <div
            onClick={toggleChat}
            className="cursor-pointer"
          >
            <AnimatedBot />
          </div>

          {/* Chat Window */}
          {isOpen && (
            <div
              className="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
              style={{
                animation: 'slideInUp 0.3s ease-out',
                maxHeight: '500px',
              }}
            >
              {/* Chat Header */}
              <div className="bg-linear-to-r from-red-600 to-red-700 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <div className="scale-[0.25] mt-1">
                      <AnimatedBot />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Asistente de Seguridad</h3>
                    <p className="text-red-100 text-xs flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      disponible - {areaName ?? 'General'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleChat}
                  className="text-white hover:bg-red-800 rounded-full p-1 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-4 max-h-80 overflow-y-auto bg-gray-50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-red-600 text-white'
                          : 'bg-white text-gray-800 shadow-md'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-xs px-4 py-3 rounded-2xl bg-white text-gray-800 shadow-md">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    disabled={isLoading}
                    placeholder="Pregunta sobre seguridad industrial..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
