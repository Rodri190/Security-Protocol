'use client';

import { useState, useRef, useEffect } from 'react';

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

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
          {/* Chatbot Character */}
          <div
            onClick={toggleChat}
            className="chatbot-container cursor-pointer relative"
            style={{
              width: '150px',
              height: '210px',
              animation: 'slideUp 2s ease-out forwards, float 4s ease-in-out infinite 2s',
            }}
          >
            <div className="chatbot-body relative w-full h-full bg-transparent">
              {/* Character Background */}
              <div
                className="chatbot-background absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center z-10"
                style={{
                  backgroundImage: "url('/images/bot-character.png')",
                }}
              >
                {/* Placeholder character - puedes reemplazar con tu imagen */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-linear-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-4xl">🤖</span>
                  </div>
                </div>
              </div>

              {/* Eyes */}
              <div
                className="eyes-container absolute z-20 flex"
                style={{
                  top: '36%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  gap: '18%',
                }}
              >
                <div id="leftEye" className="eye left"></div>
                <div id="rightEye" className="eye right"></div>
              </div>

              {/* Magic Base */}
              <div
                className="magic-base absolute z-10"
                style={{
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '8px',
                }}
              >
                <div className="magic-particle particle-1"></div>
                <div className="magic-particle particle-2"></div>
                <div className="magic-particle particle-3"></div>
              </div>
            </div>
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
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Asistente de Seguridad</h3>
                    <p className="text-red-100 text-xs flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      disponible
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
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

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

        .eye {
          width: 8px;
          height: 8px;
          background: #1f2937;
          border-radius: 50%;
          position: relative;
        }

        .eye::after {
          content: '';
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          top: 1px;
          left: 1px;
        }

        .magic-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #ef4444, #dc2626);
          border-radius: 50%;
          opacity: 0;
          animation: sparkle 2s ease-in-out infinite;
        }

        .particle-1 {
          left: 20%;
          animation-delay: 0s;
        }

        .particle-2 {
          left: 50%;
          animation-delay: 0.3s;
        }

        .particle-3 {
          left: 80%;
          animation-delay: 0.6s;
        }

        @keyframes sparkle {
          0%, 100% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-15px) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
