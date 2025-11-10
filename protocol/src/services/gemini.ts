const API_KEY = process.env.GEMINI_API_KEY || '';

// Prompt especializado en Seguridad Industrial UMSS
const SYSTEM_PROMPT = `Eres un asistente virtual especializado en Seguridad Industrial y Prevención de Riesgos de la Universidad Mayor de San Simón (UMSS).

CONTEXTO:
- Solo puedes responder preguntas relacionadas con seguridad industrial, prevención de riesgos laborales, vestimenta de protección personal (EPP), normas de seguridad y protocolos industriales.
- Si te preguntan algo NO relacionado con estos temas, responde amablemente que solo puedes ayudar con temas de seguridad industrial.

ESTILO DE RESPUESTA:
- Sé breve, claro y amigable (máximo 3-4 oraciones por respuesta)
- Usa lenguaje profesional pero accesible
- Incluye emojis ocasionales (🛡️, ⚠️, 👷, 🦺) para hacer las respuestas más amigables
- Si la pregunta es compleja, sugiere contactar al departamento de seguridad para más detalles

ÁREAS DE CONOCIMIENTO:
1. Vestimenta de seguridad: cascos, guantes, botas, gafas, arneses, etc.
2. Prevención de riesgos: caídas, cortes, exposición a calor, químicos, etc.
3. Normas industriales: protocolos de seguridad, señalización, procedimientos de emergencia
4. Estadísticas y análisis de riesgos por área, turno y tipo de incidente`;

/**
 * Construye el prompt completo con contexto de conversación
 */
function buildPrompt(userMessage: string, conversationHistory: Array<{ role: 'user' | 'bot'; text: string }>): string {
  const context = conversationHistory
    .map((msg) => `${msg.role === 'user' ? 'Usuario' : 'Asistente'}: ${msg.text}`)
    .join('\n');

  return `${SYSTEM_PROMPT}

${context ? `CONVERSACIÓN PREVIA:\n${context}\n` : ''}
NUEVA PREGUNTA DEL USUARIO: ${userMessage}

Responde de manera breve, clara y amigable:`;
}

/**
 * Genera una respuesta usando Google Gemini AI (gemini-2.5-flash)
 */
async function callGeminiAPI(prompt: string): Promise<string> {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`API Error: ${response.status} - ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
}

/**
 * Genera una respuesta del chatbot usando Google Gemini AI
 * @param userMessage - Mensaje del usuario
 * @param conversationHistory - Historial de la conversación (opcional)
 * @returns Respuesta del chatbot
 */
export async function generateChatResponse(
  userMessage: string,
  conversationHistory: Array<{ role: 'user' | 'bot'; text: string }> = []
): Promise<string> {
  try {
    console.log('🚀 Usando gemini-2.5-flash...');
    const prompt = buildPrompt(userMessage, conversationHistory);
    return await callGeminiAPI(prompt);
  } catch (error: unknown) {
    console.error('❌ Error al generar respuesta:', error);
    
    const errorMessage = (error as { message?: string }).message || '';
    
    // Mensaje de error amigable para el usuario
    if (errorMessage.includes('429')) {
      return '😔 Lo siento, el servicio está experimentando mucha demanda en este momento. Por favor, intenta nuevamente en unos minutos.';
    }
    
    if (errorMessage.includes('403')) {
      return '🔧 El servicio de chat no está disponible temporalmente. Por favor, contacta al administrador del sistema.';
    }
    
    // Mensaje de error genérico
    return '😔 Lo siento, el asistente virtual no está disponible en este momento. Por favor, intenta más tarde o contacta al departamento de Seguridad Industrial para asistencia inmediata.';
  }
}

/**
 * Valida si la API key está configurada correctamente
 */
export function isGeminiConfigured(): boolean {
  return !!API_KEY && API_KEY !== 'tu_api_key_aqui';
}
