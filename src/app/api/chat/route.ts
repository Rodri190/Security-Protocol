import { NextRequest, NextResponse } from 'next/server';
import { generateChatResponse, isGeminiConfigured } from '@/services/gemini';

export async function POST(request: NextRequest) {
  try {
    // Verificar que la API key esté configurada
    if (!isGeminiConfigured()) {
      return NextResponse.json(
        { error: 'API key de Gemini no configurada' },
        { status: 500 }
      );
    }

    // Obtener el mensaje del usuario y el historial
    const body = await request.json();
    const { message, history, area, pageText } = body;

    // Validar que el mensaje no esté vacío
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Mensaje inválido' },
        { status: 400 }
      );
    }

    // Generar respuesta usando Gemini AI
    const response = await generateChatResponse(message, history || [], {
      area: area || null,
      pageText: pageText || null,
    });

    // Retornar la respuesta
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error en /api/chat:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
