"use client";

import Image from "next/image";

export default function AnimatedBot() {
  return (
    <div className="relative w-[220px] h-[220px]">
      {/* Sombra animada */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-gradient-to-r from-transparent via-gray-400/50 to-transparent rounded-full blur-sm animate-shadow-pulse" />

      {/* Bot Constructor UMSS - Imagen PNG */}
      <div className="relative animate-float-smooth w-full h-full">
        <Image 
          src="/image-removebg-preview (5).png" 
          alt="UMSS Bot Constructor"
          width={220}
          height={220}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Partículas mágicas - Fuera del bot */}
      <div className="absolute top-3 -left-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-sparkle" />
      <div className="absolute top-8 -right-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-sparkle" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-6 -left-1.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-sparkle" style={{ animationDelay: '0.6s' }} />
      <div className="absolute bottom-10 -right-1.5 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-sparkle" style={{ animationDelay: '0.9s' }} />

      {/* Estilos CSS para las animaciones */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-smooth {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes shadow-pulse {
            0%, 100% { opacity: 0.3; width: 120px; }
            50% { opacity: 0.6; width: 140px; }
          }
          
          @keyframes antenna-glow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-15deg); }
            75% { transform: rotate(15deg); }
          }
          
          @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
          }
          
          .animate-float-smooth {
            animation: float-smooth 3s ease-in-out infinite;
          }
          
          .animate-shadow-pulse {
            animation: shadow-pulse 3s ease-in-out infinite;
          }
          
          .animate-antenna-glow {
            animation: antenna-glow 2s ease-in-out infinite;
          }
          
          .animate-wave {
            transform-origin: center;
            animation: wave 1s ease-in-out infinite;
          }
          
          .animate-sparkle {
            animation: sparkle 2s ease-in-out infinite;
          }
        `
      }} />
    </div>
  );
}
