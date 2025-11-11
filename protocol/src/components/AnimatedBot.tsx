'use client';

export default function AnimatedBot() {
  return (
    <div className="relative w-[150px] h-[210px]">
      {/* Sombra animada */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[8px] bg-gradient-to-r from-transparent via-gray-400/50 to-transparent rounded-full blur-sm animate-shadow-pulse" />

      {/* Bot SVG con animaciones */}
      <div className="relative animate-float-smooth">
        <svg
          width="150"
          height="210"
          viewBox="0 0 404 708"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-lg"
        >
          {/* Brazo izquierdo - Saludando */}
          <path d="M47.7216 412.086C104.031 427.511 117.334 423.191 127.367 438.287C128.522 440.019 134.405 448.873 133.226 460.241C132.287 469.298 127.245 476.285 124.069 479.36C104.779 498.034 51.6995 475.189 21.2979 450.204C14.6706 444.758 -3.10992 430.143 0.471623 419.763C1.93702 415.509 6.49713 413.395 9.76799 411.935C24.2312 405.464 39.2301 409.762 47.7216 412.086Z" fill="url(#paint0_linear)" className="animate-wave"/>
          
          <path d="M221.575 99.2413H209.593V20.594H221.575V99.2413Z" fill="url(#paint1_linear)"/>
          
          <path d="M256.971 142.686H174.199C168.095 142.686 163.148 137.739 163.148 131.636V102.054C163.148 95.9498 168.095 91.0032 174.199 91.0032H256.971C263.072 91.0032 268.021 95.9498 268.021 102.054V131.636C268.021 137.739 263.072 142.686 256.971 142.686Z" fill="url(#paint2_linear)"/>
          
          {/* Cabeza */}
          <path d="M316.703 401.1H114.465C66.8849 401.1 27.9526 362.168 27.9526 314.588V269.645C27.9526 184.987 97.2203 115.721 181.878 115.721H249.289C333.95 115.721 403.215 184.987 403.215 269.645V314.588C403.215 362.366 364.481 401.1 316.703 401.1ZM215.585 197.295C196.32 197.295 177.783 197.813 160.039 198.738C113.597 201.153 75.7091 233.313 69.938 275.144L69.8132 276.045C68.1105 288.394 74.9164 300.433 86.9772 306.395C91.8872 308.822 97.3916 310.094 102.987 310.094H328.181C333.776 310.094 339.278 308.822 344.191 306.395C356.251 300.433 363.057 288.394 361.355 276.042C361.313 275.741 361.271 275.44 361.23 275.137C355.439 233.149 317.273 201.116 270.651 198.711C254.967 197.904 238.679 197.41 221.828 197.312C219.737 197.3 217.66 197.295 215.585 197.295Z" fill="url(#paint3_linear)"/>
          
          {/* Ojo izquierdo */}
          <g>
            <circle cx="156.233" cy="258.41" r="43" fill="#EEFDFF"/>
            <circle cx="156.233" cy="258.412" r="38" fill="url(#paint5_linear)"/>
            <circle cx="163.148" cy="251.775" r="9.5" fill="#EEFDFF"/>
            <circle cx="152.447" cy="278.044" r="3.8" fill="#EEFDFF"/>
            <circle cx="141.172" cy="272.367" r="1.9" fill="#EEFDFF"/>
          </g>
          
          {/* Ojo derecho */}
          <g>
            <circle cx="270.95" cy="258.41" r="43" fill="#EEFDFF"/>
            <circle cx="270.949" cy="258.412" r="38" fill="url(#paint6_linear)"/>
            <circle cx="277.865" cy="251.775" r="9.5" fill="#EEFDFF"/>
            <circle cx="267.164" cy="278.044" r="3.8" fill="#EEFDFF"/>
            <circle cx="255.889" cy="272.367" r="1.9" fill="#EEFDFF"/>
          </g>

          {/* Antena */}
          <circle cx="215.584" cy="15.3562" r="15.3562" fill="url(#paint7_linear)" className="animate-antenna-glow"/>
          <circle cx="221.576" cy="9.35995" r="7" fill="white" className="animate-pulse"/>

          {/* Brazo derecho (detalle blanco) */}
          <path d="M347.799 164.955C348.002 172.125 342.15 180.697 335.445 181.431C329.162 182.119 324.145 175.699 318.973 169.077C313.872 162.552 302.717 145.792 307.159 141.051C313.016 134.798 347.32 148.043 347.799 164.955Z" fill="white"/>

          {/* Cuerpo */}
          <path d="M350.084 454.661C350.084 455.178 350.084 455.672 350.062 456.144C349.881 460.863 348.78 464.413 348.242 466.01C332.756 513.309 323.479 538.253 310.467 558.431C308.218 561.915 305.86 565.264 303.321 568.544C299.996 572.926 296.356 577.195 292.309 581.598C283.321 591.374 269.727 595.8 265.345 597.326C249.323 602.992 235.169 601.957 225.752 602.048H224.111C214.675 601.957 200.54 602.992 184.518 597.326C180.136 595.8 166.52 591.374 157.554 581.598C132.835 554.7 123.331 532.342 101.624 466.01C101.108 464.481 100.073 461.179 99.8257 456.751C99.7572 455.471 99.7351 454.187 99.8036 452.907C100.276 444.976 103.488 437.201 109.195 430.102C118.971 417.921 134.071 411.247 149.688 411.179L224.942 410.863L298.827 410.572C314.782 410.506 330.241 417.202 340.376 429.537C345.274 435.516 348.398 441.965 349.543 448.616C349.7 449.561 349.837 450.525 349.925 451.469C350.015 452.526 350.084 453.58 350.084 454.661Z" fill="url(#paint9_linear)"/>

          {/* Texto UMSS BOT en el pecho */}
          <text x="215" y="490" textAnchor="middle" fill="#ff0000" fontFamily="Arial, sans-serif" fontSize="45" fontWeight="900">
            UMSS
          </text>
          <text x="215" y="530" textAnchor="middle" fill="#0B2F45" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="900">
            BOT
          </text>

          {/* Gradientes */}
          <defs>
            <linearGradient id="paint0_linear" x1="79.7696" y1="447.576" x2="298.084" y2="617.266" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06BED8"/>
              <stop offset="1" stopColor="#DEFA8E"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="191.159" y1="63.4796" x2="227.112" y2="58.2364" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06CFF1"/>
              <stop offset="1" stopColor="#DEFA8E"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="181.988" y1="154.774" x2="245.792" y2="82.7368" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06CFF1"/>
              <stop offset="1" stopColor="#DEFA8E"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="89.5753" y1="404.298" x2="342.407" y2="151.466" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06CFF1"/>
              <stop offset="1" stopColor="#DEFA8E"/>
            </linearGradient>
            <linearGradient id="paint5_linear" x1="130.631" y1="258.412" x2="181.831" y2="258.412" gradientUnits="userSpaceOnUse">
              <stop stopColor="#030D14"/>
              <stop offset="1" stopColor="#0B2F45"/>
            </linearGradient>
            <linearGradient id="paint6_linear" x1="245.347" y1="258.412" x2="296.548" y2="258.412" gradientUnits="userSpaceOnUse">
              <stop stopColor="#030D14"/>
              <stop offset="1" stopColor="#0B2F45"/>
            </linearGradient>
            <linearGradient id="paint7_linear" x1="183.26" y1="20.0679" x2="230.84" y2="13.1291" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06CFF1"/>
              <stop offset="1" stopColor="#DEFA8E"/>
            </linearGradient>
            <linearGradient id="paint9_linear" x1="144.911" y1="571.147" x2="338.864" y2="344.66" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06CFF1"/>
              <stop offset="0.5" stopColor="#8EEAB3"/>
              <stop offset="1" stopColor="#DEFA8E"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Partículas mágicas */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-4">
          <div className="magic-particle particle-1"></div>
          <div className="magic-particle particle-2"></div>
          <div className="magic-particle particle-3"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes shadow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.6;
            transform: scaleX(0.8);
          }
        }

        @keyframes antenna-glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(6, 207, 241, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(6, 207, 241, 0.8));
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0px);
            transform-origin: 70px 430px;
          }
          25% {
            transform: translateY(-15px);
            transform-origin: 70px 430px;
          }
          50% {
            transform: translateY(0px);
            transform-origin: 70px 430px;
          }
          75% {
            transform: translateY(-15px);
            transform-origin: 70px 430px;
          }
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
          animation: wave 1s ease-in-out infinite;
        }

        .magic-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #06CFF1, #DEFA8E);
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
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }
      `}} />
    </div>
  );
}
