# Arquitectura del Proyecto

Este proyecto utiliza Next.js 16 con App Router y una arquitectura modular y escalable.

## 📁 Estructura de Carpetas

```
protocol/
├── src/                          # Código fuente principal
│   ├── app/                     # App Router de Next.js
│   │   ├── (main)/             # Grupo de rutas principal
│   │   │   ├── about/          # Página Acerca de
│   │   │   ├── catalog/        # Página de Catálogo
│   │   │   ├── my-loans/       # Página de Préstamos
│   │   │   ├── search/         # Página de Búsqueda
│   │   │   └── wishlist/       # Página de Lista de Deseos
│   │   ├── layout.tsx          # Layout raíz
│   │   ├── page.tsx            # Página principal (Dashboard)
│   │   ├── loading.tsx         # UI de carga
│   │   ├── actions.ts          # Server Actions
│   │   └── globals.css         # Estilos globales
│   │
│   ├── components/             # Componentes reutilizables
│   │   └── Dashboard.tsx       # Componente principal del dashboard
│   │
│   ├── hooks/                  # Custom React Hooks
│   │   └── useFetch.tsx        # Hook para fetch de datos
│   │
│   ├── lib/                    # Funciones de utilidad
│   │   └── utils.ts            # Utilidades generales
│   │
│   ├── services/               # Servicios y APIs
│   │   └── api.ts              # Configuración de API
│   │
│   ├── types/                  # TypeScript types e interfaces
│   │   └── index.ts            # Tipos principales
│   │
│   └── middleware.ts           # Middleware de Next.js
│
├── public/                     # Archivos estáticos
│   ├── LogoUmss.png           # Logo de la universidad
│   └── Fondo.png              # Imagen de fondo
│
├── tsconfig.json              # Configuración de TypeScript
├── package.json               # Dependencias del proyecto
└── README.md                  # Documentación
```

## 🚀 Características

- **Next.js 16**: Framework React con App Router
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS v4**: Framework CSS utility-first
- **Arquitectura Modular**: Separación clara de responsabilidades
- **Path Aliases**: Imports limpios con `@/`

## 📦 Carpetas Principales

### `/src/app`
Contiene todas las rutas de la aplicación usando el App Router de Next.js. Cada carpeta representa una ruta.

### `/src/components`
Componentes React reutilizables que se utilizan en múltiples páginas.

### `/src/hooks`
Custom React Hooks para lógica compartida y reutilizable.

### `/src/lib`
Funciones de utilidad y helpers que no son componentes React.

### `/src/services`
Servicios para comunicación con APIs y lógica de negocio.

### `/src/types`
Definiciones de tipos TypeScript e interfaces.

## 🔧 Configuración

El proyecto usa path aliases configurados en `tsconfig.json`:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

Esto permite importar así:
```typescript
import { useFetch } from '@/hooks/useFetch';
import { AccidentData } from '@/types';
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Build para producción
pnpm build

# Iniciar en producción
pnpm start

# Lint
pnpm lint
```

## 📝 Notas

- Los componentes de página deben exportar un componente por defecto
- Usa `'use client'` para componentes que necesitan interactividad
- Los Server Actions van en archivos `actions.ts`
- Las rutas API se definen en carpetas `api/` dentro de `app/`
