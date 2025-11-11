// Constantes de la aplicación
export const APP_CONFIG = {
  name: 'Sistema de Seguridad Industrial - UMSS',
  version: '1.0.0',
  description: 'Análisis y Prevención de Riesgos Industriales',
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CATALOG: '/catalog',
  MY_LOANS: '/my-loans',
  SEARCH: '/search',
  WISHLIST: '/wishlist',
};

export const SEVERITY_LEVELS = {
  LEVE: 'leve',
  MODERADO: 'moderado',
  GRAVE: 'grave',
  CRITICO: 'crítico',
} as const;

export const USER_ROLES = {
  TRABAJADOR: 'trabajador',
  SUPERVISOR: 'supervisor',
  ADMINISTRADOR: 'administrador',
} as const;
