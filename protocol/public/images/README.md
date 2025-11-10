# Imágenes del Chatbot

## bot-character.png

Coloca aquí la imagen del personaje del chatbot (similar al GPTuto de la referencia).

La imagen debe tener:
- Fondo transparente (PNG)
- Dimensiones recomendadas: 150x210px
- Estilo: Personaje tipo mascota o robot amigable

Por ahora, el chatbot usa un emoji de robot (🤖) como placeholder.

Para reemplazarlo:
1. Agrega tu imagen en: `public/images/bot-character.png`
2. El componente ya está configurado para usarla automáticamente

## Alternativa

Si prefieres usar un emoji o icono diferente, edita el componente `Chatbot.tsx` y cambia el emoji en la línea que dice:
```jsx
<span className="text-4xl">🤖</span>
```
